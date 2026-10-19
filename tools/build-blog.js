#!/usr/bin/env node
/**
 * Builds the /blog/ SEO Guides Hub and 6 high-intent Unblocked Games SEO articles.
 * Usage: node tools/build-blog.js
 */
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BLOG_DIR = path.join(ROOT_DIR, 'blog');
const SITE = 'https://blooket1.com';

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const ARTICLES = [
  {
    slug: 'best-unblocked-games-for-school-chromebooks',
    title: '25 Best Unblocked Games for School Chromebooks (2026 Tier List)',
    metaTitle: '25 Best Unblocked Games for School Chromebooks (2026) | Blooket1',
    description:
      'Discover the 25 best free unblocked games for school Chromebooks in 2026. Play Slope, Retro Bowl, Space Waves, Rocket League 2D, Snow Rider 3D, and Minecraft at 60 FPS with zero downloads.',
    category: 'Tier Lists & Guides',
    readTime: '6 min read',
    date: '2026-10-18',
    image: 'images/retrobowl.webp',
    icon: 'fa-trophy',
    summary:
      'Ranked tier list of the fastest, most addictive HTML5 and WebGL unblocked games that run at a locked 60 FPS on managed school Chromebooks with no downloads.',
    body: `
      <p>Finding <b>unblocked games for school Chromebooks</b> that actually load fast, save your progress automatically, and don't lag on managed classroom hardware can be tough. Many older browser games rely on heavy plugins or unoptimized scripts that freeze low-memory devices.</p>
      <p>On <a href="../../">Blooket1 Unblocked Games</a>, all 127+ titles are engineered around hardware-accelerated HTML5 Canvas and WebGL 2.0, keeping RAM usage under 64 MB while delivering 60 FPS gameplay. Below is our definitive 2026 tier list of the <b>25 best unblocked games for school</b> across every genre.</p>

      <h2>S-Tier: The All-Time Hall of Fame</h2>
      <p>These are the most played games across thousands of schools every single day—offering instant action, deep replayability, and instant keyboard response:</p>
      <ol>
        <li><b><a href="../../play/slope/">Slope Unblocked</a></b> — The undisputed king of 3D endless runners. Steer a neon sphere down a procedurally generated cosmic course at breakneck speeds.</li>
        <li><b><a href="../../play/retro%20bowl/">Retro Bowl Unblocked</a></b> — Draft players, manage salaries, call plays, and throw pixel-perfect touchdown passes in the best football management game ever made for browsers.</li>
        <li><b><a href="../../play/space%20waves/">Space Waves Unblocked</a></b> — Inspired by Geometry Dash's famous Wave mode, hold to dart diagonally up at 45 degrees and release to dive through 33 neon obstacle gauntlets.</li>
        <li><b><a href="../../play/rocket%20league/">Rocket League 2D Unblocked</a></b> — High-flying supersonic car soccer in 2D! Boost, flip, and score aerial goals in fast 2-minute exhibition matches.</li>
        <li><b><a href="../../play/snow%20rider%203d/">Snow Rider 3D Unblocked</a></b> —Hop on a toboggan, dodge giant snowballs and pine trees, leap over icy chasms, and collect gift boxes to unlock 10+ custom sleds.</li>
        <li><b><a href="../../play/minecraft/">Minecraft Unblocked (Eaglercraft)</a></b> — Full survival and creative sandbox gameplay right inside your browser tab with zero installs.</li>
      </ol>

      <h2>Best Fast-Paced Action &amp; Reflex Games</h2>
      <p>When you only have 5 to 10 minutes between classes or after finishing an assignment, these <a href="../../category/action/">unblocked action games</a> jump straight into the gameplay loop:</p>
      <ul>
        <li><b><a href="../../play/geometry%20dash%20lite/">Geometry Dash Lite</a></b> — Jump and fly through rhythm-based platforming levels synced to iconic electronic soundtracks.</li>
        <li><b><a href="../../play/ragdoll%20archers/">Ragdoll Archers</a></b> — Physics-driven bow-and-arrow duels where headshots, trick arrows, and armor upgrades decide who survives.</li>
        <li><b><a href="../../play/escape%20road/">Escape Road</a></b> — Outrun swat trucks, helicopters, and police roadblocks through tight city streets in a high-speed getaway chase.</li>
        <li><b><a href="../../play/subway%20surfers/">Subway Surfers</a></b> — Dash along train tracks, grind rails on hoverboards, and dodge oncoming trains.</li>
        <li><b><a href="../../play/brotato/">Brotato Unblocked</a></b> — Top-down arena roguelike where a heavily armed potato wields up to 6 weapons simultaneously against waves of aliens.</li>
        <li><b><a href="../../play/superhot/">Superhot</a></b> — Time moves only when you move. Dodge bullets in slow motion in this minimalist tactical FPS puzzle.</li>
      </ul>

      <h2>Best Driving, Stunt &amp; 3D Obstacle Games</h2>
      <p>Browse our full <a href="../../category/driving/">unblocked driving games</a> collection or start with these top-performing racers:</p>
      <ul>
        <li><b><a href="../../play/polytrack/">PolyTrack</a></b> — Low-poly high-speed time-trial racing with loop-the-loops, wall rides, and millisecond ghost leaderboards.</li>
        <li><b><a href="../../play/ice%20dodo/">Ice Dodo Unblocked</a></b> — Navigate dozens of floating 3D parkour tracks in space where touching the wrong color tile launches your dodo into the void.</li>
        <li><b><a href="../../play/moto%20x3m%20pool%20party/">Moto X3M Pool Party</a></b> — Pull off frontflips and backflips through underwater tubes, giant waterslides, and explosive spike traps.</li>
        <li><b><a href="../../play/eggy%20car/">Eggy Car</a></b> — Carefully feather the gas and brake pedals to carry a fragile egg over steep hills without cracking it.</li>
      </ul>

      <h2>Best Idle Clickers, Strategy &amp; Brain Puzzles</h2>
      <p>Prefer a game you can keep open in the background or play quietly with just a mouse or trackpad? Check out <a href="../../category/clicker/">clicker games</a> and <a href="../../category/puzzle/">puzzle games</a>:</p>
      <ul>
        <li><b><a href="../../play/cookie%20clicker/">Cookie Clicker Unblocked</a></b> — Build an astronomical baking empire with grandmas, portals, time machines, and heavenly prestige upgrades.</li>
        <li><b><a href="../../play/monkey%20mart/">Monkey Mart</a></b> — Plant bananas, harvest corn, stock supermarket shelves, and manage a bustling grocery store.</li>
        <li><b><a href="../../play/block%20blast/">Block Blast</a></b> — Fit tetromino block shapes onto an 8x8 grid to clear rows and chain massive combo multipliers.</li>
        <li><b><a href="../../play/2048/">2048</a> &amp; <a href="../../play/cubes%202048/">Cubes 2048</a></b> — Classic number-merging strategy and its 3D snake-arena evolution.</li>
        <li><b><a href="../../play/bitlife/">BitLife</a></b> — Text-based life simulator where every decision shapes your career, wealth, and legacy.</li>
        <li><b><a href="../../play/the%20prestige%20tree/">The Prestige Tree</a> &amp; <a href="../../play/mr%20mine/">Mr. Mine</a></b> — Deep incremental progression games that automatically save to your browser's local storage.</li>
      </ul>
    `,
    faqs: [
      {
        q: 'What are the most popular unblocked games for school Chromebooks?',
        a: 'The most popular unblocked games on school Chromebooks in 2026 are Slope, Retro Bowl, Space Waves, Snow Rider 3D, Rocket League 2D, Minecraft, Ragdoll Archers, Cookie Clicker, Escape Road, and Block Blast.'
      },
      {
        q: 'Do unblocked games on Blooket1 require any downloads or extensions?',
        a: 'No! Every game on Blooket1 runs 100% inside your web browser using standard HTML5 and WebGL with zero downloads, zero Chrome extensions, and no sign-up required.'
      },
      {
        q: 'What should I do if blooket1.com is blocked on my school Wi-Fi?',
        a: 'Click the Stealth Mode button in the top-right corner of Blooket1 and open the "Mirrors & alt links" tab. You can use official mirrors like blooket1.pages.dev, educational.blooket1.com, or blooket1.com/drive.google.com/, or launch the site inside an about:blank tab.'
      }
    ]
  },
  {
    slug: 'rocket-league-2d-unblocked-guide',
    title: 'Rocket League 2D Unblocked: Controls, Aerial Tricks & Pro Guide',
    metaTitle: 'Rocket League 2D Unblocked - Play 2D Rocket League Free | Blooket1',
    description:
      'Play Rocket League 2D unblocked free in your browser on Blooket1. Master boost management, double-jump aerials, flip resets, and defense with our complete 2D Rocket League strategy guide.',
    category: 'Game Guides',
    readTime: '5 min read',
    date: '2026-10-18',
    image: 'images/rocket league.webp',
    icon: 'fa-car-burst',
    summary:
      'Everything you need to dominate in 2D Rocket League (RL 2D) unblocked—from kickoff speed-flips and aerial boost control to goalie positioning.',
    body: `
      <p><b><a href="../../play/rocket%20league/">Rocket League 2D Unblocked</a></b> (also searched as <b>2D Rocket League</b> or <b>RL 2D</b>) brings the high-octane physics of supersonic car soccer into an instant-loading HTML5 browser arena. Instead of needing a gaming PC or console download, you can jump straight into fast-paced 2D stadium matches on any school Chromebook or laptop.</p>
      <p><a href="../../play/rocket%20league/" class="hero-play-btn" style="display:inline-flex;margin:8px 0 16px;text-decoration:none;"><i class="fas fa-play"></i> Play Rocket League 2D Unblocked Now</a></p>

      <h2>Complete Rocket League 2D Controls</h2>
      <p>Mastering the car physics in <b>2D Rocket League</b> comes down to combining throttle, air pitch, and boost:</p>
      <ul>
        <li><b>Steer &amp; Air Rotation (W / A / S / D or Arrow Keys):</b> On the ground, left and right drive your car toward the ball. Once airborne, holding Left or Right rotates your car's nose up or down so you can line up aerial strikes and land cleanly on all four wheels.</li>
        <li><b>Jump &amp; Dodge Flip (Spacebar or Z / Mouse Click):</b> Press once to jump into the air; press a second time while holding a direction to execute a powerful directional flip that launches the ball across the pitch.</li>
        <li><b>Rocket Boost (Shift / X / Right Click):</b> Ignites your rocket trail for supersonic speed on the ground or vertical lift in mid-air. Watch your boost meter and drive over glowing floor pads to refuel.</li>
      </ul>

      <h2>Pro Tips to Win Every Match in 2D Rocket League</h2>
      <ol>
        <li><b>Win the Kickoff with a Low Flip:</b> Don't boost straight into the ball from the ground—jump slightly before impact and dodge-flip into the center of the ball so your car blocks the opponent's clear and sends the ball toward their top corner.</li>
        <li><b>Feather Your Boost on Aerials:</b> Instead of holding boost continuously and flying into the ceiling, tap boost in short bursts while tilting your nose upward at a 45-degree angle to meet high-bouncing balls before the AI or defender can react.</li>
        <li><b>Use the Backboard &amp; Curved Corners:</b> Just like 3D Rocket League, rolling the ball up the opponent's back wall drops it right in front of the net for an easy tap-in.</li>
        <li><b>Never Leave Your Goal Wide Open:</b> If the ball is pinched high in midfield, rotate back toward your own goal line first so you have forward momentum to make a save and counter-attack.</li>
      </ol>

      <h2>More Unblocked Sports &amp; Driving Games Like 2D Rocket League</h2>
      <p>If you love the physics-based action of Rocket League 2D, try these related <a href="../../category/sports/">unblocked sports</a> and <a href="../../category/driving/">driving games</a> on Blooket1:</p>
      <ul>
        <li><b><a href="../../play/soccer%20random/">Soccer Random</a></b> — Hilarious 1-button ragdoll soccer playable solo or 2-player on one keyboard.</li>
        <li><b><a href="../../play/basket%20random/">Basket Random</a></b> — Chaotic 2v2 physics basketball with shifting courts and dunking mechanics.</li>
        <li><b><a href="../../play/retro%20bowl/">Retro Bowl</a></b> — Lead your football franchise to championship glory.</li>
        <li><b><a href="../../play/polytrack/">PolyTrack</a> &amp; <a href="../../play/escape%20road/">Escape Road</a></b> — High-speed 3D driving and precision drifting.</li>
      </ul>
    `,
    faqs: [
      {
        q: 'Where can I play Rocket League 2D unblocked for free?',
        a: 'You can play Rocket League 2D (2D RL) unblocked for free directly in your browser at blooket1.com/play/rocket%20league/ with no downloads or sign-ups.'
      },
      {
        q: 'Does 2D Rocket League work on school Chromebooks?',
        a: 'Yes! Rocket League 2D on Blooket1 uses lightweight HTML5 Canvas physics that run at a locked 60 FPS on any school Chromebook, MacBook, or Windows laptop.'
      },
      {
        q: 'How do you fly and hit aerial shots in Rocket League 2D?',
        a: 'Jump into the air, tilt the nose of your car upward using the Left/Right movement keys, and tap your Rocket Boost in short bursts to fly up and strike the ball mid-air.'
      }
    ]
  },
  {
    slug: 'best-2-player-unblocked-games',
    title: '15 Best 2-Player Unblocked Games to Play With Friends on One Keyboard',
    metaTitle: '15 Best 2-Player Unblocked Games (Shared Keyboard) | Blooket1',
    description:
      'Grab a friend and share one Chromebook keyboard! Here are the 15 best 2-player unblocked games for school, including Basket Random, Rooftop Snipers, Getaway Shootout, and Fireboy & Watergirl.',
    category: 'Multiplayer & Co-Op',
    readTime: '5 min read',
    date: '2026-10-18',
    image: 'images/basketrandom.webp',
    icon: 'fa-user-group',
    summary:
      'The ultimate list of shared-keyboard 2-player unblocked games—from chaotic ragdoll sports and sniper duels to cooperative puzzle adventures.',
    body: `
      <p>Nothing beats challenging a classmate sitting next to you to a best-of-five showdown on a single keyboard. Our <a href="../../category/2-player/">2-Player Unblocked Games</a> collection is designed specifically for local multiplayer on one Chromebook or laptop—where Player 1 uses <b>WASD</b> (or <b>W/E</b>) and Player 2 uses the <b>Arrow Keys</b> (or <b>I/O</b>).</p>

      <h2>Top 1-Button &amp; 2-Button Ragdoll Showdowns</h2>
      <p>Created by RHM Interactive and New Eich Games, these physics duels take 3 seconds to learn and cause non-stop laughs:</p>
      <ol>
        <li><b><a href="../../play/basket%20random/">Basket Random</a></b> — Press one key to jump, flip, and dunk across icy courts with long arms, heavy balls, and wild ragdoll bounces. First to 5 points wins!</li>
        <li><b><a href="../../play/rooftop%20snipers/">Rooftop Snipers</a></b> — Hold your shoot button to raise your rifle and release to blast your opponent off the building ledge while dodging tomahawks and beach balls.</li>
        <li><b><a href="../../play/getaway%20shootout/">Getaway Shootout</a></b> — Race three characters to the extraction helicopter by hopping left and right while picking up shotguns, sniper rifles, and power-ups.</li>
        <li><b><a href="../../play/boxing%20random/">Boxing Random</a></b> — Time your lunges and rocket punches in the ring across changing rounds.</li>
        <li><b><a href="../../play/soccer%20random/">Soccer Random</a> &amp; <a href="../../play/volley%20random/">Volley Random</a></b> — Defend your goal and score bicycle kicks with unpredictable physics.</li>
        <li><b><a href="../../play/tube%20jumpers/">Tube Jumpers</a></b> — Up to 4 players battle to stay afloat on inflatable inner tubes as sharks, speedboats, and giant waves crash into the water.</li>
      </ol>

      <h2>Best Competitive Arena &amp; Action Duels</h2>
      <ul>
        <li><b><a href="../../play/house%20of%20hazards/">House of Hazards</a></b> — One player tries to finish everyday household chores while the other activates falling light fixtures, flying toast, and prank traps!</li>
        <li><b><a href="../../play/supreme%20duelist%20stickman%202/">Supreme Duelist Stickman 2</a></b> — Pick from dozens of melee weapons, laser swords, and gravity guns in intense stickman arena battles.</li>
        <li><b><a href="../../play/g%20switch%203/">G-Switch 3</a> &amp; <a href="../../play/gswitch/">G-Switch</a></b> — Up to 6 players can share a keyboard, flipping gravity at lightning speed to outlast everyone else.</li>
      </ul>

      <h2>Best Co-Op &amp; Board Classics</h2>
      <ul>
        <li><b><a href="../../play/fireboy%20and%20watergirl/">Fireboy and Watergirl</a></b> — Work together in the Forest Temple! One player controls Fireboy (Arrow keys) and the other controls Watergirl (WASD) to trigger switches, ride elevators, and collect diamonds.</li>
        <li><b><a href="../../play/raft%20wars/">Raft Wars</a> &amp; <a href="../../play/raft%20wars%202/">Raft Wars 2</a></b> — Take turns aiming tennis balls and grenades in classic artillery battles.</li>
        <li><b><a href="../../play/4x4%20chess/">4x4 Chess</a> &amp; <a href="../../play/pong/">Pong</a></b> — Fast tactical board and arcade matchups.</li>
      </ul>
    `,
    faqs: [
      {
        q: 'How do 2-player unblocked games work on one Chromebook?',
        a: 'In shared-keyboard 2-player games, the keyboard is split in half: Player 1 uses keys on the left side (such as W, A, S, D) while Player 2 uses keys on the right side (such as the Arrow keys or I, J, K, L).'
      },
      {
        q: 'What are the best 2-player games on Blooket1?',
        a: 'The most popular 2-player games on Blooket1 are Basket Random, Rooftop Snipers, Getaway Shootout, Boxing Random, Soccer Random, House of Hazards, Fireboy and Watergirl, and Tube Jumpers.'
      }
    ]
  },
  {
    slug: 'space-waves-and-geometry-dash-unblocked-guide',
    title: 'Space Waves & Geometry Dash Lite Unblocked: All Levels & Wave Mode Guide',
    metaTitle: 'Space Waves & Geometry Dash Unblocked Guide | Blooket1',
    description:
      'Master the 45-degree wave mechanic in Space Waves Unblocked and Geometry Dash Lite on Blooket1. Learn micro-tapping, corridor spacing, and how to beat all 33 levels at 60 FPS.',
    category: 'Game Guides',
    readTime: '5 min read',
    date: '2026-10-18',
    image: 'images/space waves.webp',
    icon: 'fa-wave-square',
    summary:
      'How to master the razor-sharp 45-degree wave mechanics in Space Waves and Geometry Dash Lite—including micro-tap spamming and demon gauntlet tips.',
    body: `
      <p>Few browser games test your reaction speed like <b><a href="../../play/space%20waves/">Space Waves Unblocked</a></b> and <b><a href="../../play/geometry%20dash%20lite/">Geometry Dash Lite Unblocked</a></b>. Both games revolve around rhythm-synced obstacle dodging where a single mistimed click sends you back to the start of the tunnel.</p>
      <p>
        <a href="../../play/space%20waves/" class="hero-play-btn" style="display:inline-flex;margin:8px 8px 16px 0;text-decoration:none;"><i class="fas fa-play"></i> Play Space Waves</a>
        <a href="../../play/geometry%20dash%20lite/" class="hero-play-btn" style="display:inline-flex;margin:8px 0 16px;text-decoration:none;background:rgba(255,255,255,0.12);"><i class="fas fa-play"></i> Play Geometry Dash Lite</a>
      </p>

      <h2>How the 45-Degree Wave Mechanic Works</h2>
      <p>In <b><a href="../../play/space%20waves/">Space Waves</a></b> (and the Wave portal sections of Geometry Dash), gravity doesn't pull you down in a curve. Instead, your arrow moves exclusively in straight 45-degree diagonal lines:</p>
      <ul>
        <li><b>Hold Left Click / Spacebar / Up Arrow:</b> Your arrow climbs diagonally upward at a strict 45-degree angle.</li>
        <li><b>Release:</b> Your arrow dives diagonally downward at a strict 45-degree angle.</li>
        <li><b>Zero Momentum Lag:</b> Direction changes happen on the exact frame you press or release—meaning there is no drift or inertia.</li>
      </ul>

      <h2>4 Pro Techniques to Beat Red &amp; Demon Levels</h2>
      <ol>
        <li><b>Master the "Straight-Fly" Micro-Tap:</b> When passing through a flat horizontal tunnel, don't hold the button for too long. Tap the Spacebar or Mouse button at a steady, rapid rhythm (4–6 taps per second) to keep your wave hovering in a tight horizontal sawtooth pattern.</li>
        <li><b>Look Two Obstacles Ahead:</b> At higher speeds in Space Waves (Levels 20–33), watching your arrow directly will cause you to hit sudden wall steps. Keep your eyes focused on the right third of the screen so your fingers react before the obstacle reaches you.</li>
        <li><b>Use Spacebar or Up Arrow Instead of Trackpad Clicks:</b> On school Chromebooks, physical keyboard switches (Spacebar or Up Arrow) have faster release travel than clicking down on a trackpad, making tight zigzag corridors much easier.</li>
        <li><b>Practice in Fullscreen Mode:</b> Click the Fullscreen button on the Blooket1 player bar to eliminate visual distractions and maximize your view of upcoming spike hitboxes.</li>
      </ol>

      <h2>More High-Speed Reflex Games on Blooket1</h2>
      <ul>
        <li><b><a href="../../play/slope/">Slope</a> &amp; <a href="../../play/death%20run%203d/">Death Run 3D</a></b> — First-person neon tunnel runners that push your reflexes to the limit.</li>
        <li><b><a href="../../play/tunnel%20glider/">Tunnel Glider</a> &amp; <a href="../../play/zigzag/">ZigZag</a></b> — Precision one-button directional switching.</li>
        <li><b><a href="../../play/vex%2010/">Vex 10</a> &amp; <a href="../../play/stickman%20hook/">Stickman Hook</a></b> — Fast platforming and momentum mastery.</li>
      </ul>
    `,
    faqs: [
      {
        q: 'How many levels are in Space Waves Unblocked?',
        a: 'Space Waves features 33 handcrafted levels colour-coded by difficulty—ranging from relaxed green beginner stages to intense red and purple demon gauntlets.'
      },
      {
        q: 'Is Space Waves connected to Geometry Dash?',
        a: 'Space Waves is a standalone game developed by do.Games that turns the fan-favorite Wave vehicle mode from Geometry Dash into a full 33-level game where you can choose any level from the start.'
      }
    ]
  },
  {
    slug: 'snow-rider-3d-and-slope-unblocked-guide',
    title: 'Snow Rider 3D & Slope Unblocked: High-Score Guide & Secret Sleds',
    metaTitle: 'Snow Rider 3D & Slope Unblocked: High Score & Sleds Guide | Blooket1',
    description:
      'Learn how to hit 200+ scores in Snow Rider 3D Unblocked and Slope Unblocked on Blooket1. Discover gift farming tips, all unlockable sleds, and edge-steering techniques.',
    category: 'Game Guides',
    readTime: '5 min read',
    date: '2026-10-18',
    image: 'images/snowrider.webp',
    icon: 'fa-person-skiing',
    summary:
      'How to survive high-speed runs in Snow Rider 3D and Slope Unblocked, farm gifts to unlock every sled, and master micro-steering.',
    body: `
      <p><b><a href="../../play/snow%20rider%203d/">Snow Rider 3D Unblocked</a></b> and <b><a href="../../play/slope/">Slope Unblocked</a></b> are two of the most played 3D endless runners in school computer labs. While both games start out at a comfortable cruise, the speed ramps up quickly—turning every boulder, snowman, and red block into a split-second test of precision.</p>
      <p>
        <a href="../../play/snow%20rider%203d/" class="hero-play-btn" style="display:inline-flex;margin:8px 8px 16px 0;text-decoration:none;"><i class="fas fa-play"></i> Play Snow Rider 3D</a>
        <a href="../../play/slope/" class="hero-play-btn" style="display:inline-flex;margin:8px 0 16px;text-decoration:none;background:rgba(255,255,255,0.12);"><i class="fas fa-play"></i> Play Slope Unblocked</a>
      </p>

      <h2>Snow Rider 3D Unblocked: How to Score 200+ &amp; Unlock All Sleds</h2>
      <p>In <b><a href="../../play/snow%20rider%203d/">Snow Rider 3D</a></b>, your distance score increases as you ride down an infinite snowy mountain while collecting red-and-gold gift boxes:</p>
      <ul>
        <li><b>Jump Early Before Deep Chasms:</b> Press <b>Up Arrow</b> or <b>W</b> (or Spacebar) a half-second before the edge of a cliff or fallen log. Jumping too late clips the front runners of your sled.</li>
        <li><b>Listen for Rolling Giant Snowballs:</b> Giant snowballs roll downhill across your path. Always steer behind a rolling snowball rather than trying to race in front of it!</li>
        <li><b>Don't Greed for Dangerous Gifts:</b> Gift boxes tucked tightly between two pine trees at high speed are bait. Survival distance + safe center-lane gifts will unlock the <b>Santa Sled, Metal Sled, and Modern Toboggans</b> much faster than crashing early.</li>
      </ul>

      <h2>Slope Unblocked: Pro Steering &amp; Tunnel Survival</h2>
      <p>In <b><a href="../../play/slope/">Slope</a></b>, over-steering is the #1 reason runs end before 50 points:</p>
      <ol>
        <li><b>Tap, Never Hold:</b> Holding Left or Right (` + '`A`/`D`' + ` or Arrow Keys) builds lateral velocity rapidly. Use tiny feather-taps to keep your ball centered on narrow beams.</li>
        <li><b>Ride the Center Line Before Drops:</b> Whenever a platform tilts downward toward a jump ramp, align your ball dead-center before you leave the edge so you land squarely on the next track regardless of where it spawns.</li>
        <li><b>Use Red Tunnels to Reset Your Line:</b> Inside red obstacle tunnels, the walls actually prevent you from falling off the side—focus solely on dodging the red pillars.</li>
      </ol>
    `,
    faqs: [
      {
        q: 'Do unlocked sleds in Snow Rider 3D save on Blooket1?',
        a: 'Yes! All gift boxes you collect and sleds you unlock in Snow Rider 3D are automatically stored in your browser local storage on Blooket1.'
      },
      {
        q: 'Do all sleds in Snow Rider 3D have the same speed?',
        a: 'All unlockable sleds in Snow Rider 3D share the same core speed and jump physics, though narrower sleek sleds make it easier to judge tight gaps between pine trees.'
      }
    ]
  },
  {
    slug: 'about-blank-tab-cloaking-and-mirror-links-guide',
    title: 'How to Use about:blank Tab Cloaking, Panic Keys & Unblocked Mirror Links',
    metaTitle: 'about:blank Tab Cloaking, Panic Key & Unblocked Mirrors Guide | Blooket1',
    description:
      'Learn how Blooket1 Stealth Mode works: open games in an about:blank tab, disguise your browser tab as Google Classroom or Drive, set a 1-key Panic button, and access official unblocked mirror URLs.',
    category: 'Stealth & Mirrors',
    readTime: '4 min read',
    date: '2026-10-18',
    image: 'images/b-logo.webp',
    icon: 'fa-user-secret',
    summary:
      'Complete guide to Blooket1 Stealth Mode—including 1-click about:blank tab cloaking, Google Classroom tab disguises, custom panic keys, and official backup mirror links.',
    body: `
      <p>Blooket1 includes the most advanced built-in <b>Stealth Mode</b> suite of any unblocked games platform. You can open it at any time by clicking the <b>Stealth mode</b> pill in the top-right corner of any page.</p>
      <p><button type="button" class="hero-play-btn" onclick="openSettingsModal('mirrors')" style="border:none;cursor:pointer;margin:8px 0 16px;"><i class="fas fa-user-secret"></i> Open Stealth Mode &amp; Mirror Links</button></p>

      <h2>1. How <code>about:blank</code> Tab Cloaking Works</h2>
      <p>When you click <b>Open blank tab</b> inside Stealth Mode (or select <b>Open in about:blank</b> from the <code>&hellip;</code> menu on any game player bar), Blooket1 opens a fresh browser window whose address bar literally reads <code>about:blank</code>:</p>
      <ul>
        <li><b>No URL in Browser History:</b> Because <code>about:blank</code> is a native browser blank page, individual game URLs inside the frame aren't logged as separate browser history entries.</li>
        <li><b>Automatic Original Tab Redirect:</b> As soon as your cloaked <code>about:blank</code> tab opens, the original tab automatically redirects to your chosen safe destination (like Google Classroom or Google Docs).</li>
      </ul>

      <h2>2. Tab Disguise (Custom Title &amp; Favicon)</h2>
      <p>Under the <b>Tab disguise</b> tab in Stealth Mode, you can instantly change Blooket1's browser tab title and icon to match real study tools:</p>
      <ul>
        <li><b>Google Classroom</b> (<i>"Classes"</i>), <b>Google Drive</b> (<i>"My Drive - Google Drive"</i>), or <b>Google Docs</b> (<i>"Untitled document - Google Docs"</i>)</li>
        <li><b>Canvas LMS</b>, <b>Desmos Graphing Calculator</b>, <b>Khan Academy</b>, or <b>Wikipedia</b></li>
        <li>Or type your own custom essay title and favicon URL—saved automatically across every page you visit!</li>
      </ul>

      <h2>3. The 1-Key Panic Button (Boss Key)</h2>
      <p>By default, pressing the grave/backtick key (<code>\`</code>, right above Tab on your keyboard) anywhere on Blooket1 instantly replaces the current tab with your chosen destination (such as <code>classroom.google.com</code>) using <code>location.replace()</code> so pressing the browser Back button won't bring the game back. You can customize your panic key to any key you prefer.</p>

      <h2>4. Official Blooket1 Mirror Links &amp; Backup URLs</h2>
      <p>If a network filter blocks the main domain, Blooket1 supports multiple official stealth mirror paths and domains. Bookmark or copy these into a Google Doc:</p>
      <ul>
        <li><b>Primary Domain:</b> <a href="https://blooket1.com/">https://blooket1.com/</a></li>
        <li><b>Cloudflare Pages Mirror:</b> <a href="https://blooket1.pages.dev/">https://blooket1.pages.dev/</a></li>
        <li><b>Educational Subdomain:</b> <a href="https://educational.blooket1.com/">https://educational.blooket1.com/</a></li>
        <li><b>Google Drive Path Mirror:</b> <a href="https://blooket1.com/drive.google.com/">https://blooket1.com/drive.google.com/</a></li>
        <li><b>Google Classroom Path Mirror:</b> <a href="https://blooket1.com/classroom.google.com/">https://blooket1.com/classroom.google.com/</a></li>
        <li><b>Google Docs Path Mirror:</b> <a href="https://blooket1.com/docs.google.com/">https://blooket1.com/docs.google.com/</a></li>
        <li><b>Educational Portal Path:</b> <a href="https://blooket1.com/educational/">https://blooket1.com/educational/</a></li>
        <li><b>School Hub Path:</b> <a href="https://blooket1.com/school/">https://blooket1.com/school/</a></li>
        <li><b>Google Sites Official Hub:</b> <a href="https://sites.google.com/view/blooket1-ubg" target="_blank" rel="noopener">https://sites.google.com/view/blooket1-ubg</a></li>
        <li><b>Google Sites 2026 Best Sites Blog:</b> <a href="https://sites.google.com/view/best-unblocked-game-sites-2026" target="_blank" rel="noopener">https://sites.google.com/view/best-unblocked-game-sites-2026</a></li>
        <li><b>GitHub Pages 2026 Directory:</b> <a href="https://abisdbest.github.io/best-unblocked-games-sites-2026/" target="_blank" rel="noopener">https://abisdbest.github.io/best-unblocked-games-sites-2026/</a></li>
      </ul>
    `,
    faqs: [
      {
        q: 'How do I open Blooket1 in about:blank?',
        a: 'Click the "Stealth mode" button in the top-right header, switch to the "Blank tab" section, and click "Open blank tab". Make sure pop-ups are allowed for the site.'
      },
      {
        q: 'What is the default Panic Key on Blooket1?',
        a: 'The default panic key is the backtick / grave key (`) located in the top-left corner of your keyboard just below Esc. You can change it to any key inside Stealth Mode.'
      },
      {
        q: 'What are the official mirror links for Blooket1?',
        a: 'Official Blooket1 mirrors include https://blooket1.pages.dev/, https://sites.google.com/view/blooket1-ubg, https://sites.google.com/view/best-unblocked-game-sites-2026, https://educational.blooket1.com/, https://blooket1.com/drive.google.com/, https://blooket1.com/classroom.google.com/, and https://blooket1.com/educational/.'
      }
    ]
  },
  {
    slug: 'best-unblocked-game-sites-2026',
    title: '10 Best Unblocked Game Sites in 2026 (Tested on School Chromebooks + Working Mirrors)',
    shortTitle: 'Best Unblocked Game Sites 2026',
    category: '2026 Site Rankings',
    icon: 'fa-trophy',
    datePublished: '2026-10-19',
    dateModified: '2026-10-19',
    readTime: '8 min read',
    heroImage: 'images/retrobowl.webp',
    description:
      'Ranked 2026 comparison of the best unblocked game sites for school Chromebooks. See why Blooket1 (v2.6 update) ranks #1 for 60 FPS HTML5/WebGL performance, about:blank tab cloaking, panic keys, and working Cloudflare Pages & Google Sites mirrors.',
    featuredGames: [
      'slope', 'retro bowl', 'rocket league', 'snow rider 3d',
      'space waves', 'ice dodo', 'brotato', '1v1.lol',
      'escape road', 'block blast', 'cookie clicker', 'minecraft'
    ],
    bodyHtml: `
      <p>Searching for the <strong>best unblocked game sites in 2026</strong> that actually load on a school Chromebook without lag, broken Flash plugins, or sketchy pop-up redirects? School network filters like GoGuardian, Securly, Linewize, and Lightspeed block hundreds of older domains every semester—meaning the best unblocked gaming platforms in 2026 are the ones built on modern <strong>60 FPS HTML5/WebGL</strong> engines with built-in <strong>tab cloaking</strong>, <strong><code>about:blank</code> launchers</strong>, and multi-domain mirrors.</p>
      <p>We tested the top browser gaming hubs on a standard 4 GB RAM school Chromebook to rank the <strong>best unblocked game sites of 2026</strong> by speed, game library, stealth features, and working backup links.</p>

      <h2>1. Blooket1 Unblocked Games (Ranked #1 Overall in 2026 — v2.6 Overhaul)</h2>
      <p><strong><a href="https://blooket1.com/">Blooket1 (blooket1.com)</a></strong> takes the #1 spot in 2026 following its massive <strong>v2.6 update</strong>. Engineered specifically for low-memory school Chromebooks, Blooket1 hosts <strong>127+ hand-picked HTML5 and WebGL games</strong> that launch in a single click with zero downloads, zero browser extensions, and automatic local save states.</p>
      <ul>
        <li><strong>Why It Ranks #1 in 2026:</strong> Clean CrazyGames-style dark UI, instant keyboard search (press <kbd>/</kbd>), Theater &amp; Fullscreen modes, mobile touch D-pad support, a global meme Soundboard (<kbd>Alt+1</kbd> to <kbd>Alt+9</kbd>), and a live student Community Chat.</li>
        <li><strong>Best-in-Class Stealth Mode Hub:</strong> Click <strong>Stealth mode</strong> in the top-right bar to disguise your browser tab title and favicon as <em>Google Docs</em>, <em>Google Drive</em>, <em>Google Classroom</em>, or <em>Khan Academy</em>, set a 1-key <strong>Panic Button</strong> (default <kbd>\`</kbd>), or launch the entire site inside an untraceable <strong><code>about:blank</code> tab</strong>.</li>
        <li><strong>Top Games Available:</strong> <a href="../../play/slope/">Slope</a>, <a href="../../play/retro%20bowl/">Retro Bowl</a>, <a href="../../play/rocket%20league/">Rocket League 2D</a>, <a href="../../play/snow%20rider%203d/">Snow Rider 3D</a>, <a href="../../play/space%20waves/">Space Waves</a>, <a href="../../play/ice%20dodo/">Ice Dodo</a>, <a href="../../play/brotato/">Brotato</a>, <a href="../../play/1v1.lol/">1v1.LOL</a>, <a href="../../play/escape%20road/">Escape Road</a>, <a href="../../play/block%20blast/">Block Blast</a>, <a href="../../play/cookie%20clicker/">Cookie Clicker</a>, and <a href="../../play/minecraft/">Minecraft (Eaglercraft)</a>.</li>
      </ul>

      <h3>All Official Blooket1 Working Links &amp; Mirrors (2026)</h3>
      <ul>
        <li><strong>Primary Domain:</strong> <a href="https://blooket1.com/">https://blooket1.com/</a></li>
        <li><strong>Cloudflare Pages Mirror:</strong> <a href="https://blooket1.pages.dev/" target="_blank" rel="noopener">https://blooket1.pages.dev/</a></li>
        <li><strong>Official Google Sites Hub:</strong> <a href="https://sites.google.com/view/blooket1-ubg" target="_blank" rel="noopener">https://sites.google.com/view/blooket1-ubg</a></li>
        <li><strong>Google Sites 2026 Ranking Blog:</strong> <a href="https://sites.google.com/view/best-unblocked-game-sites-2026" target="_blank" rel="noopener">https://sites.google.com/view/best-unblocked-game-sites-2026</a></li>
        <li><strong>GitHub Pages 2026 Directory:</strong> <a href="https://abisdbest.github.io/best-unblocked-games-sites-2026/" target="_blank" rel="noopener">https://abisdbest.github.io/best-unblocked-games-sites-2026/</a></li>
        <li><strong>Educational Subdomain Mirror:</strong> <a href="https://educational.blooket1.com/" target="_blank" rel="noopener">https://educational.blooket1.com/</a></li>
        <li><strong>Google Drive Path Mirror:</strong> <a href="https://blooket1.com/drive.google.com/">https://blooket1.com/drive.google.com/</a></li>
        <li><strong>Google Classroom Path Mirror:</strong> <a href="https://blooket1.com/classroom.google.com/">https://blooket1.com/classroom.google.com/</a></li>
        <li><strong>Google Docs Path Mirror:</strong> <a href="https://blooket1.com/docs.google.com/">https://blooket1.com/docs.google.com/</a></li>
        <li><strong>Educational / School Portals:</strong> <a href="https://blooket1.com/educational/">blooket1.com/educational/</a> &amp; <a href="https://blooket1.com/school/">blooket1.com/school/</a></li>
      </ul>

      <h2>2. 2026 Comparison Table: Top Unblocked Game Sites Ranked</h2>
      <table>
        <thead>
          <tr>
            <th>Rank &amp; Site</th>
            <th>Primary URL / Mirror</th>
            <th>60 FPS Chromebook Speed</th>
            <th>Built-in Tab Cloak &amp; <code>about:blank</code></th>
            <th>Mirror Network</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>#1. Blooket1 (v2.6)</strong></td>
            <td><code>blooket1.com</code> / <code>blooket1.pages.dev</code></td>
            <td>⭐⭐⭐⭐⭐ (Instant HTML5/WebGL)</td>
            <td>✅ Yes (Docs/Drive/Classroom + Panic Key)</td>
            <td>12+ Mirrors (<code>.pages.dev</code>, Google Sites, <code>.github.io</code>)</td>
          </tr>
          <tr>
            <td><strong>#2. Blooket1 Google Sites Hub</strong></td>
            <td><code>sites.google.com/view/blooket1-ubg</code></td>
            <td>⭐⭐⭐⭐⭐ (Google Backbone)</td>
            <td>✅ Yes (Launches into Cloaked Mode)</td>
            <td>Hosted on Google Sites (Never Blocked)</td>
          </tr>
          <tr>
            <td><strong>#3. AB-613 GitHub Pages Hub</strong></td>
            <td><code>abisdbest.github.io/unblocked-games-sites-list/</code></td>
            <td>⭐⭐⭐⭐⭐ (GitHub CDN)</td>
            <td>✅ Yes (Direct Mirror Launcher)</td>
            <td>Hosted on GitHub Pages (<code>.github.io</code>)</td>
          </tr>
          <tr>
            <td><strong>#4. Unblocked Games G+ / Google Sites</strong></td>
            <td>Various <code>sites.google.com</code> mirrors</td>
            <td>⭐⭐⭐ (Depends on embed host)</td>
            <td>❌ No native panic button</td>
            <td>Community Google Sites</td>
          </tr>
          <tr>
            <td><strong>#5. CoolMathGames / Poki</strong></td>
            <td><code>coolmathgames.com</code> / <code>poki.com</code></td>
            <td>⭐⭐⭐⭐ (Polished HTML5)</td>
            <td>❌ No tab cloaking</td>
            <td>Often blocked on strict school Wi-Fi</td>
          </tr>
        </tbody>
      </table>

      <h2>3. What Makes an Unblocked Game Site Survive School Filters in 2026?</h2>
      <p>School web filters use two layers of inspection: <strong>DNS/URL blocklists</strong> and <strong>active tab title inspection</strong> via Chromebook extensions. That is why older sites from 2022–2024 stopped working. Blooket1's v2.6 architecture solves both:</p>
      <ol>
        <li><strong>Multi-Host Redundancy (<code>.com</code> + <code>.pages.dev</code> + <code>sites.google.com</code> + <code>.github.io</code>):</strong> Even if a school IT administrator blocks one domain, students can immediately use <a href="https://blooket1.pages.dev/">blooket1.pages.dev</a>, <a href="https://sites.google.com/view/blooket1-ubg">sites.google.com/view/blooket1-ubg</a>, or educational path mirrors like <code>blooket1.com/drive.google.com/</code>.</li>
        <li><strong>Zero-Trace <code>about:blank</code> &amp; Tab Disguises:</strong> Opening Blooket1 in an <code>about:blank</code> tab prevents URL-based history logging while disguising the visible tab title and icon as Google Docs or Google Classroom.</li>
      </ol>
    `,
    faqs: [
      {
        q: 'What is the #1 best unblocked game site in 2026?',
        a: 'Blooket1 (https://blooket1.com and https://blooket1.pages.dev) is ranked #1 in 2026 for its v2.6 update featuring 127+ 60 FPS HTML5/WebGL games, built-in about:blank tab cloaking, Google Docs/Classroom tab disguise, customizable panic key, and 12+ working school mirrors.'
      },
      {
        q: 'Which unblocked game site URLs are never blocked on school Chromebooks?',
        a: 'Links hosted on Google Sites (https://sites.google.com/view/blooket1-ubg and https://sites.google.com/view/best-unblocked-game-sites-2026), Cloudflare Pages (https://blooket1.pages.dev/), and GitHub Pages (https://abisdbest.github.io/best-unblocked-games-sites-2026/) are virtually impossible for school firewalls to block without breaking Google Docs or GitHub.'
      },
      {
        q: 'Does Blooket1 save my progress in games like Retro Bowl and Cookie Clicker?',
        a: 'Yes! All game saves, high scores, favorite bookmarks, and Stealth Mode disguises are stored automatically in your browser local storage.'
      }
    ]
  }
];

