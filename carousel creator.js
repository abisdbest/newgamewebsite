// --- Globals ---
let allGamesData = []; // Will be populated with merged data (game details + clicks)
let favoriteGames = new Set();

const WORKER_BASE_URL = 'https://blooket1-popularity-api.info-blooket1.workers.dev';
const POPULAR_GAMES_API_URL = `${WORKER_BASE_URL}/popular-games`; 
const TRACK_PLAY_API_URL = `${WORKER_BASE_URL}/track-play`;
const NEW_GAMES_COUNT = 12;


// --- Main Functions ---

/**
 * Creates a single game item with all indicators.
 */
function createGameItem(game, carousel) {
    const gameItem = document.createElement('div');
    gameItem.classList.add('game-item');
    gameItem.dataset.gameName = game.name;

    // "NEW" Indicator
    if (game.details['date added']) {
        const dateAdded = new Date(game.details['date added']);
        const diffDays = (new Date() - dateAdded) / (1000 * 60 * 60 * 24);
        if (diffDays <= 30) {
            const newIndicator = document.createElement('div');
            newIndicator.classList.add('new-game-indicator');
            newIndicator.innerHTML = '<i class="fas fa-star"></i> NEW';
            gameItem.appendChild(newIndicator);
        }
    }

    // --- NEW: Top-Right Icons Container ---
    const topRightContainer = document.createElement('div');
    topRightContainer.classList.add('top-right-indicators');
    
    // Favorite Button (always visible)
    const favoriteButton = document.createElement('button');
    favoriteButton.classList.add('favorite-btn');
    favoriteButton.dataset.gameName = game.name;
    favoriteButton.setAttribute('aria-label', `Favorite ${game.name}`);
    favoriteButton.innerHTML = '<i class="far fa-heart"></i>';
    if (favoriteGames.has(game.name)) {
        favoriteButton.classList.add('is-favorite');
        const ic = favoriteButton.querySelector('i');
        if (ic) ic.classList.replace('far', 'fas');
    }
    favoriteButton.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation(); toggleFavorite(game.name);
    });

    // Popularity Stats Indicator (always visible)
    const statsIndicator = document.createElement('span'); // <-- changed from 'div' to 'span'
    statsIndicator.classList.add('game-stats-indicator');
    statsIndicator.innerHTML = `<i class="fas fa-fire"></i> ${game.clicks || 0}`;
    statsIndicator.title = "plays in past 30 days";
    
    topRightContainer.appendChild(favoriteButton);
    topRightContainer.appendChild(statsIndicator);
    gameItem.appendChild(topRightContainer);
    // --- END: Top-Right Icons ---

    const gameLink = document.createElement('a');
    gameLink.href = game.link;
    gameLink.addEventListener('click', () => trackGameClick(game.name));

    const gameImage = document.createElement('img');
    gameImage.src = game.image;
    gameImage.alt = game.name;
    gameImage.loading = 'lazy';

    const gameName = document.createElement('span');
    gameName.classList.add('game-name');
    gameName.textContent = game.name;

    gameLink.appendChild(gameImage);
    gameItem.appendChild(gameLink);
    gameItem.appendChild(gameName);
    carousel.appendChild(gameItem);
}


/**
 * Creates a complete carousel section. Now simpler as it just takes a list of games.
 */
function createCarouselSection(title, games, container, options = {}) {
    if (!games || games.length === 0) return null;
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
    return section;
}


/**
 * Orchestrates the creation of all carousels from the complete data.
 */
function createAllCarousels() {
    const carouselsContainer = document.getElementById('all-game-carousels');
    if (!carouselsContainer) return;
    carouselsContainer.innerHTML = '';

    // 1. Favorites Carousel
    if (favoriteGames.size > 0) {
        const favoriteGamesDetails = allGamesData.filter(game => favoriteGames.has(game.name));
        createCarouselSection('My Favorites', favoriteGamesDetails, carouselsContainer, { id: 'favorites-carousel', prepend: true });
    }

    // 2. Popular Games Carousel
    const popularGames = [...allGamesData]
        .sort((a, b) => {
            const clicksA = a.clicks || 0;
            const clicksB = b.clicks || 0;
            if (clicksB > clicksA) return 1;
            if (clicksA > clicksB) return -1;
            return Math.random() - 0.5; // Shuffle ties
        })
        .slice(0, 15);
    createCarouselSection('Popular Games', popularGames, carouselsContainer);

    // 3. New Games Carousel
    const newGames = [...allGamesData]
        .sort((a, b) => {
            if (!a.details['date added']) return 1;
            if (!b.details['date added']) return -1;
            return new Date(b.details['date added']) - new Date(a.details['date added']);
        })
        .slice(0, NEW_GAMES_COUNT);
    createCarouselSection('New Games', newGames, carouselsContainer);

    // 4. All Other Categories
    const categories = {};
    allGamesData.forEach(game => {
        game.details["game categories"]?.forEach(category => {
            if (category === "Popular Games") return;
            if (!categories[category]) categories[category] = [];
            categories[category].push(game);
        });
    });
    for (const category in categories) {
        createCarouselSection(category, categories[category], carouselsContainer);
    }

    initializeCarouselFunctionality();
}


