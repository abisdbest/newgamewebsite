const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

// 1. Update play pages
const playDir = path.join(ROOT_DIR, 'play');
let playUpdated = 0;
fs.readdirSync(playDir).forEach((gameDir) => {
  const filePath = path.join(playDir, gameDir, 'index.html');
  if (!fs.existsSync(filePath)) return;
  let html = fs.readFileSync(filePath, 'utf8');
  const original = html;

  // Header fav btn
  html = html.split('href="../../#favorites-carousel"').join('href="../../category/favorites/"');

  // Sidebar
  html = html.split('href="../../#category-new"').join('href="../../category/new/"');
  html = html.split('href="../../#category-popular"').join('href="../../category/popular/"');
  html = html.split('href="../../#favorites-carousel"').join('href="../../category/favorites/"');

  // Footer
  html = html.replace('<li><a href="../../#category-popular">Trending</a></li>', '<li><a href="../../category/popular/">Trending</a></li>');
  if (html.includes('<li><a href="../../#category-new">New games</a></li>')) {
    html = html.replace(
      '<li><a href="../../#category-new">New games</a></li>',
      '<li><a href="../../category/new/">New games</a></li>\n              <li><a href="../../category/favorites/">Favorites</a></li>'
    );
  }
  html = html.split('href="../../blog/"').join('href="../../updates/"');

  if (html !== original) {
    fs.writeFileSync(filePath, html, 'utf8');
    playUpdated++;
  }
});
console.log(`Updated ${playUpdated} play pages.`);

// 2. Update chat/index.html
const chatFile = path.join(ROOT_DIR, 'chat', 'index.html');
if (fs.existsSync(chatFile)) {
  let html = fs.readFileSync(chatFile, 'utf8');
  html = html.replace('href="../#category-new"', 'href="../category/new/"');
  html = html.replace('href="../#category-popular"', 'href="../category/popular/"');
  if (!html.includes('category/favorites/')) {
    html = html.replace(
      '        <a href="../category/popular/" class="cg-nav-item" data-tooltip="Trending">\n          <span class="cg-nav-icon"><i class="fas fa-fire"></i></span>\n          <span class="cg-nav-label">Trending</span>\n        </a>',
      '        <a href="../category/popular/" class="cg-nav-item" data-tooltip="Trending">\n          <span class="cg-nav-icon"><i class="fas fa-fire"></i></span>\n          <span class="cg-nav-label">Trending</span>\n        </a>\n        <a href="../category/favorites/" class="cg-nav-item" data-tooltip="Favorites">\n          <span class="cg-nav-icon"><i class="fas fa-heart"></i></span>\n          <span class="cg-nav-label">Favorites</span>\n        </a>'
    );
  }
  if (!html.includes('id="header-fav-btn"')) {
    html = html.replace(
      '<a href="../" class="cg-icon-btn" title="Back to Games" aria-label="Home">\n          <i class="fas fa-gamepad"></i>\n        </a>',
      '<a href="../" class="cg-icon-btn" title="Back to Games" aria-label="Home">\n          <i class="fas fa-gamepad"></i>\n        </a>\n        <a id="header-fav-btn" class="cg-icon-btn" href="../category/favorites/" title="Favorites" aria-label="My favorites">\n          <i class="fas fa-bookmark"></i>\n        </a>'
    );
  }
  html = html.split('href="../blog/"').join('href="../updates/"');
  fs.writeFileSync(chatFile, html, 'utf8');
  console.log('Updated chat/index.html');
}

// 3. Update updates/index.html
const updatesFile = path.join(ROOT_DIR, 'updates', 'index.html');
if (fs.existsSync(updatesFile)) {
  let html = fs.readFileSync(updatesFile, 'utf8');
  html = html.replace('href="../#category-new"', 'href="../category/new/"');
  html = html.replace('href="../#category-popular"', 'href="../category/popular/"');
  if (!html.includes('category/favorites/')) {
    html = html.replace(
      '        <a href="../category/popular/" class="cg-nav-item" data-tooltip="Trending">\n          <span class="cg-nav-icon"><i class="fas fa-fire"></i></span>\n          <span class="cg-nav-label">Trending</span>\n        </a>',
      '        <a href="../category/popular/" class="cg-nav-item" data-tooltip="Trending">\n          <span class="cg-nav-icon"><i class="fas fa-fire"></i></span>\n          <span class="cg-nav-label">Trending</span>\n        </a>\n        <a href="../category/favorites/" class="cg-nav-item" data-tooltip="Favorites">\n          <span class="cg-nav-icon"><i class="fas fa-heart"></i></span>\n          <span class="cg-nav-label">Favorites</span>\n        </a>'
    );
  }
  if (!html.includes('id="header-fav-btn"')) {
    html = html.replace(
      '<a href="../" class="cg-icon-btn" title="Back to Games" aria-label="Home">\n          <i class="fas fa-gamepad"></i>\n        </a>',
      '<a href="../" class="cg-icon-btn" title="Back to Games" aria-label="Home">\n          <i class="fas fa-gamepad"></i>\n        </a>\n        <a id="header-fav-btn" class="cg-icon-btn" href="../category/favorites/" title="Favorites" aria-label="My favorites">\n          <i class="fas fa-bookmark"></i>\n        </a>'
    );
  }
  html = html.split('href="../blog/"').join('href="../updates/"');
  fs.writeFileSync(updatesFile, html, 'utf8');
  console.log('Updated updates/index.html');
}

// 4. Update soundboard/index.html
const soundboardFile = path.join(ROOT_DIR, 'soundboard', 'index.html');
if (fs.existsSync(soundboardFile)) {
  let html = fs.readFileSync(soundboardFile, 'utf8');
  html = html.replace('href="../#category-new"', 'href="../category/new/"');
  html = html.replace('href="../#category-popular"', 'href="../category/popular/"');
  html = html.replace('href="../#favorites-carousel"', 'href="../category/favorites/"');
  html = html.replace('href="../#category-action"', 'href="../category/action/"');
  html = html.replace('href="../#category-addictive"', 'href="../category/addictive/"');
  html = html.replace('href="../#category-driving"', 'href="../category/driving/"');
  html = html.replace('href="../#category-puzzle"', 'href="../category/puzzle/"');
  html = html.replace('href="../#category-sports"', 'href="../category/sports/"');
  html = html.replace('href="../#category-2-player"', 'href="../category/2-player/"');
  html = html.replace('href="../#category-retro"', 'href="../category/retro/"');
  html = html.replace('href="../#category-clicker"', 'href="../category/clicker/"');
  html = html.replace('href="../#category-tools"', 'href="../category/tools/"');
  html = html.split('href="../blog/"').join('href="../updates/"');
  if (!html.includes('id="header-fav-btn"')) {
    html = html.replace(
      '<div class="cg-header-right">',
      '<div class="cg-header-right">\n        <a id="header-fav-btn" class="cg-icon-btn" href="../category/favorites/" title="Favorites" aria-label="My favorites">\n          <i class="fas fa-bookmark"></i>\n        </a>'
    );
  }
  fs.writeFileSync(soundboardFile, html, 'utf8');
  console.log('Updated soundboard/index.html');
}
