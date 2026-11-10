// DRILL ORBIT — persistent save (Playgama Bridge) with autosave
(function () {
  const DI = window.DI;

  function fresh() {
    return {
      v: 1,
      coins: 0,
      totalEarned: 0,
      upgrades: { dist: 1, power: 1, dur: 1 },
      best: 0,             // best depth in the current world
      world: 0,            // current world index
      worldMax: 0,         // highest unlocked world
      bests: {},           // best depth per world (for worlds you are not in)
      prevBest: 0,
      bestDist: 0,
      runs: 0,
      collection: {},       // id -> count
      collectionsDone: {},  // category -> true
      milestones: {},       // depth -> true
      cosmetics: {},        // id -> true
      zonesSeen: { dirt: true },
      stats: { rare: 0, jackpots: 0, chests: 0, rooms: 0, bestRunCoins: 0, runsSinceJackpot: 0, perfectLaunches: 0, playS: 0, peakDepth: 0 },
      prestige: 0,         // Orbit Resets done: each adds coins forever
      rig: { avg: 0, n: 0, hours: 0 }, // idle earnings: typical run, runs counted, hours waiting to be collected
      lastSeen: 0,
      settings: { sound: true, music: true, perf: null, qLevel: null, fps: false }, // perf null = automatic quality; qLevel = rung this device settled on
      playerName: 'Driller' + Math.floor(1000 + Math.random() * 9000),
      tutorial: { launched: false },
      spinCooldown: 3,     // runs left before the prize wheel is available again (first spin comes after run 3)
      upgradeAdNextRun: 1, // one free upgrade, then wait three completed runs
      keys: 0,             // Rare Keys from buried junk: each opens a Mysterious Door for free
      goldenNext: false,   // Golden Drill (3× coins) armed for the next launch
      analytics: {},       // first_* funnel events already sent (see analytics.js)
    };
  }

  function merge(base, data) {
    for (const k in data) {
      if (data[k] && typeof data[k] === 'object' && !Array.isArray(data[k]) && base[k] && typeof base[k] === 'object') merge(base[k], data[k]);
      else base[k] = data[k];
    }
    return base;
  }

  const Save = {
    data: null,
    _dirty: false,
    load() {
      let d = fresh();
      try {
        const raw = DI.Platform.get(DI.Platform.saveKey);
        if (raw) d = merge(d, typeof raw === 'string' ? JSON.parse(raw) : raw);
      } catch (e) { /* missing or invalid save -> fresh progress */ }
      this.data = d;
      DI.Analytics.migrate(d);
      if (DI.Econ.idleAccrue(d, Date.now())) this._dirty = true;
      return d;
    },
    save() {
      this.data.lastSeen = Date.now();
      try { DI.Platform.set(DI.Platform.saveKey, JSON.stringify(this.data)); } catch (e) { /* ignore */ }
      this._dirty = false;
    },
    mark() { this._dirty = true; },
    reset() {
      try { DI.Platform.set(DI.Platform.saveKey, null); } catch (e) { /* ignore */ }
      const keepSettings = this.data ? this.data.settings : null;
      this.data = fresh();
      if (keepSettings) this.data.settings = keepSettings;
      this.save();
    },
    startAutosave() {
      setInterval(() => { if (this._dirty) this.save(); DI.Platform.flush(); }, 4000);
      window.addEventListener('beforeunload', () => this.save());
      document.addEventListener('visibilitychange', () => { if (document.hidden) this.save(); });
    },
  };

  DI.Save = Save;
})();
