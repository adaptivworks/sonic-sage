// ── Album definitions ──
const albums = [
  {
    id: 'a-sonic-joint',
    folder: 'A Sonic Joint - Ft. 17 Squad',
    tracks: [
      { name: 'INTRO',              display: 'INTRO\u2002ft.\u2002\u2002\u2002L\u00e9o Blanchet',        file: '01_Intro - Feat_ L\u00e9o Blanchet.mp3',              duration: '\u2014' },
      { name: 'FINSBURY PARK',      display: 'FINSBURY PARK\u2002ft.\u2002\u2002\u2002Master Vlad',      file: '02_Finsbury Park - Feat_ Master Vlad.mp3',            duration: '\u2014' },
      { name: 'CONVINTO',           display: 'CONVINTO\u2002ft.\u2002\u2002\u2002Danny Montana',         file: '03_Convinto - Feat_ Danny Montana.mp3',               duration: '\u2014' },
      { name: 'CHASING STATUS',     display: 'CHASING STATUS\u2002ft.\u2002\u2002\u2002Durden',          file: '04_Chasing Status - Feat. Durden.mp3',                duration: '\u2014' },
      { name: 'SCOVATA',            display: 'SCOVATA\u2002ft.\u2002\u2002\u2002\u2018Lil V',            file: '05_Scovata - Feat_ \u2018Lil V.mp3',                  duration: '\u2014' },
      { name: 'SULLA VETTA',        display: 'SULLA VETTA\u2002ft.\u2002\u2002\u2002Killa Kendo',       file: '06_Sulla Vetta - Feat. Killa Kendo.mp3',              duration: '\u2014' },
      { name: 'TRAPDANCE',          display: 'TRAPDANCE\u2002ft.\u2002\u2002\u2002Nik Frost',           file: '07_Trapdance - Feat_ Nik Frost.mp3',                  duration: '\u2014' },
      { name: 'GENTE DA CAPODANNO', display: 'GENTE DA CAPODANNO\u2002ft.\u2002\u2002\u2002Ni\u00f1o Jefe', file: '08_Gente da Capodanno - Feat_ Ni\u00f1o Jefe.mp3', duration: '\u2014' },
    ],
  },
  {
    id: 'artificiale',
    folder: 'Artificiale - Ft. 17 Squad',
    tracks: [
      { name: 'INTRO',       display: 'INTRO\u2002ft.\u2002\u2002\u2002Cash Ritual',                          file: '01 - Intro [Ft_ Cash Ritual].mp3',                          duration: '\u2014' },
      { name: 'ARTIFICIALE', display: 'ARTIFICIALE\u2002ft.\u2002\u2002\u2002Nova Kane & Velvet Luna',         file: '02 - Artificiale [Ft. Nova Kane & Velvet Luna].mp3',        duration: '\u2014' },
      { name: 'CORTISONE',   display: 'CORTISONE\u2002ft.\u2002\u2002\u2002Cocky Boi',                        file: '03 - Cortisone  [Ft. Cocky Boi].mp3',                       duration: '\u2014' },
      { name: 'CERCHI',      display: 'CERCHI\u2002ft.\u2002\u2002\u2002Nova Kane',                            file: '04 - Cerchi [Ft. Nova Kane].mp3',                           duration: '\u2014' },
      { name: 'BUSTE',       display: 'BUSTE\u2002ft.\u2002\u2002\u2002Zulu',                                  file: '05-  Buste [Ft. Zulu].mp3',                                 duration: '\u2014' },
      { name: 'SCORSESE',    display: 'SCORSESE\u2002ft.\u2002\u2002\u2002Zima',                               file: '06 - Scorsese [Ft. Zima].mp3',                              duration: '\u2014' },
      { name: 'TOKYO',       display: 'TOKYO\u2002ft.\u2002\u2002\u2002Dano, Kendo, Lord Uzi',                 file: '07 - Tokyo [Ft. Dano, Kendo, Lord Uzi] (1).mp3',            duration: '\u2014' },
    ],
  },
  {
    id: 'stanze',
    folder: 'stanze. - Ft. Plan B',
    tracks: [
      { name: 'INTRO',           display: 'INTRO\u2002ft.\u2002\u2002\u2002Giada',                    file: '00 [Intro] Ft. Giada.mp3',                   duration: '\u2014' },
      { name: 'MAGIA',           display: 'MAGIA\u2002ft.\u2002\u2002\u2002Primo',                    file: '01 [Magia] Ft. Primo.mp3',                   duration: '\u2014' },
      { name: 'BLU',             display: 'BLU\u2002ft.\u2002\u2002\u2002Tiago',                      file: '02 [Blu] Ft. Tiago.mp3',                     duration: '\u2014' },
      { name: 'LITURGIA',        display: 'LITURGIA\u2002ft.\u2002\u2002\u2002Jordi',                 file: '03 [Liturgia] Ft. Jordi.mp3',                duration: '\u2014' },
      { name: 'SONETTO',         display: 'SONETTO\u2002ft.\u2002\u2002\u2002Oscar',                  file: '04 [Sonetto] Ft. Oscar.mp3',                 duration: '\u2014' },
      { name: 'CHIARA',          display: 'CHIARA\u2002ft.\u2002\u2002\u2002Tommaso',                 file: '05 [Chiara] Ft. Tommaso.mp3',                duration: '\u2014' },
      { name: 'LITURGIA — LIVE', display: 'LITURGIA\u2002\u2014\u2002\u2002\u2002Live\u2002ft.\u2002Seva', file: '06 [Liturgia - Live Cover] Ft. Seva.mp3', duration: '\u2014' },
    ],
  }
];

