/* ============================================================
   STATE & RENDERING
   ============================================================ */
const PATHS_BASE = [
  { id: "all",     label: "Alles",    icon: "📋" },
  { id: "base",    label: "Basis",    icon: "⚙️" },
  { id: "pokemon", label: "Pokémon",  icon: "🔴" },
  { id: "tech",    label: "Tech",     icon: "⚡" },
  { id: "endgame", label: "Endgame",  icon: "🌟" },
];
// Kampagne- und MA-Tab nur für Profil "Mike" — dynamisch in getActivePaths()
function getActivePaths() {
  const paths = [...PATHS_BASE];
  if (typeof state !== 'undefined' && state.currentProfile === 'Mike') {
    if (typeof CAMPAIGN_HTML !== 'undefined') {
      paths.push({ id: "kampagne", label: "Kampagne", icon: "🎯" });
    }
    if (typeof MA_HTML !== 'undefined') {
      paths.push({ id: "ma", label: "Mystical Agri", icon: "🌱" });
    }
  }
  return paths;
}

/* ============================================================
   STATE — mit Profil-Support (Multi-User im selben Browser)
   ============================================================ */
const STORAGE = {
  meta: 'atmons-checklist-v3:meta',           // { current, list: [...] }
  profile: name => `atmons-checklist-v3:profile:${name}`,
};
const DEFAULT_PROFILE = "Standard";

let state = {
  // Per-Profil State
  checked: {},
  collapsed: {},
  expanded: {},
  path: "all",
  search: "",
  // Globaler UI-State (nicht in localStorage)
  openGuide: null,
  openTerm: null,
  openRecipe: null,
  openTypeChart: false,
  selectedType: null,
  profilePanelOpen: false,
  // Profil-Verwaltung
  currentProfile: DEFAULT_PROFILE,
  profiles: [DEFAULT_PROFILE],
};

function loadMeta() {
  try {
    const raw = localStorage.getItem(STORAGE.meta);
    if (raw) {
      const d = JSON.parse(raw);
      if (Array.isArray(d.list) && d.list.length > 0) {
        state.profiles = d.list;
        state.currentProfile = d.current && d.list.includes(d.current) ? d.current : d.list[0];
        return;
      }
    }
  } catch(e) {}
  state.profiles = [DEFAULT_PROFILE];
  state.currentProfile = DEFAULT_PROFILE;
}

function saveMeta() {
  try {
    localStorage.setItem(STORAGE.meta, JSON.stringify({
      current: state.currentProfile,
      list: state.profiles,
    }));
  } catch(e) {}
}

function loadProfile(name) {
  try {
    const raw = localStorage.getItem(STORAGE.profile(name));
    if (raw) {
      const d = JSON.parse(raw);
      state.checked = d.c || {};
      state.collapsed = d.o || {};
      state.path = d.p || "all";
      state.expanded = {};
      return;
    }
  } catch(e) {}
  // Profil existiert nicht → leerer State
  state.checked = {};
  state.collapsed = {};
  state.expanded = {};
  state.path = "all";
}

function saveProfile() {
  try {
    localStorage.setItem(STORAGE.profile(state.currentProfile), JSON.stringify({
      c: state.checked,
      o: state.collapsed,
      p: state.path,
    }));
  } catch(e) {}
}

function migrateFromLegacy() {
  // v2 → v3: importiere alten Single-User-State als "Standard"-Profil
  try {
    const v2 = localStorage.getItem('atmons-checklist-v2');
    if (v2 && !localStorage.getItem(STORAGE.profile(DEFAULT_PROFILE))) {
      const d = JSON.parse(v2);
      localStorage.setItem(STORAGE.profile(DEFAULT_PROFILE), JSON.stringify({
        c: d.c || {},
        o: d.o || {},
        p: d.p || "all",
      }));
      return;
    }
    // v1 → v3
    const v1 = localStorage.getItem('atmons-checklist');
    if (v1 && !localStorage.getItem(STORAGE.profile(DEFAULT_PROFILE))) {
      const d = JSON.parse(v1);
      localStorage.setItem(STORAGE.profile(DEFAULT_PROFILE), JSON.stringify({
        c: d.c || {},
        o: d.o || {},
        p: "all",
      }));
    }
  } catch(e) {}
}

