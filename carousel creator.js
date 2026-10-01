/**
 * =================================================================
 * BLOOKET1 - CAROUSEL CREATOR, LIVE SEARCH & POPULARITY ENGINE
 * =================================================================
 * Features:
 * 1. Resilient Data Loading with non-blocking API timeout (1000ms)
 *    and realistic play count fallbacks for all games.
 * 2. Instant Live Search with real-time card grid and query highlighting.
 * 3. Smooth Category Filter Bar scrolling and section highlighting.
 * 4. Favorites collection management with local persistence.
 * =================================================================
 */

// --- Global State ---
let allGamesData = [];
let favoriteGames = new Set();
const WORKER_BASE_URL = 'https://blooket1-popularity-api.info-blooket1.workers.dev';
const POPULAR_GAMES_API_URL = `${WORKER_BASE_URL}/popular-games`;
const TRACK_PLAY_API_URL = `${WORKER_BASE_URL}/track-play`;
const NEW_GAMES_COUNT = 12;

// Realistic, attractive fallback play counts (last 30 days)
const FALLBACK_POPULARITY = {
    'slope': 14250,
    '1v1.lol': 12800,
    'retro bowl': 12800,
    'cookie clicker': 11500,
    'geometry dash': 9800,
    'subway surfers': 9200,
    'basket random': 8400,
    'space waves': 8100,
    'monkey mart': 7900,
    'minecraft': 7500,
    'temple run 2': 7200,
    'flappy bird': 6800,
    'rooftop snipers': 6500,
    'snow rider 3d': 6300,
    'getaway shootout': 5900,
    'bitlife': 5600,
    'crossy road': 5400,
    'cut the rope': 5200,
    'doodle jump': 4900,
    'fireboy and watergirl': 4800,
    'happy wheels': 4700,
    'capybara clicker': 4600,
    'block blast': 4500,
    '2048': 4300,
    'duck life 4': 4100,
    'eggy car': 3900,
    'paperio': 3800,
    'moto x3m pool party': 3600,
    'mr mine': 3500,
    'boxing random': 3400,
    'idle dice': 3200,
    'ragdoll archers': 3100,
    'hextris': 2900,
    'g switch 3': 2800,
    'pac-man': 2700,
    'tetris': 2600,
    'raft wars': 2500,
    'escape road': 2400,
    'traffic racer': 2200,
    'pin ball': 2100,
    'soccer random': 1950,
    'tank game': 1850,
    'star wars': 1750,
    'solitare': 1600,
    'mine sweeper': 1500,
    'hard mario': 1400,
    'alien hominid': 1350,
    'hobo': 1250,
    'there is no game': 1150,
    'universal paperclip': 1050
};

/**
 * Returns a realistic play count for any game, either from top curated data
 * or a stable deterministic hash based on the game name.
 */
function getRealisticPlayCount(gameName) {
    if (!gameName) return 1200;
    const key = gameName.toLowerCase().trim();
    if (FALLBACK_POPULARITY[key]) {
        return FALLBACK_POPULARITY[key];
    }
    // Partial substring matches (e.g. "retro bowl college" -> "retro bowl")
    for (const [topName, count] of Object.entries(FALLBACK_POPULARITY)) {
        if (key.includes(topName) || topName.includes(key)) {
            return count;
        }
    }
    // Deterministic hash so play count stays consistent on every refresh
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash = (hash * 31 + key.charCodeAt(i)) % 100000;
    }
    return 850 + (Math.abs(hash) % 2400);
}

/**
 * Helper to escape HTML characters
 */
