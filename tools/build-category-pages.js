/**
 * Builds the category landing pages: /category/<slug>/index.html
 *
 *   node tools/build-category-pages.js
 *
 * Builds canonical categories + special collections:
 *   - /category/popular/  (Trending / most played)
 *   - /category/new/      (Newest additions)
 *   - /category/favorites/ (User's bookmarks with local sync)
 *   - 9 canonical genre categories
 */
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const SITE = 'https://blooket1.com';
const R = '../../'; // relative path from /category/<slug>/ back to the root

// Order used for "most popular first" (same list the homepage falls back to)
const POPULARITY = [
  'slope', '1v1.lol', 'retro bowl', 'cookie clicker', 'geometry dash', 'subway surfers',
  'basket random', 'space waves', 'monkey mart', 'minecraft', 'temple run 2', 'flappy bird',
  'rooftop snipers', 'snow rider 3d', 'getaway shootout', 'bitlife', 'crossy road', 'cut the rope',
  'doodle jump', 'fireboy and watergirl', 'happy wheels', 'capybara clicker', 'block blast', '2048',
  'duck life 4', 'eggy car', 'paperio', 'moto x3m pool party', 'mr mine', 'boxing random',
  'idle dice', 'ragdoll archers', 'hextris', 'g switch 3', 'pac-man', 'tetris', 'raft wars',
  'escape road', 'traffic racer', 'pin ball', 'soccer random', 'tank game', 'star wars',
  'solitare', 'mine sweeper', 'hard mario', 'alien hominid', 'hobo', 'there is no game',
  'universal paperclip'
];

const CANONICAL_CATEGORIES = [
  {
    key: 'Action', slug: 'action', name: 'Action', icon: 'fa-bolt',
    intro: 'Fast reflexes, big moments and zero waiting around. These unblocked action games load straight in your browser, so you can jump into a shootout, a platformer or a ragdoll brawl in seconds.',
    more: [
      'Action games are all about timing and quick decisions. Some test pure reflexes, like dodging obstacles at top speed, while others mix in aiming, building or physics that make every round play out differently.',
      'Every game here runs on school Chromebooks and regular laptops with no downloads, and many work on phones too. If one becomes a favorite, tap the heart on its card and it will be waiting on the homepage next time.'
    ]
  },
  {
    key: 'Addictive Games', slug: 'addictive', name: 'Addictive', icon: 'fa-infinity',
    intro: 'The "just one more round" collection. These are the games players keep coming back to: easy to start, hard to put down, and perfect for a quick break.',
    more: [
      'What makes a game addictive? Usually a simple core loop, like tapping, dodging or upgrading, plus a score or progress bar that always feels within reach. Short rounds mean you can play for two minutes or two hours.',
      'This list mixes endless runners, idle clickers and high-score chasers. Everything runs instantly in your browser, with no installs and no sign-ups.'
    ]
  },
  {
    key: 'Driving', slug: 'driving', name: 'Driving', icon: 'fa-car-side',
    intro: 'Hit the gas with free unblocked driving games: racing, stunt bikes, traffic dodging and physics-based car challenges that run smoothly on any school computer.',
    more: [
      'Driving games range from precise time trials to chaotic physics sandboxes. Use the arrow keys or WASD to steer, and learn each track or level to shave seconds off your best run.',
      'All of these games run in the browser with no download, and many support touch controls on phones and tablets.'
    ]
  },
  {
    key: 'Puzzle', slug: 'puzzle', name: 'Puzzle', icon: 'fa-puzzle-piece',
    intro: 'Give your brain a workout with unblocked puzzle games: block puzzles, logic challenges, number games and escape rooms you can play right in your browser.',
    more: [
      'Puzzle games reward patience and planning over speed. Many are great for short breaks because you can stop after any level, and most only need a mouse or a few keys.',
      'From classic falling-block games to clever escape puzzles, every game here loads instantly and works on school Chromebooks.'
    ]
  },
  {
    key: 'Sports', slug: 'sports', name: 'Sports', icon: 'fa-basketball',
    intro: 'Football, basketball, soccer, boxing and more. Play free unblocked sports games solo or against a friend on the same keyboard, with no downloads needed.',
    more: [
      'Sports games here range from deep team management to silly one-button physics matches that are perfect for two players. Many have very simple controls, so anyone can pick them up in seconds.',
      'Every game runs in your browser on Chromebooks, laptops and many phones. Look for the 2 Player category if you want to play head-to-head.'
    ]
  },
  {
    key: '2-Player', slug: '2-player', name: '2 Player', icon: 'fa-user-group',
    intro: 'Grab a friend and share one keyboard. These unblocked 2 player games are built for head-to-head battles and co-op runs on the same computer.',
    more: [
      'Most 2 player games split the keyboard: one player uses WASD or a single letter key, and the other uses the arrow keys. Check each game\'s Controls box before you start.',
      'They are perfect for settling arguments during a break, and all of them run instantly in the browser with no accounts or downloads.'
    ]
  },
  {
    key: 'Retro Games', slug: 'retro', name: 'Retro', icon: 'fa-ghost',
    intro: 'Classic arcade and console-style games, playable free in your browser. Relive pixel-art favorites and old-school high-score chasers without an emulator setup.',
    more: [
      'Retro games are simple to learn but tough to master, which is exactly why they have lasted for decades. Expect tight controls, pixel graphics and scores worth beating.',
      'Everything here runs unblocked on school Chromebooks and laptops, with keyboard controls listed on each game page.'
    ]
  },
  {
    key: 'Clicker', slug: 'clicker', name: 'Clicker', icon: 'fa-arrow-pointer',
    intro: 'Click, upgrade, repeat. Unblocked clicker and idle games let you build huge empires one tap at a time, and many keep growing even while you are away.',
    more: [
      'Clicker games start small: one click earns one point. Spend those points on upgrades that earn more automatically, and soon the numbers get ridiculous. Many games save progress in your browser so you can pick up where you left off.',
      'They are ideal for playing in short bursts, need only a mouse or touchscreen, and run instantly with no installs.'
    ]
  },
  {
    key: 'Tools', slug: 'tools', name: 'Tools', icon: 'fa-toolbox',
    intro: 'Handy browser tools from Blooket1. Quick utilities and editors that run right in the page, with nothing to install.',
    more: [
      'These tools are lightweight web apps that open instantly, just like the games. Bookmark the ones you use often or add them to your favorites.'
    ]
  }
];

