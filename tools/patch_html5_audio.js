const fs = require('fs');

const file = 'source/pokerogue/assets/index-48e7d695.js';
let js = fs.readFileSync(file, 'utf8');

const target = "!this.tags)throw new Error('No cached audio asset with key \"'+S)";
console.log('Target found?', js.includes(target));

if (js.includes(target)) {
  const replacement = "!this.tags||!this.tags.length){var _a=new Audio();_a.duration=0.001;this.tags=[_a];try{f.game.cache.audio.add(S,this.tags);}catch(e){}console.warn('HTML5 audio key missing from cache, using dummy Audio:',S);}";
  js = js.replace(target, replacement);
  fs.writeFileSync(file, js, 'utf8');
  console.log('Successfully patched HTML5AudioSound cache error in index-48e7d695.js!');
} else {
  console.error('Target not found in', file);
}
