const fs = require('fs');
const path = require('path');

const animDir = 'source/pokerogue/battle-anims';
const animFiles = fs.readdirSync(animDir).filter(f => f.endsWith('.json'));

const soundResources = new Set();
const graphicResources = new Set();

for (const file of animFiles) {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(animDir, file), 'utf8'));
    if (data.graphic) graphicResources.add(data.graphic.trim());
    
    if (data.frameTimedEvents && typeof data.frameTimedEvents === 'object') {
      for (const key of Object.keys(data.frameTimedEvents)) {
        const events = data.frameTimedEvents[key];
        if (Array.isArray(events)) {
          for (const ev of events) {
            if (ev.resourceName) {
              soundResources.add(ev.resourceName.trim());
            }
          }
        }
      }
    }
  } catch(e) {}
}

console.log('Total unique sound files in battle anims:', soundResources.size);
console.log('Total unique graphic names in battle anims:', graphicResources.size);

fs.writeFileSync('tools/all_anim_sounds.json', JSON.stringify(Array.from(soundResources).sort(), null, 2));
fs.writeFileSync('tools/all_anim_graphics.json', JSON.stringify(Array.from(graphicResources).sort(), null, 2));
console.log('Lists written to tools/');
