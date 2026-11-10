// DRILL ORBIT — game state machine, simulation and rendering
(function () {
  const DI = window.DI;
  const U = DI.U, E = DI.Econ, BS = DI.BS, FX = DI.FX, Art = DI.Art, Icons = DI.Icons;
  const CHUNK = 8; // ground cache chunk size in blocks
  const A = () => DI.Audio;
  const UI = () => DI.UI;
  const SURF = 16; // world units per surface meter
  const DEG = Math.PI / 180;

  const ANGLE_SPEED = 1 / 0.78; // meter sweeps per second
  const POWER_SPEED = 1 / 0.7;

  const Game = {
    // ------------------------------------------------------------ setup
    init(canvas) {
      this.cv = canvas;
      // opaque: every frame paints the full background, so the compositor can skip blending the canvas
      this.ctx = canvas.getContext('2d', { alpha: false });
      this.S = DI.Save.data;
      this.t = 0;
      this.state = 'idle';
      this.stateT = 0;
      this.cam = { x: 0, y: 0, zoom: 1.1, shake: 0, ox: 0, oy: 0 };
      this.lau = { angle: 32 * DEG, recoil: 0, charge: 0, pop: 0 };
      this.drill = { x: 0, y: 0, ang: 0, spin: 0, spinV: 2 };
      this.fastPtr = new Set(); // pointers held down for 2× speed while mining
      this.fastKey = false;
      this.meter = { p: 0, ph: 0, dir: 1, zone: -1, ghost: [], lockT: 0 };
      this.world = null;
      this.run = null;
      this.flash = 0;
      this.flashColor = '#ffffff';
      this.timeScale = 1;
      this.slow = 0;
      this.zoomPunch = 0;
      this.motes = [];
      this.trail = [];
      this.veinQueue = [];
      this.look = Art.look(this.S);
      this.resize();
      // rotation and host resizes don't all fire window resize, notably inside an iframe
      const sync = () => this.syncSize();
      window.addEventListener('resize', sync);
      window.addEventListener('orientationchange', sync);
      if (window.visualViewport) window.visualViewport.addEventListener('resize', sync);
      if (window.ResizeObserver) new ResizeObserver(sync).observe(this.cv);
      this.snapCamera();
      this.last = 0;
      requestAnimationFrame((ts) => this.loop(ts));
    },

    resize() {
      const dpr = DI.Q.dpr();
      if (DI.Q.low) this.noShadows(); else this.restoreShadows();
      const w = this.cv.clientWidth || window.innerWidth, h = this.cv.clientHeight || window.innerHeight;
      this.cv.width = Math.round(w * dpr);
      this.cv.height = Math.round(h * dpr);
      this.W = w; this.H = h; this.dpr = dpr;
      this.portrait = h > w;
      this.base = Math.min(h / 720, w / 560);
      // right edge of the idle side panel when it runs down the left (portrait stretches it across the top)
      const side = document.getElementById('side');
      this.sideRight = side && !this.portrait && side.offsetWidth < w / 2 ? side.offsetLeft + side.offsetWidth : 0;
      // Setting the canvas size wipes it and the loop doesn't draw while paused: repaint now,
      // or the page background shows through until the game resumes.
      if (this.last != null) { try { this.render(); } catch (e) { /* the next frame retries */ } }
    },

    syncSize() {
      const w = this.cv.clientWidth, h = this.cv.clientHeight;
      if (!w || !h || (w === this.W && h === this.H && DI.Q.dpr() === this.dpr)) return;
      const wasPortrait = this.portrait;
      this.resize();
      if (DI.CoinFX.cv) DI.CoinFX.resize();
      if (this.state === 'idle' && wasPortrait !== this.portrait) { this.snapCamera(); this.render(); }
    },

    // canvas shadowBlur is a per-draw gaussian blur: far too slow on mobile GPUs
    noShadows() {
      if (this._noShadows) return;
      this._noShadows = true;
      Object.defineProperty(this.ctx, 'shadowBlur', { get: () => 0, set() {}, configurable: true });
    },
    restoreShadows() {
      if (!this._noShadows) return;
      this._noShadows = false;
      delete this.ctx.shadowBlur;
    },

    // move to a quality rung (DI.Q.LEVELS): resolution, shadows, particles and the CSS animation switch follow it
    setQuality(level) {
      DI.Q.setLevel(level);
      document.body.classList.toggle('lowfx', DI.Q.lite);
      this.motes.length = 0;
      const extra = FX.list.length - DI.Q.particles;
      if (extra > 0) FX.list.splice(0, extra);
      this.resize();
      if (DI.CoinFX.cv) DI.CoinFX.resize();
    },

    get scale() { return this.base * this.cam.zoom; },
    sx(wx) { return (wx - this.cam.x) * this.scale + this.W / 2 + this.cam.ox; },
    sy(wy) { return (wy - this.cam.y) * this.scale + this.H / 2 + this.cam.oy; },

    refreshLook() {
      this.look = Art.look(this.S);
      const golden = this.S.goldenNext || (this.run && this.run.golden && this.state !== 'idle');
      if (golden) this.look.cos = Object.assign({}, this.look.cos, { golden: true });
    },

    // ------------------------------------------------------------ input
    input() {
      A().init();
      if (DI.Platform.paused || DI.Ads.busy || this.upgradeAdPending) return;
      switch (this.state) {
        case 'idle': this.startLaunch(); this.lockAngle(); break;
        case 'angle': if (this.stateT > 0.12) this.lockAngle(); break;
        case 'power': if (this.stateT > 0.12) this.lockPower(); break;
        case 'flight': this.boost(); break;
        case 'cannon': DI.Surface.fireCannon(this); break;
        case 'mining': if (this.run && this.run.goldRain > 0) this.catchGold(); else this.dynamite(); break;
        case 'results': UI().collect(); break;
      }
    },

    startLaunch() {
      if (UI().modalOpen()) return;
      this.setState('angle');
      this.meter.zone = -1;
      this.meter.ghost = [];
      this.meter.lockT = 0;
      this.S.tutorial.launched = true;
      A().play('click');
      UI().setMode('launch');
    },

    gradeColor(g) { return g === 'perfect' ? '#7dff5a' : g === 'good' ? '#ffcf33' : '#ff6a5a'; },
    gradeText(g) { return g === 'perfect' ? 'PERFECT!' : g === 'good' ? 'GOOD' : 'WEAK'; },

    lockAngle() {
      const p = this.meter.p;
      this.meter.angleP = p;
      this.meter.angleDeg = E.angleFromMeter(p);
      this.meter.aGrade = E.angleGrade(p);
      A().play('lock');
      const tip = this.aimTip(this.meter.angleDeg * DEG, 1.05);
      this.lockFeedback(tip.x, tip.y, this.meter.aGrade);
      DI.Analytics.track('angle_selected', { run: this.S.runs + 1, angle_deg: Math.round(this.meter.angleDeg), grade: this.meter.aGrade });
      this.setState('power');
      this.meter.ph = 0;
      this.meter.p = 0;
      this.meter.zone = -1;
      this.meter.ghost = [];
    },

    lockPower() {
      const p = this.meter.p;
      this.meter.powerP = p;
      this.meter.pGrade = E.powerGrade(p);
      A().play('lock');
      const bp = this.powerBarPoint(p);
      this.lockFeedback(bp.x, bp.y, this.meter.pGrade);
      const res = E.launch(this.S.upgrades.dist, this.meter.angleDeg, p, this.meter.aGrade, this.meter.pGrade);
      this.launchRes = res;
      DI.Analytics.track('launch_power_selected', { run: this.S.runs + 1, power: Math.round(p * 100) / 100, grade: this.meter.pGrade,
        angle_grade: this.meter.aGrade, est_distance: Math.round(res.dist) });
      const a = this.meter.aGrade, g = this.meter.pGrade;
      let label = '', col = '#ffcf33';
      if (a === 'perfect' && g === 'perfect') { label = 'PERFECT LAUNCH!'; col = '#7dff5a'; this.S.stats.perfectLaunches++; }
      else if (a !== 'weak' && g !== 'weak') label = 'GREAT LAUNCH!';
      if (label) FX.text(240, -400, label, col, 44, { life: 1.3, vy: -40 });
      this.setState('prelaunch');
      A().play('charge');
    },

    // hit-stop + ring + stamp text where the meter was stopped
    lockFeedback(x, y, grade) {
      const col = this.gradeColor(grade);
      this.hitstop = grade === 'perfect' ? 0.14 : 0.07;
      FX.ring(x, y, grade === 'perfect' ? 90 : 60, col, 0.5, 7);
      FX.text(x, y - 30, this.gradeText(grade), col, grade === 'perfect' ? 40 : 30, { life: 0.9, vy: -70 });
      if (grade === 'perfect') {
        FX.sparks(x, y, 22, col, 0, Math.PI, 0.8);
        this.shake(5);
        this.flash = 0.18; this.flashColor = '#d8ffd0';
      }
      this.meter.lockT = 0.35;
    },

    // ------------------------------------------------------------ aim geometry (in world space)
    aimPivot() { return { x: 0, y: -Art.mount(this.look).pivotH }; },
    aimRadii() { const R0 = Art.mount(this.look).tipDist + 34; return { R0, R1: R0 + 52 }; },
    aimTip(ang, f) {
      const pv = this.aimPivot(), R = this.aimRadii();
      const r = R.R0 + (R.R1 - R.R0) * (f == null ? 0.5 : f);
      return { x: pv.x + Math.cos(ang) * r, y: pv.y - Math.sin(ang) * r };
    },
    powerBar() {
      const ang = (this.meter.angleDeg || 45) * DEG;
      const m = this.launcherGeom(ang);
      const start = 34, len = 250;
      return { ang, x0: m.x + Math.cos(ang) * start, y0: m.y - Math.sin(ang) * start, len };
    },
    powerBarPoint(p) {
      const b = this.powerBar();
      return { x: b.x0 + Math.cos(b.ang) * b.len * p, y: b.y0 - Math.sin(b.ang) * b.len * p };
    },

    // smooth ping-pong: a blend of linear and sine easing so the turnarounds feel soft
    advanceMeter(dt, speed) {
      const m = this.meter;
      m.ph += dt * speed;
      const k = m.ph % 2;
      const tri = k < 1 ? k : 2 - k;
      const p = tri * 0.55 + (0.5 - 0.5 * Math.cos(Math.PI * tri)) * 0.45;
      m.ghost.unshift(m.p);
      if (m.ghost.length > 5) m.ghost.pop();
      m.p = p;
    },

    meterTick(grade) {
      const z = grade === 'perfect' ? 2 : grade === 'good' ? 1 : 0;
      if (this.meter.zone !== -1 && z !== this.meter.zone) A().play('tick');
      this.meter.zone = z;
    },

    setState(s) { this.state = s; this.stateT = 0; },

    // ------------------------------------------------------------ launcher geometry
    // drill tip position when mounted on the stand at the given elevation
    launcherGeom(angle) {
      const M = Art.mount(this.look);
      const c = Math.cos(angle), s = Math.sin(angle);
      return { x: -s * M.axisOff + c * M.tipDist, y: -M.pivotH - c * M.axisOff - s * M.tipDist };
    },
    muzzle() { return this.launcherGeom(this.lau.angle); },

    // ------------------------------------------------------------ fire + flight
    fire() {
      const S = this.S;
      const res = this.launchRes;
      const theta = this.meter.angleDeg * DEG;
      const m = this.launcherGeom(theta);
      const x1 = this.snapX(Math.max(m.x + 60, res.dist * SURF));
      const h = (x1 - m.x) * Math.tan(theta) / 4;
      const T = U.clamp(0.9 + Math.sqrt(res.dist) * 0.11, 1.25, 4.2);
      this.flight = { x0: m.x, y0: m.y, x1, h, T, boosts: E.boosts(S.upgrades.dist), boostT: 0 };
      const ev = DI.currentEvent();
      this.runEvent = ev.event;
      this.runSeed = (Math.random() * 1e9) | 0;

      const durMax = E.durability(S.upgrades.dur);
      this.run = {
        dist: 0, region: null, quality: res.quality, event: ev.event,
        dur: durMax, durMax, P: E.power(S.upgrades.power), cap: E.speedCap(S.upgrades.power), width: E.width(S.upgrades.power),
        row: 0, acc: 0, plunge: 0, depth: 0,
        coins: 0, bd: { blocks: 0, ores: 0, veins: 0, chests: 0, relics: 0, rooms: 0, jackpots: 0, bonus: 0, milestones: 0 },
        items: {}, finds: [], newRes: [], rare: 0, zoneIdx: 0,
        turbo: 0, magnet: 0, star: 0, combo: 0, comboT: 0, bestCombo: 0, events: 0, geyser: null,
        pc: 0, pr: -1, dir: 0, boostsUsed: 0, dynamite: E.blasts(S.upgrades.dur), golden: !!S.goldenNext,
        perfect: this.meter.aGrade === 'perfect' && this.meter.pGrade === 'perfect',
        recordShown: false, startBest: S.best, startPrevBest: S.prevBest, speed: 0, broken: 0, done: false, t0: this.t,
      };
      this.makeWorld(x1);
      S.goldenNext = false; // the Golden Drill is spent on this launch
      this.refreshLook();
      this.trail = [];
      this.lau.recoil = 1;
      this.lau.charge = 0;
      this.shake(11);
      this.zoomPunch = -0.06;
      this.flash = 0.3; this.flashColor = '#fff6d0';
      // muzzle blast: smoke puffs, sparks, shock ring, thruster flame
      FX.dust(0, -4, 16, '#e9dcc0', 0.9, 1.1);
      FX.dust(m.x, m.y, 10, '#ffffff', Math.PI, 0.8);
      FX.sparks(m.x, m.y, 30, '#ffd36b', -theta, 0.5, 1.3);
      FX.ring(m.x, m.y, 110, '#ffffff', 0.4, 9);
      FX.glow(m.x, m.y, 120, '#ffb03a', 0.35);
      A().play('launch');
      A().play('whoosh');
      DI.Platform.message('level_started');
      DI.Platform.message('gameplay_started');
      DI.Platform.event('progression_started', { step_id: DI.curWorld(S).id, step_index: S.world });
      DI.Analytics.first('first_launch', { angle_grade: this.meter.aGrade, power_grade: this.meter.pGrade, est_distance: Math.round(res.dist), golden: this.run.golden });
      this.setState('flight');
      UI().setMode('flight');
    },

    // landing spots snap to the block grid so the shaft lines up with the terrain
    snapX(x) { return Math.max(BS * 4, Math.round(x / BS) * BS); },

    // (re)build the run's underground for a landing column; same seed so a boost keeps the run's luck
    makeWorld(x1) {
      const S = this.S, run = this.run;
      const dist = x1 / SURF;
      const region = E.region(dist);
      const forced = [];
      if (S.runs === 0) forced.push({ row: 5, kind: 'chest' });
      if (S.runs === 1) forced.push({ row: 7, kind: 'relic', item: 'trilobite' });
      if (S.runs === 2) forced.push({ row: 4, kind: 'vein' });
      if (S.runs === 3 && S.stats.jackpots === 0) forced.push({ row: 12, kind: 'jackpot' });
      if (S.runs >= 5 && S.stats.rooms === 0 && S.runs % 2 === 1) forced.push({ row: 14, kind: 'room' });
      if (run.surfForced) forced.push(...run.surfForced); // ore outcrops and sinkholes shape the dig below them
      this.world = new DI.World(this.runSeed, {
        event: this.runEvent ? this.runEvent.id : null, mult: region.mult * DI.curWorld(S).value, forced,
        wh: DI.curWorld(S).hard, wv: DI.curWorld(S).value,
        pity: 1 + S.stats.runsSinceJackpot * 0.2, boost: region.boost,
        have: S.collection, col0: Math.round(x1 / BS),
        wItems: DI.worldItems(DI.curWorld(S).id), goal: DI.curWorld(S).goal,
      });
      this.shaftX = x1;
      run.dist = dist;
      run.region = region;
      run.plunge = E.impactRows(dist);
    },

    // tap during flight: rocket boost that stretches the arc
    boost() {
      const f = this.flight, run = this.run;
      if (!f || f.boosts <= 0 || f.skid) return;
      const u = Math.min(1, this.stateT / f.T);
      if (u > 0.94) return;
      f.boosts--;
      run.boostsUsed++;
      const x = this.drill.x, y = this.drill.y;
      const extraM = Math.max(12, (f.x1 / SURF) * 0.22);
      const x1 = this.snapX(f.x1 + extraM * SURF);
      const remain = f.T * (1 - u);
      this.flight = {
        x0: x, y0: y, x1, h: (x1 - x) * 0.16 + Math.max(0, -y) * 0.05,
        T: remain + 0.5, boosts: f.boosts, boostT: 0.75,
      };
      this.stateT = 0;
      this.makeWorld(x1);
      // punch: freeze-frame, then a huge kick
      this.hitstop = 0.07;
      this.shake(16);
      this.zoomPunch = -0.14;
      this.flash = 0.45; this.flashColor = '#ffb03a';
      this.drill.stretch = 0.55;
      const ang = this.drill.ang, back = ang + Math.PI;
      const ex = x - Math.cos(ang) * 60, ey = y - Math.sin(ang) * 60;
      FX.sparks(ex, ey, 50, '#ffb03a', back, 0.55, 1.8);
      FX.sparks(ex, ey, 20, '#ffffff', back, 0.3, 2.2);
      for (let i = 0; i < 18; i++) {
        const a = back + U.rand(-0.6, 0.6), sp = U.rand(200, 700);
        FX.add({ k: 'dust', x: ex, y: ey, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 0, s: U.rand(10, 22), grow: 30, c: U.pick(['#ffb03a', '#ffe066', '#ff6a2a', '#ffffff']), life: U.rand(0.35, 0.6), drag: 3 });
      }
      FX.dust(ex, ey, 12, '#d8d0c8', Math.PI, 1.2);
      FX.ring(x, y, 200, '#ffffff', 0.35, 12);
      FX.ring(x, y, 280, '#ffb03a', 0.55, 10);
      FX.glow(x, y, 240, '#ff9a2e', 0.5);
      FX.text(x, y - 50, '+' + Math.round(extraM) + ' m', '#ffe066', 44, { life: 1.1, vy: -50 });
      A().play('boost');
      UI().flightBoosts(f.boosts);
    },

    updateFlight(dt) {
      const f = this.flight;
      const u = Math.min(1, this.stateT / f.T);
      const x = f.x0 + (f.x1 - f.x0) * u;
      const y1 = f.y1 || 0;
      const y = f.y0 * (1 - u) + y1 * u - 4 * f.h * u * (1 - u);
      const dx = f.x1 - f.x0, dy = y1 - f.y0 - 4 * f.h * (1 - 2 * u);
      this.drill.x = x; this.drill.y = y;
      this.drill.ang = Math.atan2(dy, dx);
      this.drill.spin += dt * 14;
      this.drill.stretch = U.damp(this.drill.stretch || 0, f.boostT > 0 ? 0.35 : 0.12, f.spring ? 18 : 6, dt);
      if (this.drill.flipT > 0) {
        // the somersault off a bounce (drawn around the middle of the drill, see render)
        this.drill.flipT = Math.max(0, this.drill.flipT - dt);
        const p = 1 - this.drill.flipT / DI.Surface.FLIP;
        this.drill.flip = p * p * (3 - 2 * p) * Math.PI * 2;
      } else this.drill.flip = 0;
      // off a bounce the nose keeps its landing angle until the tail has cleared the ground, then swings onto the path
      const turn = f.spring ? f.leanFrom - this.drill.ang : 0;
      this.drill.lean = Math.atan2(Math.sin(turn), Math.cos(turn)) * (1 - U.clamp(-y / (150 * this.look.size), 0, 1));
      if (f.boostT > 0) {
        f.boostT -= dt;
        const bx = x - Math.cos(this.drill.ang) * 70, by = Math.min(-10, y - Math.sin(this.drill.ang) * 70);
        for (let i = 0; i < 3; i++) {
          const a = this.drill.ang + Math.PI + U.rand(-0.2, 0.2);
          FX.add({ k: 'dust', x: bx, y: by, vx: Math.cos(a) * 420, vy: Math.sin(a) * 420, g: 0, s: 16 * (f.boostT + 0.4), grow: 18, c: U.pick(['#ffb03a', '#ffe066', '#ff6a2a', '#ffffff']), life: 0.4, drag: 2 });
        }
        FX.sparks(bx, by, 2, '#ffe066', this.drill.ang + Math.PI, 0.3, 1.2);
        this.shake(3);
      }
      this.trail.push([x, y]);
      if (this.trail.length > 46) this.trail.shift();
      const col = this.trailColor();
      if (Math.random() < 0.8) FX.trail(x - Math.cos(this.drill.ang) * 50, Math.min(-10, y - Math.sin(this.drill.ang) * 50), col, 6 + this.look.pt * 0.5);
      if (Art.glows(this.look) && Math.random() < 0.5) FX.sparks(x, y, 1, col, this.drill.ang + Math.PI, 0.4, 0.6);
      UI().flight(x / SURF, E.region(x / SURF), f.boosts);
      DI.Surface.fly(this);
      if (this.flight !== f || DI.Surface.touch(this)) return;
      if (u >= 1 && !DI.Surface.land(this)) this.impact();
    },

    trailColor() {
      if (this.S.cosmetics.plasma) return U.pick(['#ff4fd8', '#7d6bff', '#3ff2ff']);
      return Art.trail(this.look);
    },

    impact() {
      const x = this.drill.x;
      this.setState('impact');
      this.hitstop = 0.09;
      this.shake(18);
      this.zoomPunch = 0.16;
      this.drill.stretch = -0.35; // squash on impact
      this.flash = 0.4; this.flashColor = '#ffffff';
      const reg = this.run.region;
      FX.dust(x, -4, 30, '#d8c3a0', 1.25, 1.5);
      FX.chunks(x, -6, [reg.grass, reg.dirt, U.shade(reg.dirt, -0.2)], 32, 1.5);
      FX.ring(x, 0, 200, '#ffffff', 0.5, 12);
      FX.ring(x, 0, 120, '#ffe9a0', 0.35, 8);
      FX.sparks(x, 0, 26, '#ffd36b', -Math.PI / 2, 1.2, 1.3);
      A().play('impact');
      DI.Analytics.first('first_landing', { distance: Math.round(this.run.dist), region: this.run.region.name, boosts_used: this.run.boostsUsed });
      UI().impact(this.run);
    },

    // ------------------------------------------------------------ mining
    startMining() {
      this.setState('mining');
      this.drill.x = this.shaftX;
      A().motorStart();
      UI().setMode('mining');
    },

    // the cell the drill head is working on next (always straight down)
    mineTarget() {
      const run = this.run;
      return { c: run.pc, r: run.pr + 1, dir: 0 };
    },

    // tap while mining: spend a charge on the drill's ability (DI.Abilities: Blast at first, evolving with the drill head)
    dynamite() {
      const run = this.run;
      if (!run || run.dynamite <= 0 || run.pr < 0) return;
      run.dynamite--;
      DI.Abilities.use(this);
      UI().mineBlasts(run.dynamite);
    },

    // tap during Gold Rain: snatch extra coins out of the air (dynamite stays in your pocket)
    catchGold() {
      const run = this.run, z = this.zoneOf(Math.max(0, run.pr));
      const v = this.gain(Math.round(z.value * U.rand(3, 5) * this.world.mult), 'bonus');
      run.caught = (run.caught || 0) + v;
      const x = this.drill.x + U.rand(-50, 50), y = this.drill.y - 90;
      FX.text(x, y, '+' + U.fmt(v), '#ffe066', 24, { life: 0.8, vy: -80 });
      FX.sparks(x, y, 8, '#ffe066', 0, Math.PI, 0.8);
      this.coinBurst(x, y, 2);
      A().play('coin');
    },

    moveTo(c, r) {
      const run = this.run;
      run.pc = c;
      run.pr = r;
      run.row = Math.max(run.row, r + 1);
    },

    updateDrillRecoil(dt) {
      const d = this.drill, steps = Math.max(1, Math.ceil(dt * 120)), step = dt / steps;
      for (let i = 0; i < steps; i++) {
        d.kickV = (d.kickV || 0) + (-(d.kick || 0) * 290 - (d.kickV || 0) * 18) * step;
        d.kick = U.clamp((d.kick || 0) + d.kickV * step, -5, 18);
      }
    },

    updateMining(dt) {
      const run = this.run, w = this.world;
      run.comboPulse = Math.max(0, (run.comboPulse || 0) - dt * 4);
      // timed power-ups + combo window
      run.turbo = Math.max(0, run.turbo - dt);
      run.magnet = Math.max(0, run.magnet - dt);
      run.star = Math.max(0, run.star - dt);
      if (run.comboT > 0) { run.comboT -= dt; if (run.comboT <= 0) run.combo = 0; }
      const P = run.P * (run.turbo > 0 ? 3 : 1);
      const capN = run.cap * (run.turbo > 0 ? 1.8 : 1);

      run.acc += dt;
      let moved = 0;
      let tg = this.mineTarget();
      for (let it = 0; it < 40; it++) {
        tg = this.mineTarget();
        const cell = w.at(tg.c, tg.r);
        if (cell.air || cell.broken) {
          // moving through open space: rooms are slow (reveal), lakes sink, caves / tunnels are fast
          let need = 1 / 16;
          if (cell.warp) need = 1 / 45;
          else if (cell.broken) need = tg.dir ? 1 / 12 : 1 / 30;
          else if (cell.room != null) need = 0.3;
          else if (cell.cave != null && w.caves[cell.cave].lake) need = 0.16;
          if (run.acc < need) break;
          run.acc -= need;
          if (cell.air) this.enterAir(cell, tg.r);
          this.moveTo(tg.c, tg.r);
          moved++;
          continue;
        }
        const plunging = run.plunge > 0;
        const cap = plunging ? 28 : capN;
        const tBreak = plunging ? 0 : cell.hp / P;
        const tMin = Math.max(0, 1 / cap - cell.el);
        const need = Math.max(tBreak, tMin);
        if (run.acc >= need) {
          run.acc -= need;
          this.breakCell(cell, tg.c, tg.r);
          if (this.world !== w) return; // broke through into a new world
          this.breakAround(tg.c, tg.r, tg.dir);
          if (run.magnet > 0) this.magnetPull(tg.c, tg.r);
          this.moveTo(tg.c, tg.r);
          moved++;
          if (plunging) run.plunge--;
        } else {
          if (!plunging) cell.hp -= P * run.acc;
          cell.el += run.acc;
          run.acc = 0;
          break;
        }
      }
      run.speed = U.damp(run.speed, moved / Math.max(dt, 1e-4), 4, dt);
      tg = this.mineTarget();
      run.dir = tg.dir;

      // durability drains only while actually grinding rock (free through caves, lakes, rooms, warps)
      const cur = w.at(tg.c, tg.r);
      const solid = cur && !cur.air && !cur.broken;
      if (run.plunge <= 0 && solid) {
        const strain = cur.max > P ? 1.5 : 1;
        run.dur -= dt * strain;
      }

      // drill head sits against the face of the target cell, turned toward it
      const frac = solid ? U.clamp(1 - cur.hp / cur.max, 0, 1) : 0;
      const push = frac * BS * 0.3 + 2;
      const cx = this.shaftX + tg.c * BS;
      let tx, ty, ta;
      if (tg.dir === 0) { tx = cx; ty = tg.r * BS + push; ta = Math.PI / 2; }
      else { tx = cx - tg.dir * (BS / 2 - push); ty = tg.r * BS + BS / 2; ta = tg.dir > 0 ? 0 : Math.PI; }
      const inLake = cur && cur.cave != null && w.caves[cur.cave].lake;
      const rate = cur && cur.air ? (inLake ? 6 : 10) : 20;
      // A steady grinding vibration builds with resistance rather than random camera noise.
      const resistance = solid ? U.clamp(cur.max / P, .15, 2) : 0;
      const jit = solid ? (run.turbo > 0 ? 1.5 : .55 + resistance * .45) : 0;
      this.drill.x = U.damp(this.drill.x, tx, rate, dt) + U.rand(-jit, jit) * (tg.dir ? 0 : 1);
      this.drill.y = U.damp(this.drill.y, ty, rate, dt) + U.rand(-jit, jit) * (tg.dir ? 1 : 0);
      this.drill.ang = U.damp(this.drill.ang, ta, 14, dt);
      this.drill.stretch = U.damp(this.drill.stretch || 0, 0, 14, dt);
      this.updateDrillRecoil(dt);
      this.drill.spin += dt * (10 + Math.min(run.speed, 30) * 0.8 + (run.turbo > 0 ? 20 : 0));
      A().motorSet(Math.min(run.speed, 30) + (run.turbo > 0 ? 10 : 0) + (this.ff > 1 ? 12 : 0), solid);

      // depth from the drill's row (sideways tunnels keep the depth)
      const fr = Math.max(0, (tg.dir ? tg.r * BS + BS / 2 : this.drill.y) / BS);
      const r0 = Math.floor(fr);
      const z = E.zoneAtRow(r0);
      run.depth = Math.max(run.depth, E.depthAtRow(r0) + (fr - r0) * z.blockM);

      const hx = this.drill.x + Math.cos(this.drill.ang) * 8, hy = this.drill.y + Math.sin(this.drill.ang) * 8;
      if (solid) {
        const b = DI.BLOCKS[cur.t];
        run.contactT = (run.contactT || 0) + dt;
        const every = DI.Q.mini ? .2 : .065;
        if (run.contactT >= every) {
          run.contactT %= every;
          FX.shatter(hx, hy, [b.c1, b.c2, b.ore || b.c1], frac > .6 ? 2 : 1, .38 + frac * .3);
          if (b.style !== 'soil') FX.sparks(hx, hy, 2, b.ore || '#ffd08a', -Math.PI / 2, .95, .25 + frac * .25);
        }
      } else run.contactT = 0;
      // power-up visuals
      if (run.turbo > 0) {
        FX.sparks(this.drill.x + U.rand(-30, 30), this.drill.y - 40, 2, '#3ff2ff', -Math.PI / 2, 0.15, 1.2);
        if (Math.random() < 0.5) FX.trail(this.drill.x - Math.cos(this.drill.ang) * 70, this.drill.y - Math.sin(this.drill.ang) * 70, '#3ff2ff', 10);
      }
      if (run.magnet > 0 && Math.random() < 0.4) {
        const a = Math.random() * Math.PI * 2;
        FX.add({ k: 'spark', x: this.drill.x + Math.cos(a) * 160, y: this.drill.y + Math.sin(a) * 120, vx: -Math.cos(a) * 420, vy: -Math.sin(a) * 320, g: 0, c: '#ff6b8a', life: 0.35, w: 2.5 });
      }
      if (run.star > 0 && Math.random() < 0.3) FX.sparks(this.drill.x, this.drill.y, 1, '#ffe066', 0, Math.PI, 0.5);
      if (inLake && Math.random() < 0.4) FX.add({ k: 'dust', x: this.drill.x + U.rand(-20, 20), y: this.drill.y, vx: 0, vy: -90, g: -40, s: 3, grow: 2, c: '#bfeaff', life: 0.9 });
      if (run.geyser) {
        const gz = run.geyser;
        gz.t -= dt;
        const gc = gz.cols || ['#1a1622', '#3a2f4a'];
        for (let i = 0; i < 4; i++) FX.add({ k: 'dust', x: gz.x + U.rand(-12, 12), y: gz.y, vx: U.rand(-60, 60), vy: U.rand(-900, -500), g: 900, s: U.rand(5, 10), grow: 6, c: gc[i % 2], life: 0.9 });
        if (gz.t <= 0) run.geyser = null;
      }
      if (run.quakeT > 0) { run.quakeT -= dt; this.shake(7); }
      this.updateEncounters(dt);

      this.checkProgress();
      this.processVeins(dt);

      if (run.dur <= 0 && run.plunge <= 0) this.endRun();
    },

    // ------------------------------------------------------------ world breakthrough
    // The drill punches through the World Crust: the same run carries on into the next planet.
    breakthrough() {
      const S = this.S, run = this.run;
      const from = DI.curWorld(S), next = DI.WORLDS[S.world + 1];
      if (!next || this.breaking) return;
      this.breaking = true;
      const x = this.drill.x, y = this.drill.y;
      // big moment on the old planet
      this.hitstop = 0.22;
      this.shake(20);
      FX.ring(x, y, 420, '#ffffff', 0.7, 16);
      FX.ring(x, y, 300, '#c06bff', 0.9, 12);
      FX.glow(x, y, 500, '#c06bff', 0.8);
      FX.sparks(x, y, 90, '#e0b0ff', 0, Math.PI, 2.2);
      A().play('warp');
      A().play('explode');

      // bank the old planet and step into the new one
      S.bests[S.world] = Math.max(S.best, from.goal);
      const first = S.worldMax < next.index;
      S.worldMax = Math.max(S.worldMax, next.index);
      S.world = next.index;
      S.best = S.bests[next.index] || 0;
      S.prevBest = 0;
      S.newWorld = false;
      (run.newWorlds = run.newWorlds || []).push(next);
      DI.Save.save();

      run.pc = 0; run.pr = -1; run.row = 0; run.depth = 0; run.zoneIdx = 0;
      run.startBest = S.best; run.recordShown = false;
      this.veinQueue = [];
      this._terr = null;
      this.makeWorld(this.shaftX);
      run.plunge = 8; // smash-landing into the new planet's surface
      // the drill bursts out of the portal above the new planet's ground
      this.drill.y = -260;
      this.drill.ang = Math.PI / 2;
      this.drill.stretch = 0.5;
      this.cam.y = this.drill.y;
      this.cam.x = this.drill.x;
      this.zoomPunch = 0.35;
      this.flash = 1.1; this.flashColor = '#ffffff';
      this.slow = 1.3;
      FX.clear();
      FX.ring(this.drill.x, this.drill.y, 360, next.tint || '#c06bff', 1, 14);
      FX.confetti(this.drill.x, this.drill.y, 80);
      setTimeout(() => A().play('zone'), 250);
      UI().refresh();
      UI().worldBanner(next, first);
      if (first) DI.Analytics.track('world_unlocked', { world_unlocked: next.id, world_unlocked_index: next.index, run: S.runs + 1 });
      this.breaking = false;
    },

    // add coins (Coin Star doubles everything)
    gain(v, cat) {
      const run = this.run;
      if (run.star > 0) v *= 2;
      if (run.coinMult) v *= run.coinMult; // landing target
      if (run.golden) v *= 3;
      v *= E.prestigeMult(this.S);
      run.coins += v;
      run.bd[cat] = (run.bd[cat] || 0) + v;
      return v;
    },

    coinBurst(x, y, n) { UI().coinBurstWorld(this.sx(x), this.sy(y), n); },

    breakCell(cell, c, row, half) {
      if (cell.broken) return;
      cell.broken = true;
      if (this.world) this.world.touch(c, row);
      const run = this.run;
      if (!run.drilled) { run.drilled = true; DI.Analytics.first('first_drill', { zone: E.zoneAtRow(row).id, block: cell.t }); }
      let b = DI.BLOCKS[cell.t], lucky = false;
      // Lucky Clover: the next blocks under the drill head can turn into the zone's better ores
      if (run.lucky > 0 && !half && c === run.pc && !cell.sp && cell.t !== 'crust') {
        run.lucky--;
        lucky = true;
        if (!b.res && Math.random() < 0.3) {
          const z = this.zoneOf(row);
          cell.t = U.weighted(Math.random(), z.vein);
          cell.val = DI.BLOCKS[cell.t].value * z.value * this.world.mult;
          b = DI.BLOCKS[cell.t];
        }
      }
      const x = this.shaftX + c * BS, y = row * BS + BS / 2;
      const fast = run.speed > 14;
      const headHit = this.state === 'mining' && !half && c === run.pc && Math.abs(row - (run.pr + 1)) <= 1;
      const color = b.ore || U.shade(b.c1, .3);
      FX.shatter(x, y - BS * .28, [b.c1, b.c2, b.ore || b.c2], headHit ? (fast ? 6 : 10) : 3, b.res ? 1.1 : .85);
      FX.add({ k: 'flash', x, y, vx: 0, vy: 0, g: 0, s: BS, c: color, alpha: .4, life: .09 });
      if (headHit) {
        this.drill.stretch = Math.min(this.drill.stretch || 0, b.res ? -.16 : -.11);
        this.drill.kick = Math.min(7, (this.drill.kick || 0) + (b.res ? 4.5 : 2.8));
        this.drill.kickV = 22;
        FX.dust(x, y - BS * .3, 3, U.shade(b.c1, .2), 1.25, .45);
        if (this.t - (run.lastImpactT ?? -1) > .09) {
          this.shake(b.glow ? 3.8 : b.res ? 2 : .8);
          run.lastImpactT = this.t;
        }
        if (b.res) FX.ring(x, y - BS * .2, b.glow ? 66 : 42, color, .2, 3);
        // A tiny accent for rare finds; normal drilling never repeatedly freezes.
        if (b.glow && this.t - (run.lastRareImpactT ?? -1) > .65) {
          this.hitstop = Math.max(this.hitstop || 0, .035);
          run.lastRareImpactT = this.t;
        }
      }
      let val = cell.val * (half ? E.SIDE_VALUE : 1);
      if (cell.vein != null) {
        val *= 1.5;
        const v = this.world.veins[cell.vein];
        if (v && !v.found) this.veinFound(v, cell.vein);
      }
      if (lucky && b.res) {
        val *= 2;
        FX.sparks(x, y, 10, '#7dff5a', -Math.PI / 2, 1.2, 0.8);
      }
      if (cell.crater != null) {
        val *= 1.5;
        const cr = this.world.craters[cell.crater];
        if (cr && !cr.found) this.craterFound(cr);
      }
      if (cell.mud) this.mudBlock(x, y, row);
      if (cell.seam != null) {
        val *= 1.5;
        const s = this.world.seams[cell.seam];
        if (s && !s.found) this.seamFound(s, cell.seam);
      }
      if (b.res) {
        // ore combo: chaining ores quickly raises their value up to ×2
        run.combo++;
        run.comboPulse = 1;
        run.comboT = 1.0;
        if (run.combo > run.bestCombo) run.bestCombo = run.combo;
        if ([3, 6, 10, 16].includes(run.combo)) {
          A().play('combo', run.combo / 5);
          if (run.combo >= 16) FX.text(this.drill.x - 70, this.drill.y - 20, 'ORE FRENZY!', '#ffe087', 28, { life: .7, vy: -65 });
        }
        val *= this.comboMult();
      }
      if (val > 0) val = this.gain(val, cell.vein != null || cell.seam != null ? 'veins' : b.res ? 'ores' : 'blocks');
      if (b.res) {
        run.items[cell.t] = (run.items[cell.t] || 0) + 1;
        const icon = Icons.resourceIcon(cell.t);
        FX.text(x + 34, y - 10, '+' + U.fmt(val), run.star > 0 ? '#ffe066' : b.glow ? '#fff38a' : '#ffffff', b.glow ? 26 : 21, { img: icon });
        if (b.glow) run.rare++;
        if (b.rarity > 0 && (this.t - (run.lastOreCelebration ?? -1) > .22 || b.rarity > (run.lastOreTier || 0))) {
          FX.rareOre(x, y, icon, b.glow || b.ore, b.rarity, this.drill);
          run.lastOreCelebration = this.t; run.lastOreTier = b.rarity;
        }
        A().play(b.rarity > 0 ? 'rareFind' : b.style === 'gem' ? 'gem' : 'ore', Math.min(12, Math.floor(b.value / 6)));
        // a steady trickle of coins flies into the counter as ores are mined
        if (this.t - (this.lastMiniCoin || 0) > 0.09) {
          this.lastMiniCoin = this.t;
          UI().coinBurstWorld(this.sx(x), this.sy(y), 1, 0.7);
        }
        if (!this.S.collection[cell.t]) {
          this.S.collection[cell.t] = 0;
          run.newRes.push(cell.t);
          UI().banner({ at: { x, y }, kind: 'res', title: 'NEW RESOURCE!', sub: b.name, icon: DI.Icons.iconURL('res', cell.t), color: b.ore });
        }
        this.S.collection[cell.t]++;
      } else if (!cell.sp) {
        A().play(b.style === 'soil' ? 'mineDirt' : b.style === 'ice' ? 'mineIce' : 'mine', Math.min(1, b.hard / 3));
      }
      if (cell.sp === 'chest') this.openChest(cell, x, y, row);
      else if (cell.sp === 'relic') this.foundRelic(cell, x, y, row);
      else if (cell.sp === 'jackpot') this.foundJackpot(cell, x, y, row);
      else if (cell.sp === 'critter') this.foundCritter(cell, x, y, row);
      else if (cell.sp === 'crust') this.breakthrough();
      else if (cell.sp) this.special(cell.sp, x, y, row, cell);
    },

    comboMult() { return 1 + Math.min(Math.max(0, this.run.combo - 1), 15) * 0.04; },

    // a wide drill also clears the blocks beside the head, perpendicular to its direction
    breakAround(c, r, dir) {
      const half = (this.run.width - 1) / 2;
      for (let k = 1; k <= half; k++) {
        for (const sg of [-1, 1]) {
          const cc = dir ? c : c + sg * k, rr = dir ? r + sg * k : r;
          if (rr < 0) continue;
          const cell = this.world.sideCell(cc, rr);
          if (cell && !cell.broken) this.breakCell(cell, cc, rr, true);
        }
      }
    },

    // Ore Magnet: rips ores out of the walls around the drill
    magnetPull(c, r) {
      const R = (this.run.width - 1) / 2 + 3;
      for (let dc = -R; dc <= R; dc++) {
        for (let dr = -2; dr <= 2; dr++) {
          const cc = c + dc, rr = r + dr;
          if (rr < 0 || (!dc && !dr)) continue;
          const cell = this.world.cell(cc, rr);
          if (!cell || cell.broken || cell.air || !DI.BLOCKS[cell.t] || !DI.BLOCKS[cell.t].res) continue;
          const x = this.shaftX + cc * BS, y = rr * BS + BS / 2;
          FX.add({ k: 'spark', x, y, vx: (this.drill.x - x) * 4, vy: (this.drill.y - y) * 4, g: 0, c: '#ff6b8a', life: 0.25, w: 4 });
          this.breakCell(cell, cc, rr, true);
        }
      }
    },

    // ------------------------------------------------------------ special events
    special(kind, x, y, row, cell) {
      const run = this.run, z = this.zoneOf(row), sp = DI.SPECIALS[kind] || {}, m = this.world.mult, S = this.S;
      const spec = (cell && cell.icon) || sp.icon;
      const icon = spec ? Icons.shapeIcon(spec) : null;
      const toast = (title, sub, big) => UI().banner({ at: { x, y }, kind, title, sub, big, color: sp.color, icon: spec ? Icons.iconURL('shape', spec) : null });
      if (icon && !sp.power && kind !== 'quake' && kind !== 'bone') FX.icon(x, y, icon, 64, 1.2);
      run.events++;
      switch (kind) {
        case 'turbo':
          run.turbo = 4;
          FX.ring(x, y, 150, '#3ff2ff', 0.6, 8);
          this.flash = 0.2; this.flashColor = '#bff6ff';
          A().play('powerup');
          break;
        case 'magnet':
          run.magnet = 5;
          FX.ring(x, y, 200, '#ff6b8a', 0.7, 8);
          A().play('powerup');
          break;
        case 'star':
          run.star = 6;
          FX.ring(x, y, 160, '#ffe066', 0.6, 8);
          FX.sparks(x, y, 24, '#ffe066', 0, Math.PI, 1);
          A().play('powerup');
          break;
        case 'bag': {
          const v = this.gain(Math.round(z.value * U.rand(14, 28) * m), 'bonus');
          FX.text(x, y - 46, '+' + U.fmt(v), '#ffe066', 28, { life: 1.3 });
          A().play('chest');
          this.coinBurst(x, y, 8);
          toast('LOST COIN BAG!', '+' + U.fmt(v) + ' coins');
          break;
        }
        case 'tnt': this.explode(x, y, row); break;
        case 'mystery': {
          const k = U.pick(['turbo', 'magnet', 'star', 'bag', 'bag', 'geode']);
          FX.confetti(x, y, 24);
          if (!DI.SPECIALS[k].power) UI().banner({ at: { x, y }, kind, title: 'MYSTERY BOX!', sub: 'It was a ' + DI.SPECIALS[k].name + '!', color: sp.color, icon: Icons.iconURL('shape', sp.icon) });
          this.special(k, x, y, row);
          break;
        }
        case 'geode': {
          const res = z.fill.filter((f) => DI.BLOCKS[f[0]].res).map((f) => f[0]).slice(-3);
          const n = U.randi(4, 7);
          let tot = 0;
          for (let i = 0; i < n; i++) {
            const id = U.pick(res);
            run.items[id] = (run.items[id] || 0) + 1;
            S.collection[id] = (S.collection[id] || 0) + 1;
            tot += DI.BLOCKS[id].value * z.value * m * 1.3;
            FX.add({ k: 'icon', x, y, vx: U.rand(-260, 260), vy: U.rand(-420, -200), g: 700, img: Icons.resourceIcon(id), s: 34, life: 1.1, drag: 1 });
          }
          tot = this.gain(tot, 'bonus');
          run.rare++;
          FX.sparks(x, y, 30, '#d48bff', 0, Math.PI, 1.1);
          FX.glow(x, y, 160, '#d48bff', 0.7);
          A().play('rareFind');
          toast('GEODE CRACKED!', n + ' gems inside · +' + U.fmt(tot));
          break;
        }
        case 'oil': {
          const v = this.gain(Math.round(z.value * U.rand(70, 120) * m), 'bonus');
          run.geyser = { x, y, t: 1.3 };
          this.shake(10);
          A().play('explode');
          this.coinBurst(x, y, 16);
          FX.text(x, y - 60, '+' + U.fmt(v), '#ffe066', 34, { life: 1.5 });
          toast('OIL STRIKE!', 'A gusher! +' + U.fmt(v) + ' coins', true);
          break;
        }
        case 'quake':
          run.plunge += 8;
          run.quakeT = 1.2;
          this.shake(18);
          A().play('quake');
          break;
        case 'portal': {
          const n = U.randi(12, 20);
          const pcol = Math.round((x - this.shaftX) / BS);
          for (let r = row + 1; r <= row + n; r++) {
            const c = this.world.at(pcol, r);
            if (c && !c.air && !c.broken) { c.broken = true; c.warp = true; this.world.touch(pcol, r); }
          }
          this.flash = 0.5; this.flashColor = '#e0b0ff';
          FX.ring(x, y, 220, '#c06bff', 0.8, 10);
          FX.glow(x, y, 240, '#c06bff', 1);
          A().play('warp');
          toast('WARP PORTAL!', 'Zapped ' + Math.round(E.depthAtRow(row + n) - E.depthAtRow(row)) + ' m deeper!', true);
          break;
        }
        case 'gas':
        case 'lava': {
          const loss = run.durMax * (kind === 'gas' ? 0.1 : 0.15);
          run.dur = Math.max(0.4, run.dur - loss);
          const col = kind === 'gas' ? '#9be04a' : '#ff6a1f';
          FX.dust(x, y, 18, col, Math.PI, 1.3);
          if (kind === 'lava') FX.sparks(x, y, 26, '#ffb03a', -Math.PI / 2, 1.2, 1);
          FX.text(x, y - 46, '-' + loss.toFixed(1) + 's', '#ff6a5a', 30, { life: 1.3 });
          this.shake(8);
          this.flash = 0.25; this.flashColor = col;
          A().play('hazard');
          UI().durFlash('bad');
          toast(kind === 'gas' ? 'GAS POCKET!' : 'LAVA POCKET!', 'Ouch! Durability -' + loss.toFixed(1) + 's');
          break;
        }
        case 'goldrain':
          run.goldRain = 3;
          FX.glow(x, y, 220, '#ffcc33', 0.8);
          FX.sparks(x, y, 30, '#ffe066', -Math.PI / 2, 1.2, 1.2);
          A().play('chest');
          UI().centerMsg('GOLD RAIN!', 'TAP fast to catch coins!', '#ffcc33');
          break;
        case 'junk': {
          const car = cell && cell.icon && cell.icon.startsWith('car');
          const v = this.gain(Math.round(z.value * U.rand(6, 12) * m), 'bonus');
          FX.chunks(x, y, ['#8a8f98', '#5a3a24', '#c9a77c'], 12, 1.1);
          FX.text(x, y - 46, '+' + U.fmt(v), '#ffffff', 24, { life: 1.2 });
          A().play('hazard');
          if (Math.random() < 0.06) {
            S.keys = (S.keys || 0) + 1;
            FX.glow(x, y, 160, '#ffe066', 1);
            A().play('discover');
            UI().banner({ at: { x, y }, kind: 'key', big: true, title: 'RARE KEY!', sub: 'Opens a door for free', color: '#ffe066', icon: Icons.iconURL('shape', 'wrench|#ffe066') });
          } else toast(car ? 'BURIED CAR!' : 'OLD SKELETON!', 'Junk loot · +' + U.fmt(v));
          break;
        }
        case 'echo': {
          // every crystal / ore on screen rings and pops, nearest first
          const w = this.world, now = this.stateT, pc = Math.round((x - this.shaftX) / BS);
          let n = 0;
          for (let rr = Math.max(0, row - 6); rr <= row + 9; rr++) {
            for (let c = pc - 7; c <= pc + 7; c++) {
              const ec = w.at(c, rr);
              if (!ec || ec.air || ec.broken || !DI.BLOCKS[ec.t] || !DI.BLOCKS[ec.t].res) continue;
              this.veinQueue.push({ c, r: rr, at: now + 0.1 + Math.hypot(c - pc, rr - row) * 0.05, grp: ec.grp });
              n++;
            }
          }
          for (let i = 0; i < 3; i++) FX.ring(x, y, 180 + i * 140, '#e0b0ff', 0.6 + i * 0.25, 6 - i);
          this.flash = 0.3; this.flashColor = '#f0d8ff';
          A().play('vein');
          toast('ECHO CRYSTAL!', n ? n + ' crystals rang out and shattered!' : 'It rang out… nothing nearby');
          break;
        }
        case 'geyser': {
          const metres = U.rand(20, 40);
          const rows = Math.max(2, Math.round(metres / z.blockM));
          const loss = run.durMax * 0.08;
          run.plunge += rows;
          run.dur = Math.max(0.4, run.dur - loss);
          run.geyser = { x, y, t: 1.1, cols: ['#ff6a1f', '#ffcf5a'] };
          this.shake(16);
          this.flash = 0.35; this.flashColor = '#ff9a2e';
          FX.sparks(x, y, 40, '#ffb03a', Math.PI / 2, 1.2, 1.6);
          A().play('explode');
          UI().durFlash('bad');
          toast('MAGMA GEYSER!', 'Blasted ' + Math.round(rows * z.blockM) + ' m deeper · Durability -' + loss.toFixed(1) + 's', true);
          break;
        }
        case 'hive': {
          const w = this.world, pool = [z.critter].concat(w.wItems && w.wItems.critter ? [w.wItems.critter] : []);
          const n = U.randi(5, 8);
          let tot = 0;
          const seen = new Set();
          for (let i = 0; i < n; i++) {
            const id = U.pick(pool);
            tot += z.value * U.rand(10, 18) * m;
            const isNew = this.addItem(id);
            if (!seen.has(id)) { seen.add(id); run.finds.push({ id, isNew }); }
            const a = -Math.PI / 2 + U.rand(-1.4, 1.4);
            FX.add({ k: 'icon', x, y, vx: Math.cos(a) * U.rand(220, 420), vy: Math.sin(a) * U.rand(220, 420), g: 500, img: Icons.itemIcon(id), s: 46, life: 1.3, drag: 0.6 });
          }
          tot = this.gain(Math.round(tot), 'bonus');
          run.rare++;
          FX.glow(x, y, 200, '#86ff5a', 0.9);
          this.coinBurst(x, y, 10);
          A().play('critter');
          toast('ALIEN HIVE!', n + ' critters swarmed out · +' + U.fmt(tot), true);
          break;
        }
        case 'clover':
          run.lucky = 10;
          FX.ring(x, y, 160, '#7dff5a', 0.6, 8);
          FX.sparks(x, y, 24, '#7dff5a', 0, Math.PI, 1);
          A().play('powerup');
          toast('LUCKY CLOVER!', 'Next 10 blocks: ores pay ×2, rock may turn to ore');
          break;
        case 'door': this.openDoor(cell, x, y, row); break;
        case 'bone': this.foundBone(cell, x, y, row); break;
        case 'bedrock': {
          FX.chunks(x, y, ['#3c3b48', '#24232e', '#6a6880'], 18, 1.4);
          this.shake(9);
          A().play('impact');
          toast('BEDROCK SMASHED!', 'Tough slab, rich reward');
          break;
        }
      }
    },

    explode(x, y, row, big) {
      this.shake(big ? 20 : 18);
      this.flash = big ? 0.55 : 0.35; this.flashColor = '#ffb03a';
      FX.ring(x, y, big ? 330 : 240, '#ffb03a', 0.6, 14);
      if (big) FX.ring(x, y, 220, '#ffffff', 0.35, 10);
      FX.glow(x, y, big ? 360 : 280, '#ff7a2a', 0.6);
      FX.sparks(x, y, big ? 70 : 40, '#ffcf5a', 0, Math.PI, big ? 2 : 1.6);
      FX.dust(x, y, big ? 34 : 22, '#4a4048', Math.PI, big ? 1.9 : 1.5);
      FX.chunks(x, y, ['#ff9a3c', '#ffe066', '#5a4a40'], big ? 30 : 0, 1.8);
      A().play('explode');
      if (big) A().play('quake');
      const cc0 = Math.round((x - this.shaftX) / BS);
      const w0 = this.world;
      const rc = big ? 4 : 3, lim = big ? 14 : 7.5;
      for (let rr = Math.max(0, row - 1); rr <= row + (big ? 3 : 2); rr++) {
        for (let c = cc0 - rc; c <= cc0 + rc; c++) {
          const d = (c - cc0) * (c - cc0) + (rr - row - 0.5) * (rr - row - 0.5) * 1.6;
          if (d > lim) continue;
          const cell = this.world.sideCell(c, rr);
          if (cell && !cell.broken) this.breakCell(cell, c, rr);
          if (this.world !== w0) return; // blasted through the World Crust
        }
      }
    },

    foundCritter(cell, x, y, row) {
      const run = this.run, z = this.zoneOf(row);
      const it = DI.ITEMS[cell.item];
      const golden = cell.item === 'golden_mole';
      const reward = this.gain(Math.round(z.value * U.rand(25, 45) * (golden ? 8 : 1) * this.world.mult), 'bonus');
      const isNew = this.addItem(cell.item);
      run.finds.push({ id: cell.item, isNew });
      const dir = Math.random() < 0.5 ? -1 : 1;
      FX.add({ k: 'icon', x, y, vx: dir * 320, vy: -260, g: 600, img: Icons.itemIcon(cell.item), s: 64, life: 1.4 });
      if (golden) { FX.glow(x, y, 180, '#ffcc33', 1); this.coinBurst(x, y, 14); run.rare++; }
      A().play('critter');
      UI().banner({ at: { x, y }, kind: 'critter', title: golden ? 'GOLDEN MOLE!' : it.name.toUpperCase() + '!', sub: '+' + U.fmt(reward), icon: Icons.iconURL('item', cell.item), color: it.c === '#2a3550' ? '#9fe0ff' : it.c, isNew, big: golden });
    },

    veinFound(v, vi) {
      v.found = true;
      const b = DI.BLOCKS[v.t];
      const now = this.stateT;
      UI().banner({ kind: 'vein', title: b.name.toUpperCase() + ' VEIN!', sub: '×1.5', icon: DI.Icons.iconURL('res', v.t), color: b.ore });
      A().play('vein');
      FX.glow(this.shaftX, v.row * BS + BS, 200, b.glow || b.ore, 0.8);
      let i = 0;
      for (const [c, r] of v.cells) {
        if (c === 0) continue;
        this.veinQueue.push({ c, r, at: now + 0.08 + i * 0.06, grp: 'v' + vi });
        i++;
      }
    },

    seamFound(s, si) {
      s.found = true;
      const b = DI.BLOCKS[s.t];
      const now = this.stateT;
      this.run.events++;
      if (s.river) {
        this.flash = 0.35; this.flashColor = '#ffb020';
        FX.glow(this.shaftX, s.row * BS, 360, '#ffb020', 1);
        UI().banner({ kind: 'seam', big: true, title: 'MOLTEN GOLD RIVER!', sub: '×2', icon: DI.Icons.iconURL('res', s.t), color: '#ffb020' });
      } else UI().banner({ kind: 'seam', title: b.name.toUpperCase() + ' SEAM!', icon: DI.Icons.iconURL('res', s.t), color: b.ore });
      A().play('vein');
      for (let c = 1; c <= 9; c++) {
        for (const sc of [-c, c]) this.veinQueue.push({ c: sc, r: s.row, at: now + c * 0.045, grp: 's' + si });
      }
    },

    processVeins() {
      if (!this.veinQueue.length) return;
      const now = this.stateT;
      const keep = [];
      for (const q of this.veinQueue) {
        if (now < q.at) { keep.push(q); continue; }
        const cell = this.world.cell(q.c, q.r);
        if (!cell || cell.broken || cell.grp !== q.grp) continue;
        cell.broken = true;
        this.world.touch(q.c, q.r);
        const b = DI.BLOCKS[cell.t];
        const x = this.shaftX + q.c * BS, y = q.r * BS + BS / 2;
        const val = this.gain(cell.val * 1.5, 'veins');
        this.run.items[cell.t] = (this.run.items[cell.t] || 0) + 1;
        this.S.collection[cell.t] = (this.S.collection[cell.t] || 0) + 1;
        FX.chunks(x, y, [b.c1, b.ore, b.ore], 7, 1);
        FX.glow(x, y, 60, b.glow || b.ore, 0.4);
        FX.text(x, y - 10, '+' + U.fmt(val), '#fff38a', 20);
        A().play('coin');
      }
      this.veinQueue = keep;
    },

    zoneOf(row) { return E.zoneAtRow(row); },

    openChest(cell, x, y, row) {
      const run = this.run, z = this.zoneOf(row);
      const frac = E.zoneFrac(z, E.depthAtRow(row));
      const reward = this.gain(Math.round(z.value * U.rand(22, 45) * (1 + frac) * this.world.mult), 'chests');
      this.S.stats.chests++;
      this.coinBurst(x, y, 10);
      const img = Icons.shapeIcon('chest|' + z.chest.c2);
      FX.icon(x, y, img, 70, 1.3);
      FX.glow(x, y, 120, '#ffe066', 0.7);
      FX.sparks(x, y, 22, '#ffe066', -Math.PI / 2, 1.3, 1);
      A().play('chest');
      let sub = '+' + U.fmt(reward);
      if (Math.random() < 0.15) {
        const id = this.world.pickRelic(z);
        const isNew = this.addItem(id);
        run.finds.push({ id, isNew });
        sub += ' + ' + DI.ITEMS[id].name;
      }
      UI().banner({ at: { x, y }, kind: 'chest', title: z.chest.name.toUpperCase() + '!', sub, icon: Icons.iconURL('shape', 'chest|' + z.chest.c2), color: '#ffcc33' });
    },

    foundRelic(cell, x, y, row) {
      const run = this.run, z = this.zoneOf(row);
      const it = DI.ITEMS[cell.item];
      const reward = this.gain(Math.round(z.value * U.rand(30, 55) * this.world.mult), 'relics');
      run.rare++;
      const isNew = this.addItem(cell.item);
      run.finds.push({ id: cell.item, isNew });
      FX.icon(x, y, Icons.itemIcon(cell.item), 72, 1.5);
      FX.glow(x, y, 130, it.c, 0.8);
      FX.ring(x, y, 110, it.c, 0.6, 6);
      A().play('discover');
      UI().banner({
        at: { x, y }, kind: 'relic', title: (it.cat === 'fossils' ? 'FOSSIL FOUND!' : 'ARTIFACT FOUND!'),
        sub: it.name + ' · +' + U.fmt(reward), icon: Icons.iconURL('item', cell.item), color: it.c, isNew,
      });
    },

    enterAir(cell, row) {
      if (cell.cave != null) return this.enterCave(this.world.caves[cell.cave], row);
      if (cell.room == null) return;
      const room = this.world.rooms[cell.room];
      if (room.opened) return;
      room.opened = true;
      if (room.theme === 'mine') return this.enterMine(room);
      if (room.theme === 'city') return this.enterCity(room);
      const run = this.run, z = room.zone;
      const reward = Math.round(z.value * U.rand(260, 420) * this.world.mult);
      // bonus haul of the zone's best resource
      const resList = z.fill.filter((f) => DI.BLOCKS[f[0]].res);
      const best = resList[resList.length - 1][0];
      const n = 6;
      const resVal = DI.BLOCKS[best].value * z.value * this.world.mult * n;
      run.items[best] = (run.items[best] || 0) + n;
      this.S.collection[best] = (this.S.collection[best] || 0) + n;
      this.gain(reward + resVal, 'rooms');
      run.rare++;
      this.S.stats.rooms++;
      this.coinBurst(this.shaftX, (room.row + 1.5) * BS, 24);
      const isNew = this.addItem(room.item);
      run.finds.push({ id: room.item, isNew });
      const x = this.shaftX, y = (room.row + 1.5) * BS;
      this.slow = 1.1;
      this.zoomPunch = 0.2;
      this.flash = 0.4; this.flashColor = '#ffe9a0';
      FX.glow(x, y, 260, '#ffe066', 1.2);
      FX.confetti(x, y, 50);
      FX.icon(x, y - 20, Icons.itemIcon(room.item), 90, 2);
      A().play('room');
      UI().banner({
        at: { x, y }, kind: 'room', big: true, title: 'SECRET ROOM!',
        sub: DI.ITEMS[room.item].name + ' + ' + n + '× ' + DI.BLOCKS[best].name + ' · +' + U.fmt(reward + resVal),
        icon: Icons.iconURL('item', room.item), color: '#ffcc33', isNew,
      });
    },

    enterCave(cave, row) {
      if (cave.found) return;
      cave.found = true;
      const run = this.run, z = this.zoneOf(row);
      run.events++;
      const free = Math.round(E.depthAtRow(cave.row + cave.rows) - E.depthAtRow(cave.row));
      if (cave.lake) {
        A().play('splash');
        for (let i = 0; i < 16; i++) FX.add({ k: 'dust', x: this.drill.x + U.rand(-40, 40), y: cave.row * BS + 6, vx: U.rand(-160, 160), vy: U.rand(-380, -160), g: 900, s: U.rand(3, 6), grow: 2, c: '#bfeaff', life: 0.8 });
        UI().banner({ kind: 'lake', title: 'UNDERGROUND LAKE!', sub: '+' + free + ' m', color: '#3fb6ff', icon: Icons.iconURL('shape', 'drop|#3fb6ff') });
      } else {
        const v = this.gain(Math.round(z.value * U.rand(8, 16) * this.world.mult), 'bonus');
        A().play('discover');
        UI().banner({ kind: 'cave', title: 'HIDDEN CAVE!', sub: '+' + free + ' m · +' + U.fmt(v), color: '#9fe0ff', icon: Icons.iconURL('shape', 'gem|#9fe0ff') });
      }
    },

    enterMine(room) {
      const run = this.run, z = room.zone, m = this.world.mult;
      run.events++;
      const n = U.randi(8, 14);
      let tot = 0;
      for (let i = 0; i < n; i++) {
        const id = U.weighted(Math.random(), z.vein);
        run.items[id] = (run.items[id] || 0) + 1;
        this.S.collection[id] = (this.S.collection[id] || 0) + 1;
        tot += DI.BLOCKS[id].value * z.value * m;
      }
      tot = this.gain(tot + z.value * 40 * m, 'rooms');
      const x = this.shaftX, y = (room.row + 1) * BS;
      this.slow = 0.7;
      FX.glow(x, y, 200, '#ffb35a', 1);
      FX.sparks(x, y, 24, '#ffcc33', -Math.PI / 2, 1.2, 1);
      this.coinBurst(x, y, 14);
      A().play('chest');
      UI().banner({ at: { x, y }, kind: 'mine', title: 'ABANDONED MINE!', sub: '+' + U.fmt(tot), color: '#ffb35a', icon: Icons.iconURL('shape', 'cart|' + DI.BLOCKS[z.vein[0][0]].ore) });
    },

    // per-frame upkeep for timed encounters: gold rain, door hints / keys, crater embers
    updateEncounters(dt) {
      const run = this.run, w = this.world, S = this.S;
      if (run.goldRain > 0) {
        run.goldRain -= dt;
        run.rainT = (run.rainT || 0) + dt;
        const coin = Icons.shapeIcon('coin|#ffcc33');
        while (run.rainT > 0.06) {
          run.rainT -= 0.06;
          FX.add({ k: 'icon', x: this.drill.x + U.rand(-170, 170), y: this.drill.y - U.rand(260, 420), vx: U.rand(-20, 20), vy: U.rand(150, 300), g: 700, img: coin, s: 26, life: 0.75 });
        }
        if (run.goldRain <= 0 && run.caught) FX.text(this.drill.x, this.drill.y - 120, 'CAUGHT +' + U.fmt(run.caught), '#ffe066', 30, { life: 1.4, vy: -40 });
      }
      for (const d of w.doors) {
        if (d.opened) continue;
        const ahead = d.r - run.pr;
        if (ahead > 7 || ahead < -2) continue;
        const cell = w.cell(d.c, d.r);
        if (!cell || cell.broken) { d.opened = true; continue; }
        if ((S.keys || 0) > 0 && ahead <= 1) {
          S.keys--;
          FX.text(this.shaftX + d.c * BS, d.r * BS, 'KEY USED!', '#ffe066', 26, { life: 1.2 });
          this.breakCell(cell, d.c, d.r);
          continue;
        }
        if (!d.hinted) {
          d.hinted = true;
          UI().banner({ at: { x: this.shaftX + d.c * BS, y: d.r * BS }, kind: 'door', title: 'MYSTERIOUS DOOR!', color: '#c9a0ff', icon: Icons.iconURL('shape', DI.SPECIALS.door.icon),
            sub: (S.keys || 0) > 0 ? 'Your Rare Key will open it' : run.dynamite > 0 ? 'Spend a dynamite as you pass it to open it?' : 'No dynamite left to open it…' });
        }
      }
      for (const cr of w.craters) {
        if (cr.row > run.pr + 9 || cr.row + cr.rows < run.pr - 5 || Math.random() > 0.6) continue;
        const ex = this.shaftX + U.rand(-3.2, 3.2) * BS, ey = (cr.row + U.rand(0, cr.rows)) * BS;
        FX.add({ k: 'spark', x: ex, y: ey, vx: U.rand(-30, 30), vy: -U.rand(90, 220), g: -40, c: Math.random() < 0.5 ? '#ff8a3c' : '#ffcf5a', life: 0.8, w: 3 });
      }
    },

    craterFound(cr) {
      cr.found = true;
      this.run.events++;
      const y = (cr.row + 1) * BS;
      FX.glow(this.shaftX, y, 300, '#ff6a3d', 1);
      FX.sparks(this.shaftX, y, 40, '#ff9a3c', -Math.PI / 2, 1.3, 1.4);
      this.shake(10);
      A().play('rareFind');
      UI().banner({ at: { x: this.shaftX, y }, kind: 'crater', title: 'METEOR CRATER!', sub: '×1.5', color: '#ff6a3d', icon: Icons.iconURL('shape', 'core|#ff6a3d') });
    },

    // soft clay: slow digging, but pottery turns up all the time
    mudBlock(x, y, row) {
      const run = this.run, z = this.zoneOf(row);
      if (this.t - (run.mudT ?? -99) > 8) {
        run.events++;
        UI().banner({ at: { x, y }, kind: 'mud', title: 'MUD POCKET!', color: '#b07a4a', icon: Icons.iconURL('item', 'clay_pot') });
      }
      run.mudT = this.t;
      FX.dust(x, y, 4, '#7a5234', 1.2, 0.6);
      if (Math.random() < 0.22) {
        const v = this.gain(Math.round(z.value * U.rand(4, 8) * this.world.mult), 'bonus');
        FX.add({ k: 'icon', x, y, vx: U.rand(-120, 120), vy: -260, g: 700, img: Icons.itemIcon('clay_pot'), s: 34, life: 0.9 });
        FX.text(x + 30, y - 30, '+' + U.fmt(v), '#ffd2a0', 20, { life: 1 });
        A().play('ore');
      }
    },

    openDoor(cell, x, y, row) {
      const run = this.run, z = this.zoneOf(row), m = this.world.mult;
      const d = this.world.doors[cell.door];
      if (d) d.opened = true;
      run.events++;
      FX.glow(x, y, 220, '#c9a0ff', 1);
      FX.confetti(x, y, 30);
      this.flash = 0.3; this.flashColor = '#e0c8ff';
      A().play('discover');
      const roll = Math.random();
      let sub;
      if (roll < 0.35) {
        const v = this.gain(Math.round(z.value * U.rand(150, 260) * m), 'bonus');
        this.coinBurst(x, y, 18);
        sub = 'A vault of coins! +' + U.fmt(v);
      } else if (roll < 0.6) {
        const id = this.world.pickRelic(z);
        const isNew = this.addItem(id);
        run.finds.push({ id, isNew });
        run.rare++;
        const v = this.gain(Math.round(z.value * U.rand(60, 100) * m), 'relics');
        FX.icon(x, y, Icons.itemIcon(id), 80, 1.6);
        sub = DI.ITEMS[id].name + ' · +' + U.fmt(v);
      } else if (roll < 0.8) {
        run.dynamite += 2;
        UI().mineBlasts(run.dynamite);
        sub = 'A dynamite stash! +2 blasts';
      } else {
        run.star = 8;
        const v = this.gain(Math.round(z.value * U.rand(60, 100) * m), 'bonus');
        sub = 'Coin Star (×2 coins) · +' + U.fmt(v);
      }
      UI().banner({ at: { x, y }, kind: 'door', big: true, title: 'DOOR OPENED!', sub, color: '#c9a0ff', icon: Icons.iconURL('shape', DI.SPECIALS.door.icon) });
    },

    foundBone(cell, x, y, row) {
      const run = this.run, z = this.zoneOf(row), m = this.world.mult;
      const dig = this.world.digs[cell.dig];
      if (!dig || dig.done) return;
      dig.got++;
      const v = this.gain(Math.round(z.value * U.rand(6, 10) * m), 'relics');
      FX.add({ k: 'icon', x, y, vx: U.rand(-80, 80), vy: -220, g: 500, img: Icons.shapeIcon('bone|#f4ecd8'), s: 40, life: 0.9 });
      FX.text(x + 30, y - 34, dig.got + '/' + dig.total, '#f4ecd8', 20, { life: 1.1 });
      A().play('ore');
      if (dig.got === 1) {
        run.events++;
        UI().banner({ at: { x, y }, kind: 'dig', title: 'DINOSAUR DIG SITE!', sub: 'Break all ' + dig.total + ' bones', color: '#efe4cc', icon: Icons.iconURL('shape', 'skull|#efe4cc') });
      }
      if (dig.got < dig.total) return;
      dig.done = true;
      const reward = this.gain(Math.round(z.value * U.rand(300, 450) * m), 'relics');
      const isNew = this.addItem(dig.item);
      run.finds.push({ id: dig.item, isNew });
      run.rare++;
      const cy = (dig.row + 2) * BS;
      this.slow = 1;
      this.zoomPunch = 0.2;
      FX.glow(this.shaftX, cy, 280, '#ffe9a0', 1.2);
      FX.confetti(this.shaftX, cy, 60);
      FX.icon(this.shaftX, cy, Icons.itemIcon(dig.item), 100, 2);
      this.coinBurst(this.shaftX, cy, 24);
      A().play('room');
      UI().banner({ at: { x: this.shaftX, y: cy }, kind: 'dig', big: true, title: 'SKELETON COMPLETE!', sub: DI.ITEMS[dig.item].name + ' · +' + U.fmt(reward), color: '#ffcc33', icon: Icons.iconURL('item', dig.item), isNew });
    },

    enterCity(room) {
      const run = this.run, z = room.zone, m = this.world.mult;
      run.events++;
      run.rare++;
      const frac = E.zoneFrac(z, E.depthAtRow(room.row));
      let tot = 0;
      const extras = [];
      for (let i = 0; i < room.chests; i++) {
        tot += z.value * U.rand(30, 55) * (1 + frac) * m;
        if (Math.random() < 0.3) extras.push(this.world.pickRelic(z));
        const cx = this.shaftX + (i - (room.chests - 1) / 2) * BS * 1.6, cy = (room.row + room.rows - 1) * BS;
        setTimeout(() => {
          if (this.run !== run) return;
          FX.icon(cx, cy, Icons.shapeIcon('chest|' + z.chest.c2), 64, 1.2);
          FX.sparks(cx, cy, 18, '#ffe066', -Math.PI / 2, 1.2, 1);
          this.coinBurst(cx, cy, 8);
          A().play('chest');
        }, 200 + i * 260);
      }
      tot = this.gain(Math.round(tot + z.value * 200 * m), 'rooms');
      this.S.stats.chests += room.chests;
      this.S.stats.rooms++;
      for (const id of extras.concat(room.item)) {
        const isNew = this.addItem(id);
        run.finds.push({ id, isNew });
      }
      this.slow = 1.3;
      this.zoomPunch = 0.25;
      this.flash = 0.4; this.flashColor = '#ffe9a0';
      FX.glow(this.shaftX, (room.row + 2.5) * BS, 320, '#ffe066', 1.3);
      A().play('room');
      UI().banner({ kind: 'city', big: true, title: 'UNDERGROUND CITY!', sub: '+' + U.fmt(tot), color: '#ffcc33', icon: Icons.iconURL('item', room.item) });
    },

    foundJackpot(cell, x, y, row) {
      const run = this.run, S = this.S, z = this.zoneOf(row);
      const evMult = run.event && run.event.id === 'jackpot_hour' ? 1.5 : 1;
      // a big moment, not a run-breaker: ~half a good run's earnings (jackpots excluded so it can't snowball)
      const reward = this.gain(Math.round(Math.max(z.value * 220 * this.world.wv * U.rand(0.85, 1.15), S.stats.bestRunCoins * 0.45, 120 * this.world.wv) * evMult), 'jackpots');
      run.rare++;
      setTimeout(() => UI().coinBurstWorld(this.W / 2, this.H / 2, 36), 500);
      S.stats.jackpots++;
      S.stats.runsSinceJackpot = 0;
      const isNew = this.addItem(cell.item);
      run.finds.push({ id: cell.item, isNew });
      this.slow = 1.8;
      this.zoomPunch = 0.35;
      this.flash = 0.6; this.flashColor = '#fff3a0';
      this.shake(10);
      FX.glow(x, y, 340, DI.ITEMS[cell.item].c, 1.6);
      FX.confetti(x, y, 90);
      FX.ring(x, y, 260, '#ffe066', 1, 12);
      FX.icon(x, y, Icons.itemIcon(cell.item), 110, 2.2);
      A().play('jackpot');
      UI().jackpot({ id: cell.item, reward, evMult, isNew });
    },

    addItem(id) {
      const isNew = !this.S.collection[id];
      this.S.collection[id] = (this.S.collection[id] || 0) + 1;
      if (isNew) UI().checkCollections();
      return isNew;
    },

    checkProgress() {
      const run = this.run, S = this.S;
      const depth = E.depthAtRow(run.row);
      // milestones
      for (const m of DI.MILESTONES) {
        if (depth < m.m) break;
        if (DI.msDone(S, m)) continue;
        S.milestones[DI.wkey(S, m.m)] = true;
        const mc = m.coins * DI.curWorld(S).value * (run.golden ? 3 : 1);
        run.coins += mc; run.bd.milestones += mc;
        this.coinBurst(this.drill.x, this.drill.y, 10);
        let sub = '+' + U.fmt(mc) + ' coins';
        if (m.cosmetic && !S.world) {
          S.cosmetics[m.cosmetic] = true;
          this.refreshLook();
          sub += ' · Unlocked ' + DI.COSMETICS[m.cosmetic].name + '!';
        }
        A().play('milestone');
        FX.ring(this.drill.x, this.drill.y, 200, '#7dff5a', 0.8, 8);
        UI().banner({ kind: 'milestone', title: U.fmtM(m.m) + ' REACHED!', sub, color: '#7dff5a', icon: DI.Icons.iconURL('shape', 'crown|#ffcc33') });
        DI.Analytics.track('milestone_reached', { milestone: m.m, reward_coins: Math.round(mc), zone: E.zoneAtRow(run.row).id, cosmetic: m.cosmetic || null, run: S.runs + 1 });
        DI.Save.mark();
      }
      // zones
      const z = E.zoneAtRow(run.row);
      if (z.index > run.zoneIdx) {
        run.zoneIdx = z.index;
        const first = !S.zonesSeen[DI.wkey(S, z.id)];
        S.zonesSeen[DI.wkey(S, z.id)] = true;
        this.flash = 0.45; this.flashColor = z.accent;
        this.slow = 0.6;
        A().play('zone');
        UI().zoneBanner(z, first);
        if (first) DI.Analytics.track('zone_unlocked', { zone: z.id, zone_index: z.index, depth: Math.floor(depth), run: S.runs + 1 });
      }
      // personal best
      if (!run.recordShown && run.startBest > 0 && depth > run.startBest) {
        run.recordShown = true;
        FX.confetti(this.drill.x, this.drill.y, 60);
        A().play('record');
        UI().banner({ kind: 'record', big: true, title: 'NEW PERSONAL BEST!', color: '#ffcc33', icon: DI.Icons.iconURL('shape', 'crown|#ffcc33') });
      }
    },

    endRun() {
      this.setState('ending');
      A().motorStop();
      A().play('end');
      FX.dust(this.drill.x, this.drill.y - 20, 14, '#666666', Math.PI, 0.8);
      FX.sparks(this.drill.x, this.drill.y, 12, '#ffb03a', -Math.PI / 2, 1, 0.8);
      UI().outOfPower();
    },

    // apply run results to the save (called once)
    finalize() {
      const run = this.run, S = this.S;
      if (!run || run.done) return null;
      run.done = true;
      const total = Math.round(run.coins);
      const depth = Math.floor(Math.max(run.depth, E.depthAtRow(run.row)));
      const isRecord = depth > S.best;
      if (isRecord) { S.prevBest = S.best; S.best = depth; }
      S.bestDist = Math.max(S.bestDist, run.dist);
      S.coins += total;
      S.totalEarned += total;
      S.runs++;
      S.stats.rare += run.rare;
      S.stats.bestRunCoins = Math.max(S.stats.bestRunCoins, total - Math.round(run.bd.jackpots));
      if (!run.bd.jackpots) S.stats.runsSinceJackpot++;
      if (S.spinCooldown > 0) S.spinCooldown--;
      E.idleNote(S, (total - Math.round(run.bd.jackpots || 0)) / (run.golden ? 3 : 1));
      DI.Save.save();
      const unlocked = run.newWorlds && run.newWorlds.length ? run.newWorlds[run.newWorlds.length - 1] : null;
      DI.Leaderboard.submitLocal(S.playerName, DI.Leaderboard.scores(S));
      DI.Leaderboard.submitGlobal(DI.Leaderboard.scores(S));
      return { total, depth, isRecord, prevBest: isRecord ? S.prevBest : S.best, run, unlocked };
    },

    async showResults() {
      const res = this.finalize();
      if (res && res.run) DI.Analytics.runCompleted(res, res.run, this.t - (res.run.t0 || 0));
      this.setState('results');
      DI.Platform.message('level_completed');
      DI.Platform.message('gameplay_stopped');
      DI.Platform.event('progression_completed', { step_id: DI.curWorld(this.S).id, step_index: this.S.world, depth: res.depth });
      // every run end is a natural pause: Bridge decides whether an interstitial actually shows
      try { await DI.Ads.showInterstitial(); }
      finally { UI().results(res); }
    },

    setFast(id, on) { if (on) this.fastPtr.add(id); else this.fastPtr.delete(id); },
    setFastKey(on) { this.fastKey = on; },
    clearFast() { this.fastPtr.clear(); this.fastKey = false; },

    // rewarded ad on the start screen: arm the Golden Drill for the next launch
    async armGolden() {
      if (DI.Platform.paused || !DI.Ads.supported || this.S.goldenNext || this.state !== 'idle') return false;
      const ok = await DI.Ads.showRewarded('golden_drill');
      if (!ok) return false;
      this.S.goldenNext = true;
      DI.Save.save();
      this.refreshLook();
      const m = this.muzzle();
      this.flash = 0.5; this.flashColor = '#ffe066';
      FX.glow(m.x - 40, m.y + 20, 220, '#ffcc33', 1);
      FX.confetti(m.x - 40, m.y, 50);
      FX.sparks(m.x - 40, m.y, 30, '#ffe066', -Math.PI / 2, 1.4, 1);
      this.lau.hop = 0; this.lau.hopV = 10;
      A().play('evolve');
      return true;
    },

    returnToSurface() {
      this.clearFast();
      DI.Abilities.clear();
      DI.Surface.reset();
      this.world = null;
      this.run = null;
      this.refreshLook();
      this.veinQueue = [];
      FX.clear();
      this.trail = [];
      this.lau.recoil = 0;
      this.lau.charge = 0;
      this.drill.ang = 0;
      this.meter = { p: 0, ph: 0, dir: 1, zone: -1, ghost: [], lockT: 0 };
      this.setState('idle');
      this.snapCamera();
      UI().setMode('idle');
    },

    // ------------------------------------------------------------ upgrades
    upgradeAdAvailable(id) {
      const S = this.S;
      if (!DI.Ads.supported || DI.Platform.paused || this.state !== 'idle' || this.upgradeAdPending || DI.Ads.busy || S.runs < S.upgradeAdNextRun) return false;
      const ids = ['dist', 'power', 'dur'];
      const eligible = ids.filter((k) => S.upgrades[k] < DI.MAX_LEVEL && S.coins < E.cost(k, S.upgrades[k]));
      return eligible.length > 0 && id === eligible[S.runs % eligible.length];
    },

    async watchUpgradeAd(id) {
      if (!this.upgradeAdAvailable(id)) return false;
      const level = this.S.upgrades[id];
      this.upgradeAdPending = true;
      try {
        const earned = await DI.Ads.showRewarded('free_upgrade_' + id);
        if (!earned || this.state !== 'idle' || this.S.upgrades[id] !== level) return false;
        this.S.upgradeAdNextRun = this.S.runs + 3;
        return this.buy(id, true);
      } finally {
        this.upgradeAdPending = false;
        UI().refresh();
      }
    },

    buy(id, rewarded = false) {
      const S = this.S;
      if (DI.Platform.paused && !rewarded) return false;
      const L = S.upgrades[id];
      if (L >= DI.MAX_LEVEL) return false;
      const cost = E.cost(id, L);
      if (!rewarded && S.coins < cost) { A().play('error'); return false; }
      const before = Art.look(S);
      if (!rewarded) S.coins -= cost;
      S.upgrades[id]++;
      const upgrade = { upgrade_id: id, level: S.upgrades[id], cost: rewarded ? 0 : cost, rewarded };
      DI.Analytics.track('upgrade_purchased', Object.assign({ coins_left: Math.floor(S.coins) }, upgrade));
      DI.Analytics.first('first_upgrade', upgrade);
      this.refreshLook();
      const after = this.look;
      A().play('upgrade');
      this.lau.pop = 1;
      this.lau.hop = 0; this.lau.hopV = 9;
      const m = this.muzzle();
      FX.sparks(m.x - 30, m.y, 16, DI.UPGRADES[id].color, -Math.PI / 2, 1.4, 0.8);
      FX.ring(m.x - 30, m.y, 80, DI.UPGRADES[id].color, 0.5, 5);
      DI.Save.save();
      let evo = null;
      // some drill head evolutions also bring a new tap ability
      const newAbility = DI.Abilities.of(S);
      const ability = id === 'power' && DI.Abilities.of({ upgrades: { power: L } }) !== newAbility ? ` New ability: ${newAbility.name.toUpperCase()}!` : '';
      if (after.width !== before.width) evo = { kind: 'head', name: Art.HEAD_NAMES[after.pt], sub: `Drill width: ${after.width} blocks!` + (ability || ` Mines ${after.width}× more per row.`) };
      else if (after.pt !== before.pt) evo = { kind: 'head', name: Art.HEAD_NAMES[after.pt], sub: ability.trim() || null };
      else if (after.dt !== before.dt) {
        const n = E.blasts(S.upgrades.dur);
        evo = { kind: 'body', name: Art.BODY_NAMES[after.dt], sub: n > E.blasts(L) ? `+1 dynamite! Now ${n} blasts per dig.` : null };
      } else if (after.lt !== before.lt) {
        const n = E.boosts(S.upgrades.dist);
        evo = { kind: 'launcher', name: Art.LAUNCH_NAMES[after.lt], sub: n > E.boosts(L) ? `+1 rocket boost! Now ${n} boosts per flight.` : null };
      }
      if (evo) {
        A().play('evolve');
        this.flash = 0.5; this.flashColor = '#ffffff';
        FX.confetti(m.x - 30, m.y, 40);
        UI().evolve(evo);
      }
      return true;
    },

    // ------------------------------------------------------------ camera
    idleTarget() {
      // while aiming, frame the launcher + its gauges a little closer and lower
      const aiming = this.state !== 'idle';
      const zoom = aiming ? (this.portrait ? 1.0 : 1.08) : 1.12;
      const sc = this.base * zoom;
      const vw = this.W / sc, vh = this.H / sc;
      // idle: keep the launcher clear of the side panel, which is wide relative to a phone in landscape
      const clear = (this.sideRight + 100 * sc) / this.W;
      const lx = aiming ? (this.portrait ? 0.22 : 0.3) : this.sideRight ? U.clamp(clear, 0.3, 0.6) : 0.3;
      const tiny = this.W < 480 && this.H <= 420; // tall upgrade cards: raise the ground so they don't hide the launcher
      const gy = aiming ? (this.portrait ? 0.7 : 0.78) : tiny ? 0.6 : (this.portrait ? 0.62 : 0.66);
      return { x: (0.5 - lx) * vw - 10, y: -(gy - 0.5) * vh, zoom };
    },
    snapCamera() {
      const t = this.idleTarget();
      this.cam.x = t.x; this.cam.y = t.y; this.cam.zoom = t.zoom;
    },
    shake(a) { this.cam.shake = Math.min(20, Math.max(this.cam.shake, a)); },

    updateCamera(dt) {
      const c = this.cam;
      let tx, ty, tz, rate = 5;
      const s = this.state;
      if (s === 'idle' || s === 'angle' || s === 'power' || s === 'prelaunch') {
        const t = this.idleTarget(); tx = t.x; ty = t.y; tz = t.zoom; rate = 4;
      } else if (s === 'flight') {
        const alt = Math.max(0, -this.drill.y);
        tz = U.clamp(1 - alt / 2600, 0.5, 1);
        const vh = this.H / (this.base * tz);
        const vw = this.W / (this.base * tz);
        tx = this.drill.x + vw * 0.12;
        ty = Math.min(this.drill.y + vh * 0.05, -(0.18) * vh);
        // the faster the flight the harder the camera follows, so long legs don't lose the drill off screen
        const f = this.flight, u = Math.min(1, this.stateT / f.T);
        const speed = Math.hypot((f.x1 - f.x0) / f.T, (4 * f.h * (1 - 2 * u)) / f.T);
        rate = U.clamp(speed / (Math.min(vw, vh) * 0.35), 7, 40);
      } else {
        tz = 1 + this.zoomPunch;
        const vh = this.H / (this.base * tz);
        tx = this.drill.x;
        ty = s === 'cannon' ? -vh * 0.2 : this.drill.y + vh * 0.04; // cannon: keep the barrel below the prompt
        rate = s === 'impact' ? 5 : 7;
      }
      c.zoom = U.damp(c.zoom, tz, 3.5, dt);
      c.x = U.damp(c.x, tx, rate, dt);
      c.y = U.damp(c.y, ty, rate, dt);
      this.zoomPunch = U.damp(this.zoomPunch, 0, 1.5, dt);
      c.shake = U.damp(c.shake, 0, 7, dt);
      if (c.shake > 0.3) {
        c.ox = (Math.random() - 0.5) * c.shake * 2;
        c.oy = (Math.random() - 0.5) * c.shake * 2;
      } else { c.ox = c.oy = 0; }
    },

    // ------------------------------------------------------------ main loop
    loop(ts) {
      const now = ts / 1000;
      const active = !DI.Platform.paused && !UI().modalOpen() && ['power', 'prelaunch', 'flight', 'cannon', 'impact', 'mining', 'ending'].includes(this.state);
      DI.Platform.sampleFrame(now, active);
      DI.Platform.watchdog();
      if (DI.Platform.paused) { this.last = now; requestAnimationFrame((t) => this.loop(t)); return; }
      const dt = this.last ? Math.min(0.05, now - this.last) : 0.016;
      this.last = now;
      if (!document.hidden) DI.Analytics.tick(dt);
      FX.frame(now - (this.prevNow || now)); this.prevNow = now;
      const step = active && DI.Q.sample(dt);
      if (step) this.changedQuality(step);
      try {
        const p = this.perf, t0 = p ? performance.now() : 0;
        this.update(dt);
        const t1 = p ? performance.now() : 0;
        this.render();
        UI().updateCallouts();
        if (p) this.perfFrame(p, now, t0, t1, performance.now());
        this.errFrames = 0;
      } catch (e) {
        console.error(e);
        // an error repeating every frame would leave the game frozen: bank the run and reset to the surface
        if (++this.errFrames >= 20) this.recover(e);
      }
      requestAnimationFrame((t) => this.loop(t));
    },

    // spark burst where an in-world pop-up comes from
    calloutBurst(x, y, color, big) {
      FX.ring(x, y, big ? 170 : 110, color, 0.45, big ? 9 : 6);
      FX.sparks(x, y, DI.Q.mini ? 8 : big ? 26 : 16, color, -Math.PI / 2, Math.PI, big ? 1.2 : 0.9);
      if (!DI.Q.mini) FX.glow(x, y, big ? 200 : 120, color, 0.5);
    },

    // DI.Q.sample moved the device a rung down (lag) or up (headroom): apply it and remember it for next session
    changedQuality(step) {
      this.setQuality(DI.Q.level);
      this.S.settings.qLevel = DI.Q.level;
      DI.Save.mark();
      DI.Analytics.track('quality_changed', { step, level: DI.Q.level, dpr: DI.Q.dpr(), lite: DI.Q.lite, state: this.state });
    },

    // Settings → Show FPS: twice a second, the frame rate, worst frame and where the time went
    perfFrame(p, now, t0, t1, t2) {
      const ft = (now - (p.prev || now)) * 1000;
      p.prev = now;
      p.n++; p.dt += ft; p.max = Math.max(p.max, ft); p.upd += t1 - t0; p.draw += t2 - t1;
      if (t2 - p.t0 < 500) return;
      const n = p.n, Q = DI.Q;
      p.el.textContent = `${Math.round(1000 * n / Math.max(1, p.dt))} fps · worst ${Math.round(p.max)} ms · JS ${(p.upd / n).toFixed(1)}+${(p.draw / n).toFixed(1)} ms · Q${Q.level} ${Q.dpr()}× ${this.cv.width}×${this.cv.height} · fx ${FX.list.length} · ${DI.Audio.webAudio ? 'WebAudio' : 'HTMLAudio'}`;
      Object.assign(p, { n: 0, dt: 0, max: 0, upd: 0, draw: 0, t0: t2 });
    },

    recover(err) {
      this.errFrames = 0;
      DI.Platform.event('game_recovered', { state: this.state, error: String(err && err.message || err).slice(0, 120) });
      const step = (fn) => { try { fn(); } catch (e) { console.error(e); } };
      step(() => this.bankIfRunning());
      step(() => DI.Save.save());
      step(() => A().motorStop());
      step(() => UI().closeAllModals());
      step(() => { document.getElementById('jackpot').classList.add('hidden'); UI().resultsModal = null; });
      this.upgradeAdPending = false;
      this.breaking = false;
      this.hitstop = 0; this.slow = 0; this.flash = 0;
      step(() => this.returnToSurface());
      step(() => UI().refresh());
    },

    update(dt) {
      this.t += dt;
      if (this.hitstop > 0) {
        // brief freeze-frame when a meter is locked: sells the "click"
        this.hitstop -= dt;
        FX.update(dt * 0.25);
        this.updateCamera(dt);
        return;
      }
      if (this.meter.lockT > 0) this.meter.lockT -= dt;
      if (this.slow > 0) { this.slow -= dt; this.timeScale = U.damp(this.timeScale, 0.22, 12, dt); }
      else this.timeScale = U.damp(this.timeScale, 1, 5, dt);
      // hold to fast-forward the mining (same run, half the real time)
      // (only once both dynamite charges are spent — before that, taps throw dynamite)
      this.ff = this.state === 'mining' && this.run && this.run.dynamite <= 0 && (this.fastPtr.size > 0 || this.fastKey) ? 2 : 1;
      const gdt = dt * this.timeScale * this.ff;
      this.stateT += gdt;
      const L = this.lau;
      L.recoil = U.damp(L.recoil, 0, 4, dt);
      L.pop = U.damp(L.pop, 0, 5, dt);
      // upgrade hop: the drill bounces on its stand (damped spring)
      L.hopV = (L.hopV || 0) - (L.hop || 0) * 260 * dt - (L.hopV || 0) * 9 * dt;
      L.hop = Math.max(-0.2, (L.hop || 0) + L.hopV * dt);

      switch (this.state) {
        case 'idle':
          this.advanceMeter(dt, ANGLE_SPEED);
          L.angle = E.angleFromMeter(this.meter.p) * DEG;
          L.charge = U.damp(L.charge, 0, 5, dt);
          this.drill.spin += dt * 1.5;
          break;
        case 'angle': {
          this.advanceMeter(dt, ANGLE_SPEED);
          this.meterTick(E.angleGrade(this.meter.p));
          L.angle = E.angleFromMeter(this.meter.p) * DEG;
          break;
        }
        case 'power': {
          this.advanceMeter(dt, POWER_SPEED);
          this.meterTick(E.powerGrade(this.meter.p));
          L.angle = U.damp(L.angle, this.meter.angleDeg * DEG, 20, dt);
          L.charge = this.meter.p * 0.7;
          this.drill.spin += dt * (2 + this.meter.p * 24);
          if (this.meter.p > 0.85 && Math.random() < 0.3) {
            const m = this.muzzle();
            FX.sparks(m.x, m.y, 1, this.trailColor(), -L.angle, 0.8, 0.4);
          }
          break;
        }
        case 'prelaunch':
          L.charge = U.damp(L.charge, 1, 6, dt);
          this.drill.spin += dt * 30;
          this.shake(2);
          if (Math.random() < 0.5) {
            const m = this.muzzle();
            FX.sparks(m.x, m.y, 1, this.trailColor(), -L.angle, 0.6, 0.5);
          }
          if (this.stateT > 0.55) this.fire();
          break;
        case 'flight':
          this.updateFlight(gdt);
          break;
        case 'cannon':
          DI.Surface.updateCannon(this, gdt);
          break;
        case 'impact':
          this.drill.ang = U.damp(this.drill.ang, Math.PI / 2, 14, gdt);
          this.drill.stretch = U.damp(this.drill.stretch || 0, 0, 10, gdt);
          this.drill.y = U.damp(this.drill.y, 4, 10, gdt);
          this.drill.spin += gdt * 12;
          if (this.stateT > 0.32) this.startMining();
          break;
        case 'mining':
          this.updateMining(gdt);
          DI.Abilities.update(this, gdt);
          break;
        case 'ending':
          this.drill.spin += gdt * Math.max(0, 8 - this.stateT * 7);
          if (Math.random() < 0.3) FX.dust(this.drill.x + U.rand(-10, 10), this.drill.y - 30, 1, '#555555', 0.5, 0.6);
          DI.Abilities.update(this, gdt); // an ability already firing finishes (and pays out) as the drill powers down
          if (this.stateT > 1.3) this.showResults();
          break;
        case 'results':
          break;
      }
      FX.update(gdt);
      this.updateCamera(dt);
      this.updateMotes(dt);
      this.flash = Math.max(0, this.flash - dt * 1.6);
      if (this.run && (this.state === 'mining' || this.state === 'ending')) UI().hud(this.run);
    },

    // ambient zone particles (screen space)
    updateMotes(dt) {
      const under = this.cam.y > 120;
      if (!under || DI.Q.mini) { this.motes.length = 0; return; }
      const z = this.run ? E.zoneAtRow(Math.max(0, Math.floor(this.drill.y / BS))) : DI.ZONES[0];
      while (this.motes.length < 26) {
        this.motes.push({ x: Math.random() * this.W, y: Math.random() * this.H, s: U.rand(1, 3.2), ph: Math.random() * 6, z: z.id });
      }
      for (const m of this.motes) {
        m.ph += dt;
        if (m.z === 'frozen') { m.y += 30 * dt; m.x += Math.sin(m.ph) * 12 * dt; }
        else if (m.z === 'magma') { m.y -= 40 * dt; m.x += Math.sin(m.ph * 2) * 8 * dt; }
        else if (m.z === 'alien') { m.y -= 12 * dt; m.x += Math.cos(m.ph) * 14 * dt; }
        else { m.y += Math.sin(m.ph * 0.7) * 6 * dt; m.x += 6 * dt; }
        if (m.y > this.H + 10 || m.y < -10 || m.x > this.W + 10) { m.y = m.z === 'magma' || m.z === 'alien' ? this.H + 5 : -5; m.x = Math.random() * this.W; m.z = z.id; }
      }
    },

    // ------------------------------------------------------------ rendering
    render() {
      const ctx = this.ctx, W = this.W, H = this.H;
      ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      const sc = this.scale;
      const top = this.cam.y - (H / 2) / sc, bottom = this.cam.y + (H / 2) / sc;
      const left = this.cam.x - (W / 2) / sc, right = this.cam.x + (W / 2) / sc;

      // background
      if (top < 0) this.drawSky(ctx, top);
      else { ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, H); }

      ctx.save();
      ctx.translate(W / 2 + this.cam.ox, H / 2 + this.cam.oy);
      ctx.scale(sc, sc);
      ctx.translate(-this.cam.x, -this.cam.y);

      if (bottom > -40) this.drawGround(ctx, left, right, top, bottom);
      if (top < 40) this.drawSurface(ctx, left, right);

      // launcher
      if (left < 400 && right > -400 && top < 50) {
        const lp = this.lau.pop;
        ctx.save();
        if (lp > 0.01) { ctx.translate(0, 0); ctx.scale(1 + lp * 0.08, 1 + lp * 0.08); }
        const aiming = this.state === 'angle' || this.state === 'power' || this.state === 'prelaunch';
        // the drill rests on the stand until it is fired; it rattles as power builds
        const jit = this.state === 'power' ? this.meter.p * 2.5 : this.state === 'prelaunch' ? 3 : 0;
        Art.drawLauncher(ctx, 0, 0, this.lau.angle, this.look, this.t, {
          recoil: this.lau.recoil, charge: this.lau.charge, drill: this.state === 'idle' || aiming,
          spin: this.drill.spin, jitter: jit, hop: this.lau.hop || 0,
        });
        ctx.restore();
        if (this.state === 'idle' || aiming) this.drawAim(ctx);
      }

      // trail
      if (this.state === 'flight' && this.trail.length > 2) this.drawTrail(ctx);

      // drill in world
      if (this.state !== 'idle' && this.state !== 'angle' && this.state !== 'power' && this.state !== 'prelaunch' && this.state !== 'cannon') {
        const run = this.run;
        if (run && run.magnet > 0) {
          ctx.strokeStyle = U.rgba('#ff6b8a', 0.35 + 0.2 * Math.sin(this.t * 12));
          ctx.lineWidth = 4;
          ctx.beginPath(); ctx.arc(this.drill.x, this.drill.y - 20, 90 + Math.sin(this.t * 8) * 8, 0, Math.PI * 2); ctx.stroke();
        }
        if (run && run.turbo > 0) {
          const g = ctx.createRadialGradient(this.drill.x, this.drill.y, 4, this.drill.x, this.drill.y, 90);
          g.addColorStop(0, 'rgba(120,250,255,0.55)'); g.addColorStop(1, 'rgba(60,240,255,0)');
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(this.drill.x, this.drill.y, 90, 0, Math.PI * 2); ctx.fill();
        }
        if (this.state === 'mining' && run) this.drawDrillContact(ctx);
        // squash & stretch along the drill axis (impacts, block breaks, boosts)
        const d = this.drill, st = d.stretch || 0, kick = d.kick || 0;
        const kx = d.x - Math.cos(d.ang) * kick, ky = d.y - Math.sin(d.ang) * kick;
        ctx.save();
        ctx.translate(kx, ky); ctx.rotate(d.ang); ctx.scale(1 + st, 1 - st * 0.6); ctx.rotate(-d.ang); ctx.translate(-kx, -ky);
        if (this.state === 'flight' && d.lean) { ctx.translate(kx, ky); ctx.rotate(d.lean); ctx.translate(-kx, -ky); }
        if (this.state === 'flight' && d.flip) {
          // d.x, d.y is the tip: turn around the middle of the drill so it tumbles instead of swinging
          const mx = kx - Math.cos(d.ang) * 70, my = ky - Math.sin(d.ang) * 70;
          ctx.translate(mx, my); ctx.rotate(d.flip); ctx.translate(-mx, -my);
        }
        if (this.state === 'flight' && run && run.perfect) this.drawPerfectFire(ctx, kx, ky, d.ang);
        Art.drawDrill(ctx, kx, ky, d.ang, this.look, this.t, d.spin, 1);
        ctx.restore();
        if (this.state === 'flight' && this.flight && this.flight.boosts > 0) {
          const ph = (this.t * 1.6) % 1;
          ctx.strokeStyle = U.rgba('#ffb03a', 0.8 * (1 - ph));
          ctx.lineWidth = 5;
          ctx.beginPath(); ctx.arc(d.x - Math.cos(d.ang) * 50, d.y - Math.sin(d.ang) * 50, 50 + ph * 50, 0, Math.PI * 2); ctx.stroke();
        }
        if (run && run.combo >= 3 && this.state === 'mining') {
          const s = (21 + Math.min(run.combo, 20) * .3) * (1 + (run.comboPulse || 0) * .15);
          ctx.font = `800 ${s | 0}px Fredoka, "Trebuchet MS", sans-serif`;
          ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          const tx = this.drill.x, ty = this.drill.y - 185;
          ctx.lineWidth = 5; ctx.strokeStyle = 'rgba(20,10,30,0.8)';
          const txt = run.combo + ' ORE STREAK';
          ctx.strokeText(txt, tx, ty);
          ctx.fillStyle = U.mixHex('#ffe066', '#ff4f6d', Math.min(1, run.combo / 20));
          ctx.fillText(txt, tx, ty);
          ctx.fillStyle = 'rgba(255,255,255,0.35)';
          ctx.fillRect(tx - 55, ty + s * .6, 110, 4);
          ctx.fillStyle = '#ffe087'; ctx.fillRect(tx - 55, ty + s * .6, 110 * U.clamp(run.comboT, 0, 1), 4);
          ctx.font = '700 14px Fredoka, sans-serif'; ctx.fillStyle = '#fff2c4';
          ctx.fillText('LOOT ×' + this.comboMult().toFixed(2), tx, ty + s * 1.25);
        }
      }

      DI.Abilities.draw(this, ctx);
      FX.draw(ctx);
      ctx.restore();

      if (!DI.Q.mini && this.state === 'flight') this.drawSpeedLines(ctx);
      if (!DI.Q.mini && this.ff > 1 && this.state === 'mining') this.drawFastLines(ctx);

      // underground lighting
      if (bottom > 0 && this.cam.y > -100) this.drawLighting(ctx);
      this.drawMotes(ctx);

      if (this.flash > 0 && !DI.Q.fxOff) {
        ctx.globalAlpha = Math.min(0.85, this.flash);
        ctx.fillStyle = this.flashColor;
        ctx.fillRect(0, 0, W, H);
        ctx.globalAlpha = 1;
      }
    },

    drawSky(ctx, top) {
      const W = this.W, H = this.H;
      const alt = Math.max(0, -this.cam.y);
      const sp = U.clamp(alt / 3800, 0, 1);
      const ev = this.run ? this.run.event : null;
      const g = ctx.createLinearGradient(0, 0, 0, H);
      const WD = DI.curWorld(this.S);
      g.addColorStop(0, U.mixHex(WD.sky[0], '#0a0f33', sp));
      g.addColorStop(0.65, U.mixHex(WD.sky[1], '#2a2f6a', sp));
      g.addColorStop(1, U.mixHex(WD.sky[2], '#4a4f8a', sp));
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      const sc = this.scale;
      const groundY = this.sy(0);

      // stars at high altitude
      if (sp > 0.25) {
        ctx.fillStyle = '#ffffff';
        for (let i = 0; i < 60; i++) {
          const x = (U.hash(i, 1, 9) * W * 1.3 - this.cam.x * 0.02 * sc) % W;
          const y = U.hash(i, 2, 9) * H * 0.8;
          ctx.globalAlpha = (sp - 0.25) * (0.5 + 0.5 * Math.sin(this.t * 2 + i));
          ctx.fillRect((x + W) % W, y, 2, 2);
        }
        ctx.globalAlpha = 1;
      }
      // sun
      const sunX = W * 0.78, sunY = H * 0.2 + (groundY - H * 0.66) * 0.05;
      const sg = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, 120);
      sg.addColorStop(0, 'rgba(255,250,210,1)'); sg.addColorStop(0.3, 'rgba(255,236,150,0.7)'); sg.addColorStop(1, 'rgba(255,236,150,0)');
      ctx.fillStyle = sg; ctx.beginPath(); ctx.arc(sunX, sunY, 120, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff6c8'; ctx.beginPath(); ctx.arc(sunX, sunY, 34, 0, Math.PI * 2); ctx.fill();

      // meteors (event)
      if (ev && ev.id === 'meteor_shower' || (!this.run && DI.currentEvent().event && DI.currentEvent().event.id === 'meteor_shower')) {
        for (let i = 0; i < 4; i++) {
          const ph = (this.t * 0.4 + i * 0.27) % 1;
          const mx = W * (0.2 + U.hash(i, 3, 1) * 0.9) - ph * W * 0.5, my = ph * H * 0.6;
          ctx.strokeStyle = 'rgba(255,140,80,' + (1 - ph) + ')'; ctx.lineWidth = 3;
          ctx.beginPath(); ctx.moveTo(mx, my); ctx.lineTo(mx + 60, my - 40); ctx.stroke();
          ctx.fillStyle = '#ffe0a0'; ctx.beginPath(); ctx.arc(mx, my, 3.5, 0, Math.PI * 2); ctx.fill();
        }
      }

      // clouds
      ctx.fillStyle = 'rgba(255,255,255,0.75)';
      for (let i = 0; i < 7; i++) {
        const period = W + 400;
        const cx = (((U.hash(i, 5, 2) * period - this.cam.x * 0.15 * sc - this.t * 12) % period) + period) % period - 200;
        const cy = H * (0.08 + U.hash(i, 6, 2) * 0.35) + (groundY - H * 0.66) * 0.25;
        const s = 0.6 + U.hash(i, 7, 2) * 0.8;
        this.cloud(ctx, cx, cy, s * Math.max(0.7, sc));
      }

      // far mountains and hills (parallax)
      this.ridge(ctx, groundY, 0.25, 150, 0.9, WD.hills[0], 11, 380);
      this.ridge(ctx, groundY, 0.45, 90, 0.7, WD.hills[1], 23, 260);
      this.ridge(ctx, groundY, 0.65, 50, 0.6, WD.hills[2], 37, 180);
    },

    cloud(ctx, x, y, s) {
      ctx.beginPath();
      ctx.arc(x, y, 26 * s, 0, Math.PI * 2);
      ctx.arc(x + 30 * s, y - 12 * s, 32 * s, 0, Math.PI * 2);
      ctx.arc(x + 64 * s, y, 24 * s, 0, Math.PI * 2);
      ctx.rect(x, y, 64 * s, 22 * s);
      ctx.fill();
    },

    ridge(ctx, groundY, pf, height, amp, color, seed, period) {
      const W = this.W, H = this.H, sc = this.scale;
      const base = H * 0.5 + (groundY - H * 0.5) * pf + 4;
      if (base < -50) return;
      const off = this.cam.x * pf * sc;
      const P = period * sc;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(0, H);
      const start = Math.floor(off / P) - 1;
      for (let i = start; i < start + W / P + 3; i++) {
        const x = i * P - off;
        const h = height * sc * (0.5 + U.hash(i, seed, 3) * amp);
        ctx.lineTo(x, base);
        ctx.quadraticCurveTo(x + P * 0.5, base - h * 2, x + P, base);
      }
      ctx.lineTo(W, H);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = U.shade(color, -0.12);
      ctx.fillRect(0, base, W, H - base);
    },

    drawGround(ctx, left, right, top, bottom) {
      const sx = this.shaftX != null && this.world ? this.shaftX : 0;
      const w = this.world;
      const c0 = Math.floor((left - sx) / BS + 0.5) - 1, c1 = Math.ceil((right - sx) / BS + 0.5) + 1;
      const r0 = Math.max(0, Math.floor(top / BS) - 1), r1 = Math.ceil(bottom / BS) + 1;
      if (w) w.ensure(r1);
      const wtint = DI.curWorld(this.S).tint;
      const tw = w || this.terrainWorld();
      const gc = this.groundCache(tw, sx, wtint);
      if (gc) this.drawChunks(ctx, gc, c0, c1, r0, r1);
      else {
        for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) {
          const cell = w ? w.cell(c, r) : null, x = sx + c * BS - BS / 2, y = r * BS;
          if (this.groundTile(ctx, tw, cell, c, r, x, y, wtint)) this.groundFx(ctx, tw, cell, c, r, x, y);
        }
      }
      this.drawCrack(ctx, w, sx);
      // World Crust: glowing portal band at the goal depth
      if (w && w.crustRow !== Infinity) {
        const cy = w.crustRow * BS;
        if (cy > top - BS * 3 && cy < bottom + BS) {
          const nx = DI.WORLDS[this.S.world + 1];
          const pulse = 0.5 + 0.5 * Math.sin(this.t * 4);
          const g = ctx.createLinearGradient(0, cy - BS * 1.5, 0, cy + BS);
          g.addColorStop(0, 'rgba(192,107,255,0)'); g.addColorStop(0.6, U.rgba('#c06bff', 0.35 + 0.25 * pulse)); g.addColorStop(1, U.rgba('#ffffff', 0.25 * pulse));
          ctx.fillStyle = g; ctx.fillRect(left, cy - BS * 1.5, right - left, BS * 2.5);
          ctx.fillStyle = U.rgba('#e0b0ff', 0.8);
          for (let i = 0; i < 24; i++) {
            const px = left + ((U.hash(i, 1, 4) * (right - left) + this.t * 40 * (i % 2 ? 1 : -1)) % (right - left) + (right - left)) % (right - left);
            const py = cy - ((this.t * 30 + U.hash(i, 2, 4) * 80) % 80);
            ctx.fillRect(px, py, 3, 3);
          }
          if (nx) {
            ctx.font = '800 22px Fredoka, "Trebuchet MS", sans-serif';
            ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
            const txt = '▼  BREAK THROUGH TO ' + nx.name.toUpperCase() + '  ▼';
            ctx.lineWidth = 5; ctx.strokeStyle = 'rgba(20,10,40,0.85)';
            ctx.strokeText(txt, this.drill.x, cy - 24);
            ctx.fillStyle = '#f0d8ff'; ctx.fillText(txt, this.drill.x, cy - 24);
          }
        }
      }
      // zone boundary bands
      for (const z of DI.ZONES) {
        if (!z.index) continue;
        const y = z.startRow * BS;
        if (y > top - 20 && y < bottom + 20) {
          ctx.fillStyle = U.rgba(z.accent, 0.35);
          ctx.fillRect(left, y - 3, right - left, 6);
        }
      }
      if (!w) return;
      // specials (shaft and side loot)
      if (gc) {
        for (const ch of gc.visible) for (const [c, r] of ch.sp.values()) if (c >= c0 && c <= c1 && r >= r0 && r <= r1) this.drawSpecial(ctx, w.cell(c, r), c, r, sx);
      } else for (let r = r0; r <= r1; r++) for (let c = c0; c <= c1; c++) this.drawSpecial(ctx, w.cell(c, r), c, r, sx);
      // secret rooms + abandoned mines
      for (const room of w.rooms) {
        const y0 = room.row * BS, y1 = y0 + room.rows * BS;
        if (y1 < top || y0 > bottom) continue;
        const x0 = sx + room.c0 * BS - BS / 2, x1 = sx + room.c1 * BS + BS / 2;
        if (room.theme === 'mine') { this.drawMine(ctx, room, x0, x1, y0, y1); continue; }
        if (room.theme === 'city') { this.drawCity(ctx, room, x0, x1, y0, y1); continue; }
        const g = ctx.createLinearGradient(0, y0, 0, y1);
        g.addColorStop(0, '#3a2a14'); g.addColorStop(1, '#6b4a1c');
        ctx.fillStyle = g; ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
        // pillars + floor
        ctx.fillStyle = '#c9a76a';
        ctx.fillRect(x0 + 8, y0, 18, y1 - y0); ctx.fillRect(x1 - 26, y0, 18, y1 - y0);
        ctx.fillStyle = '#8f6a2e'; ctx.fillRect(x0, y1 - 14, x1 - x0, 14);
        ctx.strokeStyle = '#e8c97a'; ctx.lineWidth = 4; ctx.strokeRect(x0 + 2, y0 + 2, x1 - x0 - 4, y1 - y0 - 4);
        // torches
        for (const tx of [x0 + 40, x1 - 40]) {
          const fl = 0.7 + 0.3 * Math.sin(this.t * 13 + tx);
          const tg = ctx.createRadialGradient(tx, y0 + 40, 2, tx, y0 + 40, 70);
          tg.addColorStop(0, `rgba(255,200,90,${0.7 * fl})`); tg.addColorStop(1, 'rgba(255,160,60,0)');
          ctx.fillStyle = tg; ctx.beginPath(); ctx.arc(tx, y0 + 40, 70, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = '#ffcf5a'; ctx.beginPath(); ctx.ellipse(tx, y0 + 36, 5, 9 * fl, 0, 0, Math.PI * 2); ctx.fill();
        }
        if (!room.opened) {
          // gold piles + treasure on a pedestal
          ctx.fillStyle = '#ffcc33';
          for (let i = 0; i < 5; i++) {
            const px = x0 + 60 + i * ((x1 - x0 - 120) / 4);
            ctx.beginPath(); ctx.ellipse(px, y1 - 14, 22, 12, 0, Math.PI, 0); ctx.fill();
          }
          ctx.drawImage(Icons.itemIcon(room.item), sx - 40, y1 - 110 + Math.sin(this.t * 2) * 4, 80, 80);
        } else {
          ctx.fillStyle = '#c99a2a';
          for (let i = 0; i < 5; i++) {
            const px = x0 + 60 + i * ((x1 - x0 - 120) / 4);
            ctx.beginPath(); ctx.ellipse(px, y1 - 14, 12, 5, 0, Math.PI, 0); ctx.fill();
          }
        }
      }
      // personal best + next milestone lines
      this.depthLine(ctx, this.run ? this.run.startBest : this.S.best, left, right, '#ffcc33', 'BEST');
      const nm = DI.MILESTONES.find((m) => !DI.msDone(this.S, m));
      if (nm) this.depthLine(ctx, nm.m, left, right, '#7dff5a', 'GOAL');
    },

    drawSpecial(ctx, cell, c, r, sx) {
      if (!cell || cell.broken || !cell.sp) return;
      const x = sx + c * BS, y = r * BS + BS / 2;
      if (cell.sp === 'chest') {
        const z = E.zoneAtRow(r);
        const bob = Math.sin(this.t * 3) * 2;
        ctx.drawImage(Icons.shapeIcon('chest|' + z.chest.c2), x - 26, y - 26 + bob, 52, 52);
      } else if (cell.sp === 'relic') {
        ctx.globalAlpha = 0.85;
        ctx.drawImage(Icons.itemIcon(cell.item), x - 24, y - 24, 48, 48);
        ctx.globalAlpha = 1;
      } else if (cell.sp === 'jackpot') {
        const it = DI.ITEMS[cell.item];
        const p = 0.6 + 0.4 * Math.sin(this.t * 5);
        if (!DI.Q.mini) {
          const g = ctx.createRadialGradient(x, y, 4, x, y, 110);
          g.addColorStop(0, U.rgba(it.c, 0.75 * p)); g.addColorStop(1, U.rgba(it.c, 0));
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 110, 0, Math.PI * 2); ctx.fill();
        }
        ctx.save(); ctx.translate(x, y); ctx.rotate(this.t * 0.6);
        ctx.strokeStyle = U.rgba('#fff6c8', 0.5 * p); ctx.lineWidth = 6;
        for (let i = 0; i < 8; i++) { ctx.rotate(Math.PI / 4); ctx.beginPath(); ctx.moveTo(30, 0); ctx.lineTo(90, 0); ctx.stroke(); }
        ctx.restore();
        ctx.drawImage(Icons.itemIcon(cell.item), x - 40, y - 40, 80, 80);
      } else if (cell.sp === 'critter') {
        // peeks out of its burrow
        const peek = Math.max(0, Math.sin(this.t * 2.2 + r)) * 6;
        ctx.fillStyle = 'rgba(0,0,0,0.45)';
        ctx.beginPath(); ctx.ellipse(x, y + 12, 22, 9, 0, 0, Math.PI * 2); ctx.fill();
        ctx.drawImage(Icons.itemIcon(cell.item), x - 22, y - 26 - peek, 44, 44);
      } else if (cell.sp && DI.SPECIALS[cell.sp] && (cell.icon || DI.SPECIALS[cell.sp].icon)) {
        const sp = DI.SPECIALS[cell.sp];
        const pulse = 0.5 + 0.5 * Math.sin(this.t * 5 + r);
        if (!DI.Q.mini) {
          const g = ctx.createRadialGradient(x, y, 2, x, y, 44);
          g.addColorStop(0, U.rgba(sp.color, sp.hazard ? 0.35 : 0.55 * pulse + 0.15)); g.addColorStop(1, U.rgba(sp.color, 0));
          ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, 44, 0, Math.PI * 2); ctx.fill();
        }
        const s = 44 + pulse * 4;
        ctx.drawImage(Icons.shapeIcon(cell.icon || sp.icon), x - s / 2, y - s / 2, s, s);
      }
    },

    // static look of one ground cell; true when it also has an animated effect (groundFx)
    groundTile(g, tw, cell, c, r, x, y, tint) {
      if (cell && cell.cave != null) return true;
      if (cell && (cell.air || cell.broken)) {
        g.fillStyle = E.zoneAtRow(r).tunnel;
        g.fillRect(x - 0.5, y - 0.5, BS + 1, BS + 1);
        // tunnel wall shading
        g.fillStyle = 'rgba(0,0,0,0.25)';
        g.fillRect(x, y, 6, BS);
        g.fillRect(x + BS - 6, y, 6, BS);
        return !!cell.warp;
      }
      const t = cell ? cell.t : tw.sideType(c, r);
      const v = U.hash(c + tw.col0, r, 99) < 0.5 ? 0 : 1;
      g.drawImage(Icons.blockSprite(t, v, tint), x, y, BS + 0.5, BS + 0.5);
      return !!(DI.BLOCKS[t].glow || (cell && (cell.seam != null || cell.river || cell.crater != null || cell.vein != null)));
    },

    // per-frame effects over a ground cell: caves, warp tunnels, glowing ore, seams, rivers, craters, veins
    groundFx(ctx, tw, cell, c, r, x, y) {
      if (cell && cell.cave != null) { this.drawCaveCell(ctx, tw.caves[cell.cave], c, r, x, y); return; }
      if (cell && (cell.air || cell.broken)) {
        if (!cell.warp) return;
        ctx.fillStyle = U.mixHex(E.zoneAtRow(r).tunnel, '#7a3ac0', 0.45 + 0.15 * Math.sin(this.t * 6 + r));
        ctx.fillRect(x - 0.5, y - 0.5, BS + 1, BS + 1);
        ctx.fillStyle = 'rgba(0,0,0,0.25)';
        ctx.fillRect(x, y, 6, BS);
        ctx.fillRect(x + BS - 6, y, 6, BS);
        return;
      }
      const b = DI.BLOCKS[cell ? cell.t : tw.sideType(c, r)];
      if (b.glow && (c + r + ((this.t * 2) | 0)) % 3 === 0) {
        ctx.globalAlpha = 0.25 + 0.2 * Math.sin(this.t * 4 + c + r);
        ctx.fillStyle = b.glow;
        ctx.fillRect(x + 4, y + 4, BS - 8, BS - 8);
        ctx.globalAlpha = 1;
      }
      if (!cell) return;
      if (cell.seam != null && !tw.seams[cell.seam].found) {
        ctx.globalAlpha = 0.18 + 0.12 * Math.sin(this.t * 5 + c * 0.5);
        ctx.fillStyle = '#fff6c8';
        ctx.fillRect(x, y + BS * 0.35, BS, BS * 0.3);
        ctx.globalAlpha = 1;
      }
      if (cell.river) {
        // molten gold: bright flowing glow
        ctx.globalAlpha = 0.35 + 0.15 * Math.sin(this.t * 3 + c * 0.7);
        ctx.fillStyle = '#ff9a1f';
        ctx.fillRect(x, y, BS, BS);
        ctx.globalAlpha = 1;
      }
      if (cell.crater != null) {
        ctx.globalAlpha = 0.18 + 0.12 * Math.sin(this.t * 4 + c + r);
        ctx.fillStyle = '#ff4a1a';
        ctx.fillRect(x, y, BS, BS);
        ctx.globalAlpha = 1;
      }
      if (cell.vein != null && tw.veins[cell.vein].found === false && r > 0) {
        ctx.globalAlpha = 0.15 + 0.1 * Math.sin(this.t * 6);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(x, y, BS, BS);
        ctx.globalAlpha = 1;
      }
    },

    // damage cracks on the block the drill head is working on
    drawCrack(ctx, w, sx) {
      if (!w || !this.run || this.state !== 'mining') return;
      const tg = this.mineTarget(), cell = w.cell(tg.c, tg.r);
      if (!cell || cell.broken || cell.air || cell.cave != null || !(cell.hp < cell.max)) return;
      const x = sx + tg.c * BS - BS / 2, y = tg.r * BS;
      const f = U.clamp(1 - cell.hp / cell.max, 0, 1);
      const crack = () => {
        ctx.beginPath();
        for (let branch = 0; branch < 5; branch++) {
          const side = branch % 2 ? -1 : 1;
          const reach = U.clamp((f - branch * .1) * 1.65, 0, 1);
          if (!reach) continue;
          const x0 = x + BS * (.5 + side * .04), y0 = y + BS * .08;
          const xm = x0 + side * BS * (.12 + branch * .025) * reach;
          const ym = y0 + BS * (.3 + branch * .07) * reach;
          ctx.moveTo(x0, y0); ctx.lineTo(xm, ym);
          ctx.lineTo(xm - side * BS * .08, ym + BS * .16 * reach);
          ctx.lineTo(xm + side * BS * .14 * reach, ym + BS * .28 * reach);
        }
        ctx.stroke();
      };
      ctx.save(); ctx.translate(1, 1);
      ctx.strokeStyle = 'rgba(255,235,190,' + f * .38 + ')'; ctx.lineWidth = 4; crack();
      ctx.translate(-1, -1);
      ctx.strokeStyle = 'rgba(15,10,15,' + (.35 + f * .5) + ')'; ctx.lineWidth = 2 + f * 1.8; crack();
      ctx.restore();
    },

    // The ground is cached as CHUNK×CHUNK-block images, so a frame draws about a dozen
    // images instead of ~300 tiles. A changed cell (World.onChange) is repainted into its chunk.
    groundCache(tw, sx, tint) {
      // chunk pixels per world unit: up to 2 (sharp on high-DPI screens) at full quality, 1.25 when quality is reduced
      const k = U.clamp(Math.round(this.base * this.dpr * 20) / 20, 0.35, DI.Q.low ? 1.25 : 2);
      let gc = this.gc;
      if (!gc || gc.w !== tw || gc.sx !== sx || gc.tint !== tint || gc.k !== k) {
        const pool = gc && gc.k === k ? [...gc.chunks.values()].map((ch) => ch.cv) : [];
        if (gc) gc.w.onChange = null;
        gc = this.gc = { w: tw, run: tw === this.world, sx, tint, k, chunks: new Map(), pool, frame: 0, visible: [] };
        tw.onChange = (c, r) => this.patchChunk(gc, c, r);
      }
      gc.frame++;
      return gc;
    },

    drawChunks(ctx, gc, c0, c1, r0, r1) {
      const size = CHUNK * BS;
      gc.visible.length = 0;
      for (let cy = Math.floor(r0 / CHUNK); cy <= Math.floor(r1 / CHUNK); cy++) {
        for (let cx = Math.floor(c0 / CHUNK); cx <= Math.floor(c1 / CHUNK); cx++) {
          const ch = this.chunk(gc, cx, cy);
          ch.used = gc.frame;
          gc.visible.push(ch);
          ctx.drawImage(ch.cv, gc.sx + cx * size - BS / 2, cy * size, size + 0.5, size + 0.5);
        }
      }
      for (const ch of gc.visible) {
        for (const [c, r] of ch.fx.values()) {
          if (c < c0 || c > c1 || r < r0 || r > r1) continue;
          this.groundFx(ctx, gc.w, gc.run ? gc.w.cell(c, r) : null, c, r, gc.sx + c * BS - BS / 2, r * BS);
        }
      }
    },

    chunk(gc, cx, cy) {
      const key = (cx + 4096) * 65536 + cy;
      let ch = gc.chunks.get(key);
      if (ch) return ch;
      if (gc.chunks.size >= (gc.k > 1.25 ? 20 : 32)) { // fewer big chunks keep memory bounded
        let oldKey = null, old = null;
        for (const [kk, c] of gc.chunks) if (!old || c.used < old.used) { oldKey = kk; old = c; }
        gc.chunks.delete(oldKey);
        gc.pool.push(old.cv);
      }
      const px = Math.ceil(CHUNK * BS * gc.k);
      const cv = gc.pool.pop() || document.createElement('canvas');
      if (cv.width !== px || cv.height !== px) { cv.width = px; cv.height = px; }
      const g = cv.getContext('2d');
      g.setTransform(1, 0, 0, 1, 0, 0);
      g.clearRect(0, 0, px, px);
      ch = { cv, g, cx, cy, fx: new Map(), sp: new Map(), used: gc.frame };
      gc.chunks.set(key, ch);
      if (gc.run) gc.w.ensure((cy + 1) * CHUNK);
      for (let r = cy * CHUNK; r < (cy + 1) * CHUNK; r++) for (let c = cx * CHUNK; c < (cx + 1) * CHUNK; c++) this.paintCell(gc, ch, c, r, false);
      return ch;
    },

    paintCell(gc, ch, c, r, clear) {
      const g = ch.g, x = (c - ch.cx * CHUNK) * BS, y = (r - ch.cy * CHUNK) * BS, key = (c + 4096) * 1048576 + r;
      g.setTransform(gc.k, 0, 0, gc.k, 0, 0);
      if (clear) g.clearRect(x, y, BS, BS);
      const cell = gc.run ? gc.w.cell(c, r) : null;
      if (this.groundTile(g, gc.w, cell, c, r, x, y, gc.tint)) ch.fx.set(key, [c, r]); else ch.fx.delete(key);
      if (cell && cell.sp) ch.sp.set(key, [c, r]); else ch.sp.delete(key);
    },

    patchChunk(gc, c, r) {
      if (this.gc !== gc || r < 0) return;
      const cx = Math.floor(c / CHUNK), cy = Math.floor(r / CHUNK);
      const ch = gc.chunks.get((cx + 4096) * 65536 + cy);
      if (ch) this.paintCell(gc, ch, c, r, true);
    },

    drawCaveCell(ctx, cave, c, r, x, y) {
      const k = r - cave.row;
      if (cave.lake) {
        const g = ctx.createLinearGradient(0, y, 0, y + BS);
        g.addColorStop(0, k === 0 ? '#3aa0d8' : '#1c6fa8'); g.addColorStop(1, '#155a8c');
        ctx.fillStyle = g;
        ctx.fillRect(x - 0.5, y - 0.5, BS + 1, BS + 1);
        if (k === 0) {
          ctx.fillStyle = 'rgba(200,240,255,0.6)';
          const wy = y + 6 + Math.sin(this.t * 3 + c) * 3;
          ctx.fillRect(x, wy, BS, 3);
        }
        if (U.hash(c, r, 5) < 0.25) {
          ctx.fillStyle = 'rgba(220,245,255,0.5)';
          const by = y + BS - ((this.t * 30 + U.hash(c, r, 6) * BS) % BS);
          ctx.beginPath(); ctx.arc(x + BS * U.hash(c, r, 7), by, 3, 0, Math.PI * 2); ctx.fill();
        }
        // a fish swims past
        if (c === -1 && k === cave.rows - 1) {
          const fx = x + ((this.t * 40) % (BS * 3)) - BS;
          ctx.fillStyle = '#ffb02e';
          ctx.beginPath(); ctx.ellipse(fx, y + 26, 12, 7, 0, 0, Math.PI * 2); ctx.fill();
          ctx.beginPath(); ctx.moveTo(fx - 10, y + 26); ctx.lineTo(fx - 20, y + 19); ctx.lineTo(fx - 20, y + 33); ctx.fill();
        }
        return;
      }
      ctx.fillStyle = '#120c1c';
      ctx.fillRect(x - 0.5, y - 0.5, BS + 1, BS + 1);
      ctx.fillStyle = 'rgba(120,90,160,0.18)';
      ctx.fillRect(x, y, BS, BS);
      if (k === 0) {
        // stalactites
        ctx.fillStyle = '#5a4a6a';
        for (let i = 0; i < 3; i++) {
          const sx = x + 8 + i * 18, h = 10 + U.hash(c, i, 11) * 22;
          ctx.beginPath(); ctx.moveTo(sx - 6, y); ctx.lineTo(sx, y + h); ctx.lineTo(sx + 6, y); ctx.fill();
        }
      }
      if (k === cave.rows - 1 && U.hash(c, r, 12) < 0.7) {
        // glowing mushrooms
        const mx = x + 14 + U.hash(c, r, 13) * 28, my = y + BS;
        const pulse = 0.6 + 0.4 * Math.sin(this.t * 3 + c);
        const g = ctx.createRadialGradient(mx, my - 14, 1, mx, my - 14, 26);
        g.addColorStop(0, `rgba(120,240,255,${0.5 * pulse})`); g.addColorStop(1, 'rgba(120,240,255,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(mx, my - 14, 26, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#d8f6ff'; ctx.fillRect(mx - 2, my - 14, 4, 14);
        ctx.fillStyle = '#5fe0ff'; ctx.beginPath(); ctx.ellipse(mx, my - 15, 10, 6, 0, Math.PI, 0); ctx.fill();
      }
    },

    // ruined city: stone backdrop, building silhouettes with lit windows, a row of chests
    drawCity(ctx, room, x0, x1, y0, y1) {
      const g = ctx.createLinearGradient(0, y0, 0, y1);
      g.addColorStop(0, '#1e1a2a'); g.addColorStop(1, '#3a3044');
      ctx.fillStyle = g; ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
      const bw = (x1 - x0) / 7;
      for (let i = 0; i < 7; i++) {
        const h = (0.45 + U.hash(room.row, i, 31) * 0.45) * (y1 - y0 - 20);
        const bx = x0 + i * bw + 6, by = y1 - 14 - h;
        ctx.fillStyle = i % 2 ? '#4a4258' : '#544a62';
        ctx.fillRect(bx, by, bw - 12, h);
        if (U.hash(room.row, i, 32) < 0.5) { ctx.beginPath(); ctx.moveTo(bx - 4, by); ctx.lineTo(bx + (bw - 12) / 2, by - 26); ctx.lineTo(bx + bw - 8, by); ctx.fill(); }
        for (let wy = by + 14; wy < y1 - 40; wy += 30) {
          for (let wx = bx + 10; wx < bx + bw - 26; wx += 22) {
            const lit = U.hash(wx | 0, wy | 0, 33) < 0.45;
            ctx.fillStyle = lit ? `rgba(255,210,110,${0.55 + 0.25 * Math.sin(this.t * 2 + wx)})` : '#2a2434';
            ctx.fillRect(wx, wy, 10, 14);
          }
        }
      }
      ctx.fillStyle = '#6a5a48'; ctx.fillRect(x0, y1 - 14, x1 - x0, 14);
      ctx.strokeStyle = '#c9a76a'; ctx.lineWidth = 4; ctx.strokeRect(x0 + 2, y0 + 2, x1 - x0 - 4, y1 - y0 - 4);
      if (!room.opened) {
        const z = room.zone;
        for (let i = 0; i < room.chests; i++) {
          const cx = this.shaftX + (i - (room.chests - 1) / 2) * BS * 1.6;
          ctx.drawImage(Icons.shapeIcon('chest|' + z.chest.c2), cx - 28, y1 - 66 + Math.sin(this.t * 3 + i) * 2, 56, 56);
        }
      }
    },

    drawMine(ctx, room, x0, x1, y0, y1) {
      ctx.fillStyle = '#2a1c12'; ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
      // timber supports
      ctx.fillStyle = '#8a5a2e';
      for (let x = x0 + 10; x < x1 - 10; x += 120) { ctx.fillRect(x, y0, 12, y1 - y0); }
      ctx.fillRect(x0, y0, x1 - x0, 12);
      // rails
      ctx.fillStyle = '#6b6f78'; ctx.fillRect(x0, y1 - 10, x1 - x0, 4);
      ctx.fillStyle = '#5a3a1e';
      for (let x = x0 + 6; x < x1; x += 22) ctx.fillRect(x, y1 - 8, 10, 8);
      // lanterns
      for (const lx of [x0 + 70, x1 - 70]) {
        const fl = 0.7 + 0.3 * Math.sin(this.t * 11 + lx);
        const g = ctx.createRadialGradient(lx, y0 + 34, 2, lx, y0 + 34, 80);
        g.addColorStop(0, `rgba(255,190,90,${0.6 * fl})`); g.addColorStop(1, 'rgba(255,160,60,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(lx, y0 + 34, 80, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#ffd36b'; ctx.fillRect(lx - 5, y0 + 26, 10, 14);
      }
      if (!room.opened) {
        const z = room.zone;
        ctx.drawImage(Icons.shapeIcon('cart|' + DI.BLOCKS[z.vein[0][0]].ore), this.shaftX - 50, y1 - 96, 100, 100);
      }
    },

    grassColor(reg) {
      const g = DI.curWorld(this.S).grass;
      return g ? U.mixHex(reg.grass, g, 0.7) : reg.grass;
    },

    // move to another unlocked world (upgrades + collections carry over; records are per world)
    travel(k) {
      const S = this.S;
      if (k === S.world || k < 0 || k > S.worldMax || this.state !== 'idle') return false;
      S.bests[S.world] = S.best;
      S.world = k;
      S.best = S.bests[k] || 0;
      S.prevBest = 0;
      if (k === S.worldMax) S.newWorld = false;
      DI.Save.save();
      this._terr = null;
      this.flash = 0.8; this.flashColor = '#ffffff';
      this.shake(10);
      A().play('warp');
      FX.confetti(0, -120, 60);
      return true;
    },

    // Orbit Reset: back to Earth with +10% coins forever. Collections, cosmetics, lifetime stats and records stay.
    prestige() {
      const S = this.S;
      if (this.state !== 'idle' || !E.canPrestige(S)) return false;
      S.stats.peakDepth = Math.max(S.stats.peakDepth || 0, DI.totalDepth(S));
      S.prestige = (S.prestige || 0) + 1;
      S.coins = 0;
      S.upgrades.dist = S.upgrades.power = S.upgrades.dur = 1;
      S.world = S.worldMax = 0;
      S.best = S.prevBest = 0;
      S.bests = {};
      S.milestones = {};
      S.zonesSeen = { dirt: true };
      S.newWorld = false;
      // both of these size payouts from recent income, which would hand Singularity-sized coins to a fresh start
      S.stats.bestRunCoins = 0;
      S.rig = { avg: 0, n: 0, hours: 0 };
      S.upgradeAdNextRun = S.runs + 1;
      DI.Save.save();
      DI.Leaderboard.submitLocal(S.playerName, DI.Leaderboard.scores(S));
      DI.Analytics.track('prestige', { prestige: S.prestige, runs: S.runs, play_s: Math.round(S.stats.playS || 0) });
      this._terr = null;
      this.refreshLook();
      this.flash = 0.8; this.flashColor = '#ffffff';
      this.shake(14);
      A().play('warp');
      FX.confetti(0, -120, 80);
      return true;
    },

    // terrain used to draw the ground when no run world exists (same hashing as a run's side cells)
    terrainWorld() {
      const ev = DI.currentEvent().event;
      const id = ev ? ev.id : null;
      if (!this._terr || this._terr.event !== id) this._terr = new DI.World(1, { event: id });
      return this._terr;
    },

    depthLine(ctx, m, left, right, color, label) {
      if (!m || m <= 0) return;
      const y = E.rowAtDepth(m) * BS;
      const half = this.H / 2 / this.scale;
      if (y < this.cam.y - half - 40 || y > this.cam.y + half + 40) return;
      ctx.save();
      ctx.strokeStyle = U.rgba(color, 0.85);
      ctx.setLineDash([16, 10]);
      ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(left, y); ctx.lineTo(right, y); ctx.stroke();
      ctx.setLineDash([]);
      const tx = (this.run ? this.drill.x : this.shaftX || 0) + BS * 1.2;
      ctx.font = '800 18px Fredoka, "Trebuchet MS", sans-serif';
      const txt = label + ' ' + U.fmtM(m);
      const tw = ctx.measureText(txt).width + 18;
      ctx.fillStyle = U.rgba('#140a1e', 0.75);
      U.roundRect(ctx, tx, y - 30, tw, 26, 13); ctx.fill();
      ctx.fillStyle = color;
      ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      ctx.fillText(txt, tx + 9, y - 17);
      ctx.restore();
    },

    drawSurface(ctx, left, right) {
      const sx = this.world ? this.shaftX : 0;
      const w = this.world;
      // grass per column (region-colored)
      const c0 = Math.floor((left - sx) / BS + 0.5) - 1, c1 = Math.ceil((right - sx) / BS + 0.5) + 1;
      for (let c = c0; c <= c1; c++) {
        const x = sx + c * BS - BS / 2;
        if (w && c === 0) { const cell = w.cell(0, 0); if (cell && cell.broken) continue; }
        const reg = E.region(Math.max(0, (x + BS / 2) / SURF));
        const grass = this.grassColor(reg);
        ctx.fillStyle = U.shade(grass, -0.25);
        ctx.fillRect(x - 0.5, -2, BS + 1, 14);
        ctx.fillStyle = grass;
        ctx.fillRect(x - 0.5, -8, BS + 1, 12);
        // tufts
        const h = U.hash(c, 7, 3);
        ctx.beginPath();
        ctx.moveTo(x + h * 30, -8); ctx.lineTo(x + h * 30 + 4, -16); ctx.lineTo(x + h * 30 + 8, -8);
        ctx.moveTo(x + h * 20 + 22, -8); ctx.lineTo(x + h * 20 + 25, -14); ctx.lineTo(x + h * 20 + 28, -8);
        ctx.fill();
      }
      // decor: trees, rocks, flowers
      const slot = 300;
      const s0 = Math.floor(left / slot) - 1, s1 = Math.ceil(right / slot) + 1;
      for (let s = s0; s <= s1; s++) {
        const x = s * slot + U.hash(s, 1, 77) * 160;
        if (x < 220 && x > -260) continue;
        if (w && Math.abs(x - sx) < 110) continue;
        const kind = U.hash(s, 2, 77);
        const reg = E.region(Math.max(0, x / SURF));
        if (kind < 0.45) this.tree(ctx, x, -6, 0.8 + U.hash(s, 3, 77) * 0.6, reg);
        else if (kind < 0.75) this.rock(ctx, x, -4, 0.7 + U.hash(s, 4, 77) * 0.8);
        else this.flowers(ctx, x, -8, s);
      }
      // distance posts every 50m
      const step = 50 * SURF;
      const p0 = Math.max(1, Math.floor(left / step)), p1 = Math.ceil(right / step);
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      for (let i = p0; i <= p1; i++) {
        const x = i * step;
        if (w && Math.abs(x - sx) < 60) continue;
        ctx.fillStyle = '#6b4a2b'; ctx.fillRect(x - 3, -46, 6, 40);
        ctx.fillStyle = '#fff6e0';
        U.roundRect(ctx, x - 30, -66, 60, 26, 8); ctx.fill();
        ctx.strokeStyle = '#6b4a2b'; ctx.lineWidth = 3; ctx.stroke();
        ctx.fillStyle = '#4a3020'; ctx.font = '800 15px Fredoka, "Trebuchet MS", sans-serif';
        ctx.fillText(i * 50 + 'm', x, -53);
      }
      DI.Surface.draw(ctx, this, left, right);
      // region signs
      for (const reg of DI.REGIONS) {
        if (!reg.from) continue;
        const x = reg.from * SURF;
        if (x < left - 200 || x > right + 200) continue;
        ctx.fillStyle = '#4a3020'; ctx.fillRect(x - 4, -110, 8, 104);
        ctx.fillStyle = reg.grass;
        U.roundRect(ctx, x - 90, -150, 180, 50, 12); ctx.fill();
        ctx.strokeStyle = '#2a1a10'; ctx.lineWidth = 4; ctx.stroke();
        ctx.fillStyle = '#1b1020'; ctx.font = '800 17px Fredoka, "Trebuchet MS", sans-serif';
        ctx.fillText(reg.name.toUpperCase(), x, -133);
        ctx.font = '700 14px Fredoka, "Trebuchet MS", sans-serif';
        ctx.fillText('Ore value ×' + reg.mult, x, -113);
      }
      // best distance flag
      if (this.S.bestDist > 5) {
        const x = this.S.bestDist * SURF;
        if (x > left - 100 && x < right + 100) {
          ctx.fillStyle = '#ddd'; ctx.fillRect(x - 2, -90, 4, 84);
          ctx.fillStyle = '#ffcc33';
          ctx.beginPath(); ctx.moveTo(x + 2, -90); ctx.lineTo(x + 44, -78 + Math.sin(this.t * 4) * 3); ctx.lineTo(x + 2, -64); ctx.fill();
          ctx.fillStyle = '#4a3020'; ctx.font = '800 12px Fredoka, sans-serif';
          ctx.fillText('BEST', x + 20, -77);
        }
      }
    },

    tree(ctx, x, y, s, reg) {
      ctx.fillStyle = '#7a4a24'; ctx.fillRect(x - 5 * s, y - 40 * s, 10 * s, 40 * s);
      const col = reg.tree ? reg.tree : reg.from >= 600 ? '#4fd8c8' : reg.from >= 350 ? '#c9b23a' : '#3fae4a';
      ctx.fillStyle = U.shade(col, -0.15);
      ctx.beginPath(); ctx.arc(x, y - 60 * s, 30 * s, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = col;
      ctx.beginPath(); ctx.arc(x - 8 * s, y - 66 * s, 22 * s, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.18)';
      ctx.beginPath(); ctx.arc(x - 14 * s, y - 74 * s, 9 * s, 0, Math.PI * 2); ctx.fill();
    },
    rock(ctx, x, y, s) {
      ctx.fillStyle = '#8d8a96';
      ctx.beginPath(); ctx.moveTo(x - 26 * s, y); ctx.lineTo(x - 16 * s, y - 22 * s); ctx.lineTo(x + 6 * s, y - 30 * s); ctx.lineTo(x + 26 * s, y - 12 * s); ctx.lineTo(x + 30 * s, y); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.25)';
      ctx.beginPath(); ctx.moveTo(x - 16 * s, y - 22 * s); ctx.lineTo(x + 6 * s, y - 30 * s); ctx.lineTo(x - 2 * s, y - 16 * s); ctx.fill();
    },
    flowers(ctx, x, y, s) {
      const cols = ['#ff5a8a', '#ffd33b', '#ffffff', '#b06bff'];
      for (let i = 0; i < 5; i++) {
        const fx = x + i * 12, fh = 10 + U.hash(s, i, 5) * 10;
        ctx.strokeStyle = '#3f8f3a'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(fx, y + 4); ctx.lineTo(fx, y - fh); ctx.stroke();
        ctx.fillStyle = cols[(s + i) & 3];
        ctx.beginPath(); ctx.arc(fx, y - fh, 4, 0, Math.PI * 2); ctx.fill();
      }
    },

    // in-world aim gauges: angle fan around the barrel pivot, then a power bar along the barrel
    drawDrillContact(ctx) {
      const run = this.run, target = this.mineTarget(), cell = this.world.at(target.c, target.r);
      if (!cell || cell.air || cell.broken) return;
      const f = U.clamp(1 - cell.hp / cell.max, 0, 1), b = DI.BLOCKS[cell.t];
      const x = this.drill.x, y = this.drill.y + 5, r = 26 + f * 18;
      ctx.save(); ctx.globalCompositeOperation = 'lighter';
      const light = ctx.createRadialGradient(x, y, 1, x, y, r);
      const color = run.turbo > 0 ? '#7ff5ff' : b.ore || '#ffbb69';
      light.addColorStop(0, U.rgba(color, .2 + f * .2)); light.addColorStop(1, U.rgba(color, 0));
      ctx.fillStyle = light; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    },

    drawPerfectFire(ctx, x, y, angle) {
      ctx.save();
      ctx.translate(x, y); ctx.rotate(angle); ctx.scale(this.look.size, this.look.size);
      const rear = -Art.length(this.look);
      ctx.translate(rear + 6, 0);
      ctx.globalCompositeOperation = 'lighter';
      const glow = ctx.createRadialGradient(-45, 0, 2, -45, 0, 110);
      glow.addColorStop(0, 'rgba(255,150,25,.65)'); glow.addColorStop(1, 'rgba(255,70,0,0)');
      ctx.fillStyle = glow; ctx.fillRect(-155, -110, 220, 220);
      for (let i = 0; i < 3; i++) {
        const flicker = Math.sin(this.t * 45 + i * 2.4);
        const len = (140 - i * 32) + flicker * 16;
        const width = 23 - i * 6;
        ctx.fillStyle = ['#ff4b13', '#ffac24', '#fff5ad'][i];
        ctx.beginPath(); ctx.moveTo(8, -width);
        ctx.quadraticCurveTo(-len * .4, -width * 1.4, -len, flicker * 8);
        ctx.quadraticCurveTo(-len * .45, width * 1.5, 8, width);
        ctx.closePath(); ctx.fill();
      }
      ctx.restore();
    },

    drawAim(ctx) {
      const st = this.state, pv = this.aimPivot(), R = this.aimRadii(), m = this.meter;
      const zones = [[15, 33, '#ff5a4a'], [33, 42.9, '#ffcf33'], [42.9, 47.1, '#5be34a'], [47.1, 57, '#ffcf33'], [57, 75, '#ff5a4a']];
      const angleActive = st === 'idle' || st === 'angle';
      const curDeg = angleActive ? E.angleFromMeter(m.p) : m.angleDeg;
      const aGrade = angleActive ? E.angleGrade(m.p) : m.aGrade;
      const font = (s) => '800 ' + s + 'px Fredoka, "Trebuchet MS", sans-serif';
      const ring = (r0, r1, a0, a1) => {
        ctx.beginPath();
        ctx.arc(pv.x, pv.y, r1, -a1 * DEG, -a0 * DEG);
        ctx.arc(pv.x, pv.y, r0, -a0 * DEG, -a1 * DEG, true);
        ctx.closePath();
      };

      // ---------------- angle fan
      ctx.save();
      const intro = angleActive ? U.easeOutBack(Math.min(1, this.stateT / 0.22)) : 1;
      ctx.translate(pv.x, pv.y); ctx.scale(intro, intro); ctx.translate(-pv.x, -pv.y);
      const fanA = angleActive ? 1 : 0.4;
      ctx.globalAlpha = fanA * 0.45;
      ctx.fillStyle = '#1b1030';
      ring(R.R0 - 7, R.R1 + 7, 13, 77); ctx.fill();
      ctx.globalAlpha = fanA;
      for (const [a0, a1, col] of zones) { ctx.fillStyle = col; ring(R.R0, R.R1, a0, a1); ctx.fill(); }
      // green zone pulses while the needle is inside it
      if (angleActive && aGrade === 'perfect') {
        ctx.globalAlpha = 0.5 + 0.3 * Math.sin(this.t * 30);
        ctx.fillStyle = '#eaffd8'; ring(R.R0, R.R1, 42.9, 47.1); ctx.fill();
        ctx.globalAlpha = fanA;
      }
      // inner shading + ticks
      ctx.fillStyle = 'rgba(0,0,0,0.18)'; ring(R.R0, R.R0 + 10, 15, 75); ctx.fill();
      ctx.strokeStyle = 'rgba(27,16,48,0.55)'; ctx.lineWidth = 2;
      for (let a = 20; a < 75; a += 5) {
        const r1 = a % 15 === 0 ? R.R0 + 18 : R.R0 + 10;
        ctx.beginPath();
        ctx.moveTo(pv.x + Math.cos(a * DEG) * R.R0, pv.y - Math.sin(a * DEG) * R.R0);
        ctx.lineTo(pv.x + Math.cos(a * DEG) * r1, pv.y - Math.sin(a * DEG) * r1);
        ctx.stroke();
      }
      ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 5; ring(R.R0, R.R1, 15, 75); ctx.stroke();
      // motion-blur ghosts behind the needle
      if (angleActive) {
        m.ghost.forEach((gp, i) => {
          const a = E.angleFromMeter(gp) * DEG;
          ctx.globalAlpha = 0.28 * (1 - i / m.ghost.length);
          ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 9;
          ctx.beginPath();
          ctx.moveTo(pv.x + Math.cos(a) * (R.R0 - 6), pv.y - Math.sin(a) * (R.R0 - 6));
          ctx.lineTo(pv.x + Math.cos(a) * (R.R1 + 10), pv.y - Math.sin(a) * (R.R1 + 10));
          ctx.stroke();
        });
        ctx.globalAlpha = 1;
      }
      // needle
      ctx.globalAlpha = angleActive ? 1 : 0.85;
      const na = curDeg * DEG;
      const n0 = { x: pv.x + Math.cos(na) * (R.R0 - 14), y: pv.y - Math.sin(na) * (R.R0 - 14) };
      const n1 = { x: pv.x + Math.cos(na) * (R.R1 + 16), y: pv.y - Math.sin(na) * (R.R1 + 16) };
      const gcol = this.gradeColor(aGrade);
      ctx.lineCap = 'round';
      ctx.shadowColor = gcol; ctx.shadowBlur = 14;
      ctx.strokeStyle = '#1b1030'; ctx.lineWidth = 14;
      ctx.beginPath(); ctx.moveTo(n0.x, n0.y); ctx.lineTo(n1.x, n1.y); ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 8;
      ctx.beginPath(); ctx.moveTo(n0.x, n0.y); ctx.lineTo(n1.x, n1.y); ctx.stroke();
      ctx.fillStyle = gcol;
      ctx.beginPath(); ctx.arc(n1.x, n1.y, 9, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#1b1030'; ctx.lineWidth = 3; ctx.stroke();
      ctx.restore();

      // degree bubble
      const lockPop = m.lockT > 0 && st === 'power' ? 1 + m.lockT * 0.8 : 1;
      this.bubble(ctx, pv.x + Math.cos(na) * (R.R1 + 46), pv.y - Math.sin(na) * (R.R1 + 46), Math.round(curDeg) + '°', gcol, angleActive ? 1 : 0.85, lockPop);

      // ---------------- power bar along the barrel
      if (!angleActive) {
        const b = this.powerBar();
        const p = st === 'power' ? m.p : m.powerP;
        const pGrade = st === 'power' ? E.powerGrade(p) : m.pGrade;
        const H = 26, L = b.len;
        const intro2 = st === 'power' ? U.easeOutBack(Math.min(1, this.stateT / 0.22)) : 1;
        ctx.save();
        ctx.translate(b.x0, b.y0);
        ctx.rotate(-b.ang);
        ctx.scale(intro2, intro2);
        ctx.fillStyle = 'rgba(27,16,48,0.8)';
        U.roundRect(ctx, -8, -H / 2 - 8, L + 16, H + 16, (H + 16) / 2); ctx.fill();
        ctx.save();
        U.roundRect(ctx, 0, -H / 2, L, H, H / 2); ctx.clip();
        ctx.globalAlpha = 0.38;
        ctx.fillStyle = '#ff5a4a'; ctx.fillRect(0, -H / 2, L * 0.66, H);
        ctx.fillStyle = '#ffcf33'; ctx.fillRect(L * 0.66, -H / 2, L * 0.29, H);
        ctx.fillStyle = '#5be34a'; ctx.fillRect(L * 0.95, -H / 2, L * 0.05, H);
        ctx.globalAlpha = 1;
        const fg = ctx.createLinearGradient(0, 0, L, 0);
        fg.addColorStop(0, '#ff3b3b'); fg.addColorStop(0.6, '#ff9a2e'); fg.addColorStop(0.8, '#ffe14a'); fg.addColorStop(1, '#7dff5a');
        ctx.fillStyle = fg; ctx.fillRect(0, -H / 2, L * p, H);
        ctx.fillStyle = 'rgba(255,255,255,0.35)'; ctx.fillRect(0, -H / 2 + 3, L * p, 5);
        if (pGrade === 'perfect') {
          ctx.globalAlpha = 0.35 + 0.3 * Math.sin(this.t * 30);
          ctx.fillStyle = '#eaffd8'; ctx.fillRect(L * 0.95, -H / 2, L * 0.05, H);
          ctx.globalAlpha = 1;
        }
        ctx.restore();
        ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 4;
        U.roundRect(ctx, 0, -H / 2, L, H, H / 2); ctx.stroke();
        ctx.strokeStyle = 'rgba(27,16,48,0.6)'; ctx.lineWidth = 2;
        for (const f of [0.66, 0.95]) { ctx.beginPath(); ctx.moveTo(L * f, -H / 2 + 2); ctx.lineTo(L * f, H / 2 - 2); ctx.stroke(); }
        // marker
        const mx = L * p;
        ctx.shadowColor = this.gradeColor(pGrade); ctx.shadowBlur = 14;
        ctx.fillStyle = '#ffffff';
        U.roundRect(ctx, mx - 5, -H / 2 - 12, 10, H + 24, 5); ctx.fill();
        ctx.shadowBlur = 0;
        ctx.strokeStyle = '#1b1030'; ctx.lineWidth = 3; ctx.stroke();
        ctx.restore();
        const bp = this.powerBarPoint(1.12);
        this.bubble(ctx, bp.x + 10, bp.y - 10, Math.round(p * 100) + '%', this.gradeColor(pGrade), 1, 1);
      }

      // ---------------- hint pill
      if (st === 'idle' && this.S.runs < 3 && !UI().modalOpen() && (this.portrait || this.H >= 340) && !(this.W < 480 && this.H <= 420)) {
        // first runs: tell new players the one thing they need to do (instead of a how-to popup)
        // short landscape: the upgrade row covers the usual spot, so sit right under the grass
        const hx = 150, hy = (!this.portrait && this.H <= 520 ? 36 : 84) + Math.sin(this.t * 5) * 3, pop = 1 + 0.05 * Math.sin(this.t * 6);
        ctx.save(); ctx.translate(hx, hy); ctx.scale(pop, pop);
        ctx.font = font(24);
        const txt = 'TAP TO LAUNCH!';
        const w = ctx.measureText(txt).width + 40;
        ctx.fillStyle = '#ff9a2e';
        U.roundRect(ctx, -w / 2, -28, w, 50, 18); ctx.fill();
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff'; ctx.fillText(txt, 0, -3);
        ctx.restore();
      }
      if (st === 'power') {
        // sits in the dirt under the launcher so it never covers the gauges
        const hx = 150, hy = 84 + Math.sin(this.t * 5) * 3;
        const txt = 'TAP to lock the POWER';
        ctx.font = font(20);
        const w = ctx.measureText(txt).width + 34;
        ctx.fillStyle = 'rgba(27,16,48,0.82)';
        U.roundRect(ctx, hx - w / 2, hy - 30, w, 52, 18); ctx.fill();
        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff'; ctx.fillText(txt, hx, hy - 12);
        ctx.font = font(14); ctx.fillStyle = '#7dff5a';
        ctx.fillText('stop it in the GREEN zone!', hx, hy + 9);
      }
    },

    bubble(ctx, x, y, txt, col, alpha, scale) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.translate(x, y); ctx.scale(scale, scale);
      ctx.font = '800 24px Fredoka, "Trebuchet MS", sans-serif';
      const w = ctx.measureText(txt).width + 22;
      ctx.fillStyle = '#1b1030';
      U.roundRect(ctx, -w / 2, -18, w, 36, 14); ctx.fill();
      ctx.strokeStyle = col; ctx.lineWidth = 3; ctx.stroke();
      ctx.fillStyle = '#ffffff'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(txt, 0, 1);
      ctx.restore();
    },

    // vertical streaks rushing upward past the drill while 2× is held
    drawFastLines(ctx) {
      ctx.save();
      ctx.strokeStyle = 'rgba(255,255,255,0.22)';
      ctx.lineCap = 'round';
      for (let i = 0; i < 16; i++) {
        const ph = (this.t * 3 + U.hash(i, 8, 3)) % 1;
        const x = U.hash(i, 9, 3) * this.W;
        const y = this.H * (1.1 - ph * 1.3);
        ctx.globalAlpha = Math.sin(ph * Math.PI);
        ctx.lineWidth = 2 + U.hash(i, 10, 3) * 3;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 60 + U.hash(i, 11, 3) * 90); ctx.stroke();
      }
      ctx.restore();
    },

    drawSpeedLines(ctx) {
      const f = this.flight;
      const hot = f && f.boostT > 0;
      const sp = hot ? 2.4 : 1;
      const a = this.drill.ang;
      ctx.save();
      ctx.strokeStyle = hot ? 'rgba(255,200,90,0.7)' : 'rgba(255,255,255,0.35)';
      ctx.lineCap = 'round';
      for (let i = 0; i < (hot ? 26 : 14); i++) {
        const ph = (this.t * 2.2 * sp + U.hash(i, 3, 3)) % 1;
        const y = U.hash(i, 4, 3) * this.H;
        const x = this.W * (1.1 - ph * 1.3);
        const len = (60 + U.hash(i, 5, 3) * 120) * sp;
        ctx.globalAlpha = Math.sin(ph * Math.PI) * 0.6;
        ctx.lineWidth = 2 + U.hash(i, 6, 3) * 2;
        ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a) * len, y + Math.sin(a) * len); ctx.stroke();
      }
      ctx.restore();
    },

    drawTrail(ctx) {
      const pts = this.trail;
      const col = this.S.cosmetics.plasma ? '#ff4fd8' : this.trailColor();
      ctx.save();
      ctx.lineCap = 'round';
      for (let i = 1; i < pts.length; i++) {
        const f = i / pts.length;
        ctx.strokeStyle = U.rgba(col.startsWith('#') ? col : '#ffffff', f * 0.7);
        ctx.lineWidth = 3 + f * (12 + this.look.pt);
        ctx.beginPath(); ctx.moveTo(pts[i - 1][0], pts[i - 1][1]); ctx.lineTo(pts[i][0], pts[i][1]); ctx.stroke();
      }
      ctx.restore();
    },

    drawLighting(ctx) {
      const W = this.W, H = this.H;
      const groundSY = this.sy(0);
      if (groundSY > H) return;
      const row = Math.max(0, Math.floor(this.drill.y / BS));
      const z = this.run ? E.zoneAtRow(row) : DI.ZONES[0];
      const depthF = U.clamp((this.cam.y - 100) / 600, 0, 1);
      const dark = (0.35 + z.index * 0.08) * depthF;
      if (dark <= 0.01) return;
      if (DI.Q.mini) {
        // one flat shade instead of two full-screen gradients per frame
        ctx.fillStyle = U.rgba(z.fog, Math.min(0.6, dark * 0.75));
        ctx.fillRect(0, Math.max(0, groundSY), W, H);
        return;
      }
      const dx = this.sx(this.drill.x), dy = this.sy(this.drill.y);
      const R = Math.max(W, H) * 0.75;
      const g = ctx.createRadialGradient(dx, dy, 90 * this.scale, dx, dy, R);
      g.addColorStop(0, U.rgba(z.fog, 0));
      g.addColorStop(1, U.rgba(z.fog, Math.min(0.9, dark + 0.25)));
      ctx.fillStyle = g;
      ctx.fillRect(0, Math.max(0, groundSY), W, H);
      // drill light
      const lg = ctx.createRadialGradient(dx, dy + 30 * this.scale, 0, dx, dy + 30 * this.scale, 160 * this.scale);
      lg.addColorStop(0, z.light + (0.22 * depthF) + ')');
      lg.addColorStop(1, z.light + '0)');
      ctx.fillStyle = lg;
      ctx.fillRect(0, 0, W, H);
    },

    drawMotes(ctx) {
      if (!this.motes.length) return;
      const cols = { dirt: '#e8cfa0', crystal: '#e0a0ff', frozen: '#ffffff', magma: '#ff9a3c', alien: '#86ff5a' };
      for (const m of this.motes) {
        ctx.globalAlpha = 0.35 + 0.3 * Math.sin(m.ph * 3);
        ctx.fillStyle = cols[m.z] || '#fff';
        ctx.fillRect(m.x, m.y, m.s, m.s);
      }
      ctx.globalAlpha = 1;
    },

    // bank a run that is in progress when the page closes
    bankIfRunning() {
      if (this.run && !this.run.done && this.state !== 'idle') {
        DI.Platform.event('progression_failed', { step_id: DI.curWorld(this.S).id, step_index: this.S.world, reason: 'abandoned' });
        this.finalize();
      }
    },

    SURF,
  };

  DI.Game = Game;
})();