function getSharedLayout(prefix, activeNav) {
  return {
    header: `    <header class="cg-header">
      <div class="cg-header-left">
        <button id="mobile-menu-btn" class="cg-mobile-menu-btn" aria-label="Open menu" onclick="document.getElementById('sidebar-toggle-btn').click()">
          <i class="fas fa-bars"></i>
        </button>
        <a href="${prefix}" class="cg-logo-area" aria-label="Blooket1 Home">
          <span class="cg-logo-icon-wrap">
            <img class="cg-logo-img" src="${prefix}images/b-logo.webp" alt="" width="34" height="34" />
          </span>
          <span class="cg-logo-text">
            <span class="cg-logo-main">blooket<span class="cg-logo-accent">1</span></span>
          </span>
        </a>
      </div>

      <div class="cg-header-center">
        <form class="cg-search-bar" role="search" action="${prefix}" method="get">
          <input id="searchright" name="q" type="search" class="cg-search-input" placeholder="Search games and categories" autocomplete="off" spellcheck="false" aria-label="Search games" />
          <kbd class="search-kbd">/</kbd>
          <button type="submit" class="cg-search-submit" aria-label="Search">
            <i class="fas fa-magnifying-glass"></i>
          </button>
        </form>
      </div>

      <div class="cg-header-right">
        <a id="header-fav-btn" class="cg-icon-btn" href="${prefix}category/favorites/" title="Favorites" aria-label="My favorites">
          <i class="fas fa-bookmark"></i>
        </a>
        <button class="cg-pill-action-btn" onclick="openSettingsModal()" title="Settings &amp; tab cloaking">
          <i class="fas fa-user-secret"></i>
          <span>Stealth mode</span>
        </button>
      </div>
    </header>

    <div id="sidebar-backdrop" class="cg-sidebar-backdrop"></div>

    <aside id="cg-sidebar" class="cg-sidebar" aria-label="Main Navigation">
      <nav class="cg-nav-list">
        <a href="${prefix}" class="cg-nav-item" data-tooltip="Home">
          <span class="cg-nav-icon"><i class="fas fa-house"></i></span>
          <span class="cg-nav-label">Home</span>
        </a>
        <a href="${prefix}category/new/" class="cg-nav-item" data-tooltip="New">
          <span class="cg-nav-icon"><i class="fas fa-wand-magic-sparkles"></i></span>
          <span class="cg-nav-label">New</span>
        </a>
        <a href="${prefix}category/popular/" class="cg-nav-item" data-tooltip="Trending">
          <span class="cg-nav-icon"><i class="fas fa-fire"></i></span>
          <span class="cg-nav-label">Trending</span>
        </a>
        <a href="${prefix}category/favorites/" class="cg-nav-item" data-tooltip="Favorites">
          <span class="cg-nav-icon"><i class="fas fa-heart"></i></span>
          <span class="cg-nav-label">Favorites</span>
        </a>

        <div class="cg-nav-divider"></div>

        <a href="${prefix}category/action/" class="cg-nav-item" data-tooltip="Action">
          <span class="cg-nav-icon"><i class="fas fa-bolt"></i></span>
          <span class="cg-nav-label">Action</span>
        </a>
        <a href="${prefix}category/driving/" class="cg-nav-item" data-tooltip="Driving">
          <span class="cg-nav-icon"><i class="fas fa-car-side"></i></span>
          <span class="cg-nav-label">Driving</span>
        </a>
        <a href="${prefix}category/puzzle/" class="cg-nav-item" data-tooltip="Puzzle">
          <span class="cg-nav-icon"><i class="fas fa-puzzle-piece"></i></span>
          <span class="cg-nav-label">Puzzle</span>
        </a>
        <a href="${prefix}category/sports/" class="cg-nav-item" data-tooltip="Sports">
          <span class="cg-nav-icon"><i class="fas fa-basketball"></i></span>
          <span class="cg-nav-label">Sports</span>
        </a>
        <a href="${prefix}category/2-player/" class="cg-nav-item" data-tooltip="2 Player">
          <span class="cg-nav-icon"><i class="fas fa-user-group"></i></span>
          <span class="cg-nav-label">2 Player</span>
        </a>
        <a href="${prefix}category/retro/" class="cg-nav-item" data-tooltip="Retro">
          <span class="cg-nav-icon"><i class="fas fa-ghost"></i></span>
          <span class="cg-nav-label">Retro</span>
        </a>
        <a href="${prefix}category/clicker/" class="cg-nav-item" data-tooltip="Clicker">
          <span class="cg-nav-icon"><i class="fas fa-arrow-pointer"></i></span>
          <span class="cg-nav-label">Clicker</span>
        </a>

        <div class="cg-nav-divider"></div>

        <a href="${prefix}blog/" class="cg-nav-item${activeNav === 'blog' ? ' active' : ''}" data-tooltip="Guides &amp; Blog">
          <span class="cg-nav-icon"><i class="fas fa-book-open"></i></span>
          <span class="cg-nav-label">Guides &amp; Blog</span>
        </a>
        <a href="${prefix}chat/" class="cg-nav-item" data-tooltip="Community chat">
          <span class="cg-nav-icon"><i class="fas fa-comments"></i></span>
          <span class="cg-nav-label">Community chat</span>
        </a>
        <a href="${prefix}updates/" class="cg-nav-item" data-tooltip="Updates">
          <span class="cg-nav-icon"><i class="fas fa-newspaper"></i></span>
          <span class="cg-nav-label">Updates</span>
        </a>

        <div class="cg-sidebar-bottom-wrap">
          <button id="sidebar-toggle-btn" class="cg-sidebar-toggle-btn" aria-label="Toggle sidebar" aria-expanded="false" title="Expand / collapse sidebar">
            <span class="cg-panel-toggle-icon">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="16" rx="3"></rect>
                <line x1="9" y1="4" x2="9" y2="20"></line>
              </svg>
            </span>
            <span class="cg-panel-toggle-label">Collapse</span>
          </button>
        </div>
      </nav>
    </aside>`,
    footer: `      <footer class="app-footer">
        <div class="footer-grid">
          <div class="footer-col brand-col">
            <div class="footer-brand">
              <img src="${prefix}images/b-logo.webp" alt="" width="28" height="28" />
              <span class="footer-brand-name">blooket<span class="logo-accent">1</span></span>
            </div>
            <p class="footer-tagline">
              127+ free HTML5 and WebGL unblocked browser games—engineered for fast, 60 FPS performance on school Chromebooks and laptops with zero downloads.
            </p>
          </div>
          <div class="footer-col">
            <h4>Games</h4>
            <ul>
              <li><a href="${prefix}category/popular/">Trending</a></li>
              <li><a href="${prefix}category/new/">New games</a></li>
              <li><a href="${prefix}category/action/">Action</a></li>
              <li><a href="${prefix}category/driving/">Driving</a></li>
              <li><a href="${prefix}category/puzzle/">Puzzle</a></li>
              <li><a href="${prefix}category/2-player/">2 Player</a></li>
              <li><a href="${prefix}category/retro/">Retro</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Tools &amp; Guides</h4>
            <ul>
              <li><a href="${prefix}blog/">Unblocked game guides</a></li>
              <li><a href="#" onclick="openSettingsModal('mirrors'); return false;">Mirrors &amp; alt links</a></li>
              <li><a href="#" onclick="openSettingsModal('cloak'); return false;">Tab cloaking</a></li>
              <li><a href="#" onclick="openSettingsModal('panic'); return false;">Panic key</a></li>
              <li><a href="${prefix}chat/">Community chat</a></li>
              <li><a href="${prefix}updates/">Updates</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>About</h4>
            <ul>
              <li><a href="${prefix}about us/">About us</a></li>
              <li><a href="${prefix}contact us/">Contact &amp; DMCA</a></li>
              <li><a href="${prefix}privacy/">Privacy policy</a></li>
              <li><a href="${prefix}tsandcs/">Terms of service</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Blooket1. Games belong to their respective creators.</p>
        </div>
      </footer>`,
    modal: `    <div id="settingsModalOverlay" class="sm-overlay">
      <div id="settingsModal" class="sm-modal" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="settingsModalTitle">
        <aside class="sm-side">
          <div class="sm-brand">
            <span class="sm-brand-icon"><i class="fas fa-user-secret" aria-hidden="true"></i></span>
            <div>
              <h2 id="settingsModalTitle">Stealth mode</h2>
              <p>Saved on this device</p>
            </div>
          </div>
          <nav class="sm-nav" role="tablist" aria-label="Stealth settings">
            <button type="button" class="sm-nav-btn is-active" role="tab" aria-selected="true" aria-controls="sm-pane-disguise" data-sm-tab="sm-pane-disguise">
              <i class="fas fa-window-maximize" aria-hidden="true"></i>
              <span><b>Tab disguise</b><small>Change the tab's name and icon</small></span>
            </button>
            <button type="button" class="sm-nav-btn" role="tab" aria-selected="false" aria-controls="sm-pane-panic" data-sm-tab="sm-pane-panic">
              <i class="fas fa-keyboard" aria-hidden="true"></i>
              <span><b>Panic key</b><small>One key to leave instantly</small></span>
            </button>
            <button type="button" class="sm-nav-btn" role="tab" aria-selected="false" aria-controls="sm-pane-blank" data-sm-tab="sm-pane-blank">
              <i class="fas fa-file" aria-hidden="true"></i>
              <span><b>Blank tab</b><small>Open in an about:blank tab</small></span>
            </button>
            <button type="button" class="sm-nav-btn" role="tab" aria-selected="false" aria-controls="sm-pane-theme" data-sm-tab="sm-pane-theme">
              <i class="fas fa-palette" aria-hidden="true"></i>
              <span><b>Theme</b><small>Colours for the whole site</small></span>
            </button>
          </nav>
          <div class="sm-side-foot">
            <div class="sm-status">
              <span class="sm-fav sm-fav--sm"><img id="hudCloakIcon" src="${prefix}images/b-logo.webp" alt="" /></span>
              <span><small>This tab looks like</small><b id="hudCloakName">Blooket1</b></span>
            </div>
            <button type="button" class="sm-leave-btn" onclick="triggerPanicExit()">
              <i class="fas fa-person-running" aria-hidden="true"></i>Leave now
            </button>
          </div>
        </aside>
        <div class="sm-main">
          <button id="closeSettingsBtn" class="sm-close" type="button" aria-label="Close stealth mode">
            <i class="fas fa-xmark" aria-hidden="true"></i>
          </button>
          <section class="sm-pane is-active" id="sm-pane-disguise" role="tabpanel">
            <header class="sm-pane-head">
              <h3>Tab disguise</h3>
              <p>Make this tab look like another site. Hover to preview, click to use.</p>
            </header>
            <div class="sm-browser" aria-hidden="true">
              <div class="sm-browser-tabs">
                <span class="sm-browser-tab is-current">
                  <img id="mockupTabIcon" src="${prefix}images/b-logo.webp" alt="" />
                  <span id="mockupTabTitle">Blooket1 Unblocked Games</span>
                  <i class="fas fa-xmark"></i>
                </span>
                <span class="sm-browser-tab"><i class="fas fa-globe"></i><span>New tab</span></span>
                <span class="sm-browser-plus"><i class="fas fa-plus"></i></span>
              </div>
              <div class="sm-browser-bar">
                <i class="fas fa-arrow-left"></i><i class="fas fa-arrow-right"></i><i class="fas fa-rotate-right"></i>
                <span class="sm-browser-url"><i class="fas fa-lock"></i>blooket1.com</span>
              </div>
            </div>
            <div class="sm-cloak-grid" id="cloakOptionsGrid" role="radiogroup" aria-label="Disguises"></div>
          </section>
          <section class="sm-pane" id="sm-pane-panic" role="tabpanel" hidden>
            <header class="sm-pane-head">
              <h3>Panic key</h3>
              <p>Press it anywhere on Blooket1 and this tab is instantly replaced with the site you pick below.</p>
            </header>
            <div class="sm-panic">
              <div class="sm-keycap" id="smKeycap" aria-hidden="true"><span class="sm-keycap-face" id="currentPanicKeyDisplay">\`</span></div>
              <div class="sm-panic-info">
                <p class="sm-panic-state"><span id="smPanicStateText">Your panic key</span><span id="panicListeningStatus" class="sm-listening" style="display:none">Press any key now. Esc cancels.</span></p>
                <div class="sm-btn-row">
                  <button id="changePanicKeyBtn" type="button" class="sm-btn sm-btn--primary"><i class="fas fa-keyboard" aria-hidden="true"></i>Change key</button>
                  <button id="testPanicKeyBtn" type="button" class="sm-btn"><i class="fas fa-play" aria-hidden="true"></i>Try it</button>
                  <button id="resetPanicKeyBtn" type="button" class="sm-btn sm-btn--ghost">Reset to \`</button>
                </div>
              </div>
            </div>
            <h4 class="sm-sub">Go to</h4>
            <div class="sm-dest-grid" id="smDestGrid" role="radiogroup" aria-label="Panic destination"></div>
          </section>
          <section class="sm-pane" id="sm-pane-blank" role="tabpanel" hidden>
            <header class="sm-pane-head">
              <h3>Blank tab</h3>
              <p>Opens Blooket1 inside a new tab whose address reads about:blank, and sends this tab to your panic destination.</p>
            </header>
            <div class="sm-btn-row">
              <button type="button" class="sm-btn sm-btn--primary sm-btn--lg" onclick="openAboutBlankCloak()"><i class="fas fa-up-right-from-square" aria-hidden="true"></i>Open blank tab</button>
            </div>
          </section>
          <section class="sm-pane" id="sm-pane-theme" role="tabpanel" hidden>
            <header class="sm-pane-head">
              <h3>Theme</h3>
              <p>Changes the colours across the whole site.</p>
            </header>
            <div class="sm-theme-grid" id="themeOptionsGrid" role="radiogroup" aria-label="Themes"></div>
          </section>
        </div>
      </div>
    </div>`
  };
}

