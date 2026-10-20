const fs = require('fs');

const file = 'source/pokerogue/assets/index-48e7d695.js';
let js = fs.readFileSync(file, 'utf8');

const target = "!this.audioBuffer)throw new Error('Audio key \"'+S+'\" missing from cache')";
console.log('Target found?', js.includes(target));

if (js.includes(target)) {
  const replacement = "!this.audioBuffer){var _b=f.context?f.context.createBuffer(1,1,22050):null;if(_b)f.game.cache.audio.add(S,_b);this.audioBuffer=f.game.cache.audio.get(S);console.warn('Audio key missing from cache, using dummy buffer:',S);}";
  js = js.replace(target, replacement);
  fs.writeFileSync(file, js, 'utf8');
  console.log('Successfully patched Phaser WebAudioSound cache error in index-48e7d695.js!');
} else {
  console.error('Target not found in', file);
}
