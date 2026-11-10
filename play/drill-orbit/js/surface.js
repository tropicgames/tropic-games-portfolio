// DRILL ORBIT — objects on the ground and in the air above it.
// Layout comes from a per-launch seed and a fixed grid, so the same number of objects sit in reach at any distance.
// Landing kinds trigger when the flight ends on them (land), everything else as the drill passes (fly).
(function () {
  const DI = window.DI;
  const U = DI.U, E = DI.Econ, BS = DI.BS, FX = DI.FX, Icons = DI.Icons;
  const A = () => DI.Audio;
  const UI = () => DI.UI;
  const SURF = 16; // world units per surface meter

  const SLOT = BS * 8;        // one ground object per 28 m
  const TRAIL_SLOT = BS * 18; // coin arcs
  const BALLOON_SLOT = BS * 44;
  const FIRST_X = 400;        // keep the launcher's patch clear
  const MAX_LEGS = 4;         // bounces, ramps, cannons and geysers per run
  const MAX_GUSTS = 2;
  const CATCH = BS * 1.05;    // a landing this close counts as on the object
  const RAMP_RUNUP = BS * 3.2; // short landings skid up to a ramp from this far back

  // ground kinds: weight, and how the drill meets them
  const KINDS = {
    trampoline: { w: 15, land: true, name: 'BOING', color: '#3fb6ff', icon: 'bolt|#3fb6ff' },
    mushroom:   { w: 0,  land: true, name: 'MEGA BOING', color: '#ff6bd0', icon: 'clover|#ff6bd0' },
    ramp:       { w: 9,  land: true, name: 'RAMP JUMP!', color: '#ffcf33', icon: 'bolt|#ffcf33' },
    cannon:     { w: 7,  land: true, name: 'CANNON!', color: '#ff7a5a', icon: 'tnt|#ff7a5a' },
    geyser:     { w: 7,  land: true, name: 'GEYSER!', color: '#bfeaff', icon: 'drop|#bfeaff' },
    turbine:    { w: 8,  name: 'TAILWIND!', color: '#d8f1ff', icon: 'bolt|#d8f1ff' },
    crate:      { w: 24, smash: true, floor: 6, frac: 0.008, name: 'SMASH!' },
    prop:       { w: 13, smash: true, floor: 14, frac: 0.016, name: 'SMASH!' },
    target:     { w: 12, land: true, name: 'BULLSEYE!', color: '#ff4f6d', icon: 'star|#ff4f6d' },
    rig:        { w: 7,  land: true, name: 'DRILLING RIG!', color: '#ffb35a', icon: 'wrench|#ffb35a' },
    outcrop:    { w: 8,  land: true, name: 'ORE OUTCROP!', color: '#ffcc33', icon: 'gem|#ffcc33' },
    repair:     { w: 7,  land: true, name: 'REPAIR STATION!', color: '#7dff5a', icon: 'bolt|#7dff5a' },
    sinkhole:   { w: 7,  land: true, name: 'SINKHOLE!', color: '#9fe0ff', icon: 'gem|#9fe0ff' },
  };
  const TABLE = Object.keys(KINDS).filter((k) => KINDS[k].w).map((k) => [k, KINDS[k].w]);
  const NOTHING = 0.14; // chance a slot stays empty

  // what the drill's tip touches: the height of each launching object's top, dx from its center
  const RAMP = { x0: -96, y0: -2, x1: 76, y1: -78 };
  const SPRING = {
    trampoline: { half: 76, press: 15, top: () => -44 },
    mushroom: { half: 78, press: 28, top: (dx) => -62 - 60 * (1 - Math.min(1, (dx / 64) ** 2)) },
    ramp: { half: 0, top: (dx) => -6 + RAMP.y0 + (dx - RAMP.x0) * (RAMP.y1 - RAMP.y0) / (RAMP.x1 - RAMP.x0) },
    cannon: { half: 72, top: () => -62 },
    geyser: { half: 60, top: () => -18 },
  };
  const GROUND = -8;
  const FLIP = 0.62; // seconds for the somersault off a bounce
  function topOf(o, dx) {
    if (o.kind === 'ramp') return dx >= RAMP.x0 && dx <= RAMP.x1 ? SPRING.ramp.top(dx) : GROUND;
    const s = SPRING[o.kind];
    return Math.abs(dx) <= s.half ? s.top(dx) : GROUND;
  }
  // 1 while pressed flat, then a damped ring back through rest
  function wobble(hit, t, rate, decay) {
    if (!hit) return 0;
    const a = Math.max(0, t - hit.t);
    return a > 1.2 ? 0 : Math.cos(a * rate) * Math.exp(-a * decay);
  }

  const Surface = {
    FLIP,
    seed: 1,
    gone: new Set(),   // smashed or collected this launch
    cannonState: null,

    reset(seed) {
      this.seed = (seed == null ? Math.random() * 1e6 : seed) | 0;
      this.gone = new Set();
      this.cannonState = null;
      this.showBoost(true);
      this._hit = new Map();
    },

    // ---------------------------------------------------------------- layout
    at(i) {
      if (i < 0) return null;
      const seed = this.seed;
      const x = (i * SLOT) + Math.floor(U.hash(i, 11, seed) * 7 + 1) * BS;
      if (x < FIRST_X || U.hash(i, 12, seed) < NOTHING) return null;
      const reg = E.region(x / SURF);
      let kind = U.weighted(U.hash(i, 13, seed), TABLE);
      if (reg.name === 'Mushroom Forest' && U.hash(i, 14, seed) < 0.4) kind = 'mushroom';
      if (reg.name === 'Ashen Badlands' && U.hash(i, 15, seed) < 0.3) kind = 'geyser';
      return { id: 'g' + i, i, x, kind, def: KINDS[kind], v: U.hash(i, 16, seed) };
    },
    trail(i) {
      if (i < 1 || U.hash(i, 21, this.seed) < 0.45) return null;
      const x = i * TRAIL_SLOT + U.hash(i, 22, this.seed) * BS * 6;
      // heights follow launches of different angles: low arcs for flat shots, high arcs for steep ones
      const y = -Math.min(1900, Math.max(150, x * (0.05 + U.hash(i, 23, this.seed) * 0.2)));
      return { i, x, y };
    },
    coinsOf(tr) {
      const out = [];
      for (let k = 0; k < 8; k++) {
        const f = k / 7 - 0.5;
        out.push({ id: 'c' + tr.i + '_' + k, x: tr.x + f * BS * 6, y: tr.y - (0.25 - f * f) * 240 });
      }
      return out;
    },
    balloon(i) {
      if (i < 1 || U.hash(i, 31, this.seed) < 0.5) return null;
      const x = i * BALLOON_SLOT + U.hash(i, 32, this.seed) * BS * 20;
      return { id: 'b' + i, i, x, y: -Math.min(2400, Math.max(330, x * 0.19)), v: U.hash(i, 33, this.seed) };
    },

    // ---------------------------------------------------------------- payouts
    // scale with how far the player has come, so a crate means the same on every planet
    pay(G, floor, frac) {
      const S = G.S, w = G.world;
      const zv = E.zoneAtDepth(S.best).value;
      const base = floor * zv * w.wv;
      const rel = S.world === S.worldMax ? S.stats.bestRunCoins * frac : 0;
      return G.gain(Math.round(Math.max(base, rel)), 'bonus');
    },
    note(G, o, sub, big) {
      const d = o.def;
      UI().banner({ at: { x: o.x, y: -70 }, kind: 'surface', title: d.name, sub, big, color: d.color, icon: d.icon ? Icons.iconURL('shape', d.icon) : null });
      DI.Analytics.track('surface_object', { kind: o.kind, dist: Math.round(G.drill.x / SURF), run: G.S.runs + 1 });
    },

    // ---------------------------------------------------------------- flight legs
    // carry on from where the drill is now, to a landing extraM further along
    leg(G, extraM, o) {
      const f = G.flight, run = G.run, x = G.drill.x, y = G.drill.y;
      const x1 = G.snapX(f.x1 + extraM * SURF);
      G.flight = {
        x0: x, y0: y, x1, h: (x1 - x) * (o.arc || 0.16) + Math.max(0, -y) * 0.05,
        T: o.T || U.clamp(0.8 + Math.sqrt(extraM) * 0.1, 0.9, 3), boosts: f.boosts, boostT: o.kick || 0,
        spring: !!o.spring, leanFrom: o.spring ? G.drill.ang : null,
      };
      G.stateT = 0;
      G.makeWorld(x1);
      run.surfLegs = (run.surfLegs || 0) + (o.free ? 0 : 1);
      return extraM;
    },
    bounceRoom(run) { return (run.surfLegs || 0) < MAX_LEGS; },

    // ---------------------------------------------------------------- passing through
    fly(G) {
      const run = G.run, x = G.drill.x, y = G.drill.y;
      const px = run.surfX == null ? 0 : run.surfX;
      run.surfX = x;
      if (x <= px) return;
      const yAt = (cx) => { const pyy = run.surfY == null ? y : run.surfY; return pyy + (y - pyy) * ((cx - px) / (x - px)); };
      for (let i = Math.floor(px / SLOT) - 1; i <= Math.floor(x / SLOT); i++) {
        const o = this.at(i);
        if (!o || o.x <= px || o.x > x || this.gone.has(o.id)) continue;
        const h = yAt(o.x);
        if (o.def.smash && h > -130) this.smash(G, o);
        else if (o.kind === 'turbine' && h > -560 && (run.gusts || 0) < MAX_GUSTS) this.gust(G, o);
      }
      for (let i = Math.floor(px / TRAIL_SLOT) - 1; i <= Math.floor(x / TRAIL_SLOT); i++) {
        const tr = this.trail(i);
        if (!tr) continue;
        for (const c of this.coinsOf(tr)) {
          if (c.x <= px || c.x > x || this.gone.has(c.id) || Math.abs(yAt(c.x) - c.y) > 95) continue;
          this.gone.add(c.id);
          const v = this.pay(G, 1, 0.002);
          FX.text(c.x, c.y - 20, '+' + U.fmt(v), '#ffe066', 22, { life: 0.8, vy: -70 });
          FX.sparks(c.x, c.y, 5, '#ffe066', 0, Math.PI, 0.6);
          A().play('coin');
        }
      }
      for (let i = Math.floor(px / BALLOON_SLOT) - 1; i <= Math.floor(x / BALLOON_SLOT); i++) {
        const b = this.balloon(i);
        if (b && b.x > px && b.x <= x && !this.gone.has(b.id) && Math.abs(yAt(b.x) - b.y) < 150) this.popBalloon(G, b);
      }
      run.surfY = y;
    },

    smash(G, o) {
      this.gone.add(o.id);
      const v = this.pay(G, o.def.floor, o.def.frac);
      const col = this.propColors(G, o);
      FX.chunks(o.x, -30, col, DI.Q.mini ? 6 : 14, 1.2);
      FX.dust(o.x, -8, 6, '#d8c3a0', 1.2, 0.7);
      FX.text(o.x, -90, '+' + U.fmt(v), '#ffe066', 26, { life: 1, vy: -60 });
      G.shake(5);
      A().play('hazard');
      A().play('coin');
      UI().coinBurstWorld(G.sx(o.x), G.sy(-30), 4);
    },

    gust(G, o) {
      const run = G.run;
      run.gusts = (run.gusts || 0) + 1;
      const f = G.flight, d = f.x1 / SURF;
      const extra = this.leg(G, Math.max(8, d * 0.07), { free: true, T: Math.max(0.7, f.T * (1 - Math.min(1, G.stateT / f.T)) + 0.35), kick: 0.3 });
      FX.ring(o.x, -120, 160, '#d8f1ff', 0.4, 6);
      A().play('whoosh');
      this.note(G, o, '+' + Math.round(extra) + ' m');
    },

    popBalloon(G, b) {
      this.gone.add(b.id);
      const v = this.pay(G, 40, 0.07);
      let sub = '+' + U.fmt(v);
      if (b.v < 0.45) {
        const z = E.zoneAtDepth(G.S.best);
        const item = G.world.pickRelic(z);
        const isNew = G.addItem(item);
        G.run.finds.push({ id: item, isNew });
        sub += ' · ' + DI.ITEMS[item].name;
      }
      FX.ring(b.x, b.y, 160, '#ff6b8a', 0.45, 8);
      FX.confetti(b.x, b.y, 40);
      FX.text(b.x, b.y - 60, '+' + U.fmt(v), '#ffffff', 30, { life: 1.3, vy: -40 });
      G.hitstop = 0.06;
      A().play('chest');
      UI().banner({ at: { x: b.x, y: b.y }, kind: 'surface', big: true, title: 'TREASURE BALLOON!', sub, color: '#ff6b8a', icon: Icons.iconURL('shape', 'star|#ff6b8a') });
      DI.Analytics.track('surface_object', { kind: 'balloon', dist: Math.round(b.x / SURF), run: G.S.runs + 1 });
    },

    // ---------------------------------------------------------------- landing
    // what a landing at x would meet
    pick(x) {
      const i0 = Math.floor(x / SLOT);
      let on = null, ramp = null;
      for (let i = i0 - 1; i <= i0 + 1; i++) {
        const o = this.at(i);
        if (!o || this.gone.has(o.id)) continue;
        const dx = o.x - x;
        if (o.def.land && Math.abs(dx) <= CATCH) on = on && Math.abs(on.x - x) < Math.abs(dx) ? on : o;
        else if (o.kind === 'ramp' && dx > 0 && dx <= RAMP_RUNUP) ramp = o;
      }
      return { on, ramp };
    },

    // Flights end at ground level, so whatever launches the drill back up has to catch the tip on the way down.
    // Stops the flight at the exact point of contact, whatever the frame rate. True when the flight carries on.
    touch(G) {
      const f = G.flight, u = Math.min(1, G.stateT / f.T), prev = f.touchU || 0;
      f.touchU = u;
      if (f.skid || -f.y0 - 4 * f.h * (1 - 2 * u) <= 0) return false; // only on the way down
      const { on, ramp } = this.pick(f.x1);
      const o = on && SPRING[on.kind] ? on : on ? null : ramp;
      if (!o) return false;
      const at = (t) => ({ x: f.x0 + (f.x1 - f.x0) * t, y: f.y0 * (1 - t) - 4 * f.h * t * (1 - t) });
      const hit = (t) => { const p = at(t); return p.y >= topOf(o, p.x - o.x); };
      if (!hit(u)) return false;
      // out of bounces: the drill goes through it, so it breaks instead of being passed through
      if (!this.bounceRoom(G.run)) { if (on) this.wreck(G, o); return false; }
      let a = prev, b = u;
      for (let k = 0; k < 8; k++) { const m = (a + b) / 2; if (hit(m)) b = m; else a = m; }
      const p = at(b);
      G.drill.x = p.x; G.drill.y = p.y;
      return this.land(G, f.x1);
    },

    wreck(G, o) {
      if (o.kind === 'geyser') return;
      this.gone.add(o.id);
      FX.chunks(o.x, -30, [o.def.color, '#6b4a2b', '#3c4047'], DI.Q.mini ? 8 : 20, 1.3);
      FX.dust(o.x, -8, 6, '#d8c3a0', 1.2, 0.7);
      A().play('hazard');
    },

    // returns true when the flight carries on instead of ending here
    land(G, aimX) {
      const f = G.flight, x = G.drill.x, run = G.run;
      if (f.then) { const then = f.then; f.then = null; then(); return true; }
      const i0 = Math.floor(x / SLOT);
      for (let i = i0 - 1; i <= i0 + 1; i++) {
        const o = this.at(i);
        // the shockwave flattens whatever stands nearby
        if (o && o.def.smash && !this.gone.has(o.id) && Math.abs(o.x - x) < BS * 2.2) this.smash(G, o);
      }
      let { on, ramp } = this.pick(aimX == null ? x : aimX);
      const room = this.bounceRoom(run);
      if (on) {
        if (on.kind === 'trampoline' || on.kind === 'mushroom') { if (room) return this.bounce(G, on); on = null; }
        else if (on.kind === 'ramp') { if (room) return this.rideRamp(G, on); on = null; }
        else if (on.kind === 'cannon') { if (room) return this.enterCannon(G, on); on = null; }
        else if (on.kind === 'geyser') { if (room) return this.geyser(G, on); on = null; }
        else { this.digObject(G, on); return false; }
      }
      if (ramp && room) return this.skid(G, ramp);
      return false;
    },

    distNow(G) { return G.drill.x / SURF; },

    bounce(G, o) {
      const mush = o.kind === 'mushroom', d = this.distNow(G);
      const chain = G.run.surfLegs || 0;
      const x = G.drill.x, top = G.drill.y, dx = x - o.x;
      // the surface gives under the drill, holds through the freeze-frame, then throws it back up
      // (a glancing hit on the side stays where it touched)
      const onTop = top <= SPRING[o.kind].top(dx) + 2;
      const press = onTop ? SPRING[o.kind].press * (mush ? 1 - Math.min(1, (dx / 64) ** 2) : 1) : 0;
      G.drill.y += press;
      const extra = this.leg(G, Math.max(mush ? 28 : 18, d * (mush ? 0.4 : 0.26) * (chain ? 0.8 : 1)), { arc: mush ? 0.42 : 0.34, kick: 0.5, spring: true });
      const hold = 0.08;
      this._hit.set(o.id, { t: G.t + hold, dx });
      G.drill.stretch = -0.5;
      G.drill.flipT = FLIP;
      G.hitstop = hold;
      G.shake(12 + chain * 2);
      G.zoomPunch = -0.09;
      this.springBurst(o, x, top, chain);
      A().boing(chain); A().play('whoosh');
      UI().banner({ at: { x: o.x, y: -70 }, kind: 'surface', title: o.def.name + (chain ? ' x' + (chain + 1) : '') + '!', sub: '+' + Math.round(extra) + ' m', big: chain > 0, color: o.def.color, icon: Icons.iconURL('shape', o.def.icon) });
      DI.Analytics.track('surface_object', { kind: o.kind, dist: Math.round(x / SURF), run: G.S.runs + 1 });
      return true;
    },

    springBurst(o, x, y, chain) {
      const c = o.def.color, mini = DI.Q.mini;
      FX.glow(x, y, 90, c, 0.22);
      FX.ring(x, y, 150 + chain * 25, '#ffffff', 0.3, 5);
      FX.ring(x, y, 230 + chain * 35, c, 0.5, 5);
      FX.sparks(x, y, 22, c, -Math.PI / 2, 1.0, 1.5);
      FX.sparks(x, y, 10, '#ffffff', -Math.PI / 2, 0.45, 2);
      // a puff along the ground each way, blown out by the hit
      for (let i = 0; i < (mini ? 6 : 18); i++) {
        const side = i % 2 ? 1 : -1;
        FX.add({ k: 'dust', x: o.x + side * U.rand(20, 60), y: -10, vx: side * U.rand(220, 620), vy: U.rand(-70, -10), g: 40, s: U.rand(9, 18), grow: 34, c: '#e9dcc0', life: U.rand(0.35, 0.65), drag: 4 });
      }
      // mushrooms shed spores, trampolines throw stars
      if (o.kind === 'mushroom') {
        for (let i = 0; i < (mini ? 8 : 22); i++) {
          const a = -Math.PI / 2 + U.rand(-1.15, 1.15), sp = U.rand(160, 560);
          FX.add({ k: 'dust', x: x + U.rand(-30, 30), y: y + U.rand(-8, 8), vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: -30, s: U.rand(5, 11), grow: 7, c: U.pick(['#ff9ae6', '#fff6fb', '#ff6bd0']), life: U.rand(0.7, 1.3), drag: 2.2 });
        }
      } else {
        for (let i = 0; i < (mini ? 5 : 12); i++) {
          const a = -Math.PI / 2 + U.rand(-1.1, 1.1), sp = U.rand(320, 760);
          FX.add({ k: 'chunk', x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 900, s: U.rand(4, 7), rot: Math.random() * 6, vr: U.rand(-14, 14), c: U.pick(['#ffffff', '#7fd0ff', '#ffcf33', c]), life: U.rand(0.45, 0.8) });
        }
      }
    },

    // a short landing grinds along the ground to the foot of the ramp
    skid(G, o) {
      const f = G.flight, x = G.drill.x, foot = o.x + RAMP.x0;
      if (x >= foot) return this.rideRamp(G, o);
      G.flight = { x0: x, y0: G.drill.y, y1: -8, x1: foot, h: 0, T: U.clamp((foot - x) / 900, 0.1, 0.34), boosts: f.boosts, boostT: 0, skid: true, then: () => this.rideRamp(G, o) };
      G.stateT = 0;
      G.shake(6);
      A().play('impact');
      return true;
    },

    // up the deck and off the lip, so the jump starts in the air instead of inside the ramp
    rideRamp(G, o) {
      const f = G.flight, x = G.drill.x, lip = o.x + RAMP.x1;
      G.flight = { x0: x, y0: G.drill.y, y1: RAMP.y1 - 6, x1: lip, h: 0, T: U.clamp((lip - x) / 1400, 0.07, 0.16), boosts: f.boosts, boostT: 0, skid: true, then: () => this.rampJump(G, o) };
      G.stateT = 0;
      G.shake(5);
      return true;
    },

    rampJump(G, o) {
      const d = this.distNow(G);
      // flat shots carry their speed: the lower the launch, the better the jump
      const low = U.clamp((60 - (G.meter.angleDeg || 45)) / 45, 0, 1);
      const extra = this.leg(G, Math.max(14, d * (0.13 + low * 0.17)), { arc: 0.2, kick: 0.6 });
      G.hitstop = 0.05;
      G.shake(10);
      FX.sparks(o.x, -40, 24, '#ffd36b', -0.6, 0.5, 1.3);
      A().play('boost'); A().play('whoosh');
      this.note(G, o, '+' + Math.round(extra) + ' m');
      return true;
    },

    geyser(G, o) {
      const d = this.distNow(G), f = G.flight;
      f.boosts = (f.boosts || 0) + 1;
      UI().flightBoosts(f.boosts);
      const extra = this.leg(G, Math.max(10, d * 0.1), { arc: 0.75, T: 2.3, kick: 0.5, spring: true });
      this._hit.set(o.id, G.t);
      G.shake(12);
      FX.ring(o.x, -40, 170, '#bfeaff', 0.5, 9);
      for (let i = 0; i < (DI.Q.mini ? 8 : 24); i++) FX.add({ k: 'dust', x: o.x + U.rand(-26, 26), y: -20, vx: U.rand(-90, 90), vy: U.rand(-1000, -520), g: 500, s: U.rand(8, 18), grow: 16, c: '#eef8ff', life: U.rand(0.6, 1.1) });
      A().play('splash'); A().play('whoosh');
      this.note(G, o, '+1 boost · +' + Math.round(extra) + ' m');
      return true;
    },

    // ---- cannon: the drill drops in, the barrel swings, a tap fires it
    enterCannon(G, o) {
      this.cannonState = { o, t: 0, a: 45 };
      G.drill.x = o.x; G.drill.y = -46;
      G.setState('cannon');
      G.shake(7);
      A().play('impact');
      this.showBoost(false); // tapping fires the cannon here, not a boost
      UI().centerMsg('TAP TO FIRE!', '', '#ff9a5a');
      return true;
    },
    showBoost(on) {
      const box = document.getElementById('flBoost');
      if (box) box.style.visibility = on ? '' : 'hidden';
    },
    updateCannon(G, dt) {
      const c = this.cannonState;
      if (!c) return;
      c.t += dt;
      c.a = 45 + Math.sin(c.t * 3.1) * 32;
      if (c.t > 3.2) this.fireCannon(G);
    },
    fireCannon(G) {
      const c = this.cannonState;
      if (!c || c.t < 0.15) return;
      this.cannonState = null;
      this.showBoost(true);
      const off = Math.abs(c.a - 45), perfect = off <= 6, good = off <= 16;
      const d = this.distNow(G);
      const rad = (c.a * Math.PI) / 180;
      G.drill.x = c.o.x + Math.cos(rad) * 60; G.drill.y = -46 - Math.sin(rad) * 60;
      G.setState('flight');
      G.flight.x1 = G.snapX(c.o.x);
      const extra = this.leg(G, Math.max(perfect ? 30 : 16, d * (perfect ? 0.42 : good ? 0.26 : 0.14)), { arc: 0.28 + 0.2 * Math.sin(rad), kick: 0.75 });
      G.hitstop = 0.07;
      G.shake(15);
      G.zoomPunch = -0.12;
      FX.ring(G.drill.x, G.drill.y, 180, '#ffb03a', 0.45, 10);
      FX.dust(G.drill.x, G.drill.y, 14, '#e9dcc0', 1, 1);
      FX.sparks(G.drill.x, G.drill.y, 30, '#ffd36b', -rad, 0.4, 1.4);
      A().play('explode');
      UI().banner({ at: { x: c.o.x, y: -130 }, kind: 'surface', big: perfect, title: perfect ? 'PERFECT SHOT!' : good ? 'GOOD SHOT!' : 'WEAK SHOT', sub: '+' + Math.round(extra) + ' m', color: perfect ? '#7dff5a' : good ? '#ffcf33' : '#ff9a5a', icon: Icons.iconURL('shape', 'tnt|#ff7a5a') });
      DI.Analytics.track('surface_object', { kind: 'cannon', grade: perfect ? 'perfect' : good ? 'good' : 'weak', dist: Math.round(c.o.x / SURF), run: G.S.runs + 1 });
    },

    // ---- things that change the dig below
    digObject(G, o) {
      const run = G.run, x = G.drill.x;
      const base = E.impactRows(this.distNow(G));
      if (o.kind === 'target') {
        const bull = Math.abs(o.x - x) < BS * 0.5;
        run.coinMult = bull ? 1.4 : 1.15;
        FX.confetti(o.x, -20, bull ? 50 : 16);
        A().play(bull ? 'milestone' : 'chest');
        UI().banner({ at: { x: o.x, y: -70 }, kind: 'surface', big: bull, title: bull ? 'BULLSEYE!' : 'ON TARGET!', sub: 'Coins ×' + run.coinMult, color: o.def.color, icon: Icons.iconURL('shape', o.def.icon) });
        DI.Analytics.track('surface_object', { kind: 'target', bull, run: G.S.runs + 1 });
        return;
      }
      if (o.kind === 'rig') {
        const rows = U.clamp(Math.round(base * 0.5), 10, 55);
        run.plunge += rows;
        A().play('quake');
        this.note(G, o, '+' + rows + ' blocks');
      } else if (o.kind === 'outcrop') {
        this.gone.add(o.id);
        run.surfForced = [base + 2, base + 8, base + 15].map((row) => ({ row, kind: 'vein', over: true }));
        G.makeWorld(x);
        FX.sparks(x, -20, 26, '#ffcc33', -Math.PI / 2, 1, 1.1);
        A().play('vein');
        this.note(G, o);
      } else if (o.kind === 'repair') {
        run.durMax *= 1.35;
        run.dur = run.durMax;
        FX.ring(x, -30, 120, '#7dff5a', 0.5, 7);
        A().play('fuel');
        this.note(G, o, '+35% fuel');
      } else if (o.kind === 'sinkhole') {
        run.surfForced = [{ row: base + 1, kind: 'cave', over: true }, { row: base + 13, kind: 'cave', over: true }];
        G.makeWorld(x);
        A().play('warp');
        this.note(G, o);
      }
    },

    // ---------------------------------------------------------------- drawing
    draw(ctx, G, left, right) {
      const t = G.t, world = G.S.world || 0;
      for (let i = Math.floor(left / SLOT) - 1; i <= Math.ceil(right / SLOT) + 1; i++) {
        const o = this.at(i);
        if (!o || this.gone.has(o.id) || o.x < left - 200 || o.x > right + 200) continue;
        ctx.save();
        ctx.translate(o.x, -6);
        this.painters[o.kind].call(this, ctx, o, t, world, G);
        ctx.restore();
      }
      // things in the air only exist once there is a flight to meet them
      if (G.state === 'idle' || G.state === 'angle' || G.state === 'power' || G.state === 'prelaunch') return;
      for (let i = Math.floor(left / TRAIL_SLOT) - 1; i <= Math.ceil(right / TRAIL_SLOT) + 1; i++) {
        const tr = this.trail(i);
        if (!tr) continue;
        for (const c of this.coinsOf(tr)) if (!this.gone.has(c.id)) this.drawCoin(ctx, c.x, c.y, t);
      }
      for (let i = Math.floor(left / BALLOON_SLOT) - 1; i <= Math.ceil(right / BALLOON_SLOT) + 1; i++) {
        const b = this.balloon(i);
        if (b && !this.gone.has(b.id)) this.drawBalloon(ctx, b, t);
      }
    },

    drawCoin(ctx, x, y, t) {
      const w = Math.abs(Math.cos(t * 4 + x * 0.01)) * 13 + 3;
      ctx.fillStyle = '#b8860b';
      ctx.beginPath(); ctx.ellipse(x, y + 2, w, 15, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#ffd23a';
      ctx.beginPath(); ctx.ellipse(x, y, w, 15, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.65)';
      ctx.beginPath(); ctx.ellipse(x - w * 0.25, y - 4, w * 0.3, 5, 0, 0, Math.PI * 2); ctx.fill();
    },

    drawBalloon(ctx, b, t) {
      const y = b.y + Math.sin(t * 1.4 + b.i) * 12, x = b.x + Math.sin(t * 0.8 + b.i) * 8;
      const col = ['#ff4f6d', '#ffb03a', '#c06bff', '#3fb6ff'][Math.floor(b.v * 4)];
      ctx.strokeStyle = 'rgba(60,40,30,.8)'; ctx.lineWidth = 2.5;
      ctx.beginPath(); ctx.moveTo(x - 20, y + 50); ctx.lineTo(x - 13, y + 98); ctx.moveTo(x + 20, y + 50); ctx.lineTo(x + 13, y + 98); ctx.stroke();
      const g = ctx.createRadialGradient(x - 18, y - 22, 6, x, y, 74);
      g.addColorStop(0, U.shade(col, 0.55)); g.addColorStop(0.55, col); g.addColorStop(1, U.shade(col, -0.35));
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.ellipse(x, y, 54, 64, 0, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = 'rgba(22,16,34,.55)'; ctx.lineWidth = 2.5; ctx.stroke();
      ctx.strokeStyle = 'rgba(255,255,255,.25)'; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.ellipse(x, y, 22, 63, 0, 0, Math.PI * 2); ctx.stroke();
      // treasure basket
      ctx.fillStyle = '#9a5b2c'; U.roundRect(ctx, x - 18, y + 96, 36, 24, 5); ctx.fill();
      ctx.strokeStyle = 'rgba(22,16,34,.55)'; ctx.stroke();
      ctx.fillStyle = '#ffd23a'; ctx.beginPath(); ctx.arc(x - 6, y + 96, 7, Math.PI, 0); ctx.arc(x + 7, y + 96, 6, Math.PI, 0); ctx.fill();
    },

    propColors(G, o) {
      const w = G.S.world || 0;
      if (o.kind === 'crate') return [CRATE[w].a, CRATE[w].b, '#4a3020'];
      return [['#c9a35a', '#d0533a', '#6b4a2b'], ['#a8aeb8', '#7a3a26', '#3a3f46'], ['#ffffff', '#bfeaff', '#7fb4dd'], ['#3a2020', '#ff6a1f', '#1a0a0a'], ['#86ff5a', '#6a3aaa', '#2a1a5a'], ['#ffe066', '#1a1a2a', '#3a3a5a']][w];
    },

    painters: {
      trampoline(ctx, o, t) {
        const sq = wobble(this._hit && this._hit.get(o.id), t, 24, 5.5) * SPRING.trampoline.press;
        const hx = this._hit && this._hit.get(o.id) ? U.clamp(this._hit.get(o.id).dx, -30, 30) : 0;
        const rim = sq * 0.35;
        ctx.strokeStyle = '#3c4047'; ctx.lineWidth = 6; ctx.lineCap = 'round';
        for (const sx of [-44, 44]) { ctx.beginPath(); ctx.moveTo(sx, -30 + rim); ctx.lineTo(sx + Math.sign(sx) * 7, 0); ctx.stroke(); }
        // springs, squeezed along with the frame
        ctx.strokeStyle = '#c9ced4'; ctx.lineWidth = 2.5;
        for (const sx of [-30, -10, 10, 30]) { ctx.beginPath(); for (let k = 0; k <= 4; k++) ctx.lineTo(sx + (k % 2 ? 4 : -4), -6 - k * (5 - rim * 0.25)); ctx.stroke(); }
        ctx.lineCap = 'butt';
        ctx.fillStyle = '#ff9a2e'; U.roundRect(ctx, -56, -38 + rim, 112, 11, 5); ctx.fill();
        // the mat dips under the drill and whips back past flat
        const my = -33 + rim, cy = my + (sq - rim) * 2;
        ctx.fillStyle = '#2f7fd8'; ctx.beginPath(); ctx.moveTo(-48, my); ctx.quadraticCurveTo(hx, cy - 16, 48, my); ctx.quadraticCurveTo(hx, cy + 16, -48, my); ctx.fill();
        ctx.strokeStyle = '#7fd0ff'; ctx.lineWidth = 3; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(-34, my - 2); ctx.quadraticCurveTo(hx - 8, cy - 8, 18, my - 2 + (cy - my) * 0.3); ctx.stroke();
        ctx.lineCap = 'butt';
      },
      mushroom(ctx, o, t) {
        const sq = wobble(this._hit && this._hit.get(o.id), t, 20, 4.5) * SPRING.mushroom.press / 116 + Math.sin(t * 2 + o.i) * 0.02;
        ctx.scale(1 + sq, 1 - sq);
        ctx.fillStyle = '#ffeef8';
        ctx.beginPath(); ctx.moveTo(-17, 0); ctx.quadraticCurveTo(-9, -36, -13, -62); ctx.lineTo(13, -62); ctx.quadraticCurveTo(9, -36, 17, 0); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = 'rgba(22,16,34,.5)'; ctx.lineWidth = 2.5; ctx.stroke();
        const g = ctx.createLinearGradient(0, -110, 0, -55);
        g.addColorStop(0, '#ff9ae6'); g.addColorStop(1, '#d83aa8');
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.moveTo(-64, -56); ctx.quadraticCurveTo(-58, -116, 0, -116); ctx.quadraticCurveTo(58, -116, 64, -56); ctx.quadraticCurveTo(0, -42, -64, -56); ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#fff6fb';
        for (const [sx, sy, r] of [[-30, -80, 10], [6, -97, 12], [34, -74, 8], [-6, -68, 6]]) { ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI * 2); ctx.fill(); }
      },
      ramp(ctx) {
        ctx.fillStyle = '#6b4a2b';
        ctx.fillRect(-46, -14, 8, 14); ctx.fillRect(4, -40, 8, 40); ctx.fillRect(58, -66, 8, 66);
        ctx.beginPath(); ctx.moveTo(-96, -2); ctx.lineTo(76, -78); ctx.lineTo(76, -62); ctx.lineTo(-96, 8); ctx.closePath();
        const g = ctx.createLinearGradient(0, -80, 0, 8);
        g.addColorStop(0, '#d8d4cc'); g.addColorStop(1, '#8a8678');
        ctx.fillStyle = g; ctx.fill();
        ctx.strokeStyle = 'rgba(22,16,34,.55)'; ctx.lineWidth = 2.5; ctx.stroke();
        // hazard chevrons up the deck
        ctx.fillStyle = '#ffcf33';
        for (let k = 0; k < 4; k++) {
          const bx = -60 + k * 34, by = -14 - k * 15;
          ctx.beginPath(); ctx.moveTo(bx, by + 6); ctx.lineTo(bx + 14, by + 1); ctx.lineTo(bx + 14, by + 8); ctx.lineTo(bx, by + 13); ctx.fill();
        }
      },
      cannon(ctx, o, t, w, G) {
        const c = this.cannonState;
        const live = c && c.o.id === o.id;
        const a = live ? c.a : 45 + Math.sin(t * 0.7 + o.i) * 6;
        // aim marks
        if (live) {
          ctx.strokeStyle = 'rgba(255,255,255,.3)'; ctx.lineWidth = 12;
          ctx.beginPath(); ctx.arc(0, -40, 105, -(77 * Math.PI) / 180, -(13 * Math.PI) / 180); ctx.stroke();
          ctx.strokeStyle = '#ffcf33';
          ctx.beginPath(); ctx.arc(0, -40, 105, -(61 * Math.PI) / 180, -(29 * Math.PI) / 180); ctx.stroke();
          ctx.strokeStyle = '#7dff5a';
          ctx.beginPath(); ctx.arc(0, -40, 105, -(51 * Math.PI) / 180, -(39 * Math.PI) / 180); ctx.stroke();
        }
        ctx.save();
        ctx.translate(0, -40); ctx.rotate(-(a * Math.PI) / 180);
        const g = ctx.createLinearGradient(0, -24, 0, 24);
        g.addColorStop(0, '#6a717b'); g.addColorStop(0.4, '#2d3137'); g.addColorStop(1, '#14161c');
        ctx.fillStyle = g; U.roundRect(ctx, -30, -21, 104, 42, 12); ctx.fill();
        ctx.strokeStyle = 'rgba(22,16,34,.7)'; ctx.lineWidth = 2.5; ctx.stroke();
        ctx.fillStyle = '#ff7a5a'; ctx.fillRect(8, -22, 10, 44); ctx.fillRect(58, -24, 16, 48);
        ctx.fillStyle = '#0a0b0e'; ctx.beginPath(); ctx.ellipse(74, 0, 6, 17, 0, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
        // carriage
        ctx.fillStyle = '#6b4a2b'; U.roundRect(ctx, -46, -26, 92, 18, 5); ctx.fill();
        for (const sx of [-32, 32]) {
          ctx.fillStyle = '#3a2615'; ctx.beginPath(); ctx.arc(sx, -14, 15, 0, Math.PI * 2); ctx.fill();
          ctx.fillStyle = '#c9a35a'; ctx.beginPath(); ctx.arc(sx, -14, 5, 0, Math.PI * 2); ctx.fill();
        }
      },
      geyser(ctx, o, t) {
        ctx.fillStyle = '#6e6862';
        for (const [sx, r] of [[-30, 18], [28, 16], [-12, 13], [12, 12]]) { ctx.beginPath(); ctx.arc(sx, -4, r, Math.PI, 0); ctx.fill(); }
        ctx.fillStyle = '#26221f'; ctx.beginPath(); ctx.ellipse(0, -8, 17, 6, 0, 0, Math.PI * 2); ctx.fill();
        // lazy steam column
        for (let k = 0; k < 5; k++) {
          const f = (t * 0.55 + k / 5 + o.v) % 1;
          ctx.fillStyle = `rgba(240,248,255,${0.5 * (1 - f)})`;
          ctx.beginPath(); ctx.arc(Math.sin(f * 7 + k) * 10, -14 - f * 118, 7 + f * 19, 0, Math.PI * 2); ctx.fill();
        }
      },
      turbine(ctx, o, t) {
        ctx.fillStyle = '#e8eef4';
        ctx.beginPath(); ctx.moveTo(-9, 0); ctx.lineTo(-4, -170); ctx.lineTo(4, -170); ctx.lineTo(9, 0); ctx.fill();
        ctx.strokeStyle = 'rgba(22,16,34,.45)'; ctx.lineWidth = 2; ctx.stroke();
        ctx.translate(0, -172);
        ctx.fillStyle = '#ffffff'; ctx.strokeStyle = 'rgba(22,16,34,.5)';
        for (let k = 0; k < 3; k++) {
          ctx.save(); ctx.rotate(t * 3.2 + o.i + (k * Math.PI * 2) / 3);
          ctx.beginPath(); ctx.moveTo(-5, 0); ctx.quadraticCurveTo(-11, -46, -2, -94); ctx.quadraticCurveTo(7, -48, 5, 0); ctx.closePath(); ctx.fill(); ctx.stroke();
          ctx.restore();
        }
        ctx.fillStyle = '#ff9a2e'; ctx.beginPath(); ctx.arc(0, 0, 8, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      },
      crate(ctx, o, t, w) {
        const C = CRATE[w];
        if (o.v < 0.5) {
          ctx.fillStyle = C.a; U.roundRect(ctx, -26, -52, 52, 52, 4); ctx.fill();
          ctx.strokeStyle = C.b; ctx.lineWidth = 5; ctx.strokeRect(-23, -49, 46, 46);
          ctx.beginPath(); ctx.moveTo(-22, -48); ctx.lineTo(22, -4); ctx.moveTo(22, -48); ctx.lineTo(-22, -4); ctx.lineWidth = 4; ctx.stroke();
        } else {
          ctx.fillStyle = C.a; U.roundRect(ctx, -21, -58, 42, 58, 10); ctx.fill();
          ctx.fillStyle = C.b; ctx.fillRect(-21, -46, 42, 6); ctx.fillRect(-21, -18, 42, 6);
          ctx.strokeStyle = 'rgba(22,16,34,.5)'; ctx.lineWidth = 2.5; U.roundRect(ctx, -21, -58, 42, 58, 10); ctx.stroke();
        }
      },
      prop(ctx, o, t, w) {
        PROPS[w](ctx, o, t);
      },
      target(ctx, o, t) {
        const rings = [[92, '#ffffff'], [70, '#ff4f6d'], [47, '#ffffff'], [25, '#ff4f6d']];
        for (const [r, c] of rings) { ctx.fillStyle = c; ctx.beginPath(); ctx.ellipse(0, 2, r, r * 0.16, 0, 0, Math.PI * 2); ctx.fill(); }
        for (const sg of [-1, 1]) {
          ctx.fillStyle = '#6b4a2b'; ctx.fillRect(sg * 84 - 2, -58, 4, 58);
          ctx.fillStyle = '#ff4f6d'; ctx.beginPath(); ctx.moveTo(sg * 84 + 2, -58); ctx.lineTo(sg * 84 + 26, -50 + Math.sin(t * 4) * 2); ctx.lineTo(sg * 84 + 2, -42); ctx.fill();
        }
      },
      rig(ctx, o, t) {
        ctx.strokeStyle = '#4a3a30'; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.moveTo(-38, 0); ctx.lineTo(-9, -176); ctx.moveTo(38, 0); ctx.lineTo(9, -176); ctx.stroke();
        ctx.lineWidth = 2.5;
        for (let k = 0; k < 5; k++) {
          const y0 = -k * 34, y1 = -(k + 1) * 34, w0 = 38 - k * 5.8, w1 = 38 - (k + 1) * 5.8;
          ctx.beginPath(); ctx.moveTo(-w0, y0); ctx.lineTo(w1, y1); ctx.moveTo(w0, y0); ctx.lineTo(-w1, y1); ctx.moveTo(-w1, y1); ctx.lineTo(w1, y1); ctx.stroke();
        }
        ctx.fillStyle = '#ffb35a'; ctx.fillRect(-14, -186, 28, 11);
        const bob = Math.sin(t * 2.4 + o.i) * 18;
        ctx.strokeStyle = '#2a2a30'; ctx.beginPath(); ctx.moveTo(0, -176); ctx.lineTo(0, -60 + bob); ctx.stroke();
        ctx.fillStyle = '#8a929c'; ctx.beginPath(); ctx.moveTo(-8, -66 + bob); ctx.lineTo(8, -66 + bob); ctx.lineTo(0, -42 + bob); ctx.fill();
      },
      outcrop(ctx, o, t) {
        for (const [sx, sy, r, c] of [[-34, -8, 24, '#6e6862'], [30, -6, 20, '#5d5853'], [0, -14, 32, '#7f7972']]) {
          ctx.fillStyle = c; ctx.beginPath();
          ctx.moveTo(sx - r, 2); ctx.lineTo(sx - r * 0.6, sy - r * 0.75); ctx.lineTo(sx + r * 0.2, sy - r); ctx.lineTo(sx + r * 0.85, sy - r * 0.3); ctx.lineTo(sx + r, 2); ctx.closePath(); ctx.fill();
          ctx.strokeStyle = 'rgba(22,16,34,.4)'; ctx.lineWidth = 2; ctx.stroke();
        }
        const glow = 0.55 + 0.45 * Math.sin(t * 4 + o.i);
        const col = ['#ffcc33', '#2ee87a', '#ff6bf0', '#8ff0ff'][Math.floor(o.v * 4)];
        ctx.fillStyle = U.rgba(col, 0.25 * glow);
        ctx.beginPath(); ctx.arc(0, -26, 54, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = col;
        for (const [sx, sy, r] of [[-30, -18, 7], [-4, -32, 10], [14, -18, 7], [32, -12, 6], [-14, -14, 5]]) {
          ctx.beginPath(); ctx.moveTo(sx, sy - r); ctx.lineTo(sx + r * 0.8, sy); ctx.lineTo(sx, sy + r); ctx.lineTo(sx - r * 0.8, sy); ctx.fill();
        }
      },
      repair(ctx, o, t) {
        ctx.fillStyle = '#4a525c'; U.roundRect(ctx, -60, -10, 120, 12, 4); ctx.fill();
        ctx.fillStyle = '#e8eef4'; U.roundRect(ctx, -34, -66, 68, 56, 7); ctx.fill();
        ctx.strokeStyle = 'rgba(22,16,34,.5)'; ctx.lineWidth = 2.5; ctx.stroke();
        ctx.fillStyle = '#2bbf4e'; ctx.fillRect(-6, -56, 12, 36); ctx.fillRect(-18, -44, 36, 12);
        // beacon
        ctx.fillStyle = '#3c4047'; ctx.fillRect(-3, -82, 6, 16);
        ctx.fillStyle = U.rgba('#7dff5a', 0.5 + 0.5 * Math.sin(t * 6)); ctx.beginPath(); ctx.arc(0, -86, 8, 0, Math.PI * 2); ctx.fill();
      },
      sinkhole(ctx, o, t) {
        ctx.fillStyle = '#3a2a1c'; ctx.beginPath(); ctx.ellipse(0, 3, 74, 13, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#0a0705'; ctx.beginPath(); ctx.ellipse(0, 4, 56, 9, 0, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#3a2a1c'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(-74, 2); ctx.lineTo(-96, 6); ctx.moveTo(74, 2); ctx.lineTo(100, -1); ctx.stroke();
        // warning sign
        ctx.fillStyle = '#6b4a2b'; ctx.fillRect(66, -48, 5, 48);
        ctx.fillStyle = '#ffcf33'; ctx.beginPath(); ctx.moveTo(68, -78); ctx.lineTo(92, -40); ctx.lineTo(44, -40); ctx.closePath(); ctx.fill();
        ctx.strokeStyle = 'rgba(22,16,34,.6)'; ctx.lineWidth = 2; ctx.stroke();
        ctx.fillStyle = '#1b1020'; ctx.fillRect(66, -66, 4, 14); ctx.fillRect(66, -49, 4, 4);
      },
    },
  };

  // crate colors per planet
  const CRATE = [
    { a: '#c9914f', b: '#7a4f24' }, { a: '#b06a4a', b: '#5a2a18' }, { a: '#bfe2f5', b: '#5f93b8' },
    { a: '#4a3333', b: '#ff6a1f' }, { a: '#5a3a9a', b: '#86ff5a' }, { a: '#2a2a4a', b: '#ffe066' },
  ];

  // something to smash on each planet
  const PROPS = [
    // Earth: a scarecrow, or a parked car
    (ctx, o) => {
      if (o.v < 0.5) {
        ctx.fillStyle = '#6b4a2b'; ctx.fillRect(-3, -86, 6, 86); ctx.fillRect(-32, -66, 64, 5);
        ctx.fillStyle = '#d0533a'; U.roundRect(ctx, -17, -70, 34, 34, 5); ctx.fill();
        ctx.fillStyle = '#ecd18a'; ctx.beginPath(); ctx.arc(0, -86, 13, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#3a2615'; ctx.fillRect(-20, -98, 40, 4); U.roundRect(ctx, -11, -112, 22, 16, 3); ctx.fill();
      } else {
        const col = ['#d0533a', '#3f7bff', '#2bbf4e'][Math.floor(o.v * 6) % 3];
        ctx.fillStyle = col; U.roundRect(ctx, -60, -32, 120, 26, 10); ctx.fill();
        ctx.beginPath(); ctx.moveTo(-34, -30); ctx.lineTo(-20, -56); ctx.lineTo(24, -56); ctx.lineTo(40, -30); ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#bfeaff'; ctx.beginPath(); ctx.moveTo(-25, -32); ctx.lineTo(-15, -51); ctx.lineTo(19, -51); ctx.lineTo(31, -32); ctx.closePath(); ctx.fill();
        ctx.fillStyle = '#1a1a20';
        for (const sx of [-34, 34]) { ctx.beginPath(); ctx.arc(sx, -7, 11, 0, Math.PI * 2); ctx.fill(); }
      }
    },
    // Mars: an old rover
    (ctx, o, t) => {
      ctx.strokeStyle = '#3a3f46'; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(-34, -10); ctx.lineTo(-20, -26); ctx.lineTo(0, -10); ctx.lineTo(20, -26); ctx.lineTo(34, -10); ctx.stroke();
      ctx.fillStyle = '#a8aeb8'; U.roundRect(ctx, -32, -44, 64, 20, 5); ctx.fill();
      ctx.fillStyle = '#d8a040'; ctx.fillRect(-28, -50, 40, 6);
      ctx.fillStyle = '#3a3f46'; ctx.fillRect(16, -70, 4, 26); U.roundRect(ctx, 10, -80, 20, 12, 3); ctx.fill();
      ctx.fillStyle = '#ff4f3a'; ctx.beginPath(); ctx.arc(25, -74, 2.4, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#20232b';
      for (const sx of [-34, 0, 34]) { ctx.beginPath(); ctx.arc(sx, -9, 9, 0, Math.PI * 2); ctx.fill(); }
    },
    // Glacia: a snowman
    (ctx) => {
      ctx.fillStyle = '#ffffff'; ctx.strokeStyle = 'rgba(70,110,150,.5)'; ctx.lineWidth = 2;
      for (const [y, r] of [[-22, 24], [-58, 18], [-84, 13]]) { ctx.beginPath(); ctx.arc(0, y, r, 0, Math.PI * 2); ctx.fill(); ctx.stroke(); }
      ctx.fillStyle = '#ff8a3c'; ctx.beginPath(); ctx.moveTo(4, -86); ctx.lineTo(24, -83); ctx.lineTo(4, -80); ctx.fill();
      ctx.fillStyle = '#20232b';
      for (const [x, y] of [[-3, -90], [5, -90], [0, -64], [0, -54]]) { ctx.beginPath(); ctx.arc(x, y, 2.4, 0, Math.PI * 2); ctx.fill(); }
    },
    // Volcanis: a cracked ember rock
    (ctx, o, t) => {
      ctx.fillStyle = '#2a1a1a'; ctx.beginPath();
      ctx.moveTo(-36, 0); ctx.lineTo(-30, -38); ctx.lineTo(-6, -62); ctx.lineTo(24, -48); ctx.lineTo(36, 0); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = U.rgba('#ff7a2a', 0.65 + 0.35 * Math.sin(t * 5 + o.i)); ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(-6, -60); ctx.lineTo(-12, -36); ctx.lineTo(4, -24); ctx.lineTo(-4, 0); ctx.moveTo(4, -24); ctx.lineTo(22, -12); ctx.stroke();
    },
    // Nebula Prime: an alien pod
    (ctx, o, t) => {
      ctx.fillStyle = '#4a2a8a'; ctx.beginPath(); ctx.ellipse(0, -36, 24, 38, 0, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = '#2a1a5a'; ctx.lineWidth = 2.5; ctx.stroke();
      ctx.fillStyle = U.rgba('#86ff5a', 0.6 + 0.4 * Math.sin(t * 3 + o.i));
      ctx.beginPath(); ctx.ellipse(0, -40, 11, 22, 0, 0, Math.PI * 2); ctx.fill();
    },
    // Singularity: a black monolith
    (ctx, o, t) => {
      ctx.fillStyle = '#12121f'; ctx.fillRect(-18, -98, 36, 98);
      ctx.strokeStyle = U.rgba('#ffe066', 0.5 + 0.5 * Math.sin(t * 2 + o.i)); ctx.lineWidth = 2.5; ctx.strokeRect(-18, -98, 36, 98);
      ctx.fillStyle = '#ffe066'; ctx.fillRect(-2, -80, 4, 56);
    },
  ];

  Surface.reset();
  DI.Surface = Surface;
})();
