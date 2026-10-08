const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function getModalHTML(prefix) {
  return `    <!-- Stealth mode (replaces the old #settingsModalOverlay block) -->
    <div id="settingsModalOverlay" class="sm-overlay">
      <div id="settingsModal" class="sm-modal" tabindex="-1" role="dialog" aria-modal="true" aria-labelledby="settingsModalTitle">

        <!-- Sidebar -->
        <aside class="sm-side">
          <div class="sm-brand">
            <span class="sm-brand-icon"><i class="fas fa-user-secret" aria-hidden="true"></i></span>
            <div>
              <h2 id="settingsModalTitle">Stealth mode</h2>
              <p>Saved on this device</p>
            </div>
          </div>

          <nav class="sm-nav" role="tablist" aria-label="Stealth settings">
            <button type="button" class="sm-nav-btn is-active" role="tab" aria-selected="true" aria-controls="sm-pane-disguise" data-sm-tab="sm-pane-disguise">
              <i class="fas fa-window-maximize" aria-hidden="true"></i>
              <span><b>Tab disguise</b><small>Change the tab's name and icon</small></span>
            </button>
            <button type="button" class="sm-nav-btn" role="tab" aria-selected="false" aria-controls="sm-pane-panic" data-sm-tab="sm-pane-panic">
              <i class="fas fa-keyboard" aria-hidden="true"></i>
              <span><b>Panic key</b><small>One key to leave instantly</small></span>
            </button>
            <button type="button" class="sm-nav-btn" role="tab" aria-selected="false" aria-controls="sm-pane-blank" data-sm-tab="sm-pane-blank">
              <i class="fas fa-file" aria-hidden="true"></i>
              <span><b>Blank tab</b><small>Open in an about:blank tab</small></span>
            </button>
            <button type="button" class="sm-nav-btn" role="tab" aria-selected="false" aria-controls="sm-pane-theme" data-sm-tab="sm-pane-theme">
              <i class="fas fa-palette" aria-hidden="true"></i>
              <span><b>Theme</b><small>Colours for the whole site</small></span>
            </button>
          </nav>

          <div class="sm-side-foot">
            <div class="sm-status">
              <span class="sm-fav sm-fav--sm"><img id="hudCloakIcon" src="${prefix}images/b-logo.webp" alt="" /></span>
              <span><small>This tab looks like</small><b id="hudCloakName">Blooket1</b></span>
            </div>
            <button type="button" class="sm-leave-btn" onclick="triggerPanicExit()">
              <i class="fas fa-person-running" aria-hidden="true"></i>Leave now
            </button>
          </div>
        </aside>

        <!-- Main -->
        <div class="sm-main">
          <button id="closeSettingsBtn" class="sm-close" type="button" aria-label="Close stealth mode">
            <i class="fas fa-xmark" aria-hidden="true"></i>
          </button>

          <!-- Tab disguise -->
          <section class="sm-pane is-active" id="sm-pane-disguise" role="tabpanel">
            <header class="sm-pane-head">
              <h3>Tab disguise</h3>
              <p>Make this tab look like another site. Hover to preview, click to use.</p>
            </header>

            <div class="sm-browser" aria-hidden="true">
              <div class="sm-browser-tabs">
                <span class="sm-browser-tab is-current">
                  <img id="mockupTabIcon" src="${prefix}images/b-logo.webp" alt="" />
                  <span id="mockupTabTitle">Blooket1 Unblocked Games</span>
                  <i class="fas fa-xmark"></i>
                </span>
                <span class="sm-browser-tab"><i class="fas fa-globe"></i><span>New tab</span></span>
                <span class="sm-browser-plus"><i class="fas fa-plus"></i></span>
              </div>
              <div class="sm-browser-bar">
                <i class="fas fa-arrow-left"></i><i class="fas fa-arrow-right"></i><i class="fas fa-rotate-right"></i>
                <span class="sm-browser-url"><i class="fas fa-lock"></i>blooket1.com</span>
              </div>
            </div>

            <div class="sm-cloak-grid" id="cloakOptionsGrid" role="radiogroup" aria-label="Disguises"></div>

            <details class="sm-custom">
              <summary><i class="fas fa-pen" aria-hidden="true"></i>Use your own name and icon<i class="fas fa-chevron-down sm-custom-chev" aria-hidden="true"></i></summary>
              <div class="sm-custom-body">
                <label class="sm-field">
                  <span>Tab name</span>
                  <input type="text" id="customCloakTitle" class="sm-input" placeholder="History essay - Google Docs" maxlength="80" />
                </label>
                <label class="sm-field">
                  <span>Icon image link</span>
                  <input type="url" id="customCloakIcon" class="sm-input" placeholder="https://example.com/favicon.ico" />
                </label>
                <button type="button" class="sm-btn sm-btn--primary" onclick="applyCustomCloak()">Use this disguise</button>
              </div>
            </details>
          </section>

          <!-- Panic key -->
          <section class="sm-pane" id="sm-pane-panic" role="tabpanel" hidden>
            <header class="sm-pane-head">
              <h3>Panic key</h3>
              <p>Press it anywhere on Blooket1 and this tab is instantly replaced with the site you pick below. Pressing Back won't bring it back.</p>
            </header>

            <div class="sm-panic">
              <div class="sm-keycap" id="smKeycap" aria-hidden="true"><span class="sm-keycap-face" id="currentPanicKeyDisplay">\`</span></div>
              <div class="sm-panic-info">
                <p class="sm-panic-state"><span id="smPanicStateText">Your panic key</span><span id="panicListeningStatus" class="sm-listening" style="display:none">Press any key now. Esc cancels.</span></p>
                <div class="sm-btn-row">
                  <button id="changePanicKeyBtn" type="button" class="sm-btn sm-btn--primary"><i class="fas fa-keyboard" aria-hidden="true"></i>Change key</button>
                  <button id="testPanicKeyBtn" type="button" class="sm-btn"><i class="fas fa-play" aria-hidden="true"></i>Try it</button>
                  <button id="resetPanicKeyBtn" type="button" class="sm-btn sm-btn--ghost">Reset to \`</button>
                </div>
              </div>
            </div>

            <h4 class="sm-sub">Go to</h4>
            <div class="sm-dest-grid" id="smDestGrid" role="radiogroup" aria-label="Panic destination"></div>
          </section>

          <!-- Blank tab -->
          <section class="sm-pane" id="sm-pane-blank" role="tabpanel" hidden>
            <header class="sm-pane-head">
              <h3>Blank tab</h3>
              <p>Opens Blooket1 inside a new tab whose address reads about:blank, and sends this tab to your panic destination.</p>
            </header>

            <div class="sm-blank-demo" aria-hidden="true">
              <div class="sm-browser-bar sm-browser-bar--solo">
                <i class="fas fa-arrow-left"></i><i class="fas fa-arrow-right"></i><i class="fas fa-rotate-right"></i>
                <span class="sm-browser-url"><i class="fas fa-circle-info"></i>about:blank</span>
              </div>
              <div class="sm-blank-page">
                <span></span><span></span><span></span><span></span><span></span><span></span>
              </div>
            </div>

            <div class="sm-btn-row">
              <button type="button" class="sm-btn sm-btn--primary sm-btn--lg" onclick="openAboutBlankCloak()"><i class="fas fa-up-right-from-square" aria-hidden="true"></i>Open blank tab</button>
            </div>
            <p class="sm-note"><i class="fas fa-circle-info" aria-hidden="true"></i>If nothing opens, allow pop-ups for Blooket1 in your browser and try again.</p>
          </section>

          <!-- Theme -->
          <section class="sm-pane" id="sm-pane-theme" role="tabpanel" hidden>
            <header class="sm-pane-head">
              <h3>Theme</h3>
              <p>Changes the colours across the whole site. Your games and favourites stay the same.</p>
            </header>
            <div class="sm-theme-grid" id="themeOptionsGrid" role="radiogroup" aria-label="Themes"></div>
          </section>
        </div>
      </div>
    </div>`;
}

