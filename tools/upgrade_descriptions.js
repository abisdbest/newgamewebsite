const fs = require('fs');
const path = require('path');

const GAME_DATA = {
  '4x4 chess': {
    title: '4x4 Chess: Fast-Paced Micro Tactical Warfare',
    catalogDesc: 'A fast-paced, high-intensity chess variant played on a compact 4x4 grid. With King, Rook, Bishop, Knight, and Pawn, calculate quick combinations, set deadly traps, and deliver swift checkmates in 2-minute matches.',
    paragraphs: [
      '4x4 Chess is an exhilarating, micro-sized tactical chess variant that strips away opening memorization in favor of pure, immediate tactical calculation. Played on a compact 4x4 board with a reduced army consisting of a King, Rook, Bishop, Knight, and Pawn, piece contact occurs from the very first move.',
      'Because the board is so tightly constrained, conventional pawn structures and slow positional maneuvering are replaced by lightning-fast combinations, vicious forks, and sudden king-hunt checkmates. Every single tempo and square matters, turning each 2-minute match into an intense battle of wits.',
      'Whether you are a seasoned grandmaster looking to sharpen your tactical vision or a casual player wanting quick, thrilling chess battles between classes, 4x4 Chess delivers instant competitive excitement with zero downtime.'
    ],
    howTo: [
      'Choose your piece color and evaluate the compact 4x4 battlefield.',
      'Standard chess movement rules apply: King moves one square, Rook moves straight, Bishop moves diagonally, Knight moves in an L-shape, and Pawns advance one square forward (capturing diagonally).',
      'Anticipate your opponent\'s immediate threats—because pieces start adjacent, captures begin on turn two or three.',
      'Trap the opposing King in checkmate or capture crucial pieces to force your opponent into resignation.'
    ],
    tips: [
      'Seize control of the central squares immediately to limit the movement of enemy Knights and Bishops.',
      'Never leave your King unprotected; back-rank checkmates can occur in as few as three turns on a 4x4 grid.',
      'Look for Knight forks early—on a small board, Knights are exceptionally deadly at hitting multiple pieces at once.',
      'Count piece trades carefully: losing even a single minor piece represents a massive percentage of your total material.'
    ],
    controlsText: 'Click or tap pieces to select them, then click an highlighted square to move. Supports touchscreens and mouse control.',
    keycaps: ['mouse'],
    developer: 'Chess Micro Labs',
    release: '2023'
  },
  'a dark room': {
    title: 'A Dark Room: Minimalist Atmospheric Text RPG',
    catalogDesc: 'Wake up in a cold, silent room with a dying fire. Light the flames, gather wood, build a village, forge weapons, and venture across a desolate wasteland in this landmark atmospheric survival RPG.',
    paragraphs: [
      'A Dark Room is a critically acclaimed minimalist text-based survival and exploration RPG created by Michael Townsend. You begin in a freezing, pitch-black room with a dying fire. As you stoke the embers and invite warmth into the room, wanderers emerge from the desolate cold, and a simple survival clicker transforms into a massive post-apocalyptic civilization odyssey.',
      'Manage village resources, assign workers to cut wood, trap wild game, cure meats, and smelt iron into sturdy armor and weapons. Craft compasses, water canteens, and wagons to venture out into the unknown coordinate-based world map.',
      'Traverse desolate forests, abandoned military outposts, and decaying cities infested with bandits and radioactive beasts to discover the cryptic secrets of this ruined world and engineer an ultimate escape.'
    ],
    howTo: [
      'Click "Light fire" and stoke the flames to keep the builder warm and invite wandering survivors to your camp.',
      'Gather wood from the dark forest, construct traps for fur and teeth, and build huts to house your growing village population.',
      'Assign villagers to gather resources, cure meat, mine iron and coal, and forge weapons in the workshop.',
      'Pack cured meat, water, and ammunition into your rucksack, then set out on coordinate-grid expeditions across the perilous wasteland map.'
    ],
    tips: [
      'Keep the fire burning bright early on; a warm room encourages rare wanderers and merchants to visit your settlement.',
      'Never embark on a long exploration run without a full supply of cured meat and water—starvation will end your expedition immediately.',
      'Equip weapons like rifles, grenades, and laser rifles before venturing into military compounds and deep caves.',
      'Pay close attention to atmospheric narrative clues; the true lore of the desolate landscape unfolds gradually with every discovery.'
    ],
    controlsText: 'Mouse click or touchscreen tap to select options, stoke fire, assign villagers, and navigate the map.',
    keycaps: ['mouse'],
    developer: 'Doublespeak Games',
    release: '2013'
  },
  'antimatter dimensions': {
    title: 'Antimatter Dimensions: The Definitive Exponential Idle Game',
    catalogDesc: 'Experience one of the deepest idle games ever created. Buy cascading antimatter dimensions, boost multipliers, unlock galaxies, and trigger Infinity and Eternity resets as numbers soar beyond the bounds of reality.',
    paragraphs: [
      'Antimatter Dimensions is widely considered the gold standard of mathematical idle incremental games. Created by Hevipelle, the game starts simply: you purchase 1st Dimensions to produce Antimatter. But each subsequent dimension produces the dimension below it, triggering an exhilarating cascade of compounding growth.',
      'Purchase sets of 10 dimensions to unlock exponential multipliers, speed up the universe with Tickspeed upgrades, and perform Dimensional Sacrifices to skyrocket your production into numbers that exceed standard astronomical notation.',
      'Surpass the barrier of 1.79e308 antimatter to collapse the universe into Infinity. Unlock a colossal Infinity upgrade tree, break the game\'s reality limits, unlock automated autobuyers, and ascend further into Eternity and Time Dimensions.'
    ],
    howTo: [
      'Click the 1st Dimension button to start producing Antimatter, then purchase 2nd Dimensions to produce 1st Dimensions.',
      'Buy sets of 10 dimensions to trigger exponential multiplier upgrades that accelerate production.',
      'Upgrade Tickspeed to increase the ticking frequency of the universe and compound dimension output.',
      'Trigger Dimensional Shifts and Boosts to unlock higher-tier dimensions, and finally trigger Infinity to unlock the massive skill tree.'
    ],
    tips: [
      'Prioritize purchasing Tickspeed reductions whenever affordable—they apply a universal multiplier across all dimensions.',
      'Antimatter Galaxies provide permanent multiplicative scaling; buy them as soon as your dimension count allows.',
      'Configure automated autobuyers during the Infinity phase to optimize reset times and progress effortlessly while idle.',
      'Experiment with different Time Study and challenge configurations to punch through difficult progression walls.'
    ],
    controlsText: 'Mouse click or tap to buy dimensions and upgrades. Keyboard hotkeys: 1-8 for Dimensions, M to Max All, C for Crunch.',
    keycaps: ['1-8', 'M', 'mouse'],
    developer: 'Hevipelle',
    release: '2016'
  },
  'basket bros': {
    title: 'BasketBros: High-Flying Arcade Basketball Showdown',
    catalogDesc: 'Take to the blacktop in this wild, hyper-energetic 1v1 arcade basketball game. Sprint, cross over, launch moonshot three-pointers, and execute gravity-defying slam dunks in solo tournaments or local 2-player matches.',
    paragraphs: [
      'BasketBros is a high-octane 2D retro arcade basketball game developed by Blue Wizard Digital. Delivering fast-paced 1v1 pickup basketball action, players can throw down rim-rocking slam dunks, step back for clutch buzzer-beater threes, and knock opponents off their feet with physical defense.',
      'Choose from an eccentric roster of unlockable ballers, each with customized speed, jumping power, and shooting accuracy ratings. Customize your characters with fresh jerseys, streetwear shoes, and wacky headwear as you climb through tournament brackets.',
      'Play offline against challenging AI opponents or share your keyboard with a friend in frantic local 2-player showdowns where every block, steal, and fast-break dunk brings pure competitive hype.'
    ],
    howTo: [
      'Select your basketball player and pick your game mode (Tournament, Quick Match, or 2 Player Local).',
      'Use directional movement to sprint across the court and time your leaps for rebounds and contested shots.',
      'Press your shoot button while driving toward the basket to trigger airborne dunks, or release at the peak of your jump for clean jump shots.',
      'Play aggressive defense by timing your swat blocks at the rim and swiping for steals during opponent crossovers.'
    ],
    tips: [
      'Green-meter release: time your shot release precisely at the apex of your jump for maximum shooting accuracy.',
      'Bait your opponent into premature jumping blocks with pump fakes, then blow past them for an uncontested dunk.',
      'Swiping for steals is most effective immediately after an opponent lands from a rebound or begins changing direction.',
      'Take advantage of physical collisions—knocking your opponent backward creates ample space for wide-open three-pointers.'
    ],
    controlsText: 'Player 1: WASD / Arrow keys to move and jump, Spacebar / L to shoot and steal. Player 2: Arrow keys to move, Enter to shoot and steal.',
    keycaps: ['wasd', 'arrows', 'space'],
    developer: 'Blue Wizard Digital',
    release: '2020'
  },
  'brotato': {
    title: 'Brotato: Arena Roguelite Auto-Shooter',
    catalogDesc: 'Control a badass potato wielding up to 6 weapons simultaneously to fend off hordes of alien invaders. Collect materials, buy synergistic shop upgrades, and survive intense waves until rescue arrives.',
    paragraphs: [
      'Brotato is a top-down arena shooter roguelite where you play as Brotato—the sole survivor from Potato World stranded on a hostile alien planet. Equipped with the unique biological ability to wield up to 6 deadly weapons at once, you must survive waves of relentless extraterrestrial monsters.',
      'Each run features rapid 20- to 60-second waves. Dodge alien swarms while your weapons auto-fire, collect dropped green material currency, and visit the shop between rounds to purchase guns, blades, blunt tools, and powerful passive relics.',
      'With dozens of distinctive character classes—from the berserk Brawler to the sharpshooting Ranger and the hyper-lucky Pacifist—every run demands a different tactical build to overcome late-game boss encounters.'
    ],
    howTo: [
      'Choose a character class with customized starting stats, traits, and weapon bonuses.',
      'Move fluidly around the arena to evade enemy swarms while your weapons automatically aim and fire at nearby targets.',
      'Gather green materials dropped by defeated aliens before the round timer expires to use as both XP and shop currency.',
      'Visit the shop between waves to purchase weapons, combine duplicates into higher rarity tiers, and acquire passive stat boosts.'
    ],
    tips: [
      'Stack matching weapon weapon types (e.g. 6 Guns or 6 Blades) to unlock significant tier-wide synergy stat buffs.',
      'Invest in defensive survivability: Health Regeneration, Life Steal, and Armor are vital for surviving intense wave 15-20 rushes.',
      'Keep moving in broad perimeter circles around the edge of the arena so aggressive charging enemies cannot surround you.',
      'Locking powerful weapons in the shop preserves them for the next round without wasting money on random re-rolls.'
    ],
    controlsText: 'WASD or Arrow Keys to move. Weapons aim and fire automatically. Mouse to purchase and combine gear in the shop.',
    keycaps: ['wasd', 'arrows', 'mouse'],
    developer: 'Blobfish',
    release: '2022'
  },
  'crossy road': {
    title: 'Crossy Road: The Infinite Traffic-Dodging Phenomenon',
    catalogDesc: 'Why did the chicken cross the road? Dodge speeding cars, leaping rivers, and oncoming bullet trains in Hipster Whale\'s beloved endless arcade hopper. Collect coins and unlock hundreds of quirky pixel mascots.',
    paragraphs: [
      'Crossy Road is Hipster Whale\'s legendary endless arcade game that took the world by storm. Reimagining classic Frogger-style gameplay with charming voxel aesthetics, players guide a quirky rooster across endless lanes of highway traffic, high-speed rail tracks, and treacherous raging rivers.',
      'Timing and situational awareness are everything: weave through speeding semi-trucks and delivery vans, step onto floating river logs and lily pads, and sprint across railway crossings before high-speed trains barrel through.',
      'Collect gold coins scattered along your journey to unlock hundreds of iconic pixel characters—each with unique sound effects, visual themes, and hilarious Easter eggs.'
    ],
    howTo: [
      'Tap or press the Up Arrow to hop forward one tile, or use Left/Right arrows to adjust your lane positioning.',
      'Watch traffic timing and hop cleanly through gaps between speeding sports cars, buses, and trucks.',
      'Cross train tracks only when the signal lights are not flashing red to avoid sudden train collisions.',
      'Keep moving forward consistently: staying stationary too long summons an eagle that swoops down and grabs your character!'
    ],
    tips: [
      'Scan two to three lanes ahead of your current position so you can plot a safe path across multiple lanes in one fluid motion.',
      'On river crossings, hop against the drift of the log or lily pad to buy extra seconds before floating off the screen.',
      'If trapped between two fast-moving cars, side-hopping left or right is usually much safer than leaping blindly forward.',
      'Collect every coin you safely can; spending coins at the prize machine unlocks awesome secret characters and themes.'
    ],
    controlsText: 'Arrow Keys or WASD to hop forward, left, right, and back. Spacebar or Mouse click to hop forward.',
    keycaps: ['arrows', 'wasd', 'space'],
    developer: 'Hipster Whale',
    release: '2014'
  },
  'death run 3d': {
    title: 'Death Run 3D: Ultra-Fast Neon Tunnel Runner',
    catalogDesc: 'Test your reflexes at breakneck velocity through glowing neon geometric tunnels. Dodge rotating barriers, shifting obstacles, and lethal spikes to an energetic electronic soundtrack.',
    paragraphs: [
      'Death Run 3D is a mesmerizing first-person arcade runner built for players who crave raw speed and lightning-fast reflexes. Hurtling through a futuristic glowing neon tube at hypersonic speeds, you must react in milliseconds to oncoming geometric blockades and spinning barriers.',
      'Featuring four distinct game modes—Survival, Fear, Endurance, and Overcoming—each course features complex procedural obstacle arrangements that push your spatial perception and reaction times to their absolute limits.',
      'Accompanied by an intoxicating synth-wave soundtrack, Death Run 3D delivers pure, unadulterated arcade adrenaline where single-pixel precision separates a record-breaking run from a catastrophic crash.'
    ],
    howTo: [
      'Select your challenge track and brace for instant high-speed acceleration down the glowing tunnel.',
      'Use Arrow Keys or WASD to bank left, right, up, and down around the cylindrical tube interior.',
      'Align your flight path with openings in oncoming barrier walls and dodge rotating hazard blades.',
      'Survive as long as possible without striking any obstacle surfaces to establish unbeatable high scores.'
    ],
    tips: [
      'Fix your visual gaze at the far vanishing point of the tunnel rather than directly in front of your ship to anticipate shifts early.',
      'Make minimal, precise steering inputs; over-steering is the most frequent cause of slamming into the opposite wall.',
      'Listen to the music: obstacle pulse frequencies and tunnel twists frequently synchronize with the electronic beat.',
      'Return to the center of the tube between maneuvers so you can snap quickly in any direction when hazards appear.'
    ],
    controlsText: 'Arrow Keys or WASD to steer and tilt inside the tube. P or Esc to pause.',
    keycaps: ['arrows', 'wasd', 'P'],
    developer: 'Neon Arcade Games',
    release: '2018'
  },
  'drift boss': {
    title: 'Drift Boss: One-Touch Endless Drift Driving',
    catalogDesc: 'Master the art of high-precision drifting with a single button! Navigate narrow floating zigzag tracks suspended in the sky. Tap and hold to drift right, release to steer left, and unlock cool booster rides.',
    paragraphs: [
      'Drift Boss is an addictive one-button arcade driving game that strips drifting mechanics down to pure precision and rhythm. Behind the wheel of a compact car, you navigate an endless floating zigzag road suspended high above the clouds.',
      'The controls are wonderfully simple: press and hold the button to drift right, and release it to steer left. The challenge lies in judging the tight angles of corners, anticipating narrow chicanes, and timing your drifts so you don\'t tumble into the abyss below.',
      'Collect coins on the road to unlock custom vehicles ranging from monster trucks and race cars to fire engines, and activate booster perks like Double Coins and Car Insurance to extend your high-score runs.'
    ],
    howTo: [
      'Press and hold the Left Mouse Button or Spacebar to initiate a sharp drift to the right.',
      'Release the button or key to allow your car to automatically realign and drift toward the left.',
      'Time your transitions precisely to stay centered on narrow zigzag bridges, ramps, and sharp hairpin curves.',
      'Collect coins scattered along the track to unlock new vehicles and equip score-multiplying power-ups.'
    ],
    tips: [
      'Anticipate the bend: initiate your drift a fraction of a second before reaching the turn, not when you\'re already on the edge.',
      'On straight stretches, tap rapidly in rhythm to keep your car traveling in a stable straight line without veering off.',
      'Be cautious around ramps and springboards—they provide major score boosts but require instant directional adjustment upon landing.',
      'Equip Car Insurance from the shop before setting out; it grants a free second chance if you make an accidental misstep.'
    ],
    controlsText: 'Click and hold Left Mouse Button, Spacebar, or Up Arrow to drift right; release to steer left.',
    keycaps: ['mouse', 'space', 'up'],
    developer: 'MarketJS',
    release: '2019'
  },
  'drive mad': {
    title: 'Drive Mad: Physics Stunt Truck Trials',
    catalogDesc: 'Take the wheel of customizable 4x4 monster trucks and conquer 100+ mind-bending obstacle courses. Balance throttle, momentum, and suspension over flip ramps, bridges, and tricky puzzles.',
    paragraphs: [
      'Drive Mad is a brilliant physics-based stunt driving game created by Martin Magni on the Fancade platform. Players command high-torque 4x4 trucks through 100+ masterfully designed obstacle courses featuring precarious ramps, collapsing bridges, loops, and mechanical hazards.',
      'Success requires delicate throttle control and acute physics awareness. Flooring the gas from a standstill will flip your truck onto its roof, while going too slow will leave you stranded in gaps or crushed by falling counterweights.',
      'Every level introduces hilarious and unexpected mechanical twists—from trucks with square wheels or stretching chassis to giant monster tires and anti-gravity zones—keeping the gameplay fresh and entertaining from start to finish.'
    ],
    howTo: [
      'Press W or Up Arrow to accelerate forward and S or Down Arrow to reverse and brake.',
      'Modulate your speed carefully over rocky slopes and wooden ramps to maintain four wheels on the ground.',
      'Adapt to bizarre vehicle mechanics such as oversized tires, fragile bridges, and tilting teeter-totters.',
      'Reach the checkered finish line upright and in one piece to advance to the next puzzle stage.'
    ],
    tips: [
      'Feather the accelerator: gently tapping the gas prevents high-torque trucks from doing accidental backflips on steep ramps.',
      'When crossing falling bridges or moving platforms, maintain smooth, uninterrupted forward momentum.',
      'In levels with giant rear wheels or odd tire shapes, let natural gravity and suspension bounce do the climbing work.',
      'Don\'t hesitate to reverse slightly to realign your wheels if your chassis gets beached on an obstacle.'
    ],
    controlsText: 'W / Up Arrow to drive forward. S / Down Arrow to reverse and brake. R to restart level.',
    keycaps: ['wasd', 'arrows', 'R'],
    developer: 'Martin Magni (Fancade)',
    release: '2021'
  },
  'fidget spinner': {
    title: 'Fidget Spinner: Supercharged Speed Simulator',
    catalogDesc: 'Spin high-precision fidget spinners in your browser! Swipe to build up blinding rotational speed, upgrade ball bearings, apply low-friction oils, and unlock glowing neon and metallic spinner designs.',
    paragraphs: [
      'Fidget Spinner brings the worldwide tactile toy sensation to your web browser with supercharged arcade physics and satisfying upgrades. Swipe to launch your spinner into high-velocity rotation and watch the speedometer redline as your spinner whirs.',
      'You get five powerful swipes per round to generate maximum kinetic momentum. The faster and longer your spinner rotates before coming to a stop, the more gold coins and experience points you bank.',
      'Spend your earnings in the workshop to upgrade your ball bearings, apply synthetic lubricating oil to eliminate friction, and unlock dozens of stunning spinners including carbon-fiber, gold-plated, and glowing neon LED models.'
    ],
    howTo: [
      'Click and drag swiftly across the spinner (or swipe on touchscreen) to start the rotation.',
      'You have 5 swipes per round—time your swipes in rapid sequence to max out the tachometer gauge.',
      'Earn coins based on total revolutions achieved before the spinner naturally comes to a complete rest.',
      'Visit the upgrades menu to purchase bearing upgrades, speed boosts, and reduced friction oils.'
    ],
    tips: [
      'Use long, swift horizontal strokes across the full width of the screen to transfer maximum rotational torque.',
      'Upgrade your Lubricating Oil early; reducing friction increases the duration of each spin substantially more than raw swipe power.',
      'Unlock premium spinners as soon as possible—higher-tier spinners possess greater rotational mass and coin multipliers.',
      'Time your subsequent swipes when the spinner is already at peak velocity to stack compounding speed boosts.'
    ],
    controlsText: 'Click and drag with Mouse or swipe on touchscreen to spin. Spacebar for instant spin.',
    keycaps: ['mouse', 'space'],
    developer: 'Ketchapp',
    release: '2017'
  },
  'geometry dash lite': {
    title: 'Geometry Dash Lite: Rhythm-Based Platforming Frenzy',
    catalogDesc: 'Jump, fly, and flip your way through spiky caverns and geometric hazards in RobTop\'s iconic rhythm platformer. Time every move to heart-pumping electronic beats in near-impossible stages.',
    paragraphs: [
      'Geometry Dash Lite is the official web version of RobTop Games\' legendary rhythm platformer that has challenged millions of gamers worldwide. Guiding a customizable geometric icon through treacherous obstacle courses, players must jump, fly, and flip to the beat of an unforgettable electronic soundtrack.',
      'Every jump, gravity flip, and rocket flight sequence is choreographed precisely to the music. One single misstep into a spike or hazard sends you back to the very beginning of the level, making patience, rhythm, and muscle memory essential for victory.',
      'Featuring iconic levels including Stereo Madness, Back On Track, and Polargeist, alongside transformation portals that morph your character into rocket ships and gravity-reversing orbs, Geometry Dash Lite is the ultimate test of reflex and rhythm.'
    ],
    howTo: [
      'Press Space, Up Arrow, or click the mouse to jump over spikes, pillars, and dangerous obstacles.',
      'Hit yellow jump pads on platforms and tap glowing jump rings in mid-air to gain extra elevation across wide gaps.',
      'Enter portal gates that transform your icon into a rocket ship, gravity-flipping ball, or UFO.',
      'Memorize the track layout and listen closely to the music—every obstacle jump is synchronized with the rhythm.'
    ],
    tips: [
      'Treat the music as your primary timing cue; jump inputs drop directly on the musical beats.',
      'Use Practice Mode extensively to drop green checkpoints throughout difficult passages until you master the muscle memory.',
      'In rocket ship sections, use quick, rhythmic micro-taps rather than holding the button to maintain smooth horizontal flight.',
      'Stay persistent: Geometry Dash is designed to be tough, and conquering a tricky level brings unmatched satisfaction.'
    ],
    controlsText: 'Spacebar, Up Arrow, or Left Mouse Click to jump and fly. P to pause.',
    keycaps: ['space', 'up', 'mouse', 'P'],
    developer: 'RobTop Games',
    release: '2013'
  },
  'golf orbit': {
    title: 'Golf Orbit: One-Shot Space Golf Launcher',
    catalogDesc: 'Drive your golf ball to the outer reaches of the solar system! Time your swing on the power meter, launch into orbit, bounce off extraterrestrials and launchpads, and upgrade to reach Mars.',
    paragraphs: [
      'Golf Orbit is an exhilarating one-tap arcade golf launcher developed by Raketspel and Green Panda Games. Forget gentle putting on manicured greens—here, your goal is to smash your golf ball completely out of Earth\'s atmosphere and into the cosmos!',
      'Time your swing when the oscillating power meter lands in the center green zone to trigger a "Perfect" blast. Watch your golf ball rocket into the stratosphere, bouncing off high-altitude clouds, bouncy UFOs, and speed-boosting satellites to travel thousands of miles.',
      'Earn substantial prize money for every yard gained and planet reached. Reinvest your winnings into raw driving power, ball bounciness, and extra speed to drive your ball all the way to Mars, Jupiter, and deep outer space.'
    ],
    howTo: [
      'Click or tap to start the power gauge needle swinging back and forth across the meter.',
      'Click again right as the needle reaches the center green sweet spot to unleash a maximum-power drive.',
      'Watch your ball soar into the atmosphere, bouncing off orbital booster pads, alien saucers, and trampolines.',
      'Invest earned coins into Strength, Bounciness, and Extra Speed upgrades to achieve longer distances on your next shot.'
    ],
    tips: [
      'Hit the center green marker at all costs—landing a Perfect strike awards a massive initial velocity boost.',
      'Upgrade Bounciness alongside Strength; extra bounce keeps your ball traveling across terrain long after air momentum slows.',
      'Unlock premium golfers and customized golf clubs in the pro shop—advanced gear features built-in distance multipliers.',
      'Aim for floating booster pads and extraterrestrial saucers to slingshot your ball into high-altitude orbital pathways.'
    ],
    controlsText: 'Left Mouse Click, Spacebar, or Tap to swing and launch the golf ball.',
    keycaps: ['mouse', 'space'],
    developer: 'Raketspel / Green Panda Games',
    release: '2019'
  },
  'helix jump': {
    title: 'Helix Jump: The Classic Spiral Tower Bouncer',
    catalogDesc: 'Guide a continuously bouncing ball through a towering labyrinth of rotating helix platforms. Spin the tower to drop through gaps, avoid forbidden colored sectors, and trigger fiery smash combos.',
    paragraphs: [
      'Helix Jump is the celebrated arcade phenomenon developed by Voodoo that captured millions of casual players worldwide. Controlling a perpetually bouncing ball atop a soaring cylindrical tower, your objective is to navigate down hundreds of levels by rotating the tower around its central pillar.',
      'Rotate the platforms to align open gaps with your bouncing ball. Dropping through single gaps earns steady points, but stringing together continuous multi-story drops charges up your ball into a blazing meteor that smashes through landing platforms upon impact.',
      'Be extremely careful to avoid colored danger zones (typically red or yellow). Landing on a hazard plate shatters your ball instantly, testing your anticipation and finger dexterity on every single bounce.'
    ],
    howTo: [
      'Click and drag left or right (or use the Arrow Keys) to rotate the cylindrical helix tower.',
      'Align openings in the platform with the bouncing ball to allow it to plummet down to lower floors.',
      'Avoid touching colored hazard platforms; landing on a forbidden color ends your run instantly.',
      'Drop through three or more platforms in one continuous plunge to activate an invincible fiery smash attack.'
    ],
    tips: [
      'Don\'t rush into drops; observe the bouncing cadence and line up multi-floor plunges for massive combo scores.',
      'Triggering the fiery smash by plunging 3+ floors is the safest and most effective way to eliminate dangerous hazard zones.',
      'Rotate the tower with smooth, continuous motions rather than jerky twitches to keep full control of where your ball lands.',
      'Look ahead two to three layers down the tower so you don\'t drop directly onto an unavoidable hazard plate.'
    ],
    controlsText: 'Click and drag Mouse, use Left/Right Arrow keys, or A/D to rotate the helix tower.',
    keycaps: ['mouse', 'arrows', 'ad'],
    developer: 'Voodoo',
    release: '2018'
  },
  'house of hazards': {
    title: 'House of Hazards: Hilarious Multiplayer Physics Havoc',
    catalogDesc: 'Step into the ultimate chaotic domestic battleground where everyday household chores turn deadly! Play with up to 4 players as runners dodge flying toasters, dropping lights, and rolling barrels.',
    paragraphs: [
      'House of Hazards is a riotous local multiplayer physics party game developed by New Eich Games. Up to 4 players compete in a chaotic suburban home where ordinary morning routines—making coffee, watering houseplants, grabbing the morning paper—turn into hilariously lethal survival trials.',
      'Players take turns as the active runner attempting to complete their household checklist, while all other players assume control of the home\'s appliances and architecture. Trigger falling ceiling fixtures, shoot high-speed toast from toasters, open trap doors, and release rolling barrels to knock the runner out!',
      'With wacky ragdoll physics, interactive rooms, and endless opportunities to sabotage your best friends, House of Hazards is a party game masterpiece that guarantees non-stop laughter and competitive rivalry.'
    ],
    howTo: [
      'One player takes the role of the active runner attempting to complete tasks displayed at the bottom of the screen.',
      'Defending players watch the runner\'s progress and activate environmental hazards with their assigned trigger keys.',
      'The runner must jump, duck, and roll to evade flying projectiles, swinging cabinet doors, and slippery puddles.',
      'Completing chores earns victory points; knocking out the runner allows the defender to switch into the running role!'
    ],
    tips: [
      'As a trap defender, lead your shots: trigger overhead lights and toasters half a second before the runner walks beneath them.',
      'As the runner, use the crouch-slide maneuver to slip beneath airborne hazards and dodge flying kitchen utensils.',
      'Bait your opponents: feign entering a room to trick defenders into wasting their trap cooldowns, then walk through safely.',
      'Use physical collisions: as a rival runner, you can jump on, tackle, or carry opponents into active hazard zones!'
    ],
    controlsText: 'Player 1: A/D to move, W to jump, S to crouch/activate. Player 2: J/L to move, I to jump, K to crouch. (Supports up to 4 players).',
    keycaps: ['wasd', 'ijkl'],
    developer: 'New Eich Games',
    release: '2020'
  },
  'idle loops': {
    title: 'Idle Loops: Strategic Time Loop Incremental RPG',
    catalogDesc: 'Trapped in a resetting time loop with limited starting mana, master the art of scheduling repetitive actions. Train skills, learn magic, complete town jobs, and push deeper across cycles.',
    paragraphs: [
      'Idle Loops is a deeply strategic loop-based incremental RPG created by Omsi6. Trapped inside an ancient time loop with a limited pool of starting mana, you must carefully schedule an action queue to optimize every second before time inevitably rewinds.',
      'Train physical and magical attributes—from basic meditation and physical strength to spellcraft and dungeon exploration. While your mana depletes with every action and resets your progress back to day one upon reaching zero, your underlying knowledge, skill levels, and talent multipliers persist permanently.',
      'With dozens of interconnected towns, dungeons, guild quests, and arcane mysteries to unlock, Idle Loops is an engrossing puzzle of efficiency and optimization where clever scheduling unlocks monumental power.'
    ],
    howTo: [
      'Add routine actions (such as Wander, Meditate, Meet People, or Train Strength) to your active action queue.',
      'Watch your character execute the sequence while mana ticks down; when mana hits zero, the loop resets back to the beginning.',
      'Permanent skill levels, stats, and talent multipliers persist across resets, making each subsequent loop faster and more potent.',
      'Unlock new exploration zones and discover ancient relics to gradually uncover the mystery behind the time loop.'
    ],
    tips: [
      'Prioritize leveling baseline talents like Meditation and Mana Well early on to permanently expand your maximum mana pool.',
      'Balance training actions with exploration; higher physical and mental stats drastically reduce the mana cost of difficult tasks.',
      'Use action multipliers and repeat counts to automate your queue once optimal progression sequences are discovered.',
      'Never hesitate to reset early if your queue stalls; banked talent points compound your growth exponentially.'
    ],
    controlsText: 'Mouse click or touchscreen tap to queue actions, manage character stats, and adjust loop parameters.',
    keycaps: ['mouse'],
    developer: 'Omsi6',
    release: '2018'
  },
  'jetpack joyride': {
    title: 'Jetpack Joyride: Legendary Endless Laboratory Runner',
    catalogDesc: 'Join Barry Steakfries as he straps on experimental bullet-powered machine-gun jetpacks and breaks out of a secret research laboratory! Dodge lasers, missiles, and zappers in high-tech vehicles.',
    paragraphs: [
      'Jetpack Joyride is Halfbrick Studios\' iconic side-scrolling endless runner that became an instant mobile gaming classic. Players take control of lovable hero Barry Steakfries as he straps on an experimental machine-gun jetpack to escape a high-security top-secret research lab.',
      'With intuitive one-touch flying physics, hold to fire your jetpack and gain altitude, and release to descend back to the laboratory floor. Weave between high-voltage electric zappers, evade incoming homing missile salvos, and navigate deadly rotating laser barriers.',
      'Grab vehicle power-up tokens along your path to pilot outrageous war machines—including the Bad As Hog motorcycle, the Lil\' Stomper mech suit, the Crazy Freaking Teleporter, and the Giant Freaking Robot—each granting immense firepower and an extra life.'
    ],
    howTo: [
      'Click and hold the Left Mouse Button, Spacebar, or tap the screen to fire your jetpack and gain altitude.',
      'Release the button to cut power and allow gravity to bring Barry smoothly back to the floor.',
      'Collect vehicle power-up crates to pilot armored vehicles with distinctive flight mechanics and an extra shield life.',
      'Gather golden coins and spin tokens to spend on the post-game slot machine for coin bombs, head starts, and revives.'
    ],
    tips: [
      'Feather your jetpack in brief pulses rather than holding it down continuously to float smoothly in the safe center corridor.',
      'When red exclamation warning markers appear on the right side of the screen, immediately shift lanes to dodge incoming missiles.',
      'Always collect vehicle power-ups—they not only offer devastating firepower but also act as a free shield that absorbs one fatal hit.',
      'Equip gadgets from the armory (such as Gravity Belt, Coin Magnet, and Air Barrys) to enhance your survivability.'
    ],
    controlsText: 'Left Mouse Button, Spacebar, or Up Arrow to fly upward; release to descend.',
    keycaps: ['mouse', 'space', 'up'],
    developer: 'Halfbrick Studios',
    release: '2011'
  },
  'mad grand prix': {
    title: 'Mad Grand Prix: High-Octane Formula Championship Racing',
    catalogDesc: 'Strap into open-wheel Formula racing machines and compete in an adrenaline-fueled Grand Prix motorsport championship. Hug tight apexes, slipstream rivals at 200+ MPH, and take the championship cup.',
    paragraphs: [
      'Mad Grand Prix is an authentic, high-speed open-wheel Formula racing simulation created by MadPuffers. Experience the heart-pounding intensity of competitive motorsport as you pilot multi-million-dollar racing machines across championship circuits around the globe.',
      'Featuring realistic vehicle dynamics, slipstreaming aerodynamics, and responsive handling, players must master braking zones, apex clipping, and throttle modulation to triumph over aggressive AI competitors in both dry and wet track conditions.',
      'Compete in quick exhibition races or embark on a full multi-stage Grand Prix championship, tuning your car\'s gearing and downforce to climb the podium and etch your name among racing legends.'
    ],
    howTo: [
      'Use WASD or Arrow Keys to steer, accelerate, and apply heavy brakes into tight corners.',
      'Follow the optimal racing line to carry maximum momentum through bends without skidding onto gravel traps.',
      'Tuck directly behind opposing cars on long straightaways to catch their aerodynamic slipstream and slingshot past them.',
      'Score podium finishes across the championship season to accumulate points and unlock elite racing machines.'
    ],
    tips: [
      'Brake in a straight line before turning into a corner; braking while turning causes severe understeer and loses precious seconds.',
      'Smoothly apply throttle on corner exits once your wheels are straightened to prevent wheelspin and rear-end slides.',
      'Take full advantage of slipstreaming down long pit straights to perform clean overtakes into heavy braking zones.',
      'Avoid mounting high curbs at sharp angles, which can violently unsettle your suspension and compromise lap times.'
    ],
    controlsText: 'Arrow Keys or WASD to drive and steer. Spacebar for handbrake. C to switch camera perspective.',
    keycaps: ['arrows', 'wasd', 'space', 'C'],
    developer: 'MadPuffers',
    release: '2021'
  },
  'mr racer - car racing': {
    title: 'MR RACER: Premium 3D Highway Speed Simulation',
    catalogDesc: 'Experience high-speed highway traffic racing with cutting-edge 3D graphics and thrilling physics. Weave between speeding sedans, semi-trucks, and buses across 100 levels in customized supercars.',
    paragraphs: [
      'MR RACER is a stunning 3D highway racing game developed by ChennaiGames. Delivering razor-sharp graphics, roaring engine acoustics, and responsive driving physics, players get behind the wheel of world-class supercars to conquer dense highway traffic.',
      'Featuring 100 challenging levels across Challenge Mode, high-stakes Time Trials, and serene Free Ride journeys through scenic deserts, autumn forests, and neon-lit night cities, MR RACER offers endless variety for speed enthusiasts.',
      'Weave between commuter vehicles at speeds exceeding 150 MPH, perform heart-stopping near misses to charge your nitrous boost tank, and reinvest your race winnings to customize paint, rims, turbochargers, and handling dynamics.'
    ],
    howTo: [
      'Use W or Up Arrow to accelerate to top speed and S or Down Arrow to brake when highway lanes become blocked.',
      'Steer with A/D or Left/Right Arrow Keys to weave through narrow gaps between traffic vehicles.',
      'Perform close overtakes at speeds above 100 km/h to rapidly charge your nitrous booster and earn bonus cash.',
      'Visit the showroom garage to purchase exotic supercars, upgrade engine displacement, and customize visual liveries.'
    ],
    tips: [
      'Executing near misses at high speeds charges your nitro tank rapidly—take calculated risks near civilian cars.',
      'In two-way traffic mode, driving against the oncoming traffic flow awards double bonus cash and continuous nitro refill.',
      'Tap the brakes briefly when approaching traffic jams rather than swerving blindly across multiple lanes.',
      'Upgrade your brakes and steering handling first; superior agility allows you to thread needles in heavy traffic.'
    ],
    controlsText: 'W / Up Arrow to accelerate, S / Down to brake, A / D or Left/Right to steer. Left Shift / N for Nitrous boost.',
    keycaps: ['wasd', 'arrows', 'shift'],
    developer: 'ChennaiGames',
    release: '2022'
  },
  'polytrack': {
    title: 'Polytrack: Low-Poly Precision Time-Trial Racer',
    catalogDesc: 'Inspired by TrackMania, Polytrack is a high-speed, physics-driven arcade racing game in a clean low-poly style. Shave milliseconds off lap times across loops, banked walls, and custom tracks.',
    paragraphs: [
      'Polytrack is an adrenaline-charged low-poly time-trial racing game heavily inspired by the beloved TrackMania franchise. Behind the wheel of a lightweight, ultra-responsive stunt car, players tear across gravity-defying tracks featuring vertical loops, wall rides, and massive gap jumps.',
      'Every split-second counts: subtle steering angles, smooth apex entries, and clean landings on banked ramps are the key to shaving milliseconds off your personal bests and climbing the global leaderboard.',
      'Beyond its challenging official tracks, Polytrack features a comprehensive built-in track editor, allowing players to construct, test, and share their own wild stunt courses with custom road pieces, jumps, and boost gates.'
    ],
    howTo: [
      'Drive your stunt car using WASD or Arrow Keys, accelerating hard on straights and drifting into sharp apexes.',
      'Tackle extreme stunt architecture including vertical loops, banked wall rides, boost accelerators, and gap jumps.',
      'Pass checkpoint gates cleanly; hit R at any moment to instantly restart and attempt a faster qualifying lap.',
      'Launch the Track Editor to snap together custom roadways, elevation changes, hazards, and stunt loops.'
    ],
    tips: [
      'Gentle steering preserves momentum; aggressive over-steering scrubs tires and bleeds critical straight-line speed.',
      'Orient your vehicle parallel to the landing surface while airborne to maintain forward momentum upon touchdown.',
      'Study top leaderboard ghost replays to discover hidden racing lines, shortcut jumps, and optimal drift initiation points.',
      'Hit boost acceleration pads squarely dead-center to avoid bouncing into track guardrails at hypersonic speeds.'
    ],
    controlsText: 'WASD or Arrow Keys to drive. R to restart from checkpoint. Spacebar for handbrake. Mouse in Track Editor.',
    keycaps: ['wasd', 'arrows', 'R', 'space'],
    developer: 'Kodub',
    release: '2023'
  },
  'poor bunny': {
    title: 'Poor Bunny: High-Score Carrot-Chomping Platformer',
    catalogDesc: 'Control an adorable, hungry bunny on a tiny single-screen platform where carrots spawn endlessly... along with a barrage of lethal traps! Dodge buzzsaws, spiked blocks, and lasers in solo or 2-player co-op.',
    paragraphs: [
      'Poor Bunny is a charming, fast-paced arcade platformer developed by Adventure Islands. You control an endearing little rabbit trapped on a compact single-screen arena where delicious golden carrots appear continuously—along with a nonstop onslaught of deadly hazards!',
      'Each carrot you devour adds to your high score, but immediately triggers new environmental traps—spinning buzzsaws, falling spiked blocks, bouncing iron cannonballs, and laser turrets. One single scratch from any trap ends your run instantly.',
      'Featuring both challenging solo high-score hunting and chaotic local 2-player co-op, players can bank collected carrots to unlock over 100 delightful rabbit outfits, ranging from pirate bunnies to superhero capes.'
    ],
    howTo: [
      'Run and leap across floating platforms using WASD or Arrow Keys to eat newly spawned golden carrots.',
      'Every carrot collected increases your score but spawns new moving hazards and accelerates the game speed.',
      'Avoid touching any traps or projectiles—a single hit ends your run immediately!',
      'Unlock over 100 adorable bunny skins in the wardrobe by banking your lifetime collected carrots.'
    ],
    tips: [
      'Always map out your escape route before leaping toward a carrot; don\'t trap yourself under a descending saw blade.',
      'Use the screen-wrap mechanic: stepping off the left edge of the arena transports you directly to the right side.',
      'In 2-player co-op, coordinate with your teammate so you don\'t both leap for the same carrot and collide mid-air.',
      'Wait patiently for oscillating saw blades to complete their cycle instead of trying to squeeze through narrow gaps.'
    ],
    controlsText: 'Player 1: A / D to run, W or Space to jump. Player 2: Left / Right Arrows to run, Up Arrow to jump.',
    keycaps: ['wasd', 'arrows', 'space'],
    developer: 'Adventure Islands',
    release: '2023'
  },
  'raft wars 2': {
    title: 'Raft Wars 2: Turn-Based Trajectory Waterpark Defense',
    catalogDesc: 'Simon and his brother are back to defend their buried waterpark treasure from security guards and construction crews with tennis ball cannons, paint grenades, and rockets in classic turn-based artillery combat.',
    paragraphs: [
      'Raft Wars 2 is the legendary sequel to Martijn Kunst\'s beloved physics artillery game. After returning from a well-earned vacation, Simon and his brother Paul discover to their horror that a greedy corporation has built a massive commercial waterpark right over their buried treasure chest!',
      'Climb aboard your trusty inflatable raft, load up your high-powered tennis ball cannon, and take turns lobbing projectiles at waterpark security guards, aggressive mascot performers, and construction workers.',
      'Calculate elevation angles, projectile trajectory arcs, and wind resistance to land direct hits or collapse enemy platforms. Earn cash bounties after each battle to upgrade your raft, buy protective armor, and unlock rocket launchers.'
    ],
    howTo: [
      'Click and drag your mouse to dial in the elevation angle and firing power of Simon\'s cannon.',
      'Release the mouse button to lob tennis balls, bouncy grenades, and rockets toward opposing rafts and slides.',
      'Factor in distance and obstacles to knock enemy combatants cleanly off their rafts into the pool.',
      'Spend earned prize money between stages to upgrade your raft hull, buy sniper scopes, and equip protective helmets.'
    ],
    tips: [
      'Fire an initial calibration shot on turn one to gauge trajectory and distance, then dial in the angle for direct hits.',
      'Aim for the base or structure of enemy rafts—destabilizing the raft dumps all occupants into the water for a multi-KO.',
      'Equip rockets or cluster grenades when targets hide behind umbrellas, inflatable water slides, or barricades.',
      'Buy protective helmets for your squad as early as possible to survive errant counter-fire and stay in the fight.'
    ],
    controlsText: 'Mouse to aim cannon trajectory; Left Mouse Click to fire projectile.',
    keycaps: ['mouse'],
    developer: 'Martijn Kunst / NotDoppler',
    release: '2013'
  },
  'slow roads': {
    title: 'Slow Roads: Endless Procedural Zen Driving',
    catalogDesc: 'Unwind with an endless, serene driving simulator that generates infinite procedural landscapes in real-time. Cruise winding roads through hills, forests, snow, and lunar plains with customizable weather.',
    paragraphs: [
      'Slow Roads is an extraordinary browser-based zen driving simulator created by anslo. Powered by procedural generation algorithms running entirely within your browser, Slow Roads creates an endless, uninterrupted ribbon of highway winding through magnificent natural landscapes.',
      'There are no timers, no race competitors, and no game-over screens. Choose between gentle summer hills, rich autumn woodlands, snowy mountain ranges, and surreal lunar plains with reduced gravity, all complemented by dynamic day/night cycles and soothing atmospheric soundscapes.',
      'Whether you want to practice smooth steering maneuvers, test the vehicle\'s drift physics, or switch on autopilot mode to enjoy the view, Slow Roads is the ultimate digital escape from stress.'
    ],
    howTo: [
      'Use WASD or Arrow Keys to steer your vehicle along the infinite winding mountain and coastal highways.',
      'Press Shift to engage smooth boost acceleration, or tap Spacebar to drift gracefully around scenic bends.',
      'Access the settings menu to adjust environmental biomes (hills, plains, lunar), time of day, and weather effects.',
      'Toggle autopilot mode on to sit back and enjoy a completely hands-free meditative visual road trip.'
    ],
    tips: [
      'Slow Roads has no penalties—take corners at your own relaxed pace and soak in the soothing procedural vistas.',
      'Switch to the first-person cockpit camera (press C) for an extraordinarily immersive driving experience.',
      'Experiment with lunar gravity and off-road traction settings to explore vast open landscapes beyond the tarmac.',
      'If you ever get stuck off-road or tumble down a hillside, press R to immediately respawn on the center lane.'
    ],
    controlsText: 'WASD or Arrow Keys to drive. Spacebar for handbrake. Shift for boost. C to change camera. R to respawn.',
    keycaps: ['wasd', 'arrows', 'space', 'shift', 'C', 'R'],
    developer: 'anslo',
    release: '2022'
  },
  'stickman hook': {
    title: 'Stickman Hook: Acrobatics and Grappling Mastery',
    catalogDesc: 'Swing through hundreds of colorful, physics-infused levels as an agile stickman acrobat! Grapple onto glowing anchor points, execute giant acrobatic swings, and bounce off trampolines to cross the finish line.',
    paragraphs: [
      'Stickman Hook is an exhilarating physics-based swinging game developed by Madbox that has captivated millions of players. Taking control of an agile, acrobatic stickman, players swing from peg to peg across vibrant obstacle courses using a high-tension grappling hook.',
      'Mastering the physics of momentum is the core of the game. Latching onto an anchor point starts a pendulum swing; releasing your grip at the crest of the forward arc launches your stickman soaring through the air at high speed.',
      'Bounce off rubbery trampolines, skip past challenging obstacles, and chain together fluid grapple launches across hundreds of increasingly creative levels, unlocking dozens of hilarious stickman skins along the way.'
    ],
    howTo: [
      'Click and hold the Left Mouse Button (or press Spacebar / tap screen) to grapple onto the nearest anchor peg.',
      'Hold on to build up swing momentum through the pendulum arc.',
      'Release your hold at the forward peak of your swing to launch into the air with maximum forward speed.',
      'Chain successive hooks or bounce off rubber trampolines to soar across the checkered finish line.'
    ],
    tips: [
      'Release your grapple right as you pass the bottom of the swing arc and begin ascending for maximum launch velocity.',
      'You don\'t need to hook onto every single peg; skipping intermediate anchors often preserves tremendous speed.',
      'When landing on white bouncy pads, let your stickman rebound naturally without hooking to gain huge upward height.',
      'Complete level milestones to unlock dozens of fun skins including superheroes, animals, and food items.'
    ],
    controlsText: 'Left Mouse Click, Spacebar, or Screen Tap to hook and swing; release to launch into free flight.',
    keycaps: ['mouse', 'space'],
    developer: 'Madbox',
    release: '2018'
  },
  'superhot': {
    title: 'SUPERHOT: Time Moves Only When You Move',
    catalogDesc: 'Blurring the lines between tactical strategy and frantic first-person shooting, SUPERHOT is the landmark FPS where time moves only when you move! Dodge bullets in slow motion and orchestrate cinematic action.',
    paragraphs: [
      'SUPERHOT is the groundbreaking first-person shooter developed by SUPERHOT Team where time moves only when you move. Combining intense real-time gunplay with the deliberate planning of a turn-based puzzle game, players step into stylized stark white rooms populated by crystalline red enemies.',
      'Stand still, and bullets freeze in mid-air while enemies hang suspended in slow motion. Take a single step or pivot your aim, and time surges forward. This unique mechanic turns every shootout into an intricate ballet of slow-motion dodging, weapon snatching, and split-second decisions.',
      'Disarm foes by throwing empty firearms at their heads, snatch their weapons out of mid-air, slice incoming shotgun blasts with katanas, and eliminate all threats to watch your tactical mastery replayed at blistering full speed.'
    ],
    howTo: [
      'Move carefully using WASD; remember that standing still brings time to a near-complete stop.',
      'Assess the room in frozen time to trace incoming bullet paths, enemy sightlines, and available weapons.',
      'Aim with your mouse and click to fire pistols, shotguns, and rifles, or throw mugs, bottles, and weapons to stun enemies.',
      'Eliminate all red hostiles in the simulation to trigger the spectacular real-time action replay.'
    ],
    tips: [
      'When new enemies spawn or bullets are flying, stop moving completely to evaluate the bullet paths in frozen time.',
      'Throwing your empty gun at an armed enemy disarms them and lofts their loaded weapon into the air—catch it and fire!',
      'Make small side-steps rather than rushing forward when evading bullets; a single sidestep easily clears projectile paths.',
      'Use melee strikes when ammunition is scarce to shatter enemies into pieces without wasting precious bullets.'
    ],
    controlsText: 'WASD to move. Mouse to look around. Left Mouse Click to shoot or punch. Right Mouse Click to throw held item.',
    keycaps: ['wasd', 'mouse'],
    developer: 'SUPERHOT Team',
    release: '2016'
  },
  'supreme duelist stickman 2': {
    title: 'Supreme Duelist Stickman 2: Ragdoll Combat Arena',
    catalogDesc: 'Engage in hilarious, high-octane stickman brawls powered by unpredictable ragdoll physics! Battle with energy swords, blasters, portals, and gravity weapons in solo or 2-player modes.',
    paragraphs: [
      'Supreme Duelist Stickman 2 is a wildly popular physics brawler developed by Neron\'s Brother. Players engage in frantic, gravity-defying stickman duels where unpredictable ragdoll physics turn every clash into a riot of hilarious acrobatics and sudden knockouts.',
      'Arm yourself with an expansive arsenal of creative weaponry—including dual energy sabers, plasma blasters, sniper bows, grappling hooks, and portal launchers. Battle across dynamic arenas loaded with lethal hazards like bubbling lava, spinning gears, and crumbling bridges.',
      'Enjoy intense solo survival challenges against wave after wave of AI enemies, or connect with a friend on the same device for frantic local 2-player showdowns where bragging rights are always on the line.'
    ],
    howTo: [
      'Control your stickman\'s movement and weapon aiming using directional joystick or keyboard controls.',
      'Aim your weapon directly at your opponent and unleash strikes to deplete their health bar or knock them off platforms.',
      'Utilize unique weapon skills: energy blades parry blaster bolts, rocket launchers trigger rocket jumps, and portal guns teleport you.',
      'Outlast your opponent across dynamic arenas to stand victorious as the supreme stickman champion.'
    ],
    tips: [
      'Master the recoil of heavy weapons like rocket launchers to rocket-jump over bottomless pits and hazardous lava.',
      'Don\'t over-commit on slippery platforms—let aggressive opponents over-extend and knock themselves into the abyss.',
      'Shield and sword combinations can parry incoming blaster shots if you angle your blade directly toward the projectile.',
      'Adjust arena gravity and weapon drop rules in custom settings for unpredictable party combat with friends.'
    ],
    controlsText: 'Player 1: WASD to move and attack. Player 2: Arrow Keys to move and attack. Touchscreen joystick supported.',
    keycaps: ['wasd', 'arrows'],
    developer: 'Neron\'s Brother',
    release: '2021'
  },
  'the prestige tree': {
    title: 'The Prestige Tree: Cascading Incremental Layer Puzzle',
    catalogDesc: 'Delve into one of the most celebrated incremental puzzle games ever created. Prestige into Boosters, Generators, Enhancers, and Time Nodes across an intricate web of compounding exponential growth.',
    paragraphs: [
      'The Prestige Tree is a landmark incremental puzzle game created by Jacorb90 that revolutionized the idle genre. Rather than simply watching numbers rise linearly, players navigate a vast, branching tree of interconnected prestige mechanics.',
      'Begin by accumulating base Points, then perform your first prestige reset to unlock Point Boosters. Each new layer introduces unique mathematical formulas that feed back into earlier systems, creating a mesmerizing tapestry of cascading exponential multipliers.',
      'Ascend through Generators, Enhancers, Space Buildings, Quirks, and Cosmic Dimensions. Solve complex layer balancing puzzles, complete difficult milestone challenges, and unlock automation features to construct an unstoppable engine of cosmic scale.'
    ],
    howTo: [
      'Accumulate base Points until you have enough to trigger your first prestige reset into Point Boosters (B).',
      'Invest Booster points into upgrade nodes to supercharge Point generation and unlock Generators (G) on Tier 2.',
      'Explore the branching prestige tree; deciding which node branch to unlock dictates your progression efficiency.',
      'Complete milestone challenges and unlock automation perks to streamline lower tiers as you climb into higher dimensions.'
    ],
    tips: [
      'Read node descriptions attentively: some prestige tiers reset previous tiers, while others provide passive automated generation.',
      'When hitting a progression plateau, respec your layer upgrade points to test different synergies and node combinations.',
      'Prioritize automation and quality-of-life perks so you do not need to manually cycle through early-tier resets.',
      'Export your save string periodically from the options wheel to safeguard your deep incremental progress.'
    ],
    controlsText: 'Mouse click or touchscreen tap to select nodes, purchase upgrades, and trigger prestige resets.',
    keycaps: ['mouse'],
    developer: 'Jacorb90',
    release: '2020'
  },
  'tube jumpers': {
    title: 'Tube Jumpers: Chaotic Floating Raft Party Battle',
    catalogDesc: 'Hold on for dear life in Michael Eichler\'s hilarious multiplayer party game! Stranded on floating tubes in rough seas, time your jumps to stay afloat while waves, sharks, and cannonballs try to knock you off.',
    paragraphs: [
      'Tube Jumpers is a wildly entertaining local multiplayer physics party game created by Michael Eichler (New Eich Games). Up to 4 players find themselves marooned on bouncy inflatable tubes tossed around by turbulent ocean waves.',
      'The premise is brilliantly simple: each player has only a single button. Press and hold your key to pitch your character backward, and release to leap into the air. The challenge is timing your jumps so you land safely back onto the tube while turbulent waves shift beneath your feet.',
      'Dodge a barrage of absurd ocean hazards—including leaping great white sharks, flying rocks, cannon salvos, and runaway sea monsters. Be the last player remaining afloat when the dust settles to win the round!'
    ],
    howTo: [
      'Press and hold your single designated key (Player 1 uses W) to tilt and charge your jump trajectory.',
      'Release the key to launch your ragdoll character into the air, aiming to land squarely back onto the floating tube.',
      'Avoid colliding with incoming ocean hazards including sharks, rocks, cannonballs, and tidal surges.',
      'Be the last survivor remaining atop the tube when opponents are knocked into the sea to claim round victory.'
    ],
    tips: [
      'Timing is everything: leaping right as a large ocean wave crests gives you extra hang-time to avoid low hazards.',
      'If knocked into the water behind the tube, repeatedly tap your jump button to swim back up onto the raft before sharks arrive.',
      'Body-block opponents in mid-air to deflect their trajectory and nudge them into the sea.',
      'Watch visual cues in the ocean background: splashes and sounds telegraph incoming sharks well in advance.'
    ],
    controlsText: 'Player 1: W key. Player 2: I key. Player 3: Z key. Player 4: M key. One-button controls per player!',
    keycaps: ['W', 'I', 'Z', 'M'],
    developer: 'Michael Eichler / New Eich Games',
    release: '2018'
  },
  'vex 10': {
    title: 'Vex 10: The Definitive Hardcore Stickman Parkour',
    catalogDesc: 'The acclaimed Vex platforming series reaches its crowning pinnacle in Vex 10! Run, wall-bounce, slide beneath whirling buzzsaws, fly hang-gliders, and conquer hardcore Acts and challenge stages.',
    paragraphs: [
      'Vex 10 represents the pinnacle of the world-famous Vex platformer series developed by Azerion. Stepping into the shoes of the agile stickman parkour master, players must navigate intricate obstacle courses packed with deadly traps, moving platforms, and high-speed acrobatics.',
      'Master an extensive movement toolkit: sprint, slide under spinning buzzsaw blades, wall-jump up sheer vertical shafts, swing across ropes, fly with hang-gliders, and swim through submerged flooded labyrinths.',
      'Conquer all standard Acts to unlock grueling Hard Mode challenges and collect hidden stars. With razor-sharp controls, instant checkpoint respawns, and thrilling level design, Vex 10 is an essential trial of skill for platforming fans.'
    ],
    howTo: [
      'Use WASD or Arrow Keys to run, jump, duck, slide, and climb up walls and poles.',
      'Slide while running at full speed to pass safely beneath low-hanging buzzsaws and laser grids.',
      'Wall-jump back and forth between adjacent vertical walls to scale high shafts and reach elevated platforms.',
      'Step on green checkpoint flags to save your progress, and reach the glowing portal to complete each Act.'
    ],
    tips: [
      'Checkpoint flags turn green when touched; make sure to activate every checkpoint to avoid repeating difficult traps.',
      'In flooded underwater sections, watch your air meter and surface near air bubbles before your oxygen runs out.',
      'Executing a slide right before a jump gives you extended horizontal distance—vital for crossing extra-wide spike pits.',
      'Observe before moving: study the movement patterns of rotating saws and laser beams before committing to your sprint.'
    ],
    controlsText: 'WASD or Arrow Keys to move, jump, slide, and climb. R to restart from the last checkpoint.',
    keycaps: ['wasd', 'arrows', 'R'],
    developer: 'Azerion / Agame',
    release: '2024'
  }
};

