/**
 * Cloudflare Pages Pre-deployment Build Script
 * 
 * Cloudflare Pages has a strict individual file size limit of 25 MiB (26,214,400 bytes).
 * Any file >= 25 MiB will cause Cloudflare Pages deployments to fail.
 * 
 * This script runs during `npm run build` in Cloudflare Pages' build container.
 * In Cloudflare Pages (where CF_PAGES=1), it automatically removes files >= 24 MiB
 * so that Cloudflare Pages can upload and deploy without hitting the 25 MiB limit.
 */

const fs = require('fs');
const path = require('path');

const MAX_FILE_SIZE = 24 * 1024 * 1024; // 24 MiB safety threshold
const ROOT_DIR = path.resolve(__dirname, '..');

const isCloudflarePages = process.env.CF_PAGES === '1' || process.env.CI === 'true';
const isForce = process.argv.includes('--force');
const shouldDelete = isCloudflarePages || isForce;

let matchedCount = 0;
let matchedBytes = 0;

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.name === '.git' || entry.name === 'node_modules') continue;

    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (entry.isFile()) {
      try {
        const stat = fs.statSync(fullPath);
        if (stat.size >= MAX_FILE_SIZE) {
          const relPath = path.relative(ROOT_DIR, fullPath).replace(/\\/g, '/');
          const sizeMb = (stat.size / (1024 * 1024)).toFixed(2);
          matchedCount++;
          matchedBytes += stat.size;

          if (shouldDelete) {
            console.log(`[CF-Pages Build] Removing large file (${sizeMb} MB): ${relPath}`);
            fs.unlinkSync(fullPath);
          } else {
            console.log(`[CF-Pages Build] [DRY RUN] Would remove (${sizeMb} MB): ${relPath}`);
          }
        }
      } catch (err) {
        console.warn(`[CF-Pages Build] Could not inspect ${fullPath}:`, err.message);
      }
    }
  }
}

console.log('====================================================');
console.log('🚀 Cloudflare Pages Build Script');
console.log(`Mode: ${shouldDelete ? 'Active Deletion (Cloudflare CI / Force)' : 'Dry-Run (Local environment)'}`);
console.log(`Threshold: Files >= 24 MiB`);
console.log('====================================================');

scanDir(ROOT_DIR);

const mbTotal = (matchedBytes / (1024 * 1024)).toFixed(2);
console.log('====================================================');
if (shouldDelete) {
  console.log(`✅ Build Complete: Removed ${matchedCount} large files (${mbTotal} MB) for Cloudflare Pages deployment.`);
} else {
  console.log(`ℹ️ Dry-run complete: Found ${matchedCount} files (${mbTotal} MB) exceeding 24 MiB.`);
  console.log(`ℹ️ In Cloudflare Pages (CF_PAGES=1), these will be stripped automatically during build.`);
}
console.log('====================================================');
