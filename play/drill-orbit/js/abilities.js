// DRILL ORBIT — drill abilities: the tap ability while mining evolves with the drill head (Abilities.LEVELS).
// Blast → Quake Slam → Cluster Bombs → Laser Beam → Plasma Orb → Chain Lightning → Gravity Nova.
// Each use spends one charge (Drill Durability sets how many per dig) and breaks rock through Game.breakCell,
// so loot, specials and world breakthroughs work exactly as they do for the drill itself.
(function () {
  const DI = window.DI;
  const U = DI.U, BS = DI.BS, FX = DI.FX;
  const A = () => DI.Audio;

  const LIST = [
    { id: 'blast', name: 'Dynamite Blast', verb: 'BLAST', color: '#ff7a5a', c2: '#e0301a', svg: '<path fill="#fff3a0" d="m12 0 2 7 7-4-4 7 7 2-7 2 4 7-7-4-2 7-2-7-7 4 4-7-7-2 7-2-4-7 7 4z"/>' },
    { id: 'slam', name: 'Quake Slam', verb: 'SLAM', color: '#ffb35a', c2: '#c8601a', svg: '<path fill="none" stroke="#fff3c8" stroke-width="2.6" stroke-linecap="round" d="M3 15q9 9 18 0M6 11q6 6 12 0M12 2v6"/>' },
    { id: 'bombs', name: 'Cluster Bombs', verb: 'BOMBS', color: '#ff5a6a', c2: '#a8203a', svg: '<circle cx="8" cy="15" r="5" fill="#2a1a2a" stroke="#fff" stroke-width="1.6"/><circle cx="17" cy="9" r="4" fill="#2a1a2a" stroke="#fff" stroke-width="1.6"/><path stroke="#ffe066" stroke-width="2" d="M11 10l2-3M19 5l2-3"/>' },
    { id: 'laser', name: 'Laser Beam', verb: 'LASER', color: '#3ff2ff', c2: '#0a8ab8', svg: '<rect x="9" y="1" width="6" height="22" rx="3" fill="#bffaff"/><rect x="11" y="1" width="2" height="22" fill="#fff"/>' },
    { id: 'plasma', name: 'Plasma Orb', verb: 'PLASMA', color: '#c06bff', c2: '#6a28b8', svg: '<circle cx="12" cy="12" r="9" fill="#e0b0ff" opacity=".45"/><circle cx="12" cy="12" r="5" fill="#fff"/>' },
    { id: 'zap', name: 'Chain Lightning', verb: 'ZAP', color: '#7fd8ff', c2: '#2a5ad8', svg: '<path fill="#fff" d="M14 1 4 14h6l-2 9 11-14h-6z"/>' },
    { id: 'nova', name: 'Gravity Nova', verb: 'NOVA', color: '#ffd23a', c2: '#8a3ad8', svg: '<circle cx="12" cy="12" r="5" fill="#0a0414"/><ellipse cx="12" cy="12" rx="10.5" ry="4" fill="none" stroke="#ffe066" stroke-width="2.2" transform="rotate(-20 12 12)"/>' },
  ];

  const colX = (G, c) => G.shaftX + c * BS;
  const rowY = (r) => r * BS + BS / 2;

  // break one cell; false once the run has moved into a new world (the effect stops there)
  function hit(G, w, c, r) {
    if (G.world !== w) return false;
    if (r < 0) return true;
    const cell = w.sideCell(c, r);
    if (cell && !cell.broken) G.breakCell(cell, c, r);
    return G.world === w;
  }

  // round explosion of radius rad (in blocks) at a world point
  function boom(G, w, x, y, rad, color) {
    FX.ring(x, y, rad * BS * 1.35, color, 0.45, 10);
    FX.ring(x, y, rad * BS * 0.8, '#ffffff', 0.25, 6);
    FX.glow(x, y, rad * BS * 1.9, color, 0.5);
    FX.sparks(x, y, 24, '#ffe9a0', 0, Math.PI, 1.6);
    FX.chunks(x, y, [color, '#ffe066', '#4a3a40'], 10, 1.5);
    G.shake(10);
    A().play('explode');
    const cc = Math.round((x - G.shaftX) / BS), rr = Math.floor(y / BS), R = Math.ceil(rad);
    for (let r = rr - R; r <= rr + R; r++) {
      for (let c = cc - R; c <= cc + R; c++) {
        if ((c - cc) * (c - cc) + (r - rr) * (r - rr) > rad * rad) continue;
        if (!hit(G, w, c, r)) return false;
      }
    }
    return true;
  }

  function glowAt(ctx, color, x, y, r, a) {
    ctx.globalAlpha = a;
    ctx.drawImage(FX.glowSprite(color), x - r, y - r, r * 2, r * 2);
  }

  // jagged lightning path between two points
  function bolt(x0, y0, x1, y1) {
    const pts = [[x0, y0]], n = 7, dx = x1 - x0, dy = y1 - y0, len = Math.hypot(dx, dy) || 1;
    for (let i = 1; i < n; i++) {
      const f = i / n, off = U.rand(-1, 1) * Math.min(34, len * 0.18);
      pts.push([x0 + dx * f - (dy / len) * off, y0 + dy * f + (dx / len) * off]);
    }
    pts.push([x1, y1]);
    return pts;
  }

  const USE = {
    blast(G, run, x, y, row) {
      G.hitstop = 0.08; G.zoomPunch = 0.12; G.drill.stretch = -0.3; G.drill.kick = 14;
      G.explode(x, y + BS * 0.3, row, true);
      FX.text(x, y - 90, 'KABOOM!!', '#ffe066', 62, { life: 1.1, vy: -50 });
    },

    // shock arcs fan downward from the drill; each wave breaks a row one block wider than the last
    slam(G, run, x, y, row) {
      G.hitstop = 0.1; G.zoomPunch = 0.14; G.drill.stretch = -0.45; G.drill.kick = -16; G.shake(16);
      G.flash = 0.3; G.flashColor = '#fff1c8';
      A().play('quake'); A().play('impact');
      FX.ring(x, y, 150, '#fff1c8', 0.35, 12);
      FX.text(x, y - 90, 'QUAKE SLAM!', '#ffd27a', 56, { life: 1.1, vy: -50 });
      return {
        t: 0, k: 0, c0: run.pc,
        update(G, dt) {
          this.t += dt;
          while (this.k < 7 && this.t >= this.k * 0.065) {
            const r = row + this.k, half = 1 + this.k;
            for (let c = this.c0 - half; c <= this.c0 + half; c++) if (!hit(G, this.w, c, r)) return false;
            for (const s of [-1, 1]) FX.dust(colX(G, this.c0 + s * half), rowY(r), 3, '#d8b890', Math.PI, 1.1);
            G.shake(7);
            this.k++;
          }
          return this.t < 0.8;
        },
        draw(G, ctx) {
          ctx.lineCap = 'round';
          for (let i = 0; i < 4; i++) {
            const f = this.t * 1.9 - i * 0.14;
            if (f <= 0 || f >= 1) continue;
            const R = 50 + f * BS * 8;
            ctx.globalAlpha = (1 - f) * 0.95;
            ctx.strokeStyle = i % 2 ? '#ffb35a' : '#fff6d8';
            ctx.lineWidth = 18 * (1 - f) + 3;
            ctx.beginPath(); ctx.ellipse(x, y, R, R * 0.7, 0, 0.12, Math.PI - 0.12); ctx.stroke();
          }
        },
      };
    },

    // five bombs scatter and burst centre-out, the outer ones wider and deeper
    bombs(G, run, x, y) {
      G.drill.kick = 12; G.shake(6);
      A().play('launch');
      FX.text(x, y - 90, 'CLUSTER BOMBS!', '#ff8a9a', 52, { life: 1.1, vy: -50 });
      const list = [];
      for (let i = 0; i < 5; i++) {
        const a = -Math.PI / 2 + (i - 2) * 0.4 + U.rand(-0.08, 0.08), sp = U.rand(400, 470);
        list.push({ x, y: y - 20, vx: Math.cos(a) * sp * 1.3, vy: Math.sin(a) * sp, fuse: 0.72 + Math.abs(i - 2) * 0.13, spin: U.rand(0, 6), done: false });
      }
      return {
        t: 0,
        update(G, dt) {
          this.t += dt;
          for (const b of list) {
            if (b.done) continue;
            b.vy += 1500 * dt; b.vx *= Math.exp(-1.4 * dt);
            b.x += b.vx * dt; b.y += b.vy * dt; b.spin += dt * 9;
            b.fuse -= dt;
            if (Math.random() < 0.5) FX.add({ k: 'spark', x: b.x + Math.cos(b.spin) * 12, y: b.y + Math.sin(b.spin) * 12 - 10, vx: U.rand(-40, 40), vy: U.rand(-90, -30), g: 200, c: '#ffcf5a', life: 0.3, w: 3 });
            if (b.fuse <= 0) { b.done = true; if (!boom(G, this.w, b.x, b.y, 1.9, '#ff6a4a')) return false; }
          }
          return list.some((b) => !b.done);
        },
        draw(G, ctx) {
          for (const b of list) {
            if (b.done) continue;
            const blink = Math.sin(G.t * (18 + (1 - b.fuse) * 50)) > 0;
            glowAt(ctx, '#ff5a3c', b.x, b.y, blink ? 34 : 24, 0.8);
            ctx.globalAlpha = 1;
            ctx.fillStyle = '#241a26';
            ctx.beginPath(); ctx.arc(b.x, b.y, 14, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = 'rgba(255,255,255,0.35)';
            ctx.beginPath(); ctx.arc(b.x - 4, b.y - 5, 4.5, 0, Math.PI * 2); ctx.fill();
            ctx.fillStyle = blink ? '#ff3b3b' : '#7a1a1a';
            ctx.beginPath(); ctx.arc(b.x + Math.cos(b.spin) * 12, b.y + Math.sin(b.spin) * 12, 4, 0, Math.PI * 2); ctx.fill();
          }
        },
      };
    },

    // a beam as wide as the drill fires straight down 16 rows; the drill dives along the cut
    laser(G, run, x, y, row) {
      const half = (run.width - 1) / 2, c0 = run.pc;
      G.hitstop = 0.06; G.drill.kick = -10; G.zoomPunch = 0.1;
      G.flash = 0.25; G.flashColor = '#bffaff';
      A().play('charge'); A().play('warp');
      FX.text(x, y - 90, 'LASER BEAM!', '#9ffcff', 56, { life: 1.1, vy: -50 });
      return {
        t: 0, len: 0,
        update(G, dt) {
          this.t += dt;
          const reach = Math.min(16, Math.floor(this.t * 42) + 1);
          while (this.len < reach) {
            const r = row + this.len;
            for (let c = c0 - half; c <= c0 + half; c++) if (!hit(G, this.w, c, r)) return false;
            FX.sparks(x, rowY(r), 4, '#bffaff', -Math.PI / 2, 1.1, 1.3);
            this.len++;
          }
          if (this.t < 0.85) G.shake(3);
          return this.t < 1;
        },
        draw(G, ctx) {
          const f = this.t < 0.82 ? Math.min(1, this.t * 12) : Math.max(0, (1 - this.t) / 0.18);
          const top = Math.min(G.drill.y + 16, (row + this.len) * BS), bot = (row + this.len) * BS;
          const w = (half * 2 + 1) * BS * 0.62, flick = 0.88 + 0.12 * Math.sin(G.t * 70);
          ctx.globalCompositeOperation = 'lighter';
          ctx.globalAlpha = 0.28 * f; ctx.fillStyle = '#3ff2ff';
          ctx.fillRect(x - w * flick, top, w * 2 * flick, bot - top);
          ctx.globalAlpha = 0.55 * f; ctx.fillStyle = '#7ff8ff';
          ctx.fillRect(x - w * 0.5 * flick, top, w * flick, bot - top);
          ctx.globalAlpha = f; ctx.fillStyle = '#ffffff';
          ctx.fillRect(x - w * 0.16, top, w * 0.32, bot - top);
          // energy rings racing down the beam
          ctx.strokeStyle = '#d8feff'; ctx.lineWidth = 4;
          const span = Math.max(1, bot - top);
          for (let i = 0; i < 6; i++) {
            ctx.globalAlpha = 0.65 * f;
            const yy = top + ((G.t * 1100 + i * 140) % span);
            ctx.beginPath(); ctx.ellipse(x, yy, w * 1.05, 9, 0, 0, Math.PI * 2); ctx.stroke();
          }
          glowAt(ctx, '#3ff2ff', x, top, 70 + 10 * flick, f);
          glowAt(ctx, '#bffaff', x, bot, 120 * flick, f);
          ctx.globalCompositeOperation = 'source-over';
        },
      };
    },

    // a plasma orb sinks through the rock, eating a three-wide path, then detonates
    plasma(G, run, x, y, row) {
      G.drill.kick = 10; G.hitstop = 0.05;
      A().play('powerup'); A().play('warp');
      FX.text(x, y - 90, 'PLASMA ORB!', '#e0b0ff', 56, { life: 1.1, vy: -50 });
      const cc = Math.round((x - G.shaftX) / BS);
      return {
        t: 0, oy: y, last: row - 1, done: false,
        update(G, dt) {
          this.t += dt;
          if (this.done) return this.t < 1.25;
          this.oy += (420 + this.t * 700) * dt;
          const r = Math.floor(this.oy / BS);
          while (this.last < r) {
            this.last++;
            for (let c = cc - 1; c <= cc + 1; c++) if (!hit(G, this.w, c, this.last)) return false;
          }
          FX.add({ k: 'spark', x: x + U.rand(-26, 26), y: this.oy - 20, vx: U.rand(-60, 60), vy: U.rand(-160, -60), g: 0, c: Math.random() < 0.5 ? '#e0b0ff' : '#ffffff', life: 0.45, w: 4 });
          if (this.t >= 0.85) {
            this.done = true;
            G.flash = 0.55; G.flashColor = '#e8c8ff'; G.shake(20); G.zoomPunch = 0.16;
            A().play('quake');
            FX.ring(x, this.oy, BS * 6, '#ffffff', 0.5, 14);
            return boom(G, this.w, x, this.oy, 3.3, '#c06bff') || false;
          }
          return true;
        },
        draw(G, ctx) {
          if (this.done) return;
          const p = 1 + 0.12 * Math.sin(G.t * 22), grow = 1 + this.t * 0.6;
          ctx.globalCompositeOperation = 'lighter';
          glowAt(ctx, '#c06bff', x, this.oy, 95 * p * grow, 0.9);
          glowAt(ctx, '#ffffff', x, this.oy, 36 * p * grow, 0.9);
          ctx.globalCompositeOperation = 'source-over';
          ctx.globalAlpha = 1;
          ctx.fillStyle = '#ffffff';
          ctx.beginPath(); ctx.arc(x, this.oy, 14 * grow, 0, Math.PI * 2); ctx.fill();
          for (let i = 0; i < 3; i++) {
            const a = G.t * 9 + i * 2.1;
            ctx.fillStyle = '#e0b0ff';
            ctx.beginPath(); ctx.arc(x + Math.cos(a) * 34 * grow, this.oy + Math.sin(a) * 14 * grow, 5, 0, Math.PI * 2); ctx.fill();
          }
        },
      };
    },

    // lightning hops between the most valuable ores and finds near the drill, shattering each one
    zap(G, run, x, y, row) {
      const w = G.world, cand = [];
      for (let r = Math.max(0, row - 2); r <= row + 10; r++) {
        for (let c = run.pc - 7; c <= run.pc + 7; c++) {
          const cell = w.cell(c, r);
          if (cell && (cell.broken || cell.air)) continue;
          const t = cell ? cell.t : w.sideType(c, r);
          if (t === 'crust') continue;
          const score = (DI.BLOCKS[t].value || 0) * (cell && cell.sp ? 40 : 1) + Math.random();
          cand.push({ c, r, score });
        }
      }
      cand.sort((a, b) => b.score - a.score);
      // chain them nearest-first from the drill head
      let px = x, py = y;
      const left = cand.slice(0, 9), chain = [];
      while (left.length) {
        let bi = 0, bd = Infinity;
        left.forEach((p, i) => { const d = Math.hypot(colX(G, p.c) - px, rowY(p.r) - py); if (d < bd) { bd = d; bi = i; } });
        const p = left.splice(bi, 1)[0];
        chain.push(p); px = colX(G, p.c); py = rowY(p.r);
      }
      G.flash = 0.3; G.flashColor = '#d8f4ff'; G.drill.kick = 8;
      A().play('warp');
      FX.text(x, y - 90, 'CHAIN LIGHTNING!', '#bfe8ff', 50, { life: 1.1, vy: -50 });
      return {
        t: 0, i: 0, bolts: [], fx: x, fy: y,
        update(G, dt) {
          this.t += dt;
          while (this.i < chain.length && this.t >= this.i * 0.075) {
            const p = chain[this.i++], tx = colX(G, p.c), ty = rowY(p.r);
            this.bolts.push({ pts: bolt(this.fx, this.fy, tx, ty), t: this.t });
            this.fx = tx; this.fy = ty;
            for (const [dc, dr] of [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1]]) if (!hit(G, this.w, p.c + dc, p.r + dr)) return false;
            FX.sparks(tx, ty, 14, '#bfe8ff', 0, Math.PI, 1.4);
            FX.ring(tx, ty, 70, '#7fd8ff', 0.3, 5);
            G.shake(5);
            A().play('gem');
          }
          return this.t < chain.length * 0.075 + 0.35;
        },
        draw(G, ctx) {
          ctx.lineCap = 'round'; ctx.lineJoin = 'round';
          ctx.globalCompositeOperation = 'lighter';
          for (const b of this.bolts) {
            const age = this.t - b.t;
            if (age > 0.32) continue;
            const f = 1 - age / 0.32;
            // re-jag now and then so the bolt crackles
            if (Math.random() < 0.3) { const a = b.pts[0], z = b.pts[b.pts.length - 1]; b.pts = bolt(a[0], a[1], z[0], z[1]); }
            for (const [lw, col, al] of [[16, '#3a8aff', 0.35], [7, '#9fe0ff', 0.8], [2.5, '#ffffff', 1]]) {
              ctx.globalAlpha = al * f; ctx.strokeStyle = col; ctx.lineWidth = lw;
              ctx.beginPath(); ctx.moveTo(b.pts[0][0], b.pts[0][1]);
              for (let k = 1; k < b.pts.length; k++) ctx.lineTo(b.pts[k][0], b.pts[k][1]);
              ctx.stroke();
            }
            const z = b.pts[b.pts.length - 1];
            glowAt(ctx, '#9fe0ff', z[0], z[1], 60, f);
          }
          ctx.globalCompositeOperation = 'source-over';
        },
      };
    },

    // a black hole opens below the drill, swallows everything around it, then collapses in a flash
    nova(G, run, x, y, row) {
      const cx = x, cy = y + BS * 2.5, cc = Math.round((cx - G.shaftX) / BS), cr = Math.floor(cy / BS), R = 6;
      const cells = [];
      for (let r = cr - R; r <= cr + R; r++) for (let c = cc - R; c <= cc + R; c++) {
        const d = Math.hypot(c - cc, r - cr);
        if (d <= R && r >= 0) cells.push({ c, r, d });
      }
      cells.sort((a, b) => a.d - b.d);
      G.hitstop = 0.08; G.zoomPunch = -0.08; G.slow = 0.5;
      A().play('warp'); A().play('charge');
      FX.text(x, y - 90, 'GRAVITY NOVA!', '#ffe066', 56, { life: 1.2, vy: -50 });
      return {
        t: 0, i: 0, done: false,
        update(G, dt) {
          this.t += dt;
          if (this.done) return this.t < 1.3;
          const rad = Math.min(R, (this.t / 0.85) * R);
          while (this.i < cells.length && cells[this.i].d <= rad) {
            const p = cells[this.i++], px = colX(G, p.c), py = rowY(p.r);
            if (!hit(G, this.w, p.c, p.r)) return false;
            FX.add({ k: 'spark', x: px, y: py, vx: (cx - px) * 3.2, vy: (cy - py) * 3.2, g: 0, c: Math.random() < 0.5 ? '#ffe066' : '#c06bff', life: 0.3, w: 5 });
          }
          if (this.t < 0.9) G.shake(4);
          else {
            this.done = true;
            G.flash = 0.75; G.flashColor = '#fff6c8'; G.shake(22); G.zoomPunch = 0.2;
            A().play('explode'); A().play('quake');
            FX.ring(cx, cy, R * BS * 1.3, '#ffe066', 0.6, 16);
            FX.ring(cx, cy, R * BS * 0.8, '#ffffff', 0.4, 10);
            FX.glow(cx, cy, R * BS * 1.6, '#ffd23a', 0.7);
            FX.sparks(cx, cy, 60, '#ffe066', 0, Math.PI, 2.2);
            FX.confetti(cx, cy, 30);
          }
          return true;
        },
        draw(G, ctx) {
          if (this.done) return;
          const g = Math.min(1, this.t / 0.25), rr = (26 + 34 * Math.min(1, this.t / 0.85)) * g, spin = G.t * 7;
          ctx.globalCompositeOperation = 'lighter';
          glowAt(ctx, '#8a3ad8', cx, cy, rr * 4, 0.8);
          ctx.globalCompositeOperation = 'source-over';
          // swirling accretion arms
          ctx.lineCap = 'round';
          for (let i = 0; i < 3; i++) {
            ctx.globalAlpha = 0.85;
            ctx.strokeStyle = i === 1 ? '#c06bff' : '#ffe066';
            ctx.lineWidth = 6;
            ctx.beginPath(); ctx.ellipse(cx, cy, rr * 2.2, rr * 0.8, -0.35, spin + i * 2.1, spin + i * 2.1 + 1.8); ctx.stroke();
          }
          ctx.globalAlpha = 0.5; ctx.strokeStyle = '#ffffff'; ctx.lineWidth = 2;
          ctx.beginPath(); ctx.arc(cx, cy, rr * 1.35, 0, Math.PI * 2); ctx.stroke();
          ctx.globalAlpha = 1; ctx.fillStyle = '#05010d';
          ctx.beginPath(); ctx.arc(cx, cy, rr, 0, Math.PI * 2); ctx.fill();
        },
      };
    },
  };

  const Abilities = {
    LIST,
    // Drill Power level that unlocks each ability; each one lands on a drill head evolution
    LEVELS: [1, 8, 19, 34, 64, 89, 103],
    active: [],
    of(save) { return LIST[DI.Art.tierOf(save.upgrades.power, this.LEVELS)]; },
    use(G) {
      const run = G.run, ab = this.of(G.S), row = run.pr + 1;
      const x = G.shaftX + run.pc * BS, y = row * BS;
      const fx = USE[ab.id](G, run, x, y, row);
      if (fx) { fx.w = G.world; this.active.push(fx); }
      DI.Analytics.track('ability_used', { ability: ab.id, depth: Math.floor(run.depth), charges_left: run.dynamite });
    },
    update(G, dt) {
      if (!this.active.length) return;
      this.active = this.active.filter((fx) => G.world === fx.w && fx.update(G, dt) !== false);
    },
    draw(G, ctx) {
      if (!this.active.length) return;
      for (const fx of this.active) {
        ctx.save();
        fx.draw(G, ctx);
        ctx.restore();
      }
    },
    clear() { this.active.length = 0; },
  };

  DI.Abilities = Abilities;
})();
