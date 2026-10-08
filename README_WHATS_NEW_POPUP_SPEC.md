# Blooket1 - "What's New" Welcome Popup Developer Specification

Welcome! This developer handoff package contains everything you need to build and style the new **"What's New / Welcome to Blooket1 v2.6"** popup modal for [Blooket1.com](https://blooket1.com).

This bundle contains **9 essential files** extracted from the production site to give you full context of the design system, DOM structure, and script architecture without overwhelming you with the entire codebase.

---

## 📦 Package Contents (9 Files)

| File | Purpose / Role |
| :--- | :--- |
| `README_WHATS_NEW_POPUP_SPEC.md` | **(This file)** Complete design spec, copy, trigger logic, and integration instructions. |
| `index.html` | The homepage where the popup will live. Shows header, sidebar, grid, and existing modal markup. |
| `styles.css` | Master stylesheet with all CSS custom properties (colors, typography, radii, card styles, animations). |
| `script.js` | Main site JavaScript (shows modal open/close helpers, search, and localStorage patterns). |
| `games.json` | Sample of the game catalog database showing schema, categories, thumbnails, and descriptions. |
| `updates.html` | The full changelog page (`/updates/`) containing all release notes, badges, and copy. |
| `carousel.css` | Carousel styling if you choose to build a multi-slide/tabbed walkthrough popup. |
| `play.css` | Player page styling with theater mode and HUD overlay patterns. |
| `play.js` | Game player script showing Cloudflare D1 integration, tracking, and toast alerts. |

---

## 🎯 Goal & Objectives

Create a high-impact, polished **"What's New" / "Welcome to Blooket1"** modal popup that:
1. **Automatically triggers** for users visiting the site for the first time or after a major update.
2. **Highlights the biggest upgrades** made to Blooket1 (30+ new games, Stealth Mode Hub, Cloudflare D1 Real-Time Chat, Category Hubs, and WebGL engine fixes).
3. **Matches the site's sleek gaming aesthetic**: Dark theme, neon accents (`#f75532`), glassmorphism, smooth entrance animation, clean typography (Nunito), and FontAwesome icons.
4. **Persists dismissal** in `localStorage` so users are not annoyed on repeated visits, while offering an optional "Don't show again" checkbox or version-based dismiss.
5. **Provides a manual trigger hook** so the modal can also be reopened anytime (e.g. from the sidebar or header updates button).

---

## 🎨 Design System Cheat Sheet

The site uses modern CSS custom properties defined in `styles.css`:

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
  
  /* Fonts & Icons */
  font-family: 'Nunito', sans-serif; /* 600, 700, 800, 900 weights */
  /* Icons: FontAwesome 6.5.1 (e.g., <i class="fas fa-sparkles"></i>, <i class="fas fa-ghost"></i>) */
}
```

---

## 📝 Feature Highlights & Copy to Include

Here are the key features shipped in this release (feel free to format as feature cards, grid tiles, or carousel slides):

### 1. 🚀 30+ Brand New Games Added
- **Tagline:** Instant unblocked gaming with zero lag.
- **Details:** Blockbuster titles added: *Golf Orbit, Basket Bros, Vex 10, SUPERHOT, Drive Mad, Drift Boss, 4x4 Chess, Traffic Racer, Brotato, Fidget Spinner,* and *Idle Loops*.
- **Icon:** `<i class="fas fa-gamepad"></i>` or `<i class="fas fa-fire"></i>`

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

## ⚙️ Trigger Logic & Behavior Specifications

### 1. Versioned `localStorage` Check
The popup should trigger automatically once per major version update:

```javascript
const WHATS_NEW_VERSION = 'v2.6-oct2026';

function shouldShowWhatsNew() {
    try {
        const seenVersion = localStorage.getItem('blooket1_whats_new_version');
        return seenVersion !== WHATS_NEW_VERSION;
    } catch(e) {
        return false;
    }
}

function markWhatsNewSeen() {
    try {
        localStorage.setItem('blooket1_whats_new_version', WHATS_NEW_VERSION);
    } catch(e) {}
}
```

### 2. Smooth Launch Delay
- Wait **800ms - 1200ms** after DOM is ready so the page finishes its initial render before the modal fades in smoothly.

### 3. Dismissal & Navigation Controls
- **Close Button (`X`):** Closes modal, calls `markWhatsNewSeen()`.
- **Backdrop Click:** Clicking the dimmed overlay closes modal.
- **Keyboard `Escape`:** Closes modal.
- **Primary CTA Button:** "Explore All Updates" &rarr; opens `/updates/` and closes modal.
- **Secondary CTA Button:** "Got It, Let's Play!" &rarr; closes modal.
- **Optional Checkbox:** "Don't show this again" (checked by default).

---

## 💡 Recommended HTML & CSS Implementation Blueprint

You are free to design it however looks cleanest, but here is a reference structural pattern that fits right into `index.html`:

```html
<!-- What's New Modal Overlay -->
<div id="whatsNewModalOverlay" class="whatsnew-overlay" role="dialog" aria-modal="true" aria-labelledby="whatsNewTitle" style="display: none;">
  <div class="whatsnew-modal">
    <!-- Close Button -->
    <button class="whatsnew-close-btn" id="closeWhatsNewBtn" aria-label="Close">
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

## 🧪 Local Testing Instructions

1. Unzip the package into a folder.
2. Open `index.html` in any browser, or run a local static server:
   ```bash
   npx serve .
   # OR
   python -m http.server 8000
   ```
3. Test clearing `localStorage.removeItem('blooket1_whats_new_version')` in DevTools Console to test the popup appearance on fresh visits.

Thank you! Feel free to customize animations, layout, or typography to make this experience feel as premium and exciting as possible for our players.
