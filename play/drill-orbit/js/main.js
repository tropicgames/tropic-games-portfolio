// DRILL ORBIT — bootstrap + input wiring
(async function () {
  const DI = window.DI;
  try {
  await DI.Platform.init();
  // sounds download in the background: the game must never wait on (or fail because of) an audio file
  DI.Audio.preload().catch(() => {});
  const S = DI.Save.load();
  DI.Save.startAutosave();
  DI.Audio.setSound(S.settings.sound);
  DI.Audio.setMusic(S.settings.music);
  DI.Platform.syncAudio();

  // Block game UI interactions while an ad or the host has paused it.
  for (const type of ['pointerdown', 'click']) document.getElementById('app').addEventListener(type, (event) => {
    // Bridge pauses on window blur (player clicked the portal page, an overlay frame took focus) and
    // resumes only on window focus. Canvas taps call preventDefault, which also stops the browser from
    // focusing the game frame, so without this the game stays frozen however often it is tapped.
    if (type === 'pointerdown' && !document.hasFocus()) { try { window.focus(); } catch (e) { /* host may refuse */ } }
    if (DI.Platform.paused) { event.preventDefault(); event.stopImmediatePropagation(); }
  }, true);
  const canvas = document.getElementById('game');
  DI.Game.init(canvas);
  // quality: the rung this device settled on last time, else a start that suits it; Performance Mode bounds it
  DI.Q.setMode(S.settings.perf);
  DI.Game.setQuality(S.settings.qLevel ?? (S.settings.perf ? DI.Q.LITE : DI.Q.startLevel));
  DI.CoinFX.init();
  DI.UI.init(DI.Game);
  if (S.settings.fps) DI.UI.perfHud(true);

  // Music preference is applied once audio is unlocked by the first gesture
  const unlock = () => {
    DI.Analytics.firstInput();
    DI.Audio.init();
    DI.Audio.setMusic(DI.Save.data.settings.music);
    DI.Audio.setSound(DI.Save.data.settings.sound);
  };
  window.addEventListener('pointerdown', unlock, { once: true });
  window.addEventListener('keydown', unlock, { once: true });

  canvas.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    if (DI.Platform.paused || DI.UI.modalOpen()) return;
    if (DI.Game.state === 'mining' && DI.Game.run && DI.Game.run.dynamite <= 0 && !(DI.Game.run.goldRain > 0)) {
      // dynamite used up: holding the screen now fast-forwards the dig
      DI.Game.setFast(e.pointerId, true);
      try { canvas.setPointerCapture(e.pointerId); } catch (err) { /* pointer already gone */ }
      return;
    }
    DI.Game.input();
  });
  const releaseFast = (e) => DI.Game.setFast(e.pointerId, false);
  canvas.addEventListener('pointerup', releaseFast);
  canvas.addEventListener('pointercancel', releaseFast);
  canvas.addEventListener('lostpointercapture', releaseFast);
  window.addEventListener('blur', () => DI.Game.clearFast());
  const FAST_KEYS = { ArrowDown: true, KeyS: true };
  window.addEventListener('keyup', (e) => { if (FAST_KEYS[e.code]) DI.Game.setFastKey(false); });

  window.addEventListener('keydown', (e) => {
    if (DI.Platform.paused || (e.target && e.target.tagName === 'INPUT')) return;
    if (FAST_KEYS[e.code]) { e.preventDefault(); DI.Game.setFastKey(true); return; }
    if (e.code === 'Space' || e.code === 'Enter') {
      e.preventDefault();
      if (e.repeat) return;
      if (DI.UI.resultsModal) { DI.UI.collect(); return; }
      if (!document.getElementById('jackpot').classList.contains('hidden')) { if (DI.UI.jpReady) DI.UI.hideJackpot(); return; }
      if (DI.UI.modalOpen()) return;
      DI.Game.input();
    }
  });

  window.addEventListener('beforeunload', () => { DI.Game.bankIfRunning(); DI.Save.save(); DI.Platform.flush(); });
  document.addEventListener('contextmenu', (e) => e.preventDefault());
  document.getElementById('loading').remove();
  DI.Game.render();
  DI.UI.offerIdle();
  requestAnimationFrame(() => { DI.Platform.message('game_ready'); DI.Analytics.gameStarted(); });

  // build block textures a few ms at a time so a new zone scrolling into view doesn't hitch
  const warm = Object.keys(DI.BLOCKS).flatMap((id) => [[id, 0], [id, 1]]);
  const warmStep = () => {
    const end = performance.now() + 4;
    while (warm.length && performance.now() < end) {
      const [id, v] = warm.shift();
      DI.Icons.blockSprite(id, v, DI.curWorld(DI.Save.data).tint);
    }
    if (warm.length) setTimeout(warmStep, 50);
  };
  setTimeout(warmStep, 500);
  } catch (error) {
    document.getElementById('loading').textContent = 'Unable to load your game. Please check your connection and reload.';
    try { bridge.analytics.send('loading_failed', { stage: 'init', ms: Math.round(performance.now()), error: String(error && error.message || error).slice(0, 120) }); } catch (e) { /* ignore */ }
  }
})();
