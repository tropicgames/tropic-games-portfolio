// DRILL ORBIT — core namespace and small utilities (plain script, works from file://)
(function () {
  const G = typeof window !== 'undefined' ? window : globalThis;
  const DI = (G.DI = G.DI || {});

  const U = {
    clamp: (v, a, b) => (v < a ? a : v > b ? b : v),
    lerp: (a, b, t) => a + (b - a) * t,
    damp: (cur, target, rate, dt) => cur + (target - cur) * (1 - Math.exp(-rate * dt)),
    rand: (a, b) => a + Math.random() * (b - a),
    randi: (a, b) => Math.floor(a + Math.random() * (b - a + 1)),
    pick: (arr) => arr[Math.floor(Math.random() * arr.length)],
    easeOutCubic: (t) => 1 - Math.pow(1 - t, 3),
    easeInOut: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
    easeOutBack: (t) => {
      const c1 = 1.70158, c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    },

    // Deterministic hash -> [0,1)
    hash(a, b, c) {
      let h = (a * 374761393 + b * 668265263 + c * 2147483647) | 0;
      h = Math.imul(h ^ (h >>> 13), 1274126177);
      h = h ^ (h >>> 16);
      return (h >>> 0) / 4294967296;
    },

    rng(seed) {
      let s = seed >>> 0;
      return function () {
        s = (s + 0x6d2b79f5) | 0;
        let t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    },

    weighted(r, entries) {
      let total = 0;
      for (const e of entries) total += e[1];
      let x = r * total;
      for (const e of entries) {
        x -= e[1];
        if (x <= 0) return e[0];
      }
      return entries[entries.length - 1][0];
    },

    fmt(n) {
      n = Math.floor(n);
      if (n < 1000) return String(n);
      const units = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud', 'Dd'];
      let i = Math.min(units.length - 1, Math.floor(Math.log10(n) / 3));
      const v = n / Math.pow(1000, i);
      // truncate (never round up to "1000K")
      const s = v < 10 ? (Math.floor(v * 100) / 100).toFixed(2) : v < 100 ? (Math.floor(v * 10) / 10).toFixed(1) : String(Math.floor(v));
      return s.replace(/\.0+$|(\.\d*?)0+$/, '$1') + units[i];
    },

    fmtM(m) {
      // toLocaleString builds an Intl formatter per call; depth labels are formatted several times a frame
      return String(Math.floor(m)).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' m';
    },

    shade(hex, amt) {
      // amt -1..1 darken/lighten
      const c = parseInt(hex.slice(1), 16);
      let r = (c >> 16) & 255, g = (c >> 8) & 255, b = c & 255;
      if (amt < 0) {
        r *= 1 + amt; g *= 1 + amt; b *= 1 + amt;
      } else {
        r += (255 - r) * amt; g += (255 - g) * amt; b += (255 - b) * amt;
      }
      return '#' + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
    },

    rgba(hex, a) {
      const c = parseInt(hex.slice(1), 16);
      return `rgba(${(c >> 16) & 255},${(c >> 8) & 255},${c & 255},${a})`;
    },

    mixHex(a, b, t) {
      const ca = parseInt(a.slice(1), 16), cb = parseInt(b.slice(1), 16);
      const r = Math.round(((ca >> 16) & 255) * (1 - t) + ((cb >> 16) & 255) * t);
      const g = Math.round(((ca >> 8) & 255) * (1 - t) + ((cb >> 8) & 255) * t);
      const bl = Math.round((ca & 255) * (1 - t) + (cb & 255) * t);
      return '#' + ((1 << 24) | (r << 16) | (g << 8) | bl).toString(16).slice(1);
    },

    // restart a CSS animation class without the forced synchronous layout of `void el.offsetWidth`
    replay(el, cls, ...drop) {
      el.classList.remove(cls, ...drop);
      cancelAnimationFrame(el._replay);
      el._replay = requestAnimationFrame(() => { el._replay = requestAnimationFrame(() => el.classList.add(cls)); });
    },

    roundRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
    },
  };

  DI.U = U;

  // Render quality is a ladder of levels, best first. A device starts on a rung that suits it (desktops at
  // the top, phones mid-way at 1.5× resolution with full lighting) and then finds its own level: it steps
  // down one rung when frames lag and back up after a stretch of smooth play, but never back to a rung
  // that already lagged this session. The game saves the rung it settles on for the next session.
  // fx: 'full' = everything, 'reduced' = no canvas shadows + fewer particles, 'lite' = Performance Mode effects.
  const LEVELS = [
    { dpr: 2, fx: 'full' }, { dpr: 1.75, fx: 'full' }, { dpr: 1.5, fx: 'full' },
    { dpr: 1.5, fx: 'reduced' }, { dpr: 1.25, fx: 'reduced' }, { dpr: 1, fx: 'reduced' },
    { dpr: 1, fx: 'lite' }, { dpr: 0.85, fx: 'lite' }, { dpr: 0.75, fx: 'lite' },
  ];
  const LITE = 6; // first Performance Mode rung
  const coarse = !!(G.matchMedia && G.matchMedia('(pointer: coarse)').matches);
  const nav = G.navigator || {};
  const fewCores = nav.hardwareConcurrency > 0 && nav.hardwareConcurrency <= 4;
  const weak = (nav.hardwareConcurrency > 0 && nav.hardwareConcurrency <= 2) || (nav.deviceMemory > 0 && nav.deviceMemory <= 2);
  const Q = {
    LEVELS, LITE, coarse, weak,
    // where a device without a remembered level starts
    startLevel: weak ? 5 : coarse ? 3 : fewCores ? 2 : 0,
    level: 0, min: 0, max: LEVELS.length - 1, // min/max: the rungs the player's Performance Mode choice allows
    lagged: -1, // lowest-quality rung that lagged this session; the ladder never climbs back to it or above
    maxDpr: 2, particles: 650, low: false, lite: false,
    fxOff: false, // Performance: Max — effects and particles off
    mini: coarse, // minimal effects: always on phones and tablets (mining spawns far too much for their GPUs), and in Performance Mode
    slowT: 0, fastT: 0,
    setLevel(i) {
      this.level = Math.max(this.min, Math.min(this.max, i));
      const L = LEVELS[this.level];
      this.maxDpr = L.dpr;
      this.low = L.fx !== 'full';
      this.lite = L.fx === 'lite';
      this.mini = coarse || this.lite || this.fxOff;
      this.particles = this.mini ? 140 : this.low ? 360 : 650;
      this.slowT = 0; this.fastT = 0;
    },
    // the player's Performance setting: null = Auto, true = On (lite rungs only), 'max' = On with effects off
    // (false, from older saves: never lite). Auto on phones and tablets is Max: their GPUs can't keep up with the effects
    setMode(perf) {
      if (coarse && !perf) perf = 'max';
      this.fxOff = perf === 'max';
      this.min = perf === true || this.fxOff ? LITE : 0;
      this.max = perf === false ? LITE - 1 : LEVELS.length - 1;
      this.lagged = -1;
    },
    dpr() { return Math.min(G.devicePixelRatio || 1, this.maxDpr); },
    // fed each active frame: returns 'down' or 'up' when the game should change rung, else false
    sample(dt) {
      if (dt > 1 / 45) { this.slowT += dt; this.fastT = Math.max(0, this.fastT - dt * 4); }
      else { this.slowT = Math.max(0, this.slowT - dt * 0.5); if (dt < 1 / 55) this.fastT += dt; }
      if (this.slowT >= 0.6) { // react within about half a second of real lag
        this.slowT = 0;
        // a rung whose resolution this screen can't show anyway changes nothing: skip past it
        let i = this.level + 1;
        while (i <= this.max && LEVELS[i].fx === LEVELS[this.level].fx && Math.min(G.devicePixelRatio || 1, LEVELS[i].dpr) >= this.dpr()) i++;
        if (i > this.max) return false;
        this.lagged = Math.max(this.lagged, this.level);
        this.setLevel(i);
        return 'down';
      }
      // 12 s of smooth play: try the rung above, unless that one already lagged this session
      if (this.fastT >= 12 && this.level > this.min && this.level - 1 > this.lagged) {
        this.setLevel(this.level - 1);
        return 'up';
      }
      return false;
    },
  };
  DI.Q = Q;
})();