function processFile(filePath) {
  const rel = path.relative(ROOT, filePath).replace(/\\/g, '/');
  if (rel === 'index.html') return; // already done

  const parts = rel.split('/');
  const prefix = parts.length > 2 ? '../../' : '../';

  let html = fs.readFileSync(filePath, 'utf8');

  // Check if file uses openSettingsModal or settingsModal
  if (!html.includes('openSettingsModal') && !html.includes('settingsModalOverlay')) {
    return;
  }

  let modified = false;

  // 1. Add stealth.css if not present
  if (!html.includes('stealth.css')) {
    // Insert after styles.css
    if (html.includes('styles.css')) {
      html = html.replace(/(<link[^>]+styles\.css[^>]*>)/i, `$1\n    <link rel="stylesheet" href="${prefix}stealth.css" />`);
      modified = true;
    } else if (html.includes('</head>')) {
      html = html.replace('</head>', `    <link rel="stylesheet" href="${prefix}stealth.css" />\n  </head>`);
      modified = true;
    }
  }

  // 2. Replace or insert modal overlay
  // Pattern matching old modal: from <div ...id="settingsModalOverlay"... to the closing </div> of that overlay
  const modalStartRegex = /<!--[^\n]*settingsModalOverlay[^\n]*-->\s*<div[^>]+id="settingsModalOverlay"[^>]*>|<div[^>]+id="settingsModalOverlay"[^>]*>/i;
  const match = html.match(modalStartRegex);

  if (match) {
    const startIndex = match.index;
    // Find matching </div> by tag balancing
    let depth = 0;
    let endIndex = -1;
    const divRegex = /<\/?div\b[^>]*>/gi;
    divRegex.lastIndex = startIndex;
    let tagMatch;
    while ((tagMatch = divRegex.exec(html)) !== null) {
      if (tagMatch[0].startsWith('</')) {
        depth--;
        if (depth === 0) {
          endIndex = divRegex.lastIndex;
          break;
        }
      } else if (!tagMatch[0].endsWith('/>')) {
        depth++;
      }
    }

    if (endIndex !== -1) {
      html = html.slice(0, startIndex) + getModalHTML(prefix) + html.slice(endIndex);
      modified = true;
    }
  } else {
    // If not present, insert right before script.js
    if (html.includes('script.js')) {
      const scriptIndex = html.indexOf('<script src=');
      if (scriptIndex !== -1) {
        html = html.slice(0, scriptIndex) + getModalHTML(prefix) + '\n\n    ' + html.slice(scriptIndex);
        modified = true;
      }
    }
  }

  // 3. Add stealth.js if not present
  if (!html.includes('stealth.js')) {
    // Insert right after script.js
    const scriptRegex = /(<script[^>]+script\.js[^>]*><\/script>)/i;
    if (scriptRegex.test(html)) {
      html = html.replace(scriptRegex, `$1\n    <script src="${prefix}stealth.js"></script>`);
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`Updated: ${rel}`);
  }
}

// Find all html files
function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (f === 'node_modules' || f === 'scratch' || f === '.git') continue;
    const full = path.join(dir, f);
    if (full === path.join(ROOT, 'tools')) continue;
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full);
    } else if (f.endsWith('.html')) {
      processFile(full);
    }
  }
}

walk(ROOT);
console.log('Finished updating stealth modals across all pages.');
