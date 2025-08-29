// --- Globals ---
let allGamesData = [];
let favoriteGames = new Set();
const WORKER_BASE_URL = 'https://blooket1-popularity-api.info-blooket1.workers.dev';
const POPULAR_GAMES_API_URL = `${WORKER_BASE_URL}/popular-games`;
const TRACK_PLAY_API_URL = `${WORKER_BASE_URL}/track-play`;
const NEW_GAMES_COUNT = 12;

/**
 * Creates a single game item with the final, separated indicator structure.
 */
function createGameItem(game, carousel) {
    const gameItemWrapper = document.createElement('div');
    gameItemWrapper.classList.add('game-item');
    gameItemWrapper.dataset.gameName = game.name;

    const gameImage = document.createElement('img');
    gameImage.src = game.image;
    gameImage.alt = game.name;
    gameImage.loading = 'lazy';

    const gameName = document.createElement('span');
    gameName.classList.add('game-name');
    gameName.textContent = toTitleCase(game.name);

    const gameLink = document.createElement('a');
    gameLink.href = game.link;
    gameLink.classList.add('full-card-link');
    gameLink.setAttribute('aria-label', game.name);
    gameLink.addEventListener('click', () => trackGameClick(game.name));

    gameItemWrapper.appendChild(gameImage);
    gameItemWrapper.appendChild(gameName);

    // --- Container for TOP-LEFT indicators ---
    const topLeftIndicators = document.createElement('div');
    topLeftIndicators.classList.add('top-left-indicators');

    if (game.details['date added']) {
        const dateAdded = new Date(game.details['date added']);
        const diffDays = (new Date() - dateAdded) / (1000 * 60 * 60 * 24);
        if (diffDays <= 30) {
            const newIndicator = document.createElement('div');
            newIndicator.classList.add('new-game-indicator');
            newIndicator.innerHTML = '<i class="fas fa-star"></i> NEW';
            topLeftIndicators.appendChild(newIndicator);
        }
    }

    const statsIndicator = document.createElement('div');
    statsIndicator.classList.add('game-stats-indicator');
    statsIndicator.innerHTML = `<i class="fas fa-fire"></i> ${game.clicks || 0}`;
    statsIndicator.title = `${game.clicks || 0} plays in the last 30 days`;
    topLeftIndicators.appendChild(statsIndicator);

    gameItemWrapper.appendChild(topLeftIndicators);

    // --- Standalone TOP-RIGHT Favorite button ---
    const favoriteButton = document.createElement('button');
    favoriteButton.classList.add('favorite-btn');
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
    gameItemWrapper.appendChild(favoriteButton);

    gameItemWrapper.appendChild(gameLink);
    carousel.appendChild(gameItemWrapper);
}

// --- ALL OTHER JAVASCRIPT FUNCTIONS ARE UNCHANGED ---
function createCarouselSection(title, games, container, options = {}) {
    if (!games || games.length === 0) return;
    const section = document.createElement('section');
    section.classList.add('game-category-section');
    if (options.id) section.id = options.id;
    const header = document.createElement('h2');
    header.textContent = title;
    const carouselContainer = document.createElement('div');
    carouselContainer.classList.add('game-carousel-container');
    const leftArrow = document.createElement('button');
    leftArrow.classList.add('carousel-arrow', 'carousel-arrow-left');
    leftArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';
    const carousel = document.createElement('div');
    carousel.classList.add('game-carousel');
    const rightArrow = document.createElement('button');
    rightArrow.classList.add('carousel-arrow', 'carousel-arrow-right');
    rightArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';
    games.forEach(game => createGameItem(game, carousel));
    carouselContainer.append(leftArrow, carousel, rightArrow);
    section.append(header, carouselContainer);
    if (options.prepend) container.prepend(section);
    else container.appendChild(section);
}
async function createAllCarousels() {
    const carouselsContainer = document.getElementById('all-game-carousels');
    if (!carouselsContainer) return;
    carouselsContainer.innerHTML = '';
    if (favoriteGames.size > 0) {
        const favoriteGamesDetails = allGamesData.filter(game => favoriteGames.has(game.name));
        createCarouselSection('My Favorites', favoriteGamesDetails, carouselsContainer, {
            id: 'favorites-carousel',
            prepend: true
        });
    }
    const popularGamesWithClicks = allGamesData.filter(g => (g.clicks || 0) > 0);
    popularGamesWithClicks.sort((a, b) => (b.clicks || 0) - (a.clicks || 0) || (Math.random() - 0.5));
    let popularGames = popularGamesWithClicks.slice(0, 15);
    if (popularGames.length === 0 && allGamesData.length > 0) {
        popularGames = [...allGamesData].sort(() => 0.5 - Math.random()).slice(0, 15);
    }
    if (popularGames.length > 0) {
        createCarouselSection('Popular Games', popularGames, carouselsContainer);
    }
    const newGames = [...allGamesData].sort((a, b) => new Date(b.details['date added'] || 0) - new Date(a.details['date added'] || 0)).slice(0, NEW_GAMES_COUNT);
    if (newGames.length > 0) {
        createCarouselSection('New Games', newGames, carouselsContainer);
    }
    const categories = {};
    allGamesData.forEach(game => {
        game.details["game categories"]?.forEach(category => {
            if (category === "Popular Games") return;
            if (!categories[category]) categories[category] = [];
            categories[category].push(game);
        });
    });
    for (const category in categories) {
        if (categories[category].length > 0) {
            createCarouselSection(category, categories[category], carouselsContainer);
        }
    }
    initializeCarouselFunctionality();
}

