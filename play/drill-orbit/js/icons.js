// DRILL ORBIT — procedural block sprites and collectible icons (cached offscreen canvases)
(function () {
  const DI = window.DI;
  const U = DI.U;
  const BS = (DI.BS = 56); // block size in world units
  const RES = 2; // sprite resolution multiplier

  // cpu: software canvas, so toDataURL doesn't stall the GPU (10-100 ms per call on phones)
  function mk(w, h, cpu) {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    if (cpu) c.getContext('2d', { willReadFrequently: true });
    return c;
  }

  // ------------------------------------------------------------ block sprites
  const blockCache = {};
  function blockSprite(id, variant, tint) {
    const key = id + '_' + variant + (tint || '');
    if (blockCache[key]) return blockCache[key];
    const b = DI.BLOCKS[id];
    const S = BS * RES;
    const c = mk(S, S), g = c.getContext('2d');
    const r = U.rng(hashStr(id) + variant * 977);
    g.scale(RES, RES);

    // base
    const grad = g.createLinearGradient(0, 0, BS, BS);
    grad.addColorStop(0, U.shade(b.c1, 0.08));
    grad.addColorStop(1, b.c2);
    g.fillStyle = grad;
    g.fillRect(0, 0, BS, BS);

    // texture
    if (b.style === 'soil') {
      for (let i = 0; i < 26; i++) {
        g.fillStyle = r() < 0.5 ? U.shade(b.c1, -0.18) : U.shade(b.c1, 0.12);
        const s = 2 + r() * 4;
        g.fillRect(r() * BS, r() * BS, s, s * 0.7);
      }
      for (let i = 0; i < 3; i++) {
        g.fillStyle = U.shade(b.c2, -0.1);
        g.beginPath(); g.ellipse(r() * BS, r() * BS, 3 + r() * 3, 2 + r() * 2, 0, 0, Math.PI * 2); g.fill();
      }
    } else if (b.style === 'rock' || b.style === 'alien' || b.style === 'lava') {
      // facets
      for (let i = 0; i < 5; i++) {
        g.fillStyle = r() < 0.5 ? U.rgba('#ffffff', 0.07) : U.rgba('#000000', 0.12);
        g.beginPath();
        const x = r() * BS, y = r() * BS;
        g.moveTo(x, y); g.lineTo(x + 8 + r() * 16, y + r() * 8); g.lineTo(x + r() * 10, y + 8 + r() * 14); g.closePath(); g.fill();
      }
      g.strokeStyle = U.rgba('#000000', 0.28); g.lineWidth = 1.5;
      for (let i = 0; i < 2; i++) {
        g.beginPath();
        let x = r() * BS, y = r() * BS;
        g.moveTo(x, y);
        for (let k = 0; k < 3; k++) { x += (r() - 0.5) * 18; y += (r() - 0.3) * 14; g.lineTo(x, y); }
        g.stroke();
      }
      if (b.style === 'lava') {
        g.strokeStyle = '#ff6a1f'; g.lineWidth = 2; g.shadowColor = '#ff8a2a'; g.shadowBlur = 6;
        g.beginPath();
        let x = r() * BS, y = 0;
        g.moveTo(x, y);
        for (let k = 0; k < 5; k++) { x += (r() - 0.5) * 20; y += BS / 5; g.lineTo(x, y); }
        g.stroke(); g.shadowBlur = 0;
      }
      if (b.style === 'alien') {
        for (let i = 0; i < 5; i++) {
          g.fillStyle = U.rgba(r() < 0.5 ? '#86ff5a' : '#c78bff', 0.5);
          g.beginPath(); g.arc(r() * BS, r() * BS, 1 + r() * 1.6, 0, Math.PI * 2); g.fill();
        }
      }
    } else if (b.style === 'ice') {
      g.fillStyle = U.rgba('#ffffff', 0.25);
      for (let i = 0; i < 3; i++) {
        const x = r() * BS;
        g.beginPath(); g.moveTo(x, 0); g.lineTo(x + 6, 0); g.lineTo(x - 14, BS); g.lineTo(x - 20, BS); g.fill();
      }
      g.strokeStyle = U.rgba('#ffffff', 0.5); g.lineWidth = 1;
      g.beginPath(); g.moveTo(r() * BS, r() * BS); g.lineTo(r() * BS, r() * BS); g.stroke();
    }

    if (b.style === 'ore' || (b.ore && b.style !== 'gem')) {
      // base texture rock dots
      const n = 5 + Math.floor(r() * 3);
      for (let i = 0; i < n; i++) {
        const x = 8 + r() * (BS - 16), y = 8 + r() * (BS - 16), s = 3.5 + r() * 4;
        g.fillStyle = U.shade(b.ore, -0.35);
        g.beginPath(); g.ellipse(x + 1, y + 1.5, s, s * 0.8, r() * 3, 0, Math.PI * 2); g.fill();
        g.fillStyle = b.ore;
        g.beginPath(); g.ellipse(x, y, s, s * 0.8, r() * 3, 0, Math.PI * 2); g.fill();
        g.fillStyle = U.rgba('#ffffff', 0.55);
        g.beginPath(); g.arc(x - s * 0.3, y - s * 0.3, s * 0.3, 0, Math.PI * 2); g.fill();
      }
    } else if (b.style === 'gem') {
      const n = 2 + Math.floor(r() * 2);
      for (let i = 0; i < n; i++) {
        const x = 12 + r() * (BS - 24), y = 12 + r() * (BS - 24), s = 7 + r() * 5;
        drawCrystal(g, x, y, s, b.ore, r() * 0.6 - 0.3);
      }
    }

    // planet tint
    if (tint) {
      g.globalCompositeOperation = 'source-atop';
      g.fillStyle = U.rgba(tint, 0.28);
      g.fillRect(0, 0, BS, BS);
      g.globalCompositeOperation = 'source-over';
    }
    // bevel
    g.fillStyle = U.rgba('#ffffff', 0.12);
    g.fillRect(0, 0, BS, 3); g.fillRect(0, 0, 3, BS);
    g.fillStyle = U.rgba('#000000', 0.22);
    g.fillRect(0, BS - 3, BS, 3); g.fillRect(BS - 3, 0, 3, BS);
    blockCache[key] = c;
    return c;
  }

  function drawCrystal(g, x, y, s, col, rot) {
    g.save();
    g.translate(x, y); g.rotate(rot || 0);
    g.fillStyle = U.shade(col, -0.35);
    g.beginPath(); g.moveTo(0, -s * 1.3); g.lineTo(s * 0.8, -s * 0.2); g.lineTo(0, s * 1.1); g.lineTo(-s * 0.8, -s * 0.2); g.closePath(); g.fill();
    g.fillStyle = col;
    g.beginPath(); g.moveTo(0, -s * 1.3); g.lineTo(s * 0.8, -s * 0.2); g.lineTo(0, s * 0.5); g.lineTo(-s * 0.8, -s * 0.2); g.closePath(); g.fill();
    g.fillStyle = U.rgba('#ffffff', 0.6);
    g.beginPath(); g.moveTo(0, -s * 1.3); g.lineTo(-s * 0.8, -s * 0.2); g.lineTo(-s * 0.2, -s * 0.2); g.closePath(); g.fill();
    g.restore();
  }

  function hashStr(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }

  // ------------------------------------------------------------ item icons
  const iconCache = {};
  const S = 96;

  function outline(g, w) { g.lineWidth = w || 4; g.strokeStyle = 'rgba(30,20,40,0.85)'; g.stroke(); }
  function hi(g, x, y, rx, ry) {
    g.fillStyle = 'rgba(255,255,255,0.45)';
    g.beginPath(); g.ellipse(x, y, rx, ry, -0.5, 0, Math.PI * 2); g.fill();
  }

  const SHAPES = {
    shell(g, c) {
      g.beginPath(); g.ellipse(48, 50, 26, 32, 0, 0, Math.PI * 2); g.fillStyle = c; g.fill(); outline(g);
      g.strokeStyle = U.shade(c, -0.35); g.lineWidth = 3;
      for (let i = -2; i <= 2; i++) { g.beginPath(); g.moveTo(26, 50 + i * 10); g.quadraticCurveTo(48, 44 + i * 10, 70, 50 + i * 10); g.stroke(); }
      g.beginPath(); g.moveTo(48, 20); g.lineTo(48, 80); g.stroke();
      hi(g, 38, 34, 6, 4);
    },
    spiral(g, c) {
      g.beginPath(); g.arc(48, 48, 32, 0, Math.PI * 2); g.fillStyle = c; g.fill(); outline(g);
      g.strokeStyle = U.shade(c, -0.4); g.lineWidth = 4;
      g.beginPath();
      for (let a = 0; a < Math.PI * 6; a += 0.1) { const r = 2 + a * 1.55; g.lineTo(48 + Math.cos(a) * r, 48 + Math.sin(a) * r); }
      g.stroke(); hi(g, 36, 32, 7, 4);
    },
    claw(g, c) {
      g.beginPath(); g.moveTo(30, 82); g.quadraticCurveTo(22, 30, 70, 14); g.quadraticCurveTo(46, 40, 52, 82); g.closePath();
      g.fillStyle = c; g.fill(); outline(g); hi(g, 36, 50, 4, 10);
    },
    skull(g, c) {
      g.beginPath(); g.arc(48, 42, 28, Math.PI * 0.85, Math.PI * 2.15); g.lineTo(66, 72); g.lineTo(30, 72); g.closePath();
      g.fillStyle = c; g.fill(); outline(g);
      g.fillStyle = 'rgba(30,20,40,0.85)';
      g.beginPath(); g.ellipse(37, 46, 7, 8, 0, 0, Math.PI * 2); g.fill();
      g.beginPath(); g.ellipse(59, 46, 7, 8, 0, 0, Math.PI * 2); g.fill();
      g.beginPath(); g.moveTo(48, 54); g.lineTo(44, 62); g.lineTo(52, 62); g.fill();
      for (let i = 0; i < 4; i++) g.fillRect(36 + i * 7, 66, 3, 8);
      hi(g, 38, 24, 8, 4);
    },
    alienskull(g, c) {
      g.beginPath(); g.ellipse(48, 40, 30, 30, 0, Math.PI, 0); g.quadraticCurveTo(76, 70, 48, 84); g.quadraticCurveTo(20, 70, 18, 40); g.closePath();
      g.fillStyle = c; g.fill(); outline(g);
      g.fillStyle = '#14101e';
      g.beginPath(); g.ellipse(36, 52, 10, 6, 0.5, 0, Math.PI * 2); g.fill();
      g.beginPath(); g.ellipse(60, 52, 10, 6, -0.5, 0, Math.PI * 2); g.fill();
      hi(g, 38, 24, 9, 4);
    },
    amber(g, c) {
      g.beginPath(); g.ellipse(48, 48, 30, 34, 0.2, 0, Math.PI * 2); g.fillStyle = c; g.fill(); outline(g);
      g.fillStyle = 'rgba(70,30,0,0.75)';
      g.beginPath(); g.ellipse(48, 50, 9, 13, 0.2, 0, Math.PI * 2); g.fill();
      g.strokeStyle = 'rgba(70,30,0,0.75)'; g.lineWidth = 2;
      for (const s of [-1, 1]) for (let i = 0; i < 3; i++) { g.beginPath(); g.moveTo(48, 44 + i * 6); g.lineTo(48 + s * 16, 40 + i * 9); g.stroke(); }
      hi(g, 36, 30, 9, 5);
    },
    fern(g, c) {
      g.fillStyle = '#5f5470'; g.beginPath(); g.ellipse(48, 48, 34, 36, 0, 0, Math.PI * 2); g.fill(); outline(g);
      g.strokeStyle = c; g.lineWidth = 3;
      g.beginPath(); g.moveTo(48, 80); g.quadraticCurveTo(44, 48, 52, 16); g.stroke();
      for (let i = 0; i < 6; i++) {
        const y = 72 - i * 9;
        g.beginPath(); g.moveTo(48, y); g.quadraticCurveTo(36, y - 6, 28 + i * 2, y - 2); g.stroke();
        g.beginPath(); g.moveTo(48, y); g.quadraticCurveTo(60, y - 6, 68 - i * 2, y - 2); g.stroke();
      }
    },
    tusk(g, c) {
      g.beginPath(); g.moveTo(18, 30); g.quadraticCurveTo(30, 88, 82, 64); g.lineTo(80, 54); g.quadraticCurveTo(40, 70, 32, 26); g.closePath();
      g.fillStyle = c; g.fill(); outline(g); hi(g, 30, 50, 3, 10);
    },
    bone(g, c) {
      g.save(); g.translate(48, 48); g.rotate(-0.6);
      g.beginPath();
      g.rect(-24, -7, 48, 14);
      for (const s of [-1, 1]) { g.moveTo(s * 26 + 8, -9); g.arc(s * 26, -9, 9, 0, Math.PI * 2); g.moveTo(s * 26 + 8, 9); g.arc(s * 26, 9, 9, 0, Math.PI * 2); }
      g.fillStyle = c; g.fill(); outline(g);
      g.restore();
    },
    coin(g, c) {
      g.beginPath(); g.arc(48, 48, 32, 0, Math.PI * 2); g.fillStyle = c; g.fill(); outline(g);
      g.beginPath(); g.arc(48, 48, 23, 0, Math.PI * 2); g.strokeStyle = U.shade(c, -0.3); g.lineWidth = 3; g.stroke();
      g.fillStyle = U.shade(c, -0.3);
      g.beginPath(); g.moveTo(48, 32); g.lineTo(58, 48); g.lineTo(48, 64); g.lineTo(38, 48); g.closePath(); g.fill();
      hi(g, 36, 34, 8, 4);
    },
    pot(g, c) {
      g.beginPath(); g.moveTo(38, 16); g.lineTo(58, 16); g.lineTo(56, 26); g.quadraticCurveTo(84, 44, 64, 82); g.lineTo(32, 82); g.quadraticCurveTo(12, 44, 40, 26); g.closePath();
      g.fillStyle = c; g.fill(); outline(g);
      g.strokeStyle = U.shade(c, -0.35); g.lineWidth = 3;
      g.beginPath(); g.moveTo(26, 50); g.lineTo(70, 50); g.stroke();
      g.beginPath(); g.moveTo(28, 60); g.lineTo(68, 60); g.stroke();
      hi(g, 36, 40, 4, 9);
    },
    statue(g, c) {
      g.beginPath(); U.roundRect(g, 30, 14, 36, 44, 12); g.fillStyle = c; g.fill(); outline(g);
      g.beginPath(); g.moveTo(24, 84); g.lineTo(30, 58); g.lineTo(66, 58); g.lineTo(72, 84); g.closePath(); g.fillStyle = U.shade(c, -0.1); g.fill(); outline(g);
      g.fillStyle = 'rgba(30,20,40,0.8)'; g.fillRect(37, 30, 8, 4); g.fillRect(51, 30, 8, 4); g.fillRect(44, 44, 8, 3);
      hi(g, 40, 22, 6, 3);
    },
    helmet(g, c) {
      g.fillStyle = '#f4ecd8';
      for (const s of [-1, 1]) { g.beginPath(); g.moveTo(48 + s * 22, 50); g.quadraticCurveTo(48 + s * 44, 40, 48 + s * 38, 12); g.quadraticCurveTo(48 + s * 34, 38, 48 + s * 14, 40); g.closePath(); g.fill(); outline(g, 3); }
      g.beginPath(); g.arc(48, 60, 28, Math.PI, 0); g.lineTo(76, 70); g.lineTo(20, 70); g.closePath(); g.fillStyle = c; g.fill(); outline(g);
      g.fillStyle = U.shade(c, -0.3); g.fillRect(44, 34, 8, 36);
      hi(g, 36, 44, 6, 4);
    },
    crown(g, c) {
      g.beginPath(); g.moveTo(18, 72); g.lineTo(14, 30); g.lineTo(32, 48); g.lineTo(48, 20); g.lineTo(64, 48); g.lineTo(82, 30); g.lineTo(78, 72); g.closePath();
      g.fillStyle = c; g.fill(); outline(g);
      for (const [x, y, col] of [[48, 56, '#ff3b5c'], [30, 60, '#3d82ff'], [66, 60, '#2ee87a']]) { g.fillStyle = col; g.beginPath(); g.arc(x, y, 5, 0, Math.PI * 2); g.fill(); }
      hi(g, 30, 50, 4, 8);
    },
    mask(g, c) {
      g.beginPath(); g.moveTo(20, 24); g.quadraticCurveTo(48, 12, 76, 24); g.quadraticCurveTo(80, 70, 48, 86); g.quadraticCurveTo(16, 70, 20, 24); g.closePath();
      g.fillStyle = c; g.fill(); outline(g);
      g.fillStyle = 'rgba(30,20,40,0.85)';
      g.beginPath(); g.ellipse(36, 42, 8, 5, 0.2, 0, Math.PI * 2); g.fill();
      g.beginPath(); g.ellipse(60, 42, 8, 5, -0.2, 0, Math.PI * 2); g.fill();
      g.fillRect(40, 66, 16, 3);
      g.strokeStyle = U.shade(c, -0.3); g.lineWidth = 3; g.beginPath(); g.moveTo(48, 30); g.lineTo(48, 58); g.stroke();
      hi(g, 32, 30, 7, 3);
    },
    ufo(g, c) {
      g.beginPath(); g.ellipse(48, 42, 16, 14, 0, Math.PI, 0); g.fillStyle = 'rgba(180,240,255,0.85)'; g.fill(); outline(g, 3);
      g.beginPath(); g.ellipse(48, 52, 36, 12, 0, 0, Math.PI * 2); g.fillStyle = c; g.fill(); outline(g);
      for (let i = 0; i < 5; i++) { g.fillStyle = i % 2 ? '#ffe066' : '#86ff5a'; g.beginPath(); g.arc(24 + i * 12, 54, 3, 0, Math.PI * 2); g.fill(); }
      g.strokeStyle = 'rgba(30,20,40,0.85)'; g.lineWidth = 3; g.beginPath(); g.moveTo(70, 66); g.lineTo(80, 80); g.lineTo(62, 76); g.stroke();
    },
    tablet(g, c) {
      g.beginPath(); U.roundRect(g, 24, 14, 48, 68, 12); g.fillStyle = c; g.fill(); outline(g);
      g.fillStyle = '#fff38a';
      for (let i = 0; i < 9; i++) { g.beginPath(); g.arc(34 + (i % 3) * 14, 30 + Math.floor(i / 3) * 16, 2.5, 0, Math.PI * 2); g.fill(); }
      g.strokeStyle = '#fff38a'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(34, 30); g.lineTo(48, 46); g.lineTo(62, 62); g.lineTo(34, 62); g.stroke();
    },
    scepter(g, c) {
      g.save(); g.translate(48, 48); g.rotate(0.6);
      g.fillStyle = '#ffcc33'; g.beginPath(); g.rect(-4, -18, 8, 56); g.fill(); outline(g, 3);
      g.beginPath(); g.arc(0, -26, 13, 0, Math.PI * 2); g.fillStyle = c; g.fill(); outline(g, 3);
      hi(g, -4, -30, 4, 3);
      g.restore();
    },
    heart(g, c) {
      g.beginPath(); g.moveTo(48, 82); g.bezierCurveTo(10, 56, 14, 18, 48, 32); g.bezierCurveTo(82, 18, 86, 56, 48, 82); g.closePath();
      g.fillStyle = c; g.fill(); outline(g); hi(g, 34, 38, 8, 5);
    },
    hammer(g, c) {
      g.save(); g.translate(48, 48); g.rotate(-0.6);
      g.fillStyle = '#8f5a2e'; g.beginPath(); g.rect(-4, -8, 8, 46); g.fill(); outline(g, 3);
      g.beginPath(); U.roundRect(g, -24, -30, 48, 24, 5); g.fillStyle = c; g.fill(); outline(g);
      g.fillStyle = '#ffe066'; g.fillRect(-4, -26, 8, 16);
      g.restore();
    },
    egg(g, c) {
      const gr = g.createRadialGradient(40, 36, 4, 48, 50, 40); gr.addColorStop(0, '#ffffff'); gr.addColorStop(0.3, c); gr.addColorStop(1, U.shade(c, -0.4));
      g.beginPath(); g.ellipse(48, 52, 26, 33, 0, 0, Math.PI * 2); g.fillStyle = gr; g.fill(); outline(g);
      for (let i = 0; i < 6; i++) { g.fillStyle = '#fff38a'; g.beginPath(); g.arc(36 + (i * 13) % 26, 40 + i * 6, 2, 0, Math.PI * 2); g.fill(); }
    },
    gem(g, c) {
      g.beginPath(); g.moveTo(26, 34); g.lineTo(38, 20); g.lineTo(58, 20); g.lineTo(70, 34); g.lineTo(48, 82); g.closePath();
      g.fillStyle = c; g.fill(); outline(g);
      g.strokeStyle = U.shade(c, -0.35); g.lineWidth = 2;
      g.beginPath(); g.moveTo(26, 34); g.lineTo(70, 34); g.moveTo(38, 20); g.lineTo(42, 34); g.lineTo(48, 82); g.lineTo(54, 34); g.lineTo(58, 20); g.stroke();
      g.fillStyle = 'rgba(255,255,255,0.6)'; g.beginPath(); g.moveTo(38, 20); g.lineTo(42, 34); g.lineTo(26, 34); g.closePath(); g.fill();
    },
    vault(g, c) {
      g.beginPath(); g.arc(48, 48, 34, 0, Math.PI * 2); g.fillStyle = '#6b7480'; g.fill(); outline(g);
      g.beginPath(); g.arc(48, 48, 26, 0, Math.PI * 2); g.fillStyle = c; g.fill(); outline(g, 3);
      g.strokeStyle = U.shade(c, -0.4); g.lineWidth = 4;
      for (let i = 0; i < 3; i++) { const a = (i * Math.PI) / 3; g.beginPath(); g.moveTo(48 + Math.cos(a) * 16, 48 + Math.sin(a) * 16); g.lineTo(48 - Math.cos(a) * 16, 48 - Math.sin(a) * 16); g.stroke(); }
      g.beginPath(); g.arc(48, 48, 6, 0, Math.PI * 2); g.fillStyle = '#3a3f46'; g.fill();
      hi(g, 38, 34, 7, 4);
    },
    chest(g, c) {
      g.beginPath(); U.roundRect(g, 16, 42, 64, 38, 6); g.fillStyle = '#9a5b2c'; g.fill(); outline(g);
      g.beginPath(); g.moveTo(16, 46); g.quadraticCurveTo(48, 10, 80, 46); g.closePath(); g.fillStyle = '#b06a34'; g.fill(); outline(g);
      g.fillStyle = c; g.fillRect(16, 44, 64, 6); g.fillRect(42, 40, 12, 18);
      g.fillStyle = '#3a2410'; g.fillRect(46, 48, 4, 6);
      g.fillStyle = '#ffe066'; g.beginPath(); g.arc(34, 36, 4, 0, Math.PI * 2); g.arc(58, 34, 3, 0, Math.PI * 2); g.fill();
    },
    fuel(g, c) {
      g.beginPath(); U.roundRect(g, 24, 24, 48, 58, 8); g.fillStyle = c; g.fill(); outline(g);
      g.beginPath(); U.roundRect(g, 30, 12, 18, 14, 4); g.fillStyle = '#3a3f46'; g.fill(); outline(g, 3);
      g.strokeStyle = U.shade(c, -0.35); g.lineWidth = 4;
      g.beginPath(); g.moveTo(34, 40); g.lineTo(62, 68); g.moveTo(62, 40); g.lineTo(34, 68); g.stroke();
      g.fillStyle = '#ffffff'; g.font = '700 14px sans-serif'; g.textAlign = 'center'; g.fillText('FUEL', 48, 36);
      hi(g, 32, 50, 3, 10);
    },
    wrench(g, c) {
      g.save(); g.translate(48, 48); g.rotate(-0.8);
      g.beginPath(); U.roundRect(g, -6, -10, 12, 46, 5); g.fillStyle = c; g.fill(); outline(g, 3);
      g.beginPath(); g.arc(0, -20, 16, 0, Math.PI * 2); g.fillStyle = c; g.fill(); outline(g, 3);
      g.fillStyle = 'rgba(30,20,40,0.85)'; g.fillRect(-6, -40, 12, 20);
      g.restore();
      g.fillStyle = '#5be34a'; g.beginPath(); g.arc(70, 70, 13, 0, Math.PI * 2); g.fill(); outline(g, 3);
      g.fillStyle = '#fff'; g.fillRect(64, 68, 12, 4); g.fillRect(68, 64, 4, 12);
    },
    bolt(g, c) {
      g.beginPath(); g.moveTo(54, 10); g.lineTo(24, 54); g.lineTo(44, 54); g.lineTo(38, 86); g.lineTo(72, 38); g.lineTo(50, 38); g.closePath();
      g.fillStyle = c; g.fill(); outline(g); hi(g, 44, 30, 4, 8);
    },
    magnet(g, c) {
      g.lineCap = 'butt';
      g.strokeStyle = 'rgba(30,20,40,0.85)'; g.lineWidth = 26;
      g.beginPath(); g.arc(48, 46, 22, Math.PI, 0); g.lineTo(70, 76); g.moveTo(26, 46); g.lineTo(26, 76); g.stroke();
      g.strokeStyle = c; g.lineWidth = 18;
      g.beginPath(); g.arc(48, 46, 22, Math.PI, 0); g.lineTo(70, 68); g.moveTo(26, 46); g.lineTo(26, 68); g.stroke();
      g.fillStyle = '#e8eef4'; g.fillRect(17, 66, 18, 12); g.fillRect(61, 66, 18, 12);
      g.lineCap = 'round';
    },
    star(g, c) {
      g.beginPath();
      for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 16 : 36; g.lineTo(48 + Math.cos(a) * r, 50 + Math.sin(a) * r); }
      g.closePath(); g.fillStyle = c; g.fill(); outline(g);
      g.fillStyle = 'rgba(30,20,40,0.85)'; g.font = '700 18px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('×2', 48, 52);
    },
    tnt(g, c) {
      g.beginPath(); U.roundRect(g, 16, 26, 64, 54, 6); g.fillStyle = '#b5773c'; g.fill(); outline(g);
      g.fillStyle = c; g.fillRect(16, 42, 64, 22);
      g.fillStyle = '#fff'; g.font = '700 20px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('TNT', 48, 54);
      g.strokeStyle = '#3a2410'; g.lineWidth = 3; g.beginPath(); g.moveTo(48, 26); g.quadraticCurveTo(54, 12, 66, 14); g.stroke();
      g.fillStyle = '#ffe066'; g.beginPath(); g.arc(68, 13, 5, 0, Math.PI * 2); g.fill();
    },
    mystery(g, c) {
      g.beginPath(); U.roundRect(g, 18, 22, 60, 60, 10); g.fillStyle = c; g.fill(); outline(g);
      g.fillStyle = U.shade(c, 0.3); g.fillRect(18, 44, 60, 10); g.fillRect(43, 22, 10, 60);
      g.fillStyle = '#fff'; g.font = '700 34px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.strokeStyle = 'rgba(30,20,40,0.85)'; g.lineWidth = 5; g.strokeText('?', 48, 52); g.fillText('?', 48, 52);
    },
    bag(g, c) {
      g.beginPath(); g.moveTo(36, 26); g.quadraticCurveTo(12, 56, 24, 80); g.lineTo(72, 80); g.quadraticCurveTo(84, 56, 60, 26); g.closePath();
      g.fillStyle = c; g.fill(); outline(g);
      g.fillStyle = U.shade(c, -0.3); g.fillRect(34, 22, 28, 8);
      g.fillStyle = '#ffd23a'; g.beginPath(); g.arc(48, 58, 12, 0, Math.PI * 2); g.fill(); outline(g, 3);
      g.fillStyle = '#b06d05'; g.font = '700 15px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('$', 48, 59);
    },
    geode(g, c) {
      g.beginPath(); g.arc(48, 50, 32, 0, Math.PI * 2); g.fillStyle = '#7a7280'; g.fill(); outline(g);
      g.beginPath(); g.arc(48, 50, 22, 0, Math.PI * 2); g.fillStyle = '#2a1a40'; g.fill();
      for (let i = 0; i < 7; i++) { const a = (i / 7) * Math.PI * 2; drawCrystal(g, 48 + Math.cos(a) * 11, 50 + Math.sin(a) * 11, 7, c, a + Math.PI / 2); }
    },
    drop(g, c) {
      g.beginPath(); g.moveTo(48, 12); g.bezierCurveTo(70, 44, 78, 56, 70, 72); g.arc(48, 66, 24, 0.3, Math.PI - 0.3); g.bezierCurveTo(18, 56, 26, 44, 48, 12); g.closePath();
      g.fillStyle = c; g.fill(); outline(g); hi(g, 40, 56, 5, 9);
    },
    quake(g, c) {
      g.beginPath(); U.roundRect(g, 14, 20, 68, 60, 10); g.fillStyle = '#6b5a4a'; g.fill(); outline(g);
      g.strokeStyle = c; g.lineWidth = 6;
      g.beginPath(); g.moveTo(48, 20); g.lineTo(40, 40); g.lineTo(56, 52); g.lineTo(44, 66); g.lineTo(50, 80); g.stroke();
      g.lineWidth = 3; g.beginPath(); g.moveTo(40, 40); g.lineTo(24, 46); g.moveTo(56, 52); g.lineTo(72, 48); g.stroke();
    },
    portal(g, c) {
      for (let i = 4; i >= 1; i--) {
        g.beginPath(); g.ellipse(48, 50, i * 9, i * 11, 0, 0, Math.PI * 2);
        g.fillStyle = i % 2 ? c : U.shade(c, 0.4); g.fill();
      }
      g.beginPath(); g.ellipse(48, 50, 36, 44, 0, 0, Math.PI * 2); outline(g);
      g.strokeStyle = '#fff'; g.lineWidth = 3;
      g.beginPath(); for (let a = 0; a < Math.PI * 4; a += 0.2) { const r = a * 2.6; g.lineTo(48 + Math.cos(a) * r, 50 + Math.sin(a) * r * 1.2); } g.stroke();
    },
    gas(g, c) {
      g.fillStyle = c;
      for (const [x, y, r] of [[34, 56, 18], [56, 50, 22], [46, 36, 16], [64, 66, 14], [30, 70, 12]]) { g.beginPath(); g.arc(x, y, r, 0, Math.PI * 2); g.fill(); }
      g.fillStyle = 'rgba(30,20,40,0.85)';
      g.beginPath(); g.arc(44, 52, 4, 0, Math.PI * 2); g.arc(58, 52, 4, 0, Math.PI * 2); g.fill();
      g.fillRect(44, 62, 14, 3);
    },
    lava(g, c) {
      g.beginPath(); g.moveTo(48, 10); g.quadraticCurveTo(80, 44, 70, 70); g.arc(48, 64, 24, 0.2, Math.PI - 0.2); g.quadraticCurveTo(16, 44, 48, 10); g.closePath();
      g.fillStyle = c; g.fill(); outline(g);
      g.beginPath(); g.arc(48, 62, 12, 0, Math.PI * 2); g.fillStyle = '#ffe066'; g.fill();
    },
    mole(g, c) {
      g.beginPath(); g.ellipse(48, 56, 30, 26, 0, 0, Math.PI * 2); g.fillStyle = c; g.fill(); outline(g);
      g.beginPath(); g.ellipse(48, 66, 12, 9, 0, 0, Math.PI * 2); g.fillStyle = U.shade(c, 0.35); g.fill();
      g.fillStyle = '#ff8aa0'; g.beginPath(); g.arc(48, 60, 6, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#1b1020'; g.beginPath(); g.arc(38, 48, 3.5, 0, Math.PI * 2); g.arc(58, 48, 3.5, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#f4ecd8'; for (const s of [-1, 1]) { g.beginPath(); g.ellipse(48 + s * 26, 76, 9, 6, s * 0.4, 0, Math.PI * 2); g.fill(); outline(g, 2); }
    },
    bat(g, c) {
      g.fillStyle = U.shade(c, -0.2);
      for (const s of [-1, 1]) { g.beginPath(); g.moveTo(48, 46); g.quadraticCurveTo(48 + s * 30, 20, 48 + s * 44, 36); g.lineTo(48 + s * 36, 48); g.lineTo(48 + s * 28, 44); g.lineTo(48 + s * 22, 56); g.closePath(); g.fill(); outline(g, 3); }
      g.beginPath(); g.ellipse(48, 52, 14, 18, 0, 0, Math.PI * 2); g.fillStyle = c; g.fill(); outline(g, 3);
      g.fillStyle = '#fff'; g.beginPath(); g.arc(43, 48, 4, 0, Math.PI * 2); g.arc(53, 48, 4, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#1b1020'; g.beginPath(); g.arc(43, 48, 2, 0, Math.PI * 2); g.arc(53, 48, 2, 0, Math.PI * 2); g.fill();
    },
    penguin(g, c) {
      g.beginPath(); g.ellipse(48, 54, 24, 32, 0, 0, Math.PI * 2); g.fillStyle = c; g.fill(); outline(g);
      g.beginPath(); g.ellipse(48, 60, 15, 24, 0, 0, Math.PI * 2); g.fillStyle = '#ffffff'; g.fill();
      g.fillStyle = '#ffb02e'; g.beginPath(); g.moveTo(42, 40); g.lineTo(54, 40); g.lineTo(48, 48); g.fill();
      g.fillStyle = '#1b1020'; g.beginPath(); g.arc(41, 34, 3, 0, Math.PI * 2); g.arc(55, 34, 3, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#ffb02e'; g.beginPath(); g.ellipse(38, 86, 8, 4, 0, 0, Math.PI * 2); g.ellipse(58, 86, 8, 4, 0, 0, Math.PI * 2); g.fill();
    },
    salamander(g, c) {
      g.strokeStyle = c; g.lineWidth = 12;
      g.beginPath(); g.moveTo(16, 70); g.quadraticCurveTo(30, 44, 50, 56); g.quadraticCurveTo(66, 66, 74, 46); g.stroke();
      g.beginPath(); g.ellipse(76, 40, 14, 11, -0.4, 0, Math.PI * 2); g.fillStyle = c; g.fill(); outline(g, 3);
      g.fillStyle = '#ffe066'; for (const [x, y] of [[30, 54], [44, 56], [60, 60]]) { g.beginPath(); g.arc(x, y, 3, 0, Math.PI * 2); g.fill(); }
      g.fillStyle = '#1b1020'; g.beginPath(); g.arc(80, 36, 3, 0, Math.PI * 2); g.fill();
    },
    blob(g, c) {
      g.beginPath(); g.moveTo(18, 78); g.quadraticCurveTo(14, 30, 48, 22); g.quadraticCurveTo(82, 30, 78, 78); g.quadraticCurveTo(64, 70, 56, 80); g.quadraticCurveTo(48, 70, 40, 80); g.quadraticCurveTo(30, 70, 18, 78); g.closePath();
      g.fillStyle = c; g.fill(); outline(g);
      g.fillStyle = '#fff'; g.beginPath(); g.arc(48, 46, 12, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#1b1020'; g.beginPath(); g.arc(50, 47, 6, 0, Math.PI * 2); g.fill();
      hi(g, 32, 36, 6, 4);
    },
    door(g, c) {
      g.beginPath(); g.moveTo(22, 86); g.lineTo(22, 34); g.arc(48, 34, 26, Math.PI, 0); g.lineTo(74, 86); g.closePath();
      g.fillStyle = '#5a5464'; g.fill(); outline(g);
      g.beginPath(); g.moveTo(30, 86); g.lineTo(30, 36); g.arc(48, 36, 18, Math.PI, 0); g.lineTo(66, 86); g.closePath();
      g.fillStyle = c; g.fill(); outline(g, 3);
      g.strokeStyle = U.shade(c, -0.35); g.lineWidth = 3;
      g.beginPath(); g.moveTo(48, 20); g.lineTo(48, 86); g.stroke();
      g.fillStyle = '#ffe066'; g.beginPath(); g.arc(42, 58, 4, 0, Math.PI * 2); g.arc(54, 58, 4, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#fff6c8'; g.font = '700 18px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('?', 48, 38);
    },
    car(g, c) {
      g.beginPath(); g.moveTo(10, 66); g.lineTo(14, 48); g.lineTo(30, 46); g.lineTo(40, 30); g.lineTo(66, 30); g.lineTo(76, 46); g.lineTo(86, 50); g.lineTo(86, 66); g.closePath();
      g.fillStyle = c; g.fill(); outline(g);
      g.fillStyle = '#bfe6ff'; g.beginPath(); g.moveTo(42, 34); g.lineTo(52, 34); g.lineTo(52, 46); g.lineTo(34, 46); g.closePath(); g.fill();
      g.beginPath(); g.moveTo(56, 34); g.lineTo(64, 34); g.lineTo(70, 46); g.lineTo(56, 46); g.closePath(); g.fill();
      g.fillStyle = 'rgba(90,50,20,.55)'; g.beginPath(); g.ellipse(64, 58, 10, 5, 0, 0, Math.PI * 2); g.ellipse(24, 54, 6, 4, 0, 0, Math.PI * 2); g.fill(); // rust
      g.fillStyle = '#2b2f35'; g.beginPath(); g.arc(28, 68, 10, 0, Math.PI * 2); g.arc(68, 68, 10, 0, Math.PI * 2); g.fill();
      g.fillStyle = '#8a8f98'; g.beginPath(); g.arc(28, 68, 4, 0, Math.PI * 2); g.arc(68, 68, 4, 0, Math.PI * 2); g.fill();
    },
    clover(g, c) {
      g.strokeStyle = U.shade(c, -0.35); g.lineWidth = 5; g.lineCap = 'round';
      g.beginPath(); g.moveTo(48, 50); g.quadraticCurveTo(56, 72, 46, 86); g.stroke();
      for (let i = 0; i < 4; i++) {
        const a = i * Math.PI / 2 - Math.PI / 4, x = 48 + Math.cos(a) * 15, y = 46 + Math.sin(a) * 15;
        g.save(); g.translate(x, y); g.rotate(a + Math.PI / 2);
        g.beginPath(); g.moveTo(0, 12); g.bezierCurveTo(-20, -2, -12, -18, 0, -8); g.bezierCurveTo(12, -18, 20, -2, 0, 12);
        g.fillStyle = c; g.fill(); outline(g, 3); g.restore();
      }
      hi(g, 40, 36, 5, 3);
    },
    hive(g, c) {
      g.beginPath();
      for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3 + Math.PI / 6; g.lineTo(48 + Math.cos(a) * 36, 50 + Math.sin(a) * 36); }
      g.closePath(); g.fillStyle = U.shade(c, -0.45); g.fill(); outline(g);
      g.fillStyle = c;
      for (const [x, y] of [[48, 50], [34, 42], [62, 42], [34, 58], [62, 58], [48, 34], [48, 66]]) {
        g.beginPath();
        for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3 + Math.PI / 6; g.lineTo(x + Math.cos(a) * 7, y + Math.sin(a) * 7); }
        g.closePath(); g.fill();
      }
      g.fillStyle = '#1b1020'; g.beginPath(); g.arc(48, 50, 4, 0, Math.PI * 2); g.fill();
    },
    cart(g, c) {
      g.beginPath(); g.moveTo(14, 40); g.lineTo(82, 40); g.lineTo(74, 72); g.lineTo(22, 72); g.closePath(); g.fillStyle = '#6b4a2b'; g.fill(); outline(g);
      for (const [x, cc] of [[30, c], [44, '#ffcc33'], [58, c], [38, '#3d82ff'], [52, '#ff3b5c']]) drawCrystal(g, x, 34, 9, cc, 0);
      g.fillStyle = '#2b2f35'; g.beginPath(); g.arc(32, 76, 8, 0, Math.PI * 2); g.arc(64, 76, 8, 0, Math.PI * 2); g.fill();
    },
    core(g, c) {
      const gr = g.createRadialGradient(48, 48, 2, 48, 48, 34); gr.addColorStop(0, '#ffffff'); gr.addColorStop(0.35, c); gr.addColorStop(1, U.rgba(c, 0));
      g.fillStyle = gr; g.beginPath(); g.arc(48, 48, 36, 0, Math.PI * 2); g.fill();
      g.strokeStyle = U.shade(c, -0.2); g.lineWidth = 3;
      g.beginPath(); g.ellipse(48, 48, 34, 10, 0.5, 0, Math.PI * 2); g.stroke();
      g.beginPath(); g.ellipse(48, 48, 34, 10, -0.5, 0, Math.PI * 2); g.stroke();
      g.beginPath(); g.arc(48, 48, 14, 0, Math.PI * 2); g.fillStyle = c; g.fill(); outline(g, 3);
    },
  };

  function itemIcon(id, cpu) {
    if (!cpu && iconCache[id]) return iconCache[id];
    const it = DI.ITEMS[id];
    const c = mk(S, S, cpu), g = c.getContext('2d');
    g.lineJoin = 'round'; g.lineCap = 'round';
    (SHAPES[it.shape] || SHAPES.gem)(g, it.c);
    if (!cpu) iconCache[id] = c;
    return c;
  }

  // icon for a resource block: crystal / ore nugget on transparent bg
  function resourceIcon(id, cpu) {
    const key = 'res_' + id;
    if (!cpu && iconCache[key]) return iconCache[key];
    const b = DI.BLOCKS[id];
    const c = mk(S, S, cpu), g = c.getContext('2d');
    if (b.style === 'gem') {
      drawCrystal(g, 48, 52, 24, b.ore, 0);
      drawCrystal(g, 28, 62, 12, b.ore, -0.4);
      drawCrystal(g, 70, 64, 10, b.ore, 0.4);
    } else {
      g.fillStyle = U.shade(b.ore, -0.35);
      g.beginPath(); g.moveTo(20, 60); g.lineTo(34, 26); g.lineTo(62, 22); g.lineTo(78, 50); g.lineTo(62, 76); g.lineTo(30, 76); g.closePath(); g.fill();
      g.fillStyle = b.ore;
      g.beginPath(); g.moveTo(24, 56); g.lineTo(36, 30); g.lineTo(60, 26); g.lineTo(72, 50); g.lineTo(58, 68); g.lineTo(32, 68); g.closePath(); g.fill();
      g.fillStyle = 'rgba(255,255,255,0.5)'; g.beginPath(); g.moveTo(36, 30); g.lineTo(60, 26); g.lineTo(44, 42); g.closePath(); g.fill();
      g.lineWidth = 3; g.strokeStyle = 'rgba(30,20,40,0.6)';
      g.beginPath(); g.moveTo(20, 60); g.lineTo(34, 26); g.lineTo(62, 22); g.lineTo(78, 50); g.lineTo(62, 76); g.lineTo(30, 76); g.closePath(); g.stroke();
    }
    if (!cpu) iconCache[key] = c;
    return c;
  }

  const urlCache = {};
  function iconURL(kind, id) {
    const key = kind + ':' + id;
    if (!urlCache[key]) {
      const c = kind === 'res' ? resourceIcon(id, true) : kind === 'shape' ? shapeIcon(id, true) : itemIcon(id, true);
      urlCache[key] = c.toDataURL();
    }
    return urlCache[key];
  }
  function shapeIcon(spec, cpu) {
    // spec "shape|color"
    if (!cpu && iconCache['sh_' + spec]) return iconCache['sh_' + spec];
    const [shape, col] = spec.split('|');
    const c = mk(S, S, cpu), g = c.getContext('2d');
    g.lineJoin = 'round'; g.lineCap = 'round';
    SHAPES[shape](g, col);
    if (!cpu) iconCache['sh_' + spec] = c;
    return c;
  }

  DI.Icons = { blockSprite, itemIcon, resourceIcon, iconURL, shapeIcon, drawCrystal };
})();