function load() {
  migrateFromLegacy();
  loadMeta();
  loadProfile(state.currentProfile);
}

function save() {
  saveProfile();
  saveMeta();
}

function sanitizeProfileName(name) {
  return (name || "").trim().slice(0, 30);
}

/* ============================================================
   Term/Recipe-Rendering Helpers
   ============================================================ */
// Transformiert {{term-key|Display Text}} → klickbare .term Span
// Transformiert {{recipe:recipe-key|Display Text}} → klickbare .term.recipe-term Span
function transformTerms(html) {
  if (!html) return html;
  return html
    .replace(/\{\{recipe:([\w-]+)\|([^}]+)\}\}/g, (m, key, label) => {
      if (!RECIPES[key]) return label;
      return `<button class="term recipe-term" onclick="openRecipe('${key}')" title="Rezept: ${RECIPES[key].name}">${label}</button>`;
    })
    .replace(/\{\{([\w-]+)\|([^}]+)\}\}/g, (m, key, label) => {
      if (!TERMS[key]) return label;
      return `<button class="term" onclick="openTerm('${key}')" title="${escapeAttr(TERMS[key].name)}: ${escapeAttr(stripHtml(TERMS[key].short))}">${label}</button>`;
    });
}

function stripHtml(s) {
  return String(s).replace(/<[^>]*>/g, '');
}

function renderRecipeGrid(key) {
  const r = RECIPES[key];
  if (!r) return '';
  const cells = r.grid.map((c, i) => {
    const content = c && c.trim() ? `<div class="recipe-cell filled">${c}</div>` : `<div class="recipe-cell empty"></div>`;
    return content;
  }).join('');
  const legend = Object.entries(r.legend || {}).map(([k, v]) =>
    `<span class="recipe-legend-item"><span class="recipe-legend-key">${k}</span>${escapeHtml(v)}</span>`
  ).join('');
  return `
    <div class="recipe-wrap">
      <div class="recipe-grid">${cells}</div>
      <div class="recipe-info">
        <div class="recipe-title">${escapeHtml(r.name)}</div>
        <div class="recipe-legend">${legend}</div>
        ${r.note ? `<div class="recipe-note">${escapeHtml(r.note)}</div>` : ''}
      </div>
    </div>
  `;
}

function matchesSearch(item, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  const text = (item.text || "").toLowerCase();
  const detail = (item.detail || "").toLowerCase();
  return text.includes(q) || detail.includes(q);
}

