/**
 * =================================================================
 * BLOOKET1 - HOMEPAGE ENGINE
 * =================================================================
 * 1. Resilient data loading (games.json + popularity API w/ timeout)
 * 2. Hero spotlight: auto-rotating top-5 with live "No.X" rank badge
 * 3. Game rails: rounded cards, hover info, "View all" grid toggle
 * 4. Continue playing (recently played) + favorites (localStorage)
 * 5. Instant live search, keyboard shortcuts, sidebar scroll-spy
 * =================================================================
 */

// --- Global State ---
let allGamesData = [];
let favoriteGames = new Set();
let recentGames = [];
let hotGames = new Set();
const WORKER_BASE_URL = 'https://blooket1-popularity-api.info-blooket1.workers.dev';
const POPULAR_GAMES_API_URL = `${WORKER_BASE_URL}/popular-games`;
const TRACK_PLAY_API_URL = `${WORKER_BASE_URL}/track-play`;
const NEW_GAMES_COUNT = 14;
const RECENT_LIMIT = 14;
const HERO_COUNT = 5;
const HERO_INTERVAL_MS = 7000;

// Realistic fallback play counts (last 30 days)
const FALLBACK_POPULARITY = {
    'slope': 14250, '1v1.lol': 12800, 'retro bowl': 12800, 'cookie clicker': 11500,
    'geometry dash lite': 9800, 'subway surfers': 9200, 'basket random': 8400, 'space waves': 8100,
    'monkey mart': 7900, 'minecraft': 7500, 'temple run 2': 7200, 'flappy bird': 6800,
    'rooftop snipers': 6500, 'snow rider 3d': 6300, 'getaway shootout': 5900, 'bitlife': 5600,
    'crossy road': 5400, 'cut the rope': 5200, 'doodle jump': 4900, 'fireboy and watergirl': 4800,
    'happy wheels': 4700, 'capybara clicker': 4600, 'block blast': 4500, '2048': 4300,
    'duck life 4': 4100, 'eggy car': 3900, 'paperio': 3800, 'moto x3m pool party': 3600,
    'mr mine': 3500, 'boxing random': 3400, 'idle dice': 3200, 'ragdoll archers': 3100,
    'hextris': 2900, 'g switch 3': 2800, 'pac-man': 2700, 'tetris': 2600, 'raft wars': 2500,
    'escape road': 2400, 'traffic racer': 2200, 'pin ball': 2100, 'soccer random': 1950,
    'tank game': 1850, 'star wars': 1750, 'solitare': 1600, 'mine sweeper': 1500,
    'hard mario': 1400, 'alien hominid': 1350, 'hobo': 1250, 'there is no game': 1150,
    'universal paperclip': 1050
};

/**
 * Display config for each games.json category: stable section id
 * (used by sidebar anchors), display title and order.
 */
const CATEGORY_CONFIG = {
    'Action':          { id: 'category-action',    title: 'Action',    icon: 'fas fa-bolt' },
    'Driving':         { id: 'category-driving',   title: 'Driving',   icon: 'fas fa-car-side' },
    'Puzzle':          { id: 'category-puzzle',    title: 'Puzzle',    icon: 'fas fa-puzzle-piece' },
    'Sports':          { id: 'category-sports',    title: 'Sports',    icon: 'fas fa-basketball' },
    '2-Player':        { id: 'category-2-player',  title: '2 Player',  icon: 'fas fa-user-group' },
    'Retro Games':     { id: 'category-retro',     title: 'Retro',     icon: 'fas fa-ghost' },
    'Clicker':         { id: 'category-clicker',   title: 'Clicker',   icon: 'fas fa-arrow-pointer' },
    'Tools':           { id: 'category-tools',     title: 'Tools',     icon: 'fas fa-toolbox' },
    'Addictive Games': { id: 'category-addictive', title: 'Addictive', icon: 'fas fa-infinity' }
};

// =================================================================
// HELPERS
// =================================================================

/**
 * Returns a realistic play count for any game, either from curated data
 * or a stable deterministic hash based on the game name.
 */
