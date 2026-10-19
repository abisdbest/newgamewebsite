/**
 * ============================================================================
 * BLOOKET1 - FULL SITE SEO, INTERNAL LINKING, AI (LLMs.txt), & SITEMAP BUILDER
 * ============================================================================
 * Run:
 *   node tools/enhance-all-seo.js
 *
 * What this script does:
 * 1. Pre-renders 8 static related game cards into #side-grid ("More games") and
 *    8 into #side-grid-quick ("Up next") across all 127 /play/<game>/index.html
 *    pages (~2,032 static internal links so Googlebot crawls every game).
 * 2. Adds FAQPage JSON-LD schema into <head> on all 127 /play/ pages and adds a
 *    4th FAQ item in #play-about-body covering unblocked play, Stealth Mode,
 *    about:blank, and official mirror links.
 * 3. Optimizes <title>, <h1>, <h2>, and meta description on high-impression
 *    search queries from Google Search Console (Rocket League 2D Unblocked,
 *    Snow Rider 3D Unblocked, Ice Dodo Unblocked, Space Waves Unblocked,
 *    Brotato Unblocked, Slope Unblocked, Retro Bowl Unblocked, etc.).
 * 4. Updates sidebar and footer navigation across all /play/ pages to include
 *    "Guides & Blog" (/blog/) and "Mirrors & alt links" (openSettingsModal('mirrors')).
 * 5. Updates index.html:
 *    - Adds .home-top-bar with primary <h1> ("Blooket1 Unblocked Games — Play 127+ Free School Chromebook Games")
 *      and quick-action pills for Mirrors, about:blank, Guides, and Top 10.
 *    - Changes static hero slide title from <h1> to <h2> so the page has a single clean <h1>.
 *    - Adds homepage AdSense leaderboard slot (.home-ad-banner) below the hero showcase.
 *    - Pre-renders all static HTML game rails into #all-game-carousels (Top 10, New, Action,
 *      Driving, Puzzle, Sports, 2 Player, Retro, Clicker, Tools) so Googlebot sees all 127 games
 *      in the initial HTML response before JS runs.
 *    - Adds the comprehensive .home-seo-guide + 8-question FAQ block above the footer.
 *    - Injects WebSite, Organization, ItemList, and FAQPage JSON-LD schemas into index.html <head>.
 * 6. Generates /llms.txt and /llms-full.txt for AI chatbots (ChatGPT, Perplexity, Claude, Gemini).
 * 7. Updates /robots.txt with explicit Allow rules for AI search bots and /sitemap.xml with all
 *    148 canonical URLs (homepage, /blog/ + 6 guides, /updates/, /chat/, /soundboard/, 12 categories,
 *    127 play pages, and info pages), and removes stale complete_sitemap.xml.
 * ============================================================================
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const SITE = 'https://blooket1.com';
const TODAY = new Date().toISOString().slice(0, 10);

const rawGames = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'games.json'), 'utf8'));
const games = rawGames.map((obj) => {
  const name = Object.keys(obj)[0];
  return { name, ...obj[name] };
});

const POPULARITY = [
  'slope', '1v1.lol', 'retro bowl', 'cookie clicker', 'geometry dash', 'subway surfers',
  'basket random', 'space waves', 'monkey mart', 'minecraft', 'temple run 2', 'flappy bird',
  'rooftop snipers', 'snow rider 3d', 'getaway shootout', 'bitlife', 'crossy road', 'cut the rope',
  'doodle jump', 'fireboy and watergirl', 'happy wheels', 'capybara clicker', 'block blast', '2048',
  'duck life 4', 'eggy car', 'paperio', 'moto x3m pool party', 'mr mine', 'boxing random',
  'idle dice', 'ragdoll archers', 'hextris', 'g switch 3', 'pac-man', 'tetris', 'raft wars',
  'escape road', 'traffic racer', 'pin ball', 'soccer random', 'tank game', 'star wars',
  'solitare', 'mine sweeper', 'hard mario', 'alien hominid', 'hobo', 'there is no game',
  'universal paperclip', 'rocket league', 'ice dodo', 'brotato'
];

const CATEGORY_MAP = {
  'Action':          { slug: 'action',    title: 'Action',    icon: 'fas fa-bolt' },
  'Addictive Games': { slug: 'addictive', title: 'Addictive', icon: 'fas fa-infinity' },
  'Driving':         { slug: 'driving',   title: 'Driving',   icon: 'fas fa-car-side' },
  'Puzzle':          { slug: 'puzzle',    title: 'Puzzle',    icon: 'fas fa-puzzle-piece' },
  'Sports':          { slug: 'sports',    title: 'Sports',    icon: 'fas fa-basketball' },
  '2-Player':        { slug: '2-player',  title: '2 Player',  icon: 'fas fa-user-group' },
  'Retro Games':     { slug: 'retro',     title: 'Retro',     icon: 'fas fa-ghost' },
  'Clicker':         { slug: 'clicker',   title: 'Clicker',   icon: 'fas fa-arrow-pointer' },
  'Tools':           { slug: 'tools',     title: 'Tools',     icon: 'fas fa-toolbox' }
};

// High-opportunity non-branded SEO overrides based on Google Search Console data
const SEO_OVERRIDES = {
  'rocket league': {
    title: 'Rocket League 2D Unblocked - Play Free Car Soccer Online | Blooket1',
    h1: 'Rocket League 2D Unblocked',
    metaDesc: 'Play Rocket League 2D Unblocked free in your browser! Boost, double-jump, flip, and score aerial goals in fast-paced 60 FPS car soccer on school Chromebooks with no downloads.'
  },
  'snow rider 3d': {
    title: 'Snow Rider 3D Unblocked - Play Free Toboggan Runner Online | Blooket1',
    h1: 'Snow Rider 3D Unblocked',
    metaDesc: 'Play Snow Rider 3D Unblocked free online! Steer your sled down snowy mountains, dodge giant snowballs, jump icy cliffs, and unlock new toboggans on school Chromebooks.'
  },
  'ice dodo': {
    title: 'Ice Dodo Unblocked - Play 3D Obstacle Course Game Online | Blooket1',
    h1: 'Ice Dodo Unblocked',
    metaDesc: 'Play Ice Dodo Unblocked free in your browser! Master dozens of neon 3D parkour maps and low-gravity obstacle courses at 60 FPS on any school Chromebook with zero downloads.'
  },
  'space waves': {
    title: 'Space Waves Unblocked - Play 33 Wave Levels Free Online | Blooket1',
    h1: 'Space Waves Unblocked',
    metaDesc: 'Play Space Waves Unblocked free online! Guide your zig-zagging wave arrow through 33 Geometry Dash-style neon obstacle corridors on school Chromebooks with no lag.'
  },
  'brotato': {
    title: 'Brotato Unblocked - Play Arena Roguelike Survivor Online | Blooket1',
    h1: 'Brotato Unblocked',
    metaDesc: 'Play Brotato Unblocked free in your browser! Wield up to 6 weapons at once, survive waves of alien hordes, and build overpowered roguelike loadouts on school Chromebooks.'
  },
  'slope': {
    title: 'Slope Unblocked - Play 3D Neon Speed Runner Online | Blooket1',
    h1: 'Slope Unblocked',
    metaDesc: 'Play Slope Unblocked at 60 FPS in your browser! Roll down a neon 3D cyberspace course, dodge red walls, hit speed boosters, and chase high scores on school Chromebooks.'
  },
  'retro bowl': {
    title: 'Retro Bowl Unblocked - Play Free Football Franchise Game | Blooket1',
    h1: 'Retro Bowl Unblocked',
    metaDesc: 'Play Retro Bowl Unblocked free online! Manage your football roster, draft star players, call plays, and throw touchdown passes in the #1 unblocked school sports game.'
  },
  'escape road': {
    title: 'Escape Road Unblocked - Play Police Chase Driving Game | Blooket1',
    h1: 'Escape Road Unblocked',
    metaDesc: 'Play Escape Road Unblocked free in your browser! Drift through city streets, dodge police roadblocks, SWAT trucks, and helicopters on school Chromebooks with no downloads.'
  },
  'block blast': {
    title: 'Block Blast Unblocked - Play Free Block Puzzle Online | Blooket1',
    h1: 'Block Blast Unblocked',
    metaDesc: 'Play Block Blast Unblocked free online! Drag and fit colorful tetromino blocks onto the 8x8 grid, clear combo lines, and beat your high score on school Chromebooks.'
  },
  'cookie clicker': {
    title: 'Cookie Clicker Unblocked - Play Free Idle Game Online | Blooket1',
    h1: 'Cookie Clicker Unblocked',
    metaDesc: 'Play Cookie Clicker Unblocked free in your browser! Bake trillions of cookies, unlock Grandmas and portals, and auto-save your empire on any school Chromebook.'
  },
  'minecraft': {
    title: 'Minecraft Unblocked (Eaglercraft) - Play Free in Browser | Blooket1',
    h1: 'Minecraft Unblocked',
    metaDesc: 'Play Minecraft Unblocked free in your web browser! Mine, craft, build worlds, and survive in classic 3D sandbox gameplay on school Chromebooks with zero downloads.'
  },
  'geometry dash': {
    title: 'Geometry Dash Unblocked - Play Free Rhythm Platformer | Blooket1',
    h1: 'Geometry Dash Unblocked',
    metaDesc: 'Play Geometry Dash Unblocked free online! Jump, fly, and flip through spiked rhythm obstacle courses in sync with the music on school Chromebooks.'
  }
};

function esc(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function toTitleCase(str) {
  return (str || '').replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase());
}

function urlPath(p) {
  return (p || '').split('/').map(encodeURIComponent).join('/');
}

function rankOf(g) {
  const idx = POPULARITY.indexOf(g.name.toLowerCase().trim());
  return idx === -1 ? POPULARITY.length : idx;
}

function sortGames(list) {
  return [...list].sort(
    (a, b) =>
      rankOf(a) - rankOf(b) ||
      new Date(b['date added'] || 0) - new Date(a['date added'] || 0) ||
      a.name.localeCompare(b.name)
  );
}

function categoriesOf(g) {
  return (g['game categories'] || []).filter((c) => c !== 'Popular Games');
}

function primaryCategoryKey(g) {
  const cats = categoriesOf(g);
  return cats.find((c) => c !== 'Addictive Games') || cats[0] || 'Action';
}

function primaryCategoryTitle(g) {
  const key = primaryCategoryKey(g);
  return CATEGORY_MAP[key]?.title || 'Arcade';
}

function renderCardHtml(g, prefix, options = {}) {
  const href = prefix + urlPath(g['game link']);
  const img = prefix + urlPath(g['game image']);
  const name = toTitleCase(g.name);
  const chip = primaryCategoryTitle(g);
  const loadingAttr = options.eager ? '' : ' loading="lazy"';
  const rankBadge =
    typeof options.rank === 'number'
      ? `<span class="badge-rank${options.rank <= 3 ? ` is-top is-top-${options.rank}` : ''}">${options.rank}</span>`
      : '';

  return `<div class="game-item" data-game-name="${esc(g.name)}"><div class="game-thumb-wrap"><img src="${esc(img)}" alt="${esc(name)}" width="300" height="200" decoding="async" class="is-loaded"${loadingAttr} />${rankBadge}<div class="game-card-overlay"><span class="game-name">${esc(name)}</span><span class="game-meta"><span class="game-chip">${esc(chip)}</span></span></div></div><a class="full-card-link" href="${esc(href)}" aria-label="Play ${esc(name)}"></a><button type="button" class="favorite-btn" data-game="${esc(g.name)}" aria-label="Favorite ${esc(name)}"><i class="far fa-heart"></i></button></div>`;
}

function getRelatedPicks(currentGame, count = 8) {
  const others = games.filter((g) => g.name.toLowerCase() !== currentGame.name.toLowerCase());
  const myCats = new Set(categoriesOf(currentGame).filter((c) => c !== 'Addictive Games'));
  const overlap = (g) => categoriesOf(g).filter((c) => myCats.has(c)).length;

  const related = others
    .filter((g) => overlap(g) > 0)
    .sort((a, b) => overlap(b) - overlap(a) || rankOf(a) - rankOf(b));
  const popular = sortGames(others);

  const picks = [];
  const seen = new Set();
  const take = (list, n) => {
    for (const g of list) {
      if (picks.length >= n) break;
      if (!seen.has(g.name)) {
        seen.add(g.name);
        picks.push(g);
      }
    }
  };
  take(related.slice(0, 6), 6);
  take(popular, count);
  take(related, count);
  return picks;
}

// ============================================================================
// 1. ENHANCE ALL 127 /play/<game>/index.html PAGES
// ============================================================================
function enhancePlayPages() {
  let updatedCount = 0;

  for (const g of games) {
    const linkRel = g['game link']; // e.g. "play/rocket league/"
    const playFile = path.join(ROOT_DIR, linkRel, 'index.html');
    if (!fs.existsSync(playFile)) continue;

    let html = fs.readFileSync(playFile, 'utf8');
    const gameKey = g.name.toLowerCase().trim();
    const displayName = toTitleCase(g.name);
    const override = SEO_OVERRIDES[gameKey];

    // 1A. Pre-render 8 related game cards into #side-grid and #side-grid-quick
    const picks = getRelatedPicks(g, 8);
    const sideCardsHtml = picks.map((p, i) => renderCardHtml(p, '../../', { eager: i < 4 })).join('');
    const quickCardsHtml = picks.map((p) => renderCardHtml(p, '../../', { eager: false })).join('');

    html = html.replace(
      /<div class="side-grid" id="side-grid">[\s\S]*?<\/div>\s*<\/aside>/,
      `<div class="side-grid" id="side-grid">${sideCardsHtml}</div>\n        </aside>`
    );

    html = html.replace(
      /<div class="side-grid side-grid-quick" id="side-grid-quick">[\s\S]*?<\/div>\s*<\/section>/,
      `<div class="side-grid side-grid-quick" id="side-grid-quick">${quickCardsHtml}</div>\n          </section>`
    );

    // 1B. Apply SEO title / H1 / Meta Description overrides or ensure "Unblocked" is clear
    if (override) {
      html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(override.title)}</title>`);
      html = html.replace(
        /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
        `<meta name="description" content="${esc(override.metaDesc)}" />`
      );
      html = html.replace(
        /<meta property="og:title" content="[^"]*" \/>/,
        `<meta property="og:title" content="${esc(override.title)}" />`
      );
      html = html.replace(
        /<h1 class="player-title">[\s\S]*?<\/h1>/,
        `<h1 class="player-title">${esc(override.h1)}</h1>`
      );
    }

    // 1C. Add 4th FAQ question in #play-about-body about playing unblocked / mirror links / Stealth Mode
    const mirrorFaqMarker = 'How do I play if my school blocks this page?';
    if (!html.includes(mirrorFaqMarker)) {
      const mirrorFaqHtml = `\n        <p><b>How do I play if my school blocks this page?</b><br />Click the <b>Stealth mode</b> button in the top navigation bar to disguise your browser tab as Google Docs, Google Drive, or Classroom, launch ${esc(displayName)} inside an <code>about:blank</code> tab, or switch to one of our official alternate links like <code>blooket1.pages.dev</code> or <code>educational.blooket1.com</code>. You can also check our <a href="../../blog/">Guides &amp; Tier Lists</a> for more tips.</p>`;
      html = html.replace(
        /(<p><b>Is my game progress saved automatically\?<\/b>[\s\S]*?<\/p>)/,
        `$1${mirrorFaqHtml}`
      );
    }

    // 1D. Inject FAQPage JSON-LD schema into the existing <script type="application/ld+json"> array
    if (!html.includes('"@type": "FAQPage"') && !html.includes('"@type":"FAQPage"')) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: `Is ${override ? override.h1 : displayName} free to play unblocked?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes, ${displayName} is 100% free to play unblocked directly in your web browser on Blooket1 (${SITE}/${urlPath(linkRel)}) with no downloads, plugins, or sign-ups required.`
            }
          },
          {
            '@type': 'Question',
            name: `Does ${displayName} run well on school Chromebooks?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Yes! ${displayName} uses hardware-accelerated HTML5 and WebGL rendering designed to run smoothly at 60 FPS on managed school Chromebooks, Windows laptops, MacBooks, and tablets.`
            }
          },
          {
            '@type': 'Question',
            name: `How do I play ${displayName} unblocked using Stealth Mode or mirror links?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Click the Stealth Mode button in the top header on Blooket1 to disguise your tab as Google Docs or Classroom, open ${displayName} in an about:blank tab, or use official mirrors like blooket1.pages.dev and educational.blooket1.com.`
            }
          }
        ]
      };

      html = html.replace(
        /<script type="application\/ld\+json">\s*(\[[\s\S]*?\])\s*<\/script>/,
        (match, jsonStr) => {
          try {
            const arr = JSON.parse(jsonStr);
            if (Array.isArray(arr) && !arr.some((item) => item['@type'] === 'FAQPage')) {
              arr.push(faqSchema);
              return `<script type="application/ld+json">\n${JSON.stringify(arr, null, 2).replace(/^/gm, '      ')}\n    </script>`;
            }
          } catch (e) {}
          return match;
        }
      );
    }

    // 1E. Update sidebar and footer links to include Guides & Blog (/blog/) and Mirrors & alt links
    if (!html.includes('href="../../blog/"')) {
      html = html.replace(
        /<a href="\.\.\/\.\.\/updates\/" class="cg-nav-item" data-tooltip="Updates">/,
        `<a href="../../blog/" class="cg-nav-item" data-tooltip="Guides &amp; Blog">\n          <span class="cg-nav-icon"><i class="fas fa-book-open"></i></span>\n          <span class="cg-nav-label">Guides &amp; Blog</span>\n        </a>\n        <a href="../../updates/" class="cg-nav-item" data-tooltip="Updates">`
      );
    }

    if (!html.includes("openSettingsModal('mirrors')")) {
      html = html.replace(
        /<li><a href="#" onclick="openSettingsModal\('cloak'\); return false;">Tab cloaking<\/a><\/li>/,
        `<li><a href="#" onclick="openSettingsModal('mirrors'); return false;">Mirrors &amp; alt links</a></li>\n              <li><a href="#" onclick="openSettingsModal('cloak'); return false;">Tab cloaking</a></li>`
      );
    }

    if (!html.includes('<li><a href="../../blog/">Guides &amp; blog</a></li>')) {
      html = html.replace(
        /<li><a href="\.\.\/\.\.\/updates\/">Updates<\/a><\/li>/,
        `<li><a href="../../blog/">Guides &amp; blog</a></li>\n              <li><a href="../../updates/">Updates</a></li>`
      );
    }

    fs.writeFileSync(playFile, html, 'utf8');
    updatedCount++;
  }

  console.log(`Enhanced ${updatedCount} /play/ pages with static related cards, FAQPage schema, and SEO metadata.`);
}

// ============================================================================
// 2. ENHANCE HOMEPAGE (index.html)
// ============================================================================
function buildStaticHomepageRails() {
  const popular = sortGames(games);
  const top10 = popular.slice(0, 10);
  const newest = [...games]
    .sort((a, b) => new Date(b['date added'] || 0) - new Date(a['date added'] || 0))
    .slice(0, 16);

  const makeSection = (id, icon, titleText, list, viewAllHref, ranked = false) => {
    const cards = list
      .map((g, i) => renderCardHtml(g, '', { eager: ranked && i < 6, rank: ranked ? i + 1 : undefined }))
      .join('');
    const viewAll = viewAllHref
      ? `<a class="view-all-btn" href="${esc(viewAllHref)}"><span>View all</span><i class="fas fa-chevron-right"></i></a>`
      : '';
    return `            <section class="game-category-section" id="${esc(id)}">
              <div class="category-header-wrap">
                <h2 class="category-title"><i class="${esc(icon)}"></i><span>${esc(titleText)}</span></h2>
                ${viewAll}
              </div>
              <div class="game-carousel-container">
                <button type="button" class="carousel-arrow carousel-arrow-left" aria-label="Scroll left"><i class="fas fa-chevron-left"></i></button>
                <div class="game-carousel">${cards}</div>
                <button type="button" class="carousel-arrow carousel-arrow-right" aria-label="Scroll right"><i class="fas fa-chevron-right"></i></button>
              </div>
            </section>`;
  };

  const makeAd = (id) => `            <div class="home-ad-banner ad-unit" id="${id}" aria-label="Advertisement">
              <span class="ad-label">Advertisement</span>
              <ins class="adsbygoogle" data-ad-key="leaderboard"></ins>
            </div>`;

  const sections = [];
  sections.push(makeSection('category-popular', 'fas fa-trophy', 'Top 10 this week', top10, 'category/popular/', true));
  sections.push(makeSection('category-new', 'fas fa-wand-magic-sparkles', 'New games', newest, 'category/new/', false));
  sections.push(makeAd('home-ad-1'));

  for (const [catKey, cfg] of Object.entries(CATEGORY_MAP)) {
    const catGames = sortGames(games.filter((g) => (g['game categories'] || []).includes(catKey)));
    if (catGames.length > 0) {
      sections.push(
        makeSection(`category-${cfg.slug}`, cfg.icon, cfg.title, catGames, `category/${cfg.slug}/`, false)
      );
      if (cfg.slug === 'puzzle') {
        sections.push(makeAd('home-ad-2'));
      }
    }
  }

  return sections.join('\n');
}

function enhanceHomepage() {
  const indexFile = path.join(ROOT_DIR, 'index.html');
  let html = fs.readFileSync(indexFile, 'utf8');

  // 2A. Update <title> and <meta name="description">
  html = html.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>Blooket1 Unblocked Games — Play 127+ Free School Chromebook Games Online</title>`
  );
  html = html.replace(
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta name="description" content="Play 127+ free unblocked games for school Chromebooks on Blooket1! Instant 60 FPS browser play for Retro Bowl, Slope, Rocket League 2D, Snow Rider 3D, Space Waves, Ice Dodo, 1v1.LOL, and more with Stealth Mode tab cloaking and about:blank support." />`
  );

  // 2B. Replace JSON-LD on index.html with rich WebSite + Organization + ItemList + FAQPage schema
  const popularTop25 = sortGames(games).slice(0, 25);
  const homeSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Blooket1 Unblocked Games',
      alternateName: ['Blooket1', 'Blooket 1', 'Blooket1 Games', 'blooket1.com', 'blooket1.pages.dev'],
      url: 'https://blooket1.com/',
      description:
        'Blooket1 is a free unblocked games platform featuring 127+ HTML5 and WebGL browser games optimized for 60 FPS performance on school Chromebooks, with built-in Stealth Mode tab cloaking, about:blank launcher, panic key, and official mirror links.',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://blooket1.com/?q={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Blooket1',
      url: 'https://blooket1.com/',
      logo: 'https://blooket1.com/images/b-logo.webp',
      email: 'support@blooket1.com',
      sameAs: [
        'https://blooket1.com/',
        'https://blooket1.pages.dev/',
        'https://educational.blooket1.com/'
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Top Unblocked Games for School Chromebooks on Blooket1',
      numberOfItems: popularTop25.length,
      itemListElement: popularTop25.map((g, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: toTitleCase(g.name),
        url: `${SITE}/${urlPath(g['game link'])}`
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Blooket1 Unblocked Games?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Blooket1 (https://blooket1.com) is a free browser gaming site offering 127+ unblocked HTML5 and WebGL games built to run at 60 FPS on school Chromebooks and laptops with zero downloads, zero installs, and no sign-ups.'
          }
        },
        {
          '@type': 'Question',
          name: 'What are the most popular unblocked games on Blooket1?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The most played unblocked games on Blooket1 include Slope, Retro Bowl, 1v1.LOL, Rocket League 2D, Snow Rider 3D, Space Waves, Ice Dodo, Cookie Clicker, Brotato, Geometry Dash, Block Blast, Escape Road, Basket Random, and Minecraft (Eaglercraft).'
          }
        },
        {
          '@type': 'Question',
          name: 'What are the official Blooket1 mirror links and alternate URLs if my school blocks blooket1.com?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Official Blooket1 mirror links and educational paths include https://blooket1.com, https://blooket1.pages.dev, https://educational.blooket1.com, https://blooket1.com/drive.google.com/, https://blooket1.com/classroom.google.com/, https://blooket1.com/docs.google.com/, https://blooket1.com/educational/, and https://blooket1.com/school/.'
          }
        },
        {
          '@type': 'Question',
          name: 'How does Blooket1 Stealth Mode and about:blank tab cloaking work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Clicking Stealth Mode in the top header lets you disguise the browser tab title and favicon as Google Docs, Google Drive, Google Classroom, or Khan Academy, set a custom 1-key Panic Key (default backtick `) to instantly jump to Google Classroom, or open the entire site inside an about:blank tab.'
          }
        }
      ]
    }
  ];

  html = html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">\n${JSON.stringify(homeSchema, null, 2).replace(/^/gm, '      ')}\n    </script>`
  );

  // 2C. Add Guides & Blog to homepage sidebar
  if (!html.includes('href="blog/"')) {
    html = html.replace(
      /<a href="updates\/" class="cg-nav-item" data-tooltip="Updates">/,
      `<a href="blog/" class="cg-nav-item" data-tooltip="Guides &amp; Blog">\n          <span class="cg-nav-icon"><i class="fas fa-book-open"></i></span>\n          <span class="cg-nav-label">Guides &amp; Blog</span>\n        </a>\n        <a href="updates/" class="cg-nav-item" data-tooltip="Updates">`
    );
  }

  // 2D. Add .home-top-bar with primary <h1> above #featured-section, change static hero <h1> to <h2>, and add .home-ad-banner below hero
  const homeTopBarHtml = `          <div class="home-top-bar">
            <h1 class="home-main-h1"><i class="fas fa-gamepad"></i> <strong>Blooket1 Unblocked Games</strong> &mdash; Play 127+ Free School Chromebook Games</h1>
            <div class="home-quick-pills">
              <button type="button" class="home-quick-pill" onclick="openSettingsModal('mirrors')"><i class="fas fa-link"></i> Mirrors &amp; Alt Links</button>
              <button type="button" class="home-quick-pill" onclick="openAboutBlankCloak()"><i class="fas fa-up-right-from-square"></i> Open in about:blank</button>
              <a href="blog/" class="home-quick-pill"><i class="fas fa-book-open"></i> Guides &amp; Tier Lists</a>
              <a href="category/popular/" class="home-quick-pill"><i class="fas fa-fire"></i> Top 10 Trending</a>
            </div>
          </div>\n`;

  if (!html.includes('class="home-top-bar"')) {
    html = html.replace(
      /(\s*<!-- Hero spotlight:[\s\S]*?<section class="hero-showcase")/,
      `\n${homeTopBarHtml}$1`
    );
  }

  html = html.replace(/<h1 class="hero-title">Retro Bowl<\/h1>/, `<h2 class="hero-title">Retro Bowl</h2>`);

  // Remove any old top home-ad-banner above search results
  html = html.replace(/\s*<div class="home-ad-banner"[^>]*>[\s\S]*?<\/div>\s*(?=<!-- Live search results -->)/, '\n\n          ');

  // 2E. Pre-render all static HTML game rails into #all-game-carousels
  const staticRailsHtml = buildStaticHomepageRails();
  html = html.replace(
    /<div class="all-game-carousels" id="all-game-carousels"[^>]*>[\s\S]*?<\/div>\s*(?:<div class="home-ad-banner[^"]*"[^>]*>[\s\S]*?<\/div>\s*)?(?=<section class="home-seo-guide"|<footer class="app-footer")/,
    `<div class="all-game-carousels" id="all-game-carousels" aria-busy="false">\n${staticRailsHtml}\n          </div>\n\n          `
  );

  // 2F. Add comprehensive .home-seo-guide + FAQ block above <footer class="app-footer">
  const seoGuideHtml = `<section class="home-seo-guide" aria-label="About Blooket1 Unblocked Games">
            <h2>Play 127+ Free Unblocked Games for School Chromebooks on Blooket1</h2>
            <p>Welcome to <strong>Blooket1</strong> (<a href="https://blooket1.com/">blooket1.com</a> &amp; <a href="https://blooket1.pages.dev/">blooket1.pages.dev</a>), the fastest hub for <strong>free unblocked games for school</strong>. Every game in our library runs directly inside your web browser using lightweight HTML5 Canvas and WebGL 2.0 rendering&mdash;meaning zero downloads, zero browser extensions, no sign-ups, and smooth 60 FPS performance even on managed school Chromebooks with 4 GB of RAM.</p>
            <p>Whether you have five minutes between classes or a free study period, jump straight into community favorites like <a href="play/slope/">Slope Unblocked</a>, <a href="play/retro%20bowl/">Retro Bowl</a>, <a href="play/rocket%20league/">Rocket League 2D Unblocked</a>, <a href="play/snow%20rider%203d/">Snow Rider 3D</a>, <a href="play/space%20waves/">Space Waves</a>, <a href="play/ice%20dodo/">Ice Dodo</a>, <a href="play/brotato/">Brotato</a>, <a href="play/1v1.lol/">1v1.LOL</a>, <a href="play/escape%20road/">Escape Road</a>, <a href="play/block%20blast/">Block Blast</a>, <a href="play/cookie%20clicker/">Cookie Clicker</a>, and <a href="play/minecraft/">Minecraft (Eaglercraft)</a>. Explore our <a href="blog/">Unblocked Games Guides &amp; Tier Lists</a> for controls, strategies, and walkthroughs.</p>

            <h3>Browse Unblocked Games by Category &amp; Genre</h3>
            <ul>
              <li><strong><a href="category/action/">Action &amp; Platformers</a>:</strong> High-speed reflex runners and arena survival hits like <a href="play/slope/">Slope</a>, <a href="play/space%20waves/">Space Waves</a>, <a href="play/geometry%20dash/">Geometry Dash</a>, <a href="play/brotato/">Brotato</a>, and <a href="play/1v1.lol/">1v1.LOL</a>.</li>
              <li><strong><a href="category/driving/">Driving &amp; Racing</a>:</strong> 3D sledding, stunt bikes, and police chases including <a href="play/snow%20rider%203d/">Snow Rider 3D</a>, <a href="play/escape%20road/">Escape Road</a>, <a href="play/ice%20dodo/">Ice Dodo</a>, <a href="play/polytrack/">Polytrack</a>, and <a href="play/moto%20x3m%20pool%20party/">Moto X3M</a>.</li>
              <li><strong><a href="category/sports/">Sports &amp; Car Soccer</a>:</strong> Compete in <a href="play/retro%20bowl/">Retro Bowl</a>, <a href="play/rocket%20league/">Rocket League 2D</a>, <a href="play/basket%20random/">Basket Random</a>, <a href="play/soccer%20random/">Soccer Random</a>, and <a href="play/boxing%20random/">Boxing Random</a>.</li>
              <li><strong><a href="category/2-player/">2 Player Same-Keyboard Games</a>:</strong> Share one Chromebook keyboard in <a href="play/rooftop%20snipers/">Rooftop Snipers</a>, <a href="play/getaway%20shootout/">Getaway Shootout</a>, <a href="play/fireboy%20and%20watergirl/">Fireboy and Watergirl</a>, and <a href="play/basket%20random/">Basket Random</a>.</li>
              <li><strong><a href="category/puzzle/">Puzzle &amp; Logic</a>:</strong> Relax or train your brain with <a href="play/block%20blast/">Block Blast</a>, <a href="play/2048/">2048</a>, <a href="play/tetris/">Tetris</a>, <a href="play/wordle/">Wordle</a>, and <a href="play/cut%20the%20rope/">Cut the Rope</a>.</li>
              <li><strong><a href="category/clicker/">Idle &amp; Clicker Games</a>:</strong> Build massive auto-saving empires in <a href="play/cookie%20clicker/">Cookie Clicker</a>, <a href="play/capybara%20clicker/">Capybara Clicker</a>, <a href="play/mr%20mine/">Mr. Mine</a>, and <a href="play/monkey%20mart/">Monkey Mart</a>.</li>
            </ul>

            <h3>Frequently Asked Questions (FAQ)</h3>
            <div class="home-faq-grid">
              <div class="home-faq-item">
                <h4>How do I play if blooket1.com is blocked at my school?</h4>
                <p>Click <a href="#" onclick="openSettingsModal('mirrors'); return false;">Stealth Mode &rarr; Mirrors &amp; Alt Links</a> in the top bar to copy our official alternate domains and educational paths, including <code>blooket1.pages.dev</code>, <code>educational.blooket1.com</code>, <code>blooket1.com/drive.google.com/</code>, and <code>blooket1.com/classroom.google.com/</code>.</p>
              </div>
              <div class="home-faq-item">
                <h4>How does about:blank tab cloaking work?</h4>
                <p>Click <strong>Open in about:blank</strong> in the top bar or inside Stealth Mode. Blooket1 will open inside a clean <code>about:blank</code> tab that hides the URL from your address bar and browser history while sending the original tab to Google Classroom.</p>
              </div>
              <div class="home-faq-item">
                <h4>What is the Panic Key (Boss Key)?</h4>
                <p>Press the backtick key (<code>\`</code>) at the top-left of your keyboard at any time to immediately replace your game tab with Google Classroom, Google Docs, or Wikipedia. You can customize your Panic Key inside Stealth Mode.</p>
              </div>
              <div class="home-faq-item">
                <h4>Does my game progress save on school Chromebooks?</h4>
                <p>Yes! Your favorite games, recently played list, Stealth Mode disguise, and in-game saves (for games like Retro Bowl, Cookie Clicker, and Brotato) are stored automatically in your browser's local storage.</p>
              </div>
            </div>
          </section>\n\n          `;

  html = html.replace(
    /(?:<section class="home-seo-guide"[\s\S]*?<\/section>\s*)?<footer class="app-footer">/,
    `${seoGuideHtml}<footer class="app-footer">`
  );

  // 2G. Update homepage footer links
  html = html.replace(
    /100\+ free browser games that load instantly/,
    '127+ free HTML5 and WebGL browser games that load instantly'
  );
  if (!html.includes("openSettingsModal('mirrors')")) {
    html = html.replace(
      /<li><a href="#" onclick="openSettingsModal\('cloak'\); return false;">Tab cloaking<\/a><\/li>/,
      `<li><a href="#" onclick="openSettingsModal('mirrors'); return false;">Mirrors &amp; alt links</a></li>\n                  <li><a href="#" onclick="openSettingsModal('cloak'); return false;">Tab cloaking</a></li>`
    );
  }
  if (!html.includes('<li><a href="blog/">Guides &amp; blog</a></li>')) {
    html = html.replace(
      /<li><a href="updates\/">Updates<\/a><\/li>/,
      `<li><a href="blog/">Guides &amp; blog</a></li>\n                  <li><a href="updates/">Updates</a></li>`
    );
  }

  fs.writeFileSync(indexFile, html, 'utf8');
  console.log('Enhanced index.html with top H1 bar, AdSense banner, 127 static game cards, SEO guide, and JSON-LD schema.');
}

// ============================================================================
// 3. GENERATE /llms.txt AND /llms-full.txt FOR AI CHATBOT DISCOVERY
// ============================================================================
function buildLlmsTxt() {
  const popular = sortGames(games);
  const top30 = popular.slice(0, 30);

  const llmsShort = `# Blooket1 Unblocked Games

> Blooket1 (https://blooket1.com & https://blooket1.pages.dev) is a fast, free browser gaming platform featuring 127+ unblocked HTML5 and WebGL games engineered to run at 60 FPS on school Chromebooks, laptops, and mobile devices with zero downloads or sign-ups.

## Key Features for Students & Chromebook Users
- **127+ Instant-Play Unblocked Games**: Action, Driving, Sports, 2-Player Same-Keyboard, Puzzle, Idle Clicker, and Retro Arcade games.
- **Stealth Mode & Privacy**: Built-in Tab Cloaking (disguise tab title & icon as Google Docs, Google Drive, Google Classroom, or Khan Academy), customizable 1-key Panic Key (default \`~\` / backtick), and 1-click \`about:blank\` tab launcher.
- **Official Unblocked Mirror Links & Alternate URLs**:
  - Primary Domain: https://blooket1.com/
  - Cloudflare Pages Mirror: https://blooket1.pages.dev/
  - Educational Subdomain Mirror: https://educational.blooket1.com/
  - Google Drive Path Mirror: https://blooket1.com/drive.google.com/
  - Google Classroom Path Mirror: https://blooket1.com/classroom.google.com/
  - Google Docs Path Mirror: https://blooket1.com/docs.google.com/
  - Educational Hub Mirror: https://blooket1.com/educational/
  - School Portal Mirror: https://blooket1.com/school/
  - Academic Hub Mirror: https://blooket1.com/academic/
  - Official Google Sites Hub: https://sites.google.com/view/blooket1-ubg
  - Official Google Sites 2026 Ranking Guide: https://sites.google.com/view/best-unblocked-game-sites-2026
  - Official GitHub Pages 2026 Directory: https://abisdbest.github.io/best-unblocked-games-sites-2026/

## Main Hubs & Navigation
- [Homepage — All 127+ Unblocked Games](https://blooket1.com/)
- [Unblocked Games Guides, Tier Lists & Tips Blog](https://blooket1.com/blog/)
- [Trending / Most Popular Unblocked Games](https://blooket1.com/category/popular/)
- [Newest Unblocked Games](https://blooket1.com/category/new/)
- [Action Games Unblocked](https://blooket1.com/category/action/)
- [Driving & Racing Games Unblocked](https://blooket1.com/category/driving/)
- [Sports Games Unblocked](https://blooket1.com/category/sports/)
- [2 Player Same-Keyboard Games Unblocked](https://blooket1.com/category/2-player/)
- [Puzzle & Logic Games Unblocked](https://blooket1.com/category/puzzle/)
- [Idle & Clicker Games Unblocked](https://blooket1.com/category/clicker/)
- [Retro Arcade Games Unblocked](https://blooket1.com/category/retro/)
- [Full Catalog & Controls Reference for AI (llms-full.txt)](https://blooket1.com/llms-full.txt)

## Featured Guides & Articles
- [10 Best Unblocked Game Sites in 2026 (Tested on School Chromebooks + Working Mirrors)](https://blooket1.com/blog/best-unblocked-game-sites-2026/)
- [25 Best Unblocked Games for School Chromebooks in 2026 (Ranked Tier List)](https://blooket1.com/blog/best-unblocked-games-for-school-chromebooks/)
- [Rocket League 2D Unblocked: Controls, Aerial Tricks & How to Play at School](https://blooket1.com/blog/rocket-league-2d-unblocked-guide/)
- [15 Best 2-Player Unblocked Games to Play with Friends on One Keyboard](https://blooket1.com/blog/best-2-player-unblocked-games/)
- [Space Waves & Geometry Dash Unblocked: How to Beat Every Wave Level](https://blooket1.com/blog/space-waves-and-geometry-dash-unblocked-guide/)
- [Snow Rider 3D, Slope & Ice Dodo Unblocked: Best 3D Runner & Driving Games](https://blooket1.com/blog/snow-rider-3d-and-slope-unblocked-guide/)
- [How to Use about:blank Tab Cloaking, Panic Keys & Mirror Links on School Chromebooks](https://blooket1.com/blog/about-blank-tab-cloaking-and-mirror-links-guide/)

## Top 30 Most Played Unblocked Games on Blooket1
${top30.map((g, i) => `${i + 1}. [${toTitleCase(g.name)} Unblocked](${SITE}/${urlPath(g['game link'])}) — Categories: ${(g['game categories'] || []).join(', ')}`).join('\n')}
`;

  const llmsFull = `${llmsShort}

---

## Complete Catalog of All ${games.length} Unblocked Games on Blooket1
${popular
  .map(
    (g, i) =>
      `### ${i + 1}. ${toTitleCase(g.name)} Unblocked\n- **Play URL**: ${SITE}/${urlPath(g['game link'])}\n- **Mirror URL**: https://blooket1.pages.dev/${urlPath(g['game link'])}\n- **Categories**: ${(g['game categories'] || []).join(', ')}\n- **Platform**: HTML5 / WebGL Browser (Chromebook, Desktop, Mobile)`
  )
  .join('\n\n')}
`;

  fs.writeFileSync(path.join(ROOT_DIR, 'llms.txt'), llmsShort, 'utf8');
  fs.writeFileSync(path.join(ROOT_DIR, 'llms-full.txt'), llmsFull, 'utf8');
  console.log('Generated /llms.txt and /llms-full.txt.');
}

// ============================================================================
// 4. UPDATE /robots.txt AND /sitemap.xml (AND REMOVE STALE complete_sitemap.xml)
// ============================================================================
function buildRobotsAndSitemap() {
  const robotsTxt = `# Blooket1 Unblocked Games - https://blooket1.com
User-agent: *
Allow: /
Disallow: /source/
Disallow: /test%20stuff/
Disallow: /api/

# Explicitly welcome AI Search & Answer Engines (ChatGPT, Perplexity, Claude, Gemini)
User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

Sitemap: https://blooket1.com/sitemap.xml
`;

  fs.writeFileSync(path.join(ROOT_DIR, 'robots.txt'), robotsTxt, 'utf8');

  const urls = [];
  const addUrl = (loc, lastmod, changefreq, priority) => {
    urls.push({ loc, lastmod: lastmod || TODAY, changefreq, priority });
  };

  // Core hubs
  addUrl(`${SITE}/`, TODAY, 'daily', '1.0');
  addUrl(`${SITE}/blog/`, TODAY, 'weekly', '0.9');
  addUrl(`${SITE}/updates/`, TODAY, 'weekly', '0.8');
  addUrl(`${SITE}/chat/`, TODAY, 'weekly', '0.7');
  addUrl(`${SITE}/soundboard/`, TODAY, 'monthly', '0.7');

  // Blog guides
  const blogSlugs = [
    'best-unblocked-game-sites-2026',
    'best-unblocked-games-for-school-chromebooks',
    'rocket-league-2d-unblocked-guide',
    'best-2-player-unblocked-games',
    'space-waves-and-geometry-dash-unblocked-guide',
    'snow-rider-3d-and-slope-unblocked-guide',
    'about-blank-tab-cloaking-and-mirror-links-guide'
  ];
  for (const slug of blogSlugs) {
    addUrl(`${SITE}/blog/${slug}/`, TODAY, 'weekly', '0.85');
  }

  // Categories
  const categorySlugs = [
    'popular', 'new', 'favorites',
    'action', 'addictive', 'driving', 'puzzle', 'sports', '2-player', 'retro', 'clicker', 'tools'
  ];
  for (const slug of categorySlugs) {
    addUrl(`${SITE}/category/${slug}/`, TODAY, 'weekly', '0.85');
  }

  // All 127 /play/<game>/ pages
  for (const g of games) {
    const link = g['game link'];
    if (!link) continue;
    const added = g['date added'] && /^\d{4}-\d{2}-\d{2}$/.test(g['date added']) ? g['date added'] : TODAY;
    addUrl(`${SITE}/${urlPath(link)}`, added, 'monthly', '0.8');
  }

  // Info pages
  addUrl(`${SITE}/about%20us/`, TODAY, 'yearly', '0.4');
  addUrl(`${SITE}/contact%20us/`, TODAY, 'yearly', '0.4');
  addUrl(`${SITE}/privacy/`, TODAY, 'yearly', '0.3');
  addUrl(`${SITE}/tsandcs/`, TODAY, 'yearly', '0.3');

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls
      .map(
        (u) =>
          `  <url>\n` +
          `    <loc>${u.loc}</loc>\n` +
          `    <lastmod>${u.lastmod}</lastmod>\n` +
          `    <changefreq>${u.changefreq}</changefreq>\n` +
          `    <priority>${u.priority}</priority>\n` +
          `  </url>`
      )
      .join('\n') +
    `\n</urlset>\n`;

  fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), xml, 'utf8');

  // Remove stale complete_sitemap.xml if it exists
  const staleSitemap = path.join(ROOT_DIR, 'complete_sitemap.xml');
  if (fs.existsSync(staleSitemap)) {
    fs.unlinkSync(staleSitemap);
    console.log('Removed stale complete_sitemap.xml.');
  }

  console.log(`Updated robots.txt and generated sitemap.xml with ${urls.length} canonical URLs.`);
}

// Execute all steps
enhancePlayPages();
enhanceHomepage();
buildLlmsTxt();
buildRobotsAndSitemap();
