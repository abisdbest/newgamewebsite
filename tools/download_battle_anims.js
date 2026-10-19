const fs = require('fs');
const path = require('path');
const https = require('https');

const movesList = JSON.parse(fs.readFileSync(path.join(__dirname, 'moves_list.json'), 'utf8'));
const targetDir = path.join(__dirname, '../source/pokerogue/battle-anims');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

console.log(`Starting download of battle animations for ${movesList.length} moves...`);

let completed = 0;
let downloaded = 0;
let alreadyExists = 0;
let notFound = 0;
let errors = 0;

const CONCURRENCY = 20;
let queueIndex = 0;

function fetchMove(moveName) {
  return new Promise(resolve => {
    const filename = `${moveName}.json`;
    const dest = path.join(targetDir, filename);

    if (fs.existsSync(dest) && fs.statSync(dest).size > 10) {
      alreadyExists++;
      completed++;
      return resolve();
    }

    const url = `https://pokerogue.online/battle-anims/${filename}`;
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          downloaded++;
          completed++;
          resolve();
        });
      } else {
        res.resume();
        notFound++;
        completed++;
        resolve();
      }
    });

    req.on('error', err => {
      errors++;
      completed++;
      resolve();
    });

    req.setTimeout(8000, () => {
      req.destroy();
      errors++;
      completed++;
      resolve();
    });
  });
}

async function worker() {
  while (queueIndex < movesList.length) {
    const idx = queueIndex++;
    await fetchMove(movesList[idx]);
    if (completed % 50 === 0 || completed === movesList.length) {
      process.stdout.write(`Progress: ${completed}/${movesList.length} (Downloaded: ${downloaded}, Existing: ${alreadyExists}, 404: ${notFound})\r`);
    }
  }
}

const workers = [];
for (let i = 0; i < CONCURRENCY; i++) {
  workers.push(worker());
}

Promise.all(workers).then(() => {
  console.log(`\nFinished downloading battle anims!`);
  console.log(`Downloaded: ${downloaded}, Already Existed: ${alreadyExists}, 404 (no custom anim): ${notFound}, Errors: ${errors}`);
});