function getRealisticPlayCount(gameName) {
    if (!gameName) return 1200;
    const key = gameName.toLowerCase().trim();
    if (FALLBACK_POPULARITY[key]) return FALLBACK_POPULARITY[key];
    for (const [topName, count] of Object.entries(FALLBACK_POPULARITY)) {
        if (key.includes(topName) || topName.includes(key)) return count;
    }
    let hash = 0;
    for (let i = 0; i < key.length; i++) hash = (hash * 31 + key.charCodeAt(i)) % 100000;
    return 850 + (Math.abs(hash) % 2400);
}

function escapeHtml(text) {
    if (text === null || text === undefined) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function highlightText(text, query) {
    if (!text) return '';
    if (!query || !query.trim()) return escapeHtml(text);
    const escapedText = escapeHtml(text);
    const escapedQuery = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return escapedText.replace(new RegExp(`(${escapedQuery})`, 'gi'), '<mark class="search-highlight">$1</mark>');
}

function toTitleCase(str) {
    if (!str) return '';
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

function formatPlays(n) {
    if (!n) return '0';
    if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
    if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
    return String(n);
}

function primaryCategory(game) {
    const cats = (game.details?.['game categories'] || []).filter(c => c !== 'Addictive Games' && c !== 'Popular Games');
    const raw = cats[0] || game.details?.['game categories']?.[0] || 'Arcade';
    return CATEGORY_CONFIG[raw]?.title || raw;
}

function isNewGame(game) {
    const d = game.details?.['date added'];
    if (!d) return false;
    return (Date.now() - new Date(d).getTime()) / 86400000 <= 30;
}

function debounce(func, wait) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

async function fetchWithTimeout(url, timeoutMs = 1000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timeoutId);
        if (!response.ok) return null;
        return await response.json();
    } catch (e) {
        clearTimeout(timeoutId);
        return null;
    }
}

// =================================================================
// PERSISTENCE (favorites + recently played)
// =================================================================
function loadFavorites() {
    try {
        const stored = localStorage.getItem('favoriteGames');
        if (stored) favoriteGames = new Set(JSON.parse(stored));
    } catch (e) { /* storage unavailable */ }
}

function saveFavorites() {
    try { localStorage.setItem('favoriteGames', JSON.stringify(Array.from(favoriteGames))); } catch (e) {}
}

function loadRecent() {
    try {
        const stored = JSON.parse(localStorage.getItem('recentGames') || '[]');
        recentGames = Array.isArray(stored) ? stored.slice(0, RECENT_LIMIT) : [];
    } catch (e) { recentGames = []; }
}

function pushRecent(gameName) {
    try {
        recentGames = [gameName, ...recentGames.filter(n => n !== gameName)].slice(0, RECENT_LIMIT);
        localStorage.setItem('recentGames', JSON.stringify(recentGames));
    } catch (e) {}
}

/**
 * Records a play: local "continue playing" history + non-blocking API ping
 */
function trackGameClick(gameName) {
    pushRecent(gameName);
    try {
        fetch(TRACK_PLAY_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ game: gameName }),
            keepalive: true
        }).catch(() => {});
    } catch (e) {}
}

function playRandomGame() {
    if (!allGamesData.length) return;
    const rand = allGamesData[Math.floor(Math.random() * allGamesData.length)];
    trackGameClick(rand.name);
    window.location.href = rand.link;
}

// =================================================================
// GAME CARD
// =================================================================
/**
 * Creates a rounded game card: art, title, hover meta (category + plays)
 */