const BLOG_STYLES = `
      .blog-wrap {
        max-width: 1120px;
        margin: 0 auto;
        padding: 18px 24px 48px;
      }
      .blog-hero {
        padding: 28px 32px;
        border-radius: 22px;
        background: linear-gradient(135deg, rgba(255, 122, 26, 0.14), rgba(24, 25, 38, 0.92));
        border: 1px solid rgba(255, 122, 26, 0.25);
        margin-bottom: 28px;
      }
      .blog-pill {
        display: inline-flex;
        align-items: center;
        gap: 7px;
        padding: 4px 12px;
        border-radius: 99px;
        background: rgba(255, 122, 26, 0.18);
        color: #ff9f43;
        font-size: 12.5px;
        font-weight: 800;
        margin-bottom: 10px;
      }
      .blog-hero h1 {
        font-size: clamp(1.6rem, 3vw, 2.25rem);
        font-weight: 900;
        color: #fff;
        margin: 0 0 10px;
        letter-spacing: -0.02em;
      }
      .blog-hero p {
        color: var(--text-secondary, #b8c0d8);
        font-size: 1rem;
        line-height: 1.6;
        max-width: 760px;
        margin: 0;
      }
      .blog-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 20px;
        margin-bottom: 36px;
      }
      .blog-card {
        display: flex;
        flex-direction: column;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 18px;
        overflow: hidden;
        text-decoration: none;
        color: inherit;
        transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
      }
      .blog-card:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 122, 26, 0.5);
        box-shadow: 0 14px 34px rgba(0, 0, 0, 0.45);
      }
      .blog-card-thumb {
        height: 170px;
        position: relative;
        overflow: hidden;
        background: #12131d;
      }
      .blog-card-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
      }
      .blog-card:hover .blog-card-thumb img {
        transform: scale(1.05);
      }
      .blog-card-body {
        padding: 18px 20px 20px;
        display: flex;
        flex-direction: column;
        flex: 1;
      }
      .blog-card-meta {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        font-weight: 800;
        color: #ff9f43;
        margin-bottom: 8px;
      }
      .blog-card-title {
        font-size: 1.15rem;
        font-weight: 900;
        color: #fff;
        margin: 0 0 8px;
        line-height: 1.35;
      }
      .blog-card-desc {
        font-size: 0.9rem;
        color: var(--text-secondary, #b0b8d0);
        line-height: 1.55;
        margin: 0 0 14px;
        flex: 1;
      }
      .blog-card-cta {
        font-size: 0.86rem;
        font-weight: 800;
        color: #fff;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      .article-shell {
        background: rgba(255, 255, 255, 0.025);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 22px;
        padding: 32px 36px;
        margin-bottom: 28px;
        color: var(--text-secondary, #c2c8dc);
        line-height: 1.72;
        font-size: 1rem;
      }
      .article-shell h1 {
        font-size: clamp(1.65rem, 3vw, 2.3rem);
        font-weight: 900;
        color: #fff;
        margin: 8px 0 14px;
        line-height: 1.25;
      }
      .article-shell h2 {
        font-size: 1.38rem;
        font-weight: 900;
        color: #fff;
        margin: 28px 0 12px;
      }
      .article-shell h3 {
        font-size: 1.12rem;
        font-weight: 800;
        color: #fff;
        margin: 22px 0 8px;
      }
      .article-shell a:not(.hero-play-btn) {
        color: #ff9f43;
        font-weight: 800;
        text-decoration: none;
      }
      .article-shell a:not(.hero-play-btn):hover {
        text-decoration: underline;
      }
      .article-shell ul, .article-shell ol {
        padding-left: 22px;
        margin: 0 0 16px;
      }
      .article-shell li {
        margin-bottom: 8px;
      }
      .article-breadcrumbs {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 13px;
        font-weight: 700;
        color: var(--text-secondary, #9aa0b8);
        margin-bottom: 16px;
        flex-wrap: wrap;
      }
      .article-breadcrumbs a {
        color: var(--text-secondary, #9aa0b8);
        text-decoration: none;
      }
      .article-breadcrumbs a:hover {
        color: #fff;
      }
      @media (max-width: 768px) {
        .blog-wrap { padding: 12px 14px 36px; }
        .blog-hero, .article-shell { padding: 20px 18px; }
      }
`;

