const { applyBatch } = require('./apply_batch');

const BATCH_2 = {
  'soccer random': {
    displayName: 'Soccer Random',
    title: 'Soccer Random: One-Button Ragdoll Football Mayhem',
    catalogDesc: 'Kick, leap, and score in RHM Interactive\'s wildly unpredictable 1-button ragdoll soccer game! Battle across beach sands, icy snowdrifts, and rainstorms with bobblehead ballers in 1P or 2P modes.',
    paragraphs: [
      'Soccer Random is a wildly entertaining and chaotic ragdoll football game developed by RHM Interactive. With only a single button per player, two ragdoll soccer players flail, kick, and leap to propel the ball into the opposing net.',
      'What makes Soccer Random truly special is its unpredictable procedural variety: after every scored goal, the playing field completely transforms! Play on slippery ice rinks, sandy sunny beaches, lush grass fields, and rainy pitches with giant beach balls, tennis balls, or heavy iron bowling balls.',
      'Jump into fast-paced matches against clever AI opponents or share a keyboard with a friend in hysterical local 2-player showdowns where bizarre physics glitches and accidental scorpion kicks lead to unforgettable goals.'
    ],
    howTo: [
      'Press your assigned button (W or Up Arrow for Player 1, Up Arrow for Player 2) to jump and kick.',
      'Time your jumps so your players swing their legs into the ball with optimal forward trajectory.',
      'Adapt to changing physics conditions: slippery ice causes players to slide, while heavy balls require direct headers.',
      'Be the first team to score 5 goals to claim victory and win the match.'
    ],
    tips: [
      'Timing beats button mashing: wait for the ball to descend before jumping to execute powerful downward volleys.',
      'Use the goalkeeper: keeping your back defender upright acts as a sturdy wall that blocks incoming aerial shots.',
      'Watch out for light beach balls—they float high in the air and can easily be headed directly over defensive lines.',
      'On icy snow fields, use slide momentum to sweep the ball forward along the ground.'
    ],
    controlsText: 'Player 1: W key or Up Arrow. Player 2: Up Arrow. Mobile: Tap on-screen jump buttons. One-button controls per team!',
    keycaps: ['W', 'up', 'mouse'],
    developer: 'RHM Interactive',
    release: '2020'
  },
  'eggy car': {
    displayName: 'Eggy Car',
    title: 'Eggy Car: Delicate Hill-Climbing Physics Challenge',
    catalogDesc: 'Drive a speedy automobile carrying a fragile egg over steep hills and bumpy ramps without cracking it! Collect coins, unlock cute egg cars, and master delicate throttle control.',
    paragraphs: [
      'Eggy Car is a wonderfully tense and addictive physics-based driving game developed by Beedo Games. Your mission is deceptively straightforward: drive your vintage car along a never-ending series of steep hills, bumpy ramps, and sheer drops carrying a giant, fragile egg on the roof.',
      'The catch? The egg is completely unsecured! Floor the gas too aggressively or slam on the brakes, and the egg will tumble off your vehicle and shatter on the pavement, ending your run on the spot.',
      'Collect shiny golden coins and helpful power-up magnets along your journey. Reinvest your earnings in the garage to unlock stylized vehicles with better suspension, smoother acceleration, and deeper egg baskets to achieve record-shattering distances.'
    ],
    howTo: [
      'Press D or Right Arrow to accelerate forward gently.',
      'Press A or Left Arrow to brake and reverse when the egg starts tipping forward.',
      'Balance your speed over steep crests and dips to keep the egg safely nested in the roof cradle.',
      'Collect coins and power-up boosters (like freeze eggs and coin magnets) to extend your distance record.'
    ],
    tips: [
      'Gentle throttle taps: never hold the accelerator down continuously; feather the throttle to maintain smooth balance.',
      'When cresting steep hilltops, tap the brake key to prevent your car from launching airborne and launching the egg.',
      'Grab the "Freeze" power-up whenever it appears—it freezes the egg solidly to your roof, allowing temporary full-speed driving!',
      'Unlock larger vehicles in the garage; heavier cars absorb road bumps with much greater suspension stability.'
    ],
    controlsText: 'D or Right Arrow to accelerate forward. A or Left Arrow to brake and reverse. Spacebar to brake.',
    keycaps: ['ad', 'arrows', 'space'],
    developer: 'Beedo Games',
    release: '2019'
  },
  'boxing random': {
    displayName: 'Boxing Random',
    title: 'Boxing Random: Wacky One-Button Physics Brawler',
    catalogDesc: 'Step into the boxing ring in RHM Interactive\'s chaotic ragdoll fighting game! Flail, hop, headbutt, and throw long-range rocket punches to knock out your opponent in 1P or 2P modes.',
    paragraphs: [
      'Boxing Random is a riotous, physics-fueled combat game from RHM Interactive that brings the hilarious randomizer formula to the sweet science of boxing. Using only a single button, players leap forward and backward while swinging noodle-like ragdoll arms to land knockout blows.',
      'Every round shifts the rules of engagement: fight in slippery snowdrifts, on precarious rooftops, or with low-gravity physics. Your boxer\'s arms might transform into extended elastic fists, high-explosive rocket gloves, or hyper-heavy iron knuckles that send rivals flying across the ring.',
      'Land clean punches to the head to score instant knockdowns. First fighter to achieve 5 round victories earns the championship belt in both single-player challenges and two-player couch rivalry.'
    ],
    howTo: [
      'Press W or Up Arrow (Player 1) or Up Arrow (Player 2) to jump and throw a punch.',
      'Time your jumps so your boxer\'s fist or head makes solid impact with your opponent\'s skull.',
      'Adapt to dynamic arena modifiers including extended arms, spring floors, and rocket gloves.',
      'Score 5 knockouts before your opponent to win the championship match.'
    ],
    tips: [
      'Headshots are instant knockouts: angle your jump slightly above your opponent to land punches cleanly on their head.',
      'Don\'t jump blindly into oncoming fists—wait for your opponent to leap and miss, then counter-punch while they recover.',
      'In rocket-glove rounds, keep your distance and let the rocket propulsion punch opponents from across the entire ring.',
      'Use headbutts: when arms get tangled up, leaning your boxer\'s head forward can deliver an unexpected knockout hit.'
    ],
    controlsText: 'Player 1: W or Up Arrow. Player 2: Up Arrow. Touch controls supported on mobile devices.',
    keycaps: ['W', 'up', 'mouse'],
    developer: 'RHM Interactive',
    release: '2021'
  },
  'cookie clicker': {
    displayName: 'Cookie Clicker',
    title: 'Cookie Clicker: The Original Phenomenon of Idle Gaming',
    catalogDesc: 'The legendary progenitor of the idle genre created by Orteil! Bake cookies by the trillions, hire baking grandmas, build cookie farms, mines, and portals, and trigger cosmic Grandmapocalypse events.',
    paragraphs: [
      'Cookie Clicker is the monumental browser game created by Julien "Orteil" Thiennot in 2013 that defined the modern idle incremental genre. It begins with a single, colossal chocolate chip cookie. Click it, bake a cookie, and prepare to unleash an industrial empire of baking.',
      'Invest baked cookies into automated baking infrastructure: recruit friendly grandmas, cultivate cookie farms, dig cookie mines, and manufacture cookie factories. As numbers escalate into billions, trillions, and unvigintillions, unlock time machines, antimatter condensers, prism beams, and portals to the Cookieverse.',
      'Click elusive Golden Cookies for game-changing frenzy multipliers, conduct sinister research that unleashes the dread Grandmapocalypse, cultivate cross-pollinating crops in the Farm Minigame, and ascend to the Heavenly realm for permanent prestige power.'
    ],
    howTo: [
      'Click the giant cookie on the left side of the screen to bake cookies manually.',
      'Purchase buildings on the right store shelf (Cursors, Grandmas, Farms, Mines) to produce cookies per second (CpS).',
      'Click Golden Cookies that occasionally drift across the screen to trigger massive Frenzy and Lucky bonuses.',
      'Ascend into the Heavenly realm when progression plateaus to spend Heavenly Chips on permanent upgrades.'
    ],
    tips: [
      'Golden Cookies are the secret to rapid progression: stacking a Frenzy (7x CpS) with a Click Frenzy (777x click power) yields astronomical cookies.',
      'Keep a bank of unspent cookies equal to roughly 6,000 times your current CpS to maximize "Lucky!" Golden Cookie payouts.',
      'Unlock minigames like the Garden, Pantheon, and Grimoire early to gain immense passive stat boosts and spell combos.',
      'Appease or exploit the Grandmapocalypse: letting Wrinklers feed on your cookie pool multiplies your eventual payout by over 6x.'
    ],
    controlsText: 'Mouse click or touchscreen tap to click cookies, buy buildings, and manage upgrades.',
    keycaps: ['mouse'],
    developer: 'Orteil / DashNet',
    release: '2013'
  },
  'basket random': {
    displayName: 'Basket Random',
    title: 'Basket Random: One-Button Ragdoll Basketball Showdown',
    catalogDesc: 'Dunk, shoot, and steal with ragdoll physics in RHM Interactive\'s hit 1-button basketball game! Play across changing courts, snowy fields, and rooftops with light and heavy balls in 1P or 2P modes.',
    paragraphs: [
      'Basket Random is a hysterical, high-energy 2v2 arcade basketball game from RHM Interactive. Featuring unpredictable ragdoll physics and a simple one-button control scheme, two basketball players leap, flail, and scramble across the court to score buckets.',
      'Each scored basket completely resets the playing conditions with random field modifiers: play on outdoor beach courts, snowy city streets, or rooftop playgrounds. Battle with giant heavy basketballs that barely bounce, lightweight beach balls, or super-bouncy balls that fly off the backboard.',
      'Compete solo against tricky AI opponents or battle a friend on the same device in thrilling 2-player showdowns where wild steals, accidental buzzer-beaters, and rim-rattling dunks are guaranteed every match.'
    ],
    howTo: [
      'Press your single assigned key (W for Player 1, Up Arrow for Player 2) to leap, flail arms, and shoot the ball.',
      'Time your jumps so your offensive player catches the ball and releases it toward the basket at the peak of elevation.',
      'Position your defensive player near your hoop to swat away opposing shots and grab rebounds.',
      'Be the first team to reach 5 points to win the championship trophy.'
    ],
    tips: [
      'Release timing: letting go of the jump key right as your baller reaches the rim ensures a clean slam dunk.',
      'Use the backboard: bank shots are remarkably consistent, especially when playing with bouncy or oversized balls.',
      'Keep your back defender upright under the rim—a solid defensive wall prevents opponents from driving in for easy dunks.',
      'On slippery ice courts, slide forward into the ball to sweep it across the floor away from opposing players.'
    ],
    controlsText: 'Player 1: W or Up Arrow. Player 2: Up Arrow. Touchscreen tap supported. One-button controls per team!',
    keycaps: ['W', 'up', 'mouse'],
    developer: 'RHM Interactive',
    release: '2020'
  },
  'volley random': {
    displayName: 'Volley Random',
    title: 'Volley Random: Hilarious Ragdoll Volleyball Battles',
    catalogDesc: 'Bump, set, and spike in RHM Interactive\'s hilarious 1-button ragdoll volleyball battle! Play across sunny beaches, snow courts, and night fields with crazy balls and unpredictable ragdoll physics.',
    paragraphs: [
      'Volley Random is a laugh-out-loud ragdoll sports game from RHM Interactive that brings chaotic physics to the volleyball court. Controlling two ragdoll volleyball teammates with a single button, players leap, dive, and flail to return the ball over the net.',
      'True to the Randomizer series, the court environment shifts after every single point. Compete on sun-soaked tropical beaches, freezing winter courts, or city parks with changing ball types—including heavy iron balls, floating beach balls, and unpredictable weighted balls.',
      'Test your timing against AI or challenge a friend in 2-player local rivalry where saving a point with a desperate diving header feels just as thrilling as spiking the ball straight down into the sand.'
    ],
    howTo: [
      'Press W or Up Arrow (Player 1) or Up Arrow (Player 2) to jump and swing your arms.',
      'Time your jump so your frontline player blocks opposing spikes or sets the ball high into the air.',
      'Keep the ball aloft and prevent it from hitting the sand on your side of the net.',
      'Be the first team to score 5 points to win the match.'
    ],
    tips: [
      'Don\'t jump too early: wait until the ball crosses the net and drops into striking range before leaping.',
      'Keep your back player back as a safety net to cover deep drops and deflect errant spikes.',
      'Heavy balls drop like stones—stand directly beneath them to pop them back over the net with a header.',
      'Light beach balls float for a long time: let them float to peak height before spiking them straight down.'
    ],
    controlsText: 'Player 1: W or Up Arrow. Player 2: Up Arrow. Touch controls supported on mobile devices.',
    keycaps: ['W', 'up', 'mouse'],
    developer: 'RHM Interactive',
    release: '2021'
  },
  'doodle jump': {
    displayName: 'Doodle Jump',
    title: 'Doodle Jump: The Legendary Vertical Bouncing Classic',
    catalogDesc: 'Bounce higher and higher on a sheet of graph paper in Lima Sky\'s iconic vertical platformer! Blast monsters with nose pellets, grab jetpacks and propeller hats, and dodge black holes to reach the stars.',
    paragraphs: [
      'Doodle Jump is the immortal vertical platforming classic developed by Lima Sky that defined early mobile gaming. Guiding the adorable four-legged Doodler on a sheet of authentic graph paper, your objective is to leap endlessly upward from platform to platform.',
      'Navigate tricky moving platforms, fragile breaking brown ledges, disappearing blue platforms, and springboards that launch you soaring into the upper atmosphere. Aim your nose snout to blast strange alien monsters with pellet balls or stomp them from above.',
      'Strap on high-flying propeller hats, rocket jetpacks, and super-bouncy trampoline springs to bypass obstacles at supersonic speed while dodging lethal black holes and UFO abduction beams.'
    ],
    howTo: [
      'Use Left and Right Arrow keys or A and D to guide the Doodler horizontally across platforms.',
      'Aim your mouse cursor and click (or press Up Arrow) to shoot pellets from your snout at monsters.',
      'Bounce continuously on green, blue, and moving platforms to climb higher into the stratosphere.',
      'Screen-wrap: stepping off the left edge of the screen makes the Doodler emerge on the right edge.'
    ],
    tips: [
      'Master the screen wrap: jumping off one edge of the screen to appear on the opposite side is essential for reaching distant platforms.',
      'Avoid brown cracked platforms; they break instantly upon touch and will send you falling to game over.',
      'Shoot monsters from below rather than trying to jump on their heads; hitting their hitboxes can be risky.',
      'Grab jetpacks and rocket packs whenever they appear—they make you completely invulnerable to monsters and black holes during flight.'
    ],
    controlsText: 'Left / Right Arrow keys or A / D to steer. Up Arrow, Spacebar, or Mouse Click to shoot nose pellets.',
    keycaps: ['arrows', 'ad', 'space', 'mouse'],
    developer: 'Lima Sky',
    release: '2009'
  },
  'rooftop snipers': {
    displayName: 'Rooftop Snipers',
    title: 'Rooftop Snipers: Two-Button Skyscraper Duel',
    catalogDesc: 'Duel on skyscraper rooftops in Michael Eichler\'s famous two-button physics showdown! Jump, dodge, aim your sniper rifle, and shoot opponents off the ledge in 1-player or local 2-player mode.',
    paragraphs: [
      'Rooftop Snipers is a beloved chaotic two-button physics duel game developed by Michael Eichler (New Eich Games). Two sharpshooters stand perched atop dangerous skyscraper rooftops, dodging sniper bullets, toppling elevators, and flying beach balls.',
      'The controls are gloriously stripped down: you have only two keys—one to jump and one to shoot. When you hold the shoot key, your character raises their rifle arm in a circular arc; release it at the exact moment your crosshairs align with your opponent to loose a high-powered sniper round.',
      'Survive dynamic weather and environment hazards—from slippery snow and low gravity to driving rain and flying projectiles. Be the first sniper to knock your opponent off the roof 5 times to claim victory.'
    ],
    howTo: [
      'Press W (Player 1) or I (Player 2) to jump backward, charge leaps, and dodge incoming bullets.',
      'Hold E (Player 1) or O (Player 2) to raise your sniper rifle arm; release the key to fire a shot.',
      'Use bullet impacts to knock your rival off balance and push them off the edge of the rooftop.',
      'Be the first player to achieve 5 round wins to be crowned the ultimate rooftop sniper.'
    ],
    tips: [
      'Lead your shots: release your rifle trigger right as your arm swings past horizontal to catch jumping opponents.',
      'Time your jumps to leap over incoming sniper rounds; bullets travel straight across the rooftop.',
      'In low gravity or bouncy rounds, jumping too high makes you an easy airborne target with zero cover.',
      'Push aggressive opponents: shooting an enemy while they are teetering near the edge ensures a clean round knockout.'
    ],
    controlsText: 'Player 1: W to jump, E to shoot. Player 2: I to jump, O to shoot. Simple two-button controls!',
    keycaps: ['W', 'E', 'I', 'O'],
    developer: 'New Eich Games',
    release: '2017'
  },
  'rocket league': {
    displayName: 'Rocket League 2D',
    title: 'Rocket League 2D: High-Flying Car Soccer Showdown',
    catalogDesc: 'Rocket-powered battle cars meet high-stakes soccer! Boost, double-jump, flip, and aerial strike giant soccer balls into the opponent\'s net in fast-paced 1v1 and 2v2 arena matches.',
    paragraphs: [
      'Rocket League 2D brings the electrifying vehicular soccer gameplay of Psyonix\'s global blockbuster into a fast, fluid 2D arcade arena. Behind the wheel of a high-torque, rocket-propelled battle car, players flip, boost, and launch through the air to smash giant soccer balls into the net.',
      'Experience authentic physics modeling: drive up curved arena walls, time double-jump aerials to strike balls mid-flight, and execute bicycle kicks to turn defensive saves into lightning-fast counter-attacks.',
      'Battle solo against aggressive AI bots or play head-to-head against friends on the same device. Manage your boost meter, contest kickoffs, and score spectacular goals across tournament matches.'
    ],
    howTo: [
      'Use WASD or Arrow Keys to steer, accelerate, brake, and pitch your vehicle in the air.',
      'Press Spacebar or Shift to activate rocket boost and launch across the pitch at supersonic speed.',
      'Press J or Up Arrow twice to execute a double-jump flip for extra striking power against the ball.',
      'Score more goals than your opponent before the 3-minute match clock expires.'
    ],
    tips: [
      'Win the kickoff: boost forward and flip into the ball right at the center line to pop the ball toward the enemy net.',
      'Conserve boost for aerial challenges—don\'t waste your entire boost tank just driving on flat ground.',
      'Drive up arena walls to position yourself above the ball, then leap off the wall for high-angle header goals.',
      'Rotate back on defense: leaving your net completely unguarded makes you vulnerable to simple long-range lobs.'
    ],
    controlsText: 'WASD or Arrow Keys to drive and tilt car. Spacebar / Shift to Boost. J / Up Arrow to Jump & Flip.',
    keycaps: ['wasd', 'arrows', 'space', 'shift'],
    developer: 'Community / Psyonix Inspired',
    release: '2021'
  },
  'tank game': {
    displayName: 'Tank Trouble',
    title: 'Tank Trouble: Classic Maze Combat & Ricochet Shells',
    catalogDesc: 'Duel armored tanks in narrow subterranean mazes! Fire bouncing shells that ricochet off walls, grab laser sights, homing missiles, and landmines in this timeless local multiplayer classic.',
    paragraphs: [
      'Tank Trouble (Tank Game) is the legendary top-down multiplayer tank combat game created by Mads Purup. Operating nimble combat tanks inside claustrophobic concrete labyrinths, players engage in deadly cat-and-mouse duels where every bullet ricochets off walls.',
      'The genius of the game lies in its bouncing ballistics: shells bounce multiple times off maze walls before exploding, making trick shots around corners just as deadly to your enemies as they are to yourself if you aren\'t careful!',
      'Scattered weapon crates supply devastating experimental ordnance—including high-velocity laser beams that slice through walls, fragmentation grenades, deployable landmines, RC rockets, and devastating Gatling turrets.'
    ],
    howTo: [
      'Player 1: Use WASD to drive and Q to fire cannon. Player 2: Use Arrow Keys to drive and M to fire. (Supports 3 players).',
      'Drive through weapon crates in maze corridors to equip specialized military ordnance.',
      'Calculate angles to ricochet cannon shells around corners and strike opponents behind cover.',
      'Dodge ricocheting bullets—your own bouncing shells can eliminate your tank if they rebound!'
    ],
    tips: [
      'Beware your own shots: shells bounce several times before dissipating, so always move out of the ricochet path after firing.',
      'Laser pickups fire instantaneous beams that pierce through walls—line up through obstacles for surprise snipes.',
      'Plant landmines at narrow hallway intersections, then retreat to bait aggressive opponents into the blast zone.',
      'Corner-peeking: rotate your turret around a corner before advancing to check for bouncing stray bullets.'
    ],
    controlsText: 'Player 1: WASD to move, Q to shoot. Player 2: Arrow Keys to move, M to shoot. Player 3: Mouse to drive and shoot.',
    keycaps: ['wasd', 'Q', 'arrows', 'M', 'mouse'],
    developer: 'Mads Purup / Subsub Games',
    release: '2007'
  },
  'fireboy and watergirl': {
    displayName: 'Fireboy and Watergirl',
    title: 'Fireboy and Watergirl: The Forest Temple Puzzle Adventure',
    catalogDesc: 'The undisputed king of cooperative puzzle platformers by Oslo Albet! Guide Fireboy through lava lakes and Watergirl through water pools, push levers, and collect gems in the Forest Temple.',
    paragraphs: [
      'Fireboy and Watergirl in the Forest Temple is Oslo Albet\'s world-famous cooperative puzzle adventure that has captivated generations of players. Controlling two elemental heroes simultaneously or with a friend, you must solve intricate temple puzzles to reach the exit portals.',
      'Each character possesses unique elemental immunities and fatal vulnerabilities: Fireboy walks freely through molten lava pools but dissolves in water; Watergirl glides effortlessly across deep water pools but instantly turns to ash in lava. Both heroes are extinguished by toxic green goo!',
      'Cooperate to solve mechanical mechanisms: step on pressure plates to lower drawbridges, push giant stone blocks to climb ledges, direct light beams using optical mirrors, and gather red and blue diamonds before time runs out.'
    ],
    howTo: [
      'Control Fireboy using the Arrow Keys (Up Arrow to jump, Left/Right to run).',
      'Control Watergirl using WASD (W to jump, A/D to run).',
      'Guide Fireboy through red lava and Watergirl through blue water, avoiding green toxic slime with both.',
      'Push buttons, flip levers, collect all diamonds, and guide both heroes to their respective elemental exit doors.'
    ],
    tips: [
      'Play cooperatively with a friend on the same keyboard for the smoothest puzzle coordination and timing.',
      'Green toxic goo is fatal to BOTH characters—never let either Fireboy or Watergirl touch green puddles.',
      'Have one character hold down a pressure switch while the other character crosses the newly opened gate.',
      'Collect all diamonds and complete levels quickly to achieve the coveted "A" rank on the temple map.'
    ],
    controlsText: 'Fireboy: Arrow Keys to move and jump. Watergirl: WASD to move and jump. Play solo or with a partner!',
    keycaps: ['arrows', 'wasd'],
    developer: 'Oslo Albet',
    release: '2009'
  },
  'hex gl': {
    displayName: 'HexGL',
    title: 'HexGL: Futuristic WebGL Anti-Gravity Speed Racing',
    catalogDesc: 'Tear through futuristic magnetic tracks at supersonic speeds in Thibaut Despoulain\'s tribute to Wipeout and F-Zero! Built in bleeding-edge 3D WebGL with pulse-pounding electronic music.',
    paragraphs: [
      'HexGL is a breathtaking, futuristic anti-gravity racing simulation built by Thibaut Despoulain in pure WebGL and JavaScript. Serving as a passionate tribute to legendary sci-fi racers like Wipeout and F-Zero, HexGL pushes browser 3D graphics to astonishing heights.',
      'Pilot a sleek, hover-craft racing ship through floating cybernetic track loops, soaring banked curves, and neon city canyons at speeds well over 400 km/h. Master airbrakes to negotiate tight hairpin turns without colliding with high-voltage track barriers.',
      'Hit glowing track booster pads to trigger supersonic speed bursts, manage ship shield integrity against wall friction, and shave milliseconds off your qualifying times to conquer the global leaderboard.'
    ],
    howTo: [
      'Use Up Arrow or W to accelerate and Down Arrow or S to brake.',
      'Steer with Left and Right Arrow keys or A and D.',
      'Press Q and E to activate left and right airbrakes for sharp cornering at high speeds.',
      'Drive across glowing blue and purple chevron pads on the track surface for massive velocity boosts.'
    ],
    tips: [
      'Master the airbrakes: tapping Q or E while turning allows you to carve through sharp bends without losing forward speed.',
      'Avoid scraping track barriers; wall collisions deplete your ship\'s shield meter and can destroy your craft.',
      'Hit every boost chevron pad on straightaways to reach maximum supersonic velocity.',
      'Adjust graphic fidelity settings in the pause menu if running on school Chromebooks for smooth 60 FPS performance.'
    ],
    controlsText: 'WASD or Arrow Keys to drive. Q / E for Airbrakes. Spacebar to boost. C to switch camera.',
    keycaps: ['wasd', 'arrows', 'Q', 'E', 'space', 'C'],
    developer: 'Thibaut Despoulain',
    release: '2012'
  },
  'moto x3m pool party': {
    displayName: 'Moto X3M Pool Party',
    title: 'Moto X3M Pool Party: Extreme Aquatic Dirt Bike Stunts',
    catalogDesc: 'Rev your dirt bike through giant water slides, massive loop-de-loops, and explosive watermines in MadPuffers\' sunny sequel! Perform 360 backflips to shave seconds off your time and earn 3 stars.',
    paragraphs: [
      'Moto X3M Pool Party is the sun-soaked aquatic chapter of MadPuffers\' world-famous extreme motocross stunt racing series. Grab your helmet, kickstart your dirt bike, and race through 25 high-octane obstacle courses set across a bustling luxury waterpark.',
      'Blast through giant spiral water slides, leap across sunbathing decks, launch off massive trampolines, and dodge explosive naval mines, crushing spiked buoys, and underwater whirlpools. The physics-driven balance demands sharp reflexes to prevent your biker from wiping out.',
      'Execute frontflips and backflips while airborne to shave precious tenths of a second off your finish time, unlocking 3 gold stars on every track and earning cash to unlock cool motorcycles and wacky stunt riders.'
    ],
    howTo: [
      'Press W or Up Arrow to accelerate forward and S or Down Arrow to brake and reverse.',
      'Use A / D or Left / Right Arrow keys to lean your bike backward and forward to balance in mid-air.',
      'Perform continuous 360-degree flips while airborne to subtract 0.5 seconds from your final level timer.',
      'Reach the checkered flag safely without crashing your helmet to unlock the next level and earn 3 stars.'
    ],
    tips: [
      'Always land on both wheels parallel to the ramp angle to maintain maximum forward velocity upon landing.',
      'Perform backflips on every major jump: flip bonuses subtract seconds from your clock, which is essential for 3 stars.',
      'When riding through water slide loops, keep the accelerator pinned down to prevent gravity from pulling you off the roof.',
      'If you crash, press R to immediately respawn at the last green checkpoint flag with zero menu delay.'
    ],
    controlsText: 'W / Up Arrow to accelerate, S / Down to brake. A / D or Left / Right to lean and flip. R to respawn.',
    keycaps: ['wasd', 'arrows', 'R'],
    developer: 'MadPuffers',
    release: '2019'
  },
  'moto x3m spooky land': {
    displayName: 'Moto X3M Spooky Land',
    title: 'Moto X3M Spooky Land: Halloween Motocross Trials',
    catalogDesc: 'Conquer bone-chilling stunt tracks in MadPuffers\' spooky Halloween motocross edition! Ride across glowing green slime, dodge witches\' cauldrons, and survive spinning buzzsaws to score 3 stars.',
    paragraphs: [
      'Moto X3M Spooky Land takes MadPuffers\' legendary motocross stunt series into a chilling, haunted Halloween theme park! Ride through 22 heart-stopping levels filled with glowing toxic slime rivers, skeletal bone bridges, flying ghost bats, and razor-sharp pumpkin traps.',
      'Master intricate physics stunt driving: catapult across haunted pirate ships, navigate spinning skull loop-de-loops, and survive collapsing bone scaffolds while maintaining high-speed forward momentum.',
      'Flip your bike through dark cavernous drops to reduce your stage timer by 0.5 seconds per rotation, aiming for flawless 3-star ratings on every spooky course to unlock spooky stunt riders including a witch on a broom bike and a flaming skeleton racer.'
    ],
    howTo: [
      'Press W or Up Arrow to accelerate, and S or Down Arrow to brake and reverse.',
      'Use A / D or Left / Right Arrow keys to pitch your bike backward or forward while airborne.',
      'Chain frontflips and backflips during high jumps to shave bonus seconds off your stage timer.',
      'Cross the haunted finish line intact to unlock new stages and spooky customized bike skins.'
    ],
    tips: [
      'Land on both wheels simultaneously: landing on your rear wheel can cause your rider\'s head to snap back and crash.',
      'Watch out for glowing green slime pools—landing in toxic goo causes instant explosive wipeouts!',
      'Hit checkpoint tombstones cleanly so you respawn nearby if a mechanical saw trap catches you off guard.',
      'Flips are crucial: earning 3 stars on later stages is mathematically impossible without chaining multiple airborne flips.'
    ],
    controlsText: 'W / Up Arrow to drive, S / Down to brake. A / D or Left / Right to lean and flip. R to respawn.',
    keycaps: ['wasd', 'arrows', 'R'],
    developer: 'MadPuffers',
    release: '2019'
  },
  'happy wheels': {
    displayName: 'Happy Wheels',
    title: 'Happy Wheels: Legendary Ragdoll Obstacle Survival',
    catalogDesc: 'Jim Bonacci\'s notorious ragdoll physics platformer! Choose eccentric characters like Wheelchair Guy, Segway Guy, or Irresponsible Dad and navigate lethal obstacle courses of mines, spikes, and harpoons.',
    paragraphs: [
      'Happy Wheels is the dark, hilarious, and unforgettable ragdoll physics platformer created by Jim Bonacci in 2010 that became one of the most legendary viral games in internet history. Guiding fragile commuters through lethal obstacle courses, survival is rarely guaranteed.',
      'Choose from an iconic cast of eccentric racers—including Wheelchair Guy equipped with jet thrusters, Segway Guy, Irresponsible Dad riding a bicycle with his son in the rear child seat, and Moped Couple. Every character features distinct handling, weight distribution, and special abilities.',
      'Navigate perilous player-created obstacle courses packed with wrecking balls, landmines, harpoon cannons, spike pits, and crushing hydraulic presses in a festival of absurd, limb-detaching ragdoll physics.'
    ],
    howTo: [
      'Press Up Arrow to accelerate and Down Arrow to brake and reverse.',
      'Use Left and Right Arrow keys to lean your character and vehicle backward or forward.',
      'Press Spacebar to activate your character\'s primary ability (e.g. Wheelchair jet thrusters, Segway jump).',
      'Press Shift and Control for secondary actions, and Z to eject/abandon your vehicle.'
    ],
    tips: [
      'Lean back over steep bumps: keeping your front wheel elevated prevents your vehicle from flipping over forward on obstacles.',
      'Use your special ability wisely: Wheelchair Guy\'s jet boost allows you to clear massive gaps that other vehicles cannot reach.',
      'If your vehicle gets beached or destroyed, press Z to eject and crawl with ragdoll arms toward the finish line!',
      'Explore community levels in the level browser for thousands of incredible user-designed obstacle courses and puzzles.'
    ],
    controlsText: 'Up / Down Arrows to drive. Left / Right to lean. Spacebar for primary ability. Shift / Ctrl for secondary. Z to eject.',
    keycaps: ['arrows', 'space', 'shift', 'Z'],
    developer: 'Jim Bonacci / Fancy Force',
    release: '2010'
  },
  'traffic racer': {
    displayName: 'Traffic Racer',
    title: 'Traffic Racer: High-Speed 3D Highway Speed Simulation',
    catalogDesc: 'The pioneer of endless 3D highway traffic racing by SKGames! Weave between sedans and semi-trucks at 100+ km/h, drive on the wrong side of the road, and customize 35+ sports cars and trucks.',
    paragraphs: [
      'Traffic Racer is the landmark endless 3D highway racing game developed by Soner Kara (SKGames) that defined the endless highway racing genre. Get behind the wheel of detailed motor vehicles and blaze through dense commuter traffic across picturesque highways, snowy roads, deserts, and rainy cities at night.',
      'High-risk driving earns high rewards: driving faster than 100 km/h earns bonus cash, while executing heart-stopping near-miss overtakes within inches of civilian sedans, buses, and semi-trucks multiplies your score. In Two-Way traffic mode, driving on the wrong side of the road yields astronomical payout multipliers.',
      'Earn prize money to unlock and fully customize over 35 unique vehicles—from economy hatchbacks and rugged SUVs to roaring muscle cars and exotic mid-engine supercars—upgrading top speed, acceleration, braking, and handling.'
    ],
    howTo: [
      'Use W or Up Arrow to accelerate, and S or Down Arrow to brake and decelerate.',
      'Steer smoothly between lanes using A and D or Left and Right Arrow keys.',
      'Perform close-call overtakes at speeds above 100 km/h to earn bonus points and cash multipliers.',
      'In Two-Way mode, drive in the opposite oncoming traffic lanes to double your continuous score generation.'
    ],
    tips: [
      'Maintain speed above 100 km/h: overtaking cars below 100 km/h yields no close-call bonus points or cash.',
      'Tap brakes momentarily to adjust positioning rather than swerving violently across multi-lane highways.',
      'In Two-Way traffic, stay near the dashed center dividing line so you can dip back into your safe lane when trucks approach.',
      'Upgrade brakes and handling first; stopping power and agile steering are far more useful than raw straight-line speed.'
    ],
    controlsText: 'W / Up Arrow to accelerate, S / Down to brake. A / D or Left / Right to steer. Esc to pause.',
    keycaps: ['wasd', 'arrows', 'esc'],
    developer: 'SKGames',
    release: '2012'
  },
  'pixel battle royale': {
    displayName: 'Pixel Battle Royale',
    title: 'Pixel Battle Royale: Blocky Multiplayer Survival Shooter',
    catalogDesc: 'Parachute onto a massive blocky island, scavenge sniper rifles and shotguns, survive the shrinking toxic storm, and be the last pixel warrior standing in this fast-paced voxel battle royale!',
    paragraphs: [
      'Pixel Battle Royale brings the high-stakes survival excitement of Fortnite and PUBG into a fast-loading, low-poly voxel sandbox arena. Parachute out of an airborne dropship onto an expansive blocky island teeming with abandoned military bunkers, dense forests, and fortified towns.',
      'Scavenge buildings for high-tier weaponry: equip assault rifles, pump shotguns, sniper rifles, body armor, and medkits. Keep an eye on your tactical mini-map as the deadly blue storm circle contracts every minute, forcing surviving combatants into intense, close-quarters firefights.',
      'Use the environment to your tactical advantage: snipe opponents from church bell towers, ambush enemies inside houses, or drive pickup trucks across the map to secure the final victory royale.'
    ],
    howTo: [
      'Move with WASD and use Mouse to aim and look around in full 3D.',
      'Left-click to fire weapons, and Right-click to aim down sights for increased accuracy.',
      'Press E or F to loot weapons, ammunition, armor vests, and medical supplies from crates.',
      'Stay inside the white safe zone circle on the mini-map to avoid taking lethal damage from the shrinking storm.'
    ],
    tips: [
      'Aim down sights (Right-click): firing from the hip has high bullet spread, while aiming down sights guarantees tight groupings.',
      'Listen for footsteps and gunfire: directional audio reveals enemy locations through walls and around corners.',
      'Always seek high ground on hilltops or roof decks during the final storm circles to command clear sightlines.',
      'Keep your health and shield meters topped up with medkits and shield potions before entering firefights.'
    ],
    controlsText: 'WASD to move, Space to jump. Mouse to aim & shoot. Right-click to ADS. 1-5 for weapons. E/F to loot. C to crouch.',
    keycaps: ['wasd', 'space', 'mouse', '1-8', 'E', 'C'],
    developer: 'Voxel Games / Mentolatux',
    release: '2018'
  },
  'war brokers': {
    displayName: 'War Brokers',
    title: 'War Brokers: 3D Tactical Military Arena FPS',
    catalogDesc: 'Jump into intense military team battles! Pilot helicopters, drive tanks, customize assault rifles and sniper kits, and complete mission objectives across sprawling 3D tactical battlegrounds.',
    paragraphs: [
      'War Brokers is a feature-rich, high-intensity 3D first-person military tactical shooter created by Trebuchet. Featuring sprawling battlegrounds, players engage in adrenaline-pumping combined arms warfare featuring infantry, armored tanks, APCs, and combat helicopters.',
      'Choose from diverse game modes including Classic Team Deathmatch, Missile Launch Defense, Vehicle Escort, and Battle Royale. Customize your soldier\'s loadout with an expansive armory of assault rifles, submachine guns, bolt-action snipers, RPG launchers, and airstrikes.',
      'Command combat vehicles: pilot attack helicopters to rain rockets from above, drive heavily armored tanks through enemy fortifications, or hop on vehicle turrets to support your squad in coordinated tactical pushes.'
    ],
    howTo: [
      'Use WASD to move, Spacebar to jump, and C or Left Ctrl to crouch behind tactical cover.',
      'Aim with Mouse; Left-click to fire, Right-click to look through optical scopes and iron sights.',
      'Press R to reload, E to enter vehicles (tanks, helicopters, trucks), and 1-4 to switch weapon loadout.',
      'Work with your squad to capture missile points, escort military convoys, and outscore the enemy team.'
    ],
    tips: [
      'Crouch while firing to significantly reduce weapon recoil and tighten your bullet spread over long distances.',
      'Equip anti-tank RPGs or seek shelter inside bunkers when enemy combat helicopters patrol the skies.',
      'Use smoke grenades to break enemy sniper sightlines when crossing open desert or city street choke points.',
      'In vehicles, have a teammate man the secondary machine gun turret to cover your blind spots from infantry flanking.'
    ],
    controlsText: 'WASD to move, Space to jump. Mouse to aim and shoot. R to reload. E to enter/exit vehicles. M for map.',
    keycaps: ['wasd', 'space', 'mouse', 'R', 'E', 'M'],
    developer: 'Trebuchet',
    release: '2017'
  },
  'raft wars': {
    displayName: 'Raft Wars',
    title: 'Raft Wars: The Original Beach Artillery Classic',
    catalogDesc: 'The legendary original turn-based artillery game by Martijn Kunst! Help baby Simon and his brother defend buried beach gold from pirates and greedy bandits with a tennis ball cannon on an inflatable raft.',
    paragraphs: [
      'Raft Wars is Martijn Kunst\'s iconic 2007 Flash game that introduced millions of players to baby Simon and his legendary buried beach treasure. While playing in the sand dunes, Simon uncovers a chest of pure gold diamonds, immediately attracting greedy pirates, neighborhood bullies, and rival sailors.',
      'Climb aboard your inflatable pool raft, arm your high-powered tennis ball launcher, and engage in turn-based artillery combat. Calculate firing angles, adjust shot power, and lob bouncy tennis balls across the ocean waves to knock enemy pirates into the sea.',
      'Collect gold coins for completing stages in fewer shots and reinvest your treasure into raft upgrades, protective Viking helmets, tennis ball artillery launchers, and explosive rockets to conquer the pirate fleet.'
    ],
    howTo: [
      'Click and drag your mouse from Simon\'s cannon to adjust the firing angle and trajectory arc.',
      'Release the mouse button to lob a tennis ball toward the enemy raft.',
      'Factor in distance and obstacles to knock enemy sailors cleanly off their rafts into the water.',
      'Spend earned gold between stages to upgrade your raft, buy protective armor, and unlock explosive rockets.'
    ],
    tips: [
      'Fire a calibration shot on turn one to gauge distance and elevation, then adjust your angle slightly for a direct hit.',
      'Aim for the foundation or hull of enemy rafts—destabilizing the raft dumps all occupants into the ocean for a multi-KO.',
      'Equip rockets or cluster grenades when targets hide behind thick umbrellas, water barriers, or fortified boats.',
      'Purchase protective helmets for Simon and Paul early to survive enemy counter-attacks and stay in the fight.'
    ],
    controlsText: 'Mouse to aim trajectory; Left Mouse Click to fire cannonball.',
    keycaps: ['mouse'],
    developer: 'Martijn Kunst / NotDoppler',
    release: '2007'
  },
  'there is no game': {
    displayName: 'There Is No Game',
    title: 'There Is No Game: Comedic Meta-Narrative Puzzle Adventure',
    catalogDesc: 'Whatever you do, do not play this game! Because there is no game. The stubborn narrator insists you do something else—can you break the title screen and uncover the hidden adventure anyway?',
    paragraphs: [
      'There Is No Game is the brilliantly funny and subversive meta-puzzle game created by Pascal Cammisotto (KaMiZoTo) that won the 2015 Deconstructeam Jam. From the moment you load the screen, an annoyed narrator firmly insists that there is no game to play and politely asks you to close the tab and go read a book.',
      'Naturally, disobeying the narrator is where the adventure truly begins! Poke the title letters, pull down signs, break the sound mute button, uncover hidden keys, and dismantle the game\'s very user interface piece by piece.',
      'Packed with witty humor, clever fourth-wall breaks, and inventive puzzle mechanics that turn software UI elements into physical tools, There Is No Game is a celebrated masterclass in interactive comedy and creative game design.'
    ],
    howTo: [
      'Use your mouse to click on UI elements, title letters, volume icons, and background signs.',
      'Disobey the narrator\'s instructions and find unconventional ways to interact with the screen.',
      'Drag and drop loose interface letters and tools to smash locks, solve riddles, and reveal hidden compartments.',
      'Follow the unfolding meta-storyline through classic arcade parodies, brick-breaker stages, and escape puzzles.'
    ],
    tips: [
      'Click everything: if the narrator tells you not to touch a specific button or letter, that is your primary target!',
      'Letters in the title screen have weight and physics—drop them repeatedly on other objects to break them open.',
      'Listen closely to the narrator\'s dialogue; his sarcastic complaints often contain subtle hints about what to do next.',
      'Think outside the box: conventional gaming logic does not apply when you are literally dismantling the program.'
    ],
    controlsText: 'Mouse click and drag to interact with interface elements, letters, and puzzle objects.',
    keycaps: ['mouse'],
    developer: 'Kamizoto / Draw Me A Pixel',
    release: '2015'
  },
  'escape the bathroom': {
    displayName: 'Escape the Bathroom',
    title: 'Escape the Bathroom: Classic Room Escape Puzzle',
    catalogDesc: 'Find yourself locked inside an unfamiliar, cryptic bathroom! Search towel racks, mirrors, bathtubs, and cabinets to find hidden keys, decode number passwords, and unlock the exit door.',
    paragraphs: [
      'Escape the Bathroom is an authentic, classic point-and-click room escape puzzle game from the golden era of Flash adventures. Waking up to find the bathroom door locked tight with no obvious way out, you must use keen observational skills to inspect every fixture and tile.',
      'Examine bathroom mirrors for condensation clues, check inside soap dispensers, search behind shower curtains, inspect drain pipes, and unscrew air vents. Collect items like screwdrivers, keys, and cryptic code notes in your inventory.',
      'Combine inventory items, solve numerical keypad ciphers, and piece together the master escape sequence to unlock the bathroom door and regain your freedom.'
    ],
    howTo: [
      'Click on different areas of the room to zoom in and examine objects closely.',
      'Click the screen edges or navigation arrows to turn around and inspect all four walls of the bathroom.',
      'Click items to collect them into your bottom inventory tray; select an item to use it on the environment.',
      'Solve combination locks, unscrew panels, and find the golden key to unlock the master exit door.'
    ],
    tips: [
      'Check obscure corners: inspect underneath the sink, behind the toilet tank, and inside rolled towels for hidden items.',
      'Look for numbers and symbol sequences etched into tiles, mirrors, or soap bars to crack keypad locks.',
      'Try combining items in your inventory (e.g. attaching a battery to a flashlight) to unlock new functionality.',
      'If you get stuck, re-examine previously opened drawers; some contain false bottoms or hidden switches.'
    ],
    controlsText: 'Mouse click to inspect room, collect inventory items, and solve interactive puzzles.',
    keycaps: ['mouse'],
    developer: 'Afro-Ninja / Classic Escape',
    release: '2006'
  },
  'escape the car': {
    displayName: 'Escape the Car',
    title: 'Escape the Car: Point-and-Click Vehicle Escape',
    catalogDesc: 'Trapped inside a locked, immobilized vehicle with no memory of how you got there! Search the glove box, sun visors, trunk, and under floor mats to assemble tools and find the ignition key.',
    paragraphs: [
      'Escape the Car is a clever and claustrophobic point-and-click escape game that confines the classic room-escape formula entirely within the interior of an automobile. Trapped inside with locked doors and power windows disabled, you must use your wits to escape.',
      'Thoroughly search every nook and cranny of the vehicle: check the glove compartment, flip down sun visors, search beneath car floor mats, pry open fuse boxes, and access the rear trunk through the folding back seats.',
      'Find tools like wire coat hangers, coins, screwdrivers, and spare fuses to restore electrical power, hotwire systems, and unlock the vehicle doors before your air runs out.'
    ],
    howTo: [
      'Click around the car interior to inspect the dashboard, center console, steering column, and rear seats.',
      'Use navigation arrows to shift perspective between the front driver seat, passenger side, and rear trunk.',
      'Collect useful tools into your inventory and use them to open stuck compartments or unscrew panels.',
      'Restore power to the door lock mechanism or find the manual release latch to escape the automobile.'
    ],
    tips: [
      'Examine the glove box and center console thoroughly; vehicle manuals often contain fuse diagrams and radio codes.',
      'Check underneath floor mats and in seat crevices—small coins and paperclips are often wedged between cushions.',
      'Look for ways to access the trunk from the back seat to search for emergency jack tools and tire irons.',
      'Inspect collected inventory items closely; some tools can be disassembled or reshaped into lockpicks.'
    ],
    controlsText: 'Mouse click to navigate car interior, inspect compartments, and use inventory tools.',
    keycaps: ['mouse'],
    developer: 'Afro-Ninja / Classic Escape',
    release: '2007'
  },
  'dont escape': {
    displayName: "Don't Escape",
    title: "Don't Escape: The Subversive Werewolf Survival Thriller",
    catalogDesc: 'The acclaimed horror puzzle by Scriptwelder! You are a werewolf, and the full moon rises tonight. Instead of escaping, you must barricade and chain yourself inside so you cannot hurt anyone when you transform.',
    paragraphs: [
      'Don\'t Escape is the brilliantly original and chilling point-and-click horror puzzle game created by master indie developer Scriptwelder. In a stunning reversal of the traditional escape-the-room genre, your objective is not to break out of a locked room—it is to lock yourself so securely inside that you cannot escape!',
      'You are a cursed werewolf secluded in an abandoned cabin. In just a few hours, the full moon will rise, transforming you into a bloodthirsty, unstoppable beast. If you break out into the nearby village, innocent lives will be slaughtered.',
      'Search the cabin and surrounding woods for heavy chains, padlocks, iron bars, sleeping draughts, and meat rations. Fortify every door, board up windows, anchor chains to foundation beams, and prepare the ultimate prison for your own monstrous transformation.'
    ],
    howTo: [
      'Explore the cabin and outdoor surroundings using your mouse to examine objects and collect supplies.',
      'Select items in your inventory and apply them to doors, windows, fireplaces, and anchor chains to fortify defenses.',
      'Solve practical puzzles to reinforce weak points that a beast could exploit to escape.',
      'When preparations are complete, drink the sedative and lock yourself into your chains before the moon rises.'
    ],
    tips: [
      'Think like a monster: a werewolf has superhuman strength, so a simple wooden lock won\'t hold—reinforce with chains and iron bars!',
      'Don\'t forget alternate escape routes: check the fireplace chimney, cellar hatch, and ceiling rafters.',
      'Prepare bait: leaving raw meat in the room can distract the transformed beast from breaking through reinforced doors.',
      'Combine multiple layers of defense on the front door; one single chain is not enough to hold back the curse.'
    ],
    controlsText: 'Mouse click to move, examine scenery, collect items, and apply defenses.',
    keycaps: ['mouse'],
    developer: 'Scriptwelder / Armor Games',
    release: '2013'
  },
  'dont escape 2': {
    displayName: "Don't Escape 2",
    title: "Don't Escape 2: Post-Apocalyptic Zombie Fortification",
    catalogDesc: 'Survive the undead apocalypse in Scriptwelder\'s acclaimed survival sequel! Secure a fortified warehouse shelter, scavenge supplies, rescue survivors, and prepare defenses before sunset brings the horde.',
    paragraphs: [
      'Don\'t Escape 2: The Forgotten Outpost is the thrilling second chapter in Scriptwelder\'s celebrated subversion of the escape genre. Set in a desolate post-apocalyptic world overrun by ravenous infected zombies, you and your partner Bill have found temporary shelter in an abandoned warehouse.',
      'You have until sundown to prepare: a massive zombie horde is marching directly toward your outpost. Every action—traveling between locations, cutting wood, welding steel barricades, foraging for fuel—consumes precious in-game clock time.',
      'Explore surrounding gas stations, residential ruins, and abandoned highways. Scavenge gasoline, barbed wire, generator parts, and weapons. Make agonizing tactical decisions on what to prioritize to ensure your shelter holds when night falls.'
    ],
    howTo: [
      'Click to navigate the map, investigate abandoned buildings, and converse with other survivors.',
      'Collect materials (wood, steel, wire, gasoline, generator components) and manage inventory space.',
      'Monitor the in-game clock at the top of the screen; traveling and performing tasks consumes finite daylight time.',
      'Fortify warehouse doors, reinforce windows, electrify fences, and position defenses before the clock strikes 20:00.'
    ],
    tips: [
      'Time management is paramount: plan your travel routes efficiently to minimize wasted hours on the road.',
      'Fix the electrical generator: an electrified perimeter fence drastically reduces zombie pressure on warehouse doors.',
      'Recruit helpful survivors like the sniper—their support during the night attack is invaluable for survival.',
      'Barricade both ground-level doors and upper catwalks; infected will find any unreinforced entry point.'
    ],
    controlsText: 'Mouse click to navigate locations, pick up items, combine inventory tools, and fortify buildings.',
    keycaps: ['mouse'],
    developer: 'Scriptwelder / Armor Games',
    release: '2015'
  },
  'dont escape 3': {
    displayName: "Don't Escape 3",
    title: "Don't Escape 3: Deep Space Horror Isolation",
    catalogDesc: 'Awaken aboard a silent orbital space station where the crew has perished. An alien bio-hazard lurks aboard—solve cryptic puzzles and seal off the vessel before you bring the contagion to Earth.',
    paragraphs: [
      'Don\'t Escape 3 transports Scriptwelder\'s legendary survival series into the cold vacuum of deep space. Awaking from cryo-sleep aboard an orbital research starship, you discover the station dark, atmospheric alarms blaring, and the entire crew dead under mysterious circumstances.',
      'A terrifying alien biological anomaly has breached containment and is spreading through the ship\'s ventilation and data conduits. With the ship set on an automated autopilot return vector toward Earth, you must stop the vessel from bringing the contagion home.',
      'Navigate eerie corridors, access computer terminal logs, decipher security override codes, and manipulate airlock pressure chambers to isolate the pathogen and purge the alien entity from the spacecraft.'
    ],
    howTo: [
      'Click to move between space station modules (Bridge, Cryo Bay, Engineering, Airlock, Life Support).',
      'Examine computer terminals and audio logs to piece together what happened and discover security passwords.',
      'Collect diagnostic tools, keycards, power conduits, and hazmat gear to access damaged ship sections.',
      'Seal bulkhead blast doors and purge quarantine zones to contain the biological anomaly.'
    ],
    tips: [
      'Read terminal logs carefully: audio recordings and emails contain vital door codes and diagnostic instructions.',
      'Monitor oxygen levels and atmospheric pressure before opening doors into breached compartments.',
      'Use the ship\'s security cameras from the bridge terminal to track the location of the moving bio-anomaly.',
      'Multiple endings exist based on your decisions: determine whether to scuttle the vessel or attempt a sterile purge.'
    ],
    controlsText: 'Mouse click to navigate ship modules, interact with terminals, and use inventory items.',
    keycaps: ['mouse'],
    developer: 'Scriptwelder / Armor Games',
    release: '2015'
  }
};

applyBatch(BATCH_2);
