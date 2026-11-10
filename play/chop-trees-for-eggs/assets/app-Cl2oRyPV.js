import{n as e,t}from"./index-CSvnU7c0.js";var n=39,r=(e,t,r,i,a,o,s={})=>({id:t,name:r,price:i,rarity:a,shape:o,tier:e,attract:+(.75*e/n).toFixed(3),value:+(1.1**e).toFixed(2),dmg:+(1.12**e).toFixed(2),...s}),i={Basic:`#b6bcc6`,Tasty:`#62d66a`,Gourmet:`#4fa8ff`,Deluxe:`#b46cff`,Divine:`#ffc531`,Mythic:`#ff4b4b`,Celestial:`rainbow`},a={Basic:`Basic`,Tasty:`Sturdy`,Gourmet:`Fine`,Deluxe:`Superb`,Divine:`Divine`,Mythic:`Mythic`,Celestial:`Celestial`},o=[r(0,`wood`,`Wooden Pickaxe`,0,`Basic`,`pick`,{tint:`#b98a55`}),r(1,`stone`,`Stone Pickaxe`,40,`Basic`,`pick`,{tint:`#9b9ba3`}),r(2,`copper`,`Copper Pickaxe`,180,`Basic`,`pick`,{tint:`#c9803f`}),r(3,`iron`,`Iron Pickaxe`,800,`Tasty`,`pick`,{tint:`#c8d0d8`}),r(4,`hatchet`,`Lumber Hatchet`,3200,`Tasty`,`axe`,{tint:`#a9b4c0`}),r(5,`steel`,`Steel Pickaxe`,14e3,`Tasty`,`pick`,{tint:`#dfe6ee`}),r(6,`bronzeaxe`,`Bronze Axe`,6e4,`Tasty`,`axe`,{tint:`#d08a4a`}),r(7,`gold`,`Gold Pickaxe`,25e4,`Gourmet`,`pick`,{tint:`#ffc531`,gleam:1}),r(8,`doubleaxe`,`Double Axe`,1e6,`Gourmet`,`double`,{tint:`#c8d0d8`}),r(9,`jade`,`Jade Pickaxe`,4e6,`Gourmet`,`pick`,{tint:`#35d08a`}),r(10,`mallet`,`Timber Mallet`,16e6,`Gourmet`,`hammer`,{tint:`#8a6038`}),r(11,`ruby`,`Ruby Pickaxe`,65e6,`Deluxe`,`pick`,{tint:`#e8325a`,gleam:1}),r(12,`sapphireaxe`,`Sapphire Axe`,26e7,`Deluxe`,`axe`,{tint:`#3f7bff`,gleam:1}),r(13,`emerald`,`Emerald Pickaxe`,1e9,`Deluxe`,`pick`,{tint:`#2fce7a`,gleam:1}),r(14,`amethyst`,`Amethyst Double Axe`,4e9,`Deluxe`,`double`,{tint:`#b14cff`,gleam:1}),r(15,`topaz`,`Topaz Pickaxe`,16e9,`Divine`,`pick`,{tint:`#ff9b1f`,gleam:1}),r(16,`diamond`,`Diamond Pickaxe`,65e9,`Divine`,`crystal`,{tint:`#9df0ff`,gleam:1}),r(17,`sunaxe`,`Sunsteel Axe`,26e10,`Divine`,`axe`,{tint:`#ffe14d`,gleam:1}),r(18,`frosthammer`,`Frost Hammer`,0xe8d4a51000,`Divine`,`hammer`,{tint:`#a5e0ff`,gleam:1}),r(19,`ember`,`Ember Pickaxe`,4e12,`Mythic`,`pick`,{tint:`#ff5a1f`,gleam:1}),r(20,`crystalaxe`,`Crystal Axe`,0xe8d4a510000,`Mythic`,`crystal`,{tint:`#c8b8ff`,gleam:1}),r(21,`moonpick`,`Moonstone Pickaxe`,65e12,`Mythic`,`pick`,{tint:`#c8b8ff`,gleam:1}),r(22,`rainbowpick`,`Rainbow Pickaxe`,0xec77f7a44000,`Mythic`,`pick`,{rainbow:1}),r(23,`starpick`,`Star Pickaxe`,0x38d7ea4c68000,`Celestial`,`star`,{tint:`#ffe14d`,gleam:1}),r(24,`nebulaaxe`,`Nebula Axe`,0xe35fa931a0000,`Celestial`,`axe`,{tint:`#7f4fff`,gleam:1}),r(25,`solarhammer`,`Solar Hammer`,0x38d7ea4c680000,`Celestial`,`hammer`,{tint:`#ffb23f`,gleam:1}),r(26,`voidpick`,`Void Pickaxe`,0xe6ed27d6668000,`Celestial`,`crystal`,{tint:`#6a4fd8`,gleam:1}),r(27,`cosmicaxe`,`Cosmic Double Axe`,0x39bb49f599a0000,`Celestial`,`double`,{tint:`#ff7fff`,gleam:1}),r(28,`honeypick`,`Honeycomb Pickaxe`,0xde0b6b3a7640000,`Celestial`,`pick`,{tint:`#ffc531`,gleam:1}),r(29,`obsidian`,`Obsidian Axe`,0x3782dace9d900000,`Celestial`,`axe`,{tint:`#3a2a4a`,gleam:1}),r(30,`dragonpick`,`Dragonbone Pickaxe`,0xde0b6b3a76400000,`Celestial`,`pick`,{tint:`#ff4f9b`,gleam:1}),r(31,`cometstar`,`Comet Star`,0x3860e639d80640000,`Celestial`,`star`,{tint:`#8ff0ff`,gleam:1}),r(32,`auroraaxe`,`Aurora Axe`,0xe18398e7601900000,`Celestial`,`axe`,{tint:`#7ff0c8`,gleam:1}),r(33,`phoenixhammer`,`Phoenix Hammer`,1e21,`Celestial`,`hammer`,{tint:`#ff5a1f`,gleam:1}),r(34,`moonaxe`,`Moonlight Double Axe`,4e21,`Celestial`,`double`,{tint:`#c8b8ff`,gleam:1}),r(35,`titanpick`,`Titan Pickaxe`,16e21,`Celestial`,`pick`,{rainbow:1}),r(36,`eternalaxe`,`Eternal Axe`,65e21,`Celestial`,`axe`,{tint:`#ffe14d`,gleam:1}),r(37,`worldcrystal`,`World Crystal Pickaxe`,26e22,`Celestial`,`crystal`,{tint:`#ff9bf0`,gleam:1}),r(38,`firstaxe`,`The First Axe`,1e24,`Celestial`,`double`,{tint:`#fff6c8`,gleam:1}),r(39,`laststar`,`The Last Star`,4e24,`Celestial`,`star`,{tint:`#fff6c8`,gleam:1}),{id:`pumpkinaxe`,name:`Harvest Axe`,price:25e3,rarity:`Gourmet`,shape:`axe`,tint:`#f08a2c`,tier:5,attract:.22,value:2.2,dmg:1.8,event:`harvest`},{id:`icepick`,name:`Frosty Pickaxe`,price:25e3,rarity:`Gourmet`,shape:`pick`,tint:`#bfe8ff`,tier:5,attract:.22,value:2.2,dmg:1.8,event:`frost`}],s=Object.fromEntries(o.map(e=>[e.id,e])),c=[{id:`common`,name:`Common`,color:`#b6bcc6`,weight:50,income:1},{id:`uncommon`,name:`Uncommon`,color:`#62d66a`,weight:25,income:2},{id:`rare`,name:`Rare`,color:`#4fa8ff`,weight:14,income:4},{id:`epic`,name:`Epic`,color:`#b46cff`,weight:7,income:8},{id:`legendary`,name:`Legendary`,color:`#ffc531`,weight:3,income:18},{id:`mythic`,name:`Mythic`,color:`#ff4b4b`,weight:.9,income:45},{id:`cosmic`,name:`Cosmic`,color:`rainbow`,weight:.1,income:150}],l=[{id:`normal`,name:`Normal`,mult:1,odds:1,scale:1,color:`#ffffff`},{id:`large`,name:`Large`,mult:1.5,odds:8,scale:1.22,color:`#a8e6a1`},{id:`giant`,name:`Giant`,mult:3,odds:40,scale:1.55,color:`#7fd0ff`},{id:`golden`,name:`Golden`,mult:5,odds:150,scale:1,color:`#ffd23f`},{id:`rainbow`,name:`Rainbow`,mult:12,odds:800,scale:1,color:`rainbow`},{id:`crystal`,name:`Crystal`,mult:25,odds:4e3,scale:1,color:`#9df0ff`},{id:`cosmic`,name:`Cosmic`,mult:75,odds:25e3,scale:1,color:`#b78cff`}],u={meadow:1,forest:5,savanna:22,desert:90,jungle:350,ocean:1300,mountains:5e3,arctic:18e3,volcano:7e4,fantasy:26e4,crystal:1e6,sky:4e6,cosmic:16e6,candy:65e6,clockwork:26e7,marsh:1e9,aurora:4e9,eden:16e9},d=(e,t,n,r,i,a,o={})=>({id:e,name:t,rarity:n,kind:r,c:i,c2:a,...o}),f={meadow:[d(`frog`,`Frog`,0,`frog`,`#6bcf4f`,`#e6f7a8`),d(`rabbit`,`Rabbit`,1,`quad`,`#e9e1d3`,`#ffc4cf`,{ear:`long`,tail:`puff`,legH:.3,snout:.12,len:.9,hop:1}),d(`squirrel`,`Squirrel`,2,`quad`,`#c47a3f`,`#f4dcb8`,{ear:`point`,tail:`bushy`,legH:.28,snout:.16,len:.85,tailBig:1.5}),d(`hedgehog`,`Hedgehog`,3,`quad`,`#8c6a4f`,`#ecd8bd`,{ear:`round`,tail:`none`,legH:.2,snout:.28,len:1,spikes:1}),d(`deer`,`Deer`,4,`quad`,`#c98d55`,`#fbeeda`,{ear:`point`,tail:`puff`,legH:.75,neck:.55,snout:.22,horn:`antler`,spots:`#fff3dd`}),d(`goldendeer`,`Sunbeam Stag`,5,`quad`,`#ffcc47`,`#fff4b8`,{ear:`point`,tail:`puff`,legH:.8,neck:.6,snout:.22,horn:`antler`,glow:`#ffd23f`})],forest:[d(`fox`,`Fox`,0,`quad`,`#ec7f33`,`#fff1e0`,{ear:`point`,tail:`bushy`,legH:.38,snout:.34,tailTip:`#fff1e0`}),d(`badger`,`Badger`,1,`quad`,`#6e6e78`,`#f2f2f2`,{ear:`round`,tail:`short`,legH:.26,snout:.3,len:1.25,stripeHead:1}),d(`owl`,`Owl`,2,`bird`,`#9b7650`,`#f1dfc2`,{tuft:1,beak:`#f3b43a`,roundFace:1}),d(`wolf`,`Wolf`,3,`quad`,`#8b95a5`,`#e7ebf1`,{ear:`point`,tail:`bushy`,legH:.58,snout:.4}),d(`bear`,`Bear`,4,`quad`,`#7a5233`,`#c9a57e`,{ear:`round`,tail:`short`,legH:.42,snout:.26,bulk:1.45}),d(`spiritwolf`,`Ghostmane Wolf`,5,`quad`,`#c8f4ff`,`#ffffff`,{ear:`point`,tail:`bushy`,legH:.6,snout:.4,mane:`#7fe8ff`,glow:`#7fe8ff`})],savanna:[d(`zebra`,`Zebra`,0,`quad`,`#f4f4f4`,`#2b2b30`,{ear:`point`,tail:`tuft`,legH:.68,neck:.45,snout:.32,stripes:`#2b2b30`}),d(`hyena`,`Hyena`,1,`quad`,`#b79a6a`,`#e6d7b4`,{ear:`round`,tail:`short`,legH:.55,snout:.34,spots:`#5c4a30`}),d(`giraffe`,`Giraffe`,2,`quad`,`#f0c35a`,`#fff0c2`,{ear:`round`,tail:`tuft`,legH:1.05,neck:1.5,snout:.24,horn:`nub`,spots:`#a9692c`}),d(`lion`,`Lion`,3,`quad`,`#e0a84a`,`#f8e2b0`,{ear:`round`,tail:`tuft`,legH:.55,snout:.24,mane:`#a85f25`}),d(`elephant`,`Elephant`,4,`quad`,`#9aa4b1`,`#c8d0da`,{ear:`fan`,tail:`tuft`,legH:.62,trunk:1,tusks:1,bulk:1.6,snout:0}),d(`goldenlion`,`Solar Lion`,5,`quad`,`#ffd24d`,`#fff3bf`,{ear:`round`,tail:`tuft`,legH:.6,snout:.24,mane:`#ff8a1f`,glow:`#ffb23f`})],desert:[d(`scorpion`,`Scorpion`,0,`arthro`,`#c98b3f`,`#7b4d1f`,{stinger:1}),d(`lizard`,`Sand Lizard`,1,`reptile`,`#d9b45f`,`#f6e6b0`,{}),d(`fennec`,`Fennec Fox`,2,`quad`,`#f2d9a4`,`#fff7e4`,{ear:`fan`,tail:`bushy`,legH:.32,snout:.28,earSmall:1}),d(`camel`,`Camel`,3,`quad`,`#d6a968`,`#f3ddb1`,{ear:`round`,tail:`tuft`,legH:.95,neck:.85,snout:.3,hump:2}),d(`cobra`,`Cobra`,4,`snake`,`#7a6a2f`,`#f1d97a`,{hood:1}),d(`sandgolem`,`Dune Colossus`,5,`golem`,`#d6ab63`,`#8a6535`,{glow:`#ffb84d`})],jungle:[d(`monkey`,`Monkey`,0,`biped`,`#8a5a33`,`#f0cfa4`,{ear:`round`,tail:`long`,armL:1}),d(`toucan`,`Toucan`,1,`bird`,`#26262e`,`#fff5c8`,{beak:`#ff9d1f`,bigBeak:1}),d(`parrot`,`Parrot`,2,`bird`,`#ef3e3e`,`#ffd93f`,{beak:`#f4f4f4`,wing:`#2f7be8`,longTail:1}),d(`panther`,`Panther`,3,`quad`,`#2c2a38`,`#4a4860`,{ear:`round`,tail:`long`,legH:.52,snout:.22,eyeC:`#d6f65a`}),d(`gorilla`,`Gorilla`,4,`biped`,`#3d3f4b`,`#7f8294`,{ear:`round`,armL:1.3,bulk:1.6}),d(`emeralddragon`,`Emerald Wyrm`,5,`dragon`,`#2fce7a`,`#d9ffc9`,{glow:`#3fff9b`,wing:`#17935a`})],ocean:[d(`crab`,`Crab`,0,`arthro`,`#ef5c3f`,`#ffd0a8`,{claws:1}),d(`turtle`,`Sea Turtle`,1,`turtle`,`#58b06f`,`#7a5a33`,{}),d(`dolphin`,`Dolphin`,2,`fish`,`#7fb2d9`,`#eaf5ff`,{fin:1,beakFish:1}),d(`shark`,`Shark`,3,`fish`,`#7a8a9a`,`#f2f4f6`,{fin:2,teeth:1}),d(`orca`,`Orca`,4,`fish`,`#22242e`,`#f6f6f6`,{fin:2,bulk:1.3,patch:1}),d(`seahorse`,`Prism Seahorse`,5,`seahorse`,`#7fe8ff`,`#fff0ff`,{glow:`#7fe8ff`})],mountains:[d(`goat`,`Mountain Goat`,0,`quad`,`#f1eee6`,`#c9c3b5`,{ear:`point`,tail:`short`,legH:.5,snout:.24,horn:`curved`}),d(`marmot`,`Marmot`,1,`biped`,`#a97f55`,`#ecd6b8`,{ear:`round`,tail:`short`,armL:.55,chubby:1}),d(`eagle`,`Eagle`,2,`bird`,`#6d4a2c`,`#ffffff`,{beak:`#f7b731`,headC:`#ffffff`,wingBig:1}),d(`snowleopard`,`Snow Leopard`,3,`quad`,`#e6e8ee`,`#ffffff`,{ear:`round`,tail:`long`,legH:.5,snout:.22,spots:`#50535f`,tailBig:1.3}),d(`yak`,`Yak`,4,`quad`,`#5d4531`,`#8f745a`,{ear:`round`,tail:`tuft`,legH:.55,snout:.25,bulk:1.5,horn:`curved`,mane:`#3f2d20`}),d(`griffin`,`Skytalon Griffin`,5,`griffin`,`#e9b64a`,`#ffffff`,{beak:`#f2901d`,wing:`#ffffff`,glow:`#ffe28a`})],arctic:[d(`penguin`,`Penguin`,0,`biped`,`#2a2d3a`,`#ffffff`,{penguin:1,beak:`#f7a21f`}),d(`seal`,`Seal`,1,`fish`,`#aab5c2`,`#e6ecf2`,{seal:1}),d(`arcticfox`,`Arctic Fox`,2,`quad`,`#f7fbff`,`#dceaf5`,{ear:`point`,tail:`bushy`,legH:.36,snout:.32}),d(`snowowl`,`Snow Owl`,3,`bird`,`#f3f7fb`,`#ffffff`,{tuft:0,beak:`#40404a`,roundFace:1,flecks:`#70788a`}),d(`polarbear`,`Polar Bear`,4,`quad`,`#fbfdff`,`#e6eef5`,{ear:`round`,tail:`short`,legH:.48,snout:.3,bulk:1.55}),d(`icedragon`,`Rimefang Drake`,5,`dragon`,`#a5e8ff`,`#ffffff`,{glow:`#a5e8ff`,wing:`#5fb8f0`})],volcano:[d(`magmaslug`,`Magma Slug`,0,`slime`,`#ff6a2c`,`#ffd24d`,{eyeStalks:1}),d(`ashbat`,`Ash Bat`,1,`bird`,`#3d3640`,`#7a6a70`,{bat:1,beak:`#3d3640`,wing:`#4e2c34`}),d(`cinderhound`,`Cinder Hound`,2,`quad`,`#3a2c2e`,`#ff7a2c`,{ear:`point`,tail:`bushy`,legH:.55,snout:.36,spots:`#ff7a2c`,eyeC:`#ffb23f`}),d(`lavatoad`,`Lava Toad`,3,`frog`,`#a8341f`,`#ffb23f`,{warts:`#ffd24d`}),d(`obsidianram`,`Obsidian Ram`,4,`quad`,`#2a2630`,`#5c5468`,{ear:`round`,tail:`short`,legH:.55,snout:.25,horn:`ram`,bulk:1.3,eyeC:`#ff5a2c`}),d(`phoenix`,`Sunflare Phoenix`,5,`bird`,`#ff7a1f`,`#ffd93f`,{beak:`#ffe48a`,wing:`#ff3f1f`,longTail:1,wingBig:1,glow:`#ff7a1f`}),d(`magmawyrm`,`Worldfire Wyrm`,6,`dragon`,`#2e2024`,`#ff5a1f`,{glow:`#ff5a1f`,wing:`#7a1f12`,eyeC:`#ffe14d`})],fantasy:[d(`dewslime`,`Dew Slime`,0,`slime`,`#7fe8c9`,`#e6fff4`,{}),d(`mooncat`,`Moon Cat`,1,`quad`,`#c9b8f5`,`#fff`,{ear:`point`,tail:`long`,legH:.42,snout:.14,eyeC:`#7f4fff`}),d(`petalbird`,`Petal Finch`,2,`bird`,`#ffa6d9`,`#fff0f8`,{beak:`#ffd24d`,tuft:1}),d(`unicorn`,`Unicorn`,3,`quad`,`#fbf6ff`,`#ffc9ec`,{ear:`point`,tail:`tuft`,legH:.78,neck:.6,snout:.28,horn:`single`,mane:`#ff9be0`}),d(`dreamfawn`,`Dream Fawn`,4,`quad`,`#a988f0`,`#f6e8ff`,{ear:`long`,tail:`puff`,legH:.7,neck:.45,snout:.2,horn:`antler`,spots:`#fff`}),d(`pegasus`,`Aurora Pegasus`,5,`quad`,`#fff`,`#c9e8ff`,{ear:`point`,tail:`tuft`,legH:.8,neck:.6,snout:.28,wings:`#ffe8ff`,mane:`#8fd8ff`,glow:`#c9b8ff`}),d(`moondragon`,`Lunar Sovereign`,6,`dragon`,`#c8b8ff`,`#fff6d0`,{glow:`#c8b8ff`,wing:`#7f5fe8`})],crystal:[d(`gemmite`,`Gem Mite`,0,`arthro`,`#5fd8f0`,`#d0f8ff`,{}),d(`shardhare`,`Shard Hare`,1,`quad`,`#9df0ff`,`#fff`,{ear:`long`,tail:`puff`,legH:.32,snout:.12,len:.9,hop:1,spikes:1}),d(`prismowl`,`Prism Owl`,2,`bird`,`#7fa8ff`,`#eaf4ff`,{tuft:1,beak:`#fff`,roundFace:1}),d(`quartzgolem`,`Quartz Golem`,3,`golem`,`#c9f0ff`,`#5fa8e8`,{glow:`#9df0ff`}),d(`jellyglass`,`Glass Jelly`,4,`jelly`,`#b8a8ff`,`#ffffff`,{glow:`#b8a8ff`}),d(`crystalstag`,`Diamond Stag`,5,`quad`,`#d0f8ff`,`#fff`,{ear:`point`,tail:`puff`,legH:.8,neck:.6,snout:.22,horn:`antler`,glow:`#9df0ff`}),d(`crystaldragon`,`Prismatic Drake`,6,`dragon`,`#7fe8ff`,`#ffffff`,{glow:`#ff9bf0`,wing:`#c9a8ff`})],sky:[d(`puffling`,`Cloud Puff`,0,`slime`,`#ffffff`,`#dfefff`,{}),d(`windfinch`,`Wind Finch`,1,`bird`,`#7fc8ff`,`#ffffff`,{beak:`#ffb23f`,longTail:1}),d(`skyram`,`Cloud Ram`,2,`quad`,`#ffffff`,`#ffd9b8`,{ear:`round`,tail:`puff`,legH:.42,snout:.18,horn:`ram`,bulk:1.3}),d(`sunwhale`,`Sky Whale`,3,`fish`,`#6f9ff0`,`#ffffff`,{fin:1,bulk:1.7,patch:1}),d(`stormgriffin`,`Storm Griffin`,4,`griffin`,`#55649a`,`#e6ecff`,{beak:`#ffe14d`,wing:`#8f9fe8`,glow:`#a5b8ff`}),d(`zephyrdragon`,`Zephyr Dragon`,5,`dragon`,`#e8fbff`,`#ffd9a8`,{glow:`#ffffff`,wing:`#a8e0ff`}),d(`seraphstag`,`Seraph Stag`,6,`quad`,`#fff6d0`,`#fff`,{ear:`point`,tail:`tuft`,legH:.85,neck:.6,snout:.22,horn:`antler`,wings:`#fff4b8`,glow:`#ffe28a`})],cosmic:[d(`stardust`,`Stardust Mote`,0,`slime`,`#8f7fff`,`#ffe8ff`,{}),d(`cometcat`,`Comet Cat`,1,`quad`,`#2f2670`,`#8fd8ff`,{ear:`point`,tail:`long`,legH:.42,snout:.14,eyeC:`#8ff0ff`,tailBig:1.4}),d(`nebulajelly`,`Nebula Jelly`,2,`jelly`,`#ff7fd8`,`#a88fff`,{glow:`#ff7fd8`}),d(`orbitfrog`,`Orbit Toad`,3,`frog`,`#3f2fa8`,`#c9a8ff`,{warts:`#ffe14d`}),d(`voidwolf`,`Void Wolf`,4,`quad`,`#15102f`,`#5f3fd8`,{ear:`point`,tail:`bushy`,legH:.6,snout:.4,mane:`#7f5fff`,eyeC:`#ff5fe8`,glow:`#7f5fff`}),d(`galaxywhale`,`Galaxy Leviathan`,5,`fish`,`#2b1f7a`,`#ff9bf0`,{fin:1,bulk:1.9,patch:1,glow:`#9f7fff`}),d(`cosmicdragon`,`Eternity Dragon`,6,`dragon`,`#1a1250`,`#ffe14d`,{glow:`#ff7fff`,wing:`#5f3fe8`,eyeC:`#ffe14d`})]},p=(e,t)=>{(f[e]||(f[e]=[])).push(...t)};p(`meadow`,[d(`mouse`,`Field Mouse`,0,`quad`,`#b5a595`,`#f6d9d0`,{ear:`fan`,earSmall:1,tail:`long`,legH:.2,snout:.18,len:.8}),d(`chick`,`Chick`,0,`bird`,`#ffe04d`,`#fff4b0`,{beak:`#ff9b1f`}),d(`piglet`,`Piglet`,0,`quad`,`#ffb0c0`,`#ffd6de`,{ear:`point`,tail:`short`,legH:.26,snout:.14,bulk:1.15}),d(`duck`,`Duckling`,1,`bird`,`#fbfbfb`,`#fff4c0`,{beak:`#ff9b1f`,headC:`#3f9f5f`}),d(`lamb`,`Woolly Lamb`,1,`quad`,`#f7f3ea`,`#3a3440`,{ear:`round`,tail:`puff`,legH:.36,snout:.14,bulk:1.2}),d(`ladybug`,`Ladybug`,1,`arthro`,`#e8352f`,`#2a2430`,{}),d(`tortoise`,`Tortoise`,2,`turtle`,`#8fae5f`,`#7a5a33`,{}),d(`mole`,`Mole`,2,`biped`,`#5f5048`,`#e8b8a8`,{ear:`round`,armL:.5,chubby:1}),d(`meadowslime`,`Dew Blob`,3,`slime`,`#a8f06a`,`#f0ffd0`,{}),d(`meadowfox`,`Clover Fox`,4,`quad`,`#6fd85f`,`#f4ffe0`,{ear:`point`,tail:`bushy`,legH:.4,snout:.34,glow:`#a8f06a`})]),p(`forest`,[d(`hare`,`Brown Hare`,0,`quad`,`#a87f55`,`#f0e0c8`,{ear:`long`,tail:`puff`,legH:.34,snout:.12,hop:1}),d(`robin`,`Robin`,0,`bird`,`#8f6a4f`,`#ff7a4a`,{beak:`#3a3440`}),d(`raccoon`,`Raccoon`,1,`quad`,`#8a8a95`,`#efefef`,{ear:`round`,tail:`bushy`,legH:.3,snout:.24,stripeHead:1,tailTip:`#3a3440`}),d(`toad`,`Mossy Toad`,1,`frog`,`#7a9a4f`,`#d8e0a0`,{warts:`#4f6a2f`}),d(`boar`,`Wild Boar`,2,`quad`,`#6a4f3f`,`#a08a70`,{ear:`point`,tail:`tuft`,legH:.4,snout:.22,tusks:1,bulk:1.3}),d(`stag`,`Forest Stag`,3,`quad`,`#9a6a3f`,`#e8d0a8`,{ear:`point`,tail:`puff`,legH:.75,neck:.55,snout:.22,horn:`antler`}),d(`treant`,`Sapling Golem`,4,`golem`,`#6a8a3f`,`#7a5a33`,{glow:`#a8f06a`})]),p(`savanna`,[d(`meerkat`,`Meerkat`,0,`biped`,`#d0ae78`,`#f4e6c8`,{ear:`round`,armL:.55}),d(`gazelle`,`Gazelle`,0,`quad`,`#d8a05f`,`#fff0d8`,{ear:`point`,tail:`puff`,legH:.72,neck:.3,snout:.24,horn:`curved`}),d(`warthog`,`Warthog`,1,`quad`,`#7f6a5a`,`#b8a08a`,{ear:`point`,tail:`tuft`,legH:.34,snout:.26,tusks:1}),d(`ostrich`,`Ostrich`,2,`bird`,`#2f2a30`,`#f4e6d8`,{beak:`#e8a05f`,headC:`#f0c8a8`,longTail:1}),d(`cheetah`,`Cheetah`,3,`quad`,`#eebb55`,`#fff0cc`,{ear:`round`,tail:`long`,legH:.62,snout:.2,spots:`#3a3440`}),d(`rhino`,`Rhino`,4,`quad`,`#8a8f98`,`#b8bcc4`,{ear:`point`,tail:`tuft`,legH:.55,snout:.3,horn:`single`,bulk:1.6})]),p(`desert`,[d(`beetle`,`Dung Beetle`,0,`arthro`,`#4a3f58`,`#7f6a90`,{}),d(`jerboa`,`Jerboa`,0,`quad`,`#e0c28a`,`#fff4dc`,{ear:`long`,tail:`long`,legH:.34,snout:.12,hop:1,len:.75}),d(`gecko`,`Gecko`,1,`reptile`,`#8fd0a0`,`#e8f8d0`,{}),d(`vulture`,`Vulture`,1,`bird`,`#5a4a48`,`#e8d8c8`,{beak:`#c9a05f`,headC:`#e8b8a8`,wingBig:1}),d(`sandcat`,`Sand Cat`,2,`quad`,`#e8c88f`,`#fff4dc`,{ear:`fan`,earSmall:1,tail:`long`,legH:.34,snout:.14}),d(`rattler`,`Rattlesnake`,3,`snake`,`#a8824f`,`#e8d0a0`,{}),d(`sphinx`,`Sphinx Cat`,4,`quad`,`#f0d070`,`#fff4c0`,{ear:`point`,tail:`long`,legH:.5,snout:.18,mane:`#3f7ab0`,glow:`#ffe28a`})]),p(`jungle`,[d(`frogdart`,`Dart Frog`,0,`frog`,`#3f8fe8`,`#ffe04d`,{warts:`#2a2430`}),d(`sloth`,`Sloth`,0,`biped`,`#a08a70`,`#e0d0b8`,{ear:`round`,armL:1.3,chubby:1}),d(`tapir`,`Tapir`,1,`quad`,`#3f3a48`,`#e8e0d8`,{ear:`round`,tail:`short`,legH:.4,snout:.32,bulk:1.2}),d(`iguana`,`Iguana`,1,`reptile`,`#5fb85f`,`#c8e88f`,{}),d(`jaguar`,`Jaguar`,2,`quad`,`#e8ae4a`,`#fff0c8`,{ear:`round`,tail:`long`,legH:.5,snout:.22,spots:`#3a3440`}),d(`anaconda`,`Anaconda`,3,`snake`,`#4f7a3f`,`#c8d890`,{}),d(`tiger`,`Tiger`,4,`quad`,`#ef8f33`,`#fff0dc`,{ear:`round`,tail:`long`,legH:.55,snout:.24,stripes:`#2a2430`,bulk:1.15})]),p(`ocean`,[d(`clownfish`,`Clownfish`,0,`fish`,`#ff8f2c`,`#ffffff`,{patch:1,bulk:.7}),d(`starfish`,`Sea Star`,0,`slime`,`#ff7f8f`,`#ffd0d8`,{}),d(`seagull`,`Seagull`,1,`bird`,`#f4f6f8`,`#ffffff`,{beak:`#ffc531`,wingBig:1}),d(`otter`,`Sea Otter`,1,`biped`,`#8a6a4f`,`#e8d0b8`,{ear:`round`,tail:`short`,armL:.7}),d(`manta`,`Manta Ray`,2,`fish`,`#3f5f8f`,`#e8f0f8`,{bulk:1.1}),d(`squid`,`Glow Squid`,3,`jelly`,`#ff7fb0`,`#ffe0ee`,{glow:`#ff9bc0`}),d(`narwhal`,`Narwhal`,4,`fish`,`#c8d8e8`,`#ffffff`,{fin:1,bulk:1.2,patch:1,glow:`#bfe8ff`})]),p(`mountains`,[d(`pika`,`Pika`,0,`quad`,`#b8a890`,`#f0e8d8`,{ear:`round`,tail:`none`,legH:.2,snout:.12,len:.75}),d(`sheep`,`Bighorn`,0,`quad`,`#c8b090`,`#f0e8d8`,{ear:`round`,tail:`short`,legH:.46,snout:.22,horn:`ram`}),d(`hawk`,`Red Hawk`,1,`bird`,`#a8562f`,`#f4e0c8`,{beak:`#3a3440`,wingBig:1}),d(`lynx`,`Lynx`,2,`quad`,`#c8a880`,`#f4ece0`,{ear:`point`,tail:`short`,legH:.48,snout:.18,spots:`#6a5a4a`}),d(`rockgolem`,`Boulder Golem`,3,`golem`,`#8a8f98`,`#5f6470`,{glow:`#ffb84d`}),d(`yeti`,`Yeti`,4,`biped`,`#eef4fa`,`#a8c8e8`,{ear:`round`,armL:1.4,bulk:1.5})]),p(`arctic`,[d(`hareice`,`Snow Hare`,0,`quad`,`#fbfdff`,`#ffd6e0`,{ear:`long`,tail:`puff`,legH:.32,snout:.12,hop:1}),d(`puffin`,`Puffin`,0,`biped`,`#2a2d3a`,`#ffffff`,{penguin:1,beak:`#ff7a2c`}),d(`walrus`,`Walrus`,1,`fish`,`#9a7a62`,`#c8a88f`,{seal:1,bulk:1.3}),d(`reindeer`,`Reindeer`,2,`quad`,`#9a7a5f`,`#f0e6d8`,{ear:`point`,tail:`puff`,legH:.68,neck:.4,snout:.24,horn:`antler`}),d(`muskox`,`Musk Ox`,3,`quad`,`#4f3f35`,`#7f6a5a`,{ear:`round`,tail:`short`,legH:.46,snout:.22,horn:`curved`,bulk:1.5,mane:`#2f2520`}),d(`frostgolem`,`Frost Golem`,4,`golem`,`#bfe8ff`,`#5fa8e0`,{glow:`#bfe8ff`})]),p(`volcano`,[d(`emberbug`,`Ember Beetle`,0,`arthro`,`#3a2228`,`#ff7a2c`,{}),d(`smokerat`,`Soot Rat`,0,`quad`,`#4a4248`,`#7a6f78`,{ear:`fan`,earSmall:1,tail:`long`,legH:.22,snout:.18,eyeC:`#ffb23f`}),d(`firefox`,`Flame Fox`,1,`quad`,`#ff5a1f`,`#ffd24d`,{ear:`point`,tail:`bushy`,legH:.4,snout:.34,tailTip:`#ffe14d`}),d(`cinderlizard`,`Cinder Salamander`,2,`reptile`,`#ff7a2c`,`#3a2228`,{}),d(`basilisk`,`Basilisk`,3,`snake`,`#2e2024`,`#ff5a1f`,{hood:1}),d(`magmagolem`,`Magma Titan`,4,`golem`,`#3a2228`,`#ff5a1f`,{glow:`#ff7a2c`})]),p(`fantasy`,[d(`sprout`,`Sprout Sprite`,0,`biped`,`#a8e88f`,`#f4ffd8`,{ear:`long`,armL:.5}),d(`mothling`,`Moon Moth`,0,`bird`,`#d8c8ff`,`#fff0ff`,{beak:`#c8b8ff`,wingBig:1}),d(`dreamfrog`,`Dream Frog`,1,`frog`,`#ff9be0`,`#fff0fa`,{warts:`#b48fff`}),d(`faefox`,`Fae Fox`,2,`quad`,`#ffb8ea`,`#fff`,{ear:`point`,tail:`bushy`,legH:.4,snout:.3,wings:`#e8d8ff`}),d(`owlbear`,`Owlbear`,3,`griffin`,`#8a6aa8`,`#e8d8f8`,{beak:`#ffd24d`,wing:`#b48fff`}),d(`hippogryph`,`Hippogryph`,4,`griffin`,`#e8e0ff`,`#fff`,{beak:`#c8b8ff`,wing:`#fff`,glow:`#e8d8ff`})]),p(`crystal`,[d(`crystalcrab`,`Quartz Crab`,0,`arthro`,`#c8b8ff`,`#f0ecff`,{claws:1}),d(`prismfish`,`Prism Fish`,0,`fish`,`#7fe8ff`,`#ffb8ea`,{bulk:.75}),d(`facetfrog`,`Facet Frog`,1,`frog`,`#5fd8f0`,`#e8fbff`,{warts:`#fff`}),d(`gemsnake`,`Gem Serpent`,2,`snake`,`#7f8fff`,`#d8e0ff`,{hood:1}),d(`crystalbear`,`Crystal Bear`,3,`quad`,`#bfefff`,`#fff`,{ear:`round`,tail:`short`,legH:.46,snout:.28,bulk:1.5,spikes:1,spots:`#7fd8f0`}),d(`diamondgriffin`,`Diamond Griffin`,4,`griffin`,`#d0f8ff`,`#fff`,{beak:`#7fe8ff`,wing:`#fff`,glow:`#9df0ff`})]),p(`sky`,[d(`kite`,`Kite Bird`,0,`bird`,`#ff9b6a`,`#fff0d8`,{beak:`#ffd24d`,longTail:1,wingBig:1}),d(`mistjelly`,`Mist Jelly`,0,`jelly`,`#e0efff`,`#ffffff`,{}),d(`zepfox`,`Zephyr Fox`,1,`quad`,`#e8f4ff`,`#ffffff`,{ear:`point`,tail:`bushy`,legH:.4,snout:.3,wings:`#ffffff`}),d(`rainfrog`,`Rain Frog`,1,`frog`,`#7fb8f0`,`#e8f4ff`,{}),d(`cloudbear`,`Nimbus Bear`,2,`quad`,`#ffffff`,`#dfefff`,{ear:`round`,tail:`puff`,legH:.4,snout:.24,bulk:1.5}),d(`thundersnake`,`Thunder Serpent`,3,`snake`,`#55649a`,`#ffe14d`,{hood:1}),d(`skygolem`,`Sky Colossus`,4,`golem`,`#f0f6ff`,`#8fb0e8`,{glow:`#ffe28a`})]),p(`cosmic`,[d(`moonmouse`,`Moon Mouse`,0,`quad`,`#b8b0d8`,`#e8e4ff`,{ear:`fan`,earSmall:1,tail:`long`,legH:.2,snout:.18,len:.8}),d(`astrobird`,`Astro Finch`,0,`bird`,`#3f3090`,`#8fd8ff`,{beak:`#ffe14d`}),d(`pulsarcrab`,`Pulsar Crab`,1,`arthro`,`#5f3fd8`,`#ff9bf0`,{claws:1}),d(`starseal`,`Star Seal`,2,`fish`,`#2f2670`,`#c9a8ff`,{seal:1}),d(`nebulagolem`,`Nebula Golem`,3,`golem`,`#2b1f7a`,`#7f5fff`,{glow:`#ff7fd8`}),d(`cometstag`,`Comet Stag`,4,`quad`,`#1a1250`,`#8fd8ff`,{ear:`point`,tail:`puff`,legH:.8,neck:.6,snout:.22,horn:`antler`,glow:`#8fd8ff`})]),p(`candy`,[d(`gumdrop`,`Gumdrop`,0,`slime`,`#ff7fb5`,`#ffd6ea`,{}),d(`jellybird`,`Jelly Bird`,0,`bird`,`#7fd8ff`,`#fff0fa`,{beak:`#ffe14d`}),d(`toffeepup`,`Toffee Pup`,0,`quad`,`#c9804a`,`#ffe0b8`,{ear:`round`,tail:`short`,legH:.32,snout:.2}),d(`lollipig`,`Lolli Pig`,1,`quad`,`#ff9bc0`,`#fff0f6`,{ear:`point`,tail:`puff`,legH:.28,snout:.14,bulk:1.2}),d(`mintfrog`,`Mint Frog`,1,`frog`,`#7fe8c0`,`#f4fff8`,{warts:`#ff7fb5`}),d(`cakebear`,`Frosted Bear`,2,`quad`,`#ffe0ee`,`#fff`,{ear:`round`,tail:`puff`,legH:.4,snout:.24,bulk:1.45,spots:`#ff7fb5`}),d(`sugarsnake`,`Candy Cane Snake`,3,`snake`,`#ff4f6a`,`#ffffff`,{}),d(`caramelgolem`,`Caramel Golem`,4,`golem`,`#d8984f`,`#ffe0a0`,{glow:`#ffd24d`}),d(`rainbowunicorn`,`Sugarplum Unicorn`,5,`quad`,`#fff0fa`,`#ffc9ec`,{ear:`point`,tail:`tuft`,legH:.78,neck:.6,snout:.28,horn:`single`,mane:`#ff7fd8`,wings:`#fff`,glow:`#ff9bf0`}),d(`candydragon`,`Bonbon Dragon`,6,`dragon`,`#ff7fb5`,`#fff4c9`,{glow:`#ff9bf0`,wing:`#7fd8ff`})]),p(`clockwork`,[d(`cogmouse`,`Cog Mouse`,0,`quad`,`#b89a5f`,`#e8d8a8`,{ear:`fan`,earSmall:1,tail:`long`,legH:.22,snout:.18,eyeC:`#ff7a2c`}),d(`tinbird`,`Tin Bird`,0,`bird`,`#a9b4c0`,`#e3e8ef`,{beak:`#c9803f`}),d(`brassbug`,`Brass Beetle`,0,`arthro`,`#c9a23f`,`#7a5a20`,{}),d(`springfrog`,`Spring Frog`,1,`frog`,`#9a8f5f`,`#e8dca8`,{warts:`#c9803f`}),d(`gearhound`,`Gear Hound`,1,`quad`,`#8a7f6a`,`#c8b890`,{ear:`point`,tail:`short`,legH:.52,snout:.36,eyeC:`#ffb23f`}),d(`steamram`,`Steam Ram`,2,`quad`,`#a8824f`,`#d8c08a`,{ear:`round`,tail:`short`,legH:.5,snout:.24,horn:`ram`,bulk:1.3}),d(`automaton`,`Automaton`,3,`golem`,`#c9a23f`,`#7a5a20`,{glow:`#ffb23f`}),d(`tickwolf`,`Tick-Tock Wolf`,4,`quad`,`#b8a070`,`#e8d8a8`,{ear:`point`,tail:`bushy`,legH:.6,snout:.4,spikes:1,glow:`#ffd24d`}),d(`gyrogriffin`,`Gyro Griffin`,5,`griffin`,`#c9a23f`,`#f0d890`,{beak:`#a9b4c0`,wing:`#a9b4c0`,glow:`#ffd24d`}),d(`clockdragon`,`Chronos Drake`,6,`dragon`,`#a8824f`,`#ffe48a`,{glow:`#ffb23f`,wing:`#c9a23f`,eyeC:`#ff5a2c`})]),p(`marsh`,[d(`bogfrog`,`Bog Frog`,0,`frog`,`#4f6a3f`,`#a8b86f`,{warts:`#2f4a2f`}),d(`gloomslime`,`Gloom Slime`,0,`slime`,`#5f8f6a`,`#c8e8b8`,{eyeStalks:1}),d(`reedbird`,`Reed Heron`,0,`bird`,`#7f9aa8`,`#e8f0f0`,{beak:`#e8b84a`}),d(`leech`,`Marsh Eel`,1,`snake`,`#3a4a48`,`#8fae8f`,{}),d(`gator`,`Gloom Gator`,1,`reptile`,`#4a6a3f`,`#b8c88f`,{}),d(`swamphog`,`Swamp Hog`,2,`quad`,`#4a4a3f`,`#8a8a6a`,{ear:`point`,tail:`tuft`,legH:.36,snout:.24,tusks:1,bulk:1.3}),d(`wispjelly`,`Will-o-Wisp`,3,`jelly`,`#bfff8f`,`#ffffff`,{glow:`#bfff8f`}),d(`mirebeast`,`Mire Beast`,4,`golem`,`#3f5a3f`,`#7a8f4f`,{glow:`#bfff8f`}),d(`hydra`,`Fen Hydra`,5,`dragon`,`#3f6a4f`,`#c8e88f`,{glow:`#7fff9b`,wing:`#2f4f3f`,eyeC:`#ffe14d`}),d(`banshee`,`Moonfen Spirit`,6,`griffin`,`#c8e8d8`,`#ffffff`,{beak:`#bfff8f`,wing:`#8fd8c0`,glow:`#bfffe0`})]),p(`aurora`,[d(`auroramoth`,`Aurora Moth`,0,`bird`,`#7ff0c8`,`#e0fff4`,{beak:`#c8b8ff`,wingBig:1}),d(`glimmerfish`,`Glimmer Fish`,0,`fish`,`#5fd8f0`,`#bff8d8`,{bulk:.75}),d(`icemite`,`Ice Mite`,0,`arthro`,`#bfe8ff`,`#5fa8e0`,{}),d(`polarhare`,`Polar Hare`,1,`quad`,`#e8fff8`,`#7ff0c8`,{ear:`long`,tail:`puff`,legH:.34,snout:.12,hop:1}),d(`driftseal`,`Drift Seal`,1,`fish`,`#8fb0e8`,`#e8f4ff`,{seal:1}),d(`skywolf`,`Rift Wolf`,2,`quad`,`#3f6a9a`,`#bff8d8`,{ear:`point`,tail:`bushy`,legH:.6,snout:.4,mane:`#7ff0c8`}),d(`ribbonsnake`,`Ribbon Serpent`,3,`snake`,`#7f5fff`,`#7ff0c8`,{hood:1}),d(`riftgolem`,`Rift Golem`,4,`golem`,`#2f4f8f`,`#7ff0c8`,{glow:`#7ff0c8`}),d(`auroragriffin`,`Aurora Griffin`,5,`griffin`,`#7ff0c8`,`#fff`,{beak:`#c8b8ff`,wing:`#7f8fff`,glow:`#7ff0c8`}),d(`auroradragon`,`Borealis Dragon`,6,`dragon`,`#3f8fa8`,`#bff8d8`,{glow:`#7ff0c8`,wing:`#7f5fff`,eyeC:`#fff`})]),p(`eden`,[d(`goldfrog`,`Gilded Frog`,0,`frog`,`#e8c84a`,`#fff4c0`,{warts:`#fff`}),d(`edenbird`,`Songbird`,0,`bird`,`#ff9be0`,`#fff4c0`,{beak:`#ffd24d`,longTail:1}),d(`nectarslime`,`Nectar Slime`,0,`slime`,`#ffd86a`,`#fff6c8`,{}),d(`petalcat`,`Petal Cat`,1,`quad`,`#ffc9ec`,`#fff`,{ear:`point`,tail:`long`,legH:.42,snout:.14}),d(`sunrabbit`,`Sun Rabbit`,1,`quad`,`#ffe48a`,`#fff`,{ear:`long`,tail:`puff`,legH:.34,snout:.12,hop:1}),d(`gardenstag`,`Garden Stag`,2,`quad`,`#e8c88f`,`#fff`,{ear:`point`,tail:`puff`,legH:.78,neck:.55,snout:.22,horn:`antler`,spots:`#fff`}),d(`edenserpent`,`Golden Serpent`,3,`snake`,`#ffc531`,`#fff4c0`,{hood:1}),d(`warden`,`Garden Warden`,4,`golem`,`#c9963f`,`#ffe48a`,{glow:`#fff6c8`}),d(`edenphoenix`,`Dawn Phoenix`,5,`bird`,`#ffb23f`,`#fff4c0`,{beak:`#fff`,wing:`#ff7fd8`,longTail:1,wingBig:1,glow:`#ffd24d`}),d(`originsdragon`,`First Dragon`,6,`dragon`,`#fff6c8`,`#ffc531`,{glow:`#ffffff`,wing:`#ffd86a`,eyeC:`#ff7fd8`})]);var m=[],h={},g={};for(let[t,n]of Object.entries(f)){g[t]=n;for(let r of n)r.biome=t,r.baseIncome=u[t]*c[r.rarity].income,r.saleValue=r.baseIncome*e.economy.sellSeconds,m.push(r),h[r.id]=r}var _=[`frog`,`mouse`,`chick`,`piglet`],v=[{id:`meadow`,name:`Sunny Meadow`,from:0,to:100,renderLen:170,luck:1,ground:`#7fd65a`,ground2:`#93e069`,side:`#5fbb4c`,path:`#c9e88f`,skyTop:`#49b3f2`,skyBottom:`#d6f2ff`,fog:`#d6f2ff`,sun:1.15,ambient:`pollen`,hillNoise:1,props:[[`roundTree`,3,24,110,1,1.8],[`bush`,4,15,70,.7,1.3],[`flower`,12,8,60,.7,1.2],[`grassTuft`,10,7,50,.8,1.3],[`cloud`,1,30,130,1.4,2.6]]},{id:`forest`,name:`Whisper Forest`,from:100,to:300,renderLen:230,luck:1.25,ground:`#57b35a`,ground2:`#4aa553`,side:`#3b8a48`,path:`#a8c777`,skyTop:`#5bb0d8`,skyBottom:`#cdeedd`,fog:`#c0e6d2`,sun:1,ambient:`leaves`,hillNoise:1.2,props:[[`pine`,8,15,110,.9,2],[`roundTree`,4,18,100,1,1.7],[`mushroom`,6,8,40,.7,1.5],[`bush`,5,12,60,.8,1.4],[`grassTuft`,6,7,40,.8,1.2]]},{id:`savanna`,name:`Golden Savanna`,from:300,to:700,renderLen:250,luck:1.6,ground:`#dcc266`,ground2:`#cfb255`,side:`#bd9a4a`,path:`#ecd9a0`,skyTop:`#f3b35c`,skyBottom:`#fbe7b5`,fog:`#fbe3ad`,sun:1.2,ambient:`dust`,hillNoise:.7,props:[[`acacia`,3,18,110,1,1.9],[`dryGrass`,12,7,70,.8,1.5],[`rock`,2,12,80,.6,1.5],[`cloud`,1,30,130,1.2,2]]},{id:`desert`,name:`Dune Sea`,from:700,to:1500,renderLen:250,luck:2,ground:`#f0d58c`,ground2:`#e8c878`,side:`#dcb166`,path:`#f8e7b3`,skyTop:`#4fb6e8`,skyBottom:`#fdeec6`,fog:`#fbe8bd`,sun:1.3,ambient:`dust`,hillNoise:1.6,props:[[`dune`,3,26,110,1,2.2],[`cactus`,5,9,70,.8,1.5],[`rock`,2,12,80,.6,1.3]]},{id:`jungle`,name:`Emerald Jungle`,from:1500,to:3e3,renderLen:250,luck:2.5,ground:`#36a24e`,ground2:`#2d9245`,side:`#1f7a3c`,path:`#7fc266`,skyTop:`#3fbfa5`,skyBottom:`#c8f2cf`,fog:`#a9e4bd`,sun:1,ambient:`leaves`,hillNoise:1.5,props:[[`palm`,7,12,100,1,1.9],[`vineTree`,5,20,100,1,1.9],[`bigLeaf`,10,7,50,.8,1.6],[`flower`,6,7,40,.9,1.4]]},{id:`ocean`,name:`Coral Lagoon`,from:3e3,to:6e3,renderLen:260,luck:3.2,ground:`#3cc8d8`,ground2:`#2fb8d0`,side:`#1f8fc4`,path:`#9de8e0`,skyTop:`#2f9ee8`,skyBottom:`#d3f6fb`,fog:`#c6f0f7`,sun:1.2,ambient:`bubbles`,hillNoise:.15,sideRise:.18,props:[[`island`,2,28,110,1,2],[`coral`,10,7,60,.8,1.5],[`seaRock`,3,12,70,.7,1.4],[`cloud`,1,30,130,1.3,2.2]]},{id:`mountains`,name:`Stonehorn Peaks`,from:6e3,to:12e3,renderLen:260,luck:4,ground:`#9fb08e`,ground2:`#90a283`,side:`#7c8896`,path:`#cfd6c0`,skyTop:`#5f9de0`,skyBottom:`#e3eef8`,fog:`#d5e4f2`,sun:1.05,ambient:`mist`,hillNoise:2.4,sideRise:1.5,props:[[`peak`,2,42,120,1,2.2],[`rock`,6,10,70,.7,1.8],[`pine`,3,16,70,.8,1.4],[`cloud`,1,30,130,1.4,2.4]]},{id:`arctic`,name:`Frostglass Tundra`,from:12e3,to:25e3,renderLen:260,luck:5,ground:`#e8f6fc`,ground2:`#d6eef9`,side:`#bcdcf0`,path:`#ffffff`,skyTop:`#7fbcef`,skyBottom:`#f0fbff`,fog:`#e8f7fd`,sun:1.1,ambient:`snow`,hillNoise:1.4,props:[[`snowPine`,5,14,100,.9,1.7],[`iceSpike`,5,9,70,.8,1.9],[`glacier`,2,34,115,1,2]]},{id:`volcano`,name:`Emberforge Caldera`,from:25e3,to:5e4,renderLen:260,luck:6.5,ground:`#4a3a3e`,ground2:`#3d2f34`,side:`#2d2329`,path:`#8a4b34`,skyTop:`#3a1d2e`,skyBottom:`#f2703c`,fog:`#c2553a`,sun:.75,ambient:`embers`,hillNoise:2,sideRise:1.2,props:[[`volcano`,1,55,125,1,1.8],[`lavaRock`,7,9,75,.7,1.6],[`lavaPool`,3,10,50,.8,1.6]]},{id:`fantasy`,name:`Moonpetal Valley`,from:5e4,to:1e5,renderLen:260,luck:8,ground:`#9f7fe0`,ground2:`#b08be8`,side:`#7a5fc8`,path:`#f4c9f0`,skyTop:`#4d3fb5`,skyBottom:`#f6c6ee`,fog:`#e4b6ea`,sun:.95,ambient:`sparkle`,hillNoise:1.3,props:[[`magicTree`,5,14,105,1,1.9],[`glowShroom`,8,8,50,.8,1.7],[`crystal`,3,12,70,.7,1.4]]},{id:`crystal`,name:`Prism Realm`,from:1e5,to:25e4,renderLen:260,luck:10,ground:`#57d8e0`,ground2:`#74a8f0`,side:`#5a5fd8`,path:`#e8fbff`,skyTop:`#2a2c85`,skyBottom:`#8fe8f2`,fog:`#7fcfe8`,sun:.9,ambient:`sparkle`,hillNoise:1.8,props:[[`crystal`,9,9,90,.9,2.4],[`gemCluster`,6,8,60,.7,1.5],[`iceSpike`,2,20,90,1,2]]},{id:`sky`,name:`Cloudreach Isles`,from:25e4,to:5e5,renderLen:260,luck:13,ground:`#ffffff`,ground2:`#eaf4ff`,side:`#d8e8fa`,path:`#fff4c9`,skyTop:`#3d8bf0`,skyBottom:`#ffe8d0`,fog:`#fbeee2`,sun:1.25,ambient:`mist`,hillNoise:.9,props:[[`floatIsle`,3,24,115,1,2],[`cloud`,6,12,120,1,2.8],[`rainbowArc`,.3,36,90,1,1.4]]},{id:`cosmic`,name:`Starfall Expanse`,from:5e5,to:1e6,renderLen:300,luck:16,ground:`#2a1f5e`,ground2:`#3a2a7a`,side:`#160f3a`,path:`#7a5fff`,skyTop:`#05031a`,skyBottom:`#2b1466`,fog:`#1d1050`,sun:.7,ambient:`stars`,stars:1,hillNoise:1.8,props:[[`starRock`,7,9,90,.7,1.8],[`planet`,.6,45,125,1,2.4],[`crystal`,3,12,70,.8,1.5]]},{id:`candy`,name:`Sugarloaf Coast`,from:1e6,to:25e5,renderLen:280,luck:20,ground:`#ffb3d9`,ground2:`#ffc9e6`,side:`#ff8fc4`,path:`#fff4c9`,skyTop:`#ff8fd0`,skyBottom:`#fff0d0`,fog:`#ffe0e8`,sun:1.2,ambient:`sparkle`,hillNoise:1.2,props:[[`glowShroom`,8,8,60,1,2.2],[`magicTree`,5,14,105,1,1.9],[`gemCluster`,5,8,60,.8,1.5],[`cloud`,2,30,130,1.2,2.4]]},{id:`clockwork`,name:`Clockwork Canyon`,from:25e5,to:6e6,renderLen:280,luck:25,ground:`#c9a25f`,ground2:`#b8904f`,side:`#8f6a3a`,path:`#f0d890`,skyTop:`#7f6a4f`,skyBottom:`#f5dca8`,fog:`#e8cf9a`,sun:1,ambient:`dust`,hillNoise:1.6,sideRise:1.3,props:[[`rock`,7,9,80,.8,1.9],[`starRock`,4,12,70,.8,1.5],[`peak`,1,44,120,.8,1.6],[`crystal`,2,14,70,.7,1.2]]},{id:`marsh`,name:`Gloomfen Marsh`,from:6e6,to:15e6,renderLen:280,luck:32,ground:`#4a7a55`,ground2:`#3f6a50`,side:`#2f4f45`,path:`#8fae6f`,skyTop:`#2f4a5f`,skyBottom:`#a8c8a0`,fog:`#90b09a`,sun:.8,ambient:`mist`,hillNoise:1.4,props:[[`vineTree`,6,14,105,1,2],[`glowShroom`,6,8,50,.9,1.9],[`bigLeaf`,8,7,50,.8,1.5],[`seaRock`,3,10,60,.8,1.5]]},{id:`aurora`,name:`Aurora Rift`,from:15e6,to:4e7,renderLen:280,luck:40,ground:`#3f8fa8`,ground2:`#5fa8b8`,side:`#2f5a8f`,path:`#bff8d8`,skyTop:`#1a1f6a`,skyBottom:`#7ff0c8`,fog:`#6fd8c0`,sun:.85,ambient:`sparkle`,stars:.7,hillNoise:1.8,sideRise:1.2,props:[[`iceSpike`,7,9,90,1,2.3],[`crystal`,5,10,80,.9,2],[`glacier`,2,34,115,1,1.8],[`snowPine`,3,14,90,.9,1.5]]},{id:`eden`,name:`The Last Garden`,from:4e7,to:1e8,renderLen:320,luck:50,ground:`#ffd86a`,ground2:`#ffe48a`,side:`#e8b84a`,path:`#ffffff`,skyTop:`#ff7fd8`,skyBottom:`#fff6c8`,fog:`#fff0c0`,sun:1.3,ambient:`sparkle`,hillNoise:1.5,props:[[`magicTree`,7,12,105,1.1,2.3],[`floatIsle`,2,28,115,1,1.9],[`flower`,12,7,60,1,1.9],[`rainbowArc`,.4,36,90,1,1.5]]}],y={meadow:[[`oak`,`Oak`,1,1],[`apple`,`Apple Tree`,.95,.8],[`bush`,`Berry Bush`,1.1,.6],[`greatOak`,`Great Oak`,1.25,1.6]],forest:[[`pine`,`Pine`,1,1],[`birch`,`Birch`,1,.8],[`greatPine`,`Great Pine`,1.1,1.6]],savanna:[[`acacia`,`Acacia`,1.05,1],[`oldAcacia`,`Old Acacia`,1.3,1.6]],desert:[[`saguaro`,`Saguaro`,1.1,1],[`datePalm`,`Date Palm`,1,1.2]],jungle:[[`palm`,`Palm`,1.05,1],[`kapok`,`Kapok`,1.15,1.6]],ocean:[[`palm`,`Coconut Palm`,1,1],[`datePalm`,`Island Palm`,1.15,1.4]],mountains:[[`spruce`,`Spruce`,1,1],[`glacierFir`,`Ancient Spruce`,1.15,1.7]],arctic:[[`frostFir`,`Frost Fir`,1,1],[`glacierFir`,`Glacier Fir`,1.2,1.7]],volcano:[[`ember`,`Ember Tree`,1,1],[`magmaOak`,`Magma Oak`,1.2,1.6]],fantasy:[[`blossom`,`Blossom Tree`,1,1],[`moonMushroom`,`Moon Mushroom`,1,.8]],crystal:[[`crystalTree`,`Crystal Tree`,1,1],[`prismSpire`,`Prism Spire`,1.2,1.7]],sky:[[`cloudWillow`,`Cloud Willow`,1,1],[`cloudWillow`,`Sky Willow`,1.25,1.6]],cosmic:[[`starTree`,`Star Tree`,1,1],[`nebula`,`Nebula Tree`,1.15,1.7]],candy:[[`lollipop`,`Lollipop Tree`,1,1],[`cottonCandy`,`Cotton Candy Tree`,1.1,1.4]],clockwork:[[`gear`,`Gear Tree`,1,1],[`brassTitan`,`Brass Titan`,1.15,1.7]],marsh:[[`willow`,`Willow`,1,1],[`bogMushroom`,`Bog Mushroom`,1,.8]],aurora:[[`auroraFir`,`Aurora Fir`,1,1],[`riftCrystal`,`Rift Crystal`,1.15,1.6]],eden:[[`golden`,`Golden Tree`,1.05,1],[`treeOfAges`,`Tree of Ages`,1.25,1.8]]};for(let e of v)e.trees=y[e.id].map(([e,t,n,r])=>({model:e,name:t,scale:n,hp:r}));var b=0;for(let e of v)e.renderStart=b,b+=e.renderLen,e.renderEnd=b;var x=b;v[v.length-1].to;function S(e){for(let t=0;t<v.length;t++)if(e<v[t].to)return t;return v.length-1}function C(e){if(e<=0)return 0;for(let t=0;t<v.length;t++)if(e<v[t].renderEnd)return t;return v.length-1}function w(e){if(e<=0)return 0;let t=v[C(e)],n=Math.min(1,(e-t.renderStart)/t.renderLen);return t.from+n*(t.to-t.from)}var T=[{id:`basic`,name:`Birch Treadmill`,cost:0,xp:1,color:`#b98a55`,metal:0},{id:`steel`,name:`Iron Treadmill`,cost:75,xp:2,color:`#a9b4c0`,metal:.5},{id:`bronze`,name:`Copper Treadmill`,cost:900,xp:5,color:`#c9803f`,metal:.6},{id:`silver`,name:`Pewter Treadmill`,cost:8e3,xp:10,color:`#e3e8ef`,metal:.7},{id:`gold`,name:`Brass Treadmill`,cost:9e4,xp:20,color:`#ffc531`,metal:.8},{id:`ruby`,name:`Garnet Treadmill`,cost:85e4,xp:40,color:`#e8325a`,metal:.5,gem:1},{id:`amber`,name:`Topaz Treadmill`,cost:8e6,xp:80,color:`#ff9b1f`,metal:.5,gem:1},{id:`chrome`,name:`Titanium Treadmill`,cost:5e7,xp:160,color:`#dff4ff`,metal:.9,gem:1},{id:`jade`,name:`Jade Treadmill`,cost:3e8,xp:320,color:`#35d08a`,metal:.5,gem:1,glow:1},{id:`sapphire`,name:`Sapphire Treadmill`,cost:25e8,xp:640,color:`#3f7bff`,metal:.6,gem:1,glow:1},{id:`amethyst`,name:`Amethyst Treadmill`,cost:2e10,xp:1280,color:`#b14cff`,metal:.6,gem:1,glow:1},{id:`obsidian`,name:`Magma Treadmill`,cost:2e11,xp:2560,color:`#ff5a1f`,metal:.4,gem:1,glow:1},{id:`prism`,name:`Prism Treadmill`,cost:2e12,xp:5120,color:`#7fe8ff`,metal:.8,gem:1,glow:1},{id:`solar`,name:`Solar Treadmill`,cost:25e12,xp:10240,color:`#ffe14d`,metal:.8,gem:1,glow:1},{id:`cosmos`,name:`Cosmos Treadmill`,cost:3e14,xp:20480,color:`#ff7fff`,metal:.8,gem:1,glow:1},{id:`candy`,name:`Sugarglass Treadmill`,cost:0xe35fa931a0000,xp:40960,color:`#ff9bc0`,metal:.7,gem:1,glow:1},{id:`brass`,name:`Clockwork Treadmill`,cost:0xd529ae9e860000,xp:81920,color:`#c9a23f`,metal:.9,gem:1,glow:1},{id:`moss`,name:`Gloomwood Treadmill`,cost:0xde0b6b3a7640000,xp:163840,color:`#7fbf6a`,metal:.3,gem:1,glow:1},{id:`aurora`,name:`Aurora Treadmill`,cost:0x1158e460913d00000,xp:327680,color:`#7ff0c8`,metal:.8,gem:1,glow:1},{id:`quasar`,name:`Quasar Treadmill`,cost:0x15af1d78b58c400000,xp:655360,color:`#8f7fff`,metal:.9,gem:1,glow:1},{id:`eternal`,name:`Eternal Treadmill`,cost:1e22,xp:1310720,color:`#fff6c8`,metal:.9,gem:1,glow:1}],E=[{id:`income`,name:`Pet Treats`,desc:`All pets earn more`,icon:`coin`,per:.05,unit:`pct`,cost:500,growth:2.6,max:45},{id:`xp`,name:`Protein Shake`,desc:`More XP per rep`,icon:`dumbbell`,per:.05,unit:`pct`,cost:300,growth:2.5,max:45},{id:`luck`,name:`Lucky Charm`,desc:`Rarer eggs more often`,icon:`clover`,per:.012,unit:`luck`,cost:2500,growth:2.9,max:25},{id:`speed`,name:`Fast Feet`,desc:`Run faster`,icon:`bolt`,per:.025,unit:`pct`,cost:1200,growth:3.4,max:24},{id:`hatch`,name:`Warm Nests`,desc:`Eggs hatch faster`,icon:`gift`,per:.03,unit:`pct`,cost:2e3,growth:3.2,max:20}],D=Object.fromEntries(E.map(e=>[e.id,e])),O={THROW:0,PLACE:1,TRAIN:2,SHOP:3,DONE:4};function k(){return{v:4,money:e.economy.startingMoney,lifetime:0,level:1,xp:0,power:2,bar:0,food:`wood`,foods:[`wood`],pets:[],nextUid:1,placed:[],upgrades:{},stars:0,rebirths:0,runEarned:0,sinceRare:0,lastSpecies:null,spots:{},capacity:e.economy.startingSlots,eggs:[],nests:e.eggs.startingNests,biomes:[`meadow`],index:{},claimedBiomes:[],best:0,stats:{chopped:0,stolen:0,caught:0,catches:0,reps:0,bonuses:0,legendaries:0,mythics:0,cosmics:0,sold:0,forestPlus:0,rarePlus:0},achievements:[],quests:{day:0,list:[]},daily:{lastDay:0,streak:0},boosts:{luckUntil:0,trainUntil:0,incomeUntil:0,cashReadyAt:0,lureReadyAt:0,hatchReadyAt:0,lure:!1},settings:{music:.5,sfx:.9,muted:!1,quality:`auto`,effects:!0},tutorial:O.THROW,savedAt:0,pendingOffline:0,pendingOfflineSeconds:0}}var A=(e,t,n=0,r=Number.MAX_VALUE)=>typeof e==`number`&&Number.isFinite(e)?Math.min(r,Math.max(n,e)):t,j={1:e=>(e.placed=e.base||[],delete e.base,e.pendingOffline=0,e.v=2,e),2:e=>(e.spots={},e.v=3,e),3:e=>(e.upgrades={},e.stars=0,e.rebirths=0,e.runEarned=e.lifetime||0,e.sinceRare=0,e.lastSpecies=null,e.v=4,e)};function ee(e){let t=e,n=0;for(;t&&typeof t.v==`number`&&t.v<4&&j[t.v]&&n++<50;)t=j[t.v](t);return t}function M(t){let n=k();if(!t||typeof t!=`object`||Array.isArray(t))return{state:n,corrupted:t!=null};let r=ee(t),i=n;i.money=A(r.money,0),i.lifetime=A(r.lifetime,0),i.level=Math.floor(A(r.level,1,1,1e5)),i.xp=A(r.xp,0),i.bar=Math.floor(A(r.bar,0,0,T.length-1)),i.foods=Array.isArray(r.foods)?[...new Set(r.foods.filter(e=>s[e]))]:[],i.foods.includes(`wood`)||i.foods.unshift(`wood`),i.food=i.foods.includes(r.food)?r.food:`wood`;let a=new Set;i.pets=(Array.isArray(r.pets)?r.pets:[]).filter(e=>!e||!h[e.s]||!Number.isInteger(e.u)||a.has(e.u)||!Number.isFinite(e.i)||e.i<=0?!1:(a.add(e.u),!0)).map(e=>({u:e.u,s:e.s,v:Math.floor(A(e.v,0,0,l.length-1)),i:e.i,t:A(e.t,0)})),i.nextUid=Math.max(A(r.nextUid,1,1),...[...a].map(e=>e+1),1),i.capacity=Math.floor(A(r.capacity,e.economy.startingSlots,e.economy.startingSlots,e.economy.maxSlots)),i.nests=Math.floor(A(r.nests,e.eggs.startingNests,e.eggs.startingNests,e.eggs.maxNests));let o=0;if(i.eggs=(Array.isArray(r.eggs)?r.eggs:[]).filter(e=>!e||!h[e.s]||!Number.isInteger(e.u)||a.has(e.u)||!(e.i>0)?!1:(a.add(e.u),!0)).slice(0,e.eggs.maxStored).map(e=>{let t=A(e.n,-1)>=0&&Number.isFinite(e.x)&&Number.isFinite(e.z)&&o<i.nests;return t&&o++,{u:e.u,b:String(e.b),s:e.s,v:Math.floor(A(e.v,0,0,l.length-1)),i:e.i,q:A(e.q,1,1),n:t?1:-1,x:t?e.x:0,z:t?e.z:0,p:t?A(e.p,0):0,d:t?A(e.d,0,0,864e5):0,f:+!!e.f}}),i.nextUid=Math.max(i.nextUid,...[...a].map(e=>e+1)),i.placed=[...new Set((Array.isArray(r.placed)?r.placed:[]).filter(e=>a.has(e)))].slice(0,i.capacity),r.spots&&typeof r.spots==`object`)for(let e of i.placed){let t=r.spots[e];Array.isArray(t)&&Number.isFinite(t[0])&&Number.isFinite(t[1])&&(i.spots[e]=[t[0],t[1]])}let c=new Set(v.map(e=>e.id));if(i.biomes=Array.isArray(r.biomes)?[...new Set(r.biomes.filter(e=>c.has(e)))]:[],i.biomes.includes(`meadow`)||i.biomes.unshift(`meadow`),i.claimedBiomes=Array.isArray(r.claimedBiomes)?r.claimedBiomes.filter(e=>c.has(e)):[],r.index&&typeof r.index==`object`)for(let[e,t]of Object.entries(r.index))h[e]&&t&&typeof t==`object`&&(i.index[e]={c:Math.floor(A(t.c,1,1)),m:Array.isArray(t.m)?t.m.filter(e=>Number.isInteger(e)&&l[e]):[0],n:!!t.n});for(let e of i.pets)i.index[e.s]||(i.index[e.s]={c:1,m:[e.v],n:!1});if(i.stars=Math.floor(A(r.stars,0)),i.rebirths=Math.floor(A(r.rebirths,0)),i.runEarned=A(r.runEarned,0),i.sinceRare=Math.floor(A(r.sinceRare,0)),i.lastSpecies=h[r.lastSpecies]?r.lastSpecies:null,r.upgrades&&typeof r.upgrades==`object`)for(let e of E){let t=Math.floor(A(r.upgrades[e.id],0,0,e.max));t&&(i.upgrades[e.id]=t)}if(i.best=A(r.best,0),r.stats&&typeof r.stats==`object`)for(let e of Object.keys(i.stats))i.stats[e]=A(r.stats[e],0);if(i.achievements=Array.isArray(r.achievements)?r.achievements.filter(e=>typeof e==`string`):[],r.quests&&Array.isArray(r.quests.list)&&(i.quests={day:A(r.quests.day,0),list:r.quests.list.filter(e=>e&&typeof e.id==`string`).map(e=>({id:e.id,stat:String(e.stat),goal:A(e.goal,1,1),text:String(e.text),reward:A(e.reward,0),progress:A(e.progress,0),claimed:!!e.claimed}))}),r.daily&&(i.daily={lastDay:A(r.daily.lastDay,0),streak:Math.floor(A(r.daily.streak,0,0,1e5))}),r.boosts&&typeof r.boosts==`object`){for(let e of[`luckUntil`,`trainUntil`,`incomeUntil`,`cashReadyAt`,`lureReadyAt`,`hatchReadyAt`])i.boosts[e]=A(r.boosts[e],0);i.boosts.lure=r.boosts.lure===!0}return r.settings&&typeof r.settings==`object`&&(i.settings.music=A(r.settings.music,.5,0,1),i.settings.sfx=A(r.settings.sfx,.9,0,1),i.settings.muted=!!r.settings.muted,i.settings.effects=r.settings.effects!==!1,i.settings.quality=[`auto`,`high`,`low`].includes(r.settings.quality)?r.settings.quality:`auto`),i.savedAt=A(r.savedAt,0),i.pendingOffline=A(r.pendingOffline,0),i.pendingOfflineSeconds=A(r.pendingOfflineSeconds,0),i.tutorial=Math.floor(A(r.tutorial,0,0,O.DONE)),i.tutorial===O.PLACE&&!i.pets.length&&(i.tutorial=O.THROW),i.tutorial===O.THROW&&i.pets.length&&(i.tutorial=i.placed.length?O.TRAIN:O.PLACE),{state:i,corrupted:!1}}var te=class{constructor(e){this.platform=e,this.state=null,this.dirty=!1,this.timer=0,this.writing=!1,this.disabled=!1}async load(){let e=await this.platform.load(),t=e,n=!1;if(typeof e==`string`)try{t=JSON.parse(e)}catch{t=null,n=!0}let r=M(t);return this.state=r.state,{state:r.state,corrupted:n||r.corrupted,fresh:e==null}}mark(){this.dirty=!0}soon(){this.dirty=!0,this.timer=Math.min(this.timer,.4)}update(t){this.timer-=t,this.timer<=0&&(this.timer=e.save.autosaveSeconds,this.dirty=!0,this.flush())}flush(){if(!this.state||!this.dirty||this.disabled)return;this.dirty=!1,this.state.savedAt=this.platform.now();let e;try{e=JSON.stringify(this.state)}catch(e){console.error(`save serialise failed`,e);return}this.platform.save(e)}flushNow(){this.dirty=!0,this.flush()}async afterSignIn(){let e=null;try{e=await this.platform.load()}catch{e=null}let t=e;if(typeof e==`string`)try{t=JSON.parse(e)}catch{t=null}let n=t&&this.state&&t.savedAt===this.state.savedAt;return!t||typeof t!=`object`||n?(this.flushNow(),`kept`):(this.disabled=!0,`reload`)}async wipe(){this.disabled=!0,await this.platform.wipe()}},ne=`rewarded`,N=`closed`,re=`failed`,ie=`opened`,ae=class{constructor(e,{onOpen:t,onClose:n,testAds:r}){this.platform=e,this.onOpen=t,this.onClose=n,this.testAds=r,this.showing=!1,this.pendingRewarded=null;let i=e.ready?e.bridge:null;this.b=i,i&&(i.advertisement.on(i.EVENT_NAME.REWARDED_STATE_CHANGED,e=>this.handleRewarded(e)),i.advertisement.on(i.EVENT_NAME.INTERSTITIAL_STATE_CHANGED,e=>this.handleInterstitial(e)))}get rewardedAvailable(){return this.testAds?!0:!!(this.b&&this.b.advertisement.isRewardedSupported)}handleRewarded(e){let t=this.pendingRewarded;e===ie&&this.onOpen(),t&&(e===ne&&(t.earned=!0),(e===N||e===re)&&(this.pendingRewarded=null,this.showing=!1,this.onClose(),t.resolve(t.earned)))}handleInterstitial(e){e===ie&&this.onOpen(),(e===N||e===re)&&(this.showing=!1,this.onClose())}showRewarded(e){return this.showing?Promise.resolve(!1):this.testAds?this.showTestAd(e):this.rewardedAvailable?(this.showing=!0,new Promise(t=>{this.pendingRewarded={resolve:t,earned:!1};try{this.b.advertisement.showRewarded(e)}catch{this.pendingRewarded=null,this.showing=!1,t(!1)}})):Promise.resolve(!1)}breakTime(){if(!this.showing&&this.b&&this.b.advertisement.isInterstitialSupported)try{this.b.advertisement.showInterstitial(`break`)}catch{}}showTestAd(e){return this.showing=!0,this.onOpen(),new Promise(t=>{let n=document.createElement(`div`);n.id=`testAd`,n.innerHTML=`<div class="testad-box"><b>TEST AD (local only)</b><p>Placement: ${e}</p>
        <button class="btn btn-green" data-r="1">Watch to end</button>
        <button class="btn btn-gray" data-r="0">Close early</button>
        <button class="btn btn-gray" data-r="x">Simulate error</button></div>`,n.addEventListener(`click`,e=>{let r=e.target.dataset&&e.target.dataset.r;r!==void 0&&(n.remove(),this.showing=!1,this.onClose(),t(r===`1`))}),document.body.appendChild(n)})}},oe=`click.deny.buy.prepare.stopWeak.stopGood.perfect.launch.impact.bounce.appear.capture.rare.mythic.money.rep.bonus.levelup.expand.biome.achievement.riser.tease.teaseFail.mutation.ladder0.ladder1.ladder2.ladder3.ladder4.ladder5.ladder6.wind.music`.split(`.`),se=.5,ce=class{constructor(){this.ctx=null,this.muted=!1,this.platformEnabled=!0,this.paused=!1,this.musicVol=.5,this.sfxVol=.9,this.ducked=!1,this.flightNode=null,this.raw={},this.buffers={};for(let e of oe)this.raw[e]=fetch(`./audio/${e}.mp3`).then(e=>e.ok?e.arrayBuffer():null).catch(()=>null)}unlock(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.connect(this.ctx.destination),this.sfxBus=this.ctx.createGain(),this.sfxBus.connect(this.master),this.musicBus=this.ctx.createGain(),this.musicBus.connect(this.master),this.applyVolumes();for(let e of oe)this.decode(e)}this.ctx.state===`suspended`&&!this.paused&&this.ctx.resume()}async decode(e){try{let t=await this.raw[e];if(!t)return;this.buffers[e]=await new Promise((e,n)=>this.ctx.decodeAudioData(t,e,n)),e===`music`&&this.startMusic()}catch{console.warn(`[audio] could not load`,e)}}startMusic(){let e=this.ctx.createBufferSource();e.buffer=this.buffers.music,e.loop=!0,e.loopStart=se,e.loopEnd=15.86,e.connect(this.musicBus),e.start(0,se),this.musicNode=e}get audible(){return!this.muted&&this.platformEnabled&&!this.paused}applyVolumes(){if(!this.ctx)return;let e=this.ctx.currentTime;this.master.gain.setTargetAtTime(+!!this.audible,e,.02),this.sfxBus.gain.setTargetAtTime(this.sfxVol,e,.02),this.musicBus.gain.setTargetAtTime(this.musicVol*(this.ducked?.08:.32),e,.1)}setPlatformEnabled(e){this.platformEnabled=e,this.applyVolumes()}setMuted(e){this.muted=e,this.applyVolumes()}setVolumes(e,t){this.musicVol=e,this.sfxVol=t,this.applyVolumes()}setPaused(e){this.paused=e,this.applyVolumes(),this.ctx&&(e?this.ctx.suspend():this.ctx.resume())}play(e){if(!this.ctx||!this.audible)return;let t=this.buffers[e];if(!t)return;let n=this.ctx.createBufferSource();n.buffer=t,n.connect(this.sfxBus),n.start()}duck(e){this.ducked=e,this.applyVolumes()}ladderStep(e){this.play(`ladder`+Math.min(6,e))}suspenseRiser(){this.play(`riser`)}tease(){this.play(`tease`)}teaseFail(){this.play(`teaseFail`)}mutationSting(){this.play(`mutation`)}startFlightSound(){if(!this.ctx||!this.audible||this.flightNode||!this.buffers.wind)return;let e=this.ctx.createBufferSource();e.buffer=this.buffers.wind,e.loop=!0;let t=this.ctx.createBiquadFilter();t.type=`bandpass`,t.frequency.value=600,t.Q.value=.8;let n=this.ctx.createGain();n.gain.value=.001,e.connect(t),t.connect(n),n.connect(this.sfxBus),e.start(),this.flightNode={s:e,f:t,g:n}}updateFlightSound(e){if(!this.flightNode)return;let t=this.ctx.currentTime;this.flightNode.f.frequency.setTargetAtTime(400+e*1800,t,.05),this.flightNode.g.gain.setTargetAtTime(.25+e*.9,t,.05)}stopFlightSound(){if(!this.flightNode)return;let e=this.flightNode;this.flightNode=null,e.g.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),e.s.stop(this.ctx.currentTime+.4)}},le,ue,de,fe,pe,me,he,ge,_e,ve=1e3,ye=1001,be=1002,xe=1003,Se=1004,Ce=1005,we=1006,P=1007,Te=1008,Ee=1009,De=1010,Oe=1011,ke=1012,Ae=1013,je=1014,F=1015,Me=1016,Ne=1017,Pe=1018,Fe=1020,Ie=35902,I=35899,L=1021,Le=1022,Re=1023,ze=1026,Be=1027,Ve=1028,He=1029,Ue=1030,We=1031,Ge=1033,Ke=33776,qe=33777,Je=33778,Ye=33779,Xe=35840,Ze=35841,Qe=35842,$e=35843,et=36196,tt=37492,nt=37496,rt=37488,it=37489,at=37490,ot=37491,st=37808,ct=37809,lt=37810,ut=37811,dt=37812,ft=37813,pt=37814,mt=37815,ht=37816,gt=37817,_t=37818,vt=37819,yt=37820,bt=37821,xt=36492,St=36494,Ct=36495,wt=36283,Tt=36284,Et=36285,Dt=36286,Ot=2300,kt=2301,At=2302,jt=2303,Mt=2400,Nt=2401,Pt=2402,Ft=3200,It=`srgb`,Lt=`srgb-linear`,Rt=`linear`,zt=`srgb`,Bt=7680,Vt=35044,Ht=35048,Ut=2e3;function Wt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Gt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Kt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function qt(){let e=Kt(`canvas`);return e.style.display=`block`,e}var Jt={};function Yt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Xt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=Xt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=Xt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Zt(...e){let t=e.join(` `);t in Jt||(Jt[t]=!0,R(...e))}function Qt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var $t={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},en=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},tn=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),nn=Math.PI/180,rn=180/Math.PI;function an(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(tn[e&255]+tn[e>>8&255]+tn[e>>16&255]+tn[e>>24&255]+`-`+tn[t&255]+tn[t>>8&255]+`-`+tn[t>>16&15|64]+tn[t>>24&255]+`-`+tn[n&63|128]+tn[n>>8&255]+`-`+tn[n>>16&255]+tn[n>>24&255]+tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]).toLowerCase()}function B(e,t,n){return Math.max(t,Math.min(n,e))}function on(e,t){return(e%t+t)%t}function sn(e,t,n){return(1-n)*e+n*t}function cn(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function ln(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function un(e,t){if(t.constructor===Float32Array)return e;let n=ln(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function dn(e,t){if(t.constructor===Float32Array)return e;let n=ln(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}he=Symbol.iterator;var V=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[he](){yield this.x,yield this.y}};le=V,le.prototype.isVector2=!0;var fn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(B(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};ge=Symbol.iterator;var H=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mn.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mn.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pn.copy(this).projectOnVector(e),this.sub(pn)}reflect(e){return this.sub(pn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[ge](){yield this.x,yield this.y,yield this.z}};ue=H,ue.prototype.isVector3=!0;var pn=new H,mn=new fn,U=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Zt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(hn.makeScale(e,t)),this}rotate(e){return Zt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(hn.makeRotation(-e)),this}translate(e,t){return Zt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(hn.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};de=U,de.prototype.isMatrix3=!0;var hn=new U,gn=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_n=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vn(){let e={enabled:!0,workingColorSpace:Lt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=yn(e.r),e.g=yn(e.g),e.b=yn(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=bn(e.r),e.g=bn(e.g),e.b=bn(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Rt:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Lt]:{primaries:t,whitePoint:r,transfer:Rt,toXYZ:gn,fromXYZ:_n,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:It},outputColorSpaceConfig:{drawingBufferColorSpace:It}},[It]:{primaries:t,whitePoint:r,transfer:zt,toXYZ:gn,fromXYZ:_n,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:It}}}),e}var W=vn();function yn(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function bn(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var xn,Sn=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{xn===void 0&&(xn=Kt(`canvas`)),xn.width=e.width,xn.height=e.height;let t=xn.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=xn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Kt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=yn(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(yn(t[e]/255)*255):t[e]=yn(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Cn=0,wn=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cn++}),this.uuid=an(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Tn(r[t].image)):e.push(Tn(r[t]))}else e=Tn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Tn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Sn.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var En=0,Dn=new H,On=class e extends en{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=ye,i=ye,a=we,o=Te,s=Re,c=Ee,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:En++}),this.uuid=an(),this.name=``,this.source=new wn(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Dn).x}get height(){return this.source.getSize(Dn).y}get depth(){return this.source.getSize(Dn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ve:e.x-=Math.floor(e.x);break;case ye:e.x=e.x<0?0:1;break;case be:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ve:e.y-=Math.floor(e.y);break;case ye:e.y=e.y<0?0:1;break;case be:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};On.DEFAULT_IMAGE=null,On.DEFAULT_MAPPING=300,On.DEFAULT_ANISOTROPY=1,_e=Symbol.iterator;var kn=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this.w=B(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this.w=B(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[_e](){yield this.x,yield this.y,yield this.z,yield this.w}};fe=kn,fe.prototype.isVector4=!0;var An=class extends en{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:we,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kn(0,0,e,t),this.scissorTest=!1,this.viewport=new kn(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new On({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:we,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new wn(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},jn=class extends An{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Mn=class extends On{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xe,this.minFilter=xe,this.wrapR=ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Nn=class extends On{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xe,this.minFilter=xe,this.wrapR=ye,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},G=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Pn.setFromMatrixColumn(e,0).length(),i=1/Pn.setFromMatrixColumn(e,1).length(),a=1/Pn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(In,e,Ln)}lookAt(e,t,n){let r=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Rn.crossVectors(n,Bn),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Rn.crossVectors(n,Bn)),Rn.normalize(),zn.crossVectors(Bn,Rn),r[0]=Rn.x,r[4]=zn.x,r[8]=Bn.x,r[1]=Rn.y,r[5]=zn.y,r[9]=Bn.y,r[2]=Rn.z,r[6]=zn.z,r[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],ee=r[14],M=r[3],te=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*k+c*M,i[4]=a*S+o*E+s*A+c*te,i[8]=a*C+o*D+s*j+c*ne,i[12]=a*w+o*O+s*ee+c*N,i[1]=l*x+u*T+d*k+f*M,i[5]=l*S+u*E+d*A+f*te,i[9]=l*C+u*D+d*j+f*ne,i[13]=l*w+u*O+d*ee+f*N,i[2]=p*x+m*T+h*k+g*M,i[6]=p*S+m*E+h*A+g*te,i[10]=p*C+m*D+h*j+g*ne,i[14]=p*w+m*O+h*ee+g*N,i[3]=_*x+v*T+y*k+b*M,i[7]=_*S+v*E+y*A+b*te,i[11]=_*C+v*D+y*j+b*ne,i[15]=_*w+v*O+y*ee+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Pn.set(r[0],r[1],r[2]).length(),o=Pn.set(r[4],r[5],r[6]).length(),s=Pn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Fn.copy(this);let c=1/a,l=1/o,u=1/s;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=l,Fn.elements[5]*=l,Fn.elements[6]*=l,Fn.elements[8]*=u,Fn.elements[9]*=u,Fn.elements[10]*=u,t.setFromRotationMatrix(Fn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Ut,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ut,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};pe=G,pe.prototype.isMatrix4=!0;var Pn=new H,Fn=new G,In=new H(0,0,0),Ln=new H(1,1,1),Rn=new H,zn=new H,Bn=new H,Vn=new G,Hn=new fn,Un=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(B(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-B(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(B(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-B(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(B(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-B(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hn.setFromEuler(this),this.setFromQuaternion(Hn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER=`XYZ`;var Wn=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Gn=0,Kn=new H,qn=new fn,Jn=new G,Yn=new H,Xn=new H,Zn=new H,Qn=new fn,$n=new H(1,0,0),er=new H(0,1,0),tr=new H(0,0,1),nr={type:`added`},rr={type:`removed`},ir={type:`childadded`,child:null},ar={type:`childremoved`,child:null},or=class e extends en{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gn++}),this.uuid=an(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new Un,r=new fn,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new G},normalMatrix:{value:new U}}),this.matrix=new G,this.matrixWorld=new G,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.multiply(qn),this}rotateOnWorldAxis(e,t){return qn.setFromAxisAngle(e,t),this.quaternion.premultiply(qn),this}rotateX(e){return this.rotateOnAxis($n,e)}rotateY(e){return this.rotateOnAxis(er,e)}rotateZ(e){return this.rotateOnAxis(tr,e)}translateOnAxis(e,t){return Kn.copy(e).applyQuaternion(this.quaternion),this.position.add(Kn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($n,e)}translateY(e){return this.translateOnAxis(er,e)}translateZ(e){return this.translateOnAxis(tr,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yn.copy(e):Yn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Xn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(Xn,Yn,this.up):Jn.lookAt(Yn,Xn,this.up),this.quaternion.setFromRotationMatrix(Jn),r&&(Jn.extractRotation(r.matrixWorld),qn.setFromRotationMatrix(Jn),this.quaternion.premultiply(qn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nr),ir.child=e,this.dispatchEvent(ir),ir.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rr),ar.child=e,this.dispatchEvent(ar),ar.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nr),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xn,e,Zn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xn,Qn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};or.DEFAULT_UP=new H(0,1,0),or.DEFAULT_MATRIX_AUTO_UPDATE=!0,or.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var sr=class extends or{constructor(){super(),this.isGroup=!0,this.type=`Group`}},cr={type:`move`},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(cr)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new sr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ur={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},fr={h:0,s:0,l:0};function pr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var K=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=It){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,W.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=W.workingColorSpace){return this.r=e,this.g=t,this.b=n,W.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=W.workingColorSpace){if(e=on(e,1),t=B(t,0,1),n=B(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=pr(i,r,e+1/3),this.g=pr(i,r,e),this.b=pr(i,r,e-1/3)}return W.colorSpaceToWorking(this,r),this}setStyle(e,t=It){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=It){let n=ur[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yn(e.r),this.g=yn(e.g),this.b=yn(e.b),this}copyLinearToSRGB(e){return this.r=bn(e.r),this.g=bn(e.g),this.b=bn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=It){return W.workingToColorSpace(mr.copy(this),e),Math.round(B(mr.r*255,0,255))*65536+Math.round(B(mr.g*255,0,255))*256+Math.round(B(mr.b*255,0,255))}getHexString(e=It){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=W.workingColorSpace){W.workingToColorSpace(mr.copy(this),t);let n=mr.r,r=mr.g,i=mr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=W.workingColorSpace){return W.workingToColorSpace(mr.copy(this),t),e.r=mr.r,e.g=mr.g,e.b=mr.b,e}getStyle(e=It){W.workingToColorSpace(mr.copy(this),e);let t=mr.r,n=mr.g,r=mr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+t,dr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dr),e.getHSL(fr);let n=sn(dr.h,fr.h,t),r=sn(dr.s,fr.s,t),i=sn(dr.l,fr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mr=new K;K.NAMES=ur;var hr=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new K(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},gr=class extends or{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},_r=new H,vr=new H,yr=new H,br=new H,xr=new H,Sr=new H,Cr=new H,wr=new H,Tr=new H,Er=new H,Dr=new kn,Or=new kn,kr=new kn,Ar=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),_r.subVectors(e,t),r.cross(_r);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){_r.subVectors(r,t),vr.subVectors(n,t),yr.subVectors(e,t);let a=_r.dot(_r),o=_r.dot(vr),s=_r.dot(yr),c=vr.dot(vr),l=vr.dot(yr),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,br)!==null&&br.x>=0&&br.y>=0&&br.x+br.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,br)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,br.x),s.addScaledVector(a,br.y),s.addScaledVector(o,br.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Dr.setScalar(0),Or.setScalar(0),kr.setScalar(0),Dr.fromBufferAttribute(e,t),Or.fromBufferAttribute(e,n),kr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Dr,i.x),a.addScaledVector(Or,i.y),a.addScaledVector(kr,i.z),a}static isFrontFacing(e,t,n,r){return _r.subVectors(n,t),vr.subVectors(e,t),_r.cross(vr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _r.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),_r.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;xr.subVectors(r,n),Sr.subVectors(i,n),wr.subVectors(e,n);let s=xr.dot(wr),c=Sr.dot(wr);if(s<=0&&c<=0)return t.copy(n);Tr.subVectors(e,r);let l=xr.dot(Tr),u=Sr.dot(Tr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(xr,a);Er.subVectors(e,i);let f=xr.dot(Er),p=Sr.dot(Er);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Sr,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Cr.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Cr,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(xr,a).addScaledVector(Sr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},jr=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Nr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Nr):Nr.fromBufferAttribute(r,t),Nr.applyMatrix4(e.matrixWorld),this.expandByPoint(Nr);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Pr.copy(e.boundingBox)),Pr.applyMatrix4(e.matrixWorld),this.union(Pr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nr),Nr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vr),Hr.subVectors(this.max,Vr),Fr.subVectors(e.a,Vr),Ir.subVectors(e.b,Vr),Lr.subVectors(e.c,Vr),Rr.subVectors(Ir,Fr),zr.subVectors(Lr,Ir),Br.subVectors(Fr,Lr);let t=[0,-Rr.z,Rr.y,0,-zr.z,zr.y,0,-Br.z,Br.y,Rr.z,0,-Rr.x,zr.z,0,-zr.x,Br.z,0,-Br.x,-Rr.y,Rr.x,0,-zr.y,zr.x,0,-Br.y,Br.x,0];return!Gr(t,Fr,Ir,Lr,Hr)||(t=[1,0,0,0,1,0,0,0,1],!Gr(t,Fr,Ir,Lr,Hr))?!1:(Ur.crossVectors(Rr,zr),t=[Ur.x,Ur.y,Ur.z],Gr(t,Fr,Ir,Lr,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Mr=[new H,new H,new H,new H,new H,new H,new H,new H],Nr=new H,Pr=new jr,Fr=new H,Ir=new H,Lr=new H,Rr=new H,zr=new H,Br=new H,Vr=new H,Hr=new H,Ur=new H,Wr=new H;function Gr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Wr.fromArray(e,a);let o=i.x*Math.abs(Wr.x)+i.y*Math.abs(Wr.y)+i.z*Math.abs(Wr.z),s=t.dot(Wr),c=n.dot(Wr),l=r.dot(Wr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Kr=new H,qr=new V,Jr=0,Yr=class extends en{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Vt,this.updateRanges=[],this.gpuType=F,this.version=0,this._normalizationScale=e===void 0?void 0:ln(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXYZ(t,Kr.x,Kr.y,Kr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix4(e),this.setXYZ(t,Kr.x,Kr.y,Kr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyNormalMatrix(e),this.setXYZ(t,Kr.x,Kr.y,Kr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.transformDirection(e),this.setXYZ(t,Kr.x,Kr.y,Kr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?un(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?dn(e,this.array):Math.round(e*t)}},Xr=class extends Yr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Zr=class extends Yr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},Qr=class extends Yr{constructor(e,t,n){super(new Float32Array(e),t,n)}},$r=new jr,ei=new H,ti=new H,ni=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?$r.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ei.subVectors(e,this.center);let t=ei.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(ei,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ti.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ei.copy(e.center).add(ti)),this.expandByPoint(ei.copy(e.center).sub(ti))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ri=0,ii=new G,ai=new or,oi=new H,si=new jr,ci=new jr,li=new H,ui=class e extends en{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ri++}),this.uuid=an(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Wt(e)?Zr:Xr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return ai.lookAt(e),ai.updateMatrix(),this.applyMatrix4(ai.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new Qr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];si.setFromBufferAttribute(n),this.morphTargetsRelative?(li.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(li),li.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(li)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ci.setFromBufferAttribute(n),this.morphTargetsRelative?(li.addVectors(si.min,ci.min),si.expandByPoint(li),li.addVectors(si.max,ci.max),si.expandByPoint(li)):(si.expandByPoint(ci.min),si.expandByPoint(ci.max))}si.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)li.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(li));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)li.fromBufferAttribute(a,t),o&&(oi.fromBufferAttribute(e,t),li.add(oi)),r=Math.max(r,n.distanceToSquared(li))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Yr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let l=new H,u=new H,d=new H,f=new V,p=new V,m=new V,h=new H,g=new H;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new H,b=new H,x=new H,S=new H;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Yr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)li.fromBufferAttribute(e,t),li.normalize(),e.setXYZ(t,li.x,li.y,li.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Yr(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},di=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Vt,this.updateRanges=[],this.version=0,this.uuid=an()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=fi(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=fi(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function fi(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=an()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var pi=new H,mi=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:ln(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.applyMatrix4(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.applyNormalMatrix(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pi.fromBufferAttribute(this,t),pi.transformDirection(e),this.setXYZ(t,pi.x,pi.y,pi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Yt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Yr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Yt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?un(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?dn(e,this.data.array):Math.round(e*t)}},hi=new H,gi=new H,_i=new U,vi=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=hi.subVectors(n,t).cross(gi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(hi),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||_i.getNormalMatrix(e),r=this.coplanarPoint(hi).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},yi=0,bi=class extends en{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yi++}),this.uuid=an(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bt,this.stencilZFail=Bt,this.stencilZPass=Bt,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new K().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new vi().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new V().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new V().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},xi=class extends bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new K(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Si,Ci=new H,wi=new H,Ti=new H,Ei=new V,Di=new V,Oi=new G,ki=new H,Ai=new H,ji=new H,Mi=new V,Ni=new V,Pi=new V,Fi=class extends or{constructor(e=new xi){if(super(),this.isSprite=!0,this.type=`Sprite`,Si===void 0){Si=new ui;let e=new di(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Si.setIndex([0,1,2,0,2,3]),Si.setAttribute(`position`,new mi(e,3,0,!1)),Si.setAttribute(`uv`,new mi(e,2,3,!1))}this.geometry=Si,this.material=e,this.center=new V(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&z(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),wi.setFromMatrixScale(this.matrixWorld),Oi.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ti.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wi.multiplyScalar(-Ti.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Ii(ki.set(-.5,-.5,0),Ti,a,wi,r,i),Ii(Ai.set(.5,-.5,0),Ti,a,wi,r,i),Ii(ji.set(.5,.5,0),Ti,a,wi,r,i),Mi.set(0,0),Ni.set(1,0),Pi.set(1,1);let o=e.ray.intersectTriangle(ki,Ai,ji,!1,Ci);if(o===null&&(Ii(Ai.set(-.5,.5,0),Ti,a,wi,r,i),Ni.set(0,1),o=e.ray.intersectTriangle(ki,ji,Ai,!1,Ci),o===null))return;let s=e.ray.origin.distanceTo(Ci);s<e.near||s>e.far||t.push({distance:s,point:Ci.clone(),uv:Ar.getInterpolation(Ci,ki,Ai,ji,Mi,Ni,Pi,new V),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function Ii(e,t,n,r,i,a){Ei.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Di.copy(Ei):(Di.x=a*Ei.x-i*Ei.y,Di.y=i*Ei.x+a*Ei.y),e.copy(t),e.x+=Di.x,e.y+=Di.y,e.applyMatrix4(Oi)}var Li=new H,Ri=new H,zi=new H,Bi=new H,Vi=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ri.copy(e).add(t).multiplyScalar(.5),zi.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(Ri);let i=e.distanceTo(t)*.5,a=-this.direction.dot(zi),o=Bi.dot(this.direction),s=-Bi.dot(zi),c=Bi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ri).addScaledVector(zi,d),f}intersectSphere(e,t){if(e.radius<0)return null;Li.subVectors(e.center,this.origin);let n=Li.dot(this.direction),r=Li.dot(Li)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,ee,M;if(y>=b&&y>=x?(w=s,D=u,A=p,M=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,ee=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,ee=_)):b>=x?(w=c,D=d,A=m,M=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,ee=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,ee=v)):(w=l,D=f,A=h,M=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,ee=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,ee=g)),w===0)return null;let te=S/w,ne=C/w,N=1/w,re=T-te*D,ie=E-ne*D,ae=O-te*A,oe=k-ne*A,se=j-te*M,ce=ee-ne*M,le=se*oe-ce*ae,ue=re*ce-ie*se,de=ae*ie-oe*re;if(r){if(le<0||ue<0||de<0)return null}else if((le<0||ue<0||de<0)&&(le>0||ue>0||de>0))return null;let fe=le+ue+de;if(fe===0)return null;let pe=N*(le*D+ue*A+de*M);return(fe>0?pe<0:pe>0)?null:this.at(pe/fe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hi=class extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Ui=new G,Wi=new Vi,Gi=new ni,Ki=new H,qi=new H,Ji=new H,Yi=new H,Xi=new H,Zi=new H,Qi=new H,$i=new H,q=class extends or{constructor(e=new ui,t=new Hi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Zi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Xi.fromBufferAttribute(s,e),a?Zi.addScaledVector(Xi,r):Zi.addScaledVector(Xi.sub(t),r))}t.add(Zi)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere),Gi.applyMatrix4(i),Wi.copy(e.ray).recast(e.near),Gi.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Gi,Ki)===null||Wi.origin.distanceToSquared(Ki)>(e.far-e.near)**2)||(Ui.copy(i).invert(),Wi.copy(e.ray).applyMatrix4(Ui),(n.boundingBox===null||Wi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ta(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ta(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ta(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ta(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ea(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;$i.copy(s),$i.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo($i);return l<n.near||l>n.far?null:{distance:l,point:$i.clone(),object:e}}function ta(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,qi),e.getVertexPosition(c,Ji),e.getVertexPosition(l,Yi);let u=ea(e,t,n,r,qi,Ji,Yi,Qi);if(u){let e=new H;Ar.getBarycoord(Qi,qi,Ji,Yi,e),i&&(u.uv=Ar.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=Ar.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=Ar.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};Ar.getNormal(qi,Ji,Yi,t.normal),u.face=t,u.barycoord=e}return u}var na=class extends On{constructor(e=null,t=1,n=1,r,i,a,o,s,c=xe,l=xe,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ra=class extends Yr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ia=new G,aa=new G,oa=[],sa=new jr,ca=new G,la=new q,ua=new ni,da=class extends q{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ra(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ca)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new jr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ia),sa.copy(e.boundingBox).applyMatrix4(ia),this.boundingBox.union(sa)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ia),ua.copy(e.boundingSphere).applyMatrix4(ia),this.boundingSphere.union(ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(n),e.ray.intersectsSphere(ua)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ia),aa.multiplyMatrices(n,ia),la.matrixWorld=aa,la.raycast(e,oa);for(let e=0,n=oa.length;e<n;e++){let n=oa[e];n.instanceId=i,n.object=this,t.push(n)}oa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ra(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new na(new Float32Array(r*this.count),r,this.count,Ve,F));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fa=new ni,pa=new V(.5,.5),ma=new H,ha=class{constructor(e=new vi,t=new vi,n=new vi,r=new vi,i=new vi,a=new vi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ut,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fa)}intersectsSprite(e){return fa.center.set(0,0,0),fa.radius=.7071067811865476+pa.distanceTo(e.center),fa.applyMatrix4(e.matrixWorld),this.intersectsSphere(fa)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ma.x=r.normal.x>0?e.max.x:e.min.x,ma.y=r.normal.y>0?e.max.y:e.min.y,ma.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ga=new G,_a=class e{constructor(){this.coordinateSystem=Ut,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];ga.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new ha),n[e].setFromProjectionMatrix(ga,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new ha),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},va=class extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ya=new G,ba=new Vi,xa=new ni,Sa=new H,Ca=class extends or{constructor(e=new ui,t=new va){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(r),xa.radius+=i,e.ray.intersectsSphere(xa)===!1)return;ya.copy(r).invert(),ba.copy(e.ray).applyMatrix4(ya);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Sa.fromBufferAttribute(l,n),wa(Sa,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Sa.fromBufferAttribute(l,a),wa(Sa,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function wa(e,t,n,r,i,a,o){let s=ba.distanceSqToPoint(e);if(s<n){let n=new H;ba.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ta=class extends On{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ea=class extends On{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Da=class extends On{constructor(e,t,n=je,r,i,a,o=xe,s=xe,c,l=ze,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wn(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Oa=class extends Da{constructor(e,t=je,n=301,r,i,a=xe,o=xe,s,c=ze){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ka=class extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Aa=class e extends ui{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new Qr(c,3)),this.setAttribute(`normal`,new Qr(l,3)),this.setAttribute(`uv`,new Qr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ja=class e extends ui{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new Qr(u,3)),this.setAttribute(`normal`,new Qr(d,3)),this.setAttribute(`uv`,new Qr(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new V,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ma=class e extends ja{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Na=class e extends ui{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new Qr(i,3)),this.setAttribute(`normal`,new Qr(i.slice(),3)),this.setAttribute(`uv`,new Qr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new H,r=new H,i=new H;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new H;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new H;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new H,t=new H,n=new H,r=new H,o=new V,s=new V,c=new V;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Pa=class e extends Na{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Fa=class e extends ui{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new Qr(p,3)),this.setAttribute(`normal`,new Qr(m,3)),this.setAttribute(`uv`,new Qr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ia=class e extends ui{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new H,p=new V;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new Qr(s,3)),this.setAttribute(`normal`,new Qr(c,3)),this.setAttribute(`uv`,new Qr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},La=class e extends ui{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new Qr(p,3)),this.setAttribute(`normal`,new Qr(m,3)),this.setAttribute(`uv`,new Qr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Ra=class e extends ui{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new H,f=new H,p=new H;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new Qr(c,3)),this.setAttribute(`normal`,new Qr(l,3)),this.setAttribute(`uv`,new Qr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function za(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Va(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Va(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Ba(e){let t={};for(let n=0;n<e.length;n++){let r=za(e[n]);for(let e in r)t[e]=r[e]}return t}function Va(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Ha(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Ua(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:W.workingColorSpace}var Wa={clone:za,merge:Ba},Ga=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ka=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qa=class extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ga,this.fragmentShader=Ka,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=za(e.uniforms),this.uniformsGroups=Ha(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new K().setHex(r.value);break;case`v2`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new kn().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new G().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ja=class extends qa{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Ya=class extends bi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type=`MeshPhongMaterial`,this.color=new K(16777215),this.specular=new K(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xa=class extends bi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new K(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Za=class extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Ft,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qa=class extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $a(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function eo(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var to=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},no=class extends to{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mt,endingEnd:Mt}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Nt:i=e,o=2*t-n;break;case Pt:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Nt:a=e,s=2*n-t;break;case Pt:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ro=class extends to{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},io=class extends to{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},ao=class extends to{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=co(n,t,g,y,r);i[p]=oo(x,o,_,b,m)}return i}};function oo(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function so(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function co(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=oo(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=so(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var lo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=$a(t,this.TimeBufferType),this.values=$a(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$a(e.times,Array),values:$a(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),eo(e.settings)&&(n.settings={inTangents:$a(e.settings.inTangents,Array),outTangents:$a(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new io(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new no(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ao(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ot:t=this.InterpolantFactoryMethodDiscrete;break;case kt:t=this.InterpolantFactoryMethodLinear;break;case At:t=this.InterpolantFactoryMethodSmooth;break;case jt:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ot;case this.InterpolantFactoryMethodLinear:return kt;case this.InterpolantFactoryMethodSmooth:return At;case this.InterpolantFactoryMethodBezier:return jt}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;eo(this.settings)&&(uo(this.settings.inTangents,e),uo(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;eo(this.settings)&&(fo(this.settings.inTangents,e),fo(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Gt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===At,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,eo(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function uo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function fo(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}lo.prototype.ValueTypeName=``,lo.prototype.TimeBufferType=Float32Array,lo.prototype.ValueBufferType=Float32Array,lo.prototype.DefaultInterpolation=kt;var po=class extends lo{constructor(e,t,n){super(e,t,n)}};po.prototype.ValueTypeName=`bool`,po.prototype.ValueBufferType=Array,po.prototype.DefaultInterpolation=Ot,po.prototype.InterpolantFactoryMethodLinear=void 0,po.prototype.InterpolantFactoryMethodSmooth=void 0;var mo=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}};mo.prototype.ValueTypeName=`color`;var ho=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}};ho.prototype.ValueTypeName=`number`;var go=class extends to{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)fn.slerpFlat(i,0,a,c-o,a,c,s);return i}},_o=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new go(this.times,this.values,this.getValueSize(),e)}};_o.prototype.ValueTypeName=`quaternion`,_o.prototype.InterpolantFactoryMethodSmooth=void 0;var vo=class extends lo{constructor(e,t,n){super(e,t,n)}};vo.prototype.ValueTypeName=`string`,vo.prototype.ValueBufferType=Array,vo.prototype.DefaultInterpolation=Ot,vo.prototype.InterpolantFactoryMethodLinear=void 0,vo.prototype.InterpolantFactoryMethodSmooth=void 0;var yo=class extends lo{constructor(e,t,n,r){super(e,t,n,r)}};yo.prototype.ValueTypeName=`vector`;var bo=class extends or{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new K(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},xo=class extends bo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(or.DEFAULT_UP),this.updateMatrix(),this.groundColor=new K(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},So=new G,Co=new H,wo=new H,To=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.mapType=Ee,this.map=null,this.mapPass=null,this.matrix=new G,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ha,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new kn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Co.setFromMatrixPosition(e.matrixWorld),t.position.copy(Co),wo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wo),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){So.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(So,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(So)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Eo=new H,Do=new fn,Oo=new H,ko=class extends or{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new G,this.projectionMatrix=new G,this.projectionMatrixInverse=new G,this.coordinateSystem=Ut,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Eo,Do,Oo),Oo.x===1&&Oo.y===1&&Oo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eo,Do,Oo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Eo,Do,Oo),Oo.x===1&&Oo.y===1&&Oo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Eo,Do,Oo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ao=new H,jo=new V,Mo=new V,No=class extends ko{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=rn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(nn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rn*2*Math.atan(Math.tan(nn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ao.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ao.x,Ao.y).multiplyScalar(-e/Ao.z),Ao.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ao.x,Ao.y).multiplyScalar(-e/Ao.z)}getViewSize(e,t){return this.getViewBounds(e,jo,Mo),t.subVectors(Mo,jo)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(nn*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Po=class extends ko{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Fo=class extends To{constructor(){super(new Po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Io=class extends bo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(or.DEFAULT_UP),this.updateMatrix(),this.target=new or,this.shadow=new Fo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Lo=-90,Ro=1,zo=class extends or{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new No(Lo,Ro,e,t);r.layers=this.layers,this.add(r);let i=new No(Lo,Ro,e,t);i.layers=this.layers,this.add(i);let a=new No(Lo,Ro,e,t);a.layers=this.layers,this.add(a);let o=new No(Lo,Ro,e,t);o.layers=this.layers,this.add(o);let s=new No(Lo,Ro,e,t);s.layers=this.layers,this.add(s);let c=new No(Lo,Ro,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Bo=class extends No{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Vo=`\\[\\]\\.:\\/`,Ho=RegExp(`[\\[\\]\\.:\\/]`,`g`),Uo=`[^\\[\\]\\.:\\/]`,Wo=`[^`+Vo.replace(`\\.`,``)+`]`,Go=`((?:WC+[\\/:])*)`.replace(`WC`,Uo),Ko=`(WCOD+)?`.replace(`WCOD`,Wo),qo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Uo),Jo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Uo),Yo=RegExp(`^`+Go+Ko+qo+Jo+`$`),Xo=[`material`,`materials`,`bones`,`map`],Zo=class{constructor(e,t,n){let r=n||Qo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Qo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ho,``)}static parseTrackName(e){let t=Yo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Xo.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qo.Composite=Zo,Qo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Qo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Qo.prototype.GetterByBindingType=[Qo.prototype._getValue_direct,Qo.prototype._getValue_array,Qo.prototype._getValue_arrayElement,Qo.prototype._getValue_toArray],Qo.prototype.SetterByBindingTypeAndVersioning=[[Qo.prototype._setValue_direct,Qo.prototype._setValue_direct_setNeedsUpdate,Qo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qo.prototype._setValue_array,Qo.prototype._setValue_array_setNeedsUpdate,Qo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qo.prototype._setValue_arrayElement,Qo.prototype._setValue_arrayElement_setNeedsUpdate,Qo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qo.prototype._setValue_fromArray,Qo.prototype._setValue_fromArray_setNeedsUpdate,Qo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $o=new G,es=class{constructor(e,t,n=0,r=1/0){this.ray=new Vi(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Wn,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):z(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return $o.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($o),this}intersectObject(e,t=!0,n=[]){return ns(e,this,n,t),n.sort(ts),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)ns(e[r],this,n,t);return n.sort(ts),n}};function ts(e,t){return e.distance-t.distance}function ns(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)ns(r[e],t,n,!0)}}me=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},me.prototype.isMatrix2=!0;function rs(e,t,n,r){let i=is(r);switch(n){case L:return e*t;case Ve:return e*t/i.components*i.byteLength;case He:return e*t/i.components*i.byteLength;case Ue:return e*t*2/i.components*i.byteLength;case We:return e*t*2/i.components*i.byteLength;case Le:return e*t*3/i.components*i.byteLength;case Re:return e*t*4/i.components*i.byteLength;case Ge:return e*t*4/i.components*i.byteLength;case Ke:case qe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Je:case Ye:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ze:case $e:return Math.max(e,16)*Math.max(t,8)/4;case Xe:case Qe:return Math.max(e,8)*Math.max(t,8)/2;case et:case tt:case rt:case it:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case nt:case at:case ot:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case st:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ct:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case lt:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ut:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case dt:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ft:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case pt:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case mt:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ht:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case gt:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case _t:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case vt:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case yt:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case bt:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case xt:case St:case Ct:return Math.ceil(e/4)*Math.ceil(t/4)*16;case wt:case Tt:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Et:case Dt:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function is(e){switch(e){case Ee:case De:return{byteLength:1,components:1};case ke:case Oe:case Me:return{byteLength:2,components:1};case Ne:case Pe:return{byteLength:2,components:4};case je:case Ae:case F:return{byteLength:4,components:1};case Ie:case I:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function as(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function os(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var J={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},ss={basic:{uniforms:Ba([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:J.meshbasic_vert,fragmentShader:J.meshbasic_frag},lambert:{uniforms:Ba([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:J.meshlambert_vert,fragmentShader:J.meshlambert_frag},phong:{uniforms:Ba([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:J.meshphong_vert,fragmentShader:J.meshphong_frag},standard:{uniforms:Ba([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag},toon:{uniforms:Ba([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new K(0)}}]),vertexShader:J.meshtoon_vert,fragmentShader:J.meshtoon_frag},matcap:{uniforms:Ba([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:J.meshmatcap_vert,fragmentShader:J.meshmatcap_frag},points:{uniforms:Ba([Y.points,Y.fog]),vertexShader:J.points_vert,fragmentShader:J.points_frag},dashed:{uniforms:Ba([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:J.linedashed_vert,fragmentShader:J.linedashed_frag},depth:{uniforms:Ba([Y.common,Y.displacementmap]),vertexShader:J.depth_vert,fragmentShader:J.depth_frag},normal:{uniforms:Ba([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:J.meshnormal_vert,fragmentShader:J.meshnormal_frag},sprite:{uniforms:Ba([Y.sprite,Y.fog]),vertexShader:J.sprite_vert,fragmentShader:J.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:J.background_vert,fragmentShader:J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:J.backgroundCube_vert,fragmentShader:J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:J.cube_vert,fragmentShader:J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:J.equirect_vert,fragmentShader:J.equirect_frag},distance:{uniforms:Ba([Y.common,Y.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:J.distance_vert,fragmentShader:J.distance_frag},shadow:{uniforms:Ba([Y.lights,Y.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:J.shadow_vert,fragmentShader:J.shadow_frag}};ss.physical={uniforms:Ba([ss.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new U},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag};var cs={r:0,b:0,g:0},ls=new G,us=new U;us.set(-1,0,0,0,1,0,0,0,1);function ds(e,t,n,r,i,a){let o=new K(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new q(new Aa(1,1,1),new qa({name:`BackgroundCubeMaterial`,uniforms:za(ss.backgroundCube.uniforms),vertexShader:ss.backgroundCube.vertexShader,fragmentShader:ss.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ls.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(us),l.material.toneMapped=W.getTransfer(i.colorSpace)!==zt,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new q(new Fa(2,2),new qa({name:`BackgroundMaterial`,uniforms:za(ss.background.uniforms),vertexShader:ss.background.vertexShader,fragmentShader:ss.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=W.getTransfer(i.colorSpace)!==zt,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(cs,Ua(e)),n.buffers.color.setClear(cs.r,cs.g,cs.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function fs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function ps(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function ms(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&R(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function hs(e){let t=this,n=null,r=0,i=!1,a=!1,o=new vi,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var gs=class extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ta(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Aa(5,5,5),i=new qa({name:`CubemapFromEquirect`,uniforms:za(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new q(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=we),new zo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},_s=256,vs=3,ys=20,bs=256,xs=16,Ss=3,Cs=new H,ws=new K,Ts=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new zo(1,10,null),this._boxMesh=new q(new Aa(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Cs}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(ws));let h=new zo(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ms(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=js(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(_s,cn(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?_s:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Es(e,!1,!1),n=Math.log2(e)-vs;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Es(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ms()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=js()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Os(),this._integrationMaterial=ks());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/xs);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Ss)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(bs*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=As());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Es(e,t,n){return new gs(e,{minFilter:Te,generateMipmaps:t,type:Me,colorSpace:Lt,depthBuffer:n})}function Ds(e,t,n){return new qa({name:e,uniforms:t,vertexShader:J.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Os(){return Ds(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${bs}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function ks(){return Ds(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:xs}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function As(){return Ds(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ys}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function js(){return Ds(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ms(){return Ds(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ns(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new gs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Ts(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Ts(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ps(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Zt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Fs(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?Zr:Xr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Is(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ls(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Rs(e,t,n){let r=new WeakMap,i=new kn;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Mn(h,p,m,u);g.type=F,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new V(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function zs(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Bs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Vs(e,t,n,r,i,a){let o=new jn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new ui;u.setAttribute(`position`,new Qr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new Qr([0,2,0,0,2,0],2));let d=new Ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new q(u,d),p=new Po(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new jn(t,n,{type:Me,depthBuffer:!1,stencilBuffer:!1}),c=new jn(t,n,{type:Me,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Da(t,n),a===!0&&(l.format=Be,l.type=Fe)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},W.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Bs[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Hs=new On,Us=new Da(1,1),Ws=new Oa(1),Gs=new Mn,Ks=new Nn,qs=new Ta,Js=[],Ys=[],Xs=new Float32Array(16),Zs=new Float32Array(9),Qs=new Float32Array(4);function $s(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Js[i];if(a===void 0&&(a=new Float32Array(i),Js[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ec(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function tc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function nc(e,t){let n=Ys[t];n===void 0&&(n=new Int32Array(t),Ys[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function rc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ic(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ec(n,t))return;e.uniform2fv(this.addr,t),tc(n,t)}}function ac(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ec(n,t))return;e.uniform3fv(this.addr,t),tc(n,t)}}function oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ec(n,t))return;e.uniform4fv(this.addr,t),tc(n,t)}}function sc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ec(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),tc(n,t)}else{if(ec(n,r))return;Qs.set(r),e.uniformMatrix2fv(this.addr,!1,Qs),tc(n,r)}}function cc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ec(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),tc(n,t)}else{if(ec(n,r))return;Zs.set(r),e.uniformMatrix3fv(this.addr,!1,Zs),tc(n,r)}}function lc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ec(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),tc(n,t)}else{if(ec(n,r))return;Xs.set(r),e.uniformMatrix4fv(this.addr,!1,Xs),tc(n,r)}}function uc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ec(n,t))return;e.uniform2iv(this.addr,t),tc(n,t)}}function fc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ec(n,t))return;e.uniform3iv(this.addr,t),tc(n,t)}}function pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ec(n,t))return;e.uniform4iv(this.addr,t),tc(n,t)}}function mc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function hc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ec(n,t))return;e.uniform2uiv(this.addr,t),tc(n,t)}}function gc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ec(n,t))return;e.uniform3uiv(this.addr,t),tc(n,t)}}function _c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ec(n,t))return;e.uniform4uiv(this.addr,t),tc(n,t)}}function vc(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function yc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?vc(Us):Hs,n.setTexture2D(t||a,i)}function bc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Ks,i)}function xc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?vc(Ws):qs,n.setTextureCube(t||a,i)}function Sc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Gs,i)}function Cc(e){switch(e){case 5126:return rc;case 35664:return ic;case 35665:return ac;case 35666:return oc;case 35674:return sc;case 35675:return cc;case 35676:return lc;case 5124:case 35670:return uc;case 35667:case 35671:return dc;case 35668:case 35672:return fc;case 35669:case 35673:return pc;case 5125:return mc;case 36294:return hc;case 36295:return gc;case 36296:return _c;case 35678:case 36198:case 36298:case 36306:case 35682:return yc;case 35679:case 36299:case 36307:return bc;case 35680:case 36300:case 36308:case 36293:return xc;case 36289:case 36303:case 36311:case 36292:return Sc}}function wc(e,t){e.uniform1fv(this.addr,t)}function Tc(e,t){let n=$s(t,this.size,2);e.uniform2fv(this.addr,n)}function Ec(e,t){let n=$s(t,this.size,3);e.uniform3fv(this.addr,n)}function Dc(e,t){let n=$s(t,this.size,4);e.uniform4fv(this.addr,n)}function Oc(e,t){let n=$s(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function kc(e,t){let n=$s(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Ac(e,t){let n=$s(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function jc(e,t){e.uniform1iv(this.addr,t)}function Mc(e,t){e.uniform2iv(this.addr,t)}function Nc(e,t){e.uniform3iv(this.addr,t)}function Pc(e,t){e.uniform4iv(this.addr,t)}function Fc(e,t){e.uniform1uiv(this.addr,t)}function Ic(e,t){e.uniform2uiv(this.addr,t)}function Lc(e,t){e.uniform3uiv(this.addr,t)}function Rc(e,t){e.uniform4uiv(this.addr,t)}function zc(e,t,n){let r=this.cache,i=t.length,a=nc(n,i);ec(r,a)||(e.uniform1iv(this.addr,a),tc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?vc(Us):Hs;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Bc(e,t,n){let r=this.cache,i=t.length,a=nc(n,i);ec(r,a)||(e.uniform1iv(this.addr,a),tc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Ks,a[e])}function Vc(e,t,n){let r=this.cache,i=t.length,a=nc(n,i);ec(r,a)||(e.uniform1iv(this.addr,a),tc(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?vc(Ws):qs;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Hc(e,t,n){let r=this.cache,i=t.length,a=nc(n,i);ec(r,a)||(e.uniform1iv(this.addr,a),tc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Gs,a[e])}function Uc(e){switch(e){case 5126:return wc;case 35664:return Tc;case 35665:return Ec;case 35666:return Dc;case 35674:return Oc;case 35675:return kc;case 35676:return Ac;case 5124:case 35670:return jc;case 35667:case 35671:return Mc;case 35668:case 35672:return Nc;case 35669:case 35673:return Pc;case 5125:return Fc;case 36294:return Ic;case 36295:return Lc;case 36296:return Rc;case 35678:case 36198:case 36298:case 36306:case 35682:return zc;case 35679:case 36299:case 36307:return Bc;case 35680:case 36300:case 36308:case 36293:return Vc;case 36289:case 36303:case 36311:case 36292:return Hc}}var Wc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cc(t.type)}},Gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Uc(t.type)}},Kc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},qc=/(\w+)(\])?(\[|\.)?/g;function Jc(e,t){e.seq.push(t),e.map[t.id]=t}function Yc(e,t,n){let r=e.name,i=r.length;for(qc.lastIndex=0;;){let a=qc.exec(r),o=qc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Jc(n,l===void 0?new Wc(s,e,t):new Gc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Kc(s),Jc(n,e)),n=e}}}var Xc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Yc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Zc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Qc=37297,$c=0;function el(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var tl=new U;function nl(e){W._getMatrix(tl,W.workingColorSpace,e);let t=`mat3( ${tl.elements.map(e=>e.toFixed(4))} )`;switch(W.getTransfer(e)){case Rt:return[t,`LinearTransferOETF`];case zt:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function rl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+el(e.getShaderSource(t),r)}return i}function il(e,t){let n=nl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var al={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ol(e,t){let n=al[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var sl=new H;function cl(){return W.getLuminanceCoefficients(sl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${sl.x.toFixed(4)}, ${sl.y.toFixed(4)}, ${sl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function ll(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(fl).join(`
`)}function ul(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function dl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function fl(e){return e!==``}function pl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function ml(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var hl=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(e){return e.replace(hl,_l)}function _l(e,t){let n=J[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return gl(n)}var vl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yl(e){return e.replace(vl,bl)}function bl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function xl(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Sl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Cl(e){return Sl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var wl={302:`ENVMAP_MODE_REFRACTION`};function Tl(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:wl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var El={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Dl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:El[e.combine]||`ENVMAP_BLENDING_NONE`}function Ol(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Cl(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Tl(n),d=Dl(n),f=ll(n),p=ul(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(fl).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(fl).join(`
`),g.length>0&&(g+=`
`)):(h=[xl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(fl).join(`
`),g=[xl(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:J.tonemapping_pars_fragment,n.toneMapping===0?``:ol(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,J.colorspace_pars_fragment,il(`linearToOutputTexel`,n.outputColorSpace),cl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(fl).join(`
`)),o=gl(o),o=pl(o,n),o=ml(o,n),s=gl(s),s=pl(s,n),s=ml(s,n),o=yl(o),s=yl(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Zc(i,i.VERTEX_SHADER,v),x=Zc(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=rl(i,b,`vertex`),n=rl(i,x,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Xc(i,m),w=dl(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Qc)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$c++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var kl=0,Al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new jl(e),t.set(e,n)),n}},jl=class{constructor(e){this.id=kl++,this.code=e,this.usedTimes=0}};function Ml(e){return e===1030||e===37490||e===36285}function Nl(e,t,n,r,i,a){let o=new Wn,s=new Al,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=ss[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),ee=m.isInstancedMesh===!0,M=m.isBatchedMesh===!0,te=!!i.map,ne=!!i.matcap,N=!!b,re=N&&b.isPMREMTexture===!0,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,ue=!!i.metalnessMap,de=!!i.roughnessMap,fe=i.anisotropy>0,pe=i.clearcoat>0,me=i.diffuseRoughness>0,he=i.dispersion>0,ge=i.retroreflectivity>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=fe&&!!i.anisotropyMap,xe=pe&&!!i.clearcoatMap,Se=pe&&!!i.clearcoatNormalMap,Ce=pe&&!!i.clearcoatRoughnessMap,we=me&&!!i.diffuseRoughnessMap,P=_e&&!!i.iridescenceMap,Te=_e&&!!i.iridescenceThicknessMap,Ee=ve&&!!i.sheenColorMap,De=ve&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ye&&!!i.transmissionMap,F=ye&&!!i.thicknessMap,Me=!!i.gradientMap,Ne=!!i.alphaMap,Pe=i.alphaTest>0,Fe=!!i.alphaHash,Ie=!!i.extensions,I=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(I=e.toneMapping);let L=re?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Le={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:M,batchingColor:M&&m._colorsTexture!==null,instancing:ee,instancingColor:ee&&m.instanceColor!==null,instancingMorph:ee&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:W.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:te,matcap:ne,envMap:N,envMapMode:N&&b.mapping,envMapPMREM:re,envMapMaxLod:re?L.length-1:null,envMapSize:re?L[0].width:null,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&Ml(i.normalMap.format),metalnessMap:ue,roughnessMap:de,anisotropy:fe,anisotropyMap:be,clearcoat:pe,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,diffuseRoughness:me,diffuseRoughnessMap:we,dispersion:he,retroreflection:ge,iridescence:_e,iridescenceMap:P,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ye,transmissionMap:je,thicknessMap:F,gradientMap:Me,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Pe,alphaHash:Fe,combine:i.combine,mapUv:te&&p(i.map.channel),aoMapUv:ie&&p(i.aoMap.channel),lightMapUv:ae&&p(i.lightMap.channel),bumpMapUv:oe&&p(i.bumpMap.channel),normalMapUv:se&&p(i.normalMap.channel),displacementMapUv:ce&&p(i.displacementMap.channel),emissiveMapUv:le&&p(i.emissiveMap.channel),metalnessMapUv:ue&&p(i.metalnessMap.channel),roughnessMapUv:de&&p(i.roughnessMap.channel),anisotropyMapUv:be&&p(i.anisotropyMap.channel),clearcoatMapUv:xe&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:P&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&p(i.sheenRoughnessMap.channel),specularMapUv:Oe&&p(i.specularMap.channel),specularColorMapUv:ke&&p(i.specularColorMap.channel),specularIntensityMapUv:Ae&&p(i.specularIntensityMap.channel),transmissionMapUv:je&&p(i.transmissionMap.channel),thicknessMapUv:F&&p(i.thicknessMap.channel),alphaMapUv:Ne&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(se||fe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(te||Ne),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:I,decodeVideoTexture:te&&i.map.isVideoTexture===!0&&W.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&W.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||M)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Le.vertexUv1s=c.has(1),Le.vertexUv2s=c.has(2),Le.vertexUv3s=c.has(3),c.clear(),Le}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=ss[t];n=Wa.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Ol(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Pl(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Fl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Il(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ll(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Fl),r.length>1&&r.sort(t||Il),i.length>1&&i.sort(t||Il)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Rl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ll,e.set(t,[i])):n>=r.length?(i=new Ll,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function zl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new K};break;case`SpotLight`:n={position:new H,direction:new H,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new K,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new K,groundColor:new K};break;case`RectAreaLight`:n={color:new K,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function Bl(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Vl=0;function Hl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ul(e){let t=new zl,n=Bl(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new G,o=new G;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Hl);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Vl++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Wl(e){let t=new Ul(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Gl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Wl(e),t.set(n,[a])):r>=i.length?(a=new Wl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Kl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ql=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Jl=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Yl=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Xl=new G,Zl=new H,Ql=new H;function $l(e,t,n){let r=new ha,i=new V,a=new V,o=new kn,s=new Za,c=new Qa,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new qa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:Kl,fragmentShader:ql}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ui;m.setAttribute(`position`,new Yr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new q(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){R(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new jn(i.x,i.y,{format:Ue,type:Me,minFilter:we,magFilter:we,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Da(i.x,i.y,F),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ze,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=xe,d.map.depthTexture.magFilter=xe}else l.isPointLight?(d.map=new gs(i.x),d.map.depthTexture=new Oa(i.x,je)):(d.map=new jn(i.x,i.y),d.map.depthTexture=new Da(i.x,i.y,je)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ze,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=we,d.map.depthTexture.magFilter=we):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=xe,d.map.depthTexture.magFilter=xe);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Zl.setFromMatrixPosition(l.matrixWorld),e.position.copy(Zl),Ql.copy(e.position),Ql.add(Jl[t]),e.up.copy(Yl[t]),e.lookAt(Ql),e.updateMatrixWorld(),n.makeTranslation(-Zl.x,-Zl.y,-Zl.z),Xl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Xl,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new jn(i.x,i.y,{format:Ue,type:Me}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function eu(e,t){function n(){let t=!1,n=new kn,r=null,i=new kn(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?ue(e.DEPTH_TEST):de(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=$t[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?ue(e.STENCIL_TEST):de(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ee=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),M=!1,te=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),M=te>=2):(te=parseFloat(/^WebGL (\d)/.exec(ne)[1]),M=te>=1);let N=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new kn().fromArray(ie),se=new kn().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ue(e.DEPTH_TEST),o.setFunc(3),ye(!1),be(1),ue(e.CULL_FACE),_e(0);function ue(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function de(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function fe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function pe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function me(t){return h!==t&&(e.useProgram(t),h=t,!0)}let he={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};he[103]=e.MIN,he[104]=e.MAX;let ge={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(de(e.BLEND),g=!1);else if(g===!1&&(ue(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(he[n],he[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ge[r],ge[i],ge[o],ge[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?de(e.CULL_FACE):ue(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ye(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?ue(e.SAMPLE_ALPHA_TO_COVERAGE):de(e.SAMPLE_ALPHA_TO_COVERAGE)}function ye(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function be(t){t===0?de(e.CULL_FACE):(ue(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function xe(t){t!==k&&(M&&e.lineWidth(t),k=t)}function Se(t,n,r){t?(ue(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):de(e.POLYGON_OFFSET_FILL)}function Ce(t){t?ue(e.SCISSOR_TEST):de(e.SCISSOR_TEST)}function we(t){t===void 0&&(t=e.TEXTURE0+ee-1),N!==t&&(e.activeTexture(t),N=t)}function P(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+ee-1:N);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=re[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function F(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function I(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function L(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function Le(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Re(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function ze(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,re={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new K(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:ue,disable:de,bindFramebuffer:fe,drawBuffers:pe,useProgram:me,setBlending:_e,setMaterial:ve,setFlipSided:ye,setCullFace:be,setLineWidth:xe,setPolygonOffset:Se,setScissorTest:Ce,activeTexture:we,bindTexture:P,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:Ne,texImage3D:Pe,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:Le,uniformBlockBinding:Re,texStorage2D:F,texStorage3D:Me,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:I,viewport:L,reset:ze}}function tu(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new V,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):Kt(`canvas`)}function v(e,t,n){let r=1,i=Re(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Rt:W.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function E(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function D(e){k(e.target)}function O(e){A(e.target)}function k(e){e.removeEventListener(`dispose`,D),E(e),ee(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function A(e){e.removeEventListener(`dispose`,O),E(e),te(e)}function j(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?A(t):k(t))}m.clear(),d.clear()}function ee(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&M(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function M(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function te(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&k(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let ne=0;function N(){ne=0}function re(){return ne}function ie(e){ne=e}function ae(){let e=ne;return e>=i.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ne+=1,e}function oe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function se(t,i){let a=r.get(t);if(t.isVideoTexture&&L(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ee(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ce(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ee(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function le(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?Ee(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ue(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?De(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let de={[ve]:e.REPEAT,[ye]:e.CLAMP_TO_EDGE,[be]:e.MIRRORED_REPEAT},fe={[xe]:e.NEAREST,[Se]:e.NEAREST_MIPMAP_NEAREST,[Ce]:e.NEAREST_MIPMAP_LINEAR,[we]:e.LINEAR,[P]:e.LINEAR_MIPMAP_NEAREST,[Te]:e.LINEAR_MIPMAP_LINEAR},pe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function me(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,de[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,de[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,de[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,fe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,fe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,pe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function he(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D),T(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=oe(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&M(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ge(e,t,n){return Math.floor(Math.floor(e/n)/t)}function _e(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ge(n.start,r.width,4),c=ge(t.start,r.width,4);n.start<=i+1&&a===c&&ge(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Ee(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=he(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=W.getPrimaries(W.workingColorSpace),r=o.colorSpace===``?null:W.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=Le(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);me(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===Be,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&_e(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=rs(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=rs(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=Re(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=Re(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function De(t,o,s){if(o.image.length!==6)return;let c=he(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=W.getPrimaries(W.workingColorSpace),r=o.colorSpace===``?null:W.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Le(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,h);me(e.TEXTURE_CUBE_MAP,o);let k;if(o.isDepthTexture){if(x=C(o.format===Be,o.type),E){if(T)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,T&&E){k.length>0&&O++;let t=Re(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<k.length;r++){let i=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Oe(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ie(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;I(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);I(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ie(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ie(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ae(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?ue(i.depthTexture,0):se(i.depthTexture,0);let u=c.__webglTexture,d=Ie(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)I(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function je(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Ae(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Ae(i.__webglFramebuffer[0],t,0):Ae(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),ke(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),ke(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function F(t,n,i){let a=r.get(t);n!==void 0&&Oe(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&je(t)}function Me(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O),T(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&I(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ie(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),ke(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),me(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Oe(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Oe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),me(c,a),Oe(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),me(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Oe(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Oe(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&je(t)}function Ne(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let Pe=[];function Fe(t){if(t.samples>0){if(I(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Pe.length=0,Pe.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Pe.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Pe))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ie(e){return Math.min(i.maxSamples,e.samples)}function I(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function L(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Le(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(W.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function Re(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ae,this.resetTextureUnits=N,this.getTextureUnits=re,this.setTextureUnits=ie,this.setTexture2D=se,this.setTexture2DArray=ce,this.setTexture3D=le,this.setTextureCube=ue,this.rebindTextures=F,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=Fe,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=I,this.dispose=j}function nu(e,t){function n(n,r=``){let i,a=W.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ru=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,au=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ka(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qa({vertexShader:ru,fragmentShader:iu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new q(new Fa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ou=class extends en{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new au,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new V,C=null,w=null,T=new No;T.viewport=new kn;let E=new No;E.viewport=new kn;let D=[T,E],O=new Bo,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new lr,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new lr,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new lr,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ee(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,ee),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,ee),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?Be:ze,a=_.stencil?Fe:je);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new jn(d.textureWidth,d.textureHeight,{format:Re,type:Ee,depthTexture:new Da(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new jn(f.framebufferWidth,f.framebufferHeight,{format:Re,type:Ee,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function te(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;te(O,i);for(let e=0;e<a.length;e++)te(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ne(e,O,i)};function ne(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=rn*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let N=null;function re(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new No,o.layers.enable(n),o.viewport=new kn,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ka,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}N&&N(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ie=new as;ie.setAnimationLoop(re),this.setAnimationLoop=function(e){N=e},this.dispose=function(){}}},su=new G,cu=new U;cu.set(-1,0,0,0,1,0,0,0,1);function lu(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Ua(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(su.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(cu),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function uu(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var du=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fu=null;function pu(){return fu===null&&(fu=new na(du,16,16,Ue,Me),fu.name=`DFG_LUT`,fu.minFilter=we,fu.magFilter=we,fu.wrapS=ye,fu.wrapT=ye,fu.generateMipmaps=!1,fu.needsUpdate=!0),fu}var mu=class{constructor(e={}){let{canvas:t=qt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ee}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([Ge,We,He]),g=new Set([Ee,je,ke,Fe,Ne,Pe]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=It;let j=0,ee=0,M=null,te=-1,ne=null,N=new kn,re=new kn,ie=null,ae=new K(0),oe=0,se=t.width,ce=t.height,le=1,ue=null,de=null,fe=new kn(0,0,se,ce),pe=new kn(0,0,se,ce),me=!1,he=new ha,ge=new _a,_e=!1,ve=!1,ye=new G,be=new H,xe=new kn,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function we(){return M===null?le:1}let P=n;function De(e,n){return t.getContext(e,n)}let Oe,Ae,F,Ie,I,L,Le,Re,ze,Be,Ve,Ue,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,at,!1),t.addEventListener(`webglcontextrestored`,ot,!1),t.addEventListener(`webglcontextcreationerror`,st,!1),P===null){let t=`webgl2`;if(P=De(t,e),P===null)throw De(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}rt()}catch(e){throw t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),z(`WebGLRenderer: `+e.message),e}function rt(){Oe=new Ps(P),Oe.init(),et=new nu(P,Oe),Ae=new ms(P,Oe,e,et),F=new eu(P,Oe),Ae.reversedDepthBuffer&&d&&F.buffers.depth.setReversed(!0),O=P.createFramebuffer(),k=P.createFramebuffer(),A=P.createFramebuffer(),Ie=new Ls(P),I=new Pl,L=new tu(P,Oe,F,I,Ae,et,Ie),Le=new Ns(T),Re=new os(P),tt=new fs(P,Re),ze=new Fs(P,Re,Ie,tt),Be=new zs(P,ze,Re,tt,Ie),Ze=new Rs(P,Ae,L),Je=new hs(I),Ve=new Nl(T,Le,Oe,Ae,tt,Je),Ue=new lu(T,I),Ke=new Rl,qe=new Gl(Oe),Xe=new ds(T,Le,F,Be,p,s),Ye=new $l(T,Be,Ae),nt=new uu(P,Ie,Ae,F),Qe=new ps(P,Oe,Ie),$e=new Is(P,Oe,Ie),Ie.programs=Ve.programs,T.capabilities=Ae,T.extensions=Oe,T.properties=I,T.renderLists=Ke,T.shadowMap=Ye,T.state=F,T.info=Ie}m!==1009&&(w=new Vs(m,t.width,t.height,o,r,i));let it=new ou(T,P);this.xr=it,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let e=Oe.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Oe.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(e){e!==void 0&&(le=e,this.setSize(se,ce,!1))},this.getSize=function(e){return e.set(se,ce)},this.setSize=function(e,n,r=!0){it.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(se=e,ce=n,t.width=Math.floor(e*le),t.height=Math.floor(n*le),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(se*le,ce*le).floor()},this.setDrawingBufferSize=function(e,n,r){se=e,ce=n,le=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(N)},this.getViewport=function(e){return e.copy(fe)},this.setViewport=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),F.viewport(N.copy(fe).multiplyScalar(we()).round())},this.getScissor=function(e){return e.copy(pe)},this.setScissor=function(e,t,n,r){e.isVector4?pe.set(e.x,e.y,e.z,e.w):pe.set(e,t,n,r),F.scissor(re.copy(pe).multiplyScalar(we()).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(e){F.setScissorTest(me=e)},this.setOpaqueSort=function(e){ue=e},this.setTransparentSort=function(e){de=e},this.getClearColor=function(e){return e.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=h.has(t)}if(e){let e=M.texture.type,t=g.has(e),n=Xe.getClearColor(),r=Xe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,P.clearBufferuiv(P.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,P.clearBufferiv(P.COLOR,0,v))}else r|=P.COLOR_BUFFER_BIT}t&&(r|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&P.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,at,!1),t.removeEventListener(`webglcontextrestored`,ot,!1),t.removeEventListener(`webglcontextcreationerror`,st,!1),Xe.dispose(),Ke.dispose(),qe.dispose(),L.dispose(),I.dispose(),Le.dispose(),Be.dispose(),ze.dispose(),tt.dispose(),nt.dispose(),Ve.dispose(),it.dispose(),it.removeEventListener(`sessionstart`,mt),it.removeEventListener(`sessionend`,ht),gt.stop()};function at(e){e.preventDefault(),Yt(`WebGLRenderer: Context Lost.`),E=!0}function ot(){Yt(`WebGLRenderer: Context Restored.`),E=!1;let e=Ie.autoReset,t=Ye.enabled,n=Ye.autoUpdate,r=Ye.needsUpdate,i=Ye.type;rt(),Ie.autoReset=e,Ye.enabled=t,Ye.autoUpdate=n,Ye.needsUpdate=r,Ye.type=i}function st(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ct(e){let t=e.target;t.removeEventListener(`dispose`,ct),lt(t)}function lt(e){ut(e),I.remove(e)}function ut(e){let t=I.get(e).programs;t!==void 0&&(t.forEach(function(e){Ve.releaseProgram(e)}),e.isShaderMaterial&&Ve.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Se);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Dt(e,t,n,r,i);F.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=ze.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;tt.setup(i,r,s,n,c);let h,g=Qe;if(c!==null&&(h=Re.get(c),g=$e,g.setIndex(h)),i.isMesh)r.wireframe===!0?(F.setLineWidth(r.wireframeLinewidth*we()),g.setMode(P.LINES)):g.setMode(P.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),F.setLineWidth(e*we()),i.isLineSegments?g.setMode(P.LINES):i.isLineLoop?g.setMode(P.LINE_LOOP):g.setMode(P.LINE_STRIP)}else i.isPoints?g.setMode(P.POINTS):i.isSprite&&g.setMode(P.TRIANGLES);if(i.isBatchedMesh){if(Oe.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Re.get(c).bytesPerElement:1,o=I.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(P,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function dt(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),_e===!0&&Je.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Ct(e,t,r),e.side=0,e.needsUpdate=!0,Ct(e,t,r),e.side=2):Ct(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=qe.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),ve=this.localClippingEnabled,_e=Je.init(this.clippingPlanes,ve),_e===!0&&Je.setGlobalState(this.clippingPlanes,t),D!==null&&Ye.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];dt(o,n,t,e),r.add(o)}else dt(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=I.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Oe.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ft=null;function pt(e){ft&&ft(e)}function mt(){gt.stop()}function ht(){gt.start()}let gt=new as;gt.setAnimationLoop(pt),typeof self<`u`&&gt.setContext(self),this.setAnimationLoop=function(e){ft=e,it.setAnimationLoop(e),e===null?gt.stop():gt.start()},it.addEventListener(`sessionstart`,mt),it.addEventListener(`sessionend`,ht),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=it.enabled===!0&&it.isPresenting===!0,r=w!==null&&(M===null||n)&&w.begin(T,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(t),t=it.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,M),x=qe.get(e,C.length),x.init(t),x.state.textureUnits=L.getTextureUnits(),C.push(x),ye.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?ge.setFromArrayCamera(t):he.setFromProjectionMatrix(ye,Ut,t.reversedDepth),ve=this.localClippingEnabled,_e=Je.init(this.clippingPlanes,ve),b=Ke.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,it.enabled===!0&&it.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&_t(e,t,-1/0,T.sortObjects)}_t(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(ue,de),Ce=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Ce&&Xe.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),_e===!0&&Je.beginShadows();let i=x.state.shadowsArray;if(Ye.render(i,e,t),_e===!0&&Je.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];yt(n,r,e,a)}Ce&&Xe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];vt(b,e,n,n.viewport)}}else r.length>0&&yt(n,r,e,t),Ce&&Xe.render(e),vt(b,e,t)}M!==null&&ee===0&&(L.updateMultisampleRenderTarget(M),L.updateRenderTargetMipmap(M)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),tt.resetDefaultState(),te=-1,ne=null,C.pop(),C.length>0?(x=C[C.length-1],L.setTextureUnits(x.state.textureUnits),_e===!0&&Je.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function _t(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?ge:he;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&xe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ye);let i=Be.update(e),a=e.material;a.visible&&b.push(e,i,a,n,xe.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?ge:he;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Be.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),xe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),xe.copy(e.boundingSphere.center)),xe.applyMatrix4(e.matrixWorld).applyMatrix4(ye)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,xe.z,s,t)}}else a.visible&&b.push(e,i,a,n,xe.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)_t(i[e],t,n,r)}function vt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),_e===!0&&Je.setGlobalState(T.clippingPlanes,n),r&&F.viewport(N.copy(r)),i.length>0&&bt(i,t,n),a.length>0&&bt(a,t,n),o.length>0&&bt(o,t,n),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function yt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Oe.has(`EXT_color_buffer_half_float`)||Oe.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new jn(1,1,{generateMipmaps:!0,type:e?Me:Ee,minFilter:Te,samples:Math.max(4,Ae.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:W.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||N;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ae),oe=T.getClearAlpha(),oe<1&&T.setClearColor(16777215,.5),T.clear(),Ce&&Xe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),_e===!0&&Je.setGlobalState(T.clippingPlanes,r),bt(e,n,r),L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a),Oe.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,xt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(L.updateMultisampleRenderTarget(a),L.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ae,oe),d!==void 0&&(r.viewport=d),T.toneMapping=u}function bt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&xt(o,t,n,s,l,c)}}function xt(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function St(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Ct(e,t,n){t.isScene!==!0&&(t=Se);let r=I.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ve.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ve.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Le.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ct),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Et(e,s),d}else s.uniforms=Ve.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=Ve.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Je.uniform),Et(e,s),r.needsLights=kt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=St(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function wt(e,t,n,r,i){let a=I.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Ct(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Tt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Xc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Et(e,t){let n=I.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Dt(e,t,n,r,i){t.isScene!==!0&&(t=Se),L.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?T.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:W.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Le.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=I.get(r),b=x.state.lights;if(_e===!0&&(ve===!0||e!==ne)){let t=e===ne&&r.id===te;Je.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Je.numPlanes||v.numIntersection!==Je.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===St(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?wt(r,t,i,s,h):Ct(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,k=!1,A=w.getUniforms(),j=v.uniforms;if(F.useProgram(w.program)&&(E=!0,O=!0,k=!0),r.id!==te&&(te=r.id,O=!0),E||ne!==e){F.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(P,`projectionMatrix`,e.projectionMatrix),A.setValue(P,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(P,be.setFromMatrixPosition(e.matrixWorld)),Ae.logarithmicDepthBuffer&&A.setValue(P,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(P,`isOrthographic`,e.isOrthographicCamera===!0),ne!==e&&(ne=e,O=!0,k=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&A.setValue(P,`sunShadowMap`,b.state.sunShadowMap,L),b.state.directionalShadowMap.length>0&&A.setValue(P,`directionalShadowMap`,b.state.directionalShadowMap,L),b.state.spotShadowMap.length>0&&A.setValue(P,`spotShadowMap`,b.state.spotShadowMap,L),b.state.pointShadowMap.length>0&&A.setValue(P,`pointShadowMap`,b.state.pointShadowMap,L)),i.isSkinnedMesh){A.setOptional(P,i,`bindMatrix`),A.setOptional(P,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(P,`boneTexture`,e.boneTexture,L))}i.isBatchedMesh&&(A.setOptional(P,i,`batchingTexture`),A.setValue(P,`batchingTexture`,i._matricesTexture,L),A.setOptional(P,i,`batchingIdTexture`),A.setValue(P,`batchingIdTexture`,i._indirectTexture,L),A.setOptional(P,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(P,`batchingColorTexture`,i._colorsTexture,L));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&Ze.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(P,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=pu()),O){if(A.setValue(P,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&Ot(j,k),a&&r.fog===!0&&Ue.refreshFogUniforms(j,a),Ue.refreshMaterialUniforms(j,r,le,ce,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;j.probesSH.value=e.textures,j.probesMin.value=e.min,j.probesMax.value=e.max,j.probesResolution.value=e.resolution}Xc.upload(P,Tt(v),j,L)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Xc.upload(P,Tt(v),j,L),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(P,`center`,i.center),A.setValue(P,`modelViewMatrix`,i.modelViewMatrix),A.setValue(P,`normalMatrix`,i.normalMatrix),A.setValue(P,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];nt.update(n,w),nt.bind(n,w)}}return w}function Ot(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function kt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=I.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),I.get(e.texture).__webglTexture=t,I.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=I.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,j=t,ee=n;let r=null,i=!1,a=!1;if(e){let o=I.get(e);if(o.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(P.FRAMEBUFFER,o.__webglFramebuffer),N.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest,F.viewport(N),F.scissor(re),F.setScissorTest(ie),te=-1;return}if(o.__webglFramebuffer===void 0)L.setupRenderTarget(e);else if(o.__hasExternalTextures)L.rebindTextures(e,I.get(e.texture).__webglTexture,I.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&I.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);L.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=I.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&L.useMultisampledRTT(e)===!1?I.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,N.copy(e.viewport),re.copy(e.scissor),ie=e.scissorTest}else N.copy(fe).multiplyScalar(le).floor(),re.copy(pe).multiplyScalar(le).floor(),ie=me;if(n!==0&&(r=O),F.bindFramebuffer(P.FRAMEBUFFER,r)&&F.drawBuffers(e,r),F.viewport(N),F.scissor(re),F.setScissorTest(ie),i){let r=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=I.get(e.textures[t]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=I.get(e.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,t.__webglTexture,n)}te=-1};function At(e){let t=I.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ae.textureFormatReadable(e.format),t.__typeReadable=Ae.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){F.bindFramebuffer(P.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let u=At(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&P.readPixels(t,n,r,i,et.convert(c),et.convert(l),a)}finally{let e=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=I.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){F.bindFramebuffer(P.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+s);let d=At(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.bufferData(P.PIXEL_PACK_BUFFER,a.byteLength,P.STREAM_READ),P.readPixels(t,n,r,i,et.convert(l),et.convert(u),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let p=M===null?null:I.get(M).__webglFramebuffer;F.bindFramebuffer(P.FRAMEBUFFER,p);let m=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Qt(P,m,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,f),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,a),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(f),P.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;L.setTexture2D(e,0),P.copyTexSubImage2D(P.TEXTURE_2D,n,0,0,o,s,i,a),F.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=et.convert(t.format),_=et.convert(t.type),v;t.isData3DTexture?(L.setTexture3D(t,0),v=P.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(L.setTexture2DArray(t,0),v=P.TEXTURE_2D_ARRAY):(L.setTexture2D(t,0),v=P.TEXTURE_2D),F.activeTexture(P.TEXTURE0),F.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,t.flipY),F.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),F.pixelStorei(P.UNPACK_ALIGNMENT,t.unpackAlignment);let y=F.getParameter(P.UNPACK_ROW_LENGTH),b=F.getParameter(P.UNPACK_IMAGE_HEIGHT),x=F.getParameter(P.UNPACK_SKIP_PIXELS),S=F.getParameter(P.UNPACK_SKIP_ROWS),C=F.getParameter(P.UNPACK_SKIP_IMAGES);F.pixelStorei(P.UNPACK_ROW_LENGTH,h.width),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,h.height),F.pixelStorei(P.UNPACK_SKIP_PIXELS,l),F.pixelStorei(P.UNPACK_SKIP_ROWS,u),F.pixelStorei(P.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=I.get(e),r=I.get(t),h=I.get(n.__renderTarget),g=I.get(r.__renderTarget);F.bindFramebuffer(P.READ_FRAMEBUFFER,h.__webglFramebuffer),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(e).__webglTexture,i,d+n),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,I.get(t).__webglTexture,a,m+n)),P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.DEPTH_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||I.has(e)){let n=I.get(e),r=I.get(t);F.bindFramebuffer(P.READ_FRAMEBUFFER,k),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,n.__webglTexture,i),T?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,r.__webglTexture,a),i===0?T?P.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):P.copyTexSubImage2D(v,a,f,p,l,u,o,s):P.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,P.COLOR_BUFFER_BIT,P.NEAREST);F.bindFramebuffer(P.READ_FRAMEBUFFER,null),F.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?P.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):P.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):P.texSubImage2D(P.TEXTURE_2D,a,f,p,o,s,g,_,h);F.pixelStorei(P.UNPACK_ROW_LENGTH,y),F.pixelStorei(P.UNPACK_IMAGE_HEIGHT,b),F.pixelStorei(P.UNPACK_SKIP_PIXELS,x),F.pixelStorei(P.UNPACK_SKIP_ROWS,S),F.pixelStorei(P.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&P.generateMipmap(v),F.unbindTexture()},this.initRenderTarget=function(e){I.get(e).__webglFramebuffer===void 0&&L.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?L.setTextureCube(e,0):e.isData3DTexture?L.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?L.setTexture2DArray(e,0):L.setTexture2D(e,0),F.unbindTexture()},this.resetState=function(){j=0,ee=0,M=null,F.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ut}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=W._getDrawingBufferColorSpace(e),t.unpackColorSpace=W._getUnpackColorSpace()}},hu=[``,`K`,`M`,`B`,`T`,`Qa`,`Qi`,`Sx`,`Sp`,`Oc`,`No`,`Dc`,`Ud`,`Dd`,`Td`,`Qd`];function gu(e){if(!Number.isFinite(e))return`∞`;let t=e<0,n=Math.abs(e);if(n<1e3){let e=n<10&&n%1!=0?n.toFixed(1):String(Math.floor(n));return(t?`-`:``)+e}let r=0;for(;n>=1e3&&r<hu.length-1;)n/=1e3,r++;if(n>=1e3)return(t?`-`:``)+e.toExponential(2);let i=n>=100?n.toFixed(0):n>=10?n.toFixed(1):n.toFixed(2);return(t?`-`:``)+(i.includes(`.`)?i.replace(/\.?0+$/,``):i)+hu[r]}var X=e=>`$`+gu(e);function _u(e){let t=100/Math.max(1,e);return t>=10?Math.round(t)+`%`:Number(t.toPrecision(2)).toString()+`%`}var vu=e=>e<1e5?Math.floor(e).toLocaleString(`en-US`)+`m`:Math.round(e/1e3).toLocaleString(`en-US`)+`km`,yu=e=>{let t=Math.max(0,Math.floor(e)),n=Math.floor(t/3600),r=Math.floor(t%3600/60);return n?`${n}h ${r}m`:r?`${r}m ${t%60}s`:`${t}s`},bu=(e,t,n)=>e<t?t:e>n?n:e,xu=e=>e*e*(3-2*e),Su=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n*r));function Cu(e){let t=e*2654435761>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>>17,t^=t<<5,t>>>=0,t/4294967296)}var wu=class{constructor(){this.h={}}on(e,t){var n;return((n=this.h)[e]||(n[e]=[])).push(t),()=>this.off(e,t)}off(e,t){this.h[e]=(this.h[e]||[]).filter(e=>e!==t)}emit(e,...t){(this.h[e]||[]).slice().forEach(e=>e(...t))}};function Tu(e){let t=new Date(e);return t.getUTCFullYear()*1e4+(t.getUTCMonth()+1)*100+t.getUTCDate()}var Eu={meadow:`#c9824a`,forest:`#8f6a4a`,savanna:`#c9703f`,desert:`#d68f4f`,jungle:`#6f5a3f`,ocean:`#3f8fb0`,mountains:`#7f8a9a`,arctic:`#8fbfe0`,volcano:`#3a2228`,fantasy:`#6a4fb5`,crystal:`#4a4fc0`,sky:`#c8d8f0`,cosmic:`#2a1a6a`,candy:`#d86fa8`,clockwork:`#7a5a30`,marsh:`#3a4a3a`,aurora:`#2f4f8f`,eden:`#c9963f`},Du=e=>new K(e),Ou=(e,t=1.3)=>{let n=new K(e),r={};return n.getHSL(r),n.setHSL(r.h,Math.min(1,r.s*t),r.l*.96)},ku=v.map(e=>{var t;return{ground:Ou(e.ground),ground2:Ou(e.ground2),side:Ou(e.side),path:Ou(e.path,1.15),cliff:Ou(Eu[e.id]||e.side,1.15),skyTop:Ou(e.skyTop,1.2),skyBottom:Du(e.skyBottom),fog:Du(e.fog),sun:e.sun,stars:e.stars||0,hillNoise:e.hillNoise||1,sideRise:(t=e.sideRise)==null?1:t}}),Au=5;function ju(e){let t=C(e),n=v[t];if(t<v.length-1&&e>n.renderEnd-Au){let r=(e-(n.renderEnd-Au))/10;return{a:ku[t],b:ku[t+1],t:r*r*(3-2*r)}}if(t>0&&e<n.renderStart+Au){let r=(e-(n.renderStart-Au))/10;return{a:ku[t-1],b:ku[t],t:r*r*(3-2*r)}}return{a:ku[t],b:ku[t],t:0}}var Mu=30,Nu=4,Pu=40/Nu,Fu=5400,Iu=1.2,Lu=e=>((e+.5)*Nu,0),Ru=(()=>{let e=[4.5,7,13,20,28,36,46];for(let t=46;t<94;t+=Nu)e.push(t+Nu);for(let t=94;t<158;t+=8)e.push(t+8);for(let t=158;t<222;t+=16)e.push(t+16);return[...e.map(e=>-e).reverse(),...e]})(),zu=Ru.length-1;function Bu(e,t){return(Math.sin(e*1.31+t*.73)+Math.sin(e*.57-t*1.17)*.7+Math.sin(e*2.3+t*2.1)*.3)/2}var Vu=(e,t,n)=>{let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)},Hu=(e,t,n=0)=>{let r=Math.sin(e*127.1+t*311.7+n*74.7)*43758.5453;return r-Math.floor(r)};function Uu(e,t){let n=1-Vu(25,80,e),r=Math.max(0,Math.abs(t)-n*84),i=ju(e),a=i.a.sideRise+(i.b.sideRise-i.a.sideRise)*i.t,o=i.a.hillNoise+(i.b.hillNoise-i.a.hillNoise)*i.t,s=Vu(46,66,r+Bu(e*.05,t*.02)*3),c=s*Mu*a+s*(Bu(e*.035,t*.035)+1)*3.5*o;return e<-74&&(c+=Vu(-74,-96,e)*Mu),c}function Wu(e,t){let n=Uu((e+.5)*Nu,(Ru[t]+Ru[t+1])/2),r=Lu(e);if(n<1.5)return r;let i=(Hu(e,t)-.5)*Nu*1.1;return r+Math.max(Nu,Math.round((n+i)/Nu)*Nu)}function Gu(e){let t=0,n=zu-1;for(;t<n;){let r=t+n>>1;e>=Ru[r+1]?t=r+1:n=r}return t}function Ku(e,t){return Wu(Math.floor(e/Nu),Gu(t))}function qu(){let e=new Xa({vertexColors:!0});return e.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vWP;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vWP = (modelMatrix * vec4(position, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        varying vec3 vWP;
        float tHash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
        float tNoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
          return mix(mix(tHash(i), tHash(i + vec2(1, 0)), f.x), mix(tHash(i + vec2(0, 1)), tHash(i + vec2(1, 1)), f.x), f.y); }`).replace(`#include <color_fragment>`,`#include <color_fragment>
        // Soft mown bands on the flat ground only; block faces stay clean.
        if (vWP.y < .5) {
          vec2 wp = vWP.xz;
          float n = tNoise(wp * .3) * .6 + tNoise(wp * 1.6) * .4;
          float band = smoothstep(-.15, .15, sin((wp.y + sin(wp.x * .16) * 4.0) * .22));
          diffuseColor.rgb *= .9 + .16 * n + .07 * band;
        }`)},e}var Ju=new K;function Yu(e,t,n){let r=ju(e),i=Math.abs(t),a=(Bu(e*.09,t*.09)+1)*.5,o=e=>{let t=e.ground.r+(e.ground2.r-e.ground.r)*a,n=e.ground.g+(e.ground2.g-e.ground.g)*a,r=e.ground.b+(e.ground2.b-e.ground.b)*a,o=1-Vu(4.5,7,i);return[t+(e.path.r-t)*o,n+(e.path.g-n)*o,r+(e.path.b-r)*o]},s=o(r.a);if(r.t>0){let e=o(r.b);n.setRGB(s[0]+(e[0]-s[0])*r.t,s[1]+(e[1]-s[1])*r.t,s[2]+(e[2]-s[2])*r.t)}else n.setRGB(s[0],s[1],s[2])}var Xu=(e,t,n,r)=>e[r]+(t[r]-e[r])*n,Zu=class{constructor(e,t=13){this.chunks=[],this.material=qu();let n=Fu*4,r=new Uint16Array(Fu*6);for(let e=0;e<Fu;e++){let t=e*4,n=e*6;r[n]=t,r[n+1]=t+1,r[n+2]=t+2,r[n+3]=t,r[n+4]=t+2,r[n+5]=t+3}for(let i=0;i<t;i++){let t=new ui;for(let e of[`position`,`normal`,`color`]){let r=new Yr(new Float32Array(n*3),3);r.setUsage(Ht),t.setAttribute(e,r)}t.setIndex(new Yr(r,1)),t.boundingSphere=new ni(new H(0,10,-20),240);let i=new q(t,this.material);i.receiveShadow=!0,i.castShadow=!1,i.visible=!1,e.add(i),this.chunks.push({mesh:i,index:null})}this.heights=new Int16Array(12*zu)}fill(e,t){let n=t*40,r=t*Pu,i=e.mesh.geometry,a=i.attributes.position.array,o=i.attributes.normal.array,s=i.attributes.color.array,c=this.heights;for(let e=0;e<12;e++)for(let t=0;t<zu;t++)c[e*zu+t]=Wu(r+e-1,t);let l=0,u=(e,t,n,r,i,c)=>{if(l>=Fu)return;let u=l*12;for(let l=0;l<12;l+=3){a[u+l]=e[l],a[u+l+1]=e[l+1],a[u+l+2]=e[l+2],o[u+l]=t,o[u+l+1]=n,o[u+l+2]=r;let d=l<6?i:c;s[u+l]=d[0],s[u+l+1]=d[1],s[u+l+2]=d[2]}l++},d=[0,0,0],f=[0,0,0],p=[0,0,0],m=[0,0,0],h=[0,0,0];for(let e=0;e<Pu;e++){let t=n+e*Nu,i=t+Nu,g=-(t-n),_=-(i-n),v=(t+i)/2,y=ju(v),b=r+e;for(let n=0;n<zu;n++){let r=c[(e+1)*zu+n],x=Ru[n],S=Ru[n+1],C=Lu(b);if(r===C){if(l<Fu){let e=l*12;[[t,x,g],[t,S,g],[i,S,_],[i,x,_]].forEach(([t,n,i],c)=>{Yu(t,n,Ju);let l=c*3;a[e+l]=n,a[e+l+1]=r,a[e+l+2]=i,o[e+l]=0,o[e+l+1]=1,o[e+l+2]=0,s[e+l]=Ju.r,s[e+l+1]=Ju.g,s[e+l+2]=Ju.b}),l++}if(C===0)continue}let w=.9+Hu(b,n,7)*.2,T=Hu(b,n,3);for(let e=0;e<3;e++){let t=[`r`,`g`,`b`][e],n=T<.5?y.a.ground[t]:y.a.ground2[t],r=T<.5?y.b.ground[t]:y.b.ground2[t];h[e]=Xu({v:n},{v:r},y.t,`v`)*w,p[e]=h[e]*.86,m[e]=h[e]*.72}r===C?(Yu(v,(x+S)/2,Ju),p[0]=Ju.r*.86,p[1]=Ju.g*.86,p[2]=Ju.b*.86,m[0]=Ju.r*.72,m[1]=Ju.g*.72,m[2]=Ju.b*.72):u([x,r,g,S,r,g,S,r,_,x,r,_],0,1,0,h,h);let E=[{n:n<zu-1?c[(e+1)*zu+n+1]:r,nx:1,nz:0,at:(e,t)=>[S,e,g,S,e,_,S,t,_,S,t,g]},{n:n>0?c[(e+1)*zu+n-1]:r,nx:-1,nz:0,at:(e,t)=>[x,e,_,x,e,g,x,t,g,x,t,_]},{n:c[e*zu+n],nx:0,nz:1,at:(e,t)=>[x,e,g,S,e,g,S,t,g,x,t,g]},{n:c[(e+2)*zu+n],nx:0,nz:-1,at:(e,t)=>[S,e,_,x,e,_,x,t,_,S,t,_]}];for(let e of E)if(!(e.n>=r))for(let t=r;t>e.n;t-=Nu){let i=Math.max(e.n,t-Nu),a=t;if(t===r){let n=Math.max(i,t-Iu);if(u(e.at(n,t),e.nx,0,e.nz,m,p),n<=i)continue;a=n}let o=Math.floor(t/Nu),s=(.76+.24*(o*.618%1))*(.92+Hu(b,n,o)*.16);d[0]=Xu({v:y.a.cliff.r},{v:y.b.cliff.r},y.t,`v`)*s,d[1]=Xu({v:y.a.cliff.g},{v:y.b.cliff.g},y.t,`v`)*s,d[2]=Xu({v:y.a.cliff.b},{v:y.b.cliff.b},y.t,`v`)*s,f[0]=d[0]*.8,f[1]=d[1]*.8,f[2]=d[2]*.8,u(e.at(i,a),e.nx,0,e.nz,f,d)}}}for(let e of[`position`,`normal`,`color`]){let t=i.attributes[e];t.clearUpdateRanges(),t.addUpdateRange(0,l*12),t.needsUpdate=!0}return i.setDrawRange(0,l*6),e.mesh.position.z=-n,e.index=t,e.mesh.visible=!0,l}update(e,t){if(e===this.first&&t===this.last)return!1;this.first=e,this.last=t;let n=[],r=new Set;for(let i of this.chunks)i.index===null||i.index<e||i.index>t?n.push(i):r.add(i.index);let i=0;for(let a=e;a<=t;a++){if(r.has(a))continue;let e=n[i++];if(!e)break;this.fill(e,a)}for(;i<n.length;i++)n[i].mesh.visible=!1,n[i].index=null;return!0}},Qu=class{constructor(e){this.camera=new No(55,e,.3,1500),this.mode=`hub`,this.pos=new H(9,20,38),this.look=new H(0,3,0),this.camera.position.copy(this.pos),this.yaw=.22,this.pitch=.42,this.dist=42,this.fov=55,this.baseFov=55,this.shakeAmt=0,this.time=0,this.ret=null,this.setAspect(e),this._dp=new H,this._dl=new H}setAspect(e){this.camera.aspect=e,this.baseFov=e<1?72:e<1.4?62:55,this.camera.updateProjectionMatrix()}setMode(e,t={}){this.mode=e,this.opts=t,e===`return`&&(this.ret={from:this.pos.clone(),fromLook:this.look.clone(),t:0,dur:t.dur||1.4})}glideTo(e,t,n){this.glide={yaw:e,pitch:t,dist:n}}rotate(e,t){this.glide=null,this.yaw-=e*.006,this.pitch=bu(this.pitch+t*.004,.1,1.25)}zoom(e){this.glide=null,this.dist=bu(this.dist*(1+e),16,72)}shake(e){this.shakeAmt=Math.max(this.shakeAmt,e)}forward(){return{x:-Math.sin(this.yaw),z:-Math.cos(this.yaw)}}hubPose(e,t,n){let r=this.dist;n.set(e.x,e.y+3,e.z),t.set(e.x+Math.sin(this.yaw)*Math.cos(this.pitch)*r,e.y+3+Math.sin(this.pitch)*r,e.z+Math.cos(this.yaw)*Math.cos(this.pitch)*r)}update(e,t){this.time+=e;let n=this._dp,r=this._dl,i=4.5,a=6,o=this.baseFov;switch(this.mode){case`hub`:this.glide&&(this.yaw=Su(this.yaw,this.glide.yaw,3.5,e),this.pitch=Su(this.pitch,this.glide.pitch,3.5,e),this.dist=Su(this.dist,this.glide.dist,3.5,e)),this.hubPose(t.playerPos,n,r),i=6,a=8;break;case`aim`:n.set(t.playerPos.x+5,t.playerPos.y+8.6,t.playerPos.z+13.5),r.set(t.playerPos.x-3,3.4,t.playerPos.z-30),i=5,o=this.baseFov+3;break;case`flight`:{let e=t.projectile.pos,s=t.projectile.speedN;n.set(e.x*.7+1.6,e.y+4.5+s*5,e.z+13+s*16),r.set(e.x,e.y+.4-s*1.5,e.z-22-s*34),this.pos.z=n.z,i=7,a=11,o=this.baseFov+4+s*24;break}case`landing`:{let e=t.projectile.pos;n.set(e.x+7.5,6.5,e.z+13),r.set(e.x,1.5,e.z),i=2.6,a=5;break}case`encounter`:{let e=this.opts.center,t=1-.45*(this.opts.push||0);n.set(e.x+9*t,1.8+4.2*t,e.z+13*t),r.set(e.x,1.8,e.z),i=3,o=this.baseFov-6*(this.opts.push||0);break}case`reveal`:{let e=this.opts.center,t=this.opts.height,a=8+t*1.5;n.set(e.x+a*.45,t*.85+2.2,e.z+a),r.set(e.x,t*.3,e.z),i=3.2,o=this.baseFov-4;break}case`training`:n.set(this.opts.x+9,7.5,this.opts.z+15),r.set(this.opts.x,6.2,this.opts.z),i=4;break;case`return`:{let a=this.ret;a.t=Math.min(1,a.t+e/a.dur);let s=xu(a.t);this.hubPose(t.playerPos,n,r);let c=Math.sin(s*Math.PI)*Math.min(55,a.from.distanceTo(n)*.08);this.pos.lerpVectors(a.from,n,s),this.pos.y+=c,this.look.lerpVectors(a.fromLook,r,s),o=this.baseFov+Math.sin(s*Math.PI)*18,i=0;break}}i>0&&(this.pos.x=Su(this.pos.x,n.x,i,e),this.pos.y=Su(this.pos.y,n.y,i,e),this.pos.z=Su(this.pos.z,n.z,i,e),this.look.x=Su(this.look.x,r.x,a,e),this.look.y=Su(this.look.y,r.y,a,e),this.look.z=Su(this.look.z,r.z,a,e));let s=t.groundAt(this.pos.x,this.pos.z)+1.4;if(this.pos.y<s&&(this.pos.y=s),this.fov=Su(this.fov,o,5,e),Math.abs(this.camera.fov-this.fov)>.01&&(this.camera.fov=this.fov,this.camera.updateProjectionMatrix()),this.camera.position.copy(this.pos),this.shakeAmt>.001){let t=this.shakeAmt;this.camera.position.x+=Math.sin(this.time*61)*t,this.camera.position.y+=Math.sin(this.time*47)*t,this.shakeAmt=Su(this.shakeAmt,0,7,e)}this.camera.lookAt(this.look)}get returning(){return this.mode===`return`&&this.ret&&this.ret.t>=1}focusU(){return this.mode===`hub`||this.mode===`aim`||this.mode,-this.look.z}},$u=new H;function ed(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;$u.copy(t),$u[r]=0,$u.normalize();let l=.5*o/(o+s),u=1-$u.angleTo(e)/c;return Math.sign($u[n])===1?u*l:s/(o+s)+l+l*(1-u)}var td=class e extends Aa{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new H,c=new H,l=new H(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new H,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=ed(m,c,`z`,`y`,i,n),f[a+1]=1-ed(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-ed(m,c,`z`,`y`,i,n),f[a+1]=1-ed(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-ed(m,c,`x`,`z`,i,e),f[a+1]=ed(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-ed(m,c,`x`,`z`,i,e),f[a+1]=1-ed(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-ed(m,c,`x`,`y`,i,e),f[a+1]=1-ed(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=ed(m,c,`x`,`y`,i,e),f[a+1]=1-ed(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},nd=typeof matchMedia==`function`&&matchMedia(`(pointer: coarse)`).matches,rd=e=>typeof e==`number`?e:Math.max(e[0],e[1],e[2]),id=e=>(typeof e==`number`?e:Math.max(e[0],e[2]))<.3,ad={sphere:new La(1,nd?8:10,nd?5:7),ball:new La(1,6,4),cone:new Ma(1,2,nd?7:9,1,!0),cone4:new Ma(1,2,5,1,!0),cyl:new ja(1,1,2,nd?7:10),cylLow:new ja(1,1,2,5,1,!0),box:new Aa(2,2,2),rbox:new td(2,2,2,1,.22),torus:new Ra(1,.35,7,14),ico:new Pa(1,0),ico1:new Pa(1,1),disc:new ja(1,1,.2,14),hex:new ja(1,1,2,6)};for(let e of Object.values(ad))e.index||e.setIndex(Array.from({length:e.attributes.position.count},(e,t)=>t));var od=new G,sd=new fn,cd=new Un,ld=new H,ud=new H,dd=new K,fd=new U,pd=new H,Z=class{constructor(){this.items=[]}add(e,t,n=[0,0,0],r=1,i=[0,0,0]){let a=typeof r==`number`?[r,r,r]:r;return ld.set(n[0],n[1],n[2]),ud.set(a[0],a[1],a[2]),sd.setFromEuler(cd.set(i[0],i[1],i[2])),this.items.push({geo:ad[e],color:t,matrix:new G().compose(ld,sd,ud)}),this}sphere(e,t,n,r){return this.add(rd(n)<.2?`ball`:`sphere`,e,t,n,r)}ball(e,t,n,r){return this.add(`ball`,e,t,n,r)}cone(e,t,n,r){return this.add(rd(n)<.2?`cone4`:`cone`,e,t,n,r)}cyl(e,t,n,r){return this.add(id(n)?`cylLow`:`cyl`,e,t,n,r)}box(e,t,n,r){return this.add(`box`,e,t,n,r)}rbox(e,t,n,r){return this.add(`rbox`,e,t,n,r)}torus(e,t,n,r){return this.add(`torus`,e,t,n,r)}ico(e,t,n,r){return this.add(`ico`,e,t,n,r)}disc(e,t,n,r){return this.add(`disc`,e,t,n,r)}merge(e,t=[0,0,0]){od.makeTranslation(t[0],t[1],t[2]);for(let t of e.items)this.items.push({geo:t.geo,color:t.color,matrix:od.clone().multiply(t.matrix)});return this}build(){let e=0,t=0;for(let n of this.items)e+=n.geo.attributes.position.count,t+=n.geo.index.count;let n=new Float32Array(e*3),r=new Float32Array(e*3),i=new Float32Array(e*3),a=e>65535?new Uint32Array(t):new Uint16Array(t),o=0,s=0;for(let e of this.items){let t=e.geo.attributes.position,c=e.geo.attributes.normal,l=e.geo.index;fd.getNormalMatrix(e.matrix),dd.set(e.color);for(let a=0;a<t.count;a++)pd.fromBufferAttribute(t,a).applyMatrix4(e.matrix),n[(o+a)*3]=pd.x,n[(o+a)*3+1]=pd.y,n[(o+a)*3+2]=pd.z,pd.fromBufferAttribute(c,a).applyMatrix3(fd).normalize(),r[(o+a)*3]=pd.x,r[(o+a)*3+1]=pd.y,r[(o+a)*3+2]=pd.z,i[(o+a)*3]=dd.r,i[(o+a)*3+1]=dd.g,i[(o+a)*3+2]=dd.b;for(let e=0;e<l.count;e++)a[s+e]=l.getX(e)+o;o+=t.count,s+=l.count}let c=new ui;return c.setAttribute(`position`,new Yr(n,3)),c.setAttribute(`normal`,new Yr(r,3)),c.setAttribute(`color`,new Yr(i,3)),c.setIndex(new Yr(a,1)),c.computeBoundingSphere(),c}},Q={vc:new Xa({vertexColors:!0,flatShading:!0}),vcGlow:new Xa({vertexColors:!0,flatShading:!0,emissive:5588002,emissiveIntensity:.8}),vcEmit:new Hi({vertexColors:!0})},md=null;function hd(){if(md)return md;let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,2,32,32,32);return n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.4,`rgba(255,255,255,.45)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),md=new Ea(e),md}function gd(e,t,{bg:n=`#fff8e6`,fg:r=`#4a3320`,border:i=`#c98d4b`,font:a=`bold 54px Lilita One, Trebuchet MS, sans-serif`}={}){let o=e.getContext(`2d`),s=e.width,c=e.height,l=c*.28,u=c*.07;o.clearRect(0,0,s,c),o.fillStyle=i,o.beginPath(),o.roundRect(0,0,s,c,l),o.fill(),o.fillStyle=n,o.beginPath(),o.roundRect(u,u,s-2*u,c-2*u,l*.75),o.fill(),o.fillStyle=r,o.font=a,o.textAlign=`center`,o.textBaseline=`middle`;let d=parseInt(a.match(/(\d+)px/)[1],10);for(;o.measureText(t).width>s*.88&&d>12;)d-=2,o.font=a.replace(/\d+px/,d+`px`);o.fillText(t,s/2,c/2+c*.03)}function _d(e,t=8,n={}){let r=document.createElement(`canvas`);r.width=n.res||512,r.height=Math.round(r.width*(n.aspect||.25)),gd(r,e,n);let i=new Ea(r);i.colorSpace=It,i.anisotropy=4;let a=new q(new Fa(t,t*(n.aspect||.25)),new Hi({map:i,transparent:!0})),o=new q(a.geometry,a.material);return o.rotation.y=Math.PI,a.add(o),a.userData.canvas=r,a.userData.tex=i,a}var vd=`#8a6038`;function yd(e,t,n,r=0,i=0){t.forEach(([t,a,o],s)=>e.box(t,[r+(s%2?.3:-.2)*a*.08,n*(s+.5),i+(s%3?-.2:.2)*o*.08],[a,n/2,o]))}var bd={roundTree:{cap:60,shadow:1,build(e){e.cyl(vd,[0,2,0],[.46,2,.46]),e.cyl(vd,[.7,3.4,0],[.2,.9,.2],[0,0,-.7]),e.sphere(`#3fae3f`,[0,4.9,0],[3,2.1,3]),e.sphere(`#58c94f`,[.2,6.1,.2],[2.4,1.8,2.4]),e.sphere(`#74dc5f`,[.5,7.2,.4],[1.5,1.1,1.5]),e.sphere(`#4ebd49`,[2,4.8,1],[1.5,1.2,1.5]),e.sphere(`#38a23a`,[-2,4.9,-.8],[1.6,1.3,1.6])}},pine:{cap:90,shadow:1,build(e){e.cyl(vd,[0,1.2,0],[.36,1.2,.36]),e.cone(`#237f47`,[0,3.2,0],[2.6,1.7,2.6]),e.cone(`#2f9654`,[0,4.8,0],[2.05,1.6,2.05]),e.cone(`#3fae62`,[0,6.3,0],[1.45,1.4,1.45]),e.cone(`#58c476`,[0,7.5,0],[.8,.9,.8])}},bush:{cap:70,build(e){e.sphere(`#4fb552`,[0,.7,0],[1.2,.9,1.2]),e.sphere(`#5fc75e`,[.8,.55,.3],[.8,.65,.8]),e.sphere(`#46a84c`,[-.75,.5,-.2],[.75,.6,.75])}},flower:{cap:180,build(e){e.cyl(`#4fb552`,[0,.3,0],[.05,.3,.05]);for(let t=0;t<5;t++){let n=t*1.2566;e.sphere(`#ffffff`,[Math.cos(n)*.17,.66,Math.sin(n)*.17],[.13,.05,.13])}e.sphere(`#ffd93f`,[0,.68,0],[.11,.06,.11])},tints:[`#ff9bc0`,`#ffffff`,`#ffd25f`,`#b79bff`,`#ff8f6a`]},grassTuft:{cap:150,build(e){for(let[t,n,r]of[[0,0,0],[.15,.08,.3],[-.16,.03,-.3],[.03,-.14,.15]])e.cone(`#6dcc56`,[t,.28,n],[.07,.3,.05],[0,0,r])}},cloud:{cap:40,float:[30,56],emissive:1,build(e){e.sphere(`#ffffff`,[0,0,0],[3.4,1.6,2.2]),e.sphere(`#ffffff`,[2.4,-.2,.3],[2.3,1.2,1.7]),e.sphere(`#f2f8ff`,[-2.3,-.2,-.2],[2.2,1.1,1.6]),e.sphere(`#ffffff`,[.5,1,0],[1.9,1.3,1.5])}},mushroom:{cap:70,build(e){e.cyl(`#f4ebd9`,[0,.45,0],[.2,.45,.2]),e.sphere(`#e8473f`,[0,.92,0],[.62,.42,.62]);for(let t of[[.28,1.15,.1],[-.2,1.18,.2],[0,1.27,-.2],[-.3,1.05,-.2]])e.ball(`#ffffff`,t,.09)}},acacia:{cap:40,shadow:1,build(e){e.cyl(`#7a5a35`,[0,2,0],[.3,2,.3],[0,0,.08]),e.cyl(`#7a5a35`,[.9,4,0],[.14,1.1,.14],[0,0,-.8]),e.cyl(`#7a5a35`,[-.9,4,0],[.14,1.1,.14],[0,0,.8]),e.sphere(`#8eaa42`,[0,5.1,0],[4,.8,3]),e.sphere(`#a3bb4a`,[.9,5.5,.3],[2.2,.5,1.8])}},dryGrass:{cap:130,build(e){for(let[t,n,r]of[[0,0,0],[.2,.1,.3],[-.2,.05,-.3],[.05,-.2,.15],[-.1,.2,-.1]])e.cone(`#d0ab58`,[t,.5,n],[.05,.5,.04],[0,0,r])}},rock:{cap:70,shadow:1,build(e){e.ico(`#9b9ba3`,[0,.6,0],[1.1,.85,.95],[.3,.4,0]),e.ico(`#b3b3ba`,[.75,.35,.35],[.55,.42,.5],[.7,0,.2])},tints:[`#ffffff`,`#e8dcc8`,`#c9d3dc`]},dune:{cap:30,build(e){yd(e,[[`#e0bd74`,8,5.5],[`#e6c67f`,6.2,4.3],[`#f0d591`,4.2,3]],1.4),yd(e,[[`#e6c67f`,3.6,3],[`#f0d591`,2.2,2]],1.3,5,2)}},cactus:{cap:50,shadow:1,build(e){e.sphere(`#4fa35a`,[0,1.8,0],[.46,1.8,.46]),e.sphere(`#4fa35a`,[.82,1.8,0],[.24,.75,.24]),e.cyl(`#4fa35a`,[.5,1.4,0],[.2,.34,.2],[0,0,1.3]),e.sphere(`#4fa35a`,[-.78,2.4,0],[.22,.65,.22]),e.cyl(`#4fa35a`,[-.46,1.95,0],[.18,.3,.18],[0,0,-1.3]),e.sphere(`#ff7fa8`,[0,3.6,0],[.2,.14,.2])}},palm:{cap:70,shadow:1,build(e){for(let t=0;t<5;t++)e.cyl(`#a07a4a`,[t*.08,.7+t*1.3,0],[.28-t*.02,.7,.28-t*.02],[0,0,-.06]);for(let t=0;t<6;t++){let n=t*1.047;e.sphere(`#43b85a`,[.4+Math.cos(n)*1.5,6.5,Math.sin(n)*1.5],[1.7,.16,.5],[0,-n,-.35])}e.ball(`#7a5a35`,[.45,6.1,.2],.25)}},vineTree:{cap:50,shadow:1,build(e){e.cyl(`#6e4a2c`,[0,3.5,0],[.6,3.5,.6]),e.sphere(`#2f9c50`,[0,8,0],[4.2,2.1,4.2]),e.sphere(`#3fb35e`,[1.8,7.2,1.2],[2.3,1.4,2.3]);for(let[t,n,r]of[[2.7,.5,1.7],[-2.4,1.5,2.2],[.7,-2.7,1.5],[-1,2.8,2]])e.cyl(`#3a8a45`,[t,6.2-r,n],[.07,r,.07])}},bigLeaf:{cap:100,build(e){for(let t=0;t<5;t++){let n=t*1.2566;e.sphere(`#3fb35e`,[Math.cos(n)*.75,.55,Math.sin(n)*.75],[.8,.08,.3],[0,-n,.45])}}},island:{cap:24,shadow:1,build(e){e.sphere(`#f2dfa0`,[0,.1,0],[6,1.1,5]),e.sphere(`#72c95a`,[0,.9,0],[3.6,.75,3]),e.cyl(`#a07a4a`,[.4,3.2,0],[.2,2.2,.2],[0,0,-.1]);for(let t=0;t<5;t++){let n=t*1.2566;e.sphere(`#43b85a`,[.6+Math.cos(n)*1.1,5.4,Math.sin(n)*1.1],[1.3,.13,.42],[0,-n,-.35])}}},coral:{cap:100,build(e){e.cyl(`#ff7f8f`,[0,.45,0],[.13,.45,.13]),e.cyl(`#ff7f8f`,[.26,.75,0],[.08,.34,.08],[0,0,-.65]),e.cyl(`#ff7f8f`,[-.25,.7,.05],[.08,.32,.08],[0,0,.7]);for(let t of[[0,.95,0],[.48,1,0],[-.46,.95,.05]])e.sphere(`#ffa3ad`,t,.14)},tints:[`#ffffff`,`#ffd25f`,`#b79bff`,`#7fe8ff`]},seaRock:{cap:30,build(e){e.ico(`#5f7f8f`,[0,.4,0],[1.3,1.1,1.1],[.3,.4,0]),e.sphere(`#c6f4f4`,[0,.1,0],[1.75,.08,1.65])}},peak:{cap:24,shadow:1,build(e){yd(e,[[`#6f7b8a`,9,8],[`#7c8896`,7.6,6.8],[`#8894a3`,6.2,5.6],[`#7c8896`,4.9,4.4],[`#8894a3`,3.7,3.3],[`#ffffff`,2.6,2.3],[`#ffffff`,1.5,1.3]],2.8),yd(e,[[`#7c8896`,4.6,4.2],[`#8894a3`,3.4,3],[`#ffffff`,2.2,2],[`#ffffff`,1.1,1]],2.4,6.5,3)}},snowPine:{cap:60,shadow:1,build(e){e.cyl(vd,[0,1,0],[.3,1,.3]),e.cone(`#2f7a5a`,[0,2.8,0],[2,1.5,2]),e.cone(`#f2fbff`,[0,3.3,0],[1.72,1.05,1.72]),e.cone(`#368a66`,[0,4.2,0],[1.5,1.3,1.5]),e.cone(`#f7fcff`,[0,4.75,0],[1.25,.85,1.25])}},iceSpike:{cap:80,shadow:1,build(e){e.cone(`#a5e0ff`,[0,1.8,0],[.62,1.8,.62],[0,0,.06]),e.cone(`#c6edff`,[.65,1,.2],[.38,1,.38],[0,0,-.22]),e.cone(`#8fd2f7`,[-.55,.85,-.1],[.32,.85,.32],[0,0,.25])}},glacier:{cap:24,build(e){yd(e,[[`#b8e4f8`,8,5.6],[`#d0f0ff`,6.6,4.5],[`#e4f8ff`,4.8,3.4],[`#f4fcff`,2.8,2]],1.7)}},volcano:{cap:12,build(e){yd(e,[[`#2e2428`,14,14],[`#3a2c30`,12,12],[`#2e2428`,10,10],[`#3a2c30`,8.2,8.2],[`#2e2428`,6.6,6.6],[`#3a2c30`,5.4,5.4]],3.4),e.box(`#ff8a2c`,[0,20.6,0],[4,.5,4]),e.box(`#ffcf4d`,[0,20.9,0],[2.6,.4,2.6]);for(let[t,n,r,i,a]of[[7,3,1,.5,7],[-5,-6,.7,1,9],[3,-7,.8,.6,8]])e.box(`#ff7a2c`,[t,a,n],[r,a,i])}},lavaRock:{cap:70,shadow:1,build(e){e.ico(`#2e2428`,[0,.8,0],[1.3,1.05,1.1],[.3,.4,0]),e.ico(`#ff7a2c`,[.2,1.3,.5],[.22,.3,.1]),e.ico(`#ff9a3f`,[-.5,.8,.6],[.15,.3,.1])}},lavaPool:{cap:40,emissive:1,build(e){e.sphere(`#ff8a2c`,[0,.03,0],[2.3,.06,1.8]),e.sphere(`#ffcf4d`,[.3,.07,.2],[1.2,.05,.9]),e.torus(`#2e2428`,[0,.05,0],[2.35,1.85,.12],[Math.PI/2,0,0])}},magicTree:{cap:60,shadow:1,build(e){e.cyl(`#6a4fa8`,[0,2.4,0],[.42,2.4,.42],[0,0,.06]),e.sphere(`#ff9be0`,[0,6,0],[2.7,2,2.7]),e.sphere(`#c88bff`,[1.5,5,.8],[1.6,1.2,1.6]),e.sphere(`#ffb8ea`,[-1.4,5.2,-.5],[1.7,1.3,1.7]);for(let t of[[1.8,3.5,1],[-1.5,3.7,.2],[.2,3.9,-1.7]])e.sphere(`#fff3a0`,t,.16)}},glowShroom:{cap:80,emissive:1,build(e){e.cyl(`#d8e8ff`,[0,.6,0],[.2,.6,.2]),e.sphere(`#7fe8ff`,[0,1.25,0],[.8,.5,.8]),e.sphere(`#c6f8ff`,[0,1.05,0],[.56,.15,.56])},tints:[`#ffffff`,`#ffb8ea`,`#c9b8ff`]},crystal:{cap:90,shadow:1,build(e){e.add(`hex`,`#7fe8ff`,[0,1.5,0],[.5,1.5,.5],[0,0,.1]),e.cone(`#b8f6ff`,[-.15,3.5,0],[.5,.55,.5],[0,0,.1]),e.add(`hex`,`#b48fff`,[.72,.85,.2],[.3,.85,.3],[0,0,-.28]),e.cone(`#d2b8ff`,[1.2,2.05,.2],[.3,.35,.3],[0,0,-.28]),e.add(`hex`,`#ff9be0`,[-.65,.6,-.15],[.24,.6,.24],[0,0,.3])},tints:[`#ffffff`,`#d8f8ff`,`#ffe0fa`]},gemCluster:{cap:60,build(e){for(let[t,n,r]of[[0,0,`#57d8e0`],[.42,.2,`#ff9be0`],[-.38,.22,`#ffe14d`],[.08,-.4,`#b48fff`]])e.ico(r,[t,.32,n],[.28,.4,.28],[.3,t,0])}},floatIsle:{cap:24,float:[6,26],build(e){e.sphere(`#88d65f`,[0,0,0],[5.2,.85,4.2]),e.cone(`#9a8a78`,[0,-3.4,0],[4.4,3.1,3.5],[Math.PI,0,0]),e.cyl(vd,[.8,1.8,0],[.24,1.2,.24]),e.sphere(`#f2b3e0`,[.8,3.7,0],[1.5,1.2,1.5]),e.ico(`#ffe14d`,[-2.2,1.1,.8],.4)}},rainbowArc:{cap:6,emissive:1,build(e){[`#ff5a5a`,`#ffb23f`,`#ffe14d`,`#62d66a`,`#4fa8ff`,`#b46cff`].forEach((t,n)=>{for(let r=0;r<=14;r++){let i=r/14*Math.PI;e.ball(t,[Math.cos(i)*(20-n*.8),Math.sin(i)*(20-n*.8),0],.55)}})}},starRock:{cap:70,shadow:1,build(e){e.ico(`#3a2a7a`,[0,.9,0],[1.3,1.2,1.1],[.3,.4,0]),e.ico(`#ffe14d`,[.5,1.4,.6],.17),e.ico(`#8ff0ff`,[-.6,1,.7],.13),e.ico(`#ff9bf0`,[.1,2,0],.12)}},planet:{cap:16,float:[20,55],emissive:1,build(e){e.sphere(`#ff9b6a`,[0,0,0],6),e.sphere(`#ffbf8a`,[0,1.4,0],[6.05,1.2,6.05]),e.sphere(`#e87f5a`,[0,-2,0],[5.85,1,5.85]),e.torus(`#e6d8ff`,[0,0,0],[9.5,9.5,.22],[1.3,.2,0])},tints:[`#ffffff`,`#8fd8ff`,`#c9a8ff`,`#a8ffc9`]},emberTree:{cap:4,shadow:1,build(e){e.cyl(`#2e2428`,[0,2.2,0],[.48,2.2,.48]);for(let[t,n,r]of[[.9,3.6,-.7],[-.8,4,.8],[.2,4.6,.1]])e.cyl(`#3a2c30`,[t*.6,n,0],[.16,1,.16],[0,0,r]);e.ico(`#ff7a2c`,[0,5.8,0],[2.4,1.6,2.4]),e.ico(`#ffcf4d`,[.8,6.4,.5],[1.2,.9,1.2]),e.ico(`#ff5a1f`,[-1,5.4,-.4],[1.3,1,1.3])}},starTree:{cap:4,shadow:1,emissive:1,build(e){e.cyl(`#3a2a7a`,[0,2.4,0],[.42,2.4,.42],[0,0,.05]),e.sphere(`#5f3fd8`,[0,5.6,0],[2.4,1.9,2.4]),e.sphere(`#8f7fff`,[1.2,6.2,.6],[1.3,1,1.3]);for(let t of[[1.6,5,1.2],[-1.4,6.3,.5],[.3,7.3,-.6],[-.9,4.6,-1.4]])e.ico(`#ffe14d`,t,.3)}},lollipopTree:{cap:4,shadow:1,build(e){e.cyl(`#fff4e8`,[0,2.6,0],[.26,2.6,.26]),e.cyl(`#ff7fb5`,[0,6.2,0],[2.1,.32,2.1],[Math.PI/2,0,0]),e.torus(`#ffffff`,[0,6.2,0],[1.3,1.3,.38]),e.torus(`#ffe14d`,[0,6.2,0],[.6,.6,.38])}},gearTree:{cap:4,shadow:1,build(e){e.cyl(`#7a5a30`,[0,2.4,0],[.42,2.4,.42]),e.torus(`#c9a23f`,[0,6,0],[2,2,.8],[0,.3,0]);for(let t=0;t<8;t++){let n=t*.785;e.box(`#b8904f`,[Math.cos(n)*2.6*.96,6+Math.sin(n)*2.6,Math.cos(n)*.7],[.32,.32,.28],[0,.3,n])}e.cyl(`#a9b4c0`,[0,6,0],[.6,.4,.6],[Math.PI/2,.3,0]),e.ico(`#ffd24d`,[1.4,4.4,.8],.3)}},stump:{cap:4,shadow:1,build(e){e.cyl(`#7a5433`,[0,.45,0],[.62,.45,.62]),e.cyl(`#e8c88f`,[0,.91,0],[.56,.02,.56]),e.torus(`#c9a46a`,[0,.92,0],[.32,.32,.1],[Math.PI/2,0,0]);for(let t of[0,2.1,4.2])e.cyl(`#7a5433`,[Math.cos(t)*.55,.12,Math.sin(t)*.55],[.16,.14,.16],[Math.sin(t)*.9,0,-Math.cos(t)*.9])}},pumpkin:{cap:12,build(e){for(let t=0;t<6;t++){let n=t*1.047;e.sphere(`#f08a2c`,[Math.cos(n)*.32,.52,Math.sin(n)*.32],[.42,.5,.42])}e.cyl(`#57a03f`,[0,1.08,0],[.09,.16,.09],[0,0,.25])}},snowman:{cap:12,build(e){e.sphere(`#ffffff`,[0,.7,0],.75),e.sphere(`#ffffff`,[0,1.72,0],.52),e.sphere(`#ffffff`,[0,2.45,0],.38),e.cone(`#ff8f2c`,[0,2.45,.52],[.07,.2,.07],[1.57,0,0]),e.cyl(`#2a2430`,[0,2.86,0],[.33,.19,.33])}}},xd=bd;function Sd(e){let t=new Z;return bd[e].build(t),t.build()}var Cd={pollen:{color:`#fff7b0`,size:1.1,vy:.3,wind:.4},leaves:{color:`#a6d96a`,size:1.5,vy:-.6,wind:.8},dust:{color:`#fff0cc`,size:.9,vy:.05,wind:1.2},bubbles:{color:`#e8fdff`,size:1.1,vy:.9,wind:.2},mist:{color:`#ffffff`,size:2.4,vy:.02,wind:.6},snow:{color:`#ffffff`,size:1.1,vy:-1.3,wind:.6},embers:{color:`#ffa04d`,size:1,vy:1.6,wind:.5},sparkle:{color:`#fff0ff`,size:1,vy:.35,wind:.2},stars:{color:`#ffffff`,size:1.2,vy:.1,wind:.1}},wd=class{constructor(e,t){if(this.scene=e,this.quality=t,this.viewAhead=t===`low`?220:320,this.fog=new hr(16777215,130,this.viewAhead),e.fog=this.fog,this.hemi=new xo(16777215,10467466,1.25),e.add(this.hemi),this.sun=new Io(16773328,2.5),this.sun.position.set(30,60,20),t!==`low`){this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048);let e=this.sun.shadow.camera;e.left=-70,e.right=70,e.top=70,e.bottom=-70,e.near=5,e.far=180,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.4}e.add(this.sun,this.sun.target),this.buildSky(),this.buildStars(),this.terrain=new Zu(e,13),this.buildProps(),this.buildLandmarks(),this.buildAmbient(),this.chunkProps=new Map,this.currentAmbient=null,this.focusU=0}buildSky(){this.skyMat=new qa({side:1,depthWrite:!1,fog:!1,uniforms:{top:{value:new K},bottom:{value:new K},sunDir:{value:new H(.45,.75,.35).normalize()}},vertexShader:`varying float vY; varying vec3 vD; void main(){ vD = normalize(position); vY = vD.y; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:`uniform vec3 top; uniform vec3 bottom; uniform vec3 sunDir; varying float vY; varying vec3 vD;
        void main(){ float t = smoothstep(-0.02, 0.5, vY); vec3 c = mix(bottom, top, pow(t, .8));
          float sd = max(dot(normalize(vD), sunDir), 0.0);
          c += vec3(1.0, .93, .78) * (pow(sd, 900.0) * 1.4 + pow(sd, 40.0) * .22 + pow(sd, 6.0) * .08);
          gl_FragColor = vec4(c,1.0);
        #include <colorspace_fragment>
        }`}),this.sky=new q(new La(700,20,12),this.skyMat),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.scene.add(this.sky)}buildStars(){let e=this.quality===`low`?350:800,t=new Float32Array(e*3),n=Cu(77);for(let r=0;r<e;r++){let e=n()*Math.PI*2,i=n()*.95+.02,a=Math.sqrt(1-i*i);t[r*3]=Math.cos(e)*a*650,t[r*3+1]=i*650,t[r*3+2]=Math.sin(e)*a*650}let r=new ui;r.setAttribute(`position`,new Yr(t,3)),this.stars=new Ca(r,new va({color:16777215,size:2.2,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),this.stars.frustumCulled=!1,this.stars.visible=!1,this.scene.add(this.stars)}buildProps(){this.instanced={};let e=new K(1,1,1);for(let t of Object.keys(xd)){let n=xd[t],r=n.emissive?Q.vcGlow:Q.vc,i=this.quality===`low`?Math.ceil(n.cap*.6):n.cap,a=new da(Sd(t),r,i);a.instanceMatrix.setUsage(Ht),a.setColorAt(0,e),a.count=0,a.frustumCulled=!1,a.visible=!1,a.castShadow=!!n.shadow,this.scene.add(a),this.instanced[t]={mesh:a,cap:i}}}propsForChunk(e){let t=this.chunkProps.get(e);if(t)return t;t=[];let n=e*40,r=Math.max(0,n);if(n+40>0&&n<x){let i=v[C(r+20)],a=Cu(e*977+13),o=this.quality===`low`?.6:1;for(let[e,r,s,c,l,u]of i.props){let i=Math.floor(r*o+a());for(let r=0;r<i;r++)this.pushProp(t,e,n+a()*40,a,s,c,l,u)}}else if(n+40<=0){let r=Cu(e*311+5);for(let e=0;e<6;e++)this.pushProp(t,`roundTree`,n+r()*40,r,118,160,1,2);for(let e=0;e<3;e++)this.pushProp(t,`cloud`,n+r()*40,r,40,130,1.3,2.4)}return this.chunkProps.set(e,t),t}pushProp(e,t,n,r,i,a,o,s){let c=xd[t];if(!c)return;let l=r()<.5?-1:1,u=l*(i+r()*(a-i));n<75&&Math.abs(u)<118?u=l*(118+r()*40):!c.float&&Math.abs(u)>42&&Math.abs(u)<70&&(u=l*(72+r()*18)),c.shadow&&!c.float&&n>=30&&Math.abs(u)<47&&(u=l*(47+r()*30));let d=o+r()*(s-o),f=Ku(n,u)-.08;c.float&&(f+=c.float[0]+r()*(c.float[1]-c.float[0]));let p=c.tints,m=new K(p?p[Math.floor(r()*p.length)]:`#ffffff`);if(!p){let e=.92+r()*.16;m.setRGB(e,e,e)}e.push({type:t,x:u,y:f,u:n,scale:d,rot:r()*Math.PI*2,color:m})}rebuildInstances(e,t){for(let e in this.instanced)this.instanced[e].mesh.count=0;let n=this._m||(this._m=new or);for(let r=e;r<=t;r++)for(let e of this.propsForChunk(r)){let t=this.instanced[e.type];t.mesh.count>=t.cap||(n.position.set(e.x,e.y,-e.u),n.rotation.y=e.rot,n.scale.setScalar(e.scale),n.updateMatrix(),t.mesh.setMatrixAt(t.mesh.count,n.matrix),t.mesh.setColorAt(t.mesh.count,e.color),t.mesh.count++)}for(let e in this.instanced){let t=this.instanced[e];t.mesh.visible=t.mesh.count>0,t.mesh.visible&&(t.mesh.instanceMatrix.needsUpdate=!0,t.mesh.instanceColor&&(t.mesh.instanceColor.needsUpdate=!0))}}buildLandmarks(){this.gates=[];let e=new Z;for(let t of[-1,1])e.rbox(`#fff4d6`,[t*40,8,0],[1.3,8,1.3]),e.rbox(`#d8ccb0`,[t*40,.6,0],[2,.6,2]),e.sphere(`#ffd25f`,[t*40,17,0],1.6),e.rbox(`#fff4d6`,[t*20,15.2,0],[20.5,.55,.7]);let t=e.build();for(let e=0;e<2;e++){let e=new sr;e.add(new q(t,Q.vc));let n=_d(` `,34,{aspect:.14,res:768,font:`bold 80px Lilita One, Trebuchet MS, sans-serif`});n.position.y=17.6;let r=new Xa({color:16777215,side:2});for(let t of[-30,-15,15,30]){let n=new q(new Fa(4.5,7),r);n.position.set(t,11.3,0),e.add(n)}let i=new q(new Fa(84,3.2),r);i.rotation.x=-Math.PI/2,i.position.y=.06,e.add(i),e.userData.flagMat=r,e.add(n),e.visible=!1,e.userData.sign=n,e.userData.index=-1,this.scene.add(e),this.gates.push(e)}this.markers=[];let n=new Z;n.cyl(`#a07a4a`,[0,1.6,0],[.14,1.6,.14]);let r=n.build(),i=new Fa(13,.4);i.rotateX(-Math.PI/2);let a=new Hi({color:16777215,transparent:!0,opacity:.75,fog:!0});for(let e=0;e<0;e++){let e=new sr;e.add(new q(r,Q.vc));let t=_d(` `,5.4,{aspect:.4,res:192,font:`bold 44px Lilita One, Trebuchet MS, sans-serif`,border:`#4a3320`});t.position.y=3.6,e.add(t);let n=new q(i,a);n.position.set(9,.04,0),e.add(n),e.position.x=-9,e.visible=!1,e.userData.sign=t,e.userData.u=null,this.scene.add(e),this.markers.push(e)}this.markerUs=[];for(let e of v)for(let t=1;t<4;t++)this.markerUs.push({u:e.renderStart+e.renderLen*t/4,m:e.from+(e.to-e.from)*t/4})}updateLandmarks(e){let t=[];for(let n=1;n<v.length;n++)Math.abs(v[n].renderStart-e)<this.viewAhead&&t.push(n);this.gates.forEach((e,n)=>{let r=t[n];if(r===void 0)e.visible=!1,e.userData.index=-1;else{if(e.userData.index!==r){e.userData.index=r;let t=v[r],n=e.userData.sign;gd(n.userData.canvas,`Zone ${r+1} · ${t.name}`,{bg:t.path,fg:`#2d2433`,border:`#2d2433`,font:`bold 80px Lilita One, Trebuchet MS, sans-serif`}),e.userData.flagMat.color.set(t.side),n.userData.tex.needsUpdate=!0,e.position.set(0,0,-t.renderStart)}e.visible=!0}});let n=this.markerUs.filter(t=>t.u>e-40&&t.u<e+this.viewAhead).slice(0,this.markers.length);this.markers.forEach((e,t)=>{let r=n[t];if(!r)e.visible=!1,e.userData.u=null;else{if(e.userData.u!==r.u){e.userData.u=r.u;let t=e.userData.sign;gd(t.userData.canvas,vu(r.m),{font:`bold 44px Lilita One, Trebuchet MS, sans-serif`,border:`#4a3320`}),t.userData.tex.needsUpdate=!0,e.position.z=-r.u}e.visible=!0}})}buildAmbient(){this.ambientN=this.quality===`low`?40:110;let e=new Float32Array(this.ambientN*3),t=new ui;t.setAttribute(`position`,new Yr(e,3)),this.ambientMat=new va({size:1,map:hd(),transparent:!0,opacity:.85,depthWrite:!1,sizeAttenuation:!0}),this.ambient=new Ca(t,this.ambientMat),this.ambient.frustumCulled=!1,this.scene.add(this.ambient),this.ambientSeeds=[];let n=Cu(9);for(let e=0;e<this.ambientN;e++)this.ambientSeeds.push({x:n()*90-45,y:n()*26,z:n()*110-55,ph:n()*6.28});this.ambientSet=Cd.pollen}updateAmbient(e,t,n){let r=this.ambientSet,i=this.ambient.geometry.attributes.position.array;for(let a=0;a<this.ambientN;a++){let o=this.ambientSeeds[a];o.y+=r.vy*e,o.y>26?o.y=0:o.y<0&&(o.y=26);let s=Math.sin(t*.8+o.ph)*2.2*r.wind,c=(o.z-n.position.z)%110;c<-55&&(c+=110),c>55&&(c-=110);let l=(o.x-n.position.x)%90;l<-45&&(l+=90),l>45&&(l-=90),i[a*3]=n.position.x+l+s,i[a*3+1]=o.y+Math.max(0,n.position.y-14),i[a*3+2]=n.position.z+c}this.ambient.geometry.attributes.position.needsUpdate=!0}update(e,t,n,r,i){this.focusU=n;let a=Math.floor((n-120)/40),o=Math.min(a+12,Math.ceil(x/40)+2);this.terrain.update(a,o)&&(this.rebuildInstances(a,o),this.updateLandmarks(n));let s=ju(n),c=s.t;this.skyMat.uniforms.top.value.copy(s.a.skyTop).lerp(s.b.skyTop,c),this.skyMat.uniforms.bottom.value.copy(s.a.skyBottom).lerp(s.b.skyBottom,c),this.fog.color.copy(s.a.fog).lerp(s.b.fog,c),this.sky.position.copy(r.position);let l=s.a.sun+(s.b.sun-s.a.sun)*c;this.sun.intensity=2.5*l,this.hemi.intensity=1.25*(.7+.3*l);let u=s.a.stars+(s.b.stars-s.a.stars)*c;this.stars.visible=u>.01,this.stars.visible&&(this.stars.material.opacity=u,this.stars.position.copy(r.position)),this.sun.position.set(i.x+30,i.y+62,i.z+22),this.sun.target.position.copy(i),this.sun.target.updateMatrixWorld();let d=v[C(n)];this.currentAmbient!==d.ambient&&(this.currentAmbient=d.ambient,this.ambientSet=Cd[d.ambient]||Cd.pollen,this.ambientMat.color.set(this.ambientSet.color),this.ambientMat.size=this.ambientSet.size),this.updateAmbient(e,t,r)}biomeAtU(e){return v[C(e)]}metresAtU(e){return w(e)}},Td=[{id:`harvest`,name:`Harvest Festival`,from:`10-01`,to:`11-30`,decor:`pumpkin`,banner:`Harvest Festival! Limited Harvest Axe in the shop.`},{id:`frost`,name:`Frost Fair`,from:`12-01`,to:`01-31`,decor:`snowman`,banner:`Frost Fair! Limited Frosty Pickaxe in the shop.`}];function Ed(e=new Date){let t=String(e.getMonth()+1).padStart(2,`0`)+`-`+String(e.getDate()).padStart(2,`0`);return Td.filter(e=>e.from<=e.to?t>=e.from&&t<=e.to:t>=e.from||t<=e.to)}var Dd=-12,Od=-8,kd=38,Ad=30,jd=1.75;function Md(t){return{minX:Dd-(Ad+(t-e.economy.startingSlots)*jd),maxX:Dd,minZ:Od,maxZ:kd}}function Nd(e,t=6){let n=Md(t),r=n.maxX-n.minX,i=n.maxZ-n.minZ,a=Math.max(2,Math.ceil(Math.sqrt(t*r/i))),o=Math.ceil(t/a),s=e%a,c=Math.floor(e/a);return{x:n.maxX-(s+.5)/a*r,z:n.minZ+(c+.5)/o*i}}function Pd(e,t){let n=new Z;n.rbox(`#b98a55`,[0,1.5,0],[4.4,1.5,1.7]),n.rbox(`#e6c48d`,[0,3.1,.1],[4.8,.18,2]);for(let e of[-1,1])for(let t of[-1.6,1.7])n.rbox(`#8a6038`,[e*4.2,4.4,t],[.3,4.4,.3]);for(let t=0;t<8;t++){let r=-5.4+10.8*(t+.5)/8;n.rbox(t%2?e:`#ffffff`,[r,8.6,.5],[.6950000000000001,.24,3.1],[.26,0,0])}return n.rbox(`#8a6038`,[0,9.8,-2.2],[5.6,.22,.25]),n}function Fd(){let e=document.createElement(`canvas`);e.width=e.height=256;let t=e.getContext(`2d`),n=t.createRadialGradient(128,128,40,128,128,128);return n.addColorStop(0,`rgba(255,255,255,.1)`),n.addColorStop(.72,`rgba(255,255,255,.22)`),n.addColorStop(.83,`rgba(255,255,255,1)`),n.addColorStop(.9,`rgba(255,255,255,.95)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,256,256),new Ea(e)}function Id(){let e=document.createElement(`canvas`);e.width=4,e.height=128;let t=e.getContext(`2d`),n=t.createLinearGradient(0,128,0,0);return n.addColorStop(0,`rgba(255,255,255,.75)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,4,128),new Ea(e)}var Ld=4.2,Rd=class{constructor(e){this.group=new sr,this.group.position.y=0,e.add(this.group),this.stations={},this.rings=[],this._ringTex=Fd(),this._wallTex=Id(),this.buildShop(),this.buildUpgrades(),this.buildTraining(),this.buildPens(),this.buildDecor()}addGlowRing(e,t,n){let r=new sr;r.position.set(e,.12,t);let i=new q(new Fa(Ld*2.2,Ld*2.2),new Hi({map:this._ringTex,color:n,transparent:!0,depthWrite:!1,blending:2,fog:!1}));i.rotation.x=-Math.PI/2;let a=new q(new ja(Ld,Ld,3.2,32,1,!0),new Hi({map:this._wallTex,color:n,transparent:!0,depthWrite:!1,side:2,blending:2,fog:!1}));return a.position.y=1.6,r.add(i,a),r.renderOrder=2,this.group.add(r),this.rings.push({g:r,flat:i,wall:a,phase:this.rings.length*1.7}),r}updateRings(e){this.beltTex&&(this.beltTex.offset.y=(this.beltTex.offset.y+.016*this.beltSpeed*6)%1),this.trainSign&&(this.trainSign.position.y=13.4+Math.sin(e*2)*.35,this.trainArrow.position.y=10.9+Math.abs(Math.sin(e*3.2))*.9,this.trainArrow.rotation.y=e*1.5);for(let t of this.rings){let n=.5+.5*Math.sin(e*2.6+t.phase);t.flat.scale.setScalar(.97+n*.05),t.flat.material.opacity=.78+n*.22,t.wall.material.opacity=.4+n*.35}}buildPlatform(){let e=new Z;e.add(`hex`,`#9aa0a8`,[0,.16,0],[6.6,.16,6.6]),e.add(`hex`,`#c9a06a`,[0,.34,0],[5.7,.06,5.7]);for(let t=-4;t<=4;t++)e.box(`#a97f4c`,[t*1.25,.41,0],[.035,.01,5-Math.abs(t)*.35]);e.add(`hex`,`#ff8f2c`,[0,.42,0],[2.3,.02,2.3]),e.add(`hex`,`#fff0cf`,[0,.44,0],[1.4,.02,1.4]);for(let t=0;t<3;t++){let n=-9.2-t*3.4;for(let r of[-1,1])e.box(t%2?`#ffffff`:`#ff8f2c`,[r*1.15,.05,n+.85],[1.45,.03,.34],[0,r*.72,0])}for(let t of[-1,1])e.rbox(`#8a6038`,[t*8.2,3.2,-6],[.24,3.2,.24]),e.box(t<0?`#ff5a4f`:`#ffc531`,[t*8.2-t*.85,5.6,-6],[.8,.55,.05]),e.sphere(`#fff0cf`,[t*8.2,6.6,-6],.32);let t=new q(e.build(),Q.vc);t.receiveShadow=!0,t.castShadow=!0,this.group.add(t),this.stations.throw={x:0,z:0,stand:[0,0],hit:t,radius:6,label:`THROW`,key:`throw`}}addStall(e,t,n,r,i,a,o,s){let c=new sr;c.position.set(n,0,r),c.rotation.y=o;let l=new q(Pd(e,t).build(),Q.vc);l.castShadow=!0,l.receiveShadow=!0,c.add(l);let u=_d(i,10.5,{aspect:.23,bg:t,fg:`#fff`,border:`#2d2433`,font:`bold 76px Lilita One, Trebuchet MS, sans-serif`});u.position.set(0,11.3,-1.2),c.add(u),this.group.add(c);let d=Math.sin(o),f=Math.cos(o),p=[n+d*7.6,r+f*7.6];return this.addGlowRing(p[0],p[1],s),this.stations[a]={x:n,z:r,stand:p,hit:l,group:c,radius:Ld,label:i,key:a,faceYaw:o+Math.PI},c}buildShop(){let e=this.addStall(`#ff5a4f`,`#e8392f`,37,-2,`PICKAXES`,`shop`,-Math.PI*.35,`#ff9b3f`),t=new Z;for(let[e,n]of[[`#9b9ba3`,-3],[`#c9803f`,-1],[`#ffc531`,1],[`#35d08a`,3]])t.cyl(`#8a6038`,[n,3.9,.6],[.09,.75,.09],[0,0,.5]),t.box(e,[n+.35,4.5,.6],[.12,.14,.7],[0,0,.5]);let n=new q(t.build(),Q.vc);n.castShadow=!0,e.add(n)}buildUpgrades(){let e=this.addStall(`#4f7cff`,`#3f5fe0`,29,22,`UPGRADES`,`upgrades`,-Math.PI/2,`#5fb4ff`),t=new Z;t.torus(`#ffd23f`,[-2.6,4.1,.4],[.62,.62,.5],[0,.4,0]),t.rbox(`#a9b4c0`,[.3,3.7,.4],[1.2,.42,.42]),t.ico(`#ff5a4f`,[3,4.1,.4],.66);let n=new q(t.build(),Q.vc);n.castShadow=!0,e.add(n)}buildTraining(){let e=new sr;e.position.set(16,0,-9),this.group.add(e),this.trainGroup=e;let t=new Z;t.add(`hex`,`#3f8fb0`,[0,.08,0],[5.4,.08,5.4]),t.add(`hex`,`#5fb8d6`,[0,.17,0],[4.6,.02,4.6]);let n=new q(t.build(),Q.vc);n.receiveShadow=!0,e.add(n);let r=new Z;r.rbox(`#3a3a44`,[0,.5,0],[2.5,.4,4.3]);for(let e of[-3.9,3.9])r.cyl(`#5a5a66`,[0,.6,e],[.45,2.3,.45],[0,0,Math.PI/2]);for(let e of[-1,1])r.rbox(`#4a4a56`,[e*2.35,.95,0],[.3,.12,4.2]);let i=new q(r.build(),Q.vc);i.castShadow=!0,i.receiveShadow=!0,e.add(i);let a=document.createElement(`canvas`);a.width=16,a.height=64;let o=a.getContext(`2d`);o.fillStyle=`#26262e`,o.fillRect(0,0,16,64),o.fillStyle=`#3a3a46`;for(let e=0;e<64;e+=16)o.fillRect(0,e,16,5);this.beltTex=new Ea(a),this.beltTex.wrapS=this.beltTex.wrapT=ve,this.beltTex.repeat.set(1,4);let s=new q(new Fa(4,8),new Xa({map:this.beltTex}));s.rotation.x=-Math.PI/2,s.position.y=.92,s.receiveShadow=!0,e.add(s),this.beltSpeed=.25,this.barMaterial=new Ya({color:12159573,shininess:40,flatShading:!0});let c=new Z;for(let e of[-1,1])c.rbox(`#ffffff`,[e*2.2,3.2,-3.5],[.28,2.4,.28],[-.18,0,0]),c.cyl(`#ffffff`,[e*2.2,5,-1.6],[.13,2,.13],[Math.PI/2,0,0]);c.rbox(`#ffffff`,[0,5.6,-3.9],[2.5,.65,.6],[-.35,0,0]);let l=new q(c.build(),this.barMaterial);l.castShadow=!0,e.add(l);let u=new Z;u.box(`#5ff0d8`,[0,5.8,-3.55],[1.5,.4,.05],[-.35,0,0]);for(let e of[-.9,-.3,.3,.9])u.box(`#ffe14d`,[e,5.25,-3.42],[.16,.1,.05],[-.35,0,0]);e.add(new q(u.build(),Q.vcGlow));let d=new Z;for(let e of[-1,1])d.ico(`#ffffff`,[e*2.2,6.4,-3.9],.44);this.gems=new q(d.build(),this.barMaterial),e.add(this.gems),this.barGlow=new Fi(new xi({map:hd(),transparent:!0,opacity:.5,depthWrite:!1,blending:2})),this.barGlow.position.set(0,5.6,-3.9),this.barGlow.scale.set(9,4,1),e.add(this.barGlow);let f=_d(`TRAIN`,6.2,{aspect:.3,bg:`#35a0c8`,fg:`#fff`,border:`#2d2433`,font:`bold 80px Lilita One, Trebuchet MS, sans-serif`});f.position.set(0,9.4,-3.9),e.add(f),this.addGlowRing(16,-9,`#5ff0d8`),this.trainSign=_d(` `,11,{aspect:.26,res:640,font:`bold 92px Lilita One, Trebuchet MS, sans-serif`}),this.trainSign.position.set(0,13.4,0),e.add(this.trainSign);let p=new Z;p.cone(`#ffe14d`,[0,0,0],[1.1,1.3,.5],[Math.PI,0,0]),p.box(`#ffe14d`,[0,1.6,0],[.42,.8,.22]),this.trainArrow=new q(p.build(),Q.vcGlow),this.trainArrow.position.set(0,10.9,0),e.add(this.trainArrow),this.stations.train={x:16,z:-9,stand:[16,-9],hit:n,radius:Ld,label:`TRAIN`,key:`train`,faceYaw:Math.PI},this.setBar(0)}setTrainSign(e,t){let n=e+t;this.trainSignKey!==n&&(this.trainSignKey=n,gd(this.trainSign.userData.canvas,e,{bg:t?`#4fc25f`:`#f08a2c`,fg:`#fff`,border:`#2d2433`,font:`bold 92px Lilita One, Trebuchet MS, sans-serif`}),this.trainSign.userData.tex.needsUpdate=!0)}setBar(e){let t=T[e]||T[0];this.barMaterial.color.set(t.color),this.barMaterial.shininess=20+t.metal*120,this.barMaterial.specular.setScalar(t.metal),this.gems.visible=!!t.gem,this.barGlow.visible=!!t.glow,this.barGlow.material.color.set(t.color),this.barMaterial.emissive.set(t.glow?t.color:`#000000`),this.barMaterial.emissiveIntensity=t.glow?.35:0}buildPens(){let e=new Aa(1,1,1);this.plotBorder=new q(e,new Xa({color:14262363}));let t=document.createElement(`canvas`);t.width=64,t.height=4;let n=t.getContext(`2d`);n.fillStyle=`#9dec62`,n.fillRect(0,0,64,4),n.fillStyle=`#88e04f`,n.fillRect(0,0,32,4),this.lawnTex=new Ea(t),this.lawnTex.colorSpace=It,this.lawnTex.wrapS=ve,this.plotLawn=new q(e,new Xa({map:this.lawnTex,emissive:16777215,emissiveIntensity:0})),this.plotBorder.receiveShadow=this.plotLawn.receiveShadow=!0,this.group.add(this.plotBorder,this.plotLawn);let r=new Z;r.box(`#a8703a`,[0,1.5,0],[.5,1.5,.5]),r.box(`#c98d4b`,[0,3.05,0],[.62,.14,.62]),this.posts=new da(r.build(),Q.vc,90),this.posts.castShadow=!0,this.posts.frustumCulled=!1;let i=new Z;i.box(`#d9a05b`,[0,0,0],[.5,.22,.14]),this.rails=new da(i.build(),Q.vc,180),this.rails.castShadow=!0,this.rails.frustumCulled=!1,this.group.add(this.posts,this.rails);let a=new Z;for(let e of[-4,4])a.box(`#a8703a`,[0,3,e],[.45,3,.45]);this.gatePosts=new q(a.build(),Q.vc),this.gatePosts.castShadow=!0,this.group.add(this.gatePosts),this.plotSign=_d(`MY PETS`,11,{aspect:.24,bg:`#7ccd52`,fg:`#fff`,border:`#2d2433`,font:`bold 78px Lilita One, Trebuchet MS, sans-serif`}),this.plotSign.rotation.y=Math.PI/2,this.group.add(this.plotSign),this.stations.pets={x:-22,z:17,stand:[-6,17],hit:this.plotLawn,radius:7,label:`MY PETS`,key:`pets`,faceYaw:-Math.PI/2}}setCapacity(e){let t=Md(e),n=t.maxX-t.minX,r=t.maxZ-t.minZ,i=(t.minX+t.maxX)/2,a=(t.minZ+t.maxZ)/2;this.plotBorder.scale.set(n+3,.2,r+3),this.plotBorder.position.set(i,.08,a),this.plotLawn.scale.set(n,.2,r),this.plotLawn.position.set(i,.14,a),this.lawnTex.repeat.set(n/12,1);let o=(t.minZ+t.maxZ)/2;this.gatePosts.position.set(t.maxX,0,o),this.plotSign.position.set(t.maxX+.4,6.6,o),this.stations.pets.x=i,this.stations.pets.z=a,this.stations.pets.stand=[t.maxX+6,o];let s=new or,c=0,l=0,u=(e,t)=>{c>=90||(s.position.set(e,0,t),s.rotation.set(0,0,0),s.scale.set(1,1,1),s.updateMatrix(),this.posts.setMatrixAt(c++,s.matrix))},d=(e,t,n,r)=>{let i=Math.hypot(n-e,r-t);for(let a of[1.2,2.3]){if(l>=180)return;s.position.set((e+n)/2,a,(t+r)/2),s.rotation.set(0,Math.atan2(t-r,n-e),0),s.scale.set(i,1,1),s.updateMatrix(),this.rails.setMatrixAt(l++,s.matrix)}},f=(e,t,n,r)=>{let i=Math.hypot(n-e,r-t),a=Math.max(1,Math.round(i/7));for(let i=0;i<a;i++){let o=i/a,s=(i+1)/a;u(e+(n-e)*o,t+(r-t)*o),d(e+(n-e)*o,t+(r-t)*o,e+(n-e)*s,t+(r-t)*s)}u(n,r)};f(t.minX,t.minZ,t.maxX,t.minZ),f(t.minX,t.maxZ,t.maxX,t.maxZ),f(t.minX,t.minZ,t.minX,t.maxZ),f(t.maxX,t.minZ,t.maxX,o-4),f(t.maxX,o+4,t.maxX,t.maxZ),this.posts.count=c,this.rails.count=l,this.posts.instanceMatrix.needsUpdate=!0,this.rails.instanceMatrix.needsUpdate=!0}setPlotActive(e){this.plotActive=e,e||(this.plotLawn.material.emissiveIntensity=0)}updatePlotGlow(e){this.plotActive&&(this.plotLawn.material.emissiveIntensity=.08+.08*Math.sin(e*5))}buildDecor(){let e=Ed()[0];if(e&&e.decor){let t=Sd(e.decor);for(let[e,n]of[[8.5,6],[-8,-11],[47,8],[42,32],[-4,54],[36,54]]){let r=new q(t,Q.vc);r.position.set(e,0,n),r.scale.setScalar(1.4),r.rotation.y=e,r.castShadow=!0,this.group.add(r)}}let t=new Z,n=[`#ffffff`,`#ffd25f`,`#ff9bc0`,`#b79bff`],r=12345,i=()=>(r=r*16807%2147483647)/2147483647;for(let e=0;e<150;e++){let r=-104+i()*160,a=-16+i()*84;if(!(r<-6&&a>-11&&a<41)&&!(Math.abs(r)<9&&a<12)&&!(r>-4&&r<33&&a>29&&a<49)&&!((r-16)**2+(a+9)**2<49)){if(i()<.7)for(let[e,n,i]of[[0,0,0],[.2,.1,.35],[-.2,.05,-.35]])t.add(`cone4`,`#3fb52f`,[r+e,.4,a+n],[.1,.4,.08],[0,0,i]);else t.add(`cylLow`,`#3fb52f`,[r,.35,a],[.05,.35,.05]),t.add(`ball`,n[e%n.length],[r,.78,a],[.28,.1,.28]),t.add(`ball`,`#ffb21f`,[r,.83,a],[.11,.07,.11])}}this.group.add(new q(t.build(),Q.vc));let a=new Z;for(let e=-112,t=0;e<112;e+=5,t++)Math.abs(e+2.5)<11||a.rbox(t%2?`#b8b4a8`:`#a39f94`,[e+2.5,1.1,-23.3],[2.45,1.1+t%3*.1,.8]);for(let e of[-1,1])a.rbox(`#8a8678`,[e*11,4.5,-23.3],[1,4.5,1]),a.ico(`#ffd25f`,[e*11,9.6,-23.3],.9);a.rbox(`#8a6038`,[0,8.4,-23.3],[11.4,.35,.45]);let o=_d(`TO THE WILDS`,15,{aspect:.2,bg:`#7ccd52`,fg:`#fff`,border:`#2d2433`,font:`bold 74px Lilita One, Trebuchet MS, sans-serif`});o.position.set(0,10.2,-23.3),this.group.add(o);let s=_d(`SAFE ZONE`,7,{aspect:.22,bg:`#35a0c8`,fg:`#fff`,border:`#2d2433`,font:`bold 70px Lilita One, Trebuchet MS, sans-serif`});s.position.set(-16,3.6,-22.3),this.group.add(s);let c=new q(a.build(),Q.vc);c.castShadow=!0,this.group.add(c);let l=new Z,u=(e,t,n,r)=>{let i=Math.round(Math.hypot(n-e,r-t)/2.6);for(let a=1;a<i;a++){let o=a/i,s=a%2?.5:-.5;l.ico(`#d8d2c2`,[e+(n-e)*o+s*.4,.06,t+(r-t)*o-s*.4],[.95,.1,.75],[0,a,0])}};u(0,7,-5,15),u(7,2,27,2),u(6,7,20,20),u(0,-2,0,-20),this.group.add(new q(l.build(),Q.vc));let d=(e,t)=>{let n=new da(Sd(e),Q.vc,t.length),r=new or;t.forEach(([e,t,i,a],o)=>{r.position.set(e,0,t),r.scale.setScalar(i),r.rotation.y=a||o*1.7,r.updateMatrix(),n.setMatrixAt(o,r.matrix)}),n.castShadow=!0,n.frustumCulled=!1,this.group.add(n)};d(`roundTree`,[[56,-8,1.5],[62,12,1.8],[58,36,1.6],[46,52,1.9],[24,60,1.7],[-6,62,1.8],[-34,58,1.6],[-70,60,1.9],[54,24,1.2],[-96,46,1.6]]),d(`pine`,[[64,0,1.6],[60,48,1.5],[36,62,1.7],[10,64,1.5],[-20,66,1.8],[-52,62,1.6],[-98,20,1.6]]),d(`rock`,[[52,2,1.5],[50,40,1.2],[18,54,1.4],[-14,52,1.1],[34,-12,1.2]]);let f=new Z;for(let[e,t]of[[46,-10],[50,18],[44,46],[8,56],[-24,52],[24,-16]])f.sphere(`#5fc75e`,[e,.9,t],[1.6,1.2,1.6]),f.sphere(`#4fb552`,[e+1.1,.7,t+.4],[1,.85,1]);let p=new q(f.build(),Q.vc);p.castShadow=!0,this.group.add(p)}clickTargets(){return[`shop`,`upgrades`,`train`].map(e=>this.stations[e])}},zd=`#2a2430`;function Bd(e,t,n,r,i=.085,a=zd){for(let o of[-1,1])e.sphere(`#ffffff`,[o*t,n,r],[i*1.25,i*1.25,i*.8]),e.sphere(a,[o*t,n,r+i*.55],[i*.85,i*.85,i*.6]),e.ball(`#ffffff`,[o*t+i*.25,n+i*.35,r+i*1],i*.28)}function Vd(e,t,n,r,i,a){let o=a?.75:1;for(let a of[-1,1])t===`point`&&(e.cone(n,[a*.17,i+.12,-.02],[.1,.15,.07],[0,0,-a*.18]),e.cone(r,[a*.17,i+.1,.025],[.055,.09,.03],[0,0,-a*.18])),t===`round`&&(e.sphere(n,[a*.22,i+.03,-.02],[.1,.1,.05]),e.sphere(r,[a*.22,i+.03,.015],[.06,.06,.03])),t===`long`&&(e.sphere(n,[a*.11,i+.24,-.02],[.065,.24,.05],[0,0,-a*.1]),e.sphere(r,[a*.11,i+.24,.015],[.035,.18,.025],[0,0,-a*.1])),t===`fan`&&(e.sphere(n,[a*.34*o,i-.03,-.05],[.26*o,.28*o,.05],[0,a*.3,0]),e.sphere(r,[a*.34*o,i-.03,-.01],[.17*o,.2*o,.03],[0,a*.3,0]))}function Hd(e,t,n,r){t===`single`&&e.cone(`#ffe28a`,[0,n+.24,r+.12],[.055,.25,.055],[.3,0,0]);for(let r of[-1,1])t===`nub`&&(e.cyl(`#c98d4b`,[r*.1,n+.1,0],[.028,.08,.028]),e.ball(`#7a4a25`,[r*.1,n+.19,0],.045)),t===`curved`&&e.cone(`#efe6d2`,[r*.13,n+.13,-.08],[.05,.18,.05],[-.6,0,-r*.25]),t===`ram`&&e.torus(`#d9cdb4`,[r*.25,n-.02,-.04],[.13,.13,.15],[0,Math.PI/2,0]),t===`antler`&&(e.cyl(`#b08a5e`,[r*.13,n+.16,-.03],[.024,.17,.024],[0,0,-r*.35]),e.cyl(`#b08a5e`,[r*.24,n+.3,-.03],[.02,.1,.02],[0,0,-r*.9]),e.cyl(`#b08a5e`,[r*.16,n+.34,-.03],[.02,.08,.02],[0,0,r*.3]))}function Ud(){return{body:new Z,head:new Z,headPivot:[0,1,.5],legs:[],wings:[],gait:`walk`}}function Wd(e,t,n){let r=new Z;n(r),e.legs.push({parts:r,pivot:t})}function Gd(e,t,n,r){let i=new Z;r(i),e.wings.push({parts:i,pivot:t,side:n})}function Kd(e,t,n,r,i,a,o=1){for(let t of[-1,1])Gd(e,[t*a,r,i],t,e=>{e.sphere(n,[t*.42*o,.08,0],[.46*o,.06,.3*o],[0,0,t*.18]),e.sphere(n,[t*.84*o,.2,-.08],[.3*o,.05,.2*o],[0,0,t*.3])})}function qd(e){let t=Ud(),n=e.bulk||1,r=e.len||1,i=e.legH||.5,a=i+.3*n,o=t.body;o.sphere(e.c,[0,a,0],[.36*n,.34*n,.62*r*Math.sqrt(n)]),o.sphere(e.c2,[0,a-.13*n,.03],[.28*n,.24*n,.48*r*Math.sqrt(n)]);let s=.5*r*Math.sqrt(n),c=e.neck||0,l=a+.2*n+c,u=s+.08+c*.28;if(c){let t=Math.max(3,Math.round(c*5));for(let n=0;n<=t;n++){let r=n/t;o.sphere(e.c,[0,a+.12+r*(l-a-.15),s*.85+r*(u-s*.85)],[.16-r*.04,.18,.16-r*.04])}}t.headPivot=[0,l,u];let d=t.head,f=1+(n-1)*.35;if(d.sphere(e.c,[0,.05,0],.28*f),e.beak?(d.cone(e.beak,[0,0,.32*f],[.1,.16,.08],[Math.PI/2+.3,0,0]),d.sphere(e.c2,[0,.08,.06],.25*f)):e.snout&&(d.sphere(e.c2,[0,-.04,.2*f+e.snout*.35],[.15*f,.12*f,.1+e.snout*.55]),d.sphere(zd,[0,.03,.27*f+e.snout*.85],[.055,.04,.04])),Bd(d,.13*f,.1,.22*f,.07,e.eyeC||zd),e.stripeHead&&(d.sphere(`#2d2d36`,[.1,.1,.1],[.05,.23,.22]),d.sphere(`#2d2d36`,[-.1,.1,.1],[.05,.23,.22])),Vd(d,e.ear||`round`,e.c,e.c2,.26*f,e.earSmall),e.horn&&Hd(d,e.horn,.24*f,0),e.mane){if(e.tail===`tuft`&&e.neck)for(let t=0;t<6;t++)o.sphere(e.mane,[0,a+.22+t/6*c,s*.55+t/6*(u-s*.75)],[.07,.13,.1]);else d.sphere(e.mane,[0,.03,-.08],[.42*f,.42*f,.28*f]);e.tail===`tuft`&&e.neck&&d.sphere(e.mane,[0,.28,-.03],[.07,.1,.13])}if(e.trunk)for(let t=0;t<6;t++)d.sphere(e.c,[0,-.06-t*.1,.26+(t<4?t*.025:.08+(t-4)*.05)],.085-t*.007);if(e.tusks)for(let e of[-1,1])d.cone(`#fff8e6`,[e*.13,-.2,.25],[.03,.13,.03],[-2.6,0,0]);if(e.stripes)for(let t=0;t<5;t++){let i=-.4*r+t*.2*r;o.sphere(e.stripes,[0,a+.02,i],[.365*n,.3*n,.03])}if(e.spots)for(let t of[[.25,.15,.25],[-.25,.17,.08],[.28,.05,-.2],[-.22,.1,-.33],[.1,.3,-.1],[-.1,.3,.28],[.22,.22,-.04]])o.ball(e.spots,[t[0]*n,a+t[1]*n*.9,t[2]*r],[.07,.06,.07]);if(e.spikes)for(let t=0;t<12;t++){let i=-1.2+t%4*.8,s=-.45+Math.floor(t/4)*.32;o.cone(e.spots||`#5c4632`,[Math.sin(i)*.3*n,a+Math.cos(i)*.32*n,s*r],[.05,.13,.05],[0,0,-i])}if(e.hump)for(let t=0;t<e.hump;t++)o.sphere(e.c,[0,a+.34*n,(t-(e.hump-1)/2)*.38],[.2,.25,.19]);let p=-.58*r*Math.sqrt(n),m=e.tailBig||1;if(e.tail===`bushy`&&(o.sphere(e.c,[0,a+.18,p-.25],[.16*m,.17*m,.35*m],[.7,0,0]),o.sphere(e.tailTip||e.c2,[0,a+.4*m,p-.44*m],[.1*m,.11*m,.15*m])),e.tail===`puff`&&o.sphere(e.c2,[0,a+.08,p],.13),e.tail===`short`&&o.sphere(e.c,[0,a+.07,p],[.08,.09,.11]),e.tail===`tuft`&&(o.cyl(e.c,[0,a-.08,p-.05],[.03,.22,.03],[.25,0,0]),o.sphere(e.mane||zd,[0,a-.3,p-.1],[.08,.13,.08])),e.tail===`long`)for(let t=0;t<6;t++)o.sphere(e.c,[0,a+t*.05*m,p-t*.11*m],.065*m);e.wings&&Kd(t,e,e.wings,a+.22*n,.05,.26*n,1.1);let h=.22*n,g=.36*r*Math.sqrt(n);for(let[r,a]of[[-1,1],[1,1],[-1,-1],[1,-1]])Wd(t,[r*h,i+.03,a*g],t=>{t.sphere(e.c,[0,-i*.5,0],[.095*Math.sqrt(n),i*.54,.1*Math.sqrt(n)]),t.sphere(e.c2===`#2b2b30`?e.c:e.c2,[0,-i+.03,.03],[.1*Math.sqrt(n),.05,.13*Math.sqrt(n)])});return t.gait=e.hop?`hop`:`walk`,t}function Jd(e){return qd({...e,beak:e.beak,ear:`point`,tail:`tuft`,legH:.55,neck:.25,bulk:1.15,wings:e.wing})}function Yd(e){let t=Ud(),n=t.body;if(n.sphere(e.c,[0,.62,0],[.34,.42,.36]),n.sphere(e.c2,[0,.55,.13],[.24,.32,.25]),e.flecks)for(let t of[[.2,.7,.2],[-.2,.62,.22],[.05,.5,.3],[-.1,.8,.22]])n.ball(e.flecks,t,.035);t.headPivot=[0,1.05,.05];let r=t.head,i=e.headC||e.c;if(r.sphere(i,[0,.05,0],.29),e.roundFace&&(r.sphere(e.c2,[.1,.05,.18],[.13,.15,.08]),r.sphere(e.c2,[-.1,.05,.18],[.13,.15,.08])),Bd(r,.11,.09,.22,e.roundFace?.085:.07),e.bigBeak?(r.sphere(e.beak,[0,-.02,.42],[.11,.12,.28]),r.sphere(zd,[0,-.04,.68],[.05,.06,.05])):r.cone(e.beak||`#f3b43a`,[0,0,.32],[.075,.13,.06],[Math.PI/2+.15,0,0]),e.tuft)for(let t of[-1,1])r.cone(e.c,[t*.16,.32,-.02],[.06,.11,.05],[0,0,-t*.3]);if(e.bat)for(let t of[-1,1])r.cone(e.c2,[t*.17,.34,0],[.08,.17,.05],[0,0,-t*.2]);let a=e.longTail?2:1;n.sphere(e.wing||e.c,[0,.42,-.36-a*.12],[.1,.05,.22*a],[-.35,0,0]),e.longTail&&n.sphere(e.c2,[0,.3,-.72],[.07,.04,.22],[-.4,0,0]);let o=e.wingBig?1.35:1;Kd(t,e,e.wing||e.c,.78,0,.28,o*.8);for(let e of[-1,1])Wd(t,[e*.13,.26,.02],e=>{e.cyl(`#e0a23c`,[0,-.13,0],[.03,.13,.03]),e.sphere(`#e0a23c`,[0,-.25,.05],[.075,.025,.1])});return t.gait=`fly`,t}function Xd(e){let t=Ud(),n=t.body;if(n.sphere(e.c,[0,.33,0],[.44,.28,.5]),n.sphere(e.c2,[0,.25,.1],[.34,.2,.38]),e.warts)for(let t of[[.25,.5,-.1],[-.2,.53,-.2],[.05,.58,.05],[-.3,.4,.12],[.33,.4,.12]])n.ball(e.warts,t,.05);t.headPivot=[0,.5,.3];let r=t.head;r.sphere(e.c,[0,0,0],[.34,.19,.28]);for(let t of[-1,1])r.sphere(e.c,[t*.19,.17,.03],.13),r.sphere(`#fff`,[t*.19,.19,.1],.09),r.sphere(zd,[t*.19,.2,.16],.055);r.torus(`#a04b58`,[0,-.06,.19],[.19,.13,.02]);for(let[n,r,i]of[[-1,.3,0],[1,.3,0],[-1,-.28,1],[1,-.28,1]])Wd(t,[n*.34,.23,r],t=>{i?t.sphere(e.c,[n*.07,0,0],[.17,.17,.26]):t.sphere(e.c,[n*.02,-.09,0],[.08,.16,.08]),t.sphere(e.c2,[n*.05,-.21,.08],[.14,.03,.17])});return t.gait=`hop`,t}function Zd(e){let t=Ud(),n=t.body;n.sphere(e.c,[0,.32,0],[.46,.19,e.claws?.36:.46]),n.sphere(e.c2,[0,.4,.02],[.3,.1,.3]),t.headPivot=[0,.36,e.claws?.28:.42];let r=t.head;r.sphere(e.c,[0,0,0],[.2,.12,.13]);for(let t of[-1,1])r.cyl(e.c,[t*.1,.13,.03],[.02,.1,.02]),r.sphere(`#fff`,[t*.1,.24,.03],.05),r.sphere(zd,[t*.1,.24,.07],.03);for(let t of[-1,1])n.sphere(e.c,[t*.45,.33,.36],[.09,.07,.22],[0,t*.6,0]),n.sphere(e.c,[t*.55,.36,.6],[.15,.11,.16]),n.cone(e.c2,[t*.63,.37,.75],[.05,.12,.05],[1.4,0,-t*.2]),n.cone(e.c2,[t*.49,.37,.75],[.05,.12,.05],[1.4,0,t*.2]);if(e.stinger){for(let t=0;t<6;t++){let r=t/5;n.sphere(e.c2,[0,.38+Math.sin(r*2.2)*.62,-.45-Math.cos(r*2.1)*.3+.1],.1-r*.03)}n.cone(`#2a2430`,[0,1.02,-.36],[.05,.12,.05],[2.2,0,0])}for(let n=0;n<6;n++){let r=n%2?1:-1,i=.22-Math.floor(n/2)*.22;Wd(t,[r*.35,.28,i],t=>{t.cyl(e.c2,[r*.15,-.07,0],[.03,.18,.03],[0,0,r*1.05]),t.cyl(e.c2,[r*.3,-.18,0],[.025,.1,.025],[0,0,r*.25])})}return t.gait=`scuttle`,t}function Qd(e){let t=Ud(),n=t.body;n.sphere(e.c,[0,.24,0],[.22,.16,.52]),n.sphere(e.c2,[0,.18,.03],[.16,.1,.42]);for(let t=0;t<7;t++)n.sphere(e.c,[0,.22-t*.012,-.5-t*.15],.12-t*.015);t.headPivot=[0,.3,.55];let r=t.head;r.sphere(e.c,[0,0,0],[.17,.12,.2]),r.sphere(e.c,[0,-.02,.16],[.12,.08,.14]),Bd(r,.13,.08,.05,.06);for(let[n,r]of[[-1,.32],[1,.32],[-1,-.32],[1,-.32]])Wd(t,[n*.2,.2,r],t=>{t.sphere(e.c,[n*.1,-.05,0],[.13,.05,.05],[0,0,n*.5]),t.sphere(e.c2,[n*.2,-.15,.03],[.07,.03,.08])});return t.gait=`scuttle`,t}function $d(e){let t=Ud(),n=t.body;n.torus(e.c,[0,.13,0],[.42,.42,.3],[Math.PI/2,0,0]),n.torus(e.c2,[0,.3,0],[.3,.3,.28],[Math.PI/2,0,0]);for(let t=0;t<7;t++)n.sphere(e.c,[0,.36+t*.1,.12+Math.sin(t*.45)*.1],.15-t*.007);e.hood&&(n.sphere(e.c,[0,.98,.13],[.3,.3,.07]),n.sphere(e.c2,[0,.96,.17],[.17,.22,.05])),t.headPivot=[0,1.12,.2];let r=t.head;return r.sphere(e.c,[0,0,0],[.17,.12,.2]),Bd(r,.12,.07,.1,.055),r.cone(`#ff5a6e`,[0,-.05,.28],[.015,.08,.012],[1.57,0,0]),t.gait=`slither`,t}function ef(e){let t=Ud(),n=e.bulk||1,r=t.body;if(r.sphere(e.c,[0,0,0],[.34*n,.36*n,.85*n]),r.sphere(e.c2,[0,-.15*n,.06],[.27*n,.24*n,.72*n]),e.patch)for(let t of[-1,1])r.sphere(e.c2,[t*.27*n,.1*n,.42*n],[.09*n,.12*n,.2*n]);t.headPivot=[0,0,.7*n];let i=t.head;if(i.sphere(e.c,[0,0,0],[.26*n,.28*n,.3*n]),Bd(i,.2*n,.08*n,.12*n,.065),e.beakFish&&i.sphere(e.c2,[0,-.05,.32*n],[.08,.07,.2]),e.teeth)for(let e=0;e<5;e++)i.cone(`#fff`,[-.14+e*.07,-.1*n,.26*n],[.02,.035,.02],[Math.PI,0,0]);if(e.seal){for(let e of[-1,1])i.ball(`#ddd`,[e*.09,-.06,.27],.08);i.ball(zd,[0,0,.3],.04)}e.fin&&r.cone(e.c,[0,.46*n,-.05],[.08,.26*n,.22*n],[-.5,0,0]),r.sphere(e.c,[0,.05,-.87*n],[.08,.13*n,.22*n]),r.sphere(e.c,[0,.2*n,-1.02*n],[.05,.24*n,.1*n],[-.5,0,0]),r.sphere(e.c,[0,-.15*n,-1.02*n],[.05,.2*n,.1*n],[.5,0,0]);for(let r of[-1,1])Gd(t,[r*.3*n,-.1*n,.25*n],r,t=>t.sphere(e.c,[r*.24*n,-.05,0],[.26*n,.035,.13*n],[0,0,r*-.3]));return t.gait=`swim`,t.lift=.9,t}function tf(e){let t=Ud(),n=t.body;for(let t=0;t<9;t++){let r=t/8;n.sphere(t%2?e.c:e.c2,[0,r*1.1-.5,Math.sin(r*3.8)*-.2],.23-Math.abs(r-.55)*.22)}for(let t=0;t<6;t++){let r=t/5;n.sphere(e.c,[0,-.5-r*.15+Math.sin(r*4)*.1,.1+Math.cos(r*4)*.1],.08-r*.04)}for(let t=0;t<5;t++)n.cone(e.c2,[0,.1+t*.18,-.15+Math.sin(t)*.05],[.04,.08,.04],[-1,0,0]);t.headPivot=[0,.72,.1];let r=t.head;r.sphere(e.c,[0,0,0],.2),r.sphere(e.c,[0,-.05,.24],[.06,.06,.18]),Bd(r,.13,.05,.1,.06);for(let n of[-1,1])Gd(t,[n*.13,.28,-.05],n,t=>t.sphere(e.c2,[n*.16,0,-.03],[.18,.12,.02],[0,n*.4,0]));return t.gait=`swim`,t.lift=1.05,t}function nf(e){let t=Ud(),n=t.body;n.sphere(e.c2,[0,.35,0],[.55,.28,.62]),n.sphere(`#e8d9a8`,[0,.24,0],[.5,.1,.55]);for(let t of[[0,.6,0],[.26,.52,.18],[-.26,.52,.18],[.26,.52,-.2],[-.26,.52,-.2],[0,.55,.32],[0,.55,-.33]])n.add(`hex`,e.c,t,[.13,.04,.13]);n.sphere(e.c,[0,.28,-.65],[.08,.07,.13]),t.headPivot=[0,.4,.62];let r=t.head;r.sphere(e.c,[0,.02,.06],[.19,.17,.22]),Bd(r,.15,.08,.13,.06);for(let[n,r]of[[-1,.35],[1,.35],[-1,-.35],[1,-.35]])Wd(t,[n*.4,.24,r],t=>t.sphere(e.c,[n*.16,-.08,r>0?.04:0],[.2,.05,.11],[0,0,n*.3]));return t.gait=`walk`,t}function rf(e){let t=Ud(),n=e.bulk||1,r=t.body,i=e.penguin,a=i?.16:.42*Math.sqrt(n),o=a+.36*n,s=e.chubby?1.25:1;if(r.sphere(e.c,[0,o,0],[.36*n*s,.46*n,.3*n*s]),r.sphere(e.c2,[0,o-.03,.1*n],[.27*n*s,.36*n,.23*n*s]),e.tail===`long`)for(let t=0;t<8;t++)r.sphere(e.c,[Math.sin(t*.9)*.08,o-.25+t*.07,-.25-t*.08],.05);e.tail===`short`&&r.sphere(e.c,[0,o-.3,-.26],.09),t.headPivot=[0,o+.46*n,.02];let c=t.head;c.sphere(e.c,[0,.13,0],.3*Math.sqrt(n)),c.sphere(i?`#fff`:e.c2,[0,.08,.15],[.21*Math.sqrt(n),.19*Math.sqrt(n),.17*Math.sqrt(n)]),Bd(c,.11,.2,.24*Math.sqrt(n),.065),i?c.cone(e.beak,[0,.1,.34],[.07,.1,.05],[Math.PI/2,0,0]):c.sphere(zd,[0,.07,.3*Math.sqrt(n)],[.05,.035,.03]),i||Vd(c,e.ear||`round`,e.c,e.c2,.3*Math.sqrt(n));let l=(e.armL||.8)*.55;for(let r of[-1,1])Gd(t,[r*.34*n*s,o+.24*n,0],r,t=>{i?t.sphere(e.c,[r*.06,-.26,0],[.07,.3,.13],[0,0,r*.2]):(t.sphere(e.c,[0,-l*.55,0],[.11*Math.sqrt(n),l*.65,.11*Math.sqrt(n)]),t.sphere(e.c2,[0,-l*1.15,.02],.12*Math.sqrt(n)))}),Wd(t,[r*.17*n,a,0],t=>{t.sphere(i?e.beak:e.c,[0,-a*.5,0],[.1*Math.sqrt(n),a*.55,.11*Math.sqrt(n)]),t.sphere(i?e.beak:e.c2,[0,-a+.03,.06],[.12*Math.sqrt(n),.05,.17*Math.sqrt(n)])});return t.gait=i?`waddle`:`biped`,t}function af(e){let t=Ud(),n=t.body;n.ico(e.c,[0,1.05,0],[.62,.6,.46],[.3,.2,0]),n.ico(e.c2,[.3,1.4,.1],[.26,.2,.22]),n.ico(e.c2,[-.33,1.32,-.05],[.22,.24,.2]),n.ico(e.c,[0,.55,0],[.42,.28,.32]),t.headPivot=[0,1.62,.08];let r=t.head;r.ico(e.c,[0,0,0],[.32,.27,.28],[.4,.3,0]);for(let t of[-1,1])r.sphere(e.glow,[t*.12,.03,.24],[.07,.05,.04]);r.ico(e.c2,[.18,.22,-.05],.1);for(let n of[-1,1])Gd(t,[n*.66,1.32,0],n,t=>{t.ico(e.c2,[n*.06,0,0],.27),t.ico(e.c,[n*.1,-.4,0],[.2,.32,.2]),t.ico(e.c2,[n*.12,-.82,.02],.26)}),Wd(t,[n*.25,.5,0],t=>{t.ico(e.c,[0,-.17,0],[.21,.24,.22]),t.ico(e.c2,[0,-.42,.05],[.24,.1,.28])});return t.gait=`biped`,t}function of(e){let t=Ud(),n=t.body;n.sphere(e.c,[0,.36,0],[.55,.42,.55]),n.sphere(e.c2,[-.18,.55,.22],[.12,.1,.08]),n.sphere(e.c,[0,.1,0],[.62,.1,.62]),t.headPivot=[0,.4,.3];let r=t.head;if(e.eyeStalks)for(let t of[-1,1])r.cyl(e.c,[t*.15,.3,0],[.035,.18,.035],[0,0,-t*.15]),r.sphere(`#fff`,[t*.19,.5,0],.1),r.sphere(zd,[t*.19,.5,.07],.06);else Bd(r,.18,.05,.15,.09);return r.torus(zd,[0,-.1,.19],[.07,.05,.015]),t.gait=`squash`,t}function sf(e){let t=Ud(),n=t.body;n.sphere(e.c,[0,.3,0],[.55,.46,.55]),n.sphere(e.c2,[0,.46,0],[.27,.2,.27]);for(let t=0;t<6;t++){let r=t/6*Math.PI*2;for(let i=0;i<4;i++)n.sphere(t%2?e.c:e.c2,[Math.cos(r)*.35,-.08-i*.17,Math.sin(r)*.35+Math.sin(i)*.03],.07-i*.01)}return t.headPivot=[0,.25,.46],Bd(t.head,.17,0,0,.08),t.gait=`swim`,t.lift=1.05,t}function cf(e){let t=Ud(),n=t.body;n.sphere(e.c,[0,.86,0],[.42,.4,.72]),n.sphere(e.c2,[0,.72,.08],[.31,.28,.56]);for(let t=0;t<6;t++){let r=t/5;n.sphere(e.c,[0,1.06+r*.6,.55+r*.26],[.2-r*.06,.22,.2-r*.06])}for(let t=0;t<9;t++){let r=t/8;n.cone(e.c2,[0,1.3-r*.36,.4-r*1.25],[.055,.13-r*.05,.08],[-.25,0,0])}for(let t=0;t<9;t++){let r=t/8;n.sphere(e.c,[0,.83+Math.sin(r*3)*.25-r*.3,-.68-r*1.25],.2-r*.16)}n.cone(e.c2,[0,.6,-2.06],[.13,.2,.05],[-1.57,0,0]),t.headPivot=[0,1.76,.88];let r=t.head;r.sphere(e.c,[0,0,0],[.27,.24,.3]),r.sphere(e.c,[0,-.05,.3],[.18,.13,.24]),r.sphere(e.c2,[0,-.11,.3],[.15,.06,.21]);for(let t of[-1,1])r.ball(zd,[t*.07,0,.5],.025),r.cone(e.c2,[t*.15,.27,-.17],[.05,.22,.05],[-.6,0,-t*.2]),r.cone(e.c,[t*.27,.08,-.12],[.05,.14,.03],[-.5,0,-t*1]);Bd(r,.17,.11,.17,.075,e.eyeC||zd),Kd(t,e,e.wing,1.16,.15,.3,1.55);for(let[n,r]of[[-1,1],[1,1],[-1,-1],[1,-1]])Wd(t,[n*.28,.55,r*.42],t=>{t.sphere(e.c,[0,-.25,0],[.13,.32,.14]),t.sphere(e.c2,[0,-.51,.07],[.14,.05,.19]);for(let e of[-1,0,1])t.cone(`#fff8e6`,[e*.08,-.52,.25],[.022,.05,.02],[1.57,0,0])});return t.gait=`walk`,t}var lf={quad:qd,griffin:Jd,bird:Yd,frog:Xd,arthro:Zd,reptile:Qd,snake:$d,fish:ef,seahorse:tf,turtle:nf,biped:rf,golem:af,slime:of,jelly:sf,dragon:cf},uf=new Map;function df(e){let t=uf.get(e);if(t)return t;let n=h[e],r=lf[n.kind](n),i=new Z().merge(r.body);for(let e of r.legs)i.merge(e.parts,e.pivot);for(let e of r.wings)i.merge(e.parts,e.pivot);t={gait:r.gait,lift:r.lift||0,body:r.body.build(),head:r.head.build(),headPivot:r.headPivot,legs:r.legs.map(e=>({geo:e.parts.build(),pivot:e.pivot})),wings:r.wings.map(e=>({geo:e.parts.build(),pivot:e.pivot,side:e.side})),lite:i.build()},t.lite.computeBoundingBox();let a=t.lite.boundingBox,o=r.headPivot[1]+.5;return t.height=Math.max(a.max.y,o)-Math.min(0,a.min.y),t.length=a.max.z-a.min.z,t.maxDim=Math.max(t.height,t.length,a.max.x-a.min.x),uf.set(e,t),t}var ff=[Q.vc,Q.vc,Q.vc,new Ya({vertexColors:!0,color:new K(1.5,1.05,.28),emissive:new K(.42,.25,0),specular:16772778,shininess:70,flatShading:!0}),new Xa({vertexColors:!0,emissive:3355443,flatShading:!0}),new Ya({vertexColors:!0,color:new K(.6,1,1.25),emissive:new K(.05,.2,.3),specular:16777215,shininess:120,transparent:!0,opacity:.78,flatShading:!0}),new Xa({vertexColors:!0,color:new K(.42,.24,.85),emissive:new K(.25,.05,.5),flatShading:!0})],pf=new K;function mf(e){pf.setHSL(e*.25%1,.9,.62),ff[4].color.copy(pf),ff[4].emissive.copy(pf).multiplyScalar(.28);let t=.3+.2*Math.sin(e*3);ff[6].emissive.setRGB(t*.8,t*.15,t*1.6)}function hf(e,t=0,{lite:n=!1}={}){let r=df(e),i=h[e],a=ff[t]||Q.vc,o=new sr,s=new sr;o.add(s);let c=new q(n?r.lite:r.body,a);c.castShadow=!0,s.add(c);let l=new q(r.head,a);l.position.set(...r.headPivot),l.castShadow=!0,s.add(l);let u=[],d=[];if(!n){for(let e of r.legs){let t=new q(e.geo,a);t.position.set(...e.pivot),t.castShadow=!0,s.add(t),u.push(t)}for(let e of r.wings){let t=new q(e.geo,a);t.position.set(...e.pivot),t.userData.side=e.side,s.add(t),d.push(t)}}if(s.position.y=r.lift,i.glow||t>=4){let e=t===3?`#ffd23f`:t===5?`#9df0ff`:t===6?`#b78cff`:i.glow||`#ffffff`,n=new Fi(new xi({map:hd(),color:e,transparent:!0,opacity:.5,depthWrite:!1,blending:2}));n.position.set(0,r.height*.5+r.lift,0),n.scale.setScalar(r.maxDim*1.9),s.add(n)}return{id:e,variant:t,root:o,inner:s,body:c,head:l,legs:u,wings:d,gait:r.gait,lift:r.lift,height:r.height,maxDim:r.maxDim,phase:Math.random()*6.28,headBaseY:r.headPivot[1]}}new Hi({color:1314858,fog:!1});function gf(e,t=3.6,n=0,r=2.2){return Math.min(r,t/e.maxDim)*l[n].scale}function _f(e,t,n=0){let r=t+e.phase,i=1+Math.sin(r*2.2)*.018;e.inner.scale.set(i,2-i,i);let a=e.lift;switch(e.gait){case`hop`:{let t=n>0?Math.abs(Math.sin(r*6)):Math.max(0,Math.sin(r*1.1)-.92)*10;e.inner.position.y=a+t*.3,e.inner.rotation.x=n>0?-Math.cos(r*6)*.12:0;break}case`swim`:e.inner.position.y=a+Math.sin(r*2)*.12,e.inner.rotation.y=Math.sin(r*3)*.1*(.5+n),e.inner.rotation.z=Math.sin(r*1.5)*.05;break;case`fly`:e.inner.position.y=a+(n>0?.55+Math.sin(r*8)*.1:0);break;case`squash`:{let t=Math.sin(r*(n>0?8:2.6))*(n>0?.13:.05);e.inner.scale.set(1+t,1-t,1+t);break}case`slither`:e.inner.rotation.y=Math.sin(r*3)*.2,e.inner.position.x=Math.sin(r*5)*.08*n;break;case`waddle`:e.inner.rotation.z=Math.sin(r*(n>0?9:2))*(n>0?.17:.03);break;default:e.inner.position.y=a+Math.abs(Math.sin(r*8))*.05*n}let o=Math.sin(r*.7)*.4+Math.sin(r*.23+2)*.3;e.head.rotation.y=n>0?0:o,e.head.rotation.x=n>0?Math.sin(r*8)*.08:Math.max(0,Math.sin(r*.4+1)-.85)*1.6,e.head.position.y=e.headBaseY+Math.sin(r*2.2)*.012;let s=e.legs.length,c=e.gait===`scuttle`?18:9,l=(e.gait===`scuttle`?.35:.55)*n;for(let t=0;t<s;t++)e.legs[t].rotation.x=Math.sin(r*c+(t%2?Math.PI:0)+(t>1?Math.PI:0))*l;for(let t of e.wings){let i=t.userData.side;if(e.gait===`fly`){let e=n>0?Math.sin(r*16)*.7:Math.sin(r*2)*.05-.25;t.rotation.z=i*e}else e.gait===`biped`?t.rotation.x=Math.sin(r*9+(i>0?Math.PI:0))*.5*n+Math.sin(r*1.5+i)*.04:e.gait===`swim`?t.rotation.z=i*Math.sin(r*4)*.3:e.gait===`waddle`?t.rotation.z=i*(.2+Math.sin(r*9)*.3*n):t.rotation.z=i*Math.sin(r*(n>0?8:1.8))*(n>0?.5:.12)}}function vf(e,t){return!(t>0)||!Number.isFinite(t)?0:(e.money=Math.min(Number.MAX_VALUE,e.money+t),e.lifetime=Math.min(Number.MAX_VALUE,e.lifetime+t),e.runEarned=Math.min(Number.MAX_VALUE,(e.runEarned||0)+t),t)}function yf(e,t){return!(t>=0)||e.money<t?!1:(e.money-=t,!0)}var bf=e.rebirth,xf=(e,t)=>e.upgrades&&e.upgrades[t]||0,Sf=(e,t)=>{let n=D[t];return Math.round(n.cost*n.growth**+xf(e,t))};function Cf(e,t){let n=D[t];return n?xf(e,t)>=n.max?{ok:!1,reason:`max`}:yf(e,Sf(e,t))?(e.upgrades[t]=xf(e,t)+1,{ok:!0,upgrade:n}):{ok:!1,reason:`funds`}:{ok:!1,reason:`unknown`}}var wf=(e,t)=>D[t]?xf(e,t)*D[t].per:0,Tf=e=>(1+wf(e,`income`))*(1+(e.stars||0)*bf.incomePerStar),Ef=e=>(1+wf(e,`xp`))*(1+(e.stars||0)*bf.xpPerStar),Df=e=>wf(e,`luck`)+(e.stars||0)*bf.tiltPerStar,Of=e=>1+wf(e,`mutation`),kf=t=>e.training.repSeconds*(1-wf(t,`reps`)),Af=e=>1+wf(e,`speed`),jf=e=>Math.max(.2,1-wf(e,`hatch`)),Mf=e=>1+wf(e,`catch`),Nf=t=>e.offline.capSeconds+wf(t,`offline`),Pf=e=>e<=bf.minEarned?0:Math.floor(Math.log10(e/bf.minEarned)**+bf.starPower),Ff=e=>Math.max(0,Pf(e.runEarned||0)-(e.stars||0)),If=e=>Ff(e)>=1,Lf=e=>bf.minEarned*10**((e.stars||0)+1)**(1/bf.starPower);function Rf(t){let n=Ff(t);if(n<1)return{ok:!1};let r=[...t.pets].sort((e,t)=>t.i-e.i).slice(0,bf.petsKept);t.stars=(t.stars||0)+n,t.rebirths=(t.rebirths||0)+1,t.money=0,t.runEarned=0,t.level=1,t.xp=0,t.power=2,t.bar=0,t.food=`wood`,t.foods=[`wood`],t.nests=e.eggs.startingNests;for(let e of t.eggs||[])e.n=-1;return t.pets=r,t.placed=[],t.spots={},t.capacity=e.economy.startingSlots,t.upgrades={},t.sinceRare=0,{ok:!0,gain:n,kept:r.length}}var zf=e.economy,Bf=(e,t)=>e.pets.find(e=>e.u===t),Vf=(e,t)=>e.placed.includes(t),Hf=e=>e.capacity-e.placed.length;function Uf(e){let t=0;for(let n of e.placed){let r=Bf(e,n);r&&(t+=r.i)}return t*Tf(e)}var Wf=e=>e.i*zf.sellSeconds,Gf=e=>h[e.s].rarity>=zf.sellConfirmRarity||e.v>=zf.sellConfirmVariant;function Kf(e,t,n,r,i=Date.now()){let a={u:e.nextUid++,s:t,v:n,i:r,t:i};if(e.pets.length>=zf.maxInventory){let t=null;for(let n of e.pets)!Vf(e,n.u)&&(!t||n.i<t.i)&&(t=n);t&&Zf(e,t.u)}return e.pets.push(a),a}function qf(e,t){return Bf(e,t)?Vf(e,t)?{ok:!1,reason:`placed`}:Hf(e)<=0?{ok:!1,reason:`full`}:(e.placed.push(t),{ok:!0}):{ok:!1,reason:`missing`}}function Jf(e,t,n,r){let i=qf(e,t);return i.ok&&(e.spots[t]=[n,r]),i}var Yf=e=>e.pets.filter(t=>!Vf(e,t.u)).sort((e,t)=>t.i-e.i||t.u-e.u);function Xf(e,t){let n=e.placed.indexOf(t);return n<0?!1:(e.placed.splice(n,1),delete e.spots[t],!0)}function Zf(e,t){let n=e.pets.findIndex(e=>e.u===t);if(n<0)return 0;let r=Wf(e.pets[n]);return Xf(e,t),e.pets.splice(n,1),e.stats.sold++,vf(e,r),r}function Qf(e){let t=[...e.pets].sort((e,t)=>t.i-e.i||e.u-t.u).slice(0,e.capacity).map(e=>e.u),n=new Set(e.placed);if(t.length===n.size&&t.every(e=>n.has(e)))return{changed:!1};let r=t=>t.reduce((t,n)=>{let r=Bf(e,n);return t+(r?r.i:0)},0),i=r(e.placed),a=r(t);if(a<=i&&n.size===t.length)return{changed:!1};e.placed=t;for(let n of Object.keys(e.spots))t.includes(+n)||delete e.spots[n];return{changed:!0,gain:a-i}}var $f=e=>{let t=(e.capacity-zf.startingSlots)/zf.slotsPerExpansion;return Math.round(zf.expansionBaseCost*zf.expansionGrowth**+t)};function ep(e){return e.capacity>=zf.maxSlots?{ok:!1,reason:`max`}:yf(e,$f(e))?(e.capacity=Math.min(zf.maxSlots,e.capacity+zf.slotsPerExpansion),{ok:!0}):{ok:!1,reason:`funds`}}function tp(e,t=`income`){let n=[...e.pets];return t===`rarity`?n.sort((e,t)=>h[t.s].rarity-h[e.s].rarity||t.v-e.v||t.i-e.i):t===`newest`?n.sort((e,t)=>t.u-e.u):n.sort((e,t)=>t.i-e.i||t.u-e.u),n}function np(e){let t=0,n=0;for(let r of[...e.pets])!Vf(e,r.u)&&h[r.s].rarity<=1&&r.v===0&&(t+=Zf(e,r.u),n++);return{total:t,count:n}}var rp=e=>{let t=l[e.v];return(e.v>0?t.name+` `:``)+h[e.s].name},ip=new H,ap=3.5,op=class{constructor(e,t,n){this.hub=e,this.fx=t,this.lite=n===`low`,this.views=new Map,this.bounds=Md(6)}sync(e,t=!0){this.hub.setCapacity(e.capacity),this.bounds=Md(e.capacity);let n=new Set(e.placed);for(let[e,t]of this.views)n.has(e)||(this.hub.group.remove(t.rig.root),this.views.delete(e));e.placed.forEach((n,r)=>{let i=Bf(e,n);if(!i)return;let a=e.spots[n],o=a?{x:a[0],z:a[1]}:Nd(r,e.capacity),s=this.views.get(n);if(!s){let e=hf(i.s,i.v,{lite:this.lite}),r=gf(e,8,i.v,3.4);e.root.scale.setScalar(.01),e.root.position.set(o.x,.25,o.z),e.root.rotation.y=Math.random()*6.28,this.hub.group.add(e.root),s={rig:e,pet:i,targetScale:r,grow:0,tx:o.x,tz:o.z,wait:Math.random()*3,moving:0,speed:2.4+Math.random()*1.8},this.views.set(n,s),t?this.fx.burst({x:o.x,y:1.5,z:o.z},{count:26,colors:[`#ffe14d`,`#ffffff`,`#7ccd52`],speed:10,life:.8,size:.9}):(s.grow=1,e.root.scale.setScalar(r))}s.home=o})}update(e,t){let n=this.bounds;for(let r of this.views.values()){let i=r.rig.root;if(r.grow<1){r.grow=Math.min(1,r.grow+e*3.2);let t=1-(1-r.grow)**3;i.scale.setScalar(r.targetScale*t*(1+Math.sin(r.grow*Math.PI)*.22))}let a=r.tx-i.position.x,o=r.tz-i.position.z,s=Math.hypot(a,o),c=0;if(s>.3){c=1;let t=Math.min(s,r.speed*e);i.position.x+=a/s*t,i.position.z+=o/s*t;let n=Math.atan2(a,o)-i.rotation.y;n=Math.atan2(Math.sin(n),Math.cos(n)),i.rotation.y+=n*Math.min(1,e*6)}else if(r.wait-=e,r.wait<=0){r.wait=1.5+Math.random()*4.5;let e=Math.random()*6.283,t=Math.random()*ap,i=3+r.rig.maxDim*r.targetScale*.25;r.tx=Math.max(n.minX+i,Math.min(n.maxX-i,r.home.x+Math.cos(e)*t)),r.tz=Math.max(n.minZ+i,Math.min(n.maxZ-i,r.home.z+Math.sin(e)*t))}r.moving=Su(r.moving,c,8,e),_f(r.rig,t,r.moving>.3?r.moving:0)}}pick(e){let t=null,n=1/0;for(let r of this.views.values()){let i=r.rig.maxDim*r.targetScale*.42;if(ip.copy(r.rig.root.position),ip.y+=r.rig.height*r.targetScale*.5+0,e.distanceSqToPoint(ip)<i*i){let i=ip.distanceToSquared(e.origin);i<n&&(n=i,t=r)}}return t}each(e){for(let t of this.views.values())e(t)}},sp=`#8a6038`,cp=`#3a2a1e`;function lp(e){e.cyl(sp,[0,.05,0],[.07,.85,.07]),e.cyl(cp,[0,.72,0],[.085,.2,.085]),e.sphere(cp,[0,.93,0],.1)}var up={pick(e,t,n){lp(e);let r=n?`#ff5a5a`:t,i=n?`#4fa8ff`:t;e.box(`#5f5f6a`,[0,-.78,0],[.14,.14,.16]);for(let t of[-1,1])e.cone(t<0?r:i,[0,-.79,t*.42],[.12,.36,.1],[t*Math.PI/2-t*.25,0,0]);n&&e.box(`#ffe14d`,[0,-.78,0],[.15,.05,.17])},axe(e,t){lp(e),e.box(`#5f5f6a`,[0,-.7,0],[.13,.16,.13]),e.box(t,[0,-.72,.3],[.06,.26,.2]),e.cyl(t,[0,-.72,.5],[.3,.07,.3],[0,0,Math.PI/2])},double(e,t){lp(e),e.box(`#5f5f6a`,[0,-.72,0],[.13,.16,.13]);for(let n of[-1,1])e.box(t,[0,-.72,n*.28],[.06,.24,.18]),e.cyl(t,[0,-.72,n*.47],[.28,.07,.28],[0,0,Math.PI/2])},hammer(e,t){lp(e),e.rbox(t,[0,-.78,0],[.24,.24,.42]);for(let t of[-1,1])e.cyl(`#ffffff`,[0,-.78,t*.43],[.26,.03,.26],[Math.PI/2,0,0])},crystal(e,t){lp(e),e.ico(`#ffffff`,[0,-.76,0],.16);for(let n of[-1,1])e.add(`hex`,t,[0,-.76,n*.38],[.11,.32,.11],[n*Math.PI/2,0,0]);e.cone(t,[0,-.76,.78],[.11,.12,.11],[Math.PI/2,0,0]),e.cone(t,[0,-.76,-.78],[.11,.12,.11],[-Math.PI/2,0,0])},star(e,t){lp(e);for(let n=0;n<5;n++){let r=n*1.2566;e.cone(t,[0,-.8+Math.cos(r)*.28,Math.sin(r)*.28],[.14,.24,.1],[-r,0,0])}e.sphere(`#fff3a0`,[0,-.8,0],[.12,.2,.2])}},dp=new Map;function fp(e){if(dp.has(e))return dp.get(e);let t=s[e],n=new Z;(up[t.shape]||up.pick)(n,t.tint||`#c8d0d8`,t.rainbow);let r=n.build();return dp.set(e,r),r}function pp(e){let t=s[e],n=new q(fp(e),t.gleam||t.rainbow?Q.vcGlow:Q.vc);return n.castShadow=!0,n}var mp=[{name:`Ranger Mo`,jacket:`#5f8f3f`,pants:`#4a3f2f`,hat:`#6a7f3f`,skin:`#c98f60`},{name:`Feeder Pip`,jacket:`#e8604f`,pants:`#34405e`,hat:`#ffffff`,skin:`#f5c9a0`},{name:`Vet Juno`,jacket:`#ffffff`,pants:`#5fa8c9`,hat:`#5fa8c9`,skin:`#8f5f3f`},{name:`Groundskeeper Ada`,jacket:`#d9a02f`,pants:`#5a4a3a`,hat:`#a85f25`,skin:`#e8b890`}],hp=[[-5,8],[8,12],[22,8],[26,-6],[24,-16],[8,-19],[-6,-19],[14,22],[8,32],[-5,28],[36,12],[34,26]],gp=[[-6,-19],[8,-19],[2,-20]],_p=[`wood`,`stone`,`copper`];function vp(e,t,n){let r=new q(e.build(),Q.vc);return r.castShadow=!0,n&&r.position.set(...n),t.add(r),r}function yp(e){let t=new sr;t.scale.setScalar(.88);let n=new Z;n.rbox(e.jacket,[0,3,0],[1,1,.52]),n.box(e.pants,[0,2.12,0],[1.02,.14,.55]),vp(n,t);let r=new Z;r.rbox(e.skin,[0,.66,0],[.72,.66,.68]);for(let e of[-1,1])r.box(`#2a2430`,[e*.27,.76,.68],[.1,.14,.03]);r.box(`#2a2430`,[0,.42,.68],[.2,.045,.03]),r.rbox(e.hat,[0,1.42,.1],[.78,.2,.82]);let i=vp(r,t,[0,4,0]),a=()=>{let t=new Z;return t.rbox(e.jacket,[0,-.72,0],[.48,.78,.48]),t.rbox(e.skin,[0,-1.7,0],[.46,.3,.46]),t},o=()=>{let t=new Z;return t.rbox(e.pants,[0,-.75,0],[.49,.78,.5]),t.rbox(`#3a2a1e`,[0,-1.72,.08],[.5,.28,.58]),t};return{root:t,head:i,armL:vp(a(),t,[-1.5,3.8,0]),armR:vp(a(),t,[1.5,3.8,0]),legL:vp(o(),t,[-.51,2,0]),legR:vp(o(),t,[.51,2,0])}}var bp=class{constructor(e,t,n){this.hub=e,this.fx=t,this.staff=mp.slice(0,n===`low`?2:4).map((t,n)=>{let r=yp(t),i=hp[n*3%hp.length];return r.root.position.set(i[0],0,i[1]),e.group.add(r.root),{...r,name:t.name,tx:i[0],tz:i[1],wait:1+n*1.5,yaw:n,walk:0,moving:0,toss:0,lookout:!1}}),this.flying=null}pickTarget(e){e.lookout=!1;let t=e.lookout?gp:hp,n=t[Math.floor(Math.random()*t.length)];e.tx=n[0]+(Math.random()-.5)*2,e.tz=n[1]+(Math.random()-.5)*2}launch(e){let t=pp(_p[Math.floor(Math.random()*_p.length)]);t.scale.setScalar(1.3),this.hub.group.add(t);let n=e.root.position;this.flying={food:t,t:0,x0:n.x,z0:n.z,x1:n.x+(Math.random()-.5)*8,z1:-40-Math.random()*40}}update(e,t){for(let n of this.staff){let r=n.root.position,i=n.tx-r.x,a=n.tz-r.z,o=Math.hypot(i,a),s=0;if(n.toss>0)n.toss-=e,n.toss<.55&&!n.tossed&&(n.tossed=!0,this.launch(n));else if(o>.4){s=1;let t=Math.min(o,7*e);r.x+=i/o*t,r.z+=a/o*t,n.yawTarget=Math.atan2(i,a)}else n.lookout&&(n.lookout=!1,n.toss=.95,n.tossed=!1,n.yawTarget=Math.PI),n.wait-=e,n.wait<=0&&(n.wait=2+Math.random()*5,this.pickTarget(n));if(n.yawTarget!==void 0){let t=Math.atan2(Math.sin(n.yawTarget-n.yaw),Math.cos(n.yawTarget-n.yaw));n.yaw+=t*Math.min(1,e*8),n.root.rotation.y=n.yaw}n.moving=Su(n.moving,s,10,e),n.walk+=e*8*Math.max(n.moving,.05);let c=Math.sin(n.walk)*n.moving,l=c*.8;if(n.toss>0){let e=1-n.toss/.95;l=e<.42?e/.42*-2.7:-2.7+4.2*Math.min(1,(e-.42)/.2)}n.armR.rotation.x=l,n.armL.rotation.x=-c*.8,n.legL.rotation.x=c*.8,n.legR.rotation.x=-c*.8,n.root.position.y=Math.abs(Math.sin(n.walk))*.12*n.moving,n.head.rotation.y=n.moving<.1?Math.sin(t*.7+n.yaw*3)*.35:0}let n=this.flying;if(n){n.t+=e/1.4;let t=Math.min(1,n.t);n.food.position.set(n.x0+(n.x1-n.x0)*t,5+-4.2*t+36*t*(1-t),n.z0+(n.z1-n.z0)*t),n.food.rotation.x+=e*8,t>=1&&(this.fx.burst({x:n.x1,y:.8,z:n.z1},{count:10,colors:[`#ffffff`,`#c9e88f`],speed:6,life:.5,size:.7}),this.hub.group.remove(n.food),this.flying=null)}}},xp=[`#7a5433`,`#6a4a2c`,`#8a6038`];function Sp(e){let t=e;return()=>(t=t*16807%2147483647)/2147483647}function Cp(e,{h:t=5,r:n=.6,color:r=xp[0],dark:i=xp[1],lean:a=.06,roots:o=4,segs:s=4}={}){for(let o=0;o<s;o++){let c=o/s,l=t/s,u=n*(1-c*.35);e.cyl(o%2?r:i,[a*o*l,l*(o+.5),0],[u,l*.52,u],[0,0,-a])}for(let t=0;t<o;t++){let r=t/o*Math.PI*2+.4;e.cone(i,[Math.cos(r)*n*1.05,n*.45,Math.sin(r)*n*1.05],[n*.45,n*.9,n*.45],[Math.sin(r)*1.1,0,-Math.cos(r)*1.1])}return[a*t,t]}function wp(e,[t,n,r],i,a,{n:o=9,flat:s=1,seed:c=1,ico:l=!1}={}){let u=Sp(c*7919+13),d=l?(t,n,r)=>e.ico(t,n,r):(t,n,r)=>e.sphere(t,n,r);d(a[0],[t,n,r],[i,i*.8*s,i]);for(let e=0;e<o;e++){let o=u()*Math.PI*2,c=i*(.45+u()*.5),l=(u()-.3)*i*.7*s,f=i*(.45+u()*.3);d(a[(e+1)%a.length],[t+Math.cos(o)*c,n+l,r+Math.sin(o)*c],[f,f*.85*s,f])}}function Tp(e,t,[n,r,i],a,o,s=0){e.cyl(t,[n+Math.sin(o)*Math.cos(s)*a*.5,r+Math.cos(o)*a*.5,i+Math.sin(o)*Math.sin(s)*a*.5],[.16,a*.5,.16],[Math.sin(s)*o,0,-Math.cos(s)*o])}function Ep(e,t=`#5fb84a`,n=1.4){for(let r=0;r<7;r++){let i=r*.9;e.cone(t,[Math.cos(i)*n,.3,Math.sin(i)*n],[.12,.32,.08],[0,0,r%2?.3:-.3])}}function Dp(e,{tiers:t=5,h:n=11,w:r=3.6,greens:i,tip:a,snow:o=null,trunkH:s=2.6}){Cp(e,{h:s+1,r:.55,roots:4,lean:0});for(let a=0;a<t;a++){let c=a/t,l=s+c*(n-s-1.2),u=r*(1-c*.75),d=i[a%i.length];e.cone(d,[0,l+1.2,0],[u,1.5,u]),e.cone(i[(a+1)%i.length],[u*.3,l+.9,u*.2],[u*.55,1,u*.55]),o&&e.cone(o,[0,l+1.75,0],[u*.62,.55,u*.62])}a&&e.ico(a,[0,n+.4,0],.45)}var Op={oak:{build(e){let[t,n]=Cp(e,{h:5.2,r:.75,lean:.05});Tp(e,xp[0],[t*.6,n*.65,0],2.6,.8,0),Tp(e,xp[1],[t*.5,n*.7,0],2.4,.75,Math.PI*.9),wp(e,[t,n+2.4,0],3.6,[`#3f9f3a`,`#4fb548`,`#62c454`,`#357f32`,`#58bd4c`],{n:11,seed:1}),wp(e,[t+.4,n+4.2,.2],2.2,[`#6fd05a`,`#4fb548`],{n:4,seed:2}),Ep(e)}},apple:{build(e){let[t,n]=Cp(e,{h:4.2,r:.6,lean:.08});wp(e,[t,n+2,0],3.3,[`#4fb548`,`#62c454`,`#3f9f3a`,`#74d05f`],{n:10,seed:3});let r=Sp(77);for(let i=0;i<12;i++){let a=r()*6.28,o=2.4+r()*1.2;e.sphere(i%3?`#e8352f`:`#ffcf3f`,[t+Math.cos(a)*o,n+1+r()*2.8,Math.sin(a)*o],.32)}Ep(e)}},birch:{build(e){let[t,n]=Cp(e,{h:7.5,r:.42,color:`#f2f0e8`,dark:`#e6e2d6`,lean:.03,segs:5}),r=Sp(5);for(let n=0;n<9;n++)e.box(`#2a2430`,[n/9*t+Math.cos(n*2.1)*.38,1+n*.75,Math.sin(n*2.1)*.38],[.16,.05,.06],[0,n*2.1,0]);wp(e,[t,n+1.2,0],2.6,[`#9ad84a`,`#b4e05a`,`#86c83f`,`#c8e868`],{n:9,flat:1.4,seed:6}),wp(e,[t,n-1,0],2.2,[`#86c83f`,`#b4e05a`],{n:5,seed:7});for(let i=0;i<3;i++)Tp(e,`#e6e2d6`,[t*.7,n*.6+i,0],1.6,.7,r()*6);Ep(e)}},pine:{build(e){Dp(e,{tiers:5,h:12,w:3.8,greens:[`#237f47`,`#2f9654`,`#1f6e3f`,`#3fae62`]}),Ep(e,`#4f9a44`,1.2)}},frostFir:{build(e){Dp(e,{tiers:5,h:12,w:3.6,greens:[`#2f7a5a`,`#368a66`,`#286a4f`],snow:`#f7fcff`,tip:`#ffffff`})}},auroraFir:{glow:1,build(e){Dp(e,{tiers:6,h:13,w:3.6,greens:[`#2f6a8f`,`#3f8fa8`,`#2a5a80`],snow:`#bff8d8`,tip:`#7ff0c8`})}},acacia:{build(e){Cp(e,{h:3.6,r:.55,color:`#7a5a35`,dark:`#6a4a2c`,lean:.1}),Tp(e,`#7a5a35`,[.4,3.4,0],3.2,.7,0),Tp(e,`#6a4a2c`,[.3,3.4,0],3,.65,Math.PI),Tp(e,`#7a5a35`,[.3,3.4,0],2.8,.6,Math.PI/2),wp(e,[.4,6.4,0],4.8,[`#8eaa42`,`#a3bb4a`,`#7f9a3a`,`#b0c45a`],{n:12,flat:.32,seed:9}),wp(e,[.6,7.1,.3],3,[`#a3bb4a`,`#b8cc60`],{n:5,flat:.3,seed:10})}},saguaro:{build(e){let t=[`#4fa35a`,`#45944f`];for(let n=0;n<6;n++)e.sphere(t[n%2],[0,1+n*1.3,0],[.85,1,.85]);e.sphere(t[0],[0,8.6,0],.78);for(let[n,r,i]of[[1,3.4,2.6],[-1,4.6,2.2]]){e.cyl(t[1],[n*1,r,0],[.45,.5,.45],[0,0,n*1.4]);for(let a=0;a<3;a++)e.sphere(t[a%2],[n*1.6,r+.5+i/3*a,0],[.55,.7,.55])}for(let t=0;t<16;t++){let n=t*1.7;e.cone(`#f4f0d8`,[Math.cos(n)*.86,1+t%6*1.3,Math.sin(n)*.86],[.04,.14,.04],[Math.sin(n)*1.57,0,-Math.cos(n)*1.57])}for(let t of[`#ff7fa8`,`#ffd25f`,`#ff7fa8`])e.sphere(t,[Math.random()*0,9.3,0],[.3,.2,.3]);e.sphere(`#ff7fa8`,[1.6,6.3,0],[.25,.16,.25])}},palm:{build(e){for(let t=0;t<8;t++){let n=t/8;e.cyl(t%2?`#a07a4a`:`#8a6a3f`,[Math.sin(n*1.2)*1.4,.6+t*1.15,0],[.42-n*.14,.62,.42-n*.14],[0,0,-.18-n*.1])}let t=[1.35,9.6,0];for(let n=0;n<8;n++){let r=n*.785;e.sphere(n%2?`#43b85a`:`#36a04c`,[t[0]+Math.cos(r)*2.3,t[1]-.3,Math.sin(r)*2.3],[2.6,.2,.7],[0,-r,-.45]),e.sphere(`#58c96a`,[t[0]+Math.cos(r)*3.8,t[1]-1.3,Math.sin(r)*3.8],[1.2,.14,.45],[0,-r,-.9])}for(let n=0;n<4;n++)e.sphere(`#6a4a2c`,[t[0]+Math.cos(n*1.57)*.5,t[1]-.7,Math.sin(n*1.57)*.5],.42)}},datePalm:{build(e){Op.palm.build(e);for(let t=0;t<6;t++)e.sphere(`#e8962f`,[1.35+Math.cos(t)*.8,8.5-t%2*.4,Math.sin(t)*.8],.26)}},kapok:{build(e){for(let t=0;t<5;t++){let n=t*1.257;e.box(xp[1],[Math.cos(n)*1.1,1.1,Math.sin(n)*1.1],[.18,1.1,1.1],[0,-n,0])}let[t,n]=Cp(e,{h:8.5,r:.8,lean:.02,segs:5,roots:0});wp(e,[t,n+1.4,0],4.6,[`#2f9c50`,`#3fb35e`,`#278a45`,`#4fc06a`],{n:12,flat:.55,seed:12}),wp(e,[t,n-1.6,0],3,[`#278a45`,`#3fb35e`],{n:6,flat:.5,seed:13});for(let[t,r,i]of[[3.4,.5,2.6],[-3,1.5,3.2],[.7,-3.4,2.4],[-1,3.2,2.8]])e.cyl(`#3a8a45`,[t,n-i*.5,r],[.08,i,.08])}},bush:{build(e){wp(e,[0,1.6,0],2.4,[`#4fb552`,`#5fc75e`,`#46a84c`,`#3f9a45`],{n:9,flat:.8,seed:14});let t=Sp(41);for(let n=0;n<16;n++){let r=t()*6.28,i=1.7+t()*.8;e.ball(n%2?`#3f5fd8`:`#7f4fff`,[Math.cos(r)*i,.7+t()*2.2,Math.sin(r)*i],.2)}}},ember:{glow:1,build(e){let[t,n]=Cp(e,{h:5,r:.7,color:`#2e2428`,dark:`#3a2c30`,lean:.1});for(let r=0;r<4;r++)Tp(e,`#2e2428`,[t*.6,n*.7,0],2.6,.85,r*1.57+.3);wp(e,[t,n+2.2,0],3.4,[`#ff7a2c`,`#ffcf4d`,`#ff5a1f`,`#ff9a3f`],{n:10,seed:15,ico:!0});for(let r=0;r<6;r++)e.ico(`#ffe14d`,[t+Math.cos(r)*2.4,n+3.6+r%3*.5,Math.sin(r)*2.4],.3)}},blossom:{build(e){let[t,n]=Cp(e,{h:4.8,r:.6,color:`#6a4fa8`,dark:`#5a3f98`,lean:.12});Tp(e,`#6a4fa8`,[t*.5,n*.7,0],2.8,.9,0),Tp(e,`#5a3f98`,[t*.5,n*.7,0],2.6,.85,Math.PI),wp(e,[t,n+2.2,0],3.6,[`#ff9be0`,`#ffb8ea`,`#f28cd4`,`#ffd0f4`,`#c88bff`],{n:12,seed:16});let r=Sp(91);for(let i=0;i<10;i++)e.ball(`#fff3a0`,[t+(r()-.5)*7,n+1+r()*4,(r()-.5)*7],.18)}},cloudWillow:{build(e){let[t,n]=Cp(e,{h:6,r:.55,color:`#e8f0ff`,dark:`#c8d8f0`,lean:.05});wp(e,[t,n+1.6,0],3.8,[`#ffffff`,`#eaf4ff`,`#f6faff`,`#dfefff`],{n:11,seed:17});for(let r=0;r<12;r++){let i=r*.52;e.cyl(`#cfe6ff`,[t+Math.cos(i)*3.2,n-.8,Math.sin(i)*3.2],[.07,2.2,.07]),e.ball(`#ffffff`,[t+Math.cos(i)*3.2,n-3,Math.sin(i)*3.2],.22)}}},crystalTree:{glow:1,build(e){e.add(`hex`,`#5f8fe8`,[0,2.6,0],[.7,2.6,.7]);for(let t=0;t<6;t++){let n=t*1.047,r=[`#7fe8ff`,`#b48fff`,`#ff9be0`][t%3];e.add(`hex`,r,[Math.cos(n)*1.8,6+t%2,Math.sin(n)*1.8],[.45,1.8,.45],[Math.sin(n)*.5,0,-Math.cos(n)*.5]),e.cone(`#e8fbff`,[Math.cos(n)*2.6,8+t%2,Math.sin(n)*2.6],[.45,.6,.45],[Math.sin(n)*.5,0,-Math.cos(n)*.5])}e.add(`hex`,`#b8f6ff`,[0,7.4,0],[.8,2.4,.8]),e.cone(`#ffffff`,[0,10.4,0],[.8,.9,.8]);for(let t=0;t<5;t++){let n=t*1.257+.3;e.ico(`#9df0ff`,[Math.cos(n)*1.4,.4,Math.sin(n)*1.4],.5)}}},starTree:{glow:1,build(e){let[t,n]=Cp(e,{h:5.6,r:.6,color:`#3a2a7a`,dark:`#2a1f5e`,lean:.06});wp(e,[t,n+2,0],3.5,[`#5f3fd8`,`#8f7fff`,`#4a2fb0`,`#a88fff`],{n:11,seed:18});let r=Sp(33);for(let i=0;i<9;i++){let a=r()*6.28,o=3+r();e.ico(i%3?`#ffe14d`:`#8ff0ff`,[t+Math.cos(a)*o,n+1+r()*3.5,Math.sin(a)*o],.3+r()*.2)}}},lollipop:{build(e){for(let t=0;t<8;t++)e.cyl(t%2?`#ff4f6a`:`#ffffff`,[0,.55+t*1.05,0],[.38,.55,.38]);e.cyl(`#ff7fb5`,[0,10.4,0],[3,.55,3],[Math.PI/2,0,0]),e.torus(`#ffffff`,[0,10.4,0],[2,2,.6]),e.torus(`#ffe14d`,[0,10.4,0],[1,1,.6]),e.sphere(`#7fd8ff`,[0,10.4,0],[.6,.6,.7])}},cottonCandy:{build(e){for(let t=0;t<6;t++)e.cyl(t%2?`#fff4e8`:`#ffd6ea`,[0,.6+t*1.1,0],[.4,.6,.4]);wp(e,[0,8.6,0],3.6,[`#ffc9ec`,`#c9e8ff`,`#ffe0f0`,`#e0d0ff`],{n:12,seed:19})}},gear:{build(e){Cp(e,{h:5.2,r:.6,color:`#7a5a30`,dark:`#6a4a28`,lean:0,roots:3});for(let[t,n,r,i]of[[7.4,2.8,.3,`#c9a23f`],[9.6,1.8,1.4,`#b8904f`],[6,1.6,2.4,`#a9b4c0`]]){e.torus(i,[0,t,0],[n,n,.9],[Math.PI/2,r,0]);for(let r=0;r<10;r++){let a=r*.628;e.box(i,[Math.cos(a)*(n+.5),t,Math.sin(a)*(n+.5)],[.32,.3,.32],[0,-a,0])}}e.ico(`#ffd24d`,[0,11.4,0],.55)}},willow:{build(e){let[t,n]=Cp(e,{h:5.4,r:.75,color:`#5a4a3a`,dark:`#4a3a2c`,lean:.08});wp(e,[t,n+1.6,0],3.6,[`#7fa85f`,`#8fb86a`,`#6f985a`,`#a0c878`],{n:10,flat:.6,seed:20});for(let r=0;r<18;r++){let i=r*.35,a=3+r%3*.5;e.cyl(r%2?`#8fb86a`:`#6f985a`,[t+Math.cos(i)*a,n-.4,Math.sin(i)*a],[.12,2.4,.12])}}},golden:{glow:1,build(e){let[t,n]=Cp(e,{h:5.4,r:.75,color:`#c9963f`,dark:`#b8863a`,lean:.05});Tp(e,`#c9963f`,[t*.5,n*.7,0],2.8,.8,.4),wp(e,[t,n+2.4,0],3.8,[`#ffd86a`,`#ffe48a`,`#ffc94d`,`#fff0b0`],{n:12,seed:21});for(let r=0;r<8;r++)e.ico(`#ffffff`,[t+Math.cos(r*.8)*3.2,n+2+r%3,Math.sin(r*.8)*3.2],.22)}},mushroom:{build(e,t=`#7fe8ff`,n=`#e8fbff`){e.cyl(`#e8e0ff`,[0,3.2,0],[.75,3.2,.75]),e.cyl(`#f4f0ff`,[0,1,0],[1.05,1,1.05]),e.sphere(t,[0,7,0],[4.2,2.2,4.2]),e.sphere(`#d8e8ff`,[0,6,0],[3.6,.5,3.6]);for(let t=0;t<9;t++){let r=t*.7;e.sphere(n,[Math.cos(r)*(1.4+t%3*.8),8.2-t%3*.5,Math.sin(r)*(1.4+t%3*.8)],.45)}}}};Op.moonMushroom={glow:1,build(e){Op.mushroom.build(e,`#c88bff`,`#fff3a0`)}},Op.bogMushroom={glow:1,build(e){Op.mushroom.build(e,`#8fd86a`,`#e8ffd0`)}},Op.greatPine={build(e){Dp(e,{tiers:7,h:15,w:4.6,greens:[`#1f6e3f`,`#237f47`,`#2f9654`,`#1a5f36`]}),Ep(e,`#4f9a44`,1.6)}},Op.glacierFir={build(e){Dp(e,{tiers:7,h:15,w:4.4,greens:[`#286a4f`,`#2f7a5a`,`#368a66`],snow:`#ffffff`,tip:`#dff4ff`})}},Op.spruce={build(e){Dp(e,{tiers:6,h:13,w:3.4,greens:[`#2f6a5a`,`#3a7a68`,`#285a4c`],snow:`#e8f4ff`})}},Op.oldAcacia={build(e){Op.acacia.build(e),Cp(e,{h:2,r:.9,color:`#7a5a35`,dark:`#6a4a2c`,lean:0,roots:5,segs:1})}},Op.greatOak={build(e){Op.oak.build(e),wp(e,[.3,10,0],2.6,[`#4fb548`,`#3f9f3a`],{n:5,seed:30})}},Op.magmaOak={glow:1,build(e){Op.ember.build(e),wp(e,[.5,9.2,0],2.4,[`#ff5a1f`,`#ffcf4d`],{n:5,seed:31,ico:!0})}},Op.nebula={glow:1,build(e){let[t,n]=Cp(e,{h:6,r:.7,color:`#2a1f5e`,dark:`#1a1250`,lean:.04});wp(e,[t,n+2.4,0],4,[`#ff7fd8`,`#a88fff`,`#ff9bf0`,`#7f5fff`],{n:12,seed:32});for(let r=0;r<10;r++)e.ico(`#ffffff`,[t+Math.cos(r*.7)*3.6,n+1.5+r%4,Math.sin(r*.7)*3.6],.2)}},Op.brassTitan={build(e){Op.gear.build(e);for(let t of[-1,1])e.torus(`#c9a23f`,[t*3.2,5,0],[1.4,1.4,.7],[0,Math.PI/2,0])}},Op.treeOfAges={glow:1,build(e){Op.golden.build(e),wp(e,[.4,11,0],2.8,[`#fff0b0`,`#ffd86a`],{n:6,seed:34}),Cp(e,{h:2.4,r:1.1,color:`#c9963f`,dark:`#b8863a`,lean:0,roots:6,segs:1})}},Op.riftCrystal={glow:1,build(e){Op.crystalTree.build(e),e.add(`hex`,`#7ff0c8`,[2.4,3,.8],[.5,3,.5],[0,0,-.3]),e.add(`hex`,`#7f8fff`,[-2.2,2.6,-.6],[.5,2.6,.5],[0,0,.3])}},Op.prismSpire=Op.riftCrystal;var kp=Op;function Ap(e){let t=new Z;return(Op[e]||Op.oak).build(t),t.build()}var jp=[`#f4efe2`,`#a8ec9a`,`#9cc8ff`,`#c9a6ff`,`#ffd75a`,`#ff8a7a`,`#ffffff`],Mp=[`#c8b898`,`#4fae4a`,`#3f7fe0`,`#7f4fd8`,`#e8962f`,`#d83a3a`,`#ff7fd8`],Np=new Map;function Pp(e,t){let n=e+t;if(Np.has(n))return Np.get(n);let r=new Z;r.sphere(jp[e],[0,.78,0],[.56,.76,.56]);let i=e===0?t:Mp[e];for(let[e,t,n,a]of[[.42,.9,.2,.1],[-.3,1.1,.36,.085],[.1,.55,.52,.09],[-.48,.66,-.12,.08],[.2,1.3,-.28,.07],[-.12,.82,-.52,.09]])r.ball(i,[e,t,n],[a,a,a*.55]);let a=r.build();return Np.set(n,a),a}var Fp=new Xa({vertexColors:!0,flatShading:!0,emissive:3351108});function Ip(e){Fp.color.setHSL(e*.25%1,.85,.65)}function Lp(e,t=`#c8b898`,{nest:n=!0}={}){let r=new sr,i=new q(Pp(e,t),e>=6?Fp:e>=4?Q.vcGlow:Q.vc);i.castShadow=!0;let a=new sr;if(a.add(i),a.position.y=n?.18:0,r.add(a),n&&r.add(new q(zp(),Q.vc)),e>=2){let t=c[e].color===`rainbow`?`#ff9bf0`:c[e].color,n=new Fi(new xi({map:hd(),color:t,transparent:!0,opacity:.55,depthWrite:!1,blending:2}));n.position.y=.9,n.scale.setScalar(2.4+e*.35),r.add(n),r.userData.glow=n}return r.userData.egg=a,r}var Rp=null;function zp(){if(Rp)return Rp;let e=new Z;e.torus(`#a8783f`,[0,.2,0],[.62,.62,.55],[Math.PI/2,0,0]),e.cyl(`#8a6038`,[0,.08,0],[.6,.08,.6]);for(let t=0;t<10;t++){let n=t*.63;e.cyl(`#d9b26a`,[Math.cos(n)*.66,.3,Math.sin(n)*.66],[.03,.2,.03],[Math.sin(n)*.8,0,-Math.cos(n)*.8])}return Rp=e.build(),Rp}function Bp(e,t,n){let r=e.index[t];if(!r)return e.index[t]={c:1,m:[n],n:!0},{isNew:!0,newVariant:n>0};r.c++;let i=!r.m.includes(n);return i&&(r.m.push(n),r.n=!0),{isNew:!1,newVariant:i&&n>0}}function Vp(e,t){let n=g[t],r=n.filter(t=>e.index[t.id]).length;return{found:r,total:n.length,pct:Math.floor(r/n.length*100)}}function Hp(e){let t=m.filter(t=>e.index[t.id]).length;return{found:t,total:m.length,pct:Math.floor(t/m.length*100)}}var Up=e=>u[e]*1500;function Wp(e){let t=[];for(let n of Object.keys(g)){if(e.claimedBiomes.includes(n))continue;let r=Vp(e,n);if(r.found===r.total){e.claimedBiomes.push(n);let r=Up(n);vf(e,r),t.push({biomeId:n,reward:r})}}return t}var Gp=e=>Object.values(e.index).some(e=>e.n),Kp=e.eggs,qp=e.chase;function Jp(e,t=1){if(e===0)return Math.max(4,Math.round(8*t));let n=v[e],r=Math.max(1,(n.from-35)/5);return Math.round(8*r*1.12**(2*e)*t)}var Yp=e=>Math.max(1,e.power*((s[e.food]||{}).dmg||1)),Xp=e=>Math.max(0,(e&&e.hp||1)-1)*.1;function Zp(e,t=-1){let n=t>=0?1-qp.carryPenalty*t:1;return qp.playerSpeed*Af(e)*n}function Qp(e,t,n=!1){return n?qp.playerSpeed*.45:qp.playerSpeed*(qp.guardianBase+qp.guardianPerRarity*t+qp.guardianPerZone*e)}var $p=(e,t)=>Kp.hatchSeconds[Math.min(t,Kp.hatchSeconds.length-1)]*jf(e),em=e=>h[e.s].rarity,tm=e=>e.p+e.d,nm=e=>e.n>=0,rm=(e,t)=>nm(e)&&t>=tm(e),im=(e,t)=>e.eggs.find(e=>e.u===t)||null,am=e=>e.eggs.filter(e=>!nm(e)).sort((e,t)=>em(t)-em(e)||e.u-t.u),om=e=>e.eggs.filter(nm),sm=e=>Math.max(0,e.nests-om(e).length),cm=3.4;function lm(e,t,n,r,{first:i=!1}={}){if(e.eggs.length>=Kp.maxStored)return null;let a={u:e.nextUid++,b:n,s:t.species,v:t.variant,i:t.income,q:t.oneIn,n:-1,x:0,z:0,p:0,d:0,f:+!!i};return e.eggs.push(a),a}function um(e,t,n,r,i){let a=im(e,t);if(!a)return{ok:!1,reason:`missing`};if(nm(a))return{ok:!1,reason:`planted`};if(sm(e)<=0)return{ok:!1,reason:`full`};for(let t of om(e))if(Math.hypot(t.x-n,t.z-r)<3.4)return{ok:!1,reason:`crowded`};return a.n=1,a.x=n,a.z=r,a.p=i,a.d=Math.round((a.f?Kp.firstEggSeconds:$p(e,em(a)))*1e3),{ok:!0,egg:a}}function dm(e,t,n){let r=im(e,t);return!r||!rm(r,n)?null:(e.eggs.splice(e.eggs.indexOf(r),1),{egg:r,pet:Kf(e,r.s,r.v,r.i,n),rec:Bp(e,r.s,r.v)})}function fm(e,t){let n=null;for(let r of e.eggs)nm(r)&&!rm(r,t)&&(!n||tm(r)>tm(n))&&(n=r);return n&&(n.d=Math.max(0,t-n.p)),n}var pm=e=>Math.round(Kp.nestBaseCost*Kp.nestGrowth**+(e.nests-Kp.startingNests));function mm(e){return e.nests>=Kp.maxNests?{ok:!1,reason:`max`}:yf(e,pm(e))?(e.nests++,{ok:!0}):{ok:!1,reason:`funds`}}var hm={};function gm(e){if(!hm[e]){let t=Ap(e);t.computeBoundingBox(),hm[e]=t}return hm[e]}var _m=null,vm=new H;function ym(e){let t=g[e.id];return t.find(e=>e.rarity===4)||t[t.length-1]}var bm=class{constructor(e,t,n=`high`){this.scene=e,this.fx=t,this.viewDist=n===`low`?215:300,this.trees=[],this.eggs=[],_m=_m||Sd(`stump`),v.forEach((t,n)=>{let r=Cu(n*131+7),i=Math.floor(t.renderLen/9);for(let a=0;a<i;a++){let o=t.renderStart+(a+.5+(r()-.5)*.6)/i*t.renderLen,s=r()<.5?-1:1,c=s*(11+r()*24),l=t.trees[Math.floor(r()*t.trees.length)],u=l.scale*(.88+r()*.26);if(o<48||o-t.renderStart<10||t.renderEnd-o<6)continue;let d=gm(l.model),f=new sr;f.position.set(c,0,-o);let p=new sr;f.add(p);let m=new q(d,kp[l.model]&&kp[l.model].glow?Q.vcGlow:Q.vc);m.castShadow=!0,m.scale.setScalar(u),m.rotation.y=r()*6.28,p.add(m);let h=new q(_m,Q.vc);h.scale.setScalar(1.3*u),h.visible=!1,f.add(h),f.visible=!1,e.add(f);let g=Jp(n,l.hp);this.trees.push({id:this.trees.length,bi:n,biome:t,kind:l,u:o,x:c,side:s,root:f,pivot:p,mesh:m,stump:h,hp:g,maxHp:g,state:`up`,t:0,shake:0,punch:0,egg:null,regrow:0,scale:u,height:d.boundingBox.max.y*u,radius:.9*u+.4})}}),this.guardians=v.map((t,n)=>{let r=ym(t),i=hf(r.id,0),a=gf(i,15,0,9);i.root.scale.setScalar(a);let o=Math.max(t.renderStart+14,60),s=t.renderEnd-14,c=new H(0,0,-(o+s)/2);return i.root.position.copy(c),i.root.visible=!1,e.add(i.root),{bi:n,biome:t,species:r,rig:i,scale:a,mode:`patrol`,t:0,wait:Math.random()*3,tx:c.x,tz:c.z,lo:o,hi:s,home:c,speed:0,giveUpU:0}})}nearestTree(e,t=1/0,n=e=>e.state===`up`){let r=null,i=t;for(let t of this.trees){if(!n(t)||Math.abs(-t.u-e.z)>i+6)continue;let a=Math.hypot(t.x-e.x,-t.u-e.z)-t.radius;a<i&&(i=a,r=t)}return r}treeAt(e){let t=null,n=1/0;for(let r of this.trees)if(r.state===`up`&&r.root.visible)for(let i of[.18,.5,.78]){vm.set(r.x,r.height*i,-r.u);let a=i<.3?1.6*r.scale:3.4*r.scale;if(e.distanceSqToPoint(vm)<a*a){let i=vm.distanceToSquared(e.origin);i<n&&(n=i,t=r)}}return t}hit(e,t){if(e.state!==`up`)return!1;e.hp=Math.max(0,e.hp-t),e.shake=1,e.punch=1;let n=-Math.sign(e.x)||1;return this.fx.burst({x:e.x+n*e.radius,y:1.8,z:-e.u},{count:14,colors:[`#c98d4b`,`#e8c88f`,`#8a6038`,`#ffffff`],speed:9,life:.6,size:.75,gravity:18}),this.fx.burst({x:e.x,y:e.height*.7,z:-e.u},{count:8,colors:[`#7fcf5a`,`#5fb84a`],speed:4,life:.9,size:.8,gravity:6}),e.hp>0?!1:(e.state=`falling`,e.t=0,!0)}collide(e){for(let t of this.trees){if(t.state===`falling`||t.state===`growing`||Math.abs(-t.u-e.z)>5)continue;let n=t.state===`up`?t.radius+.4:.9*t.scale,r=e.x-t.x,i=e.z+t.u,a=Math.hypot(r,i);a<n&&a>1e-4&&(e.x=t.x+r/a*n,e.z=-t.u+i/a*n)}}spawnEgg(t,n){let r=n.animal.rarity,i=Lp(r,t.biome.path),a=-Math.sign(t.x)||1,o=new H(t.x+a*(t.radius+2.4),0,-t.u+1);i.position.copy(o),i.scale.setScalar(.01),this.scene.add(i);let s={tree:t,c:n,bi:t.bi,biome:t.biome,rarity:r,group:i,home:o,state:`nest`,life:e.chop.eggLifeSeconds,grow:0,guard:this.guardians[t.bi]};return t.egg=s,this.eggs.push(s),this.fx.burst({x:o.x,y:1,z:o.z},{count:30,colors:[`#ffffff`,`#ffe14d`,t.biome.path],speed:10,life:.8,size:1}),s}eggAt(e){for(let t of this.eggs)if(t.state===`nest`&&(vm.set(t.home.x,1.4,t.home.z),e.distanceSqToPoint(vm)<6))return t;return null}nearestEgg(e,t){let n=null,r=t;for(let t of this.eggs){if(t.state!==`nest`)continue;let i=Math.hypot(t.home.x-e.x,t.home.z-e.z);i<r&&(r=i,n=t)}return n}releaseEgg(t){this.scene.remove(t.group),t.state=`gone`,t.tree.egg=null,t.tree.regrow=e.chop.treeRegrowSeconds;let n=this.eggs.indexOf(t);n>=0&&this.eggs.splice(n,1),(t.guard.mode===`chase`||t.guard.mode===`wake`)&&(t.guard.mode=`return`)}returnEggToNest(e){e.state=`nest`,e.group.position.copy(e.home),e.group.rotation.set(0,0,0),this.fx.burst({x:e.home.x,y:1,z:e.home.z},{count:18,colors:[`#ffffff`,`#ffe14d`],speed:7,life:.6,size:.8})}update(e,t,n){for(let r of this.trees){let i=Math.abs(r.u-n)<this.viewDist;if(r.root.visible=i,i||r.state!==`up`){if(r.state===`up`)r.shake>0&&(r.shake=Math.max(0,r.shake-e*3.5),r.pivot.rotation.x=Math.sin(t*46)*.07*r.shake,r.pivot.rotation.z=Math.cos(t*39)*.04*r.shake),r.punch>0&&(r.punch=Math.max(0,r.punch-e*6),r.pivot.scale.set(1+r.punch*.06,1-r.punch*.04,1+r.punch*.06));else if(r.state===`falling`){r.t+=e;let t=Math.min(1,r.t/.95);r.pivot.rotation.x=0,r.pivot.rotation.z=Math.sign(r.x)*-t*t*1.5,r.t>1.6&&(r.state=`down`,r.mesh.visible=!1,r.stump.visible=!0,r.pivot.rotation.set(0,0,0),r.pivot.scale.setScalar(1),this.fx.burst({x:r.x+Math.sign(r.x)*r.height*.5,y:1.5,z:-r.u},{count:45,colors:[`#7fcf5a`,`#c98d4b`,`#ffffff`,`#e8c88f`],speed:12,life:1,size:1.2}),this.onFelled&&this.onFelled(r))}else if(r.state===`down`)r.egg||(r.regrow-=e,r.regrow<=0&&(r.state=`growing`,r.t=0,r.mesh.visible=!0,r.stump.visible=!1,r.hp=r.maxHp));else if(r.state===`growing`){r.t+=e;let t=Math.min(1,r.t/.8);r.pivot.scale.setScalar(Math.max(.01,t*t*(3-2*t))),t>=1&&(r.state=`up`,r.pivot.scale.setScalar(1))}}}}updateEggs(e,t,n,r){for(let n=this.eggs.length-1;n>=0;n--){let r=this.eggs[n];if(r.grow<1){r.grow=Math.min(1,r.grow+e*2.5);let t=1-(1-r.grow)**3;r.group.scale.setScalar(2.6*t*(1+Math.sin(r.grow*Math.PI)*.2))}r.state===`nest`&&(r.group.userData.egg.rotation.z=Math.sin(t*3+r.tree.id)*.06,r.group.userData.glow&&(r.group.userData.glow.material.opacity=.4+.2*Math.sin(t*4)),r.life-=e,r.life<=0&&r.guard.mode!==`chase`&&r.guard.mode!==`wake`&&this.releaseEgg(r))}for(let i of this.guardians){let a=i.rig.root,o=Math.abs(-a.position.z-r)<this.viewDist+20||i.mode===`chase`;if(a.visible=o,!o)continue;let s=0;if(i.mode===`patrol`){if(i.wait-=e,i.wait<=0){i.wait=2+Math.random()*4;let e=this.eggs.filter(e=>e.guard===i&&e.state===`nest`);if(e.length&&Math.random()<.7){let t=e[Math.floor(Math.random()*e.length)];i.tx=t.home.x+(Math.random()-.5)*14,i.tz=t.home.z+(Math.random()-.5)*14}else i.tx=(Math.random()-.5)*57,i.tz=-(i.lo+Math.random()*(i.hi-i.lo))}s=this.walk(a,i.tx,i.tz,5,e)?.45:0;let t=Math.hypot(n.x-a.position.x,n.z-a.position.z);!s&&t<30&&this.face(a,n.x,n.z,e)}else i.mode===`wake`?(i.t-=e,a.position.y=Math.abs(Math.sin(i.t*9))*1.2,this.face(a,n.x,n.z,e*3),i.t<=0&&(i.mode=`chase`,a.position.y=0)):i.mode===`return`?(a.position.y=0,s=1,this.walk(a,i.home.x,i.home.z,12,e)||(i.mode=`patrol`,i.wait=1)):i.mode===`chase`&&(s=1);i.mode!==`chase`&&_f(i.rig,t,s)}}walk(e,t,n,r,i){let a=t-e.position.x,o=n-e.position.z,s=Math.hypot(a,o);if(s<.4)return!1;let c=Math.min(s,r*i);return e.position.x+=a/s*c,e.position.z+=o/s*c,this.face(e,t,n,i),!0}face(e,t,n,r){let i=Math.atan2(t-e.position.x,n-e.position.z),a=Math.atan2(Math.sin(i-e.rotation.y),Math.cos(i-e.rotation.y));e.rotation.y+=a*Math.min(1,r*7)}},xm=new H,Sm=Object.fromEntries(v.map(e=>[e.id,e.path])),Cm=class{constructor(e){this.group=e,this.eggViews=new Map,this.readySeen=new Set}sync(e){let t=new Set;for(let n of e.eggs){if(!nm(n))continue;t.add(n.u);let e=this.eggViews.get(n.u);if(!e){e=Lp(em(n),Sm[n.b]||`#c8b898`,{nest:!0}),e.scale.setScalar(1.6),e.userData.uid=n.u;let t=new Fi(new xi({map:hd(),color:`#ffe14d`,transparent:!0,opacity:0,depthWrite:!1,blending:2}));t.position.y=1,t.scale.setScalar(4),e.add(t),e.userData.ready=t,this.group.add(e),this.eggViews.set(n.u,e)}e.position.set(n.x,.15,n.z)}for(let[e,n]of this.eggViews)t.has(e)||(this.group.remove(n),this.eggViews.delete(e))}detach(e){let t=this.eggViews.get(e);return this.eggViews.delete(e),t||null}update(e,t,n){let r=[];for(let i of t.eggs){let t=this.eggViews.get(i.u);if(!t)continue;let a=rm(i,n),o=(tm(i)-n)/1e3,s=t.userData.egg;a?(s.rotation.z=Math.sin(e*9+i.u)*.22,s.position.y=.18+Math.abs(Math.sin(e*4.5+i.u))*.25,t.userData.ready.material.opacity=.5+.25*Math.sin(e*5),this.readySeen.has(i.u)||(this.readySeen.add(i.u),r.push(i.u))):(s.rotation.z=o<10?Math.sin(e*14)*.1*(1-o/10):0,s.position.y=.18,t.userData.ready.material.opacity=0)}return r}pick(e){let t=null,n=1/0;for(let r of this.eggViews.values())if(xm.set(r.position.x,1.4,r.position.z),e.distanceSqToPoint(xm)<4){let i=xm.distanceToSquared(e.origin);i<n&&(n=i,t=r.userData.uid)}return t}},wm=`#f5c9a0`,Tm=`#d8413a`,Em=`#2a2430`,Dm=`#34405e`,Om=`#5a3a22`,km=`#ffc531`,Am=`#8a5a2a`,jm=`#2a2430`;function Mm(e,t,n){let r=new q(e.build(),Q.vc);return r.castShadow=!0,n&&r.position.set(...n),t.add(r),r}var Nm=class{constructor(e){this.root=new sr,this.root.scale.setScalar(.95),e.add(this.root),this.inner=new sr,this.root.add(this.inner);let t=new Z;t.rbox(Tm,[0,3,0],[1,1,.52]),t.box(Em,[0,3.25,.5],[.98,.17,.05]),t.box(`#ffffff`,[0,3.8,.36],[.42,.2,.2]),t.box(Am,[0,2.12,0],[1.02,.14,.55]),this.body=Mm(t,this.inner);let n=new Z;n.rbox(wm,[0,.66,0],[.72,.66,.68]);for(let e of[-1,1])n.box(jm,[e*.27,.76,.68],[.1,.14,.03]),n.box(`#ffffff`,[e*.3,.81,.7],[.035,.045,.02]);n.box(jm,[0,.42,.68],[.2,.045,.03]),n.rbox(km,[0,1.36,0],[1.05,.1,1.02]),n.rbox(km,[0,1.65,0],[.66,.3,.64]),n.box(Am,[0,1.48,0],[.68,.08,.66]),this.head=Mm(n,this.inner,[0,4,0]);let r=()=>{let e=new Z;return e.rbox(Tm,[0,-.72,0],[.48,.78,.48]),e.rbox(wm,[0,-1.7,0],[.46,.3,.46]),e};this.armL=Mm(r(),this.inner,[-1.5,3.8,0]),this.armR=Mm(r(),this.inner,[1.5,3.8,0]),this.hand=new sr,this.hand.position.set(0,-2.15,.1),this.armR.add(this.hand);let i=()=>{let e=new Z;return e.rbox(Dm,[0,-.75,0],[.49,.78,.5]),e.rbox(Om,[0,-1.72,.08],[.5,.28,.58]),e};this.legL=Mm(i(),this.inner,[-.51,2,0]),this.legR=Mm(i(),this.inner,[.51,2,0]),this.state=`idle`,this.stateTime=0,this.walkT=0,this.moving=0,this.heldFood=null,this.targetYaw=Math.PI,this.yaw=Math.PI,this.walkTarget=null,this.walkDone=null,this.input={x:0,z:0},this.root.rotation.y=this.yaw}setHeldFood(e){this.heldFood&&this.hand.remove(this.heldFood),this.heldFood=e,e&&(e.scale.setScalar(.9),e.position.set(0,-.78,.12),e.rotation.set(.45,0,0),this.hand.add(e))}walkTo(e,t,n){this.walkTarget={x:e,z:t},this.walkDone=n||null}stopWalk(){this.walkTarget=null,this.walkDone=null}setState(e){this.state!==e&&(this.state=e,this.stateTime=0)}faceYaw(e){this.targetYaw=e}update(e,t,n){this.stateTime+=e;let r=0,i=0,a=this.speed||20;if(this.input.x||this.input.z)this.walkTarget=null,r=this.input.x,i=this.input.z;else if(this.walkTarget){let e=this.walkTarget.x-this.root.position.x,t=this.walkTarget.z-this.root.position.z,n=Math.hypot(e,t);if(n<.35){let e=this.walkDone;this.walkTarget=null,this.walkDone=null,e&&e()}else r=e/n,i=t/n}let o=r||i?1:0;this.moving=Su(this.moving,o,12,e),o&&(this.root.position.x+=r*a*e,this.root.position.z+=i*a*e,this.targetYaw=Math.atan2(r,i),n&&(this.root.position.x=Math.max(n.minX,Math.min(n.maxX,this.root.position.x)),this.root.position.z=Math.max(n.minZ,Math.min(n.maxZ,this.root.position.z))));let s=this.targetYaw-this.yaw;s=Math.atan2(Math.sin(s),Math.cos(s)),this.yaw+=s*Math.min(1,e*12),this.root.rotation.y=this.yaw,this.pose(e,t)}pose(e,t){let n=this.moving,r=this.stateTime;this.walkT+=e*9*Math.max(n,.05);let i=Math.sin(this.walkT),a=Math.sin(t*2.3),o=-i*.85*n+a*.02,s=i*.85*n-a*.02,c=0,l=0,u=i*.85*n,d=-i*.85*n,f=Math.abs(i)*.14*n+a*.015,p=0,m=0;if(this.state===`windup`){let e=Math.min(1,r/.25);s=-2.7*e+Math.sin(t*9)*.05,l=.12*e,o=.6*e,p=-.14*e,m=.28*e}else if(this.state===`throw`){let e=Math.min(1,r/.16),t=Math.min(1,Math.max(0,(r-.35)/.4));s=(-2.7+4.5*e)*(1-t),l=.12*(1-t),o=(.6-1.3*e)*(1-t),p=(-.14+.42*e)*(1-t),m=(.28-.7*e)*(1-t),d=-.55*e*(1-t),u=.45*e*(1-t),r>.8&&this.setState(`idle`)}else if(this.state===`chop`){var h;let e=(h=this.swing)==null?0:h,t=e<.55?e/.55:e<.72?1-(e-.55)/.17:0,n=e>=.55&&e<.72?(e-.55)/.17:e>=.72?1-(e-.72)/.28:0;s=-.35-2.6*t+.35*n,o=s*.85,l=-.08,c=.08,p=-.12*t+.28*n,m=.12*t,u=.25*n,d=-.2*n}else if(this.state===`carry`)s=o=-3.05+Math.sin(t*4)*.03,l=-.1,c=.1;else if(this.state===`cheer`)s=o=-3+Math.sin(t*12)*.2,l=.3,c=-.3,f=Math.abs(Math.sin(t*8))*.4,r>1.2&&this.setState(`idle`);else if(this.state===`train`){let e=Math.sin(t*15);u=e*1.05,d=-e*1.05,o=-e*1.1,s=e*1.1,c=.12,l=-.12,f=Math.abs(Math.cos(t*15))*.32,p=.16}this.armL.rotation.set(o,0,c),this.armR.rotation.set(s,0,l),this.legL.rotation.x=u,this.legR.rotation.x=d,this.inner.position.y=f,this.inner.rotation.x=p,this.inner.rotation.y=m,this.head.rotation.y=this.state===`idle`&&n<.1?Math.sin(t*.6)*.22:0}get position(){return this.root.position}};e.throw;var Pm=e.training,Fm=e=>Math.ceil(Pm.xpBase*e**+Pm.xpExponent),Im=e=>Math.round(Pm.powerLinear*e+Pm.powerCurveScale*e**+Pm.powerCurveExponent);function Lm(e,t){e.xp+=t;let n=0,r=Fm(e.level);for(;e.xp>=r;)e.xp-=r,e.level++,n++,r=Fm(e.level);return n&&(e.power=Im(e.level)),n}var Rm=e=>T[e.bar],zm=e=>T[e.bar+1]||null;function Bm(e){let t=zm(e);return t?yf(e,t.cost)?(e.bar++,{ok:!0,bar:t}):{ok:!1,reason:`funds`}:{ok:!1,reason:`max`}}var Vm=class{constructor(e,t){this.max=t===`low`?220:650,this.enabled=!0;let n=this.max;this.pos=new Float32Array(n*3),this.col=new Float32Array(n*3),this.size=new Float32Array(n),this.vel=new Float32Array(n*3),this.life=new Float32Array(n),this.maxLife=new Float32Array(n),this.grav=new Float32Array(n),this.baseSize=new Float32Array(n),this.cursor=0;let r=new ui;r.setAttribute(`position`,new Yr(this.pos,3)),r.setAttribute(`color`,new Yr(this.col,3)),r.setAttribute(`psize`,new Yr(this.size,1));let i=new qa({transparent:!0,depthWrite:!1,vertexShader:`attribute float psize; attribute vec3 color; varying vec3 vC;
        void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); gl_PointSize = min(64.0, psize * (340.0 / -mv.z)); gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec3 vC; void main(){ vec2 d = gl_PointCoord - .5; float r = dot(d,d); if(r>.25) discard; float a = smoothstep(.25,.12,r); gl_FragColor = vec4(vC, a);
        #include <colorspace_fragment>
        }`});this.points=new Ca(r,i),this.points.frustumCulled=!1,this.points.renderOrder=5,e.add(this.points),this._c=new K}spawn(e,t,n,r,i,a,o,s,c,l){let u=this.cursor;this.cursor=(u+1)%this.max,this.pos[u*3]=e,this.pos[u*3+1]=t,this.pos[u*3+2]=n,this.vel[u*3]=r,this.vel[u*3+1]=i,this.vel[u*3+2]=a,this.life[u]=o,this.maxLife[u]=o,this.baseSize[u]=s,this.grav[u]=l,this._c.set(c),this.col[u*3]=this._c.r,this.col[u*3+1]=this._c.g,this.col[u*3+2]=this._c.b}burst(e,{count:t=20,colors:n=[`#ffffff`],speed:r=8,life:i=.8,size:a=1,gravity:o=12,up:s=.6}={}){let c=this.enabled?t:Math.ceil(t*.35);for(let t=0;t<c;t++){let c=Math.random()*6.283,l=(Math.random()-.25)*1.5,u=r*(.4+Math.random()*.6);this.spawn(e.x,e.y,e.z,Math.cos(c)*Math.cos(l)*u,(Math.sin(l)+s)*u,Math.sin(c)*Math.cos(l)*u,i*(.6+Math.random()*.6),a*(.6+Math.random()*.7),n[t%n.length],o)}}hearts(e){this.burst(e,{count:8,colors:[`#ff6a8f`,`#ff9bb5`],speed:2.5,life:1.1,size:.9,gravity:-3,up:1})}update(e){let t=!1;for(let n=0;n<this.max;n++){if(this.life[n]<=0){this.size[n]!==0&&(this.size[n]=0,t=!0);continue}t=!0,this.life[n]-=e,this.vel[n*3+1]-=this.grav[n]*e,this.pos[n*3]+=this.vel[n*3]*e,this.pos[n*3+1]+=this.vel[n*3+1]*e,this.pos[n*3+2]+=this.vel[n*3+2]*e;let r=this.life[n]/this.maxLife[n];this.size[n]=this.baseSize[n]*Math.min(1,r*2)}if(t){let e=this.points.geometry.attributes;e.position.needsUpdate=!0,e.color.needsUpdate=!0,e.psize.needsUpdate=!0}}},Hm=Object.fromEntries(v.map(e=>[e.id,e.path])),Um=128,Wm=new Uint8Array(256);for(let e=0;e<256;e++)Wm[e]=Math.round(255*(e/255)**(1/2.2));var Gm=class{constructor(e){this.renderer=e,this.cache=new Map,this.queue=[],this.scene=new gr,this.scene.add(new xo(16777215,12632272,2));let t=new Io(16777215,2);t.position.set(3,5,6),this.scene.add(t),this.camera=new No(30,1,.1,100),this.target=new jn(Um,Um,{samples:4}),this.buf=new Uint8Array(65536),this.canvas=document.createElement(`canvas`),this.canvas.width=this.canvas.height=Um,this.ctx=this.canvas.getContext(`2d`,{willReadFrequently:!0}),this.silhouetteMat=new Hi({color:3025477})}request(e,t,n,r,i){let a=`${e}:${t}:${n}:${+!!r}`,o=this.cache.get(a);o?i(o):this.queue.push({key:a,kind:e,id:t,variant:n,silhouette:r,cb:i})}update(e=3){for(let t=0;t<e&&this.queue.length;t++){let e=this.queue.shift(),t=this.cache.get(e.key);if(t){e.cb(t);continue}let n=this.render(e);this.cache.set(e.key,n),e.cb(n)}}render(e){let t,n,r=0,i=[.65,.35,1];if(e.kind===`pet`){let i=hf(e.id,e.variant,{lite:!0});t=i.root,t.traverse(e=>{e.isSprite&&(e.visible=!1)}),r=i.height*.5+i.lift,n=i.maxDim*2.3}else e.kind===`egg`?(t=Lp(e.variant,Hm[e.id],{nest:!1}),t.traverse(e=>{e.isSprite&&(e.visible=!1)}),r=.78,n=3.8):(t=pp(e.id),t.rotation.x=-.35,n=3.3,i=[1,.25,.3]);e.silhouette&&t.traverse(e=>{e.isMesh&&(e.material=this.silhouetteMat)}),this.scene.add(t);let a=new H(...i).normalize().multiplyScalar(n);this.camera.position.set(a.x,a.y+r,a.z),this.camera.lookAt(0,r,0);let o=this.renderer,s=o.getRenderTarget(),c=new K;o.getClearColor(c);let l=o.getClearAlpha();o.setClearColor(0,0),o.setRenderTarget(this.target),o.clear(),o.render(this.scene,this.camera),o.readRenderTargetPixels(this.target,0,0,Um,Um,this.buf),o.setRenderTarget(s),o.setClearColor(c,l),this.scene.remove(t);let u=this.ctx.createImageData(Um,Um);for(let e=0;e<Um;e++){let t=(127-e)*Um*4,n=e*Um*4;for(let e=0;e<Um;e++){let r=t+e*4,i=n+e*4,a=this.buf[r+3],o=a>0&&a<255?255/a:1;u.data[i]=Wm[Math.min(255,this.buf[r]*o)],u.data[i+1]=Wm[Math.min(255,this.buf[r+1]*o)],u.data[i+2]=Wm[Math.min(255,this.buf[r+2]*o)],u.data[i+3]=a}}return this.ctx.putImageData(u,0,0),this.canvas.toDataURL(`image/png`)}},Km=e.roll;function qm(e,t,n=!1,r=0){return t.attract+Km.biomeLuckFactor*Math.log(e.luck)+(n?Km.adLuckTilt:0)+r}var Jm=e=>Math.min(Km.pityMax,e*Km.pityPerCatch);function Ym(e,t,n=!1,{extraTilt:r=0,index:i=null,lastSpecies:a=null}={}){let o=qm(e,t,n,r),s=g[e.id],l=new Map;for(let e of s)l.has(e.rarity)||l.set(e.rarity,[]),l.get(e.rarity).push(e);let u=0,d=new Map;for(let e of l.keys()){let t=c[e].weight*Math.exp(e*o);d.set(e,t),u+=t}let f=[];for(let[e,t]of l){let n=t.map(e=>{let t=1;return i&&!i[e.id]&&(t*=Km.undiscoveredBias),e.id===a&&(t*=Km.repeatPenalty),t}),r=n.reduce((e,t)=>e+t,0);t.forEach((t,i)=>f.push({animal:t,p:d.get(e)/u*(n[i]/r)}))}return f}function Xm(e,t=1){let n=(1+e.attract*Km.variantLuckPerAttract)*t,r=l.map((e,t)=>({index:t,p:t===0?0:n/e.odds}));return r[0].p=Math.max(0,1-r.slice(1).reduce((e,t)=>e+t.p,0)),r}function Zm(e,t,{luckBoost:n=!1,rand:r=Math.random,forceSpecies:i=null,extraTilt:a=0,variantMult:o=1,index:s=null,lastSpecies:c=null,minRarity:u=0}={}){let d=Ym(e,t,n,{extraTilt:a,index:s,lastSpecies:c});if(u>0){let e=d.filter(e=>e.animal.rarity>=u);if(e.length){let t=e.reduce((e,t)=>e+t.p,0);d=e.map(e=>({animal:e.animal,p:e.p/t}))}}let f=d[0];if(i)f={animal:h[i],p:1};else{let e=r();for(let t of d)if(f=t,e-=t.p,e<=0)break}let p=Xm(t,o),m=p[0];if(!i){let e=r();for(let t=p.length-1;t>=1;t--)if(e-=p[t].p,e<=0){m=p[t];break}}let g=f.animal.baseIncome*l[m.index].mult*t.value,_=i?1:Math.max(1,Math.round(1/(f.p*m.p))),v=_>=Km.superLuckyOdds?`INCREDIBLE FIND!`:_>=Km.luckyOdds?`GREAT FIND!`:``;return{species:f.animal.id,animal:f.animal,variant:m.index,income:g,oneIn:_,luckLabel:v}}var Qm=e.ads.rewards,$m=[{id:`income`,name:`Double Income`,desc:`All pets earn x2 for 5 minutes`,icon:`coin`,placement:`income_boost`,timed:`incomeUntil`,seconds:Qm.boostSeconds},{id:`cash`,name:`Cash Drop`,desc:`Instant cash from your pets`,icon:`gift`,placement:`cash_drop`,cooldown:`cashReadyAt`,cooldownSeconds:Qm.cashCooldown},{id:`lure`,name:`Golden Swing`,desc:`The next egg you find is Rare or better`,icon:`star`,placement:`golden_lure`,armed:`lure`,cooldown:`lureReadyAt`,cooldownSeconds:Qm.lureCooldown},{id:`hatch`,name:`Instant Hatch`,desc:`Your slowest egg hatches right now`,icon:`bolt`,placement:`instant_hatch`,instant:!0,cooldown:`hatchReadyAt`,cooldownSeconds:Qm.megaCooldown},{id:`luck`,name:`Luck Boost`,desc:`Rarer eggs for 5 minutes`,icon:`clover`,placement:`luck_boost`,timed:`luckUntil`,seconds:e.roll.adLuckSeconds},{id:`train`,name:`Training Boost`,desc:`Double XP for 5 minutes`,icon:`dumbbell`,placement:`training_boost`,timed:`trainUntil`,seconds:e.training.adBoostSeconds}],eh=Object.fromEntries($m.map(e=>[e.id,e])),th=e=>Math.max(Qm.cashMin,Uf(e)*Qm.cashSeconds);function nh(e,t,n){let r=eh[t],i=e.boosts;if(r.armed&&i[r.armed])return{ready:!1,reason:`armed`,secondsLeft:0};if(r.cooldown&&i[r.cooldown]>n)return{ready:!1,reason:`cooldown`,secondsLeft:(i[r.cooldown]-n)/1e3};if(r.timed){let e=Math.max(0,i[r.timed]-n)/1e3;return e+r.seconds>Qm.maxBoostSeconds?{ready:!1,reason:`capped`,secondsLeft:e}:{ready:!0,reason:e>0?`active`:``,secondsLeft:e}}return{ready:!0,reason:``,secondsLeft:0}}function rh(e,t,n){let r=eh[t];if(!r||!nh(e,t,n).ready)return null;let i=e.boosts;if(r.cooldown&&(i[r.cooldown]=n+r.cooldownSeconds*1e3),r.timed)return i[r.timed]=Math.max(i[r.timed],n)+r.seconds*1e3,{id:t};if(r.armed)return i[r.armed]=!0,{id:t};if(r.instant)return{id:t};let a=th(e);return vf(e,a),{id:t,amount:a}}function ih(e,t=new Date){let n=new Set(Ed(t).map(e=>e.id));return o.filter(t=>!t.event||n.has(t.event)||e.foods.includes(t.id))}function ah(e,t){let n=s[t];return n?e.foods.includes(t)?{ok:!1,reason:`owned`}:yf(e,n.price)?(e.foods.push(t),{ok:!0,food:n}):{ok:!1,reason:`funds`}:{ok:!1,reason:`unknown`}}function oh(e,t){return e.foods.includes(t)?(e.food=t,!0):!1}var sh=e.offline;function ch(e,t){let n=e.savedAt;if(e.savedAt=t,!Number.isFinite(n)||n<=0||!Number.isFinite(t))return{seconds:0,amount:0,popup:e.pendingOffline>0};let r=(t-n)/1e3;if(r<=0)return{seconds:0,amount:0,popup:e.pendingOffline>0};let i=Nf(e),a=Math.min(r,i),o=Uf(e)*a*sh.rate;return r<sh.minPopupSeconds?(vf(e,o),{seconds:a,amount:o,popup:e.pendingOffline>0}):(e.pendingOffline+=o,e.pendingOfflineSeconds=Math.min(i,e.pendingOfflineSeconds+a),{seconds:a,amount:o,popup:e.pendingOffline>0})}function lh(e,t=1){let n=e.pendingOffline*t;return e.pendingOffline=0,e.pendingOfflineSeconds=0,vf(e,n),n}var uh=[{id:`chop10`,stat:`chopped`,goal:10,text:`Chop down 10 trees`,reward:60},{id:`chop25`,stat:`chopped`,goal:25,text:`Chop down 25 trees`,reward:200},{id:`steal3`,stat:`stolen`,goal:3,text:`Bring 3 eggs home safely`,reward:120},{id:`forest5`,stat:`forestPlus`,goal:5,text:`Bring home 5 eggs from Whisper Forest or beyond`,reward:150},{id:`rare3`,stat:`rarePlus`,goal:3,text:`Hatch 3 Rare or better pets`,reward:250},{id:`reps30`,stat:`reps`,goal:30,text:`Train 30 reps`,reward:80},{id:`reps120`,stat:`reps`,goal:120,text:`Train 120 reps`,reward:300},{id:`hatch5`,stat:`catches`,goal:5,text:`Hatch 5 eggs`,reward:100},{id:`earn`,stat:`earned`,goal:`scaleIncome`,text:`Earn cash from your pets`,reward:200},{id:`bonus3`,stat:`bonuses`,goal:3,text:`Hit 3 training boost prompts`,reward:90}],dh=[{day:1,type:`cash`,seconds:60,min:50},{day:2,type:`cash`,seconds:120,min:120},{day:3,type:`luck`,seconds:300},{day:4,type:`cash`,seconds:300,min:400},{day:5,type:`train`,seconds:300},{day:6,type:`cash`,seconds:600,min:1e3},{day:7,type:`cash`,seconds:1800,min:5e3}],fh=[{id:`firstchop`,name:`Timber!`,desc:`Chop down your first tree`,stat:`chopped`,goal:1,reward:10},{id:`firstcatch`,name:`First Hatch`,desc:`Hatch your first egg`,stat:`catches`,goal:1,reward:20},{id:`catch100`,name:`Egg Collector`,desc:`Hatch 100 eggs`,stat:`catches`,goal:100,reward:5e3},{id:`catch1000`,name:`Hatchery Hero`,desc:`Hatch 1,000 eggs`,stat:`catches`,goal:1e3,reward:1e6},{id:`chop100`,name:`Lumberjack`,desc:`Chop down 100 trees`,stat:`chopped`,goal:100,reward:4e3},{id:`steal1`,name:`Clean Getaway`,desc:`Bring an egg home safely`,stat:`stolen`,goal:1,reward:25},{id:`steal100`,name:`Egg Bandit`,desc:`Bring 100 eggs home safely`,stat:`stolen`,goal:100,reward:2e4},{id:`caught10`,name:`Close Call`,desc:`Get caught by guardians 10 times`,stat:`caught`,goal:10,reward:500},{id:`legend`,name:`First Legendary`,desc:`Hatch a Legendary pet`,stat:`legendaries`,goal:1,reward:2500},{id:`mythic`,name:`Myth Maker`,desc:`Hatch a Mythic pet`,stat:`mythics`,goal:1,reward:25e3},{id:`cosmicpet`,name:`Star Touched`,desc:`Hatch a Cosmic pet`,stat:`cosmics`,goal:1,reward:1e8},{id:`million`,name:`First Million`,desc:`Earn $1M in total`,stat:`lifetime`,goal:1e6,reward:5e4},{id:`billion`,name:`Billionaire Keeper`,desc:`Earn $1B in total`,stat:`lifetime`,goal:1e9,reward:5e7},{id:`reps1000`,name:`Iron Grip`,desc:`Train 1,000 reps`,stat:`reps`,goal:1e3,reward:3e3},{id:`forest`,name:`Into the Woods`,desc:`Reach Whisper Forest`,biome:`forest`,reward:100},{id:`desert`,name:`Dune Walker`,desc:`Reach the Dune Sea`,biome:`desert`,reward:2e3},{id:`arctic`,name:`Arctic Explorer`,desc:`Reach Frostglass Tundra`,biome:`arctic`,reward:1e6},{id:`cosmicworld`,name:`Among the Stars`,desc:`Reach Starfall Expanse`,biome:`cosmic`,reward:0xe8d4a51000},{id:`edenworld`,name:`Edge of Everything`,desc:`Reach The Last Garden`,biome:`eden`,reward:0xde0b6b3a7640000},{id:`trillion`,name:`Trillionaire Keeper`,desc:`Earn $1T in total`,stat:`lifetime`,goal:0xe8d4a51000,reward:5e10},{id:`catch10000`,name:`Living Legend`,desc:`Hatch 10,000 eggs`,stat:`catches`,goal:1e4,reward:1e9},{id:`reps10000`,name:`Unbreakable`,desc:`Train 10,000 reps`,stat:`reps`,goal:1e4,reward:1e7},{id:`reborn`,name:`Born Again`,desc:`Rebirth for the first time`,stat:`rebirths`,goal:1,reward:1e3},{id:`reborn10`,name:`Old Soul`,desc:`Rebirth 10 times`,stat:`rebirths`,goal:10,reward:1e6}];function ph(e,t){let n=Tu(t);if(e.quests.day===n&&e.quests.list.length)return!1;let r=Cu(n),i=[...uh],a=[],o=Math.max(1,Uf(e));for(;a.length<3&&i.length;){let e=i.splice(Math.floor(r()*i.length),1)[0],t=e.goal===`scaleIncome`?Math.max(500,Math.round(o*300)):e.goal,n=e.goal===`scaleIncome`?`Earn $${mh(t)} from your pets`:e.text;a.push({id:e.id,stat:e.stat,goal:t,text:n,reward:Math.max(e.reward,Math.round(o*e.reward*.15)),progress:0,claimed:!1})}return e.quests={day:n,list:a},!0}var mh=e=>e>=1e6?(e/1e6).toFixed(1)+`M`:e>=1e3?(e/1e3).toFixed(1)+`K`:String(e);function hh(e,t,n=1){for(let r of e.quests.list)r.stat===t&&!r.claimed&&(r.progress=Math.min(r.goal,r.progress+n))}function gh(e,t){let n=e.quests.list.find(e=>e.id===t);return!n||n.claimed||n.progress<n.goal?0:(n.claimed=!0,vf(e,n.reward),n.reward)}var _h=e=>e.quests.list.some(e=>!e.claimed&&e.progress>=e.goal);function vh(e,t){let n=Tu(t),r=e.daily.lastDay!==n,i=Tu(t-864e5),a=e.daily.lastDay===i||e.daily.lastDay===n?e.daily.streak:0,o=(r?a:Math.max(0,a-1))%dh.length;return{available:r,streak:a,dayIndex:o,reward:dh[o]}}function yh(e,t,n=1){let r=vh(e,t);if(!r.available)return null;e.daily.lastDay=Tu(t),e.daily.streak=r.streak+1;let i=r.reward;if(i.type===`cash`){let t=Math.max(i.min,Uf(e)*i.seconds)*n;return vf(e,t),{type:`cash`,amount:t}}return i.type===`luck`&&(e.boosts.luckUntil=Math.max(e.boosts.luckUntil,t)+i.seconds*n*1e3),i.type===`train`&&(e.boosts.trainUntil=Math.max(e.boosts.trainUntil,t)+i.seconds*n*1e3),{type:i.type,seconds:i.seconds}}function bh(e){let t=[];for(let n of fh)e.achievements.includes(n.id)||(n.biome?e.biomes.includes(n.biome):(n.stat===`lifetime`?e.lifetime:n.stat===`rebirths`?e.rebirths:e.stats[n.stat]||0)>=n.goal)&&(e.achievements.push(n.id),vf(e,n.reward),t.push(n));return t}var xh=(e,t)=>e>t;e.roll.adLuckSeconds,e.training.adBoostSeconds;var Sh={minX:-106,maxX:60,maxZ:66},Ch=10,wh=[{colors:[`#ffffff`,`#dfe5ee`],count:16},{colors:[`#7cf07c`,`#ffffff`],count:24},{colors:[`#4fa8ff`,`#bfe0ff`],count:34,beam:`#4fa8ff`},{colors:[`#b46cff`,`#e6c9ff`],count:50,beam:`#b46cff`},{colors:[`#ffc531`,`#fff0a8`,`#ffffff`],count:80,beam:`#ffc531`,shake:.35},{colors:[`#ff4b4b`,`#ffc531`,`#ffffff`],count:110,beam:`#ff4b4b`,shake:.6},{colors:[`#ff5a5a`,`#ffb23f`,`#ffe14d`,`#62d66a`,`#4fa8ff`,`#b46cff`],count:150,beam:`rainbow`,shake:.85}],Th=e=>c[e].color===`rainbow`?`#ff9bf0`:c[e].color,Eh=class extends wu{constructor({canvas:e,state:t,platform:n,save:r,ads:i,audio:a,quality:o}){super(),this.state=t,this.platform=n,this.save=r,this.ads=i,this.audio=a,this.quality=o,this.mode=`hub`,this.paused=!1,this.pauseReasons=new Set,this.time=0,this.modalOpen=!1,this.keys={},this.joystick={forward:0,right:0},this.income=Uf(t),this.tutorialReps=0,this.moneyTick=0,this.renderer=new mu({canvas:e,antialias:o!==`low`,powerPreference:`high-performance`}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,o===`low`?1.25:2)),this.renderer.shadowMap.enabled=o!==`low`,this.renderer.shadowMap.type=1,this.renderer.outputColorSpace=It,this.scene=new gr,this.cam=new Qu(innerWidth/innerHeight),this.world=new wd(this.scene,o),this.fx=new Vm(this.scene,o),this.fx.enabled=t.settings.effects,this.hub=new Rd(this.scene),this.hub.setBar(t.bar),this.baseView=new op(this.hub,this.fx,o),this.baseView.sync(t,!1),this.npcs=new bp(this.hub,this.fx,o),this.hatchery=new Cm(this.hub.group),this.hatchery.sync(t),this.forest=new bm(this.scene,this.fx,o),this.forest.onFelled=e=>this.onTreeFelled(e),this.player=new Nm(this.scene),this.player.position.set(0,0,8),this.icons=new Gm(this.renderer),this.raycaster=new es,this.focusV=new H,this.heldFoodId=null,this.equipHeldFood(),this.buildBeam(),this.buildPlaceMarker(),this.heldUid=null,this.heldEggUid=null,this.heldRig=null,this.hover=null,this.chopTarget=null,this.buildTargetRing(),this.grabTarget=null,this.swingT=0,this.carry=null,this.stun=0,this.spaceHeld=!1,this.zoneIdx=-1,this.onResize()}attachUI(e){this.ui=e,ph(this.state,this.platform.now()),e.refresh()}buildBeam(){let e=new ja(1,1.6,60,18,1,!0);this.beamMat=new Hi({transparent:!0,opacity:0,side:2,depthWrite:!1,blending:2,fog:!1}),this.beam=new q(e,this.beamMat),this.beam.visible=!1,this.scene.add(this.beam)}buildPlaceMarker(){this.placeRing=new q(new Ia(2.6,3.2,32),new Hi({color:16777215,transparent:!0,opacity:.95,depthWrite:!1,fog:!1})),this.placeRing.rotation.x=-Math.PI/2,this.placeRing.visible=!1,this.scene.add(this.placeRing)}buildTargetRing(){this.targetRing=new q(new Ia(.82,1,40),new Hi({color:16752684,transparent:!0,opacity:.9,depthWrite:!1,fog:!1})),this.targetRing.rotation.x=-Math.PI/2,this.targetRing.visible=!1,this.scene.add(this.targetRing)}updateTargetRing(){let t=this.mode===`hub`&&!this.carry&&!this.heldRig?this.chopTarget||this.forest.nearestTree(this.player.position,e.chop.reach+4):null,n=this.targetRing;if(n.visible=!!(t&&t.state===`up`),!n.visible)return;let r=this.player.state===`chop`;n.position.set(t.x,.12,-t.u),n.scale.setScalar((t.radius+1.4)*(1+Math.sin(this.time*(r?12:5))*.05)),n.material.color.set(r?`#ff5a1f`:`#ffc531`),n.material.opacity=r?1:.75}holdEgg(e){if(this.mode!==`hub`||this.carry)return;if(this.heldEggUid===e){this.releaseHold(),this.audio.play(`click`),this.ui.refresh();return}this.releaseHold();let t=im(this.state,e);if(!t||nm(t))return;if(sm(this.state)<=0){this.audio.play(`deny`),this.ui.toast(`All your nests are in use. Hatch an egg, or buy more nests at Upgrades.`,`bad`);return}this.chopTarget=null,this.heldEggUid=e;let n=Lp(em(t),Sm[t.b],{nest:!0});this.heldRig={root:n,egg:!0},this.heldBig=1.6,this.heldSmall=1.1,n.scale.setScalar(this.heldSmall),this.scene.add(n),this.player.heldFood.visible=!1,this.player.setState(`carry`),this.hub.setPlotActive(!0),this.audio.play(`appear`);let r=Md(this.state.capacity),i=this.hub.stations.pets.stand;this.player.walkTo(i[0],i[1],()=>this.player.faceYaw(-Math.PI/2)),this.cam.glideTo(1.05,.72,34+(r.maxX-r.minX)*.35),this.ui.refresh()}plantAllEggs(){let e=this.state,t=this.platform.now(),n=Md(e.capacity),r=e.placed.map(t=>e.spots[t]).filter(Boolean),i=0;for(let a of am(e)){if(sm(e)<=0)break;let o=!1;for(let s=n.maxZ-4;s>n.minZ+3&&!o;s-=cm+.6)for(let c=n.maxX-4;c>n.minX+3&&!o;c-=cm+.6)om(e).some(e=>Math.hypot(e.x-c,e.z-s)<3.4)||r.some(e=>Math.hypot(e[0]-c,e[1]-s)<3)||um(e,a.u,c,s,t).ok&&(i++,o=!0)}i?(this.audio.play(`capture`),this.hatchery.sync(e),this.ui.toast(`Planted ${i} egg${i===1?``:`s`} in your pen!`,`good`),this.save.soon(),this.afterChange()):(this.audio.play(`deny`),this.ui.toast(sm(e)<=0?`All your nests are in use`:`No eggs waiting to be planted`,`info`))}plantHeldEgg(e,t){let n=this.heldEggUid,r=um(this.state,n,e,t,this.platform.now());return r.ok?(this.releaseHold(),this.player.stopWalk(),this.audio.play(`capture`),this.fx.burst({x:e,y:1,z:t},{count:24,colors:[`#ffe14d`,`#ffffff`,`#c98d4b`],speed:8,life:.7,size:.8}),this.hatchery.sync(this.state),this.ui.toast(`Egg planted! It hatches in ${yu(r.egg.d/1e3)}`,`good`),this.save.soon(),this.afterChange(),!0):(this.audio.play(`deny`),r.reason===`full`&&this.ui.toast(`All your nests are in use. Hatch an egg, or buy more nests at Upgrades.`,`bad`),r.reason===`crowded`&&this.ui.toast(`Too close to another egg. Pick a different spot.`,`info`),!1)}holdPet(e){if(this.mode!==`hub`||this.carry)return;if(this.heldUid===e){this.releaseHold(),this.audio.play(`click`),this.ui.refresh();return}this.releaseHold();let t=Bf(this.state,e);if(!t||Vf(this.state,e))return;this.chopTarget=null,this.heldUid=e;let n=hf(t.s,t.v,{lite:!0});this.heldRig=n,this.heldBig=gf(n,8,t.v,3.4),this.heldSmall=gf(n,3,t.v,1.1),n.root.scale.setScalar(this.heldSmall),this.scene.add(n.root),this.player.heldFood.visible=!1,this.player.setState(`carry`),this.hub.setPlotActive(!0),this.audio.play(`appear`);let r=Md(this.state.capacity),i=this.hub.stations.pets.stand;this.player.walkTo(i[0],i[1],()=>this.player.faceYaw(-Math.PI/2)),this.cam.glideTo(1.05,.72,34+(r.maxX-r.minX)*.35),this.ui.refresh()}releaseHold(){this.heldEggUid=null,this.heldRig?(this.scene.remove(this.heldRig.root),this.heldRig=null,this.heldUid=null,this.hover=null,this.placeRing.visible=!1,this.hub.setPlotActive(!1),this.player.state===`carry`&&!this.carry&&this.player.setState(`idle`),this.player.heldFood&&!this.carry&&(this.player.heldFood.visible=!0)):this.heldUid=null}pointOnGround(e,t){this.raycaster.setFromCamera({x:e,y:t},this.cam.camera);let n=this.raycaster.ray;if(n.direction.y>=0)return null;let r=(0-n.origin.y)/n.direction.y,i=n.origin.x+n.direction.x*r,a=n.origin.z+n.direction.z*r,o=Md(this.state.capacity),s=2.5;return{x:i,z:a,inside:i>o.minX+s&&i<o.maxX-s&&a>o.minZ+s&&a<o.maxZ-s}}hoverAt(e,t){this.hover=!this.heldRig||!this.canAct()?null:this.pointOnGround(e,t)}placeHeldAt(e,t){if(this.heldEggUid!==null)return this.plantHeldEgg(e,t);let n=this.heldUid,r=Jf(this.state,n,e,t);return r.ok?(this.releaseHold(),this.player.stopWalk(),this.audio.play(`capture`),this.baseView.sync(this.state),this.state.tutorial===O.PLACE&&(this.state.tutorial=O.TRAIN),this.afterChange(),!0):(this.audio.play(`deny`),r.reason===`full`&&this.ui.toast(`Your pen is full. Expand it or pick up a pet first.`,`bad`),!1)}pickUpPet(e){Xf(this.state,e)&&(this.baseView.sync(this.state),this.afterChange(),this.holdPet(e))}updateHeld(e){let t=this.heldRig;if(!t)return;let n=this.hover,r=n&&n.inside,i=r?this.heldBig:this.heldSmall,a=Su(t.root.scale.x,i,12,e);if(t.root.scale.setScalar(a),r)t.root.position.set(n.x,.35+Math.abs(Math.sin(this.time*5))*.5,n.z);else{let e=this.player.position;t.root.position.set(e.x,e.y+5.5+Math.sin(this.time*4)*.12,e.z)}t.root.rotation.y+=e*.9,t.egg||_f(t,this.time,0),this.placeRing.visible=!!n,n&&(this.placeRing.position.set(n.x,.32,n.z),this.placeRing.material.color.set(n.inside?`#ffffff`:`#ff5a4f`),this.placeRing.scale.setScalar(1+Math.sin(this.time*7)*.05)),this.hub.updatePlotGlow(this.time)}equipHeldFood(){this.heldFoodId!==this.state.food&&(this.heldFoodId=this.state.food,this.player.setHeldFood(pp(this.state.food)),(this.carry||this.heldRig)&&(this.player.heldFood.visible=!1))}onResize(){this.renderer.setSize(innerWidth,innerHeight,!1),this.cam.setAspect(innerWidth/innerHeight)}setPause(e,t){var n;t?this.pauseReasons.add(e):this.pauseReasons.delete(e);let r=this.pauseReasons.size>0;r!==this.paused&&(this.paused=r,this.audio.setPaused(r),document.body.classList.toggle(`game-paused`,r),(n=this.resetJoystick)==null||n.call(this),this.keys={},this.spaceHeld=!1,this.player.input.x=this.player.input.z=0,r?this.save.flushNow():ch(this.state,this.platform.now()).popup&&this.ui&&this.ui.showOffline())}liveIncome(){return xh(this.state.boosts.incomeUntil,this.platform.now())?this.income*2:this.income}afterChange(e=!0){this.heldUid!==null&&(!Bf(this.state,this.heldUid)||Vf(this.state,this.heldUid))&&this.releaseHold(),this.income=Uf(this.state),this.state.power=Im(this.state.level);for(let e of bh(this.state))this.onAchievement(e);let t=zm(this.state);this.hub.setTrainSign(t?`UPGRADE  ${X(t.cost)}`:`MAX TREADMILL!`,!!t&&this.state.money>=t.cost),e&&this.save.soon(),this.ui&&this.ui.refresh()}onAchievement(e){this.audio.play(`achievement`),this.ui&&this.ui.toast(`Achievement: ${e.name}  +${X(e.reward)}`,`gold`),this.platform.send(`player_got_achievement`)}track(e,t=1){this.state.stats[e]!==void 0&&(this.state.stats[e]+=t),hh(this.state,e,t)}buyFood(e){let t=ah(this.state,e);return t.ok?(this.audio.play(`buy`),this.ui.toast(`Bought the ${t.food.name}!`,`good`),oh(this.state,e),this.equipHeldFood(),this.state.tutorial===O.SHOP&&(this.state.tutorial=O.DONE,this.ui.toast(`You are all set. Happy chopping!`,`good`)),this.afterChange(),!0):(this.audio.play(`deny`),t.reason===`funds`&&this.ui.toast(`Not enough money yet`,`bad`),!1)}equipFood(e){oh(this.state,e)&&(this.audio.play(`click`),this.equipHeldFood(),this.afterChange())}placePet(e){let t=qf(this.state,e);t.ok?(this.audio.play(`capture`),this.baseView.sync(this.state),this.state.tutorial===O.PLACE&&(this.state.tutorial=O.TRAIN),this.afterChange()):(this.audio.play(`deny`),t.reason===`full`&&this.ui.toast(`Pen is full. Expand it or remove a pet.`,`bad`))}removePet(e){Xf(this.state,e)&&(this.audio.play(`click`),this.baseView.sync(this.state),this.afterChange())}sellPet(e){let t=Zf(this.state,e);t>0&&(this.audio.play(`money`),this.ui.toast(`Sold for ${X(t)}`,`good`),this.baseView.sync(this.state),this.afterChange())}sellWeak(){let e=np(this.state);e.count?(this.audio.play(`money`),this.ui.toast(`Sold ${e.count} pets for ${X(e.total)}`,`good`),this.afterChange()):this.ui.toast(`No spare Common or Uncommon pets to sell`,`info`)}equipBest(){let e=Qf(this.state);e.changed?(this.audio.play(`buy`),this.ui.toast(`Best pets placed! +${X(e.gain)}/s`,`good`),this.baseView.sync(this.state),this.state.tutorial===O.PLACE&&(this.state.tutorial=O.TRAIN),this.afterChange()):(this.audio.play(`click`),this.ui.toast(`Your best pets are already placed!`,`info`))}expandBase(){let e=ep(this.state);e.ok?(this.audio.play(`expand`),this.ui.toast(`Pen expanded to ${this.state.capacity} pets!`,`good`),this.baseView.sync(this.state,!1),this.afterChange()):(this.audio.play(`deny`),e.reason===`funds`&&this.ui.toast(`Not enough money yet`,`bad`))}buyNest(){let e=mm(this.state,this.platform.now());e.ok?(this.audio.play(`expand`),this.ui.toast(`New nest built! ${this.state.nests} nests`,`good`),this.hatchery.sync(this.state),this.afterChange()):(this.audio.play(`deny`),e.reason===`funds`&&this.ui.toast(`Not enough money yet`,`bad`))}buyBar(){let e=Bm(this.state);e.ok?(this.audio.play(`buy`),this.hub.setBar(this.state.bar),this.fx.burst({x:16,y:8,z:-9},{count:30,colors:[e.bar.color,`#ffffff`],speed:8,size:.8}),this.ui.toast(`${e.bar.name} installed: ${e.bar.xp} XP per rep!`,`good`),this.afterChange()):(this.audio.play(`deny`),e.reason===`funds`&&this.ui.toast(`Not enough money yet`,`bad`))}buyUpgrade(e){let t=Cf(this.state,e);t.ok?(this.audio.play(`buy`),this.afterChange()):(this.audio.play(`deny`),t.reason===`funds`&&this.ui.toast(`Not enough money yet`,`bad`))}doRebirth(){if(!If(this.state)||this.carry)return;let e=Rf(this.state);e.ok&&(this.releaseHold(),this.chopTarget=null,this.heldFoodId=null,this.equipHeldFood(),this.hub.setBar(0),this.hatchery.sync(this.state),this.baseView.sync(this.state,!1),this.player.position.set(0,0,8),this.audio.play(`mythic`),this.ui.closeModal(),this.ui.banner(`REBORN!`,`+${e.gain} stars. Everything earns more now.`,`#ffe14d`,2.6),this.ui.flash(`#fff6c8`,.9),this.fx.burst({x:0,y:4,z:8},{count:120,colors:[`#ffe14d`,`#ffffff`,`#ff9bf0`,`#7fe8ff`],speed:18,life:1.5,size:1.1,gravity:8}),this.save.flushNow(),this.afterChange())}claimQuest(e){let t=gh(this.state,e);t&&(this.audio.play(`buy`),this.ui.toast(`Quest reward +${X(t)}`,`good`),this.afterChange())}claimDaily(e=1){let t=yh(this.state,this.platform.now(),e);t&&(this.audio.play(`achievement`),t.type===`cash`?this.ui.toast(`Daily gift: ${X(t.amount)}!`,`gold`):this.ui.toast(t.type===`luck`?`Daily gift: Luck boost active!`:`Daily gift: Training boost active!`,`gold`),this.afterChange())}async watchReward(e){let t=eh[e],n=this.platform.now();if(!t||!nh(this.state,e,n).ready)return!1;if(t.instant&&!this.state.eggs.some(e=>nm(e)&&!rm(e,n)))return this.ui.toast(`No eggs are incubating right now`,`info`),!1;if(!await this.ads.showRewarded(t.placement))return this.ui.toast(`No reward this time. The ad did not finish.`,`info`),!1;let r=rh(this.state,e,this.platform.now());return r?(t.instant&&fm(this.state,this.platform.now()),this.audio.play(`achievement`),this.ui.toast(r.amount?`Cash Drop: +${X(r.amount)}`:t.instant?`An egg is ready to hatch!`:`${t.name} active!`,`gold`),r.amount&&this.ui.floatMoney(r.amount),this.afterChange(),!0):!1}async claimDailyDoubled(){await this.ads.showRewarded(`double_daily`)?this.claimDaily(2):this.ui.toast(`No reward this time. The ad did not finish.`,`info`)}collectOffline(e=1){let t=lh(this.state,e);return this.audio.play(`buy`),t>0&&this.ui.floatMoney(t),this.afterChange(),t}canAct(){return this.mode===`hub`&&!this.modalOpen&&!this.paused}playerU(){return-this.player.position.z}atHome(){return this.playerU()<24}activateStation(e){if(!this.canAct())return;if(this.carry){this.ui.toast(`Get the egg home first!`,`info`);return}if(e===`train`)return this.startTraining();let t=this.hub.stations[e],n=this.player.position;this.chopTarget=null,Math.hypot(n.x-t.stand[0],n.z-t.stand[1])<t.radius?this.openStation(t):this.player.walkTo(t.stand[0],t.stand[1])}openStation(e){this.player.stopWalk(),this.player.faceYaw(e.faceYaw),this.audio.play(`click`),this.ui.open(e.key)}updateStations(){if(this.mode!==`hub`||this.carry)return;let e=this.player.position;for(let t of[`shop`,`upgrades`,`train`]){let n=this.hub.stations[t],r=Math.hypot(e.x-n.stand[0],e.z-n.stand[1]);if(r>n.radius+.6)n.armed=!0;else if(r<n.radius&&n.armed&&this.canAct()&&!this.heldRig){n.armed=!1,t===`train`?this.startTraining():this.openStation(n);return}}}worldTap(e,t){if(!this.canAct())return;if(this.ui.hud.hidePetCard(),this.heldRig){let n=this.pointOnGround(e,t);n&&n.inside?this.placeHeldAt(n.x,n.z):(this.audio.play(`deny`),this.ui.toast(this.heldEggUid===null?`Tap inside your pen to place your pet`:`Tap inside your pen to plant the egg`,`info`));return}this.raycaster.setFromCamera({x:e,y:t},this.cam.camera);let n=this.raycaster.ray;if(!this.carry){let e=this.hub.group.visible?this.hatchery.pick(n):null;if(e!==null){this.tapNestEgg(e);return}let t=this.forest.eggAt(n);if(t){this.audio.play(`click`),this.goGrab(t);return}let r=this.forest.treeAt(n);if(r){this.audio.play(`click`),this.setChopTarget(r);return}let i=this.baseView.pick(n);if(i){this.audio.play(`click`),this.ui.hud.showPetCard(i.pet);return}let a=null,o=1/0;for(let e of this.hub.clickTargets()){let t=this.raycaster.intersectObject(e.hit,!1);t.length&&t[0].distance<o&&(a=e,o=t[0].distance)}if(a)return this.audio.play(`click`),this.activateStation(a.key)}if(n.direction.y>=0)return;let r=(0-n.origin.y)/n.direction.y,i=n.origin.x+n.direction.x*r,a=n.origin.z+n.direction.z*r;this.chopTarget=null,this.grabTarget=null,this.player.walkTo(i,a),this.fx.burst({x:i,y:.3,z:a},{count:6,colors:[`#ffffff`],speed:2.5,life:.4,size:.6,gravity:2})}tapNestEgg(e){let t=im(this.state,e);if(!t)return;let n=this.platform.now();rm(t,n)?this.startHatch(e):(this.audio.play(`click`),this.ui.toast(`This egg hatches in ${yu((tm(t)-n)/1e3)}`,`info`))}setChopTarget(e){!this.carry&&e&&e.state===`up`&&(this.releaseHold(),this.grabTarget=null,this.chopTarget=e,this.swingT=0)}action(){if(!this.canAct()||this.carry||this.stun>0)return;this.audio.play(`click`);let e=this.player.position,t=this.forest.nearestEgg(e,9);if(t){this.goGrab(t);return}let n=this.readyEgg();if(n&&this.atHome()){this.startHatch(n.u);return}let r=this.forest.nearestTree(e,18);if(r){this.setChopTarget(r);return}let i=this.forest.nearestTree(e,1/0);i&&this.setChopTarget(i)}actionLabel(){if(this.carry)return`RUN!`;let e=this.player.position;return this.forest.nearestEgg(e,9)?`STEAL`:this.readyEgg()&&this.atHome()?`HATCH`:`CHOP`}readyEgg(){let e=this.platform.now(),t=null;for(let n of this.state.eggs)rm(n,e)&&(!t||em(n)>em(t))&&(t=n);return t}interact(){if(!this.canAct()||this.carry)return;let e=this.player.position,t=this.forest.nearestEgg(e,9);if(t){this.goGrab(t);return}let n=this.readyEgg();n&&this.atHome()&&this.startHatch(n.u)}updateChop(t){let n=this.player;if(this.carry||this.stun>0||!this.canAct()||this.heldRig){n.state===`chop`&&n.setState(`idle`);return}if(!this.chopTarget&&this.spaceHeld){let t=this.forest.nearestTree(n.position,e.chop.reach+3);t&&this.setChopTarget(t)}let r=this.chopTarget;if(r&&r.state!==`up`&&(this.chopTarget=null),!this.chopTarget){n.state===`chop`&&n.setState(`idle`);return}let i=r.x-n.position.x,a=-r.u-n.position.z;if(Math.hypot(i,a)-r.radius>e.chop.reach){n.state===`chop`&&n.setState(`idle`),n.walkTarget||n.walkTo(r.x-r.side*(r.radius+1.6),-r.u+1.2);return}n.stopWalk(),n.faceYaw(Math.atan2(i,a)),n.setState(`chop`);let o=this.swingT;this.swingT+=t/e.chop.swingSeconds,n.swing=this.swingT%1,(o%1<.55&&this.swingT%1>=.55||this.swingT-o>=1)&&this.chopHit(r)}chopHit(e){let t=Yp(this.state),n=this.forest.hit(e,t);this.audio.play(`bounce`),this.cam.shake(.06),this.ui.floatAt(new H(e.x,e.height*.45,-e.u),`-${gu(t)}`,`dmg`),n&&(this.audio.play(`impact`),this.cam.shake(.35),this.ui.banner(`TIMBER!`,`The ${e.kind.name} is coming down...`,`#ffc531`,1.2),this.track(`chopped`),this.chopTarget=null,this.player.setState(`idle`),this.afterChange(!1))}onTreeFelled(e){let t=this.state,n=this.platform.now(),r=t.tutorial===O.THROW&&!t.pets.length&&!t.eggs.length&&!this.firstEggOut,i=Zm(e.biome,s[t.food],{luckBoost:xh(t.boosts.luckUntil,n),forceSpecies:r?_[Math.floor(Math.random()*_.length)]:null,extraTilt:Df(t)+Jm(t.sinceRare)+Xp(e.kind),variantMult:Of(t),index:t.index,lastSpecies:t.lastSpecies,minRarity:!r&&t.boosts.lure?2:0});r||(t.boosts.lure=!1),t.sinceRare=i.animal.rarity>=2?0:t.sinceRare+1,t.lastSpecies=i.species;let a=this.forest.spawnEgg(e,i);a.first=r,r&&(this.firstEggOut=!0),this.audio.play(i.animal.rarity>=4?`rare`:`appear`);let o=c[i.animal.rarity];i.animal.rarity>=2&&this.ui.banner(`${o.name.toUpperCase()} EGG!`,`Guarded by a ${a.guard.species.name}`,Th(i.animal.rarity),1.5),this.save.soon()}goGrab(e){if(this.carry)return;this.chopTarget=null;let t=this.player.position;Math.hypot(e.home.x-t.x,e.home.z-t.z)<3.6?this.grab(e):(this.grabTarget=e,this.player.walkTo(e.home.x,e.home.z+.5))}grab(t){if(t.state!==`nest`||this.carry)return;this.releaseHold(),this.grabTarget=null,this.player.stopWalk(),t.state=`carried`,this.carry=t;let n=t.guard;n.mode=`wake`,n.t=e.chase.wakeSeconds,n.speed=Qp(t.bi,t.rarity,t.first),n.giveUpU=t.bi===0?24:Math.max(24,t.biome.renderStart-e.chase.giveUpBehindZone),this.player.setState(`carry`),this.player.heldFood.visible=!1,this.audio.play(`appear`),this.audio.play(`tease`),this.cam.shake(.3),document.body.classList.add(`chasing`),this.ui.banner(`RUN!`,`The ${n.species.name} wants its egg back!`,`#ff6a4f`,1.4)}updateCarry(t){let n=this.carry;if(!n)return;let r=this.player.position;if(n.group.position.set(r.x,r.y+6.2+Math.sin(this.time*7)*.12,r.z),n.group.rotation.y+=t*1.5,this.atHome()){this.deliver();return}let i=n.guard;if(i.mode!==`chase`||this.modalOpen)return;let a=i.rig.root,o=r.x-a.position.x,s=r.z-a.position.z,c=Math.hypot(o,s);if(this.playerU()<i.giveUpU){i.mode=`return`,this.audio.play(`bonus`),this.ui.toast(`The ${i.species.name} gave up the chase!`,`good`);return}let l=Math.min(c,i.speed*t);a.position.x+=o/c*l,a.position.z+=s/c*l,a.rotation.y=Math.atan2(o,s),_f(i.rig,this.time,1),c<e.chase.catchRadius+i.rig.maxDim*i.scale*.12&&this.caught(n,o/c,s/c)}caught(t,n,r){let i=t.guard;this.carry=null,document.body.classList.remove(`chasing`),this.forest.returnEggToNest(t),i.mode=`return`,this.stun=e.chase.stunSeconds,this.player.stopWalk(),this.player.setState(`idle`),this.player.heldFood.visible=!0,this.player.position.x+=n*4,this.player.position.z+=r*4,this.track(`caught`),this.audio.play(`deny`),this.audio.play(`teaseFail`),this.cam.shake(.6),this.ui.flash(`#ff4b4b`,.45),this.ui.banner(`CAUGHT!`,`The ${i.species.name} took its egg back`,`#ff6a4f`,1.4),this.afterChange(!1)}deliver(){let e=this.carry;this.carry=null,document.body.classList.remove(`chasing`);let t=this.state,n=this.platform.now(),r=lm(t,e.c,e.biome.id,n,{first:!!e.first});this.forest.releaseEgg(e),this.player.setState(`idle`),this.player.heldFood.visible=!0,r?(this.track(`stolen`),e.bi>=1&&this.track(`forestPlus`),this.audio.play(`capture`),this.audio.play(`money`),this.ui.banner(`EGG SECURED!`,`Tap it in your hotbar, then plant it in your pen`,Th(e.rarity),1.8),this.ui.hud.newEggUid=r.u,this.fx.burst({x:this.player.position.x,y:6,z:this.player.position.z},{count:40,colors:[`#ffe14d`,`#ffffff`,Th(e.rarity)],speed:12,size:1}),this.hatchery.sync(t),this.save.flushNow(),this.afterChange()):(this.audio.play(`deny`),this.ui.toast(`Your egg storage is full. Hatch some eggs first!`,`bad`))}startHatch(t){if(!this.canAct()||this.carry)return;let n=this.state,r=this.platform.now(),i=im(n,t);if(!i||!rm(i,r))return;let a={x:i.x,z:i.z},o=this.hatchery.detach(t),s=dm(n,t,r);if(!s)return;this.releaseHold(),this.chopTarget=null,this.player.stopWalk();let c=h[i.s],l=n.tutorial===O.THROW,u=c.rarity,d=i.i,f=Math.max(1,Math.round(i.q)),p=f>=e.roll.superLuckyOdds?`INCREDIBLE FIND!`:f>=e.roll.luckyOdds?`GREAT FIND!`:``;s.rec.isNew&&this.platform.submitScore(`pets_found`,Object.keys(n.index).length),this.track(`catches`),this.platform.submitScore(`eggs_hatched`,n.stats.catches),u>=2&&this.track(`rarePlus`),u>=4&&this.track(`legendaries`),u>=5&&this.track(`mythics`),u>=6&&this.track(`cosmics`);let m=Math.max(e.economy.minCatchBonus,d*e.economy.catchBonusSeconds*Mf(n));vf(n,m),l&&(n.tutorial=O.PLACE);for(let e of Wp(n))this.ui.toast(`${v.find(t=>t.id===e.biomeId).name} collection complete! +${X(e.reward)}`,`gold`);this.save.flushNow();let g=v.find(e=>e.id===i.b)||v[0];this.catch={species:i.s,animal:c,variant:i.v,income:d,oneIn:f,luckLabel:p,pet:s.pet,isNew:s.rec.isNew,newVariant:s.rec.newVariant,bonus:m,biome:g,adUsed:!1},this.hatchMesh=o,this.hatchCenter=new H(a.x,0,a.z),this.hatchery.sync(n),this.sus={phase:`wobble`,t:0,step:-1,wait:0,tease:u<6&&Math.random()<.45,total:u+1+ +!!i.v},this.mode=`encounter`,this.cam.setMode(`encounter`,{center:this.hatchCenter.clone(),push:0}),this.audio.duck(!0),this.audio.suspenseRiser(),this.ui.setMode(`encounter`),this.ui.startOdds(f),this.ui.hud.startSuspense(),this.afterChange(!1)}updateEncounter(e){let t=this.sus,n=this.catch;t.t+=e,t.wait-=e;let r=n.animal.rarity,i=t.phase===`wobble`?.08:.1+Math.max(0,t.step)*.05;if(this.hatchMesh){let e=this.hatchMesh.userData.egg;e.rotation.z=Math.sin(this.time*(14+t.step*3))*i*2.2,e.position.y=Math.abs(Math.sin(this.time*10))*i}let a=e=>Th(e);if(t.phase===`wobble`)t.t>.9&&(t.phase=`ladder`,t.wait=0,this.ui.hud.suspenseTitle(`What will hatch?`));else if(t.phase===`ladder`&&t.wait<=0){if(t.step++,t.step<=r){let e=t.step;this.audio.ladderStep(e),this.ui.hud.suspenseStep(e),this.cam.opts.push=(e+1)/7,this.cam.shake(.04+e*.09);let n=this.hatchCenter;this.fx.burst({x:n.x,y:1.5,z:n.z},{count:14+e*9,colors:[a(e),`#ffffff`],speed:7+e*2,life:.7,size:.75,gravity:6,up:.8}),this.beam.visible=!0,this.beam.position.set(n.x,30,n.z);let r=1.3+e*.22;this.beam.scale.set(r,1,r),this.beamMat.color.set(a(e)),this.beamMat.opacity=.08+e*.035,this.ui.flash(a(e),.08+e*.03),t.wait=.34+e*.07}else t.tease?(t.phase=`tease`,t.wait=.55,this.ui.hud.suspenseTease(r+1),this.audio.tease()):this.nextSuspensePhase()}else if(t.phase===`tease`&&t.wait<=0)this.ui.hud.suspenseTeaseEnd(),this.audio.teaseFail(),this.nextSuspensePhase();else if(t.phase===`variant`)t.wait<=0&&(t.phase=`final`,t.wait=.3);else if(t.phase===`final`&&(this.cam.shake(.12),t.wait<=0)){this.beginReveal();return}let o=t.phase===`wobble`?t.t*.1:(Math.max(0,t.step)+1)/t.total;this.ui.updateOdds(Math.min(1,o))}nextSuspensePhase(){let e=this.catch,t=this.sus;e.variant>0?(t.phase=`variant`,t.wait=.85,this.audio.mutationSting(),this.ui.hud.suspenseVariant(l[e.variant]),this.cam.shake(.3)):(t.phase=`final`,t.wait=.28)}skip(){this.mode===`encounter`&&this.beginReveal()}beginReveal(){if(this.mode===`reveal`)return;this.mode=`reveal`;let e=this.catch,t=this.hatchCenter.clone();this.hatchMesh&&(this.hub.group.remove(this.hatchMesh),this.hatchMesh=null);let n=hf(e.species,e.variant),r=gf(n,5,e.variant);n.root.scale.setScalar(r),n.root.position.copy(t),this.scene.add(n.root),this.encounterRig=n,this.encounterScale=r,this.audio.duck(!1),this.ui.hud.endSuspense(),this.beam.visible=!1,this.revealHop=0;let i=e.animal.rarity,a=wh[i],o=n.height*r;if(this.cam.setMode(`reveal`,{center:t,height:o}),this.fx.burst({x:t.x,y:1.4,z:t.z},{count:26,colors:[`#ffffff`,`#f4efe2`,Th(i)],speed:10,life:.9,size:.9,gravity:18}),this.fx.burst({x:t.x,y:o*.6,z:t.z},{count:a.count,colors:a.colors,speed:11+i*2,life:1.2,size:1,gravity:7}),a.shake&&this.cam.shake(a.shake),a.beam){this.beam.visible=!0,this.beam.position.set(t.x,30,t.z);let e=Math.min(3.2,1.5+n.maxDim*r*.14);this.beam.scale.set(e,1,e),this.beamT=0,this.beamRainbow=a.beam===`rainbow`,this.beamRainbow||this.beamMat.color.set(a.beam)}this.ui.flash(a.beam&&a.beam!==`rainbow`?a.beam:`#ffffff`,i>=4?.9:i>=2?.65:.45),this.audio.play(i>=5?`mythic`:i>=3||e.luckLabel?`rare`:`capture`),this.ui.setMode(`reveal`),this.ui.showReveal(e)}updateReveal(e){let t=this.encounterRig;if(t&&(t.root.rotation.y=.45+Math.sin(this.time*.9)*.55,_f(t,this.time,0),this.revealHop=Math.min(1,this.revealHop+e*1.8),t.root.position.y=Math.sin(this.revealHop*Math.PI)*2.4*(1-this.revealHop*.3),this.beam.visible&&(this.beamT+=e,this.beamMat.opacity=Math.min(.14,this.beamT)*(.8+.2*Math.sin(this.time*6)),this.beam.rotation.y+=e,this.beamRainbow&&this.beamMat.color.setHSL(this.time*.4%1,1,.6)),this.catch.animal.rarity>=3&&Math.random()<e*14)){let e=wh[this.catch.animal.rarity],n=t.root.position;this.fx.spawn(n.x+(Math.random()-.5)*6,Math.random()*6,n.z+(Math.random()-.5)*6,0,2+Math.random()*2,0,1,.6,e.colors[Math.floor(Math.random()*e.colors.length)],0)}}finishReveal(e){if(this.mode!==`reveal`)return;let t=this.catch;e===`sell`?this.sellPet(t.pet.u):this.ui.hud.newUid=t.pet.u,this.audio.play(`click`),this.returnHome()}async doubleCatchReward(){let e=this.catch;return!e||e.adUsed?!1:await this.ads.showRewarded(`double_catch`)?(e.adUsed=!0,vf(this.state,e.bonus),this.audio.play(`buy`),this.afterChange(),!0):(this.ui.toast(`No reward this time. The ad did not finish.`,`info`),!1)}returnHome(){this.encounterRig&&(this.scene.remove(this.encounterRig.root),this.encounterRig=null),this.beam.visible=!1,this.mode=`return`,this.player.setState(`idle`),this.cam.setMode(`return`,{dur:1.1}),this.ui.setMode(`return`),this.afterChange()}onReturned(){this.mode=`hub`,this.cam.setMode(`hub`),this.ui.setMode(`hub`),this.ui.refresh(),this.save.flushNow(),this.ads.breakTime()}startTraining(){if(!this.canAct()||this.carry)return;this.releaseHold(),this.chopTarget=null,this.ui.hud.hidePetCard(),this.audio.play(`click`),this.mode=`approach`,this.ui.setMode(this.mode);let e=this.hub.stations.train;this.player.walkTo(e.stand[0],e.stand[1],()=>{this.mode=`training`,this.player.faceYaw(Math.PI),this.player.setState(`train`),this.player.heldFood.visible=!1,this.cam.setMode(`training`,{x:e.x,z:e.z}),this.repT=0,this.bonusUntil=0,this.nextBonus=this.time+3,this.hub.beltSpeed=1,this.ui.setMode(`training`)})}stopTraining(){if(this.mode===`training`){if(this.mode=`hub`,this.player.setState(`idle`),this.player.repPhase=0,this.hub.beltSpeed=.25,this.player.position.y=0,this.player.heldFood.visible=!0,this.player.position.z=this.hub.stations.train.z+6,this.hub.stations.train.armed=!1,this.cam.setMode(`hub`),this.ui.setMode(`hub`),this.ui.hideBonus(),this.state.tutorial===O.TRAIN&&this.tutorialReps>=3){this.state.tutorial=O.SHOP;let e=s.stone.price;this.state.money<e&&vf(this.state,e-this.state.money)}this.afterChange()}}updateTraining(t){let n=kf(this.state);if(this.repT+=t/n,this.player.position.y=Su(this.player.position.y,.92,8,t),this.player.repPhase=Math.sin(Math.min(1,this.repT)*Math.PI),this.repT>=1&&(--this.repT,this.completeRep()),this.time>this.nextBonus){let t=e.training.bonusEverySeconds;this.nextBonus=this.time+t[0]+Math.random()*(t[1]-t[0])+e.training.bonusWindowSeconds,this.ui.showBonus(()=>this.hitBonus())}}hitBonus(){this.bonusUntil=this.time+e.training.bonusDurationSeconds,this.track(`bonuses`),this.audio.play(`bonus`),this.ui.banner(Math.random()<.5?`DOUBLE XP!`:`POWER BOOST!`,`x2 XP for 8 seconds`,`#ffe14d`,1.2),this.fx.burst({x:16,y:9,z:-9},{count:24,colors:[`#ffe14d`,`#ffffff`],speed:9,size:.9})}completeRep(){let t=Rm(this.state),n=1;this.time<this.bonusUntil&&(n*=e.training.bonusMultiplier),xh(this.state.boosts.trainUntil,this.platform.now())&&(n*=e.training.adBoostMultiplier);let r=Math.round(t.xp*n*Ef(this.state)),i=Lm(this.state,r);this.track(`reps`),this.tutorialReps++,this.audio.play(`rep`),this.ui.floatAt(this.player.position.clone().add(new H(2.4,4.4,0)),`+${r.toLocaleString(`en-US`)} XP`,n>1?`xp boosted`:`xp`),i&&(this.state.power=Im(this.state.level),this.audio.play(`levelup`),this.ui.banner(`LEVEL ${this.state.level}!`,`Chop Power ${this.state.power.toLocaleString(`en-US`)}: ${gu(Yp(this.state))} damage per swing`,`#7cf07c`,1.8),this.fx.burst({x:16,y:8,z:-9},{count:40,colors:[`#7cf07c`,`#ffe14d`,`#ffffff`],speed:12,size:1}),this.cam.shake(.2)),this.afterChange(!1)}updateZone(){let e=this.playerU();if(e<24){this.zoneIdx=-1;return}let t=C(e),n=w(e);if(n>this.state.best&&(this.state.best=n),t===this.zoneIdx)return;this.zoneIdx=t;let r=v[t],i=!this.state.biomes.includes(r.id);if(this.ui.banner(r.name,i?`NEW ZONE DISCOVERED!`:`Zone ${t+1} · Luck x${r.luck}`,r.path,1.5),this.ui.flash(r.path,.25),this.audio.play(`biome`),this.fx.burst({x:this.player.position.x,y:4,z:this.player.position.z},{count:40,colors:[r.path,`#ffffff`,r.ground],speed:14,life:.9,size:1.1,gravity:2}),i){this.state.biomes.push(r.id);let e=u[r.id]*60;vf(this.state,e),this.ui.toast(`Discovery bonus +${X(e)}`,`gold`),this.afterChange()}}clampPlayer(e){let t=this.player.position;if(e>=-22)t.z<-22&&Math.abs(t.x)>Ch&&(t.z=-22),t.x=bu(t.x,Sh.minX,Sh.maxX),t.z=Math.min(t.z,Sh.maxZ);else{let e=t.z>-28?Ch:38;t.x=bu(t.x,-e,e),t.z=Math.max(t.z,-(v[v.length-1].renderEnd-8))}this.mode===`hub`&&this.forest.collide(t)}worldLabels(){let e=[],t=this.player.position,n=this.platform.now(),r=this.chopTarget||!this.carry&&this.forest.nearestTree(t,14);if(r&&r.state===`up`){let t=Math.ceil(r.hp/Yp(this.state));e.push({key:`tree`+r.id,x:r.x,y:r.height+1.5,z:-r.u,title:r.kind.name,sub:`${gu(Math.ceil(r.hp))} / ${gu(r.maxHp)} HP · ${t} hit${t===1?``:`s`}`,color:`#ffffff`,bar:r.hp/r.maxHp,big:r===this.chopTarget})}for(let n of this.forest.eggs)if(n.state!==`gone`&&n.state===`nest`&&Math.abs(n.home.z-t.z)<70){let r=!this.carry&&Math.hypot(n.home.x-t.x,n.home.z-t.z)<9;e.push({key:`egg`+n.tree.id,x:n.home.x,y:5.2,z:n.home.z,title:`${n.biome.name.split(` `).pop()} Egg`,sub:c[n.rarity].name,color:Th(n.rarity),steal:r})}for(let n of this.forest.guardians){let r=n.rig.root.position;if(!n.rig.root.visible||Math.abs(r.z-t.z)>90)continue;let i=n.mode===`chase`||n.mode===`wake`;e.push({key:`grd`+n.bi,x:r.x,y:n.rig.height*n.scale+1.8+r.y,z:r.z,title:`Guardian ${n.species.name}`,sub:i?n.mode===`wake`?`ROAR!`:`CHASING YOU!`:n.mode===`return`?`Going back`:`Guarding its zone`,color:i?`#ff8a6a`:`#ffd0a0`})}if(this.hub.group.visible)for(let t of this.state.eggs){if(!nm(t))continue;let r={x:t.x,z:t.z},i=rm(t,n);e.push({key:`nest`+t.u,x:r.x,y:3.6,z:r.z,title:i?`READY!`:yu((tm(t)-n)/1e3),sub:c[em(t)].name,color:i?`#ffe14d`:`#ffffff`})}return e}prompt(){if(!this.canAct()||this.heldRig)return null;if(this.carry)return{desk:`RUN HOME!`,touch:`RUN HOME!`};let t=this.player.position;if(this.forest.nearestEgg(t,9))return{desk:`PRESS E TO STEAL`,touch:`TAP STEAL`};if(this.player.state===`chop`)return null;if(this.forest.nearestTree(t,e.chop.reach+2))return{desk:`HOLD SPACE TO CHOP`,touch:`TAP CHOP`};let n=this.atHome()&&this.readyEgg();return n&&Math.hypot(t.x-n.x,t.z-n.z)<14?{desk:`PRESS E TO HATCH`,touch:`TAP HATCH`}:null}update(e){this.time+=e,mf(this.time),Ip(this.time),this.handleMovementInput();let t=this.platform.now();if(this.income>0){let t=vf(this.state,this.liveIncome()*e);hh(this.state,`earned`,t),this.moneyTick+=e,this.moneyTick>=2.5&&(this.moneyTick=0,this.mode===`hub`&&!this.modalOpen&&this.hub.group.visible&&this.ui.floatBaseIncome(this.liveIncome()))}switch(this.mode){case`encounter`:this.updateEncounter(e);break;case`reveal`:this.updateReveal(e);break;case`return`:this.cam.returning&&this.onReturned();break;case`training`:this.updateTraining(e)}this.stun>0&&(this.stun-=e),this.player.speed=Zp(this.state,this.carry?this.carry.rarity:-1);let n=this.player.position.z;if(this.player.update(e,this.time,null),this.clampPlayer(n),this.grabTarget){let e=this.grabTarget;e.state===`nest`?Math.hypot(e.home.x-this.player.position.x,e.home.z-this.player.position.z)<3.6&&this.grab(e):this.grabTarget=null}this.mode===`hub`&&(this.updateChop(e),this.updateZone()),this.updateCarry(e),this.updateTargetRing(),this.updateHeld(e),this.updateStations(),this.hub.updateRings(this.time),this.baseView.update(e,this.time);for(let e of this.hatchery.update(this.time,this.state,t)){if(this.mode!==`hub`)continue;let t=im(this.state,e);t&&(this.audio.play(`bonus`),this.ui.toast(`Your ${c[em(t)].name} egg is ready to hatch!`,`gold`))}this.hub.group.visible&&this.npcs.update(e,this.time),this.fx.update(e),this.cam.update(e,{playerPos:this.player.position,groundAt:(e,t)=>Ku(-t,e)});let r=this.cam.focusU();this.focusV.copy(this.cam.look),this.world.update(e,this.time,r,this.cam.camera,this.focusV),this.forest.update(e,this.time,r),this.forest.updateEggs(e,this.time,this.player.position,r),this.hub.group.visible=r<260,this.icons.update(3),this.ui.frame(e),this.save.update(e)}handleMovementInput(){let e=this.player.input;if(e.x=e.z=0,!this.canAct()||this.stun>0)return;let t=this.joystick.forward,n=this.joystick.right;if((this.keys.KeyW||this.keys.ArrowUp)&&(t+=1),(this.keys.KeyS||this.keys.ArrowDown)&&--t,(this.keys.KeyD||this.keys.ArrowRight)&&(n+=1),(this.keys.KeyA||this.keys.ArrowLeft)&&--n,!t&&!n)return;this.chopTarget=null,this.grabTarget=null;let r=this.cam.forward(),i=Math.max(1,Math.hypot(t,n));e.x=(r.x*t-r.z*n)/i,e.z=(r.z*t+r.x*n)/i}render(){this.renderer.render(this.scene,this.cam.camera)}setEffects(e){this.fx.enabled=e}},Dh=class{constructor(e){this.game=e,this.last=0,this.slowFrames=0,this.frames=0,this.tick=this.tick.bind(this),this.firstFrameDone=null}start(e){this.firstFrameDone=e,this.last=performance.now(),requestAnimationFrame(this.tick)}tick(e){requestAnimationFrame(this.tick);let t=(e-this.last)/1e3;this.last=e;let n=this.game;if(!n.paused){t>.1&&(t=.1);try{n.update(t),n.render()}catch(e){console.error(e)}if(this.frames++,this.firstFrameDone){let e=this.firstFrameDone;this.firstFrameDone=null,e()}this.watchPerformance(t,n)}}watchPerformance(e,t){if(t.state.settings.quality===`auto`&&!(this.frames<90)&&(e>1/28?this.slowFrames++:this.slowFrames=Math.max(0,this.slowFrames-.25),this.slowFrames>90)){this.slowFrames=0;let e=t.renderer.getPixelRatio();e>.8?(t.renderer.setPixelRatio(Math.max(.75,e-.25)),t.onResize()):t.renderer.shadowMap.enabled&&(t.world.sun.castShadow=!1)}}},Oh=(e,t=24)=>`<svg viewBox="0 0 ${t} ${t}" aria-hidden="true">${e}</svg>`,$={trophy:Oh(`<path d="M7 3h10v6a5 5 0 0 1-10 0z" fill="#ffd23f"/><path d="M7 5H3c0 4 1.5 6 4.5 6M17 5h4c0 4-1.5 6-4.5 6" fill="none" stroke="#ffd23f" stroke-width="2"/><rect x="10.5" y="13" width="3" height="4" fill="#ffd23f"/><rect x="7" y="17" width="10" height="3" rx="1" fill="#fff"/>`),star:Oh(`<path d="m12 2 3 6.6 7.2.8-5.4 4.8 1.5 7.1L12 17l-6.3 3.3 1.5-7.1L1.8 9.4 9 8.6z" fill="#ffd23f" stroke="#c98a10" stroke-width="1.4" stroke-linejoin="round"/>`),coin:Oh(`<circle cx="12" cy="12" r="10" fill="#ffc531" stroke="#d68e10" stroke-width="2"/><text x="12" y="17" font-size="13" font-weight="900" text-anchor="middle" fill="#a86a00">$</text>`),bolt:Oh(`<path d="M13 2 4 14h6l-1 8 10-13h-7z" fill="#ffe14d" stroke="#d68e10" stroke-width="1.6" stroke-linejoin="round"/>`),food:Oh(`<circle cx="12" cy="14" r="8" fill="#ff5a4f"/><path d="M12 6c0-2 1-3 3-4" stroke="#6e4a26" stroke-width="2" fill="none" stroke-linecap="round"/><ellipse cx="17" cy="4.5" rx="3" ry="1.6" fill="#57c24f"/><ellipse cx="9" cy="11" rx="2" ry="3" fill="#ffa39d"/>`),paw:Oh(`<ellipse cx="12" cy="16" rx="6" ry="5" fill="#fff"/><circle cx="5.5" cy="10" r="2.4" fill="#fff"/><circle cx="10" cy="6" r="2.6" fill="#fff"/><circle cx="14.5" cy="6" r="2.6" fill="#fff"/><circle cx="18.5" cy="10" r="2.4" fill="#fff"/>`),book:Oh(`<path d="M3 5c3-2 6-2 9 0v15c-3-2-6-2-9 0z" fill="#fff"/><path d="M21 5c-3-2-6-2-9 0v15c3-2 6-2 9 0z" fill="#d9e7ff"/>`),up:Oh(`<path d="M12 3 4 12h5v9h6v-9h5z" fill="#fff" stroke-linejoin="round"/>`),gear:Oh(`<circle cx="12" cy="12" r="4" fill="none" stroke="#fff" stroke-width="3"/><g stroke="#fff" stroke-width="3" stroke-linecap="round"><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></g>`),soundOn:Oh(`<path d="M3 9v6h4l5 5V4L7 9z" fill="#fff"/><path d="M15 8a5 5 0 0 1 0 8M18 5a9 9 0 0 1 0 14" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>`),soundOff:Oh(`<path d="M3 9v6h4l5 5V4L7 9z" fill="#fff"/><path d="m16 9 5 6m0-6-5 6" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>`),gift:Oh(`<rect x="3" y="10" width="18" height="11" rx="2" fill="#fff"/><rect x="2" y="7" width="20" height="4" rx="1.5" fill="#ffe14d"/><path d="M12 7v14" stroke="#ff5a4f" stroke-width="3"/><path d="M12 7C9 2 5 3 6 6c.5 1 3 1 6 1zm0 0c3-5 7-4 6-1-.5 1-3 1-6 1z" fill="#ff5a4f"/>`),scroll:Oh(`<rect x="5" y="3" width="14" height="18" rx="2.5" fill="#fff"/><path d="M8 8h8M8 12h8M8 16h5" stroke="#6a8cff" stroke-width="2.2" stroke-linecap="round"/>`),close:Oh(`<path d="m5 5 14 14M19 5 5 19" stroke="#fff" stroke-width="3.6" stroke-linecap="round"/>`),dumbbell:Oh(`<rect x="1" y="8" width="4" height="8" rx="1.5" fill="#fff"/><rect x="19" y="8" width="4" height="8" rx="1.5" fill="#fff"/><rect x="5" y="6" width="3" height="12" rx="1.5" fill="#fff"/><rect x="16" y="6" width="3" height="12" rx="1.5" fill="#fff"/><rect x="8" y="10.5" width="8" height="3" fill="#fff"/>`),ad:Oh(`<rect x="2" y="5" width="20" height="14" rx="3" fill="#fff"/><path d="m10 9 6 3-6 3z" fill="#4a7cff"/>`),egg:Oh(`<ellipse cx="12" cy="13.5" rx="7.5" ry="9.5" fill="#fff"/><circle cx="9.5" cy="11" r="1.6" fill="#7cd36a"/><circle cx="14.5" cy="16" r="2" fill="#7cd36a"/><circle cx="14" cy="8.5" r="1.2" fill="#7cd36a"/>`),clover:Oh(`<g fill="#7cf07c"><circle cx="8" cy="8" r="4.5"/><circle cx="16" cy="8" r="4.5"/><circle cx="8" cy="15" r="4.5"/><circle cx="16" cy="15" r="4.5"/></g>`)},kh=e=>c[e].color===`rainbow`?`#ff9bf0`:c[e].color,Ah=Object.fromEntries(v.map(e=>[e.id,e]));function jh(t,n){let r=t.game.state,i=tp(r,`income`).sort((e,t)=>+!!Vf(r,t.u)-!!Vf(r,e.u)),a=e.economy.maxSlots;n.querySelector(`.sp-title`).textContent=`${r.placed.length}/${r.capacity} Active`;let o=n.querySelector(`.sp-buy`);o.hidden=r.capacity>=a,o.textContent=`+${e.economy.slotsPerExpansion} Slots [${X($f(r))}]`,o.classList.toggle(`off`,r.money<$f(r)),o.dataset.a=`expand`,n.querySelector(`.sp-main`).textContent=`Equip Best`,n.querySelector(`.sp-main`).dataset.a=`best`,n.querySelector(`.sp-main`).classList.toggle(`off`,!r.pets.length),n.querySelector(`.sp-list`).innerHTML=i.length?i.slice(0,80).map(e=>{let t=h[e.s],n=Vf(r,e.u);return`<div class="sp-row ${n?`on`:``}" style="--rc:${kh(t.rarity)}">
      <img data-icon="pet:${e.s}:${e.v}:0" alt=""/>
      <div class="sp-info"><b>${rp(e)}</b><span>${X(e.i*Tf(r))}/s · ${c[t.rarity].name}</span></div>
      <button class="sp-act ${n?`red`:`green`}" data-a="${n?`off`:`on`}" data-id="${e.u}">${n?`Unequip`:`Equip`}</button>
    </div>`}).join(``):`<div class="sp-empty">No pets yet. Hatch an egg to get one!</div>`}function Mh(t,n){let r=t.game,i=r.state,a=r.platform.now(),o=om(i).length;n.querySelector(`.sp-title`).textContent=`${o}/${i.nests} Nests`;let s=n.querySelector(`.sp-buy`);s.hidden=i.nests>=e.eggs.maxNests,s.textContent=`+1 Nest [${X(pm(i))}]`,s.classList.toggle(`off`,i.money<pm(i)),s.dataset.a=`nest`;let l=i.eggs.some(e=>rm(e,a)),u=n.querySelector(`.sp-main`);u.textContent=l?`Hatch Ready Egg`:`Plant All`,u.dataset.a=l?`hatchone`:`plantall`,u.classList.toggle(`off`,!l&&!(am(i).length&&o<i.nests));let d=[...i.eggs].sort((e,t)=>rm(t,a)-rm(e,a)||nm(t)-nm(e)||em(t)-em(e));n.querySelector(`.sp-list`).innerHTML=d.length?d.map(e=>{let t=em(e),n=rm(e,a),r=nm(e),i=n?`Ready to hatch!`:r?`Hatching in ${yu((tm(e)-a)/1e3)}`:`Not planted yet`,o=n?`<button class="sp-act gold" data-a="hatch" data-id="${e.u}">Hatch</button>`:r?`<span class="sp-wait">${yu((tm(e)-a)/1e3)}</span>`:`<button class="sp-act green" data-a="plant" data-id="${e.u}">Plant</button>`;return`<div class="sp-row ${n?`ready`:r?`on`:``}" style="--rc:${kh(t)}">
      <img data-icon="egg:${e.b}:${t}:0" alt=""/>
      <div class="sp-info"><b style="color:${kh(t)}">${c[t].name} Egg</b><span>${(Ah[e.b]||{}).name||``} · ${i}</span></div>
      ${o}
    </div>`}).join(``):`<div class="sp-empty">No eggs yet. Chop a tree, steal its egg and run home!</div>`}function Nh(e,t,n){let r=e.game,i=n.target.closest(`[data-a]`);if(!i||i.classList.contains(`off`))return;let a=i.dataset.a,o=+i.dataset.id;if(r.audio.unlock(),a===`on`)r.placePet(o);else if(a===`off`)r.removePet(o);else if(a===`best`)r.equipBest();else if(a===`expand`)r.expandBase();else if(a===`nest`)r.buyNest();else if(a===`plant`)e.hud.closeSide(),r.holdEgg(o);else if(a===`plantall`)r.plantAllEggs();else if(a===`hatch`)e.hud.closeSide(),r.startHatch(o);else if(a===`hatchone`){let t=r.readyEgg();t&&(e.hud.closeSide(),r.startHatch(t.u))}e.hud.renderSide(!0)}var Ph=e=>e.color===`rainbow`?`#ff9bf0`:e.color,Fh=40,Ih=class{constructor(e,t){this.ui=t,this.g=t.game,e.innerHTML=`
    <div id="flash"></div>
    <div id="vignette"></div>
    <div id="speedLines"></div>
    <div id="labels"></div>
    <div id="floatLayer"></div>

    <div id="hudTL" class="hub-only">
      <div class="power-row"><i class="ic">${$.bolt}</i><b id="hPower">0</b><span id="hStars" hidden><i class="ic">${$.star}</i><b id="hStarN">0</b></span></div>
      <div class="xpbar"><div id="hXp"></div></div>
      <div class="sub">Level <span id="hLevel">1</span> · Damage <span id="hRange"></span></div>
    </div>

    <div id="hudMoney" class="money-modes">
      <div class="money-row"><i class="ic">${$.coin}</i><b id="hMoney">$0</b></div>
      <div class="income-row" id="hIncome">$0/s</div>
    </div>
    <div id="boosts" class="hub-only"></div>

    <div id="hudTR" class="hub-only">
      <button class="icon-btn" id="bDaily" aria-label="Daily gift">${$.gift}<span class="dot" id="dDaily"></span></button>
      <button class="icon-btn" id="bBoard" aria-label="Leaderboard" hidden>${$.trophy}</button>
      <button class="icon-btn" id="bQuests" aria-label="Quests">${$.scroll}<span class="dot" id="dQuests"></span></button>
      <button class="icon-btn" id="bSettings" aria-label="Settings">${$.gear}</button>
    </div>

    <div id="hudSide" class="hub-only">
      <button class="icon-btn big c-green" id="bPets" aria-label="Pets">${$.paw}<span>Pets</span></button>
      <button class="icon-btn big c-orange" id="bEggs" aria-label="Eggs">${$.egg}<span>Eggs</span><span class="dot" id="dEggs"></span></button>
      <button class="icon-btn big c-purple" id="bIndex" aria-label="Index">${$.book}<span>Index</span><span class="dot" id="dIndex"></span></button>
      <button class="icon-btn big c-gold" id="bBoosts" aria-label="Free boosts" hidden>${$.ad}<span>Boosts</span><span class="dot" id="dBoosts"></span></button>
    </div>

    <div id="sidePanel" class="side-panel hub-only">
      <button class="sp-tab" id="spClose" aria-label="Close">&gt;</button>
      <div class="sp-box">
        <div class="sp-head"><b class="sp-title"></b><button class="sp-buy"></button></div>
        <div class="sp-list"></div>
      </div>
      <button class="sp-main"></button>
    </div>

    <div id="joystick" class="hub-only" role="img" aria-label="Movement joystick"><div></div></div>
    <div id="hotbarWrap" class="hub-only">
      <div id="plotCount"><i class="ic">${$.paw}</i><b id="hSlots">0/6</b></div>
      <div id="hotbar"></div>
    </div>
    <button id="throwPrompt" aria-label="Action"></button>
    <div id="holdHint" class="hub-only"></div>
    <div id="petCard"></div>

    <div id="hActions" class="hub-only">
      <button class="btn btn-train" id="bTrain">${$.dumbbell}<span>TRAIN</span></button>
      <button class="btn btn-throw" id="bThrow"><img id="hFoodIcon" alt=""/><span id="hAction">CHOP</span></button>
    </div>

    <div id="meter">
      <div class="m-read"><b id="mGrade">WEAK</b><span id="mDist">0m</span></div>
      <div id="mBar">
        <div class="m-fill"></div>
        ${[6,11,16,19].map(e=>`<i class="m-tick" style="left:${e*5}%"></i>`).join(``)}
        <div class="m-gold"></div>
        <div id="mKnob"></div>
      </div>
      <div class="m-hint"><span class="touch">TAP ANYWHERE</span><span class="desk">CLICK OR SPACE</span> TO THROW</div>
    </div>

    <div id="gradeText"></div>

    <div id="flightHud">
      <div class="dist-value" id="fDist">0m</div>
      <div class="dist-biome"><b id="fBiome"></b><span id="fLuck"></span></div>
      <div class="biome-track" id="fTrack"></div>
    </div>

    <div id="banner"><b id="bnTitle"></b><span id="bnSub"></span></div>

    <div id="suspense">
      <div id="susTitle"></div>
      <div id="susName"></div>
      <div id="ladder">${c.map((e,t)=>`<i data-r="${t}" style="--pc:${Ph(e)}"></i>`).join(``)}</div>
      <div id="oddsBox"><b id="oddsVal">100%</b></div>
    </div>
    <button id="skipBtn" class="btn btn-ghost">SKIP</button>

    <div id="trainPanel">
      <div class="tp-main">
        <div class="tp-head"><b>Level <span id="tLevel"></span></b><span><i class="ic">${$.bolt}</i><span id="tPower"></span> Power · <span id="tXpRep"></span> XP per rep</span></div>
        <div class="xpbar big"><div id="tXp"></div><em id="tXpText"></em></div>
      </div>
      <button class="btn btn-ad" id="tBoost" hidden>${$.ad}Watch ad: x2 XP</button>
      <button class="btn btn-green" id="tUpgrade"></button>
      <button class="btn btn-red" id="tExit">EXIT</button>
      <span id="tBar" hidden></span>
    </div>
    <button id="bonusBtn"><b>TAP!</b><small>x2 XP</small></button>

    <div id="toasts"></div>
    <div id="modalRoot"></div>
    <div id="revealRoot"></div>
    <div id="tutorial"><div id="tutBubble"></div></div>
    `,this.$=t=>e.querySelector(`#`+t),this.cache={},this.labelEls=[],this.floatPool=[],this.labelTick=0,this.newUid=null,this.buildBiomeTrack(),this.wire()}wire(){let e=this.g,t=this.ui,n=this.$,r=(t,r)=>n(t).addEventListener(`click`,t=>{t.currentTarget.blur(),e.audio.unlock(),r()}),i=n=>()=>{e.audio.play(`click`),this.hidePetCard(),t.open(n)};r(`bThrow`,()=>e.action()),r(`bTrain`,()=>e.startTraining()),r(`throwPrompt`,()=>e.action()),r(`bPets`,()=>{e.audio.play(`click`),this.toggleSide(`pets`)}),r(`bEggs`,()=>{e.audio.play(`click`),this.toggleSide(`eggs`)}),r(`spClose`,()=>{e.audio.play(`click`),this.closeSide()}),n(`sidePanel`).addEventListener(`click`,e=>{this.side&&Nh(this.ui,this.side,e)}),r(`bIndex`,i(`index`)),r(`bBoosts`,i(`boosts`)),r(`tBoost`,()=>e.watchReward(`train`)),r(`bBoard`,()=>{e.platform.leaderboardType===`native_popup`?(e.audio.play(`click`),e.platform.openNativeBoard(`eggs_hatched`)):i(`board`)()}),r(`bQuests`,i(`quests`)),r(`bDaily`,i(`quests`)),r(`bSettings`,i(`settings`)),r(`tExit`,()=>e.stopTraining()),r(`tUpgrade`,()=>e.buyBar()),r(`skipBtn`,()=>e.skip()),n(`bonusBtn`).addEventListener(`pointerdown`,e=>{e.preventDefault(),e.stopPropagation(),this.bonusFn&&this.bonusFn(),this.hideBonus()}),n(`hotbar`).addEventListener(`click`,t=>{let n=t.target.closest(`.hot-item`);n&&(e.audio.unlock(),n.dataset.more?i(`pets`)():(this.hidePetCard(),n.dataset.egg?e.holdEgg(+n.dataset.egg):e.holdPet(+n.dataset.uid)))})}buildBiomeTrack(){this.$(`fTrack`).innerHTML=v.map((e,t)=>`<i data-i="${t}" style="background:${e.ground}" title="${e.name}"></i>`).join(``),this.trackPips=[...this.$(`fTrack`).children]}set(e,t){this.cache[e]!==t&&(this.cache[e]=t,this.$(e).textContent=t)}refresh(){let e=this.g.state,t=this.g;this.set(`hLevel`,String(e.level)),this.set(`hPower`,gu(e.power)),this.$(`hStars`).hidden=!e.stars,this.set(`hStarN`,gu(e.stars)),this.set(`hRange`,gu(Yp(e))),this.$(`hXp`).style.width=100*e.xp/Fm(e.level)+`%`,this.cache.foodIcon!==e.food&&(this.cache.foodIcon=e.food,t.icons.request(`food`,e.food,0,!1,e=>{this.$(`hFoodIcon`).src=e})),this.set(`hSlots`,`${e.placed.length}/${e.capacity}`);let n=t.platform.now();this.$(`dDaily`).classList.toggle(`on`,vh(e,n).available),this.$(`dQuests`).classList.toggle(`on`,_h(e)),this.$(`dIndex`).classList.toggle(`on`,Gp(e));let r=t.platform.leaderboardType;this.$(`bBoard`).hidden=!(r===`in_game`||r===`native_popup`||t.platform.localBoardPreview);let i=t.ads.rewardedAvailable;this.$(`bBoosts`).hidden=!i,this.$(`dBoosts`).classList.toggle(`on`,i&&nh(e,`cash`,n).ready),this.$(`tBoost`).hidden=!i||!nh(e,`train`,n).ready,this.renderHotbar(),this.refreshTraining();let a=t.platform.now();this.$(`dEggs`).classList.toggle(`on`,e.eggs.some(e=>e.n<0||e.n>=0&&a>=e.p+e.d)),this.renderSide()}toggleSide(e){this.side===e?this.closeSide():(this.side=e,this.$(`sidePanel`).className=`side-panel hub-only on `+e,this.renderSide(!0))}closeSide(){this.side=null,this.$(`sidePanel`).className=`side-panel hub-only`}renderSide(e=!1){if(!this.side)return;let t=this.$(`sidePanel`),n=this.g.state,r=this.side+`|`+n.pets.length+`|`+n.placed.join(`,`)+`|`+n.capacity+`|`+n.eggs.map(e=>e.u+`:`+e.n).join(`,`)+`|`+n.nests+`|`+Math.floor(n.money>0?Math.log10(n.money)*4:0)+`|`+Math.floor(this.g.platform.now()/1e3);if(!e&&r===this.sideSig)return;this.sideSig=r;let i=t.querySelector(`.sp-list`),a=i.scrollTop;this.side===`pets`?jh(this.ui,t):Mh(this.ui,t),i.scrollTop=a,this.ui.loadIcons(t)}renderHotbar(){let e=this.g,t=e.state,n=Yf(t),r=am(t),i=r.map(e=>e.u).join(`,`)+`|`+e.heldEggUid+`|`+this.newEggUid+`|`+n.slice(0,Fh).map(e=>e.u).join(`,`)+`|`+e.heldUid+`|`+this.newUid+`|`+n.length;if(this.cache.hotbar!==i){this.cache.hotbar=i;let a=n.slice(0,Fh);this.$(`hotbar`).innerHTML=r.map(t=>{let n=em(t);return`<button class="hot-item egg${(e.heldEggUid===t.u?` held`:``)+(this.newEggUid===t.u?` fresh`:``)}" data-egg="${t.u}" style="--rc:${Ph(c[n])}" aria-label="${c[n].name} egg"><img data-icon="egg:${t.b}:${n}:0" alt=""/><em>${c[n].name} egg</em></button>`}).join(``)+a.map((n,r)=>{let i=c[h[n.s].rarity];return`<button class="hot-item${(e.heldUid===n.u?` held`:``)+(this.newUid===n.u?` fresh`:``)}" data-uid="${n.u}" style="--rc:${Ph(i)}" aria-label="${rp(n)}">
          <img data-icon="pet:${n.s}:${n.v}:0" alt=""/><em>${X(n.i*Tf(t))}/s</em>${r<9?`<kbd class="desk">${r+1}</kbd>`:``}</button>`}).join(``)+(n.length>Fh?`<button class="hot-item more" data-more="1">+${n.length-Fh}</button>`:``),this.ui.loadIcons(this.$(`hotbar`))}this.$(`hotbarWrap`).classList.toggle(`empty`,n.length===0&&t.placed.length===0&&r.length===0);let a=this.$(`holdHint`),o=e.heldUid!==null||e.heldEggUid!==null;a.classList.toggle(`on`,o),e.heldEggUid===null?o&&this.set(`holdHint`,t.placed.length>=t.capacity?`Your pen is full: pick up a pet or expand at Upgrades`:`Tap your pen to place this pet`):this.set(`holdHint`,sm(t)<=0?`All nests are in use: hatch an egg or buy nests at Upgrades`:`Tap your pen to plant this egg (${sm(t)} nest${sm(t)===1?``:`s`} free)`)}showPetCard(e){let t=this.g,n=this.ui,r=h[e.s],i=c[r.rarity],a=this.$(`petCard`);a.innerHTML=`<img data-icon="pet:${e.s}:${e.v}:0" alt=""/>
      <div class="pc-body"><b style="color:${Ph(i)}">${rp(e)}</b><span>${i.name} · ${X(e.i*Tf(t.state))}/s</span></div>
      <button class="btn btn-green small" data-a="up">PICK UP</button>
      <button class="btn btn-ghost small" data-a="sell">SELL ${X(Wf(e))}</button>
      <button class="icon-btn pc-close" data-a="close" aria-label="Close">${$.close}</button>`,n.loadIcons(a),a.classList.add(`on`),a.onclick=i=>{let a=i.target.closest(`[data-a]`);if(!a)return;if(a.dataset.a===`close`){this.hidePetCard();return}if(a.dataset.a===`up`){this.hidePetCard(),t.pickUpPet(e.u);return}let o=()=>{this.hidePetCard(),t.sellPet(e.u)};Gf(e)?n.confirm(`Sell ${r.name}?`,`This is a valuable pet. You will receive ${X(Wf(e))}.`,`SELL`,o):o()}}hidePetCard(){this.$(`petCard`).classList.remove(`on`)}refreshTraining(){let e=this.g.state,t=this.g.ui.currentBarInfo(),n=Fm(e.level);this.set(`tLevel`,String(e.level)),this.$(`tXp`).style.width=100*e.xp/n+`%`,this.set(`tXpText`,`${gu(e.xp)} / ${gu(n)} XP`),this.set(`tPower`,gu(e.power)),this.set(`tXpRep`,gu(t.now.xp)+(t.boosted?` x2`:``));let r=this.$(`tUpgrade`);t.next?(this.set(`tUpgrade`,`${t.next.name} ${X(t.next.cost)}`),r.classList.toggle(`off`,e.money<t.next.cost),r.style.display=``):r.style.display=`none`}frame(e){let t=this.g,n=t.state;this.set(`hMoney`,X(n.money)),this.set(`hIncome`,X(t.liveIncome())+`/s`),this.$(`hIncome`).classList.toggle(`boosted`,t.liveIncome()>t.income),t.mode===`training`&&this.refreshTraining(),this.side&&this.renderSide(),this.labelTick+=e,this.labelTick>.05&&(this.labelTick=0,this.updateLabels()),this.updateBoosts(),this.updateThrowPrompt(),this.updateZoneHud();let r=t.actionLabel();this.set(`hAction`,r),this.$(`bThrow`).classList.toggle(`run`,r===`RUN!`)}updateZoneHud(){let e=this.g,t=this.$(`flightHud`),n=e.mode===`hub`&&!e.atHome();if(t.classList.toggle(`on`,n),t.classList.toggle(`roam`,n),!n)return;let r=e.playerU(),i=C(r),a=v[i];e.carry?(this.set(`fDist`,`RUN HOME!`),this.set(`fBiome`,Math.ceil(r-24)+`m to the gate`),this.set(`fLuck`,e.carry.guard.mode===`chase`?`Guardian chasing!`:e.carry.guard.mode===`wake`?`It woke up...`:`You lost it!`)):(this.set(`fDist`,a.name),this.set(`fBiome`,`Luck x`+a.luck),this.set(`fLuck`,``)),this.trackIdx!==i&&(this.trackIdx=i,this.trackPips.forEach((e,t)=>{e.className=t<i?`past`:t===i?`now`:``}))}updateThrowPrompt(){let e=this.g,t=this.$(`throwPrompt`),n=e.prompt();if(t.classList.toggle(`on`,!!n),!n)return;let r=n.desk+`|`+n.touch;this.cache.prompt!==r&&(this.cache.prompt=r,t.innerHTML=`<span class="desk">${n.desk}</span><span class="touch">${n.touch}</span>`);let i=this._pv||(this._pv=e.player.position.clone());i.copy(e.player.position),i.y+=e.carry?9.6:7.4,i.project(e.cam.camera),t.style.left=((i.x+1)*innerWidth/2).toFixed(1)+`px`,t.style.top=((1-i.y)*innerHeight/2).toFixed(1)+`px`}updateBoosts(){let e=this.g,t=e.state,n=e.platform.now(),r=[];xh(t.boosts.incomeUntil,n)&&r.push(`<span class="boost">${$.coin} x2 ${yu((t.boosts.incomeUntil-n)/1e3)}</span>`),t.boosts.lure&&r.push(`<span class="boost">${$.star} Golden Swing ready</span>`),xh(t.boosts.luckUntil,n)&&r.push(`<span class="boost">${$.clover} ${yu((t.boosts.luckUntil-n)/1e3)}</span>`),xh(t.boosts.trainUntil,n)&&r.push(`<span class="boost">${$.dumbbell} ${yu((t.boosts.trainUntil-n)/1e3)}</span>`);let i=r.join(``);this.cache.boosts!==i&&(this.cache.boosts=i,this.$(`boosts`).innerHTML=i)}updateLabels(){let e=this.g,t=e.mode===`hub`&&!e.modalOpen&&e.hub.group.visible,n=0;if(t){let t=e.cam.camera,r=this._v||(this._v=t.position.clone()),i=innerWidth,a=innerHeight;e.baseView.each(o=>{if(n>=12)return;let s=o.rig.root;r.copy(s.position),r.y+=o.rig.height*o.targetScale+.8+e.hub.group.position.y;let l=r.distanceTo(t.position);if(l>62||(r.project(t),r.z>1||r.x<-1||r.x>1||r.y<-1||r.y>1))return;let u=this.labelEls[n];u||(u=document.createElement(`div`),u.className=`pet-label`,u.innerHTML=`<b></b><span></span><i class="lbl-bar"><s></s></i>`,this.$(`labels`).appendChild(u),this.labelEls[n]=u);let d=o.pet;u._uid!==d.u&&(u._uid=d.u,u.firstChild.textContent=rp(d),u.firstChild.style.color=Ph(c[h[d.s].rarity]),u.children[1].textContent=X(d.i*Tf(e.state))+`/s`,u.lastChild.style.display=`none`);let f=Math.max(.7,Math.min(1,34/l));u.style.transform=`translate(${(r.x+1)*i/2}px,${(1-r.y)*a/2}px) translate(-50%,-100%) scale(${f.toFixed(2)})`,u.style.display=``,n++})}if(t){let t=e.cam.camera,r=this._v,i=innerWidth,a=innerHeight;for(let o of e.npcs.staff){if(r.copy(o.root.position),r.y+=e.hub.group.position.y+6.8,r.distanceTo(t.position)>62||(r.project(t),r.z>1||r.x<-1||r.x>1||r.y<-1||r.y>1))continue;let s=this.labelEls[n];s||(s=document.createElement(`div`),s.className=`pet-label`,s.innerHTML=`<b></b><span></span><i class="lbl-bar"><s></s></i>`,this.$(`labels`).appendChild(s),this.labelEls[n]=s);let c=`npc:`+o.name;s._uid!==c&&(s._uid=c,s.firstChild.textContent=o.name,s.firstChild.style.color=`#ffffff`,s.children[1].textContent=``,s.lastChild.style.display=`none`),s.style.transform=`translate(${(r.x+1)*i/2}px,${(1-r.y)*a/2}px) translate(-50%,-100%)`,s.style.display=``,n++}}if(e.mode===`hub`&&!e.modalOpen){let t=e.cam.camera,r=this._v||(this._v=t.position.clone()),i=innerWidth,a=innerHeight;for(let o of e.worldLabels()){if(n>=30)break;r.set(o.x,o.y,o.z);let e=r.distanceTo(t.position);if(e>95||(r.project(t),r.z>1||r.x<-1||r.x>1||r.y<-1||r.y>1))continue;let s=this.labelEls[n];s||(s=document.createElement(`div`),s.className=`pet-label`,s.innerHTML=`<b></b><span></span><i class="lbl-bar"><s></s></i>`,this.$(`labels`).appendChild(s),this.labelEls[n]=s);let c=o.title+o.sub+ +!!o.steal;(s._uid!==o.key||s._t!==c)&&(s._uid=o.key,s._t=c,o.steal?s.firstChild.innerHTML=`<kbd class="lbl-key desk">E</kbd><span class="lbl-steal">STEAL</span>`:s.firstChild.textContent=o.title,s.firstChild.style.color=o.color,s.children[1].textContent=o.sub),s.classList.toggle(`big`,!!o.big);let l=s.lastChild;l.style.display=o.bar===void 0?`none`:`block`,o.bar!==void 0&&(l.firstChild.style.width=Math.max(0,Math.min(1,o.bar))*100+`%`);let u=Math.max(.75,Math.min(1.1,48/e));s.style.transform=`translate(${(r.x+1)*i/2}px,${(1-r.y)*a/2}px) translate(-50%,-100%) scale(${u.toFixed(2)})`,s.style.display=``,n++}}for(let e=n;e<this.labelEls.length;e++)this.labelEls[e].style.display=`none`}updateMeter(e,t,n){this.$(`mKnob`).style.left=e/20*100+`%`,this.set(`mGrade`,t.id.toUpperCase()),this.$(`mGrade`).style.color=t.color,this.set(`mDist`,vu(n)),this.$(`meter`).classList.toggle(`hot`,e>=19)}showGrade(e,t){let n=this.$(`gradeText`);n.innerHTML=`${e.label}<small>${t.toFixed(1)} / 20</small>`,n.style.color=e.color,n.className=`on g-`+e.id,clearTimeout(this.gradeTimer),this.gradeTimer=setTimeout(()=>{n.className=``},1300)}updateFlight(e,t,n){this.set(`fDist`,vu(e)),this.set(`fBiome`,t.name),this.set(`fLuck`,`Luck x${t.luck}`),this.$(`speedLines`).style.opacity=this.g.state.settings.effects?Math.max(0,n-.25).toFixed(2):0;let r=S(e);this.trackIdx!==r&&(this.trackIdx=r,this.trackPips.forEach((e,t)=>{e.className=t<r?`past`:t===r?`now`:``}))}banner(e,t,n,r=1.7){this.$(`bnTitle`).textContent=e,this.$(`bnTitle`).style.color=n||`#fff`,this.$(`bnSub`).textContent=t||``;let i=this.$(`banner`);i.classList.remove(`on`),i.offsetWidth,i.classList.add(`on`),clearTimeout(this.bannerTimer),this.bannerTimer=setTimeout(()=>i.classList.remove(`on`),r*1e3)}flash(e,t){let n=this.$(`flash`);n.style.background=e,n.style.transition=`none`,n.style.opacity=t,n.offsetWidth,n.style.transition=`opacity .6s`,n.style.opacity=0}startSuspense(){this.$(`suspense`).classList.add(`on`),this.$(`susName`).textContent=``,this.$(`susName`).className=``,this.$(`susTitle`).textContent=`Something is hatching...`,this.$(`ladder`).querySelectorAll(`i`).forEach(e=>{e.className=``})}suspenseTitle(e){this.$(`susTitle`).textContent=e}suspenseStep(e){let t=c[e],n=this.$(`susName`);n.textContent=t.name.toUpperCase(),n.style.color=Ph(t),n.className=``,n.offsetWidth,n.className=`hit`,this.$(`ladder`).querySelectorAll(`i`).forEach((t,n)=>{t.className=n<e?`lit`:n===e?`lit now`:``})}suspenseTease(e){let t=this.$(`ladder`).querySelector(`i[data-r="${e}"]`);t&&(t.className=`tease`),this.$(`susTitle`).textContent=`Could it be...`}suspenseTeaseEnd(){this.$(`ladder`).querySelectorAll(`i.tease`).forEach(e=>{e.className=``}),this.$(`susTitle`).textContent=``}suspenseVariant(e){let t=this.$(`susName`);t.textContent=e.name.toUpperCase()+`!`,t.style.color=e.color===`rainbow`?`#ff9bf0`:e.color,t.className=``,t.offsetWidth,t.className=`hit big`,this.$(`susTitle`).textContent=`A MUTATION!`}endSuspense(){this.$(`suspense`).classList.remove(`on`)}startOdds(e){this.oddsTarget=e,this.set(`oddsVal`,`100%`),this.$(`oddsBox`).className=`on`}updateOdds(e){let t=Math.max(1,Math.round(this.oddsTarget**+(e*e)));this.set(`oddsVal`,_u(t));let n=this.$(`oddsBox`);n.classList.toggle(`warm`,t>=25),n.classList.toggle(`hot`,t>=250)}hideOdds(){this.$(`oddsBox`).className=``}showBonus(t){let n=this.$(`bonusBtn`);this.bonusFn=t,n.style.left=Math.round(innerWidth*(.3+Math.random()*.3))+`px`,n.style.top=Math.round(innerHeight*(.22+Math.random()*.36))+`px`,n.classList.add(`on`),clearTimeout(this.bonusTimer),this.bonusTimer=setTimeout(()=>this.hideBonus(),e.training.bonusWindowSeconds*1e3)}hideBonus(){this.$(`bonusBtn`).classList.remove(`on`),this.bonusFn=null}floatText(e,t,n,r){let i=this.floatPool.find(e=>!e._busy);if(!i){if(this.floatPool.length>24)return;i=document.createElement(`div`),i.addEventListener(`animationend`,()=>{i._busy=!1,i.className=`floater`}),this.$(`floatLayer`).appendChild(i),this.floatPool.push(i)}i._busy=!0,i.textContent=n,i.style.left=e+`px`,i.style.top=t+`px`,i.className=`floater`,i.offsetWidth,i.className=`floater go `+(r||``)}};function Lh(e,t){let n=e.game,r=n.state,o=n.platform.now(),s=ih(r),c=Ed(),l=t.querySelector(`.shop-row`),u=l?l.scrollLeft:null,d=s.find(e=>!r.foods.includes(e.id)),f=s.filter(e=>r.foods.includes(e.id)).length,p=d&&r.money<d.price&&n.ads.rewardedAvailable&&nh(r,`cash`,o).ready?`<div class="shop-offer"><span>Short on cash? Watch an ad to get <b>${X(th(r))}</b>.</span><button class="btn btn-ad small" data-reward="cash">${$.ad}WATCH AD</button></div>`:``;t.classList.add(`flush`),t.innerHTML=`
    <div class="shop-top">
      ${c.length?`<div class="event-banner">${c[0].banner}</div>`:``}
      ${p}
      <div class="shop-sub"><span>${f}/${s.length} owned</span><span>Damage per swing now: <b>${gu(Yp(r))}</b></span></div>
    </div>
    <div class="shop-wrap">
    <button class="shop-arrow left" data-scroll="-1" aria-label="Scroll left">&#9664;</button>
    <div class="shop-row">
    ${s.map(e=>{let t=r.foods.includes(e.id),n=r.food===e.id,o=r.money>=e.price,s=i[e.rarity]===`rainbow`?`#ff9bf0`:i[e.rarity];return`<div class="sc ${n?`eq`:``} ${t?`own`:``}" style="--rc:${s}" data-tut="food-${e.id}">
        <b class="sc-name">${e.name}</b>
        <em class="sc-tier">${a[e.rarity]}${e.event?` · Seasonal`:``}</em>
        <div class="sc-art"><img data-icon="food:${e.id}:0:0" alt=""/></div>
        <div class="sc-power"><b>x${gu(e.dmg)}</b> Damage<small>Luck ${Math.round(e.attract*133)} · Value x${gu(e.value)}</small></div>
        ${n?`<button class="sc-btn gray" disabled>EQUIPPED</button>`:t?`<button class="sc-btn blue" data-act="equip" data-id="${e.id}">EQUIP</button>`:`<button class="sc-btn ${o?`green`:`locked`}" data-act="buy" data-id="${e.id}">${X(e.price)}</button>`}
      </div>`}).join(``)}
    </div>
    <button class="shop-arrow right" data-scroll="1" aria-label="Scroll right">&#9654;</button>
    </div>`;let m=t.querySelector(`.shop-row`);if(u!==null)m.scrollLeft=u;else{let e=Math.max(0,s.indexOf(d||s[s.length-1])-1);requestAnimationFrame(()=>{let t=m.children[e];t&&(m.scrollLeft=t.offsetLeft-8)})}m.onwheel=e=>{Math.abs(e.deltaY)>Math.abs(e.deltaX)&&(m.scrollLeft+=e.deltaY,e.preventDefault())};let h=null;m.onpointerdown=e=>{h={x:e.clientX,left:m.scrollLeft,moved:0,id:e.pointerId}},m.onpointermove=e=>{if(!h||e.pointerId!==h.id)return;let t=e.clientX-h.x;h.moved=Math.max(h.moved,Math.abs(t)),h.moved>6&&(m.scrollLeft=h.left-t,m.classList.add(`dragging`),m.hasPointerCapture(e.pointerId)||m.setPointerCapture(e.pointerId))};let g=e=>{h&&e.pointerId===h.id&&(m.classList.remove(`dragging`),h.moved>6&&(m._dragged=!0),h=null)};m.onpointerup=g,m.onpointercancel=g,m.addEventListener(`click`,e=>{m._dragged&&(m._dragged=!1,e.stopPropagation(),e.preventDefault())},!0),t.onclick=t=>{let r=t.target.closest(`[data-scroll]`);if(r){n.audio.play(`click`),m.scrollLeft+=+r.dataset.scroll*Math.max(260,m.clientWidth*.8);return}let i=t.target.closest(`[data-reward]`);if(i){i.disabled=!0,n.watchReward(`cash`).then(()=>e.rerender());return}let a=t.target.closest(`[data-act]`);a&&(a.dataset.act===`buy`&&n.buyFood(a.dataset.id),a.dataset.act===`equip`&&n.equipFood(a.dataset.id),e.rerender())}}var Rh=60;function zh(e){return e.color===`rainbow`?`#ff9bf0`:e.color}function Bh(e,t){let n=e.game,r=n.state;e.petSort=e.petSort||`income`,e.petLimit=e.petLimit||Rh;let i=tp(r,e.petSort);t.innerHTML=`
    <div class="inv-top">
      <div class="inv-stat"><b>${r.placed.length}/${r.capacity}</b><small>In base</small></div>
      <div class="inv-stat"><b>${X(Uf(r))}/s</b><small>Income</small></div>
      <div class="inv-stat"><b>${r.pets.length}</b><small>Owned</small></div>
      <button class="btn btn-gold small" data-act="best" id="invBest">EQUIP BEST</button>
      <button class="btn btn-gray small" data-act="sellweak">SELL SPARES</button>
    </div>
    <div class="sort-row">Sort:
      ${[[`income`,`Income`],[`rarity`,`Rarity`],[`newest`,`Newest`]].map(([t,n])=>`<button class="pill ${e.petSort===t?`on`:``}" data-sort="${t}">${n}</button>`).join(``)}
    </div>
    ${i.length?``:`<div class="empty">No pets yet. Chop trees for eggs and hatch them!</div>`}
    <div class="grid pet-grid">
    ${i.slice(0,e.petLimit).map(e=>{let t=h[e.s],n=c[t.rarity],i=l[e.v],a=Vf(r,e.u);return`<div class="card pet-card ${a?`placed`:``}" style="--rc:${zh(n)}">
        <div class="card-icon"><img data-icon="pet:${e.s}:${e.v}:0" alt=""/>${a?`<span class="in-base">IN BASE</span>`:``}</div>
        <div class="card-title">${t.name}</div>
        <div class="tags"><span class="tag" style="background:${zh(n)}">${n.name}</span>${e.v?`<span class="tag var" style="background:${i.color===`rainbow`?`linear-gradient(90deg,#ff5a5a,#ffe14d,#62d66a,#4fa8ff,#b46cff)`:i.color}">${i.name}</span>`:``}</div>
        <div class="meta inc"><b>${X(e.i*Tf(r))}/s</b></div>
        <div class="btn-row">
          ${a?`<button class="btn btn-gray small" data-act="remove" data-id="${e.u}">REMOVE</button>`:`<button class="btn btn-green small" data-act="hold" data-id="${e.u}">HOLD</button>`}
          <button class="btn btn-red small" data-act="sell" data-id="${e.u}">SELL ${X(Wf(e))}</button>
        </div>
      </div>`}).join(``)}
    </div>
    ${i.length>e.petLimit?`<button class="btn btn-blue more" data-act="more">SHOW MORE (${i.length-e.petLimit})</button>`:``}`,t.onclick=t=>{let i=t.target.closest(`[data-sort]`);if(i){e.petSort=i.dataset.sort,e.petLimit=Rh,n.audio.play(`click`),e.rerender();return}let a=t.target.closest(`[data-act]`);if(!a)return;let o=+a.dataset.id,s=a.dataset.act;if(s===`hold`)e.closeModal(),n.holdPet(o);else if(s===`remove`&&n.removePet(o),s===`best`&&n.equipBest(),s===`more`&&(e.petLimit+=Rh),s===`sellweak`)e.confirm(`Sell spare pets?`,`Sells every benched Common and Uncommon pet with no mutation. Placed pets are kept.`,`SELL`,()=>{n.sellWeak(),e.rerender()});else{if(s===`sell`){let t=Bf(r,o);if(Gf(t)){e.confirm(`Sell ${h[t.s].name}?`,`This is a valuable pet. You will receive ${X(Wf(t))}.`,`SELL`,()=>{n.sellPet(o),e.rerender()});return}n.sellPet(o)}e.rerender()}}}function Vh(e){return e.color===`rainbow`?`#ff9bf0`:e.color}var Hh=Object.fromEntries(m.map(e=>[e.id,e]));function Uh(e,t){let n=e.game.state,r=Hp(n);e.ixSel&&Hh[e.ixSel]||(e.ixSel=(m.find(e=>n.index[e.id])||m[0]).id),t.classList.add(`flush`),t.innerHTML=`
    <div class="ix">
      <div class="ix-left">
        <div class="ix-scroll">
        ${v.map((t,r)=>{let i=Vp(n,t.id),a=n.biomes.includes(t.id);return`<section class="ix-zone">
            <div class="ix-art" style="--sky:${t.skyTop};--sky2:${t.skyBottom};--g:${t.ground};--g2:${t.side}"><b>${a?t.name:`???`}</b><small>Zone ${r+1}</small></div>
            <div class="ix-grid">
            ${g[t.id].map(t=>{let r=n.index[t.id];return`<button class="ix-tile ${r?`got`:``} ${e.ixSel===t.id?`sel`:``}" data-id="${t.id}" style="--rc:${Vh(c[t.rarity])}">
                <span>${r?t.name:`???`}</span><img data-icon="pet:${t.id}:0:${+!r}" alt=""/>${r&&r.n?`<em>NEW</em>`:``}</button>`}).join(``)}
            </div>
            <div class="ix-bar"><i style="width:${i.pct}%"></i><b>${i.found}/${i.total}</b></div>
          </section>`}).join(``)}
        </div>
        <div class="ix-total"><span class="ix-book">${$.book}</span><b>Unlocked: ${r.found}/${r.total}</b></div>
      </div>
      <div class="ix-right"><div class="ix-detail"></div><div class="ix-reward"></div></div>
    </div>`;let i=()=>{let r=Hh[e.ixSel],i=n.index[r.id],a=c[r.rarity],o=v.find(e=>e.id===r.biome);t.querySelector(`.ix-detail`).innerHTML=`
      <div class="ix-pic ${i?``:`dark`}" style="--rc:${Vh(a)}"><img data-icon="pet:${r.id}:0:${+!i}" alt=""/></div>
      <b class="ix-name">${i?r.name:`???`}</b>
      <b class="ix-rar" style="color:${Vh(a)}">${a.name}</b>
      <b class="ix-inc">${X(r.baseIncome*Tf(n))}/s</b>
      ${i?`<small>Hatched ${i.c}x</small><div class="var-dots">${l.slice(1).map((e,t)=>`<i title="${e.name}" class="${i.m.includes(t+1)?`on`:``}" style="--vc:${e.color===`rainbow`?`#ff9bf0`:e.color}"></i>`).join(``)}</div>`:`<small>Find its egg in `+(n.biomes.includes(o.id)?o.name:`an unexplored zone`)+`</small>`}`;let s=Vp(n,o.id),u=n.claimedBiomes.includes(o.id);t.querySelector(`.ix-reward`).innerHTML=`
      <b>Rewards: ${n.biomes.includes(o.id)?o.name:`???`}</b>
      <div class="ix-prize"><span>${$.coin}</span><b>${X(Up(o.id))}</b></div>
      <div class="ix-count ${u?`done`:``}">${u?`Claimed!`:`${s.found}/${s.total}`}</div>`,e.loadIcons(t.querySelector(`.ix-right`))};i(),t.onclick=n=>{let r=n.target.closest(`.ix-tile`);r&&(e.game.audio.play(`click`),e.ixSel=r.dataset.id,t.querySelectorAll(`.ix-tile.sel`).forEach(e=>e.classList.remove(`sel`)),r.classList.add(`sel`),i())};let a=!1;for(let e of Object.values(n.index))e.n&&(e.n=!1,a=!0);a&&e.game.save.mark()}var Wh=(e,t)=>{let n=e.per*t;return e.unit===`time`?`+`+(n/3600).toFixed(1)+`h`:e.unit===`luck`?`+`+Math.round(n*100)+` luck`:`+`+Math.round(n*100)+`%`};function Gh(t,n){let r=t.game,i=r.state,a=T[i.bar],o=T[i.bar+1],s=e.economy.maxSlots,c=e.eggs.maxNests,l=Ff(i),u=(e,t,n=``)=>`<button class="ug-buy ${i.money>=t?``:`locked`}" data-act="${e}" data-id="${n}">${X(t)}</button>`,d=`<span class="ug-max">MAX</span>`,f=({color:e,icon:t,name:n,level:r,now:i,then:a,pct:o,button:s})=>`
    <div class="ug-tile" style="--uc:${e}">
      <div class="ug-icon">${t}</div>
      <b class="ug-name">${n}</b>
      ${r?`<em class="ug-lv">${r}</em>`:``}
      <div class="ug-effect"><span>${i}</span>${a?`<i>&#10140;</i><span class="ug-next">${a}</span>`:``}</div>
      <div class="ug-pips"><div style="width:${Math.min(100,o)}%"></div></div>
      ${s}
    </div>`;n.innerHTML=`
    <h4 class="ug-h">Your Gear</h4>
    <div class="ug-grid">
      ${f({color:a.color,icon:$.dumbbell,name:a.name,level:`Tier ${i.bar+1}/${T.length}`,now:gu(a.xp)+` XP/rep`,then:o&&gu(o.xp)+` XP/rep`,pct:i.bar/(T.length-1)*100,button:o?u(`bar`,o.cost):d})}
      ${f({color:`#62d66a`,icon:$.paw,name:`Bigger Pen`,level:`${i.capacity}/${s} pets`,now:i.capacity+` pets`,then:i.capacity<s&&i.capacity+e.economy.slotsPerExpansion+` pets`,pct:i.capacity/s*100,button:i.capacity<s?u(`expand`,$f(i)):d})}
      ${f({color:`#ff9b3f`,icon:$.egg,name:`Egg Nests`,level:`${i.nests}/${c} nests`,now:i.nests+` nests`,then:i.nests<c&&i.nests+1+` nests`,pct:i.nests/c*100,button:i.nests<c?u(`nest`,pm(i)):d})}
    </div>
    <h4 class="ug-h">Upgrades</h4>
    <div class="ug-grid">
    ${E.map(e=>{let t=xf(i,e.id),n=t>=e.max,r={income:`#f5ad22`,xp:`#4fa8ff`,luck:`#62d66a`,speed:`#ff6a5a`,hatch:`#ff9b3f`}[e.id]||`#9a68e8`;return f({color:r,icon:$[e.icon],name:e.name,level:`Lv ${t}/${e.max}`,now:e.desc+` `+Wh(e,t),then:!n&&Wh(e,t+1),pct:t/e.max*100,button:n?d:u(`up`,Sf(i,e.id),e.id)})}).join(``)}
    </div>
    <div class="ug-rebirth ${l>=1?`ready`:``}">
      <div class="ug-star">${$.star}<b>${gu(i.stars)}</b></div>
      <div class="ug-rb-text">
        <b>${l>=1?`Rebirth for +`+l+` stars!`:`Rebirth`}</b>
        <small>Each star: +${Math.round(e.rebirth.incomePerStar*100)}% income, +${Math.round(e.rebirth.xpPerStar*100)}% XP and a little luck. Now x${Tf(i).toFixed(2)} income.</small>
        <small>${l>=1?`Resets money, level, pickaxes, treadmills, pen, nests and upgrades. Keeps stars, your Index, your eggs and your 3 best pets.`:`Next star at `+X(Lf(i))+` earned this run (`+X(i.runEarned)+` so far).`}</small>
      </div>
      <button class="ug-rb-btn" data-act="rebirth" ${l>=1?``:`disabled`}>REBIRTH</button>
    </div>
    <div class="ug-stats">
      <div><small>Trees chopped</small><b>${gu(i.stats.chopped)}</b></div>
      <div><small>Eggs stolen</small><b>${gu(i.stats.stolen)}</b></div>
      <div><small>Hatched</small><b>${gu(i.stats.catches)}</b></div>
      <div><small>Reps</small><b>${gu(i.stats.reps)}</b></div>
      <div><small>Earned</small><b>${X(i.lifetime)}</b></div>
      <div><small>Farthest</small><b>${vu(i.best)}</b></div>
      <div><small>Rebirths</small><b>${gu(i.rebirths)}</b></div>
    </div>`,n.onclick=async e=>{let n=e.target.closest(`[data-act]`);if(!n||n.disabled)return;let i=n.dataset.act;i===`bar`&&r.buyBar(),i===`expand`&&r.expandBase(),i===`nest`&&r.buyNest(),i===`up`&&r.buyUpgrade(n.dataset.id),i===`rebirth`?t.confirm(`Rebirth?`,`You gain ${l} stars forever, but money, level, pickaxes, treadmills, pen, nests and upgrades reset. Your eggs and 3 best pets stay with you.`,`REBIRTH`,()=>r.doRebirth()):t.rerender()}}function Kh(e,t){let n=e.game,r=n.state,i=n.platform.now(),a={income:`#f5ad22`,cash:`#4fc25f`,lure:`#ffc531`,hatch:`#ff8f3f`,luck:`#62d66a`,train:`#4fa8ff`};t.innerHTML=`
    <p class="panel-note boosts-note">Optional: watch a short ad for a boost. Nothing here is ever needed to progress.</p>
    <div class="boost-tiles">
    ${$m.map(e=>{let t=nh(r,e.id,i),n=e.timed&&r.boosts[e.timed]>i,o=t.reason===`armed`?`Ready: it triggers on your next egg`:n?`Active: `+yu(t.secondsLeft)+` left`:t.reason===`cooldown`?`Back in `+yu(t.secondsLeft):e.id===`cash`?`Get `+X(th(r))+` now`:e.desc;return`<div class="bt ${t.ready?``:`waiting`} ${n?`active`:``}" style="--bc:${a[e.id]||`#9a68e8`}">
        <div class="bt-icon">${$[e.icon]}</div>
        <b class="bt-name">${e.name}</b>
        <small class="bt-line">${o}</small>
        ${t.ready?`<button class="bt-btn" data-reward="${e.id}">${$.ad}<span>${n?`+5 MIN`:`WATCH AD`}</span></button>`:`<span class="bt-wait">${t.reason===`armed`?`READY`:t.reason===`capped`?`MAX`:yu(t.secondsLeft)}</span>`}
      </div>`}).join(``)}
    </div>`,t.onclick=async t=>{let r=t.target.closest(`[data-reward]`);r&&(r.disabled=!0,await n.watchReward(r.dataset.reward),e.rerender())}}var qh=[{id:`eggs_hatched`,name:`Eggs Hatched`,mine:e=>e.stats.catches,text:e=>gu(e)},{id:`pets_found`,name:`Pets Discovered`,mine:e=>Object.keys(e.index).length,text:e=>gu(e)}];function Jh(e,t){let n=e.game,r=n.state;e.boardId=e.boardId||qh[0].id;let i=qh.find(t=>t.id===e.boardId),a=e.boardToken=(e.boardToken||0)+1;t.innerHTML=`
    <div class="sort-row">${qh.map(e=>`<button class="pill ${e.id===i.id?`on`:``}" data-board="${e.id}">${e.name}</button>`).join(``)}</div>
    <div class="board-mine"><span>Your best</span><b>${i.text(i.mine(r))}</b></div>
    <div id="boardList" class="board-list"><div class="empty">Loading scores...</div></div>`,t.onclick=t=>{let r=t.target.closest(`[data-board]`);r&&(e.boardId=r.dataset.board,n.audio.play(`click`),e.rerender())};let o=t.querySelector(`#boardList`);n.platform.localBoardPreview?o.innerHTML=`<div class="empty">Online scores appear when the game runs on a platform with leaderboards.</div>`:n.platform.boardEntries(i.id).then(t=>{if(a===e.boardToken&&o.isConnected){if(!t.length)o.innerHTML=`<div class="empty">No scores yet. Be the first!</div>`;else{o.innerHTML=``;for(let e of t){let t=document.createElement(`div`);t.className=`board-row`+(e.rank<=3?` top`:``);let n=document.createElement(`b`);n.textContent=String(e.rank);let r=document.createElement(`span`);r.textContent=e.name||`Player`;let a=document.createElement(`em`);a.textContent=i.text(e.score),t.append(n,r,a),o.appendChild(t)}}}}).catch(()=>{a===e.boardToken&&o.isConnected&&(o.innerHTML=`<div class="empty">Scores could not be loaded right now.</div>`)})}function Yh(e,t){let n=e.game,r=n.state,i=vh(r,n.platform.now()),a=e=>e.type===`cash`?`Cash`:e.type===`luck`?`Luck`:`XP x2`;t.innerHTML=`
    <h4>Daily gift · Streak ${r.daily.streak}</h4>
    <div class="daily-row">
      ${dh.map((e,t)=>`<div class="day ${t<i.dayIndex||!i.available&&t===i.dayIndex?`got`:``} ${i.available&&t===i.dayIndex?`today`:``}"><small>Day ${e.day}</small><b>${a(e)}</b></div>`).join(``)}
    </div>
    <div class="daily-actions">
      <button class="btn ${i.available?`btn-gold`:`btn-gray`}" data-act="daily" ${i.available?``:`disabled`}>${i.available?`CLAIM TODAY'S GIFT`:`COME BACK TOMORROW`}</button>
      ${i.available&&n.ads.rewardedAvailable?`<button class="btn btn-ad" data-act="daily2">${$.ad}WATCH AD: x2 GIFT</button>`:``}
    </div>
    <h4>Today's quests</h4>
    ${r.quests.list.map(e=>{let t=e.progress>=e.goal;return`<div class="quest ${e.claimed?`claimed`:``}">
        <div class="q-body"><b>${e.text}</b>
          <div class="progress small"><div style="width:${Math.min(100,e.progress/e.goal*100)}%"></div></div>
          <small>${gu(e.progress)} / ${gu(e.goal)} · Reward ${X(e.reward)}</small></div>
        ${e.claimed?`<span class="maxed">DONE</span>`:`<button class="btn ${t?`btn-green`:`btn-locked`} small" data-act="quest" data-id="${e.id}" ${t?``:`disabled`}>CLAIM</button>`}
      </div>`}).join(``)}
    <h4>Achievements · ${r.achievements.length}/${fh.length}</h4>
    <div class="grid ach-grid">
    ${fh.map(e=>`<div class="ach ${r.achievements.includes(e.id)?`got`:``}"><b>${e.name}</b><small>${e.desc}</small><em>${X(e.reward)}</em></div>`).join(``)}
    </div>`,t.onclick=async t=>{let r=t.target.closest(`[data-act]`);r&&!r.disabled&&(r.dataset.act===`daily`&&n.claimDaily(),r.dataset.act===`daily2`&&(r.disabled=!0,await n.claimDailyDoubled()),r.dataset.act===`quest`&&n.claimQuest(r.dataset.id),e.rerender())}}function Xh(e,t){let n=e.game,r=n.state.settings,i=n.platform;t.innerHTML=`
    ${i.signedIn?`<div class="setting account"><span>Account</span><b class="acc-name">${i.playerName?`Signed in as `+Zh(i.playerName):`Signed in`}</b></div>`:i.canSignIn||i.localSignInPreview?`<div class="setting account"><span>Account<small>Sign in to keep your progress on every device</small></span><button class="btn btn-blue small" id="sSignIn">SIGN IN</button></div>`:``}
    <label class="setting"><span>Music</span><input type="range" min="0" max="1" step=".05" value="${r.music}" id="sMusic"/></label>
    <label class="setting"><span>Sound effects</span><input type="range" min="0" max="1" step=".05" value="${r.sfx}" id="sSfx"/></label>
    <label class="setting"><span>Mute all</span><input type="checkbox" id="sMute" ${r.muted?`checked`:``}/></label>
    <label class="setting"><span>Full visual effects</span><input type="checkbox" id="sFx" ${r.effects?`checked`:``}/></label>
    <label class="setting"><span>Graphics quality</span>
      <select id="sQuality"><option value="auto">Auto</option><option value="high">High</option><option value="low">Low</option></select></label>
    <p class="panel-note" id="sQualityNote" hidden>Graphics change applies next time the game loads.</p>
    <p class="panel-note">Controls: hold Space to chop · E steals an egg or hatches a ready one · WASD walks · 1-9 picks a pet from the hotbar · Drag rotates the view · Scroll zooms · Walk into a glowing circle to use a station · Tap a held pet again to put it back</p>
    <div class="version">Fonts: Lilita One and Fredoka (SIL Open Font License). Engine: Three.js (MIT). License texts are in the game's licenses folder.</div>
    <button class="btn btn-red wide" id="sReset">RESET ALL PROGRESS</button>`,t.querySelector(`#sQuality`).value=r.quality;let a=t.querySelector(`#sSignIn`);a&&(a.onclick=()=>Qh(e,a));let o=()=>n.save.soon();t.querySelector(`#sMusic`).oninput=e=>{r.music=+e.target.value,n.audio.setVolumes(r.music,r.sfx),o()},t.querySelector(`#sSfx`).oninput=e=>{r.sfx=+e.target.value,n.audio.setVolumes(r.music,r.sfx),o()},t.querySelector(`#sSfx`).onchange=()=>n.audio.play(`click`),t.querySelector(`#sMute`).onchange=t=>{r.muted=t.target.checked,n.audio.setMuted(r.muted),o(),e.refresh()},t.querySelector(`#sFx`).onchange=e=>{r.effects=e.target.checked,n.setEffects(r.effects),o()},t.querySelector(`#sQuality`).onchange=e=>{r.quality=e.target.value,t.querySelector(`#sQualityNote`).hidden=!1,o()},t.querySelector(`#sReset`).onclick=()=>e.confirm(`Reset everything?`,`All pets, money and progress will be permanently deleted.`,`RESET`,async()=>{await n.save.wipe(),location.reload()})}var Zh=e=>String(e).replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e]);async function Qh(e,t){let n=e.game;n.audio.play(`click`),n.platform.localSignInPreview?e.toast(`Sign-in opens the platform login once the game runs on Playgama.`,`info`):(t.disabled=!0,await n.platform.signIn()?await n.save.afterSignIn()===`reload`?(e.toast(`Signed in! Loading your saved progress...`,`good`),setTimeout(()=>location.reload(),900)):(e.toast(`Signed in! Your progress is saved to your account.`,`good`),e.modalName===`settings`&&e.rerender()):(t.disabled=!1,e.toast(`Sign-in was not completed.`,`bad`)))}function $h(e,t){let n=e.game,r=e.hud.$(`revealRoot`),i=c[t.animal.rarity],a=l[t.variant],o=i.color===`rainbow`,s=o?`#ff9bf0`:i.color,u=t.isNew?`NEW!`:t.newVariant?`NEW MUTATION!`:``,d=n.state.tutorial===O.PLACE,f=n.ads.rewardedAvailable&&!d;r.innerHTML=`
    ${t.animal.rarity>=2?`<div class="rv-rays" style="--rc:${s}"></div>`:``}
    <div class="reveal-card rarity-${i.id}" style="--rc:${s}">
      ${t.luckLabel?`<div class="luck-label ${t.luckLabel.startsWith(`INCREDIBLE`)?`super`:``}">${t.luckLabel}</div>`:``}
      ${u?`<div class="new-tag">${u}</div>`:``}
      <div class="rv-rarity ${o?`rainbow-bg`:``}">${i.name.toUpperCase()}${t.variant?` · `+a.name.toUpperCase():``}</div>
      <div class="rv-name">${t.animal.name}</div>
      <div class="rv-line"><b>${X(t.income*Tf(n.state))}/s</b><span>${t.biome.name}</span><span>${_u(t.oneIn)} chance</span><span>+<span id="rvBonus">${X(t.bonus)}</span></span></div>
      <button class="btn btn-green rv-collect" id="rvCollect">COLLECT</button>
      ${d?``:`<div class="rv-extra">
        ${f?`<button class="btn btn-ad small" id="rvAd">${$.ad}WATCH AD: x2 BONUS</button>`:``}
        <button class="btn btn-ghost small" id="rvSell">SELL ${X(Wf(t.pet))}</button>
      </div>`}
    </div>`,r.classList.add(`on`);let p=e=>{r.classList.remove(`on`),r.innerHTML=``,n.finishReveal(e)};r.querySelector(`#rvCollect`).onclick=()=>p(`collect`);let m=r.querySelector(`#rvSell`);m&&(m.onclick=()=>{Gf(t.pet)?e.confirm(`Sell ${t.animal.name}?`,`This is a valuable pet. You will receive ${X(Wf(t.pet))}.`,`SELL`,()=>p(`sell`)):p(`sell`)});let h=r.querySelector(`#rvAd`);h&&(h.onclick=async()=>{if(h.disabled=!0,await n.doubleCatchReward()){h.textContent=`BONUS DOUBLED!`;let e=r.querySelector(`#rvBonus`);e&&(e.textContent=X(t.bonus*2))}else h.disabled=!1})}var eg=class{constructor(e){this.ui=e,this.bubble=e.hud.$(`tutBubble`),this.glowEl=null,this.lastText=``}step(){let{game:e,modalName:t}=this.ui,n=e.state,r=e.mode,i=n.tutorial;if(i===O.DONE)return null;if(i===O.THROW){if(r!==`hub`)return null;if(t)return{sel:`#modalClose`,text:`Close this menu to keep going.`};if(e.carry)return{sel:null,text:`Run home through the gate before the guardian catches you!`};let i=e.platform.now();return n.eggs.some(e=>rm(e,i))?{sel:`#bThrow`,text:`Your egg is ready! Tap HATCH, or tap the egg in your pen.`}:e.heldEggUid===null?n.eggs.some(e=>e.n<0)?{sel:`#hotbar .hot-item.egg`,text:`Your egg is in the hotbar. Tap it, then tap your pen to plant it!`}:n.eggs.length?{sel:null,text:`Your egg is warming up in your pen. It hatches in a few seconds...`}:e.forest.eggs.some(e=>e.state===`nest`)?{sel:`#bThrow`,text:`An egg! Press E or tap STEAL, then run home!`}:{sel:`#bThrow`,text:`Head out the gate and chop a tree! Tap CHOP, tap a tree, or hold Space next to one. The orange ring shows which tree you will chop.`}:{sel:null,text:`Now tap inside your pen to plant the egg.`}}if(i===O.PLACE)return r===`reveal`?{sel:`#rvCollect`,anchor:`.reveal-card`,text:`You hatched a pet!`}:r===`hub`&&t?{sel:`#modalClose`,text:`Close this menu to place your pet.`}:r===`hub`&&e.heldUid!==null?{sel:null,text:`Now tap your pen to place it. It will earn money every second!`}:r===`hub`?{sel:`#hotbar .hot-item`,text:`Your pet is in the hotbar. Tap it to pick it up!`}:null;if(i===O.TRAIN)return t?{sel:`#modalClose`,text:`Nice! Your pet is earning. Close this menu.`}:r===`hub`?{sel:`#bTrain`,text:`Run on the treadmill to train. It makes you chop harder!`}:r===`training`?e.tutorialReps>=3?{sel:`#tExit`,text:`Stronger already! Exit when you are ready.`}:{sel:null,text:`Each rep earns XP. XP raises your Chop Power.`}:null;if(i===O.SHOP){if(r===`hub`&&t===`shop`)return{sel:`[data-act="buy"]`,text:`Buy a better pickaxe to chop faster and find rarer eggs!`};if(r===`hub`)return{sel:null,guide:`shop`,text:`Buy a better pickaxe! Tap the Pickaxes stall or walk into its glowing circle.`}}return null}update(){let e=this.step(),t=e&&e.sel?document.querySelector(e.sel):null;if(this.glowEl!==t&&(this.glowEl&&this.glowEl.classList.remove(`tut-glow`),t&&t.classList.add(`tut-glow`),this.glowEl=t),!e){this.bubble.classList.remove(`on`);return}this.lastText!==e.text&&(this.lastText=e.text,this.bubble.textContent=e.text),this.bubble.classList.add(`on`);let n=innerWidth,r=innerHeight,i=this.bubble.offsetWidth,a=this.bubble.offsetHeight,o=n/2-i/2,s=r*.16;this.bubble.dataset.dir=`none`;let c=e.anchor?document.querySelector(e.anchor):t;if(c){let e=c.getBoundingClientRect();o=e.left+e.width/2-i/2,c.closest(`.modal-body`)?(s=e.bottom+16,this.bubble.dataset.dir=`up`):c.closest(`#trainPanel`)?(o=e.left-i-16,s=e.top+e.height/2-a/2,this.bubble.dataset.dir=`right`):e.right<130?(o=e.right+14,s=e.top+e.height/2-a/2,this.bubble.dataset.dir=`left`):e.top>a+34?(s=e.top-a-18,this.bubble.dataset.dir=`down`):(s=e.bottom+18,this.bubble.dataset.dir=`up`)}o=Math.max(8,Math.min(n-i-8,o)),this.bubble.style.transform=`translate(${o}px,${s}px)`}},tg={shop:{title:`Pickaxe Shop`,cls:`c-red wide`,render:Lh},pets:{title:`My Pets`,cls:`c-green`,render:Bh},index:{title:`Index`,cls:`c-purple wide`,render:Uh},upgrades:{title:`Upgrades`,cls:`c-blue wide`,render:Gh},board:{title:`Leaderboard`,cls:`c-blue`,render:Jh},boosts:{title:`Free Boosts`,cls:`c-gold wide`,render:Kh},quests:{title:`Quests & Rewards`,cls:`c-gold`,render:Yh},settings:{title:`Settings`,cls:`c-gray`,render:Xh}},ng=class{constructor(e,t){this.game=t,this.hud=new Ih(e,this),this.modalName=null,this.confirmOpen=!1,this.tutorial=new eg(this),this.setMode(`hub`)}currentBarInfo(){let e=this.game.state;return{now:Rm(e),next:zm(e),boosted:xh(e.boosts.trainUntil,this.game.platform.now())}}refresh(){this.hud.refresh()}setMode(e){var t,n;document.body.dataset.mode=e,e!==`hub`&&((t=(n=this.game).resetJoystick)==null||t.call(n));let r=this.hud;e!==`encounter`&&r.hideOdds(),e!==`flight`&&(r.$(`speedLines`).style.opacity=0),e===`flight`&&(r.trackIdx=-1,r.$(`flightHud`).classList.remove(`landed`)),e===`aim`&&this.closeModal()}showGrade(e,t){this.hud.showGrade(e,t)}updateMeter(e,t,n){this.hud.updateMeter(e,t,n)}updateFlight(e,t,n){this.hud.updateFlight(e,t,n)}banner(e,t,n,r){this.hud.banner(e,t,n,r)}flash(e,t){(this.game.state.settings.effects||t<.3)&&this.hud.flash(e,t)}startOdds(e){this.hud.startOdds(e)}updateOdds(e){this.hud.updateOdds(e)}showBonus(e){this.hud.showBonus(e)}hideBonus(){this.hud.hideBonus()}showLanded(e,t,n){let r=this.hud;r.set(`fDist`,vu(e)),r.set(`fBiome`,t.name),r.$(`flightHud`).classList.add(`landed`),r.$(`speedLines`).style.opacity=0,n&&this.banner(`NEW RECORD!`,vu(e),`#ffe14d`,1.2)}showReveal(e){$h(this,e)}floatAt(e,t,n){let r=e.clone().project(this.game.cam.camera);r.z>1||this.hud.floatText((r.x+1)*innerWidth/2,(1-r.y)*innerHeight/2,t,n)}floatMoney(e){this.hud.floatText(innerWidth/2,62,`+`+X(e),`cash`)}floatBaseIncome(e){let t=this.game.baseView.views.values().next().value;if(!t)return;let n=t.rig.root.position.clone();n.y+=t.rig.height*t.targetScale+2.6+this.game.hub.group.position.y,this.floatAt(n,`+`+X(e*2.5),`cash`)}toast(e,t=`info`){let n=this.hud.$(`toasts`),r=document.createElement(`div`);for(r.className=`toast `+t,r.textContent=e,n.appendChild(r);n.children.length>3;)n.firstChild.remove();setTimeout(()=>r.classList.add(`out`),2200),setTimeout(()=>r.remove(),2600)}open(e){var t,n;let r=tg[e];if(!r||this.game.mode!==`hub`&&this.game.mode!==`approach`)return;this.modalName=e,this.game.modalOpen=!0,(t=(n=this.game).resetJoystick)==null||t.call(n),this.game.player.stopWalk();let i=this.hud.$(`modalRoot`);i.innerHTML=`<div class="modal ${r.cls}" role="dialog">
      <header><h2>${r.title}</h2><button class="icon-btn close" id="modalClose" aria-label="Close">${$.close}</button></header>
      <div class="modal-body" id="modalBody"></div></div>`,i.classList.add(`on`),i.querySelector(`#modalClose`).onclick=()=>{this.game.audio.play(`click`),this.closeModal()},i.onclick=e=>{e.target===i&&this.closeModal()},e===`settings`&&this.game.platform.send(`level_paused`),this.rerender()}rerender(){if(!this.modalName)return;let e=this.hud.$(`modalBody`),t=e.scrollTop;tg[this.modalName].render(this,e),this.loadIcons(e),e.scrollTop=t,this.refresh()}closeModal(){if(!this.modalName)return;this.modalName===`settings`&&this.game.platform.send(`level_resumed`),this.modalName=null,this.game.modalOpen=!1;let e=this.hud.$(`modalRoot`);e.classList.remove(`on`),e.innerHTML=``,this.petLimit=0,this.game.save.soon(),this.seenShopInTutorial()&&(this.game.state.tutorial=4,this.toast(`You are all set. Happy chopping!`,`good`),this.game.save.soon())}seenShopInTutorial(){return this.game.state.tutorial===3&&this._shopSeen}loadIcons(e){this.modalName===`shop`&&this.game.state.tutorial===3&&(this._shopSeen=!0),e.querySelectorAll(`img[data-icon]`).forEach(e=>{let[t,n,r,i]=e.dataset.icon.split(`:`);this.game.icons.request(t,n,+r,i===`1`,t=>{e.src=t})})}confirm(e,t,n,r){var i,a;(i=(a=this.game).resetJoystick)==null||i.call(a);let o=document.createElement(`div`);o.className=`confirm-wrap`,o.innerHTML=`<div class="confirm"><h3>${e}</h3><p>${t}</p>
      <div class="btn-row"><button class="btn btn-gray" data-c="no">CANCEL</button><button class="btn btn-red" data-c="yes">${n}</button></div></div>`,o.addEventListener(`click`,e=>{let t=e.target.dataset&&e.target.dataset.c;t&&(o.remove(),this.game.audio.play(`click`),t===`yes`&&r())}),document.getElementById(`ui`).appendChild(o)}showOffline(){var e,t;let n=this.game,r=n.state;if(r.pendingOffline<=0||document.querySelector(`.offline-wrap`))return;let i=r.pendingOffline,a=r.pendingOfflineSeconds;(e=(t=this.game).resetJoystick)==null||e.call(t);let o=document.createElement(`div`);o.className=`confirm-wrap offline-wrap`,o.innerHTML=`<div class="confirm offline"><h3>WELCOME BACK!</h3><p>Your animals earned</p>
      <div class="offline-amount">${X(i)}</div><p>while you were away for ${yu(a)}!</p>
      <div class="btn-col">
      ${n.ads.rewardedAvailable?`<button class="btn btn-ad" id="ofAd">${$.ad}WATCH AD: x2 REWARD</button>`:``}
      <button class="btn btn-green" id="ofOk">COLLECT</button></div></div>`,document.getElementById(`ui`).appendChild(o),o.querySelector(`#ofOk`).onclick=()=>{o.remove(),n.collectOffline(1)};let s=o.querySelector(`#ofAd`);s&&(s.onclick=async()=>{s.disabled=!0,await n.ads.showRewarded(`double_offline`)?(o.remove(),n.collectOffline(2),this.toast(`Offline reward doubled!`,`gold`)):(s.disabled=!1,this.toast(`No reward this time. The ad did not finish.`,`info`))})}frame(e){this.hud.frame(e),this.modalName===`boosts`&&(this.boostTick=(this.boostTick||0)+e,this.boostTick>=1&&(this.boostTick=0,this.rerender())),this.tutorial.update()}};document.title=t;function rg(e){return e===`high`||e===`low`?e:/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent)||navigator.maxTouchPoints>1&&innerWidth<1100?`low`:`high`}function ig(e,t){let n=document.getElementById(`loadBar`);n&&(n.style.width=e+`%`);let r=document.getElementById(`loadText`);r&&t&&(r.textContent=t)}function ag(e,t,n,r){let i=t.hud.$(`joystick`),a=i.firstElementChild,o=null,s=()=>{let t=o;o=null,e.joystick.forward=e.joystick.right=0,a.style.transform=``,t!==null&&i.hasPointerCapture(t)&&i.releasePointerCapture(t)},c=t=>{if(t.pointerId!==o)return;if(!e.canAct()){s();return}let n=i.getBoundingClientRect(),r=t.clientX-n.left-n.width/2,c=t.clientY-n.top-n.height/2,l=n.width*.33,u=Math.hypot(r,c),d=u>l?l/u:1,f=r*d,p=c*d;a.style.transform=`translate(`+f+`px, `+p+`px)`,e.joystick.right=u>5?f/l:0,e.joystick.forward=u>5?-p/l:0};i.addEventListener(`pointerdown`,t=>{o===null&&e.canAct()&&(t.preventDefault(),r.unlock(),o=t.pointerId,i.setPointerCapture(o),c(t))}),i.addEventListener(`pointermove`,c);for(let e of[`pointerup`,`pointercancel`,`lostpointercapture`])i.addEventListener(e,e=>{e.pointerId===o&&s()});e.resetJoystick=s;let l={down:!1,moved:0,x:0,y:0,id:null};n.addEventListener(`pointerdown`,t=>{r.unlock(),e.paused||(l.down=!0,l.moved=0,l.x=t.clientX,l.y=t.clientY,l.id=t.pointerId,n.setPointerCapture(t.pointerId))}),n.addEventListener(`pointermove`,t=>{if(!l.down&&t.pointerType===`mouse`&&e.hoverAt(t.clientX/innerWidth*2-1,-(t.clientY/innerHeight)*2+1),!l.down||t.pointerId!==l.id)return;let n=t.clientX-l.x,r=t.clientY-l.y;l.x=t.clientX,l.y=t.clientY,l.moved+=Math.abs(n)+Math.abs(r),e.mode===`hub`&&!e.modalOpen&&l.moved>6&&e.cam.rotate(n,r)}),n.addEventListener(`pointerup`,t=>{l.down&&t.pointerId===l.id&&(l.down=!1,l.moved>10||e.paused||(e.mode===`hub`?e.worldTap(t.clientX/innerWidth*2-1,-(t.clientY/innerHeight)*2+1):(e.mode===`encounter`||e.mode===`landing`)&&e.skip()))}),n.addEventListener(`pointercancel`,()=>{l.down=!1}),n.addEventListener(`wheel`,t=>{e.mode===`hub`&&!e.modalOpen&&(t.preventDefault(),e.cam.zoom(t.deltaY*.001))},{passive:!1}),document.addEventListener(`contextmenu`,e=>e.preventDefault()),addEventListener(`keydown`,t=>{if(r.unlock(),!(t.target&&/INPUT|SELECT|TEXTAREA/.test(t.target.tagName))&&!e.paused){if(e.keys[t.code]=!0,t.code===`Space`){if(t.preventDefault(),t.repeat)return;e.mode===`hub`&&!e.modalOpen?e.spaceHeld=!0:e.mode===`encounter`&&e.skip()}else if(t.code===`KeyE`)e.mode===`hub`&&!e.modalOpen&&e.interact();else if(/^Digit[1-9]$/.test(t.code)&&e.canAct()){let e=document.querySelectorAll(`#hotbar .hot-item`)[t.code.slice(5)-1];e&&e.click()}else if(t.code===`Enter`&&e.mode===`reveal`){let e=document.getElementById(`rvCollect`);e&&e.click()}}}),addEventListener(`keyup`,t=>{e.keys[t.code]=!1,t.code===`Space`&&(e.spaceHeld=!1)}),addEventListener(`blur`,()=>{e.keys={},e.spaceHeld=!1}),addEventListener(`resize`,()=>e.onResize())}async function og(e){var t;document.documentElement.dataset.platformLang=String(e.language||`en`),ig(35,`Loading your pets...`);let n=new ce;n.setPlatformEnabled(e.isAudioEnabled);let r=new te(e),i=await r.load(),a=i.state;n.setMuted(a.settings.muted),n.setVolumes(a.settings.music,a.settings.sfx),document.fonts&&await Promise.race([document.fonts.load(`40px "Lilita One"`),new Promise(e=>setTimeout(e,1500))]).catch(()=>{}),ig(60,`Building the world...`),await new Promise(e=>setTimeout(e,0));let o=rg(a.settings.quality);document.body.classList.toggle(`q-low`,o===`low`);let s=document.getElementById(`game`),c=[`localhost`,`127.0.0.1`].includes(location.hostname),l=!((t=e.bridge)!=null&&(t=t.advertisement)!=null&&t.isRewardedSupported)&&c,u,d=new ae(e,{testAds:l,onOpen:()=>u&&u.setPause(`ad`,!0),onClose:()=>u&&u.setPause(`ad`,!1)}),f=!0;try{u=new Eh({canvas:s,state:a,platform:e,save:r,ads:d,audio:n,quality:o})}catch(e){console.error(e),f=!1}if(!f){ig(100,`This game needs WebGL, which your browser could not start.`);return}let p=new ng(document.getElementById(`ui`),u);u.attachUI(p),ag(u,p,s,n),e.onAudio(e=>n.setPlatformEnabled(e)),e.onPause(e=>u.setPause(`platform`,e)),e.isPaused&&u.setPause(`platform`,!0),document.addEventListener(`visibilitychange`,()=>u.setPause(`hidden`,document.hidden)),addEventListener(`pagehide`,()=>r.flushNow());let m=ch(a,e.now());u.income=Uf(a),r.flushNow(),i.corrupted&&p.toast(`Your save could not be read, so a new game was started.`,`bad`),ig(100,`Ready!`),new Dh(u).start(()=>{document.getElementById(`loading`).classList.add(`done`),e.send(`game_ready`),e.send(`level_started`),m.popup&&p.showOffline(),p.refresh()}),c&&(window.__game=u)}export{og as startGame};