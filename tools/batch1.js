const { applyBatch } = require('./apply_batch');

const BATCH_1 = {
  'pokérogue': {
    displayName: 'PokéRogue',
    title: 'PokéRogue: Rogue-lite Pokémon Battle Simulator',
    catalogDesc: 'The viral roguelite Pokémon battle sensation! Draft starter Pokémon, battle endless waves of wild creatures, battle rival trainers, and acquire held items in procedurally generated biomes.',
    paragraphs: [
      'PokéRogue is an acclaimed browser-based roguelite Pokémon battle game developed by PageFault and the open-source community. Fusing traditional Pokémon turn-based mechanics with deep roguelite progression, players draft starting teams and battle through hundreds of escalating procedural battle waves.',
      'Battle wild Pokémon, gym leaders, and elite trainers across dynamic biomes. Every 10 waves shifts the environment—from lush meadows and deep caverns to volcanic peaks and space realms—altering available wild encounters and weather conditions.',
      'Collect held items, mega stones, EXP shares, and stat-boosting vitamins between rounds. Catch rare shiny variants with enhanced luck stats, unlock powerful hidden passive abilities, and hatch mystery eggs to build unstoppable teams.'
    ],
    howTo: [
      'Draft your starting party from your unlocked Pokémon roster using starter point limits.',
      'Choose moves, switch party members, and manage type advantages during turn-based battles.',
      'Select valuable reward items (potions, vitamins, held items, Pokéballs) in the shop after each victory.',
      'Defeat boss Pokémon at the end of each biome to transition to new zones and reach the final 200-wave climax.'
    ],
    tips: [
      'Prioritize early EXP Share items so your secondary Pokémon stay appropriately leveled alongside your sweeper.',
      'Status moves like Spore, Thunder Wave, and Will-O-Wisp are essential for catching legendary boss Pokémon safely.',
      'Shiny Pokémon passively increase your team\'s shop luck tier, yielding rarer shop items after every wave.',
      'Plan around biome transitions: ensure your team has type coverage to handle water, ice, and fire biomes.'
    ],
    controlsText: 'Arrow Keys or WASD to navigate menus. Spacebar or Enter to confirm selection. Esc or X to cancel/back.',
    keycaps: ['arrows', 'wasd', 'space', 'enter', 'esc'],
    developer: 'PageFault / PokéRogue Community',
    release: '2024'
  },
  'snow rider 3d': {
    displayName: 'Snow Rider 3D',
    title: 'Snow Rider 3D: High-Speed Downhill Sledding',
    catalogDesc: 'Careen down steep, snow-covered mountainsides in a thrilling 3D bobsled run. Dodge giant snowmen, massive pine trees, and rolling boulders while collecting gifts to unlock awesome new sleighs.',
    paragraphs: [
      'Snow Rider 3D brings the thrill of high-velocity downhill bobsledding directly to your browser. Gliding across picturesque snow-capped mountains, you must navigate treacherous Alpine slopes filled with sudden hazards and extreme drops.',
      'Test your reflexes as you dodge towering pine trees, rolling snow boulders, icy chasms, and mischievous snowmen. The mountain steepens and speeds increase the further you travel, demanding razor-sharp reflexes and split-second steering.',
      'Collect brightly wrapped holiday gifts scattered along your path to spend in the garage, unlocking over 10 unique sleds ranging from modern racing bobsleds to Santa\'s festive reindeer sleigh.'
    ],
    howTo: [
      'Use the Left and Right Arrow keys (or A and D) to steer your sled across the snowy mountain.',
      'Press Up Arrow or W to jump over small snowbanks, fallen logs, and low obstacles.',
      'Anticipate oncoming trees, boulders, and giant snowmen by looking ahead down the slope.',
      'Collect holiday gifts along your descent to unlock faster and more agile sleds in the shop.'
    ],
    tips: [
      'Stay near the center of the slope when possible so you have room to steer in either direction.',
      'Time your jumps carefully; jumping unnecessarily on uneven slopes can cause you to lose steering control.',
      'Watch out for rolling snowballs—they move horizontally across the course and require early evasive action.',
      'Save gifts for high-tier sleds like the Santa Sleigh, which offer noticeably smoother handling and tighter turning radii.'
    ],
    controlsText: 'A / D or Left / Right Arrows to steer. W or Up Arrow / Spacebar to jump over obstacles.',
    keycaps: ['arrows', 'wasd', 'space'],
    developer: 'New Kids Games',
    release: '2020'
  },
  'monkey mart': {
    displayName: 'Monkey Mart',
    title: 'Monkey Mart: Supermarket Idle Tycoon',
    catalogDesc: 'Run your very own bustling jungle supermarket! Plant crops, harvest fresh bananas and corn, stock shelves, operate the checkout counter, and hire helpful monkey staff to expand your retail empire.',
    paragraphs: [
      'Monkey Mart is a charming and addictive idle supermarket management game developed by TinyDobbins. You play as an ambitious monkey entrepreneur building a thriving retail store from the ground up in the heart of the jungle.',
      'Begin by planting banana trees and stocking the initial food display. As animal customers rush into your store with shopping baskets, ring them up at the cash register, collect piles of cash, and reinvest your profits into new merchandise aisles—including corn, eggs, milk, and baked pastries.',
      'Hire monkey assistants, upgrade their carrying capacity and walking speed, and open multiple supermarket branches across different biomes to establish the most successful retail empire in the jungle.'
    ],
    howTo: [
      'Move your monkey manager around the supermarket using WASD or Arrow Keys.',
      'Walk to crop stations to plant and harvest fresh produce like bananas, corn, and wheat.',
      'Carry harvested produce to store displays to keep shelves stocked for waiting customers.',
      'Stand behind the cash register to check out customers, collect cash stacks, and purchase store expansions.'
    ],
    tips: [
      'Upgrade your manager\'s movement speed and item capacity first to restock multiple aisles in a single trip.',
      'Hire staff members as soon as they become available; assistants automate harvesting and keep customers moving.',
      'Don\'t let customer lines at the cash register get too long, or impatient shoppers will drop their groceries and leave.',
      'Upgrade appliances like the microwave and egg incubator to sell higher-value prepared goods for bigger profits.'
    ],
    controlsText: 'WASD or Arrow Keys to move your monkey manager. All interactions happen automatically when walking near stations.',
    keycaps: ['wasd', 'arrows'],
    developer: 'TinyDobbins',
    release: '2022'
  },
  'minecraft': {
    displayName: 'Minecraft Classic',
    title: 'Minecraft Classic: Authentic Creative Sandbox',
    catalogDesc: 'The official original browser release of Mojang\'s world-changing sandbox game. Build anything you can imagine with 32 classic block types, invite friends with multiplayer links, and unleash pure creativity.',
    paragraphs: [
      'Minecraft Classic is the authentic original web release of Mojang\'s legendary creative sandbox game, celebrating the historic 2009 edition that started a global cultural phenomenon. Step into an infinite voxel landscape where imagination is your only limit.',
      'Enjoy classic Creative mode freedom with 32 iconic block types—including cobblestone, dirt, oak planks, colored wools, gold, and glass. Build sprawling castles, intricate statues, towering lighthouses, or subterranean labyrinths.',
      'Featuring authentic nostalgic textures, retro block physics, and instant web multiplayer, you can generate custom world sizes and share your world link with friends to build monumental creations together directly in your browser.'
    ],
    howTo: [
      'Move around the 3D voxel world with WASD and use Spacebar to jump over blocks.',
      'Left-click to break blocks and Right-click to place the selected block from your toolbar.',
      'Press B to open the block selection palette and choose from 32 authentic classic building materials.',
      'Press T to chat with friends, R to respawn at the world spawn point, and Enter to set a custom spawn location.'
    ],
    tips: [
      'Use classic block physics to your advantage: sand and gravel fall with gravity, while all other materials stay suspended.',
      'Press F to adjust render distance if you want to inspect huge mega-builds or improve framerates on school Chromebooks.',
      'Build tall landmark towers near your primary base so you never lose your orientation when exploring.',
      'Invite friends by clicking the "Host game" button and copying the generated URL into your chat or group.'
    ],
    controlsText: 'WASD to move, Spacebar to jump. Left Click to mine/destroy, Right Click to place blocks. B to open block menu.',
    keycaps: ['wasd', 'space', 'mouse', 'B'],
    developer: 'Mojang Studios',
    release: '2009'
  },
  'temple run 2': {
    displayName: 'Temple Run 2',
    title: 'Temple Run 2: The Definitive Jungle Escape',
    catalogDesc: 'Sprint, jump, turn, and slide past perilous cliffs, zip lines, mine carts, and flaming traps while escaping the terrifying Demon Monkey in Imangi Studios\' legendary endless runner.',
    paragraphs: [
      'Temple Run 2 redefined the endless runner genre with its stunning 3D vistas, heart-pounding verticality, and breakneck action. Developed by Imangi Studios, players sprint along treacherous cliff edges and ancient ruined temples with the cursed idol in hand and a ferocious Demon Monkey hot on their heels.',
      'Experience dynamic environmental hazards including zip-lining across dizzying chasms, ducking beneath spinning circular saw blades, leaping over raging waterfalls, and steering runaway mine carts through subterranean caverns.',
      'Collect shiny gold coins to activate supercharged character power-ups like the Coin Magnet, Shield, and Boost, and unlock a cast of athletic adventurers with unique stats and abilities.'
    ],
    howTo: [
      'Swipe or press Up Arrow / W to jump over gaps, tree roots, and fiery traps.',
      'Swipe or press Down Arrow / S to slide under low-hanging arches, rocks, and spinning saw blades.',
      'Press Left or Right Arrow / A or D to make sharp 90-degree turns at intersections.',
      'Use Left and Right to tilt and collect coins along the curves of the pathway or steer your mine cart.'
    ],
    tips: [
      'Always prioritize sliding or jumping over coin collecting—missing a coin hurts your score, but missing a turn ends your run.',
      'Activate your shield power-up early in long runs to protect against sudden obstacle collisions.',
      'In mine cart sequences, tilt your cart toward the intact track rail well before reaching broken track segments.',
      'Upgrade the "Coin Value" stat in the abilities menu first so double and triple coins spawn earlier in your runs.'
    ],
    controlsText: 'W / Up Arrow to jump. S / Down Arrow to slide. A / D or Left / Right Arrows to turn and tilt. Double-tap to activate power-up.',
    keycaps: ['arrows', 'wasd', 'space'],
    developer: 'Imangi Studios',
    release: '2013'
  },
  'escape road': {
    displayName: 'Escape Road',
    title: 'Escape Road: High-Speed Police Chase Fugitive',
    catalogDesc: 'Get behind the wheel of a getaway car and outrun relentless police pursuit through dense city streets! Drift around tight corners, dodge barricades, and smash cop cars in this intense chase simulator.',
    paragraphs: [
      'Escape Road is a thrilling high-octane 3D police chase simulator where you play as a bank robber orchestrating a daring getaway. Pursued by an army of police cruisers, armored SWAT vans, and police helicopters, survival depends on sharp driving reflexes and fearless maneuvers.',
      'Navigate dense urban traffic, construction sites, and winding alleyways. Bait pursuing cop cars into colliding with obstacles or each other, perform handbrake drifts around tight city blocks, and navigate changing terrain from city streets to desert highways.',
      'Survive longer to earn substantial getaway cash, allowing you to unlock and upgrade dozens of getaway rides—from nimble tuner hatchbacks and armored trucks to exotic high-speed supercars.'
    ],
    howTo: [
      'Use A/D or Left/Right Arrow Keys to steer your getaway car through city streets.',
      'Dodge incoming roadblocks, spike strips, and pursuing police squad cars trying to box you in.',
      'Bait pursuing cruisers into slamming into buildings, lampposts, and opposing traffic.',
      'Survive as many seconds as possible without getting immobilized to bank cash and unlock new vehicles.'
    ],
    tips: [
      'Sharp, unexpected U-turns and 90-degree alley drifts cause pursuing squad cars to overshoot and crash into each other.',
      'Avoid driving in straight lines on open highways—police helicopters and interceptors will easily pit maneuver you.',
      'Watch out for armored SWAT trucks; they are heavy and will flip lighter getaway cars on impact.',
      'Unlock heavy-duty vehicles like pickup trucks and vans for greater durability against police ramming.'
    ],
    controlsText: 'A / D or Left / Right Arrow keys to steer. W to accelerate forward, S to brake / reverse.',
    keycaps: ['arrows', 'wasd'],
    developer: 'Vectaria / Escape Games',
    release: '2023'
  },
  'subway surfers': {
    displayName: 'Subway Surfers',
    title: 'Subway Surfers: World Tour Endless Train Runner',
    catalogDesc: 'Dash as fast as you can through bustling train yards! Help Jake, Tricky & Fresh escape from the grumpy Inspector and his dog in SYBO and Kiloo\'s world-famous endless arcade runner.',
    paragraphs: [
      'Subway Surfers is the most played mobile runner of all time, created by Kiloo and SYBO Games. Sprint along vibrant subway tracks, grinding on power cables, leaping across speeding train carriages, and dodging barriers while leaving a trail of colorful graffiti behind.',
      'Experience lightning-fast arcade platforming with iconic power-ups: grab the Jetpack to soar high above the tracks collecting gold coins, strap on Super Sneakers for super-jumps, or equip the 2X Multiplier to shatter your personal records.',
      'Double-tap to summon your hoverboard—a trusty companion that provides smooth surfing style and acts as a vital protective shield against collisions. Unlock dozens of world-tour outfits, hoverboards, and legendary characters.'
    ],
    howTo: [
      'Swipe or press Up Arrow / W to jump over train bumpers and barricades.',
      'Swipe or press Down Arrow / S to roll under high barriers and cancel jumps quickly.',
      'Swipe or press Left and Right Arrow / A and D to switch between the three railway tracks.',
      'Double-tap Spacebar to activate your hoverboard for temporary invulnerability against crashes.'
    ],
    tips: [
      'Down-swipe jump cancel: swiping down while airborne forces Jake to land immediately, perfect for grabbing coins or avoiding sudden obstacles.',
      'Always keep a hoverboard active when running at high speeds; if you clip a train, the board absorbs the hit and keeps your run alive.',
      'Upgrade the Jetpack and Coin Magnet in the shop first to maximize coin collection on every run.',
      'Stay on top of train roofs whenever possible; the top lane has fewer obstacles and clearer sightlines than the tracks below.'
    ],
    controlsText: 'Arrow Keys or WASD to jump, roll, and change tracks. Spacebar to activate Hoverboard.',
    keycaps: ['arrows', 'wasd', 'space'],
    developer: 'SYBO Games / Kiloo',
    release: '2012'
  },
  'block blast': {
    displayName: 'Block Blast',
    title: 'Block Blast: Brain-Teasing Block Puzzle Combo',
    catalogDesc: 'The viral block puzzle sensation that blends Tetris with 8x8 grid clearing! Place polyomino shapes onto the board, clear complete rows and columns, and build satisfying combo multipliers.',
    paragraphs: [
      'Block Blast is a massively popular, relaxing yet deeply strategic grid puzzle game. Played on a clean 8x8 grid, players are presented with sets of 3 distinct block shapes at a time to drag and position strategically onto the board.',
      'Clearing full horizontal rows or vertical columns triggers explosive visual effects and frees up crucial space for larger shapes. By clearing lines on consecutive moves, you activate cascading Combo chains that multiply your score exponentially.',
      'With no stressful countdown timers, Block Blast is the perfect blend of mindful relaxation and spatial reasoning, rewarding players who plan multiple placements in advance and maintain open board layouts.'
    ],
    howTo: [
      'Drag and drop blocks from the bottom tray onto the 8x8 playing grid.',
      'Fill complete horizontal lines or vertical columns to blast blocks away and free up space.',
      'Clear multiple lines simultaneously or on consecutive placements to trigger massive combo multipliers.',
      'Keep placing blocks until none of the three current shapes fit on the board, ending the game.'
    ],
    tips: [
      'Always leave room for the dreaded 3x3 square block; getting stuck with a large block when space is tight ends your run.',
      'Prioritize building combo streaks: clearing at least one line per turn yields exponentially higher scores than sporadic large clears.',
      'Keep the center of the board as open as possible by clearing perimeter rows first.',
      'Inspect all 3 available shapes before placing your first block so you can visualize the whole turn sequence.'
    ],
    controlsText: 'Click and drag shapes with your Mouse, or touch and drag on mobile devices to place blocks.',
    keycaps: ['mouse'],
    developer: 'Hungry Studio',
    release: '2022'
  },
  'mariokart wii': {
    displayName: 'Mario Kart Wii',
    title: 'Mario Kart Wii: Web Kart Racing Championship',
    catalogDesc: 'Race iconic Nintendo karts and bikes across legendary tracks! Drift, throw green shells, drop banana peels, and blast through Mushroom Kingdom circuits in this classic arcade racer.',
    paragraphs: [
      'Mario Kart Wii brings the thrilling competitive spirit of Nintendo\'s legendary kart racer directly to your web browser. Jump behind the wheel as Mario, Luigi, Bowser, or Peach and race across beloved circuits filled with jumps, boost pads, and hairpin turns.',
      'Master the physics of powersliding and drifting around bends to charge up mini-turbos that launch you ahead of the pack. Navigate shortcut ramps, hit trick boosts off hills, and battle for the checkered flag across competitive Grand Prix cups.',
      'Unleash classic Mario Kart weapons: snipe rivals with green shells, homing red shells, defensive banana peels, and invulnerability Super Stars as you battle to claim first place on the championship podium.'
    ],
    howTo: [
      'Use Arrow Keys or WASD to accelerate, brake, and steer your kart around the track.',
      'Hold the drift button while turning into corners to initiate a powerslide and build up blue and orange mini-turbos.',
      'Drive through spinning Item Boxes to acquire random offensive and defensive weapons.',
      'Press Spacebar or Shift to deploy your held item forward at rivals or drop it behind as a trap.'
    ],
    tips: [
      'Release your drift right as your tires spark orange to unleash a super mini-turbo boost out of corners.',
      'Hold banana peels and green shells behind your kart by holding the item key to protect yourself from incoming red shells.',
      'Hit trick ramps by tapping jump right at the crest of jumps to gain a quick burst of boost upon landing.',
      'Take advantage of off-road shortcuts whenever you have a Mushroom boost to bypass long curves.'
    ],
    controlsText: 'WASD or Arrow Keys to drive and steer. Spacebar to use items. Shift or E to drift.',
    keycaps: ['wasd', 'arrows', 'space', 'shift'],
    developer: 'Nintendo / Web Emulation',
    release: '2008'
  },
  'zigzag': {
    displayName: 'ZigZag',
    title: 'ZigZag: Endless Wall-Balancing Precision',
    catalogDesc: 'Stay on the wall and do as many zigzags as you can! Tap to switch directions, collect pink diamonds, and survive the ever-narrowing floating zigzag path in Ketchapp\'s hypnotic arcade classic.',
    paragraphs: [
      'ZigZag is a minimalist, hyper-addictive reflex arcade game developed by Ketchapp. Controlling a sleek rolling sphere perched atop an endless floating isometric wall, players must navigate a maze of razor-sharp 90-degree corners.',
      'The gameplay mechanics are completely distilled: tap the screen or press the spacebar to instantly toggle your ball\'s direction between left and right. The wall twists and turns unpredictably, demanding intense focus and rhythmic finger tapping.',
      'Collect sparkling pink gems along the wall edge to unlock stylish new ball skins and color palettes, striving to set unbeatable high scores and climb personal best leaderboards.'
    ],
    howTo: [
      'Click the mouse, tap the screen, or press Spacebar to toggle the ball\'s roll direction 90 degrees.',
      'Time each directional tap to keep the ball centered on the narrow wall without rolling off into the abyss.',
      'Collect pink diamonds along the path to increase your score bonus and unlock cosmetic ball designs.',
      'Survive as many zigzag transitions as possible to set your personal high score record.'
    ],
    tips: [
      'Find a steady tapping rhythm; rapid zigzags require quick double and triple taps in quick succession.',
      'Keep your eyes focused one or two turns ahead of the ball so you can prepare your tapping sequence.',
      'Don\'t risk falling off the wall for out-of-the-way diamonds—staying alive is always worth more points.',
      'Relax your hands and fingers: tension leads to late taps on sharp hairpin turns.'
    ],
    controlsText: 'Left Mouse Click, Spacebar, or Screen Tap to switch direction.',
    keycaps: ['mouse', 'space'],
    developer: 'Ketchapp',
    release: '2015'
  },
  'capybara clicker': {
    displayName: 'Capybara Clicker',
    title: 'Capybara Clicker: The Ultimate Chill Clicker Tycoon',
    catalogDesc: 'Tap the friendly capybara to produce trillions of chill rodents! Buy adorable capybara outfits, unlock climate weather, and automate your capybara production empire with golden upgrades.',
    paragraphs: [
      'Capybara Clicker is the viral idle clicker sensation starring the world\'s most chill and beloved rodent. Click the giant capybara to generate capybaras, watching your rodent counter skyrocket from humble dozens into billions and quintillions.',
      'Invest your capybara currency into automated production upgrades—from friendly capybara companions and cozy hot spring baths to corporate capybara farms and galactic capybara temples that produce millions of capybaras per second passively.',
      'Dress up your capybara in dozens of hilarious outfits, including cowboy hats, wizard robes, and regal crowns. Change dynamic weather backdrops from sunny tropical rain to snowy blizzards, and trigger prestige ascensions for permanent production multipliers.'
    ],
    howTo: [
      'Click or tap the capybara in the center of the screen to produce capybaras manually.',
      'Purchase automatic production generators in the right-hand shop to generate capybaras continuously.',
      'Buy tier multipliers and golden capybara perks to boost your click efficiency and passive output.',
      'Unlock stylish hats, costumes, and environmental themes in the customization menu.'
    ],
    tips: [
      'Balance manual click upgrades with passive generators early on to build a steady stream of income.',
      'Click Golden Capybaras whenever they appear on the screen to trigger massive temporary production frenzy buffs.',
      'Check the achievements tab regularly—unlocking milestones grants permanent global multiplier bonuses.',
      'Use Ascend resets once progression slows down to gain permanent Golden Capybara multipliers.'
    ],
    controlsText: 'Mouse click or touchscreen tap to generate capybaras and purchase upgrades.',
    keycaps: ['mouse'],
    developer: 'Euann',
    release: '2022'
  },
  '2048': {
    displayName: '2048',
    title: '2048: The Classic Tile-Merging Mathematical Puzzle',
    catalogDesc: 'Slide numbered tiles on a 4x4 grid and merge matching numbers! Combine 2s into 4s, 8s, 16s... all the way to the legendary 2048 tile in Gabriele Cirulli\'s iconic mathematical brainteaser.',
    paragraphs: [
      '2048 is the legendary open-source sliding tile puzzle game created by Gabriele Cirulli that captivated the world. Played on a clean 4x4 grid, the objective is deceptively simple: slide numbered tiles to merge identical values and work your way up to the mythical 2048 tile.',
      'Every time you swipe or press an arrow key, all tiles slide as far as they can in that direction, and a new "2" or "4" tile spawns in an empty spot. When two tiles with the same number collide, they combine into a single tile with double the value.',
      'Reaching 2048 requires thoughtful spatial strategy, foresight, and disciplined corner management. Keep pushing past 2048 to unlock 4096, 8192, and beyond to achieve high-score mastery.'
    ],
    howTo: [
      'Use Arrow Keys, WASD, or swipe on touchscreen to slide all tiles in one of four directions.',
      'When two tiles with the same number touch during a slide, they merge into one tile with double the value.',
      'A new tile (valued 2 or 4) spawns randomly in an empty grid space after every move.',
      'Continue combining tiles until you create the 2048 tile, or until the grid fills completely with no moves left.'
    ],
    tips: [
      'The Corner Strategy: Pick one corner (usually bottom-right or bottom-left) and keep your highest-value tile anchored there at all times.',
      'Never swipe in the opposite direction of your anchored corner, as this can dislodge your highest tile into the middle of the board.',
      'Build a snake-like chain of decreasing numbers leading into your highest tile for easy cascading merges.',
      'Keep the grid as clean and open as possible; having 3-4 empty tiles gives you room to recover from bad spawns.'
    ],
    controlsText: 'Arrow Keys or WASD to slide tiles. Swipe gestures supported on mobile/touch devices.',
    keycaps: ['arrows', 'wasd'],
    developer: 'Gabriele Cirulli',
    release: '2014'
  },
  'ragdoll archers': {
    displayName: 'Ragdoll Archers',
    title: 'Ragdoll Archers: Physics-Driven Archery Duels',
    catalogDesc: 'Draw your bow, calibrate trajectory, and loose lethal arrows in intense physics-based stickman archery battles! Equip flaming, explosive, and piercing arrows to defeat armored enemies and giant bosses.',
    paragraphs: [
      'Ragdoll Archers is an exhilarating physics-based archery combat game developed by Ericetto. Stepping into the shoes of a heroic stickman archer, players must defend against endless waves of enemy archers, swordsmen, spearmen, and towering bosses.',
      'Aiming relies on satisfying ragdoll physics: pull back your bowstring to adjust tension, angle your trajectory to compensate for gravity, and release to send arrows whistling through the air. Score instant-kill headshots, sever enemy limbs, and watch ragdoll enemies tumble from their perches.',
      'Collect apples and gems dropped by defeated foes to upgrade your archer\'s maximum health, stamina, draw speed, and unlock specialized arrow types—including triple-shot volleys, explosive warheads, freezing frost arrows, and electrified bolts.'
    ],
    howTo: [
      'Click and drag your mouse (or touch screen) backward from your archer to aim and draw the bowstring.',
      'Release the mouse button to fire your arrow along the trajectory arc.',
      'Aim for the head or vital points to deliver lethal critical hits before enemies can return fire.',
      'Spend earned apples and gems between rounds to upgrade stats, armor, and specialized ammunition.'
    ],
    tips: [
      'Headshots are king: a single arrow to the head eliminates most basic enemies instantly, saving precious stamina.',
      'Lead moving targets by aiming slightly in front of walking swordsmen and airborne enemies.',
      'Shoot incoming enemy arrows out of mid-air to protect yourself from lethal counter-attacks.',
      'Upgrade stamina and health early so you can maintain prolonged aim and survive stray body hits.'
    ],
    controlsText: 'Left Mouse Click and drag to aim bow; release to fire. Spacebar to jump. Supports 1-Player and 2-Player modes.',
    keycaps: ['mouse', 'space'],
    developer: 'Ericetto',
    release: '2023'
  },
  'hobo': {
    displayName: 'Hobo',
    title: 'Hobo: Classic Street Brawler Adventure',
    catalogDesc: 'The notorious flash brawler classic! Wake up on the wrong side of the alley and unleash hilarious, disgusting combo attacks on street thugs, cops, and sanitation workers in this retro beat \'em up.',
    paragraphs: [
      'Hobo is Armor Games\' infamous and irreverent beat \'em up classic created by SeethingSwarm. After being rudely awakened from a peaceful nap in his garbage dump by an aggressive police officer, Hobo decides he has had enough and embarks on a wild rampage through the city.',
      'Punch, kick, and deliver an outrageous arsenal of grotesque fighting moves—including spitting, belching, eye-poking, and vomit attacks—to clobber waves of citizens, garbage collectors, police officers, and armed SWAT units.',
      'Pick up trash cans, glass bottles, and street debris to use as improvised melee weapons. Memorize secret combo codes revealed at the end of each stage to unleash even more absurd and devastating street-fighting moves.'
    ],
    howTo: [
      'Use the Arrow Keys to walk and run through the city streets.',
      'Press A to punch, slap, and pick up throwable street debris.',
      'Press S to kick and deliver low strikes.',
      'Combine directional movement with attack keys (e.g., A-S, A-A-S) to unleash devastating gross-out combo specials.'
    ],
    tips: [
      'Keep moving: standing still allows groups of cops to surround and stun-lock your character.',
      'Pick up bottles and trash bins—thrown projectiles knock multiple enemies off their feet from a safe distance.',
      'Memorize combo inputs unlocked after completing levels; specials deal massive area-of-effect damage to crowds.',
      'Corner enemies against the edge of the screen to juggle them with relentless punch-kick combos.'
    ],
    controlsText: 'Arrow Keys to move. A to punch and pick up objects. S to kick. P to pause.',
    keycaps: ['arrows', 'A', 'S', 'P'],
    developer: 'SeethingSwarm / Armor Games',
    release: '2008'
  },
  'getaway shootout': {
    displayName: 'Getaway Shootout',
    title: 'Getaway Shootout: Chaotic Physics Getaway Race',
    catalogDesc: 'Race to the getaway vehicle in Michael Eichler\'s chaotic physics platformer! Leap, somersault, grab sniper rifles and rocket launchers, and blast rivals to secure the final seat in the chopper.',
    paragraphs: [
      'Getaway Shootout is a wildly chaotic physics-based racing platformer created by New Eich Games. Up to 4 players compete in frantic races across precarious rooftops, speeding trains, and construction sites to be the first to reach the getaway vehicle—whether it\'s a helicopter, boat, or semi-truck.',
      'The physics movement is delightfully clumsy: characters cannot simply run, but must instead lean left or right and jump in awkward physics-driven hops. Timing your jumps across moving obstacles, elevators, and crumbling ledges is an exercise in pure hilarity.',
      'Pick up an arsenal of powerful weapons—sniper rifles, shotguns, rocket launchers, and grenades—along with power-ups like jetpacks and energy drinks to blast your opponents backward and secure your escape.'
    ],
    howTo: [
      'Press W (Player 1) or I (Player 2) to jump backward; press E (Player 1) or O (Player 2) to jump forward.',
      'Hold the jump keys to lean and charge up higher, longer leaps across wide gaps.',
      'Press your attack key (R for Player 1, P for Player 2) to fire weapons or use power-ups.',
      'Be the first player to touch the getaway helicopter, boat, or truck to win the round.'
    ],
    tips: [
      'Charge your jumps: holding the lean button before jumping generates much greater horizontal distance than tapping.',
      'Pick up weapons immediately; shooting opponents sends them flying backward across platforms and ruins their momentum.',
      'Watch out for moving elevators and trains—falling into the gap between cars or off rooftops results in instant disqualification.',
      'Use power-ups strategically: jetpacks allow you to bypass complex climbing obstacles and fly straight to the extraction zone.'
    ],
    controlsText: 'Player 1: W to jump left, E to jump right, R to use weapon. Player 2: I to jump left, O to jump right, P to use weapon.',
    keycaps: ['W', 'E', 'R', 'I'],
    developer: 'New Eich Games',
    release: '2018'
  },
  'idle dice': {
    displayName: 'Idle Dice',
    title: 'Idle Dice: Satisfying Probability Incremental Tycoon',
    catalogDesc: 'Roll the dice, score poker combinations, and watch your multipliers explode! Unlock up to 5 dice, buy progressive multiplier cards, and ascend through prestige card decks in this addictive idle game.',
    paragraphs: [
      'Idle Dice is an ingenious idle incremental game developed by Luts91. Blending the satisfying tactile nature of rolling dice with deep exponential progression, players roll dice on a clean felt table to generate points and multiply their fortune.',
      'Start with a single 6-sided die and earn points with every roll. Use your points to unlock additional dice, upgrade their face values, and score lucrative dice combinations like pairs, triples, full houses, and Yahtzee-style 5-of-a-kinds.',
      'Convert your points into a deck of Tarot and playing cards, each providing massive permanent multipliers to specific dice and combos. Fill the entire card deck to trigger a prestige reset and ascend to even greater mathematical heights.'
    ],
    howTo: [
      'Click "Roll" to roll your active dice manually, or let the auto-roll system roll them continuously.',
      'Earn points based on the face values of your dice and bonus multiplier combos (pairs, straights, full house).',
      'Spend points in the shop to purchase new dice, upgrade roll speeds, and boost combo payouts.',
      'Draw cards to complete your deck and trigger Ascend resets for permanent game-changing multipliers.'
    ],
    tips: [
      'Unlock all 5 dice as quickly as possible—having 5 dice unlocks the highest-paying poker-hand combinations.',
      'Prioritize auto-roll speed and combo multipliers to maximize hands-free point generation.',
      'Draw cards whenever affordable; card deck bonuses apply universally and stack multiplicatively.',
      'Use the Roulette wheel spin whenever available to win massive point jackpots and free card draws.'
    ],
    controlsText: 'Mouse click or touchscreen tap to roll dice, purchase upgrades, and manage cards. Spacebar to roll manually.',
    keycaps: ['mouse', 'space'],
    developer: 'Luts91',
    release: '2019'
  },
  'alien hominid': {
    displayName: 'Alien Hominid',
    title: 'Alien Hominid: Legendary Run \'n Gun Arcade Action',
    catalogDesc: 'The legendary flash masterpiece by Tom Fulp and Dan Paladin! Blast through FBI agents, bite heads off, dig underground, and pilot alien hovercrafts in this hand-drawn run \'n gun classic.',
    paragraphs: [
      'Alien Hominid is the groundbreaking hand-drawn 2D run \'n gun arcade game created by Tom Fulp and Dan Paladin that catapulted The Behemoth into indie gaming history. After crashing your flying saucer on Earth, you must fight your way through legions of FBI secret agents to reclaim your spacecraft.',
      'Featuring lightning-fast arcade shooting, jump-and-gun combat, and fluid animation, players can blast ray guns in eight directions, toss devastating grenades, burrow underground to ambush agents from below, and jump onto enemies\' shoulders to bite their heads off!',
      'Commandeer enemy automobiles, pilot your recovered UFO, and battle colossal mechanical boss machines in one of the most stylish and challenging side-scrolling shooters ever created.'
    ],
    howTo: [
      'Use Arrow Keys or WASD to run, duck, and aim your blaster in 8 directions.',
      'Press A to fire your blaster; hold A to charge up a devastating giant plasma blast.',
      'Press S to jump over incoming bullets, landmines, and rocket salvos.',
      'Press D to toss high-explosive grenades, and press Down + S to burrow underground.'
    ],
    tips: [
      'Burrowing underground (Down + Jump) makes your alien completely invulnerable to enemy gunfire and explosions.',
      'Charge your blaster shot while advancing through empty areas so you can vaporize heavy vehicles instantly.',
      'Jump onto FBI agents\' heads to bite them off—this grants temporary invulnerability frames during the animation.',
      'Keep moving and jumping continuously; staying stationary in one spot makes you an easy target for enemy snipers.'
    ],
    controlsText: 'Arrow Keys to move and aim. A to shoot blaster. S to jump. D to throw grenades. Down + S to burrow.',
    keycaps: ['arrows', 'A', 'S', 'D'],
    developer: 'The Behemoth / Tom Fulp & Dan Paladin',
    release: '2002'
  },
  'space waves': {
    displayName: 'Space Waves',
    title: 'Space Waves: High-Speed Neon Rhythm Waver',
    catalogDesc: 'Navigate a fast-moving neon wave through razor-sharp geometric tunnels! Inspired by Geometry Dash Wave mode, time your diagonal zigzags to avoid spikes and conquer dozens of pulsating levels.',
    paragraphs: [
      'Space Waves is a blisteringly fast rhythm-action reflex game developed by do.Games, heavily inspired by the beloved Wave vehicle mode from Geometry Dash. Players control a glowing neon arrow darting diagonally through complex geometric corridors.',
      'The mechanics demand absolute precision: holding the button makes your wave dart diagonally upward at a 45-degree angle, while releasing it causes it to dive diagonally downward. Navigate narrow zigzag slots, avoid spinning buzzsaws, and squeeze through microscopic openings.',
      'With over 30 distinct levels spanning multiple difficulty ratings—from relaxing beginner tunnels to nearly impossible demon gauntlets—Space Waves delivers pulse-pounding rhythm gameplay set to energetic electronic tracks.'
    ],
    howTo: [
      'Press and hold the Left Mouse Button, Spacebar, or Up Arrow to steer your wave diagonally upward.',
      'Release the button or key to allow your wave to dive diagonally downward.',
      'Weave cleanly through narrow gaps between floating spikes, moving barriers, and hazard walls.',
      'Reach the end of the neon corridor without touching any obstacles to complete the stage.'
    ],
    tips: [
      'Use quick, rhythmic micro-taps rather than long presses to maintain a flat, level trajectory through tight horizontal corridors.',
      'Watch the layout two obstacles ahead of your arrow so you don\'t get trapped by sudden shifts in wall height.',
      'Listen to the music: changes in the techno beat often coincide with required directional switches.',
      'Start on the lower-difficulty green stages to build up muscle memory before tackling the high-speed demon tracks.'
    ],
    controlsText: 'Click/Hold Left Mouse Button, Spacebar, or Up Arrow to move up; release to dive down.',
    keycaps: ['mouse', 'space', 'up'],
    developer: 'do.Games',
    release: '2023'
  },
  'wake up the box': {
    displayName: 'Wake Up the Box',
    title: 'Wake Up the Box: Creative Physics Puzzle Drawing',
    catalogDesc: 'Wake up the snoring wooden box by attaching custom wooden shapes! Draw planks, wheels, and levers to build physics contraptions that tip, push, and roll the sleepy box off its ledge.',
    paragraphs: [
      'Wake Up the Box is a delightful physics puzzle game created by Eugene Karataev. The sleepy wooden box "Mister Box" has fallen into a deep slumber on precarious wooden beams and scaffolds, and it\'s your job to give him a rude awakening!',
      'Using an innovative physics construction mechanic, players draw and attach wooden planks, counterweights, and wheels onto designated anchor beams. Let gravity, leverage, and momentum do the work as your creations tilt, tumble, and knock Mister Box off his perch.',
      'Featuring dozens of progressively challenging puzzle levels, Wake Up the Box challenges your understanding of balance, center of mass, and mechanical advantage in a charming, physics-playground environment.'
    ],
    howTo: [
      'Click and drag your mouse within the designated drawing area to draw custom wooden shapes and beams.',
      'Attach drawn shapes to existing brown wooden structures to create levers, pendulums, and ramps.',
      'Watch physics simulate in real time as gravity pulls your attached weight down.',
      'Knock or push the sleeping wooden box off the platform until he wakes up and falls off-screen.'
    ],
    tips: [
      'Draw long, heavy beams to create powerful levers that multiply your pushing force against the box.',
      'Use circular or rounded shapes on slopes to create rolling boulders that build up high speed before impact.',
      'Take advantage of pendulums: attaching a heavy block to a high pivot creates a wrecking ball effect.',
      'If your contraption doesn\'t quite do the trick, press R to instantly reset and refine your drawn shape.'
    ],
    controlsText: 'Left Mouse Click and drag to draw wooden shapes. R to restart level.',
    keycaps: ['mouse', 'R'],
    developer: 'Eugene Karataev',
    release: '2010'
  },
  'mr mine': {
    displayName: 'Mr. Mine',
    title: 'Mr. Mine: Deep Earth Mining Incremental Tycoon',
    catalogDesc: 'Dig deep into the planet\'s core in Playsaurus\' classic subterranean mining tycoon! Hire miner crews, upgrade drills, discover alien relics, and excavate rare minerals thousands of kilometers down.',
    paragraphs: [
      'Mr. Mine is an expansive subterranean idle mining tycoon developed by Playsaurus (creators of Clicker Heroes). Commanding an ambitious mining operation, players drill thousands of kilometers down into the Earth\'s crust to uncover riches, ancient mysteries, and extraterrestrial secrets.',
      'Start with a lone miner equipped with a pickaxe and gradually expand your operation into automated steam drills, nuclear excavators, and alien technology. Hire mining crews, upgrade equipment capacity, and discover valuable mineral veins including coal, gold, emeralds, and mysterious radioactive ores.',
      'Build specialized underground workshops, discover hidden treasure chests, trade with eccentric underground merchants, and craft powerful relics to venture deeper than anyone thought possible.'
    ],
    howTo: [
      'Click on dirt and rock walls to mine minerals manually, or let your hired miner crews work automatically.',
      'Sell your excavated minerals in the surface depot to earn cash for equipment and drill upgrades.',
      'Upgrade your drill to burrow deeper into the earth, unlocking new mineral layers and underground facilities every 100 meters.',
      'Craft blueprints, hire scientists, and launch drones to automate excavation across deep shafts.'
    ],
    tips: [
      'Upgrade your drill engine and fuel capacity as soon as possible to unlock deeper, more lucrative mineral tiers.',
      'Save your rarest gems for crafting building blueprints rather than selling them for quick surface cash.',
      'Click on treasure chests that spawn along the mine shafts for instant piles of gold, tickets, and rare minerals.',
      'Use the underground trading post to swap abundant minerals for rare resources needed for advanced upgrades.'
    ],
    controlsText: 'Mouse click or touchscreen tap to mine, navigate shafts, and purchase upgrades. Hotkeys for quick shaft navigation.',
    keycaps: ['mouse', 'arrows'],
    developer: 'Playsaurus',
    release: '2012'
  },
  'g switch 3': {
    displayName: 'G-Switch 3',
    title: 'G-Switch 3: Gravity-Defying Multiplayer Runner',
    catalogDesc: 'Flip gravity at high speed in Vasco Freitas\' hit multiplayer runner! Run along ceilings and floors, dodge twisting saw blades, and compete with up to 8 players locally on a single keyboard.',
    paragraphs: [
      'G-Switch 3 is the acclaimed third installment in Vasco Freitas\' hit gravity-flipping runner franchise. Running at breakneck speed through futuristic cybernetic corridors, you must flip gravity upside down to run on ceilings and walls while evading deadly obstacles and bottomless pits.',
      'Introducing new gameplay mechanics—including gravity-inverting orbs, speed boost pads, and a mind-bending clone mechanic that splits your runner into two simultaneous characters—G-Switch 3 tests your multitasking reflexes to the maximum.',
      'Beyond its thrilling single-player campaign and endless survival mode, G-Switch 3 features legendary local multiplayer support for up to 8 players on a single keyboard, making it the ultimate party game for friends and classrooms.'
    ],
    howTo: [
      'Press your assigned key (Left Click or Spacebar for Player 1) to invert gravity and flip to the opposite surface.',
      'Time your gravity flips so you land cleanly on running tracks and avoid falling into empty space.',
      'Navigate multi-runner clone sequences where one key controls multiple runners on separate tracks simultaneously.',
      'Be the last runner surviving in multiplayer or reach the portal in single-player levels to progress.'
    ],
    tips: [
      'Gravity can only be inverted while your runner\'s feet are touching a surface—you cannot flip mid-air!',
      'Anticipate oncoming walls and saw blades early; flipping right as you approach an obstacle is often too late.',
      'In clone sequences, keep your eyes on the leading runner first to ensure they clear upcoming lethal hazards.',
      'Use gravity flips proactively to collect speed boosters and avoid slowing down on uneven slopes.'
    ],
    controlsText: 'Player 1: Left Click / Spacebar. Supports up to 8 players with custom single-button keyboard bindings.',
    keycaps: ['space', 'mouse'],
    developer: 'Vasco Freitas',
    release: '2016'
  },
  'koalas to the max': {
    displayName: 'Koalas to the Max',
    title: 'Koalas to the Max: Hypnotic Circle-Splitting Art',
    catalogDesc: 'Move your cursor over colored circles to split them into four smaller dots! Uncover hidden high-resolution photographic animal portraits in this satisfying, meditative interactive art piece.',
    paragraphs: [
      'Koalas to the Max is a delightfully mesmerizing and meditative interactive art piece created by Vadim Ogievetsky. You are presented with a single large colored circle on the screen; moving your mouse or finger across it instantly splits it into four smaller quadrants.',
      'As you continue sweeping your cursor across the dots, they divide again and again into hundreds and thousands of micro-dots. Gradually, the abstract geometric dots reveal a stunning, high-resolution photographic image of adorable koalas in their natural habitat.',
      'Praised worldwide as one of the most soothing and satisfying sensory experiences on the web, Koalas to the Max is the ultimate digital stress-reliever that turns casual mouse movements into an interactive visual masterpiece.'
    ],
    howTo: [
      'Move your mouse cursor or drag your finger across the large circle on the screen.',
      'Watch circles divide into four smaller circles each time your cursor grazes over them.',
      'Continue brushing your cursor across the canvas to divide the dots down to their microscopic final layer.',
      'Reveal the complete high-definition photographic image hidden beneath the circle grid.'
    ],
    tips: [
      'Use broad sweeping circular brushstrokes to split large clusters of dots quickly.',
      'Move your cursor smoothly along lines and color borders to bring sharp edges into focus.',
      'Switch between mouse, trackpad, and touchscreen for different tactile sensations.',
      'Take your time: there are no timers or scores, just pure, relaxing sensory satisfaction.'
    ],
    controlsText: 'Move mouse cursor or swipe finger on touchscreen over circles to split them.',
    keycaps: ['mouse'],
    developer: 'Vadim Ogievetsky',
    release: '2011'
  },
  'paperio': {
    displayName: 'Paper.io',
    title: 'Paper.io: Addictive Territory Capture Conquest',
    catalogDesc: 'Paint the arena in your color and claim 100% of the map! Draw loops to conquer territory, bite opponents\' tails to eliminate them, and defend your paper empire in this classic IO game.',
    paragraphs: [
      'Paper.io is the massively popular multiplayer territory-capture game developed by Voodoo. Guiding a colorful paper cube around a blank white arena, your goal is to claim as much of the map as possible by painting territory with your color trail.',
      'Leave your base to draw enclosed loops across unclaimed ground or steal territory from rival players. But beware: while outside your territory, your tail is exposed and vulnerable! If an opponent runs across your paper trail, you are eliminated instantly.',
      'Bite opponents\' tails while they are expanding, defend your home base, and strategize your expansion to conquer 100% of the arena and become the undisputed ruler of the leaderboard.'
    ],
    howTo: [
      'Use Arrow Keys, WASD, or mouse movement to steer your colored paper block around the arena.',
      'Move outside your territory to draw a line, then return to your base to enclose and conquer the captured area.',
      'Intercept and cut through opponents\' vulnerable colored trails to eliminate them from the match.',
      'Defend your own trail: never wander too far from your home borders when aggressive rivals are nearby.'
    ],
    tips: [
      'Expand in small, disciplined bites: claiming modest loops keeps your tail short and minimizes vulnerability.',
      'Don\'t bite your own tail—colliding with your own exposed paper trail results in instant self-elimination!',
      'Bait aggressive players: pretend to wander out, then quickly hook back inside your border as they charge your tail.',
      'Steal territory directly from the server leader to rapidly diminish their map percentage.'
    ],
    controlsText: 'Arrow Keys, WASD, or Mouse to steer your paper block.',
    keycaps: ['arrows', 'wasd', 'mouse'],
    developer: 'Voodoo',
    release: '2016'
  },
  'cubes 2048': {
    displayName: 'Cubes 2048',
    title: 'Cubes 2048: Multiplayer Snake & 2048 Arena Battle',
    catalogDesc: 'Snake meets 2048 in a competitive multiplayer battle arena! Slither across the board, gobble matching numerical cubes to double your score, and swallow smaller opponents to dominate the lobby.',
    paragraphs: [
      'Cubes 2048 is an exhilarating multiplayer IO game developed by Playmost that seamlessly merges the addictive mechanics of Slither.io with the mathematical satisfaction of 2048. Controlling a crawling snake of numbered cubes, you must grow your snake and dominate the arena.',
      'Slither around the board to collect free-floating numerical blocks. Running into blocks with matching values automatically fuses them together into doubled numbers (2 + 2 = 4, 16 + 16 = 32, 512 + 512 = 1024), increasing your snake\'s total size and power.',
      'Hunt down smaller opponents and devour their trailing cubes while using speed boost to evade massive rival snakes. With colorful graphics, smooth arena physics, and intense leaderboard battles, Cubes 2048 is non-stop competitive fun.'
    ],
    howTo: [
      'Move your mouse or use WASD / Arrow Keys to steer your snake around the arena.',
      'Eat free cubes on the board with the same or lower numbers to merge them and grow your snake.',
      'Hold Left Click or Spacebar to activate speed boost to intercept rivals or escape danger.',
      'Swallow smaller opponents by ramming their cubes with your higher-numbered front blocks.'
    ],
    tips: [
      'Speed boosting burns a fraction of your score—use boost in short tactical bursts rather than holding it down.',
      'Always approach enemies with your highest number facing forward; if their front block is higher than yours, they will eat you!',
      'Circle around clusters of free cubes to harvest them safely without letting rivals swoop in.',
      'Take advantage of dividing blocks on the board to split huge rival snakes into bite-sized segments.'
    ],
    controlsText: 'Mouse to steer. Left Click or Spacebar to speed boost. Touch controls supported on mobile.',
    keycaps: ['mouse', 'space'],
    developer: 'Playmost',
    release: '2022'
  }
};

applyBatch(BATCH_1);
