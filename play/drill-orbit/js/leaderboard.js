// DRILL ORBIT — leaderboards.
// LOCAL: scores stored on this device only (clearly labeled in the UI, never presented as global).
// GLOBAL: Playgama Bridge leaderboards (SaaS on playgama/qa_tool, native where the host has its own).
//   Board ids match playgama-bridge-config.json and the console: depth, coins, rare, flight.
(function () {
  const DI = window.DI;
  const KEY = 'drillit_local_lb_v1';

  function readLocal() {
    try { const raw = DI.Platform.get(KEY); return (typeof raw === 'string' ? JSON.parse(raw) : raw) || {}; } catch (e) { return {}; }
  }
  function writeLocal(d) {
    try { DI.Platform.set(KEY, JSON.stringify(d)); } catch (e) { /* ignore */ }
  }

  const LB = {
    BOARDS: [
      { id: 'depth', name: 'Total Depth', unit: 'm' },
      { id: 'coins', name: 'Total Coins', unit: 'coins' },
      { id: 'rare',  name: 'Rare Finds',  unit: 'finds' },
      { id: 'flight', name: 'Furthest Flight', unit: 'm' },
    ],

    sent: {}, // best score submitted per board this session, so repeat runs don't resend the same value

    // lifetime values: an Orbit Reset must never send a lower score over a player's record
    scores(S) {
      return { depth: Math.max(S.stats.peakDepth || 0, DI.totalDepth(S)), coins: S.totalEarned, rare: S.stats.rare, flight: S.bestDist };
    },

    get type() { try { return (window.bridge && bridge.leaderboards && bridge.leaderboards.type) || 'not_available'; } catch (e) { return 'not_available'; } },
    get globalEnabled() { return this.type !== 'not_available'; },
    get canList() { return this.type === 'in_game'; },
    get hasPopup() { return this.type === 'native_popup'; },

    submitLocal(name, s) {
      const d = readLocal();
      const e = d[name] || { depth: 0, coins: 0, rare: 0, flight: 0 };
      e.depth = Math.max(e.depth, Math.floor(s.depth));
      e.coins = Math.max(e.coins, Math.floor(s.coins));
      e.rare = Math.max(e.rare, Math.floor(s.rare));
      e.flight = Math.max(e.flight || 0, Math.floor(s.flight || 0));
      e.t = Date.now();
      d[name] = e;
      writeLocal(d);
    },

    renameLocal(oldName, newName) {
      const d = readLocal();
      if (d[oldName] && oldName !== newName) {
        const o = d[oldName];
        const n = d[newName] || { depth: 0, coins: 0, rare: 0, flight: 0 };
        d[newName] = { depth: Math.max(o.depth, n.depth), coins: Math.max(o.coins, n.coins), rare: Math.max(o.rare, n.rare), flight: Math.max(o.flight || 0, n.flight || 0), t: Date.now() };
        delete d[oldName];
        writeLocal(d);
      }
    },

    local(board) {
      const d = readLocal();
      return Object.keys(d)
        .map((name) => ({ name, value: d[name][board] || 0 }))
        .filter((e) => e.value > 0)
        .sort((a, b) => b.value - a.value)
        .slice(0, 50);
    },

    clearLocal() { writeLocal({}); },

    async submitGlobal(s) {
      if (!this.globalEnabled) return false;
      const jobs = this.BOARDS.map(async ({ id }) => {
        const v = Math.floor(s[id] || 0);
        if (v <= 0 || v <= (this.sent[id] || 0)) return true;
        try { await bridge.leaderboards.setScore(id, v); this.sent[id] = v; return true; } catch (e) { return false; }
      });
      return (await Promise.all(jobs)).every(Boolean);
    },

    // in_game only: [{ name, value, rank, me }]
    async fetchGlobal(board) {
      if (!this.canList) return null;
      try {
        const rows = await bridge.leaderboards.getEntries(board);
        if (!Array.isArray(rows)) return null;
        const me = bridge.player && bridge.player.id;
        return rows.map((r, i) => ({ name: r.name || 'Player', value: Number(r.score) || 0, rank: r.rank || i + 1, me: me != null && r.id === me }));
      } catch (e) { return null; }
    },

    async showPopup(board) {
      if (!this.hasPopup) return false;
      try { await bridge.leaderboards.showNativePopup(board); return true; } catch (e) { return false; }
    },
  };

  DI.Leaderboard = LB;
})();
