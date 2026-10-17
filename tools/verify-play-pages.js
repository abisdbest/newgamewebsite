const fs = require('fs');
const path = require('path');

const entries = fs.readdirSync('play', { withFileTypes: true });
const dirs = entries.filter(e => e.isDirectory()).map(e => e.name);

console.log('Total dirs in play/:', dirs.length);

let passed = 0;
let failed = [];

for (const d of dirs) {
  const p = path.join('play', d, 'index.html');
  if (!fs.existsSync(p)) {
    failed.push({ dir: d, reason: 'NO_INDEX' });
    continue;
  }
  const html = fs.readFileSync(p, 'utf8');
  const checks = {
    playPageClass: html.includes('class="play-page"'),
    playerShell: html.includes('id="player-shell"'),
    playerCover: html.includes('id="player-cover"'),
    gameIframe: html.includes('id="game-iframe"'),
    leftRailAd: html.includes('data-ad-key="leftRail"'),
    sidebarTopAd: html.includes('ad-unit-sidebar-top') && html.includes('data-ad-key="sidebar"'),
    leaderboardAd: html.includes('data-ad-key="leaderboard"'),
    noInArticleAd: !html.includes('data-ad-key="inArticle"'),
    multiplexAd: html.includes('data-ad-key="multiplex"'),
    playRailsAboveInfo: html.indexOf('id="play-rails"') > 0 && html.indexOf('id="play-rails"') < html.indexOf('class="play-info-grid"'),
    balancedDivs: (html.match(/<div\b/g) || []).length === (html.match(/<\/div>/g) || []).length,
    settingsModal: html.includes('id="settingsModalOverlay"'),
    playJs: html.includes('play.js')
  };
  const allGood = Object.values(checks).every(Boolean);
  if (allGood) {
    passed++;
  } else {
    failed.push({ dir: d, checks });
  }
}

console.log(`Passed all modern standard checks: ${passed} out of ${dirs.length}`);
if (failed.length) {
  console.log('Failed items:', JSON.stringify(failed, null, 2));
} else {
  console.log('ALL PLAY PAGES PASS THE FULL GOLD STANDARD!');
}
