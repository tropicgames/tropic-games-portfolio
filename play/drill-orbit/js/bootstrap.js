// SDK initialization completes before game scripts and assets load.
// Scripts download in parallel (one round trip instead of fifteen) but still run in order (async = false).
(async function () {
  const loading = document.getElementById('loading');
  try {
    await window.drillBridgeReady;
    const names = ['core', 'data', 'save', 'analytics', 'audio', 'icons', 'drillart', 'particles', 'coinfx', 'world', 'leaderboard', 'ads', 'game', 'abilities', 'surface', 'ui', 'platform', 'main'];
    await Promise.all(names.map((name) => new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'js/' + name + '.js'; script.async = false;
      script.onload = resolve; script.onerror = reject;
      document.body.appendChild(script);
    })));
  } catch (error) {
    loading.textContent = 'Unable to load the game. Please check your connection and reload.';
    try { bridge.analytics.send('loading_failed', { stage: 'scripts', ms: Math.round(performance.now()) }); } catch (e) { /* no Bridge either */ }
  }
})();