// --- Feature-Specific Functions ---

function loadFavorites() {
    const storedFavorites = localStorage.getItem('favoriteGames');
    if (storedFavorites) {
        favoriteGames = new Set(JSON.parse(storedFavorites));
    }
}

function saveFavorites() {
    localStorage.setItem('favoriteGames', JSON.stringify(Array.from(favoriteGames)));
}

function updateAllFavoriteIcons(gameName, isFavorite) {
    const allButtonsForGame = document.querySelectorAll(`.favorite-btn[data-game-name="${gameName}"]`);
    allButtonsForGame.forEach(button => {
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
    const favoritesContainer = document.getElementById('all-game-carousels');
    let favoritesCarousel = document.getElementById('favorites-carousel');

    if (wasFavorite) {
        favoriteGames.delete(gameName);
    } else {
        favoriteGames.add(gameName);
    }
    saveFavorites();
    updateAllFavoriteIcons(gameName, !wasFavorite);

    const favoriteGamesDetails = allGamesData.filter(game => favoriteGames.has(game.name));

    if (favoriteGames.size === 0 && favoritesCarousel) {
        favoritesCarousel.remove();
    } else if (favoriteGames.size > 0) {
        if (favoritesCarousel) {
            const carouselDiv = favoritesCarousel.querySelector('.game-carousel');
            carouselDiv.innerHTML = '';
            favoriteGamesDetails.forEach(game => createGameItem(game, carouselDiv));
        } else {
            favoritesCarousel = createCarouselSection('My Favorites', favoriteGamesDetails, favoritesContainer, { id: 'favorites-carousel', prepend: true });
        }
        if (favoritesCarousel) {
            initializeCarouselFunctionality(favoritesCarousel.querySelector('.game-carousel-container'));
        }
    }
}

function trackGameClick(gameName) {
    fetch(TRACK_PLAY_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ game: gameName }),
        keepalive: true 
    })
    .then(response => {
        if (!response.ok) {
            console.error('Failed to track game play on the server.');
        }
    })
    .catch(error => {
        console.error('Error tracking game play:', error);
    });
}

// --- Carousel Arrow and Scrolling Logic ---
function getItemWidthWithGap(carousel, gameItems) {
    if (!gameItems || gameItems.length === 0) return carousel.clientWidth;
    const firstItem = gameItems[0];
    let itemWidth = firstItem.offsetWidth;
    let gap = 0;
    if (gameItems.length > 1) {
        gap = gameItems[1].offsetLeft - (firstItem.offsetLeft + itemWidth);
    }
    return itemWidth + gap;
}

function calculateCarouselMetrics(carouselElement, gameItemElements) {
    if (!carouselElement || !gameItemElements || gameItemElements.length === 0) {
        return { itemWidthWithGap: 0, numActuallyVisible: 1, scrollDistance: 0, maxScroll: 0, canScroll: false };
    }
    const itemWidthWithGap = getItemWidthWithGap(carouselElement, gameItemElements);
    const carouselViewWidth = carouselElement.clientWidth;
    const itemsThatCanFit = carouselViewWidth / itemWidthWithGap;
    const numActuallyVisible = Math.max(1, Math.floor(itemsThatCanFit));
    const scrollDistance = numActuallyVisible * itemWidthWithGap;
    const maxScroll = carouselElement.scrollWidth - carouselViewWidth;
    const canScroll = carouselElement.scrollWidth > carouselViewWidth + 5;
    return { itemWidthWithGap, numActuallyVisible, scrollDistance, maxScroll, canScroll };
}