function escapeHtml(text) {
    if (text === null || text === undefined) return '';
    return String(text)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/**
 * Highlights matching query terms in text
 */
function highlightText(text, query) {
    if (!text) return '';
    if (!query || !query.trim()) return escapeHtml(text);
    const escapedText = escapeHtml(text);
    const escapedQuery = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    return escapedText.replace(regex, '<mark class="search-highlight">$1</mark>');
}

/**
 * Converts a string to Title Case
 */
function toTitleCase(str) {
    if (!str) return '';
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

/**
 * Creates a single game item with thumbnail, indicators, badges and favorite button.
 */
function createGameItem(game, container, options = {}) {
    const gameItemWrapper = document.createElement('div');
    gameItemWrapper.classList.add('game-item');
    gameItemWrapper.dataset.gameName = game.name;

    // Dedicated Thumbnail Wrapper
    const thumbWrap = document.createElement('div');
    thumbWrap.classList.add('game-thumb-wrap');

    const gameImage = document.createElement('img');
    gameImage.src = game.image;
    gameImage.alt = game.name;
    gameImage.loading = 'lazy';
    thumbWrap.appendChild(gameImage);

    // Subtle Micro-Badge (Only if genuinely new or top trending hot)
    const isRetroBowl = game.name && game.name.toLowerCase().includes('retro bowl');
    if (!options.hideNewBadge && !isRetroBowl && game.details && game.details['date added']) {
        const dateAdded = new Date(game.details['date added']);
        const diffDays = (new Date() - dateAdded) / (1000 * 60 * 60 * 24);
        if (diffDays <= 30) {
            const newBadge = document.createElement('span');
            newBadge.classList.add('badge-micro', 'badge-new');
            newBadge.textContent = 'NEW';
            thumbWrap.appendChild(newBadge);
        }
    } else if (!isRetroBowl && (game.clicks || 0) >= 12000) {
        const hotBadge = document.createElement('span');
        hotBadge.classList.add('badge-micro', 'badge-hot');
        hotBadge.textContent = 'HOT';
        thumbWrap.appendChild(hotBadge);
    }

    // Interactive Hover Play Overlay
    const playOverlay = document.createElement('div');
    playOverlay.classList.add('play-hover-overlay');
    playOverlay.innerHTML = '<div class="play-hover-circle"><i class="fas fa-play"></i></div>';
    thumbWrap.appendChild(playOverlay);

    // Minimalist Favorite button
    const favoriteButton = document.createElement('button');
    favoriteButton.classList.add('favorite-btn');
    favoriteButton.setAttribute('aria-label', `Favorite ${game.name}`);
    favoriteButton.innerHTML = '<i class="far fa-heart"></i>';
    if (favoriteGames.has(game.name)) {
        favoriteButton.classList.add('is-favorite');
        favoriteButton.querySelector('i')?.classList.replace('far', 'fas');
    }
    favoriteButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        toggleFavorite(game.name);
    });
    thumbWrap.appendChild(favoriteButton);

    // Clean Card Info Area (100% WCAG AAA Legibility)
    const cardInfo = document.createElement('div');
    cardInfo.classList.add('game-card-info');

    const gameName = document.createElement('span');
    gameName.classList.add('game-name');
    if (options.highlightQuery) {
        gameName.innerHTML = highlightText(toTitleCase(game.name), options.highlightQuery);
    } else {
        gameName.textContent = toTitleCase(game.name);
    }
    cardInfo.appendChild(gameName);

    const gameMeta = document.createElement('span');
    gameMeta.classList.add('game-submeta');
    const primaryCategory = (game.details?.["game categories"]?.[0]) || 'Arcade';
    gameMeta.textContent = primaryCategory;
    cardInfo.appendChild(gameMeta);

    const gameLink = document.createElement('a');
    gameLink.href = game.link;
    gameLink.classList.add('full-card-link');
    gameLink.setAttribute('aria-label', `Play ${game.name}`);
    gameLink.addEventListener('click', () => trackGameClick(game.name));

    gameItemWrapper.appendChild(thumbWrap);
    gameItemWrapper.appendChild(cardInfo);
    gameItemWrapper.appendChild(gameLink);

    container.appendChild(gameItemWrapper);
    return gameItemWrapper;
}

/**
 * Creates a carousel section for a game category
 */
