const fs = require('fs');

const NORMALIZATION_MAP = {
  'golf orbit': ['Sports', 'Addictive Games'],
  'idle loops': ['Clicker', 'Puzzle', 'Addictive Games'],
  '4x4 chess': ['Puzzle', '2-Player'],
  'brotato': ['Action', 'Addictive Games'],
  'house of hazards': ['2-Player', 'Action', 'Addictive Games'],
  'superhot': ['Action', 'Addictive Games'],
  'pokérogue': ['Action', 'Puzzle', 'Addictive Games'],
  'vex 10': ['Action', 'Addictive Games'],
  'slow roads': ['Driving', 'Addictive Games'],
  'raft wars 2': ['Action', 'Addictive Games'],
  'the prestige tree': ['Clicker', 'Addictive Games'],
  'antimatter dimensions': ['Clicker', 'Addictive Games'],
  'a dark room': ['Clicker', 'Puzzle', 'Addictive Games'],
  'poor bunny': ['2-Player', 'Action', 'Addictive Games'],
  'stickman hook': ['Action', 'Addictive Games'],
  'drift boss': ['Driving', 'Addictive Games'],
  'basket bros': ['Sports', '2-Player', 'Addictive Games'],
  'drive mad': ['Driving', 'Addictive Games'],
  'jetpack joyride': ['Action', 'Addictive Games'],
  'geometry dash lite': ['Action', 'Addictive Games'],
  'tube jumpers': ['2-Player', 'Action', 'Addictive Games'],
  'death run 3d': ['Action', 'Addictive Games'],
  'polytrack': ['Driving', 'Addictive Games'],
  'mad grand prix': ['Driving', 'Sports', 'Addictive Games'],
  'supreme duelist stickman 2': ['2-Player', 'Action', 'Addictive Games'],
  'mr racer - car racing': ['Driving', 'Addictive Games'],
  'helix jump': ['Action', 'Addictive Games'],
  'crossy road': ['Action', 'Retro Games', 'Addictive Games'],
  'zigzag': ['Action', 'Addictive Games'],
  'bottle flip 3d': ['Puzzle', 'Addictive Games']
};

const CANONICAL = new Set([
  'Action',
  'Addictive Games',
  'Driving',
  'Puzzle',
  'Sports',
  '2-Player',
  'Retro Games',
  'Clicker',
  'Tools'
]);

function processGamesFile(filePath) {
  const games = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  for (const entry of games) {
    const k = Object.keys(entry)[0];
    const g = entry[k];
    if (NORMALIZATION_MAP[k]) {
      g['game categories'] = NORMALIZATION_MAP[k];
    } else {
      // Validate all categories are canonical
      g['game categories'] = (g['game categories'] || []).filter(c => CANONICAL.has(c));
    }
  }
  fs.writeFileSync(filePath, JSON.stringify(games, null, 2), 'utf8');
  console.log(`Updated ${filePath}`);
  return games;
}

const updated = processGamesFile('games.json');
processGamesFile('play/games.json');

// Count games per category
const counts = {};
CANONICAL.forEach(c => counts[c] = 0);
for (const entry of updated) {
  const k = Object.keys(entry)[0];
  const g = entry[k];
  for (const c of g['game categories']) {
    counts[c] = (counts[c] || 0) + 1;
  }
}

console.log('\nFinal canonical category distribution:');
Object.entries(counts).sort((a,b) => b[1] - a[1]).forEach(([c, n]) => {
  console.log(`${c.padEnd(20)}: ${n} games`);
});