// 1. Build /blog/index.html
function buildBlogIndex() {
  const prefix = '../';
  const layout = getSharedLayout(prefix, 'blog');
  const cardsHtml = ARTICLES.map(
    (a) => `          <a class="blog-card" href="${a.slug}/">
            <div class="blog-card-thumb">
              <img src="../${esc(a.image)}" alt="${esc(a.title)}" width="400" height="225" loading="lazy" />
            </div>
            <div class="blog-card-body">
              <div class="blog-card-meta">
                <span><i class="fas ${a.icon}"></i> ${esc(a.category)}</span>
                <span>&middot;</span>
                <span>${esc(a.readTime)}</span>
              </div>
              <h2 class="blog-card-title">${esc(a.title)}</h2>
              <p class="blog-card-desc">${esc(a.summary)}</p>
              <span class="blog-card-cta">Read guide <i class="fas fa-arrow-right"></i></span>
            </div>
          </a>`
  ).join('\n');

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Blooket1 Unblocked Games Guides, Tier Lists & Tips',
      url: `${SITE}/blog/`,
      description:
        'Official guides, tier lists, controls walkthroughs, and stealth mode tutorials for playing unblocked games on school Chromebooks.',
      isPartOf: { '@type': 'WebSite', name: 'Blooket1', url: `${SITE}/` },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: ARTICLES.length,
        itemListElement: ARTICLES.map((a, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          url: `${SITE}/blog/${a.slug}/`,
          name: a.title
        }))
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Guides & Blog' }
      ]
    }
  ];

  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-VNGZND6VMN"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag("js", new Date());
      gtag("config", "G-VNGZND6VMN");
    </script>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5346759304245799" crossorigin="anonymous"></script>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta name="google-adsense-account" content="ca-pub-5346759304245799" />
    <meta name="theme-color" content="#0b0c13" />
    <title>Unblocked Games Guides, Tier Lists &amp; Tips | Blooket1 Blog</title>
    <meta name="description" content="Explore Blooket1's official guides, tier lists, pro tips, and Chromebook stealth tutorials for Rocket League 2D, Space Waves, Snow Rider 3D, Slope, and 120+ unblocked games." />
    <link rel="canonical" href="${SITE}/blog/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Blooket1" />
    <meta property="og:title" content="Unblocked Games Guides, Tier Lists &amp; Tips | Blooket1" />
    <meta property="og:description" content="Official game guides, Chromebook tier lists, 2-player rankings, and about:blank stealth tutorials on Blooket1." />
    <meta property="og:url" content="${SITE}/blog/" />
    <meta property="og:image" content="${SITE}/images/retrobowl.webp" />
    <link rel="icon" type="image/x-icon" href="../images/b-logo.webp" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" />
    <link rel="stylesheet" href="../styles.css?v=2.6" />
    <link rel="stylesheet" href="../stealth.css?v=2.6" />
    <link rel="stylesheet" href="../carousel.css?v=2.6" />
    <style>${BLOG_STYLES}</style>
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
  </head>
  <body>
