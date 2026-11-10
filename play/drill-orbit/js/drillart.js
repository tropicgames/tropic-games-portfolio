// DRILL ORBIT — procedural drill + launcher art. Visuals evolve with upgrade levels.
// The drill is a rounded metal capsule with colored bands and a stepped spiral head;
// it rests on a pivoting A-frame stand that gets beefier as Launch Distance is upgraded.
(function () {
  const DI = window.DI;
  const U = DI.U;

  // Evolutions run across the whole game: gaps widen with level, and the three tracks are staggered
  // (players level them together) so something new is always close, planet by planet.
  const DRILL_TIERS = [1, 4, 8, 13, 19, 26, 34, 43, 53, 64, 76, 89, 103, 116, 132];
  const FRAME_TIERS = [1, 5, 10, 16, 22, 30, 38, 48, 58, 70, 82, 96, 110, 122, 134];
  const LAUNCH_TIERS = [1, 6, 11, 17, 24, 32, 40, 50, 61, 73, 85, 99, 112, 128];
  const tierOf = (L, arr) => { let t = 0; for (let i = 0; i < arr.length; i++) if (L >= arr[i]) t = i; return t; };

  const HEAD_NAMES = ['Basic Drill', 'Steel Drill', 'Bronze Drill', 'Industrial Drill', 'Carbide Drill', 'Energy Drill', 'Arc Drill', 'Fusion Drill', 'Void Drill', 'Plasma Drill', 'Solar Drill', 'Quantum Drill', 'Graviton Drill', 'Stellar Drill', 'Legendary Drill'];
  const BODY_NAMES = ['Basic Frame', 'Plated Frame', 'Bolted Frame', 'Mechanical Frame', 'Reinforced Frame', 'Armored Core', 'Reactor Hull', 'Turbine Hull', 'Storm Hull', 'Shielded Hull', 'Titan Hull', 'Aurora Hull', 'Nova Hull', 'Celestial Hull', 'Legend Hull'];
  const LAUNCH_NAMES = ['Wooden Stand', 'Reinforced Stand', 'Steel Stand', 'Hydraulic Stand', 'Heavy Hydraulics', 'Coil Launcher', 'Twin-Coil Launcher', 'Mega Launcher', 'Railgun Launcher', 'Plasma Cannon', 'Orbital Launcher', 'Gravity Launcher', 'Warp Launcher', 'Cosmic Launcher'];

  // head metal: light / mid / dark / ridge shadow + optional glow, trail (flight trail color),
  // rings (spinning blade rings), arcs (lightning), flare (sun spikes), crystal (gem tip), aura
  const HEAD = [
    { l: '#f7f9fb', m: '#c3c9d0', d: '#6d747c', ridge: '#7f868e', trail: '#ffffff' },
    { l: '#ffffff', m: '#d3dae2', d: '#6f7c8a', ridge: '#76838f', trail: '#ffffff' },
    { l: '#ffe9c8', m: '#d9a066', d: '#7a4a20', ridge: '#8a5a2a', teeth: '#fff1d0', trail: '#ffc98a' },
    { l: '#fbfcfd', m: '#c6ccd2', d: '#5f6770', ridge: '#68717a', teeth: '#ffcf33', trail: '#ffd36b' },
    { l: '#aab0b8', m: '#50565e', d: '#1e2126', ridge: '#2a2e34', teeth: '#ff5a3c', trail: '#ff7a5a' },
    { l: '#e2f1ff', m: '#8ea7c2', d: '#2f3c50', ridge: '#3ff2ff', glow: '#3ff2ff', trail: '#3ff2ff' },
    { l: '#dff0ff', m: '#6a90e0', d: '#1a2a70', ridge: '#7fb4ff', glow: '#5a9aff', arcs: true, trail: '#7fb4ff' },
    { l: '#e4d8ff', m: '#8a7cc0', d: '#2a2248', ridge: '#c06bff', glow: '#c06bff', rings: 1, trail: '#c06bff' },
    { l: '#c89ad0', m: '#5a2a6a', d: '#160a20', ridge: '#ff5ae0', glow: '#ff4fd8', rings: 1, arcs: true, trail: '#ff5ae0' },
    { l: '#fff6e0', m: '#ffb070', d: '#b23a0a', ridge: '#fff3c8', glow: '#ff9a3c', rings: 2, trail: '#ff9a3c' },
    { l: '#ffffff', m: '#ffe9a0', d: '#e08a20', ridge: '#fffbe0', glow: '#ffd23a', rings: 2, flare: true, trail: '#ffd23a' },
    { l: '#d8fff4', m: '#40d8b0', d: '#0a5a50', ridge: '#b0fff0', glow: '#3fffc8', rings: 2, arcs: true, crystal: '#bffff0', trail: '#3fffc8' },
    { l: '#8a80a8', m: '#2a2444', d: '#05030d', ridge: '#ffe066', glow: '#8a5aff', rings: 3, crystal: '#e0c8ff', trail: '#8a5aff' },
    { l: '#ffffff', m: '#bcd8ff', d: '#3a5ac0', ridge: '#ffffff', glow: '#a8d0ff', rings: 3, flare: true, crystal: '#ffffff', aura: '#bcd8ff', trail: '#bcd8ff' },
    { l: '#fffbe0', m: '#ffd75a', d: '#a8700a', ridge: '#ffffff', glow: '#ffe066', rings: 3, flare: true, crystal: '#fffbe0', aura: '#ffe078', rainbow: true, trail: '#ffe066' },
  ];
  // body metal (light / mid / dark) + band color + extras:
  // pistons, vents, turbines, fins, wings, halo, cores (how many core windows)
  const BODY = [
    { l: '#a9aeb5', m: '#6e737b', d: '#3c4047', band: '#f39a1e' },
    { l: '#b8c4d0', m: '#6f7f90', d: '#36414e', band: '#f39a1e', rivets: true },
    { l: '#c8bca8', m: '#7d705c', d: '#3a3226', band: '#d8562a', rivets: true, stripe: '#f0e0c0' },
    { l: '#9aa1aa', m: '#555c66', d: '#262a31', band: '#ffcf33', hazard: true, rivets: true, pistons: true },
    { l: '#8fa4b8', m: '#46586c', d: '#18222e', band: '#e8eef4', rivets: true, pistons: true, vents: true },
    { l: '#7f90a8', m: '#3d4a60', d: '#161c28', band: '#3ff2ff', glowBand: true, core: '#3ff2ff', pistons: true },
    { l: '#7aa890', m: '#2f5c48', d: '#0e2219', band: '#7dff5a', glowBand: true, core: '#7dff5a', pistons: true, vents: true },
    { l: '#7d6fa8', m: '#3a3060', d: '#140f26', band: '#c06bff', glowBand: true, core: '#c06bff', pistons: true, turbines: true },
    { l: '#6f8ad0', m: '#28388a', d: '#0a1038', band: '#7fb4ff', glowBand: true, core: '#bfe0ff', pistons: true, turbines: true, vents: true },
    { l: '#d06a50', m: '#8a2a18', d: '#3a0c06', band: '#ffb03a', glowBand: true, core: '#ffd36b', pistons: true, turbines: true, fins: true },
    { l: '#8a8f98', m: '#3a3e46', d: '#101216', band: '#ff7a2a', glowBand: true, core: '#ffb35a', cores: 2, pistons: true, turbines: true, fins: true, vents: true },
    { l: '#a0ecdc', m: '#2f8a80', d: '#08302c', band: '#3fffc8', glowBand: true, core: '#bffff0', cores: 2, pistons: true, turbines: true, wings: true },
    { l: '#6a5a78', m: '#241a30', d: '#07040c', band: '#ff4fd8', glowBand: true, core: '#ff9ae6', cores: 3, pistons: true, turbines: true, wings: true, vents: true },
    { l: '#ffffff', m: '#c4d4ec', d: '#5a70a8', band: '#a8d0ff', glowBand: true, core: '#ffffff', cores: 3, pistons: true, turbines: true, wings: true, halo: '#bcd8ff' },
    { l: '#ffffff', m: '#e6e0cc', d: '#9a8a5a', band: '#ffcc33', glowBand: true, core: '#ffffff', cores: 3, gold: true, pistons: true, turbines: true, wings: true, vents: true, halo: '#ffe066' },
  ];
  // stand looks per launch tier
  const STAND = [
    { leg: '#e8952c', legD: '#a35c14', grain: true, feet: '#5d636c', hub: '#e8952c', bolt: '#d8dde2' },
    { leg: '#e08a26', legD: '#8f4f10', grain: true, feet: '#4a5059', hub: '#7b848e', bolt: '#eef2f5', bracket: '#8f99a4' },
    { leg: '#9aa4b0', legD: '#4c5560', feet: '#3a4048', hub: '#5a626c', bolt: '#f0f4f8', bracket: '#c9d0d8' },
    { leg: '#ffcf33', legD: '#b08408', feet: '#2e3238', hub: '#3d434a', bolt: '#ffcf33', hazard: true, piston: true },
    { leg: '#e86a2a', legD: '#8a2f0c', feet: '#22262c', hub: '#2e3238', bolt: '#ffd36b', hazard: true, piston: true, piston2: true },
    { leg: '#4a5568', legD: '#1e2430', feet: '#1a1f28', hub: '#2a3242', bolt: '#3ff2ff', coils: '#3ff2ff', piston: true },
    { leg: '#3f6a58', legD: '#142a20', feet: '#10201a', hub: '#1e3a2e', bolt: '#7dff5a', coils: '#7dff5a', piston: true, piston2: true },
    { leg: '#5a4a8a', legD: '#221a3e', feet: '#140f26', hub: '#2a2048', bolt: '#c06bff', coils: '#c06bff', pylons: 2, piston: true },
    { leg: '#3f5aa8', legD: '#121c50', feet: '#0a1030', hub: '#1a2860', bolt: '#7fb4ff', coils: '#7fb4ff', pylons: 2, rails: true, piston: true },
    { leg: '#a83a1a', legD: '#3a0e04', feet: '#1a0a06', hub: '#3a1408', bolt: '#ffd36b', coils: '#ff9a3c', pylons: 4, rails: true, piston: true },
    { leg: '#3a2a50', legD: '#140d22', feet: '#0d0816', hub: '#24183a', bolt: '#ffb03a', coils: '#ff9a3c', pylons: 4, orbit: 2, rails: true, piston: true },
    { leg: '#2a7a70', legD: '#08302c', feet: '#06201c', hub: '#0e3a34', bolt: '#bffff0', coils: '#3fffc8', pylons: 4, orbit: 3, rails: true, dish: true, piston: true },
    { leg: '#3a2048', legD: '#0e0614', feet: '#08030c', hub: '#1c0c26', bolt: '#ff9ae6', coils: '#ff4fd8', pylons: 4, orbit: 3, rails: true, dish: true, rift: true, piston: true },
    { leg: '#f0d890', legD: '#8a6a20', feet: '#3a2a10', hub: '#6a4e14', bolt: '#ffffff', coils: '#ffe066', pylons: 4, orbit: 3, rails: true, dish: true, rift: true, piston: true, piston2: true },
  ];

  const GOLD_HEAD = { l: '#fffbe0', m: '#ffd75a', d: '#a8700a', ridge: '#fff3c8' };
  const GOLD_BODY = { l: '#fff3b0', m: '#f0b82a', d: '#8a5a06', band: '#ffffff', rivets: true };

  function look(save) {
    const p = save.upgrades.power, d = save.upgrades.dur;
    return {
      pt: tierOf(p, DRILL_TIERS), dt: tierOf(d, FRAME_TIERS), lt: tierOf(save.upgrades.dist, LAUNCH_TIERS),
      // keeps growing across the whole game instead of topping out early
      size: 1 + Math.min(0.3, (d - 1) * 0.0023) + Math.min(0.12, (p - 1) * 0.0009),
      width: DI.Econ.width(p),
      cos: save.cosmetics || {},
    };
  }

  // unscaled drill measurements (local units); world size = these × L.size
  const headLen = (L) => 42 + L.pt * 1.5;
  const bodyLen = (L) => 80 + L.dt * 1.5;
  const headWidth = (L) => RAD * 0.98 + L.pt * 0.25;
  const RAD = 19;

  // where the drill sits on its stand: pivot height and pivot→tip distance (world units)
  function mount(L) {
    const s = L.size;
    return {
      pivotH: 78 + L.lt * 3.5,
      tipDist: (headLen(L) + bodyLen(L) * 0.42) * s,
      rearDist: bodyLen(L) * 0.58 * s,
      axisOff: RAD * 0.95 * s,
    };
  }

  function rainbow(t, off) { return `hsl(${((t * 120 + off) % 360) | 0},100%,65%)`; }
  const OUT = 'rgba(22,16,34,0.55)';

  function metalGrad(ctx, y0, y1, l, m, d) {
    const g = ctx.createLinearGradient(0, y0, 0, y1);
    g.addColorStop(0, U.shade(l, -0.05)); g.addColorStop(0.18, l); g.addColorStop(0.45, m); g.addColorStop(0.85, d); g.addColorStop(1, U.shade(d, -0.25));
    return g;
  }

  // ------------------------------------------------------------------ drill
  // Drill pointing toward +x. (x,y) is the drill tip. spin = rotation phase.
  function drawDrill(ctx, x, y, angle, L, t, spin, scale) {
    const golden = L.cos.golden;
    const H = golden ? GOLD_HEAD : HEAD[L.pt], B = golden ? GOLD_BODY : BODY[L.dt];
    const Hx = HEAD[L.pt], Bx = BODY[L.dt]; // shape extras stay with the tier, even on the Golden Drill
    const s = (scale || 1) * L.size;
    const hl = headLen(L), bl = bodyLen(L), R = RAD;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.scale(s, s);
    ctx.translate(-hl, 0); // origin at head base; body spans [-bl, 0]

    // golden drill shimmer
    if (golden) {
      const pulse = 0.6 + 0.4 * Math.sin(t * 5);
      const g = ctx.createRadialGradient(-bl * 0.3, 0, 4, -bl * 0.3, 0, 120);
      g.addColorStop(0, `rgba(255,220,80,${0.5 * pulse})`); g.addColorStop(1, 'rgba(255,200,40,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(-bl * 0.3, 0, 120, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#fff6c8';
      for (let i = 0; i < 6; i++) {
        const a = t * 2 + i * 1.05, rr = 46 + Math.sin(t * 3 + i) * 10;
        const sx = -bl * 0.3 + Math.cos(a) * rr * 1.6, sy = Math.sin(a) * rr * 0.8;
        ctx.globalAlpha = 0.5 + 0.5 * Math.sin(t * 8 + i);
        ctx.beginPath(); ctx.moveTo(sx, sy - 5); ctx.lineTo(sx + 1.5, sy); ctx.lineTo(sx, sy + 5); ctx.lineTo(sx - 1.5, sy); ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    // legend aura
    if (L.cos.legend || Hx.aura) {
      const pulse = 0.6 + 0.4 * Math.sin(t * 4), ac = L.cos.legend ? '#ffe678' : Hx.aura;
      const g = ctx.createRadialGradient(-bl * 0.3, 0, 4, -bl * 0.3, 0, 110);
      g.addColorStop(0, U.rgba(ac, 0.35 * pulse));
      g.addColorStop(1, U.rgba(ac, 0));
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(-bl * 0.3, 0, 110, 0, Math.PI * 2); ctx.fill();
    }
    if (H.glow) {
      const g = ctx.createRadialGradient(hl * 0.4, 0, 2, hl * 0.4, 0, 60);
      g.addColorStop(0, U.rgba(H.glow, 0.45 + 0.15 * Math.sin(t * 10)));
      g.addColorStop(1, U.rgba(H.glow, 0));
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(hl * 0.4, 0, 60, 0, Math.PI * 2); ctx.fill();
    }

    // ---- swept wings (top hull tiers)
    if (Bx.wings) {
      for (const sg of [-1, 1]) {
        ctx.beginPath();
        ctx.moveTo(-bl * 0.45, sg * R * 0.8);
        ctx.lineTo(-bl - 18, sg * R * 2.35);
        ctx.lineTo(-bl - 4, sg * R * 1.15);
        ctx.lineTo(-bl + 26, sg * R * 0.8);
        ctx.closePath();
        const wg = ctx.createLinearGradient(-bl - 18, 0, -bl * 0.45, 0);
        wg.addColorStop(0, B.band); wg.addColorStop(1, B.d);
        ctx.fillStyle = wg; ctx.fill();
        ctx.strokeStyle = OUT; ctx.lineWidth = 2; ctx.stroke();
        ctx.strokeStyle = U.rgba(B.band, 0.75); ctx.lineWidth = 1.8;
        ctx.beginPath(); ctx.moveTo(-bl * 0.55, sg * R * 0.95); ctx.lineTo(-bl - 12, sg * R * 2.1); ctx.stroke();
      }
    }
    // ---- fins (cosmetic or high hull tiers)
    if (L.cos.fins || Bx.fins) {
      const fc = L.cos.fins ? '#ff3b5c' : B.band;
      for (const sg of [-1, 1]) {
        ctx.beginPath();
        ctx.moveTo(-bl + 14, sg * R * 0.6);
        ctx.quadraticCurveTo(-bl - 4, sg * R * 1.2, -bl - 14, sg * R * 1.55);
        ctx.lineTo(-bl + 30, sg * R * 0.7);
        ctx.closePath();
        ctx.fillStyle = fc; ctx.fill();
        ctx.strokeStyle = OUT; ctx.lineWidth = 2; ctx.stroke();
      }
    }
    // ---- turbines
    if (Bx.turbines) {
      for (const sg of [-1, 1]) {
        const cx = -bl * 0.55, cy = sg * (R + 6);
        ctx.fillStyle = '#20232b';
        ctx.beginPath(); ctx.arc(cx, cy, 11, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = B.core || '#aaa'; ctx.lineWidth = 2.4;
        for (let i = 0; i < 4; i++) {
          const a = spin * 1.3 + (i * Math.PI) / 2;
          ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(a) * 9, cy + Math.sin(a) * 9); ctx.stroke();
        }
        ctx.strokeStyle = '#6a717b'; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.arc(cx, cy, 11, 0, Math.PI * 2); ctx.stroke();
      }
    }
    // ---- pistons
    if (Bx.pistons) {
      const ext = 3 + Math.sin(spin * 0.7) * 3;
      for (const sg of [-1, 1]) {
        const py = sg * (R - 1) - (sg > 0 ? 0 : 6);
        ctx.fillStyle = '#2d3137'; ctx.fillRect(-bl + 22, py, 20, 7);
        ctx.fillStyle = '#d0d6dc'; ctx.fillRect(-bl + 42, py + 1.5, 6 + ext, 4);
      }
    }

    // ---- body capsule (rounded rear dome)
    ctx.beginPath();
    ctx.moveTo(0, -R);
    ctx.lineTo(-bl + R, -R);
    ctx.arc(-bl + R, 0, R, -Math.PI / 2, Math.PI / 2, true);
    ctx.lineTo(0, R);
    ctx.closePath();
    ctx.fillStyle = metalGrad(ctx, -R, R, B.l, B.m, B.d);
    ctx.fill();
    // rear dome shading
    ctx.save(); ctx.clip();
    const rg = ctx.createRadialGradient(-bl + R * 0.9, -R * 0.35, 2, -bl + R, 0, R * 1.3);
    rg.addColorStop(0, 'rgba(255,255,255,0.25)'); rg.addColorStop(1, 'rgba(0,0,0,0.15)');
    ctx.fillStyle = rg; ctx.fillRect(-bl, -R, R * 2, R * 2);
    // specular streak
    ctx.fillStyle = 'rgba(255,255,255,0.38)';
    U.roundRect(ctx, -bl + R * 0.7, -R * 0.66, bl - R * 0.9, R * 0.2, R * 0.1); ctx.fill();
    ctx.fillStyle = 'rgba(255,255,255,0.12)';
    ctx.fillRect(-bl, -R * 0.42, bl, R * 0.14);
    // bottom bounce light
    ctx.fillStyle = 'rgba(255,255,255,0.08)';
    ctx.fillRect(-bl, R * 0.62, bl, R * 0.18);
    if (B.hazard) {
      for (let i = -2; i < 8; i++) {
        ctx.fillStyle = i % 2 ? 'rgba(20,20,20,0.85)' : 'rgba(255,207,51,0.9)';
        ctx.beginPath();
        const hx = -bl * 0.42 + i * 6;
        ctx.moveTo(hx, -R); ctx.lineTo(hx + 6, -R); ctx.lineTo(hx - 6, R); ctx.lineTo(hx - 12, R); ctx.fill();
      }
    }
    if (B.stripe) { // painted racing stripe
      ctx.fillStyle = B.stripe;
      ctx.fillRect(-bl * 0.6, -R * 0.12, bl * 0.48, R * 0.24);
    }
    if (Bx.vents) { // angled cooling slots
      for (let i = 0; i < 4; i++) {
        const vx = -bl * 0.62 + i * 8;
        ctx.strokeStyle = Bx.glowBand ? U.rgba(B.band, 0.55 + 0.3 * Math.sin(t * 5 + i)) : 'rgba(10,12,16,.75)';
        ctx.lineWidth = 3; ctx.lineCap = 'round';
        ctx.beginPath(); ctx.moveTo(vx + 3, R * 0.2); ctx.lineTo(vx - 2, R * 0.8); ctx.stroke();
        ctx.lineCap = 'butt';
      }
    }
    ctx.restore();
    ctx.strokeStyle = OUT; ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(0, -R); ctx.lineTo(-bl + R, -R); ctx.arc(-bl + R, 0, R, -Math.PI / 2, Math.PI / 2, true); ctx.lineTo(0, R);
    ctx.stroke();

    // ---- glowing core window
    if (B.core) {
      const n = B.cores || 1, spots = n === 3 ? [0.22, 0.38, 0.54] : n === 2 ? [0.24, 0.46] : [0.3], r = n === 3 ? 0.8 : 1;
      spots.forEach((f, i) => {
        const cx = -bl * f;
        const pulse = 0.7 + 0.3 * Math.sin(t * 6 + i * 1.3);
        const g = ctx.createRadialGradient(cx, 0, 1, cx, 0, 15 * r);
        g.addColorStop(0, '#ffffff'); g.addColorStop(0.35, B.core); g.addColorStop(1, U.rgba(B.core, 0));
        ctx.globalAlpha = pulse;
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, 0, 15 * r, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = 1;
        ctx.strokeStyle = '#14161c'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(cx, 0, 7.5 * r, 0, Math.PI * 2); ctx.stroke();
      });
    }

    // ---- bands
    const band = (bx, w) => {
      const bR = R + 2.5;
      ctx.beginPath(); U.roundRect(ctx, bx, -bR, w, bR * 2, 3.5);
      const g = ctx.createLinearGradient(0, -bR, 0, bR);
      g.addColorStop(0, U.shade(B.band, 0.35)); g.addColorStop(0.3, B.band); g.addColorStop(0.8, U.shade(B.band, -0.3)); g.addColorStop(1, U.shade(B.band, -0.5));
      ctx.fillStyle = g; ctx.fill();
      ctx.strokeStyle = OUT; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,0.45)';
      ctx.fillRect(bx + 2, -bR + 3, w - 4, 3);
      if (B.glowBand) {
        ctx.globalAlpha = 0.45 + 0.35 * Math.sin(t * 6 + bx);
        ctx.shadowColor = B.band; ctx.shadowBlur = 12;
        ctx.fillStyle = U.shade(B.band, 0.5);
        ctx.fillRect(bx + w / 2 - 1.5, -bR + 2, 3, bR * 2 - 4);
        ctx.shadowBlur = 0; ctx.globalAlpha = 1;
      }
      if (B.rivets) {
        ctx.fillStyle = 'rgba(255,255,255,0.75)';
        for (const ry of [-R * 0.55, 0, R * 0.55]) { ctx.beginPath(); ctx.arc(bx + w / 2, ry, 1.6, 0, Math.PI * 2); ctx.fill(); }
      }
    };
    band(-bl * 0.72, 11);
    band(-16, 12);

    // ---- collar (dark ring) between body and head
    const cR = R * 0.92;
    ctx.beginPath(); U.roundRect(ctx, -4, -cR, 9, cR * 2, 3);
    ctx.fillStyle = metalGrad(ctx, -cR, cR, '#5a6068', '#30343a', '#16181c');
    ctx.fill();

    // ---- side cutters for a wide drill (lined up with the block grid)
    if (L.width > 1) {
      const half = (L.width - 1) / 2;
      for (let i = 1; i <= half; i++) {
        const off = (DI.BS * i) / L.size;
        for (const sg of [-1, 1]) {
          const oy = sg * off;
          ctx.fillStyle = '#3a3f46';
          ctx.fillRect(-18, Math.min(0, oy) - 4, 9, Math.abs(oy) + 8);
          ctx.beginPath(); U.roundRect(ctx, -24, oy - 10, 24, 20, 6);
          ctx.fillStyle = metalGrad(ctx, oy - 10, oy + 10, B.l, B.m, B.d); ctx.fill();
          ctx.strokeStyle = OUT; ctx.lineWidth = 2; ctx.stroke();
          ctx.fillStyle = B.band; ctx.fillRect(-14, oy - 11, 5, 22);
          drawHead(ctx, 0, oy, 28 + L.pt * 0.8, 12 + L.pt * 0.2, H, spin + i, t, 3);
        }
      }
    }

    // ---- sun spikes turning behind the head
    if (Hx.flare && !golden) {
      ctx.save();
      ctx.translate(4, 0); ctx.rotate(spin * 0.5);
      ctx.fillStyle = U.rgba(Hx.glow, 0.5 + 0.2 * Math.sin(t * 7));
      for (let i = 0; i < 8; i++) {
        ctx.rotate(Math.PI / 4);
        ctx.beginPath(); ctx.moveTo(R * 0.9, -4); ctx.lineTo(R * 1.75, 0); ctx.lineTo(R * 0.9, 4); ctx.closePath(); ctx.fill();
      }
      ctx.restore();
    }

    // ---- outer blade rings (more of them each step up)
    if (Hx.rings && !golden) {
      const n = Hx.rings * 2 + 1;
      ctx.save();
      ctx.strokeStyle = Hx.rainbow ? rainbow(t, 0) : Hx.glow; ctx.lineWidth = 3;
      ctx.shadowColor = Hx.glow; ctx.shadowBlur = 8;
      for (let i = 0; i < n; i++) {
        const px = ((spin * 9 + (i * 42) / n) % 42);
        const hw = (R + 7) * (1 - px / 48);
        ctx.globalAlpha = 0.85;
        ctx.beginPath(); ctx.ellipse(px + 4, 0, 3, hw, 0, 0, Math.PI * 2); ctx.stroke();
      }
      ctx.restore();
    }

    // ---- main head
    const hw = headWidth(L);
    drawHead(ctx, 4, 0, hl, hw, H, spin, t, 4);

    // teeth get denser as the head evolves
    if (L.pt >= 2) {
      ctx.fillStyle = H.teeth || H.ridge;
      const nT = 5 + Math.floor(L.pt / 3);
      for (let i = 1; i < nT; i++) {
        const f = i / nT, tx = 4 + f * hl, ty = hw * (1 - f) * 0.95;
        for (const sg of [-1, 1]) {
          ctx.beginPath();
          ctx.moveTo(tx - 4, sg * ty); ctx.lineTo(tx + 1, sg * (ty + 6)); ctx.lineTo(tx + 4, sg * ty * 0.9);
          ctx.closePath(); ctx.fill();
          ctx.strokeStyle = OUT; ctx.lineWidth = 1.2; ctx.stroke();
        }
      }
    }
    // ---- lightning crawling over the head
    if (Hx.arcs && !golden) {
      ctx.save();
      ctx.strokeStyle = '#ffffff'; ctx.shadowColor = Hx.glow; ctx.shadowBlur = 10; ctx.lineWidth = 1.8;
      const seed = Math.floor(t * 14);
      for (const sg of [-1, 1]) {
        ctx.beginPath(); ctx.moveTo(6, sg * hw * 0.9);
        for (let i = 1; i <= 4; i++) {
          const f = i / 4, wob = Math.sin(seed * 12.9898 + i * 78.233 + sg) * 7;
          ctx.lineTo(6 + f * hl, sg * hw * (1 - f) * 0.9 + wob * (1 - f * 0.5));
        }
        ctx.stroke();
      }
      ctx.restore();
    }
    if (H.glow) {
      const g = ctx.createRadialGradient(hl + 4, 0, 0, hl + 4, 0, 16);
      g.addColorStop(0, '#ffffff'); g.addColorStop(0.4, U.rgba(H.glow, 0.8)); g.addColorStop(1, U.rgba(H.glow, 0));
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(hl + 4, 0, 16, 0, Math.PI * 2); ctx.fill();
    }
    // ---- gem set in the tip
    if (Hx.crystal && !golden) {
      const tx = hl + 2;
      ctx.beginPath(); ctx.moveTo(tx + 13, 0); ctx.lineTo(tx, -7); ctx.lineTo(tx - 7, 0); ctx.lineTo(tx, 7); ctx.closePath();
      ctx.fillStyle = Hx.crystal; ctx.shadowColor = Hx.glow; ctx.shadowBlur = 14; ctx.fill();
      ctx.shadowBlur = 0; ctx.strokeStyle = OUT; ctx.lineWidth = 1.6; ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,.85)';
      ctx.beginPath(); ctx.moveTo(tx + 6, -1); ctx.lineTo(tx, -4.5); ctx.lineTo(tx - 2.5, -1); ctx.closePath(); ctx.fill();
    }
    // ---- halo circling the hull
    if (Bx.halo && !golden) {
      const cx = -bl * 0.42, rx = bl * 0.62, ry = R * 1.7;
      ctx.save();
      ctx.strokeStyle = U.rgba(Bx.halo, 0.65); ctx.lineWidth = 2.2; ctx.shadowColor = Bx.halo; ctx.shadowBlur = 10;
      ctx.beginPath(); ctx.ellipse(cx, 0, rx, ry, 0, 0, Math.PI * 2); ctx.stroke();
      ctx.fillStyle = '#ffffff';
      for (let i = 0; i < 3; i++) {
        const a = t * 2.2 + (i * Math.PI * 2) / 3;
        ctx.beginPath(); ctx.arc(cx + Math.cos(a) * rx, Math.sin(a) * ry, 3.2, 0, Math.PI * 2); ctx.fill();
      }
      ctx.restore();
    }
    ctx.restore();
  }

  // stepped spiral cone; base at (x, y), pointing +x
  function drawHead(ctx, x, y, len, hw, H, spin, t, steps) {
    ctx.save();
    ctx.translate(x, y);
    const path = () => {
      ctx.beginPath();
      ctx.moveTo(0, -hw);
      ctx.quadraticCurveTo(len * 0.55, -hw * 0.72, len, 0);
      ctx.quadraticCurveTo(len * 0.55, hw * 0.72, 0, hw);
      ctx.closePath();
    };
    path();
    ctx.fillStyle = metalGrad(ctx, -hw, hw, H.l, H.m, H.d);
    ctx.fill();
    ctx.save();
    ctx.clip();
    // spiral ridges: right-facing arcs that crawl toward the tip as the drill spins
    const step = len / steps;
    const ph = ((spin * 9) % step + step) % step;
    for (let i = -1; i <= steps + 1; i++) {
      const rx = i * step + ph;
      if (rx < 0 || rx > len) continue;
      const f = rx / len;
      const rr = hw * (1 - f * f * 0.35) * (1 - f) + hw * 0.08;
      const ew = Math.max(2, rr * 0.32);
      // shadow under the step
      ctx.strokeStyle = H.glow ? (H.rainbow ? rainbow(t, i * 50) : H.ridge) : U.rgba('#1b1e24', 0.45);
      ctx.lineWidth = H.glow ? 3.5 : 5;
      if (H.glow) { ctx.shadowColor = H.glow; ctx.shadowBlur = 8; }
      ctx.beginPath(); ctx.ellipse(rx, 0, ew, rr + 2, -0.18, -Math.PI / 2, Math.PI / 2); ctx.stroke();
      ctx.shadowBlur = 0;
      // bright lip of the step
      ctx.strokeStyle = 'rgba(255,255,255,0.7)';
      ctx.lineWidth = 2.4;
      ctx.beginPath(); ctx.ellipse(rx - 3.5, 0, ew, rr + 2, -0.18, -Math.PI / 2, 0.2); ctx.stroke();
      // notch in the silhouette so the steps read from far away
      ctx.fillStyle = U.rgba('#1b1e24', 0.35);
      ctx.beginPath(); ctx.moveTo(rx - 1, -rr - 3); ctx.lineTo(rx + 5, -rr - 3); ctx.lineTo(rx - 1, -rr + 3); ctx.fill();
    }
    // specular highlight along the top
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.beginPath();
    ctx.moveTo(2, -hw * 0.8);
    ctx.quadraticCurveTo(len * 0.5, -hw * 0.6, len * 0.92, -hw * 0.06);
    ctx.quadraticCurveTo(len * 0.5, -hw * 0.38, 2, -hw * 0.45);
    ctx.closePath(); ctx.fill();
    ctx.restore();
    path();
    ctx.strokeStyle = OUT; ctx.lineWidth = 2.2; ctx.stroke();
    // tip glint
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.beginPath(); ctx.arc(len - 3, -1.5, 1.8, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }

  // ------------------------------------------------------------------ launcher stand
  function leg(ctx, x0, y0, x1, y1, w, S) {
    const a = Math.atan2(y1 - y0, x1 - x0), len = Math.hypot(x1 - x0, y1 - y0);
    ctx.save();
    ctx.translate(x0, y0); ctx.rotate(a);
    const g = ctx.createLinearGradient(0, -w / 2, 0, w / 2);
    g.addColorStop(0, U.shade(S.leg, 0.3)); g.addColorStop(0.45, S.leg); g.addColorStop(1, S.legD);
    ctx.beginPath(); U.roundRect(ctx, 0, -w / 2, len, w, 4);
    ctx.fillStyle = g; ctx.fill();
    ctx.strokeStyle = OUT; ctx.lineWidth = 2.5; ctx.stroke();
    if (S.grain) {
      ctx.strokeStyle = U.rgba(S.legD, 0.45); ctx.lineWidth = 1.4;
      for (const gy of [-w * 0.18, w * 0.15]) {
        ctx.beginPath(); ctx.moveTo(8, gy); ctx.bezierCurveTo(len * 0.3, gy + 2, len * 0.6, gy - 2, len - 8, gy + 1); ctx.stroke();
      }
    }
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fillRect(4, -w / 2 + 2.5, len - 8, 2.5);
    if (S.coils) {
      ctx.strokeStyle = U.rgba(S.coils, 0.8); ctx.lineWidth = 2; ctx.shadowColor = S.coils; ctx.shadowBlur = 8;
      ctx.beginPath(); ctx.moveTo(10, 0); ctx.lineTo(len - 10, 0); ctx.stroke(); ctx.shadowBlur = 0;
    }
    ctx.restore();
  }

  function bolt(ctx, x, y, r, col) {
    const g = ctx.createRadialGradient(x - r * 0.35, y - r * 0.4, 0.5, x, y, r);
    g.addColorStop(0, '#ffffff'); g.addColorStop(0.45, col); g.addColorStop(1, U.shade(col, -0.5));
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = OUT; ctx.lineWidth = 1.5; ctx.stroke();
  }

  // Full launcher: stand + mounted drill + front hub. Returns the drill tip position.
  // opts: { recoil, charge, drill (bool, default true), spin, jitter, hop }
  function drawLauncher(ctx, x, y, angle, L, t, opts) {
    opts = opts || {};
    const S = STAND[L.lt];
    const M = mount(L);
    const rec = opts.recoil || 0, charge = opts.charge || 0;
    const px = x - rec * 10, py = y - M.pivotH * (1 - rec * 0.1);
    const spread = 46 + L.lt * 3.2, legW = 15 + L.lt * 0.9;

    ctx.save();
    // ground shadow
    ctx.fillStyle = 'rgba(0,0,0,0.2)';
    ctx.beginPath(); ctx.ellipse(x, y + 2, spread + 34, 9, 0, 0, Math.PI * 2); ctx.fill();

    // base plate (tier 2+)
    if (L.lt >= 2) {
      const bw = spread + 26;
      ctx.beginPath(); U.roundRect(ctx, x - bw, y - 14, bw * 2, 14, 5);
      ctx.fillStyle = metalGrad(ctx, y - 14, y, '#8a929c', '#4a525c', '#22272e'); ctx.fill();
      ctx.strokeStyle = OUT; ctx.lineWidth = 2; ctx.stroke();
      if (S.hazard) {
        ctx.save(); ctx.beginPath(); ctx.rect(x - bw + 4, y - 11, bw * 2 - 8, 7); ctx.clip();
        for (let i = 0; i < 40; i++) {
          ctx.fillStyle = i % 2 ? '#1b1b1b' : '#ffcf33';
          const hx = x - bw + i * 9;
          ctx.beginPath(); ctx.moveTo(hx, y - 11); ctx.lineTo(hx + 9, y - 11); ctx.lineTo(hx, y - 4); ctx.lineTo(hx - 9, y - 4); ctx.fill();
        }
        ctx.restore();
      }
    }
    const fy = y - (L.lt >= 2 ? 12 : 0);
    // energy pylons
    if (S.pylons) {
      const spots = S.pylons >= 4 ? [[-spread - 14, 40], [spread + 14, 40], [-spread - 34, 26], [spread + 34, 26]] : [[-spread - 14, 40], [spread + 14, 40]];
      for (const [ox, ph] of spots) {
        ctx.fillStyle = S.legD; ctx.fillRect(x + ox - 5, fy - ph, 10, ph);
        const g = ctx.createRadialGradient(x + ox, fy - ph - 4, 1, x + ox, fy - ph - 4, 16);
        g.addColorStop(0, '#fff'); g.addColorStop(0.4, S.coils); g.addColorStop(1, U.rgba(S.coils, 0));
        ctx.globalAlpha = 0.7 + 0.3 * Math.sin(t * 5 + ox); ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(x + ox, fy - ph - 4, 16, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1;
      }
    }
    // tracking dish on the left pylon
    if (S.dish) {
      const dx = x - spread - 14, dy = fy - 58, da = Math.sin(t * 0.8) * 0.35 - 0.6;
      ctx.save(); ctx.translate(dx, dy); ctx.rotate(da);
      ctx.beginPath(); ctx.arc(0, 0, 15, 0.25, Math.PI - 0.25);
      ctx.closePath();
      ctx.fillStyle = metalGrad(ctx, 0, 15, '#f0f4f8', '#9aa4b0', '#4c5560'); ctx.fill();
      ctx.strokeStyle = OUT; ctx.lineWidth = 2; ctx.stroke();
      ctx.strokeStyle = S.coils; ctx.lineWidth = 2.4;
      ctx.beginPath(); ctx.moveTo(0, 8); ctx.lineTo(0, -6); ctx.stroke();
      ctx.restore();
    }
    // legs + crossbar
    leg(ctx, px, py, x - spread, fy, legW, S);
    leg(ctx, px, py, x + spread, fy, legW, S);
    const cbY = U.lerp(py, fy, 0.68);
    const cbX0 = U.lerp(px, x - spread, 0.68), cbX1 = U.lerp(px, x + spread, 0.68);
    ctx.beginPath(); U.roundRect(ctx, cbX0 - 6, cbY - legW * 0.45, cbX1 - cbX0 + 12, legW * 0.9, 4);
    const cg = ctx.createLinearGradient(0, cbY - legW / 2, 0, cbY + legW / 2);
    cg.addColorStop(0, U.shade(S.leg, 0.25)); cg.addColorStop(1, S.legD);
    ctx.fillStyle = cg; ctx.fill(); ctx.strokeStyle = OUT; ctx.lineWidth = 2.5; ctx.stroke();
    bolt(ctx, cbX0 + 2, cbY, 5.5, '#c9ced4');
    bolt(ctx, cbX1 - 2, cbY, 5.5, '#c9ced4');
    if (S.bracket) {
      for (const bx of [x - spread, x + spread]) { ctx.fillStyle = S.bracket; ctx.fillRect(bx - 9, fy - 22, 18, 10); ctx.strokeStyle = OUT; ctx.strokeRect(bx - 9, fy - 22, 18, 10); }
    }
    // feet
    for (const fx of [x - spread, x + spread]) {
      ctx.beginPath(); U.roundRect(ctx, fx - 16, fy - 9, 32, 11, 3);
      ctx.fillStyle = metalGrad(ctx, fy - 9, fy + 2, U.shade(S.feet, 0.4), S.feet, U.shade(S.feet, -0.4)); ctx.fill();
      ctx.strokeStyle = OUT; ctx.lineWidth = 2; ctx.stroke();
    }

    // thruster glow at the drill's rear while charging
    const ca = Math.cos(angle), sa = Math.sin(angle);
    if (charge > 0) {
      const rx = px - sa * M.axisOff - ca * M.rearDist, ry = py - ca * M.axisOff + sa * M.rearDist;
      const g = ctx.createRadialGradient(rx, ry, 1, rx, ry, 30 + charge * 40);
      g.addColorStop(0, U.rgba('#ffffff', 0.9 * charge)); g.addColorStop(0.3, U.rgba('#ffb03a', 0.7 * charge)); g.addColorStop(1, 'rgba(255,120,40,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(rx, ry, 30 + charge * 40, 0, Math.PI * 2); ctx.fill();
    }

    // hydraulic piston from base to drill body
    if (S.piston) {
      const bx = px + ca * 10 - sa * 0, by = py - sa * 10;
      ctx.strokeStyle = '#2b2f35'; ctx.lineWidth = 10; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(x + spread * 0.55, fy - 6); ctx.lineTo(bx, by + 10); ctx.stroke();
      ctx.strokeStyle = '#dfe4e9'; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.moveTo(U.lerp(x + spread * 0.55, bx, 0.5), U.lerp(fy - 6, by + 10, 0.5)); ctx.lineTo(bx, by + 10); ctx.stroke();
      if (S.piston2) { // heavy rigs brace the drill from both sides
        ctx.strokeStyle = '#2b2f35'; ctx.lineWidth = 10;
        ctx.beginPath(); ctx.moveTo(x - spread * 0.55, fy - 6); ctx.lineTo(bx - 6, by + 10); ctx.stroke();
        ctx.strokeStyle = '#dfe4e9'; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.moveTo(U.lerp(x - spread * 0.55, bx - 6, 0.5), U.lerp(fy - 6, by + 10, 0.5)); ctx.lineTo(bx - 6, by + 10); ctx.stroke();
      }
      ctx.lineCap = 'butt';
    }

    // warp rift opening behind the launcher
    if (S.rift) {
      const rr = 62 + Math.sin(t * 2) * 5 + charge * 18;
      ctx.save(); ctx.translate(px, py);
      const g = ctx.createRadialGradient(0, 0, rr * 0.3, 0, 0, rr * 1.25);
      g.addColorStop(0, U.rgba(S.coils, 0)); g.addColorStop(0.7, U.rgba(S.coils, 0.3)); g.addColorStop(1, U.rgba(S.coils, 0));
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(0, 0, rr * 1.25, 0, Math.PI * 2); ctx.fill();
      ctx.strokeStyle = U.rgba(S.coils, 0.7); ctx.lineWidth = 2.4;
      for (let i = 0; i < 3; i++) {
        const a = t * 1.4 + (i * Math.PI * 2) / 3;
        ctx.beginPath(); ctx.arc(0, 0, rr, a, a + 1.25); ctx.stroke();
      }
      ctx.restore();
    }

    // mounted drill
    // axis is offset perpendicular (upward) from the pivot so the hub cradles the body
    const ox = -sa * M.axisOff, oy = -ca * M.axisOff;
    // twin accelerator rails either side of the drill
    if (S.rails) {
      ctx.save(); ctx.translate(px + ox, py + oy); ctx.rotate(-angle);
      const gap = RAD * L.size + 7, r0 = -M.rearDist - 6, r1 = M.tipDist * 0.72;
      for (const sg of [-1, 1]) {
        const ry = sg * gap;
        ctx.beginPath(); U.roundRect(ctx, r0, ry - 3.5, r1 - r0, 7, 3);
        ctx.fillStyle = metalGrad(ctx, ry - 3.5, ry + 3.5, '#c9d0d8', S.leg, S.legD); ctx.fill();
        ctx.strokeStyle = OUT; ctx.lineWidth = 1.6; ctx.stroke();
        for (let i = 0; i < 5; i++) {
          const f = ((t * 1.2 + i / 5) % 1), rx = r0 + (r1 - r0) * f;
          ctx.fillStyle = U.rgba(S.coils, 0.35 + 0.65 * Math.max(charge, 0.3));
          ctx.fillRect(rx - 3, ry - 2, 6, 4);
        }
      }
      ctx.restore();
    }
    const tip = { x: px + ox + ca * M.tipDist, y: py + oy - sa * M.tipDist, px, py };
    if (opts.drill !== false) {
      const j = opts.jitter || 0, hop = opts.hop || 0;
      drawDrill(ctx, tip.x + U.rand(-j, j), tip.y + U.rand(-j, j) - hop * 18, -angle, L, t, opts.spin || 0, 1);
    }

    // orbit rings (tier 5)
    if (S.orbit) {
      ctx.save(); ctx.translate(px, py);
      for (let i = 0; i < S.orbit; i++) {
        ctx.rotate(t * (i % 2 ? -0.8 : 0.6));
        ctx.strokeStyle = U.rgba(S.coils, 0.55); ctx.lineWidth = 3;
        ctx.beginPath(); ctx.ellipse(0, 0, 54 + i * 10, 18, 0, 0, Math.PI * 2); ctx.stroke();
      }
      ctx.restore();
    }
    // coil rings around the hub (tier 3+)
    if (S.coils) {
      for (let i = 0; i < 3; i++) {
        ctx.strokeStyle = U.rgba(S.coils, 0.4 + 0.5 * Math.max(charge, 0.5 + 0.5 * Math.sin(t * 6 + i)));
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(px, py, 26 + i * 6, 0, Math.PI * 2); ctx.stroke();
      }
    }
    // front hub + bolt
    const hubR = 15 + L.lt * 0.7;
    ctx.beginPath(); ctx.arc(px, py, hubR, 0, Math.PI * 2);
    const hg = ctx.createRadialGradient(px - hubR * 0.4, py - hubR * 0.4, 2, px, py, hubR);
    hg.addColorStop(0, U.shade(S.hub, 0.45)); hg.addColorStop(0.6, S.hub); hg.addColorStop(1, U.shade(S.hub, -0.45));
    ctx.fillStyle = hg; ctx.fill();
    ctx.strokeStyle = OUT; ctx.lineWidth = 2.5; ctx.stroke();
    ctx.beginPath(); ctx.arc(px, py, hubR * 0.62, 0, Math.PI * 2);
    ctx.fillStyle = '#3a3f46'; ctx.fill();
    bolt(ctx, px, py, hubR * 0.46, S.bolt);
    if (charge > 0 && S.coils) {
      ctx.globalAlpha = charge;
      ctx.fillStyle = S.coils; ctx.beginPath(); ctx.arc(px, py, hubR * 0.3, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 1;
    }
    ctx.restore();
    return tip;
  }

  DI.Art = {
    look, mount, drawDrill, drawLauncher, tierOf, DRILL_TIERS, FRAME_TIERS, LAUNCH_TIERS,
    length: (L) => headLen(L) + bodyLen(L), trail: (L) => HEAD[L.pt].trail, glows: (L) => !!HEAD[L.pt].glow,
    headName: (L) => HEAD_NAMES[L.pt], bodyName: (L) => BODY_NAMES[L.dt], launcherName: (L) => LAUNCH_NAMES[L.lt],
    HEAD_NAMES, BODY_NAMES, LAUNCH_NAMES,
  };
})();
