function createCarousels(data) {
    const carouselsContainer = document.getElementById('all-game-carousels');
    if (!carouselsContainer) {
        console.error('Error: all-game-carousels container not found!');
        return;
    }
    const categories = {};

    const gamesArray = [];
    data.forEach(gameObj => {
        if (typeof gameObj === 'object' && gameObj !== null) {
            const gameKey = Object.keys(gameObj)[0];
            if (gameKey && typeof gameObj[gameKey] === 'object' && gameObj[gameKey] !== null) {
                const game = gameObj[gameKey];
                gamesArray.push({
                    name: gameKey,
                    details: game
                });
            }
        }
    });

    let maxCategories = 0;
    gamesArray.forEach(({ details }) => {
        if (Array.isArray(details["game categories"])) {
            maxCategories = Math.max(maxCategories, details["game categories"].length);
        }
    });

    for (let i = 0; i < maxCategories; i++) {
        gamesArray.forEach(({ name, details }) => {
            if (Array.isArray(details["game categories"]) && details["game categories"].length > i) {
                const category = details["game categories"][i];
                if (!categories[category]) {
                    categories[category] = [];
                }
                if (!categories[category].find(g => g.name === name)) {
                    categories[category].push({
                        name: name,
                        image: details['game image'],
                        link: details['game link']
                    });
                }
            }
        });
    }

    for (const category in categories) {
        const games = categories[category];

        const categorySection = document.createElement('section');
        categorySection.classList.add('game-category-section');

        const categoryHeader = document.createElement('h2');
        categoryHeader.textContent = category;

        const carouselContainer = document.createElement('div');
        carouselContainer.classList.add('game-carousel-container');

        const leftArrow = document.createElement('button');
        leftArrow.classList.add('carousel-arrow', 'carousel-arrow-left');
        leftArrow.setAttribute('aria-label', 'Previous games');
        leftArrow.innerHTML = '<i class="fas fa-chevron-left"></i>';

        const carousel = document.createElement('div');
        carousel.classList.add('game-carousel');

        const rightArrow = document.createElement('button');
        rightArrow.classList.add('carousel-arrow', 'carousel-arrow-right');
        rightArrow.setAttribute('aria-label', 'Next games');
        rightArrow.innerHTML = '<i class="fas fa-chevron-right"></i>';

        games.forEach(game => {
            const gameItem = document.createElement('div');
            gameItem.classList.add('game-item');

            const gameLink = document.createElement('a');
            gameLink.href = game.link;

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
        });

        carouselContainer.appendChild(leftArrow);
        carouselContainer.appendChild(carousel);
        carouselContainer.appendChild(rightArrow);

        categorySection.appendChild(categoryHeader);
        categorySection.appendChild(carouselContainer);
        carouselsContainer.appendChild(categorySection);
    }
    initializeCarouselFunctionality();
}

function getItemWidthWithGap(carousel, gameItems) {
    if (!gameItems || gameItems.length === 0) {
        return carousel.clientWidth; // Fallback if no items
    }
    const firstItem = gameItems[0];
    let itemWidth = firstItem.offsetWidth; // Includes item's padding/border if box-sizing: border-box

    let gap = 0;
    if (gameItems.length > 1) {
        // Calculate the gap by looking at the start of the second item vs end of the first
        gap = gameItems[1].offsetLeft - (firstItem.offsetLeft + itemWidth);
    }
    return itemWidth + gap; // Total space one item takes up before the next one starts
}


function calculateCarouselMetrics(carouselElement, gameItemElements) {
    if (!carouselElement || !gameItemElements || gameItemElements.length === 0) {
        return {
            itemWidthWithGap: carouselElement ? carouselElement.clientWidth : 0,
            numActuallyVisible: 1,
            scrollDistance: carouselElement ? carouselElement.clientWidth : 0,
            maxScroll: 0,
            canScroll: false
        };
    }

    const itemWidthWithGap = getItemWidthWithGap(carouselElement, gameItemElements);
    const carouselViewWidth = carouselElement.clientWidth; // Visible width of the carousel

    // Number of items that can theoretically fit (can be fractional)
    const itemsThatCanFit = carouselViewWidth / itemWidthWithGap;
    // Number of full items visible (at least 1)
    const numActuallyVisible = Math.max(1, Math.floor(itemsThatCanFit));
    
    // Scroll by the number of full items currently visible
    const scrollDistance = numActuallyVisible * itemWidthWithGap;

    const maxScroll = carouselElement.scrollWidth - carouselViewWidth;
    const canScroll = carouselElement.scrollWidth > carouselViewWidth + 5; // Add a small tolerance

    return {
        itemWidthWithGap,
        numActuallyVisible,
        scrollDistance,
        maxScroll,
        canScroll
    };
}

