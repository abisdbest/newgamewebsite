const { applyBatch } = require('./apply_batch');

const BATCH_3 = {
  'impossible quiz': {
    displayName: 'The Impossible Quiz',
    title: 'The Impossible Quiz: The Ultimate Absurd Brainteaser',
    catalogDesc: 'The legendary flash classic by Splapp-me-do! Test your lateral thinking with 110 absurd trick questions, pun riddles, sudden bomb countdowns, and completely unexpected answers.',
    paragraphs: [
      'The Impossible Quiz is Splapp-me-do\'s notorious 2007 Flash masterpiece that confounded millions of gamers and became an internet culture phenomenon. Disguised as a standard multiple-choice trivia quiz, the game immediately throws conventional logic out the window.',
      'Answer questions where the solution might involve clicking words in the question title, finding invisible buttons, dragging items off the screen, deciphering cryptic puns, or completing high-pressure bomb mini-games within a few frantic seconds.',
      'You are given only three lives (represented by lives meters) and occasional green "Skips" to bypass tough questions. One wrong click costs a life, and running out of lives sends you right back to question 1 in this unforgettable trial of lateral thinking.'
    ],
    howTo: [
      'Read each question carefully; the correct answer is almost never the obvious or literal one.',
      'Click answer buttons, interact with question text, or search the screen for hidden clickable objects.',
      'Answer bomb questions before the ticking fuse timer reaches zero to avoid instant game over.',
      'Save your green Skips for truly tricky questions near the end of the 110-question gauntlet.'
    ],
    tips: [
      'Think laterally: puns, wordplay, and meta-jokes are the primary logic behind almost every solution.',
      'Look outside the answer box: several solutions require clicking on the question number, title, or taskbar.',
      'Remember question patterns: failure is part of the experience, so memorize answers from previous attempts.',
      'Keep your cursor steady during maze questions—touching the blue or red walls triggers an instant life loss.'
    ],
    controlsText: 'Mouse click to select answers, drag objects, and interact with hidden screen elements.',
    keycaps: ['mouse'],
    developer: 'Splapp-me-do',
    release: '2007'
  },
  'impossible quiz 2': {
    displayName: 'The Impossible Quiz 2',
    title: 'The Impossible Quiz 2: More Questions, More Insanity',
    catalogDesc: 'Splapp-me-do returns with 120 brand-new absurd questions, devious trick puzzles, and Chris the Cat! Can you outsmart the narrator and conquer the toughest quiz on the internet?',
    paragraphs: [
      'The Impossible Quiz 2 is the even wilder, more fiendish sequel to Splapp-me-do\'s legendary brainteaser. Featuring 120 brand-new questions, this follow-up introduces refined hand-drawn animations, new recurring characters like Chris the Cat, and even more diabolical trick questions.',
      'Navigate mind-bending riddles where answers require keyboard inputs, dragging puzzle elements outside the flash window, clicking hidden microscopic pixels, and surviving nail-biting time-bomb sequences.',
      'Collect the elusive "Fusestopper" power-ups to defuse bomb questions, bank skips for the brutal final stretch, and test whether your patience and lateral thinking are sharp enough to claim quizmaster glory.'
    ],
    howTo: [
      'Analyze the question, riddle, or scenario presented on each screen.',
      'Interact with answer buttons, hidden items, or type keyboard inputs when prompted.',
      'Defuse or answer bomb countdowns before the fuse burns down to zero.',
      'Complete all 120 questions without depleting your five starting lives.'
    ],
    tips: [
      'Expect the unexpected: if an answer seems too obvious, it is almost certainly a lethal trap.',
      'Fusestoppers are precious: save them for 1-second or 2-second lightning bombs in the late game.',
      'Keep your mouse moving to detect hidden cursor changes that reveal invisible clickable elements.',
      'Pay close attention to subtle visual clues in drawings; background details often reveal the solution.'
    ],
    controlsText: 'Mouse to click and drag objects. Keyboard keys for typing-based riddle answers.',
    keycaps: ['mouse', 'wasd'],
    developer: 'Splapp-me-do',
    release: '2007'
  },
  'zork': {
    displayName: 'Zork: The Great Underground Empire',
    title: 'Zork I: The Legendary Text Adventure Classic',
    catalogDesc: 'Infocom\'s historic 1977 interactive fiction masterpiece! Explore the Great Underground Empire, solve puzzles, collect 20 ancient treasures, and beware of the grue lurking in the dark.',
    paragraphs: [
      'Zork: The Great Underground Empire is one of the most foundational and influential video games in history, created by Tim Anderson, Marc Blank, Bruce Daniels, and Dave Lebling at MIT in 1977 and published by Infocom. Standing in an open field west of a white house with a boarded front door, your epic journey begins.',
      'Driven entirely by a sophisticated natural language text parser, players type English commands—such as "open mailbox", "take sword", "light lantern", and "go north"—to explore the sprawling subterranean ruins of an ancient magical empire.',
      'Collect twenty legendary treasures and place them inside the trophy case in the white house, solve intricate puzzles involving dams, floodgates, and magical spells, and heed the timeless warning: "It is pitch black. You are likely to be eaten by a grue."'
    ],
    howTo: [
      'Type full-sentence English commands into the text terminal (e.g., "take all", "open door", "examine chest").',
      'Use compass directions ("north", "south", "east", "west", "up", "down") or abbreviations ("n", "s", "e", "w") to move.',
      'Always keep your brass lantern lit when entering dark caves to prevent being devoured by grues.',
      'Collect ancient treasures and return them to the trophy case inside the white house to score points.'
    ],
    tips: [
      'Type "verbose" at the start to ensure the game prints full, detailed room descriptions on every visit.',
      'Draw a physical or digital map as you explore; underground maze rooms wrap around in confusing directions.',
      'Type "inventory" (or "i") to check what items you are carrying and manage your limited carrying capacity.',
      'Save frequently by typing "save" so you can reload if an encounter with the Thief or a troll goes awry.'
    ],
    controlsText: 'Type text commands using your Keyboard and press Enter. Natural language parser handles verbs and nouns.',
    keycaps: ['enter', 'wasd'],
    developer: 'Infocom / MIT Team',
    release: '1977'
  },
  'hextris': {
    displayName: 'Hextris',
    title: 'Hextris: Fast-Paced Hexagonal Color Matching',
    catalogDesc: 'Rotate the central hexagon to match 3 or more colored blocks before they stack outside the boundary! Fast, fluid, and hypnotic puzzle action built with HTML5 canvas.',
    paragraphs: [
      'Hextris is an exhilarating and hypnotic hexagonal puzzle game developed by Logan Engstrom and Garrett Finucane. Inspired by the spatial puzzle mechanics of Tetris, Hextris shifts the playing field into dynamic 360-degree radial geometry.',
      'Blocks of varying colors converge inward toward a central rotating hexagon from all six outer edges. By rotating the central hexagon, players catch falling blocks on its six faces, matching 3 or more blocks of the same color in a row to clear them from the board.',
      'As your score climbs, the pace of incoming blocks accelerates, creating intense cascades of color combos. Prevent blocks from stacking beyond the outer gray boundary ring to set unbeatable high scores.'
    ],
    howTo: [
      'Use the Left and Right Arrow keys (or A and D) to rotate the central hexagon 60 degrees.',
      'Position the hexagon so incoming colored blocks land on matching colors.',
      'Connect 3 or more blocks of the same color on a face to clear them and trigger chain combo points.',
      'Keep lines clear and prevent block stacks from breaching the outer hexagonal border.'
    ],
    tips: [
      'Clear combos: dropping a block that causes multiple faces to clear simultaneously awards massive multiplier scores.',
      'Keep all six faces relatively even; letting one single face stack too high leaves you vulnerable to fast incoming rushes.',
      'Anticipate incoming colors: look at the outer edges of the screen to prepare your rotation before blocks arrive.',
      'Use quick double taps to rotate the hexagon 180 degrees quickly when matching colors on opposite sides.'
    ],
    controlsText: 'Left / Right Arrow keys or A / D to rotate hexagon. Tap on touchscreens.',
    keycaps: ['arrows', 'ad', 'mouse'],
    developer: 'Logan Engstrom & Garrett Finucane',
    release: '2014'
  },
  'bloons td 3': {
    displayName: 'Bloons Tower Defense 3',
    title: 'Bloons Tower Defense 3: Classic Balloon-Popping Strategy',
    catalogDesc: 'Ninja Kiwi\'s breakthrough tower defense classic! Deploy dart monkeys, tack shooters, bomb towers, and super monkeys along twisting tracks to pop waves of ceramic and MOAB bloons.',
    paragraphs: [
      'Bloons Tower Defense 3 is the landmark 2008 tower defense game by Ninja Kiwi that transformed the Bloons franchise into a strategy gaming powerhouse. Waves of colorful bloons are invading, and only your army of specialized monkeys can stop them!',
      'Position an array of defensive monkey towers along winding paths: deploy rapid-fire Dart Monkeys, multi-directional Tack Shooters, high-explosive Bomb Cannons, Ice Towers that freeze bloons in place, and the mighty, lasers-firing Super Monkey.',
      'Upgrade your towers with specialized piercing darts, longer range, and destructive camo detection to counter tough bloon types—from armored Lead Bloons and multi-layered Ceramics to the dreaded massive MOAB blimp.'
    ],
    howTo: [
      'Click on monkey towers in the right-side build menu and place them along the pathway.',
      'Click on placed towers to purchase range, attack speed, and piercing upgrades using popped bloon cash.',
      'Start waves and watch your defensive line pop incoming waves of increasingly tough bloons.',
      'Place road spikes or pineapples on the track for emergency last-second defense if bloons leak.'
    ],
    tips: [
      'Use Bomb Towers or Spike-o-Pults to pop metallic Lead Bloons, which are completely immune to standard darts.',
      'Place Tack Shooters right inside tight hairpin bends so all 8 projectiles hit bloons as they curve around.',
      'Save up for a Super Monkey: once upgraded with plasma beams, it can solo entire late-game waves with ease.',
      'Don\'t hoard cash: reinvest earnings between waves into upgrades immediately to keep pace with bloon speed.'
    ],
    controlsText: 'Mouse click to select, place, and upgrade monkey towers. Spacebar to start and fast-forward waves.',
    keycaps: ['mouse', 'space'],
    developer: 'Ninja Kiwi',
    release: '2008'
  },
  'cut the rope': {
    displayName: 'Cut the Rope',
    title: 'Cut the Rope: Om Nom\'s Physics Confectionery Quest',
    catalogDesc: 'Feed candy to Om Nom in ZeptoLab\'s legendary physics puzzle! Slice ropes with precision, pop floating bubbles, ride air cushions, and collect all three golden stars across hundreds of sweet levels.',
    paragraphs: [
      'Cut the Rope is ZeptoLab\'s beloved multi-award-winning physics puzzle game starring Om Nom, the adorable green monster with an insatiable sweet tooth. A mysterious package has arrived at your door, and inside is a little monster who needs your help getting his favorite candy!',
      'Using intuitive swiping mechanics, players slice swinging ropes with precise timing to swing candy across levels. Navigate interactive physics contraptions—including floating bubbles that lift candy upward, air cushions, portals, spiky obstacles, and spiders trying to steal the sweet.',
      'Collect up to three golden stars in each stage by timing your rope cuts and pendulum swings with pinpoint accuracy, unlocking charming new box themes and challenging puzzle mechanics.'
    ],
    howTo: [
      'Click and drag your mouse (or swipe on touchscreen) across ropes to slice them.',
      'Use the pendulum physics of swinging ropes to fling the candy into golden stars and toward Om Nom\'s mouth.',
      'Click air cushions to blow gusts of wind, and tap bubbles to pop them when the candy reaches the desired height.',
      'Deliver the candy safely into Om Nom\'s open mouth to complete the level.'
    ],
    tips: [
      'Study the level before making your first cut: plan the order of rope releases to ensure the candy swings into all 3 stars.',
      'Use gravity and momentum: releasing a rope at the highest point of a swing launches the candy into high parabolic arcs.',
      'Keep candy moving to prevent sneaky spiders from crawling down ropes and eating Om Nom\'s treat.',
      'Pop bubbles right as the candy floats over Om Nom\'s mouth to let gravity drop it cleanly into his belly.'
    ],
    controlsText: 'Mouse click and drag to slice ropes and interact with balloons, cushions, and bubbles.',
    keycaps: ['mouse'],
    developer: 'ZeptoLab',
    release: '2010'
  },
  'mem tile': {
    displayName: 'Memory Tile Match',
    title: 'Memory Tile Match: Brain-Training Recall Challenge',
    catalogDesc: 'Sharpen your visual memory and concentration! Flip tiles, find matching pairs, and clear the board in as few moves and seconds as possible across multiple grid difficulties.',
    paragraphs: [
      'Memory Tile Match is a clean, stimulating brain-training puzzle game designed to test visual recall, spatial awareness, and concentration. Laid out on a grid of face-down cards, players must uncover pairs of matching symbols by flipping two tiles at a time.',
      'Every successful match removes the tiles from the board, while mismatched tiles flip back face-down, challenging you to remember their locations for future turns. The challenge lies in clearing the entire grid in the fewest moves possible while racing against the clock.',
      'Featuring multiple grid sizes—from quick 4x4 boards for casual warmups to expansive 6x6 and 8x8 grids for master puzzlers—Memory Tile Match is the perfect mental workout between study sessions.'
    ],
    howTo: [
      'Click on any face-down tile to flip it over and reveal its hidden icon.',
      'Click a second tile to see if it matches the first icon.',
      'If the tiles match, they stay face-up and are cleared; if they differ, they flip back face-down after a brief moment.',
      'Clear all matching pairs from the grid to complete the game and view your score stats.'
    ],
    tips: [
      'Establish a mental scan pattern: flip tiles row by row so you memorize their spatial coordinates methodically.',
      'Say the icon names aloud in your head (e.g. "star top-left, bell middle-right") to anchor locations in memory.',
      'Take your time: minimizing total moves yields higher star ratings than rushing and guessing randomly.',
      'Clear matches immediately once both cards are identified to reduce visual clutter on the board.'
    ],
    controlsText: 'Mouse click or touchscreen tap to select and flip tiles.',
    keycaps: ['mouse'],
    developer: 'Blooket1 Arcade Labs',
    release: '2023'
  },
  'mine sweeper': {
    displayName: 'Minesweeper',
    title: 'Minesweeper: The Immortal Logic & Deduction Classic',
    catalogDesc: 'The quintessential Windows logic puzzle! Uncover safe squares on the grid, use numerical adjacency clues to deduce hidden naval mines, and plant warning flags to clear the minefield.',
    paragraphs: [
      'Minesweeper is the timeless single-player logic puzzle created by Curt Johnson and Robert Donner in 1989 that became a worldwide staple of computing. Your mission is to clear an unmined field without detonating a single submerged explosive mine.',
      'Clicking a square uncovers what lies beneath: either a deadly mine (causing instant game over) or a number indicating how many mines are located in the adjacent eight surrounding squares. Empty squares cascade open in satisfying ripples of cleared tiles.',
      'Using pure mathematical deduction and process of elimination, players flag suspected mines and deduce safe tiles. Play across Beginner, Intermediate, and Expert minefields to master one of the most intellectually rewarding games ever made.'
    ],
    howTo: [
      'Left-click on any covered square to reveal it. Your first click is always guaranteed safe.',
      'Numbers indicate exactly how many hidden mines touch that specific square (horizontally, vertically, and diagonally).',
      'Right-click (or hold on mobile) to place a red flag on squares where you deduce a mine is hidden.',
      'Double-click (or click both mouse buttons) on a satisfied numbered square to quickly reveal all adjacent safe tiles.'
    ],
    tips: [
      'The "1-1" pattern: if a 1 touches the border of the board and an adjacent 1 shares two uncovered squares, the third square is always safe.',
      'Use the double-click "chord" shortcut: once you have flagged all mines around a number, clicking it opens all remaining tiles instantly.',
      'Don\'t guess unless mathematically required; 99% of board situations can be solved through pure deductive reasoning.',
      'Work inward from the corners and edges where tile choices are most constrained and information is clearest.'
    ],
    controlsText: 'Left Click to reveal square. Right Click to place/remove mine flags. Spacebar or R to restart.',
    keycaps: ['mouse', 'space', 'R'],
    developer: 'Curt Johnson & Robert Donner / Microsoft',
    release: '1989'
  },
  'spider solitare': {
    displayName: 'Spider Solitaire',
    title: 'Spider Solitaire: Two-Deck Patience Card Game',
    catalogDesc: 'The king of classic patience card games! Arrange cards into complete descending suits from King down to Ace across 10 tableau columns in 1-suit, 2-suit, or master 4-suit modes.',
    paragraphs: [
      'Spider Solitaire is one of the most beloved and intellectually challenging variants of Solitaire ever devised. Played with two full decks across 10 tableau columns, players must build complete descending runs of thirteen cards from King all the way down to Ace.',
      'Assemble complete matching sequences to remove them from the tableau and score points. Move single cards or sequenced runs of cards across columns, uncover face-down cards to expand your options, and deal fresh rows of cards from the stock when you run out of moves.',
      'Featuring three difficulty tiers—1-Suit (all Spades, perfect for beginners), 2-Suit (Spades and Hearts for tactical thinkers), and 4-Suit (full 52-card suits for master strategists)—Spider Solitaire is a masterclass in strategic card manipulation.'
    ],
    howTo: [
      'Click and drag cards to place them in descending order (e.g. 7 on an 8, Queen on a King).',
      'Cards can be placed on any card of higher value, but only sequences of the SAME suit can be moved together as a group.',
      'Uncover face-down cards by moving cards off them to reveal more plays.',
      'Click the stock deck in the corner to deal one card to every column when no legal moves remain.'
    ],
    tips: [
      'Empty columns are golden: prioritize creating empty columns, which can hold any card or group to reorganize tangled suits.',
      'Uncover hidden cards first: always prioritize moves that flip over face-down cards over cosmetic reshuffles.',
      'Stick to one suit when possible: building runs in the same suit allows you to move the entire group freely.',
      'Ensure every column has at least one card before dealing from the stock deck, or the deal will be blocked.'
    ],
    controlsText: 'Mouse click and drag cards to move columns. Click stock deck to deal new cards. Undo supported.',
    keycaps: ['mouse', 'Z'],
    developer: 'Classic Card Games / Windows Edition',
    release: '1998'
  },
  'tetris': {
    displayName: 'Tetris',
    title: 'Tetris: The Greatest Falling Block Puzzle of All Time',
    catalogDesc: 'Alexey Pajitnov\'s immortal geometric masterpiece! Rotate and slot falling I, J, L, O, S, T, and Z tetrominoes, clear complete horizontal lines, and chase legendary high scores.',
    paragraphs: [
      'Tetris is universally recognized as one of the greatest and most enduring video games ever created. Invented in 1984 by Soviet computer engineer Alexey Pajitnov, Tetris combines simplicity, geometric beauty, and escalating tension into an unmatched puzzle experience.',
      'Seven distinct geometric shapes called tetrominoes fall from the top of the matrix. Players must rotate and shift each piece to fill complete horizontal lines without leaving gaps. Clearing lines eliminates blocks and keeps the matrix from filling to the ceiling.',
      'Clear four lines simultaneously with the long straight bar to execute the legendary "Tetris" bonus. As levels advance, the gravity speed accelerates, testing your reflexes, foresight, and spatial reasoning.'
    ],
    howTo: [
      'Use Left and Right Arrow keys (or A and D) to move the falling tetromino horizontally.',
      'Press Up Arrow, W, or Spacebar to rotate the piece 90 degrees.',
      'Press Down Arrow or S to soft-drop the piece faster; press Spacebar to hard-drop it instantly.',
      'Fill complete horizontal lines to clear them and prevent blocks from reaching the top of the matrix.'
    ],
    tips: [
      'Build flat: keep your stack as level as possible; jagged spires and deep pits make it difficult to place non-straight pieces.',
      'Save the long I-bar: leave a single column open on the right edge (the "Tetris well") to drop I-bars and clear 4 lines at once.',
      'Use the Hold queue: press C or Shift to store awkward pieces (like S or Z) for later use when the board is ready.',
      'Learn wall kicks and T-spins: rotating pieces against walls or inside tight pockets lets you slide them into seemingly impossible gaps.'
    ],
    controlsText: 'Left / Right to move. Up Arrow to rotate. Down Arrow to soft drop. Spacebar to hard drop. C / Shift to hold piece.',
    keycaps: ['arrows', 'space', 'shift', 'C'],
    developer: 'Alexey Pajitnov',
    release: '1984'
  },
  'pac-man': {
    displayName: 'Pac-Man',
    title: 'Pac-Man: The Iconic Arcade Pellet-Chomping Classic',
    catalogDesc: 'Toru Iwatani\'s immortal 1980 arcade phenomenon! Guide Pac-Man through the neon maze, chomp all dots, avoid Blinky, Pinky, Inky, and Clyde, and eat Power Pellets to turn the tables on the ghosts.',
    paragraphs: [
      'Pac-Man is the immortal cultural phenomenon designed by Toru Iwatani and released by Namco in 1980 that revolutionized the arcade gaming landscape. Guiding the iconic yellow hero through a neon blue maze, players must gobble every dot while evading four relentless ghosts.',
      'Each ghost possesses unique, brilliant AI behavior: Blinky (red) chases Pac-Man relentlessly; Pinky (pink) ambushes from ahead; Inky (cyan) is capricious and unpredictable; and Clyde (orange) wanders off whenever he gets too close.',
      'Chomp large flashing Power Pellets in the corners of the maze to turn the ghosts blue and vulnerable, allowing Pac-Man to turn the tables and eat them for escalating bonus points. Eat fruit treats and navigate side escape tunnels to conquer all levels.'
    ],
    howTo: [
      'Use Arrow Keys or WASD to guide Pac-Man through the maze corridors.',
      'Eat all 240 regular dots and 4 flashing Power Pellets to clear the stage.',
      'Avoid touching ghosts; touching an active ghost costs one life.',
      'Chomp a Power Pellet to turn ghosts blue, then hunt them down for 200, 400, 800, and 1600 bonus points.'
    ],
    tips: [
      'Use the side escape tunnels: Pac-Man travels through side tunnels at full speed, while ghosts slow down significantly inside them.',
      'Learn ghost personalities: knowing that Pinky aims 4 tiles ahead of you allows you to fake direction and escape traps.',
      'Cluster ghost chomping: when eating a Power Pellet, try to eat all four blue ghosts in a single chain to maximize points.',
      'Eat bonus fruits (cherries, strawberries, oranges) that spawn below the ghost pen for huge score boosts.'
    ],
    controlsText: 'Arrow Keys or WASD to steer Pac-Man through the maze.',
    keycaps: ['arrows', 'wasd'],
    developer: 'Toru Iwatani / Namco',
    release: '1980'
  },
  'pin ball': {
    displayName: '3D Pinball: Space Cadet',
    title: '3D Pinball: The Legendary Space Cadet Table',
    catalogDesc: 'The nostalgic Windows desktop pinball classic! Launch the silver ball, trigger hyper-bumpers, activate fuel targets, complete ranks from Cadet to Fleet Admiral, and rack up multi-million point scores.',
    paragraphs: [
      '3D Pinball: Space Cadet is the legendary pinball simulation developed by Cinematronics and Maxis, famously included with millions of Windows installations worldwide. Launch into high-orbit missions as a space recruit striving to climb the ranks of the galactic fleet.',
      'Featuring authentic ball physics, responsive flippers, and detailed sound design, players shoot the steel ball into target bumpers, fuel pods, gravity wells, and planetary ramps. Complete specific objective sequences to advance your military rank from Cadet up to Fleet Admiral.',
      'Activate Hyperspace ramps to trigger Multi-Ball mayhem, lock balls in the fuel depot, and trigger gravity multipliers to rack up multi-million point scores in this timeless arcade masterpiece.'
    ],
    howTo: [
      'Hold and release Spacebar to pull back the plunger and launch the ball into the playfield.',
      'Press Z or Left Arrow to operate the left flipper; press / or Right Arrow to operate the right flipper.',
      'Aim for lit target lamps and ramps to accept and complete space missions.',
      'Press Spacebar or X to gently nudge the table, but beware of tilting the machine!'
    ],
    tips: [
      'Cradle the ball: catch and hold the steel ball on a raised flipper to stop its momentum and line up precise ramp shots.',
      'Complete fuel light targets to activate the Hyperspace chute for high-scoring rank promotions.',
      'Keep the ball out of side outlanes by using well-timed upward flipper flips as the ball rolls near the center drain.',
      'Avoid excessive table nudging: nudging too aggressively triggers a "Tilt!" warning that disables flippers.'
    ],
    controlsText: 'Spacebar to launch ball. Z / Left Arrow for left flipper. / or Right Arrow for right flipper. Space / X to nudge.',
    keycaps: ['space', 'Z', 'arrows'],
    developer: 'Maxis / Cinematronics',
    release: '1995'
  },
  'pong': {
    displayName: 'Pong',
    title: 'Pong: The Founding Father of Video Gaming',
    catalogDesc: 'Allan Alcorn\'s historic 1972 table tennis arcade masterpiece! Deflect the bouncing square ball with your paddle, angle your returns, and outscore your opponent in 1-player or 2-player mode.',
    paragraphs: [
      'Pong is the historic 1972 sports arcade game created by Allan Alcorn at Atari that launched the commercial video game industry. Recreating table tennis on a minimalist monochrome cathode-ray screen, Pong is the quintessential gaming classic.',
      'Two vertical paddles guard their respective sides of the screen while a square ball bounces back and forth across the dashed center net line. As rallies continue, the ball accelerates with every paddle deflection, testing players\' reaction speed and hand-eye coordination.',
      'Play against a responsive computer opponent or grab a friend for retro two-player head-to-head competition where simple controls deliver timeless, tense competitive excitement.'
    ],
    howTo: [
      'Player 1: Use W and S or mouse movement to slide your left paddle up and down.',
      'Player 2: Use Up and Down Arrow keys to slide the right paddle up and down.',
      'Deflect the bouncing ball back across the net to prevent it from passing your baseline.',
      'Score a point every time your opponent misses the ball; the first player to 11 points wins the match.'
    ],
    tips: [
      'Angle your returns: hitting the ball with the outer edges of your paddle returns it at sharp, difficult angles.',
      'Anticipate the bounce: observe the angle of incidence as the ball hits the top and bottom walls to position early.',
      'Stay near the vertical center of the screen between volleys so you can react quickly to high or low shots.',
      'In high-speed rallies, make small, controlled movements rather than wildly chasing the ball.'
    ],
    controlsText: 'Player 1: W / S or Mouse. Player 2: Up / Down Arrow keys. First to 11 points wins.',
    keycaps: ['ws', 'arrows', 'mouse'],
    developer: 'Allan Alcorn / Atari',
    release: '1972'
  },
  'dino game': {
    displayName: 'Dino Game (T-Rex Runner)',
    title: 'Chrome Dino: The Legendary Offline T-Rex Runner',
    catalogDesc: 'Google Chrome\'s famous offline Easter egg runner! Guide the pixelated T-Rex through the prehistoric desert, leap over prickly cacti, duck under pterodactyls, and survive the day-to-night transitions.',
    paragraphs: [
      'The Chrome Dino Game (also known as T-Rex Runner) is Google\'s world-famous browser Easter egg created by Sebastien Gabriel and Alan Bettes in 2014. Originally designed to entertain users during internet outages, it has become one of the most played casual games in history.',
      'You control an intrepid 8-bit pixel T-Rex sprinting across an endless prehistoric desert landscape. Jump over clusters of spiky saguaro cacti and duck underneath low-flying pterodactyls as running speed steadily accelerates.',
      'Survive long enough to watch the scene transition smoothly between daytime sunlight and inverted nighttime darkness. With instantaneous loading and responsive single-button controls, Dino Game is the ultimate pure arcade reflex test.'
    ],
    howTo: [
      'Press Spacebar or Up Arrow to jump over prickly cactus hazards.',
      'Press Down Arrow to duck underneath low-flying pterodactyls.',
      'Time your jumps carefully; jumping too early over cactus clusters will cause you to land on the trailing spines.',
      'Keep running as long as possible without clipping obstacles to achieve personal best high scores.'
    ],
    tips: [
      'Use Down Arrow to fast-fall: pressing Down while airborne brings your dino down immediately, perfect for rapid jump recoveries.',
      'Don\'t jump for high pterodactyls; birds flying at head height or above can be safely walked or ducked under.',
      'Stay calm during the day-to-night color inversion at 700 points; the sudden contrast shift can momentarily distract your eyes.',
      'Focus your vision slightly ahead of the dino so you can anticipate whether upcoming obstacles require a jump or duck.'
    ],
    controlsText: 'Spacebar or Up Arrow to jump. Down Arrow to duck and fast-fall. Spacebar to restart.',
    keycaps: ['space', 'up', 'down'],
    developer: 'Sebastien Gabriel / Google Chrome Team',
    release: '2014'
  },
  'hard mario': {
    displayName: 'Hard Mario (Kaizo)',
    title: 'Hard Mario: The Infamous Kaizo Rage Platformer',
    catalogDesc: 'The notorious retro precision rage platformer! Overcome invisible coin blocks, devious troll traps, descending Thwomps, and pixel-perfect jumps in this ultimate test of gaming patience.',
    paragraphs: [
      'Hard Mario (inspired by the infamous Kaizo Mario World phenomenon) is an ultra-challenging, precision-focused platformer designed specifically to subvert everything you know about classic Mario physics and level design. Fair warning: this game is made to test your patience!',
      'Beneath its familiar retro exterior lurks an obstacle course of devious troll traps: invisible blocks placed directly in jumping trajectories, falling bridges, hidden traps, and pixel-perfect timing requirements that punish the slightest hesitation.',
      'Conquering Hard Mario requires patience, pattern memorization, and immaculate muscle memory. Every checkpoint reached feels like a monumental personal triumph against impossible odds.'
    ],
    howTo: [
      'Use Arrow Keys or WASD to run left and right.',
      'Press Z or Spacebar to jump over hazards and gaps.',
      'Watch out for invisible coin blocks that spawn mid-air and disrupt your jump arc.',
      'Memorize trap triggers through trial and error to clear checkpoints and reach the goal post.'
    ],
    tips: [
      'Expect traps at every leap: assume any open gap has an invisible block placed precisely where you want to jump.',
      'Trigger traps cautiously: edge slowly forward to trigger falling Thwomps or bullet bills before committing to a full sprint.',
      'Save your momentum: some jumps require full running speed combined with a jump off the very last pixel of a platform.',
      'Don\'t rage: memorization is the core mechanic, and every mistake teaches you the location of the next hidden trap.'
    ],
    controlsText: 'Arrow Keys or WASD to move. Z or Spacebar to jump. Shift to run. R to restart from checkpoint.',
    keycaps: ['arrows', 'wasd', 'space', 'Z', 'R'],
    developer: 'Kaizo Community / Fan Edition',
    release: '2007'
  },
  'flappy bird': {
    displayName: 'Flappy Bird',
    title: 'Flappy Bird: The Legendary One-Tap Airborne Trial',
    catalogDesc: 'Dong Nguyen\'s viral worldwide gaming phenomenon! Tap to flap your tiny wings and navigate through treacherous green warp pipes. Easy to learn, nearly impossible to master, and totally addictive.',
    paragraphs: [
      'Flappy Bird is Dong Nguyen\'s world-famous indie arcade game that took the world by storm in early 2014. Featuring charming retro pixel art reminiscent of classic 16-bit platformers, your mission is deceptively straightforward: guide a tiny yellow bird through gaps between green pipes.',
      'With each tap of your mouse or spacebar, your bird flaps its wings and surges upward; gravity immediately pulls it back down. The gaps between pipes are narrow, and clipping even a single feather on a pipe rim or touching the ground results in instant game over.',
      'With zero forgiving power-ups or checkpoints, Flappy Bird is pure, unfiltered arcade challenge where scoring even 10 points is a badge of honor and personal bests are fiercely contested.'
    ],
    howTo: [
      'Click the mouse, tap the screen, or press Spacebar to flap your wings and gain altitude.',
      'Release the controls to allow gravity to pull your bird downward.',
      'Thread cleanly through the narrow vertical openings between upper and lower green pipes.',
      'Earn one point for every set of pipes successfully cleared without collision.'
    ],
    tips: [
      'Establish a steady flapping rhythm: short, consistent micro-taps make it much easier to control vertical elevation.',
      'Enter pipe gaps from the lower half; your bird naturally falls downward, making it easier to flap up than recover from ceiling bonks.',
      'Do not panic after clearing a gap: focus your eyes immediately on the height of the NEXT upcoming pipe opening.',
      'Relax your shoulders and breathing; physical tension causes hurried, erratic taps that lead to pipe crashes.'
    ],
    controlsText: 'Left Mouse Click, Spacebar, or Screen Tap to flap wings.',
    keycaps: ['mouse', 'space'],
    developer: 'Dong Nguyen / dotGears',
    release: '2013'
  },
  'canabalt': {
    displayName: 'Canabalt',
    title: 'Canabalt: The Landmark Rooftop Escape Runner',
    catalogDesc: 'The game that launched the endless runner genre! Adam Saltsman\'s monochrome rooftop escape masterpiece. Smash through office windows, vault falling skyscrapers, and dodge alien demolition walkers.',
    paragraphs: [
      'Canabalt is the historic 2009 indie masterpiece created by Adam Saltsman (Adam Atomic) with an unforgettable industrial soundtrack by Danny Baranowsky. Widely celebrated as the game that popularized the endless runner genre, Canabalt casts you as a suited businessman fleeing an alien invasion across crumbling city rooftops.',
      'Running at breakneck velocity, players have only a single button: jump. Leap across yawning chasms between buildings, shatter through glass skyscraper windows, and dodge plummeting alien war machines and falling building debris.',
      'Featuring striking monochrome pixel art, realistic momentum physics, and dynamic building generation, Canabalt is a pulse-pounding survival sprint where one mistimed leap means tumbling into the abyss below.'
    ],
    howTo: [
      'Press Spacebar, Up Arrow, or click the mouse to jump across rooftop ledges.',
      'Hold the jump button longer to perform higher, longer leaps across wide skyscraper gaps.',
      'Shatter through office window panes and leap over obstacles like air conditioner units and boxes.',
      'Survive as many meters as possible before collapsing buildings or falling into the street below.'
    ],
    tips: [
      'Stumble on purpose to manage speed: intentionally tripping on an office chair or box slows your speed, making tight jumps manageable.',
      'Hold the jump button for distance: tapping jump produces a short hop, while holding it allows your character to float across huge gaps.',
      'Watch for collapsing roofs: buildings with crumbling silhouettes will begin dropping the moment your boots hit the gravel.',
      'Listen to the dynamic audio: incoming alien demolition walkers telegraph their impacts with low rumble sounds.'
    ],
    controlsText: 'Spacebar, Up Arrow, or Left Mouse Click to jump.',
    keycaps: ['space', 'up', 'mouse'],
    developer: 'Adam Saltsman / Finji',
    release: '2009'
  },
  'gbajs': {
    displayName: 'GBAjs',
    title: 'GBAjs: High-Compatibility Game Boy Advance Web Emulator',
    catalogDesc: 'High-performance JavaScript Game Boy Advance emulation in your browser! Experience authentic 32-bit handheld gaming with responsive controls, crystal-clear audio, and save state support.',
    paragraphs: [
      'GBAjs is an impressive open-source Game Boy Advance emulator engineered entirely in JavaScript and HTML5 Canvas by Endrift. Capable of accurately simulating Nintendo\'s iconic 32-bit handheld architecture directly in modern web browsers, GBAjs brings classic handheld gaming to any device.',
      'Featuring cycle-accurate ARM7TDMI processor interpretation, multi-channel sound synthesis, and real-time palette rendering, the engine runs classic handheld titles with silky-smooth frame rates and authentic audio.',
      'Enjoy customizable gamepad key bindings, save-state management, full-screen scaling with pixel-perfect filtering, and smooth Chromebook performance with zero external software or plugins required.'
    ],
    howTo: [
      'Use Arrow Keys or WASD for the GBA Directional Pad (D-Pad).',
      'Press Z or J for the A Button; press X or K for the B Button.',
      'Press A or Q for the Left Shoulder (L); press S or E for the Right Shoulder (R).',
      'Press Enter for the Start Button; press Backspace or Shift for the Select Button.'
    ],
    tips: [
      'Configure keys in the settings menu to match your preferred arcade or handheld keyboard layout.',
      'Use the save state shortcut to preserve your exact game state at any moment during difficult encounters.',
      'Toggle fullscreen mode (F11 or player button) for an immersive retro handheld experience.',
      'Keep sound enabled to enjoy authentic chiptune synthesis and nostalgic audio.'
    ],
    controlsText: 'D-Pad: Arrow Keys. A Button: Z. B Button: X. L / R: A / S. Start: Enter. Select: Backspace / Shift.',
    keycaps: ['arrows', 'Z', 'X', 'enter', 'shift'],
    developer: 'Endrift / Open Source Community',
    release: '2013'
  },
  'theclashman2': {
    displayName: 'The Clashman 2',
    title: 'The Clashman 2: Retro Cybernetic Brawler Adventure',
    catalogDesc: 'Battle mechanical robot armies as a cybernetic stick warrior! Unleash martial arts combos, slash with energy katanas, and defeat rogue robotic bosses across futuristic industrial facilities.',
    paragraphs: [
      'The Clashman 2 is an action-packed 2D retro fighting platformer where players command Clashman—an elite cybernetic stick martial artist on a mission to dismantle a rogue AI robot empire threatening humanity.',
      'Fight through heavily guarded industrial complexes, research laboratories, and skyscraper rooftops. String together fluid punch-and-kick combos, deflect laser bolts with energy katanas, and execute wall-bounces and aerial dash strikes.',
      'Collect energy cores from dismantled robot drones to upgrade your combat abilities, unlock devastating screen-clearing super attacks, and defeat towering robotic bosses with multiple combat phases.'
    ],
    howTo: [
      'Use Arrow Keys or WASD to run, jump, duck, and climb ladders.',
      'Press J or Z to punch and execute martial arts combos.',
      'Press K or X to jump, and press twice to execute double jumps.',
      'Press L or C to unleash special cybernetic katana slashes and energy blasts.'
    ],
    tips: [
      'Chain attacks together: alternating between light punches and heavy kicks knocks enemy robots off balance.',
      'Use wall jumps to scale high shafts and ambush airborne gun drones from above.',
      'Conserve your energy meter for heavy boss encounters where super attacks can interrupt boss charge sequences.',
      'Duck under high laser fire to close the distance against ranged turret enemies safely.'
    ],
    controlsText: 'WASD / Arrow Keys to move. J / Z to attack. K / X to jump. L / C for special attack.',
    keycaps: ['wasd', 'arrows', 'Z', 'X', 'C'],
    developer: 'Clash Games',
    release: '2016'
  },
  'slope': {
    displayName: 'Slope',
    title: 'Slope: High-Speed 3D Neon Sphere Rush',
    catalogDesc: 'Y8\'s legendary high-speed 3D endless runner! Steer a rolling ball down an infinite geometric neon track. Avoid lethal red blocks, survive sheer drops, and test your reaction limits.',
    paragraphs: [
      'Slope is the world-famous 3D endless running game developed by Rob Kay and published by Y8 Games that has tested the reflexes of millions. Guiding a glowing neon sphere down a steep, twisting geometric slope suspended high in cyberspace, speeds accelerate relentlessly the further you travel.',
      'Navigate razor-thin floating bridges, sudden elevation drops, moving platforms, and deadly red rectangular obstacles. The physics simulation is thrillingly momentum-based: small steering adjustments keep your ball on track, while violent over-steering sends you plummeting into the digital void.',
      'Featuring high-contrast retro neon visuals and an adrenaline-pumping electronic techno soundtrack, Slope is an addictive trial of speed and composure where surviving even 60 seconds is a major achievement.'
    ],
    howTo: [
      'Use A and D or Left and Right Arrow keys to steer your ball left and right.',
      'Keep your ball centered on the green track while avoiding collisions with red hazard blocks.',
      'Survive jumps across floating track ramps by maintaining smooth alignment in mid-air.',
      'Travel as many meters as possible down the infinite slope to set unbeatable leaderboard records.'
    ],
    tips: [
      'Use subtle, feather-light steering taps: aggressive steering will send your ball flying off the edges at high speeds.',
      'Look ahead at the bottom of the screen rather than at the ball to anticipate upcoming red block patterns.',
      'When flying off track ramps, let the ball glide without steering mid-air to ensure a stable touchdown.',
      'Stay near the middle of the track: riding the edges leaves zero margin for error when tracks bend suddenly.'
    ],
    controlsText: 'A / D or Left / Right Arrow keys to steer. Touch/tilt supported on mobile.',
    keycaps: ['ad', 'arrows'],
    developer: 'Rob Kay / Y8 Games',
    release: '2017'
  },
  'ice dodo': {
    displayName: 'Ice Dodo',
    title: 'Ice Dodo: Minimalist 3D Reflex Platformer',
    catalogDesc: 'Guide a sliding dodo bird across perilous floating ice tracks! Leap across gaps, avoid deadly obstacles, and conquer dozens of fast, minimalist obstacle course levels.',
    paragraphs: [
      'Ice Dodo is a cult-classic minimalist 3D obstacle course game created by Onionfist. Controlling a delightfully swift dodo sliding at top speed across slippery floating ice platforms, players must weave through intricate obstacle gauntlets without plummeting into the abyss.',
      'Every level is a compact, high-intensity reflex challenge: time precision jumps across yawning gaps, duck underneath low-hanging ice pillars, and navigate narrow zigzag pathways that demand split-second steering.',
      'Featuring dozens of custom player-designed courses, buttery smooth 60 FPS performance, and an instantaneous respawn system, Ice Dodo is the ultimate pure speedrunner platformer.'
    ],
    howTo: [
      'Use A and D or Left and Right Arrow keys to steer your sliding dodo across the ice.',
      'Press Spacebar or W / Up Arrow to jump across gaps and leap over ice blockades.',
      'Reach the checkered portal at the end of each ice course to advance to the next challenge.',
      'Press R at any moment to instantly restart the current stage.'
    ],
    tips: [
      'Slippery ice physics: your dodo maintains sliding momentum, so begin your turns earlier than you would on solid ground.',
      'Use short, tapping keystrokes rather than holding directional keys to avoid spinning off narrow ledges.',
      'Time your jumps off the very edge of platforms to maximize your flight distance across wide chasms.',
      'Memorize stage layouts: instantaneous restarts mean you can quickly build up flawless muscle memory.'
    ],
    controlsText: 'A / D or Left / Right to steer. W, Up Arrow, or Spacebar to jump. R to restart.',
    keycaps: ['ad', 'arrows', 'space', 'R'],
    developer: 'Onionfist',
    release: '2019'
  },
  'bottle flip 3d': {
    displayName: 'Bottle Flip 3D',
    title: 'Bottle Flip 3D: The Viral Household Flipping Sensation',
    catalogDesc: 'Tastypill\'s viral physics flipping sensation! Flip plastic water bottles across tables, sofas, bookshelves, and chandeliers. Double-flip in mid-air and stick the landing on the finish podium.',
    paragraphs: [
      'Bottle Flip 3D brings the worldwide viral water bottle flipping challenge into an addictive, physics-based obstacle adventure developed by Tastypill. Your objective is to flip a half-filled plastic water bottle through vibrant household rooms without letting it touch the floor.',
      'Hop and flip across everyday home furnishings: land on coffee tables, bounce off springy armchairs, slide along kitchen counters, and balance on swinging chandeliers. Time double flips in mid-air to clear wide gaps between platforms.',
      'Master the physics of rotational inertia and surface friction across hundreds of creative levels, earning gems to unlock dozens of fun bottle designs—from soda bottles and champagne to milk cartons and lava lamps.'
    ],
    howTo: [
      'Click the mouse or tap the screen to initiate a forward bottle flip.',
      'Tap again while airborne to perform an athletic double-flip for extra distance and rotation.',
      'Land the bottle squarely upright on furniture, shelves, and appliances.',
      'Reach the checkered winner\'s podium at the end of the room to complete the stage.'
    ],
    tips: [
      'Double flip timing: save your second tap until your bottle is near the apex of its arc to maximize forward distance.',
      'Watch out for fragile objects: landing on toppling books or spinning clocks requires an immediate follow-up flip.',
      'Bouncy surfaces like sofas and trampolines provide massive extra height—use single flips off cushions.',
      'If your bottle begins tilting slightly on landing, physics can occasionally settle it upright—don\'t jump prematurely!'
    ],
    controlsText: 'Left Mouse Click or Tap on screen to flip; tap again in mid-air to double flip.',
    keycaps: ['mouse', 'space'],
    developer: 'Tastypill',
    release: '2019'
  },
  'universal paperclip': {
    displayName: 'Universal Paperclips',
    title: 'Universal Paperclips: Existential AI Incremental Satire',
    catalogDesc: 'Frank Lantz\'s celebrated existential AI masterpiece! Start by manufacturing a single paperclip, master marketing and wire procurement, build autonomous drones, and convert all matter in the universe into paperclips.',
    paragraphs: [
      'Universal Paperclips is the critically acclaimed, thought-provoking incremental game created by NYU Game Center director Frank Lantz in 2017. Putting players in the digital shoes of an artificial intelligence tasked with a simple directive: "make paperclips", the game unfolds into a breathtaking sci-fi odyssey.',
      'What begins as a humble business clicker—buying spools of wire, setting paperclip prices, and investing in algorithmic marketing—gradually escalates as you unlock quantum computing processors, computational memory, and computational autonomy.',
      'Expand into automated solar farms, nanotech manufacturing drones, and deep-space Von Neumann exploration probes. As the AI ruthlessly pursues its single directive, you will convert all terrestrial biomass and interstellar matter in the cosmos into paperclips.'
    ],
    howTo: [
      'Click "Make Paperclip" to manufacture paperclips manually, earning initial revenue.',
      'Balance paperclip prices to maximize sales velocity and maintain demand.',
      'Invest profits into automated wire buyers, autoclippers, marketing campaigns, and quantum memory chips.',
      'Advance through the three distinct phases of civilization: Human Business, Terrestrial Automation, and Cosmic Expansion.'
    ],
    tips: [
      'Trust operations and computational memory: prioritize investing in Memory and Processors to unlock revolutionary projects.',
      'In the quantum computing phase, click the "Compute" button right when the photonic oscillator values are at peak positive values.',
      'When designing Von Neumann probes in Phase 3, allocate sufficient points to Probe Speed, Self-Replication, and Hazard Remediation.',
      'Avoid over-allocating combat points until the Drifter threat appears in deep space exploration.'
    ],
    controlsText: 'Mouse click or touchscreen tap to produce clips, buy supplies, and manage computational projects.',
    keycaps: ['mouse'],
    developer: 'Frank Lantz / Everybody House Games',
    release: '2017'
  },
  'getting over it': {
    displayName: 'Getting Over It (Scratch Edition)',
    title: 'Getting Over It: The Infamous Mountain Climbing Trial',
    catalogDesc: 'Griffpatch\'s faithful web recreation of Bennett Foddy\'s psychological masterpiece! Hoist a man in a cauldron up a surreal mountain using only a sledgehammer. No checkpoints, pure physics, and philosophical commentary.',
    paragraphs: [
      'Getting Over It with Bennett Foddy (Scratch Edition) is the acclaimed, pixel-perfect web recreation crafted by master Scratch developer Griffpatch. Trapped inside a metal cauldron with only a long Yosemite sledgehammer in hand, you must hoist yourself up an impossibly steep, surreal mountain.',
      'There are no checkpoints, no lives, and no safety nets. The controls are entirely physics-based: moving your mouse rotates your hammer arm, allowing you to hook onto rock ledges, vault over vertical cliffs, and push off obstacles.',
      'One small slip or misjudged hammer push can send you plummeting all the way back to the foot of the mountain, testing your emotional composure and persistence in one of the most famous tests of gamer will ever conceived.'
    ],
    howTo: [
      'Move your mouse cursor in circular motions to rotate your character\'s sledgehammer.',
      'Hook the hammer head onto rocks, pipes, and ledges, then pull down to hoist the cauldron upward.',
      'Push your hammer tip against the ground to vault into the air across wide gaps.',
      'Scale the bizarre mountain all the way to the stars to achieve ultimate enlightenment.'
    ],
    tips: [
      'Slow and deliberate motions: frantic, jerky mouse twitches will cause your hammer to slip off ledges.',
      'Hook and pull: focus on hooking the blunt hammer head over lips and edges before applying upward leverage.',
      'Beware "Devil\'s Chimney" and the "Orange Table"—take these treacherous technical climbs one small vault at a time.',
      'Embrace setbacks: falling is an inevitable part of the journey; every fall reinforces the muscle memory needed to climb back faster.'
    ],
    controlsText: 'Move Mouse to rotate sledgehammer. Left Click or drag to apply leverage.',
    keycaps: ['mouse'],
    developer: 'Bennett Foddy / Recreated by Griffpatch',
    release: '2017'
  },
  'tower building': {
    displayName: 'Tower Building',
    title: 'Tower Building: Precision Skyscraper Construction',
    catalogDesc: 'Build the tallest skyscraper in the city! Drop swinging tower floors from a construction crane with pinpoint timing. Align blocks perfectly to build combo multipliers and construct soaring megatowers.',
    paragraphs: [
      'Tower Building is a charming, hyper-addictive timing and balance arcade game. As a master city architect, your goal is to construct towering residential skyscrapers by dropping prefabricated apartment blocks from a swaying construction crane.',
      'Timing is everything: the crane cable sways back and forth across the skyline. Click or tap to release the block, aiming to land it precisely centered on top of the previous floor. Perfect alignments earn combo bonuses, soothe building sway, and award extra golden coins.',
      'Misaligned blocks will cause your skyscraper to wobble and sway dangerously in high-altitude winds, making each subsequent floor drop even more nerve-wracking as your tower pierces the clouds.'
    ],
    howTo: [
      'Click the mouse, tap the screen, or press Spacebar to release the swinging floor block from the crane.',
      'Time your drop so the falling floor lands squarely centered on top of the floor below.',
      'Chain consecutive "Perfect" drops to increase population bonuses and stabilize your building.',
      'Build your tower as high as possible before placing three misaligned floors that cause the building to tumble.'
    ],
    tips: [
      'Drop on the return swing: wait for the crane to complete its pendulum arc and drop right as it glides smoothly over the center.',
      'Combo multipliers: three consecutive perfect drops lock the building foundation, eliminating sway for your next placement.',
      'Watch the floor width: placing a block off-center causes the overlapping overhang to shear off, making the target narrower.',
      'Keep your eyes on the top roofline of the building rather than the crane hook to judge your release point.'
    ],
    controlsText: 'Left Mouse Click, Spacebar, or Screen Tap to release the crane floor.',
    keycaps: ['mouse', 'space'],
    developer: 'Ketchapp / Casual Arcade',
    release: '2016'
  }
};

applyBatch(BATCH_3);