function createGameItem(game, container, options = {}) {
    const item = document.createElement('div');
    item.className = 'game-item';
    item.dataset.gameName = game.name;

    const thumb = document.createElement('div');
    thumb.className = 'game-thumb-wrap';

    const img = document.createElement('img');
    img.alt = '';
    img.decoding = 'async';
    img.loading = options.eager ? 'eager' : 'lazy';
    img.width = 300;
    img.height = 200;
    img.addEventListener('load', () => img.classList.add('is-loaded'), { once: true });
    img.addEventListener('error', () => img.classList.add('is-loaded'), { once: true });
    img.src = game.image;
    thumb.appendChild(img);

    // Rank / status badge
    if (typeof options.rank === 'number') {
        const rank = document.createElement('span');
        rank.className = 'badge-rank' + (options.rank <= 3 ? ` is-top is-top-${options.rank}` : '');
        rank.textContent = options.rank;
        thumb.appendChild(rank);
    } else if (!options.hideNewBadge && isNewGame(game)) {
        const b = document.createElement('span');
        b.className = 'badge-micro badge-new';
        b.textContent = 'New';
        thumb.appendChild(b);
    } else if (!options.hideHotBadge && hotGames.has(game.name)) {
        const b = document.createElement('span');
        b.className = 'badge-micro badge-hot';
        b.innerHTML = '<i class="fas fa-fire"></i> Hot';
        thumb.appendChild(b);
    }

    // Bottom info: title always, meta on hover
    const info = document.createElement('div');
    info.className = 'game-card-overlay';
    const name = document.createElement('span');
    name.className = 'game-name';
    if (options.highlightQuery) {
        name.innerHTML = highlightText(toTitleCase(game.name), options.highlightQuery);
    } else {
        name.textContent = toTitleCase(game.name);
    }
    const meta = document.createElement('span');
    meta.className = 'game-meta';
    meta.innerHTML = `<span class="game-chip">${escapeHtml(primaryCategory(game))}</span>` +
        `<span class="game-plays"><i class="fas fa-play"></i>${formatPlays(game.clicks)}</span>`;
    info.append(name, meta);
    thumb.appendChild(info);

    const link = document.createElement('a');
    link.href = game.link;
    link.className = 'full-card-link';
    link.setAttribute('aria-label', `Play ${toTitleCase(game.name)}`);
    link.addEventListener('click', () => trackGameClick(game.name));

    const fav = document.createElement('button');
    fav.className = 'favorite-btn';
    fav.type = 'button';
    fav.setAttribute('aria-label', `Favorite ${toTitleCase(game.name)}`);
    const isFav = favoriteGames.has(game.name);
    fav.classList.toggle('is-favorite', isFav);
    fav.innerHTML = `<i class="${isFav ? 'fas' : 'far'} fa-heart"></i>`;
    fav.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(game.name);
    });

    item.append(thumb, link, fav);
    container.appendChild(item);
    return item;
}

// =================================================================
// RAILS
// =================================================================
/**
 * Creates a rail section: title + "View all" toggle, then a row of cards
 */
