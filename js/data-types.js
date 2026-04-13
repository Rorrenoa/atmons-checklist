const TYPE_NAMES = [
  "Normal","Feuer","Wasser","Elektro","Pflanze","Eis",
  "Kampf","Gift","Boden","Flug","Psycho","Käfer",
  "Gestein","Geist","Drache","Unlicht","Stahl","Fee"
];
const TYPE_KEYS = [
  "normal","fire","water","electric","grass","ice",
  "fighting","poison","ground","flying","psychic","bug",
  "rock","ghost","dragon","dark","steel","fairy"
];
const TYPE_COLORS = {
  normal:"#a8a878",fire:"#f08030",water:"#6890f0",electric:"#f8d030",
  grass:"#78c850",ice:"#98d8d8",fighting:"#c03028",poison:"#a040a0",
  ground:"#e0c068",flying:"#a890f0",psychic:"#f85888",bug:"#a8b820",
  rock:"#b8a038",ghost:"#705898",dragon:"#7038f8",dark:"#705848",
  steel:"#b8b8d0",fairy:"#ee99ac"
};
// Row = attacker, Col = defender. 1=normal, 2=super, 0.5=resist, 0=immune
const TYPE_MATRIX = [
// Nor Fir Wat Ele Gra Ice Fig Poi Gro Fly Psy Bug Roc Gho Dra Dar Ste Fai
  [1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1, .5,  0,  1,  1, .5,  1], // Normal
  [1, .5, .5,  1,  2,  2,  1,  1,  1,  1,  1,  2, .5,  1, .5,  1,  2,  1], // Fire
  [1,  2, .5,  1, .5,  1,  1,  1,  2,  1,  1,  1,  2,  1, .5,  1,  1,  1], // Water
  [1,  1,  2, .5, .5,  1,  1,  1,  0,  2,  1,  1,  1,  1, .5,  1,  1,  1], // Electric
  [1, .5,  2,  1, .5,  1,  1, .5,  2, .5,  1, .5,  2,  1, .5,  1, .5,  1], // Grass
  [1, .5, .5,  1,  2, .5,  1,  1,  2,  2,  1,  1,  1,  1,  2,  1, .5,  1], // Ice
  [2,  1,  1,  1,  1,  2,  1, .5,  1, .5, .5, .5,  2,  0,  1,  2,  2, .5], // Fighting
  [1,  1,  1,  1,  2,  1,  1, .5, .5,  1,  1,  1, .5, .5,  1,  1,  0,  2], // Poison
  [1,  2,  1,  2, .5,  1,  1,  2,  1,  0,  1, .5,  2,  1,  1,  1,  2,  1], // Ground
  [1,  1,  1, .5,  2,  1,  2,  1,  1,  1,  1,  2, .5,  1,  1,  1, .5,  1], // Flying
  [1,  1,  1,  1,  1,  1,  2,  2,  1,  1, .5,  1,  1,  1,  1,  0, .5,  1], // Psychic
  [1, .5,  1,  1,  2,  1, .5, .5,  1, .5,  2,  1,  1, .5,  1,  2, .5, .5], // Bug
  [1,  2,  1,  1,  1,  2, .5,  1, .5,  2,  1,  2,  1,  1,  1,  1, .5,  1], // Rock
  [0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  2,  1,  1,  2,  1, .5,  1,  1], // Ghost
  [1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  2,  1, .5,  0], // Dragon
  [1,  1,  1,  1,  1,  1, .5,  1,  1,  1,  2,  1,  1,  2,  1, .5, .5, .5], // Dark
  [1, .5, .5, .5,  1,  2,  1,  1,  1,  1,  1,  1,  2,  1,  1,  1, .5,  2], // Steel
  [1, .5,  1,  1,  1,  1,  2, .5,  1,  1,  1,  1,  1,  1,  2,  2, .5,  1], // Fairy
];

function getTypeMatchups(typeIdx) {
  const atk = { super: [], resist: [], immune: [] };
  const def = { weak: [], resist: [], immune: [] };
  for (let i = 0; i < 18; i++) {
    // Attacking with this type
    const a = TYPE_MATRIX[typeIdx][i];
    if (a >= 2) atk.super.push({ idx: i, mult: a });
    else if (a > 0 && a < 1) atk.resist.push({ idx: i, mult: a });
    else if (a === 0) atk.immune.push({ idx: i, mult: 0 });
    // Defending as this type
    const d = TYPE_MATRIX[i][typeIdx];
    if (d >= 2) def.weak.push({ idx: i, mult: d });
    else if (d > 0 && d < 1) def.resist.push({ idx: i, mult: d });
    else if (d === 0) def.immune.push({ idx: i, mult: 0 });
  }
  return { atk, def };
}

function renderTypeChip(idx, mult) {
  const key = TYPE_KEYS[idx];
  const label = mult !== undefined ? `<span class="mult">×${mult}</span>` : '';
  return `<span class="type-matchup-chip" style="background:${TYPE_COLORS[key]}">${TYPE_NAMES[idx]}${label}</span>`;
}

