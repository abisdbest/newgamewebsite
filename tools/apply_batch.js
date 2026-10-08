const fs = require('fs');
const path = require('path');

function formatKeycaps(keys) {
  const map = {
    'mouse': '<span class="keycap keycap-wide"><i class="fas fa-computer-mouse"></i> Mouse</span>',
    'wasd': '<span class="keycap">W</span><span class="keycap">A</span><span class="keycap">S</span><span class="keycap">D</span>',
    'arrows': '<span class="keycap keycap-up"><i class="fas fa-arrow-up"></i></span><span class="keycap keycap-left"><i class="fas fa-arrow-left"></i></span><span class="keycap keycap-down"><i class="fas fa-arrow-down"></i></span><span class="keycap keycap-right"><i class="fas fa-arrow-right"></i></span>',
    'space': '<span class="keycap keycap-space">Space</span>',
    'shift': '<span class="keycap keycap-wide">Shift</span>',
    'enter': '<span class="keycap keycap-wide">Enter</span>',
    'up': '<span class="keycap keycap-up"><i class="fas fa-arrow-up"></i></span>',
    'down': '<span class="keycap keycap-down"><i class="fas fa-arrow-down"></i></span>',
    'left': '<span class="keycap keycap-left"><i class="fas fa-arrow-left"></i></span>',
    'right': '<span class="keycap keycap-right"><i class="fas fa-arrow-right"></i></span>',
    'ad': '<span class="keycap">A</span><span class="keycap">D</span>',
    'ws': '<span class="keycap">W</span><span class="keycap">S</span>',
    'ijkl': '<span class="keycap">I</span><span class="keycap">J</span><span class="keycap">K</span><span class="keycap">L</span>',
    '1-8': '<span class="keycap">1</span><span class="keycap">2</span><span class="keycap">3</span><span class="keycap">...</span><span class="keycap">8</span>',
    '1-9': '<span class="keycap">1</span><span class="keycap">2</span><span class="keycap">3</span><span class="keycap">...</span><span class="keycap">9</span>',
    'E': '<span class="keycap">E</span>',
    'Q': '<span class="keycap">Q</span>',
    'M': '<span class="keycap">M</span>',
    'P': '<span class="keycap">P</span>',
    'R': '<span class="keycap">R</span>',
    'C': '<span class="keycap">C</span>',
    'F': '<span class="keycap">F</span>',
    'Z': '<span class="keycap">Z</span>',
    'X': '<span class="keycap">X</span>',
    'esc': '<span class="keycap">Esc</span>'
  };

  return keys.map(k => map[k] || `<span class="keycap">${k}</span>`).join('\n        ');
}