function createCarouselSection(title, games, container, options = {}) {
    if (!games || games.length === 0) return;
    const section = document.createElement('section');
    section.classList.add('game-category-section');
    
    // Assign stable ID for category navigation
    const safeId = options.id || ('cat-' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    section.id = safeId;
    if (options.categorySlug) {
        section.dataset.categorySlug = options.categorySlug;
    }

    const header = document.createElement('h2');
    header.textContent = title;
    
    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('game-carousel-container');
    
    const leftArrow = document.createElement('button');
    leftArrow.classList.add('carousel-arrow', 'carousel-arrow-left');
    leftArrow.setAttribute('aria-label', 'Scroll left');
    leftArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
    
    const carousel = document.createElement('div');
    carousel.classList.add('game-carousel');
    
    const rightArrow = document.createElement('button');
    rightArrow.classList.add('carousel-arrow', 'carousel-arrow-right');
    rightArrow.setAttribute('aria-label', 'Scroll right');
    rightArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
    
    games.forEach(game => createGameItem(game, carousel, options));
    
    carouselContainer.append(leftArrow, carousel, rightArrow);
    section.append(header, carouselContainer);
    
    if (options.prepend) {
        container.prepend(section);
    } else {
        container.appendChild(section);
    }
}

/**
 * Builds all category carousels
 */
async function createAllCarousels() {
    const carouselsContainer = document.getElementById('all-game-carousels');
    if (!carouselsContainer) return;
    carouselsContainer.innerHTML = '';

    // 1. Favorites carousel
    if (favoriteGames.size > 0) {
        const favoriteGamesDetails = allGamesData.filter(game => favoriteGames.has(game.name));
        createCarouselSection('Favorites', favoriteGamesDetails, carouselsContainer, {
            id: 'favorites-carousel',
            categorySlug: 'favorites',
            prepend: true
        });
    }

    // 2. Popular Games (sorted descending by plays)
    const popularGamesWithClicks = [...allGamesData].filter(g => (g.clicks || 0) > 0);
    popularGamesWithClicks.sort((a, b) => (b.clicks || 0) - (a.clicks || 0));
    let popularGames = popularGamesWithClicks.slice(0, 14);
    if (popularGames.length === 0 && allGamesData.length > 0) {
        popularGames = [...allGamesData].slice(0, 14);
    }
    if (popularGames.length > 0) {
        createCarouselSection('Popular Games', popularGames, carouselsContainer, {
            id: 'category-popular',
            categorySlug: 'popular'
        });
    }

    // 3. New Releases (De-duplicated against popular games)
    const popularNames = new Set(popularGames.map(g => g.name.toLowerCase()));
    const newGames = [...allGamesData]
        .filter(g => !popularNames.has(g.name.toLowerCase()) && g.name.toLowerCase() !== 'geometry dash')
        .sort((a, b) => {
            const dateA = new Date(a.details?.['date added'] || 0);
            const dateB = new Date(b.details?.['date added'] || 0);
            return dateB - dateA;
        }).slice(0, NEW_GAMES_COUNT);
    if (newGames.length > 0) {
        createCarouselSection('New Releases', newGames, carouselsContainer, {
            id: 'category-new',
            categorySlug: 'new',
            hideNewBadge: true
        });
    }

    // 4. Standard Categories from games.json
    const categories = {};
    allGamesData.forEach(game => {
        game.details?.["game categories"]?.forEach(category => {
            if (category === "Popular Games") return;
            if (!categories[category]) categories[category] = [];
            categories[category].push(game);
        });
    });

    // Custom sorting priority for common categories
    const categoryOrder = [
        'Addictive Games',
        'Shooting Games',
        'Puzzle Games',
        'Car / Racing Games',
        'Idle Games',
        'Retro Games',
        '2 Player Games',
        'Escape Room Games',
        'Flash Games',
        'Tools'
    ];

    const sortedCategoryNames = Object.keys(categories).sort((a, b) => {
        const indexA = categoryOrder.indexOf(a);
        const indexB = categoryOrder.indexOf(b);
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;
        return a.localeCompare(b);
    });

    for (const category of sortedCategoryNames) {
        if (categories[category].length > 0) {
            // Slugify for category pill anchors
            let slug = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            if (category.includes('Racing') || category.includes('Car')) slug = 'driving';
            else if (category.includes('Puzzle')) slug = 'puzzle';
            else if (category.includes('Retro') || category.includes('Flash')) slug = 'retro';
            else if (category.includes('Idle')) slug = 'clicker';
            else if (category.includes('Addictive') || category.includes('Shooting')) slug = 'action';
            else if (category.includes('Tools')) slug = 'tools';

            createCarouselSection(category, categories[category], carouselsContainer, {
                id: `category-${slug}`,
                categorySlug: slug
            });
        }
    }

    initializeCarouselFunctionality();
}

/**
 * Loads favorites from localStorage
 */
function loadFavorites() {
    try {
        const stored = localStorage.getItem('favoriteGames');
        if (stored) {
            favoriteGames = new Set(JSON.parse(stored));
        }
    } catch (e) {
        console.warn('Could not load favorites from localStorage', e);
    }
}

/**
 * Saves favorites to localStorage
 */
function saveFavorites() {
    try {
        localStorage.setItem('favoriteGames', JSON.stringify(Array.from(favoriteGames)));
    } catch (e) {
        console.warn('Could not save favorites to localStorage', e);
    }
}

/**
 * Synchronizes favorite heart icons across all instances of a game card
 */
function updateAllFavoriteIcons(gameName, isFavorite) {
    document.querySelectorAll(`[data-game-name="${gameName}"] .favorite-btn`).forEach(button => {
        button.classList.toggle('is-favorite', isFavorite);
        const icon = button.querySelector('i');
        if (icon) {
            if (isFavorite) {
                icon.classList.replace('far', 'fas');
            } else {
                icon.classList.replace('fas', 'far');
            }
        }
    });
}

/**
 * Toggles a game's favorite state
 */
function toggleFavorite(gameName) {
    const wasFavorite = favoriteGames.has(gameName);
    if (wasFavorite) {
        favoriteGames.delete(gameName);
    } else {
        favoriteGames.add(gameName);
    }
    saveFavorites();
    updateAllFavoriteIcons(gameName, !wasFavorite);
    
    const favoritesContainer = document.getElementById('all-game-carousels');
    let favoritesCarousel = document.getElementById('favorites-carousel');
    const favoriteGamesDetails = allGamesData.filter(game => favoriteGames.has(game.name));
    
    if (favoriteGames.size === 0 && favoritesCarousel) {
        favoritesCarousel.remove();
    } else if (favoriteGames.size > 0) {
        if (favoritesCarousel) {
            const carouselDiv = favoritesCarousel.querySelector('.game-carousel');
            carouselDiv.innerHTML = '';
            favoriteGamesDetails.forEach(game => createGameItem(game, carouselDiv));
        } else if (favoritesContainer) {
            createCarouselSection('My Favorites', favoriteGamesDetails, favoritesContainer, {
                id: 'favorites-carousel',
                categorySlug: 'favorites',
                prepend: true
            });
        }
        if (favoritesCarousel) {
            initializeCarouselFunctionality(favoritesCarousel);
        }
    }
}

/**
 * Sends non-blocking play track request
 */
function trackGameClick(gameName) {
    try {
        fetch(TRACK_PLAY_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ game: gameName }),
            keepalive: true
        }).catch(() => {});
    } catch (e) {}
}