function formatKeycaps(keys) {
  const map = {
    'mouse': '<span class="keycap keycap-wide"><i class="fas fa-computer-mouse"></i> Mouse</span>',
    'wasd': '<span class="keycap">W</span><span class="keycap">A</span><span class="keycap">S</span><span class="keycap">D</span>',
    'arrows': '<span class="keycap keycap-up"><i class="fas fa-arrow-up"></i></span><span class="keycap keycap-left"><i class="fas fa-arrow-left"></i></span><span class="keycap keycap-down"><i class="fas fa-arrow-down"></i></span><span class="keycap keycap-right"><i class="fas fa-arrow-right"></i></span>',
    'space': '<span class="keycap keycap-space">Space</span>',
    'shift': '<span class="keycap keycap-wide">Shift</span>',
    'up': '<span class="keycap keycap-up"><i class="fas fa-arrow-up"></i></span>',
    'ad': '<span class="keycap">A</span><span class="keycap">D</span>',
    'ijkl': '<span class="keycap">I</span><span class="keycap">J</span><span class="keycap">K</span><span class="keycap">L</span>',
    '1-8': '<span class="keycap">1</span><span class="keycap">2</span><span class="keycap">3</span><span class="keycap">...</span><span class="keycap">8</span>',
    'M': '<span class="keycap">M</span>',
    'P': '<span class="keycap">P</span>',
    'R': '<span class="keycap">R</span>',
    'C': '<span class="keycap">C</span>',
    'W': '<span class="keycap">W</span>',
    'I': '<span class="keycap">I</span>',
    'Z': '<span class="keycap">Z</span>'
  };

  return keys.map(k => map[k] || `<span class="keycap">${k}</span>`).join('\n        ');
}

