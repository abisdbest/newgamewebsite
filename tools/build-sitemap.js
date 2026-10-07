#!/usr/bin/env node
/**
 * Builds sitemap.xml for https://blooket1.com (the canonical domain).
 *
 * Usage:  node tools/build-sitemap.js
 * Re-run after adding games or category pages. It scans the folders on disk,
 * so every play/<game>/index.html and category/<slug>/index.html is included
 * automatically. blooket1.pages.dev is intentionally NOT listed: those pages
 * have canonical tags pointing at blooket1.com, so listing them would only
 * create duplicate-URL warnings in Search Console.
 */
const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BASE = 'https://blooket1.com/';
const today = new Date().toISOString().slice(0, 10);

// Static pages: [folder, changefreq, priority]
const STATIC = [
  ['', 'daily', '1.0'],
  ['blog/', 'weekly', '0.6'],
  ['about us/', 'monthly', '0.4'],
  ['contact us/', 'monthly', '0.3'],
  ['privacy/', 'yearly', '0.3'],
  ['tsandcs/', 'yearly', '0.3'],
  ['chat/', 'weekly', '0.4'],
];

const hasIndex = (rel) => fs.existsSync(path.join(ROOT_DIR, rel, 'index.html'));
const subdirs = (rel) =>
  fs.existsSync(path.join(ROOT_DIR, rel))
    ? fs.readdirSync(path.join(ROOT_DIR, rel), { withFileTypes: true })
        .filter((d) => d.isDirectory() && hasIndex(`${rel}/${d.name}`))
        .map((d) => d.name)
        .sort()
    : [];

// Use the file's own modified date when it is older than today, so Google
// only sees a fresh lastmod for pages that actually changed.
const lastmod = (rel) => {
  try {
    return fs.statSync(path.join(ROOT_DIR, rel, 'index.html')).mtime.toISOString().slice(0, 10);
  } catch {
    return today;
  }
};

const urls = [];
const add = (rel, changefreq, priority) => {
  const loc = BASE + rel.split('/').map(encodeURIComponent).join('/');
  urls.push({ loc, lastmod: lastmod(rel), changefreq, priority });
};

for (const [rel, freq, pri] of STATIC) if (rel === '' || hasIndex(rel)) add(rel, freq, pri);
for (const slug of subdirs('category')) add(`category/${slug}/`, 'daily', '0.8');
for (const game of subdirs('play')) add(`play/${game}/`, 'weekly', '0.7');

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls
    .map(
      (u) =>
        `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n` +
        `    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
    )
    .join('\n') +
  '\n</urlset>\n';

fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), xml);
fs.writeFileSync(
  path.join(ROOT_DIR, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${BASE}sitemap.xml\n`
);
console.log(`sitemap.xml: ${urls.length} URLs (${subdirs('play').length} games, ${subdirs('category').length} categories)`);
