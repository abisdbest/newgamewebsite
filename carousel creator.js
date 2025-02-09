function createCarousels(data) {
    const carouselsContainer = document.getElementById('all-game-carousels');
    const categories = {};

    // 1. Group games by category by processing each category index across all games
    // First, extract games into an array for convenience.
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

    // Determine the maximum number of category entries among all games.
    let maxCategories = 0;
    gamesArray.forEach(({ details }) => {
        if (Array.isArray(details["game categories"])) {
            maxCategories = Math.max(maxCategories, details["game categories"].length);
        }
    });

    // Process games by category index: first category for all games, then second category, etc.
    for (let i = 0; i < maxCategories; i++) {
        gamesArray.forEach(({ name, details }) => {
            if (Array.isArray(details["game categories"]) && details["game categories"].length > i) {
                const category = details["game categories"][i];
                if (!categories[category]) {
                    categories[category] = [];
                }
                categories[category].push({
                    name: name,
                    image: details['game image'],
                    link: details['game link']
                });
            }
        });
    }

    // 2. Create a carousel for each category
    for (const category in categories) {
        const games = categories[category];

        // Create the HTML structure
        const categoryHeader = document.createElement('h1');
        categoryHeader.textContent = category;

        const carouselContainer = document.createElement('div');
        carouselContainer.classList.add('game-carousel-container');

        const leftArrow = document.createElement('button');
        leftArrow.classList.add('carousel-arrow', 'carousel-arrow-left');
        leftArrow.innerHTML = '<img src="left arrow.svg" alt="Left Arrow">';

        const carousel = document.createElement('div');
        carousel.classList.add('game-carousel');

        const rightArrow = document.createElement('button');
        rightArrow.classList.add('carousel-arrow', 'carousel-arrow-right');
        rightArrow.innerHTML = '<img src="right arrow.svg" alt="Right Arrow">';

        // Add game items to the carousel
        games.forEach(game => {
            const gameItem = document.createElement('div');
            gameItem.classList.add('game-item');

            const gameLink = document.createElement('a');
            gameLink.href = game.link;

            const gameImage = document.createElement('img');
            gameImage.src = game.image;
            gameImage.alt = game.name;

            const gameName = document.createElement('span');
            gameName.classList.add('game-name');
            gameName.textContent = game.name;

            gameLink.appendChild(gameImage);
            gameLink.appendChild(gameName);
            gameItem.appendChild(gameLink);
            carousel.appendChild(gameItem);
        });

        carouselContainer.appendChild(leftArrow);
        carouselContainer.appendChild(carousel);
        carouselContainer.appendChild(rightArrow);

        carouselsContainer.appendChild(categoryHeader);
        carouselsContainer.appendChild(carouselContainer);
    }
    carouselfunctionality();
}

function carouselfunctionality() {
    const carousels = document.querySelectorAll('.game-carousel-container');

    carousels.forEach(container => {
        const leftArrow = container.querySelector('.carousel-arrow-left');
        const rightArrow = container.querySelector('.carousel-arrow-right');
        const carousel = container.querySelector('.game-carousel');
        const gameItems = container.querySelectorAll('.game-item');
        const numVisibleItems = 5;
        const scrollAmount = () => {
            const visibleItems = Math.min(gameItems.length, numVisibleItems);
            return carousel.offsetWidth / visibleItems * (visibleItems - 1);
        };

        leftArrow.addEventListener('click', () => {
            if (carousel.scrollLeft === 0) {
                carousel.scrollLeft = carousel.scrollWidth - carousel.offsetWidth;
            } else {
                carousel.scrollLeft -= scrollAmount();
            }
        });

        rightArrow.addEventListener('click', () => {
            const tolerance = 1; // Define a tolerance value
            if (Math.abs(carousel.scrollLeft - (carousel.scrollWidth - carousel.offsetWidth)) <= tolerance) {
                carousel.scrollLeft = 0;
            } else {
                carousel.scrollLeft += scrollAmount();
            }
        });

        // Auto-align carousel only after the user stops scrolling (250ms delay)
        let isScrolling;
        carousel.addEventListener('scroll', () => {
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(() => {
                const itemWidth = carousel.offsetWidth / Math.min(gameItems.length, numVisibleItems);
                carousel.scrollLeft = Math.round(carousel.scrollLeft / itemWidth) * itemWidth;
            }, 250);
        });
    });
}

fetch('games.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        createCarousels(data);
    })
    .catch(error => console.error('Error loading JSON:', error));