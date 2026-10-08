/* =================================================================
 * BLOOKET1 - STEALTH MODE MODAL
 * Load right after script.js. Reuses its storage keys and helpers
 * (applyTabCloak, applyTheme, applyCustomCloak, triggerPanicExit,
 * openAboutBlankCloak, setStoredPanicDest, panic key listener) and
 * replaces only the rendering functions for the new layout.
 * ================================================================= */

/* Real site icons, served by Google's favicon service */
function smFavicon(domain) {
  return 'https://www.google.com/s2/favicons?sz=64&domain=' + domain;
}

function smStore(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

function smEsc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

/* --- Disguise presets: swap the hand-drawn SVGs for real icons ------ */
var SM_CLOAK_ORDER = ['default', 'classroom', 'drive', 'docs', 'gmail', 'canvas', 'desmos', 'khan', 'wikipedia'];

(function upgradePresets() {
  if (typeof TAB_CLOAK_PRESETS !== 'object') return;
  var P = TAB_CLOAK_PRESETS;
  var set = function (id, name, title, domain) {
    P[id] = Object.assign(P[id] || { id: id, badge: '' }, { id: id, name: name, title: title, icon: smFavicon(domain) });
  };
  P.default.name = 'Blooket1';
  set('classroom', 'Classroom', 'Classes', 'classroom.google.com');
  set('drive', 'Drive', 'My Drive - Google Drive', 'drive.google.com');
  set('docs', 'Docs', 'Untitled document - Google Docs', 'docs.google.com');
  set('gmail', 'Gmail', 'Inbox - Gmail', 'mail.google.com');
  set('canvas', 'Canvas', 'Dashboard', 'instructure.com');
  set('desmos', 'Desmos', 'Desmos | Graphing Calculator', 'desmos.com');
  set('khan', 'Khan Academy', 'Dashboard | Khan Academy', 'khanacademy.org');
  set('wikipedia', 'Wikipedia', 'Wikipedia, the free encyclopedia', 'wikipedia.org');
  if (P.bing) P.bing.icon = smFavicon('bing.com');

  // script.js already applied a saved disguise on load with the old icon; refresh it
  var saved = smStore('blooket1_tab_cloak');
  if (saved && P[saved] && saved !== 'default') {
    var link = document.querySelector("link[rel*='icon']");
    if (link) link.href = P[saved].icon;
  }
})();

var SM_DESTINATIONS = [
  { url: 'https://classroom.google.com', name: 'Classroom', domain: 'classroom.google.com' },
  { url: 'https://drive.google.com', name: 'Drive', domain: 'drive.google.com' },
  { url: 'https://docs.google.com', name: 'Docs', domain: 'docs.google.com' },
  { url: 'https://www.desmos.com/calculator', name: 'Desmos', domain: 'desmos.com' },
  { url: 'https://www.google.com', name: 'Google', domain: 'google.com' },
  { url: 'https://www.wikipedia.org', name: 'Wikipedia', domain: 'wikipedia.org' }
];

var SM_THEMES = [
  { id: 'obsidian', name: 'Classic', colors: { base: '#0b0c13', card: '#181926', accent: '#ff7a1a' } },
  { id: 'cyber-neon', name: 'Cyber neon', colors: { base: '#050a14', card: '#0e1a2e', accent: '#00e0f0' } },
  { id: 'midnight-purple', name: 'Midnight purple', colors: { base: '#0b0918', card: '#1a1533', accent: '#8b5cff' } },
  { id: 'emerald', name: 'Emerald', colors: { base: '#07100c', card: '#10241a', accent: '#1ed392' } }
];

function smFavTile(icon, name, small) {
  return '<span class="sm-fav' + (small ? ' sm-fav--sm' : '') + '"><img src="' + smEsc(icon) + '" alt="" data-letter="' +
    smEsc((name || '?').charAt(0)) + '" onerror="smIconFailed(this)" /></span>';
}

function smIconFailed(img) {
  var letter = img.getAttribute('data-letter') || '?';
  img.parentNode.innerHTML = '<b>' + smEsc(letter) + '</b>';
}

function smCurrentCloak() {
  var id = smStore('blooket1_tab_cloak') || 'default';
  var P = typeof TAB_CLOAK_PRESETS === 'object' ? TAB_CLOAK_PRESETS : {};
  if (P[id]) return P[id];
  return {
    id: 'custom',
    name: smStore('blooket1_custom_name') || 'Custom disguise',
    title: smStore('blooket1_custom_title') || document.title,
    icon: smStore('blooket1_custom_icon') || 'images/b-logo.webp'
  };
}

/* Live browser-tab preview */
function smPreviewTab(title, icon) {
  var t = document.getElementById('mockupTabTitle');
  var i = document.getElementById('mockupTabIcon');
  if (t) t.textContent = title;
  if (i && i.getAttribute('src') !== icon) {
    var tab = i.closest('.sm-browser-tab');
    if (tab) {
      tab.classList.add('is-swapping');
      setTimeout(function () { tab.classList.remove('is-swapping'); }, 120);
    }
    i.src = icon;
  }
}

/* ---- Overrides of script.js render functions --------------------- */

function updateStealthHUD(overrideName, overrideTitle, overrideIcon) {
  var c = smCurrentCloak();
  var name = overrideName || c.name;
  var icon = overrideIcon || c.icon;

  smPreviewTab(overrideTitle || c.title, icon);

  var hudName = document.getElementById('hudCloakName');
  if (hudName) hudName.textContent = name;
  var hudIcon = document.getElementById('hudCloakIcon');
  if (hudIcon) hudIcon.src = icon;

  renderPanicDestinations();
}

function renderCloakOptions() {
  var grid = document.getElementById('cloakOptionsGrid');
  if (!grid || typeof TAB_CLOAK_PRESETS !== 'object') return;
  var active = smStore('blooket1_tab_cloak') || 'default';

  grid.innerHTML = SM_CLOAK_ORDER.filter(function (id) { return TAB_CLOAK_PRESETS[id]; }).map(function (id) {
    var p = TAB_CLOAK_PRESETS[id];
    var on = id === active;
    return '<button type="button" class="sm-tile' + (on ? ' is-active' : '') + '" role="radio" aria-checked="' + on + '" data-cloak="' + id + '">' +
      smFavTile(p.icon, p.name) +
      '<span><b>' + smEsc(p.name) + '</b><small>' + smEsc(p.title) + '</small></span>' +
      '<span class="sm-tile-check"><i class="fas fa-check"></i></span></button>';
  }).join('');

  if (!grid.dataset.smBound) {
    grid.dataset.smBound = '1';
    var hover = function (e) {
      var tile = e.target.closest('[data-cloak]');
      if (!tile) return;
      var p = TAB_CLOAK_PRESETS[tile.getAttribute('data-cloak')];
      if (p) smPreviewTab(p.title, p.icon);
    };
    grid.addEventListener('mouseover', hover);
    grid.addEventListener('focusin', hover);
    grid.addEventListener('mouseleave', function () { updateStealthHUD(); });
    grid.addEventListener('focusout', function (e) { if (!grid.contains(e.relatedTarget)) updateStealthHUD(); });
    grid.addEventListener('click', function (e) {
      var tile = e.target.closest('[data-cloak]');
      if (tile && typeof applyTabCloak === 'function') {
        applyTabCloak(tile.getAttribute('data-cloak'));
        var again = grid.querySelector('[data-cloak="' + tile.getAttribute('data-cloak') + '"]');
        if (again) again.focus({ preventScroll: true });
      }
    });
  }
}

function renderPanicDestinations() {
  var grid = document.getElementById('smDestGrid');
  if (!grid) return;
  var current = typeof getStoredPanicDest === 'function' ? getStoredPanicDest() : 'https://classroom.google.com';

  grid.innerHTML = SM_DESTINATIONS.map(function (d) {
    var on = d.url === current;
    return '<button type="button" class="sm-tile' + (on ? ' is-active' : '') + '" role="radio" aria-checked="' + on + '" data-dest="' + smEsc(d.url) + '">' +
      smFavTile(smFavicon(d.domain), d.name) +
      '<span><b>' + smEsc(d.name) + '</b><small>' + smEsc(d.domain) + '</small></span>' +
      '<span class="sm-tile-check"><i class="fas fa-check"></i></span></button>';
  }).join('');

  if (!grid.dataset.smBound) {
    grid.dataset.smBound = '1';
    grid.addEventListener('click', function (e) {
      var tile = e.target.closest('[data-dest]');
      if (!tile || typeof setStoredPanicDest !== 'function') return;
      setStoredPanicDest(tile.getAttribute('data-dest'));
      renderPanicDestinations();
      var again = grid.querySelector('[data-dest="' + tile.getAttribute('data-dest') + '"]');
      if (again) again.focus({ preventScroll: true });
    });
  }
}

function renderThemeOptions() {
  var grid = document.getElementById('themeOptionsGrid');
  if (!grid) return;
  var active = smStore('blooket1_theme') || document.documentElement.getAttribute('data-theme') || 'obsidian';

  grid.innerHTML = SM_THEMES.map(function (t) {
    var on = t.id === active;
    var c = t.colors;
    return '<button type="button" class="sm-theme' + (on ? ' is-active' : '') + '" role="radio" aria-checked="' + on + '" data-theme-id="' + t.id + '">' +
      '<span class="sm-theme-mock" style="--t-base:' + c.base + ';--t-card:' + c.card + ';--t-accent:' + c.accent + '" aria-hidden="true">' +
        '<i class="t-bar"><i></i><i></i><i></i></i>' +
        '<i class="t-rail"><i></i><i></i><i></i><i></i></i>' +
        '<i class="t-cards"><i></i><i></i><i></i><i></i><i></i><i></i></i>' +
      '</span>' +
      '<b>' + smEsc(t.name) + '<i class="fas fa-circle-check"></i></b></button>';
  }).join('');

  if (!grid.dataset.smBound) {
    grid.dataset.smBound = '1';
    grid.addEventListener('click', function (e) {
      var card = e.target.closest('[data-theme-id]');
      if (card && typeof applyTheme === 'function') applyTheme(card.getAttribute('data-theme-id'));
    });
  }
}

function updatePanicKeyUI() {
  var key = typeof getStoredPanicKey === 'function' ? getStoredPanicKey() : '`';
  var listening = typeof isListeningForPanicKey !== 'undefined' && isListeningForPanicKey;
  var label = key === ' ' ? 'Space' : key;

  var display = document.getElementById('currentPanicKeyDisplay');
  if (display) display.textContent = listening ? '?' : label;

  var cap = document.getElementById('smKeycap');
  if (cap) {
    cap.classList.toggle('is-listening', listening);
    cap.classList.toggle('is-long', !listening && label.length > 1);
  }

  var badge = document.getElementById('panicListeningStatus');
  if (badge) badge.style.display = listening ? 'inline-block' : 'none';

  var reset = document.getElementById('resetPanicKeyBtn');
  if (reset) reset.style.display = key === '`' ? 'none' : '';
}

function initStealthTabs() {
  var btns = document.querySelectorAll('.sm-nav-btn');
  btns.forEach(function (btn) {
    btn.onclick = function () { smShowPane(btn.getAttribute('data-sm-tab')); };
  });
}

function smShowPane(id) {
  var aliasMap = {
    cloak: 'sm-pane-disguise',
    disguise: 'sm-pane-disguise',
    panic: 'sm-pane-panic',
    blank: 'sm-pane-blank',
    aboutblank: 'sm-pane-blank',
    theme: 'sm-pane-theme',
    themes: 'sm-pane-theme'
  };
  if (aliasMap[id]) id = aliasMap[id];

  document.querySelectorAll('.sm-nav-btn').forEach(function (b) {
    var on = b.getAttribute('data-sm-tab') === id;
    b.classList.toggle('is-active', on);
    b.setAttribute('aria-selected', on ? 'true' : 'false');
  });
  document.querySelectorAll('.sm-pane').forEach(function (p) {
    var on = p.id === id;
    p.classList.toggle('is-active', on);
    p.hidden = !on;
  });
  var main = document.querySelector('.sm-main');
  if (main) main.scrollTop = 0;
}

/* ---- Open / close: focus, Esc, live custom preview ----------------- */
(function wireStealthModal() {
  var baseOpen = window.openSettingsModal;
  var lastFocus = null;

  window.openSettingsModal = function (paneId) {
    lastFocus = document.activeElement;
    if (typeof baseOpen === 'function') baseOpen();
    renderPanicDestinations();
    if (typeof paneId === 'string') smShowPane(paneId);
    setTimeout(function () {
      var modal = document.getElementById('settingsModal');
      if (modal) modal.focus({ preventScroll: true });
    }, 50);
  };

  var baseClose = window.closeSettingsModal;
  window.closeSettingsModal = function () {
    if (typeof baseClose === 'function') baseClose();
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  };

  document.addEventListener('keydown', function (e) {
    var overlay = document.getElementById('settingsModalOverlay');
    if (!overlay || !overlay.classList.contains('active')) return;
    var listening = typeof isListeningForPanicKey !== 'undefined' && isListeningForPanicKey;
    if (e.key === 'Escape' && !listening) { e.preventDefault(); window.closeSettingsModal(); }
  });

  function wireCustom() {
    var t = document.getElementById('customCloakTitle');
    var i = document.getElementById('customCloakIcon');
    var live = function () {
      smPreviewTab((t && t.value.trim()) || 'My Classes', (i && i.value.trim()) || smCurrentCloak().icon);
    };
    if (t) t.addEventListener('input', live);
    if (i) i.addEventListener('input', live);
    var closeBtn = document.getElementById('closeSettingsBtn');
    if (closeBtn) closeBtn.onclick = window.closeSettingsModal;
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', wireCustom);
  else wireCustom();
})();