${layout.header}
    <main class="cg-main-canvas" id="main-content">
      <div class="blog-wrap">
        <nav class="article-breadcrumbs" aria-label="Breadcrumb">
          <a href="../">Home</a>
          <i class="fas fa-chevron-right" aria-hidden="true"></i>
          <span aria-current="page">Guides &amp; Blog</span>
        </nav>

        <section class="blog-hero">
          <span class="blog-pill"><i class="fas fa-book-open"></i> Official Strategy Hub</span>
          <h1>Unblocked Games Guides, Tier Lists &amp; Tips</h1>
          <p>Deep-dive walkthroughs, high-score strategies, Chromebook performance tips, and official backup mirror guides for your favorite browser games on Blooket1.</p>
        </section>

        <section class="blog-grid" aria-label="Guides and articles">
${cardsHtml}
        </section>

        <section class="home-seo-guide">
          <h2>Looking for the Platform Changelog?</h2>
          <p>Want to see the latest games added to Blooket1, bug fixes, and v2.6 platform features? Visit our <a href="../updates/">Updates &amp; Changelog</a> page or jump straight back to the <a href="../">127+ Unblocked Games Catalog</a>.</p>
        </section>
      </div>
${layout.footer}
    </main>
${layout.modal}
    <script src="../script.js?v=2.6"></script>
    <script src="../stealth.js?v=2.6"></script>
  </body>