function applyBatch(batchData) {
  const rawGames = JSON.parse(fs.readFileSync('games.json', 'utf8'));
  const linkMap = {};
  rawGames.forEach(obj => {
    for (const [k, v] of Object.entries(obj)) {
      linkMap[k.toLowerCase()] = v['game link'];
    }
  });

  // 1. Update games.json and play/games.json
  ['games.json', 'play/games.json'].forEach(filePath => {
    if (!fs.existsSync(filePath)) return;
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let modCount = 0;
    data.forEach(item => {
      for (const [key, details] of Object.entries(item)) {
        const k = key.toLowerCase();
        if (batchData[k]) {
          details.description = batchData[k].catalogDesc;
          modCount++;
        }
      }
    });
    fs.writeFileSync(filePath, JSON.stringify(data, null, 4), 'utf8');
    console.log(`Updated ${modCount} catalog descriptions in ${filePath}`);
  });

  // 2. Update individual play pages
  let updatedCount = 0;
  for (const [slug, info] of Object.entries(batchData)) {
    let link = linkMap[slug];
    if (!link) {
      console.warn(`No link found for: ${slug}`);
      continue;
    }
    const htmlPath = link.endsWith('/') ? path.join(link, 'index.html') : path.join(link + '/index.html');
    if (!fs.existsSync(htmlPath)) {
      console.warn(`File not found: ${htmlPath}`);
      continue;
    }

    let html = fs.readFileSync(htmlPath, 'utf8');

    const howToItems = info.howTo.map(step => `                  <li>${step}</li>`).join('\n');
    const tipItems = info.tips.map(tip => `                  <li>${tip}</li>`).join('\n');
    const capHtml = formatKeycaps(info.keycaps || ['mouse']);
    const displayName = info.displayName || slug.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    const newAboutBody = `
        <p>${info.paragraphs[0]}</p>

        <div class="ad-unit ad-unit-inarticle">
          <span class="ad-label">Advertisement</span>
          <ins class="adsbygoogle" data-ad-key="inArticle"></ins>
        </div>

        <p>${info.paragraphs[1]}</p>
        <p>${info.paragraphs[2]}</p>

        <h3>How to play ${displayName}</h3>
        <ol>
${howToItems}
        </ol>

        <h3>Tips for winning and high scores</h3>
        <ul>
${tipItems}
        </ul>

        <h3>Frequently asked questions</h3>
        <p><b>Is ${displayName} free to play?</b><br />Yes, it is completely free to play directly in your web browser on Blooket1 with no downloads or installs required.</p>
        <p><b>Can I play ${displayName} on a school Chromebook or mobile?</b><br />Yes, it runs smoothly in any modern browser including Chrome on Chromebooks, laptops, tablets, and smartphones.</p>
        <p><b>Does my progress save automatically?</b><br />Your high scores, achievements, and unlocked upgrades are stored locally in your browser so you can continue where you left off.</p>
      `;

    // Replace title
    html = html.replace(/<h2 class="play-about-title">[\s\S]*?<\/h2>/, `<h2 class="play-about-title">${info.title}</h2>`);

    // Replace body
    html = html.replace(/<div class="play-about-body"[^>]*>[\s\S]*?<\/div>\s*<\/article>/, `<div class="play-about-body" id="play-about-body">${newAboutBody}</div>\n            </article>`);

    // Replace controls text & keycaps
    if (info.controlsText) {
      html = html.replace(/<p class="play-controls-text">[\s\S]*?<\/p>/, `<p class="play-controls-text">\n                ${info.controlsText}\n              </p>`);
    }
    if (info.keycaps) {
      html = html.replace(/<div class="play-keycaps"[^>]*>[\s\S]*?<\/div>/, `<div class="play-keycaps" aria-hidden="true">\n        ${capHtml}\n      </div>`);
    }

    // Developer / Release facts
    if (html.includes('<dl class="play-facts-list">')) {
      const devRow = `<div><dt>Developer</dt><dd>${info.developer || 'Community'}</dd></div>`;
      const relRow = `<div><dt>Release</dt><dd>${info.release || 'Classic'}</dd></div>`;
      
      if (html.includes('<dt>Developer</dt>')) {
        html = html.replace(/<div><dt>Developer<\/dt><dd>[\s\S]*?<\/dd><\/div>/, devRow);
      } else if (html.includes('<dt>Publisher</dt>')) {
        html = html.replace(/<div><dt>Publisher<\/dt><dd>[\s\S]*?<\/dd><\/div>/, devRow);
      } else {
        html = html.replace(/<dl class="play-facts-list">/, `<dl class="play-facts-list">\n                ${devRow}`);
      }

      if (html.includes('<dt>Release</dt>')) {
        html = html.replace(/<div><dt>Release<\/dt><dd>[\s\S]*?<\/dd><\/div>/, relRow);
      } else if (html.includes('<dt>Released</dt>')) {
        html = html.replace(/<div><dt>Released<\/dt><dd>[\s\S]*?<\/dd><\/div>/, relRow);
      }
    }

    fs.writeFileSync(htmlPath, html, 'utf8');
    updatedCount++;
    console.log(`Updated [${slug}] -> ${htmlPath}`);
  }
  console.log(`Total games updated in this batch: ${updatedCount}`);
}

module.exports = { applyBatch };