function createCarouselSection(title, games, container, options = {}) {
    if (!games || games.length === 0) return null;

    const section = document.createElement('section');
    section.className = 'game-category-section';
    section.id = options.id || ('cat-' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    if (options.categorySlug) section.dataset.categorySlug = options.categorySlug;

    const head = document.createElement('div');
    head.className = 'category-header-wrap';

    const h2 = document.createElement('h2');
    h2.className = 'category-title';
    const titleHtml = options.pageHref
        ? `<a class="category-title-link" href="${escapeHtml(options.pageHref)}">${escapeHtml(title)}</a>`
        : `<span>${escapeHtml(title)}</span>`;
    h2.innerHTML = (options.icon ? `<i class="${options.icon}"></i>` : '') + titleHtml;
    head.appendChild(h2);

    if (games.length > 6) {
        const toggle = document.createElement('button');
        toggle.type = 'button';
        toggle.className = 'view-all-btn';
        toggle.innerHTML = '<span>View all</span><i class="fas fa-chevron-right"></i>';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.addEventListener('click', () => {
            const expanded = section.classList.toggle('is-expanded');
            toggle.setAttribute('aria-expanded', String(expanded));
            toggle.querySelector('span').textContent = expanded ? 'Show less' : 'View all';
            if (!expanded) section.scrollIntoView({ block: 'start', behavior: 'smooth' });
            const rail = section.querySelector('.game-carousel-container');
            if (rail) updateCarouselArrows(rail);
        });
        head.appendChild(toggle);
    }

    const rail = document.createElement('div');
    rail.className = 'game-carousel-container';

    const left = document.createElement('button');
    left.type = 'button';
    left.className = 'carousel-arrow carousel-arrow-left';
    left.setAttribute('aria-label', 'Scroll left');
    left.innerHTML = '<i class="fas fa-chevron-left"></i>';

    const track = document.createElement('div');
    track.className = 'game-carousel';

    const right = document.createElement('button');
    right.type = 'button';
    right.className = 'carousel-arrow carousel-arrow-right';
    right.setAttribute('aria-label', 'Scroll right');
    right.innerHTML = '<i class="fas fa-chevron-right"></i>';

    const frag = document.createDocumentFragment();
    games.forEach((game, idx) => createGameItem(game, frag, {
        ...options,
        rank: options.ranked ? idx + 1 : undefined
    }));
    track.appendChild(frag);

    rail.append(left, track, right);
    section.append(head, rail);

    if (options.before && options.before.parentNode === container) {
        container.insertBefore(section, options.before);
    } else if (options.prepend) {
        container.prepend(section);
    } else {
        container.appendChild(section);
    }
    return section;
}

function getPopularGames(limit) {
    const sorted = [...allGamesData].sort((a, b) => (b.clicks || 0) - (a.clicks || 0));
    return sorted.slice(0, limit);
}

function buildFavoritesSection(container) {
    const favs = allGamesData.filter(g => favoriteGames.has(g.name));
    if (!favs.length) return null;
    const anchor = document.getElementById('category-popular');
    return createCarouselSection('Your favorites', favs, container, {
        id: 'favorites-carousel',
        categorySlug: 'favorites',
        pageHref: 'category/favorites/',
        icon: 'fas fa-heart',
        before: anchor
    });
}

/**
 * Builds all rails
 */
function createAllCarousels() {
    const container = document.getElementById('all-game-carousels');
    if (!container) return;
    container.innerHTML = '';
    container.removeAttribute('aria-busy');

    // 1. Continue playing
    const byName = new Map(allGamesData.map(g => [g.name, g]));
    const recent = recentGames.map(n => byName.get(n)).filter(Boolean);
    if (recent.length) {
        createCarouselSection('Continue playing', recent, container, {
            id: 'recent-carousel',
            categorySlug: 'recent',
            icon: 'fas fa-clock-rotate-left',
            eager: true,
            hideNewBadge: true,
            hideHotBadge: true
        });
    }
    const recentNav = document.getElementById('nav-recent');
    if (recentNav) recentNav.hidden = !recent.length;

    // 2. Top 10 (ranked)
    const popular = getPopularGames(10);
    createCarouselSection('Top 10 this week', popular, container, {
        id: 'category-popular',
        categorySlug: 'popular',
        pageHref: 'category/popular/',
        icon: 'fas fa-fire',
        ranked: true,
        eager: !recent.length
    });

    // 3. Favorites (sits above Top 10 once created)
    buildFavoritesSection(container);

    // 4. New
    const newGames = [...allGamesData]
        .sort((a, b) => new Date(b.details?.['date added'] || 0) - new Date(a.details?.['date added'] || 0))
        .slice(0, NEW_GAMES_COUNT);
    createCarouselSection('New games', newGames, container, {
        id: 'category-new',
        categorySlug: 'new',
        pageHref: 'category/new/',
        icon: 'fas fa-star',
        hideNewBadge: true
    });

    // 5. Canonical Category Rails with Intelligent Deduplication & Variety
    // Tracks games displayed in the initial visible window (first 6 cards) so that
    // blockbusters don't immediately repeat in consecutive rails.
    const exposureCount = new Map();
    const lastSeenSection = new Map();
    let sectionIdx = 0;

    // Record Top 10 games as exposed
    popular.forEach(g => {
        exposureCount.set(g.name, 1);
        lastSeenSection.set(g.name, sectionIdx);
    });

    // Record New games front window
    sectionIdx++;
    newGames.slice(0, 6).forEach(g => {
        exposureCount.set(g.name, (exposureCount.get(g.name) || 0) + 1);
        lastSeenSection.set(g.name, sectionIdx);
    });

    // Render ONLY configured canonical categories in balanced genre order
    Object.keys(CATEGORY_CONFIG).forEach(categoryKey => {
        const cfg = CATEGORY_CONFIG[categoryKey];
        if (!cfg) return;
        sectionIdx++;

        const matching = allGamesData.filter(game =>
            (game.details?.['game categories'] || []).includes(categoryKey)
        );
        if (!matching.length) return;

        // Partition into:
        // 1. Fresh games: games not yet exposed in the front window of prior sections
        // 2. Previously seen games: will follow behind fresh games so full catalog is still browsable
        const fresh = [];
        const seen = [];

        matching.forEach(game => {
            if (!exposureCount.has(game.name) || exposureCount.get(game.name) === 0) {
                fresh.push(game);
            } else {
                seen.push(game);
            }
        });

        // Fresh games ordered by popularity
        fresh.sort((a, b) => (b.clicks || 0) - (a.clicks || 0));

        // Seen games sorted by maximum distance from when they were last seen, then popularity
        seen.sort((a, b) => {
            const distA = sectionIdx - (lastSeenSection.get(a.name) || 0);
            const distB = sectionIdx - (lastSeenSection.get(b.name) || 0);
            return (distB - distA) || ((b.clicks || 0) - (a.clicks || 0));
        });

        const railGames = [...fresh, ...seen];

        // Register the front 6 visible cards as exposed
        railGames.slice(0, 6).forEach(game => {
            exposureCount.set(game.name, (exposureCount.get(game.name) || 0) + 1);
            lastSeenSection.set(game.name, sectionIdx);
        });

        const slug = (cfg.id || categoryKey.toLowerCase().replace(/[^a-z0-9]+/g, '-')).replace(/^category-/, '');
        createCarouselSection(cfg.title || categoryKey, railGames, container, {
            id: `category-${slug}`,
            categorySlug: slug,
            icon: cfg.icon,
            pageHref: `category/${slug}/`
        });
    });

    initializeCarouselFunctionality();
}

// =================================================================
// FAVORITES
// =================================================================
function updateAllFavoriteIcons(gameName, isFavorite) {
    document.querySelectorAll('.game-item').forEach(item => {
        if (item.dataset.gameName !== gameName) return;
        const button = item.querySelector('.favorite-btn');
        if (!button) return;
        button.classList.toggle('is-favorite', isFavorite);
        button.innerHTML = `<i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>`;
    });
}

function toggleFavorite(gameName) {
    const wasFavorite = favoriteGames.has(gameName);
    if (wasFavorite) favoriteGames.delete(gameName); else favoriteGames.add(gameName);
    saveFavorites();
    updateAllFavoriteIcons(gameName, !wasFavorite);

    const container = document.getElementById('all-game-carousels');
    const existing = document.getElementById('favorites-carousel');
    if (existing) existing.remove();
    if (container && allGamesData.length) {
        const section = buildFavoritesSection(container);
        if (section) initializeCarouselFunctionality(section);
    }
    syncHeroFavoriteButtons();
    window.dispatchEvent(new CustomEvent('favorites-updated', { detail: { gameName, isFavorite: !wasFavorite } }));
}

function syncHeroFavoriteButtons() {
    document.querySelectorAll('.hero-fav-btn[data-game]').forEach(btn => {
        const isFav = favoriteGames.has(btn.dataset.game);
        btn.classList.toggle('is-favorite', isFav);
        btn.setAttribute('aria-pressed', String(isFav));
        btn.innerHTML = `<i class="${isFav ? 'fas' : 'far'} fa-heart"></i>`;
    });
}

// =================================================================
// CAROUSEL ARROWS
// =================================================================
function updateCarouselArrows(container) {
    const track = container.querySelector('.game-carousel');
    const left = container.querySelector('.carousel-arrow-left');
    const right = container.querySelector('.carousel-arrow-right');
    if (!track || !left || !right) return;
    const max = track.scrollWidth - track.clientWidth;
    left.disabled = track.scrollLeft <= 4;
    right.disabled = max <= 4 || track.scrollLeft >= max - 4;
}

let carouselVisibilityObserver = null;

function initializeCarouselFunctionality(scope = document) {
    if (!carouselVisibilityObserver && 'IntersectionObserver' in window) {
        // Rails use content-visibility:auto, so measure them once they're near the viewport
        carouselVisibilityObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => { if (entry.isIntersecting) updateCarouselArrows(entry.target); });
        }, { rootMargin: '200px 0px' });
    }

    const containers = scope.matches?.('.game-carousel-container')
        ? [scope]
        : scope.querySelectorAll('.game-carousel-container');

    containers.forEach(container => {
        const left = container.querySelector('.carousel-arrow-left');
        const right = container.querySelector('.carousel-arrow-right');
        const track = container.querySelector('.game-carousel');
        if (!track || !left || !right) return;

        if (!container.dataset.bound) {
            container.dataset.bound = '1';
            const page = (dir) => {
                const step = Math.max(track.clientWidth * 0.85, 200);
                track.scrollBy({ left: dir * step, behavior: 'smooth' });
            };
            left.addEventListener('click', () => page(-1));
            right.addEventListener('click', () => page(1));

            let ticking = false;
            track.addEventListener('scroll', () => {
                if (ticking) return;
                ticking = true;
                requestAnimationFrame(() => {
                    updateCarouselArrows(container);
                    ticking = false;
                });
            }, { passive: true });

            carouselVisibilityObserver?.observe(container);
        }
        updateCarouselArrows(container);
    });
}

