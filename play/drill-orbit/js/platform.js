// Bridge owns host state, persistence and analytics.
(function () {
  const DI = window.DI;
  const GUEST_SAVE_KEY = 'drillit_save_v1';
  const P = DI.Platform = {
    version: '1.6.0', cache: {}, pending: new Map(), reasons: new Set(),
    saveKey: GUEST_SAVE_KEY,
    get paused() { return this.reasons.size > 0; },
    get rewardedSupported() { return !!bridge.advertisement.isRewardedSupported; },
    get canSignIn() { return !!(bridge.player && bridge.player.isAuthorizationSupported); },
    get signedIn() { return !!(bridge.player && bridge.player.isAuthorized); },
    get playerName() { return (bridge.player && bridge.player.name) || null; },
    // Each account saves under its own key. Bridge caches keys it has already read, so
    // this is the only way to see an account's save, and to avoid overwriting it, after sign-in.
    accountKey() { return this.signedIn && bridge.player.id != null ? GUEST_SAVE_KEY + '_' + bridge.player.id : null; },
    // Only call from a direct player action. Rejects if sign-in fails or is cancelled.
    // Resolves 'reload' when the account's save is further along than this session's.
    async signIn() {
      await bridge.player.authorize();
      const key = this.accountKey();
      if (!key) throw new Error('not_authorized');
      let saved;
      try { [saved] = await bridge.storage.get([key]); } catch (e) { return 'ok'; } // unread: never overwrite it; the next launch reads it
      try { if (typeof saved === 'string') saved = JSON.parse(saved); } catch (e) { saved = null; }
      if (saved && (saved.totalEarned || 0) > (DI.Save.data.totalEarned || 0)) return 'reload';
      this.saveKey = key;
      DI.Save.save();
      await this.flush();
      return 'ok';
    },
    async init() {
      bridge.gameVersion = this.version; // tags every analytics batch with the build
      const language = bridge.platform.language;
      this.language = ['en'].includes(language) ? language : 'en';
      document.documentElement.lang = this.language;
      const account = this.accountKey();
      const keys = [GUEST_SAVE_KEY, 'drillit_local_lb_v1'].concat(account || []);
      const values = await bridge.storage.get(keys);
      keys.forEach((key, i) => { this.cache[key] = values[i]; });
      if (account) {
        this.saveKey = account;
        if (this.cache[account] == null) this.cache[account] = this.cache[GUEST_SAVE_KEY]; // first signed-in launch keeps guest progress
      }
      this.audioEnabled = bridge.platform.isAudioEnabled !== false;
      bridge.platform.on(bridge.EVENT_NAME.AUDIO_STATE_CHANGED, (enabled) => {
        this.audioEnabled = enabled; this.syncAudio();
      });
      bridge.platform.on(bridge.EVENT_NAME.PAUSE_STATE_CHANGED, (paused) => this.pause('host', paused));
      document.addEventListener('visibilitychange', () => {
        this.pause('hidden', document.hidden);
        if (document.hidden && DI.Save.data) { DI.Save.save(); this.flush(); }
      });
      window.addEventListener('focus', () => setTimeout(() => this.reconcile(), 0));
      this.pause('host', !!bridge.platform.isPaused);
      this.pause('hidden', document.hidden);
      const ad = bridge.advertisement;
      // only an ad actually on screen pauses the game: a host can leave an ad stuck in 'loading' forever
      // (our own requests pause through 'ad_request', which DI.Ads always releases)
      this.pause('interstitial', ad.interstitialState === 'opened');
      this.pause('rewarded', ['opened', 'rewarded'].includes(ad.rewardedState));
      ad.on(bridge.EVENT_NAME.INTERSTITIAL_STATE_CHANGED, (state) => this.pause('interstitial', state === 'opened'));
      ad.on(bridge.EVENT_NAME.REWARDED_STATE_CHANGED, (state) => this.pause('rewarded', state === 'opened' || state === 'rewarded'));
    },
    pause(reason, on) {
      if (on) this.reasons.add(reason); else this.reasons.delete(reason);
      if (DI.Game.fastPtr) DI.Game.clearFast();
      this.syncAudio();
    },
    // Event callbacks can be missed or run before Bridge updates its aggregated state.
    // Reconcile against the public SDK getters after dispatch, rather than expiring a
    // pause after an arbitrary number of minutes (or ignoring a genuine host pause).
    reconcile() {
      const ad = bridge.advertisement;
      const states = {
        host: bridge.platform.isPaused === true,
        hidden: document.hidden,
        interstitial: ad.interstitialState === 'opened',
        rewarded: ad.rewardedState === 'opened' || ad.rewardedState === 'rewarded',
      };
      let changed = false;
      for (const [reason, on] of Object.entries(states)) {
        if (this.reasons.has(reason) !== on) {
          if (on) this.reasons.add(reason); else this.reasons.delete(reason);
          changed = true;
        }
      }
      const audio = bridge.platform.isAudioEnabled !== false;
      if (this.audioEnabled !== audio) { this.audioEnabled = audio; changed = true; }
      if (changed) {
        if (DI.Game.fastPtr) DI.Game.clearFast();
        this.syncAudio();
      }
    },
    afterAd() {
      // Closing a cross-origin ad iframe can leave focus on the removed iframe.
      // Focus the canvas only while the game is visible; this also lets Bridge
      // release its blur/visibility pause through the normal browser focus event.
      setTimeout(() => {
        if (!document.hidden && !DI.Ads.busy && !['opened', 'rewarded'].includes(bridge.advertisement.rewardedState) && bridge.advertisement.interstitialState !== 'opened') {
          const canvas = document.getElementById('game');
          if (canvas) {
            canvas.tabIndex = 0;
            try { canvas.focus({ preventScroll: true }); } catch (e) { /* host may reject focus */ }
          }
        }
        this.reconcile();
      }, 0);
      this.reconcile();
    },
    watchdog() {
      const now = Date.now();
      if (now - (this.lastReconcile || 0) < 250) return;
      this.lastReconcile = now;
      this.reconcile();
    },
    syncAudio() { if (DI.Audio) DI.Audio.setPlatformMuted(!this.audioEnabled || this.paused); },
    get(key) { return this.cache[key] ?? null; },
    set(key, value) {
      if (this.cache[key] === value) return;
      this.cache[key] = value; this.pending.set(key, value);
      clearTimeout(this.saveTimer);
      this.saveTimer = setTimeout(() => this.flush(), 100);
    },
    async flush() {
      if (this.writing || !this.pending.size) return;
      this.writing = true;
      const batch = Array.from(this.pending); this.pending.clear();
      let success = false;
      try { await bridge.storage.set(batch.map(([k]) => k), batch.map(([, v]) => v)); success = true; }
      catch (e) { batch.forEach(([k, v]) => { if (!this.pending.has(k)) this.pending.set(k, v); }); }
      finally { this.writing = false; }
      if (success && this.pending.size) return this.flush();
    },
    message(name) { try { Promise.resolve(bridge.platform.sendMessage(name)).catch(() => {}); } catch (e) {} },
    event(name, data) { try { Promise.resolve(bridge.analytics.send(name, data)).catch(() => {}); } catch (e) {} },
    sampleFrame(now, active) {
      if (!active) { this.frameLast = null; return; }
      if (this.frameLast == null) { this.frameLast = now; return; }
      const ms = (now - this.frameLast) * 1000; this.frameLast = now;
      if (!this.frames) { this.frames = []; this.activeMs = 0; this.sampleStart = now - ms / 1000; }
      this.frames.push(ms); this.activeMs += ms;
      if (this.activeMs < 30000) return;
      const frames = this.frames.sort((a, b) => a - b), n = frames.length;
      const pct = (p) => frames[Math.min(n - 1, Math.floor((n - 1) * p))];
      const data = { target_fps: 60, window_ms: (now - this.sampleStart) * 1000,
        active_ms: this.activeMs, frame_count: n, fps_avg: n * 1000 / this.activeMs,
        fps_p10: 1000 / pct(.9), frame_time_p50_ms: pct(.5), frame_time_p95_ms: pct(.95),
        frame_time_p99_ms: pct(.99), frame_time_max_ms: frames[n - 1], game_version: this.version,
        q_level: DI.Q ? DI.Q.level : null, dpr: DI.Q ? DI.Q.dpr() : null };
      [50, 100, 250, 500, 1000].forEach((t) => { data['frames_over_' + t + 'ms'] = frames.filter((v) => v > t).length; });
      this.event('performance_sample', data); this.frames = null;
    },
  };
})();
