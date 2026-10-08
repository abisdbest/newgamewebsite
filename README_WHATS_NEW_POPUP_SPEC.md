# Blooket1 - "What's New" Welcome Popup Developer Specification

Welcome! This developer handoff package contains everything you need to build and style the new **"What's New / Welcome to Blooket1 v2.6"** popup modal for [Blooket1.com](https://blooket1.com).

This bundle contains **10 complete files** (the full production site HTML and CSS, plus a ready-to-run interactive demo):

---

## 📦 Package Contents (Exactly 10 Files)

| File | Purpose / Role |
| :--- | :--- |
| `whats-new-demo.html` | **Interactive Live Demo:** A standalone, fully-styled HTML page demonstrating the working popup with all styles, animations, and JS logic. Double-click to open in any browser! |
| `README_WHATS_NEW_POPUP_SPEC.md` | **(This file)** Complete design spec, copy, trigger logic, full CSS, and integration instructions. |
| `index.html` | **Full Production Homepage:** 100% complete HTML of Blooket1 showing the full layout, header, sidebar, game grid, and existing modals. |
| `styles.css` | **Full Master Stylesheet:** 1,460 lines of CSS defining the entire design system (CSS variables, typography, colors, cards, shadows, buttons, animations, media queries). |
| `script.js` | **Full Site JavaScript:** Complete main script showing existing modal open/close helpers, settings, search, and localStorage patterns. |
| `games.json` | **Full Game Database:** JSON catalog showing metadata, categories, tags, and game descriptions. |
| `updates.html` | **Full Changelog Page:** The complete `/updates/` HTML page containing all release notes, badges, and copy. |
| `carousel.css` | **Full Carousel Styles:** Slider and carousel component styles. |
| `play.css` | **Full Player Styles:** Player page styling with theater mode and HUD overlay patterns. |
| `play.js` | **Full Player Script:** Player scripts showing Cloudflare D1 integration, tracking, and toast alerts. |

---

## 🎨 Complete Design System & CSS Variables

The entire site design is powered by modern CSS custom properties in `styles.css`:

```css
:root {
  /* Colors */
  --bg-primary: #0b0c13;          /* Dark navy/black background */
  --card-bg: #161822;             /* Surface background for cards/modals */
  --card-bg-hover: #1e2130;       /* Hover surface */
  --accent-color: #f75532;        /* Brand signature coral/orange */
  --accent-hover: #ff6847;        /* Hover accent */
  --accent-soft: rgba(247, 85, 50, 0.15); /* Soft glowing tint */
  --text-primary: #ffffff;        /* Pure white headings/titles */
  --text-secondary: #94a3b8;      /* Muted slate text for descriptions */
  --text-muted: #64748b;          /* Subdued timestamps and hints */
  --border-subtle: rgba(255, 255, 255, 0.08); /* Modern thin borders */
  
  /* Radii & Shadows */
  --radius-lg: 18px;
  --radius-xl: 24px;
  --modal-shadow: 0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px rgba(247, 85, 50, 0.15);
  
  /* Typography & Icons */
  font-family: 'Nunito', sans-serif; /* Weights: 600, 700, 800, 900 */
  /* Icons: FontAwesome 6.5.1 (e.g., <i class="fas fa-sparkles"></i>, <i class="fas fa-ghost"></i>) */
}
```

---

## 📝 Feature Highlights & Copy to Include

Here are the key features shipped in this release:

### 1. 🚀 30+ Brand New Games Added
- **Tagline:** Instant unblocked gaming with zero lag.
- **Details:** Blockbuster titles added: *Golf Orbit, Basket Bros, Vex 10, SUPERHOT, Drive Mad, Drift Boss, 4x4 Chess, Traffic Racer, Brotato, Fidget Spinner,* and *Idle Loops*.
- **Icon:** `<i class="fas fa-gamepad"></i>`

### 2. 🥷 Upgraded Stealth Mode Hub
- **Tagline:** Hide your gaming instantly in class or at work.
- **Details:** 1-click tab cloaking (Google Drive, Docs, Classroom, Canvas), customizable Instant Panic Key (`]` or `Esc`), and `about:blank` popup cloaking to bypass strict filters and history tracking.
- **Icon:** `<i class="fas fa-user-secret"></i>`

### 3. 💬 Real-Time Community Chat
- **Tagline:** Chat with fellow gamers across the world live.
- **Details:** Powered by a brand new Cloudflare D1 high-performance backend. Features avatar nicknames, quick reaction chips, sound chimes, and background desktop push notifications.
- **Icon:** `<i class="fas fa-comments"></i>`

### 4. 🌟 Trending, New & Category Hubs
- **Tagline:** Find your next favorite game in seconds.
- **Details:** Dedicated landing pages for Trending/Popular (with live D1 play counts), New Releases, Bookmarked Favorites, Action, Driving, and Puzzle games.
- **Icon:** `<i class="fas fa-wand-magic-sparkles"></i>`

### 5. ⚡ WebGL Engine Decompression & Blocker Fixes
- **Tagline:** Up to 5x faster load times.
- **Details:** Raw uncompressed WebGL binaries resolve decompression errors, while intrusive third-party adblock blocker overlays have been neutralized.
- **Icon:** `<i class="fas fa-bolt"></i>`

---

## 🛠️ Complete Ready-to-Use HTML & CSS Blueprint

You can drop the following markup into `index.html` and the CSS into `styles.css` (or adapt it as you see fit):

### 1. Full HTML Markup

```html
<!-- What's New Modal Overlay -->
<div id="whatsNewModalOverlay" class="whatsnew-overlay" role="dialog" aria-modal="true" aria-labelledby="whatsNewTitle" style="display: none;">
  <div class="whatsnew-modal">
    <!-- Close Button -->
    <button class="whatsnew-close-btn" id="closeWhatsNewBtn" aria-label="Close modal">
      <i class="fas fa-xmark"></i>
    </button>

    <!-- Header / Hero Banner -->
    <div class="whatsnew-header">
      <div class="whatsnew-pill">
        <i class="fas fa-sparkles"></i> Major Platform Update
      </div>
      <h2 id="whatsNewTitle" class="whatsnew-title">Welcome to the New Blooket1</h2>
      <p class="whatsnew-subtitle">We've completely overhauled the platform with faster speeds, stealth tools, and 30+ new games.</p>
    </div>

    <!-- Feature Highlights Grid -->
    <div class="whatsnew-features-grid">
      <div class="whatsnew-feature-card">
        <div class="feature-icon-wrap"><i class="fas fa-gamepad"></i></div>
        <div class="feature-info">
          <h3>30+ New Games Added</h3>
          <p>Blockbuster titles like Golf Orbit, Basket Bros, Vex 10, SUPERHOT & Drive Mad.</p>
        </div>
      </div>

      <div class="whatsnew-feature-card">
        <div class="feature-icon-wrap"><i class="fas fa-user-secret"></i></div>
        <div class="feature-info">
          <h3>Stealth Mode &amp; Cloak HUD</h3>
          <p>Tab cloaking (Drive, Docs, Canvas), panic key (]), and about:blank anti-filter launcher.</p>
        </div>
      </div>

      <div class="whatsnew-feature-card">
        <div class="feature-icon-wrap"><i class="fas fa-comments"></i></div>
        <div class="feature-info">
          <h3>Live Multiplayer Chat</h3>
          <p>Global community chat backed by Cloudflare D1 with instant alerts and avatars.</p>
        </div>
      </div>

      <div class="whatsnew-feature-card">
        <div class="feature-icon-wrap"><i class="fas fa-bolt"></i></div>
        <div class="feature-info">
          <h3>5x Faster Game Loading</h3>
          <p>WebGL decompression fixes and adblock detection neutralizers for smooth play.</p>
        </div>
      </div>
    </div>

    <!-- Footer Actions -->
    <div class="whatsnew-footer">
      <label class="whatsnew-checkbox-label">
        <input type="checkbox" id="dontShowAgainCheck" checked />
        <span>Don't show again</span>
      </label>
      <div class="whatsnew-btn-group">
        <a href="updates/" class="whatsnew-link-btn">
          View Changelog <i class="fas fa-arrow-right"></i>
        </a>
        <button class="whatsnew-primary-btn" id="whatsNewPlayBtn">
          Start Playing! 🎮
        </button>
      </div>
    </div>
  </div>
</div>
```

---

### 2. Full CSS Stylesheet

```css
/* ========================================================
   WHAT'S NEW / WELCOME MODAL STYLES
   ======================================================== */
.whatsnew-overlay {
  position: fixed;
  inset: 0;
  background: rgba(5, 6, 10, 0.82);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  padding: 20px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.28s ease;
  font-family: 'Nunito', sans-serif;
}

.whatsnew-overlay.active {
  opacity: 1;
  pointer-events: auto;
}

.whatsnew-modal {
  position: relative;
  width: 100%;
  max-width: 680px;
  max-height: 90vh;
  overflow-y: auto;
  background: linear-gradient(150deg, #161822 0%, #11131c 100%);
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 34px 34px 26px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85), 0 0 35px rgba(247, 85, 50, 0.18);
  transform: scale(0.93) translateY(14px);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.whatsnew-overlay.active .whatsnew-modal {
  transform: scale(1) translateY(0);
}

/* Close Button */
.whatsnew-close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #94a3b8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.18s ease;
}

.whatsnew-close-btn:hover {
  background: rgba(247, 85, 50, 0.2);
  border-color: rgba(247, 85, 50, 0.5);
  color: #ffffff;
  transform: rotate(90deg);
}

/* Header & Pill */
.whatsnew-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(247, 85, 50, 0.15);
  color: var(--accent-color, #f75532);
  border: 1px solid rgba(247, 85, 50, 0.3);
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 11.5px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
}

.whatsnew-title {
  font-size: 1.75rem;
  font-weight: 900;
  color: #ffffff;
  margin: 0 0 6px;
  letter-spacing: -0.02em;
}

.whatsnew-subtitle {
  font-size: 14.5px;
  color: #94a3b8;
  margin: 0 0 24px;
  line-height: 1.5;
  max-width: 580px;
}

/* Features 2x2 Grid */
.whatsnew-features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-bottom: 26px;
}

.whatsnew-feature-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  gap: 14px;
  align-items: flex-start;
  transition: all 0.2s ease;
}

.whatsnew-feature-card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(247, 85, 50, 0.35);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.feature-icon-wrap {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(247, 85, 50, 0.12);
  color: #f75532;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  flex-shrink: 0;
}

.feature-info h3 {
  font-size: 14px;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 4px;
}

.feature-info p {
  font-size: 12px;
  color: #94a3b8;
  margin: 0;
  line-height: 1.45;
}

/* Footer Actions */
.whatsnew-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 14px;
  padding-top: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.whatsnew-checkbox-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #64748b;
  cursor: pointer;
  user-select: none;
  font-weight: 700;
}

.whatsnew-checkbox-label input {
  accent-color: #f75532;
  transform: scale(1.1);
  cursor: pointer;
}

.whatsnew-btn-group {
  display: flex;
  gap: 10px;
  align-items: center;
}

.whatsnew-link-btn {
  background: rgba(255, 255, 255, 0.05);
  color: #e2e8f0;
  font-weight: 700;
  font-size: 13px;
  padding: 10px 16px;
  border-radius: 12px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: all 0.18s ease;
}

.whatsnew-link-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.whatsnew-primary-btn {
  background: var(--accent-color, #f75532);
  color: #ffffff;
  font-weight: 800;
  font-size: 13.5px;
  padding: 10px 22px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(247, 85, 50, 0.4);
  transition: all 0.18s ease;
}

.whatsnew-primary-btn:hover {
  background: var(--accent-hover, #ff6847);
  box-shadow: 0 6px 20px rgba(247, 85, 50, 0.55);
  transform: translateY(-1px);
}

/* Responsive */
@media (max-width: 640px) {
  .whatsnew-modal {
    padding: 24px 20px 20px;
    border-radius: 20px;
  }
  .whatsnew-features-grid {
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .whatsnew-footer {
    flex-direction: column-reverse;
    align-items: stretch;
  }
  .whatsnew-btn-group {
    flex-direction: column;
  }
  .whatsnew-primary-btn, .whatsnew-link-btn {
    width: 100%;
    justify-content: center;
  }
}
```

---

## ⚙️ Trigger Logic & Behavior Specifications

```javascript
const WHATS_NEW_VERSION = 'v2.6-oct2026';

function initWhatsNewModal() {
  const overlay = document.getElementById('whatsNewModalOverlay');
  const closeBtn = document.getElementById('closeWhatsNewBtn');
  const playBtn = document.getElementById('whatsNewPlayBtn');
  const dontShowCheck = document.getElementById('dontShowAgainCheck');
  if (!overlay) return;

  function openModal() {
    overlay.style.display = 'flex';
    // Trigger transition after display
    requestAnimationFrame(() => overlay.classList.add('active'));
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('active');
    setTimeout(() => {
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }, 280);

    if (dontShowCheck && dontShowCheck.checked) {
      try {
        localStorage.setItem('blooket1_whats_new_version', WHATS_NEW_VERSION);
      } catch(e) {}
    }
  }

  if (closeBtn) closeBtn.onclick = closeModal;
  if (playBtn) playBtn.onclick = closeModal;
  overlay.onclick = (e) => {
    if (e.target === overlay) closeModal();
  };
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
  });

  // Auto trigger check
  try {
    const seen = localStorage.getItem('blooket1_whats_new_version');
    if (seen !== WHATS_NEW_VERSION) {
      setTimeout(openModal, 800); // 800ms initial page load delay
    }
  } catch(e) {}

  // Expose global helper to reopen anytime
  window.openWhatsNewModal = openModal;
}

document.addEventListener('DOMContentLoaded', initWhatsNewModal);
```

---

## 🧪 Local Testing Instructions

1. Unzip the package into a folder.
2. Double-click `whats-new-demo.html` to see the live, working modal popup immediately!
3. Open `index.html` in any browser, or run a local static server:
   ```bash
   npx serve .
   # OR
   python -m http.server 8000
   ```
4. Clear `localStorage.removeItem('blooket1_whats_new_version')` in the DevTools Console to test the popup auto-trigger on fresh visits.
