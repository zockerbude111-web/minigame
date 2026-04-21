// data.js
'use strict';


// ─────────────────────────────────────────────
// DATA DEFINITIONS
// ─────────────────────────────────────────────

const ITEM = {
  gold:       { n:'Gold',         icon:'💰', col:'#FFD700', wt:0,  t:'gold',    sellPrice:0 },
  hpot:       { n:'Health Potion',icon:'🧪', col:'#ff6677', wt:1,  t:'potion',  hp:60,   buyPrice:18,  sellPrice:9 },
  mpot:       { n:'Mana Potion',  icon:'🔮', col:'#6688ff', wt:1,  t:'potion',  mp:50,   buyPrice:18,  sellPrice:9 },
  bread:      { n:'Bread',        icon:'🍞', col:'#d4a75b', wt:1,  t:'potion',  hp:22,   buyPrice:6,   sellPrice:3 },
  antidote:   { n:'Antidote',     icon:'🌿', col:'#88ff88', wt:1,  t:'cure',                buyPrice:16,  sellPrice:8 },
  torch:      { n:'Torch',        icon:'🔦', col:'#ffaa22', wt:2,  t:'torch',   slot:'mainhand', lightRad:6, atk:2, buyPrice:25, sellPrice:12 },
  dagger:     { n:'Dagger',       icon:'🗡', col:'#d9d9d9', wt:4,  t:'weapon',  slot:'mainhand', atk:5,  atkSpd:15, buyPrice:22, sellPrice:11 },
  spear:      { n:'Spear',        icon:'↑',  col:'#c0b090', wt:5,  t:'weapon',  slot:'mainhand', atk:7,  buyPrice:32, sellPrice:16 },
  sword:      { n:'Sword',        icon:'⚔',  col:'#f0f0f0', wt:7,  t:'weapon',  slot:'mainhand', atk:10, buyPrice:60, sellPrice:30 },
  axe:        { n:'Battle Axe',   icon:'🪓', col:'#d48855', wt:9,  t:'weapon',  slot:'mainhand', atk:12, buyPrice:70, sellPrice:35 },
  staff:      { n:'Oak Staff',    icon:'🪄', col:'#a87a49', wt:6,  t:'weapon',  slot:'mainhand', atk:6,  mp:25, buyPrice:56, sellPrice:28 },
  buckler:    { n:'Buckler',      icon:'🛡', col:'#9aa4bc', wt:5,  t:'offhand', slot:'offhand',  def:4, armor:2, buyPrice:30, sellPrice:15 },
  shield:     { n:'Shield',       icon:'🛡', col:'#7587a5', wt:8,  t:'offhand', slot:'offhand',  def:7, armor:3, buyPrice:58, sellPrice:29 },
  hood:       { n:'Hood',         icon:'🎩', col:'#777788', wt:3,  t:'helmet',  slot:'head',     def:2, buyPrice:18, sellPrice:9 },
  helmet:     { n:'Helmet',       icon:'⛑',  col:'#9aa3af', wt:5,  t:'helmet',  slot:'head',     def:4, armor:1, buyPrice:46, sellPrice:23 },
  chainmail:  { n:'Chainmail',    icon:'⛓',  col:'#8a8fa1', wt:11, t:'chest',   slot:'body',     def:4, armor:4, buyPrice:62, sellPrice:31 },
  robe:       { n:'Robe',         icon:'👘', col:'#7766cc', wt:6,  t:'chest',   slot:'body',     def:2, mp:35,  buyPrice:56, sellPrice:28 },
  plate:      { n:'Plate Armor',  icon:'🦺', col:'#b0b8c8', wt:18, t:'chest',   slot:'body',     def:7, armor:7, buyPrice:120, sellPrice:60 },
  leggings:   { n:'Leggings',     icon:'👖', col:'#667799', wt:6,  t:'legs',    slot:'legs',     def:3, armor:1, buyPrice:34, sellPrice:17 },
  greaves:    { n:'Greaves',      icon:'🦵', col:'#9ca7b7', wt:10, t:'legs',    slot:'legs',     def:5, armor:3, buyPrice:70, sellPrice:35 },
  lightboots: { n:'Light Boots',  icon:'👟', col:'#8a6b46', wt:3,  t:'boots',   slot:'boots',    def:1, speed:1, buyPrice:20, sellPrice:10 },
  boots:      { n:'Boots',        icon:'👢', col:'#5c4329', wt:5,  t:'boots',   slot:'boots',    def:2, armor:1, buyPrice:38, sellPrice:19 },
  gloves:     { n:'Gloves',       icon:'🧤', col:'#b38a55', wt:2,  t:'gloves',  slot:'gloves',   atk:2, def:1, buyPrice:24, sellPrice:12 },
  belt:       { n:'Belt',         icon:'▬',  col:'#8d6a3f', wt:2,  t:'belt',    slot:'belt',     def:1, capBonus:8,  buyPrice:22, sellPrice:11 },
  heavybelt:  { n:'Heavy Belt',   icon:'▬',  col:'#b28649', wt:4,  t:'belt',    slot:'belt',     def:2, armor:1, capBonus:14, buyPrice:48, sellPrice:24 },
  earthBelt:  { n:'Earth Belt',   icon:'▬',  col:'#5aa14a', wt:4,  t:'belt',    slot:'belt',     def:2, capBonus:10, resEarth:12, buyPrice:85, sellPrice:42 },
  smallbag:   { n:'Small Bag',    icon:'👜', col:'#9c7341', wt:1,  t:'container', slot:'bag',    capBonus:8,  buyPrice:20, sellPrice:10 },
  backpack:   { n:'Backpack',     icon:'🎒', col:'#c98d4b', wt:2,  t:'container', slot:'bag',    capBonus:18, buyPrice:58, sellPrice:29 },
  cape:       { n:'Cape',         icon:'🧣', col:'#6f4cb5', wt:2,  t:'cape',    slot:'cape',     def:1, mp:12, buyPrice:32, sellPrice:16 },
  fireCloak:  { n:'Fire Cloak',   icon:'🔥', col:'#ff6633', wt:4,  t:'cape',    slot:'cape',     def:2, resFire:15, buyPrice:120, sellPrice:60 },
  amulet:     { n:'Amulet',       icon:'◇',  col:'#e7d088', wt:1,  t:'amulet',  slot:'amulet',   hp:20, buyPrice:40, sellPrice:20 },
  amuletMp:   { n:'Arcane Amulet',icon:'◇',  col:'#88aaff', wt:1,  t:'amulet',  slot:'amulet',   mp:30, buyPrice:52, sellPrice:26 },
  holyAmulet: { n:'Holy Amulet',  icon:'✨', col:'#fff0aa', wt:1,  t:'amulet',  slot:'amulet',   hp:24, resHoly:14, buyPrice:95, sellPrice:47 },
  ring:       { n:'Ring',         icon:'◉',  col:'#ccc',    wt:1,  t:'ring',    slot:'ring',     def:1, buyPrice:28, sellPrice:14 },
  ringHp:     { n:'Vital Ring',   icon:'◉',  col:'#ff8899', wt:1,  t:'ring',    slot:'ring',     hp:35, buyPrice:58, sellPrice:29 },
  ringAtk:    { n:'War Ring',     icon:'◉',  col:'#ffbb44', wt:1,  t:'ring',    slot:'ring',     atk:5, buyPrice:72, sellPrice:36 },
  iceRing:    { n:'Ice Ring',     icon:'❄',  col:'#77d6ff', wt:1,  t:'ring',    slot:'ring',     resCold:15, mp:10, buyPrice:84, sellPrice:42 },
  chaosRing:  { n:'Chaos Ring',   icon:'☯',  col:'#cc66ff', wt:1,  t:'ring',    slot:'ring',     atk:3, resChaos:12, buyPrice:88, sellPrice:44 },
};

