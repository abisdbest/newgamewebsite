const fs = require('fs');
const path = require('path');

const animDir = 'source/pokerogue/battle-anims';
const animFiles = fs.readdirSync(animDir).filter(f => f.endsWith('.json'));
const sounds = new Set();
const graphics = new Set();

for (const file of animFiles) {
  try {
    const content = fs.readFileSync(path.join(animDir, file), 'utf8');
    const data = JSON.parse(content);
    if (data.soundEffect) sounds.add(data.soundEffect);
    if (data.graphic) graphics.add(data.graphic);
    
    // Check frames
    if (Array.isArray(data.frames)) {
      for (const frame of data.frames) {
        if (frame.soundEffect) sounds.add(frame.soundEffect);
        if (frame.graphic) graphics.add(frame.graphic);
      }
    }
  } catch (e) {}
}

console.log('Total unique soundEffects:', sounds.size);
console.log('Sample sounds:', Array.from(sounds).slice(0, 30));
console.log('Total unique graphics:', graphics.size);
console.log('Sample graphics:', Array.from(graphics).slice(0, 30));

const seDir = 'source/pokerogue/audio/se';
const baAudioDir = 'source/pokerogue/audio/se/battle_anims';
const existingSe = fs.existsSync(seDir) ? fs.readdirSync(seDir) : [];
const existingBaAudio = fs.existsSync(baAudioDir) ? fs.readdirSync(baAudioDir) : [];

let missingSounds = 0;
const missingSoundList = [];
for (const s of sounds) {
  if (!s) continue;
  const found = existingSe.some(f => f.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(f.replace(/\.[^.]+$/, '').toLowerCase())) ||
                existingBaAudio.some(f => f.toLowerCase().includes(s.toLowerCase()) || s.toLowerCase().includes(f.replace(/\.[^.]+$/, '').toLowerCase()));
  if (!found) {
    missingSounds++;
    missingSoundList.push(s);
  }
}
console.log('Potentially missing sounds count:', missingSounds, 'out of', sounds.size);
console.log('First 20 missing:', missingSoundList.slice(0, 20));