const SPECIAL_CATEGORIES = [
  {
    slug: 'popular', name: 'Trending', icon: 'fa-fire', h1: 'Trending games',
    pageTitle: 'Trending Games Unblocked - Most Popular Free Games Online | Blooket1',
    intro: 'The most played, highest rated and trending games on Blooket1. Jump into the community\'s all-time favorites, including blockbusters like Slope, Subway Surfers, Minecraft, and Retro Bowl.',
    more: [
      'These are the games that players spend the most time with every single day. Whether you want to beat your high score in classic runners, compete in multiplayer arenas, or relax with top-tier puzzle games, these trending titles are guaranteed hits.',
      'Every popular game here is unblocked and optimized for instant loading in your browser with zero installs or logins required.'
    ]
  },
  {
    slug: 'new', name: 'New', icon: 'fa-wand-magic-sparkles', h1: 'New games',
    pageTitle: 'New Games Unblocked - Latest Free Browser Games | Blooket1',
    intro: 'Fresh arrivals, latest releases and newly added browser games. Discover the newest games added to Blooket1, playable instantly on any school Chromebook or PC with no downloads.',
    more: [
      'Our game library is continually growing with community suggestions, popular indie hits, and viral arcade games. Every new addition is tested for high performance, responsive controls, and full school Chromebook compatibility.',
      'From high-octane 3D racers and intense sports showdowns to relaxing idle clickers and brain-teasing puzzles, find your next favorite game among our newest releases.'
    ]
  },
  {
    slug: 'favorites', name: 'Favorites', icon: 'fa-heart', h1: 'Your favorites',
    pageTitle: 'My Favorite Games - Personal Bookmarks | Blooket1',
    intro: 'Your personally curated collection of favorite games on Blooket1. Click the heart icon on any game card or play page to bookmark games right here for instant access.',
    more: [
      'Keep all your top-tier games in one convenient spot. Whenever you find a game you love, click the heart icon on its card or play page to bookmark it directly to your favorites list.',
      'Favorites are securely saved in your browser storage so they will be right here waiting for you next time you return.'
    ]
  }
];

const ALL_CATEGORIES = [...SPECIAL_CATEGORIES, ...CANONICAL_CATEGORIES];