const MDEF = {
  rat:      { n:'Rat',      hp:28,  atk:9,  def:2,  col:'#7d7d7d', sz:0.6,  sight:5,  range:1, spd:950, xp:12,  zone:0, loot:[{id:'gold',ch:0.9,mn:1,mx:4},{id:'bread',ch:0.2,mn:1,mx:1},{id:'hpot',ch:0.05,mn:1,mx:1}] },
  slime:    { n:'Slime',    hp:42,  atk:11, def:3,  col:'#44cc66', sz:0.72, sight:5,  range:1, spd:1000,xp:18,  zone:1, poison:true, loot:[{id:'gold',ch:0.85,mn:2,mx:6},{id:'antidote',ch:0.16,mn:1,mx:1},{id:'mpot',ch:0.07,mn:1,mx:1}] },
  skeleton: { n:'Skeleton', hp:72,  atk:16, def:6,  col:'#ddd7c8', sz:0.82, sight:6,  range:1, spd:820, xp:30,  zone:2, loot:[{id:'gold',ch:0.95,mn:4,mx:10},{id:'dagger',ch:0.08,mn:1,mx:1},{id:'buckler',ch:0.05,mn:1,mx:1},{id:'helmet',ch:0.04,mn:1,mx:1}] },
  troll:    { n:'Troll',    hp:110, atk:21, def:8,  col:'#8a6b3d', sz:0.95, sight:7,  range:1, spd:760, xp:46,  zone:3, loot:[{id:'gold',ch:1,mn:8,mx:18},{id:'axe',ch:0.08,mn:1,mx:1},{id:'shield',ch:0.05,mn:1,mx:1},{id:'belt',ch:0.09,mn:1,mx:1}] },
  ghost:    { n:'Ghost',    hp:96,  atk:22, def:10, col:'#7b82ff', sz:0.82, sight:8,  range:1, spd:700, xp:58,  zone:3, mana:true, loot:[{id:'gold',ch:0.95,mn:10,mx:22},{id:'amuletMp',ch:0.09,mn:1,mx:1},{id:'ring',ch:0.07,mn:1,mx:1},{id:'mpot',ch:0.18,mn:1,mx:2}] },
  dragon:   { n:'Dragon',   hp:220, atk:34, def:14, col:'#d94343', sz:1.08, sight:10, range:1, spd:620, xp:130, zone:4, loot:[{id:'gold',ch:1,mn:24,mx:60},{id:'fireCloak',ch:0.12,mn:1,mx:1},{id:'holyAmulet',ch:0.06,mn:1,mx:1},{id:'sword',ch:0.1,mn:1,mx:1}] },
};