function highlightText(html, query) {
  if (!query) return html;
  const q = query.trim();
  if (!q) return html;
  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(${escaped})`, 'gi');
  // HTML-aware: nur Text zwischen Tags highlighten, Tags selbst unverändert lassen
  const parts = html.split(/(<[^>]+>)/);
  return parts.map(p => p.startsWith('<') ? p : p.replace(re, '<mark>$1</mark>')).join('');
}

function filteredPhases() {
  if (state.path === "kampagne") return []; // Kampagne-Tab zeigt keine Phasen
  if (state.path === "ma") return []; // MA-Tab zeigt keine Phasen
  return PHASES
    .filter(p => state.path === "all" || p.path === state.path)
    .map(p => ({
      ...p,
      items: p.items.filter(i => matchesSearch(i, state.search))
    }))
    .filter(p => p.items.length > 0);
}

function getPathStats(pathId) {
  let tot = 0, dn = 0;
  PHASES.forEach(p => {
    if (pathId !== "all" && p.path !== pathId) return;
    p.items.forEach(i => {
      tot++;
      if (state.checked[i.id]) dn++;
    });
  });
  return { tot, dn, pc: tot ? Math.round(dn / tot * 100) : 0 };
}

function getPhaseStats(phase) {
  const visible = phase.items;
  const tot = visible.length;
  const dn = visible.filter(i => state.checked[i.id]).length;
  const allTot = PHASES.find(p => p.id === phase.id).items.length;
  const allDn = PHASES.find(p => p.id === phase.id).items.filter(i => state.checked[i.id]).length;
  return { tot, dn, full: allDn === allTot, allTot, allDn };
}

/* Map a phase.id to the label of Teil A/B1/B2/C for section dividers */
function partForPhase(phase) {
  const n = parseInt(phase.id.replace('p', ''), 10);
  if (n <= 3)  return { key: "base",    label: "Teil A",  title: "Grundlagen" };
  if (n <= 8)  return { key: "pokemon", label: "Teil B1", title: "Pokémon-Pfad" };
  if (n <= 15) return { key: "tech",    label: "Teil B2", title: "Tech-Pfad" };
  return { key: "endgame", label: "Teil C", title: "Mittelspiel & Endgame" };
}

function renderProfilePanel() {
  const open = state.profilePanelOpen;
  let html = `
    <div class="profile-wrap">
      <button class="profile-btn ${open ? 'open' : ''}" onclick="toggleProfilePanel(event)">
        <span class="profile-btn-icon">👤</span>
        <span class="profile-btn-label">Profil</span>
        <span class="profile-btn-name">${escapeHtml(state.currentProfile)}</span>
        <span class="profile-btn-arrow">▼</span>
      </button>
      <div class="profile-panel ${open ? 'open' : ''}" onclick="event.stopPropagation()">
  `;
  state.profiles.forEach(name => {
    const isActive = name === state.currentProfile;
    html += `
      <button class="profile-item ${isActive ? 'active' : ''}" onclick="switchProfile('${escapeAttr(name)}')">
        <span class="profile-item-check">${isActive ? '✓' : ''}</span>
        <span class="profile-item-name">${escapeHtml(name)}</span>
        ${state.profiles.length > 1 && !isActive ? `<span class="profile-item-delete" onclick="deleteProfile(event, '${escapeAttr(name)}')" title="Profil löschen">×</span>` : ''}
      </button>
    `;
  });
  html += `
        <div class="profile-divider"></div>
        <form class="profile-new-form" onsubmit="createProfile(event)">
          <input type="text" class="profile-new-input" id="profile-new-input"
            placeholder="+ Neues Profil (Name eingeben)" maxlength="30" autocomplete="off">
          <button type="submit" class="profile-new-save">Anlegen</button>
        </form>
      </div>
    </div>
  `;
  return html;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}
function escapeAttr(s) {
  return String(s).replace(/['"\\]/g, '\\$&');
}

function render() {
  const app = document.getElementById('app');
  const phases = filteredPhases();
  const overall = getPathStats("all");
  const current = getPathStats(state.path);
  const pathInfo = getActivePaths().find(p => p.id === state.path) || getActivePaths()[0];
  let html = '';

  // Header (scrollt mit)
  html = `
    <div class="header">
      <span class="header-icon">📋</span>
      <div class="header-text">
        <h1>ATMons – Perfekter Start</h1>
        <p>Pokémon + Tech parallel · Klicke Items für Details</p>
      </div>
    </div>

    <div class="progress-wrap">
      <div class="progress-labels">
        <span class="progress-count">${overall.dn}/${overall.tot} insgesamt${state.path !== "all" ? ` · ${current.dn}/${current.tot} in ${pathInfo.label}` : ""}</span>
        <span class="progress-pct ${overall.pc===100?'done':''}">${overall.pc}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill ${overall.pc===100?'done':''}" style="width:${overall.pc}%"></div>
      </div>
    </div>
  `;

  // Profil-Selector (scrollt mit)
  html += renderProfilePanel();

  // Path Filter
  html += `<div class="path-filter">`;
  getActivePaths().forEach(p => {
    const s = getPathStats(p.id);
    html += `
      <button class="path-btn ${state.path === p.id ? 'active' : ''}" onclick="setPath('${p.id}')">
        ${p.icon} ${p.label}<span class="path-count">${s.dn}/${s.tot}</span>
      </button>
    `;
  });
  html += `</div>`;

  // Search
  html += `
    <div class="search-wrap">
      <span class="search-icon">🔍</span>
      <input type="text" class="search-input" id="search-input"
        placeholder="Suchen nach Item, Mod, Begriff..."
        value="${state.search.replace(/"/g, '&quot;')}"
        oninput="setSearch(this.value)">
      <button class="search-clear ${state.search ? 'show' : ''}" onclick="clearSearch()">✕</button>
    </div>
  `;

  // === STICKY Quick-Links START ===
  html += `<div class="sticky-ql">
    <div class="quick-links">
      <button class="ql-btn" onclick="openGuide('mining-tiers')">⛏️ Mining-Tiers</button>
      <button class="ql-btn" onclick="openGuide('ore-heights')">📐 Y-Höhen</button>
      <button class="ql-btn" onclick="openGuide('gen-changes')">🕹️ Änderungen seit Gen 1</button>
      <button class="ql-btn ql-highlight" onclick="openTypeChart()">⚔️ Typ-Tabelle</button>
      <button class="ql-btn" onclick="openGuide('pokeball-create')">🎾 Pokébälle</button>
      <button class="ql-btn" onclick="openGuide('level-cap')">🎖️ Level-Cap</button>
      <button class="ql-btn" onclick="openGuide('mekanism-ore')">⚙️ Ore-Processing</button>
      <button class="ql-btn" onclick="openGuide('alloys')">🔨 Alloys</button>
      <button class="ql-btn" onclick="openGuide('atm-star')">🌟 ATM Star</button>
    </div>
  </div>`;

  // Kampagne-Tab: zeigt den kompletten Walkthrough statt Phasen
  if (state.path === "kampagne" && typeof CAMPAIGN_HTML !== 'undefined') {
    html += CAMPAIGN_HTML;
    html += `
      <div class="reset-wrap">
        <button class="reset-btn" onclick="setPath('all')">← Zurück zur Checkliste</button>
      </div>
      <div class="footer">ATMons Checkliste · Daten werden lokal im Browser gespeichert</div>
    `;
    app.innerHTML = html;
    renderModal();
    return;
  }

  // Mystical Agriculture-Tab: zeigt den MA-Guide statt Phasen
  if (state.path === "ma" && typeof MA_HTML !== 'undefined') {
    html += MA_HTML;
    html += `
      <div class="reset-wrap">
        <button class="reset-btn" onclick="setPath('all')">← Zurück zur Checkliste</button>
      </div>
      <div class="footer">ATMons Checkliste · Daten werden lokal im Browser gespeichert</div>
    `;
    app.innerHTML = html;
    renderModal();
    return;
  }

  // Phases (normale Checklisten-Ansicht)
  if (phases.length === 0) {
    html += `
      <div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        Keine Einträge gefunden${state.search ? ` für "${state.search}"` : ""}.
      </div>
    `;
  } else {
    let lastPart = null;
    phases.forEach(phase => {
      const ps = getPhaseStats(phase);
      const shut = state.collapsed[phase.id] && !state.search;
      const part = partForPhase(phase);

      // Part divider — only when path == "all" and part changed
      if (state.path === "all" && !state.search && (!lastPart || lastPart.label !== part.label)) {
        html += `
          <div class="part-divider ${part.key}">
            <span class="part-label">${part.label}</span>
            <span class="part-title">${part.title}</span>
          </div>
        `;
        lastPart = part;
      }

      html += `
        <div class="phase ${ps.full ? 'done' : ''}">
          <button class="phase-header" onclick="togglePhase('${phase.id}')">
            <span class="phase-icon">${phase.icon}</span>
            <div class="phase-info">
              <span class="phase-title">${phase.title}</span>
              ${phase.desc ? `<span class="phase-desc">${phase.desc}</span>` : ''}
            </div>
            <span class="phase-badge">${ps.allDn}/${ps.allTot}</span>
            <span class="phase-arrow ${shut ? 'shut' : ''}">▼</span>
          </button>
      `;

      if (!shut) {
        html += `<div class="phase-items">`;
        phase.items.forEach(item => {
          const on = state.checked[item.id];
          const exp = state.expanded[item.id] || (!!state.search && item.detail);
          const labelHtml = state.search ? highlightText(item.text, state.search) : item.text;
          // Terms/Recipes transformieren dann optional highlighten (reihenfolge: transform → highlight)
          let detailHtml = item.detail ? transformTerms(item.detail) : '';
          if (state.search && detailHtml) detailHtml = highlightText(detailHtml, state.search);
          html += `
            <div class="item-row">
              <div class="item-main">
                <button class="item-check" onclick="toggleItem('${item.id}')">
                  <span class="checkbox ${on ? 'on' : ''}">${on ? '✓' : ''}</span>
                </button>
                <button class="item-text-btn" onclick="toggleExpand('${item.id}')">
                  <span class="item-label ${on ? 'on' : ''}">${labelHtml}</span>
                  ${item.detail ? `<span class="item-expand ${exp ? 'open' : ''}">▾</span>` : ''}
                </button>
              </div>
              ${exp && item.detail ? `
                <div class="item-detail">
                  ${detailHtml}
                  ${item.guide ? `<br><button class="item-guide-btn" onclick="openGuide('${item.guide}')">📖 Vollständiger Guide öffnen</button>` : ''}
                </div>
              ` : ''}
            </div>
          `;
        });
        html += `</div>`;
      }

      html += `</div>`;
    });
  }

  // Reset
  html += `
    <div class="reset-wrap">
      <button class="reset-btn" onclick="resetAll()">Fortschritt zurücksetzen</button>
    </div>
    <div class="footer">ATMons Checkliste · Daten werden lokal im Browser gespeichert</div>
  `;

  app.innerHTML = html;

  // Restore focus to search input if it was focused
  if (state.searchFocused) {
    const input = document.getElementById('search-input');
    if (input) {
      input.focus();
      const v = input.value;
      input.setSelectionRange(v.length, v.length);
    }
  }

  // Render modal if open
  renderModal();
}

function renderModal() {
  const overlay = document.getElementById('modal-overlay');
  const modal = document.getElementById('modal');
  // 1) Guide offen
  if (state.openGuide && GUIDES[state.openGuide]) {
    const g = GUIDES[state.openGuide];
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-header">
        <span class="modal-icon">${g.icon}</span>
        <span class="modal-title">${g.title}</span>
        <button class="modal-close" onclick="closeGuide()">×</button>
      </div>
      <div class="modal-body">${g.content}</div>
    `;
    overlay.classList.add('open');
    document.body.style.overflow = "hidden";
    return;
  }
  // 2) Term offen
  if (state.openTerm && TERMS[state.openTerm]) {
    const t = TERMS[state.openTerm];
    modal.className = 'modal term-modal';
    modal.innerHTML = `
      <div class="modal-header">
        <span class="modal-icon">💡</span>
        <span class="modal-title">${escapeHtml(t.name)}</span>
        <button class="modal-close" onclick="closeTerm()">×</button>
      </div>
      <div class="modal-body">
        <p style="color:var(--heading);font-size:1rem;margin-bottom:14px;">${t.short}</p>
        ${t.long || ''}
      </div>
    `;
    overlay.classList.add('open');
    document.body.style.overflow = "hidden";
    return;
  }
  // 3) Type Chart offen
  if (state.openTypeChart) {
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-header">
        <span class="modal-icon">⚔️</span>
        <span class="modal-title">Pokémon Typ-Tabelle</span>
        <button class="modal-close" onclick="closeTypeChart()">×</button>
      </div>
      <div class="modal-body">${renderTypeChartContent(state.selectedType)}</div>
    `;
    overlay.classList.add('open');
    document.body.style.overflow = "hidden";
    return;
  }
  // 4) Recipe offen
  if (state.openRecipe && RECIPES[state.openRecipe]) {
    const r = RECIPES[state.openRecipe];
    modal.className = 'modal term-modal';
    modal.innerHTML = `
      <div class="modal-header">
        <span class="modal-icon">🔨</span>
        <span class="modal-title">${escapeHtml(r.name)}</span>
        <button class="modal-close" onclick="closeRecipe()">×</button>
      </div>
      <div class="modal-body">
        ${renderRecipeGrid(state.openRecipe)}
        <p class="info" style="margin-top:14px;">Alle hier gezeigten Rezepte sind Vanilla-Minecraft-Rezepte — in ATMons unverändert. Für mod-spezifische Rezepte bitte in <strong>EMI</strong> nachschauen (Item suchen → Rechtsklick zeigt Rezept).</p>
      </div>
    `;
    overlay.classList.add('open');
    document.body.style.overflow = "hidden";
    return;
  }
  // Nichts offen
  overlay.classList.remove('open');
  modal.innerHTML = "";
  modal.className = 'modal';
  document.body.style.overflow = "";
}

window.toggleItem = function(id) {
  state.checked[id] = !state.checked[id];
  save();
  render();
};

window.togglePhase = function(id) {
  state.collapsed[id] = !state.collapsed[id];
  save();
  render();
};

window.toggleExpand = function(id) {
  state.expanded[id] = !state.expanded[id];
  render();
};

window.setPath = function(p) {
  state.path = p;
  save();
  render();
};

window.setSearch = function(s) {
  state.search = s;
  state.searchFocused = true;
  render();
  state.searchFocused = false;
};

window.clearSearch = function() {
  state.search = "";
  render();
};

window.openGuide = function(id) {
  state.openGuide = id;
  state.openTerm = null;
  state.openRecipe = null;
  state.openTypeChart = false;
  state.selectedType = null;
  renderModal();
};

window.openTypeChart = function() {
  state.openTypeChart = true;
  state.openGuide = null;
  state.openTerm = null;
  state.openRecipe = null;
  state.selectedType = null;
  renderModal();
};

window.selectType = function(idx) {
  state.selectedType = idx;
  renderModal();
};

window.closeTypeChart = function() {
  state.openTypeChart = false;
  state.selectedType = null;
  renderModal();
};

window.closeGuide = function() {
  state.openGuide = null;
  renderModal();
};

window.openTerm = function(key) {
  if (!TERMS[key]) return;
  state.openTerm = key;
  state.openGuide = null;
  state.openRecipe = null;
  renderModal();
};

window.closeTerm = function() {
  state.openTerm = null;
  renderModal();
};

window.openRecipe = function(key) {
  if (!RECIPES[key]) return;
  state.openRecipe = key;
  state.openGuide = null;
  state.openTerm = null;
  renderModal();
};

window.closeRecipe = function() {
  state.openRecipe = null;
  renderModal();
};

window.closeGuideFromOverlay = function(e) {
  if (e.target.id === 'modal-overlay') {
    closeGuide();
    closeTerm();
    closeRecipe();
    closeTypeChart();
  }
};

window.resetAll = function() {
  if (!confirm(`Wirklich ALLES im Profil "${state.currentProfile}" zurücksetzen? Andere Profile bleiben unberührt.`)) return;
  state.checked = {};
  state.collapsed = {};
  state.expanded = {};
  save();
  render();
};

/* ============================================================
   PROFIL-HANDLER
   ============================================================ */
window.toggleProfilePanel = function(e) {
  if (e) e.stopPropagation();
  state.profilePanelOpen = !state.profilePanelOpen;
  render();
  if (state.profilePanelOpen) {
    setTimeout(() => {
      const input = document.getElementById('profile-new-input');
      if (input) input.focus();
    }, 50);
  }
};

window.switchProfile = function(name) {
  if (!name || !state.profiles.includes(name)) return;
  save();  // aktuellen State speichern
  state.currentProfile = name;
  loadProfile(name);
  saveMeta();
  state.profilePanelOpen = false;
  state.expanded = {};
  render();
};

window.createProfile = function(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('profile-new-input');
  if (!input) return;
  const name = sanitizeProfileName(input.value);
  if (!name) {
    input.focus();
    return;
  }
  if (state.profiles.includes(name)) {
    alert(`Profil "${name}" existiert bereits.`);
    input.focus();
    return;
  }
  save();  // aktuellen State speichern
  state.profiles.push(name);
  state.currentProfile = name;
  // Leeres Profil initialisieren
  state.checked = {};
  state.collapsed = {};
  state.expanded = {};
  state.path = "all";
  state.search = "";
  save();
  saveMeta();
  state.profilePanelOpen = false;
  render();
};

window.deleteProfile = function(e, name) {
  if (e) e.stopPropagation();
  if (!name || name === state.currentProfile) return;
  if (!confirm(`Profil "${name}" wirklich löschen? Dieser Fortschritt wird unwiderruflich entfernt.`)) return;
  try {
    localStorage.removeItem(STORAGE.profile(name));
  } catch(err) {}
  state.profiles = state.profiles.filter(p => p !== name);
  saveMeta();
  render();
};

// Schließe Profil-Panel bei Klick außerhalb
document.addEventListener('click', (e) => {
  if (!state.profilePanelOpen) return;
  const wrap = e.target.closest('.profile-wrap');
  if (!wrap) {
    state.profilePanelOpen = false;
    render();
  }
});

// Keyboard: ESC to close modal or profile panel
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (state.openGuide) { closeGuide(); return; }
  if (state.openTerm) { closeTerm(); return; }
  if (state.openRecipe) { closeRecipe(); return; }
  if (state.openTypeChart) { closeTypeChart(); return; }
  if (state.profilePanelOpen) { state.profilePanelOpen = false; render(); }
});

load();
render();