// =================================================================
// HERO SPOTLIGHT (top 5, auto-rotating, "No.X" rank badge)
// =================================================================
const hero = { slides: [], dots: [], index: 0, timer: null, paused: false, visible: true };

function heroSlideMarkup(game, rank, isFirst) {
    const title = escapeHtml(toTitleCase(game.name));
    const href = escapeHtml(game.link);
    const img = escapeHtml(game.image);
    const cats = (game.details?.['game categories'] || [])
        .filter(c => c !== 'Addictive Games')
        .slice(0, 2)
        .map(c => escapeHtml(CATEGORY_CONFIG[c]?.title || c));
    const desc = escapeHtml(game.details?.description || 'Jump in instantly - no downloads, no installs, works on any school device.');
    const tag = isFirst ? 'h1' : 'h2';
    return `
      <img class="hero-ambient" src="${img}" alt="" aria-hidden="true" ${isFirst ? 'fetchpriority="high"' : 'loading="lazy"'} />
      <div class="hero-art"><img src="${img}" alt="" ${isFirst ? 'fetchpriority="high"' : 'loading="lazy"'} /></div>
      <div class="hero-scrim"></div>
      <div class="hero-content">
        <div class="hero-badge"><i class="fas fa-fire"></i><span>Trending now</span></div>
        <${tag} class="hero-title">${title}</${tag}>
        <p class="hero-subtitle">${cats.join(' <span class="dot">&middot;</span> ')} <span class="dot">&middot;</span> <i class="fas fa-play"></i> ${formatPlays(game.clicks)} plays</p>
        <p class="hero-desc">${desc}</p>
        <div class="hero-actions">
          <a href="${href}" class="hero-play-btn" data-track="${escapeHtml(game.name)}"><i class="fas fa-play"></i> Play now</a>
          <button type="button" class="hero-fav-btn" data-game="${escapeHtml(game.name)}" aria-label="Favorite ${title}"><i class="far fa-heart"></i></button>
        </div>
      </div>
      <div class="hero-no1-badge" title="Ranked #${rank} on Blooket1 this week"><small>No.</small><span>${rank}</span></div>`;
}

