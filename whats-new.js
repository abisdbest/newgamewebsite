/* =================================================================
 * BLOOKET1 - WHAT'S NEW TOUR (v2.6)
 * Drop-in: load whats-new.css in the head and whats-new.js (defer)
 *          before the closing body tag. See integration notes.
 * Opens once per WHATS_NEW_VERSION, ~1s after load.
 * Reopen any time with: window.openWhatsNew()  (or ?whatsnew in URL)
 * ================================================================= */
(function () {
  'use strict';

  var WHATS_NEW_VERSION = 'v2.6-oct2026';
  var STORAGE_KEY = 'blooket1_whats_new_version';
  var OPEN_DELAY = 1000;

  // Optional asset prefix (e.g. "/" on sub-pages, or a CDN). Set via data-base on the script tag.
  var scriptEl = document.currentScript;
  var BASE = (scriptEl && scriptEl.getAttribute('data-base')) || '';

  // The 28 games added on 2026-10-07 (from games.json). Ordered for the wall.
  var NEW_GAMES = [
    ['SUPERHOT', 'images/superhot.png'],
    ['Brotato', 'images/brotato.png'],
    ['Vex 10', 'images/vex 10.png'],
    ['Drive Mad', 'images/drive mad.png'],
    ['Geometry Dash Lite', 'images/geometry dash lite.webp'],
    ['Jetpack Joyride', 'images/jetpack joyride.jpg'],
    ['Polytrack', 'images/polytrack.png'],
    ['Basket Bros', 'images/basket bros.png'],
    ['Golf Orbit', 'images/golf orbit.jpg'],
    ['Crossy Road', 'images/crossy road.webp'],
    ['House of Hazards', 'images/house of hazards.jpg'],
    ['PokéRogue', 'images/pokerogue.png'],
    ['Drift Boss', 'images/drift boss.png'],
    ['Stickman Hook', 'images/stickman hook.png'],
    ['Slow Roads', 'images/slow roads.jpg'],
    ['Death Run 3D', 'images/death run 3d.jpg'],
    ['Helix Jump', 'images/helix jump.png'],
    ['Raft Wars 2', 'images/raft wars 2.webp'],
    ['Supreme Duelist Stickman 2', 'images/supreme duelist stickman 2.jpg'],
    ['Mad Grand Prix', 'images/mad grand prix.jpg'],
    ['MR Racer', 'images/mr racer.jpg'],
    ['Tube Jumpers', 'images/tube jumpers.jpg'],
    ['4x4 Chess', 'images/4x4 chess.png'],
    ['Poor Bunny', 'images/poor bunny.jpg'],
    ['Idle Loops', 'images/idle loops.svg'],
    ['A Dark Room', 'images/a dark room.png'],
    ['The Prestige Tree', 'images/the prestige tree.png'],
    ['Antimatter Dimensions', 'images/antimatter dimensions.png']
  ];

  // A few existing titles for the homepage mock on slide 2
  var MOCK_GAMES = [
    ['Retro Bowl', 'images/retrobowl.webp'], ['Slither.io', 'images/slitherio.webp'],
    ['Duck Life 4', 'images/ducklife4.webp'], ['G-Switch', 'images/g-switch.webp'],
    ['Brawl Stars', 'images/brawlstars.webp'], ['Doodle Jump 2', 'images/doodle jump 2.webp'],
    ['Tunnel Glider', 'images/tunnelglider.webp'], ['Pixel Shooter', 'images/pixelshooter.webp'],
    ['Robot Man', 'images/robotman.webp'], ['Stick Jet Challenge', 'images/stickjetchallenge.webp'],
    ['Fidget Spinner', 'images/fidgetspinner.webp'], ['Solitaire', 'images/solitare.webp']
  ];

  /* ---------------------------------------------------------------- */
  /* Storage                                                           */
  /* ---------------------------------------------------------------- */
  function shouldShowWhatsNew() {
    try { return localStorage.getItem(STORAGE_KEY) !== WHATS_NEW_VERSION; }
    catch (e) { return false; }
  }

  function markWhatsNewSeen() {
    try { localStorage.setItem(STORAGE_KEY, WHATS_NEW_VERSION); } catch (e) {}
  }

  /* ---------------------------------------------------------------- */
  /* Markup helpers                                                    */
  /* ---------------------------------------------------------------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function hue(name) {
    var h = 0;
    for (var i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
    return h;
  }

  function thumb(game) {
    return '<span class="wn-thumb" style="--h:' + hue(game[0]) + '">' +
      '<img src="' + esc(encodeURI(BASE + game[1])) + '" alt="" loading="lazy" decoding="async">' +
      '<b>' + esc(game[0]) + '</b></span>';
  }

  function fact(icon, text, sub) {
    return '<li class="wn-fact"><i class="fas ' + icon + '" aria-hidden="true"></i>' +
      '<span>' + text + (sub ? '<small>' + sub + '</small>' : '') + '</span></li>';
  }

  /* ---------------------------------------------------------------- */
  /* Slides                                                            */
  /* ---------------------------------------------------------------- */
  var TOUR = [
    { icon: 'fa-wand-magic-sparkles', label: 'A brand new design' },
    { icon: 'fa-gamepad', label: NEW_GAMES.length + ' new games' },
    { icon: 'fa-comments', label: 'Community chat, fixed' },
    { icon: 'fa-user-secret', label: 'Panic key and soundboard' }
  ];

  function slideWelcome() {
    var list = TOUR.map(function (t, i) {
      return '<li><button type="button" data-wn-go="' + (i + 1) + '">' +
        '<i class="fas ' + t.icon + '" aria-hidden="true"></i><span>' + esc(t.label) + '</span>' +
        '<i class="fas fa-chevron-right" aria-hidden="true"></i></button></li>';
    }).join('');

    return '' +
      '<div class="wn-hero wn-hero--welcome">' +
        '<div class="wn-wall wn-wall--faint" aria-hidden="true">' + wallRows(false) + '</div>' +
        '<div class="wn-welcome-scrim" aria-hidden="true"></div>' +
        '<div class="wn-welcome-mark">' +
          '<span class="wn-logo-tile wn-in" style="--d:0" aria-hidden="true"><img src="' + esc(encodeURI(BASE + 'images/b-logo.webp')) + '" alt="" data-fallback="b"></span>' +
          '<p class="wn-wordmark wn-in" style="--d:120" aria-hidden="true">blooket<span>1</span></p>' +
          '<span class="wn-version wn-in" style="--d:240">Version 2.6, released October 2026</span>' +
        '</div>' +
      '</div>' +
      '<div class="wn-body">' +
        '<div>' +
          '<h2 class="wn-title" id="wn-title-0">Welcome to the new Blooket1</h2>' +
          '<p class="wn-text">We\'ve rebuilt the whole site and added a lot. Here\'s what changed. It takes about 30 seconds, or jump straight to whatever you\'re curious about.</p>' +
        '</div>' +
        '<ul class="wn-tour-list">' + list + '</ul>' +
      '</div>';
  }

  function slideRedesign() {
    var g = MOCK_GAMES;
    var row = function (start) {
      var out = '';
      for (var i = 0; i < 6; i++) out += thumb(g[(start + i) % g.length]);
      return out;
    };
    return '' +
      '<div class="wn-hero wn-hero--redesign" aria-hidden="true">' +
        '<div class="wn-mock">' +
          '<div class="wn-mock-bar">' +
            '<span class="wn-mock-logo"><i></i><span>blooket<em>1</em></span></span>' +
            '<span class="wn-mock-search"><i class="fas fa-magnifying-glass"></i>Search games and categories</span>' +
            '<span class="wn-mock-pill"></span>' +
          '</div>' +
          '<div class="wn-mock-main">' +
            '<div class="wn-mock-rail"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>' +
            '<div class="wn-mock-content">' +
              '<div class="wn-mock-feature">' + thumb(NEW_GAMES[0]) + thumb(NEW_GAMES[1]) + thumb(NEW_GAMES[3]) + '</div>' +
              '<div><div class="wn-mock-row-title"></div><div class="wn-mock-row">' + row(0) + '</div></div>' +
              '<div><div class="wn-mock-row-title" style="width:90px"></div><div class="wn-mock-row">' + row(6) + '</div></div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="wn-body">' +
        '<div>' +
          '<h2 class="wn-title" id="wn-title-1">Everything has been redesigned</h2>' +
          '<p class="wn-text">New layout, new game cards, new everything. Games are easier to find and quicker to start, on a laptop or a phone.</p>' +
        '</div>' +
        '<ul class="wn-facts">' +
          fact('fa-bars-staggered', 'Every category in the sidebar', 'Action, Driving, Puzzle, 2 Player and more, one click away') +
          fact('fa-magnifying-glass', 'Press <span class="wn-kbd">/</span> to search', 'Results appear as you type') +
          fact('fa-palette', 'Four colour themes', 'Switch in Stealth mode settings') +
        '</ul>' +
      '</div>';
  }

  // 7 rows x 4 games = all 28 on the wall; each row repeated so it can drift seamlessly
  function wallRows(withPops) {
    var rows = '';
    for (var r = 0; r < 7; r++) {
      var set = NEW_GAMES.slice(r * 4, r * 4 + 4);
      var bricks = '';
      for (var rep = 0; rep < 4; rep++) {
        set.forEach(function (game, i) {
          var pop = withPops && rep === 1 && (r * 4 + i) % 5 === 2;
          bricks += '<span class="wn-brick' + (pop ? ' is-pop' : '') + '"' +
            (pop ? ' style="--pd:' + ((r * 0.7) % 5).toFixed(1) + 's"' : '') + '>' + thumb(game) + '</span>';
        });
      }
      rows += '<div class="wn-brick-row" style="--dur:' + (34 + r * 3) + 's">' + bricks + '</div>';
    }
    return rows;
  }

  function slideGames() {
    var rows = wallRows(true);

    var highlight = NEW_GAMES.slice(0, 9).map(function (g) { return '<li>' + esc(g[0]) + '</li>'; }).join('');

    return '' +
      '<div class="wn-hero wn-hero--games">' +
        '<div class="wn-wall" aria-hidden="true">' + rows + '</div>' +
        '<div class="wn-games-scrim" aria-hidden="true"></div>' +
        '<div class="wn-games-count wn-in" style="--d:350"><strong>' + NEW_GAMES.length + '</strong><span>new<br>games</span></div>' +
      '</div>' +
      '<div class="wn-body">' +
        '<div>' +
          '<h2 class="wn-title" id="wn-title-2">Brand new games, ready to play</h2>' +
          '<p class="wn-text">' + NEW_GAMES.length + ' of the most requested games, from fast racers and two-player battles to idle games that keep going while you\'re away.</p>' +
          '<div class="wn-inline-actions"><a class="wn-btn wn-btn--soft" href="' + esc(BASE) + 'category/new/"><i class="fas fa-gamepad" aria-hidden="true"></i>Browse new games</a></div>' +
        '</div>' +
        '<ul class="wn-game-names">' + highlight + '<li class="is-more">and ' + (NEW_GAMES.length - 9) + ' more</li></ul>' +
      '</div>';
  }

  function slideChat() {
    var msg = function (who, color, text, t, opts) {
      opts = opts || {};
      return '<div class="wn-msg' + (opts.me ? ' is-me' : '') + '" style="--t:' + t + 's">' +
        '<span class="wn-avatar" style="background:' + color + '">' + who.charAt(0) + '</span>' +
        '<span class="wn-bubble"><small>' + who + '</small>' + text +
        (opts.react ? '<span class="wn-react" style="--t:' + (t + 0.7) + 's">' + opts.react + '</span>' : '') +
        '</span></div>';
    };
    return '' +
      '<div class="wn-hero wn-hero--chat" aria-hidden="true">' +
        '<div class="wn-chat">' +
          '<div class="wn-chat-head"><i class="fas fa-comments"></i>Community chat<span class="wn-live">Live</span></div>' +
          '<div class="wn-chat-log">' +
            msg('Pixel', '#7cc4ff', 'anyone tried polytrack yet', 0.5) +
            msg('Mango', '#ffc23d', 'yes!! 1:02 on the first track', 1.3, { react: '🔥 3' }) +
            msg('You', 'var(--wn-accent)', 'no way, sending my time', 2.3, { me: true }) +
            '<div class="wn-msg wn-msg--typing" style="--t:3.0s;--t-end:4.4s"><span class="wn-avatar" style="background:#22d48f">N</span><span class="wn-typing"><i></i><i></i><i></i></span></div>' +
            msg('Nova', '#22d48f', 'chat finally works 😭', 4.5, { react: '❤️ 5' }) +
          '</div>' +
        '</div>' +
        '<div class="wn-toast"><span class="wn-toast-icon"><i class="fas fa-bell"></i></span><span><b>Mango replied</b><span>gg, that run was insane</span></span></div>' +
      '</div>' +
      '<div class="wn-body">' +
        '<div>' +
          '<h2 class="wn-title" id="wn-title-3">Chat is fixed, and it\'s live</h2>' +
          '<p class="wn-text">Community chat has been rebuilt from scratch. Messages send instantly and appear for everyone in real time. No more refreshing.</p>' +
          '<div class="wn-inline-actions"><a class="wn-btn wn-btn--soft" href="' + esc(BASE) + 'chat/"><i class="fas fa-comments" aria-hidden="true"></i>Open chat</a></div>' +
        '</div>' +
        '<ul class="wn-facts">' +
          fact('fa-face-smile', 'Pick a nickname and avatar', 'Everyone sees who\'s talking') +
          fact('fa-heart', 'React with one tap', 'Quick reactions on any message') +
          fact('fa-bell', 'Get notified', 'A chime and a desktop alert when someone replies') +
        '</ul>' +
      '</div>';
  }

  function slideTools() {
    var pads = [
      ['Bruh', '#ff4d6a', 0], ['Boom', '#ffc23d', 0.35], ['Airhorn', '#22d48f', 1.05],
      ['Oof', '#7cc4ff', 0.7], ['Drum', '#a27dff', 1.4], ['Wow', '#ff7a1a', 1.75],
      ['Laugh', '#22d48f', 2.1], ['Ding', '#ff4d6a', 0.35], ['Clap', '#ffc23d', 2.45]
    ].map(function (p) {
      return '<span class="wn-pad" style="--c:' + p[1] + ';--pd:' + p[2] + 's"><span>' + p[0] + '</span></span>';
    }).join('');
    var eq = '';
    for (var i = 0; i < 9; i++) eq += '<i style="--i:' + ((i * 7) % 9) + '"></i>';

    var tiles = '';
    [20, 200, 280, 120, 330, 60].forEach(function (h) { tiles += '<i style="--h:' + h + '"></i>'; });
    return '' +
      '<div class="wn-hero wn-hero--tools" aria-hidden="true">' +
        '<div class="wn-tool-pane wn-tool-pane--panic">' +
          '<span class="wn-tool-caption"><i class="fas fa-user-secret"></i>Panic key</span>' +
          '<div class="wn-panic">' +
            '<div class="wn-keycap"><span></span></div>' +
            '<i class="fas fa-arrow-right wn-panic-arrow"></i>' +
            '<div class="wn-browser">' +
              '<div class="wn-tabbar">' +
                '<span class="wn-tabbar-tab wn-tab-a"><span class="wn-fav">b</span>Blooket1</span>' +
                '<span class="wn-tabbar-tab wn-tab-b"><span class="wn-fav"><i class="fas fa-chalkboard-user"></i></span>Classes</span>' +
              '</div>' +
              '<div class="wn-pagewrap">' +
                '<div class="wn-page wn-page--game">' + tiles + '</div>' +
                '<div class="wn-page wn-page--class"><b></b><i></i><i></i><i></i></div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="wn-tool-pane wn-tool-pane--sound">' +
          '<span class="wn-tool-caption"><i class="fas fa-volume-high"></i>Soundboard</span>' +
          '<div class="wn-sound"><div class="wn-pads">' + pads + '</div><div class="wn-eq">' + eq + '</div></div>' +
        '</div>' +
      '</div>' +
      '<div class="wn-body wn-body--tools">' +
        '<h2 class="wn-title" id="wn-title-4">Two new tools you\'ll use every day</h2>' +
        '<div class="wn-tool-col">' +
          '<h3><i class="fas fa-user-secret" aria-hidden="true"></i>Panic key</h3>' +
          '<p>Press <span class="wn-kbd">`</span> and this tab instantly turns into Google Classroom, or any site you choose. It replaces itself in the tab, so pressing Back won\'t bring Blooket1 up again.</p>' +
          '<div class="wn-inline-actions"><button type="button" class="wn-btn wn-btn--soft" data-wn-action="settings"><i class="fas fa-keyboard" aria-hidden="true"></i>Change panic key</button></div>' +
        '</div>' +
        '<div class="wn-tool-col">' +
          '<h3><i class="fas fa-volume-high" aria-hidden="true"></i>Soundboard</h3>' +
          '<p>Over 28,000 meme sounds and effects, with pitch controls and hotkeys so you can fire them off instantly.</p>' +
          '<div class="wn-inline-actions"><a class="wn-btn wn-btn--soft" href="' + esc(BASE) + 'soundboard/"><i class="fas fa-volume-high" aria-hidden="true"></i>Open soundboard</a></div>' +
        '</div>' +
      '</div>';
  }

  var SLIDES = [slideWelcome, slideRedesign, slideGames, slideChat, slideTools];
  var LAST = SLIDES.length - 1;

  /* ---------------------------------------------------------------- */
  /* Build                                                             */
  /* ---------------------------------------------------------------- */
  var overlay, track, slides, segs, prevBtn, nextBtn, primaryBtn, secondaryBtn, stepLabel, liveRegion;
  var index = 0;
  var lastFocus = null;
  var built = false;

  function build() {
    if (built) return;
    built = true;

    var segHtml = '';
    for (var i = 0; i < SLIDES.length; i++) {
      segHtml += '<button type="button" class="wn-seg" data-wn-go="' + i + '" aria-label="Go to slide ' + (i + 1) + ' of ' + SLIDES.length + '"></button>';
    }

    overlay = document.createElement('div');
    overlay.className = 'wn-overlay';
    overlay.id = 'whatsNewModalOverlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', "What's new on Blooket1");
    overlay.innerHTML = '' +
      '<div class="wn-stage">' +
        '<button type="button" class="wn-arrow wn-arrow--prev" aria-label="Previous"><i class="fas fa-chevron-left" aria-hidden="true"></i></button>' +
        '<div class="wn-modal">' +
          '<button type="button" class="wn-close" aria-label="Close"><i class="fas fa-xmark" aria-hidden="true"></i></button>' +
          '<div class="wn-viewport"><div class="wn-track">' +
            SLIDES.map(function (fn, i) {
              return '<section class="wn-slide" role="group" aria-roledescription="slide" aria-labelledby="wn-title-' + i + '">' + fn() + '</section>';
            }).join('') +
          '</div></div>' +
          '<div class="wn-footer">' +
            '<div class="wn-progress">' + segHtml + '<span class="wn-step-label" aria-hidden="true"></span></div>' +
            '<div class="wn-actions">' +
              '<button type="button" class="wn-btn wn-btn--ghost" data-wn-role="secondary"></button>' +
              '<button type="button" class="wn-btn wn-btn--primary" data-wn-role="primary"></button>' +
            '</div>' +
          '</div>' +
          '<p class="wn-sr" aria-live="polite" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)"></p>' +
        '</div>' +
        '<button type="button" class="wn-arrow wn-arrow--next" aria-label="Next"><i class="fas fa-chevron-right" aria-hidden="true"></i></button>' +
      '</div>';

    document.body.appendChild(overlay);

    track = overlay.querySelector('.wn-track');
    slides = overlay.querySelectorAll('.wn-slide');
    segs = overlay.querySelectorAll('.wn-seg');
    prevBtn = overlay.querySelector('.wn-arrow--prev');
    nextBtn = overlay.querySelector('.wn-arrow--next');
    primaryBtn = overlay.querySelector('[data-wn-role="primary"]');
    secondaryBtn = overlay.querySelector('[data-wn-role="secondary"]');
    stepLabel = overlay.querySelector('.wn-step-label');
    liveRegion = overlay.querySelector('.wn-sr');

    // Image fade-in + graceful fallback (name tile stays visible if an image is missing)
    overlay.querySelectorAll('img').forEach(function (img) {
      var done = function () { img.classList.add('is-loaded'); };
      if (img.complete && img.naturalWidth) done();
      img.addEventListener('load', done);
      img.addEventListener('error', function () {
        var fb = img.getAttribute('data-fallback');
        if (fb) img.parentNode.innerHTML = '<b>' + esc(fb) + '</b>';
        else img.remove();
      });
    });

    // Clicks
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) return close();
      var go = e.target.closest('[data-wn-go]');
      if (go) return goTo(parseInt(go.getAttribute('data-wn-go'), 10));
      var act = e.target.closest('[data-wn-action]');
      if (act && act.getAttribute('data-wn-action') === 'settings') {
        close();
        if (typeof window.openSettingsModal === 'function') setTimeout(function () { window.openSettingsModal('sm-pane-panic'); }, 250);
        return;
      }
      if (e.target.closest('.wn-close')) return close();
      if (e.target.closest('.wn-arrow--prev')) return goTo(index - 1);
      if (e.target.closest('.wn-arrow--next')) return goTo(index + 1);
      if (e.target.closest('a[href]')) markWhatsNewSeen();
    });

    primaryBtn.addEventListener('click', function () {
      if (index === LAST) close(); else goTo(index + 1);
    });

    secondaryBtn.addEventListener('click', function () {
      if (index === 0) close();
      else { markWhatsNewSeen(); window.location.href = BASE + 'updates/'; }
    });

    // Swipe
    var startX = null, startY = 0;
    var vp = overlay.querySelector('.wn-viewport');
    vp.addEventListener('pointerdown', function (e) {
      if (e.pointerType === 'mouse') return;
      startX = e.clientX; startY = e.clientY;
    });
    vp.addEventListener('pointerup', function (e) {
      if (startX === null) return;
      var dx = e.clientX - startX, dy = e.clientY - startY;
      startX = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) goTo(index + (dx < 0 ? 1 : -1));
    });
    vp.addEventListener('pointercancel', function () { startX = null; });
  }

  /* ---------------------------------------------------------------- */
  /* Navigation                                                        */
  /* ---------------------------------------------------------------- */
  function goTo(i) {
    i = Math.max(0, Math.min(LAST, i));
    var changed = i !== index;
    index = i;

    track.style.transform = 'translateX(' + (-100 * index) + '%)';

    slides.forEach(function (s, n) {
      var active = n === index;
      s.toggleAttribute('inert', !active);
      s.setAttribute('aria-hidden', active ? 'false' : 'true');
      if (active) {
        // restart the slide's entrance animation each visit
        s.classList.remove('is-active');
        void s.offsetWidth;
        s.classList.add('is-active');
        s.scrollTop = 0;
      } else {
        s.classList.remove('is-active');
      }
    });

    segs.forEach(function (seg, n) {
      seg.classList.toggle('is-done', n < index);
      seg.classList.toggle('is-current', n === index);
      if (n === index) seg.setAttribute('aria-current', 'step'); else seg.removeAttribute('aria-current');
    });

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === LAST;

    primaryBtn.innerHTML = index === LAST
      ? 'Start playing'
      : 'Next <i class="fas fa-arrow-right" aria-hidden="true"></i>';
    secondaryBtn.textContent = index === 0 ? 'Skip' : 'Full changelog';
    stepLabel.textContent = (index + 1) + ' of ' + SLIDES.length;

    if (changed) {
      var t = slides[index].querySelector('.wn-title');
      liveRegion.textContent = 'Slide ' + (index + 1) + ' of ' + SLIDES.length + ': ' + (t ? t.textContent : '');
    }
  }

  function onKey(e) {
    if (!overlay || !overlay.classList.contains('is-open')) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); return; }
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(index - 1); return; }
    if (e.key === 'Tab') trapFocus(e);
  }

  function trapFocus(e) {
    var f = Array.prototype.filter.call(
      overlay.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])'),
      function (el) { return !el.disabled && !el.closest('[inert]') && el.offsetParent !== null; }
    );
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  /* ---------------------------------------------------------------- */
  /* Open / close                                                      */
  /* ---------------------------------------------------------------- */
  function open(startAt) {
    build();
    if (overlay.classList.contains('is-open')) return;
    lastFocus = document.activeElement;
    index = -1;
    goTo(startAt || 0);
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey, true);
    setTimeout(function () { primaryBtn.focus({ preventScroll: true }); }, 60);
  }

  function close() {
    if (!overlay || !overlay.classList.contains('is-open')) return;
    markWhatsNewSeen();
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', onKey, true);
    slides.forEach(function (s) { s.classList.remove('is-active'); });
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  window.openWhatsNew = open;
  window.closeWhatsNew = close;

  /* ---------------------------------------------------------------- */
  /* Auto-open                                                         */
  /* ---------------------------------------------------------------- */
  function autoOpen() {
    var forced = /[?&]whatsnew\b/.test(window.location.search);
    if (!forced && !shouldShowWhatsNew()) return;
    setTimeout(function () {
      // don't stack on top of another open modal
      if (!forced && document.querySelector('.settings-modal-overlay.active, .popup-overlay.active')) return;
      open(0);
    }, OPEN_DELAY);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', autoOpen);
  else autoOpen();
})();
