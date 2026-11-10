// DRILL ORBIT — game data: zones, blocks, discoveries, milestones, events, economy formulas
(function () {
  const G = typeof window !== 'undefined' ? window : globalThis;
  const DI = G.DI;
  const U = DI.U;

  // ---------------------------------------------------------------- blocks
  // style: soil | rock | ore | gem | ice | lava | alien
  DI.BLOCKS = {
    dirt:          { name: 'Dirt',          hard: 1.0, value: 1,   style: 'soil', c1: '#8a5a35', c2: '#6e4427' },
    stone:         { name: 'Stone',         hard: 1.8, value: 2,   style: 'rock', c1: '#8f8b86', c2: '#6f6b67' },
    coal:          { name: 'Coal',          hard: 1.4, value: 3,   style: 'ore',  c1: '#7a746e', c2: '#5d5853', ore: '#1f1d1d', res: true },
    copper:        { name: 'Copper',        hard: 2.2, value: 7,  style: 'ore',  c1: '#867f78', c2: '#69625c', ore: '#ec8a45', res: true },

    cave_rock:     { name: 'Cave Rock',     hard: 1.0, value: 1,   style: 'rock', c1: '#4f4468', c2: '#3c3352' },
    geode:         { name: 'Geode Rock',    hard: 1.5, value: 2,   style: 'rock', c1: '#665689', c2: '#4e4170' },
    emerald:       { name: 'Emerald',       hard: 1.6, value: 14,  style: 'gem',  c1: '#4f4468', c2: '#3c3352', ore: '#2ee87a', res: true },
    ruby:          { name: 'Ruby',          hard: 1.9, value: 20,  style: 'gem',  c1: '#4f4468', c2: '#3c3352', ore: '#ff3b5c', res: true },
    sapphire:      { name: 'Sapphire',      hard: 2.2, value: 28,  style: 'gem',  c1: '#4f4468', c2: '#3c3352', ore: '#3d82ff', res: true },
    diamond:       { name: 'Diamond',       hard: 2.8, value: 55,  style: 'gem',  c1: '#4f4468', c2: '#3c3352', ore: '#c8f7ff', res: true, glow: '#bff6ff' },

    permafrost:    { name: 'Permafrost',    hard: 1.0, value: 1,   style: 'soil', c1: '#7d97ad', c2: '#647f96' },
    ice:           { name: 'Ice',           hard: 1.4, value: 2,   style: 'ice',  c1: '#a9dcf5', c2: '#86c4e6' },
    ice_crystal:   { name: 'Ice Crystal',   hard: 1.6, value: 12,  style: 'gem',  c1: '#7d97ad', c2: '#647f96', ore: '#8ff0ff', res: true },
    frostite:      { name: 'Frostite',      hard: 2.0, value: 20,  style: 'ore',  c1: '#7d97ad', c2: '#647f96', ore: '#2fd8c0', res: true },
    glacial_pearl: { name: 'Glacial Pearl', hard: 2.6, value: 50,  style: 'gem',  c1: '#86c4e6', c2: '#6aaed6', ore: '#f4fbff', res: true, glow: '#e0f6ff' },

    basalt:        { name: 'Basalt',        hard: 1.0, value: 1,   style: 'rock', c1: '#4a3333', c2: '#382525' },
    obsidian:      { name: 'Obsidian',      hard: 1.7, value: 2,   style: 'lava', c1: '#2a1c33', c2: '#1d1324' },
    sulfur:        { name: 'Volcanic Sulfur', hard: 1.5, value: 10, style: 'ore', c1: '#4a3333', c2: '#382525', ore: '#f5d33b', res: true },
    gold:          { name: 'Gold',          hard: 2.0, value: 16,  style: 'ore',  c1: '#5a4535', c2: '#46352a', ore: '#ffcc33', res: true, glow: '#ffd75a' },
    magma_crystal: { name: 'Magma Crystal', hard: 2.2, value: 26,  style: 'gem',  c1: '#4a3333', c2: '#382525', ore: '#ff5a1f', res: true, glow: '#ff7a2a' },
    fire_opal:     { name: 'Fire Opal',     hard: 2.8, value: 60,  style: 'gem',  c1: '#2a1c33', c2: '#1d1324', ore: '#ffa04a', res: true, glow: '#ffb35a' },

    alien_rock:    { name: 'Alien Rock',    hard: 1.0, value: 1,   style: 'alien', c1: '#3a2466', c2: '#2a1a4d' },
    void_stone:    { name: 'Void Stone',    hard: 1.7, value: 2,   style: 'alien', c1: '#1f1640', c2: '#150e2e' },
    xenite:        { name: 'Xenite',        hard: 1.6, value: 15,  style: 'ore',  c1: '#3a2466', c2: '#2a1a4d', ore: '#86ff5a', res: true, glow: '#86ff5a' },
    prismite:      { name: 'Prismite',      hard: 2.1, value: 28,  style: 'gem',  c1: '#3a2466', c2: '#2a1a4d', ore: '#ff6bf0', res: true, glow: '#ff8bf4' },
    star_shard:    { name: 'Star Shard',    hard: 2.6, value: 48,  style: 'gem',  c1: '#1f1640', c2: '#150e2e', ore: '#fff38a', res: true, glow: '#fff38a' },
    singularium:   { name: 'Singularium',   hard: 3.2, value: 110, style: 'gem',  c1: '#1f1640', c2: '#150e2e', ore: '#b46bff', res: true, glow: '#c78bff' },

    meteorite:     { name: 'Meteorite',     hard: 2.0, value: 18,  style: 'ore',  c1: '#3b2f2f', c2: '#2a2121', ore: '#ff6a3d', res: true, glow: '#ff8a4d' },
    mud:           { name: 'Clay Mud',      hard: 2.6, value: 6,   style: 'soil', c1: '#7a5234', c2: '#5e3d24' },
    crust:         { name: 'World Crust',   hard: 6.0, value: 80,  style: 'alien', c1: '#3a1a6a', c2: '#1a0a3a' },
    bedrock:       { name: 'Bedrock',       hard: 5.0, value: 30,  style: 'rock', c1: '#3c3b48', c2: '#24232e' },
  };
  for (const k in DI.BLOCKS) {
    const b = DI.BLOCKS[k]; b.id = k;
    // Visual rarity within each region, independent of world payout multipliers.
    b.rarity = !b.res ? 0 : b.value >= 45 ? 3 : b.glow ? 2 : b.style === 'gem' ? 1 : 0;
  }

  // ---------------------------------------------------------------- collectibles
  // shape is used by icon renderer
  DI.ITEMS = {
    // fossils
    trilobite:       { name: 'Trilobite',        cat: 'fossils',   shape: 'shell',   c: '#c9a77c' },
    ammonite:        { name: 'Ammonite',         cat: 'fossils',   shape: 'spiral',  c: '#d8b98f' },
    raptor_claw:     { name: 'Raptor Claw',      cat: 'fossils',   shape: 'claw',    c: '#e8dcc3' },
    trex_skull:      { name: 'T-Rex Skull',      cat: 'fossils',   shape: 'skull',   c: '#efe4cc' },
    amber_beetle:    { name: 'Amber Beetle',     cat: 'fossils',   shape: 'amber',   c: '#ffb02e' },
    crystal_fern:    { name: 'Crystal Fern',     cat: 'fossils',   shape: 'fern',    c: '#7ff0c8' },
    mammoth_tusk:    { name: 'Mammoth Tusk',     cat: 'fossils',   shape: 'tusk',    c: '#f4ecd8' },
    sabertooth:      { name: 'Sabertooth Skull', cat: 'fossils',   shape: 'skull',   c: '#dfe9f2' },
    dragon_bone:     { name: 'Dragon Skeleton',  cat: 'fossils',   shape: 'bone',    c: '#ffcfa0' },
    alien_skull:     { name: 'Alien Skull',      cat: 'fossils',   shape: 'alienskull', c: '#b9ffa0' },
    // artifacts
    ancient_coin:    { name: 'Ancient Coin',     cat: 'artifacts', shape: 'coin',    c: '#e2b33c' },
    clay_pot:        { name: 'Clay Pot',         cat: 'artifacts', shape: 'pot',     c: '#c96a3c' },
    ancient_statue:  { name: 'Ancient Statue',   cat: 'artifacts', shape: 'statue',  c: '#a7c0b5' },
    crystal_skull:   { name: 'Crystal Skull',    cat: 'artifacts', shape: 'skull',   c: '#bfe9ff' },
    viking_helmet:   { name: 'Viking Helmet',    cat: 'artifacts', shape: 'helmet',  c: '#9aa7b3' },
    frozen_crown:    { name: 'Frozen Crown',     cat: 'artifacts', shape: 'crown',   c: '#9fe8ff' },
    golden_idol:     { name: 'Golden Idol',      cat: 'artifacts', shape: 'statue',  c: '#ffcc33' },
    obsidian_mask:   { name: 'Obsidian Mask',    cat: 'artifacts', shape: 'mask',    c: '#5b3a74' },
    ufo_fragment:    { name: 'UFO Fragment',     cat: 'artifacts', shape: 'ufo',     c: '#9de0ff' },
    star_map:        { name: 'Star Map',         cat: 'artifacts', shape: 'tablet',  c: '#7d6bff' },
    // treasures (secret rooms + jackpots)
    pharaoh_mask:    { name: "Pharaoh's Mask",   cat: 'treasures', shape: 'mask',    c: '#ffcc33' },
    royal_scepter:   { name: 'Royal Scepter',    cat: 'treasures', shape: 'scepter', c: '#ff5aa0' },
    yeti_heart:      { name: 'Yeti Heart',       cat: 'treasures', shape: 'heart',   c: '#7fe3ff' },
    dwarf_hammer:    { name: 'Dwarven Hammer',   cat: 'treasures', shape: 'hammer',  c: '#ff8a3c' },
    cosmic_egg:      { name: 'Cosmic Egg',       cat: 'treasures', shape: 'egg',     c: '#c78bff' },
    giant_diamond:   { name: 'Giant Diamond',    cat: 'treasures', shape: 'gem',     c: '#bff6ff', jackpot: true },
    golden_vault:    { name: 'Golden Vault',     cat: 'treasures', shape: 'vault',   c: '#ffcc33', jackpot: true },
    ancient_treasure:{ name: 'Ancient Treasure', cat: 'treasures', shape: 'chest',   c: '#e2b33c', jackpot: true },
    alien_core:      { name: 'Alien Core',       cat: 'treasures', shape: 'core',    c: '#86ff5a', jackpot: true },
    // ---- planet discoveries (only found on their own world)
    mars_microbe:     { name: 'Martian Microbe',     cat: 'fossils',   shape: 'shell',      c: '#e08a5a', world: 'mars' },
    dust_wyrm:        { name: 'Dust Wyrm Bones',     cat: 'fossils',   shape: 'bone',       c: '#f0b080', world: 'mars' },
    rover_wheel:      { name: 'Old Rover Wheel',     cat: 'artifacts', shape: 'coin',       c: '#a8aeb8', world: 'mars' },
    red_monolith:     { name: 'Red Monolith',        cat: 'artifacts', shape: 'tablet',     c: '#c84a2a', world: 'mars' },
    olympus_crown:    { name: 'Olympus Crown',       cat: 'treasures', shape: 'crown',      c: '#ff7a3a', world: 'mars' },
    sand_crab:        { name: 'Sand Crab',           cat: 'critters',  shape: 'blob',       c: '#ff8a4a', world: 'mars' },
    frost_kraken:     { name: 'Frost Kraken Shell',  cat: 'fossils',   shape: 'spiral',     c: '#8ff0ff', world: 'glacia' },
    ice_dragon_tooth: { name: 'Ice Dragon Tooth',    cat: 'fossils',   shape: 'claw',       c: '#e0f6ff', world: 'glacia' },
    snow_globe:       { name: 'Ancient Snow Globe',  cat: 'artifacts', shape: 'egg',        c: '#bfeaff', world: 'glacia' },
    aurora_lantern:   { name: 'Aurora Lantern',      cat: 'artifacts', shape: 'pot',        c: '#7dffd0', world: 'glacia' },
    polar_star:       { name: 'Polar Star',          cat: 'treasures', shape: 'gem',        c: '#e8faff', world: 'glacia' },
    ice_slime:        { name: 'Ice Slime',           cat: 'critters',  shape: 'blob',       c: '#8ff0ff', world: 'glacia' },
    phoenix_fern:     { name: 'Phoenix Fern',        cat: 'fossils',   shape: 'fern',       c: '#ff7a2a', world: 'volcanis' },
    titan_skull:      { name: 'Magma Titan Skull',   cat: 'fossils',   shape: 'skull',      c: '#ff8a5a', world: 'volcanis' },
    ember_mask:       { name: 'Ember Mask',          cat: 'artifacts', shape: 'mask',       c: '#ff9a2e', world: 'volcanis' },
    obsidian_blade:   { name: 'Obsidian Blade',      cat: 'artifacts', shape: 'scepter',    c: '#5a3a80', world: 'volcanis' },
    heart_of_fire:    { name: 'Heart of Fire',       cat: 'treasures', shape: 'heart',      c: '#ff3a1a', world: 'volcanis' },
    lava_golem:       { name: 'Lava Golem',          cat: 'critters',  shape: 'mole',       c: '#ff6a2a', world: 'volcanis' },
    star_jelly:       { name: 'Star Jelly',          cat: 'fossils',   shape: 'amber',      c: '#c86bff', world: 'nebula' },
    void_serpent:     { name: 'Void Serpent',        cat: 'fossils',   shape: 'bone',       c: '#b06bff', world: 'nebula' },
    warp_key:         { name: 'Warp Key',            cat: 'artifacts', shape: 'wrench',     c: '#86ff5a', world: 'nebula' },
    nebula_orb:       { name: 'Nebula Orb',          cat: 'artifacts', shape: 'core',       c: '#ff6bf0', world: 'nebula' },
    galaxy_crown:     { name: 'Galaxy Crown',        cat: 'treasures', shape: 'crown',      c: '#c78bff', world: 'nebula' },
    nebula_squid:     { name: 'Nebula Squid',        cat: 'critters',  shape: 'bat',        c: '#ff8bf4', world: 'nebula' },
    time_fossil:      { name: 'Time Fossil',         cat: 'fossils',   shape: 'spiral',     c: '#ffe066', world: 'core' },
    quantum_skull:    { name: 'Quantum Skull',       cat: 'fossils',   shape: 'alienskull', c: '#fff6c8', world: 'core' },
    event_horizon:    { name: 'Event Horizon Disc',  cat: 'artifacts', shape: 'ufo',        c: '#ffe066', world: 'core' },
    genesis_tablet:   { name: 'Genesis Tablet',      cat: 'artifacts', shape: 'tablet',     c: '#ffffff', world: 'core' },
    singularity_seed: { name: 'Singularity Seed',    cat: 'treasures', shape: 'egg',        c: '#ffe066', world: 'core' },
    gravity_blob:     { name: 'Gravity Blob',        cat: 'critters',  shape: 'blob',       c: '#fff38a', world: 'core' },
    // critters (living things the drill disturbs; they pop out and run off)
    mole:            { name: 'Mole',             cat: 'critters',  shape: 'mole',    c: '#8a6a5a' },
    golden_mole:     { name: 'Golden Mole',      cat: 'critters',  shape: 'mole',    c: '#ffcc33' },
    crystal_bat:     { name: 'Crystal Bat',      cat: 'critters',  shape: 'bat',     c: '#c78bff' },
    snow_penguin:    { name: 'Cave Penguin',     cat: 'critters',  shape: 'penguin', c: '#2a3550' },
    fire_salamander: { name: 'Fire Salamander',  cat: 'critters',  shape: 'salamander', c: '#ff6a2a' },
    alien_blob:      { name: 'Alien Blob',       cat: 'critters',  shape: 'blob',    c: '#86ff5a' },
  };
  for (const k in DI.ITEMS) DI.ITEMS[k].id = k;
  // discoveries by planet (Earth uses the zone pools)
  DI.worldItems = (worldId) => {
    const by = (cat) => Object.values(DI.ITEMS).filter((i) => i.world === worldId && i.cat === cat).map((i) => i.id);
    const fossils = by('fossils');
    if (!fossils.length) return null;
    return { fossils, artifacts: by('artifacts'), room: by('treasures')[0], critter: by('critters')[0] };
  };

  DI.COLLECTIONS = [
    { id: 'resources', name: 'Resources', reward: 800 },
    { id: 'fossils',   name: 'Fossils',   reward: 10000 },
    { id: 'artifacts', name: 'Artifacts', reward: 16000 },
    { id: 'treasures', name: 'Treasures', reward: 100000 },
    { id: 'critters',  name: 'Critters',  reward: 8000 },
  ];

  // ---------------------------------------------------------------- zones
  DI.ZONES = [
    {
      id: 'dirt', name: 'Dirt Depths', start: 0, blockM: 2, hard: 1, value: 1,
      tunnel: '#24150c', fog: '#140a04', accent: '#ffb35a', light: 'rgba(255,200,130,',
      fill: [['dirt', 52], ['stone', 28], ['coal', 12], ['copper', 8]],
      side: [['dirt', 60], ['stone', 30], ['coal', 6], ['copper', 4]],
      vein: [['copper', 6], ['coal', 3], ['gold', 1]],
      fossils: ['trilobite', 'ammonite', 'raptor_claw', 'trex_skull'],
      artifacts: ['ancient_coin', 'clay_pot'],
      critter: 'mole', room: 'pharaoh_mask', jackpots: ['golden_vault', 'ancient_treasure'],
      chest: { name: 'Wooden Chest', c1: '#9a5b2c', c2: '#e2b33c' },
    },
    {
      id: 'crystal', name: 'Crystal Caverns', start: 200, blockM: 4, hard: 3.2, value: 5,
      tunnel: '#160f26', fog: '#0b0716', accent: '#d48bff', light: 'rgba(210,160,255,',
      fill: [['cave_rock', 46], ['geode', 24], ['emerald', 12], ['ruby', 9], ['sapphire', 6], ['diamond', 3]],
      side: [['cave_rock', 56], ['geode', 30], ['emerald', 6], ['ruby', 4], ['sapphire', 3], ['diamond', 1]],
      vein: [['emerald', 5], ['ruby', 4], ['sapphire', 3], ['diamond', 2]],
      fossils: ['amber_beetle', 'crystal_fern'],
      artifacts: ['ancient_statue', 'crystal_skull'],
      critter: 'crystal_bat', room: 'royal_scepter', jackpots: ['giant_diamond', 'golden_vault', 'ancient_treasure'],
      chest: { name: 'Silver Chest', c1: '#8d93a8', c2: '#d48bff' },
    },
    {
      id: 'frozen', name: 'Frozen Underground', start: 800, blockM: 6, hard: 13, value: 52,
      tunnel: '#0e2233', fog: '#06121c', accent: '#8ff0ff', light: 'rgba(170,235,255,',
      fill: [['permafrost', 44], ['ice', 30], ['ice_crystal', 13], ['frostite', 9], ['glacial_pearl', 4]],
      side: [['permafrost', 52], ['ice', 36], ['ice_crystal', 7], ['frostite', 4], ['glacial_pearl', 1]],
      vein: [['ice_crystal', 5], ['frostite', 4], ['glacial_pearl', 2]],
      fossils: ['mammoth_tusk', 'sabertooth'],
      artifacts: ['viking_helmet', 'frozen_crown'],
      critter: 'snow_penguin', room: 'yeti_heart', jackpots: ['giant_diamond', 'ancient_treasure', 'golden_vault'],
      chest: { name: 'Frost Chest', c1: '#4f8fb8', c2: '#bff6ff' },
    },
    {
      id: 'magma', name: 'Magma Core', start: 2000, blockM: 10, hard: 50, value: 240,
      tunnel: '#2a0d06', fog: '#160402', accent: '#ff7a2a', light: 'rgba(255,140,60,',
      fill: [['basalt', 42], ['obsidian', 26], ['sulfur', 12], ['gold', 10], ['magma_crystal', 7], ['fire_opal', 3]],
      side: [['basalt', 50], ['obsidian', 34], ['sulfur', 7], ['gold', 5], ['magma_crystal', 3], ['fire_opal', 1]],
      vein: [['gold', 6], ['magma_crystal', 4], ['fire_opal', 2]],
      fossils: ['dragon_bone'],
      artifacts: ['golden_idol', 'obsidian_mask'],
      critter: 'fire_salamander', room: 'dwarf_hammer', jackpots: ['golden_vault', 'giant_diamond', 'ancient_treasure'],
      chest: { name: 'Golden Chest', c1: '#c98a1c', c2: '#ffe27a' },
    },
    {
      id: 'alien', name: 'Alien Depths', start: 4500, blockM: 15, hard: 200, value: 1500,
      tunnel: '#120a24', fog: '#070312', accent: '#86ff5a', light: 'rgba(150,255,140,',
      fill: [['alien_rock', 42], ['void_stone', 26], ['xenite', 14], ['prismite', 10], ['star_shard', 6], ['singularium', 2]],
      side: [['alien_rock', 50], ['void_stone', 34], ['xenite', 8], ['prismite', 5], ['star_shard', 2], ['singularium', 1]],
      vein: [['xenite', 5], ['prismite', 4], ['star_shard', 3], ['singularium', 1]],
      fossils: ['alien_skull'],
      artifacts: ['ufo_fragment', 'star_map'],
      critter: 'alien_blob', room: 'cosmic_egg', jackpots: ['alien_core', 'alien_core', 'giant_diamond'],
      chest: { name: 'Cosmic Chest', c1: '#3a2466', c2: '#86ff5a' },
    },
  ];
  DI.ZONES.forEach((z, i) => {
    z.index = i;
    const next = DI.ZONES[i + 1];
    z.end = next ? next.start : Infinity;
    z.rows = next ? Math.round((next.start - z.start) / z.blockM) : Infinity;
  });
  {
    let acc = 0;
    for (const z of DI.ZONES) { z.startRow = acc; acc += z.rows; }
  }

  // ---------------------------------------------------------------- underground specials
  // Rolled per shaft row in world.js: [chance per row, first row, first zone index]
  DI.SPECIALS = {
    chest:   { roll: [0.012, 3, 0] },
    relic:   { roll: [0.008, 3, 0] },
    vein:    { roll: [0.030, 3, 0] },
    room:    { roll: [0.0022, 13, 0], struct: true },
    jackpot: { roll: [0.0012, 9, 0] },
    turbo:   { roll: [0.006, 6, 0],  name: 'Turbo Crystal',   icon: 'bolt|#3ff2ff',    color: '#3ff2ff', power: true },
    magnet:  { roll: [0.005, 6, 0],  name: 'Ore Magnet',      icon: 'magnet|#ff4f6d',  color: '#ff6b8a', power: true },
    star:    { roll: [0.005, 6, 0],  name: 'Coin Star',       icon: 'star|#ffcc33',    color: '#ffcc33', power: true },
    tnt:     { roll: [0.007, 4, 0],  name: 'TNT Crate',       icon: 'tnt|#e8402a',     color: '#ff7a3a' },
    mystery: { roll: [0.005, 8, 0],  name: 'Mystery Box',     icon: 'mystery|#b06bff', color: '#c78bff', power: true },
    bag:     { roll: [0.008, 3, 0],  name: 'Lost Coin Bag',   icon: 'bag|#c98a4a',     color: '#ffcc33' },
    geode:   { roll: [0.006, 8, 0],  name: 'Geode',           icon: 'geode|#d48bff',   color: '#d48bff' },
    oil:     { roll: [0.003, 15, 0], name: 'Oil Strike',      icon: 'drop|#2a2a38',    color: '#c9a0ff' },
    quake:   { roll: [0.003, 12, 0], name: 'Earthquake',      icon: 'quake|#ffb35a',   color: '#ffb35a' },
    critter: { roll: [0.006, 5, 0],  name: 'Critter',         color: '#7dff5a' },
    portal:  { roll: [0.0025, 10, 1], name: 'Warp Portal',    icon: 'portal|#c06bff',  color: '#c06bff' },
    seam:    { roll: [0.004, 8, 0],  name: 'Ore Seam',        color: '#ffcc33' },
    gas:     { roll: [0.005, 12, 0], name: 'Gas Pocket',      icon: 'gas|#9be04a',     color: '#9be04a', hazard: true },
    lava:    { roll: [0.005, 10, 3], name: 'Lava Pocket',     icon: 'lava|#ff6a1f',    color: '#ff6a1f', hazard: true },
    bedrock: { roll: [0.004, 15, 0], name: 'Bedrock Slab',    color: '#a9a6c0' },
    cave:    { roll: [0.006, 10, 0], name: 'Hidden Cave',     struct: true, color: '#9fe0ff' },
    lake:    { roll: [0.004, 14, 0], name: 'Underground Lake', struct: true, color: '#3fb6ff' },
    mine:    { roll: [0.0018, 20, 0], name: 'Abandoned Mine', struct: true, color: '#ffb35a' },
    // zone: only rolls in that zone. side: sits off the shaft (dynamite target)
    goldrain:  { roll: [0.004, 8, 0],   name: 'Gold Rain',          icon: 'coin|#ffcc33',   color: '#ffcc33' },
    door:      { roll: [0.003, 10, 0],  name: 'Mysterious Door',    icon: 'door|#7a4ab0',   color: '#c9a0ff', side: true },
    junk:      { roll: [0.008, 4, 0],   name: 'Buried Junk',        icon: 'car|#d0533a',    color: '#c9a77c', zone: 'dirt' },
    echo:      { roll: [0.006, 5, 1],   name: 'Echo Crystal',       icon: 'gem|#e0b0ff',    color: '#e0b0ff', zone: 'crystal' },
    geyser:    { roll: [0.005, 5, 3],   name: 'Magma Geyser',       icon: 'lava|#ff9a2e',   color: '#ff9a2e', zone: 'magma' },
    goldriver: { roll: [0.003, 5, 3],   name: 'Molten Gold River',  color: '#ffb020', zone: 'magma' },
    hive:      { roll: [0.005, 5, 4],   name: 'Alien Hive',         icon: 'hive|#86ff5a',   color: '#86ff5a', zone: 'alien' },
    clover:    { roll: [0.004, 6, 0],   name: 'Lucky Clover',       icon: 'clover|#5ccf3c', color: '#7dff5a' },
    mud:       { roll: [0.004, 6, 0],   name: 'Mud Pocket',         struct: true, color: '#b07a4a' },
    dig:       { roll: [0.0015, 12, 0], name: 'Dinosaur Dig Site',  struct: true, color: '#efe4cc' },
    crater:    { roll: [0.0025, 15, 0], name: 'Meteor Crater',      struct: true, color: '#ff6a3d' },
    city:      { roll: [0.0012, 25, 0], name: 'Underground City',   struct: true, color: '#ffcc33' },
    bone:      { name: 'Dinosaur Bone', icon: 'bone|#f4ecd8', color: '#efe4cc' }, // placed by dig sites only
  };

  // ---------------------------------------------------------------- worlds (planets)
  // Each world is a tougher, richer copy of the dig. Upgrades and collections carry over.
  // hard / value multiply every block; unlock = depth needed in the PREVIOUS world.
  DI.WORLD_HARD_BASE = 60;
  DI.WORLD_HARD_STEP = 20;
  // value trails what the extra hardness costs in upgrades (~1.40× per level, ~21 power levels per ×20 hardness),
  // so every planet after Earth takes about 40 minutes of steady upgrades (tuned with a full simulated playthrough)
  DI.WORLD_VALUE_BASE = 7500;
  DI.WORLD_VALUE_STEP = 1400;
  // later planets ease off: from Volcanis on, each step pays this much more again than the one before
  // (Volcanis ×1.15, Nebula Prime ×1.52, Singularity ×2.31 over the plain step), so the late game keeps moving
  DI.WORLD_VALUE_EASE = 1.15;
  // depth of the World Crust on each planet; breaking through it carries the run into the next world
  DI.WORLD_GOALS = [2000, 2500, 3000, 3500, 4000];
  DI.WORLDS = [
    { id: 'earth',    name: 'Earth',        hard: 1,      value: 1,
      sky: ['#2f9dff', '#8fd3ff', '#d8f1ff'], hills: ['#9fb4e8', '#7fc0a8', '#5fae6e'], grass: null, sun: '#fff6c8', tint: null },
    { id: 'mars',     name: 'Mars',         hard: 0, value: 0,
      sky: ['#c8582e', '#f0965a', '#ffd2a0'], hills: ['#b06a5a', '#9a4a32', '#7a3a26'], grass: '#d0703a', sun: '#ffe0b0', tint: '#ff5a2a' },
    { id: 'glacia',   name: 'Glacia',       hard: 0, value: 0,
      sky: ['#1a3a7a', '#5aa0e0', '#d0f0ff'], hills: ['#a8c8f0', '#c8e4ff', '#e8f6ff'], grass: '#bfeaff', sun: '#ffffff', tint: '#5ac8ff' },
    { id: 'volcanis', name: 'Volcanis',     hard: 0, value: 0,
      sky: ['#1a0a10', '#5a1a14', '#c84a1a'], hills: ['#3a1a1a', '#2a1010', '#1a0a0a'], grass: '#ff6a1f', sun: '#ff8a3a', tint: '#ff3a1a' },
    { id: 'nebula',   name: 'Nebula Prime', hard: 0, value: 0,
      sky: ['#0a0420', '#3a1a7a', '#c86bff'], hills: ['#4a2a8a', '#6a3aaa', '#2a1a5a'], grass: '#86ff5a', sun: '#e0b0ff', tint: '#b06bff' },
    { id: 'core',     name: 'Singularity',  hard: 0, value: 0,
      sky: ['#000000', '#1a1a3a', '#ffe066'], hills: ['#2a2a4a', '#1a1a2a', '#3a3a5a'], grass: '#ffe066', sun: '#ffffff', tint: '#ffe066' },
  ];
  // world k: hardness and value grow geometrically so each new planet starts "early game" again
  DI.WORLDS.forEach((w, k) => {
    w.index = k;
    w.goal = DI.WORLD_GOALS[k] || null; // null = last world, no crust
    if (k > 0) { w.hard = Math.round(DI.WORLD_HARD_BASE * Math.pow(DI.WORLD_HARD_STEP, k - 1)); w.value = Math.round(DI.WORLD_VALUE_BASE * Math.pow(DI.WORLD_VALUE_STEP, k - 1) * Math.pow(DI.WORLD_VALUE_EASE, Math.max(0, (k - 2) * (k - 1) / 2))); }
  });

  // per-world bookkeeping helpers (world 0 keeps the original save keys)
  DI.wkey = (S, k) => (S.world ? S.world + ':' + k : k);
  DI.msDone = (S, m) => !!S.milestones[DI.wkey(S, m.m)];
  DI.curWorld = (S) => DI.WORLDS[S.world || 0];
  DI.totalDepth = (S) => {
    let t = 0;
    for (let k = 0; k < DI.WORLDS.length; k++) t += k === (S.world || 0) ? S.best : (S.bests[k] || 0);
    return t;
  };

  // ---------------------------------------------------------------- surface regions (landing distance)
  DI.REGIONS = [
  // boost: multiplies how often those underground specials roll when you land here
    { from: 0,    name: 'Green Meadows',  mult: 1.0,  grass: '#5ccf3c', dirt: '#8a5a35' },
    { from: 80,   name: 'Rocky Hills',    mult: 1.2,  grass: '#7fcf3c', dirt: '#86603d', boost: { dig: 2, mud: 2 } },
    { from: 180,  name: 'Copper Canyon',  mult: 1.45, grass: '#b8c43c', dirt: '#93583a', boost: { door: 2, mine: 2 } },
    { from: 350,  name: 'Golden Plains',  mult: 1.75, grass: '#e8c33c', dirt: '#8f6236', boost: { goldrain: 3, goldriver: 2 } },
    { from: 600,  name: 'Crystal Mesa',   mult: 2.1,  grass: '#4fd8c8', dirt: '#6e5a7a', boost: { echo: 3, geode: 2 } },
    { from: 1000, name: 'Meteor Crater',  mult: 2.5,  grass: '#c86bff', dirt: '#4e3a5e', boost: { crater: 4 } },
    { from: 1600, name: 'Frost Tundra',   mult: 3.0,  grass: '#bfeaff', dirt: '#5a6a7e', tree: '#e8f6ff', boost: { lake: 2, dig: 2, clover: 2 } },
    { from: 2500, name: 'Ashen Badlands', mult: 3.6,  grass: '#ff8a3c', dirt: '#4a2a22', tree: '#6a4a3a', boost: { geyser: 3, crater: 2, goldriver: 2 } },
    { from: 3800, name: 'Ancient Ruins',  mult: 4.3,  grass: '#c9b07a', dirt: '#6e5a3a', tree: '#8fae5a', boost: { city: 4, door: 3, relic: 2 } },
    { from: 5500, name: 'Mushroom Forest', mult: 5.2, grass: '#ff6bd0', dirt: '#4a2a4e', tree: '#ff9ae6', boost: { clover: 4, critter: 2, cave: 2 } },
    { from: 8000, name: 'Alien Landing Site', mult: 6.5, grass: '#86ff5a', dirt: '#2a1a4d', tree: '#3ff2ff', boost: { hive: 3, portal: 2, crater: 2 } },
  ];
  // "More: Gold Rain, Molten Gold River" for the landing banner
  DI.REGIONS.forEach((r) => {
    r.hint = r.boost ? 'More ' + Object.keys(r.boost).map((k) => ({ relic: 'Relics', critter: 'Critters' })[k] || DI.SPECIALS[k].name).join(', ') : '';
  });

  // ---------------------------------------------------------------- milestones
  // kind: coins | zone | cosmetic
  DI.MILESTONES = [
    { m: 25,    coins: 40 }, // with the first chest, even a weak first launch affords one upgrade
    { m: 50,    coins: 40 },
    { m: 100,   coins: 50 },
    { m: 200,   coins: 160,      zone: 1 },
    { m: 350,   coins: 500 },
    { m: 500,   coins: 1000 },
    { m: 800,   coins: 3000,     zone: 2 },
    { m: 1000,  coins: 5000,     cosmetic: 'fins' },
    { m: 1500,  coins: 13000 },
    { m: 2000,  coins: 30000,    zone: 3 },
    { m: 3000,  coins: 80000 },
    { m: 4500,  coins: 230000,   zone: 4 },
    { m: 5000,  coins: 400000,   cosmetic: 'plasma' },
    { m: 7500,  coins: 1300000 },
    { m: 10000, coins: 5000000,  cosmetic: 'legend' },
  ];

  DI.COSMETICS = {
    fins:   { name: 'Turbo Fins',        desc: 'Aerodynamic fins for your drill' },
    plasma: { name: 'Plasma Trail',      desc: 'A blazing plasma trail' },
    legend: { name: 'Legendary Aura',    desc: 'A golden aura of legend' },
  };

  // ---------------------------------------------------------------- events
  DI.EVENTS = {
    gold_rush:     { name: 'Golden Rush',    desc: 'Gold appears in every zone', color: '#ffcc33', icon: 'coin' },
    treasure_hunt: { name: 'Treasure Hunt',  desc: 'Treasure chests ×3',          color: '#e2934a', icon: 'chest' },
    diamond_rush:  { name: 'Diamond Rush',   desc: 'Diamonds appear everywhere',  color: '#7fe8ff', icon: 'gem' },
    meteor_shower: { name: 'Meteor Shower',  desc: 'Meteorite ore fell underground', color: '#ff6a3d', icon: 'core' },
    jackpot_hour:  { name: 'Jackpot Hour',   desc: 'More jackpots, rewards ×1.5',   color: '#ff4fa0', icon: 'vault' },
  };
  for (const k in DI.EVENTS) DI.EVENTS[k].id = k;
  const EVENT_SLOT_MS = 5 * 60 * 1000;
  const EVENT_CYCLE = ['gold_rush', 'treasure_hunt', null, 'diamond_rush', 'meteor_shower', null, 'jackpot_hour'];
  DI.currentEvent = function (now) {
    now = now || Date.now();
    const slot = Math.floor(now / EVENT_SLOT_MS);
    const id = EVENT_CYCLE[slot % EVENT_CYCLE.length];
    const endsAt = (slot + 1) * EVENT_SLOT_MS;
    let next = null, nextAt = endsAt;
    for (let i = 1; i <= EVENT_CYCLE.length; i++) {
      const nid = EVENT_CYCLE[(slot + i) % EVENT_CYCLE.length];
      if (nid && nid !== id) { next = nid; nextAt = (slot + i) * EVENT_SLOT_MS; break; }
      if (nid === id && id) continue;
    }
    return { event: id ? DI.EVENTS[id] : null, endsAt, next: next ? DI.EVENTS[next] : null, nextAt };
  };

  // ---------------------------------------------------------------- upgrades + economy
  DI.UPGRADES = {
    dist:  { id: 'dist',  name: 'Launch Distance',  short: 'DISTANCE',   base: 35, growth: 1.40, color: '#ff9a2e' },
    power: { id: 'power', name: 'Drill Power',      short: 'POWER',      base: 45, growth: 1.41, color: '#ff4f6d' },
    dur:   { id: 'dur',   name: 'Drill Durability', short: 'DURABILITY', base: 40, growth: 1.40, color: '#3fb6ff' },
  };
  DI.MAX_LEVEL = 250;

  // Idle earnings stay a small top-up: active play is around 60 runs an hour, the rig earns one run's worth an hour
  // and stops at the cap, so even a doubled claim buys about 8 runs and never replaces playing.
  DI.IDLE = { minRuns: 3, minAwayMs: 15 * 60 * 1000, capHours: 4, runsPerHour: 1 };
  // Orbit Reset: linear on purpose, the upgrade costs it has to beat grow about 40% per level
  DI.PRESTIGE = { depth: 500, bonus: 0.1 };

  const E = (DI.Econ = {
    prestigeMult(S) { return 1 + (S.prestige || 0) * DI.PRESTIGE.bonus; },
    lastWorldBest(S) { const k = DI.WORLDS.length - 1; return S.world === k ? S.best : (S.bests[k] || 0); },
    canPrestige(S) { return S.worldMax >= DI.WORLDS.length - 1 && E.lastWorldBest(S) >= DI.PRESTIGE.depth; },

    // a typical run for the rig: jackpots and the Golden Drill's ×3 are left out, and one lucky run can only move it so far
    idleNote(S, coins) {
      const r = S.rig, s = Math.max(0, coins);
      r.avg = r.n ? r.avg * 0.8 + Math.min(s, r.avg > 0 ? r.avg * 3 : s) * 0.2 : s;
      r.n++;
    },
    // called once on load: time away becomes hours waiting to be collected, up to the cap
    idleAccrue(S, now) {
      const r = S.rig, away = now - (S.lastSeen || now);
      if (r.n < DI.IDLE.minRuns || away < DI.IDLE.minAwayMs) return false;
      r.hours = Math.min(DI.IDLE.capHours, r.hours + away / 3600000);
      return true;
    },
    idleAmount(S) { return Math.round(S.rig.avg * S.rig.hours * DI.IDLE.runsPerHour); },

    cost(id, level) {
      const u = DI.UPGRADES[id];
      const n = level - 1;
      return Math.round(u.base * 6 * Math.pow(u.growth, n) * (1 + n * 0.06));
    },
    power(L) { return 6 * Math.pow(1.15, L - 1); },
    // the curve flattens toward level 100, then keeps a slow climb (it used to turn around and go negative)
    durability(L) { const n = L - 1; return n <= 100 ? 6 + 1.1 * n - 0.005 * n * n : 66 + 0.1 * (n - 100); },
    distMult(L) { const n = L - 1; return 1 + 0.16 * n + 0.003 * n * n; },
    baseRange(L) { return 55 * E.distMult(L); }, // meters at an ideal launch
    width(Lp) { return Lp >= 34 ? 5 : Lp >= 13 ? 3 : 1; }, // blocks mined per row (Drill Power evolutions)
    // extra charges arrive with the launcher / drill-frame evolutions (Art LAUNCH_TIERS / FRAME_TIERS levels)
    boosts(Ld) { return 2 + (Ld >= 17) + (Ld >= 40) + (Ld >= 85); }, // rocket boosts per flight (Launch Distance)
    blasts(Lu) { return 2 + (Lu >= 16) + (Lu >= 38) + (Lu >= 70) + (Lu >= 110); }, // dynamite per dig (Durability)
    SIDE_VALUE: 0.5, // side blocks of a wide drill pay half
    speedCap(Lp) { return 10 + 0.22 * (Lp - 1); }, // rows / second

    // angle meter maps 0..1 -> 15..75 deg; power 0..1 -> 0..100%
    angleFromMeter(p) { return 15 + p * 60; },
    angleGrade(p) { const d = Math.abs(p - 0.5); return d <= 0.035 ? 'perfect' : d <= 0.2 ? 'good' : 'weak'; },
    powerGrade(p) { return p >= 0.95 ? 'perfect' : p >= 0.66 ? 'good' : 'weak'; },

    launch(L, angleDeg, power, aGrade, pGrade) {
      const rad = (angleDeg * Math.PI) / 180;
      const angleF = Math.pow(Math.max(0.05, Math.sin(2 * rad)), 0.7);
      const powerF = 0.3 + 0.7 * power;
      let bonus = 1;
      if (aGrade === 'perfect') bonus *= 1.08;
      if (pGrade === 'perfect') bonus *= 1.08;
      if (aGrade === 'perfect' && pGrade === 'perfect') bonus *= 1.1;
      const dist = E.baseRange(L) * angleF * powerF * bonus;
      const quality = angleF * powerF * bonus; // ~0.18 .. 1.28
      return { dist, quality, bonus };
    },

    region(distM) {
      let r = DI.REGIONS[0];
      for (const x of DI.REGIONS) if (distM >= x.from) r = x;
      return r;
    },
    impactRows(distM) { return Math.floor(2 + Math.min(distM, 3000) / 22); }, // capped: late landings would otherwise skip half a planet

    zoneAtRow(r) {
      for (let i = DI.ZONES.length - 1; i >= 0; i--) if (r >= DI.ZONES[i].startRow) return DI.ZONES[i];
      return DI.ZONES[0];
    },
    depthAtRow(r) {
      const z = E.zoneAtRow(r);
      return z.start + (r - z.startRow) * z.blockM;
    },
    zoneAtDepth(m) {
      for (let i = DI.ZONES.length - 1; i >= 0; i--) if (m >= DI.ZONES[i].start) return DI.ZONES[i];
      return DI.ZONES[0];
    },
    rowAtDepth(m) {
      const z = E.zoneAtDepth(m);
      return z.startRow + (m - z.start) / z.blockM;
    },
    zoneFrac(z, m) {
      if (z.end === Infinity) return (m - z.start) / 5500;
      return U.clamp((m - z.start) / (z.end - z.start), 0, 1);
    },
    hardness(blockId, row) {
      const z = E.zoneAtRow(row);
      const m = E.depthAtRow(row);
      return DI.BLOCKS[blockId].hard * z.hard * (1 + 1.1 * E.zoneFrac(z, m));
    },
  });
})();
