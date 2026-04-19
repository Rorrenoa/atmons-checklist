/* ============================================================
   TERMS — Glossar für technische Begriffe (Tooltip + Modal)
   Verwendung im Text: {{term-key|Anzeige-Text}}
   ============================================================ */
const TERMS = {
  "silk-touch": {
    name: "Silk Touch",
    short: "Pickaxen-Verzauberung, die Blöcke <em>als Block selbst</em> droppt statt normale Drops.",
    long: `
      <h3>Wofür?</h3>
      <p><strong>Silk Touch</strong> ist eine Pickaxen-Verzauberung. Normalerweise droppt z.B. ein Iron Ore Block <em>Raw Iron</em>. Mit Silk Touch droppt stattdessen der <em>Iron Ore Block selbst</em>.</p>
      <h3>Warum wichtig in ATMons?</h3>
      <p>Mekanism's <em>Enrichment Chamber</em> verarbeitet Erz-<strong>Blöcke</strong> zu 2× Dust, aber Raw Ore nur zu 2× Raw-Items. Silk Touch → Block → Enrichment → 2× Dust → Smelter = <strong>2× Ingots</strong>. Ohne Silk Touch: weniger Output.</p>
      <h3>Wie bekommen?</h3>
      <p>Enchanting Table mit Büchern in Level 30 oder über Apothic Enchanting für höhere Tier. Alternativ Silent Gear Tools mit entsprechender Bindung.</p>
    `
  },
  "fortune": {
    name: "Fortune",
    short: "Verzauberung, die Drops von Erzen & Pflanzen <em>multipliziert</em>.",
    long: `
      <h3>Was macht Fortune?</h3>
      <p><strong>Fortune</strong> erhöht die Anzahl der Drops beim Abbauen von Erzen (Kohle, Diamant, Redstone, Lapis, Nether Quartz) und beim Ernten von Pflanzen. <em>Nicht</em> kompatibel mit Silk Touch auf derselben Pickaxe.</p>
      <h3>In ATMons bis Fortune 5 (!)</h3>
      <p>Vanilla endet bei Fortune 3. Mit <strong>EvilCraft Enchantment Extractor</strong> kannst du Enchants von Items auf Bücher ziehen und sie dann im Amboss kombinieren: 3+3=4, 4+4=5. Fortune 5 gibt massiv mehr Drops — deutlich schneller als reines Strip-Mining.</p>
    `
  },
  "worldgen-distribution": {
    name: "Verteilungs-Typ (Worldgen)",
    short: "Wie häufig ein Erz bei welcher Y-Höhe spawnt — Uniform (gleichverteilt), Triangle (Peak in der Mitte) oder Trapezoid (Plateau).",
    long: `
      <h3>Die 3 Worldgen-Verteilungstypen</h3>
      <p>In Minecraft 1.18+ spawnen Erze nach 3 Verteilungs-Formen:</p>
      <h3>Uniform</h3>
      <p>Überall im Y-Bereich <em>gleich wahrscheinlich</em>. Beispiel: Nether Quartz im Nether. Du findest genauso viel bei Y 20 wie bei Y 100.</p>
      <h3>Triangle</h3>
      <p>Die Wahrscheinlichkeit steigt zur <em>Mitte</em> hin an und fällt zu den Rändern ab. Visualisiert:</p>
      <pre style="font-family: 'Consolas',monospace; font-size:13px; line-height:1.3; color:var(--accent2); margin:8px 0;">
    .-'-.           ← Peak (beste Stelle)
   /     \\
  /       \\
 /         \\
└───────────┘ Y-Range</pre>
      <p>Beispiele:</p>
      <ul>
        <li><strong>Diamant</strong> (Vanilla): Y -64 bis 16, Peak bei Y <strong>-58</strong> (sehr tief)</li>
        <li><strong>Eisen Middle Band</strong>: Y -24 bis 56, Peak bei Y <strong>16</strong></li>
        <li><strong>Redstone</strong>: Y -64 bis 15, Peak bei Y <strong>-58</strong></li>
        <li><strong>Gold</strong>: Y -64 bis 32, Peak bei Y <strong>-16</strong></li>
      </ul>
      <p>Praktisch: am Peak-Y findest du die <em>meisten</em> Erze in kürzester Zeit.</p>
      <h3>Trapezoid</h3>
      <p>Wie Triangle, aber mit einem <em>Plateau</em> in der Mitte — gleichmäßig hohe Dichte über einen größeren Bereich. Einige AllTheOres-Erze (Uranium, Cinnabar, Iridium) nutzen diesen Typ in ATMons.</p>
      <div class="info"><strong>Praxis-Tipp:</strong> Wenn in der Tabelle "Peak" angegeben ist, ist das dein bester Strip-Mining-Y. Bei Uniform-Verteilung kannst du auf jedem Y im Bereich graben.</div>
    `
  },
  "silent-gear": {
    name: "Silent Gear",
    short: "Modulares Tool-/Rüstungs-System. Tools aus austauschbaren Teilen, die <em>nie endgültig brechen</em> und mit Repair Kits unendlich reparierbar sind.",
    long: `
      <h3>Wie funktioniert Silent Gear?</h3>
      <p><strong>Silent Gear</strong> ersetzt Vanilla-Crafting für Tools. Jedes Tool besteht aus Teilen:</p>
      <ul>
        <li><strong>Kopf</strong> (Pickaxe Head, Axe Head, etc.) — bestimmt Mining-Level, Speed, Durability</li>
        <li><strong>Stab/Rod</strong> — z.B. Stick, Bone, Allthemodium Rod — beeinflusst Durability</li>
        <li><strong>Bindung</strong> — mit Sinew, Leder, Wolle, etc.</li>
      </ul>
      <h3>Warum ist es so wertvoll?</h3>
      <p>1) Tools brechen <em>nie endgültig</em> — bei 0 Durability werden sie unbrauchbar, aber bleiben im Inventar.<br>
      2) <strong>Repair Kits</strong> befüllen Durability unbegrenzt oft.<br>
      3) <strong>Teile tauschen</strong> behält alle Verzauberungen! Stein-Kopf → Diamant-Kopf → Netherite-Kopf → Allthemodium-Kopf ohne die Fortune 5 zu verlieren.</p>
      <p>Fazit: Ein Silent Gear Tool ist <em>das</em> Tool für das ganze Spiel. Ein einziges mal verzaubert, immer wieder upgegradet.</p>
    `
  },
  "atmons-override": {
    name: "ATMons-Override",
    short: "Eine Einstellung / ein Rezept / ein Wert, den ATMons <em>per KubeJS oder Config</em> absichtlich vom Mod-Default abweichend gesetzt hat.",
    long: `
      <h3>Was heißt das?</h3>
      <p>Modpacks können Mod-Defaults anpassen — z.B. Rezepte entfernen, Ore-Spawns ändern, Config-Werte überschreiben. In ATMons liegen viele solcher Overrides in:</p>
      <ul>
        <li><code>kubejs/server_scripts/</code> — Runtime-Overrides (Rezepte, Events)</li>
        <li><code>kubejs/data/</code> — Datapack-Overrides (Tags, Loot, Worldgen)</li>
        <li><code>config/</code> — Mod-spezifische Configs</li>
      </ul>
      <h3>Beispiele in dieser Checkliste</h3>
      <ul>
        <li><strong>Uranium Ore Y-Range</strong>: Standard anders, in ATMons per <code>kubejs/data/alltheores/worldgen/placed_feature/ore_uranium_placed.json</code> auf Y -64 bis 16 gesetzt</li>
        <li><strong>Vibranium Biom-Restriction</strong>: per <code>data/atm10/tags/worldgen/biome/vibranium_spawnable.json</code> nur Crimson+Warped Forest</li>
        <li><strong>Pokéball-Rezepte</strong>: per <code>server_scripts/mods/Cobblemon/Recipes.js</code> komplett entfernt → neue Route über Create</li>
      </ul>
      <p>Wenn in der Checkliste "ATMons-Override" steht, ist das eine <em>verifizierte</em> Anpassung des Packs — kein Mod-Standard.</p>
    `
  },
  "mining-dimension": {
    name: "Mining Dimension",
    short: "Eine separate, leere Dimension <em>nur zum Mining</em>. Keine Mobs, aber viele Erze mit eigenen Y-Verteilungen.",
    long: `
      <h3>Was ist das?</h3>
      <p>Die <strong>Mining Dimension</strong> kommt aus der <em>Allthemodium</em>-Mod. Eine künstliche Dimension ohne feindliche Mobs, die speziell zum Farming von Erzen gedacht ist.</p>
      <h3>Wie reinkommen?</h3>
      <p>Du brauchst ein <strong>Teleport Pad</strong>, craftbar aus <em>Allthemodium Nuggets</em> (also erst nach Netherite-Pickaxe → erstes Allthemodium im Deep Dark oder per Portal). Pad in der Overworld platzieren, drauftreten → Mining Dim.</p>
      <h3>Warum so wichtig?</h3>
      <ul>
        <li><strong>Keine Mobs</strong> — kein Sterben, keine Unterbrechung</li>
        <li><strong>Extra-Erze</strong> — Mystical Agriculture (Inferium, Prosperity), Powah (Uraninite), Forbidden Arcanus (Runic, Arcane Crystal) spawnen <em>nur</em> hier reichhaltig</li>
        <li><strong>Andere Y-Ranges</strong> — Allthemodium z.B. Y 65–128 (viel leichter zu finden als im Deep Dark)</li>
      </ul>
      <p>Die Mining Dim ist <em>die</em> Endgame-Farming-Location in ATMons.</p>
    `
  },
  "deep-dark": {
    name: "Deep Dark Biome",
    short: "Vanilla Minecraft 1.19+ Biom tief unter Y -40. Enthält Sculk, Warden, Ancient City — in ATMons zusätzlich <em>Allthemodium Ore</em>.",
    long: `
      <h3>Wo finden?</h3>
      <p>Der <strong>Deep Dark Biome</strong> spawnt in der <em>Overworld</em> unter Y -40, meist unter Gebirgen. Die Oberfläche ist mit Sculk bedeckt und hat einzigartige Geräusche/Licht.</p>
      <h3>Achtung: Warden!</h3>
      <p>Im Deep Dark spawnt der <strong>Warden</strong> wenn du Sculk Shriekers aktivierst. Der Warden ist einer der stärksten Mobs und kann dich praktisch einshotten. <em>Nicht</em> Sculk-Blöcke hetzen!</p>
      <h3>In ATMons</h3>
      <p>Per kubejs Biome-Tag ist <strong>Allthemodium Ore</strong> in der Overworld <em>ausschließlich</em> hier zu finden. Ore glüht blau-grün — gut sichtbar. Allthemodium in der Mining Dim ist allerdings deutlich einfacher zu farmen.</p>
    `
  },
  "ftb-ultimine": {
    name: "FTB Ultimine",
    short: "Vein-Mining-Mod: Taste halten + abbauen → alle verbundenen gleichen Blöcke brechen auf einmal.",
    long: `
      <h3>Benutzung</h3>
      <p>Standard-Taste ist <code>~</code> (Grave-Key, links von der <code>1</code>). <strong>Halten + Block abbauen</strong> = alle verbundenen gleichen Blöcke werden mit abgebaut. Perfekt für Bäume, Erz-Adern und Tunnel.</p>
      <h3>Shape-Modus</h3>
      <p>Im FTB-Menü (Einstellungen) kannst du die Shape ändern: <em>Default</em> (verbundene Blöcke), <em>Tunnel 3×3</em>, <em>Cube</em>, etc. Mit Shift+Scroll im Spiel die Shape wechseln (falls Keybind gesetzt).</p>
      <h3>Wichtig: Hunger</h3>
      <p>Ultimine verbraucht Hunger pro abgebautem Block. Mit vielen Blöcken auf einmal geht Hunger schnell weg — vorher essen (am besten etwas mit <em>Nourishment</em>-Buff).</p>
    `
  },
  "curio-slot": {
    name: "Curio-Slot",
    short: "Zusätzliche Ausrüstungs-Slots neben der Rüstung (Ringe, Ketten, Charms, etc.), die <em>passive Boni</em> geben.",
    long: `
      <h3>Was ist ein Curio?</h3>
      <p>Die <strong>Curios</strong>-Mod fügt 7+ zusätzliche Slots neben dem Inventar hinzu: Ring, Ring, Necklace, Belt, Charm, Cape, Back, Head-Curio, etc. Jeder Slot nimmt spezifische Items an (nicht alles passt in jeden Slot).</p>
      <h3>Beispiele in ATMons</h3>
      <ul>
        <li><strong>Crafting Table on a Stick</strong> — Curio gibt dir jederzeit per Rechtsklick eine Werkbank</li>
        <li><strong>Free Runners</strong> (Mekanism) — kein Fallschaden + Step-Assist</li>
        <li><strong>Relics / Artifacts</strong> — mächtige Ringe/Charms aus Dungeons (z.B. Ring des Flugs)</li>
        <li><strong>Elytra</strong> (via Caelus Mod) — als Cape-Curio statt im Chestplate-Slot</li>
      </ul>
      <p>Im Inventar findest du den Curio-Knopf links — darüber klappst du das Curio-Panel auf.</p>
    `
  },
  "nourishment": {
    name: "Nourishment (Buff)",
    short: "Farmer's Delight Buff: solange aktiv verlierst du <em>keinen Hunger</em> durch Sprinten, Springen, Kämpfen.",
    long: `
      <h3>Was macht der Buff?</h3>
      <p><strong>Nourishment</strong> ist ein Buff aus der <em>Farmer's Delight</em>-Mod. Aktiv: du brauchst deutlich seltener zu essen, weil kein Hunger-Drain. Dauer: 1–5 Minuten je nach Gericht.</p>
      <h3>Wie bekommen?</h3>
      <p><strong>Plated Meals</strong> (auf Tellern serviert) geben immer Nourishment. Beispiele: Beef Stew auf Teller, Roast Chicken Platter, Steak and Potatoes. Rezepte im Cooking Pot + Teller kombinieren.</p>
      <p>Fazit: Die beste Essen-QoL im ganzen Pack. Ein Plate-Meal am Morgen hält dich fast einen ganzen Tag ohne Hunger-Probleme.</p>
    `
  },
  "sequenced-assembly": {
    name: "Create Sequenced Assembly",
    short: "Automatisierte Multi-Schritt-Crafting-Linie in Create: Item läuft auf Conveyor Belt durch mehrere Stationen und wird Schritt für Schritt veredelt.",
    long: `
      <h3>Wozu?</h3>
      <p>Manche Items erfordern mehrere Bearbeitungs-Schritte. Mit <strong>Create Sequenced Assembly</strong> baust du eine Fließband-Kette, die jedes Werkstück nacheinander durch alle Stationen schiebt.</p>
      <h3>Aufbau</h3>
      <ol>
        <li><strong>Depot</strong> am Anfang mit dem Input-Item</li>
        <li><strong>Conveyor Belts</strong> transportieren das Werkstück</li>
        <li><strong>Deployer</strong> oberhalb klicken jeweils ein Zutaten-Item drauf</li>
        <li><strong>Mechanical Press</strong> presst / finalisiert</li>
        <li><strong>Ausgabe-Depot</strong> am Ende mit Chute in deine Kiste</li>
      </ol>
      <h3>In ATMons</h3>
      <p>Pokébälle werden über Sequenced Assembly produziert (Mod <em>createcobblemonballsoverhaul</em>). Die Standard-Crafting-Rezepte für Pokébälle sind per KubeJS entfernt — es gibt <em>nur</em> die Create-Route.</p>
    `
  },
  "enrichment-chamber": {
    name: "Enrichment Chamber (Mekanism)",
    short: "Mekanism-Maschine die Erz-Blöcke zu 2× Dust macht. Eine der wichtigsten Maschinen — verdoppelt deinen Erz-Output.",
    long: `
      <h3>Was macht sie?</h3>
      <p>Input: <strong>Erz-Block</strong> (mit Silk Touch abgebaut) oder Raw Ore. Output: <strong>2× Dust</strong>. Dust dann im Smelter zu Ingots verbrannt → <em>doppelte Ausbeute</em>.</p>
      <h3>Andere Anwendungen</h3>
      <ul>
        <li><strong>Kohle → Enriched Coal</strong> (8× mehr Infuse Units)</li>
        <li><strong>Redstone → Enriched Redstone</strong> (8× mehr)</li>
        <li><strong>Obsidian → Refined Obsidian Dust</strong></li>
      </ul>
      <h3>Skalierung</h3>
      <p>Höhere Mekanism-Tiers gehen weiter: Purification Chamber (3×), Chemical Injection Chamber (4×), Chemical Dissolution Chamber (5× via Slurries). Enrichment Chamber ist der Einstieg in diese Kette.</p>
    `
  },
  "metallurgic-infuser": {
    name: "Metallurgic Infuser",
    short: "Mekanism-Maschine die mit Infuse Units (z.B. Carbon) Metalle aufwertet. Hauptsächlich: Iron → Enriched Iron → Steel.",
    long: `
      <h3>Funktion</h3>
      <p>Der <strong>Metallurgic Infuser</strong> braucht <em>Infuse Units</em>. Diese stammen aus Materialien die im violetten Slot verbrannt werden:</p>
      <ul>
        <li><strong>Kohle/Holzkohle</strong> → Carbon (für Enriched Iron / Steel)</li>
        <li><strong>Redstone</strong> → Redstone (für Enriched Alloy)</li>
        <li><strong>Bio Fuel</strong> → Bio</li>
        <li><strong>Obsidian Dust</strong> → Refined Obsidian</li>
      </ul>
      <h3>Wichtig: vorher enrichen!</h3>
      <p>Enriched Coal/Redstone (aus der Enrichment Chamber) gibt <strong>8× mehr Infuse Units</strong> als die Rohform. Das spart enorm Material beim Steel-Herstellen.</p>
    `
  },
  "me-system": {
    name: "ME System (AE2)",
    short: "Applied Energistics 2 Storage-Netzwerk: alle Items digital in ME-Drives, zentral durchsuchbar, Auto-Crafting-fähig.",
    long: `
      <h3>Was ist das?</h3>
      <p><strong>ME (Matter Energy) System</strong> aus <em>Applied Energistics 2</em>. Statt 100 Kisten mit Items hast du einen zentralen Computer mit <em>Storage Cells</em>, der alle Items "digital" lagert und über Terminals abrufbar macht.</p>
      <h3>Minimales Setup</h3>
      <ul>
        <li><strong>Energy Acceptor</strong> — nimmt FE rein</li>
        <li><strong>ME Controller</strong> — das "Herz" des Systems</li>
        <li><strong>ME Glass Cable</strong> — verbindet alles</li>
        <li><strong>ME Drive</strong> + <strong>Storage Cells</strong> (1k–64k) — die Speicher-Slots</li>
        <li><strong>ME Crafting Terminal</strong> — dein UI zum Suchen und Craften</li>
      </ul>
      <h3>Import/Export Bus</h3>
      <p><strong>Import Bus</strong> an einem Maschinenausgang = Items automatisch ins ME. <strong>Export Bus</strong> an einem Input = ME → Maschine. Damit automatisierst du jede Prozesskette.</p>
      <h3>Endgame: Auto-Crafting</h3>
      <p>Mit Crafting CPUs und Patterns kann das ME-System komplette Rezepte autonom bauen. Du klickst "Craft 64 Electrum Ingots" → Netzwerk sammelt Materialien, fährt die Maschinen, liefert das Ergebnis.</p>
    `
  },
  "certus-quartz": {
    name: "Certus Quartz",
    short: "Seltener Kristall (Applied Energistics 2). Basis für alle AE2-Komponenten. Spawnt im Deepslate-Layer und in Meteoriten.",
    long: `
      <h3>Wo finden?</h3>
      <p><strong>Certus Quartz Ore</strong> spawnt als normales Erz in der Overworld (Deepslate-Layer, Y ~-16 bis 32). Zusätzlich findest du es in den <em>Meteoriten-Kratern</em> die über den <strong>Meteorite Compass</strong> gefunden werden.</p>
      <h3>Budding Certus Block</h3>
      <p>Aus <em>Flawless</em> Certus Quartz Crystals craftbar (mehrere pro Stück). Wie Amethyst-Geoden wachsen hier Kristalle nach. Mit <strong>Crystal Growth Accelerators</strong> daneben geht's deutlich schneller. Fortune beim Ernten erhöht Ausbeute.</p>
    `
  },
  "meteorite": {
    name: "Meteorit (AE2)",
    short: "Oberflächen-Krater in der Overworld mit einer Sky Stone Chest im Zentrum — enthält die 4 einzigartigen Inscriber Presses.",
    long: `
      <h3>Finden</h3>
      <p>Mit dem <strong>Meteorite Compass</strong> (Eisen + Certus Quartz) — zeigt zum nächsten Meteoriten. Meteoriten sind <em>große Krater</em> mit Sky Stone — gut sichtbar in offenen Biomen.</p>
      <h3>Was ist drin?</h3>
      <p>Im Zentrum liegt eine <strong>Sky Stone Chest</strong> mit den 4 einzigartigen <em>Inscriber Presses</em>:</p>
      <ul>
        <li><strong>Calculation Press</strong></li>
        <li><strong>Engineering Press</strong></li>
        <li><strong>Logic Press</strong></li>
        <li><strong>Silicon Press</strong></li>
      </ul>
      <p>Ohne diese Presses kannst du keinen Inscriber bauen — sie sind <em>zwingend</em> für AE2-Progression. Mehrere Meteoriten abklappern für Backup-Presses und Sky Stone zum Bauen.</p>
    `
  },
  "budding-certus": {
    name: "Budding Certus Block",
    short: "Ein spezieller Block, an dem Certus Quartz Kristalle nachwachsen — AE2's Farm-Methode für Kristalle.",
    long: `
      <h3>Wie funktioniert's?</h3>
      <p>Ähnlich wie Amethyst-Geoden: <strong>Budding Certus</strong>-Blöcke lassen Kristalle aus ihren Seiten wachsen. Kristalle durchlaufen 4 Wachstumsstufen, bei der letzten <strong>Flawless</strong>-Stufe kannst du sie abbauen.</p>
      <h3>Crystal Growth Accelerator</h3>
      <p>Ein AE2-Block der direkt am Budding Certus platziert wird und das Wachstum <em>drastisch</em> beschleunigt. Braucht Energie. Je mehr Accelerators rundum, desto schneller.</p>
      <h3>Fortune!</h3>
      <p>Beim Abbauen der Flawless-Kristalle: mit <strong>Fortune 3</strong> bekommst du deutlich mehr Shards pro Kristall.</p>
    `
  },
  "ancient-debris": {
    name: "Ancient Debris",
    short: "Vanilla Netherite-Vorprodukt. Im Nether bei Y 8–22 (Peak Y 15). 4 Debris im Ofen → 4 Netherite Scrap → 1 Ingot mit 4 Gold.",
    long: `
      <h3>Finden</h3>
      <p>Ancient Debris spawnt im <strong>Nether</strong> zwischen <strong>Y 8 und Y 22</strong>, Peak bei <strong>Y 15</strong>. Braucht <em>Diamant-Pickaxe</em> (Vanilla Behavior). Blockform sieht wie Netherrack mit goldenem Muster aus.</p>
      <h3>Effiziente Methoden</h3>
      <ul>
        <li><strong>Bed-Mining</strong>: Betten explodieren im Nether. In einen 2-Block-Tunnel ein Bett platzieren, Abstand halten, rechtsklicken → 3×3-Explosion. Gefährlich aber effizient.</li>
        <li><strong>TNT-Mining</strong>: Ähnlich, mit TNT-Ketten</li>
        <li><strong>FTB Ultimine Tunnel-Mode</strong>: sicherer, langsamer</li>
      </ul>
      <h3>Verarbeitung</h3>
      <p>1 Ancient Debris → Ofen → 1 Netherite Scrap. 4 Scrap + 4 Gold Ingots im Crafting Grid → 1 Netherite Ingot. Tools/Rüstung upgraden am <strong>Smithing Table</strong> mit <em>Netherite Upgrade Template</em> (aus Bastions).</p>
    `
  },
  "bed-mining": {
    name: "Bed-Mining",
    short: "Im Nether explodieren Betten beim Rechtsklicken — 3×3×3 Explosion. Schnelle Methode für Ancient Debris.",
    long: `
      <h3>Technik</h3>
      <p>Im Nether, End oder in anderen non-Overworld Dimensionen explodieren Betten sobald man sie benutzt. Das ergibt eine <strong>Nether-TNT-artige Explosion</strong> — sehr effektiv um Ancient Debris freizulegen.</p>
      <h3>So macht man's</h3>
      <ol>
        <li>Einen langen 2-Block hohen Tunnel bei Y 15 graben</li>
        <li>Bett aufstellen</li>
        <li><em>Weit weggehen</em> und/oder Blasting Protection Rüstung tragen</li>
        <li>Rechtsklick via Projektil oder Redstone-Hebel</li>
      </ol>
      <div class="warn"><strong>Gefährlich!</strong> Die Explosion kann dich töten. Totem of Undying in der Off-Hand, volle Rüstung, lieber ein Bett mehr verbrauchen als einmal sterben.</div>
    `
  },
  "bastion": {
    name: "Bastion Remnant",
    short: "Große Nether-Struktur mit Piglins, Brutes und Loot (inkl. Netherite Upgrade Template + Piglichs in ATMons).",
    long: `
      <h3>Was ist das?</h3>
      <p>Vanilla Nether-Struktur aus schwarzem Blackstone. 4 Varianten: Housing Unit, Hoglin Stable, Treasure Room, Bridge. Jede mit eigenem Loot.</p>
      <h3>Loot</h3>
      <ul>
        <li><strong>Netherite Upgrade Template</strong> (braucht man für Netherite Tools/Armor!)</li>
        <li>Netherite Scrap, Diamanten, Gold-Blöcke</li>
        <li>Ancient Debris (rarely)</li>
      </ul>
      <h3>ATMons-spezifisch: Piglichs</h3>
      <p>In ATMons spawnen <strong>Piglichs</strong> (aus <em>Allthemodium</em> Mod) in Bastions. Sehr starke Mobs, aber droppen <strong>Piglich Hearts</strong> die du für die <em>Vibranium-Allthemodium Alloy Route</em> brauchst.</p>
    `
  },
  "pasture": {
    name: "Pasture",
    short: "Cobblemon-Block zum Lagern und Züchten von Pokémon. Bis zu 16 Mons pro Pasture. Kompatible Paare produzieren Eier.",
    long: `
      <h3>Funktion</h3>
      <p>Der <strong>Pasture Block</strong> ist Cobblemon's Zucht- und Lager-Station. Pokémon reinsetzen: sie laufen im Bereich frei rum, kompatible Paare (Gender, Egg-Group) produzieren Eier.</p>
      <h3>Zucht-Mechaniken in ATMons</h3>
      <ul>
        <li><strong>Breeding-Cooldown</strong>: 10 Minuten zwischen Zucht-Versuchen (Config)</li>
        <li><strong>Ei-Brutzeit</strong>: 6000 Ticks × Pokémon-Level</li>
        <li><strong>Flamebody/Magma Armor</strong>-Pokémon in der Nähe → schnelleres Brüten</li>
        <li><strong>Link Cable</strong> an ein Elternteil → gilt als "Tausch" → erhöhte Shiny-Chance</li>
        <li><strong>Redstone-Block unter Pasture</strong> → stoppt Ei-Produktion (zum kontrollierten Shiny-Breeding)</li>
      </ul>
    `
  },
  "link-cable": {
    name: "Link Cable",
    short: "Cobblemon Held Item das beim Ei-Legen als \"Tausch\" gewertet wird → erhöhte Shiny-Chance für das nächste Ei.",
    long: `
      <h3>Warum?</h3>
      <p>In den klassischen Pokémon-Spielen erhöht die <em>Masuda-Methode</em> (Zucht zweier Mons aus verschiedenen Spielen = "Tausch") die Shiny-Chance. Cobblemon simuliert das über das <strong>Link Cable</strong> als Held Item.</p>
      <h3>Anwendung in ATMons</h3>
      <p>Einem Elternteil im Pasture ein Link Cable als Held Item geben. Die nächsten Eier werden mit <em>deutlich erhöhter Shiny-Chance</em> gerollt — statt Standard 1/8192 deutlich öfter.</p>
      <p>Das Link Cable wird dabei <em>nicht verbraucht</em>. Einmal haben, immer haben.</p>
    `
  },
  "trainer-card": {
    name: "Trainer Card (RCT)",
    short: "Item der Radical Cobblemon Trainers Mod. Muss im Inventar sein, damit Trainer überhaupt spawnen!",
    long: `
      <h3>Warum so wichtig?</h3>
      <p>Die RCT-Config <code>rctmod-server.toml</code> hat <code>spawningRequiresTrainerCard=true</code>. Übersetzt: <strong>ohne Trainer Card im Inventar spawnen keine Trainer</strong>. Viele neue Spieler wundern sich warum sie keine Trainer sehen — das ist der Grund.</p>
      <h3>Funktionen</h3>
      <ul>
        <li>Rechtsklick: Menü mit Level-Cap, aktuelle Serie, nächster Key-Trainer</li>
        <li>Serie wählen (z.B. Radical Red, BDSP, Johto)</li>
        <li>Leuchtet wenn ein Key-Trainer in der Nähe ist</li>
        <li>Zeigt Pfeil zur nächsten Key-Trainer-Richtung</li>
      </ul>
      <p>Rezept in EMI prüfen (meist aus Papier + Eisen).</p>
    `
  },
  "level-cap": {
    name: "Level-Cap (RCT)",
    short: "Maximales Pokémon-Level in deinem Team. Steigt durch Key-Trainer-Siege. In ATMons relativ 0 = exakt Trainer-Level.",
    long: `
      <h3>Mechanik</h3>
      <p>Mit dem <strong>Level-Cap</strong>-System erzwingt RCT eine strukturierte Progression. Pokémon <em>am oder über</em> dem Cap bekommen <strong>keine XP</strong>. Trainer verweigern den Kampf wenn Pokémon über Cap dabei sind.</p>
      <h3>In ATMons konfiguriert</h3>
      <ul>
        <li><code>initialLevelCap: 15</code> → Start-Cap</li>
        <li><code>relativeLevelCap: 0</code> → nach einem Key-Trainer-Sieg steigt der Cap <em>exakt</em> auf das Level des höchsten Trainer-Pokémons</li>
      </ul>
      <h3>Freeroam</h3>
      <p>Der <em>Freeroam</em>-Modus (freies Mischen von Pokémon aus allen Serien) ist <strong>gesperrt</strong> bis du mindestens eine komplette Trainer-Serie durchgespielt hast. Das ist Absicht.</p>
    `
  },
  "cobblepedia": {
    name: "Cobblepedia",
    short: "In-Game Buch mit allen Pokémon-Details: Stats, Typen, Fähigkeiten, Moves, Spawn-Biome. Cobblemon's Pokédex-Ersatz.",
    long: `
      <h3>Nutzung</h3>
      <p><strong>Cobblepedia</strong> ist ein Patchouli-artiges Buch. Öffne es und blättere durch alle Pokémon: Suche, Filter nach Typ/Biome/Rarity, alle Details zu Moves und Fähigkeiten.</p>
      <p>Quelle: Quest-Belohnung im Early Game oder über Rezept (EMI prüfen).</p>
    `
  },
  "cobblenav": {
    name: "Cobblenav",
    short: "HUD-Overlay das dir alle Pokémon im Umkreis zeigt: Name, Level, Biome, Seltenheit.",
    long: `
      <h3>Wie benutzen?</h3>
      <p><strong>Cobblenav</strong> ist eine Mod die ein Overlay hinzufügt. Keybind drücken → Liste aller spawnbaren Pokémon im aktuellen Biom + Wahrscheinlichkeiten + Level-Ranges.</p>
      <p>Sehr nützlich um schnell zu sehen: "was kann hier spawnen?" — besonders wenn du ein spezielles Pokémon für dein Team suchst.</p>
    `
  },
  "raid-den": {
    name: "Raid Den",
    short: "Strukturen aus der <em>Cobblemon Raid Dens</em> Mod. Enthalten stärkere Pokémon-Kämpfe mit besseren Drops — inklusive seltener Master Ball-Chance.",
    long: `
      <h3>Funktion</h3>
      <p><strong>Raid Dens</strong> sind Strukturen in der Welt (meist unterirdisch) die als Multi-Stage-Pokémon-Encounter funktionieren. Du triffst auf ein besonders starkes Pokémon mit erhöhten Stats, oft einem seltenen Pool.</p>
      <h3>Loot</h3>
      <ul>
        <li>Rare Candy, Exp Candy XL</li>
        <li>Held Items (Choice Items, Life Orb etc.)</li>
        <li><strong>Master Ball</strong> (selten, aber eine der wenigen Quellen!)</li>
      </ul>
      <p>Neben <em>Battle Tower</em> die wichtigste Quelle für Master Balls.</p>
    `
  },
  "battle-tower": {
    name: "Battle Tower",
    short: "Mehrstöckige Kampf-Struktur. Durchlaufe Floor für Floor mit deinem Team. Belohnungen pro Floor, Jackpot oben (inkl. Master Ball-Chance).",
    long: `
      <h3>Funktion</h3>
      <p><strong>Cobblemon Battle Tower</strong>: eine hohe Turm-Struktur mit mehreren Floors. Jeder Floor = Kampf gegen einen Trainer mit zunehmend stärkerem Team. Zwischen Floors heilst du nicht automatisch.</p>
      <h3>Belohnungen</h3>
      <p>Pro erfolgreichem Floor: Belohnungs-Loot. Je höher desto besser. Am obersten Floor: <strong>Jackpot-Loot</strong> mit hoher Chance auf Master Ball, rare Held Items, Mega Stones.</p>
      <p>Neben <em>Raid Dens</em> die wichtigste Quelle für Master Balls.</p>
    `
  },
  "apricorn": {
    name: "Aprikoko",
    short: "Obstart von speziellen Cobblemon-Bäumen. 8 Farben, jede für andere Pokéball-Typen.",
    long: `
      <h3>8 Farben</h3>
      <p>In ATMons gibt es 8 Aprikoko-Farben: <strong>White, Yellow, Pink, Red, Green, Black, Blue, Brown</strong>. Jede Farbe = andere Pokéball-Art.</p>
      <h3>Biome-Verteilung</h3>
      <p>Aprikoko-Bäume sind biome-spezifisch und selten (10% Generation-Chance). Typische Biome:</p>
      <ul>
        <li><strong>Red</strong> → Savanna</li>
        <li><strong>Yellow</strong> → Desert / Sunflower Plains</li>
        <li><strong>Green</strong> → Jungle</li>
        <li><strong>Blue</strong> → Snowy Taiga</li>
        <li><strong>Pink</strong> → Cherry Grove</li>
        <li><strong>White</strong> → Plains / Forest</li>
        <li><strong>Black</strong> → Dark Forest</li>
        <li><strong>Brown</strong> → Old Growth Taiga</li>
      </ul>
      <h3>Automatisieren</h3>
      <p>Über die <strong>Pylons</strong>-Mod können Aprikoko-Bäume per Pylon automatisch geerntet werden — die Recipes liegen in <code>data/pylons/recipe/harvesting/cobblemon/</code>.</p>
    `
  },
  "mega-evolution": {
    name: "Mega Evolution",
    short: "Pokémon Gen 6 Mechanik (via Mega Showdown Mod): ausgewählte Pokémon können im Kampf mit einem Mega Stone als Held Item temporär stärker werden.",
    long: `
      <h3>Wie?</h3>
      <p>Die <strong>Mega Showdown</strong> Mod fügt Mega-Evolutions-Mechaniken aus Gen 6/7 hinzu. Damit Pokémon Mega-Evolvieren kann:</p>
      <ol>
        <li>Passender <strong>Mega Stone</strong> als Held Item (z.B. Charizardite X für Charizard → Mega Charizard X)</li>
        <li>Im Kampf aktiv triggern (Mega Evolution Button)</li>
      </ol>
      <p>Die Mega-Form ist nur während des Kampfes aktiv. Stats massiv erhöht, manchmal neue Ability.</p>
      <h3>Mega Stones finden</h3>
      <p>Aus Dungeons, Raid Dens, Battle Tower, Quest-Belohnungen. Selten aber wertvoll.</p>
    `
  },
  "infusion-altar": {
    name: "Infusion Altar",
    short: "Mystical Agriculture Multi-Block-Crafter: Altar + 8 Pedestals im Kreis. Crafted höhere Essence-Tiers, Samen und Equipment.",
    long: `
      <h3>Aufbau</h3>
      <p>Ein <strong>Infusion Altar</strong> in der Mitte, umringt von <strong>8 Infusion Pedestals</strong> im Kreis (1 Block Abstand). Items auf die Pedestals legen, Craft-Item im Altar, Rechtsklick = Infusion startet.</p>
      <h3>Wofür?</h3>
      <ul>
        <li>Essence-Tier-Upgrades: 4× Inferium → 1× Prudentium etc.</li>
        <li>Ressourcen-Samen: Iron Seeds, Gold Seeds, Diamond Seeds...</li>
        <li>Equipment: Supremium Tools, Armor, Charms</li>
      </ul>
      <h3>Growth Accelerator</h3>
      <p>Unter dem Farmland platziert beschleunigen <em>Growth Accelerators</em> (Inferium bis Supremium Tier) das Wachstum von Samen — stapelbar für noch schnelleres Farming.</p>
    `
  },
  "hephaestus-forge": {
    name: "Hephaestus Forge",
    short: "Forbidden Arcanus Multi-Block-Crafter. 5 Upgrade-Tiers. Tier 5 ist Pflicht für den ATM Star.",
    long: `
      <h3>Was ist das?</h3>
      <p>Die <strong>Hephaestus Forge</strong> (Forbidden Arcanus Mod) ist eine mehrstufige magische Crafting-Station. Je höher das Tier, desto mehr Ingredients und mächtigere Outputs.</p>
      <h3>5 Tiers</h3>
      <p>Tier 1–5, jedes Upgrade erfordert mehr Bau-Materialien (Darkstone Pedestals, Soul Lanterns, Quantum Injector, Arcane Crystal Blocks). <em>Tier 5</em> ist das Endgame-Level und <strong>Pflicht</strong> für eine der ATM-Star-Sub-Quests.</p>
      <h3>Wozu brauchst du's?</h3>
      <p>Craft bestimmter Custom-Items (Dark Runes, Eternal Stella, Arcane Golden Apple, etc.) die du in Quest-Chains oder als ATM-Star-Zutat benötigst.</p>
    `
  },
  "powah-energizing": {
    name: "Powah Energizing Orb",
    short: "Powah Multi-Block: ein Orb + mehrere Energizing Rods. Items laden unter extrem hohem FE-Verbrauch — für Vibranium-Allthemodium Alloy.",
    long: `
      <h3>Setup</h3>
      <p>Ein <strong>Energizing Orb</strong> in der Mitte, mehrere <strong>Energizing Rods</strong> drumherum als Input/Output. Items auf die Rods legen, Energie reinspeisen — Rezept wird gecraftet.</p>
      <h3>In ATMons</h3>
      <p>Eine der 3 Alloy-Routen für den ATM Star: <strong>Vibranium-Allthemodium</strong> via Energizing Orb mit <em>~1 Mrd FE</em> und <em>Piglich Hearts</em> als Katalysator. Der höchste Energie-Craft im Pack.</p>
    `
  },
  "ars-apparatus": {
    name: "Enchanting Apparatus (Ars Nouveau)",
    short: "Multi-Block-Crafter von Ars Nouveau: zentraler Apparatus + Arcane Pedestals drumherum. Braucht Source (Mana).",
    long: `
      <h3>Aufbau</h3>
      <p><strong>Enchanting Apparatus</strong> in der Mitte, umringt von <strong>Arcane Pedestals</strong>. Items auf Pedestals, Input-Item in den Apparatus, rechtsklicken. Braucht <em>Source</em> (Ars Nouveau Mana) aus Source Pools.</p>
      <h3>In ATMons</h3>
      <p>Eine der 3 Alloy-Routen: <strong>Unobtainium-Allthemodium</strong> via Apparatus mit <em>10.000 Source Cost</em>. Braucht große Source-Farm mit mehreren Sourcelinks.</p>
    `
  },
  "if-dissolution": {
    name: "Dissolution Chamber (Industrial Foregoing)",
    short: "Industrial Foregoing-Maschine die Items in Fluids auflöst und so custom Alloys produziert.",
    long: `
      <h3>Funktion</h3>
      <p>Die <strong>Dissolution Chamber</strong> ist eine Multi-Item-Crafting-Maschine in <em>Industrial Foregoing</em>. Items rein + Fluid als Katalysator + Energie → neue Items/Legierungen.</p>
      <h3>In ATMons</h3>
      <p>Eine der 3 Alloy-Routen: <strong>Unobtainium-Vibranium</strong> via Dissolution Chamber mit <em>Pink Slime</em> (aus Industrial Foregoing Mob Slaughter Factory) und <em>Soul Lava</em> als Katalysatoren.</p>
    `
  },
  "key-trainer": {
    name: "Key-Trainer (RCT)",
    short: "Besondere Trainer mit farbigen Namen. Ihr Sieg erhöht dein Level-Cap. Sie sind die Meilensteine der RCT-Progression.",
    long: `
      <h3>Wie erkennen?</h3>
      <p><strong>Key-Trainer</strong> haben <em>farbige Namen</em> über dem Kopf (statt weiß). Die <strong>Trainer Card</strong> leuchtet und zeigt einen Pfeil wenn ein Key-Trainer in der Nähe spawnt.</p>
      <h3>Level-Cap-Erhöhung</h3>
      <p>Mit <code>relativeLevelCap=0</code> in ATMons-Config: nach einem Sieg steigt dein Cap <em>exakt</em> auf das Level des höchsten Pokémons dieses Key-Trainers. Kein Puffer.</p>
      <h3>Trainer Spawner</h3>
      <p>Wenn das natürliche Spawning zu langsam ist, kannst du einen <strong>Trainer Spawner</strong>-Block craften (Rezept EMI), der gezielt Key-Trainer beschwört.</p>
    `
  },
  "master-ball": {
    name: "Master Ball",
    short: "Der beste Pokéball (100% Fangchance). In ATMons <em>nicht craftbar</em> — nur aus Raid Dens, Battle Tower oder Quests.",
    long: `
      <h3>Warum nicht craftbar?</h3>
      <p>Das Standard-Cobblemon-Rezept UND das Create-Sequenced-Assembly-Rezept sind in ATMons <em>per KubeJS entfernt</em> (<code>server_scripts/mods/Cobblemon/Recipes.js</code>). Master Balls sind absichtlich extrem selten.</p>
      <h3>Quellen</h3>
      <ul>
        <li><strong>Raid Dens</strong> — seltener Loot-Drop</li>
        <li><strong>Battle Tower</strong> — Jackpot-Loot oben</li>
        <li><strong>Quest-Belohnungen</strong> im Questbook</li>
        <li><strong>Endgame-Dungeon-Loot</strong></li>
      </ul>
      <h3>Wichtig fürs Endgame</h3>
      <p>Der <strong>ATM Star</strong> benötigt <em>2 Master Balls</em>. Fang früh an sie zu sammeln — der Flaschenhals im Endgame.</p>
    `
  },
  "create-deployer": {
    name: "Deployer (Create)",
    short: "Create Block der ein Item auf ein Ziel \"klickt\" (wie ein automatisierter Spieler). Kernstück der Sequenced Assembly.",
    long: `
      <h3>Funktion</h3>
      <p>Der <strong>Deployer</strong> simuliert einen Spieler-Rechtsklick. Er hält ein Item im Inventar-Slot und "benutzt" es auf den Block/das Item davor. Braucht Rotation von einer Create-Rotationsquelle.</p>
      <h3>Anwendungen</h3>
      <ul>
        <li>Items auf Sequenced Assembly Lines kombinieren</li>
        <li>Bäume fällen / Blöcke abbauen / Blöcke platzieren</li>
        <li>Werkbank-Rezepte crafting-auto</li>
        <li>Farmen von Tree-Crops</li>
      </ul>
    `
  },
  "create-press": {
    name: "Mechanical Press (Create)",
    short: "Create Block der Bleche (Sheets) aus Ingots presst und Sequenced-Assembly-Rezepte finalisiert.",
    long: `
      <h3>Funktion</h3>
      <p>Der <strong>Mechanical Press</strong> wird über einem Depot oder Belt platziert und presst das Item darunter. Braucht Rotation.</p>
      <h3>Nutzen</h3>
      <ul>
        <li>Iron Ingot → Iron Sheet</li>
        <li>Gold/Brass/Copper → Sheets</li>
        <li>Pressed Cobble → Plates</li>
        <li><strong>Sequenced Assembly finalisieren</strong> — der letzte Schritt in vielen Ketten</li>
      </ul>
    `
  },
  "fortune-5-extraction": {
    name: "Fortune 5 (EvilCraft)",
    short: "In ATMons kannst du mit EvilCraft Fortune bis Level 5 kombinieren. Massiv mehr Drops beim Mining.",
    long: `
      <h3>Wie?</h3>
      <p>Vanilla endet bei Fortune 3. In ATMons über den <strong>EvilCraft Enchantment Extractor</strong>:</p>
      <ol>
        <li>Items mit Fortune 3 sammeln (aus Enchanting Table / Loot)</li>
        <li>Enchantment Extractor benutzen: zieht Fortune auf ein leeres Buch</li>
        <li>Im Amboss: Fortune 3 + Fortune 3 = Fortune 4</li>
        <li>Fortune 4 + Fortune 4 = <strong>Fortune 5</strong></li>
      </ol>
      <h3>Impact</h3>
      <p>Fortune 5 gibt massiv mehr Drops beim Ore-Mining (besonders Diamond, Redstone, Lapis, Nether Quartz, Emerald, Copper). Für Farms absolutes Must-Have.</p>
    `
  },
  "flying-potion": {
    name: "Flying Potion (Apotheosis)",
    short: "Apotheosis-Mechanik: Potion-Upgrades → Flying Potion → permanenter Creative-Flug als Toggle.",
    long: `
      <h3>Der Weg</h3>
      <ol>
        <li><strong>Slow Falling Potion</strong> (Vanilla) brauen</li>
        <li>Zu <strong>Levitation Potion</strong> upgraden (über Apothic Mechanik)</li>
        <li>Zu <strong>Flying Potion</strong> upgraden</li>
        <li>Potion-Dauer verlängern (auf 30 Min → 1h+)</li>
      </ol>
      <h3>Resultat</h3>
      <p>Permanenter <em>Creative-artiger Flug</em> als Toggle. Besser als jedes Jetpack. Man kann ihn im Inventar ein- und ausschalten.</p>
    `
  },
  "apothic-enchanting": {
    name: "Apothic Enchanting",
    short: "Erweiterte Verzauberung mit Bücherregal-Tiers (Stone, Sculk, Pedestal). Ermöglicht Enchants über Vanilla-Level 30 hinaus.",
    long: `
      <h3>Was ist neu?</h3>
      <p>Apothic Enchanting (aus <em>Apotheosis</em>) erweitert das Enchantment-System:</p>
      <ul>
        <li><strong>Erweiterte Bücherregal-Tiers</strong>: Stone Bookshelves, Sculk, Pedestals</li>
        <li><strong>Enchants über Level 30</strong> möglich (bis 50+)</li>
        <li><strong>Enchanting Table Stats</strong> — sichtbar welches Level du erreichen kannst</li>
        <li><strong>Enchantment Modifier Seeds</strong> und Rerolls</li>
      </ul>
      <h3>Wofür wichtig?</h3>
      <p>Für High-Tier Silent Gear Builds brauchst du Enchants weit über Vanilla-Niveau. Apothic macht das möglich. Baue dir eine "Max Enchantment Station" mit allen Bookshelf-Typen.</p>
    `
  },
  "relics-artifacts": {
    name: "Relics & Artifacts (Mods)",
    short: "Zwei Mods für <em>mächtige Curio-Items</em> aus Dungeon-Loot. Oft game-changing: Flug, Damage-Boost, Heal-on-Hit, etc.",
    long: `
      <h3>Zwei Mods, ähnliches Konzept</h3>
      <p><strong>Relics</strong> und <strong>Artifacts</strong> sind separate Mods, die beide Curio-Items zur Welt hinzufügen. Items droppen aus Dungeons, Chests, Strukturen und Mobs.</p>
      <h3>Beispiele</h3>
      <ul>
        <li><strong>Flight Ring</strong> (Relics) — passiver Flug</li>
        <li><strong>Ring of the Forgotten Kingdoms</strong> — passive Stat-Boosts</li>
        <li><strong>Shockwave Ring</strong> — AoE Damage auf Hit</li>
        <li><strong>Infinity Ham</strong> — unendliches Essen</li>
      </ul>
      <p>Es lohnt sich sehr, Dungeons zu looten — manche Items sind <em>besser</em> als alles was du craften kannst.</p>
    `
  },
  "sky-stone-chest": {
    name: "Sky Stone Chest",
    short: "AE2 Loot-Kiste in Meteorit-Kratern. Enthält die 4 Inscriber Presses — unverzichtbar für AE2-Progression.",
    long: `
      <h3>Was drin?</h3>
      <p>Die <strong>Sky Stone Chest</strong> liegt im Zentrum jedes Meteorit-Kraters. Enthält garantiert die 4 <em>einzigartigen</em> Inscriber Presses:</p>
      <ul>
        <li>Calculation Press</li>
        <li>Engineering Press</li>
        <li>Logic Press</li>
        <li>Silicon Press</li>
      </ul>
      <p>Ohne diese Presses kein Inscriber → kein AE2. Mehrere Meteoriten abklappern gibt Backup-Presses + viel <em>Sky Stone</em> zum Bauen.</p>
    `
  },
  "powah-uraninite": {
    name: "Uraninite (Powah)",
    short: "Powahs radioaktives Erz. Brennstoff für alle Powah-Reaktoren. Spawnt tief (Y -64 bis 20) in 3 Varianten: poor, regular, dense.",
    long: `
      <h3>Was ist Uraninite?</h3>
      <p><strong>Uraninite</strong> ist Powahs eigener Brennstoff — unabhängig von Mekanism-Uranium. Das Erz spawnt in 3 Varianten:</p>
      <ul>
        <li><strong>Uraninite Ore Poor</strong> (Y -64 bis 0): droppt 1× Uraninite Raw</li>
        <li><strong>Uraninite Ore</strong> (Y -64 bis 20): droppt regular Raw → 5× Uraninite via Energizing</li>
        <li><strong>Uraninite Ore Dense</strong> (Y -64 bis 0, selten): droppt 10× Uraninite via Energizing</li>
      </ul>
      <h3>Verarbeitung</h3>
      <p>Roh-Uraninite wird im <em>Energizing Orb</em> veredelt (2.000–100.000 FE je nach Stufe). Das Item <strong>Uraninite</strong> ist was du in den Reactor füllst.</p>
      <h3>Alternative</h3>
      <p>Mekanism-Uranium-Ingots funktionieren auch: 1 Uranium-Ingot + 30.000 FE Energizing = 1 Uraninite. Via <em>Mystical Agriculture Uran-Seeds</em> komplett automatisierbar.</p>
    `
  },
  "powah-dielectric-paste": {
    name: "Dielectric Paste",
    short: "Powah-Grundmaterial. Rezept: 3× Coal + 2× Clay + 1× Lava Bucket → 24× Paste. Wird in fast jedem Powah-Rezept gebraucht.",
    long: `
      <h3>Rezept (shapeless)</h3>
      <p>3× <strong>Coal</strong> (oder Charcoal) + 2× <strong>Clay Ball</strong> + 1× <strong>Lava Bucket</strong> → <strong>24× Dielectric Paste</strong></p>
      <h3>Wofür?</h3>
      <p>Dielectric Paste ist die Basis für:</p>
      <ul>
        <li>Capacitors aller Stufen (8× Paste pro Capacitor-Crafting)</li>
        <li>Dielectric Rods (für Casings)</li>
        <li>Dielectric Casings (für Energizing Rods)</li>
      </ul>
      <p>Gesamtbedarf bis Nitro Reactor: geschätzt <strong>300+ Paste</strong> — früh eine Lava-Pipeline (Industrial Foregoing Pump oder Mekanism) einrichten lohnt sich.</p>
    `
  },
  "powah-energized-steel": {
    name: "Energized Steel",
    short: "Powahs Grundmetall. 1× Iron + 1× Gold im Energizing Orb (10.000 FE) → 2× Energized Steel. Wird für Rods und Hardened-Tier gebraucht.",
    long: `
      <h3>Energizing-Rezept</h3>
      <p>1× <strong>Iron Ingot</strong> + 1× <strong>Gold Ingot</strong> + <strong>10.000 FE</strong> im Energizing Orb → 2× <strong>Energized Steel</strong></p>
      <h3>Wofür?</h3>
      <ul>
        <li><strong>Energizing Rod Starter/Basic</strong> (eigenes Multiblock-Teil)</li>
        <li><strong>Capacitor Hardened</strong> (8× Energized Steel als b-Slot)</li>
        <li><strong>Energized Steel Block</strong> (9× für kompakten Storage)</li>
      </ul>
      <p><em>Das ist der kritische Bootstrap:</em> du brauchst den Energizing Orb, um Energized Steel zu machen, aber Energized Steel ist nicht nötig für den ersten Orb. Die minimale Orb-Version ist bereits mit Iron + Blaze Powder + Redstone baubar.</p>
    `
  },
  "powah-energizing-orb": {
    name: "Energizing Orb",
    short: "Powahs Multi-Block: 1× Orb (Kern) + 1–8 Energizing Rods rundherum. Lädt Items unter FE-Verbrauch auf. Für Kristalle, Uraninite und Crossmod-Crafts.",
    long: `
      <h3>Aufbau</h3>
      <p>1× <strong>Energizing Orb</strong> (Kern-Block) als Mittelpunkt. Rundherum (bis zu 8 Blöcke, in 9×9-Reichweite) werden <strong>Energizing Rods</strong> platziert.</p>
      <h3>Funktion</h3>
      <p>Du wirfst Items auf den Orb (per Hopper/Funnel/Trichter oder per Hand), lieferst FE an die Rods → Orb wandelt via Energizing-Rezept das Item um. Jede Rod liefert mehr Durchsatz.</p>
      <h3>Rod-Stufen</h3>
      <table>
        <tr><th>Rod-Typ</th><th>Kern-Zutat</th></tr>
        <tr><td>Starter</td><td>Redstone + Dielectric Paste</td></tr>
        <tr><td>Basic</td><td>Basic Capacitor</td></tr>
        <tr><td>Hardened</td><td>Hardened Capacitor</td></tr>
        <tr><td>Blazing</td><td>Blazing Capacitor</td></tr>
        <tr><td>Niotic</td><td>Niotic Capacitor</td></tr>
        <tr><td>Spirited</td><td>Spirited Capacitor</td></tr>
        <tr><td>Nitro</td><td>Nitro Capacitor</td></tr>
      </table>
      <p><strong>Wichtig:</strong> Je höher die Rod-Stufe, desto mehr FE/t kann der Orb verarbeiten. Für Nitro Crystal (20M FE pro Craft) brauchst du mindestens 4–8 hochstufige Rods, sonst dauert 1 Kristall Stunden.</p>
    `
  },
  "powah-crystal-chain": {
    name: "Powah Crystal-Kette",
    short: "Blazing → Niotic → Spirited → Nitro. Jeder Kristall wird im Energizing Orb aus der vorherigen Stufe + Zutaten geschmiedet. Nitro ist der Endgame-Crystal (20M FE pro Craft, 16× Output).",
    long: `
      <h3>Die 4 Kristall-Stufen</h3>
      <table>
        <tr><th>Kristall</th><th>Rezept</th><th>Energie</th><th>Output</th></tr>
        <tr><td><strong>Blazing</strong></td><td>1× Blaze Rod (oder 4× Blaze Powder)</td><td>120.000 FE</td><td>1</td></tr>
        <tr><td><strong>Niotic</strong></td><td>1× Diamond</td><td>300.000 FE</td><td>1</td></tr>
        <tr><td><strong>Spirited</strong></td><td>1× Emerald</td><td>1.000.000 FE</td><td>1</td></tr>
        <tr><td><strong>Nitro</strong></td><td>1× Nether Star + 2× Redstone Block + 1× Blazing Crystal Block</td><td>20.000.000 FE</td><td><strong>16!</strong></td></tr>
      </table>
      <h3>Nitro ist günstiger als es scheint</h3>
      <p>1 Craft = 16 Nitro Crystals, aber 1 Blazing Crystal Block = 9 Blazing Crystals. Effektiv pro Nitro: ~0,56 Blazing Crystals + 0,125 Redstone Blocks + 0,0625 Nether Stars. Der Bottleneck ist Nether Stars → <em>Wither-Farm via Apotheosis Spawner</em> ist Pflicht.</p>
    `
  },
  "powah-reactor-fuel": {
    name: "Reactor-Brennstoff (Powah)",
    short: "Powah-Reaktoren brauchen 3 Dinge: Uraninite (Fuel), Carbon (Heat-Source), optional Redstone (Accelerator).",
    long: `
      <h3>Die 3 Inputs</h3>
      <table>
        <tr><th>Input</th><th>Was?</th><th>Wirkung</th></tr>
        <tr><td><strong>Uraninite</strong></td><td>Item-Slot</td><td>Haupt-Brennstoff. Wird langsam verbraucht.</td></tr>
        <tr><td><strong>Carbon</strong></td><td>Item-Slot (Coal/Charcoal/Coal Block)</td><td>Erhöht <em>Carbon-Temp</em> → mehr Output.</td></tr>
        <tr><td><strong>Redstone</strong></td><td>Redstone-Dust Slot</td><td>Erhöht <em>Redstone-Temp</em> → schnellerer Uranium-Burn.</td></tr>
        <tr><td><strong>Solid Coolant</strong></td><td>Coolant-Slot (Ice/Packed Ice/Blue Ice)</td><td>Senkt Temp, verhindert Meltdown (es gibt keinen Meltdown, aber Overheating reduziert Output).</td></tr>
        <tr><td><strong>Fluid</strong></td><td>Fluid-Input</td><td>Optional Water/Lava → zusätzliche Kühlung/Heat. Wichtig für Max-Output.</td></tr>
      </table>
      <h3>Wichtig</h3>
      <p>Anders als Mekanism Fission gibt es <strong>keinen Meltdown</strong>. Der Reactor regelt sich selbst — bei zu hoher Temp drosselt er Output. Aber unter optimalen Bedingungen (hohe Carbon+Redstone-Temp, ausreichend Kühlung) läuft er auf maximalem FE/t.</p>
    `
  },
  "powah-reactor-nitro": {
    name: "Nitro Reactor (Multiblock)",
    short: "Powahs bester Generator. 500.000 FE/t default. Multiblock (3×4×5). Rezept: 4× Nitro Capacitor + 4× Spirited Reactor + 1× Uraninite → 4× Nitro Reactor.",
    long: `
      <h3>Output</h3>
      <p><strong>500.000 FE/t</strong> bei Vollauslastung (verifiziert in <code>powah.json5</code>). Speicher: <strong>500 MFE</strong>, Transfer: <strong>2 MFE/t</strong>.</p>
      <h3>Crafting</h3>
      <p>Pattern <code>rlr / lul / rlr</code> wie bei allen Powah-Reactor-Upgrades:</p>
      <ul>
        <li><strong>r</strong>: 4× Reactor (vorherige Stufe: Spirited)</li>
        <li><strong>l</strong>: 4× Nitro Capacitor</li>
        <li><strong>u</strong>: 1× Uraninite (Zentrum)</li>
      </ul>
      <p>Ergibt <strong>4× Nitro Reactor Parts</strong>. Die Parts werden dann als Multiblock zusammengesetzt.</p>
      <h3>Multiblock-Aufbau</h3>
      <p>Powah-Reaktoren brauchen ein festes Muster — am besten JEI/EMI mit "Nitro Reactor" öffnen und Pattern ansehen. Grob: Sockel-Schicht + Core-Schicht + Top-Schicht. Beim Rechtsklick mit <em>Reactor Core</em> aktiviert sich der Multiblock.</p>
      <h3>Skalierung</h3>
      <p>Baue 2–4 Nitro Reactors nebeneinander → 1–2 Millionen FE/t. Verbinde alles mit <em>Flux Networks</em> für wireless Distribution.</p>
    `
  },
  "powah-thermo-generator": {
    name: "Thermo Generator (Powah)",
    short: "Passiver Wärme-Generator. Braucht heißen Block (z.B. Lava) unter sich und kalten darüber. Nitro-Variante: 1.750 FE/t. Gut als Bootstrap, nicht als Endgame.",
    long: `
      <h3>Wie funktioniert das?</h3>
      <p>Ein <strong>Thermo Generator</strong> misst den Temperatur-Unterschied zwischen dem Block <em>unter</em> und <em>über</em> ihm. Je größer die Differenz, desto mehr FE/t.</p>
      <h3>Output-Raten (aus <code>powah.json5</code>)</h3>
      <table>
        <tr><th>Stufe</th><th>FE/t (max)</th></tr>
        <tr><td>Starter</td><td>20</td></tr>
        <tr><td>Basic</td><td>40</td></tr>
        <tr><td>Hardened</td><td>75</td></tr>
        <tr><td>Blazing</td><td>150</td></tr>
        <tr><td>Niotic</td><td>300</td></tr>
        <tr><td>Spirited</td><td>750</td></tr>
        <tr><td>Nitro</td><td>1.750</td></tr>
      </table>
      <h3>Bootstrap-Empfehlung</h3>
      <p>Für die ersten Energizing-Schritte reicht <strong>ein Thermo Generator Basic/Hardened</strong> auf Lava. Nach 1–2h hast du genug FE für Niotic/Spirited Kristalle. Später überflüssig.</p>
    `
  },
  "powah-magmator": {
    name: "Magmator (Powah)",
    short: "Verbrennt Lava direkt für FE. Schnellerer Bootstrap als Thermo-Generator, weil man direkt einen Lava-Bucket reinkippen kann.",
    long: `
      <h3>Wie funktioniert das?</h3>
      <p>Der <strong>Magmator</strong> ist ein Lava-zu-FE Generator — du schüttest Lava in den Fluid-Tank, er verbrennt sie und produziert FE.</p>
      <h3>Vorteil gegenüber Thermo-Generator</h3>
      <p>Keine komplizierte Hot/Cold-Platzierung. Einfach Lava-Bucket rein → Power raus. Ideal für die ersten 30 Minuten bis der Energizing-Loop läuft.</p>
      <h3>Late-Game irrelevant</h3>
      <p>Output liegt bei einigen hundert FE/t (Nitro-Magmator). Nicht mit Nitro-Reactor vergleichbar. Nur als Bootstrap interessant.</p>
    `
  },
  "powah-capacitor": {
    name: "Capacitor (Powah)",
    short: "Powah-Interner Speicher. Jede Stufe braucht die vorherige + Kristall + Dielectric Paste. Basic → Hardened → Blazing → Niotic → Spirited → Nitro.",
    long: `
      <h3>Capacitor-Hierarchie</h3>
      <p>Capacitoren sind das Puffer-Element in Rods, Reactors und Energy Cells. Progression:</p>
      <table>
        <tr><th>Stufe</th><th>Zentrum-Zutat</th><th>Output</th></tr>
        <tr><td>Basic</td><td>Redstone Block</td><td>4</td></tr>
        <tr><td>Basic Large</td><td>2× Basic</td><td>1</td></tr>
        <tr><td>Hardened</td><td>Energized Steel + Basic Large</td><td>2</td></tr>
        <tr><td>Blazing</td><td>Blazing Crystal + Basic Large</td><td>2</td></tr>
        <tr><td>Niotic</td><td>Niotic Crystal + Basic Large</td><td>1</td></tr>
        <tr><td>Spirited</td><td>Spirited Crystal + Basic Large</td><td>1</td></tr>
        <tr><td>Nitro</td><td>Nitro Crystal + Basic Large</td><td>1</td></tr>
      </table>
      <p>Für 1 Nitro Reactor brauchst du 4 Nitro Capacitors → 4 Nitro Crystals + 4 Basic Large Capacitors + 8 Dielectric Paste.</p>
    `
  },
  "powah-flux-network": {
    name: "Flux Networks",
    short: "Wireless FE-Transport über beliebige Entfernungen. Flux Plug zieht Power aus Generatoren, Flux Point liefert es irgendwo anders ab — ohne Kabel.",
    long: `
      <h3>Warum Flux Networks?</h3>
      <p>Bei Nitro-Reactor-Farmen mit mehreren Generatoren wird Kabel-Layout chaotisch. <strong>Flux Networks</strong> überspringt das komplett:</p>
      <ul>
        <li><strong>Flux Plug</strong>: saugt Power aus Reactor/Energy Cell</li>
        <li><strong>Flux Point</strong>: gibt Power wo du willst (Factory, AE2, Mekasuit Charger)</li>
        <li><strong>Flux Controller</strong>: zentrale Überwachung (nicht zwingend nötig)</li>
      </ul>
      <h3>Skalierung</h3>
      <p>Ein Flux-Netzwerk hat keine praktischen Limits. 10 Nitro Reactors auf der einen Seite, 30 Maschinen auf der anderen → funktioniert. Im ATMons-Pack zusätzlich <em>Applied Flux</em> installiert, das Flux direkt in AE2 Energy-Acceptors einspeisen kann.</p>
    `
  },
  "powah-wither-farm": {
    name: "Wither-Farm (Apotheosis)",
    short: "Pflicht für Nitro Crystals. Via Apotheosis Spawner + Mob Duplicator + Killing Setup: 1 Nether Star = 1/16 Nitro Crystal.",
    long: `
      <h3>Wofür?</h3>
      <p>Nitro Crystals brauchen <strong>Nether Stars</strong> (aus Wither-Kills). Manuell Wither spawnen = einmal alle paar Minuten. Zum Skalieren brauchst du eine Farm.</p>
      <h3>ATMons-Variante</h3>
      <p>Das Pack hat <em>Apothic Spawners</em> (aus Apotheosis) aktiviert. Vorgehen:</p>
      <ol>
        <li><strong>Apothic Spawner</strong> craften/finden, mit Wither-Skeleton-Skull + Soul Shards konfigurieren</li>
        <li><strong>Mob Duplicator</strong> (Industrial Foregoing) → spawnt konfigurierte Mobs</li>
        <li>Wither-Skeletons farmen → 3 Skulls + 4 Soul Sand → Wither spawnt via Deployer (Create) in geschlossenem Raum</li>
        <li>Wither-Damage-Setup (Mekanism Antiprotons-Laser oder Draconic) killt Wither automatisch</li>
        <li>Nether Star droppt → Vacuum Hopper → Storage</li>
      </ol>
      <p>Alternative: <strong>Mystical Agriculture Nether Star Seeds</strong> (Tier 5, benötigt Stardust Essence). Sicherer und vollautomatisch, aber langsamer.</p>
    `
  },
};

/* ============================================================
   RECIPES — Kleine Grid-Darstellungen für bekannte Rezepte
   ============================================================ */
/* ============================================================
   TYPE CHART — Pokémon Typ-Effektivität (Standard Gen 6+, 18 Typen)
   Verifiziert: Cobblemon nutzt Standard-Chart, keine ATMons-Overrides
   Matrix: TYPE_CHART[angreifender_typ][verteidigender_typ] = multiplikator
   ============================================================ */