</html>
`;

  fs.writeFileSync(path.join(BLOG_DIR, 'index.html'), html, 'utf8');
  console.log('Built blog/index.html');
}

// 2. Build each individual article page: /blog/<slug>/index.html
function buildArticles() {
  const prefix = '../../';
  const layout = getSharedLayout(prefix, 'blog');

  for (const article of ARTICLES) {
    const dir = path.join(BLOG_DIR, article.slug);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const otherArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);
    const relatedCards = otherArticles
      .map(
        (a) => `          <a class="blog-card" href="../${a.slug}/">
            <div class="blog-card-thumb">
              <img src="../../${esc(a.image)}" alt="${esc(a.title)}" width="400" height="225" loading="lazy" />
            </div>
            <div class="blog-card-body">
              <div class="blog-card-meta">
                <span><i class="fas ${a.icon}"></i> ${esc(a.category)}</span>
                <span>&middot;</span>
                <span>${esc(a.readTime)}</span>
              </div>
              <h3 class="blog-card-title">${esc(a.title)}</h3>
              <p class="blog-card-desc">${esc(a.summary)}</p>
              <span class="blog-card-cta">Read guide <i class="fas fa-arrow-right"></i></span>
            </div>
          </a>`
      )
      .join('\n');

    const faqHtml = article.faqs
      .map(
        (f) => `            <div class="home-faq-item">
              <h4>${esc(f.q)}</h4>
              <p>${esc(f.a)}</p>
            </div>`
      )
      .join('\n');

    const schema = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        image: `${SITE}/${encodeURI(article.image)}`,
        datePublished: article.date,
        dateModified: article.date,
        author: { '@type': 'Organization', name: 'Blooket1', url: `${SITE}/` },
        publisher: {
          '@type': 'Organization',
          name: 'Blooket1',
          logo: { '@type': 'ImageObject', url: `${SITE}/images/b-logo.webp` }
        },
        mainEntityOfPage: `${SITE}/blog/${article.slug}/`
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a }
        }))
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Guides & Blog', item: `${SITE}/blog/` },
          { '@type': 'ListItem', position: 3, name: article.title }
        ]
      }
    ];

    const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-VNGZND6VMN"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag("js", new Date());
      gtag("config", "G-VNGZND6VMN");
    </script>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5346759304245799" crossorigin="anonymous"></script>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta name="google-adsense-account" content="ca-pub-5346759304245799" />
    <meta name="theme-color" content="#0b0c13" />
    <title>${esc(article.metaTitle)}</title>
    <meta name="description" content="${esc(article.description)}" />
    <link rel="canonical" href="${SITE}/blog/${article.slug}/" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Blooket1" />
    <meta property="og:title" content="${esc(article.metaTitle)}" />
    <meta property="og:description" content="${esc(article.description)}" />
    <meta property="og:url" content="${SITE}/blog/${article.slug}/" />
    <meta property="og:image" content="${SITE}/${encodeURI(article.image)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" type="image/x-icon" href="../../images/b-logo.webp" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" />
    <link rel="stylesheet" href="../../styles.css?v=2.6" />
    <link rel="stylesheet" href="../../stealth.css?v=2.6" />
    <link rel="stylesheet" href="../../carousel.css?v=2.6" />
    <style>${BLOG_STYLES}</style>
    <script type="application/ld+json">${JSON.stringify(schema)}</script>
  </head>
  <body>
${layout.header}
    <main class="cg-main-canvas" id="main-content">
      <div class="blog-wrap">
        <nav class="article-breadcrumbs" aria-label="Breadcrumb">
          <a href="../../">Home</a>
          <i class="fas fa-chevron-right" aria-hidden="true"></i>
          <a href="../">Guides &amp; Blog</a>
          <i class="fas fa-chevron-right" aria-hidden="true"></i>
          <span aria-current="page">${esc(article.title)}</span>
        </nav>

        <article class="article-shell">
          <span class="blog-pill"><i class="fas ${article.icon}"></i> ${esc(article.category)} &middot; ${esc(article.readTime)}</span>
          <h1>${esc(article.title)}</h1>
          ${article.body}

          <h2>Frequently Asked Questions</h2>
          <div class="home-faq-grid">
${faqHtml}
          </div>
        </article>

        <h2 style="color:#fff;font-weight:900;margin:24px 0 14px;">More Unblocked Gaming Guides</h2>
        <div class="blog-grid">
${relatedCards}
        </div>
      </div>
${layout.footer}
    </main>
${layout.modal}
    <script src="../../script.js?v=2.6"></script>
    <script src="../../stealth.js?v=2.6"></script>
  </body>
</html>
`;

    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
    console.log(`Built blog/${article.slug}/index.html`);
  }
}

buildBlogIndex();
buildArticles();
module.exports = { ARTICLES };
