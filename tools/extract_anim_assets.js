const fs = require('fs');
const path = require('path');

const animDir = 'source/pokerogue/battle-anims';
const animFiles = fs.readdirSync(animDir).filter(f => f.endsWith('.json'));

const soundResources = new Set();
const graphicResources = new Set();

function processPhase(phase) {
  if (!phase || typeof phase !== 'object') return;
  if (phase.graphic && typeof phase.graphic === 'string') {
    graphicResources.add(phase.graphic.trim());
  }
  if (phase.frameTimedEvents && typeof phase.frameTimedEvents === 'object') {
    for (const key of Object.keys(phase.frameTimedEvents)) {
      const events = phase.frameTimedEvents[key];
      if (Array.isArray(events)) {
        for (const ev of events) {
          if (ev.resourceName && typeof ev.resourceName === 'string') {
            soundResources.add(ev.resourceName.trim());
          }
        }
      }
    }
  }
}

for (const file of animFiles) {
  try {
    const raw = JSON.parse(fs.readFileSync(path.join(animDir, file), 'utf8'));
    if (Array.isArray(raw)) {
      raw.forEach(processPhase);
    } else {
      processPhase(raw);
    }
  } catch(e) {}
}

console.log('Total unique sound files in battle anims (including arrays):', soundResources.size);
console.log('Total unique graphic names in battle anims (including arrays):', graphicResources.size);

fs.writeFileSync('tools/all_anim_sounds.json', JSON.stringify(Array.from(soundResources).sort(), null, 2));
fs.writeFileSync('tools/all_anim_graphics.json', JSON.stringify(Array.from(graphicResources).sort(), null, 2));
console.log('Updated tools/all_anim_sounds.json and tools/all_anim_graphics.json');