function initializeCarouselFunctionality(scope = document) {
    const carouselContainers = scope.querySelectorAll('.game-carousel-container');
    const tolerance = 5;

    carouselContainers.forEach(container => {
        const leftArrow = container.querySelector('.carousel-arrow-left');
        const rightArrow = container.querySelector('.carousel-arrow-right');
        const carousel = container.querySelector('.game-carousel');
        const gameItems = carousel.querySelectorAll('.game-item');

        if (!leftArrow || !rightArrow || !carousel || gameItems.length === 0) {
            if (leftArrow && rightArrow) {
                leftArrow.style.display = 'none';
                rightArrow.style.display = 'none';
            }
            return;
        }

        const updateArrowVisibility = () => {
            const metrics = calculateCarouselMetrics(carousel, gameItems);
            const displayValue = metrics.canScroll ? '' : 'none';
            leftArrow.style.display = displayValue;
            rightArrow.style.display = displayValue;
        };
        updateArrowVisibility();

        leftArrow.replaceWith(leftArrow.cloneNode(true));
        rightArrow.replaceWith(rightArrow.cloneNode(true));
        container.querySelector('.carousel-arrow-left').addEventListener('click', () => {
             const metrics = calculateCarouselMetrics(carousel, gameItems);
            if (!metrics.canScroll) return;
            carousel.scrollTo({ left: carousel.scrollLeft <= tolerance ? metrics.maxScroll : Math.max(0, carousel.scrollLeft - metrics.scrollDistance), behavior: 'smooth' });
        });
        container.querySelector('.carousel-arrow-right').addEventListener('click', () => {
            const metrics = calculateCarouselMetrics(carousel, gameItems);
            if (!metrics.canScroll) return;
            carousel.scrollTo({ left: carousel.scrollLeft >= metrics.maxScroll - tolerance ? 0 : Math.min(metrics.maxScroll, carousel.scrollLeft + metrics.scrollDistance), behavior: 'smooth' });
        });

        if (!window.allCarouselsToResize) window.allCarouselsToResize = new Set();
        window.allCarouselsToResize.add(carousel);
    });

    if (!window.carouselResizeHandlerSetup) {
        window.addEventListener('resize', debounce(() => {
            if (window.allCarouselsToResize) {
                window.allCarouselsToResize.forEach(carousel => {
                    const gameItems = carousel.querySelectorAll('.game-item');
                    const metrics = calculateCarouselMetrics(carousel, gameItems);
                    const container = carousel.closest('.game-carousel-container');
                    if (container) {
                        const leftArr = container.querySelector('.carousel-arrow-left');
                        const rightArr = container.querySelector('.carousel-arrow-right');
                        if (leftArr && rightArr) {
                            const displayValue = metrics.canScroll ? '' : 'none';
                            leftArr.style.display = displayValue;
                            rightArr.style.display = displayValue;
                        }
                    }
                });
            }
        }, 250));
        window.carouselResizeHandlerSetup = true;
    }
}

function debounce(func, wait) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

// --- Initialization on DOM Load (NEW LOGIC) ---
document.addEventListener('DOMContentLoaded', async () => {
    loadFavorites();

    try {
        // Fetch both local game data and remote popularity data at the same time
        const [gamesResponse, popularityResponse] = await Promise.all([
            fetch('games.json'),
            fetch(POPULAR_GAMES_API_URL)
        ]);

        if (!gamesResponse.ok) throw new Error('Failed to load games.json');
        
        const localGames = await gamesResponse.json();
        // Popularity fetch is allowed to fail gracefully
        const popularityData = (popularityResponse && popularityResponse.ok) ? await popularityResponse.json() : [];

        // Create a lookup map for faster merging
        const popularityMap = new Map((popularityData || []).map(item => [item.name, item.clicks]));

        // Process and merge the data
        allGamesData = localGames.map(gameObj => {
            const gameKey = Object.keys(gameObj)[0];
            const gameDetails = gameObj[gameKey];
            return {
                name: gameKey,
                image: gameDetails['game image'],
                link: gameDetails['game link'],
                details: gameDetails,
                // Add the click count, defaulting to 0 if not in the map
                clicks: popularityMap.get(gameKey) || 0
            };
        });

    } catch (error) {
        console.error("Failed to load initial game data:", error);
        // Fallback: load only local data if the API fails
        try {
            const gamesResponse = await fetch('games.json');
            const localGames = await gamesResponse.json();
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
            console.error('Failed to load fallback local games.json:', e);
            allGamesData = [];
        }
    }
    
    // Now that all data is ready, build the page
    createAllCarousels();
});
/**
 * Utility to capitalize the first letter of each word.
 */
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) =>
        txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
}

// Patch createGameItem to use title case for display
const originalCreateGameItem = createGameItem;
createGameItem = function(game, carousel) {
    // Clone game object to avoid mutating original data
    const displayGame = { ...game, name: toTitleCase(game.name) };
    originalCreateGameItem(displayGame, carousel);
};