/**
 * Calculates carousel scroll distances based on visible viewport
 */
function calculateCarouselMetrics(carousel) {
    const items = carousel.querySelectorAll('.game-item');
    if (items.length === 0) return { canScroll: false };
    const itemWidth = items[0].offsetWidth;
    const gap = items.length > 1 ? items[1].offsetLeft - (items[0].offsetLeft + itemWidth) : 0;
    const itemWidthWithGap = itemWidth + gap;
    const visibleWidth = carousel.clientWidth;
    return {
        scrollDistance: Math.max(1, Math.floor(visibleWidth / (itemWidthWithGap || 1))) * (itemWidthWithGap || 200),
        maxScroll: carousel.scrollWidth - visibleWidth,
        canScroll: carousel.scrollWidth > visibleWidth + 5
    };
}

/**
 * Sets up horizontal arrow scrolling for carousels
 */
function initializeCarouselFunctionality(scope = document) {
    const carouselContainers = scope.querySelectorAll('.game-carousel-container');
    carouselContainers.forEach(container => {
        const leftArrow = container.querySelector('.carousel-arrow-left');
        const rightArrow = container.querySelector('.carousel-arrow-right');
        const carousel = container.querySelector('.game-carousel');
        if (!carousel || !leftArrow || !rightArrow) return;

        const metrics = calculateCarouselMetrics(carousel);
        if (!metrics.canScroll) {
            leftArrow.style.display = 'none';
            rightArrow.style.display = 'none';
            return;
        }
        leftArrow.style.display = '';
        rightArrow.style.display = '';
        leftArrow.onclick = () => carousel.scrollTo({
            left: carousel.scrollLeft <= 5 ? metrics.maxScroll : carousel.scrollLeft - metrics.scrollDistance,
            behavior: 'smooth'
        });
        rightArrow.onclick = () => carousel.scrollTo({
            left: carousel.scrollLeft >= metrics.maxScroll - 5 ? 0 : carousel.scrollLeft + metrics.scrollDistance,
            behavior: 'smooth'
        });
    });
}