// ── DOM refs ──
const audio = document.getElementById('audio');
const barFill = document.querySelector('.bar__fill');
const bar = document.querySelector('.bar');
const cursor = document.querySelector('.custom-cursor');
const scrollContainer = document.querySelector('.scroll-container');
const sections = document.querySelectorAll('.album-section');

// ── State ──
let activeAlbum = 0;
let currentIndex = -1;
let isPlaying = false;
let hoveredIndex = -1;

// ── Scramble ──
const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*_`"\'.:;/\\|';
const SCRAMBLE_INTERVAL = 94;
let scrambleTimer = null;

function getTrackEls(albumIdx) {
  return sections[albumIdx].querySelectorAll('.album-section__track');
}

// Only Artificiale (album 1) gets scrambled titles
const SCRAMBLE_ALBUMS = [1];

function scrambleTick() {
  sections.forEach((section, albumIdx) => {
    if (!SCRAMBLE_ALBUMS.includes(albumIdx)) return;
    const trackEls = getTrackEls(albumIdx);
    const tracks = albums[albumIdx].tracks;
    trackEls.forEach((el, i) => {
      if (albumIdx === activeAlbum && (i === currentIndex || i === hoveredIndex)) return;
      const nameEl = el.querySelector('.album-section__track-name');
      const original = tracks[i].display;
      let scrambled = '';
      for (let c = 0; c < original.length; c++) {
        const ch = original[c];
        if (ch === ' ' || ch === '\u2002') {
          scrambled += ch;
        } else {
          scrambled += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }
      nameEl.textContent = scrambled;
    });
  });
}

function startScramble() {
  if (scrambleTimer) return;
  scrambleTimer = setInterval(scrambleTick, SCRAMBLE_INTERVAL);
  scrambleTick();
}

function stopScramble() {
  if (scrambleTimer) {
    clearInterval(scrambleTimer);
    scrambleTimer = null;
  }
  sections.forEach((section, albumIdx) => {
    const trackEls = getTrackEls(albumIdx);
    const tracks = albums[albumIdx].tracks;
    trackEls.forEach((el, i) => {
      el.querySelector('.album-section__track-name').textContent = tracks[i].display;
    });
  });
}

// Lock tracklist widths
sections.forEach((section) => {
  const tl = section.querySelector('.album-section__tracklist');
  if (tl) tl.style.width = tl.offsetWidth + 'px';
});

startScramble();

// ── Track management ──
function loadTrack(albumIdx, trackIdx) {
  if (albumIdx !== activeAlbum && currentIndex !== -1) {
    clearActiveTrack(activeAlbum);
  }
  activeAlbum = albumIdx;
  currentIndex = trackIdx;
  const t = albums[albumIdx].tracks[trackIdx];
  audio.src = encodeURIComponent(albums[albumIdx].folder) + '/' + encodeURIComponent(t.file);
  updateActiveTrack();
}

function clearActiveTrack(albumIdx) {
  const trackEls = getTrackEls(albumIdx);
  const tracks = albums[albumIdx].tracks;
  trackEls.forEach((el, i) => {
    el.classList.remove('album-section__track--active');
    const marker = el.querySelector('.album-section__track-marker');
    if (marker) marker.textContent = '';
    const durationEl = el.querySelector('.album-section__track-duration');
    if (durationEl) durationEl.textContent = tracks[i].duration;
  });
}

function updateActiveTrack() {
  sections.forEach((s, idx) => {
    if (idx !== activeAlbum) clearActiveTrack(idx);
  });

  const trackEls = getTrackEls(activeAlbum);
  const tracks = albums[activeAlbum].tracks;

  trackEls.forEach((el, i) => {
    const isActive = i === currentIndex;
    el.classList.toggle('album-section__track--active', isActive);

    const marker = el.querySelector('.album-section__track-marker');
    if (marker) marker.textContent = isActive ? '+' : '';

    if (isActive) {
      el.querySelector('.album-section__track-name').textContent = tracks[i].display;
    } else {
      const durationEl = el.querySelector('.album-section__track-duration');
      if (durationEl) durationEl.textContent = tracks[i].duration;
    }
  });
}

// ── Playback ──
function play() {
  audio.play();
  isPlaying = true;
  if (window.showBg) {
    window.showBg(activeAlbum);
  }
  updateCursorState();
}

function pause() {
  audio.pause();
  isPlaying = false;
  updateCursorState();
}

function togglePlay() {
  if (isPlaying) pause();
  else play();
}

// ── Cursor ──
function updateCursorState() {
  if (!cursor) return;
  cursor.classList.toggle('custom-cursor--paused', !isPlaying);
}

document.addEventListener('mousemove', (e) => {
  if (!cursor) return;
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// ── Dot cursor on artwork and tracks ──
document.querySelectorAll('.album-section__artwork').forEach((artwork) => {
  artwork.addEventListener('mouseenter', () => {
    if (cursor) cursor.classList.add('custom-cursor--dot');
  });
  artwork.addEventListener('mouseleave', () => {
    if (cursor) cursor.classList.remove('custom-cursor--dot');
  });
});

sections.forEach((section, albumIdx) => {
  const trackEls = getTrackEls(albumIdx);
  trackEls.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      if (cursor) cursor.classList.add('custom-cursor--dot');
      const idx = parseInt(el.dataset.index, 10);
      hoveredIndex = idx;
      el.querySelector('.album-section__track-name').textContent = albums[albumIdx].tracks[idx].display;
    });
    el.addEventListener('mouseleave', () => {
      if (cursor) cursor.classList.remove('custom-cursor--dot');
      hoveredIndex = -1;
    });
  });
});

// ── Cover lightbox ──
const lightbox = document.getElementById('cover-lightbox');
const lightboxImg = document.getElementById('cover-lightbox-img');

document.querySelectorAll('.album-section__artwork').forEach((artwork) => {
  artwork.addEventListener('click', (e) => {
    e.stopPropagation();
    const img = artwork.querySelector('.album-section__artwork-img');
    if (img) {
      lightboxImg.src = img.src;
      lightbox.classList.add('is-open');
    }
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('is-open');
});

// ── Click on section (play/pause) ──
sections.forEach((section, albumIdx) => {
  section.addEventListener('click', (e) => {
    if (e.target.closest('.album-section__track') || e.target.closest('.bar') || e.target.closest('.album-section__artwork')) return;

    if (activeAlbum !== albumIdx || currentIndex === -1 || !audio.src || audio.src === window.location.href) {
      loadTrack(albumIdx, 0);
      play();
    } else {
      togglePlay();
    }
  });
});

// ── Click on track ──
sections.forEach((section, albumIdx) => {
  const trackEls = getTrackEls(albumIdx);
  trackEls.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const index = parseInt(el.dataset.index, 10);
      loadTrack(albumIdx, index);
      play();
    });
  });
});

// ── Time formatting ──
function formatTime(seconds) {
  if (isNaN(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}

// ── Progress bar ──
audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    const pct = (audio.currentTime / audio.duration) * 100;
    barFill.style.width = pct + '%';

    if (currentIndex !== -1) {
      const trackEls = getTrackEls(activeAlbum);
      const activeTrackEl = trackEls[currentIndex];
      const durationEl = activeTrackEl.querySelector('.album-section__track-duration');
      if (durationEl) {
        const remaining = Math.max(0, audio.duration - audio.currentTime);
        durationEl.textContent = formatTime(remaining);
      }
    }
  }
});

// ── Seek bar ──
bar.addEventListener('click', (e) => {
  e.stopPropagation();
  if (!audio.duration) return;
  const rect = bar.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  audio.currentTime = pct * audio.duration;
});

// ── Auto-advance ──
audio.addEventListener('ended', () => {
  const tracks = albums[activeAlbum].tracks;
  if (currentIndex < tracks.length - 1) {
    loadTrack(activeAlbum, currentIndex + 1);
    play();
  } else {
    loadTrack(activeAlbum, 0);
    barFill.style.width = '0%';
    isPlaying = false;
    updateCursorState();
  }
});

// ── Scroll-based album switching ──
let lastScrollTop = 0;
scrollContainer.addEventListener('scroll', () => {
  const scrollTop = scrollContainer.scrollTop;
  const viewHeight = window.innerHeight;

  if (Math.abs(scrollTop - lastScrollTop) > 10 && isPlaying) {
    pause();
  }
  lastScrollTop = scrollTop;

  const newAlbum = Math.round(scrollTop / viewHeight);

  if (newAlbum !== activeAlbum && newAlbum >= 0 && newAlbum < albums.length) {
    if (isPlaying) pause();
    if (currentIndex !== -1) clearActiveTrack(activeAlbum);

    activeAlbum = newAlbum;
    currentIndex = -1;
    barFill.style.width = '0%';
    audio.src = '';

    if (window.showBg) window.showBg(newAlbum);
  }
});

// ── Keyboard controls ──
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    if (!audio.src || audio.src === window.location.href) {
      loadTrack(activeAlbum, 0);
      play();
    } else {
      togglePlay();
    }
  }
  if (e.code === 'ArrowRight') {
    e.preventDefault();
    const tracks = albums[activeAlbum].tracks;
    if (currentIndex < tracks.length - 1) {
      loadTrack(activeAlbum, currentIndex + 1);
      play();
    }
  }
  if (e.code === 'ArrowLeft') {
    e.preventDefault();
    if (window.slider && window.slider.classList.contains('show-player')) {
      window.slider.classList.remove('show-player');
      var mh = document.getElementById('main-header');
      if (mh) mh.classList.remove('player-active');
      if (window.customCursor) window.customCursor.classList.add('custom-cursor--dot');
      if (window.hideBgs) window.hideBgs();
      audio.pause();
      isPlaying = false;
      updateCursorState();
    }
  }
  if (e.code === 'ArrowDown') {
    e.preventDefault();
    if (activeAlbum < albums.length - 1) {
      scrollContainer.scrollTo({
        top: (activeAlbum + 1) * window.innerHeight,
        behavior: 'smooth'
      });
    }
  }
  if (e.code === 'ArrowUp') {
    e.preventDefault();
    if (activeAlbum > 0) {
      scrollContainer.scrollTo({
        top: (activeAlbum - 1) * window.innerHeight,
        behavior: 'smooth'
      });
    }
  }
});

// ── Duration preloading ──
function loadDurations() {
  albums.forEach((album, ai) => {
    album.tracks.forEach((t, ti) => {
      if (t._durLoaded) return;
      const a = new Audio();
      a.preload = 'metadata';
      a.src = encodeURIComponent(album.folder) + '/' + encodeURIComponent(t.file);
      a.addEventListener('loadedmetadata', () => {
        t._durLoaded = true;
        t.duration = formatTime(a.duration);
        const trackEls = getTrackEls(ai);
        if (trackEls[ti]) {
          const durationEl = trackEls[ti].querySelector('.album-section__track-duration');
          if (durationEl && !(ai === activeAlbum && ti === currentIndex)) {
            durationEl.textContent = t.duration;
          }
        }
      }, { once: true });
    });
  });
}

loadDurations();