// ------------------------------------------------------------------
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const title = (s) => s.replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase());
const urlPath = (p) => p.split('/').map(encodeURIComponent).join('/');

const raw = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'games.json'), 'utf8'));
const games = raw.map((o) => { const name = Object.keys(o)[0]; return { name, ...o[name] }; });

function rank(g) {
  const i = POPULARITY.indexOf(g.name.toLowerCase());
  return i === -1 ? POPULARITY.length : i;
}

function sortGames(list) {
  return [...list].sort((a, b) => (rank(a) - rank(b)) || (new Date(b['date added'] || 0) - new Date(a['date added'] || 0)) || a.name.localeCompare(b.name));
}

function primaryLabel(g, current) {
  const cats = (g['game categories'] || []).filter((c) => c !== 'Addictive Games' && c !== current.key);
  const c = CANONICAL_CATEGORIES.find((x) => x.key === (cats[0] || current.key));
  return c ? c.name : (current.name || 'Arcade');
}

function card(g, i, cat) {
  const href = R + urlPath(g['game link']);
  const img = R + urlPath(g['game image']);
  const name = title(g.name);
  return `            <div class="game-item" data-game-name="${esc(g.name)}">
              <div class="game-thumb-wrap">
                <img src="${esc(img)}" alt="${esc(name)}" width="300" height="200" decoding="async" class="is-loaded"${i < 12 ? '' : ' loading="lazy"'} />
                <div class="game-card-overlay">
                  <span class="game-name">${esc(name)}</span>
                  <span class="game-meta"><span class="game-chip">${esc(primaryLabel(g, cat))}</span></span>
                </div>
              </div>
              <a class="full-card-link" href="${esc(href)}" aria-label="Play ${esc(name)}"></a>
              <button type="button" class="favorite-btn" data-game="${esc(g.name)}" aria-label="Favorite ${esc(name)}"><i class="far fa-heart"></i></button>
            </div>`;
}

function sidebar(active) {
  const item = (href, icon, label, isActive) => `        <a href="${href}" class="cg-nav-item${isActive ? ' active' : ''}" data-tooltip="${label}"${isActive ? ' aria-current="page"' : ''}>
          <span class="cg-nav-icon"><i class="fas ${icon}"></i></span>
          <span class="cg-nav-label">${label}</span>
        </a>`;
  return `    <aside id="cg-sidebar" class="cg-sidebar" aria-label="Main Navigation">
      <nav class="cg-nav-list">
${item(R, 'fa-house', 'Home', active === 'home')}
${item(R + '#recent-carousel', 'fa-clock-rotate-left', 'Recently played')}
${item(R + 'category/new/', 'fa-wand-magic-sparkles', 'New', active === 'new')}
${item(R + 'category/popular/', 'fa-fire', 'Trending', active === 'popular')}
${item(R + 'category/favorites/', 'fa-heart', 'Favorites', active === 'favorites')}

        <div class="cg-nav-divider"></div>

${CANONICAL_CATEGORIES.map((c) => item(`${R}category/${c.slug}/`, c.icon, c.name, c.slug === active)).join('\n')}

        <div class="cg-nav-divider"></div>

${item(R + 'chat/', 'fa-comments', 'Community chat')}
${item(R + 'blog/', 'fa-newspaper', 'Updates')}

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
    </aside>`;
}

const HEADER = `    <header class="cg-header">
      <div class="cg-header-left">
        <button id="mobile-menu-btn" class="cg-mobile-menu-btn" aria-label="Open menu" onclick="document.getElementById('sidebar-toggle-btn').click()">
          <i class="fas fa-bars"></i>
        </button>
        <a href="${R}" class="cg-logo-area" aria-label="Blooket1 Home">
          <span class="cg-logo-icon-wrap">
            <img class="cg-logo-img" src="${R}images/b-logo.webp" alt="" width="34" height="34" />
          </span>
          <span class="cg-logo-text">
            <span class="cg-logo-main">blooket<span class="cg-logo-accent">1</span></span>
          </span>
        </a>
      </div>

      <div class="cg-header-center">
        <form class="cg-search-bar" role="search" action="${R}" method="get" id="play-search-form">
          <input id="searchright" name="q" type="search" class="cg-search-input" placeholder="Search games and categories" autocomplete="off" spellcheck="false" aria-label="Search games" />
          <kbd class="search-kbd">/</kbd>
          <button type="submit" class="cg-search-submit" aria-label="Search">
            <i class="fas fa-magnifying-glass"></i>
          </button>
          <div class="play-search-suggest" id="play-search-suggest" hidden></div>
        </form>
      </div>

      <div class="cg-header-right">
        <button id="header-random-btn" class="cg-icon-btn" title="Random game" aria-label="Play a random game">
          <i class="fas fa-shuffle"></i>
        </button>
        <a id="header-fav-btn" class="cg-icon-btn" href="${R}category/favorites/" title="Favorites" aria-label="My favorites">
          <i class="fas fa-bookmark"></i>
        </a>
        <button class="cg-pill-action-btn" onclick="openSettingsModal()" title="Settings &amp; tab cloaking">
          <i class="fas fa-user-secret"></i>
          <span>Stealth mode</span>
        </button>
      </div>
    </header>

    <div id="sidebar-backdrop" class="cg-sidebar-backdrop"></div>`;