function buildHero() {
    const stage = document.getElementById('hero-stage');
    const dotsWrap = document.getElementById('hero-dots');
    if (!stage || !dotsWrap || !allGamesData.length) return;

    const top = getPopularGames(HERO_COUNT);
    stage.innerHTML = '';
    dotsWrap.innerHTML = '';
    hero.slides = [];
    hero.dots = [];

    top.forEach((game, i) => {
        const slide = document.createElement('article');
        slide.className = 'hero-slide' + (i === 0 ? ' is-active' : '');
        slide.setAttribute('aria-roledescription', 'slide');
        slide.setAttribute('aria-label', `${i + 1} of ${top.length}`);
        slide.innerHTML = heroSlideMarkup(game, i + 1, i === 0);
        slide.addEventListener('click', (e) => {
            if (e.target.closest('button, a')) return;
            trackGameClick(game.name);
            window.location.href = game.link;
        });
        stage.appendChild(slide);
        hero.slides.push(slide);

        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'hero-dot' + (i === 0 ? ' is-active' : '');
        dot.setAttribute('aria-label', `Show ${toTitleCase(game.name)}`);
        dot.innerHTML = `<img src="${escapeHtml(game.image)}" alt="" loading="lazy" /><span class="hero-dot-progress"></span>`;
        dot.addEventListener('click', () => { showHeroSlide(i); restartHeroTimer(); });
        dotsWrap.appendChild(dot);
        hero.dots.push(dot);
    });

    stage.querySelectorAll('.hero-play-btn[data-track]').forEach(a =>
        a.addEventListener('click', () => trackGameClick(a.dataset.track)));
    stage.querySelectorAll('.hero-fav-btn[data-game]').forEach(b =>
        b.addEventListener('click', (e) => { e.stopPropagation(); toggleFavorite(b.dataset.game); }));
    syncHeroFavoriteButtons();

    const section = document.getElementById('featured-section');
    section.addEventListener('mouseenter', () => { hero.paused = true; section.classList.add('is-paused'); });
    section.addEventListener('mouseleave', () => { hero.paused = false; section.classList.remove('is-paused'); restartHeroTimer(); });
    document.addEventListener('visibilitychange', () => { if (!document.hidden) restartHeroTimer(); });
    if ('IntersectionObserver' in window) {
        new IntersectionObserver(([entry]) => {
            hero.visible = entry.isIntersecting;
            if (hero.visible) restartHeroTimer();
        }).observe(section);
    }
    restartHeroTimer();
}