const SPELLS = [
  { n:'Minor Heal', icon:'✚', key:'1', mp:18, cd:2200, col:'#22ff88', tip:'Restore health instantly.', rng:0, aoe:0, hmin:28, hmax:48 },
  { n:'Fire Bolt',  icon:'🔥', key:'2', mp:16, cd:1700, col:'#ff6633', tip:'Fast single target fire spell.', rng:5, aoe:0, dmn:18, dmx:34 },
  { n:'Frost Burst',icon:'❄',  key:'3', mp:28, cd:2900, col:'#66ccff', tip:'Small area burst to punish clustered enemies.', rng:4, aoe:1, dmn:16, dmx:28 },
  { n:'Holy Nova',  icon:'✨', key:'4', mp:34, cd:4200, col:'#ffe680', tip:'High impact holy blast around the impact tile.', rng:4, aoe:1, dmn:24, dmx:40 },
];

const SHOP_STOCK = [
  'hpot','mpot','bread','antidote',
  'torch','dagger','spear','sword','axe','staff',
  'buckler','shield','hood','helmet',
  'chainmail','robe','plate',
  'leggings','greaves','lightboots','boots',
  'gloves','belt','heavybelt',
  'smallbag','backpack','cape',
  'amulet','amuletMp','ring','ringHp','ringAtk',
  'fireCloak','iceRing','holyAmulet','chaosRing','earthBelt',
];