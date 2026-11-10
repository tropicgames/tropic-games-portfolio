// DRILL ORBIT — lightweight particle + floating text system (world space)
(function () {
  const DI = window.DI;
  const U = DI.U;
  const MAX = 650;
  const LITE_DROP = { dust: 1, flash: 1, glint: 1, halo: 1, glow: 1 };
  // When a lot happens at once (a blast, a laser, a cave-in), what matters survives: collectible feedback always
  // shows, accents and debris only up to a per-frame allowance, so the first few blocks get the full show
  // and the rest stay quiet instead of piling hundreds of particles onto one frame.
  const PRIO = { orePrize: 3, icon: 3, ring: 2, glow: 1, halo: 1, glint: 1, flash: 1, chunk: 0, spark: 0, dust: 0 };
  const PER_FRAME = [[60, 18], [10, 0], [12, 6]]; // [full effects, minimal effects] for priority 0, 1, 2
  const KEEP_WHEN_OFF = { orePrize: 1, icon: 1 }; // Performance: Max keeps only what shows you what you found

  const FX = {
    list: [],
    texts: [],
    budget: 1, // 0.25..1, cut the instant a frame runs slow and restored over ~1.5 s of smooth frames (see frame())
    spawned: [0, 0, 0], textN: 0, // spawned this frame, per priority
    // fed every frame by the game loop
    frame(dt) {
      this.budget = dt > 1 / 40 ? Math.max(0.25, this.budget * 0.5) : Math.min(1, this.budget + dt * 0.5);
      this.spawned[0] = this.spawned[1] = this.spawned[2] = 0;
      this.textN = 0;
    },

    add(p) {
      const Q = DI.Q, mini = Q.mini, pr = PRIO[p.k] ?? 2;
      if (Q.fxOff && !KEEP_WHEN_OFF[p.k]) return p;
      // minimal effects (phones, Performance Mode): no soft/glow layers and about a third of the debris and sparks;
      // the frame budget thins debris further the instant a frame runs slow
      if (mini && LITE_DROP[p.k]) return p;
      if (pr === 0 && Math.random() > (mini ? 0.35 : 1) * this.budget) return p;
      if (pr < 3) {
        if (this.spawned[pr] >= PER_FRAME[pr][mini ? 1 : 0]) return p;
        this.spawned[pr]++;
      }
      if (this.list.length >= Math.min(MAX, Q.particles)) {
        if (pr === 0) return p; // screen full: new debris waits, feedback pushes out the oldest
        this.list.shift();
      }
      p.age = 0;
      this.list.push(p);
      return p;
    },

    // debris chunks from a broken block
    chunks(x, y, colors, n, power) {
      power = power || 1;
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2;
        const sp = (80 + Math.random() * 240) * power;
        this.add({
          k: 'chunk', x: x + U.rand(-10, 10), y: y + U.rand(-10, 10),
          vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 120 * power, g: 900,
          s: U.rand(3, 8), rot: Math.random() * 6, vr: U.rand(-10, 10),
          c: colors[(Math.random() * colors.length) | 0], life: U.rand(0.4, 0.8),
        });
      }
    },

    // Rock splits outward and back past the drill, exposing the next face.
    shatter(x, y, colors, n, power = 1) {
      for (let i = 0; i < n; i++) {
        const side = i % 2 ? 1 : -1;
        this.add({ k: 'chunk', shard: true, x: x + side * U.rand(2, 18), y: y + U.rand(-4, 10),
          vx: side * U.rand(100, 260) * power, vy: -U.rand(100, 260) * power,
          g: 820, s: U.rand(5, 11), rot: U.rand(0, 6), vr: side * U.rand(5, 13),
          c: colors[i % colors.length], life: U.rand(.28, .55), drag: .8 });
      }
    },

    dust(x, y, n, color, spread, big) {
      for (let i = 0; i < n; i++) {
        const a = -Math.PI / 2 + U.rand(-spread, spread);
        const sp = U.rand(40, 220) * (big || 1);
        this.add({
          k: 'dust', x: x + U.rand(-14, 14), y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 60,
          s: U.rand(8, 20) * (big || 1), grow: U.rand(20, 50), c: color, life: U.rand(0.6, 1.3), drag: 2.4,
        });
      }
    },

    sparks(x, y, n, color, dirA, spread, speed) {
      for (let i = 0; i < n; i++) {
        const a = (dirA || 0) + U.rand(-(spread || Math.PI), spread || Math.PI);
        const sp = U.rand(150, 450) * (speed || 1);
        this.add({ k: 'spark', x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 500, c: color, life: U.rand(0.2, 0.5), w: U.rand(1.5, 3) });
      }
    },

    // one pre-rendered radial gradient per color instead of a new gradient per glow per frame
    glowSprites: new Map(),
    glowSprite(c) {
      let s = this.glowSprites.get(c);
      if (s) return s;
      s = document.createElement('canvas');
      s.width = s.height = 128;
      const g = s.getContext('2d'), gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
      gr.addColorStop(0, U.rgba(c, 0.8)); gr.addColorStop(1, U.rgba(c, 0));
      g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
      this.glowSprites.set(c, s);
      return s;
    },

    glow(x, y, r, color, life) {
      this.add({ k: 'glow', x, y, vx: 0, vy: 0, g: 0, r, c: color, life: life || 0.5 });
    },

    ring(x, y, r, color, life, w) {
      this.add({ k: 'ring', x, y, vx: 0, vy: 0, g: 0, r, c: color, life: life || 0.6, w: w || 5 });
    },

    // Rarer ores burst into light, then a large gem sweeps back to the moving drill.
    rareOre(x, y, img, color, tier, drill) {
      const life = .65 + tier * .14;
      this.add({ k: 'orePrize', x, y, x0: x, y0: y, vx: 0, vy: 0, g: 0,
        img, c: color, tier, follow: drill, s: 32 + tier * 10, life });
      this.glow(x, y, 55 + tier * 27, color, .25 + tier * .1);
      this.ring(x, y, 40 + tier * 22, color, .35 + tier * .08, 2 + tier);
      if (tier >= 2) this.add({ k: 'halo', x, y, vx: 0, vy: 0, g: 0, c: color, r: 30 + tier * 17, life: .65, rot: 0 });
      for (let i = 0; i < 4 + tier * 4; i++) {
        const a = i * Math.PI * 2 / (4 + tier * 4), speed = U.rand(60, 130) + tier * 18;
        this.add({ k: 'glint', x, y, vx: Math.cos(a) * speed, vy: Math.sin(a) * speed - 55,
          g: 80, drag: 1.8, c: i % 3 ? color : '#ffffff', s: U.rand(3, 6) + tier,
          rot: a, vr: U.rand(-2, 2), life: U.rand(.35, .6) + tier * .07 });
      }
    },

    // collectible sprite that pops then flies upward/fades
    icon(x, y, img, size, life) {
      this.add({ k: 'icon', x, y, vx: U.rand(-30, 30), vy: -160, g: 120, img, s: size || 40, life: life || 1.2, drag: 1.5 });
    },

    trail(x, y, color, s) {
      this.add({ k: 'dust', x, y, vx: U.rand(-20, 20), vy: U.rand(-20, 20), g: -20, s: s || 8, grow: 18, c: color, life: 0.5, drag: 1 });
    },

    confetti(x, y, n) {
      const cols = ['#ff4f6d', '#ffcc33', '#3fb6ff', '#5ccf3c', '#c06bff', '#ffffff'];
      for (let i = 0; i < n; i++) {
        const a = U.rand(-Math.PI, 0);
        const sp = U.rand(200, 600);
        this.add({ k: 'chunk', x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, g: 500, s: U.rand(4, 8), rot: Math.random() * 6, vr: U.rand(-12, 12), c: U.pick(cols), life: U.rand(1, 1.8), drag: 1.2 });
      }
    },

    text(x, y, str, color, size, opts) {
      opts = opts || {};
      // a crowded frame keeps its big numbers and titles; small "+value" pops beyond the allowance are skipped
      if ((size || 22) < 26 && this.textN >= (DI.Q.mini ? 1 : 3)) return;
      this.textN++;
      if (this.texts.length > (DI.Q.mini ? 8 : 24)) this.texts.shift();
      this.texts.push({ x: x + U.rand(-6, 6), y, str, c: color || '#fff', s: size || 22, age: 0, life: opts.life || 1.1, vy: opts.vy || -90, img: opts.img || null, rot: U.rand(-0.12, 0.12) });
    },

    update(dt) {
      const L = this.list;
      let j = 0;
      for (let i = 0; i < L.length; i++) {
        const p = L[i];
        p.age += dt;
        if (p.age >= p.life) continue;
        if (p.k === 'orePrize') {
          const lift = Math.min(1, p.age / .2);
          const flight = U.clamp((p.age - .2) / (p.life - .2), 0, 1);
          const eased = flight * flight * (3 - 2 * flight);
          const endX = p.follow.x, endY = p.follow.y - 75;
          const side = p.x0 < endX ? -1 : 1;
          p.x = U.lerp(p.x0, endX, eased) + side * Math.sin(flight * Math.PI) * (30 + p.tier * 8);
          p.y = U.lerp(p.y0 - Math.sin(lift * Math.PI / 2) * 45, endY, eased) - Math.sin(flight * Math.PI) * 45;
          L[j++] = p; continue;
        }
        if (p.drag) { const f = Math.exp(-p.drag * dt); p.vx *= f; p.vy *= f; }
        p.vy += p.g * dt;
        p.x += p.vx * dt; p.y += p.vy * dt;
        if (p.vr) p.rot += p.vr * dt;
        L[j++] = p;
      }
      L.length = j;
      const T = this.texts;
      j = 0;
      for (let i = 0; i < T.length; i++) {
        const t = T[i];
        t.age += dt;
        if (t.age >= t.life) continue;
        t.y += t.vy * dt * (1 - t.age / t.life);
        T[j++] = t;
      }
      T.length = j;
    },

    draw(ctx) {
      for (const p of this.list) {
        const f = 1 - p.age / p.life;
        switch (p.k) {
          case 'chunk':
            ctx.globalAlpha = Math.min(1, f * 2);
            ctx.fillStyle = p.c;
            ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
            if (p.shard) {
              ctx.beginPath(); ctx.moveTo(-p.s * .7, -p.s * .35); ctx.lineTo(p.s * .45, -p.s * .6);
              ctx.lineTo(p.s * .65, p.s * .35); ctx.lineTo(-p.s * .3, p.s * .6); ctx.closePath(); ctx.fill();
              ctx.fillStyle = 'rgba(255,255,255,.25)';
              ctx.beginPath(); ctx.moveTo(-p.s * .7, -p.s * .35); ctx.lineTo(p.s * .45, -p.s * .6); ctx.lineTo(0, 0); ctx.fill();
            } else ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s);
            ctx.restore();
            break;
          case 'dust':
            ctx.globalAlpha = f * 0.55;
            ctx.fillStyle = p.c;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.s + p.grow * (1 - f), 0, Math.PI * 2); ctx.fill();
            break;
          case 'spark':
            // additive so overlapping sparks bloom into bright hot spots
            ctx.globalCompositeOperation = 'lighter';
            ctx.globalAlpha = f;
            ctx.strokeStyle = p.c; ctx.lineWidth = p.w;
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.vx * 0.035, p.y - p.vy * 0.035); ctx.stroke();
            ctx.globalCompositeOperation = 'source-over';
            break;
          case 'glow': {
            ctx.globalCompositeOperation = 'lighter';
            ctx.globalAlpha = f;
            ctx.drawImage(this.glowSprite(p.c), p.x - p.r, p.y - p.r, p.r * 2, p.r * 2);
            ctx.globalCompositeOperation = 'source-over';
            break;
          }
          case 'ring': {
            const e = 1 - f;
            ctx.globalAlpha = f;
            ctx.strokeStyle = p.c; ctx.lineWidth = p.w * f + 1;
            ctx.beginPath(); ctx.arc(p.x, p.y, p.r * (0.25 + (1 - (1 - e) * (1 - e)) * 0.95), 0, Math.PI * 2); ctx.stroke();
            break;
          }
          case 'halo': {
            const e = p.age / p.life;
            ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(e * 1.4);
            ctx.globalAlpha = (1 - e) * .8; ctx.strokeStyle = p.c; ctx.lineWidth = 2;
            for (let i = 0; i < 3; i++) {
              ctx.beginPath(); ctx.arc(0, 0, p.r * (.6 + e), i * Math.PI * 2 / 3, i * Math.PI * 2 / 3 + 1.25); ctx.stroke();
            }
            ctx.restore(); break;
          }
          case 'glint': {
            const size = p.s * Math.sin(Math.PI * p.age / p.life);
            ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
            ctx.globalCompositeOperation = 'lighter'; ctx.globalAlpha = f;
            ctx.fillStyle = p.c;
            ctx.beginPath(); ctx.moveTo(0, -size * 1.6); ctx.lineTo(size * .25, -size * .25);
            ctx.lineTo(size, 0); ctx.lineTo(size * .25, size * .25); ctx.lineTo(0, size * 1.6);
            ctx.lineTo(-size * .25, size * .25); ctx.lineTo(-size, 0); ctx.lineTo(-size * .25, -size * .25);
            ctx.closePath(); ctx.fill(); ctx.restore(); break;
          }
          case 'orePrize': {
            const age = p.age, travel = U.clamp((age - .2) / (p.life - .2), 0, 1);
            const pop = U.easeOutBack(Math.min(1, age / .18));
            const size = p.s * pop * (1 - travel * .7);
            ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(Math.sin(travel * Math.PI) * .35);
            ctx.globalAlpha = Math.min(1, f * 4);
            // Faceted outline and little orbiting stars highlight the ore's own color.
            ctx.strokeStyle = p.c; ctx.lineWidth = 2;
            ctx.beginPath(); ctx.moveTo(0, -size * .7); ctx.lineTo(size * .58, -size * .15);
            ctx.lineTo(size * .4, size * .48); ctx.lineTo(0, size * .7);
            ctx.lineTo(-size * .4, size * .48); ctx.lineTo(-size * .58, -size * .15); ctx.closePath(); ctx.stroke();
            if (p.tier >= 2) {
              for (let i = 0; i < p.tier; i++) {
                const a = age * 5 + i * Math.PI * 2 / p.tier;
                ctx.fillStyle = '#ffffff'; ctx.beginPath(); ctx.arc(Math.cos(a) * size * .8, Math.sin(a) * size * .55, 2.5, 0, Math.PI * 2); ctx.fill();
              }
            }
            ctx.drawImage(p.img, -size / 2, -size / 2, size, size);
            ctx.restore(); break;
          }
          case 'flash':
            // white "hit frame" over a block the moment it breaks
            ctx.globalAlpha = f * (p.alpha == null ? .75 : p.alpha);
            ctx.fillStyle = p.c || '#ffffff';
            ctx.fillRect(p.x - p.s / 2, p.y - p.s / 2, p.s, p.s);
            break;
          case 'icon': {
            const pop = p.age < 0.15 ? U.easeOutBack(p.age / 0.15) : 1;
            ctx.globalAlpha = Math.min(1, f * 3);
            const s = p.s * pop;
            ctx.drawImage(p.img, p.x - s / 2, p.y - s / 2, s, s);
            break;
          }
        }
      }
      ctx.globalAlpha = 1;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const mini = DI.Q.mini;
      for (const t of this.texts) {
        const f = t.age / t.life;
        // punchy pop: overshoot to 135% then settle, with a slight tilt that straightens out
        const pop = t.age < 0.16 ? 0.4 + U.easeOutBack(t.age / 0.16) * 0.95 : 1.35 - Math.min(1, (t.age - 0.16) / 0.12) * 0.35;
        ctx.globalAlpha = f > 0.7 ? (1 - f) / 0.3 : 1;
        const s = t.s * pop;
        ctx.save();
        ctx.translate(t.x, t.y);
        ctx.rotate(t.rot * Math.max(0, 1 - t.age * 4));
        ctx.font = `800 ${s | 0}px Fredoka, "Trebuchet MS", sans-serif`;
        let x = 0;
        if (t.img) {
          const w = ctx.measureText(t.str).width;
          ctx.drawImage(t.img, -w / 2 - s * 1.1, -s * 0.55, s * 1.1, s * 1.1);
          x += s * 0.1;
        }
        if (mini) {
          // stroking glyph outlines is expensive on phone GPUs: a dark drop copy reads almost as well
          ctx.fillStyle = 'rgba(20,10,30,0.85)';
          ctx.fillText(t.str, x + 2, 3);
        } else {
          ctx.lineWidth = Math.max(3, s * 0.2);
          ctx.strokeStyle = 'rgba(20,10,30,0.8)';
          ctx.strokeText(t.str, x, 2);
        }
        ctx.fillStyle = t.c;
        ctx.fillText(t.str, x, 0);
        ctx.restore();
      }
      ctx.globalAlpha = 1;
    },

    clear() { this.list.length = 0; this.texts.length = 0; },
  };

  DI.FX = FX;
})();
