const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '../source/pokerogue/assets/index-48e7d695.js');
const c = fs.readFileSync(bundlePath, 'utf8');

const startIdx = c.indexOf('n[n.NONE=0]="NONE"');
const endIdx = c.indexOf(',n))(a||{})', startIdx);

const enumBlock = c.substring(startIdx, endIdx);
const regex = /n\[n\.[A-Z0-9_]+\s*=\s*\d+\]\s*=\s*"([^"]+)"/g;
let m;
const moves = [];
while ((m = regex.exec(enumBlock)) !== null) {
  if (m[1] !== 'NONE') {
    moves.push(m[1].toLowerCase().replace(/_/g, '-'));
  }
}

console.log('Exact total moves in Pokérogue:', moves.length);
console.log('First 10 moves:', moves.slice(0, 10));
console.log('Last 10 moves:', moves.slice(-10));

fs.writeFileSync(path.join(__dirname, 'moves_list.json'), JSON.stringify(moves, null, 2), 'utf8');
