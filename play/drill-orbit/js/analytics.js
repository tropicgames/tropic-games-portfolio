// DRILL ORBIT — progression funnel events (Playgama Bridge analytics via DI.Platform.event)
// Every event carries the player's progress so a drop-off can be traced to a world, zone or upgrade level.
(function () {
  const DI = window.DI;
  const PLAY_MINUTES = [1, 2, 3, 5, 10, 15, 20, 30, 45, 60]; // playtime_reached checkpoints (unpaused play)
  const Analytics = {
    sent: new Set(), // names already sent this session (backs up the saved flags if a save write fails)
    playS: 0, playIdx: 0, sessionRuns: 0, readyAt: 0,

    context() {
      const S = DI.Save.data, U = S.upgrades;
      return { world: DI.curWorld(S).id, world_index: S.world || 0, runs: S.runs, best_depth: Math.floor(S.best),
        upgrade_dist: U.dist, upgrade_power: U.power, upgrade_dur: U.dur, game_version: DI.Platform.version };
    },

    // analytics must never break the game: a bad save or missing module only drops the event
    track(name, data) { try { DI.Platform.event(name, Object.assign(this.context(), data)); } catch (e) { /* ignore */ } },

    // a first_* event is sent once per player: the flag is kept in the save so reloads don't repeat it
    first(name, data) {
      const done = DI.Save.data.analytics;
      if (done[name] || this.sent.has(name)) return;
      done[name] = true; this.sent.add(name);
      DI.Save.mark();
      this.track(name, data);
    },

    // saves from before these events existed: don't report steps the player passed long ago as "first"
    migrate(S) {
      const a = S.analytics;
      if (a.v) return;
      a.v = 1;
      if (S.runs > 0) ['first_launch', 'first_landing', 'first_drill'].forEach((k) => { a[k] = true; });
      if (S.upgrades.dist > 1 || S.upgrades.power > 1 || S.upgrades.dur > 1) a.first_upgrade = true;
    },

    gameStarted() {
      if (this.sent.has('game_started')) return;
      this.sent.add('game_started');
      const S = DI.Save.data;
      this.readyAt = performance.now();
      this.track('game_started', { new_player: S.runs === 0 && !S.analytics.first_launch, coins: Math.floor(S.coins), worlds_unlocked: (S.worldMax || 0) + 1,
        load_ms: Math.round(this.readyAt), perf_mode: DI.Q.lite, q_level: DI.Q.level, touch: DI.Q.coarse, screen: window.innerWidth + 'x' + window.innerHeight, dpr: window.devicePixelRatio || 1 });
    },

    // first tap/key of the session: sessions without one bounced on the title screen
    firstInput() {
      if (this.sent.has('session_first_input') || !this.readyAt) return;
      this.sent.add('session_first_input');
      this.track('session_first_input', { ms_since_ready: Math.round(performance.now() - this.readyAt), state: DI.Game.state });
    },

    // every unpaused frame: playtime checkpoints show how long sessions really last
    tick(dt) {
      this.playS += dt;
      const st = DI.Save.data.stats; st.playS = (st.playS || 0) + dt; // lifetime play, saved with the next save
      const m = PLAY_MINUTES[this.playIdx];
      if (m && this.playS >= m * 60) { this.playIdx++; this.track('playtime_reached', { minutes: m, session_runs: this.sessionRuns }); }
    },

    runCompleted(res, run, duration) {
      this.sessionRuns++;
      this.track('run_completed', { run: DI.Save.data.runs, session_runs: this.sessionRuns, depth: res.depth, coins: res.total, record: res.isRecord,
        distance: Math.round(run.dist), duration_s: Math.round(duration), zone: DI.Econ.zoneAtDepth(res.depth).id, boosts_used: run.boostsUsed,
        perfect_launch: run.perfect, golden: run.golden, world_broken: !!res.unlocked });
    },
  };

  DI.Analytics = Analytics;
})();
