const https = require('https');
const fs = require('fs');
const path = require('path');

const REPO_TREE_URL = 'https://api.github.com/repos/pagefaultgames/pokerogue-assets/git/trees/beta?recursive=1';
const RAW_BASE_URL = 'https://raw.githubusercontent.com/pagefaultgames/pokerogue-assets/beta/';
const CDN_BASE_URL = 'https://pokerogue.online/';
const TARGET_DIR = path.resolve(__dirname, '../source/pokérogue');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'NodeJS-Pokérogue-Downloader' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Failed to parse JSON: ${data.slice(0, 100)}`));
        }
      });
    }).on('error', reject);
  });
}

function downloadFile(relPath, destPath, retries = 3) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(destPath) && fs.statSync(destPath).size > 0) {
      return resolve({ path: relPath, cached: true });
    }

    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const tryDownload = (url, attempt) => {
      https.get(url, (res) => {
        if (res.statusCode === 200) {
          const file = fs.createWriteStream(destPath);
          res.pipe(file);
          file.on('finish', () => {
            file.close(() => resolve({ path: relPath, cached: false, bytes: fs.statSync(destPath).size }));
          });
          file.on('error', err => {
            fs.unlink(destPath, () => {});
            if (attempt < retries) setTimeout(() => tryDownload(url, attempt + 1), 1000);
            else reject(err);
          });
        } else if (res.statusCode === 301 || res.statusCode === 302) {
          tryDownload(res.headers.location, attempt);
        } else {
          // If raw github failed, try pokerogue.online CDN
          if (url.startsWith(RAW_BASE_URL)) {
            tryDownload(CDN_BASE_URL + relPath, attempt);
          } else if (attempt < retries) {
            setTimeout(() => tryDownload(url, attempt + 1), 1000);
          } else {
            reject(new Error(`HTTP ${res.statusCode} for ${relPath}`));
          }
        }
      }).on('error', err => {
        if (attempt < retries) setTimeout(() => tryDownload(url, attempt + 1), 1000);
        else reject(err);
      });
    };

    tryDownload(RAW_BASE_URL + relPath, 1);
  });
}

async function run() {
  console.log('Fetching asset list from GitHub...');
  const treeData = await fetchJson(REPO_TREE_URL);
  if (!treeData.tree) {
    throw new Error('Failed to fetch tree: ' + JSON.stringify(treeData).slice(0, 200));
  }

  // Filter all base Pokémon assets (#1 to #1025)
  // Front: images/pokemon/<id>.png, images/pokemon/<id>.json
  // Back: images/pokemon/back/<id>.png, images/pokemon/back/<id>.json
  // Cry: audio/cry/<id>.m4a
  const baseAssets = treeData.tree.filter(t => 
    (/^images\/pokemon\/(back\/)?\d+\.(png|json)$/.test(t.path) || 
     /^audio\/cry\/\d+\.m4a$/.test(t.path)) &&
    t.type === 'blob'
  );

  console.log(`Found ${baseAssets.length} base Pokémon assets to download.`);
  const CONCURRENCY = 25;
  let completed = 0;
  let downloadedBytes = 0;
  let errors = 0;
  const total = baseAssets.length;

  const queue = [...baseAssets];

  async function worker(workerId) {
    while (queue.length > 0) {
      const item = queue.shift();
      const destPath = path.join(TARGET_DIR, item.path);
      try {
        const res = await downloadFile(item.path, destPath);
        completed++;
        if (!res.cached) downloadedBytes += res.bytes || 0;
        if (completed % 250 === 0 || completed === total) {
          const mb = (downloadedBytes / 1024 / 1024).toFixed(1);
          const percent = ((completed / total) * 100).toFixed(1);
          console.log(`[Progress] ${completed}/${total} (${percent}%) - ${mb} MB downloaded`);
        }
      } catch (err) {
        errors++;
        console.error(`Error downloading ${item.path}:`, err.message);
      }
    }
  }

  const startTime = Date.now();
  const workers = Array.from({ length: CONCURRENCY }, (_, i) => worker(i));
  await Promise.all(workers);

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`Done! Downloaded ${completed} assets (${(downloadedBytes / 1024 / 1024).toFixed(1)} MB) in ${duration}s. Errors: ${errors}`);
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