function showHeroSlide(i) {
    if (!hero.slides.length) return;
    hero.index = (i + hero.slides.length) % hero.slides.length;
    hero.slides.forEach((s, k) => s.classList.toggle('is-active', k === hero.index));
    hero.dots.forEach((d, k) => {
        d.classList.remove('is-active');
        if (k === hero.index) {
            void d.offsetWidth; // restart progress animation
            d.classList.add('is-active');
        }
    });
}

function restartHeroTimer() {
    clearInterval(hero.timer);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    hero.timer = setInterval(() => {
        if (hero.paused || !hero.visible || document.hidden) return;
        showHeroSlide(hero.index + 1);
    }, HERO_INTERVAL_MS);
    // Re-sync progress bar with the fresh timer
    const d = hero.dots[hero.index];
    if (d) { d.classList.remove('is-active'); void d.offsetWidth; d.classList.add('is-active'); }
}

// =================================================================
// LIVE SEARCH
// =================================================================
function handleLiveSearch(query) {
    const searchSection = document.getElementById('search-results-section');
    const searchGrid = document.getElementById('search-results-grid');
    const searchTitle = document.getElementById('search-results-title');
    const searchCount = document.getElementById('search-results-count');
    const noResults = document.getElementById('search-no-results');
    const allCarousels = document.getElementById('all-game-carousels');
    const heroSection = document.getElementById('featured-section');
    if (!searchSection || !searchGrid || !allCarousels) return;

    const trimmed = (query || '').trim().toLowerCase();
    if (!trimmed) {
        searchSection.hidden = true;
        allCarousels.hidden = false;
        if (heroSection) heroSection.hidden = false;
        searchGrid.innerHTML = '';
        return;
    }

    allCarousels.hidden = true;
    if (heroSection) heroSection.hidden = true;
    searchSection.hidden = false;
    searchGrid.innerHTML = '';

    const matched = allGamesData.filter(game =>
        game.name.toLowerCase().includes(trimmed) ||
        (game.details?.['game categories'] || []).some(cat => cat.toLowerCase().includes(trimmed))
    ).sort((a, b) => {
        const aStarts = a.name.toLowerCase().startsWith(trimmed) ? 1 : 0;
        const bStarts = b.name.toLowerCase().startsWith(trimmed) ? 1 : 0;
        return (bStarts - aStarts) || ((b.clicks || 0) - (a.clicks || 0));
    });

    if (searchTitle) searchTitle.innerHTML = `Results for &ldquo;<span>${escapeHtml(query.trim())}</span>&rdquo;`;
    if (searchCount) searchCount.textContent = `${matched.length} ${matched.length === 1 ? 'game' : 'games'}`;

    if (!matched.length) {
        if (noResults) noResults.hidden = false;
    } else {
        if (noResults) noResults.hidden = true;
        const frag = document.createDocumentFragment();
        matched.forEach((game, idx) => createGameItem(game, frag, { highlightQuery: query.trim(), eager: idx < 12 }));
        searchGrid.appendChild(frag);
    }
}

