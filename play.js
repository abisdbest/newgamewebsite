/**
 * =================================================================
 * BLOOKET1 - PLAY PAGE ENGINE
 * =================================================================
 * Reads its settings from <body data-*> so every play page can use
 * this one file:
 *   data-game     exact game name in games.json
 *   data-src      path to the game's index.html
 *   data-dpad     "arrows" | "wasd" | "none"   (mobile d-pad)
 *   data-buttons  "Space:Jump,KeyZ:Z"          (mobile action buttons)
 *
 * 1. Player: click-to-play, loading state, restart, theater,
 *    fullscreen (+ iOS fallback), about:blank cloak, share, report
 * 2. Mobile touch controls that send real key events into the game
 * 3. Recommendations (side grid, "Up next", rails) from games.json
 * 4. Favorites + "Continue playing" history shared with the homepage
 * 5. AdSense slots from one config, only pushed when visible
 * 6. Header search suggestions + random game
 * =================================================================
 */
(() => {
    'use strict';

    // -----------------------------------------------------------------
    // CONFIG
    // -----------------------------------------------------------------
    const ROOT = '../../';

    /**
     * Ad units. Swap each slot ID here once you create dedicated units
     * in AdSense (one per placement lets you see what earns what).
     * format: null = fixed size from CSS (the 300x600 sidebar).
     */
    const AD_CONFIG = {
        client: 'ca-pub-5346759304245799',
        slots: {
            leaderboard: { slot: '5440051367', format: 'horizontal', formatMobile: 'auto', responsive: true },
            sidebar:     { slot: '5440051367', format: null },
            inArticle:   { slot: '5440051367', format: 'auto', responsive: true },
            multiplex:   { slot: '5440051367', format: 'auto', responsive: true }
            // Dedicated units later, e.g.:
            // inArticle: { slot: 'XXXXXXXXXX', format: 'fluid', layout: 'in-article' },
            // multiplex: { slot: 'XXXXXXXXXX', format: 'autorelaxed' },
        }
    };

    const WORKER_BASE_URL = 'https://blooket1-api.arielblau2.workers.dev';
    const POPULAR_GAMES_API_URL = `${WORKER_BASE_URL}/popular-games`;
    const TRACK_PLAY_API_URL = `${WORKER_BASE_URL}/track-play`;
    const RECENT_LIMIT = 14;
    const SIDE_COUNT = 10;
    const QUICK_COUNT = 8;

    // Used only to ORDER recommendations when the live API is unavailable
    // (never displayed as a play count).
    const FALLBACK_RANK = [
        'slope', '1v1.lol', 'retro bowl', 'cookie clicker', 'geometry dash lite', 'subway surfers',
        'basket random', 'space waves', 'monkey mart', 'minecraft', 'temple run 2', 'flappy bird',
        'rooftop snipers', 'snow rider 3d', 'getaway shootout', 'bitlife', 'crossy road',
        'cut the rope', 'doodle jump', 'fireboy and watergirl', 'happy wheels', 'capybara clicker',
        'block blast', '2048', 'duck life 4', 'eggy car', 'paperio', 'moto x3m pool party'
    ];

    const CATEGORY_CONFIG = {
        'Action':          { id: 'category-action',    title: 'Action' },
        'Addictive Games': { id: 'category-addictive', title: 'Addictive' },
        'Driving':         { id: 'category-driving',   title: 'Driving' },
        'Puzzle':          { id: 'category-puzzle',    title: 'Puzzle' },
        'Sports':          { id: 'category-sports',    title: 'Sports' },
        '2-Player':        { id: 'category-2-player',  title: '2 Player' },
        'Retro Games':     { id: 'category-retro',     title: 'Retro' },
        'Clicker':         { id: 'category-clicker',   title: 'Clicker' },
        'Tools':           { id: 'category-tools',     title: 'Tools' }
    };

    // -----------------------------------------------------------------
    // STATE
    // -----------------------------------------------------------------
    const body = document.body;
    const GAME_NAME = (body.dataset.game || '').trim();
    const GAME_SRC = body.dataset.src || '';
    const isTouch = window.matchMedia('(pointer: coarse)').matches || navigator.maxTouchPoints > 0 && window.matchMedia('(hover: none)').matches;
    if (isTouch) document.documentElement.classList.add('is-touch');

    let allGames = [];
    let currentGame = null;
    let favoriteGames = new Set();
    let recentGames = [];
    let started = false;

    const $ = (id) => document.getElementById(id);
    const shell = $('player-shell');
    const iframe = $('game-iframe');
    const loading = $('player-loading');

    // -----------------------------------------------------------------
    // HELPERS
    // -----------------------------------------------------------------
    const store = {
        get(key, fallback) {
            try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); } catch (e) { return fallback; }
        },
        set(key, value) {
            try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable */ }
        }
    };

    function escapeHtml(text) {
        return String(text ?? '')
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    function toTitleCase(str) {
        return (str || '').replace(/\w\S*/g, (t) => t.charAt(0).toUpperCase() + t.substr(1).toLowerCase());
    }

    function formatPlays(n) {
        if (!n) return '0';
        if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'm';
        if (n >= 1e3) return (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'k';
        return String(n);
    }

    function categoriesOf(game) {
        return (game?.details?.['game categories'] || []).filter((c) => c !== 'Popular Games');
    }

    function primaryCategory(game) {
        const cats = categoriesOf(game);
        return cats.find((c) => c !== 'Addictive Games') || cats[0] || null;
    }

    /** The category this page is filed under: taken from the breadcrumb link, else games.json */
    function pageCategory() {
        const crumb = document.querySelector('.play-breadcrumbs a[href*="category"]');
        if (crumb) {
            const m = /category[-/]([a-z0-9-]+)/.exec(crumb.getAttribute('href'));
            const id = m ? 'category-' + m[1] : '';
            const match = Object.keys(CATEGORY_CONFIG).find((c) => CATEGORY_CONFIG[c].id === id);
            if (match) return match;
        }
        return primaryCategory(currentGame);
    }

    function categoryTitle(cat) {
        return CATEGORY_CONFIG[cat]?.title || cat || 'Arcade';
    }

    function isNewGame(game) {
        const d = game.details?.['date added'];
        return d ? (Date.now() - new Date(d).getTime()) / 86400000 <= 30 : false;
    }

    async function fetchWithTimeout(url, ms) {
        const controller = new AbortController();
        const t = setTimeout(() => controller.abort(), ms);
        try {
            const res = await fetch(url, { signal: controller.signal });
            clearTimeout(t);
            return res.ok ? await res.json() : null;
        } catch (e) {
            clearTimeout(t);
            return null;
        }
    }

    let toastTimer = null;
    function toast(message) {
        const el = $('play-toast');
        if (!el) return;
        el.textContent = message;
        el.classList.add('is-visible');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => el.classList.remove('is-visible'), 2200);
    }

    function track(event, params) {
        try { if (typeof gtag === 'function') gtag('event', event, params); } catch (e) {}
    }

    // -----------------------------------------------------------------
    // FAVORITES + HISTORY (same localStorage keys as the homepage)
    // -----------------------------------------------------------------
    function loadPersistence() {
        const favs = store.get('favoriteGames', []);
        favoriteGames = new Set(Array.isArray(favs) ? favs : []);
        const rec = store.get('recentGames', []);
        recentGames = Array.isArray(rec) ? rec.slice(0, RECENT_LIMIT) : [];
    }

    function pushRecent(name) {
        recentGames = [name, ...recentGames.filter((n) => n !== name)].slice(0, RECENT_LIMIT);
        store.set('recentGames', recentGames);
    }

    function trackPlay(name) {
        pushRecent(name);
        try {
            // Deduplicate plays in the current browser session to prevent quota waste
            const sessionKey = 'b1_played_' + name;
            if (sessionStorage.getItem(sessionKey)) return;
            sessionStorage.setItem(sessionKey, '1');

            fetch(TRACK_PLAY_API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ game: name }),
                keepalive: true
            }).catch(() => {});
        } catch (e) {}
    }

    function toggleFavorite(name) {
        const isFav = !favoriteGames.has(name);
        if (isFav) favoriteGames.add(name); else favoriteGames.delete(name);
        store.set('favoriteGames', Array.from(favoriteGames));
        syncFavoriteUI(name, isFav);
        return isFav;
    }

    function syncFavoriteUI(name, isFav) {
        document.querySelectorAll('.game-item').forEach((item) => {
            if (item.dataset.gameName !== name) return;
            const btn = item.querySelector('.favorite-btn');
            if (!btn) return;
            btn.classList.toggle('is-favorite', isFav);
            btn.innerHTML = `<i class="${isFav ? 'fas' : 'far'} fa-heart"></i>`;
        });
        if (name === GAME_NAME) {
            const btn = $('btn-fav');
            if (btn) {
                btn.setAttribute('aria-pressed', String(isFav));
                btn.dataset.label = isFav ? 'Favorited' : 'Favorite';
                btn.innerHTML = `<i class="${isFav ? 'fas' : 'far'} fa-heart"></i>`;
            }
        }
    }

    // -----------------------------------------------------------------
    // DATA
    // -----------------------------------------------------------------
    async function loadGames() {
        try {
            const [raw, pop] = await Promise.all([
                fetch(ROOT + 'games.json').then((r) => {
                    if (!r.ok) throw new Error('games.json ' + r.status);
                    return r.json();
                }),
                fetchWithTimeout(POPULAR_GAMES_API_URL, 1500)
            ]);
            const plays = new Map();
            if (Array.isArray(pop)) {
                pop.forEach((p) => { if (p && p.name) plays.set(p.name.toLowerCase().trim(), Number(p.clicks) || 0); });
            }
            allGames = raw.map((obj) => {
                const name = Object.keys(obj)[0];
                const details = obj[name];
                const key = name.toLowerCase().trim();
                const real = plays.get(key) || 0;
                const fb = FALLBACK_RANK.indexOf(key);
                return {
                    name,
                    details,
                    image: ROOT + details['game image'],
                    link: ROOT + details['game link'],
                    plays: real,
                    score: real || (fb === -1 ? 0 : (FALLBACK_RANK.length - fb) / 1000)
                };
            });
        } catch (e) {
            console.warn('Could not load games:', e);
            allGames = [];
        }
        currentGame = allGames.find((g) => g.name === GAME_NAME) || null;
    }

    // -----------------------------------------------------------------
    // GAME CARDS (same markup/classes as the homepage)
    // -----------------------------------------------------------------
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
        }

        const info = document.createElement('div');
        info.className = 'game-card-overlay';
        const name = document.createElement('span');
        name.className = 'game-name';
        name.textContent = toTitleCase(game.name);
        const meta = document.createElement('span');
        meta.className = 'game-meta';
        meta.innerHTML = `<span class="game-chip">${escapeHtml(categoryTitle(primaryCategory(game)))}</span>` +
            (game.plays > 0 ? `<span class="game-plays"><i class="fas fa-play"></i>${formatPlays(game.plays)}</span>` : '');
        info.append(name, meta);
        thumb.appendChild(info);

        const link = document.createElement('a');
        link.href = game.link;
        link.className = 'full-card-link';
        link.setAttribute('aria-label', `Play ${toTitleCase(game.name)}`);
        link.addEventListener('click', () => {
            pushRecent(game.name);
            track('select_content', { content_type: 'recommended_game', item_id: game.name, from_game: GAME_NAME });
        });

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

    function fillGrid(id, games, eagerCount = 0) {
        const grid = $(id);
        if (!grid) return;
        const frag = document.createDocumentFragment();
        games.forEach((g, i) => createGameItem(g, frag, { eager: i < eagerCount }));
        grid.replaceChildren(frag);
    }

    function createRail(container, title, games, options = {}) {
        if (!games.length) return;
        const section = document.createElement('section');
        section.className = 'game-category-section';

        const head = document.createElement('div');
        head.className = 'category-header-wrap';
        const h2 = document.createElement('h2');
        h2.className = 'category-title';
        h2.innerHTML = (options.icon ? `<i class="${options.icon}"></i>` : '') + `<span>${escapeHtml(title)}</span>`;
        head.appendChild(h2);

        if (options.href) {
            const a = document.createElement('a');
            a.className = 'view-all-btn';
            a.href = options.href;
            a.innerHTML = '<span>View all</span><i class="fas fa-chevron-right"></i>';
            head.appendChild(a);
        }

        const rail = document.createElement('div');
        rail.className = 'game-carousel-container';
        const left = document.createElement('button');
        left.type = 'button';
        left.className = 'carousel-arrow carousel-arrow-left';
        left.setAttribute('aria-label', 'Scroll left');
        left.innerHTML = '<i class="fas fa-chevron-left"></i>';
        const right = document.createElement('button');
        right.type = 'button';
        right.className = 'carousel-arrow carousel-arrow-right';
        right.setAttribute('aria-label', 'Scroll right');
        right.innerHTML = '<i class="fas fa-chevron-right"></i>';
        const track = document.createElement('div');
        track.className = 'game-carousel';
        games.forEach((g, i) => createGameItem(g, track, { rank: options.ranked ? i + 1 : undefined, hideNewBadge: options.hideNewBadge }));

        rail.append(left, track, right);
        section.append(head, rail);
        container.appendChild(section);

        const update = () => {
            const max = track.scrollWidth - track.clientWidth;
            left.disabled = track.scrollLeft <= 4;
            right.disabled = max <= 4 || track.scrollLeft >= max - 4;
        };
        const page = (dir) => track.scrollBy({ left: dir * Math.max(track.clientWidth * 0.85, 200), behavior: 'smooth' });
        left.addEventListener('click', () => page(-1));
        right.addEventListener('click', () => page(1));
        let ticking = false;
        track.addEventListener('scroll', () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => { update(); ticking = false; });
        }, { passive: true });
        railUpdaters.push(update);
        if ('IntersectionObserver' in window) {
            new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && update()), { rootMargin: '200px 0px' }).observe(section);
        } else {
            update();
        }
    }

    const railUpdaters = [];

    function buildRecommendations() {
        const others = allGames.filter((g) => g.name !== GAME_NAME);
        const byScore = (a, b) => b.score - a.score;
        const myCats = new Set(categoriesOf(currentGame).filter((c) => c !== 'Addictive Games'));
        const mainCat = pageCategory();

        // Related first (shared categories, weighted), then popular
        const overlap = (g) => categoriesOf(g).filter((c) => myCats.has(c)).length;
        const related = others.filter((g) => overlap(g) > 0).sort((a, b) => (overlap(b) - overlap(a)) || byScore(a, b));
        const popular = [...others].sort(byScore);
        const picks = [];
        const seen = new Set();
        const take = (list, n) => { for (const g of list) { if (picks.length >= n) break; if (!seen.has(g.name)) { seen.add(g.name); picks.push(g); } } };
        take(related.slice(0, 6), 6);
        take(popular, SIDE_COUNT);
        take(related, SIDE_COUNT);

        fillGrid('side-grid', picks, 4);
        fillGrid('side-grid-quick', picks.slice(0, QUICK_COUNT));
        nextPicks = picks.filter((g) => !recentGames.includes(g.name)).concat(picks).slice(0, 3);

        const rails = $('play-rails');
        if (!rails) return;
        rails.replaceChildren();

        if (mainCat) {
            const sameCat = others.filter((g) => categoriesOf(g).includes(mainCat)).sort(byScore);
            const cfg = CATEGORY_CONFIG[mainCat];
            createRail(rails, `More ${categoryTitle(mainCat)} games`, sameCat, {
                icon: 'fas fa-layer-group',
                href: cfg ? ROOT + 'category/' + cfg.id.replace(/^category-/, '') + '/' : ROOT
            });
        }

        const byName = new Map(allGames.map((g) => [g.name, g]));
        const recent = recentGames.filter((n) => n !== GAME_NAME).map((n) => byName.get(n)).filter(Boolean);
        if (recent.length) {
            createRail(rails, 'Continue playing', recent, { icon: 'fas fa-clock-rotate-left', hideNewBadge: true });
        }

        createRail(rails, 'Popular right now', popular.slice(0, 12), { icon: 'fas fa-fire', ranked: true, href: ROOT + '#category-popular' });

        const fresh = [...others]
            .sort((a, b) => new Date(b.details?.['date added'] || 0) - new Date(a.details?.['date added'] || 0))
            .slice(0, 14);
        createRail(rails, 'New games', fresh, { icon: 'fas fa-star', hideNewBadge: true, href: ROOT + '#category-new' });

        window.addEventListener('resize', () => railUpdaters.forEach((fn) => fn()), { passive: true });
    }

    // -----------------------------------------------------------------
    // "NEXT GAME" PROMPT - once per page, only after real play time
    // -----------------------------------------------------------------
    const NEXT_MIN_PLAY_MS = 45000;
    let nextPicks = [];
    let nextShown = false;
    let playStartedAt = 0;

    function maybeShowNext(reason) {
        if (nextShown || !started || !nextPicks.length) return;
        if (Date.now() - playStartedAt < NEXT_MIN_PLAY_MS) return;
        nextShown = true;

        const panel = document.createElement('aside');
        panel.className = 'next-prompt';
        panel.setAttribute('aria-label', 'Try another game');
        panel.innerHTML = `
          <div class="next-prompt-head">
            <span><i class="fas fa-gamepad"></i> Try another game</span>
            <button type="button" class="next-prompt-close" aria-label="Close"><i class="fas fa-xmark"></i></button>
          </div>
          <div class="side-grid next-prompt-grid"></div>`;
        const grid = panel.querySelector('.next-prompt-grid');
        nextPicks.forEach((g) => createGameItem(g, grid, { eager: true }));
        grid.querySelectorAll('.full-card-link').forEach((a) =>
            a.addEventListener('click', () => track('next_game_click', { from_game: GAME_NAME, reason })));

        const close = () => {
            panel.classList.remove('is-visible');
            setTimeout(() => panel.remove(), 300);
        };
        panel.querySelector('.next-prompt-close').addEventListener('click', close);
        document.addEventListener('keydown', function onEsc(e) {
            if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onEsc); }
        });

        body.appendChild(panel);
        requestAnimationFrame(() => panel.classList.add('is-visible'));
        track('next_game_prompt', { from_game: GAME_NAME, reason });
    }

    function setupNextPrompt() {
        // Desktop exit intent: pointer leaves through the top of the window
        document.addEventListener('mouseout', (e) => {
            if (!e.relatedTarget && e.clientY <= 0) maybeShowNext('exit_intent');
        });
    }

    function applyGameMeta() {
        if (!currentGame) return;
        const playsEl = $('player-plays');
        if (playsEl && typeof currentGame.plays === 'number') {
            const count = currentGame.plays;
            playsEl.innerHTML = `<i class="fas fa-play"></i>${formatPlays(count)} ${count === 1 ? 'play' : 'plays'}`;
            playsEl.hidden = false;
        }
        // Highlight the game's category in the sidebar
        const main = pageCategory();
        document.querySelectorAll('.cg-sidebar .cg-nav-item[data-cat]').forEach((a) => {
            a.classList.toggle('active', a.dataset.cat === main);
        });
    }

    // -----------------------------------------------------------------
    // PLAYER
    // -----------------------------------------------------------------
    let loadTimer = null;

    function loadFrame() {
        if (!iframe || !GAME_SRC) return;
        if (loading) loading.hidden = false;
        clearTimeout(loadTimer);
        loadTimer = setTimeout(() => { if (loading) loading.hidden = true; }, 15000);
        iframe.src = GAME_SRC;
    }

    function startGame() {
        if (started) return;
        started = true;
        playStartedAt = Date.now();
        shell.classList.add('is-playing');
        loadFrame();
        trackPlay(GAME_NAME);
        track('game_start', { game_name: GAME_NAME });
        updateTouchControls();
    }

    function focusGame() {
        try {
            iframe.focus();
            iframe.contentWindow.focus();
        } catch (e) {}
    }

    function setupPlayer() {
        if (!shell || !iframe) return;

        $('player-cover')?.addEventListener('click', startGame);
        $('play-btn')?.addEventListener('click', (e) => { e.stopPropagation(); startGame(); });

        iframe.addEventListener('load', () => {
            if (!iframe.getAttribute('src')) return;
            clearTimeout(loadTimer);
            if (loading) loading.hidden = true;
            focusGame();
        });

        // Restart
        $('btn-reload')?.addEventListener('click', () => {
            if (!started) { startGame(); return; }
            loadFrame();
            toast('Game restarted');
        });

        // Favorite
        const favBtn = $('btn-fav');
        syncFavoriteUI(GAME_NAME, favoriteGames.has(GAME_NAME));
        favBtn?.addEventListener('click', () => {
            const isFav = toggleFavorite(GAME_NAME);
            favBtn.classList.remove('is-popping');
            void favBtn.offsetWidth;
            favBtn.classList.add('is-popping');
            toast(isFav ? 'Added to favorites' : 'Removed from favorites');
        });

        // Theater
        const theaterBtn = $('btn-theater');
        const setTheater = (on) => {
            body.classList.toggle('is-theater', on);
            theaterBtn?.setAttribute('aria-pressed', String(on));
            if (theaterBtn) theaterBtn.dataset.label = on ? 'Exit theater mode' : 'Theater mode';
            store.set('playTheater', on);
            railUpdaters.forEach((fn) => fn());
        };
        if (store.get('playTheater', false) && window.innerWidth > 900) setTheater(true);
        theaterBtn?.addEventListener('click', () => {
            setTheater(!body.classList.contains('is-theater'));
            shell.scrollIntoView({ block: 'start', behavior: 'smooth' });
        });

        // Fullscreen
        $('btn-fullscreen')?.addEventListener('click', () => {
            startGame();
            if (isFullscreen()) exitFullscreen(); else enterFullscreen();
        });
        $('player-exit-fs')?.addEventListener('click', exitFullscreen);
        document.addEventListener('fullscreenchange', onFullscreenChange);
        document.addEventListener('webkitfullscreenchange', onFullscreenChange);
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && body.classList.contains('is-pseudo-fs')) exitFullscreen();
        });

        // about:blank cloak (lives in the ⋯ menu)
        $('btn-cloak')?.addEventListener('click', openCloaked);

        // More menu
        const moreBtn = $('btn-more');
        const menu = $('player-menu');
        const closeMenu = () => { if (menu) menu.hidden = true; moreBtn?.setAttribute('aria-expanded', 'false'); };
        moreBtn?.addEventListener('click', (e) => {
            e.stopPropagation();
            const open = menu.hidden;
            menu.hidden = !open;
            moreBtn.setAttribute('aria-expanded', String(open));
        });
        document.addEventListener('click', (e) => { if (menu && !menu.hidden && !e.target.closest('.player-menu-wrap')) closeMenu(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });

        $('menu-share')?.addEventListener('click', async () => {
            closeMenu();
            const data = { title: `${toTitleCase(GAME_NAME)} on Blooket1`, url: location.href.split('#')[0] };
            try {
                if (navigator.share) { await navigator.share(data); return; }
                await navigator.clipboard.writeText(data.url);
                toast('Link copied');
            } catch (e) {
                if (e && e.name === 'AbortError') return;
                toast('Copy the link from the address bar');
            }
        });

        $('menu-cloak')?.addEventListener('click', () => {
            closeMenu();
            openCloaked();
        });

        $('menu-report')?.addEventListener('click', () => {
            closeMenu();
            const subject = encodeURIComponent(`Problem with ${toTitleCase(GAME_NAME)}`);
            const bodyText = encodeURIComponent(`Game: ${toTitleCase(GAME_NAME)}\nPage: ${location.href}\nDevice: ${navigator.userAgent}\n\nWhat went wrong?\n`);
            window.location.href = `mailto:support@blooket1.com?subject=${subject}&body=${bodyText}`;
        });

        $('menu-touch')?.addEventListener('click', () => {
            closeMenu();
            const off = !store.get('touchControlsOff', false);
            store.set('touchControlsOff', off);
            updateTouchControls();
            toast(off ? 'Touch controls hidden' : 'Touch controls shown');
        });
    }

    function isFullscreen() {
        return !!(document.fullscreenElement || document.webkitFullscreenElement || body.classList.contains('is-pseudo-fs'));
    }

    function enterFullscreen() {
        const req = shell.requestFullscreen || shell.webkitRequestFullscreen;
        if (req && (document.fullscreenEnabled || document.webkitFullscreenEnabled)) {
            Promise.resolve(req.call(shell, { navigationUI: 'hide' }))
                .then(() => {
                    if (isTouch && screen.orientation && screen.orientation.lock) screen.orientation.lock('landscape').catch(() => {});
                })
                .catch(() => enterPseudoFullscreen());
        } else {
            enterPseudoFullscreen();
        }
    }

    function enterPseudoFullscreen() {
        body.classList.add('is-pseudo-fs');
        onFullscreenChange();
        window.scrollTo(0, 0);
    }

    function exitFullscreen() {
        if (body.classList.contains('is-pseudo-fs')) {
            body.classList.remove('is-pseudo-fs');
            onFullscreenChange();
            return;
        }
        const exit = document.exitFullscreen || document.webkitExitFullscreen;
        if (exit) Promise.resolve(exit.call(document)).catch(() => {});
    }

    let wasFullscreen = false;
    function onFullscreenChange() {
        const on = isFullscreen();
        const btn = $('btn-fullscreen');
        if (btn) {
            btn.innerHTML = `<i class="fas ${on ? 'fa-compress' : 'fa-expand'}"></i>`;
            btn.dataset.label = on ? 'Exit fullscreen' : 'Fullscreen';
        }
        if (wasFullscreen && !on) setTimeout(() => maybeShowNext('exit_fullscreen'), 400);
        wasFullscreen = on;
        setTimeout(focusGame, 50);
    }

    function openCloaked() {
        const url = new URL(GAME_SRC, location.href).href;
        const win = window.open('about:blank', '_blank');
        if (!win) { toast('Allow pop-ups to use the cloak'); return; }
        const doc = win.document;
        doc.title = 'Classes';
        const icon = doc.createElement('link');
        icon.rel = 'icon';
        icon.href = 'https://ssl.gstatic.com/classroom/favicon.png';
        doc.head.appendChild(icon);
        doc.body.style.margin = '0';
        const frame = doc.createElement('iframe');
        frame.src = url;
        frame.allow = 'autoplay; fullscreen; gamepad';
        frame.setAttribute('allowfullscreen', '');
        frame.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;border:none;margin:0;padding:0;';
        doc.body.appendChild(frame);
        track('game_cloak', { game_name: GAME_NAME });
    }

    // -----------------------------------------------------------------
    // TOUCH CONTROLS -> synthetic keyboard events inside the game
    // -----------------------------------------------------------------
    const KEY_TABLE = {
        ArrowUp: [38, 'ArrowUp'], ArrowDown: [40, 'ArrowDown'], ArrowLeft: [37, 'ArrowLeft'], ArrowRight: [39, 'ArrowRight'],
        Space: [32, ' '], Enter: [13, 'Enter'], Escape: [27, 'Escape'], Tab: [9, 'Tab'],
        ShiftLeft: [16, 'Shift'], ControlLeft: [17, 'Control'], AltLeft: [18, 'Alt']
    };

    const DPAD_MAPS = {
        arrows: { up: 'ArrowUp', down: 'ArrowDown', left: 'ArrowLeft', right: 'ArrowRight' },
        wasd: { up: 'KeyW', down: 'KeyS', left: 'KeyA', right: 'KeyD' }
    };

    function keyInfo(code) {
        if (KEY_TABLE[code]) return KEY_TABLE[code];
        let m = /^Key([A-Z])$/.exec(code);
        if (m) return [m[1].charCodeAt(0), m[1].toLowerCase()];
        m = /^Digit([0-9])$/.exec(code);
        if (m) return [48 + Number(m[1]), m[1]];
        return [0, code];
    }

    /** Finds the innermost same-origin document actually running the game */
    function gameTarget() {
        let win = iframe.contentWindow;
        for (let depth = 0; depth < 3 && win; depth++) {
            let doc;
            try { doc = win.document; } catch (e) { return null; }
            if (!doc) return null;
            const canvas = doc.querySelector('canvas');
            const inner = doc.querySelectorAll('iframe');
            if (!canvas && inner.length === 1) {
                try { if (inner[0].contentWindow.document) { win = inner[0].contentWindow; continue; } } catch (e) { /* cross-origin */ }
            }
            const active = doc.activeElement && doc.activeElement !== doc.body ? doc.activeElement : null;
            return { win, el: canvas || active || doc.body || doc.documentElement };
        }
        return null;
    }

    function sendKey(type, code) {
        const target = gameTarget();
        if (!target) return;
        const [keyCode, key] = keyInfo(code);
        const Ctor = target.win.KeyboardEvent || KeyboardEvent;
        const ev = new Ctor(type, { key, code, keyCode, which: keyCode, bubbles: true, cancelable: true, composed: true, view: target.win });
        try {
            Object.defineProperty(ev, 'keyCode', { get: () => keyCode });
            Object.defineProperty(ev, 'which', { get: () => keyCode });
            Object.defineProperty(ev, 'charCode', { get: () => (type === 'keypress' ? keyCode : 0) });
        } catch (e) {}
        target.el.dispatchEvent(ev);
    }

    const buzz = () => { try { navigator.vibrate && navigator.vibrate(8); } catch (e) {} };

    function setupTouchControls() {
        const pad = $('touch-dpad');
        const btnWrap = $('touch-buttons');
        const map = DPAD_MAPS[(body.dataset.dpad || 'arrows').toLowerCase()];

        if (pad && map) {
            const keys = {};
            pad.querySelectorAll('[data-dir]').forEach((el) => { keys[el.dataset.dir] = el; });
            let pressed = new Set();
            let activePointer = null;

            const apply = (next) => {
                pressed.forEach((dir) => { if (!next.has(dir)) { sendKey('keyup', map[dir]); keys[dir]?.classList.remove('is-pressed'); } });
                next.forEach((dir) => { if (!pressed.has(dir)) { sendKey('keydown', map[dir]); keys[dir]?.classList.add('is-pressed'); buzz(); } });
                pressed = next;
            };

            const fromPoint = (e) => {
                const r = pad.getBoundingClientRect();
                const dx = e.clientX - (r.left + r.width / 2);
                const dy = e.clientY - (r.top + r.height / 2);
                const dead = r.width * 0.1;
                const next = new Set();
                // 8-way: a direction counts if it's at least half as strong as the other axis
                if (Math.abs(dx) > dead && Math.abs(dx) >= Math.abs(dy) * 0.5) next.add(dx < 0 ? 'left' : 'right');
                if (Math.abs(dy) > dead && Math.abs(dy) >= Math.abs(dx) * 0.5) next.add(dy < 0 ? 'up' : 'down');
                return next;
            };

            pad.addEventListener('pointerdown', (e) => {
                e.preventDefault();
                activePointer = e.pointerId;
                try { pad.setPointerCapture(e.pointerId); } catch (err) {}
                apply(fromPoint(e));
            });
            pad.addEventListener('pointermove', (e) => { if (e.pointerId === activePointer) apply(fromPoint(e)); });
            const release = (e) => { if (e.pointerId !== activePointer) return; activePointer = null; apply(new Set()); };
            pad.addEventListener('pointerup', release);
            pad.addEventListener('pointercancel', release);
            pad.addEventListener('lostpointercapture', release);
        } else if (pad) {
            pad.hidden = true;
        }

        // Action buttons: "Space:Jump,KeyZ:Z"
        const defs = (body.dataset.buttons || '').split(',').map((s) => s.trim()).filter(Boolean).slice(0, 3);
        if (btnWrap) {
            defs.forEach((def) => {
                const [code, label] = def.split(':').map((s) => s.trim());
                const b = document.createElement('button');
                b.type = 'button';
                b.className = 'touch-btn';
                b.textContent = label || code.replace(/^Key|^Digit/, '');
                b.setAttribute('aria-label', label || code);
                let down = false;
                const press = (e) => { e.preventDefault(); if (down) return; down = true; b.classList.add('is-pressed'); sendKey('keydown', code); buzz(); try { b.setPointerCapture(e.pointerId); } catch (err) {} };
                const lift = () => { if (!down) return; down = false; b.classList.remove('is-pressed'); sendKey('keyup', code); };
                b.addEventListener('pointerdown', press);
                b.addEventListener('pointerup', lift);
                b.addEventListener('pointercancel', lift);
                b.addEventListener('lostpointercapture', lift);
                btnWrap.appendChild(b);
            });
        }

        const wrap = $('touch-controls');
        wrap?.addEventListener('contextmenu', (e) => e.preventDefault());
        hasTouchControls = !!map || defs.length > 0;
        if (!hasTouchControls) $('menu-touch')?.remove();
    }

    let hasTouchControls = false;

    function updateTouchControls() {
        const wrap = $('touch-controls');
        if (!wrap) return;
        const off = store.get('touchControlsOff', false);
        wrap.hidden = !(isTouch && started && hasTouchControls && !off);
        const label = $('menu-touch')?.querySelector('span');
        if (label) label.textContent = off ? 'Show touch controls' : 'Hide touch controls';
    }

    // -----------------------------------------------------------------
    // ADS - configure from AD_CONFIG, push only when the slot is visible
    // -----------------------------------------------------------------
    function setupAds() {
        const slots = Array.from(document.querySelectorAll('ins.adsbygoogle[data-ad-key]'));
        if (!slots.length) return;

        const fill = (ins) => {
            if (ins.dataset.adPushed) return;
            const cfg = AD_CONFIG.slots[ins.dataset.adKey];
            if (!cfg || !cfg.slot) return;
            ins.dataset.adPushed = '1';
            ins.setAttribute('data-ad-client', AD_CONFIG.client);
            ins.setAttribute('data-ad-slot', cfg.slot);
            const format = (cfg.formatMobile && window.innerWidth <= 900) ? cfg.formatMobile : cfg.format;
            if (format) ins.setAttribute('data-ad-format', format);
            if (cfg.layout) ins.setAttribute('data-ad-layout', cfg.layout);
            if (cfg.responsive) ins.setAttribute('data-full-width-responsive', 'true');
            try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
        };

        if (!('IntersectionObserver' in window)) {
            slots.forEach((ins) => { if (ins.offsetWidth > 0) fill(ins); });
            return;
        }
        // Hidden slots (display:none at this breakpoint) never intersect, so they're never requested
        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.target.offsetWidth > 0) {
                    fill(entry.target);
                    io.unobserve(entry.target);
                }
            });
        }, { rootMargin: '400px 0px' });
        slots.forEach((ins) => io.observe(ins));
    }

    // -----------------------------------------------------------------
    // HEADER: search suggestions, random game, "/" shortcut
    // -----------------------------------------------------------------
    function setupHeader() {
        const input = $('searchright');
        const box = $('play-search-suggest');
        const form = $('play-search-form');
        let active = -1;
        let results = [];

        const render = () => {
            const q = (input.value || '').trim().toLowerCase();
            if (!q || !allGames.length) { box.hidden = true; return; }
            results = allGames.filter((g) =>
                g.name.toLowerCase().includes(q) || categoriesOf(g).some((c) => c.toLowerCase().includes(q))
            ).sort((a, b) => (b.name.toLowerCase().startsWith(q) - a.name.toLowerCase().startsWith(q)) || (b.score - a.score)).slice(0, 6);
            active = -1;
            box.innerHTML = results.length
                ? results.map((g, i) => `<a class="suggest-item" href="${escapeHtml(g.link)}" data-i="${i}"><img src="${escapeHtml(g.image)}" alt="" loading="lazy" /><span>${escapeHtml(toTitleCase(g.name))}<small>${escapeHtml(categoryTitle(primaryCategory(g)))}</small></span></a>`).join('')
                : '<div class="suggest-empty">No games found. Press Enter to search everything.</div>';
            box.hidden = false;
        };

        const highlight = () => box.querySelectorAll('.suggest-item').forEach((el, i) => el.classList.toggle('is-active', i === active));

        if (input && box) {
            input.addEventListener('input', render);
            input.addEventListener('focus', render);
            input.addEventListener('keydown', (e) => {
                if (box.hidden) return;
                if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(active + 1, results.length - 1); highlight(); }
                else if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(active - 1, -1); highlight(); }
                else if (e.key === 'Enter' && active >= 0 && results[active]) { e.preventDefault(); window.location.href = results[active].link; }
                else if (e.key === 'Escape') { box.hidden = true; input.blur(); }
            });
            document.addEventListener('click', (e) => { if (!e.target.closest('.cg-search-bar')) box.hidden = true; });
        }
        form?.addEventListener('submit', (e) => {
            if (!(input.value || '').trim()) e.preventDefault();
        });

        window.addEventListener('keydown', (e) => {
            const tag = e.target && e.target.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA') return;
            if (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
                e.preventDefault();
                input?.focus();
                input?.select();
            }
        });

        $('header-random-btn')?.addEventListener('click', () => {
            const pool = allGames.filter((g) => g.name !== GAME_NAME);
            if (!pool.length) return;
            const pick = pool[Math.floor(Math.random() * pool.length)];
            pushRecent(pick.name);
            window.location.href = pick.link;
        });
    }

    // -----------------------------------------------------------------
    // INIT
    // -----------------------------------------------------------------
    async function init() {
        loadPersistence();
        setupPlayer();
        setupTouchControls();
        updateTouchControls();
        setupHeader();
        setupAds();
        setupNextPrompt();

        await loadGames();
        applyGameMeta();
        buildRecommendations();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();

    window.blooketPlay = {
        startGame, sendKey, toggleFavorite, enterFullscreen, exitFullscreen,
        showNextGamePrompt: () => { playStartedAt = 0; maybeShowNext('manual'); }
    };
})();
