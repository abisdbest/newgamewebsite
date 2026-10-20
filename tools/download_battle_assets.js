const fs = require('fs');
const path = require('path');
const https = require('https');

const graphicsList = JSON.parse(fs.readFileSync('tools/all_anim_graphics.json', 'utf8'));
const soundsList = JSON.parse(fs.readFileSync('tools/all_anim_sounds.json', 'utf8'));

const graphicsDir = path.join('source', 'pokerogue', 'images', 'battle_anims');
const soundsDir = path.join('source', 'pokerogue', 'audio', 'se', 'battle_anims');

if (!fs.existsSync(graphicsDir)) fs.mkdirSync(graphicsDir, { recursive: true });
if (!fs.existsSync(soundsDir)) fs.mkdirSync(soundsDir, { recursive: true });

function downloadFile(url, destPath) {
  return new Promise((resolve) => {
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 100) {
      return resolve({ status: 'cached' });
    }

    const file = fs.createWriteStream(destPath);
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        file.close();
        if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
        return resolve({ status: 'fail', code: res.statusCode });
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve({ status: 'ok' }));
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
      resolve({ status: 'error', error: err.message });
    });
  });
}

async function runQueue(items, workerFn, concurrency = 12) {
  let index = 0;
  let success = 0;
  let failed = 0;

  async function worker() {
    while (index < items.length) {
      const i = index++;
      const item = items[i];
      const res = await workerFn(item);
      if (res.status === 'ok' || res.status === 'cached') {
        success++;
      } else {
        failed++;
      }
      if ((success + failed) % 50 === 0 || (success + failed) === items.length) {
        console.log(`Progress: ${success + failed}/${items.length} (Success: ${success}, Failed/404: ${failed})`);
      }
    }
  }

  const pool = Array.from({ length: concurrency }, () => worker());
  await Promise.all(pool);
  return { success, failed };
}

async function main() {
  console.log(`=== DOWNLOADING ${graphicsList.length} BATTLE ANIM GRAPHICS ===`);
  const graphicsItems = graphicsList.map(g => {
    const filename = g.endsWith('.png') ? g : `${g}.png`;
    const url = `https://pokerogue.online/images/battle_anims/${encodeURIComponent(filename)}`;
    const dest = path.join(graphicsDir, filename);
    return { url, dest, name: filename };
  });

  await runQueue(graphicsItems, async (item) => {
    return await downloadFile(item.url, item.dest);
  }, 12);

  console.log(`=== DOWNLOADING ${soundsList.length} BATTLE ANIM SOUNDS ===`);
  const soundItems = soundsList.map(s => {
    const filename = s;
    const url = `https://pokerogue.online/audio/se/battle_anims/${encodeURIComponent(filename)}`;
    const dest = path.join(soundsDir, filename);
    return { url, dest, name: filename };
  });

  await runQueue(soundItems, async (item) => {
    return await downloadFile(item.url, item.dest);
  }, 12);

  console.log('=== DOWNLOAD COMPLETE ===');
  console.log('Total graphics files on disk:', fs.readdirSync(graphicsDir).length);
  console.log('Total sounds files on disk:', fs.readdirSync(soundsDir).length);
}

main().catch(console.error);