const FOOTER = `      <footer class="app-footer">
        <div class="footer-grid">
          <div class="footer-col brand-col">
            <div class="footer-brand">
              <img src="${R}images/b-logo.webp" alt="" width="28" height="28" />
              <span class="footer-brand-name">blooket<span class="logo-accent">1</span></span>
            </div>
            <p class="footer-tagline">
              100+ free browser games that load instantly and run smoothly on school Chromebooks. No downloads, no sign-ups.
            </p>
          </div>
          <div class="footer-col">
            <h4>Games</h4>
            <ul>
              <li><a href="${R}category/popular/">Trending</a></li>
              <li><a href="${R}category/new/">New games</a></li>
              <li><a href="${R}category/favorites/">Favorites</a></li>
              <li><a href="${R}category/action/">Action</a></li>
              <li><a href="${R}category/driving/">Driving</a></li>
              <li><a href="${R}category/puzzle/">Puzzle</a></li>
              <li><a href="${R}category/retro/">Retro</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Tools</h4>
            <ul>
              <li><a href="#" onclick="openSettingsModal('cloak'); return false;">Tab cloaking</a></li>
              <li><a href="#" onclick="openSettingsModal('panic'); return false;">Panic key</a></li>
              <li><a href="#" onclick="startUnblockAssistant(); return false;">Unblock assistant</a></li>
              <li><a href="${R}chat/">Community chat</a></li>
              <li><a href="${R}blog/">Updates</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>About</h4>
            <ul>
              <li><a href="${R}about us/">About us</a></li>
              <li><a href="${R}contact us/">Contact</a></li>
              <li><a href="${R}privacy/">Privacy policy</a></li>
              <li><a href="${R}tsandcs/">Terms</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Blooket1. All rights reserved. Free browser games for school and home.</p>
        </div>
      </footer>`;

const MODALS = `    <div class="settings-modal-overlay" id="settingsModalOverlay" role="dialog" aria-modal="true" aria-labelledby="settingsModalTitle" hidden>
      <div class="settings-modal-card">
        <div class="settings-modal-header">
          <h2 id="settingsModalTitle">Stealth Mode Hub</h2>
          <button class="settings-close-btn" id="closeSettingsModalBtn" aria-label="Close settings">&times;</button>
        </div>
        <div class="settings-modal-body">
          <div class="settings-section">
            <div class="settings-section-header">
              <i class="fas fa-mask section-icon"></i>
              <div>
                <h3>Tab Cloaking (Disguise)</h3>
                <p>Change this tab's title and favicon so it appears as school or productivity work.</p>
              </div>
            </div>
            <div class="cloak-options-grid" id="cloakOptionsGrid"></div>
          </div>
          <div class="settings-section">
            <div class="settings-section-header">
              <i class="fas fa-shield-alt section-icon"></i>
              <div>
                <h3>Panic Key (Boss Key)</h3>
                <p>Press this single key at any moment to immediately escape to Google Classroom.</p>
              </div>
            </div>
            <div class="panic-key-card">
              <div class="panic-key-status">
                <span class="panic-label">Current Panic Key:</span>
                <kbd id="currentPanicKeyDisplay">\`</kbd>
                <span id="panicListeningStatus" class="panic-listening-badge" style="display: none;">Press any key now...</span>
              </div>
              <div class="panic-btn-group">
                <button id="changePanicKeyBtn" class="settings-action-btn"><i class="fas fa-keyboard"></i> Change Key</button>
                <button id="testPanicKeyBtn" class="settings-action-btn secondary"><i class="fas fa-external-link-alt"></i> Test Panic</button>
                <button id="resetPanicKeyBtn" class="settings-action-btn tertiary"><i class="fas fa-undo"></i> Reset (\`)</button>
              </div>
            </div>
          </div>
          <div class="settings-section">
            <div class="settings-section-header">
              <i class="fas fa-palette section-icon"></i>
              <div>
                <h3>Theme Switcher</h3>
                <p>Personalize your experience with dark cyberpunk aesthetics and vivid glows.</p>
              </div>
            </div>
            <div class="theme-options-grid" id="themeOptionsGrid"></div>
          </div>
        </div>
      </div>
    </div>`;

