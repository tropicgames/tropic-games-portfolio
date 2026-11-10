// DRILL ORBIT — screen-space coin splash: coins burst out, spin, then home into a counter
(function () {
  const DI = window.DI;
  const U = DI.U;

  const CF = {
    init() {
      this.cv = document.createElement('canvas');
      this.cv.id = 'coinLayer';
      document.getElementById('app').appendChild(this.cv);
      this.ctx = this.cv.getContext('2d');
      this.coins = [];
      this.sparks = [];
      this.rects = new WeakMap();
      this.sprite = this.makeSprite();
      this.resize();
      window.addEventListener('resize', () => this.resize());
      this.last = 0;
      requestAnimationFrame((t) => this.loop(t));
    },

    resize() {
      this.dpr = DI.Q.dpr();
      this.W = window.innerWidth; this.H = window.innerHeight;
      this.rects = new WeakMap();
      this.cv.width = Math.round(this.W * this.dpr);
      this.cv.height = Math.round(this.H * this.dpr);
    },

    makeSprite() {
      const c = document.createElement('canvas');
      c.width = c.height = 64;
      const g = c.getContext('2d');
      const gr = g.createRadialGradient(24, 22, 4, 32, 32, 30);
      gr.addColorStop(0, '#fff6b0'); gr.addColorStop(0.35, '#ffd23a'); gr.addColorStop(1, '#e09a10');
      g.fillStyle = '#b06d05'; g.beginPath(); g.arc(32, 34, 29, 0, Math.PI * 2); g.fill();
      g.fillStyle = gr; g.beginPath(); g.arc(32, 31, 28, 0, Math.PI * 2); g.fill();
      g.strokeStyle = 'rgba(176,109,5,0.8)'; g.lineWidth = 3;
      g.beginPath(); g.arc(32, 31, 19, 0, Math.PI * 2); g.stroke();
      g.fillStyle = 'rgba(176,109,5,0.85)';
      g.beginPath(); g.moveTo(32, 19); g.lineTo(40, 31); g.lineTo(32, 43); g.lineTo(24, 31); g.closePath(); g.fill();
      g.fillStyle = 'rgba(255,255,255,0.7)';
      g.beginPath(); g.ellipse(22, 18, 7, 4, -0.6, 0, Math.PI * 2); g.fill();
      return c;
    },

    targetPos(t) {
      if (!t) return { x: 40, y: 30 };
      if (t.getBoundingClientRect && !t.isConnected) t = document.querySelector('#coinPill .coin') || { x: 40, y: 30 };
      if (t.getBoundingClientRect) {
        // HUD counters don't move mid-flight: re-measuring every coin every frame forced a page layout per frame
        const now = performance.now(), hit = this.rects.get(t);
        if (hit && now - hit.t < 500) return hit;
        const r = t.getBoundingClientRect();
        const p = { x: r.left + r.width / 2, y: r.top + r.height / 2, t: now };
        this.rects.set(t, p);
        return p;
      }
      return t;
    },

    // o: { x, y, target (element or {x,y}), n, spread, power, onEach(i), onDone(), size }
    burst(o) {
      const n = Math.max(1, DI.Q.mini ? Math.ceil((o.n | 0) / 3) : o.n | 0);
      o.left = n;
      const pw = o.power || 1;
      for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + U.rand(-1.35, 1.35) * (o.spread || 1);
        const sp = U.rand(260, 620) * pw;
        this.coins.push({
          x: o.x + U.rand(-8, 8), y: o.y + U.rand(-8, 8),
          vx: Math.cos(a) * sp, vy: Math.sin(a) * sp,
          t: 0, delay: i * 0.018, p1: U.rand(0.3, 0.5), d2: U.rand(0.42, 0.62),
          spin: U.rand(0, 6), spinV: U.rand(10, 18), r: U.rand(11, 16) * (o.size || 1),
          side: U.rand(-160, 160), i, o, homing: false,
        });
      }
      if (this.coins.length > 220) this.coins.splice(0, this.coins.length - 220);
    },

    loop(ts) {
      const now = ts / 1000;
      const dt = this.last ? Math.min(0.05, now - this.last) : 0.016;
      this.last = now;
      if (this.coins.length || this.sparks.length) {
        this.update(dt);
        this.draw();
        this._clear = true;
      } else if (this._clear) {
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.clearRect(0, 0, this.cv.width, this.cv.height);
        this._clear = false;
      }
      requestAnimationFrame((t) => this.loop(t));
    },

    update(dt) {
      const keep = [];
      for (const c of this.coins) {
        if (c.delay > 0) { c.delay -= dt; keep.push(c); continue; }
        c.t += dt;
        c.spin += c.spinV * dt;
        if (c.t < c.p1) {
          c.vx *= Math.exp(-2.2 * dt);
          c.vy += 1500 * dt;
          c.x += c.vx * dt; c.y += c.vy * dt;
          keep.push(c);
          continue;
        }
        if (!c.homing) { c.homing = true; c.sx = c.x; c.sy = c.y; }
        const tg = this.targetPos(c.o.target);
        const f = Math.min(1, (c.t - c.p1) / c.d2);
        const e = f * f * (3 - 2 * f) * 0.4 + f * f * 0.6;
        const cx = (c.sx + tg.x) / 2 + c.side, cy = Math.min(c.sy, tg.y) - 90;
        const u = 1 - e;
        c.x = u * u * c.sx + 2 * u * e * cx + e * e * tg.x;
        c.y = u * u * c.sy + 2 * u * e * cy + e * e * tg.y;
        c.scale = 1 - e * 0.35;
        if (!DI.Q.mini && Math.random() < 0.5) this.sparks.push({ x: c.x, y: c.y, vx: 0, vy: 0, t: 0, life: 0.25, s: 2.5 });
        if (f >= 1) {
          for (let k = 0; k < 4; k++) {
            const a = Math.random() * Math.PI * 2;
            this.sparks.push({ x: tg.x, y: tg.y, vx: Math.cos(a) * 140, vy: Math.sin(a) * 140, t: 0, life: 0.35, s: 3.5 });
          }
          if (c.o.onEach) c.o.onEach(c.i);
          c.o.left--;
          if (c.o.left <= 0 && c.o.onDone) c.o.onDone();
          continue;
        }
        keep.push(c);
      }
      this.coins = keep;
      const ks = [];
      for (const s of this.sparks) {
        s.t += dt;
        if (s.t >= s.life) continue;
        s.x += s.vx * dt; s.y += s.vy * dt;
        ks.push(s);
      }
      this.sparks = ks.length > 300 ? ks.slice(-300) : ks;
    },

    draw() {
      const g = this.ctx;
      g.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
      g.clearRect(0, 0, this.W, this.H);
      g.globalCompositeOperation = 'lighter';
      for (const s of this.sparks) {
        const f = 1 - s.t / s.life;
        g.globalAlpha = f;
        g.fillStyle = '#ffe680';
        g.beginPath(); g.arc(s.x, s.y, s.s * f + 0.5, 0, Math.PI * 2); g.fill();
      }
      g.globalCompositeOperation = 'source-over';
      g.globalAlpha = 1;
      for (const c of this.coins) {
        if (c.delay > 0) continue;
        const r = c.r * (c.scale || 1);
        const sx = Math.max(0.15, Math.abs(Math.cos(c.spin)));
        g.save();
        g.translate(c.x, c.y);
        g.scale(sx, 1);
        g.drawImage(this.sprite, -r, -r, r * 2, r * 2);
        g.restore();
      }
    },
  };

  DI.CoinFX = CF;
})();
