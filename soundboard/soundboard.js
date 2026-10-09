/**
 * =================================================================
 * BLOOKET1 - MEME SOUNDBOARD ENGINE
 * 2,710 sounds from SoundboardMax with low-latency audio playback,
 * Stream Deck hotkeys (1-9), pitch/speed shift, and custom boards.
 * =================================================================
 */

(() => {
  'use strict';

  // --- State ---
  let allSounds = [];
  let filteredSounds = [];
  let currentCategory = 'all';
  let searchQuery = '';
  let currentSort = 'plays-desc';
  let renderedCount = 0;
  const CHUNK_SIZE = 60;

  // Audio State
  let masterVolume = 0.85;
  let isMuted = false;
  let playbackRate = 1.0;
  let playMode = 'multi'; // 'multi' or 'solo'
  let globalLoop = false;
  const activeAudios = new Map(); // id -> { audio, cardEl, loop }
  let lastPlayedId = null;

  // Deck & Favorites (localStorage)
  const STORAGE_KEY_FAVS = 'blooket1_sb_favorites';
  const STORAGE_KEY_DECK = 'blooket1_sb_deck';
  const STORAGE_KEY_CUSTOM = 'blooket1_sb_custom';

  let favorites = new Set();
  let deckSlots = []; // array of 9 sound objects or ids
  let customSounds = [];

  // Category Color Map
  const CATEGORY_COLORS = {
    'Meme': { bg: 'linear-gradient(135deg, #ff4757, #ff6b81)', color: '#ff4757' },
    'Sound Effects': { bg: 'linear-gradient(135deg, #ff9f43, #feca57)', color: '#ff9f43' },
    'Games': { bg: 'linear-gradient(135deg, #00d2d3, #54a0ff)', color: '#00d2d3' },
    'Anime & Manga': { bg: 'linear-gradient(135deg, #ff9ff3, #f368e8)', color: '#ff9ff3' },
    'Movies': { bg: 'linear-gradient(135deg, #5f27cd, #a55eea)', color: '#8c7ae6' },
    'Notification': { bg: 'linear-gradient(135deg, #10ac84, #1dd1a1)', color: '#1dd1a1' },
    'Custom': { bg: 'linear-gradient(135deg, #ff7a1a, #ffbe3d)', color: '#ff7a1a' }
  };

  // DOM Elements Cache
  let gridEl, searchInputEl, resultsCountEl, sortSelectEl, pillsContainerEl;
  let masterVolumeSlider, volumeValueEl, volumeIconEl, speedSelectEl;
  let playModeBtn, loopBtn, stopAllBtn, randomBtn;
  let deckGridEl;

  // =================================================================
  // INITIALIZATION
  // =================================================================
  document.addEventListener('DOMContentLoaded', () => {
    cacheDomElements();
    loadStoredData();
    setupEventListeners();
    fetchSounds();
  });

  function cacheDomElements() {
    gridEl = document.getElementById('sbGrid');
    searchInputEl = document.getElementById('sbSearchInput');
    resultsCountEl = document.getElementById('sbResultsCount');
    sortSelectEl = document.getElementById('sbSortSelect');
    pillsContainerEl = document.getElementById('sbCategoryPills');

    masterVolumeSlider = document.getElementById('masterVolume');
    volumeValueEl = document.getElementById('volumeValue');
    volumeIconEl = document.getElementById('volumeIcon');
    speedSelectEl = document.getElementById('sbSpeedSelect');

    playModeBtn = document.getElementById('playModeBtn');
    loopBtn = document.getElementById('globalLoopBtn');
    stopAllBtn = document.getElementById('stopAllBtn');
    randomBtn = document.getElementById('randomSoundBtn');

    deckGridEl = document.getElementById('sbDeckGrid');
  }

  function loadStoredData() {
    try {
      const storedFavs = localStorage.getItem(STORAGE_KEY_FAVS);
      if (storedFavs) favorites = new Set(JSON.parse(storedFavs));

      const storedCustom = localStorage.getItem(STORAGE_KEY_CUSTOM);
      if (storedCustom) customSounds = JSON.parse(storedCustom);

      const storedDeck = localStorage.getItem(STORAGE_KEY_DECK);
      if (storedDeck) deckSlots = JSON.parse(storedDeck);
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
  }

  async function fetchSounds() {
    try {
      showLoading(true);
      const res = await fetch('sounds.json?v=3');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      allSounds = await res.json();

      // Prepend custom sounds if any
      if (customSounds.length > 0) {
        allSounds = [...customSounds, ...allSounds];
      }

      initDeckIfEmpty();
      updateCategoryCounts();
      renderDeck();
      applyFilters();
      saveDeck();

      // Check if URL has a sound hash
      handleUrlHash();
    } catch (err) {
      console.error('Failed to load soundboard data:', err);
      if (gridEl) {
        gridEl.innerHTML = `
          <div class="sb-no-results">
            <i class="fas fa-triangle-exclamation"></i>
            <h3>Failed to load sounds</h3>
            <p>Please check your connection and refresh the page.</p>
          </div>
        `;
      }
    } finally {
      showLoading(false);
    }
  }

  function initDeckIfEmpty() {
    // Verify all stored deck slots exist in current allSounds
    const valid = deckSlots && deckSlots.length === 9 && deckSlots.every(id => allSounds.some(s => s.id === id));
    if (!valid) {
      // Pick top 9 most popular sounds
      const sortedByPlays = [...allSounds].sort((a, b) => (b.plays || 0) - (a.plays || 0));
      deckSlots = sortedByPlays.slice(0, 9).map(s => s.id);
      saveDeck();
    }
  }

  function saveDeck() {
    try {
      localStorage.setItem(STORAGE_KEY_DECK, JSON.stringify(deckSlots));
      if (Array.isArray(deckSlots) && Array.isArray(allSounds) && allSounds.length > 0) {
        const deckObjects = deckSlots.map((id, idx) => {
          const found = allSounds.find(s => s.id === id);
          return found ? { slot: idx + 1, id: found.id, title: found.title, src: found.src } : null;
        }).filter(Boolean);
        if (deckObjects.length > 0) {
          localStorage.setItem('blooket1_sb_deck_cache', JSON.stringify(deckObjects));
        }
      }
    } catch (e) {}
  }

  function saveFavorites() {
    try {
      localStorage.setItem(STORAGE_KEY_FAVS, JSON.stringify(Array.from(favorites)));
    } catch (e) {}
    updateCategoryCounts();
  }

  function saveCustomSounds() {
    try {
      localStorage.setItem(STORAGE_KEY_CUSTOM, JSON.stringify(customSounds));
    } catch (e) {}
  }

  // =================================================================
  // AUDIO ENGINE
  // =================================================================
  function playSound(sound, options = {}) {
    if (!sound || !sound.src) return;

    const soundId = sound.id;
    lastPlayedId = soundId;

    // Solo Mode: Stop all other active sounds
    if (playMode === 'solo') {
      stopAllSounds();
    }

    // If this sound is already playing, either stop it (toggle) or restart
    if (activeAudios.has(soundId)) {
      const active = activeAudios.get(soundId);
      if (options.toggle) {
        stopSound(soundId);
        return;
      }
      active.audio.currentTime = 0;
      active.audio.play().catch(e => console.warn('Audio play error:', e));
      return;
    }

    const audio = new Audio(sound.src);
    audio.volume = isMuted ? 0 : masterVolume;
    audio.playbackRate = playbackRate;
    audio.loop = options.loop !== undefined ? options.loop : globalLoop;

    const record = {
      sound,
      audio,
      loop: audio.loop
    };

    activeAudios.set(soundId, record);
    updateSoundUI(soundId, true);

    audio.addEventListener('ended', () => {
      if (!audio.loop) {
        stopSound(soundId);
      }
    });

    audio.addEventListener('error', (e) => {
      console.warn(`Audio playback error for ${sound.title}:`, e);
      stopSound(soundId);
      showToast(`Audio error playing "${sound.title}"`);
    });

    audio.play().catch(err => {
      console.warn('Playback error (e.g. autoplay block):', err);
      stopSound(soundId);
    });
  }

  function stopSound(soundId) {
    if (activeAudios.has(soundId)) {
      const { audio } = activeAudios.get(soundId);
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch (e) {}
      activeAudios.delete(soundId);
      updateSoundUI(soundId, false);
    }
  }

  function stopAllSounds() {
    activeAudios.forEach(({ audio }, soundId) => {
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch (e) {}
      updateSoundUI(soundId, false);
    });
    activeAudios.clear();
  }

  function updateSoundUI(soundId, isPlaying) {
    // Update Sound Cards
    const cards = document.querySelectorAll(`[data-sound-id="${soundId}"]`);
    cards.forEach(card => {
      card.classList.toggle('is-playing', isPlaying);
      const icon = card.querySelector('.sb-play-icon');
      if (icon) {
        if (isPlaying) {
          icon.className = 'fas fa-square sb-play-icon';
        } else {
          icon.className = 'fas fa-play sb-play-icon';
        }
      }
    });

    // Update Stream Deck Pads
    const deckPads = document.querySelectorAll(`.sb-deck-pad[data-sound-id="${soundId}"]`);
    deckPads.forEach(pad => {
      pad.classList.toggle('is-playing', isPlaying);
      const icon = pad.querySelector('.sb-deck-icon i');
      if (icon) {
        if (isPlaying) {
          icon.className = 'fas fa-square';
        } else {
          icon.className = 'fas fa-play';
        }
      }
    });
  }

  function setMasterVolume(val) {
    masterVolume = Math.max(0, Math.min(1, val));
    if (masterVolume > 0 && isMuted) isMuted = false;

    activeAudios.forEach(({ audio }) => {
      audio.volume = isMuted ? 0 : masterVolume;
    });

    if (volumeValueEl) {
      volumeValueEl.textContent = `${Math.round(masterVolume * 100)}%`;
    }
    if (masterVolumeSlider) {
      masterVolumeSlider.value = masterVolume;
    }
    updateVolumeIcon();
  }

  function toggleMute() {
    isMuted = !isMuted;
    activeAudios.forEach(({ audio }) => {
      audio.volume = isMuted ? 0 : masterVolume;
    });
    updateVolumeIcon();
  }

  function updateVolumeIcon() {
    if (!volumeIconEl) return;
    if (isMuted || masterVolume === 0) {
      volumeIconEl.className = 'fas fa-volume-xmark';
    } else if (masterVolume < 0.5) {
      volumeIconEl.className = 'fas fa-volume-low';
    } else {
      volumeIconEl.className = 'fas fa-volume-high';
    }
  }

  function setPlaybackRate(rate) {
    playbackRate = rate;
    activeAudios.forEach(({ audio }) => {
      audio.playbackRate = playbackRate;
    });
  }

  // =================================================================
  // STREAM DECK (HOTKEYS 1-9)
  // =================================================================
  function renderDeck() {
    if (!deckGridEl) return;
    deckGridEl.innerHTML = '';

    for (let i = 0; i < 9; i++) {
      const soundId = deckSlots[i];
      const sound = allSounds.find(s => s.id === soundId) || {
        id: soundId,
        title: `Empty Pad ${i + 1}`,
        category: 'Meme',
        src: null
      };

      const catStyle = CATEGORY_COLORS[sound.category] || CATEGORY_COLORS['Meme'];
      const isPlaying = activeAudios.has(sound.id);

      const pad = document.createElement('div');
      pad.className = `sb-deck-pad ${isPlaying ? 'is-playing' : ''}`;
      pad.dataset.soundId = sound.id;
      pad.dataset.slotIndex = i;
      pad.title = `Press ${i + 1} or click to play "${sound.title}". Right-click to reassign.`;

      pad.innerHTML = `
        <span class="sb-deck-key">${i + 1}</span>
        <div class="sb-deck-icon" style="background: ${catStyle.bg}">
          <i class="fas ${isPlaying ? 'fa-square' : 'fa-play'}"></i>
        </div>
        <div class="sb-deck-name">${escapeHtml(sound.title)}</div>
      `;

      pad.addEventListener('click', (e) => {
        if (sound.src) {
          playSound(sound, { toggle: true });
        } else {
          openAssignDeckModal(i);
        }
      });

      pad.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        openAssignDeckModal(i);
      });

      deckGridEl.appendChild(pad);
    }
  }

  function assignSoundToDeck(slotIndex, soundId) {
    if (slotIndex >= 0 && slotIndex < 9) {
      deckSlots[slotIndex] = soundId;
      saveDeck();
      renderDeck();
      const sound = allSounds.find(s => s.id === soundId);
      showToast(`Assigned "${sound ? sound.title : 'Sound'}" to Hotkey [${slotIndex + 1}]`);
    }
  }

  // =================================================================
  // FILTERING & RENDERING SOUND CARDS
  // =================================================================
  function applyFilters() {
    let list = [...allSounds];

    // Category filter
    if (currentCategory === 'favorites') {
      list = list.filter(s => favorites.has(s.id));
    } else if (currentCategory === 'trending') {
      list = list.filter(s => (s.plays || 0) > 10000 || (s.views || 0) > 500);
      list.sort((a, b) => (b.plays || 0) - (a.plays || 0));
    } else if (currentCategory === 'custom') {
      list = list.filter(s => s.isCustom);
    } else if (currentCategory !== 'all') {
      list = list.filter(s => s.category.toLowerCase() === currentCategory.toLowerCase());
    }

    // Search query filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(s => 
        (s.title && s.title.toLowerCase().includes(q)) ||
        (s.category && s.category.toLowerCase().includes(q))
      );
    }

    // Sort order (unless trending already sorted by plays)
    if (currentCategory !== 'trending' || currentSort !== 'plays-desc') {
      switch (currentSort) {
        case 'plays-desc':
          list.sort((a, b) => (b.plays || 0) - (a.plays || 0));
          break;
        case 'views-desc':
          list.sort((a, b) => (b.views || 0) - (a.views || 0));
          break;
        case 'title-asc':
          list.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
          break;
        case 'title-desc':
          list.sort((a, b) => (b.title || '').localeCompare(a.title || ''));
          break;
        case 'random':
          for (let i = list.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [list[i], list[j]] = [list[j], list[i]];
          }
          break;
        default:
          break;
      }
    }

    filteredSounds = list;
    renderedCount = 0;

    if (resultsCountEl) {
      resultsCountEl.textContent = `${filteredSounds.length.toLocaleString()} sound${filteredSounds.length === 1 ? '' : 's'}`;
    }

    if (gridEl) gridEl.innerHTML = '';

    if (filteredSounds.length === 0) {
      renderEmptyState();
    } else {
      renderMoreSounds();
    }
  }

  function renderEmptyState() {
    if (!gridEl) return;
    gridEl.innerHTML = `
      <div class="sb-no-results" style="grid-column: 1 / -1;">
        <i class="fas fa-ghost"></i>
        <h3>No sounds found</h3>
        <p>No results matched "${escapeHtml(searchQuery || currentCategory)}". Try searching for another meme or browse All Sounds.</p>
        <button class="sb-btn sb-btn-primary" style="margin-top: 14px;" onclick="window.soundboardAPI.clearSearch()">
          <i class="fas fa-arrows-rotate"></i> Reset Filters
        </button>
      </div>
    `;
  }

  function renderMoreSounds() {
    if (!gridEl || renderedCount >= filteredSounds.length) return;

    const nextBatch = filteredSounds.slice(renderedCount, renderedCount + CHUNK_SIZE);
    const fragment = document.createDocumentFragment();

    nextBatch.forEach(sound => {
      const card = createSoundCard(sound);
      fragment.appendChild(card);
    });

    gridEl.appendChild(fragment);
    renderedCount += nextBatch.length;
  }

  function createSoundCard(sound) {
    const card = document.createElement('div');
    card.className = `sb-card ${activeAudios.has(sound.id) ? 'is-playing' : ''}`;
    card.dataset.soundId = sound.id;

    const catStyle = CATEGORY_COLORS[sound.category] || CATEGORY_COLORS['Meme'];
    const isFav = favorites.has(sound.id);
    const isPlaying = activeAudios.has(sound.id);

    // Format plays nicely: 1,234,567 -> 1.2M
    const playsFormatted = formatNumber(sound.plays || 0);

    card.innerHTML = `
      <div class="sb-play-btn-wrap" role="button" aria-label="Play ${escapeHtml(sound.title)}">
        <button class="sb-play-btn" style="background: ${catStyle.bg}">
          <i class="fas ${isPlaying ? 'fa-square' : 'fa-play'} sb-play-icon"></i>
        </button>
      </div>
      <div class="sb-card-title" title="${escapeHtml(sound.title)}">
        ${highlightMatch(sound.title, searchQuery)}
      </div>
      <div class="sb-card-meta">
        <span class="sb-card-cat-badge" style="background: ${catStyle.color}">${escapeHtml(sound.category)}</span>
        <span class="sb-card-plays"><i class="fas fa-play" style="font-size: 9px; opacity: 0.6; margin-right: 2px;"></i>${playsFormatted}</span>
      </div>
      <div class="sb-card-actions">
        <button class="sb-action-btn ${isFav ? 'is-fav' : ''}" data-action="fav" title="Favorite">
          <i class="${isFav ? 'fas fa-heart' : 'far fa-heart'}"></i>
        </button>
        <button class="sb-action-btn" data-action="download" title="Download MP3">
          <i class="fas fa-download"></i>
        </button>
        <button class="sb-action-btn" data-action="share" title="Copy Link">
          <i class="fas fa-link"></i>
        </button>
        <button class="sb-action-btn" data-action="deck" title="Assign to Hotkey Deck (1-9)">
          <i class="fas fa-keyboard"></i>
        </button>
      </div>
    `;

    // Click play button wrap
    const playBtn = card.querySelector('.sb-play-btn-wrap');
    playBtn.addEventListener('click', () => {
      playSound(sound, { toggle: true });
    });

    // Action buttons
    const favBtn = card.querySelector('[data-action="fav"]');
    favBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFavorite(sound.id, favBtn);
    });

    const dlBtn = card.querySelector('[data-action="download"]');
    dlBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      downloadSound(sound);
    });

    const shareBtn = card.querySelector('[data-action="share"]');
    shareBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      copySoundLink(sound);
    });

    const deckBtn = card.querySelector('[data-action="deck"]');
    deckBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      openQuickDeckPicker(sound);
    });

    return card;
  }

  function toggleFavorite(soundId, btnEl) {
    if (favorites.has(soundId)) {
      favorites.delete(soundId);
      if (btnEl) {
        btnEl.classList.remove('is-fav');
        btnEl.innerHTML = '<i class="far fa-heart"></i>';
      }
      showToast('Removed from favorites');
    } else {
      favorites.add(soundId);
      if (btnEl) {
        btnEl.classList.add('is-fav');
        btnEl.innerHTML = '<i class="fas fa-heart"></i>';
      }
      showToast('Added to favorites! ❤️');
    }
    saveFavorites();

    // If currently on favorites tab, re-filter
    if (currentCategory === 'favorites') {
      applyFilters();
    }
  }

  function downloadSound(sound) {
    if (!sound.src) return;
    showToast(`Downloading "${sound.title}"...`);
    
    fetch(sound.src)
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        const cleanName = (sound.title || 'sound').replace(/[^a-zA-Z0-9_\- ]/g, '').trim();
        a.download = `${cleanName}.mp3`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch(() => {
        // Direct link fallback
        window.open(sound.src, '_blank');
      });
  }

  function copySoundLink(sound) {
    const url = `${window.location.origin}${window.location.pathname}#sound-${sound.id}`;
    navigator.clipboard.writeText(url)
      .then(() => showToast('Direct sound link copied to clipboard! 🔗'))
      .catch(() => {
        // Fallback
        prompt('Copy this sound link:', url);
      });
  }

  function openQuickDeckPicker(sound) {
    const slot = prompt(`Assign "${sound.title}" to which Hotkey Slot (1 - 9)?`, '1');
    if (slot !== null) {
      const num = parseInt(slot, 10);
      if (num >= 1 && num <= 9) {
        assignSoundToDeck(num - 1, sound.id);
      } else {
        alert('Please enter a number between 1 and 9.');
      }
    }
  }

  function openAssignDeckModal(slotIndex) {
    const soundTitle = prompt(`Enter sound title or meme to bind to Pad [${slotIndex + 1}]:`);
    if (soundTitle) {
      const match = allSounds.find(s => s.title.toLowerCase().includes(soundTitle.toLowerCase()));
      if (match) {
        assignSoundToDeck(slotIndex, match.id);
      } else {
        alert(`No sound found matching "${soundTitle}".`);
      }
    }
  }

  function playRandomSound() {
    if (filteredSounds.length === 0) return;
    const randomIndex = Math.floor(Math.random() * filteredSounds.length);
    const sound = filteredSounds[randomIndex];
    playSound(sound);
    showToast(`🎲 Playing Random: "${sound.title}"`);

    // Scroll card into view
    const card = document.querySelector(`[data-sound-id="${sound.id}"]`);
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  function handleUrlHash() {
    const hash = window.location.hash;
    if (hash && hash.startsWith('#sound-')) {
      const id = parseInt(hash.replace('#sound-', ''), 10);
      const sound = allSounds.find(s => s.id === id);
      if (sound) {
        setTimeout(() => {
          playSound(sound);
          const card = document.querySelector(`[data-sound-id="${sound.id}"]`);
          if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 300);
      }
    }
  }

  // =================================================================
  // EVENT LISTENERS & SHORTCUTS
  // =================================================================
  function setupEventListeners() {
    // Category pills
    if (pillsContainerEl) {
      pillsContainerEl.addEventListener('click', (e) => {
        const pill = e.target.closest('.sb-cat-pill');
        if (!pill) return;
        pillsContainerEl.querySelectorAll('.sb-cat-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentCategory = pill.dataset.category || 'all';
        applyFilters();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Live search input
    if (searchInputEl) {
      let debounceTimeout;
      searchInputEl.addEventListener('input', (e) => {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
          searchQuery = e.target.value.trim();
          const clearBtn = document.getElementById('sbSearchClear');
          if (clearBtn) clearBtn.style.display = searchQuery ? 'block' : 'none';
          applyFilters();
        }, 120);
      });
    }

    const clearBtn = document.getElementById('sbSearchClear');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        if (searchInputEl) searchInputEl.value = '';
        searchQuery = '';
        clearBtn.style.display = 'none';
        applyFilters();
      });
    }

    // Sort Select
    if (sortSelectEl) {
      sortSelectEl.addEventListener('change', (e) => {
        currentSort = e.target.value;
        applyFilters();
      });
    }

    // Master Volume
    if (masterVolumeSlider) {
      masterVolumeSlider.addEventListener('input', (e) => {
        setMasterVolume(parseFloat(e.target.value));
      });
    }
    if (volumeIconEl) {
      volumeIconEl.addEventListener('click', toggleMute);
    }

    // Speed / Pitch
    if (speedSelectEl) {
      speedSelectEl.addEventListener('change', (e) => {
        setPlaybackRate(parseFloat(e.target.value));
      });
    }

    // Play Mode Toggle
    if (playModeBtn) {
      playModeBtn.addEventListener('click', () => {
        playMode = playMode === 'multi' ? 'solo' : 'multi';
        playModeBtn.classList.toggle('active', playMode === 'solo');
        const icon = playModeBtn.querySelector('i');
        const label = playModeBtn.querySelector('span');
        if (playMode === 'solo') {
          if (icon) icon.className = 'fas fa-arrow-down-1-9';
          if (label) label.textContent = 'Solo Play';
          showToast('Solo Mode: Previous sounds cut off');
        } else {
          if (icon) icon.className = 'fas fa-layer-group';
          if (label) label.textContent = 'Overlap';
          showToast('Overlap Mode: Multi-sound chaos enabled');
        }
      });
    }

    // Global Loop Toggle
    if (loopBtn) {
      loopBtn.addEventListener('click', () => {
        globalLoop = !globalLoop;
        loopBtn.classList.toggle('active', globalLoop);
        showToast(globalLoop ? 'Global Loop: ON 🔁' : 'Global Loop: OFF');
      });
    }

    // Stop All Audio
    if (stopAllBtn) {
      stopAllBtn.addEventListener('click', () => {
        stopAllSounds();
        showToast('All audio stopped ⏹️');
      });
    }

    // Random Sound
    if (randomBtn) {
      randomBtn.addEventListener('click', playRandomSound);
    }

    // Infinite Scroll
    window.addEventListener('scroll', () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 800) {
        renderMoreSounds();
      }
    }, { passive: true });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      // Ignore if user is typing in an input or textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable) {
        if (e.key === 'Escape') {
          e.target.blur();
        }
        return;
      }

      // Keys 1 through 9: Stream Deck Hotkeys
      if (e.key >= '1' && e.key <= '9') {
        const slotIdx = parseInt(e.key, 10) - 1;
        const soundId = deckSlots[slotIdx];
        if (soundId) {
          const sound = allSounds.find(s => s.id === soundId);
          if (sound) {
            e.preventDefault();
            playSound(sound, { toggle: true });
          }
        }
        return;
      }

      // Esc: Stop All Audio
      if (e.key === 'Escape') {
        e.preventDefault();
        stopAllSounds();
        showToast('All audio stopped ⏹️');
        return;
      }

      // R: Random Sound
      if (e.key.toLowerCase() === 'r') {
        e.preventDefault();
        playRandomSound();
        return;
      }

      // /: Focus Search
      if (e.key === '/') {
        e.preventDefault();
        if (searchInputEl) {
          searchInputEl.focus();
          searchInputEl.select();
        }
        return;
      }

      // Spacebar: Stop All or Re-trigger Last
      if (e.code === 'Space') {
        e.preventDefault();
        if (activeAudios.size > 0) {
          stopAllSounds();
        } else if (lastPlayedId) {
          const sound = allSounds.find(s => s.id === lastPlayedId);
          if (sound) playSound(sound);
        }
      }
    });

    // Custom sound modal setup
    setupCustomSoundModal();
  }

  function setupCustomSoundModal() {
    const openBtn = document.getElementById('openCustomModalBtn');
    const modal = document.getElementById('customSoundModal');
    const closeBtn = document.getElementById('closeCustomModalBtn');
    const fileInput = document.getElementById('customAudioFile');
    const nameInput = document.getElementById('customAudioName');
    const saveBtn = document.getElementById('saveCustomSoundBtn');
    const dropzone = document.getElementById('customDropzone');

    if (!modal) return;

    if (openBtn) {
      openBtn.addEventListener('click', () => {
        modal.classList.add('active');
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });

    let selectedFileData = null;

    if (dropzone && fileInput) {
      dropzone.addEventListener('click', () => fileInput.click());

      dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.style.borderColor = 'var(--accent-color)';
      });

      dropzone.addEventListener('dragleave', () => {
        dropzone.style.borderColor = '';
      });

      dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.style.borderColor = '';
        if (e.dataTransfer.files.length > 0) {
          handleFile(e.dataTransfer.files[0]);
        }
      });

      fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
          handleFile(fileInput.files[0]);
        }
      });
    }

    function handleFile(file) {
      if (!file.type.startsWith('audio/')) {
        alert('Please select an audio file (.mp3, .wav, .ogg, etc.)');
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        selectedFileData = e.target.result;
        if (nameInput && !nameInput.value) {
          nameInput.value = file.name.replace(/\.[^/.]+$/, '');
        }
        if (dropzone) {
          dropzone.innerHTML = `<i class="fas fa-circle-check" style="color: #2ed573;"></i><p>Loaded: <strong>${escapeHtml(file.name)}</strong></p>`;
        }
      };
      reader.readAsDataURL(file);
    }

    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        const name = nameInput ? nameInput.value.trim() : '';
        if (!name) {
          alert('Please enter a name for your sound.');
          return;
        }
        if (!selectedFileData) {
          alert('Please upload an audio file first.');
          return;
        }

        const newSound = {
          id: Date.now(),
          title: name,
          category: 'Custom',
          categories: ['Custom'],
          views: 1,
          plays: 1,
          src: selectedFileData,
          isCustom: true
        };

        customSounds.unshift(newSound);
        allSounds.unshift(newSound);
        saveCustomSounds();
        updateCategoryCounts();
        applyFilters();

        modal.classList.remove('active');
        showToast(`Added custom sound "${name}"!`);
      });
    }
  }

  // =================================================================
  // HELPERS
  // =================================================================
  function updateCategoryCounts() {
    const counts = {
      all: allSounds.length,
      favorites: favorites.size,
      trending: 0,
      meme: 0,
      'sound-effects': 0,
      games: 0,
      movies: 0,
      'anime-manga': 0,
      notification: 0,
      custom: customSounds.length
    };

    allSounds.forEach(s => {
      const cat = (s.category || '').toLowerCase();
      if ((s.plays || 0) > 10000 || (s.views || 0) > 500) counts.trending++;
      if (cat.includes('meme')) counts.meme++;
      else if (cat.includes('sound effects')) counts['sound-effects']++;
      else if (cat.includes('games')) counts.games++;
      else if (cat.includes('movies')) counts.movies++;
      else if (cat.includes('anime')) counts['anime-manga']++;
      else if (cat.includes('notification')) counts.notification++;
    });

    for (const [key, count] of Object.entries(counts)) {
      const badge = document.getElementById(`count-${key}`);
      if (badge) badge.textContent = count.toLocaleString();
    }
  }

  function showLoading(isLoading) {
    const loader = document.getElementById('sbLoader');
    if (loader) loader.style.display = isLoading ? 'flex' : 'none';
  }

  function showToast(msg) {
    let toast = document.getElementById('sbToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'sbToast';
      toast.className = 'sb-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas fa-volume-high" style="color: var(--accent-color);"></i><span>${escapeHtml(msg)}</span>`;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2400);
  }

  function formatNumber(num) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
  }

  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function highlightMatch(text, query) {
    if (!query || !query.trim()) return escapeHtml(text);
    const escaped = escapeHtml(text);
    const qEscaped = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return escaped.replace(new RegExp(`(${qEscaped})`, 'gi'), '<mark style="background: rgba(255, 122, 26, 0.4); color: #fff; padding: 0 2px; border-radius: 3px;">$1</mark>');
  }

  // Public API
  window.soundboardAPI = {
    clearSearch: () => {
      if (searchInputEl) searchInputEl.value = '';
      searchQuery = '';
      currentCategory = 'all';
      if (pillsContainerEl) {
        pillsContainerEl.querySelectorAll('.sb-cat-pill').forEach(p => {
          p.classList.toggle('active', p.dataset.category === 'all');
        });
      }
      applyFilters();
    },
    stopAll: stopAllSounds,
    playRandom: playRandomSound
  };

})();