function clearSearch() {
    const input = document.getElementById('searchright');
    if (input) input.value = '';
    handleLiveSearch('');
}

// =================================================================
// SIDEBAR SCROLL-SPY
// =================================================================
function setupSidebarScrollSpy() {
    if (!('IntersectionObserver' in window)) return;
    const navItems = Array.from(document.querySelectorAll('.cg-sidebar a.cg-nav-item[href^="#"]'));
    if (!navItems.length) return;
    const byId = new Map(navItems.map(a => [a.getAttribute('href').slice(1), a]));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const target = byId.get(entry.target.id);
            if (target) navItems.forEach(a => a.classList.toggle('active', a === target));
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    byId.forEach((_, id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
}

// =================================================================
// INIT
// =================================================================
async function loadGames() {
    const mapGames = (raw, popularityMap) => raw.map(gameObj => {
        const name = Object.keys(gameObj)[0];
        const details = gameObj[name];
        let clicks = popularityMap?.get(name.toLowerCase().trim());
        if (!clicks) clicks = getRealisticPlayCount(name);
        return { name, image: details['game image'], link: details['game link'], details, clicks };
    });

    try {
        const [raw, popData] = await Promise.all([
            fetch('games.json').then(r => {
                if (!r.ok) throw new Error('games.json status: ' + r.status);
                return r.json();
            }),
            fetchWithTimeout(POPULAR_GAMES_API_URL, 1000)
        ]);
        const popularityMap = new Map();
        if (Array.isArray(popData)) {
            popData.forEach(item => {
                if (item && item.name) popularityMap.set(item.name.toLowerCase().trim(), Number(item.clicks) || 0);
            });
        }
        allGamesData = mapGames(raw, popularityMap);
    } catch (error) {
        console.warn('Could not load games:', error);
        allGamesData = [];
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    loadFavorites();
    loadRecent();

    const searchInput = document.getElementById('searchright');
    if (searchInput) {
        const debounced = debounce((q) => handleLiveSearch(q), 90);
        searchInput.addEventListener('input', (e) => debounced(e.target.value));
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Escape') { clearSearch(); searchInput.blur(); }
        });
    }
    document.getElementById('clear-search-btn')?.addEventListener('click', clearSearch);
    document.getElementById('header-random-btn')?.addEventListener('click', playRandomGame);

    // Quick search shortcut ('/' or Ctrl+K)
    window.addEventListener('keydown', (e) => {
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
        if (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
            e.preventDefault();
            searchInput?.focus();
            searchInput?.select();
        }
    });

    await loadGames();
    hotGames = new Set(getPopularGames(3).map(g => g.name));
    buildHero();
    createAllCarousels();
    setupSidebarScrollSpy();

    // Searches submitted from play pages arrive as ?q=...
    const initialQuery = new URLSearchParams(window.location.search).get('q');
    if (initialQuery && searchInput) {
        searchInput.value = initialQuery;
        handleLiveSearch(initialQuery);
    }

    window.addEventListener('resize', debounce(() => initializeCarouselFunctionality(), 200));
});

// Expose on window for interoperability
window.blooketGames = {
    get allGamesData() { return allGamesData; },
    set allGamesData(val) { allGamesData = val; },
    get favoriteGames() { return favoriteGames; },
    createGameItem,
    toggleFavorite,
    trackGameClick,
    handleLiveSearch,
    clearSearch,
    playRandomGame,
    toTitleCase
};