function page(cat) {
  let list;
  let h1 = cat.h1 || `${cat.name} games`;
  let pageTitle = cat.pageTitle || `${cat.name} Games Unblocked - Play ${cat.name} Games Online | Blooket1`;

  if (cat.slug === 'popular') {
    list = sortGames(games);
  } else if (cat.slug === 'new') {
    list = [...games].sort((a, b) => new Date(b['date added'] || 0) - new Date(a['date added'] || 0));
  } else if (cat.slug === 'favorites') {
    list = sortGames(games);
  } else {
    list = sortGames(games.filter((g) => (g['game categories'] || []).includes(cat.key)));
  }

  const url = `${SITE}/category/${cat.slug}/`;
  const top = list.slice(0, 3).map((g) => title(g.name));
  const topSentence = top.length >= 3 && cat.slug !== 'favorites'
    ? `The most played ${cat.name.toLowerCase()} games on Blooket1 right now include ${top[0]}, ${top[1]} and ${top[2]}.`
    : '';

  const description = `${cat.intro.split('. ')[0].replace(/\.$/, '')}. ${list.length} free games, no downloads, works on Chromebooks.`.slice(0, 300);

  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: `${cat.name} games`,
      url,
      description: cat.intro,
      isPartOf: { '@type': 'WebSite', name: 'Blooket1', url: SITE + '/' },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: list.length,
        itemListElement: list.map((g, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${SITE}/${urlPath(g['game link'])}`,
          name: title(g.name)
        }))
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
        { '@type': 'ListItem', position: 2, name: `${cat.name} games` }
      ]
    }
  ];

  const chips = ALL_CATEGORIES
    .filter((c) => c.slug !== cat.slug)
    .map((c) => `          <a class="category-chip" href="${R}category/${c.slug}/"><i class="fas ${c.icon}"></i> ${c.name}</a>`)
    .join('\n');

  let gridSection = '';
  if (cat.slug === 'favorites') {
    gridSection = `      <section class="category-grid-section" aria-label="Favorite games">
        <div class="search-results-grid category-grid" id="favorites-grid">
${list.map((g, i) => card(g, i, cat)).join('\n')}
        </div>
        <div class="favorites-empty-state" id="favorites-empty" style="display: none; text-align: center; padding: 60px 20px;">
          <div style="font-size: 54px; color: var(--accent-color); margin-bottom: 18px;"><i class="far fa-heart"></i></div>
          <h2 style="font-size: 26px; font-weight: 900; margin-bottom: 10px; color: #fff;">No favorites yet!</h2>
          <p style="color: var(--text-secondary); max-width: 480px; margin: 0 auto 28px; font-size: 16px; line-height: 1.5;">Click the heart icon on any game card across Blooket1 to save your favorite games right here.</p>
          <a href="${R}category/popular/" class="cg-pill-action-btn" style="text-decoration: none; display: inline-flex;"><i class="fas fa-fire"></i> Browse Trending Games</a>
        </div>
      </section>
      <script>
        (function() {
          function syncFavoritesView() {
            const grid = document.getElementById('favorites-grid');
            const empty = document.getElementById('favorites-empty');
            const countEl = document.querySelector('.category-count');
            if (!grid) return;

            let favs = [];
            try {
              const raw = localStorage.getItem('favoriteGames');
              if (raw) favs = JSON.parse(raw);
            } catch (e) {}

            const favSet = new Set(favs);
            const cards = Array.from(grid.querySelectorAll('.game-item'));
            let matched = 0;

            cards.forEach(card => {
              const name = card.dataset.gameName;
              if (favSet.has(name)) {
                card.style.display = '';
                matched++;
              } else {
                card.style.display = 'none';
              }
            });

            if (countEl) {
              countEl.textContent = matched + ' game' + (matched === 1 ? '' : 's');
            }

            if (matched === 0) {
              if (empty) empty.style.display = 'block';
              grid.style.display = 'none';
            } else {
              if (empty) empty.style.display = 'none';
              grid.style.display = '';
            }
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', syncFavoritesView);
          } else {
            syncFavoritesView();
          }

          window.addEventListener('favorites-updated', syncFavoritesView);
        })();
      </script>`;
  } else {
    gridSection = `      <section class="category-grid-section" aria-label="${esc(cat.name)} games">
        <div class="search-results-grid category-grid">
${list.map((g, i) => card(g, i, cat)).join('\n')}
        </div>
      </section>`;
  }

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Generated by tools/build-category-pages.js - edit the script, not this file -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-VNGZND6VMN"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-VNGZND6VMN");
    </script>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5346759304245799" crossorigin="anonymous"></script>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta name="google-adsense-account" content="ca-pub-5346759304245799" />
    <meta name="theme-color" content="#0b0c13" />
    <title>${esc(pageTitle)}</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Blooket1" />
    <meta property="og:title" content="${esc(h1)} - Blooket1" />
    <meta property="og:description" content="${esc(cat.intro)}" />
    <meta property="og:url" content="${url}" />
    ${list[0] ? `<meta property="og:image" content="${SITE}/${urlPath(list[0]['game image'])}" />` : ''}
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" type="image/x-icon" href="${R}images/b-logo.webp" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" />
    <link rel="stylesheet" href="${R}styles.css" />
    <link rel="stylesheet" href="${R}carousel.css" />
    <link rel="stylesheet" href="${R}ub.css" />
    <link rel="stylesheet" href="${R}play.css" />
    <script src="${R}play.js" defer></script>
    <script type="application/ld+json">
${JSON.stringify(ld, null, 2).replace(/^/gm, '      ')}
    </script>
  </head>

  <body class="category-page">
${HEADER}

${sidebar(cat.slug)}

    <main class="cg-main-canvas play-main" id="main-content">
      <nav class="play-breadcrumbs" aria-label="Breadcrumb">
        <a href="${R}">Home</a>
        <i class="fas fa-chevron-right" aria-hidden="true"></i>
        <span aria-current="page">${esc(cat.name)} games</span>
      </nav>

      <section class="category-hero">
        <span class="category-hero-icon"><i class="fas ${cat.icon}"></i></span>
        <div>
          <h1 class="category-hero-title">${esc(h1)} <span class="category-count">${cat.slug === 'favorites' ? '0 games' : list.length + ' games'}</span></h1>
          <p class="category-hero-intro">${esc(cat.intro)}</p>
        </div>
      </section>

      <nav class="category-chips" aria-label="Other categories">
${chips}
      </nav>

      <div class="ad-unit ad-unit-leaderboard">
        <span class="ad-label">Advertisement</span>
        <ins class="adsbygoogle" data-ad-key="leaderboard"></ins>
      </div>

${gridSection}

      <section class="play-card category-about">
        <h2 class="play-about-title">About ${esc(cat.name.toLowerCase())} games on Blooket1</h2>
        <div class="play-about-body">
${cat.more.map((p) => `          <p>${esc(p)}</p>`).join('\n')}
${topSentence ? `          <p>${esc(topSentence)}</p>` : ''}
        </div>
      </section>

      <div class="ad-unit ad-unit-multiplex">
        <span class="ad-label">Advertisement</span>
        <ins class="adsbygoogle" data-ad-key="multiplex"></ins>
      </div>

${FOOTER}
    </main>

    <div class="play-toast" id="play-toast" role="status" aria-live="polite"></div>

${MODALS}

    <script src="${R}script.js"></script>
  </body>
</html>
`;
}

let count = 0;
for (const cat of ALL_CATEGORIES) {
  const dir = path.join(ROOT_DIR, 'category', cat.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), page(cat));
  count++;
  console.log(`category/${cat.slug}/  (${cat.name})`);
}
console.log(`Built ${count} category pages.`);

module.exports = { CATEGORIES: ALL_CATEGORIES, CANONICAL_CATEGORIES, SPECIAL_CATEGORIES };
