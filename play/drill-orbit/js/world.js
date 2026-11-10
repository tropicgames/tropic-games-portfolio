// DRILL ORBIT — procedurally generated underground for one run.
// Column 0 is the drill shaft (generated row by row). Other columns are decorative and hashed,
// except vein / seam / structure cells which are stored as overrides.
(function () {
  const DI = window.DI;
  const U = DI.U, E = DI.Econ;

  const EVENT_FILL = {
    gold_rush: [['gold', 9]],
    diamond_rush: [['diamond', 6]],
    meteor_shower: [['meteorite', 5]],
  };

  // decorative terrain is hashed by absolute column with a fixed seed, so the ground looks the
  // same before and after a run's world is created (and when a mid-air boost moves the shaft)
  const TERRAIN_SEED = 90210;

  // single-cell specials that sit in the shaft on top of a filler block
  // what can appear off to the sides of the shaft (weights)
  const SIDE_KINDS = [['chest', 12], ['relic', 6], ['bag', 10], ['critter', 7], ['geode', 6], ['turbo', 5], ['magnet', 4], ['star', 4], ['tnt', 6], ['mystery', 5], ['gas', 5]];

  const CELL_SPECIALS = ['turbo', 'magnet', 'star', 'tnt', 'mystery', 'bag', 'geode', 'oil', 'quake', 'portal', 'gas', 'lava', 'goldrain', 'junk', 'echo', 'geyser', 'hive', 'clover'];

  // dinosaur skeleton laid along the shaft: [column, row offset]
  const SKELETON = [[0, 0], [0, 1], [-1, 1], [1, 1], [0, 2], [-1, 2], [1, 2], [0, 3], [-2, 3], [2, 3], [0, 4], [-1, 4], [1, 4]];

  // override map that reports writes, so a renderer caching the ground can repaint changed cells
  class CellMap extends Map {
    constructor(world) { super(); this.world = world; }
    set(k, v) { super.set(k, v); this.world.touch(Math.floor(k / 1048576) - 2048, k % 1048576); return this; }
  }

  class World {
    constructor(seed, opts) {
      this.seed = seed >>> 0;
      this.r = U.rng(seed);
      this.event = opts.event || null;
      this.mult = opts.mult || 1;
      this.forced = opts.forced || [];
      this.pity = opts.pity || 1;
      this.have = opts.have || {};
      this.wh = opts.wh || 1; // world hardness multiplier
      this.wv = opts.wv || 1; // world value multiplier (already folded into mult)
      this.wItems = opts.wItems || null; // this planet's own discoveries
      this.crustRow = opts.goal ? Math.floor(E.rowAtDepth(opts.goal)) : Infinity;
      this.col0 = opts.col0 || 0; // absolute block column of the shaft
      this.shaft = [];
      this.onChange = null; // (c, r) => void, set by the renderer's ground cache
      this.over = new CellMap(this);
      this.pending = new Map();
      this.rooms = [];
      this.veins = [];
      this.seams = [];
      this.caves = [];
      this.digs = [];
      this.craters = [];
      this.doors = [];
      this.boost = opts.boost || {}; // landing region's encounter boosts
      this.lastRoom = -100;
      this.lastJack = -100;
      this.lastStruct = -100;
      this._fill = {};
      this._side = {};
    }

    key(c, r) { return (c + 2048) * 1048576 + r; }
    // a cell's look changed outside the override map (broken, warped)
    touch(c, r) { if (this.onChange) this.onChange(c, r); }

    fillTable(z) {
      if (!this._fill[z.id]) this._fill[z.id] = z.fill.concat(EVENT_FILL[this.event] || []);
      return this._fill[z.id];
    }
    sideTable(z) {
      if (!this._side[z.id]) {
        const ev = (EVENT_FILL[this.event] || []).map((e) => [e[0], Math.ceil(e[1] / 2)]);
        this._side[z.id] = z.side.concat(ev);
      }
      return this._side[z.id];
    }

    // block id for a decorative (non-shaft) cell
    sideType(c, r) {
      if (r >= this.crustRow) return 'crust';
      const ac = c + this.col0;
      let z = E.zoneAtRow(r);
      const into = r - z.startRow;
      if (z.index > 0 && into < 3 && U.hash(ac, r, TERRAIN_SEED + 7) < (3 - into) / 4) z = DI.ZONES[z.index - 1];
      if (r < 1) return z.side[0][0];
      return U.weighted(U.hash(ac * 7 + 3, r * 13 + 1, TERRAIN_SEED), this.sideTable(z));
    }

    // returns override/shaft cell or null (null => default decorative side cell)
    cell(c, r) {
      if (r < 0) return null;
      if (c === 0) { this.ensure(r); return this.shaft[r]; }
      return this.over.get(this.key(c, r)) || null;
    }

    // any cell as a breakable object (materializes decorative cells); air / structure cells come back as-is
    at(c, r) {
      if (r < 0) return null;
      this.ensure(r);
      if (c === 0) return this.shaft[r];
      const k = this.key(c, r);
      let cell = this.over.get(k);
      if (!cell) {
        cell = this.make(this.sideType(c, r), r);
        this.over.set(k, cell);
      }
      return cell;
    }

    // like at(), but null for air / structure cells
    sideCell(c, r) {
      const cell = this.at(c, r);
      return cell && !cell.air ? cell : null;
    }

    ensure(r) {
      while (this.shaft.length <= r + 30) this.gen(this.shaft.length);
    }

    make(t, row, extra) {
      const z = E.zoneAtRow(row);
      const H = E.hardness(t, row) * this.wh;
      const c = { t, hp: H, max: H, val: DI.BLOCKS[t].value * z.value * this.mult, el: 0 };
      if (extra) Object.assign(c, extra);
      return c;
    }

    filler(z) { return z.fill[0][0]; }

    pickRelic(z) {
      const src = this.wItems && this.r() < 0.65 ? this.wItems : z;
      const pool = this.r() < 0.55 ? src.fossils : src.artifacts;
      const fresh = pool.filter((id) => !this.have[id]);
      return fresh.length && this.r() < 0.7 ? U.pick(fresh) : U.pick(pool);
    }

    freeRange(r0, r1) {
      for (let rr = r0; rr <= r1; rr++) if (this.pending.has(rr)) return false;
      return true;
    }

    rollKind(r, z) {
      const u = this.r();
      let acc = 0;
      const ev = this.event;
      for (const kind in DI.SPECIALS) {
        const sp = DI.SPECIALS[kind];
        if (!sp.roll) continue;
        const [p0, minRow, minZone] = sp.roll;
        if (r < minRow || z.index < minZone || (sp.zone && sp.zone !== z.id)) continue;
        let p = p0 * (this.boost[kind] || 1);
        if (kind === 'chest' && ev === 'treasure_hunt') p *= 3;
        if (kind === 'jackpot') {
          if (r - this.lastJack <= 30) continue;
          p *= this.pity * (ev === 'jackpot_hour' ? 2.5 : 1);
        }
        if (DI.SPECIALS[kind].struct && (r - this.lastStruct <= 10 || !this.freeRange(r, r + 6))) continue;
        if (kind === 'room' && r - this.lastRoom <= 40) continue;
        acc += p;
        if (u < acc) return kind;
      }
      return null;
    }

    gen(r) {
      const z = E.zoneAtRow(r);
      // the World Crust: a glowing barrier at the planet's goal depth (and solid crust below it)
      if (r >= this.crustRow) {
        this.shaft[r] = this.make('crust', r, r === this.crustRow ? { sp: 'crust' } : null);
        return;
      }
      const pend = this.pending.get(r);
      // rows a landing object promised (sinkhole, ore outcrop) win over whatever was going to spill into them
      const promised = this.forced.some((f) => f.row === r && f.over);
      if (pend && !promised) { this.shaft[r] = pend; this.pending.delete(r); return; }
      if (pend) this.pending.delete(r);
      const rnd = this.r;
      const t = U.weighted(rnd(), this.fillTable(z));
      let cell = this.make(t, r);

      const forced = this.forced.find((f) => f.row === r);
      let kind = forced ? forced.kind : null;
      if (!kind && r >= 3) kind = this.rollKind(r, z);

      const single = kind ? this.specialCell(kind, z, r, forced && forced.item) : null;
      if (single) {
        cell = single;
        if (kind === 'jackpot') this.lastJack = r;
      } else if (kind === 'vein') {
        const vt = U.weighted(rnd(), z.vein.concat(this.event === 'gold_rush' ? [['gold', 6]] : this.event === 'diamond_rush' ? [['diamond', 5]] : []));
        const len = 3 + Math.floor(rnd() * 3);
        const vein = { t: vt, cells: [], found: false, row: r };
        const vi = this.veins.length;
        this.veins.push(vein);
        for (let rr = r; rr < r + len; rr++) {
          if (E.zoneAtRow(rr) !== z) break;
          for (let c = -2; c <= 2; c++) {
            const a = Math.abs(c);
            if (c !== 0 && !((a === 1 && rnd() < 0.75) || (a === 2 && rnd() < 0.35))) continue;
            const vc = this.make(vt, rr, { vein: vi, grp: 'v' + vi });
            if (c === 0) {
              if (rr === r) cell = vc;
              else if (!this.pending.has(rr)) this.pending.set(rr, vc);
              else continue;
            } else {
              this.over.set(this.key(c, rr), vc);
            }
            vein.cells.push([c, rr]);
          }
        }
      } else if (kind === 'seam' || kind === 'goldriver') {
        // a horizontal band of ore across the whole view (a molten gold river pays double)
        const river = kind === 'goldriver';
        const st = river ? 'gold' : U.weighted(rnd(), z.vein);
        const si = this.seams.length;
        this.seams.push({ t: st, row: r, found: false, river });
        const mk = () => { const sc = this.make(st, r, { seam: si, grp: 's' + si, river }); if (river) sc.val *= 2; return sc; };
        cell = mk();
        for (let c = -9; c <= 9; c++) if (c) this.over.set(this.key(c, r), mk());
      } else if (kind === 'door') {
        // out of the drill's reach: only a dynamite blast (or a Rare Key) opens it
        const c = rnd() < 0.5 ? -3 : 3;
        const door = this.make(this.filler(z), r, { sp: 'door', door: this.doors.length });
        door.val = 0;
        this.over.set(this.key(c, r), door);
        this.doors.push({ c, r, opened: false, hinted: false });
      } else if (kind === 'mud') {
        const rows = 4 + Math.floor(rnd() * 3);
        this.lastStruct = r + rows;
        for (let rr = r; rr < r + rows; rr++) {
          const mc = this.make('mud', rr, { mud: true });
          if (rr === r) cell = mc; else this.pending.set(rr, mc);
          for (let c = -2; c <= 2; c++) if (c && (Math.abs(c) === 1 || rnd() < 0.6)) this.over.set(this.key(c, rr), this.make('mud', rr, { mud: true }));
        }
      } else if (kind === 'dig') {
        const di = this.digs.length;
        const dig = { row: r, total: SKELETON.length, got: 0, done: false, item: z.fossils[z.fossils.length - 1] };
        this.digs.push(dig);
        this.lastStruct = r + 5;
        for (const [c, dr] of SKELETON) {
          const bc = this.make(this.filler(z), r + dr, { sp: 'bone', dig: di });
          bc.val = 0; bc.hp = bc.max = bc.max * 0.8;
          if (c) this.over.set(this.key(c, r + dr), bc);
          else if (dr === 0) cell = bc;
          else this.pending.set(r + dr, bc);
        }
      } else if (kind === 'crater') {
        // bowl of meteorite ore, widest at the top
        const ci = this.craters.length;
        const widths = [3, 3, 2, 1];
        this.craters.push({ row: r, rows: widths.length, found: false });
        this.lastStruct = r + widths.length;
        widths.forEach((w, k) => {
          for (let c = -w; c <= w; c++) {
            const mc = this.make('meteorite', r + k, { crater: ci, grp: 'c' + ci });
            if (c) this.over.set(this.key(c, r + k), mc);
            else if (k === 0) cell = mc;
            else this.pending.set(r + k, mc);
          }
        });
      } else if (kind === 'room' || kind === 'mine' || kind === 'city') {
        const mine = kind === 'mine', city = kind === 'city';
        const rows = mine ? 2 : city ? 5 : 3, half = mine ? 4 : city ? 5 : 3;
        const ri = this.rooms.length;
        const room = { row: r, rows, c0: -half, c1: half, item: this.wItems && this.r() < 0.6 ? this.wItems.room : z.room, opened: false, zone: z, theme: mine ? 'mine' : city ? 'city' : 'tomb', chests: city ? 3 + (rnd() < 0.4 ? 1 : 0) : 0 };
        this.rooms.push(room);
        this.lastStruct = r + rows;
        if (!mine && !city) this.lastRoom = r;
        cell = { air: true, room: ri };
        for (let rr = r + 1; rr < r + rows; rr++) this.pending.set(rr, { air: true, room: ri });
        for (let rr = r; rr < r + rows; rr++) for (let c = -half; c <= half; c++) if (c) this.over.set(this.key(c, rr), { air: true, room: ri });
      } else if (kind === 'cave' || kind === 'lake') {
        const lake = kind === 'lake';
        const rows = 3 + Math.floor(rnd() * 3);
        const ci = this.caves.length;
        const cave = { row: r, rows, lake, found: false, widths: [] };
        this.caves.push(cave);
        this.lastStruct = r + rows;
        const ph = rnd() * 6;
        for (let rr = r; rr < r + rows; rr++) {
          const k = rr - r;
          const w = Math.max(1, Math.round(2 + Math.sin((k / (rows - 1 || 1)) * Math.PI) * (lake ? 2.6 : 2) + Math.sin(ph + k) * 0.7));
          cave.widths.push(w);
          const air = { air: true, cave: ci };
          if (rr === r) cell = air; else this.pending.set(rr, air);
          for (let c = -w; c <= w; c++) if (c) this.over.set(this.key(c, rr), { air: true, cave: ci });
        }
      }
      this.shaft[r] = cell;
      this.genSides(r, z);
    }

    // single-cell specials (chests, power-ups, critters...) — null for multi-cell kinds
    specialCell(kind, z, r, item) {
      let cell = null;
      if (kind === 'chest') {
        cell = this.make(this.filler(z), r, { sp: 'chest' });
        cell.hp = cell.max = cell.max * 0.6;
      } else if (kind === 'relic') {
        cell = this.make(this.filler(z), r, { sp: 'relic', item: item || this.pickRelic(z) });
      } else if (kind === 'jackpot') {
        cell = this.make(this.filler(z), r, { sp: 'jackpot', item: U.pick(z.jackpots) });
      } else if (CELL_SPECIALS.includes(kind)) {
        cell = this.make(this.filler(z), r, { sp: kind });
        cell.hp = cell.max = cell.max * (kind === 'geode' ? 1.4 : 0.7);
        if (kind === 'junk') cell.icon = this.r() < 0.5 ? 'car|#d0533a' : 'skull|#efe4cc'; // buried car or skeleton
      } else if (kind === 'critter') {
        const crit = this.wItems && this.r() < 0.6 ? this.wItems.critter : z.critter;
        cell = this.make(this.filler(z), r, { sp: 'critter', item: this.r() < 0.08 ? 'golden_mole' : crit });
      } else if (kind === 'bedrock') {
        return this.make('bedrock', r, { sp: 'bedrock' });
      }
      if (cell) cell.val = 0;
      return cell;
    }

    // loot scattered beside the shaft — targets for the player's dynamite blasts
    genSides(r, z) {
      const rnd = this.r;
      if (r < 3) return;
      if (rnd() < 0.11) {
        const kind = U.weighted(rnd(), SIDE_KINDS);
        const c = (rnd() < 0.5 ? -1 : 1) * (1 + Math.floor(rnd() * 4));
        const k = this.key(c, r);
        if (!this.over.has(k)) this.over.set(k, this.specialCell(kind, z, r));
      }
      // small pocket of the zone's better ores
      if (rnd() < 0.07) {
        const t = U.weighted(rnd(), z.vein);
        const sg = rnd() < 0.5 ? -1 : 1;
        const c0 = sg * (1 + Math.floor(rnd() * 4));
        for (let dc = 0; dc < 2; dc++) for (let dr = 0; dr < 2; dr++) {
          if (rnd() > 0.75) continue;
          const c = c0 + dc * sg, rr = r + dr;
          if (c === 0) continue;
          const k = this.key(c, rr);
          if (!this.over.has(k)) this.over.set(k, this.make(t, rr));
        }
      }
    }
  }

  DI.World = World;
})();