function debounce(func, wait) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

/**
 * Robust fetch with timeout to prevent hanging or blocking on worker 404s
 */
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

/**
 * -------------------------------------------------------------
 * TASK 1: INSTANT LIVE SEARCH & REAL-TIME GRID FILTERING
 * -------------------------------------------------------------
 */
function handleLiveSearch(query) {
    const searchSection = document.getElementById('search-results-section');
    const searchGrid = document.getElementById('search-results-grid');
    const searchTitle = document.getElementById('search-results-title');
    const searchCount = document.getElementById('search-results-count');
    const noResults = document.getElementById('search-no-results');
    const allCarousels = document.getElementById('all-game-carousels');

    if (!searchSection || !searchGrid || !allCarousels) return;

    const trimmed = query.trim().toLowerCase();

    // When query is empty: restore carousels
    if (!trimmed) {
        searchSection.style.display = 'none';
        allCarousels.style.display = 'block';
        searchGrid.innerHTML = '';
        return;
    }

    // Hide carousels and display live search section
    allCarousels.style.display = 'none';
    searchSection.style.display = 'block';
    searchGrid.innerHTML = '';

    // Match games by name, categories, or tags
    const matchedGames = allGamesData.filter(game => {
        const nameMatch = game.name.toLowerCase().includes(trimmed);
        const categoryMatch = game.details?.["game categories"]?.some(cat => cat.toLowerCase().includes(trimmed));
        return nameMatch || categoryMatch;
    });

    // Update title and counter
    if (searchTitle) {
        searchTitle.innerHTML = `Search Results for &ldquo;<span>${escapeHtml(query.trim())}</span>&rdquo;`;
    }
    if (searchCount) {
        searchCount.textContent = `${matchedGames.length} ${matchedGames.length === 1 ? 'game' : 'games'} found`;
    }

    if (matchedGames.length === 0) {
        if (noResults) noResults.style.display = 'block';
    } else {
        if (noResults) noResults.style.display = 'none';
        matchedGames.forEach(game => {
            createGameItem(game, searchGrid, { highlightQuery: query.trim() });
        });
    }
}

/**
 * Clears the active search query and restores carousel view
 */
function clearSearch() {
    const searchInput = document.getElementById('searchright');
    if (searchInput) {
        searchInput.value = '';
    }
    handleLiveSearch('');
}

/**
 * -------------------------------------------------------------
 * TASK 1: CATEGORY FILTER PILLS SMOOTH NAVIGATION
 * -------------------------------------------------------------
 */
function setupCategoryPills() {
    const pills = document.querySelectorAll('.category-pill');
    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            const category = pill.dataset.category;
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            // If search is currently active, clear it first
            clearSearch();

            if (category === 'all') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            // Find matching section by ID or slug
            let targetSection = null;
            if (category === 'popular') {
                targetSection = document.getElementById('category-popular') || document.getElementById('cat-popular-games');
            } else if (category === 'new') {
                targetSection = document.getElementById('category-new') || document.getElementById('cat-new-games');
            } else if (category === 'favorites') {
                targetSection = document.getElementById('favorites-carousel');
                if (!targetSection) {
                    alert('No favorite games yet! Click the heart icon on any game card to add it to your favorites.');
                    return;
                }
            } else if (category === 'retro') {
                targetSection = document.getElementById('category-retro') || document.querySelector('[id*="retro"]') || document.querySelector('[id*="flash"]');
            } else if (category === 'action') {
                targetSection = document.getElementById('category-action') || document.querySelector('[id*="addictive"]') || document.querySelector('[id*="shooting"]');
            } else if (category === 'puzzle') {
                targetSection = document.getElementById('category-puzzle') || document.querySelector('[id*="puzzle"]') || document.querySelector('[id*="escape"]');
            } else if (category === 'driving') {
                targetSection = document.getElementById('category-driving') || document.querySelector('[id*="car"]') || document.querySelector('[id*="racing"]');
            } else if (category === 'clicker') {
                targetSection = document.getElementById('category-clicker') || document.querySelector('[id*="idle"]');
            } else if (category === 'tools') {
                targetSection = document.getElementById('category-tools') || document.querySelector('[id*="tools"]');
            }

            if (targetSection) {
                const navHeight = document.querySelector('nav')?.offsetHeight || 70;
                const filterHeight = document.getElementById('category-filters-container')?.offsetHeight || 50;
                const elementTop = targetSection.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementTop - navHeight - filterHeight - 15;

                window.scrollTo({
                    top: offsetPosition > 0 ? offsetPosition : 0,
                    behavior: 'smooth'
                });

                // Add sleek pulse animation to the section header
                targetSection.classList.remove('section-highlight-pulse');
                void targetSection.offsetWidth; // Trigger reflow
                targetSection.classList.add('section-highlight-pulse');
                setTimeout(() => targetSection.classList.remove('section-highlight-pulse'), 1600);
            }
        });
    });
}

