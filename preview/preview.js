let gamesData = null;
let activeGame = null;
let currentTab = 'ready';
let searchQuery = '';

// Load verification statuses from localStorage
function getVerificationStatus(id) {
  return localStorage.getItem(`blooket1_preview_${id}`) || 'untested';
}

function setVerificationStatus(id, status) {
  localStorage.setItem(`blooket1_preview_${id}`, status);
  renderGameList();
}

async function init() {
  try {
    const res = await fetch('games-data.json');
    gamesData = await res.json();
    
    // Update tab counts
    document.getElementById('ready-count').textContent = gamesData.readyGames.length;
    document.getElementById('incomplete-count').textContent = gamesData.incompleteGames.length;
    if (document.getElementById('header-ready-count')) document.getElementById('header-ready-count').textContent = gamesData.readyGames.length;
    if (document.getElementById('header-incomplete-count')) document.getElementById('header-incomplete-count').textContent = gamesData.incompleteGames.length;
    
    // Setup listeners
    setupEventListeners();
    
    // Render list and select first game
    renderGameList();
    if (gamesData.readyGames.length > 0) {
      selectGame(gamesData.readyGames[0].id);
    }
  } catch (err) {
    console.error('Failed to load games-data.json:', err);
  }
}

function setupEventListeners() {
  document.getElementById('search-input').addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderGameList();
  });

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentTab = btn.dataset.tab;
      
      const stageEl = document.getElementById('stage-player');
      const auditEl = document.getElementById('audit-view');
      
      if (currentTab === 'incomplete') {
        stageEl.style.display = 'none';
        auditEl.style.display = 'block';
        renderAuditTable();
      } else {
        stageEl.style.display = 'flex';
        auditEl.style.display = 'none';
        renderGameList();
      }
    });
  });

  // Aspect ratio switcher
  document.querySelectorAll('.aspect-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.aspect-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const wrapper = document.getElementById('frame-wrapper');
      wrapper.className = `frame-wrapper ${btn.dataset.ratio}`;
    });
  });

  // Reload iframe
  document.getElementById('reload-btn').addEventListener('click', () => {
    const iframe = document.getElementById('game-frame');
    if (iframe.src) {
      iframe.src = iframe.src;
    }
  });

  // Fullscreen
  document.getElementById('fullscreen-btn').addEventListener('click', () => {
    const iframe = document.getElementById('game-frame');
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    }
  });

  // Verification selector
  document.getElementById('verif-select').addEventListener('change', (e) => {
    if (activeGame) {
      setVerificationStatus(activeGame.id, e.target.value);
    }
  });
}

function renderGameList() {
  const container = document.getElementById('game-list');
  container.innerHTML = '';

  const list = gamesData.readyGames.filter(g => {
    const matchesSearch = g.title.toLowerCase().includes(searchQuery) ||
                          g.category.toLowerCase().includes(searchQuery) ||
                          g.engine.toLowerCase().includes(searchQuery);
    return matchesSearch;
  });

  if (list.length === 0) {
    container.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--text-muted);">No games found matching search.</div>';
    return;
  }

  list.forEach(game => {
    const item = document.createElement('div');
    item.className = `game-item ${activeGame && activeGame.id === game.id ? 'active' : ''}`;
    
    const status = getVerificationStatus(game.id);
    const isFlash = game.engine.includes('Flash');

    item.innerHTML = `
      <div class="game-item-top">
        <span class="game-item-title">
          <span class="verified-dot ${status}"></span>
          ${game.title}
        </span>
        <span class="game-badge ${isFlash ? 'flash' : ''}">${isFlash ? 'Flash / Ruffle' : 'Ready'}</span>
      </div>
      <div class="game-item-meta">
        <span><i class="fa-solid fa-gamepad"></i> ${game.engine}</span>
        <span><i class="fa-solid fa-hard-drive"></i> ${game.size}</span>
      </div>
    `;

    item.addEventListener('click', () => {
      selectGame(game.id);
    });

    container.appendChild(item);
  });
}

function selectGame(id) {
  const game = gamesData.readyGames.find(g => g.id === id);
  if (!game) return;

  activeGame = game;
  renderGameList();

  // Update Toolbar
  document.getElementById('stage-title').textContent = game.title;
  document.getElementById('chip-category').textContent = game.category;
  document.getElementById('chip-engine').textContent = game.engine;
  document.getElementById('chip-size').textContent = game.size;

  // Update Links
  const newTabBtn = document.getElementById('new-tab-btn');
  newTabBtn.href = game.path;

  // Update Controls & Description
  document.getElementById('control-text').textContent = game.controls;
  document.getElementById('desc-text').textContent = game.description;

  // Update Status Selector
  const status = getVerificationStatus(game.id);
  document.getElementById('verif-select').value = status;

  // Update Promotion & Git Code
  const codeFolder = document.getElementById('code-folder');
  if (codeFolder) codeFolder.textContent = `preview/games/${game.id}`;
  document.getElementById('code-cmd').textContent = `node tools/promote-game.js ${game.id}`;

  // Auto-set Aspect Ratio preset
  const wrapper = document.getElementById('frame-wrapper');
  document.querySelectorAll('.aspect-btn').forEach(b => b.classList.remove('active'));
  if (game.id === 'crossy-road' || game.id === 'helix-jump') {
    wrapper.className = 'frame-wrapper ratio-mobile';
    const mobileBtn = document.querySelector('.aspect-btn[data-ratio="ratio-mobile"]');
    if (mobileBtn) mobileBtn.classList.add('active');
  } else if (game.engine && game.engine.includes('Flash')) {
    wrapper.className = 'frame-wrapper ratio-4-3';
    const btn43 = document.querySelector('.aspect-btn[data-ratio="ratio-4-3"]');
    if (btn43) btn43.classList.add('active');
  } else {
    wrapper.className = 'frame-wrapper fill';
    const fillBtn = document.querySelector('.aspect-btn[data-ratio="fill"]');
    if (fillBtn) fillBtn.classList.add('active');
  }

  // Update Iframe
  const iframe = document.getElementById('game-frame');
  iframe.src = game.path;
}

function renderAuditTable() {
  const tbody = document.getElementById('audit-tbody');
  tbody.innerHTML = '';

  gamesData.incompleteGames.forEach(g => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td><strong>${g.title}</strong></td>
      <td><code style="color: #94a3b8">${g.archive}</code></td>
      <td><span class="game-badge incomplete">Needs Redownload</span></td>
      <td style="color: #cbd5e1; font-size: 0.85rem">
        ${g.issue}
        ${g.fix_advice ? `<div style="color: #38bdf8; font-size: 0.78rem; margin-top: 4px;"><i class="fa-solid fa-lightbulb"></i> ${g.fix_advice}</div>` : ''}
      </td>
      <td><code style="color: #94a3b8; font-size: 0.78rem">preview/incomplete/${g.id}</code></td>
    `;
    tbody.appendChild(tr);
  });
}

window.addEventListener('DOMContentLoaded', init);
