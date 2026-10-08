const { applyBatch } = require('./apply_batch');

const BATCH_4 = {
  'simpleproxy': {
    displayName: 'SimpleProxy',
    title: 'SimpleProxy: Fast Web Proxy & Unblock Tool',
    catalogDesc: 'Lightweight web proxy utility designed to bypass restrictive school and workplace network filters. Browse educational resources, reference materials, and web tools securely.',
    paragraphs: [
      'SimpleProxy is a fast, lightweight in-browser proxy and unblocking utility designed to provide unrestricted access to web resources. Built specifically for students on school Chromebooks and users behind restrictive institutional firewalls, SimpleProxy routes HTTP requests securely.',
      'Bypass keyword blockers, content filters, and domain blacklists to access educational wikis, coding documentation, and developer tools. The proxy strips tracking scripts and cookies to preserve privacy and speed up page load times on low-bandwidth connections.',
      'Featuring clean URL navigation, bookmarking support, and built-in tab cloaking integration, SimpleProxy is an indispensable digital utility for navigating the web without artificial barriers.'
    ],
    howTo: [
      'Enter any valid destination web URL into the proxy address bar.',
      'Click "Browse" or press Enter to load the destination page through the proxy gateway.',
      'Navigate links and search pages naturally within the secure sandboxed iframe.',
      'Use the top navigation toolbar to go back, forward, refresh, or cloak the active browser tab.'
    ],
    tips: [
      'Type full URLs including "https://" for the fastest and most reliable proxy routing.',
      'Use the tab-cloaking hotkey (` by default) to instantly disguise the proxy tab if a teacher approaches.',
      'Clear proxy cache in the settings menu if a destination website fails to render styling correctly.',
      'Use the built-in search shortcut to query Google or DuckDuckGo directly through the proxy.'
    ],
    controlsText: 'Mouse and Keyboard to enter URLs and navigate web pages.',
    keycaps: ['mouse', 'enter'],
    developer: 'Blooket1 Network Labs',
    release: '2023'
  },
  'html editor': {
    displayName: 'HTML Editor',
    title: 'HTML Editor: Live Interactive Web Playground',
    catalogDesc: 'Real-time in-browser code editor for HTML5, CSS3, and JavaScript! Write code, preview rendering instantly in a live sandbox, and test web projects with zero setup required.',
    paragraphs: [
      'HTML Editor is a powerful, lightweight in-browser web development playground designed for students, programmers, and hobbyists. Write HTML markup, CSS stylesheets, and JavaScript code side-by-side with instantaneous live preview rendering.',
      'Featuring syntax highlighting, automatic line numbering, code indentation, and error console logging, the editor provides an accessible, zero-install coding environment ideal for learning web design or rapid prototyping on Chromebooks.',
      'Experiment with CSS animations, test responsive layouts, import external web fonts and icon libraries, and export your completed web pages as single-file HTML documents with a single click.'
    ],
    howTo: [
      'Type or paste your HTML markup into the editor code panel on the left.',
      'Add custom CSS styles inside <style> tags and JavaScript scripts inside <script> tags.',
      'Watch the live preview pane on the right update automatically as you type.',
      'Click "Export" or "Save" to download your finished webpage to your computer.'
    ],
    tips: [
      'Use keyboard shortcuts: Ctrl+Z to undo, Ctrl+Y to redo, and Ctrl+S to trigger manual preview refreshes.',
      'Test responsive mobile layouts by resizing the preview divider bar between the code and rendered panes.',
      'Include external libraries like FontAwesome or Google Fonts via CDN links in the <head> section.',
      'Use browser Developer Tools (F12 or Ctrl+Shift+I) to inspect live DOM elements in the preview frame.'
    ],
    controlsText: 'Standard keyboard typing and mouse navigation. Hotkeys: Ctrl+S to refresh, Ctrl+Z to undo.',
    keycaps: ['wasd', 'enter', 'mouse'],
    developer: 'Blooket1 Dev Studio',
    release: '2022'
  },
  'python editor': {
    displayName: 'Python Editor',
    title: 'Python Editor: In-Browser Python Code Runner',
    catalogDesc: 'Run real Python code directly inside your web browser with zero installation! Powered by WebAssembly and Pyodide, write scripts, solve math problems, and learn Python anywhere.',
    paragraphs: [
      'Python Editor is a modern, client-side Python execution environment that brings the full power of Python 3 directly into your browser. Powered by WebAssembly and Pyodide, Python code executes locally on your device with incredible speed and security.',
      'No complex Python installations, terminal environments, or virtual environments required! Write functions, iterate with loops, solve algorithmic mathematical problems, parse strings, and import standard library modules directly on school Chromebooks.',
      'Featuring interactive standard output terminal logging, execution time tracking, error stack traces, and pre-loaded tutorial code snippets, Python Editor is the ultimate accessible sandbox for learning computer science.'
    ],
    howTo: [
      'Type your Python 3 code into the syntax-highlighted code editor.',
      'Click the green "Run Code" button or press Ctrl+Enter on your keyboard.',
      'View text outputs, print statements, and return values in the interactive console below.',
      'Clear the console or load starter sample templates from the examples menu.'
    ],
    tips: [
      'Press Ctrl+Enter to run code instantly without having to click the button with your mouse.',
      'Python relies on strict indentation: make sure you use consistent 4-space indentations for blocks and loops.',
      'Standard library modules like math, random, datetime, and collections are fully supported out of the box.',
      'Use the clear button to reset the terminal before running new algorithmic tests.'
    ],
    controlsText: 'Keyboard typing in code editor. Ctrl+Enter to run code. Mouse to click editor actions.',
    keycaps: ['enter', 'wasd', 'mouse'],
    developer: 'Blooket1 Dev Studio / Pyodide',
    release: '2023'
  },
  'sparx': {
    displayName: 'Sparx Helper',
    title: 'Sparx Helper: Interactive Math Homework Companion',
    catalogDesc: 'Reference utility and calculator designed to assist with Sparx math questions and homework practice! Break down algebraic equations, geometry problems, and ratio calculations step-by-step.',
    paragraphs: [
      'Sparx Helper is an educational reference utility engineered to assist students with their weekly Sparx Maths homework tasks and independent study practice. Designed as a learning aid, it provides step-by-step formula breakdowns and arithmetic verification.',
      'Covering key secondary curriculum topics—including linear algebra, quadratic factoring, geometry area and volume calculations, percentage changes, and ratio problems—Sparx Helper helps students understand the methodology behind each question.',
      'Featuring interactive formula calculators, graph visualizers, and handy reference cheat sheets, Sparx Helper empowers students to build mathematical confidence and conquer challenging bookwork check questions.'
    ],
    howTo: [
      'Select the math category corresponding to your homework question (Algebra, Geometry, Ratios, Number).',
      'Input problem parameters and values into the interactive solver fields.',
      'Review the step-by-step solution breakdown to understand each stage of the working.',
      'Use the bookwork code logging tool to record your answers for quick classroom verification.'
    ],
    tips: [
      'Focus on understanding the method: Sparx checks your working via Bookwork Checks, so write down each step!',
      'Double-check decimal accuracy and unit conversions (e.g. cm² to m²) before submitting final answers.',
      'Use the built-in scientific calculator for multi-step fraction arithmetic and radical simplifications.',
      'Use the ratio visualizer to double-check that your shared parts add up to the total correctly.'
    ],
    controlsText: 'Mouse and Keyboard to input mathematical values and browse formula guides.',
    keycaps: ['mouse', 'enter'],
    developer: 'Blooket1 Edu Labs',
    release: '2023'
  },
  'ask the stars': {
    displayName: 'Ask the Stars',
    title: 'Ask the Stars: Celestial Fortune & Constellation Oracle',
    catalogDesc: 'Consult the cosmos! Whisper your deepest questions to the twinkling night sky, align celestial constellations, and receive poetic cosmic wisdom and fortune in this serene oracle experience.',
    paragraphs: [
      'Ask the Stars is a serene, poetic interactive oracle and meditative art experience. Gazing up at a magnificent deep-blue night sky filled with shimmering stars and nebulae, players are invited to whisper their questions to the cosmos.',
      'Connect gleaming star coordinates across the zodiac to trace celestial constellations. As astrological geometries align, ancient cosmic wisdom, poetic fortunes, and philosophical guidance are whispered back from the heavens.',
      'With ambient orchestral music, gentle atmospheric star twinkling, and thousands of evocative answers, Ask the Stars is a deeply calming and introspective experience for anyone seeking clarity, inspiration, or peaceful reflection.'
    ],
    howTo: [
      'Type your question or thought into the cosmic prompt box, or simply focus on your intention.',
      'Click and drag between glowing stars to connect constellation lines across the sky.',
      'Watch the celestial sphere rotate and illuminate as your constellation aligns.',
      'Read your customized cosmic reading and advice revealed among the constellations.'
    ],
    tips: [
      'Wear headphones to fully immerse yourself in the soothing binaural soundtrack and spatial audio.',
      'Connect stars in complete geometric loops to trigger brighter nebula bursts in the background.',
      'Ask open-ended questions about life, decisions, and goals for the most poetic and thought-provoking responses.',
      'Take a screenshot of your finished constellation reading to keep your cosmic horoscope.'
    ],
    controlsText: 'Mouse click and drag to connect stars. Keyboard to enter thoughts and questions.',
    keycaps: ['mouse', 'enter'],
    developer: 'Starlight Interactive',
    release: '2021'
  },
  'gswitch': {
    displayName: 'G-Switch',
    title: 'G-Switch: The Original Gravity-Inversion Runner',
    catalogDesc: 'Vasco Freitas\' groundbreaking original gravity-flipping runner! Sprint at high speeds along floors and ceilings, dodge lethal spikes, and compete with up to 6 players on one keyboard.',
    paragraphs: [
      'G-Switch is Vasco Freitas\' groundbreaking 2010 Flash runner that launched the beloved gravity-inverting franchise. Instead of jumping over obstacles, players control an armored cybernetic sprinter who inverts the laws of physics with a single keystroke.',
      'Sprint at breakneck speed along metallic floors and ceilings. When obstacles, bottomless pits, or spike traps block your path, flip gravity upside down to run on the ceiling. Timing is critical: flip too early or too late, and your runner will plummet into outer space.',
      'Featuring an adrenaline-pumping single-player campaign, an unforgiving endless survival mode, and legendary local multiplayer support for up to 6 players on a single keyboard, G-Switch is a pure masterpiece of twitch reflex gaming.'
    ],
    howTo: [
      'Press Left Click, Spacebar, or X to invert gravity and flip to the opposite running surface.',
      'Keep your runner on a solid path while avoiding spikes and bottomless chasms.',
      'Collect speed orbs to surge through obstacles at hypersonic velocities.',
      'Be the last player standing in multiplayer mode to claim round victory.'
    ],
    tips: [
      'Remember: you can only invert gravity while your feet are grounded on a surface—you cannot flip mid-air!',
      'Anticipate upcoming gaps early; flipping gravity while running at full speed requires split-second anticipation.',
      'In multiplayer matches, stay calm when opponents crash; consistency and composure always beat frantic button spam.',
      'Memorize tricky level transitions in single-player mode to master the timing of rapid consecutive flips.'
    ],
    controlsText: 'Player 1: Left Click / Spacebar / X. Up to 6 players supported with custom single-key controls.',
    keycaps: ['space', 'mouse', 'X'],
    developer: 'Vasco Freitas',
    release: '2010'
  },
  'doodle jump 2': {
    displayName: 'Doodle Jump 2',
    title: 'Doodle Jump 2: Vertical Jumping Across New Worlds',
    catalogDesc: 'Lima Sky\'s official sequel to the world\'s most famous vertical hopper! Bounce through prehistoric dinosaur lands, desert pyramids, and snowy peaks with new monsters, obstacles, and power-ups.',
    paragraphs: [
      'Doodle Jump 2 is Lima Sky\'s official modern evolution of the immortal vertical platforming classic. Guiding the beloved four-legged Doodler, players leap ever higher across an array of beautifully themed worlds, each introducing fresh visual art and unique environmental mechanics.',
      'Bounce through prehistoric caves dodging pterodactyls, navigate sandy desert pyramids with quicksand platforms, and climb snowy blizzards where icy platforms slide under your feet. Collect stars to unlock cool themed costumes and wacky accessories for your Doodler.',
      'Shoot pellet balls to defeat eccentric new alien monsters, bounce off springy trampolines, and grab supercharged rocket power-ups while striving to climb higher and smash your personal distance records.'
    ],
    howTo: [
      'Use A and D or Left and Right Arrow keys to steer the Doodler horizontally.',
      'Click with your mouse or press Up Arrow / Spacebar to shoot pellet balls at monsters.',
      'Land on platforms to bounce upward, using springs and trampolines for massive elevation boosts.',
      'Use the screen wrap: hopping off the left edge transports you directly to the right edge.'
    ],
    tips: [
      'Master world-specific hazards: avoid crumbling sandstone platforms in the desert and slipping off icy snowbanks.',
      'Shoot monsters before attempting to leap over them; colliding with an enemy ends your run instantly.',
      'Collect stars scattered along platforms to unlock new stages and fun character skins in the wardrobe.',
      'Look two to three platforms ahead to plot your climbing route before committing to long vertical leaps.'
    ],
    controlsText: 'Left / Right Arrow keys or A / D to steer. Up Arrow, Spacebar, or Mouse Click to shoot.',
    keycaps: ['arrows', 'ad', 'space', 'mouse'],
    developer: 'Lima Sky',
    release: '2020'
  },
  'escape the closet': {
    displayName: 'Escape the Closet',
    title: 'Escape the Closet: Claustrophobic Wardrobe Mystery',
    catalogDesc: 'Afro-Ninja\'s classic micro escape puzzle! Locked inside a dark, confined clothing closet, search coats, hangers, shoeboxes, and floorboards to piece together tools and pick the door lock.',
    paragraphs: [
      'Escape the Closet is an atmospheric, tightly constrained point-and-click escape game created by Afro-Ninja during the golden era of Flash adventures. Waking up trapped inside a pitch-black bedroom closet with no obvious explanation, you must rely on tactile exploration and clever deduction to escape.',
      'Search through hanging winter coats, rummage through dusty shoeboxes on upper shelves, examine coat hangers, and pry loose creaky wooden floorboards. Discover everyday household objects—including wire hangers, coins, matches, and hairpins.',
      'Combine items in your inventory to fashion improvised lockpicks, inspect hidden compartments for door keys, and pick the antique closet lock to step out into the light.'
    ],
    howTo: [
      'Click around the dark closet to inspect shelves, clothes racks, shoeboxes, and floorboards.',
      'Collect items into your inventory and click them to examine them in detail.',
      'Combine items (e.g. bending a wire coat hanger) to reach high shelves or jimmy locks.',
      'Unlock or pry open the closet door to make your escape.'
    ],
    tips: [
      'Examine coat pockets: check every hanging jacket and shirt pocket for forgotten coins, keys, and notes.',
      'Look up at the upper shelves: tap near the top of the screen to stand on tiptoes and search the highest storage boxes.',
      'Inspect wire hangers closely; with a little manipulation, a stiff wire hanger makes an excellent hook or lockpick.',
      'Use matches or a lighter if found to illuminate dark corners beneath low-hanging coats.'
    ],
    controlsText: 'Mouse click to inspect closet compartments, collect items, and solve puzzles.',
    keycaps: ['mouse'],
    developer: 'Afro-Ninja',
    release: '2006'
  },
  'escape the freezer': {
    displayName: 'Escape the Freezer',
    title: 'Escape the Freezer: Sub-Zero Room Escape Challenge',
    catalogDesc: 'Locked inside a commercial restaurant meat freezer with temperatures plummeting! Search frozen crates, ice blocks, and refrigeration fans to find tools, melt ice, and unlock the heavy latch.',
    paragraphs: [
      'Escape the Freezer is a tense, sub-zero point-and-click puzzle adventure developed by Afro-Ninja. Trapped inside a restaurant\'s industrial walk-in freezer with the heavy security latch locked from the outside, you face a race against hypothermia.',
      'Search towering stacks of frozen food boxes, inspect ice-encrusted evaporator cooling fans, examine hanging meat hooks, and search industrial storage shelving. Find discarded maintenance tools, defrosting chemicals, and electrical components.',
      'Melt thick blocks of ice to free frozen keys, rewire temperature control panels, bypass the safety lock mechanism, and force open the heavy steel freezer door before frostbite sets in.'
    ],
    howTo: [
      'Click around the walk-in freezer to inspect industrial shelves, refrigeration units, and frozen crates.',
      'Collect inventory tools like meat hooks, flashlights, ice picks, and heating elements.',
      'Find ways to thaw out frozen locks and retrieve keys trapped inside solid ice blocks.',
      'Override the emergency door latch or pick the padlock to escape the freezing cold.'
    ],
    tips: [
      'Thaw frozen keys: look for warm machinery parts or electrical heating units to melt blocks of ice.',
      'Check the refrigeration fan vents: maintenance technicians often hide spare emergency keys near the motor.',
      'Use meat hooks and long tools to retrieve items that have fallen behind heavy stainless steel shelving.',
      'Inspect ice block labels and packaging for printed expiration dates that might serve as keypad codes.'
    ],
    controlsText: 'Mouse click to explore freezer, collect tools, combine items, and solve locks.',
    keycaps: ['mouse'],
    developer: 'Afro-Ninja',
    release: '2007'
  },
  'escape the phone booth': {
    displayName: 'Escape the Phone Booth',
    title: 'Escape the Phone Booth: Micro Space Point-and-Click',
    catalogDesc: 'Trapped inside a glass public telephone booth with jammed folding doors! Search the coin return, telephone dial, ceiling light, and phone book to assemble tools and break out.',
    paragraphs: [
      'Escape the Phone Booth is a masterclass in minimalist room escape design by Afro-Ninja. Confined entirely inside a classic glass public telephone booth on a lonely city street, the folding bifold doors have slammed shut and jammed tight.',
      'Every square inch of the booth holds potential clues: examine the coin return slot, search the thick telephone directory, unscrew the handset casing, inspect the ceiling fluorescent light fixture, and check beneath the coin box.',
      'Dial mystery phone numbers discovered on scrawled graffiti notes, disassemble the rotary telephone for wiring and copper coins, and fashion a lever to pry open the jammed glass doors to freedom.'
    ],
    howTo: [
      'Click around the interior of the phone booth to inspect the phone, coin slot, phone book, and floor.',
      'Collect spare coins, wires, telephone receiver parts, and paperclips into your inventory.',
      'Dial phone numbers found etched into the glass or written in the telephone directory.',
      'Use assembled tools to dismantle the door lock mechanism and force the folding doors open.'
    ],
    tips: [
      'Flip through the phone book: specific names and addresses written on the yellow pages contain vital hints.',
      'Inspect the coin return and coin box: loose quarters can be used as makeshift flathead screwdrivers.',
      'Listen to audio cues when dialing numbers; dial tones and recorded operator messages provide clues.',
      'Check the ceiling: the overhead light fixture often hides keys or wires above the diffuser panel.'
    ],
    controlsText: 'Mouse click to inspect booth fixtures, dial the telephone, and use inventory items.',
    keycaps: ['mouse'],
    developer: 'Afro-Ninja',
    release: '2007'
  },
  'escape the shack': {
    displayName: 'Escape the Shack',
    title: 'Escape the Shack: Abandoned Forest Cabin Escape',
    catalogDesc: 'Stranded inside a weathered wooden shack deep in the forest! Search wooden floorboards, rusted toolboxes, dusty cupboards, and barred windows to find keys and unlock the heavy wooden door.',
    paragraphs: [
      'Escape the Shack is an atmospheric point-and-click mystery escape adventure created by Afro-Ninja. Seeking shelter from a storm deep in an ancient forest, you step inside a weathered wooden shack, only for the heavy timber door to slam shut and lock from the outside.',
      'Inspect rustic wooden furniture, dusty storage shelves, a cracked fireplace hearth, and barred window frames. Search through rusted toolboxes, oil lanterns, old logs, and loose floorboards to uncover hidden mechanisms and forgotten tools.',
      'Piece together torn journal pages, decipher rustic number ciphers, assemble key fragments, and unbolt the iron padlock to escape back into the wilderness.'
    ],
    howTo: [
      'Click to explore the four walls of the wooden shack and zoom in on furniture and shelves.',
      'Collect items like crowbars, matches, keys, and torn paper notes into your inventory.',
      'Use tools to pry open locked trunks, unstick jammed drawers, and clear fireplace debris.',
      'Decipher combination codes to unlock the master padlock on the front door.'
    ],
    tips: [
      'Check under the rug and behind picture frames: loose floorboards and wall safes are frequently hidden there.',
      'Use a crowbar or iron poker to pry open stubborn wooden crates that cannot be opened by hand.',
      'Read journal fragments carefully; dates and family names often provide the numbers needed for chest combinations.',
      'Examine the fireplace hearth: searching through cold ash can reveal fireproof metal keys and lockpicks.'
    ],
    controlsText: 'Mouse click to inspect shack interior, collect items, and solve interactive puzzles.',
    keycaps: ['mouse'],
    developer: 'Afro-Ninja',
    release: '2006'
  },
  'solitare': {
    displayName: 'Klondike Solitaire',
    title: 'Klondike Solitaire: The World\'s Most Popular Card Game',
    catalogDesc: 'The definitive classic single-player card game! Build four foundation piles from Ace to King by suit, stack descending alternating color runs on the tableau, and clear the deck in Draw-1 or Draw-3 modes.',
    paragraphs: [
      'Klondike Solitaire is the quintessential single-player patience card game that has entertained players for over a century, made universally famous by its inclusion in Microsoft Windows since 1990. Your goal is to sort a standard 52-card deck into four foundation piles sorted by suit from Ace up to King.',
      'Build descending tableau columns alternating between red and black cards (e.g. a black 7 on a red 8, or a red Queen on a black King). Move sequenced stacks of cards to uncover face-down cards, create empty columns that can be filled by Kings, and cycle through the stock pile.',
      'Featuring both relaxing Draw-1 and challenging Draw-3 deal modes, smooth card dragging, unlimited undo support, and satisfying automatic cascade finishing animations, Klondike Solitaire is the gold standard of casual card gaming.'
    ],
    howTo: [
      'Click and drag cards to place them in descending order with alternating red and black suits.',
      'Move Aces to the four foundation slots at the top, then build them up in suit order (Ace through King).',
      'Click the stock deck in the top-left corner to reveal new cards when no tableau moves are available.',
      'Fill empty tableau columns with Kings to build new descending card sequences.'
    ],
    tips: [
      'Uncover face-down cards first: always prioritize moving tableau cards that reveal hidden face-down cards underneath.',
      'Don\'t rush to move cards to foundation piles if you still need them on the tableau to build descending runs.',
      'Empty spaces are powerful: use empty columns strategically to hold Kings and reorganize tangled suits.',
      'Double-click cards for automatic placement into foundation piles once their lower values are accounted for.'
    ],
    controlsText: 'Mouse click and drag to move cards. Double-click to auto-move to foundations. Z to undo.',
    keycaps: ['mouse', 'Z'],
    developer: 'Classic Card Games / Windows Edition',
    release: '1990'
  },
  'star wars': {
    displayName: 'Star Wars Arcade: Trench Run',
    title: 'Star Wars: The Iconic Death Star Trench Run',
    catalogDesc: 'Jump into the cockpit of an X-Wing fighter as Luke Skywalker! Dogfight Imperial TIE fighters in deep space, evade laser turrets, and fire proton torpedoes into the Death Star thermal exhaust port.',
    paragraphs: [
      'Star Wars: Trench Run is a thrilling 3D arcade space combat flight simulator inspired by Atari\'s historic 1983 vector arcade game and the climactic finale of Star Wars: A New Hope. Strap into the cockpit of an Incom T-65 X-Wing starfighter and target the Empire\'s ultimate superweapon.',
      'Engage in heart-pounding dogfights against Imperial TIE fighters and Darth Vader\'s TIE Advanced in deep space orbit. Use your quad laser cannons to blast starfighters and switch deflector shields to absorb incoming fire.',
      'Fly down the narrow Death Star trench at breakneck velocity, dodging heavy turbo-laser fire and catwalk obstacles. Use the Force, disable your targeting computer, and launch proton torpedoes cleanly into the two-meter thermal exhaust port to save the galaxy!'
    ],
    howTo: [
      'Use Mouse or WASD to steer your X-Wing starfighter\'s flight path and target reticle.',
      'Left-click or Spacebar to fire quad laser cannons at enemy TIE fighters.',
      'Weave between turbo-laser towers and surface laser barricades along the Death Star trench.',
      'Fire proton torpedoes into the glowing thermal exhaust port at the end of the trench run.'
    ],
    tips: [
      'Lead your shots: aim slightly ahead of darting TIE fighters to allow your laser bolts to intersect their flight path.',
      'In the trench run, fly low and center to avoid heavy fire from surface turbo-laser batteries.',
      'Roll your starfighter to squeeze through narrow catwalk openings along the trench walls.',
      'Trust your instincts: launch torpedoes right as the thermal exhaust port flashes green on your HUD.'
    ],
    controlsText: 'Mouse or WASD to fly and aim. Left Click or Spacebar to fire lasers. Shift to boost.',
    keycaps: ['wasd', 'arrows', 'space', 'mouse', 'shift'],
    developer: 'Atari / Star Wars Arcade Labs',
    release: '1983'
  },
  'stick jet challenge': {
    displayName: 'Stick Jet Challenge',
    title: 'Stick Jet Challenge: Precision Jetpack Obstacle Flight',
    catalogDesc: 'Strap on a high-powered rocket jetpack and thread through lethal obstacle courses! Dodge spinning laser grids, guided missiles, and electric forcefields to reach the landing pad.',
    paragraphs: [
      'Stick Jet Challenge is a thrilling, precision-focused arcade flying game developed by QkyGames. Controlling a daring stickman test pilot equipped with an experimental rocket jetpack, players must fly through high-security scientific facilities packed with lethal security traps.',
      'Master the physics of thrust and gravity: press the button to fire rocket thrusters and ascend, and release to descend gracefully. Thread through narrow corridors lined with electric forcefields, dodge spinning laser beams, and weave through homing missile traps.',
      'Featuring 60 progressively demanding challenge stages, collectible golden stars, and tight responsive controls, Stick Jet Challenge is an exhilarating test of aerial finesse and composure under pressure.'
    ],
    howTo: [
      'Press and hold Left Mouse Button, Spacebar, or Up Arrow to fire jetpack thrusters and fly upward.',
      'Release the button to cut engine thrust and allow gravity to pull your stickman downward.',
      'Navigate narrow tunnels, timing your flight to slip past rotating laser beams and moving spikes.',
      'Land smoothly on the checkered green landing platform to complete the level.'
    ],
    tips: [
      'Feather your thrust: use gentle, rhythmic pulses of rocket thrust rather than long continuous bursts to hover smoothly.',
      'Collect all three stars in each stage to unlock bonus stages and specialized stickman flight suits.',
      'Watch laser rotation speeds: wait for spinning laser beams to sweep past before committing to narrow passages.',
      'Approach the landing pad slowly: slamming into the platform at high speed can cause your pilot to crash!'
    ],
    controlsText: 'Left Mouse Click, Spacebar, or Up Arrow to fire jetpack thrusters.',
    keycaps: ['mouse', 'space', 'up'],
    developer: 'QkyGames',
    release: '2020'
  },
  'tunnel glider': {
    displayName: 'Tunnel Glider',
    title: 'Tunnel Glider: Supersonic 3D Tube Flight Simulator',
    catalogDesc: 'Hurtle through twisting 3D sci-fi tunnels at blinding speeds! Bank, roll, and glide through spinning geometric rings while evading neon barriers and structural blockades.',
    paragraphs: [
      'Tunnel Glider is an exhilarating 3D flight and reflex simulator where players pilot a high-speed aerodynamic glider through endless, twisting cybernetic tunnels. Propelled forward at hypersonic velocities, you must react in split-seconds to navigate dynamic obstacle gates.',
      'Tilt and roll along the 360-degree cylindrical tunnel interior. Bank through open slots in rotating hazard rings, slip past hydraulic barrier gates, and ride speed boost vortexes that push your velocity to its absolute limits.',
      'Accompanied by a driving electronic soundtrack and crisp neon visuals, Tunnel Glider delivers pure sensory speed where flawless focus and subtle steering adjustments are essential to surviving the tunnel.'
    ],
    howTo: [
      'Use A and D or Left and Right Arrow keys (or Mouse) to roll and bank around the tunnel walls.',
      'Press W / S or Up / Down Arrow keys to adjust flight pitch when dodging horizontal barriers.',
      'Align your glider with open gaps in oncoming rotating geometric obstacle rings.',
      'Fly through glowing speed rings to earn bonus points and accelerate down the tunnel.'
    ],
    tips: [
      'Look far ahead down the center of the tunnel to spot rotating openings well before you reach them.',
      'Make smooth, controlled rolling inputs; erratic over-steering will cause your wingtips to clip tunnel barriers.',
      'Ride along the bottom of the tunnel between maneuvers for the widest visual field of view.',
      'Collect energy tokens along your flight path to activate temporary magnetic shield protection.'
    ],
    controlsText: 'A / D or Left / Right Arrows to bank. W / S or Up / Down to pitch. Mouse control supported.',
    keycaps: ['ad', 'arrows', 'ws', 'mouse'],
    developer: 'Vectaria / Neon Flight Labs',
    release: '2022'
  },
  'github repo viewer': {
    displayName: 'GitHub Repo Viewer',
    title: 'GitHub Repo Viewer: Offline Repository Explorer & Code Browser',
    catalogDesc: 'Inspect, browse, and explore GitHub repositories directly in your browser! View file directory trees, read README markdown documents, and inspect source code without leaving Blooket1.',
    paragraphs: [
      'GitHub Repo Viewer is a developer utility designed to provide seamless, in-browser exploration of public GitHub repositories. Engineered for students and programmers on restricted school networks where developer websites may be blocked, it provides immediate access to open-source code.',
      'Enter any public repository identifier (e.g. "owner/repository") to fetch and render the full directory tree. Browse project files, read syntax-highlighted source code in JavaScript, Python, C++, and HTML, and inspect formatted Markdown README documentation.',
      'Featuring clean folder navigation, responsive file previewing, and zero required authentication or GitHub account logins, GitHub Repo Viewer is an essential educational tool for studying code and building open-source literacy.'
    ],
    howTo: [
      'Enter a GitHub username and repository name (e.g. "facebook/react" or "torvalds/linux") into the search bar.',
      'Click "Load Repository" to fetch the directory file structure.',
      'Click on folders to expand subdirectories, and click on files to inspect their source code with syntax highlighting.',
      'Switch between raw code view and rendered Markdown preview for documentation files.'
    ],
    tips: [
      'Use the branch dropdown to inspect code across different Git branches or release tags.',
      'Search within code files using standard Ctrl+F browser search to find specific functions and classes quickly.',
      'Bookmark your favorite repository links for rapid one-click access during programming classes.',
      'Copy code snippets directly from the viewer to use in the Blooket1 HTML or Python Editors.'
    ],
    controlsText: 'Mouse and Keyboard to search repositories, navigate directory trees, and inspect code files.',
    keycaps: ['mouse', 'enter'],
    developer: 'Blooket1 Dev Studio',
    release: '2023'
  },
  'retro bowl': {
    displayName: 'Retro Bowl',
    title: 'Retro Bowl: The Ultimate 8-Bit Football Management Classic',
    catalogDesc: 'New Star Games\' award-winning 8-bit American football sensation! Call plays, pass, dodge tackles, manage team facilities, draft star rookies, and lead your franchise to Retro Bowl glory.',
    paragraphs: [
      'Retro Bowl is the smash-hit 8-bit American football game created by New Star Games (Simon Read) that captured the hearts of football fans worldwide. Blending arcade gridiron action with deep front-office team management, Retro Bowl delivers the ultimate football experience.',
      'On the field, take command of your offense: drop back in the pocket, scan passing lanes, loft precision passes to wide receivers, juke past aggressive linebackers, and dive over the goal line for touchdowns. Manage the play clock and execute clutch two-point conversions.',
      'Off the field, act as head coach and general manager: manage player morale, hire offensive and defensive coordinators, upgrade stadium and training facilities, draft star college rookies, and steer your franchise to the Retro Bowl championship ring.'
    ],
    howTo: [
      'Click and drag backward from your quarterback to aim and adjust the trajectory of your pass; release to throw.',
      'When running with the ball, swipe or use Arrow Keys to juke defenders, dive forward, and stiff-arm tacklers.',
      'Manage front-office operations between games: manage salary caps, maintain facility morale, and scout draft prospects.',
      'Win regular season games and playoff rounds to qualify for and win the Retro Bowl championship.'
    ],
    tips: [
      'Master the bullet pass: throw passes with low arcs on slant routes to fit balls into tight windows before safeties arrive.',
      'Invest in your offensive line and tight end: a reliable star tight end is the ultimate clutch target on 4th down conversions.',
      'Keep team morale high: praise players in press conferences and invest in rehab facilities to prevent season-ending injuries.',
      'Manage the clock: score at the very end of the second quarter to deny your opponent a counter-possession.'
    ],
    controlsText: 'Mouse click and drag to aim and pass. W/S or Up/Down Arrows to juke. Spacebar to dive. Touchscreen supported.',
    keycaps: ['mouse', 'arrows', 'space', 'wasd'],
    developer: 'New Star Games',
    release: '2020'
  },
  'brawl stars': {
    displayName: 'Brawl Stars Web',
    title: 'Brawl Stars: Fast-Paced 3v3 Multiplayer Hero Arena',
    catalogDesc: 'The acclaimed top-down hero shooter arena! Choose your favorite Brawler, aim unique weapons, charge devastating Super abilities, and battle for gems in fast-paced 3-minute multiplayer showdowns.',
    paragraphs: [
      'Brawl Stars Web brings the high-intensity hero arena combat of Supercell\'s worldwide mobile hit into a fast-loading browser edition. Choose from a diverse roster of unique Brawlers, each equipped with signature weapons, passive traits, and game-changing Super abilities.',
      'Engage in rapid 3-minute skirmishes across fan-favorite modes: grab and hold 10 gems in Gem Grab, score goals in Brawl Ball, outlast rivals in Showdown, or pull off daring heists. Team coordination and terrain destruction are key to victory.',
      'Charge your Super attack by landing standard shots, then unleash devastating supers—from Shelly\'s point-blank buckshot and Colt\'s bullet storm to El Primo\'s flying elbow drop—to demolish obstacles and wipe out the enemy squad.'
    ],
    howTo: [
      'Move your Brawler around the arena using WASD or Left / Right / Up / Down Arrow keys.',
      'Aim with your mouse and Left-click to fire your standard attack toward opponents.',
      'Fill your yellow Super meter by landing hits; press Right-click or Spacebar to unleash your Super attack.',
      'Hide inside tall grass bushes to become invisible to enemies and ambush unsuspecting rivals.'
    ],
    tips: [
      'Regenerate health: stop shooting and avoid taking damage for 3 seconds to trigger rapid automatic health regeneration.',
      'Check bushes: fire a single shot into bushes before walking into them to check for hiding shotgunners (bush checking).',
      'Conserve ammo: never spam all three ammo bars at once unless guaranteed a knockout; empty ammo leaves you defenseless.',
      'In Gem Grab, protect your team\'s primary gem carrier: if they hold 10 gems, retreat together and defend your spawn zone.'
    ],
    controlsText: 'WASD to move. Mouse to aim. Left Click to attack. Right Click or Spacebar for Super ability. E for Gadget.',
    keycaps: ['wasd', 'mouse', 'space', 'E'],
    developer: 'Supercell / Web Edition',
    release: '2018'
  },
  'slither io': {
    displayName: 'Slither.io',
    title: 'Slither.io: The World-Famous Multiplayer Snake Arena',
    catalogDesc: 'Steve Howse\'s legendary multiplayer snake phenomenon! Slither around the glowing arena, gobble colorful energy orbs, boost to cut off rival snakes, and grow into a gargantuan serpent.',
    paragraphs: [
      'Slither.io is the monumental multiplayer sensation developed by Steve Howse (Lowtech Studios) in 2016 that ignited the modern .io gaming revolution. Controlling a tiny, crawling snake in a massive neon petri dish, players compete against hundreds of other serpents simultaneously.',
      'The rules of engagement are wonderfully democratic: no matter how big a snake becomes, if its head touches another snake\'s body, it dies instantly and erupts into a constellation of glowing food pellets! This means a tiny newborn snake can slay the server\'s colossal leaderboard leader with one clever maneuver.',
      'Hold the boost button to surge forward at supersonic speed, cut off opposing serpents, coil into protective spirals, and devour energy orbs to grow into an enormous titan that spans the entire arena.'
    ],
    howTo: [
      'Move your mouse cursor to steer your snake\'s head in any direction.',
      'Hold Left Click or Spacebar to activate speed boost (note: boosting burns a small fraction of your snake\'s length).',
      'Slurp up glowing energy pellets scattered across the arena or left behind by eliminated snakes to grow larger.',
      'Trap opponents by cutting across their path so their head collides with your trailing body.'
    ],
    tips: [
      'The Coiling Tactic: once you grow large enough, encircle smaller snakes in a closed loop and slowly constrict your coil until they crash.',
      'Follow giants: trail behind massive snakes and wait for another player to take them down, then feast on the massive orb trail.',
      'Use boost strategically: boosting burns body mass, so use short bursts to cut rivals off rather than cruising constantly.',
      'Defensive spiral: if a fast booster tries to cut you off, quickly curl your head inward toward your own body where you are safe.'
    ],
    controlsText: 'Mouse to steer snake. Left Mouse Click or Spacebar to boost. Touch/drag supported on mobile.',
    keycaps: ['mouse', 'space'],
    developer: 'Steve Howse / Lowtech Studios',
    release: '2016'
  },
  'italian brainrot clicker': {
    displayName: 'Italian Brainrot Clicker',
    title: 'Italian Brainrot Clicker: The Ultimate Viral Meme Tycoon',
    catalogDesc: 'The wildest meme clicker on the web! Tap the dancing pizza and viral Italian brainrot memes, unlock chaotic soundboard effects, buy espresso multipliers, and ascend into ultimate brainrot glory.',
    paragraphs: [
      'Italian Brainrot Clicker is a hilarious, hyper-energetic meme idle clicker inspired by the viral TikTok "Italian Brainrot" phenomenon. Players start by clicking an animated slice of pizza, triggering iconic sound memes, chaotic voice clips, and skyrocketing brainrot points.',
      'Reinvest your brainrot wealth into an outrageous roster of Italian upgrades: hire gesturing nonnas, build automated espresso factories, construct towering pizza leaning towers, and summon viral meme characters that generate billions of brainrot points per second.',
      'Trigger golden pizza frenzy events, activate loud soundboard effects, unlock ridiculous cosmetic meme skins, and ascend to higher realms of pure internet absurdity in this wildly entertaining casual clicker.'
    ],
    howTo: [
      'Click or tap the central pizza meme to generate brainrot points manually.',
      'Purchase automated Italian meme generators on the right store shelf to build passive income.',
      'Click golden floating meme icons when they appear on the screen to trigger massive multiplier frenzies.',
      'Ascend when progression slows to unlock permanent golden pasta multipliers.'
    ],
    tips: [
      'Keep sound enabled: every upgrade and click triggers hilarious authentic viral Italian voice memes!',
      'Balance manual clicking with passive espresso generators early on to maximize steady income.',
      'Golden meme icons appear frequently—click them immediately to stack compounding 7x frenzy buffs.',
      'Check the meme achievements tab to unlock permanent passive production boosts.'
    ],
    controlsText: 'Mouse click or touchscreen tap to click memes and purchase upgrades. Spacebar to click.',
    keycaps: ['mouse', 'space'],
    developer: 'Meme Arcade Studio',
    release: '2024'
  },
  'pixel shooter': {
    displayName: 'Pixel Shooter',
    title: 'Pixel Shooter: Fast-Paced Retro 2D Platform Arena',
    catalogDesc: 'Jump into intense retro pixel firefights! Leap across platforms, grab shotguns, sniper rifles, and rocket launchers, and blast rivals in fast-paced 2D multiplayer platform shootouts.',
    paragraphs: [
      'Pixel Shooter is a fast, explosive 2D retro multiplayer platform shooter that blends classic run \'n gun action with tight arena platforming. Armed with an array of lethal pixel firearms, players battle across floating industrial platforms, toxic factories, and futuristic skyscrapers.',
      'Master agile platforming mechanics: double-jump across wide chasms, cling to walls, and dodge incoming rocket fire. Scavenge high-tier weapon crates to equip pump shotguns, rapid-fire assault rifles, high-caliber sniper rifles, and bouncing grenade launchers.',
      'Battle solo through challenging bot survival waves or compete against friends in frantic deathmatch arenas where quick reflexes, map control, and precise trigger discipline determine the victor.'
    ],
    howTo: [
      'Move with A/D or Left/Right Arrow keys, and press W or Up Arrow / Spacebar to jump and double-jump.',
      'Aim with your mouse and Left-click to fire weapons toward opponents.',
      'Press S or Down Arrow to drop through semi-solid wooden platforms.',
      'Pick up glowing weapon crates scattered across the arena to swap loadouts.'
    ],
    tips: [
      'Double-jumping and wall sliding are essential for throwing off enemy sniper aim during open firefights.',
      'Hold high ground on upper platforms: shooting downward gives you better splash damage angles with rocket launchers.',
      'Use shotguns in tight indoor corridors where spread guarantees maximum close-range damage.',
      'Duck behind metal crates to absorb enemy machine-gun fire while your weapon reloads.'
    ],
    controlsText: 'WASD or Arrow Keys to move & jump. Mouse to aim and shoot. 1-4 for weapon select.',
    keycaps: ['wasd', 'arrows', 'mouse', 'space'],
    developer: 'Voxel Pixel Games',
    release: '2021'
  },
  'robot man': {
    displayName: 'Robot Man',
    title: 'Robot Man: Classic Mechanical Platformer',
    catalogDesc: 'Guide an adventurous mechanical robot through perilous steampunk factories! Jump across moving conveyor belts, dodge hydraulic presses, collect power cogs, and defeat rogue factory bosses.',
    paragraphs: [
      'Robot Man is a classic retro action platformer where players take control of an intrepid mechanical automaton exploring vast, dangerous steampunk industrial complexes. Awakening in a decommissioned assembly plant, you must navigate hazardous machinery to reach the outside world.',
      'Master precision platforming: leap across moving conveyor belts, time jumps between crushing hydraulic presses, dodge steam vents, and slide under high-voltage electric conduits. Collect glowing golden power cogs to restore your robot\'s battery reserves and upgrade core modules.',
      'Equip mechanical upgrades—such as spring-loaded double jump legs, plasma arm blasters, and protective magnetic shields—to conquer multi-stage factory sectors and defeat colossal industrial boss machines.'
    ],
    howTo: [
      'Use Arrow Keys or WASD to run, jump, duck, and climb industrial ladders.',
      'Press Spacebar or Z to fire your robot\'s arm cannon at rogue mechanical drones.',
      'Collect golden power cogs scattered throughout each level to recharge health and unlock upgrades.',
      'Reach the green exit terminal at the end of each factory sector to advance.'
    ],
    tips: [
      'Watch conveyor belt directions: belts moving against you cut your jump distance, while forward belts launch you further.',
      'Observe hydraulic press timing: count the rhythm of descending pistons before dashing underneath.',
      'Use ladder drops: press Down + Jump to drop down quickly through metal grates to escape incoming missiles.',
      'Collect every power cog: gathering 100% of cogs in a sector awards bonus lives and shield upgrades.'
    ],
    controlsText: 'Arrow Keys or WASD to move and jump. Spacebar / Z to shoot blaster. R to restart.',
    keycaps: ['arrows', 'wasd', 'space', 'Z', 'R'],
    developer: 'Retro Mechanical Games',
    release: '2012'
  },
  'the dot game': {
    displayName: 'The Dot Game',
    title: 'The Dot Game: Minimalist Reflex & Precision Timing',
    catalogDesc: 'The ultimate test of precision timing and spatial reflex! Guide a lone dot through revolving circular orbits, threading between rotating obstacles and pulsing hazard barriers.',
    paragraphs: [
      'The Dot Game is a sleek, minimalist reflex and timing puzzle game that strips arcade gaming down to its purest, most elegant essentials. Controlling a single nimble dot orbiting concentric geometric circles, your goal is to leap between rings without colliding with obstacles.',
      'Timing is everything: rings rotate at varying speeds and directions, punctuated by moving spikes, laser barriers, and color-coded hazard zones. Tap to leap from orbit to orbit, threading the needle through razor-thin openings in revolving barriers.',
      'Featuring crisp geometric vector graphics, satisfying tactile audio feedback, and hundreds of progressively challenging stages, The Dot Game delivers addictive "just-one-more-try" gameplay that sharpens your hand-eye coordination.'
    ],
    howTo: [
      'Click the mouse, tap the screen, or press Spacebar to launch your dot outward to the next concentric ring.',
      'Time your leap so your dot lands safely on the open, unblocked arc of the revolving circle.',
      'Reach the glowing center core of the geometric maze to complete the level.',
      'Advance through increasingly complex revolving orbital puzzles with multiple rotating rings.'
    ],
    tips: [
      'Observe the rotation rhythm: each ring rotates at a constant speed, so find the repeating timing pattern before jumping.',
      'Don\'t hesitate too long: some rings contain hazard blocks that slowly chase your dot around the orbit.',
      'Chain rapid jumps when multiple concentric gaps line up momentarily for high-scoring streak bonuses.',
      'Take a deep breath and stay patient; rushing jumps into narrow gaps is the primary cause of collisions.'
    ],
    controlsText: 'Left Mouse Click, Spacebar, or Screen Tap to jump between orbital rings.',
    keycaps: ['mouse', 'space'],
    developer: 'Minimalist Arcade Labs',
    release: '2019'
  }
};

applyBatch(BATCH_4);