function renderTypeChartContent(selectedIdx) {
  let html = `
    <p>Klicke auf einen Typ um seine <strong>Angriffs-Stärken</strong> und <strong>Verteidigungs-Schwächen</strong> zu sehen. Alle Werte entsprechen dem Standard-Pokémon-Typsystem (Gen 6+, 18 Typen).</p>
    <div class="type-grid">
  `;
  TYPE_KEYS.forEach((key, i) => {
    html += `<button class="type-btn ${selectedIdx === i ? 'active' : ''}" style="background:${TYPE_COLORS[key]}" onclick="selectType(${i})">${TYPE_NAMES[i]}</button>`;
  });
  html += `</div>`;

  if (selectedIdx !== null && selectedIdx !== undefined) {
    const m = getTypeMatchups(selectedIdx);
    const name = TYPE_NAMES[selectedIdx];

    html += `<div class="type-result-section">`;
    html += `<div class="type-result-title atk">⚔️ ${name} greift an:</div>`;

    if (m.atk.super.length) {
      html += `<p style="color:var(--green);font-size:0.875rem;margin:4px 0;">Super effektiv gegen:</p>`;
      html += `<div class="type-matchup-list">${m.atk.super.map(t => renderTypeChip(t.idx, t.mult)).join('')}</div>`;
    }
    if (m.atk.resist.length) {
      html += `<p style="color:var(--red);font-size:0.875rem;margin:4px 0;">Nicht sehr effektiv gegen:</p>`;
      html += `<div class="type-matchup-list">${m.atk.resist.map(t => renderTypeChip(t.idx, t.mult)).join('')}</div>`;
    }
    if (m.atk.immune.length) {
      html += `<p style="color:var(--text-dim);font-size:0.875rem;margin:4px 0;">Wirkungslos gegen:</p>`;
      html += `<div class="type-matchup-list">${m.atk.immune.map(t => renderTypeChip(t.idx, t.mult)).join('')}</div>`;
    }
    html += `</div>`;

    html += `<div class="type-result-section">`;
    html += `<div class="type-result-title def">🛡️ ${name} verteidigt:</div>`;

    if (m.def.weak.length) {
      html += `<p style="color:var(--red);font-size:0.875rem;margin:4px 0;">Schwach gegen (nimmt mehr Schaden):</p>`;
      html += `<div class="type-matchup-list">${m.def.weak.map(t => renderTypeChip(t.idx, t.mult)).join('')}</div>`;
    }
    if (m.def.resist.length) {
      html += `<p style="color:var(--green);font-size:0.875rem;margin:4px 0;">Resistent gegen (nimmt weniger Schaden):</p>`;
      html += `<div class="type-matchup-list">${m.def.resist.map(t => renderTypeChip(t.idx, t.mult)).join('')}</div>`;
    }
    if (m.def.immune.length) {
      html += `<p style="color:var(--text-dim);font-size:0.875rem;margin:4px 0;">Immun gegen (nimmt keinen Schaden):</p>`;
      html += `<div class="type-matchup-list">${m.def.immune.map(t => renderTypeChip(t.idx, t.mult)).join('')}</div>`;
    }
    html += `</div>`;

    html += `<div class="info" style="margin-top:16px;">
      <strong>Hinweis:</strong> Bei Pokémon mit <em>zwei Typen</em> werden die Multiplikatoren <em>multipliziert</em>. Ein Wasser/Flug-Pokémon (z.B. Ducklett) nimmt von Elektro ×2 (Wasser) × ×2 (Flug) = <strong>×4 Schaden</strong>. Ein Boden/Stahl-Pokémon ist gegen Elektro ×0 (Boden immun) × egal = <strong>×0</strong>.
    </div>`;
  } else {
    html += `<p style="color:var(--text-dim);text-align:center;margin:20px 0;">Wähle einen Typ oben aus um Stärken und Schwächen zu sehen.</p>`;
  }

  return html;
}

const RECIPES = {
  "workbench": {
    name: "Werkbank (Crafting Table)",
    grid: ["P","P","",  "P","P","",  "",  "",  ""],
    legend: { "P": "Planken (beliebig)" },
    note: "Vanilla — 4 Planken im 2×2 Feld."
  },
  "stone-pickaxe": {
    name: "Stein-Pickaxe",
    grid: ["C","C","C",  "",  "S","",  "",  "S",""],
    legend: { "C": "Cobblestone", "S": "Stick" },
    note: "Vanilla — schaltet in ATMons Kohle/Eisen/Kupfer/Tin/Aluminum/Lead frei."
  },
  "iron-pickaxe": {
    name: "Eisen-Pickaxe",
    grid: ["I","I","I",  "",  "S","",  "",  "S",""],
    legend: { "I": "Iron Ingot", "S": "Stick" },
    note: "Vanilla — schaltet Gold/Redstone/Lapis/Silver/Nickel/Diamant frei."
  },
  "diamond-pickaxe": {
    name: "Diamant-Pickaxe",
    grid: ["D","D","D",  "",  "S","",  "",  "S",""],
    legend: { "D": "Diamant", "S": "Stick" },
    note: "Vanilla — schaltet Osmium/Platinum/Zinc/Uranium/Obsidian frei."
  },
  "furnace": {
    name: "Ofen",
    grid: ["C","C","C",  "C","",  "C",  "C","C","C"],
    legend: { "C": "Cobblestone" },
    note: "Vanilla — 8 Cobble in Box-Form, Mitte leer."
  },
  "chest": {
    name: "Kiste",
    grid: ["P","P","P",  "P","",  "P",  "P","P","P"],
    legend: { "P": "Planken (beliebig)" },
    note: "Vanilla — 8 Planken in Box-Form."
  },
  "torch": {
    name: "Fackel",
    grid: ["",  "",  "",  "",  "C","",  "",  "S",""],
    legend: { "C": "Kohle (oder Holzkohle)", "S": "Stick" },
    note: "Vanilla — gibt 4 Fackeln."
  },
  "smithing-table": {
    name: "Smithing Table",
    grid: ["I","I","",  "P","P","",  "P","P",""],
    legend: { "I": "Iron Ingot", "P": "Planken (beliebig)" },
    note: "Vanilla — für Netherite-Upgrades (Diamant-Tool + Upgrade Template + Netherite Ingot)."
  },
};