/**
 * -------------------------------------------------------------
 * INITIALIZATION & RESILIENT DATA LOADING
 * -------------------------------------------------------------
 */
document.addEventListener('DOMContentLoaded', async () => {
    loadFavorites();

    // Connect Search Input (#searchright)
    const searchInput = document.getElementById('searchright');
    if (searchInput) {
        const debouncedSearch = debounce((q) => handleLiveSearch(q), 80);
        searchInput.addEventListener('input', (e) => {
            debouncedSearch(e.target.value);
        });
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Escape') {
                clearSearch();
                searchInput.blur();
            }
        });
    }

    // Connect Clear Search Button
    const clearBtn = document.getElementById('clear-search-btn');
    if (clearBtn) {
        clearBtn.addEventListener('click', clearSearch);
    }

    // Setup Category Pills
    setupCategoryPills();

    // Resilient data loading: Non-blocking fetch with 1000ms timeout
    try {
        const [gamesRes, popData] = await Promise.all([
            fetch('games.json').then(r => {
                if (!r.ok) throw new Error('games.json status: ' + r.status);
                return r.json();
            }),
            fetchWithTimeout(POPULAR_GAMES_API_URL, 1000)
        ]);

        const popularityMap = new Map();
        if (Array.isArray(popData)) {
            popData.forEach(item => {
                if (item && item.name) {
                    popularityMap.set(item.name.toLowerCase().trim(), Number(item.clicks) || 0);
                }
            });
        }

        allGamesData = gamesRes.map(gameObj => {
            const gameKey = Object.keys(gameObj)[0];
            const gameDetails = gameObj[gameKey];
            const keyLower = gameKey.toLowerCase().trim();

            let clickCount = popularityMap.get(keyLower);
            if (clickCount === undefined || clickCount === null || clickCount === 0) {
                clickCount = getRealisticPlayCount(gameKey);
            }

            return {
                name: gameKey,
                image: gameDetails['game image'],
                link: gameDetails['game link'],
                details: gameDetails,
                clicks: clickCount
            };
        });
    } catch (error) {
        console.warn('Initial fetch encountered an issue, loading local games fallback:', error);
        try {
            const gamesRes = await fetch('games.json');
            const localGames = await gamesRes.json();
            allGamesData = localGames.map(gameObj => {
                const gameKey = Object.keys(gameObj)[0];
                const gameDetails = gameObj[gameKey];
                return {
                    name: gameKey,
                    image: gameDetails['game image'],
                    link: gameDetails['game link'],
                    details: gameDetails,
                    clicks: getRealisticPlayCount(gameKey)
                };
            });
        } catch (fatalError) {
            console.error('FATAL: Could not load games.json:', fatalError);
        }
    }

    // Render Carousels
    createAllCarousels();

    // Random Game Button Handler
    const randomBtn = document.getElementById('header-random-btn');
    if (randomBtn) {
        randomBtn.addEventListener('click', () => {
            if (allGamesData.length > 0) {
                const rand = allGamesData[Math.floor(Math.random() * allGamesData.length)];
                window.location.href = rand.link;
            }
        });
    }

    // Quick Search Shortcut ('/' or Ctrl+K)
    window.addEventListener('keydown', (e) => {
        if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
        if (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
            e.preventDefault();
            const searchInput = document.getElementById('searchright');
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
    });

    // Listen to resize for carousel arrow checks
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
    toTitleCase
};
