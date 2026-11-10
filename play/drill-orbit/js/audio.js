// Edited Mixkit Foley and designed game cues; see assets/audio/v3/Mixkit-LICENSE.txt.
(function () {
  const DI = window.DI;
  const ROOT = 'assets/audio/v3/';
  // [recording variants, level, shared voice group, cooldown in ms, priority]
  const sounds = {
    click: [['select-click'], .28, 'ui', 70, 1],
    tick: [['select-click'], .12, 'tick', 85, 0],
    lock: [['select-click'], .32, 'ui', 70, 2],
    weak: [['error'], .18, 'grade', 120, 2],
    good: [['select-click'], .27, 'grade', 120, 2],
    perfect: [['success'], .40, 'grade', 120, 3],
    charge: [['charge'], .13, 'charge', 400, 1],
    launch: [['whoosh1'], .45, 'flight', 160, 3],
    whoosh: [['whoosh1'], .22, 'flight', 160, 1],
    boost: [['select-click'], .36, 'flight', 180, 2],
    impact: [['thud'], .45, 'impact', 180, 3],
    mine: [['mine1','mine2','mine3','mine4','mine5'], .30, 'mining', 165, 0],
    mineDirt: [['dirt1','dirt2','dirt3'], .26, 'mining', 165, 0],
    mineIce: [['gem1','gem2','mine3'], .23, 'mining', 165, 0],
    ore: [['mine1','mine2'], .21, 'loot', 125, 1],
    gem: [['gem1','gem2'], .24, 'loot', 160, 1],
    rareFind: [['coin-pickup'], .34, 'rare', 400, 2],
    coin: [['coin-pickup'], .30, 'coin', 180, 1],
    coinTick: [['coin-pickup'], .25, 'coin', 180, 1],
    combo: [['lock'], .18, 'loot', 260, 1],
    chest: [['success'], .33, 'reward', 600, 2],
    discover: [['coin-pickup'], .36, 'rare', 400, 2],
    vein: [['coin-pickup'], .30, 'rare', 400, 2],
    room: [['coin-pickup'], .36, 'rare', 400, 2],
    jackpot: [['coin-pickup'], .40, 'rare', 400, 3],
    milestone: [['success'], .32, 'reward', 600, 2],
    record: [['celebrate'], .40, 'reward', 650, 3],
    zone: [['discovery'], .30, 'reward', 650, 2],
    upgrade: [['success'], .34, 'reward', 500, 2],
    evolve: [['celebrate'], .40, 'reward', 600, 3],
    end: [['thud'], .18, 'impact', 250, 1],
    error: [['error'], .20, 'ui', 180, 1],
    fuel: [['success'], .26, 'reward', 600, 2],
    powerup: [['success'], .30, 'reward', 600, 2],
    explode: [['blast'], .45, 'impact', 200, 3],
    hazard: [['thud'], .27, 'impact', 250, 2],
    splash: [['whoosh2'], .20, 'flight', 220, 1],
    warp: [['whoosh2'], .32, 'flight', 220, 2],
    quake: [['blast'], .35, 'impact', 250, 3],
    critter: [['click'], .17, 'ui', 200, 1],
  };
  let soundOn = true, musicOn = true, muted = true, unlocked = false;
  const pools = {}, lastGroup = {}, lastVariant = {}, playing = new Map();
  let quietUntil = 0, speed = 0, motorOn = false, grinding = true, motorStep = -1;
  const music = new Audio(ROOT + 'music.mp3'); music.loop = true; music.volume = .30;
  // Sound effects and the motor use Web Audio where available: each <audio> play/seek/pause goes through the
  // browser's media pipeline and stalls the main thread for milliseconds on phones, and mining fires them
  // several times a second (the motor also paused/resumed every time the drill crossed open space).
  // Decoded buffers play as cheap source nodes instead. <audio> elements remain the fallback.
  const AC = window.AudioContext || window.webkitAudioContext;
  const ctx = AC ? (() => { try { return new AC(); } catch (e) { return null; } })() : null;
  const sfx = ctx ? ctx.createGain() : null, buffers = {};
  if (sfx) sfx.connect(ctx.destination);
  let motorNode = null, motorGain = null;
  const motor = ctx ? null : new Audio(ROOT + 'motor.mp3');
  if (motor) { motor.loop = true; motor.volume = .22; }
  const audible = () => unlocked && soundOn && !muted;
  function safePlay(audio) { const promise = audio.play(); if (promise) promise.catch(() => playing.delete(audio)); }
  function stop(voice) {
    if (voice.node) { try { voice.node.stop(); } catch (e) { /* already ended */ } }
    else { voice.pause(); voice.currentTime = 0; }
    playing.delete(voice);
  }
  function syncMotor() {
    const on = audible() && motorOn;
    if (ctx) {
      // the loop keeps running through open space; only its gain drops, so nothing restarts per block
      if (on && !motorNode && buffers.motor) {
        motorGain = ctx.createGain(); motorGain.connect(sfx);
        motorNode = ctx.createBufferSource(); motorNode.buffer = buffers.motor; motorNode.loop = true;
        motorNode.connect(motorGain); motorNode.start();
        motorStep = -1;
      } else if (!on && motorNode) {
        try { motorNode.stop(); } catch (e) { /* ignore */ }
        motorNode = null; motorGain = null;
      }
      if (motorGain) motorGain.gain.setTargetAtTime(grinding ? .22 + Math.max(0, motorStep) * .002 : 0, ctx.currentTime, .03);
      return;
    }
    if (on && grinding) { if (motor.paused) safePlay(motor); } else motor.pause();
  }
  function sync() {
    if (unlocked && musicOn && !muted) { if (music.paused) safePlay(music); } else music.pause();
    if (ctx && unlocked) { if (muted) ctx.suspend().catch(() => {}); else ctx.resume().catch(() => {}); }
    syncMotor();
    if (muted || !soundOn) Array.from(playing.keys()).forEach(stop);
  }
  DI.Audio = {
    get webAudio() { return !!ctx; },
    async preload() {
      const files = new Set(Object.values(sounds).flatMap((s) => s[0]));
      if (!ctx) {
        for (const file of files) {
          pools[file] = Array.from({ length: 2 }, () => {
            const audio = new Audio(ROOT + file + '.mp3'); audio.preload = 'auto'; audio.file = file;
            audio.addEventListener('ended', () => playing.delete(audio)); return audio;
          });
        }
      }
      // decode (or just warm the cache); a missing or slow file only means that sound plays late (never blocks the game)
      await Promise.allSettled([...files, 'music', 'motor'].map((name) =>
        fetch(ROOT + name + '.mp3').then((r) => { if (!r.ok) throw Error('Audio unavailable'); return r.arrayBuffer(); })
          .then((data) => {
            if (!ctx || name === 'music') return;
            return new Promise((resolve, reject) => ctx.decodeAudioData(data, resolve, reject)).then((b) => { buffers[name] = b; if (name === 'motor') syncMotor(); });
          })));
    },
    init() { unlocked = true; sync(); },
    play(name) {
      if (!audible() || !sounds[name]) return;
      const [variants, level, group, cooldown, priority] = sounds[name];
      const now = performance.now();
      if (now - (lastGroup[group] ?? -Infinity) < cooldown || (priority < 2 && now < quietUntil)) return;
      // The supplied coin cue has a musical tail: let it finish instead of stacking/restarting it.
      if (variants[0] === 'coin-pickup' && Array.from(playing).some(([voice, info]) => info.file === 'coin-pickup' && (voice.node || (!voice.paused && !voice.ended)))) return;
      // Keep important cues clear instead of stacking a wall of mining/coin sounds.
      if (priority >= 2) {
        for (const [voice, info] of playing) if (info.priority < priority || info.group === group) stop(voice);
        quietUntil = now + (group === 'reward' ? 280 : 100);
      }
      if (playing.size >= 6) {
        const low = Array.from(playing).find(([, info]) => info.priority < priority);
        if (!low) return; stop(low[0]);
      }
      let index = Math.floor(Math.random() * variants.length);
      if (variants.length > 1 && index === lastVariant[group]) index = (index + 1) % variants.length;
      const file = variants[index];
      // Tiny variations in recorded impacts keep fast digging from sounding mechanical.
      const rate = group === 'mining' ? .97 + Math.random() * .06 + speed * .001 : 1;
      if (ctx) {
        const buf = buffers[file]; if (!buf) return;
        lastGroup[group] = now; lastVariant[group] = index;
        const node = ctx.createBufferSource(), gain = ctx.createGain();
        node.buffer = buf; node.playbackRate.value = rate; gain.gain.value = level;
        node.connect(gain); gain.connect(sfx);
        const voice = { node };
        node.onended = () => playing.delete(voice);
        playing.set(voice, { priority, group, file });
        node.start();
        return;
      }
      const pool = pools[file]; if (!pool) return;
      const audio = pool.find((a) => a.paused || a.ended); if (!audio) return;
      lastGroup[group] = now; lastVariant[group] = index;
      audio.currentTime = 0; audio.volume = level;
      audio.playbackRate = rate;
      playing.set(audio, { priority, group, file }); safePlay(audio);
    },
    // a sprung "boing": a rising tone with a fast wobble, one step higher for each bounce in a chain
    boing(chain = 0) {
      if (!audible() || !ctx) return;
      const now = ctx.currentTime, base = 150 * Math.pow(1.19, Math.min(chain, 4));
      const osc = ctx.createOscillator(), gain = ctx.createGain(), lfo = ctx.createOscillator(), depth = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(base, now);
      osc.frequency.exponentialRampToValueAtTime(base * 3.2, now + .2);
      lfo.frequency.value = 26; depth.gain.setValueAtTime(base * .5, now); depth.gain.linearRampToValueAtTime(0, now + .3);
      gain.gain.setValueAtTime(.0001, now);
      gain.gain.exponentialRampToValueAtTime(.3, now + .012);
      gain.gain.exponentialRampToValueAtTime(.0001, now + .32);
      lfo.connect(depth); depth.connect(osc.frequency); osc.connect(gain); gain.connect(sfx);
      osc.start(now); lfo.start(now); osc.stop(now + .34); lfo.stop(now + .34);
    },
    // Only the recorded motor hum loops; percussive block hits remain one-shots.
    motorStart() { motorOn = true; grinding = true; syncMotor(); },
    motorSet(value, solid = true) {
      speed = DI.U.clamp(value || 0, 0, 40);
      // called every frame: only touch the sound when the rounded speed or the grinding state changes
      const step = Math.round(speed);
      if (step !== motorStep) {
        motorStep = step;
        if (motorNode) motorNode.playbackRate.setTargetAtTime(.92 + step * .003, ctx.currentTime, .05);
        if (motorGain && grinding) motorGain.gain.setTargetAtTime(.22 + step * .002, ctx.currentTime, .05);
        if (motor) { motor.playbackRate = .92 + step * .003; motor.volume = .22 + step * .002; }
      }
      if (solid !== grinding) { grinding = solid; syncMotor(); }
    },
    motorStop() {
      motorOn = false; speed = 0;
      if (motor) { motor.pause(); motor.currentTime = 0; } else syncMotor();
      for (const [voice, info] of playing) if (info.group === 'mining') stop(voice);
    },
    setSound(on) { soundOn = !!on; sync(); },
    setMusic(on) { musicOn = !!on; sync(); },
    setPlatformMuted(on) { muted = !!on; sync(); },
    get ready() { return unlocked; },
  };
})();