// 1. Update games.json and play/games.json
function updateJsonFiles() {
  ['games.json', 'play/games.json'].forEach(filePath => {
    if (!fs.existsSync(filePath)) return;
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let modified = 0;
    data.forEach(item => {
      for (const [key, details] of Object.entries(item)) {
        const k = key.toLowerCase();
        if (GAME_DATA[k]) {
          details.description = GAME_DATA[k].catalogDesc;
          modified++;
        }
      }
    });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4), 'utf8');
    console.log(`Updated ${modified} descriptions in ${filePath}`);
  });
}

// 2. Update play pages
function updatePlayPages() {
  let updatedCount = 0;
  for (const [slug, info] of Object.entries(GAME_DATA)) {
    const playHtmlPath = path.join('play', slug, 'index.html');
    if (!fs.existsSync(playHtmlPath)) {
      console.warn(`Missing play page: ${playHtmlPath}`);
      continue;
    }

    let html = fs.readFileSync(playHtmlPath, 'utf8');

    // Build the rich play-about article content
    const howToItems = info.howTo.map(step => `                  <li>${step}</li>`).join('\n');
    const tipItems = info.tips.map(tip => `                  <li>${tip}</li>`).join('\n');
    const capHtml = formatKeycaps(info.keycaps);

    const gameNameCapitalized = slug.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    const newAboutBody = `
        <p>${info.paragraphs[0]}</p>

        <div class="ad-unit ad-unit-inarticle">
          <span class="ad-label">Advertisement</span>
          <ins class="adsbygoogle" data-ad-key="inArticle"></ins>
        </div>

        <p>${info.paragraphs[1]}</p>
        <p>${info.paragraphs[2]}</p>

        <h3>How to play ${gameNameCapitalized}</h3>
        <ol>
${howToItems}
        </ol>

        <h3>Tips for winning and high scores</h3>
        <ul>
${tipItems}
        </ul>

        <h3>Frequently asked questions</h3>
        <p><b>Is ${gameNameCapitalized} free to play?</b><br />Yes, it is completely free to play directly in your web browser on Blooket1 with no downloads or installs required.</p>
        <p><b>Can I play ${gameNameCapitalized} on a school Chromebook or mobile?</b><br />Yes, it runs smoothly in any modern browser including Chrome on Chromebooks, laptops, tablets, and smartphones.</p>
        <p><b>Does my progress save automatically?</b><br />Your high scores, achievements, and unlocked upgrades are stored locally in your browser so you can continue where you left off.</p>
      `;

    // Replace <h2 class="play-about-title">...</h2>
    html = html.replace(/<h2 class="play-about-title">[\s\S]*?<\/h2>/, `<h2 class="play-about-title">${info.title}</h2>`);

    // Replace <div class="play-about-body" id="play-about-body">...</div>
    html = html.replace(/<div class="play-about-body"[^>]*>[\s\S]*?<\/div>\s*<\/article>/, `<div class="play-about-body" id="play-about-body">${newAboutBody}</div>\n            </article>`);

    // Replace Controls text and keycaps in <aside class="play-card play-facts">
    html = html.replace(/<p class="play-controls-text">[\s\S]*?<\/p>/, `<p class="play-controls-text">\n                ${info.controlsText}\n              </p>`);
    html = html.replace(/<div class="play-keycaps"[^>]*>[\s\S]*?<\/div>/, `<div class="play-keycaps" aria-hidden="true">\n        ${capHtml}\n      </div>`);

    // Update Developer / Release in play-facts-list if present
    if (html.includes('<dl class="play-facts-list">')) {
      const devRow = `<div><dt>Developer</dt><dd>${info.developer}</dd></div>`;
      const relRow = `<div><dt>Release</dt><dd>${info.release}</dd></div>`;
      
      // If Developer is already there, replace it, otherwise inject it
      if (html.includes('<dt>Developer</dt>')) {
        html = html.replace(/<div><dt>Developer<\/dt><dd>[\s\S]*?<\/dd><\/div>/, devRow);
      } else if (html.includes('<dt>Publisher</dt>')) {
        html = html.replace(/<div><dt>Publisher<\/dt><dd>[\s\S]*?<\/dd><\/div>/, devRow);
      } else {
        html = html.replace(/<dl class="play-facts-list">/, `<dl class="play-facts-list">\n                ${devRow}`);
      }

      if (html.includes('<dt>Release</dt>')) {
        html = html.replace(/<div><dt>Release<\/dt><dd>[\s\S]*?<\/dd><\/div>/, relRow);
      } else if (html.includes('<dt>Released</dt>')) {
        html = html.replace(/<div><dt>Released<\/dt><dd>[\s\S]*?<\/dd><\/div>/, relRow);
      }
    }

    fs.writeFileSync(playHtmlPath, html, 'utf8');
    updatedCount++;
    console.log(`Updated play page for: ${slug}`);
  }
  console.log(`Total play pages updated: ${updatedCount}`);
}

updateJsonFiles();
updatePlayPages();
