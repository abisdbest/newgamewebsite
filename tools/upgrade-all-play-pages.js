const fs = require('fs');
const path = require('path');

const games = JSON.parse(fs.readFileSync('games.json', 'utf8'));
const sourceDirs = fs.readdirSync('source');

const CATEGORY_MAP = {
  'Action': { title: 'Action', slug: 'action' },
  'Addictive Games': { title: 'Addictive', slug: 'addictive' },
  'Driving': { title: 'Driving', slug: 'driving' },
  'Puzzle': { title: 'Puzzle', slug: 'puzzle' },
  'Sports': { title: 'Sports', slug: 'sports' },
  '2-Player': { title: '2 Player', slug: '2-player' },
  'Retro Games': { title: 'Retro', slug: 'retro' },
  'Clicker': { title: 'Clicker', slug: 'clicker' },
  'Tools': { title: 'Tools', slug: 'tools' }
};

function toTitleCase(str) {
  if (!str) return '';
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function resolveSourcePath(gameKey, existingHtml) {
  if (existingHtml) {
    const mData = existingHtml.match(/data-src=["']([^"']+)["']/);
    if (mData && mData[1] && !mData[1].includes('about:blank')) return mData[1];

    const mOnclick = existingHtml.match(/src\s*=\s*['"](\.\.\/\.\.\/source\/[^'"]+)['"]/);
    if (mOnclick && mOnclick[1]) return mOnclick[1];

    const mIframe = existingHtml.match(/<iframe[^>]+src=["'](\.\.\/\.\.\/source\/[^"']+)["']/);
    if (mIframe && mIframe[1]) return mIframe[1];
  }

  // Direct source folder check
  if (fs.existsSync(path.join('source', gameKey, 'index.html'))) {
    return `../../source/${gameKey}/index.html`;
  }
  // Case-insensitive match
  const found = sourceDirs.find(d => d.toLowerCase() === gameKey.toLowerCase());
  if (found && fs.existsSync(path.join('source', found, 'index.html'))) {
    return `../../source/${found}/index.html`;
  }
  return `../../source/${gameKey}/index.html`;
}

function determineControls(gameKey, categories) {
  const k = gameKey.toLowerCase();
  const cats = (categories || []).map(c => c.toLowerCase());

  if (cats.includes('clicker') || cats.includes('tools') || k.includes('chess') || k.includes('clicker') || k.includes('paperclip')) {
    return {
      dpad: 'none',
      buttons: '',
      controlsText: 'Use Left Mouse Button to click, upgrade, and interact with the game.',
      keycaps: `<span class="keycap keycap-wide"><i class="fas fa-computer-mouse"></i> Left Click</span>`
    };
  }

  if (cats.includes('driving') || k.includes('racer') || k.includes('mad grand prix') || k.includes('polytrack')) {
    return {
      dpad: 'arrows',
      buttons: 'Space:Handbrake',
      controlsText: 'Arrow keys or WASD to accelerate, steer, and brake. Spacebar for handbrake / drift.',
      keycaps: `
        <span class="keycap keycap-up"><i class="fas fa-arrow-up"></i></span>
        <span class="keycap keycap-left"><i class="fas fa-arrow-left"></i></span>
        <span class="keycap keycap-down"><i class="fas fa-arrow-down"></i></span>
        <span class="keycap keycap-right"><i class="fas fa-arrow-right"></i></span>
        <span class="keycap keycap-space">Space</span>
      `
    };
  }

  if (k.includes('golf') || k.includes('flappy') || k.includes('dino') || k.includes('tube jumpers')) {
    return {
      dpad: 'none',
      buttons: 'Space:Action',
      controlsText: 'Press Spacebar, Up Arrow, or Click to perform actions and jump.',
      keycaps: `
        <span class="keycap keycap-space">Space</span>
        <span class="keycap keycap-wide"><i class="fas fa-computer-mouse"></i> Click</span>
      `
    };
  }

  if (cats.includes('sports') || cats.includes('2-player') || cats.includes('action')) {
    return {
      dpad: 'arrows',
      buttons: 'Space:Action,KeyZ:Z',
      controlsText: 'Use Arrow keys or WASD to move. Use Spacebar, Z, or Mouse for special actions and shooting.',
      keycaps: `
        <span class="keycap keycap-up"><i class="fas fa-arrow-up"></i></span>
        <span class="keycap keycap-left"><i class="fas fa-arrow-left"></i></span>
        <span class="keycap keycap-down"><i class="fas fa-arrow-down"></i></span>
        <span class="keycap keycap-right"><i class="fas fa-arrow-right"></i></span>
        <span class="keycap keycap-space">Space</span>
      `
    };
  }

  return {
    dpad: 'arrows',
    buttons: 'Space:Action',
    controlsText: 'Use Arrow keys, WASD, or Mouse to control your character and navigate.',
    keycaps: `
      <span class="keycap keycap-up"><i class="fas fa-arrow-up"></i></span>
      <span class="keycap keycap-left"><i class="fas fa-arrow-left"></i></span>
      <span class="keycap keycap-down"><i class="fas fa-arrow-down"></i></span>
      <span class="keycap keycap-right"><i class="fas fa-arrow-right"></i></span>
      <span class="keycap keycap-space">Space</span>
    `
  };
}

function extractLegacyContent(existingHtml, gameTitle, baseDescription) {
  if (!existingHtml) return null;

  // Check if there is an existing description block
  const mDesc = existingHtml.match(/<section class="description">([\s\S]*?)<\/section>/);
  if (mDesc && mDesc[1]) {
    let clean = mDesc[1].trim();
    // remove duplicate h1 or game title headers if present
    clean = clean.replace(/<h1[^>]*>[\s\S]*?<\/h1>/gi, '');
    clean = clean.replace(/<b>Game Image<\/b>/gi, '');
    if (clean.length > 100) return clean;
  }

  // Check if there is an existing play-about-body
  const mAbout = existingHtml.match(/<div class="play-about-body"[^>]*>([\s\S]*?)<\/div>\s*<\/article>/);
  if (mAbout && mAbout[1]) {
    let clean = mAbout[1].trim();
    // Strip existing ads if embedded so we can place cleanly
    clean = clean.replace(/<div class="ad-unit[\s\S]*?<\/div>/gi, '');
    if (clean.length > 100) return clean;
  }

  return null;
}

function generateAboutContent(gameTitle, baseDescription, legacyHtml, primaryCatTitle) {
  if (legacyHtml) {
    // If legacy content exists, insert inArticle ad cleanly after first paragraph
    const pEnd = legacyHtml.indexOf('</p>');
    if (pEnd !== -1) {
      const before = legacyHtml.substring(0, pEnd + 4);
      const after = legacyHtml.substring(pEnd + 4);
      return `
        ${before}
        <div class="ad-unit ad-unit-inarticle">
          <span class="ad-label">Advertisement</span>
          <ins class="adsbygoogle" data-ad-key="inArticle"></ins>
        </div>
        ${after}
      `;
    }
    return `
      ${legacyHtml}
      <div class="ad-unit ad-unit-inarticle">
        <span class="ad-label">Advertisement</span>
        <ins class="adsbygoogle" data-ad-key="inArticle"></ins>
      </div>
    `;
  }

  // Generate high quality, SEO-optimized body
  return `
    <p>
      ${escapeHtml(baseDescription)}
    </p>

    <div class="ad-unit ad-unit-inarticle">
      <span class="ad-label">Advertisement</span>
      <ins class="adsbygoogle" data-ad-key="inArticle"></ins>
    </div>

    <p>
      Experience smooth gameplay, responsive controls, and engaging challenges directly in your browser. Whether you are playing on a school Chromebook, desktop PC, or mobile device, ${escapeHtml(gameTitle)} runs seamlessly with zero installation required.
    </p>

    <h3>How to Play ${escapeHtml(gameTitle)}</h3>
    <ol>
      <li>Press the <b>Play Now</b> button to start the game instantly.</li>
      <li>Use your keyboard, mouse, or touch controls to navigate and complete objectives.</li>
      <li>Master the game mechanics, avoid hazards, and aim for the highest score or fastest completion time.</li>
    </ol>

    <h3>Tips &amp; Strategies</h3>
    <ul>
      <li>Practice the core controls in early levels to build muscle memory.</li>
      <li>Stay focused and anticipate upcoming obstacles ahead of time.</li>
      <li>Use Theater Mode or Fullscreen mode for an immersive, distraction-free gaming session.</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <p><b>Is ${escapeHtml(gameTitle)} free to play?</b><br />Yes, it is 100% free to play directly online on Blooket1 with no downloads or account needed.</p>
    <p><b>Does it work on school Chromebooks?</b><br />Yes, ${escapeHtml(gameTitle)} is fully optimized to run smoothly on Chromebooks and restricted school Wi-Fi networks.</p>
    <p><b>Will my progress be saved?</b><br />Game progress and settings are stored locally in your browser cache.</p>
  `;
}

function generatePlayPageHtml(gameKey, gameObj, existingHtml) {
  const title = toTitleCase(gameKey);
  const categories = gameObj['game categories'] || ['Action'];
  const baseDesc = gameObj.description || `Play ${title} unblocked online for free on Blooket1.`;
  const imageRel = gameObj['game image'] || `images/${gameKey}.webp`;
  const gameLink = gameObj['game link'] || `play/${gameKey}/`;
  
  // Filter primary category
  const nonAddictive = categories.filter(c => c !== 'Addictive Games' && c !== 'Popular Games');
  const rawPrimary = nonAddictive[0] || categories[0] || 'Action';
  const catConfig = CATEGORY_MAP[rawPrimary] || { title: rawPrimary, slug: rawPrimary.toLowerCase().replace(/[^a-z0-9]+/g, '-') };
  const primaryCatTitle = catConfig.title;
  const primaryCatSlug = catConfig.slug;

  const sourceSrc = resolveSourcePath(gameKey, existingHtml);
  const controls = determineControls(gameKey, categories);
  const legacyContent = extractLegacyContent(existingHtml, title, baseDesc);
  const aboutBody = generateAboutContent(title, baseDesc, legacyContent, primaryCatTitle);

  // Category tags HTML
  const categoryChipsHtml = categories.map(c => {
    const cfg = CATEGORY_MAP[c] || { title: c, slug: c.toLowerCase().replace(/[^a-z0-9]+/g, '-') };
    return `<a class="player-chip" href="../../category/${cfg.slug}/">${escapeHtml(cfg.title)}</a>`;
  }).join('\n                  ');

  const factChipsHtml = categories.map(c => {
    const cfg = CATEGORY_MAP[c] || { title: c, slug: c.toLowerCase().replace(/[^a-z0-9]+/g, '-') };
    return `<a href="../../category/${cfg.slug}/">${escapeHtml(cfg.title)}</a>`;
  }).join('\n                    ');

  // JSON-LD genre array
  const genreJson = JSON.stringify(categories);

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-VNGZND6VMN"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-VNGZND6VMN");
    </script>
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5346759304245799"
      crossorigin="anonymous"
    ></script>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta name="google-adsense-account" content="ca-pub-5346759304245799" />
    <meta name="theme-color" content="#0b0c13" />

    <title>${escapeHtml(title)} - Play Free Online Unblocked | Blooket1</title>
    <meta
      name="description"
      content="${escapeHtml(baseDesc)} Play ${escapeHtml(title)} unblocked for free on Blooket1. No downloads, works on Chromebooks."
    />
    <link rel="canonical" href="https://blooket1.com/${encodeURI(gameLink)}" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Blooket1" />
    <meta property="og:title" content="${escapeHtml(title)} - Play Free Online Unblocked" />
    <meta property="og:description" content="${escapeHtml(baseDesc)}" />
    <meta property="og:url" content="https://blooket1.com/${encodeURI(gameLink)}" />
    <meta property="og:image" content="https://blooket1.com/${encodeURI(imageRel)}" />
    <meta name="twitter:card" content="summary_large_image" />

    <link rel="icon" type="image/x-icon" href="../../images/b-logo.webp" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" />
    <link rel="preload" as="image" href="../../${escapeHtml(imageRel)}" fetchpriority="high" />
    <link rel="stylesheet" href="../../styles.css" />
    <link rel="stylesheet" href="../../carousel.css" />
    <link rel="stylesheet" href="../../ub.css" />
    <link rel="stylesheet" href="../../play.css" />
    <script src="../../play.js" defer></script>

    <script type="application/ld+json">
      [
        {
          "@context": "https://schema.org",
          "@type": "VideoGame",
          "name": "${escapeHtml(title)}",
          "url": "https://blooket1.com/${encodeURI(gameLink)}",
          "image": "https://blooket1.com/${encodeURI(imageRel)}",
          "description": "${escapeHtml(baseDesc)}",
          "genre": ${genreJson},
          "gamePlatform": "Web browser",
          "applicationCategory": "Game",
          "operatingSystem": "Any",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://blooket1.com/" },
            { "@type": "ListItem", "position": 2, "name": "${escapeHtml(primaryCatTitle)}", "item": "https://blooket1.com/category/${primaryCatSlug}/" },
            { "@type": "ListItem", "position": 3, "name": "${escapeHtml(title)}" }
          ]
        }
      ]
    </script>
  </head>

  <body
    class="play-page"
    data-game="${escapeHtml(gameKey)}"
    data-src="${escapeHtml(sourceSrc)}"
    data-dpad="${controls.dpad}"
    data-buttons="${controls.buttons}"
  >
    <header class="cg-header">
      <div class="cg-header-left">
        <button id="mobile-menu-btn" class="cg-mobile-menu-btn" aria-label="Open menu" onclick="document.getElementById('sidebar-toggle-btn').click()">
          <i class="fas fa-bars"></i>
        </button>
        <a href="../../" class="cg-logo-area" aria-label="Blooket1 Home">
          <span class="cg-logo-icon-wrap">
            <img class="cg-logo-img" src="../../images/b-logo.webp" alt="" width="34" height="34" />
          </span>
          <span class="cg-logo-text">
            <span class="cg-logo-main">blooket<span class="cg-logo-accent">1</span></span>
          </span>
        </a>
      </div>

      <div class="cg-header-center">
        <form class="cg-search-bar" role="search" action="../../" method="get" id="play-search-form">
          <input
            id="searchright"
            name="q"
            type="search"
            class="cg-search-input"
            placeholder="Search games and categories"
            autocomplete="off"
            spellcheck="false"
            aria-label="Search games"
          />
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
        <a id="header-fav-btn" class="cg-icon-btn" href="../../#favorites-carousel" title="Favorites" aria-label="My favorites">
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
        <a href="../../" class="cg-nav-item" data-tooltip="Home">
          <span class="cg-nav-icon"><i class="fas fa-house"></i></span>
          <span class="cg-nav-label">Home</span>
        </a>
        <a href="../../#recent-carousel" class="cg-nav-item" data-tooltip="Recently played">
          <span class="cg-nav-icon"><i class="fas fa-clock-rotate-left"></i></span>
          <span class="cg-nav-label">Recently played</span>
        </a>
        <a href="../../#category-new" class="cg-nav-item" data-tooltip="New">
          <span class="cg-nav-icon"><i class="fas fa-wand-magic-sparkles"></i></span>
          <span class="cg-nav-label">New</span>
        </a>
        <a href="../../#category-popular" class="cg-nav-item" data-tooltip="Trending">
          <span class="cg-nav-icon"><i class="fas fa-fire"></i></span>
          <span class="cg-nav-label">Trending</span>
        </a>
        <a href="../../#favorites-carousel" class="cg-nav-item" data-tooltip="Favorites">
          <span class="cg-nav-icon"><i class="fas fa-heart"></i></span>
          <span class="cg-nav-label">Favorites</span>
        </a>

        <div class="cg-nav-divider"></div>

        <a href="../../category/action/" class="cg-nav-item" data-tooltip="Action" data-cat="Action">
          <span class="cg-nav-icon"><i class="fas fa-bolt"></i></span>
          <span class="cg-nav-label">Action</span>
        </a>
        <a href="../../category/addictive/" class="cg-nav-item" data-tooltip="Addictive" data-cat="Addictive Games">
          <span class="cg-nav-icon"><i class="fas fa-infinity"></i></span>
          <span class="cg-nav-label">Addictive</span>
        </a>
        <a href="../../category/driving/" class="cg-nav-item" data-tooltip="Driving" data-cat="Driving">
          <span class="cg-nav-icon"><i class="fas fa-car-side"></i></span>
          <span class="cg-nav-label">Driving</span>
        </a>
        <a href="../../category/puzzle/" class="cg-nav-item" data-tooltip="Puzzle" data-cat="Puzzle">
          <span class="cg-nav-icon"><i class="fas fa-puzzle-piece"></i></span>
          <span class="cg-nav-label">Puzzle</span>
        </a>
        <a href="../../category/sports/" class="cg-nav-item" data-tooltip="Sports" data-cat="Sports">
          <span class="cg-nav-icon"><i class="fas fa-basketball"></i></span>
          <span class="cg-nav-label">Sports</span>
        </a>
        <a href="../../category/2-player/" class="cg-nav-item" data-tooltip="2 Player" data-cat="2-Player">
          <span class="cg-nav-icon"><i class="fas fa-user-group"></i></span>
          <span class="cg-nav-label">2 Player</span>
        </a>
        <a href="../../category/retro/" class="cg-nav-item" data-tooltip="Retro" data-cat="Retro Games">
          <span class="cg-nav-icon"><i class="fas fa-ghost"></i></span>
          <span class="cg-nav-label">Retro</span>
        </a>
        <a href="../../category/clicker/" class="cg-nav-item" data-tooltip="Clicker" data-cat="Clicker">
          <span class="cg-nav-icon"><i class="fas fa-arrow-pointer"></i></span>
          <span class="cg-nav-label">Clicker</span>
        </a>
        <a href="../../category/tools/" class="cg-nav-item" data-tooltip="Tools" data-cat="Tools">
          <span class="cg-nav-icon"><i class="fas fa-toolbox"></i></span>
          <span class="cg-nav-label">Tools</span>
        </a>

        <div class="cg-nav-divider"></div>

        <a href="../../chat/" class="cg-nav-item" data-tooltip="Community chat">
          <span class="cg-nav-icon"><i class="fas fa-comments"></i></span>
          <span class="cg-nav-label">Community chat</span>
        </a>
        <a href="../../blog/" class="cg-nav-item" data-tooltip="Updates">
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
    </aside>

    <main class="cg-main-canvas play-main" id="main-content">
      <nav class="play-breadcrumbs" aria-label="Breadcrumb">
        <a href="../../">Home</a>
        <i class="fas fa-chevron-right" aria-hidden="true"></i>
        <a href="../../category/${primaryCatSlug}/">${escapeHtml(primaryCatTitle)}</a>
        <i class="fas fa-chevron-right" aria-hidden="true"></i>
        <span aria-current="page">${escapeHtml(title)}</span>
      </nav>

      <div class="play-layout">
        <section class="player-shell" id="player-shell" aria-label="Game player">
          <div class="player-stage" id="player-stage">
            <div class="player-cover" id="player-cover">
              <img class="player-cover-bg" src="../../${escapeHtml(imageRel)}" alt="" aria-hidden="true" />
              <div class="player-cover-content">
                <img class="player-cover-thumb" src="../../${escapeHtml(imageRel)}" alt="${escapeHtml(title)}" width="300" height="200" fetchpriority="high" />
                <p class="player-cover-title">${escapeHtml(title)}</p>
                <button type="button" class="player-play-btn" id="play-btn">
                  <i class="fas fa-play"></i><span>Play now</span>
                </button>
                <p class="player-cover-hint"><i class="fas fa-bolt"></i> Instant play &middot; No download</p>
              </div>
            </div>

            <iframe
              id="game-iframe"
              title="${escapeHtml(title)}"
              allow="autoplay; fullscreen; gamepad; clipboard-write"
              allowfullscreen
            ></iframe>

            <div class="player-loading" id="player-loading" hidden>
              <span class="player-spinner"></span>
              <span>Loading game&hellip;</span>
            </div>

            <button type="button" class="player-exit-fs" id="player-exit-fs" aria-label="Exit fullscreen">
              <i class="fas fa-compress"></i>
            </button>
          </div>

          <div class="touch-controls" id="touch-controls" hidden>
            <div class="touch-dpad" id="touch-dpad" aria-label="Directional pad">
              <span class="dpad-key dpad-up" data-dir="up"><i class="fas fa-caret-up"></i></span>
              <span class="dpad-key dpad-left" data-dir="left"><i class="fas fa-caret-left"></i></span>
              <span class="dpad-key dpad-right" data-dir="right"><i class="fas fa-caret-right"></i></span>
              <span class="dpad-key dpad-down" data-dir="down"><i class="fas fa-caret-down"></i></span>
              <span class="dpad-center"></span>
            </div>
            <div class="touch-buttons" id="touch-buttons"></div>
          </div>

          <div class="player-toolbar">
            <div class="player-id">
              <img class="player-id-icon" src="../../${escapeHtml(imageRel)}" alt="" width="48" height="48" />
              <div class="player-id-text">
                <h1 class="player-title">${escapeHtml(title)}</h1>
                <div class="player-meta">
                  ${categoryChipsHtml}
                  <span class="player-plays" id="player-plays" hidden></span>
                </div>
              </div>
            </div>

            <div class="player-actions">
              <button type="button" class="player-btn" id="btn-fav" aria-pressed="false" data-label="Favorite">
                <i class="far fa-heart"></i>
              </button>
              <button type="button" class="player-btn" id="btn-reload" data-label="Restart">
                <i class="fas fa-rotate-right"></i>
              </button>
              <button type="button" class="player-btn is-desktop-only" id="btn-theater" aria-pressed="false" data-label="Theater mode">
                <i class="fas fa-tv"></i>
              </button>
              <div class="player-menu-wrap">
                <button type="button" class="player-btn" id="btn-more" aria-haspopup="menu" aria-expanded="false" data-label="More">
                  <i class="fas fa-ellipsis"></i>
                </button>
                <div class="player-menu" id="player-menu" role="menu" hidden>
                  <button type="button" role="menuitem" id="menu-share"><i class="fas fa-share-nodes"></i> Share game</button>
                  <button type="button" role="menuitem" id="menu-cloak"><i class="fas fa-up-right-from-square"></i> Open in about:blank</button>
                  <button type="button" role="menuitem" id="menu-touch" class="is-touch-only"><i class="fas fa-gamepad"></i> <span>Hide touch controls</span></button>
                  <button type="button" role="menuitem" id="menu-report"><i class="fas fa-flag"></i> Report a problem</button>
                </div>
              </div>
              <button type="button" class="player-btn player-btn-primary" id="btn-fullscreen" data-label="Fullscreen">
                <i class="fas fa-expand"></i>
              </button>
            </div>
          </div>
        </section>

        <aside class="play-side" aria-label="More games">
          <h2 class="play-section-title play-side-title"><i class="fas fa-fire"></i> More games</h2>
          <div class="side-grid" id="side-grid"></div>
          <div class="ad-unit ad-unit-sticky">
            <span class="ad-label">Advertisement</span>
            <ins class="adsbygoogle" data-ad-key="sidebar"></ins>
          </div>
        </aside>

        <div class="play-below">
          <div class="ad-unit ad-unit-leaderboard">
            <span class="ad-label">Advertisement</span>
            <ins class="adsbygoogle" data-ad-key="leaderboard"></ins>
          </div>

          <section class="play-quick" id="play-quick" aria-label="Up next">
            <h2 class="play-section-title"><i class="fas fa-forward"></i> Up next</h2>
            <div class="side-grid side-grid-quick" id="side-grid-quick"></div>
          </section>

          <div class="play-info-grid">
            <article class="play-card play-about">
              <h2 class="play-about-title">${escapeHtml(title)}</h2>
              <div class="play-about-body" id="play-about-body">
                ${aboutBody}
              </div>
            </article>

            <aside class="play-card play-facts">
              <h2 class="play-card-title"><i class="fas fa-keyboard"></i> Controls</h2>
              <p class="play-controls-text">
                ${escapeHtml(controls.controlsText)}
              </p>
              <div class="play-keycaps" aria-hidden="true">
                ${controls.keycaps}
              </div>

              <h2 class="play-card-title"><i class="fas fa-circle-info"></i> Game info</h2>
              <dl class="play-facts-list">
                <div><dt>Platform</dt><dd>Browser (desktop &amp; mobile)</dd></div>
                <div><dt>Release</dt><dd>Free Web Edition</dd></div>
                <div>
                  <dt>Categories</dt>
                  <dd class="play-facts-chips">
                    ${factChipsHtml}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>

          <div class="all-game-carousels play-rails" id="play-rails">
            <div class="skeleton-section"><div class="skeleton-title"></div><div class="skeleton-row"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
          </div>

          <div class="ad-unit ad-unit-multiplex">
            <span class="ad-label">Advertisement</span>
            <ins class="adsbygoogle" data-ad-key="multiplex"></ins>
          </div>
        </div>
      </div>

      <footer class="app-footer">
        <div class="footer-grid">
          <div class="footer-col brand-col">
            <div class="footer-brand">
              <img src="../../images/b-logo.webp" alt="" width="28" height="28" />
              <span class="footer-brand-name">blooket<span class="logo-accent">1</span></span>
            </div>
            <p class="footer-tagline">
              100+ free browser games that load instantly and run smoothly on school Chromebooks. No downloads, no sign-ups.
            </p>
          </div>
          <div class="footer-col">
            <h4>Games</h4>
            <ul>
              <li><a href="../../#category-popular">Trending</a></li>
              <li><a href="../../#category-new">New games</a></li>
              <li><a href="../../category/action/">Action</a></li>
              <li><a href="../../category/driving/">Driving</a></li>
              <li><a href="../../category/puzzle/">Puzzle</a></li>
              <li><a href="../../category/retro/">Retro</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Tools</h4>
            <ul>
              <li><a href="#" onclick="openSettingsModal('cloak'); return false;">Tab cloaking</a></li>
              <li><a href="#" onclick="openSettingsModal('panic'); return false;">Panic key</a></li>
              <li><a href="#" onclick="startUnblockAssistant(); return false;">Unblock assistant</a></li>
              <li><a href="../../chat/">Community chat</a></li>
              <li><a href="../../blog/">Updates</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>About</h4>
            <ul>
              <li><a href="../../about us/">About us</a></li>
              <li><a href="../../contact us/">Contact &amp; DMCA</a></li>
              <li><a href="../../privacy/">Privacy policy</a></li>
              <li><a href="../../tsandcs/">Terms of service</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Blooket1. Games belong to their respective creators.</p>
        </div>
      </footer>
    </main>

    <div class="play-toast" id="play-toast" role="status" aria-live="polite"></div>

    <div id="unblockAssistantOverlay">
      <div id="unblockAssistantPopup">
        <h2>Unblock Assistant</h2>
        <div id="unblockAssistantProgressBarContainer">
          <div id="unblockAssistantProgressBar"></div>
        </div>
        <div id="unblockAssistantContent"></div>
        <div id="unblockAssistantButtons">
          <button id="unblockPrevBtn" class="unblock-assistant-btn">&larr; Previous</button>
          <button id="unblockNextBtn" class="unblock-assistant-btn">Next &rarr;</button>
          <button id="unblockSubmitBtn" class="hidden unblock-assistant-btn submit">Send Report</button>
        </div>
      </div>
    </div>

    <div id="settingsModalOverlay" class="settings-modal-overlay">
      <div id="settingsModal" class="settings-modal" role="dialog" aria-modal="true" aria-labelledby="settingsModalTitle">
        <div class="settings-modal-header">
          <div class="settings-title-wrap">
            <i class="fas fa-sliders-h settings-header-icon"></i>
            <h2 id="settingsModalTitle">Settings &amp; Stealth Cloak</h2>
          </div>
          <button id="closeSettingsBtn" class="settings-close-btn" aria-label="Close Settings">&times;</button>
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
    </div>

    <script src="../../script.js"></script>
  </body>
</html>
`;
}

// Main execution
let updatedCount = 0;
let preservedCount = 0;

for (const entry of games) {
  const gameKey = Object.keys(entry)[0];
  const gameObj = entry[gameKey];
  const link = gameObj['game link'];

  // Skip standalone tools that do not live in play/
  if (gameKey === 'soundboard' || !link.startsWith('play/')) {
    continue;
  }

  // Preserve the gold standard manual craft of duck life 4 if already present
  // But duck life 4 is our gold standard template
  const playDir = path.resolve(link);
  if (!fs.existsSync(playDir)) {
    fs.mkdirSync(playDir, { recursive: true });
  }

  const targetFile = path.join(playDir, 'index.html');
  let existingHtml = '';
  if (fs.existsSync(targetFile)) {
    existingHtml = fs.readFileSync(targetFile, 'utf8');
  }

  // If it is duck life 4, keep the exact hand-crafted one intact!
  if (gameKey === 'duck life 4') {
    preservedCount++;
    console.log('[PRESERVED GOLD STANDARD] play/duck life 4/index.html');
    continue;
  }

  const newHtml = generatePlayPageHtml(gameKey, gameObj, existingHtml);
  fs.writeFileSync(targetFile, newHtml, 'utf8');
  updatedCount++;
}

console.log(`\nUpgrade completed!`);
console.log(`Updated play pages: ${updatedCount}`);
console.log(`Preserved gold standard: ${preservedCount}`);