function initializeCarouselFunctionality() {
    const carouselContainers = document.querySelectorAll('.game-carousel-container');
    const tolerance = 5; // Tolerance for scroll position comparisons

    carouselContainers.forEach(container => {
        const leftArrow = container.querySelector('.carousel-arrow-left');
        const rightArrow = container.querySelector('.carousel-arrow-right');
        const carousel = container.querySelector('.game-carousel');
        
        // Get items once, but metrics will be calculated on demand
        const gameItems = carousel.querySelectorAll('.game-item');

        if (!leftArrow || !rightArrow || !carousel || gameItems.length === 0) {
            if (leftArrow && rightArrow) { // Hide arrows if no items or not scrollable
                const metrics = calculateCarouselMetrics(carousel, gameItems);
                leftArrow.style.display = metrics.canScroll ? '' : 'none';
                rightArrow.style.display = metrics.canScroll ? '' : 'none';
            }
            return;
        }
        
        function updateArrowVisibility() {
            const metrics = calculateCarouselMetrics(carousel, gameItems);
            const displayValue = metrics.canScroll ? '' : 'none';
            leftArrow.style.display = displayValue;
            rightArrow.style.display = displayValue;
        }
        updateArrowVisibility(); // Initial check

        leftArrow.addEventListener('click', () => {
            const metrics = calculateCarouselMetrics(carousel, gameItems);
            if (!metrics.canScroll) return;

            if (carousel.scrollLeft <= tolerance) { // If at or very near the beginning
                carousel.scrollTo({ left: metrics.maxScroll, behavior: 'smooth' }); // Loop to end
            } else {
                carousel.scrollTo({ left: Math.max(0, carousel.scrollLeft - metrics.scrollDistance), behavior: 'smooth' });
            }
        });

        rightArrow.addEventListener('click', () => {
            const metrics = calculateCarouselMetrics(carousel, gameItems);
            if (!metrics.canScroll) return;

            if (carousel.scrollLeft >= metrics.maxScroll - tolerance) { // If at or very near the end
                carousel.scrollTo({ left: 0, behavior: 'smooth' }); // Loop to beginning
            } else {
                carousel.scrollTo({ left: Math.min(metrics.maxScroll, carousel.scrollLeft + metrics.scrollDistance), behavior: 'smooth' });
            }
        });

        let scrollTimeout;
        carousel.addEventListener('scroll', () => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                const metrics = calculateCarouselMetrics(carousel, gameItems);
                if (!metrics.canScroll || metrics.itemWidthWithGap <=0) return;
                // Snap to the nearest item boundary
                const newScrollLeft = Math.round(carousel.scrollLeft / metrics.itemWidthWithGap) * metrics.itemWidthWithGap;
                // Only scroll if the difference is significant enough to avoid jitter
                if (Math.abs(carousel.scrollLeft - newScrollLeft) > 1) { 
                    carousel.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
                }
            }, 150); // Delay before snapping
        }, { passive: true });

        // Add this specific carousel to a list for the global resize handler
        if (!window.allCarouselsToResize) {
            window.allCarouselsToResize = [];
        }
        window.allCarouselsToResize.push(carousel);
    });

    // Setup a single debounced resize handler for all carousels
    if (!window.carouselResizeHandlerSetup) {
        window.addEventListener('resize', debounce(() => {
            if (window.allCarouselsToResize) {
                window.allCarouselsToResize.forEach(carousel => {
                    const gameItems = carousel.querySelectorAll('.game-item');
                    const metrics = calculateCarouselMetrics(carousel, gameItems);
                    
                    // Update arrow visibility on resize
                    const container = carousel.closest('.game-carousel-container');
                    if(container) {
                        const leftArr = container.querySelector('.carousel-arrow-left');
                        const rightArr = container.querySelector('.carousel-arrow-right');
                        if(leftArr && rightArr) {
                             const displayValue = metrics.canScroll ? '' : 'none';
                             leftArr.style.display = displayValue;
                             rightArr.style.display = displayValue;
                        }
                    }

                    if (!metrics.canScroll || metrics.itemWidthWithGap <= 0) return;
                    // Re-snap to the nearest item after resize
                    const newScrollLeft = Math.round(carousel.scrollLeft / metrics.itemWidthWithGap) * metrics.itemWidthWithGap;
                     // Only scroll if needed, and use 'auto' behavior for immediate jump on resize
                    if (Math.abs(carousel.scrollLeft - newScrollLeft) > 1) {
                        carousel.scrollTo({ left: newScrollLeft, behavior: 'auto' });
                    }
                });
            }
        }, 250));
        window.carouselResizeHandlerSetup = true;
    }
}

// Debounce function to limit how often a function is called
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('games.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            createCarousels(data);
        })
        .catch(error => console.error('Error loading or parsing games.json:', error));
});