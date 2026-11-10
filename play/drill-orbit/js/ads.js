// One ad session owns its input lock. Reward confirmation and ad dismissal
// are separate events: never resume game UI while the video is still open.
(function () {
  const DI = window.DI;
  const OPEN_TIMEOUT = 12000;
  const MAX_AD_TIME = 150000;
  const running = ['loading', 'opened', 'rewarded'];
  const BANNER_MIN_H = 560; // below this the start screen has no room for one
  DI.Ads = {
    busy: false,
    lastShown: false, // the last ad actually opened on screen (an interstitial resolves false either way)
    get supported() { return DI.Platform.rewardedSupported; },
    // Sticky banner: start screen only, never over a window, a full-screen ad or the aiming meter.
    // Most hosts have none (Playgama's own site included), and then nothing here runs or moves the layout.
    bannerOn: false,
    setBanner(on) { this.bannerOn = on; this.syncBanner(); },
    syncBanner() {
      const ad = bridge.advertisement;
      if (!ad.isBannerSupported) return;
      if (!this.bannerHooked) {
        this.bannerHooked = true;
        ad.on(bridge.EVENT_NAME.BANNER_STATE_CHANGED, () => this.syncBanner());
        window.addEventListener('resize', () => this.syncBanner());
      }
      const S = DI.Save.data;
      const want = this.bannerOn && !this.busy && S.runs > 0 && window.innerHeight >= BANNER_MIN_H && !document.getElementById('modals').children.length;
      // one request per visit to the start screen: a failed banner is not retried until the player comes back
      if (want && !this.bannerAsked && ad.bannerState !== 'shown' && ad.bannerState !== 'loading') { this.bannerAsked = true; ad.showBanner('bottom', 'start_screen'); }
      // (Bridge ignores a hide while loading: this runs again once that banner has shown)
      else if (!want && ad.bannerState === 'shown') ad.hideBanner();
      if (!want) this.bannerAsked = false;
      // the upgrade row moves up to make room, so a banner never covers a control (requirement 2.3.2)
      document.body.classList.toggle('has-banner', want && (ad.bannerState === 'shown' || ad.bannerState === 'loading'));
    },
    showRewarded(placement) { return this.show('rewarded', placement); },
    showInterstitial(placement = 'run_complete') { return this.show('interstitial', placement); },
    async show(type, placement) {
      const ad = bridge.advertisement;
      if (this.busy || !(type === 'rewarded' ? ad.isRewardedSupported : ad.isInterstitialSupported)) return false;
      if (running.includes(ad.interstitialState) || running.includes(ad.rewardedState)) return false;
      this.busy = true;
      this.syncBanner();
      this.lastShown = false;
      DI.Platform.pause('ad_request', true);
      try {
        const ok = await new Promise((resolve) => {
          const event = type === 'rewarded' ? bridge.EVENT_NAME.REWARDED_STATE_CHANGED : bridge.EVENT_NAME.INTERSTITIAL_STATE_CHANGED;
          const stateKey = type === 'rewarded' ? 'rewardedState' : 'interstitialState';
          let earned = false, done = false, timer = null, poll = null, observed = false, lastState = null;
          const finish = (value) => {
            if (done) return;
            done = true;
            clearTimeout(timer); clearInterval(poll);
            ad.off(event, onState);
            resolve(value);
          };
          const onState = (state) => {
            if (done || state === lastState) return;
            lastState = state;
            if (state === 'loading') observed = true;
            if (state === 'opened') {
              observed = true; clearTimeout(timer); this.lastShown = true;
              timer = setTimeout(() => finish(earned), MAX_AD_TIME);
            }
            if (state === 'rewarded') {
              // Record entitlement, but keep waiting for dismissal. Bridge 2.4
              // still considers the ad open and paused in the rewarded state.
              observed = true; earned = true;
            }
            if (state === 'closed' || state === 'failed') finish(earned);
          };
          ad.on(event, onState);
          timer = setTimeout(() => finish(false), OPEN_TIMEOUT);
          // Public state getters repair missing callbacks without granting a
          // reward on close. Each request has its own listeners and timers.
          poll = setInterval(() => {
            const state = ad[stateKey];
            if (observed || running.includes(state)) onState(state);
          }, 250);
          try {
            const request = type === 'rewarded' ? ad.showRewarded(placement) : ad.showInterstitial(placement);
            Promise.resolve(request).catch(() => finish(earned));
          } catch (e) { finish(false); }
        });
        if (DI.Analytics) DI.Analytics.track('ad_result', { type, placement: placement || null, result: ok ? 'earned' : !this.lastShown ? 'not_shown' : type === 'rewarded' ? 'closed_early' : 'shown' });
        return ok;
      } finally {
        this.busy = false;
        DI.Platform.pause('ad_request', false);
        DI.Platform.afterAd();
        this.syncBanner();
      }
    },
  };
})();
