// DRILL ORBIT — DOM user interface: HUD, upgrades, meters, banners, modals
(function () {
  const DI = window.DI;
  const U = DI.U, E = DI.Econ;
  const $ = (id) => document.getElementById(id);
  const A = () => DI.Audio;

  const UPG_ICONS = {
    dist: '<svg viewBox="0 0 24 24"><path d="M3 19 Q8 3 20 9" stroke="#fff" stroke-width="2.8" fill="none" stroke-linecap="round" stroke-dasharray="3 3"/><path d="M15.5 5.5 22 9.5l-7 2.2z" fill="#fff"/><rect x="2" y="18" width="7" height="3" rx="1.5" fill="#fff"/></svg>',
    power: '<svg viewBox="0 0 24 24"><path d="M3 8h9l9 4-9 4H3z" fill="#fff"/><path d="M8 8l3 8M11 8l3 7.4M14 9.2l2.6 5.4" stroke="#ff4f6d" stroke-width="1.6"/><rect x="1" y="9.5" width="3" height="5" rx="1" fill="#fff"/></svg>',
    dur: '<svg viewBox="0 0 24 24"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z" fill="#fff"/><path d="M13 6l-5 7h4l-1 5 5-7h-4z" fill="#3fb6ff"/></svg>',
  };

  function effText(id, L) {
    if (id === 'dist') return Math.round(E.baseRange(L)) + ' m range' + (E.boosts(L) > 2 ? ' · ' + E.boosts(L) + ' boosts' : '');
    if (id === 'power') {
      const p = E.power(L), w = E.width(L);
      return (p < 100 ? p.toFixed(1) : U.fmt(p)) + ' power' + (w > 1 ? ' · ' + w + ' wide' : '');
    }
    return E.durability(L).toFixed(1) + 's fuel' + (E.blasts(L) > 2 ? ' · ' + E.blasts(L) + ' blasts' : '');
  }

  function fmtTime(ms) {
    const s = Math.max(0, Math.ceil(ms / 1000));
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  }

  const UI = {
    init(game) {
      this.G = game;
      this.S = DI.Save.data;
      this.bq = [];
      this.bShowing = false;
      this.dispCoins = this.S.coins;
      this.hudCache = {};
      this.mode = '';
      this.buildUpgrades();

      $('btnGolden').addEventListener('click', async (e) => {
        e.stopPropagation();
        A().init();
        if (await this.G.armGolden()) this.refresh();
      });
      $('btnWorlds').addEventListener('click', () => { A().init(); A().play('click'); this.openWorlds(); });
      // big action buttons: same as tapping the game area
      for (const id of ['flBoost', 'mineBlast']) {
        $(id).addEventListener('pointerdown', (e) => { e.preventDefault(); e.stopPropagation(); A().init(); this.G.input(); });
      }
      $('btnSettings').addEventListener('click', () => { A().init(); A().play('click'); this.openSettings(); });
      $('btnLb').addEventListener('click', () => { A().init(); A().play('click'); this.openLeaderboard(); });
      // hosts without an in-game list or popup get no leaderboard UI (Bridge leaderboards.type)
      $('btnLb').classList.toggle('hidden', !(DI.Leaderboard.canList || DI.Leaderboard.hasPopup));
      // portrait layout parks the Golden Drill just above the upgrade row, whose height depends on text wrap
      const upg = $('upgrades'), setUpgH = () => document.documentElement.style.setProperty('--upg-h', upg.offsetHeight + 'px');
      if (window.ResizeObserver) new ResizeObserver(setUpgH).observe(upg);
      setUpgH();
      $('btnCollection').addEventListener('click', () => { A().init(); A().play('click'); this.openCollection(); });
      $('jackpot').addEventListener('pointerdown', () => { if (this.jpReady) this.hideJackpot(); });

      this.setMode('idle');
      this.refresh();
      setInterval(() => this.updateSide(), 1000);
      const tick = () => { this.tickCoins(); requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    },

    // ------------------------------------------------------------ modes
    setMode(mode) {
      this.mode = mode;
      DI.Ads.setBanner(mode === 'idle');
      document.body.classList.remove('m-idle', 'm-launch', 'm-flight', 'm-mining');
      document.body.classList.add('m-' + mode);
      if (mode === 'idle') { this.bq.length = 0; this.clearCallouts(); this.refresh(); }
      if (mode === 'flight') this._flb = null; // redraw boost pips: the count can grow between runs
      if (mode === 'mining') {
        this.hudCache = {}; $('mhLoot').innerHTML = '';
        this.abilityButton();
        this.mineBlasts(this.G.run ? this.G.run.dynamite : E.blasts(this.S.upgrades.dur));
      }
    },

    modalOpen() { return !!DI.Ads.busy || !!$('modals').children.length || !$('jackpot').classList.contains('hidden') || !!document.querySelector('.ad-overlay'); },

    // ------------------------------------------------------------ top + side
    tickCoins() {
      // while a coin splash is in flight the counter only grows as coins land
      const target = this.heldCoins != null ? this.heldCoins : this.S.coins;
      if (Math.abs(this.dispCoins - target) < 1) this.dispCoins = target;
      else this.dispCoins += (target - this.dispCoins) * 0.15;
      const txt = U.fmt(this.dispCoins);
      if (txt !== this._coinTxt) { $('coinVal').textContent = txt; this._coinTxt = txt; }
    },

    refresh() {
      this.S = DI.Save.data;
      $('bestVal').textContent = U.fmtM(this.S.best);
      $('worldName').textContent = DI.curWorld(this.S).name.toUpperCase();
      $('worldBadge').classList.toggle('hidden', !this.S.newWorld);
      const gb = $('btnGolden');
      gb.classList.toggle('hidden', !DI.Ads.supported);
      gb.classList.toggle('active', !!this.S.goldenNext);
      gb.querySelector('small').textContent = this.S.goldenNext ? 'READY — 3× coins this run!' : '3× coins next run';
      this.updateUpgrades();
      this.updateSide();
    },

    updateSide() {
      const S = this.S;
      const ev = DI.currentEvent();
      const card = $('eventCard');
      if (ev.event) {
        card.classList.add('active');
        card.style.setProperty('--ev', ev.event.color);
        $('evName').textContent = ev.event.name;
        $('evDesc').textContent = ev.event.desc;
        $('evTimer').textContent = 'ends ' + fmtTime(ev.endsAt - Date.now());
      } else {
        card.classList.remove('active');
        $('evName').textContent = ev.next ? 'Next: ' + ev.next.name : 'No event';
        $('evDesc').textContent = ev.next ? ev.next.desc : '';
        $('evTimer').textContent = 'in ' + fmtTime(ev.nextAt - Date.now());
      }
      const nm = DI.MILESTONES.find((m) => !DI.msDone(S, m));
      if (nm) {
        const prev = [...DI.MILESTONES].reverse().find((m) => m.m < nm.m);
        const p0 = prev ? prev.m : 0;
        $('msName').textContent = U.fmtM(nm.m);
        let rw = '+' + U.fmt(nm.coins * DI.curWorld(S).value) + ' coins';
        if (nm.zone) rw += ' · New zone!';
        if (nm.cosmetic) rw += ' · ' + DI.COSMETICS[nm.cosmetic].name;
        $('msReward').textContent = rw;
        $('msBar').style.width = U.clamp((S.best - p0) / (nm.m - p0), 0, 1) * 100 + '%';
      } else {
        $('msName').textContent = 'All goals reached!';
        $('msReward').textContent = 'Legendary driller';
        $('msBar').style.width = '100%';
      }
      $('collPct').textContent = this.collectionStats().pct + '% found';
    },

    // ------------------------------------------------------------ upgrades
    buildUpgrades() {
      const nav = $('upgrades');
      nav.innerHTML = '';
      this.upgEls = {};
      for (const id of ['dist', 'power', 'dur']) {
        const u = DI.UPGRADES[id];
        const b = document.createElement('button');
        b.className = 'upg';
        b.style.setProperty('--c', u.color);
        b.innerHTML = `<div class="u-ic">${UPG_ICONS[id]}</div>
          <div class="u-name"><span>${u.name}</span><span class="u-lv">Lv 1</span></div>
          <div class="u-eff"></div>
          <div class="u-buy"><i class="coin"></i><span class="u-cost">0</span></div>`;
        b.addEventListener('click', async (e) => {
          e.stopPropagation();
          A().init();
          if (DI.Platform.paused || this.G.state !== 'idle') return;
          if (this.G.upgradeAdAvailable(id)) {
            const earned = await this.G.watchUpgradeAd(id);
            if (earned) this.floatText(b, 'FREE UPGRADE!');
            return;
          }
          if (this.G.upgradeAdPending || DI.Ads.busy) return;
          const L = this.S.upgrades[id];
          const cost = E.cost(id, L);
          if (this.G.buy(id)) {
            U.replay(b, 'flash');
            const cp = $('coinPill'); U.replay(cp, 'spend');
            const src = cp.querySelector('.coin').getBoundingClientRect();
            DI.CoinFX.burst({ x: src.left + src.width / 2, y: src.top + src.height / 2, target: b, n: 7, power: 0.6, size: 0.8 });
            this.floatText(b, '-' + U.fmt(cost));
            this.refresh();
          } else {
            b.animate([{ transform: 'translateX(-5px)' }, { transform: 'translateX(5px)' }, { transform: 'none' }], { duration: 200 });
          }
        });
        nav.appendChild(b);
        this.upgEls[id] = b;
      }
    },

    updateUpgrades() {
      const S = this.S;
      for (const id in this.upgEls) {
        const el = this.upgEls[id];
        const L = S.upgrades[id];
        const max = L >= DI.MAX_LEVEL;
        const cost = E.cost(id, L);
        el.querySelector('.u-lv').textContent = 'Lv ' + L;
        const widens = id === 'power' && E.width(L + 1) > E.width(L);
        const boost = id === 'dist' && E.boosts(L + 1) > E.boosts(L);
        const blast = id === 'dur' && E.blasts(L + 1) > E.blasts(L);
        const next = widens ? E.width(L + 1) + ' wide!' : boost ? '+1 boost!' : blast ? '+1 blast!' : effText(id, L + 1).split(' ')[0];
        el.querySelector('.u-eff').innerHTML = max ? effText(id, L) + ' (MAX)' : `${effText(id, L)} → <b>${next}</b>`;
        el.querySelector('.u-cost').textContent = max ? 'MAX' : U.fmt(cost);
        const can = !max && S.coins >= cost;
        el.classList.toggle('can', can);
        const ad = !can && !max && this.G.upgradeAdAvailable(id);
        el.classList.toggle('cant', !can && !ad);
        el.classList.toggle('ad-upgrade', ad);
        el.querySelector('.u-buy .coin').style.display = ad ? 'none' : '';
        if (ad) el.querySelector('.u-cost').textContent = '▶ Watch ad · FREE';
      }
    },

    floatText(anchor, txt) {
      const r = anchor.getBoundingClientRect();
      const d = document.createElement('div');
      d.textContent = txt;
      Object.assign(d.style, { position: 'fixed', left: r.left + r.width / 2 + 'px', top: r.top + 'px', transform: 'translate(-50%,0)', fontWeight: 700, fontSize: '22px', color: '#ffe066', textShadow: '0 2px 0 rgba(0,0,0,.5)', pointerEvents: 'none', zIndex: 70, transition: 'all .8s ease-out' });
      document.body.appendChild(d);
      requestAnimationFrame(() => { d.style.top = r.top - 50 + 'px'; d.style.opacity = '0'; });
      setTimeout(() => d.remove(), 850);
    },

    // ------------------------------------------------------------ coin splashes
    // coins burst from a screen point and fly into the run counter (or the main coin pill)
    coinBurstWorld(x, y, n, size) {
      const mining = this.mode === 'mining';
      const target = (mining ? $('mhCoins').parentElement : $('coinPill')).querySelector('.coin');
      DI.CoinFX.burst({
        x, y, target, n, size: size || 1, power: size && size < 1 ? 0.5 : 1,
        onEach: (i) => {
          A().play('coinTick', i);
          const rc = mining ? $('mhCoins').parentElement : $('coinPill');
          U.replay(rc, 'bump');
        },
      });
    },

    durFlash(kind) {
      const bar = $('mhDur').parentElement;
      const on = kind === 'good' ? 'flash-good' : 'flash-bad';
      U.replay(bar, on, on === 'flash-good' ? 'flash-bad' : 'flash-good');
    },

    // ------------------------------------------------------------ flight / impact
    flight(distM, region, boosts) {
      const t = U.fmtM(distM);
      if (t !== this._fl) { $('flDist').textContent = t; this._fl = t; }
      if (boosts !== this._flb) this.flightBoosts(boosts);
      const rn = region.name + ' · ore ×' + region.mult;
      if (rn !== this._flr) { $('flRegion').textContent = rn; this._flr = rn; }
    },

    // one pip per charge; the count grows with Durability / Launch Distance evolutions
    pips(el, n, max) {
      max = Math.max(max, n); // a door's dynamite stash can go past the upgrade count
      while (el.children.length < max) el.appendChild(document.createElement('i'));
      while (el.children.length > max) el.lastChild.remove();
      [...el.children].forEach((p, i) => p.classList.toggle('on', i < n));
    },

    // Settings → Show FPS: frame stats overlay for checking real devices
    perfHud(on) {
      let el = $('perfHud');
      if (!on) { if (el) el.remove(); this.G.perf = null; return; }
      if (!el) { el = document.createElement('div'); el.id = 'perfHud'; el.textContent = '…'; $('app').appendChild(el); }
      this.G.perf = { n: 0, dt: 0, max: 0, upd: 0, draw: 0, t0: performance.now(), el };
    },

    // the mining action button wears the drill's current ability
    abilityButton() {
      const ab = DI.Abilities.of(this.S), b = $('mineBlast');
      if (b.dataset.ab === ab.id) return;
      b.dataset.ab = ab.id;
      b.style.setProperty('--ab1', ab.color);
      b.style.setProperty('--ab2', ab.c2);
      b.querySelector('.ab-txt').innerHTML = '<small>TAP TO</small>' + ab.verb;
      b.querySelector('.ab-ic').innerHTML = `<svg viewBox="0 0 24 24" width="36" height="36">${ab.svg}</svg>`;
    },

    mineBlasts(n) {
      const box = $('mineBlast');
      box.classList.toggle('empty', !n);
      this.pips($('mineBlastN'), n, E.blasts(this.S.upgrades.dur));
      U.replay(box, 'pulse');
    },

    flightBoosts(n) {
      this._flb = n;
      const box = $('flBoost');
      box.classList.toggle('empty', !n);
      this.pips($('flBoostN'), n, E.boosts(this.S.upgrades.dist));
      U.replay(box, 'pulse');
    },

    impact(run) {
      // the flight HUD already names the region: only a first visit gets a callout
      if (run.dist <= this.S.bestDist || E.region(this.S.bestDist) === run.region) return;
      this.banner({ kind: 'land', title: run.region.name.toUpperCase(), sub: 'Ore ×' + run.region.mult, color: run.region.grass, icon: DI.Icons.iconURL('shape', 'gem|' + run.region.grass) });
    },

    outOfPower() { this.centerMsg('OUT OF POWER!', '', '#ff8a5a'); },

    // ------------------------------------------------------------ mining HUD
    hud(run) {
      const c = this.hudCache, S = this.S;
      const depth = run.depth;
      const dt = U.fmtM(depth);
      if (dt !== c.depth) {
        $('mhDepth').textContent = dt; c.depth = dt;
        const ten = Math.floor(depth / 10);
        if (ten !== c.ten) { U.replay($('mhDepth'), 'bump'); c.ten = ten; }
      }


      let rec, beat = false;
      if (run.startBest <= 0) rec = 'First dig — set a record!';
      else if (depth > run.startBest) { rec = 'NEW BEST! +' + U.fmtM(depth - run.startBest); beat = true; }
      else rec = U.fmtM(run.startBest - depth) + ' to beat your best';
      if (rec !== c.rec) { const el = $('mhRecord'); el.textContent = rec; el.classList.toggle('beat', beat); c.rec = rec; }

      const f = U.clamp(run.dur / run.durMax, 0, 1);
      const fw = (f * 100).toFixed(1);
      if (fw !== c.dur) {
        $('mhDur').style.width = fw + '%';
        $('mhDurTxt').textContent = Math.max(0, run.dur).toFixed(1) + 's';
        const low = f < 0.2;
        if (low !== c.low) { $('mhDur').parentElement.classList.toggle('low', low); c.low = low; }
        c.dur = fw;
      }

      const z = E.zoneAtDepth(depth);
      if (z.id !== c.zone) { const el = $('mhZone'); el.textContent = (S.world ? DI.curWorld(S).name + ' · ' : '') + z.name; el.style.setProperty('--zc', z.accent); c.zone = z.id; }

      const nm = DI.MILESTONES.find((m) => !DI.msDone(S, m));
      const gk = nm ? nm.m : -1;
      if (gk !== c.goal) { $('mhGoal').textContent = nm ? U.fmtM(nm.m) : 'ALL DONE'; c.goal = gk; }
      if (nm) {
        const prev = [...DI.MILESTONES].reverse().find((m) => m.m < nm.m);
        const p0 = prev ? prev.m : 0;
        const gw = (U.clamp((depth - p0) / (nm.m - p0), 0, 1) * 100).toFixed(0);
        if (gw !== c.gw) { $('mhGoalBar').style.width = gw + '%'; c.gw = gw; }
      }

      if (run.event && !c.ev) {
        const el = $('mhEvent');
        el.style.display = 'block';
        el.style.background = run.event.color;
        el.style.color = '#1b1030';
        el.textContent = ' ' + run.event.name;
        c.ev = true;
      } else if (!run.event && c.ev !== false) { $('mhEvent').style.display = 'none'; c.ev = false; }

      const canFF = run.dynamite <= 0;
      if (canFF !== c.canFF) { $('ffChip').classList.toggle('hidden', !canFF); c.canFF = canFF; }
      if (run.golden !== c.golden) { $('mhCoins').parentElement.classList.toggle('golden', !!run.golden); c.golden = run.golden; }
      const ff = this.G.ff > 1;
      if (ff !== c.ff) {
        $('ffChip').classList.toggle('on', ff);
        $('ffTxt').innerHTML = ff ? '<b>2× SPEED</b>' : '<b>HOLD</b> screen for 2× speed';
        c.ff = ff;
      }

      const ct = U.fmt(run.coins);
      if (ct !== c.coins) { $('mhCoins').textContent = ct; c.coins = ct; }

      // loot list
      let n = 0;
      for (const k in run.items) n += run.items[k];
      if (n !== c.loot) {
        const prev = c.lootMap || {};
        const ids = Object.keys(run.items).sort((a, b) => DI.BLOCKS[b].value - DI.BLOCKS[a].value).slice(0, 6);
        const box = $('mhLoot');
        box.innerHTML = '';
        for (const id of ids) {
          const row = document.createElement('div');
          row.className = 'loot-row' + (prev[id] !== run.items[id] ? ' pop' : '');
          row.innerHTML = `<img src="${DI.Icons.iconURL('res', id)}" alt=""><span>×${run.items[id]}</span>`;
          box.appendChild(row);
        }
        c.lootMap = Object.assign({}, run.items);
        c.loot = n;
      }
    },

    // ------------------------------------------------------------ banners
    banner(o) {
      // during a run, pop-ups burst out of the thing that caused them instead of a fixed card
      if (this.G.run && ['flight', 'cannon', 'impact', 'mining', 'ending'].includes(this.G.state)) { this.callout(o); return; }
      // keep the queue short so banners never lag far behind the drill
      while (this.bq.length >= 2) {
        const i = this.bq.findIndex((b) => !b.big);
        if (i < 0) break;
        this.bq.splice(i, 1);
      }
      this.bq.push(o);
      if (!this.bShowing) this.nextBanner();
    },

    nextBanner() {
      const o = this.bq.shift();
      if (!o) { this.bShowing = false; return; }
      this.bShowing = true;
      const el = document.createElement('div');
      el.className = 'banner' + (o.big ? ' big' : '');
      el.style.setProperty('--bc', o.color || '#ffffff');
      el.innerHTML = `${o.icon ? `<img src="${o.icon}" alt="">` : ''}<div><div class="b-title">${o.title}${o.isNew ? '<span class="b-new">NEW!</span>' : ''}</div>${o.sub ? `<div class="b-sub">${o.sub}</div>` : ''}</div>`;
      $('banners').appendChild(el);
      let dur = o.big ? 2100 : 1400;
      if (this.bq.length >= 2) dur *= 0.55;
      setTimeout(() => {
        el.classList.add('out');
        setTimeout(() => { el.remove(); this.nextBanner(); }, 260);
      }, dur);
    },

    // In-world pop-up: anchored to a world point (o.at, default the drill head), follows the camera,
    // pops out with an overshoot, floats up and fades. No card: outlined, glowing text over the ground.
    callout(o) {
      const G = this.G, at = o.at || { x: G.drill.x, y: G.drill.y - 30 };
      const list = this.cos || (this.cos = []);
      // a few at a time: drop the oldest small one so new finds are never stuck in a queue
      while (list.length >= 3) {
        const i = list.findIndex((c) => !c.big);
        this.dropCallout(list[i < 0 ? 0 : i]);
      }
      const el = document.createElement('div');
      el.className = 'callout' + (o.big ? ' big' : '');
      el.style.setProperty('--bc', o.color || '#ffffff');
      const life = o.big ? 2.6 : 1.9;
      el.style.setProperty('--life', life + 's');
      el.innerHTML = `<div class="co-in">${o.icon ? `<img class="co-ic" src="${o.icon}" alt="">` : ''}<div class="co-title">${o.title}${o.isNew ? '<span class="co-new">NEW!</span>' : ''}</div>${o.sub ? `<div class="co-sub">${o.sub}</div>` : ''}</div>`;
      $('callouts').appendChild(el);
      const c = { el, x: at.x, y: at.y, big: !!o.big, w: el.offsetWidth, h: el.offsetHeight, lift: 0, sx: -1, sy: -1 };
      list.push(c);
      this.updateCallouts();
      c.timer = setTimeout(() => this.dropCallout(c), life * 1000);
      G.calloutBurst(at.x, at.y, o.color || '#ffffff', !!o.big);
    },
    // every rendered frame while callouts are up: keep each on its world anchor as the camera moves.
    // The newest sits at its source; older ones that would overlap glide up out of its way, and one
    // squeezed against the HUD fades out early rather than piling up.
    updateCallouts() {
      const list = this.cos;
      if (!list || !list.length) return;
      const G = this.G, m = 10, top = Math.min(G.H * 0.24, 165), bottom = G.H - 140;
      const placed = [];
      for (let i = list.length - 1; i >= 0; i--) {
        const c = list[i];
        const x = U.clamp(G.sx(c.x), c.w / 2 + m, G.W - c.w / 2 - m);
        const base = U.clamp(G.sy(c.y), top + c.h, bottom);
        // overlap test is 1px looser than the 6px gap it places at, so rounding can't re-hit the same pop-up
        const hits = (y) => placed.find((q) => Math.abs(q.x - x) < (q.w + c.w) / 2 && y > q.y - q.h - 5 && y - c.h < q.y + 5);
        // above whatever newer pop-up is in the way; if that runs into the HUD, below it instead
        let y = base, q, n = 0;
        while ((q = hits(y)) && n++ < 6) y = q.y - q.h - 6;
        if (y - c.h < top) { y = base; n = 0; while ((q = hits(y)) && n++ < 6) y = q.y + c.h + 6; }
        if ((y > bottom || y - c.h < top - 4) && !c.out) { c.out = true; c.el.classList.add('out'); clearTimeout(c.timer); c.timer = setTimeout(() => this.dropCallout(c), 250); }
        c.lift += (base - y - c.lift) * 0.3; // glide toward the stacked spot
        const fy = base - c.lift;
        placed.push({ x, y, w: c.w, h: c.h });
        if (Math.abs(x - c.sx) < 0.5 && Math.abs(fy - c.sy) < 0.5) continue;
        c.sx = x; c.sy = fy;
        c.el.style.transform = `translate3d(${x - c.w / 2}px, ${fy - c.h}px, 0)`;
      }
    },
    dropCallout(c) {
      clearTimeout(c.timer);
      c.el.remove();
      const i = this.cos.indexOf(c);
      if (i >= 0) this.cos.splice(i, 1);
    },
    clearCallouts() { if (this.cos) [...this.cos].forEach((c) => this.dropCallout(c)); },

    centerMsg(text, sub, color, cls) {
      const box = $('center-msg');
      const el = document.createElement('div');
      el.className = 'cm' + (cls ? ' ' + cls : '');
      el.style.color = color || '#fff';
      el.innerHTML = text + (sub ? `<small>${sub}</small>` : '');
      box.innerHTML = '';
      box.appendChild(el);
      setTimeout(() => { if (el.parentNode) el.remove(); }, 1650);
    },

    worldBanner(w, first) {
      this.centerMsg('WELCOME TO ' + w.name.toUpperCase() + '!', first ? 'NEW PLANET' : '', '#f0d8ff', 'zone');
    },

    zoneBanner(z, first) {
      if (first) this.centerMsg(z.name.toUpperCase(), 'NEW ZONE', z.accent, 'zone');
    },

    // ------------------------------------------------------------ jackpot
    jackpot(o) {
      const it = DI.ITEMS[o.id];
      const box = $('jackpot');
      box.innerHTML = `<div class="jp-rays"></div><div class="jp-box">
        <div class="jp-title">JACKPOT!</div>
        <img src="${DI.Icons.iconURL('item', o.id)}" alt="">
        <div class="jp-name">${it.name}${o.isNew ? ' <span class="b-new">NEW!</span>' : ''}</div>
        <div class="jp-reward"><i class="coin"></i><span id="jpVal">0</span></div>
        ${o.evMult > 1 ? '<div class="jp-note">Jackpot Hour ×1.5!</div>' : ''}
      </div>`;
      box.classList.remove('hidden');
      this.jpReady = false;
      setTimeout(() => (this.jpReady = true), 700);
      const t0 = performance.now();
      const step = () => {
        const f = Math.min(1, (performance.now() - t0) / 1300);
        const el = $('jpVal');
        if (!el) return;
        el.textContent = '+' + U.fmt(o.reward * U.easeOutCubic(f));
        if (f < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      clearTimeout(this.jpTimer);
      this.jpTimer = setTimeout(() => this.hideJackpot(), 2900);
    },
    hideJackpot() {
      clearTimeout(this.jpTimer);
      $('jackpot').classList.add('hidden');
      $('jackpot').innerHTML = '';
    },

    // ------------------------------------------------------------ modals
    openModal(o) {
      const bg = document.createElement('div');
      bg.className = 'modal-bg';
      const m = document.createElement('div');
      m.className = 'modal ' + (o.cls || '');
      m.innerHTML = `<div class="modal-head" style="--mh:${o.color || '#7d4fe0'}"><h2>${o.title}</h2>${o.sub ? `<p>${o.sub}</p>` : ''}${o.closable !== false ? '<button class="modal-x" aria-label="Close">×</button>' : ''}</div><div class="modal-body"></div>`;
      const body = m.querySelector('.modal-body');
      if (typeof o.body === 'string') body.innerHTML = o.body; else if (o.body) body.appendChild(o.body);
      bg.appendChild(m);
      $('modals').appendChild(bg);
      DI.Ads.syncBanner();
      const close = () => { if (bg.parentNode) bg.remove(); DI.Ads.syncBanner(); if (o.onClose) o.onClose(); };
      if (o.closable !== false) {
        m.querySelector('.modal-x').addEventListener('click', () => { A().play('click'); close(); });
        // backdrop click closes, unless the modal must be acknowledged (e.g. drill evolution)
        if (o.backdrop !== false) bg.addEventListener('pointerdown', (e) => { if (e.target === bg) close(); });
      }
      return { bg, m, body, close };
    },

    closeAllModals() { $('modals').innerHTML = ''; DI.Ads.syncBanner(); },

    // ------------------------------------------------------------ results
    results(res) {
      if (!res) return;
      const run = res.run, S = this.S;
      const bd = run.bd;
      const rows = [
        ['Blocks mined', bd.blocks], ['Ores & gems', bd.ores], ['Ore veins', bd.veins], ['Treasure chests', bd.chests],
        ['Fossils & artifacts', bd.relics], ['Rooms & mines', bd.rooms], ['Bonus finds', bd.bonus], ['Jackpots', bd.jackpots], ['Milestones', bd.milestones],
      ].filter((r) => r[1] > 0);
      const extra = [];
      if (run.events) extra.push(run.events + ' underground event' + (run.events > 1 ? 's' : ''));
      if (run.bestCombo >= 3) extra.push('best combo ×' + run.bestCombo);
      if (run.golden) extra.push(' Golden Drill ×3');
      const items = Object.keys(run.items).sort((a, b) => DI.BLOCKS[b].value - DI.BLOCKS[a].value).slice(0, 10)
        .map((id) => `<div class="res-item"><img src="${DI.Icons.iconURL('res', id)}" alt="">×${run.items[id]}${run.newRes.includes(id) ? '<span class="n">NEW</span>' : ''}</div>`).join('');
      const finds = run.finds.slice(0, 8).map((f) => `<div class="res-item"><img src="${DI.Icons.iconURL('item', f.id)}" alt="" title="${DI.ITEMS[f.id].name}">${f.isNew ? '<span class="n">NEW</span>' : ''}</div>`).join('');

      // tip: affordable upgrades
      let coins = S.coins, n = 0;
      const lv = Object.assign({}, S.upgrades);
      for (let i = 0; i < 50; i++) {
        let best = null, bc = Infinity;
        for (const k in lv) { const c = E.cost(k, lv[k]); if (c < bc) { bc = c; best = k; } }
        if (coins < bc) break;
        coins -= bc; lv[best]++; n++;
      }
      let tip;
      if (n > 0) tip = `You can afford ${n} upgrade${n > 1 ? 's' : ''}!`;
      else {
        const cheapest = Math.min(...Object.keys(S.upgrades).map((k) => E.cost(k, S.upgrades[k])));
        tip = `Next upgrade in ${U.fmt(cheapest - S.coins)} coins`;
      }

      const body = `
        <div class="res-depth">
          <div class="rd-num">${U.fmtM(res.depth)}</div>
          <div class="rd-sub">${res.isRecord ? (run.startBest > 0 ? 'Previous best: ' + U.fmtM(run.startBest) : 'Your first record!') : 'Personal best: ' + U.fmtM(S.best) + ' · ' + U.fmtM(S.best - res.depth) + ' to go'}</div>
          ${res.isRecord ? '<div class="res-record"> NEW PERSONAL BEST! </div>' : ''}
        </div>
        <div class="res-coins"><i class="coin"></i><span id="resVal">+0</span></div>
        ${rows.length ? `<div class="res-break">${rows.map((r) => `<span>${r[0]}</span><b>+${U.fmt(r[1])}</b>`).join('')}</div>` : ''}
        ${extra.length ? `<div class="res-extra">${extra.join(' · ')}</div>` : ''}
        ${items || finds ? `<div class="res-items">${finds}${items}</div>` : ''}
        ${res.unlocked ? `<div class="res-unlock"> YOU BROKE THROUGH TO ${res.unlocked.name.toUpperCase()}! New discoveries await.</div>` : ''}
        <div class="res-tip">${tip}</div>
        <div class="res-actions">${this.spinButtonHTML(res.total)}<button class="btn green" id="btnCollect">COLLECT<small>space / tap</small></button></div>`;
      const md = this.openModal({ title: res.isRecord ? 'NEW RECORD!' : 'RUN COMPLETE', sub: 'Launch ' + Math.round(run.dist) + ' m · ' + run.region.name, color: res.isRecord ? '#ff9a2e' : '#7d4fe0', body, closable: false });
      md.bg.dataset.kind = 'results';
      this.resultsModal = md;
      md.m.querySelector('#btnCollect').addEventListener('click', () => this.collect());
      const sb = md.m.querySelector('#btnSpin');
      if (sb) sb.addEventListener('click', () => this.startSpin(res, md));
      const t0 = performance.now();
      const step = () => {
        const f = Math.min(1, (performance.now() - t0) / 900);
        const el = md.m.querySelector('#resVal');
        if (!el) return;
        el.textContent = '+' + U.fmt(res.total * U.easeOutCubic(f));
        if (f < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      if (res.isRecord) { A().play('record'); }
      else A().play('coin');
      // hold the top counter until the coins physically land in it
      this.heldCoins = this.S.coins - res.total;
      this.dispCoins = this.heldCoins;
      this.lastTotal = res.total;
    },

    // ------------------------------------------------------------ 20× prize wheel (rewarded ad)
    spinButtonHTML(total) {
      if (!DI.Ads.supported || total <= 0) return '';
      const cd = this.S.spinCooldown || 0;
      if (cd > 0) return `<button class="btn spin" id="btnSpin" disabled> 20×<small>ready in ${cd} run${cd > 1 ? 's' : ''}</small></button>`;
      return `<button class="btn spin" id="btnSpin"> UP TO 20×<small><span class="ad-chip">▶ AD</span> spin the wheel</small></button>`;
    },

    async startSpin(res, md) {
      if (this.busy || (this.S.spinCooldown || 0) > 0) return;
      this.busy = true;
      let wheelOpened = false;
      try {
        const ok = await DI.Ads.showRewarded('wheel_100x');
        if (!ok) return;
        this.S.spinCooldown = 5;
        DI.Save.save();
        const sb = md.m.querySelector('#btnSpin');
        if (sb) { sb.disabled = true; sb.innerHTML = ' 20×<small>ready in 5 runs</small>'; }
        this.openWheel(res, md);
        wheelOpened = true;
      } catch (e) {
        DI.Platform.event('reward_flow_failed', { placement: 'wheel_100x' });
      } finally {
        if (!wheelOpened) this.busy = false;
      }
    },

    openWheel(res, md) {
      // slice sizes match the real odds; ×20 is the jackpot slice
      const SEG = [[2, 32, '#5fd8ff'], [5, 15, '#ff9a2e'], [3, 24, '#7dff5a'], [20, 3, '#ffcc33'], [2, 6, '#c06bff'], [10, 9, '#3f7bff'], [3, 11, '#ff4f6d']];
      const tot = SEG.reduce((a, s) => a + s[1], 0);
      let acc = 0;
      const slices = SEG.map(([m, w, c]) => { const a0 = (acc / tot) * Math.PI * 2; acc += w; return { m, c, a0, a1: (acc / tot) * Math.PI * 2 }; });
      const pick = U.weighted(Math.random(), SEG.map((s, i) => [i, s[1]]));
      const sl = slices[pick];
      const wrap = document.createElement('div');
      wrap.className = 'wheel-wrap';
      const cv = document.createElement('canvas');
      cv.width = cv.height = 520;
      wrap.appendChild(cv);
      wrap.insertAdjacentHTML('beforeend', '<div class="wheel-result" id="wheelRes">Spinning…</div><button class="btn green" id="wheelDone" disabled>COLLECT</button>');
      // the wheel floats on its own over a dark backdrop (no card); the results card is hidden meanwhile
      const bg = document.createElement('div');
      bg.className = 'modal-bg wheel-bg';
      bg.innerHTML = '<div class="wheel-title">PRIZE WHEEL</div><div class="wheel-sub">Multiply this run’s ' + U.fmt(res.total) + ' coins</div>';
      bg.appendChild(wrap);
      $('modals').appendChild(bg);
      md.bg.style.visibility = 'hidden';
      const wm = { close: () => bg.remove() };
      const g = cv.getContext('2d');
      // the chosen slice lands under the pointer at the top
      const land = -Math.PI / 2 - (sl.a0 + (sl.a1 - sl.a0) * U.rand(0.25, 0.75));
      const end = land - Math.PI * 2 * 6;
      const T = 4.4, t0 = performance.now();
      let lastSlice = -1;
      let tick = 0; // pointer flick when a slice edge passes
      const draw = (rot, t) => {
        const R = 214, cx = 260, cy = 272;
        g.clearRect(0, 0, 520, 520);
        // glow + rays behind the wheel
        g.save(); g.translate(cx, cy); g.rotate(t * 0.25);
        for (let i = 0; i < 16; i++) { g.rotate(Math.PI / 8); g.fillStyle = 'rgba(255,214,90,0.10)'; g.beginPath(); g.moveTo(0, 0); g.lineTo(260, -26); g.lineTo(260, 26); g.fill(); }
        g.restore();
        const halo = g.createRadialGradient(cx, cy, R * 0.8, cx, cy, R + 40);
        halo.addColorStop(0, 'rgba(255,200,60,0.45)'); halo.addColorStop(1, 'rgba(255,200,60,0)');
        g.fillStyle = halo; g.beginPath(); g.arc(cx, cy, R + 40, 0, Math.PI * 2); g.fill();
        // slices
        g.save(); g.translate(cx, cy); g.rotate(rot);
        for (const sl2 of slices) {
          g.beginPath(); g.moveTo(0, 0); g.arc(0, 0, R, sl2.a0, sl2.a1); g.closePath();
          const sg = g.createRadialGradient(0, 0, 10, 0, 0, R);
          sg.addColorStop(0, U.shade(sl2.c, 0.45)); sg.addColorStop(0.7, sl2.c); sg.addColorStop(1, U.shade(sl2.c, -0.25));
          g.fillStyle = sg; g.fill();
          g.strokeStyle = 'rgba(255,255,255,0.9)'; g.lineWidth = 3; g.stroke();
          const mid = (sl2.a0 + sl2.a1) / 2, span = sl2.a1 - sl2.a0;
          g.save(); g.rotate(mid); g.translate(R * (span < 0.3 ? 0.78 : 0.68), 0); g.rotate(Math.PI / 2);
          const fs2 = span < 0.25 ? 17 : span < 0.4 ? 22 : 30;
          g.font = '800 ' + fs2 + 'px Fredoka, sans-serif';
          g.textAlign = 'center'; g.textBaseline = 'middle';
          g.lineWidth = 6; g.strokeStyle = 'rgba(27,16,48,0.85)';
          g.strokeText('×' + sl2.m, 0, 0);
          g.fillStyle = sl2.m >= 20 ? '#fff6a0' : '#ffffff';
          g.fillText('×' + sl2.m, 0, 0);
          g.restore();
        }
        // glossy shine across the top half
        const shine = g.createLinearGradient(0, -R, 0, R * 0.2);
        shine.addColorStop(0, 'rgba(255,255,255,0.35)'); shine.addColorStop(1, 'rgba(255,255,255,0)');
        g.restore();
        g.fillStyle = shine;
        g.beginPath(); g.ellipse(cx, cy - R * 0.35, R * 0.92, R * 0.6, 0, Math.PI, 0); g.fill();
        // gold rim with blinking bulbs
        g.lineWidth = 22;
        const rim = g.createLinearGradient(cx, cy - R, cx, cy + R);
        rim.addColorStop(0, '#fff3a0'); rim.addColorStop(0.5, '#ffbf1a'); rim.addColorStop(1, '#b06d05');
        g.strokeStyle = rim; g.beginPath(); g.arc(cx, cy, R + 11, 0, Math.PI * 2); g.stroke();
        g.lineWidth = 3; g.strokeStyle = '#7a4a00';
        g.beginPath(); g.arc(cx, cy, R + 22, 0, Math.PI * 2); g.stroke();
        g.beginPath(); g.arc(cx, cy, R, 0, Math.PI * 2); g.stroke();
        for (let i = 0; i < 24; i++) {
          const ba = (i / 24) * Math.PI * 2;
          const on = (Math.floor(t * 8) + i) % 2 === 0;
          g.fillStyle = on ? '#ffffff' : '#ffd36b';
          g.shadowColor = '#fff6a0'; g.shadowBlur = on ? 12 : 0;
          g.beginPath(); g.arc(cx + Math.cos(ba) * (R + 11), cy + Math.sin(ba) * (R + 11), on ? 5.5 : 4, 0, Math.PI * 2); g.fill();
        }
        g.shadowBlur = 0;
        // hub
        const hub = g.createRadialGradient(cx - 10, cy - 12, 4, cx, cy, 44);
        hub.addColorStop(0, '#fff6c8'); hub.addColorStop(0.5, '#ffcc33'); hub.addColorStop(1, '#a86a00');
        g.fillStyle = '#2a1640'; g.beginPath(); g.arc(cx, cy, 46, 0, Math.PI * 2); g.fill();
        g.fillStyle = hub; g.beginPath(); g.arc(cx, cy, 38, 0, Math.PI * 2); g.fill();
        g.fillStyle = '#7a4a00'; g.font = '800 26px Fredoka, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
        g.fillText('×?', cx, cy + 1);
        // pointer (flicks back as each slice edge passes)
        g.save(); g.translate(cx, cy - R - 26); g.rotate(-tick * 0.35);
        g.shadowColor = 'rgba(0,0,0,0.4)'; g.shadowBlur = 8; g.shadowOffsetY = 4;
        const pg = g.createLinearGradient(-24, 0, 24, 0);
        pg.addColorStop(0, '#ff6a5a'); pg.addColorStop(0.5, '#ff3b3b'); pg.addColorStop(1, '#b01a1a');
        g.fillStyle = pg; g.strokeStyle = '#2a1640'; g.lineWidth = 4;
        g.beginPath(); g.moveTo(-24, -6); g.lineTo(24, -6); g.lineTo(0, 48); g.closePath(); g.fill();
        g.shadowBlur = 0; g.shadowOffsetY = 0; g.stroke();
        g.fillStyle = '#fff'; g.beginPath(); g.arc(0, 4, 7, 0, Math.PI * 2); g.fill();
        g.restore();
      };
      let finished = false;
      const done = () => {
        finished = true;
        const m = sl.m;
        const extra = res.total * (m - 1);
        const S = this.S;
        S.coins += extra;
        S.totalEarned += extra;
        res.total *= m;
        this.lastTotal = res.total;
        DI.Save.save();
        A().play(m >= 10 ? 'jackpot' : 'chest');
        const wr = wrap.querySelector('#wheelRes');
        wr.innerHTML = '<b>×' + m + '!</b> +' + U.fmt(extra) + ' coins';
        wr.classList.add('win');
        const rv = md.m.querySelector('#resVal');
        if (rv) rv.textContent = '+' + U.fmt(res.total);
        const r = cv.getBoundingClientRect();
        DI.CoinFX.burst({ x: r.left + r.width / 2, y: r.top + r.height / 2, n: m >= 10 ? 30 : 14, power: 1.2, target: wr });
        const btn = wrap.querySelector('#wheelDone');
        btn.disabled = false;
        btn.addEventListener('click', () => { wm.close(); this.busy = false; this.collect(); });
        this.busy = false;
        this.wheelResult = m;
      };
      const step = () => {
        const f = Math.min(1, (performance.now() - t0) / 1000 / T);
        const e = 1 - Math.pow(1 - f, 4);
        const rot = end * e;
        tick = Math.max(0, tick - 0.12);
        draw(rot, (performance.now() - t0) / 1000);
        // tick each time a slice edge passes the pointer
        const a = ((-Math.PI / 2 - rot) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        const cur = slices.findIndex((s) => a >= s.a0 && a < s.a1);
        if (cur !== lastSlice) { if (lastSlice !== -1) { A().play('tick'); tick = 1; } lastSlice = cur; }
        if (f < 1) requestAnimationFrame(step);
        else if (!finished) { done(); idle(end); }
      };
      // after it stops, keep the bulbs blinking while the modal is open
      const idle = (rot) => {
        if (!cv.isConnected) return;
        draw(rot, (performance.now() - t0) / 1000);
        requestAnimationFrame(() => idle(rot));
      };
      this.busy = true;
      this.wheelPick = sl.m;
      requestAnimationFrame(step);
      // fail-safe: finish on time even if animation frames are paused (tab in background, slow device)
      setTimeout(() => { if (!finished) { draw(end, T); done(); idle(end); } }, T * 1000 + 250);
    },


    collect() {
      if (!this.resultsModal || this.busy) return;
      const md = this.resultsModal;
      this.resultsModal = null;
      A().play('chest');
      const total = this.lastTotal || 0;
      const src = md.m.querySelector('.res-coins .coin').getBoundingClientRect();
      const x = src.left + src.width / 2, y = src.top + src.height / 2;
      md.close();
      if (total > 0) {
        // the big coin splash: bigger runs throw more coins
        const n = Math.round(U.clamp(8 + Math.log10(total + 1) * 5, 10, 40));
        const share = total / n;
        const pill = $('coinPill');
        DI.CoinFX.burst({
          x, y, n, power: 1.25, size: 1.15,
          target: pill.querySelector('.coin'),
          onEach: (i) => {
            this.heldCoins = Math.min(this.S.coins, (this.heldCoins || 0) + share);
            A().play('coinTick', i);
            U.replay(pill, 'bump');
          },
          onDone: () => { this.heldCoins = null; },
        });
        // fail-safe in case a coin never lands (e.g. tab hidden)
        setTimeout(() => { this.heldCoins = null; }, 3000);
      } else this.heldCoins = null;
      const fade = $('fade');
      fade.classList.add('on');
      setTimeout(() => {
        this.G.returnToSurface();
        fade.classList.remove('on');
      }, 200);
    },

    // ------------------------------------------------------------ idle earnings
    offerIdle() {
      const S = this.S, amount = E.idleAmount(S);
      if (amount <= 0) return;
      const mins = Math.round(S.rig.hours * 60), time = (mins >= 60 ? Math.floor(mins / 60) + ' h ' : '') + (mins % 60 ? mins % 60 + ' min' : '');
      const wrap = document.createElement('div');
      wrap.className = 'idle-offer';
      wrap.innerHTML = `<p>Your drill rig mined while you were away.</p>
        <div class="idle-amt"><i class="coin"></i><b>${U.fmt(amount)}</b></div>
        <p class="idle-sub">${time} · the rig holds up to ${DI.IDLE.capHours} hours</p>
        <p class="idle-sub" id="idleMsg" hidden>The ad didn’t finish, so there is no bonus. Your coins are still here.</p>
        <div class="res-actions"><button class="btn" id="idleTake">COLLECT</button>${DI.Ads.supported ? `<button class="btn green" id="idleAd"><span class="ad-chip">▶ AD</span> WATCH AN AD: ${U.fmt(amount * 2)}</button>` : ''}</div>`;
      const md = this.openModal({ title: 'WELCOME BACK!', color: '#ff9a2e', body: wrap, closable: false });
      let spent = false;
      const claim = (mult) => {
        if (spent) return;
        spent = true;
        const pay = amount * mult, src = wrap.querySelector('.idle-amt .coin').getBoundingClientRect();
        S.coins += pay;
        S.totalEarned += pay;
        S.rig.hours = 0;
        DI.Save.save();
        DI.Analytics.track('idle_earnings', { minutes: mins, doubled: mult > 1 });
        A().play('chest');
        md.close();
        const pill = $('coinPill');
        DI.CoinFX.burst({ x: src.left + src.width / 2, y: src.top + src.height / 2, n: 20, power: 1.25, size: 1.15, target: pill.querySelector('.coin'), onEach: () => U.replay(pill, 'bump') });
        this.refresh();
      };
      wrap.querySelector('#idleTake').addEventListener('click', () => claim(1));
      const adBtn = wrap.querySelector('#idleAd');
      if (adBtn) adBtn.addEventListener('click', async () => {
        if (DI.Ads.busy || spent) return;
        A().init();
        const ok = await DI.Ads.showRewarded('idle_double');
        if (ok) claim(2);
        else wrap.querySelector('#idleMsg').hidden = false;
      });
    },

    // ------------------------------------------------------------ evolve
    evolve(evo) {
      const wrap = document.createElement('div');
      wrap.className = 'evo';
      const cv = document.createElement('canvas');
      cv.width = 840; cv.height = 440;
      wrap.appendChild(cv);
      const label = evo.sub || (evo.kind === 'launcher' ? 'Your launcher was upgraded!' : 'Your drill evolved!');
      wrap.insertAdjacentHTML('beforeend', `<div class="evo-name">${evo.name}</div><div class="evo-sub">${label}</div><button class="btn green" style="width:100%">AWESOME!</button>`);
      let alive = true;
      const md = this.openModal({ title: evo.kind === 'launcher' ? 'LAUNCHER UPGRADE!' : 'DRILL EVOLVED!', color: '#ff9a2e', body: wrap, backdrop: false, onClose: () => (alive = false) });
      wrap.querySelector('.btn').addEventListener('click', () => { A().play('click'); md.close(); });
      const g = cv.getContext('2d');
      const t0 = performance.now();
      const look = this.G.look;
      const draw = () => {
        if (!alive || !cv.isConnected && performance.now() - t0 > 500) return;
        const t = (performance.now() - t0) / 1000;
        g.setTransform(1, 0, 0, 1, 0, 0);
        g.clearRect(0, 0, cv.width, cv.height);
        // rays
        g.save(); g.translate(420, 220); g.rotate(t * 0.4);
        for (let i = 0; i < 12; i++) { g.rotate(Math.PI / 6); g.fillStyle = 'rgba(255,220,120,0.12)'; g.beginPath(); g.moveTo(0, 0); g.lineTo(500, -60); g.lineTo(500, 60); g.fill(); }
        g.restore();
        const pop = Math.min(1, t / 0.5);
        const s = U.easeOutBack(pop);
        if (evo.kind === 'launcher') {
          g.save(); g.translate(400, 380); g.scale(1.6 * s, 1.6 * s);
          DI.Art.drawLauncher(g, 0, 0, 0.6, look, t, { charge: 0.5 + 0.5 * Math.sin(t * 3) });
          g.restore();
        } else {
          g.save(); g.translate(420, 220); g.scale(s, s);
          DI.Art.drawDrill(g, 150, 0, -0.15 + Math.sin(t * 1.5) * 0.05, look, t, t * 12, 3.2 / (1 + (look.width - 1) * 0.35));
          g.restore();
        }
        requestAnimationFrame(draw);
      };
      draw();
    },

    // ------------------------------------------------------------ worlds
    openWorlds() {
      const S = this.S;
      const wrap = document.createElement('div');
      const render = () => {
        wrap.innerHTML = '<div class="world-list">' + DI.WORLDS.map((w, k) => {
          const cur = k === S.world, open = k <= S.worldMax;
          const best = cur ? S.best : S.bests[k] || 0;
          const sub = !open
            ? 'Locked — break through ' + DI.WORLDS[k - 1].name + '’s crust at ' + U.fmtM(DI.WORLDS[k - 1].goal)
            : (k ? 'Rock ×' + U.fmt(w.hard) + ' harder · Loot ×' + U.fmt(w.value) : 'Home planet') + ' · Best ' + U.fmtM(best);
          const ball = `radial-gradient(circle at 35% 30%, ${w.sky[2]}, ${w.sky[1]} 45%, ${w.sky[0]})`;
          const btn = cur ? '<span class="world-sub">You are here</span>' : open ? `<button class="btn green" data-k="${k}">Travel</button>` : '<span class="world-sub"></span>';
          return `<div class="world-row ${cur ? 'cur' : ''} ${open ? '' : 'locked'}"><div class="world-ball" style="background:${ball}"></div><div><div class="world-name">${w.name}</div><div class="world-sub">${sub}</div></div>${btn}</div>`;
        }).join('') + '</div>' + this.prestigeCard();
        const pb = wrap.querySelector('#btnPrestige');
        if (pb) pb.addEventListener('click', () => { A().play('click'); this.confirmPrestige(md); });
        wrap.querySelectorAll('[data-k]').forEach((b) => b.addEventListener('click', () => {
          const k = +b.dataset.k;
          if (this.G.travel(k)) {
            md.close();
            this.refresh();
            this.centerMsg('WELCOME TO ' + DI.WORLDS[k].name.toUpperCase() + '!', '', '#e0b0ff', 'zone');
          }
        }));
      };
      const md = this.openModal({ title: 'WORLDS', sub: 'Drill through a planet’s crust to reach the next one', color: '#7d4fe0', body: wrap });
      render();
    },

    // ------------------------------------------------------------ Orbit Reset (prestige)
    prestigeCard() {
      const S = this.S, last = DI.WORLDS[DI.WORLDS.length - 1], P = DI.PRESTIGE;
      const now = S.prestige ? `<div class="pr-now">${S.prestige} reset${S.prestige > 1 ? 's' : ''}: all coins +${Math.round(S.prestige * P.bonus * 100)}%</div>` : '';
      const ready = E.canPrestige(S), bonus = Math.round(P.bonus * 100);
      return `<div class="prestige-card ${ready ? 'ready' : ''}"><div class="world-name">ORBIT RESET</div>${now}
        <div class="world-sub">${ready ? `Start again from Earth with +${bonus}% coins forever.` : `Reach ${last.name} and dig ${U.fmtM(P.depth)} to start again with +${bonus}% coins forever.`}</div>
        ${ready ? '<button class="btn green" id="btnPrestige">Orbit Reset</button>' : ''}</div>`;
    },

    confirmPrestige(parent) {
      const S = this.S, after = Math.round(((S.prestige || 0) + 1) * DI.PRESTIGE.bonus * 100);
      const wrap = document.createElement('div');
      wrap.innerHTML = `<div class="pr-list"><p><b>You get:</b> all coins +${after}% forever.</p>
        <p><b>You lose:</b> ${U.fmt(S.coins)} coins, all upgrades, planets and depth records.</p>
        <p><b>You keep:</b> your collection, cosmetics, Rare Keys and leaderboard scores.</p></div>
        <div class="res-actions"><button class="btn grey" id="prNo">Not yet</button><button class="btn green" id="prYes">Reset</button></div>`;
      const md = this.openModal({ title: 'ORBIT RESET?', color: '#7d4fe0', body: wrap });
      wrap.querySelector('#prNo').addEventListener('click', () => md.close());
      wrap.querySelector('#prYes').addEventListener('click', () => {
        if (!this.G.prestige()) return;
        md.close(); parent.close();
        this.refresh();
        this.centerMsg('ORBIT RESET!', 'All coins +' + after + '% forever', '#e0b0ff', 'zone');
      });
    },

    // ------------------------------------------------------------ collection
    collectionDefs() {
      return {
        resources: Object.values(DI.BLOCKS).filter((b) => b.res).map((b) => ({ id: b.id, name: b.name, kind: 'res' })),
        fossils: Object.values(DI.ITEMS).filter((i) => i.cat === 'fossils').map((i) => ({ id: i.id, name: i.name, kind: 'item' })),
        artifacts: Object.values(DI.ITEMS).filter((i) => i.cat === 'artifacts').map((i) => ({ id: i.id, name: i.name, kind: 'item' })),
        treasures: Object.values(DI.ITEMS).filter((i) => i.cat === 'treasures').map((i) => ({ id: i.id, name: i.name, kind: 'item' })),
        critters: Object.values(DI.ITEMS).filter((i) => i.cat === 'critters').map((i) => ({ id: i.id, name: i.name, kind: 'item' })),
      };
    },

    collectionStats() {
      const defs = this.collectionDefs();
      let have = 0, total = 0;
      const per = {};
      for (const k in defs) {
        const h = defs[k].filter((d) => this.S.collection[d.id] > 0).length;
        per[k] = { have: h, total: defs[k].length };
        have += h; total += defs[k].length;
      }
      return { pct: Math.floor((have / total) * 100), per };
    },

    collectionReward(cat) {
      let zv = 1;
      for (const z of DI.ZONES) if (this.S.zonesSeen[z.id]) zv = z.value;
      return Math.round(cat.reward * zv * DI.WORLDS[this.S.worldMax || 0].value);
    },

    checkCollections() {
      const st = this.collectionStats();
      for (const cat of DI.COLLECTIONS) {
        const p = st.per[cat.id];
        if (!this.S.collectionsDone[cat.id] && p.have >= p.total) {
          this.S.collectionsDone[cat.id] = true;
          const r = this.collectionReward(cat);
          this.S.coins += r;
          A().play('milestone');
          this.banner({ kind: 'coll', big: true, title: cat.name.toUpperCase() + ' COMPLETE!', sub: '+' + U.fmt(r) + ' coins', color: '#c78bff' });
        }
      }
      DI.Save.mark();
    },

    openCollection(tab) {
      tab = tab || 'resources';
      const defs = this.collectionDefs();
      const st = this.collectionStats();
      const wrap = document.createElement('div');
      const render = (t) => {
        const list = defs[t];
        const p = st.per[t];
        const cat = DI.COLLECTIONS.find((c) => c.id === t);
        const done = this.S.collectionsDone[t];
        wrap.innerHTML = `
          <div class="tabs">${DI.COLLECTIONS.map((c) => `<button class="tab ${c.id === t ? 'on' : ''}" data-t="${c.id}">${c.name}<br><small>${st.per[c.id].have}/${st.per[c.id].total}</small></button>`).join('')}</div>
          <div class="coll-progress"><span>${cat.name}</span><span>${p.have} / ${p.total}</span></div>
          <div class="bar"><i style="width:${(p.have / p.total) * 100}%"></i></div>
          <div class="coll-grid">${list.map((d) => {
            const n = this.S.collection[d.id] || 0;
            return `<div class="coll-it ${n ? '' : 'locked'}"><img src="${DI.Icons.iconURL(d.kind, d.id)}" alt=""><span class="nm">${n ? d.name : '???'}</span>${n ? `<span class="cnt">×${U.fmt(n)}</span>` : ''}</div>`;
          }).join('')}</div>
          <div class="coll-reward ${done ? 'done' : ''}">${done ? ' Completed — reward claimed!' : 'Complete this set for +' + U.fmt(this.collectionReward(cat)) + ' coins'}</div>`;
        wrap.querySelectorAll('.tab').forEach((b) => b.addEventListener('click', () => { A().play('click'); render(b.dataset.t); }));
      };
      render(tab);
      this.openModal({ title: 'COLLECTION', sub: st.pct + '% of all discoveries found', color: '#7d4fe0', body: wrap });
    },

    // ------------------------------------------------------------ leaderboard
    openLeaderboard() {
      const LB = DI.Leaderboard;
      const S = this.S;
      LB.submitLocal(S.playerName, LB.scores(S));
      const wrap = document.createElement('div');
      let board = 'depth';
      const fmtV = (b, v) => (b === 'depth' || b === 'flight' ? U.fmtM(v) : b === 'coins' ? U.fmt(v) : v + ' finds');
      const rowsHTML = (rows, b) => rows.length
        ? rows.map((r, i) => `<div class="lb-row ${(r.me ?? r.name === S.playerName) ? 'me' : ''}"><span class="lb-rank">#${r.rank || i + 1}</span><span>${escapeHTML(r.name)}</span><span>${fmtV(b, r.value)}</span></div>`).join('')
        : '<div class="lb-empty">No scores yet — launch your drill!</div>';
      const render = async () => {
        const local = LB.local(board);
        wrap.innerHTML = `
          <div class="tabs">${LB.BOARDS.map((b) => `<button class="tab ${b.id === board ? 'on' : ''}" data-b="${b.id}">${b.name}</button>`).join('')}</div>
          <div id="lbGlobal"></div>
          <div class="lb-section-title">LOCAL — THIS DEVICE</div>
          <div class="lb-note">These scores are stored only on this device. They are <b>not</b> global rankings.</div>
          <div class="lb-list">${rowsHTML(local, board)}</div>
          <div class="lb-name"><span>Your name</span><input id="lbNameIn" maxlength="16" value="${escapeHTML(S.playerName)}"><button class="btn" id="lbSave" style="font-size:16px;padding:8px 14px">Save</button></div>
          <div class="lb-global" id="lbStatus">${LB.canList ? 'Loading global rankings…' : LB.hasPopup ? '<button class="btn" id="lbPopup" style="font-size:16px;padding:8px 14px">Open global rankings</button>' : LB.globalEnabled ? 'Global rankings are shown by the platform.' : 'Global rankings are not available on this platform.'}</div>`;
        wrap.querySelectorAll('.tab').forEach((t) => t.addEventListener('click', () => { A().play('click'); board = t.dataset.b; render(); }));
        wrap.querySelector('#lbSave').addEventListener('click', () => {
          const v = wrap.querySelector('#lbNameIn').value.trim().slice(0, 16);
          if (!v) return;
          LB.renameLocal(S.playerName, v);
          S.playerName = v;
          DI.Save.save();
          LB.submitLocal(S.playerName, LB.scores(S));
          A().play('good');
          render();
        });
        const pop = wrap.querySelector('#lbPopup');
        if (pop) pop.addEventListener('click', () => { A().play('click'); LB.showPopup(board); });
        if (LB.canList) {
          await LB.submitGlobal(LB.scores(S));
          const rows = await LB.fetchGlobal(board);
          const g = wrap.querySelector('#lbGlobal');
          const st = wrap.querySelector('#lbStatus');
          if (!g) return;
          if (rows) {
            g.innerHTML = `<div class="lb-section-title">GLOBAL</div><div class="lb-list">${rowsHTML(rows.slice(0, 20), board)}</div><br>`;
            st.textContent = 'Global rankings: connected';
          } else st.textContent = 'Global rankings: could not load right now.';
        }
      };
      render();
      this.openModal({ title: 'LEADERBOARDS', sub: 'Deepest dig is the main ranking', color: '#f19a12', body: wrap });
    },

    showHelp(firstTime = false) {
      const md = this.openModal({ title: 'HOW TO PLAY', color: '#7d4fe0', backdrop: false,
        body: '<div class="howto"><p><b>1. Aim for green.</b> Tap twice to time your launch.</p><p><b>2. Dig deeper.</b> Tap to boost in flight and blast underground.</p><p><b>3. Upgrade and explore.</b> Collect treasure, improve your drill and break through to new planets.</p><button class="btn green" id="helpDone">LET’S DIG!</button></div>',
        onClose: () => { if (firstTime) { this.S.tutorial.instructions = true; DI.Save.save(); } } });
      md.m.querySelector('#helpDone').addEventListener('click', () => md.close());
    },

    // ------------------------------------------------------------ settings
    openSettings() {
      const S = this.S;
      const wrap = document.createElement('div');
      const render = () => {
        const perfMode = S.settings.perf === 'max' ? 'max' : S.settings.perf === true ? 'on' : 'auto';
        const P = DI.Platform;
        const name = P.playerName;
        const accountRow = !P.canSignIn ? '' : P.signedIn
          ? `<div class="set-row"><span>Account<small class="set-sub">${name ? 'Signed in as ' + escapeHTML(name) : 'Signed in'}</small></span></div>`
          : `<div class="set-row"><span>Account<small class="set-sub">${this.signInFailed ? 'Sign-in didn’t finish. You can keep playing.' : 'Optional: save progress to your account'}</small></span><button class="btn" id="btnSignIn" style="font-size:16px;padding:8px 14px;white-space:nowrap;flex:none"${this.signingIn ? 'disabled' : ''}>${this.signingIn ? 'Signing in…' : 'Sign in'}</button></div>`;
        wrap.innerHTML = `
          ${accountRow}
          <div class="set-row"><span>Sound</span><button class="toggle ${S.settings.sound ? 'on' : ''}" data-k="sound" aria-label="Sound"></button></div>
          <div class="set-row"><span>Music</span><button class="toggle ${S.settings.music ? 'on' : ''}" data-k="music" aria-label="Music"></button></div>
          <div class="set-row"><span>Performance<small class="set-sub">Auto fits your device (Max on phones) · On: lighter · Max: effects off</small></span><div class="seg">${['auto', 'on', 'max'].map((v) => `<button class="seg-b ${perfMode === v ? 'on' : ''}" data-perf="${v}">${v.toUpperCase()}</button>`).join('')}</div></div>
          <div class="set-row"><span>Show FPS<small class="set-sub">Frame rate and timing, for checking performance</small></span><button class="toggle ${S.settings.fps ? 'on' : ''}" data-k="fps" aria-label="Show FPS"></button></div>
          <button class="btn" id="btnHelp" style="width:100%">How to play</button>
          <div class="set-stats">
            <span>Runs</span><b>${S.runs}</b>
            <span>Deepest dig</span><b>${U.fmtM(S.best)}</b>
            <span>Furthest flight</span><b>${U.fmtM(S.bestDist)}</b>
            ${S.prestige ? `<span>Orbit Resets</span><b>${S.prestige}</b>` : ''}
            <span>Total coins earned</span><b>${U.fmt(S.totalEarned)}</b>
            <span>Rare discoveries</span><b>${S.stats.rare}</b>
            <span>Jackpots</span><b>${S.stats.jackpots}</b>
            <span>Perfect launches</span><b>${S.stats.perfectLaunches}</b>
          </div>
          <button class="btn red" id="btnReset" style="width:100%">Reset progress</button>`;
        wrap.querySelectorAll('.toggle').forEach((t) => t.addEventListener('click', () => {
          const k = t.dataset.k;
          S.settings[k] = !S.settings[k];
          DI.Analytics.track('settings_changed', { setting: k, value: S.settings[k] });
          if (k === 'sound') A().setSound(S.settings.sound);
          else if (k === 'music') A().setMusic(S.settings.music);
          else if (k === 'fps') this.perfHud(S.settings.fps);
          DI.Save.save();
          A().play('click');
          render();
        }));
        // Performance: Auto = the device finds its own quality; On = Performance Mode; Max = Performance Mode, effects off
        wrap.querySelectorAll('.seg-b').forEach((b) => b.addEventListener('click', () => {
          const v = b.dataset.perf;
          S.settings.perf = v === 'max' ? 'max' : v === 'on' ? true : null;
          DI.Q.setMode(S.settings.perf);
          S.settings.qLevel = S.settings.perf ? DI.Q.LITE : DI.Q.startLevel;
          this.G.setQuality(S.settings.qLevel);
          DI.Analytics.track('settings_changed', { setting: 'perf', value: v });
          DI.Save.save();
          A().play('click');
          render();
        }));
        const signIn = wrap.querySelector('#btnSignIn');
        if (signIn) signIn.addEventListener('click', () => { A().play('click'); this.signIn(render); });
        wrap.querySelector('#btnHelp').addEventListener('click', () => this.showHelp());
        wrap.querySelector('#btnReset').addEventListener('click', () => this.confirmReset(md));
      };
      render();
      const md = this.openModal({ title: 'SETTINGS', color: '#5a4a80', body: wrap });
    },

    // Optional and player-initiated: a failed or stuck sign-in only re-enables the button.
    async signIn(render) {
      if (this.signingIn) return;
      this.signingIn = true; this.signInFailed = false;
      render();
      const stuck = setTimeout(() => { this.signingIn = false; this.signInFailed = true; render(); }, 30000);
      try {
        const result = await DI.Platform.signIn();
        this.signInFailed = false;
        DI.Analytics.track('sign_in', { result: 'success' });
        A().play('good');
        if (result === 'reload') { await DI.Platform.flush(); location.reload(); }
      } catch (e) {
        this.signInFailed = true;
        DI.Analytics.track('sign_in', { result: 'failed' });
      } finally {
        clearTimeout(stuck);
        this.signingIn = false;
        render();
      }
    },

    confirmReset(parent) {
      const wrap = document.createElement('div');
      wrap.innerHTML = `<p style="font-weight:600;color:#4a3a60;text-align:center;font-size:17px">This deletes all coins, upgrades, records and collections. This cannot be undone.</p>
        <div class="res-actions"><button class="btn grey" id="rNo">Cancel</button><button class="btn red" id="rYes">Reset</button></div>`;
      const md = this.openModal({ title: 'RESET PROGRESS?', color: '#ff4a5a', body: wrap });
      wrap.querySelector('#rNo').addEventListener('click', () => md.close());
      wrap.querySelector('#rYes').addEventListener('click', () => {
        DI.Save.reset();
        DI.Platform.flush().then(() => location.reload());
      });
    },
  };

  function escapeHTML(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  DI.UI = UI;
})();