function loadFavorites() {
    const stored = localStorage.getItem('favoriteGames');
    if (stored) {
        favoriteGames = new Set(JSON.parse(stored));
    }
}

function saveFavorites() {
    localStorage.setItem('favoriteGames', JSON.stringify(Array.from(favoriteGames)));
}

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
        } else {
            createCarouselSection('My Favorites', favoriteGamesDetails, favoritesContainer, {
                id: 'favorites-carousel',
                prepend: true
            });
        }
        if (favoritesCarousel) {
            initializeCarouselFunctionality(favoritesCarousel);
        }
    }
}

function trackGameClick(gameName) {
    fetch(TRACK_PLAY_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            game: gameName
        }),
        keepalive: true
    }).catch(err => console.error('Track play error:', err));
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

function calculateCarouselMetrics(carousel) {
    const items = carousel.querySelectorAll('.game-item');
    if (items.length === 0) return {
        canScroll: false
    };
    const itemWidth = items[0].offsetWidth;
    const gap = items.length > 1 ? items[1].offsetLeft - (items[0].offsetLeft + itemWidth) : 0;
    const itemWidthWithGap = itemWidth + gap;
    const visibleWidth = carousel.clientWidth;
    return {
        scrollDistance: Math.max(1, Math.floor(visibleWidth / itemWidthWithGap)) * itemWidthWithGap,
        maxScroll: carousel.scrollWidth - visibleWidth,
        canScroll: carousel.scrollWidth > visibleWidth + 5
    };
}

function initializeCarouselFunctionality(scope = document) {
    const carouselContainers = scope.querySelectorAll('.game-carousel-container');
    carouselContainers.forEach(container => {
        const leftArrow = container.querySelector('.carousel-arrow-left');
        const rightArrow = container.querySelector('.carousel-arrow-right');
        const carousel = container.querySelector('.game-carousel');
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
document.addEventListener('DOMContentLoaded', async () => { 
   loadFavorites(); 
   try { 
       const [gamesRes, popRes] = await Promise.all([fetch('games.json'), fetch(POPULAR_GAMES_API_URL)]); 
       if (!gamesRes.ok) throw new Error('Failed to load games.json'); 
       const localGames = await gamesRes.json(); 
       const popularityData = (popRes && popRes.ok) ? await popRes.json() : []; 
       const popularityMap = new Map(popularityData.map(item => [item.name, item.clicks])); 
       allGamesData = localGames.map(gameObj => { 
           const gameKey = Object.keys(gameObj)[0]; 
           const gameDetails = gameObj[gameKey]; 
           // Convert the game key to Title Case before looking it up in the map 
           const titleCasedGameKey = toTitleCase(gameKey); 
           return { 
               name: gameKey, 
               image: gameDetails['game image'], 
               link: gameDetails['game link'], 
               details: gameDetails, 
               clicks: popularityMap.get(titleCasedGameKey) || 0 
           }; 
       }); 
   } catch (error) { 
       console.error("Failed to load initial data, loading fallback:", error); 
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
                   clicks: 0 
               }; 
           }); 
       } catch (e) { 
           console.error('FATAL: Could not load fallback games.json.', e); 
       } 
   } 
   createAllCarousels(); 
   window.addEventListener('resize', debounce(() => initializeCarouselFunctionality(), 250)); 

}); 
