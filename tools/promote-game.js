const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const previewGamesData = path.join(rootDir, 'preview', 'games-data.json');

const gameId = process.argv[2];
if (!gameId) {
  console.log('Usage: node tools/promote-game.js <game-id>');
  console.log('Example: node tools/promote-game.js basket-bros');
  process.exit(1);
}

if (!fs.existsSync(previewGamesData)) {
  console.error('Error: games-data.json not found in preview/');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(previewGamesData, 'utf8'));
const game = data.readyGames.find(g => g.id === gameId);

if (!game) {
  console.error(`Error: Game '${gameId}' not found in readyGames list.`);
  process.exit(1);
}

const cleanFolder = path.join(rootDir, 'preview', 'games', game.id);
if (!fs.existsSync(cleanFolder)) {
  console.error(`Error: Clean game directory '${cleanFolder}' not found.`);
  process.exit(1);
}

const targetName = game.title.toLowerCase();
const sourceDir = path.join(rootDir, 'source', targetName);
const playDir = path.join(rootDir, 'play', targetName);
const gamesJsonPath = path.join(rootDir, 'games.json');

console.log(`\nPromoting game: "${game.title}" (${game.id}) to Blooket1...`);

// 1. Copy game files to source/<targetName>
console.log(`1. Copying game files to source/${targetName}...`);
fs.mkdirSync(sourceDir, { recursive: true });
fs.cpSync(cleanFolder, sourceDir, { recursive: true });

// 2. Create play/<targetName>/index.html
console.log(`2. Generating play page at play/${targetName}/index.html...`);
fs.mkdirSync(playDir, { recursive: true });

const playPageHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta name="theme-color" content="#0b0c13" />
    <title>${game.title} - Play Free Online Unblocked | Blooket1</title>
    <meta name="description" content="Play ${game.title} unblocked for free on Blooket1. ${game.description}" />
    <link rel="canonical" href="https://blooket1.pages.dev/play/${encodeURIComponent(targetName)}/" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Blooket1" />
    <meta property="og:title" content="${game.title} - Play Free Online Unblocked" />
    <meta property="og:description" content="${game.description}" />
    <meta property="og:url" content="https://blooket1.pages.dev/play/${encodeURIComponent(targetName)}/" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="icon" type="image/x-icon" href="../../images/b-logo.webp" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;800;900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" crossorigin="anonymous" />
    <link rel="stylesheet" href="../../styles.css" />
    <link rel="stylesheet" href="../../carousel.css" />
    <link rel="stylesheet" href="../../ub.css" />
    <link rel="stylesheet" href="../../play.css" />
    <script src="../../play.js" defer></script>
  </head>
  <body
    class="play-page"
    data-game="${targetName}"
    data-src="../../source/${targetName}/index.html"
    data-dpad="arrows"
    data-buttons=""
  >
    <header class="cg-header">
      <div class="cg-header-left">
        <a href="../../" class="cg-logo-area" aria-label="Blooket1 Home">
          <span class="cg-logo-icon-wrap">
            <img class="cg-logo-img" src="../../images/b-logo.webp" alt="" width="34" height="34" />
          </span>
          <span class="cg-logo-text">Blooket<span class="cg-logo-accent">1</span></span>
        </a>
      </div>
      <nav class="cg-header-nav">
        <a href="../../" class="cg-nav-link">Home</a>
        <a href="../../category/" class="cg-nav-link">Categories</a>
      </nav>
    </header>

    <main class="cg-play-main">
      <div class="cg-game-container">
        <iframe id="game-frame" src="../../source/${targetName}/index.html" allowfullscreen allow="autoplay; fullscreen; gamepad"></iframe>
      </div>
      <div class="cg-game-details" style="padding: 20px; max-width: 1200px; margin: 0 auto; color: #fff;">
        <h1 style="font-size: 2rem; font-weight: 800; margin-bottom: 8px;">${game.title}</h1>
        <p style="color: #94a3b8; font-size: 1rem; line-height: 1.6;">${game.description}</p>
        <div style="margin-top: 16px; background: rgba(255,255,255,0.05); padding: 12px 16px; border-radius: 8px;">
          <strong>Controls:</strong> ${game.controls}
        </div>
      </div>
    </main>
  </body>
</html>`;

fs.writeFileSync(path.join(playDir, 'index.html'), playPageHtml, 'utf8');

// 3. Register in games.json
console.log(`3. Registering game in games.json...`);
let gamesList = [];
if (fs.existsSync(gamesJsonPath)) {
  gamesList = JSON.parse(fs.readFileSync(gamesJsonPath, 'utf8'));
}

const existingIdx = gamesList.findIndex(entry => Object.keys(entry)[0] === targetName);
const newEntry = {
  [targetName]: {
    "game image": `images/${targetName}.webp`,
    "game link": `play/${targetName}/`,
    "game categories": game.category.split(' / '),
    "date added": new Date().toISOString().split('T')[0],
    "description": game.description
  }
};

if (existingIdx >= 0) {
  gamesList[existingIdx] = newEntry;
  console.log(`   Updated existing entry in games.json`);
} else {
  gamesList.unshift(newEntry);
  console.log(`   Added new entry to games.json`);
}

fs.writeFileSync(gamesJsonPath, JSON.stringify(gamesList, null, 2), 'utf8');

console.log(`\nSuccessfully promoted "${game.title}"!`);
console.log(`\nTo commit to git:`);
console.log(`   git add "source/${targetName}" "play/${targetName}" games.json`);
console.log(`   git commit -m "Add ${game.title}"\n`);
