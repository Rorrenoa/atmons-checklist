/* ============================================================
   PHASES — Hauptinhalte der Checkliste
   Pfade: base | pokemon | tech | endgame
   guide: Verweist auf GUIDES[key] für große Erklärungen
   ============================================================ */
const PHASES = [
  /* ============== TEIL A — GRUNDLAGEN ============== */
  {
    id: "p1", title: "Phase 1: Vor dem Spielstart", icon: "⚙️", path: "base",
    desc: "Einstellungen · Controls · Performance",
    items: [
      { id: "1a", text: "RAM zuweisen: 8–10 GB in CurseForge", detail: "CurseForge → Einstellungen (Zahnrad unten links) → Minecraft → Java Settings → Memory Slider auf <strong>8192–10240 MB</strong>. Das Pack hat <strong>~216 Mods</strong>, weniger als 8 GB führt zu Abstürzen. Mehr als 12 GB kann Garbage-Collection-Probleme verursachen." },
      { id: "1b", text: "FTB Ultimine aktivieren (Vein Mining)", detail: "ATMons nutzt {{ftb-ultimine|FTB Ultimine}}, nicht Vein Miner. Standard-Taste <code>~</code> (Grave) gedrückt halten während du abbaust – alle verbundenen gleichen Blöcke werden mit abgebaut. Shape im FTB-Menü einstellbar. Keybind unter <em>Einstellungen → Steuerung → FTB Ultimine</em> anpassbar." },
      { id: "1c", text: "Pokémon-Controls lernen", detail: "<strong>R</strong> = Pokémon senden/rufen · <strong>M</strong> = Party-Menü (Stats, Moves, Held Items) · Held Items per <strong>Drag &amp; Drop</strong> im Party-Menü · Mit {{cobblenav|Cobblenav}} (eigener Keybind) siehst du Spawn-Gebiete und Details der Pokémon um dich herum." },
      { id: "1d", text: "EMI-Basics: U = Verwendungen, Rechtsklick = Rezept", detail: "<strong>EMI</strong> ist die Suchleiste rechts im Inventar – dein wichtigstes Werkzeug bei 200+ Mods! Hover über ein Item: <strong>U</strong> zeigt Verwendungen, <strong>Rechtsklick</strong> zeigt Rezept. <em>ATMons hat KEINE EMI-Hidings</em> – alles ist sichtbar." },
      { id: "1e", text: "JourneyMap: Minimap + M für Fullmap", detail: "<strong>J</strong> öffnet JourneyMap-Einstellungen · <strong>M</strong> = Fullmap (Vorsicht: kollidiert mit Cobblemon-Party – im Zweifel Keybind ändern) · Rechtsklick auf der Karte = Waypoint setzen." },
      { id: "1f", text: "FTB Essentials Befehle: /sethome, /back, /spawn", detail: "<code>/sethome</code> = Position speichern · <code>/home</code> = zurück teleportieren · <code>/back</code> = letzter Todespunkt (rettet Items!) · <code>/spawn</code> = Weltspawn. Dimensionsübergreifend und kostenlos in ATMons." },
      { id: "1g", text: "Render Distance auf 8–12 falls Lag", detail: "<strong>Sodium</strong> und <strong>Iris</strong> sind bereits dabei und sorgen für gute FPS. Falls trotzdem Lag: Render Distance reduzieren, Fancy Leaves → Fast, Partikel → Minimal, Smooth Lighting → Minimum." },
    ],
  },
  {
    id: "p2", title: "Phase 2: Erste Stunde – Survival-Basis", icon: "🌅", path: "base",
    desc: "Quest Book · Starter · Holz · Werkzeuge",
    items: [
      { id: "2a", text: "FTB Quest Book öffnen", detail: "Button <strong>oben links</strong> im Inventar. Das Quest Book ist dein <strong>roter Faden</strong> durch ATMons – es kennt die Mod-Progression, gibt Belohnungen und führt dich strukturiert bis zum ATM Star." },
      { id: "2b", text: "'Welcome' + 'Getting Started' Questline starten", detail: "Die ersten Chapter heißen <strong>Welcome</strong>, <strong>Intro</strong> und <strong>Getting Started</strong>. Sie geben dir grundlegende Items, Cobblepedia und erklären die wichtigsten Keybinds." },
      { id: "2c", text: "Starter-Pokémon wählen (M-Taste)", detail: "Alle Starter der <strong>Gen 1–9</strong> verfügbar. Starter sind in der Wildnis extrem selten – wähle weise. <em>ACHTUNG:</em> ATMons hat <code>replaceAnimalSpawn=true</code> – viele Vanilla-Tiere (Kühe, Schweine, Hühner) werden durch Pokémon ersetzt! Dein Starter ist oft die einzige zuverlässige Fleisch-Quelle in den ersten Minuten." },
      { id: "2d", text: "Holz sammeln (FTB Ultimine hilft!)", detail: "<code>~</code> halten + Stamm schlagen = kompletter Baum. Sammle mind. 2 Stacks Holz." },
      { id: "2e", text: "Werkbank → Holz-Spitzhacke → Cobblestone", detail: "Standard Minecraft Start. Holz → Planken → {{recipe:workbench|Werkbank}} → Holz-Spitzhacke → erste Cobble-Blöcke." },
      { id: "2f", text: "Stein-Werkzeuge craften (Pickaxe, Axt, Schwert)", detail: "Die {{recipe:stone-pickaxe|Stein-Spitzhacke}} schaltet bereits überraschend viele ATMons-Erze frei – siehe Mining-Tier Guide." },
      { id: "2g", text: "Crafting Table on a Stick → Curio-Slot", detail: "In EMI suchen. Im {{curio-slot|Curio-Slot}} (links neben Rüstung) hast du jederzeit eine Werkbank per Rechtsklick dabei. <em>Bonus in ATMons:</em> Crafting-on-a-Stick wird per kubejs mit normalen Crafting Tables vereinheitlicht – komplett austauschbar." },
      { id: "2h", text: "Erste Essen-Quelle sichern", detail: "<strong>KEIN Weizen</strong> – zu langsam. Erste Optionen: wildes Pokémon-Fleisch (siehe 2c), Cobblemon-Beeren von Büschen (doppelter Nutzen: Essen + Pokémon-Crafting), Farmer's Delight Wildpflanzen." },
      { id: "2i", text: "/sethome am ersten Basispunkt", detail: "Gleich nachdem du einen passablen Spot gefunden hast: <code>/sethome</code>. Spart dir bei Tod einen langen Rückweg." },
    ],
  },
  {
    id: "p3", title: "Phase 3: Tool-Progression verstehen", icon: "⛏️", path: "base",
    desc: "Das Fundament für alles Weitere",
    items: [
      { id: "3a", text: "Mining-Tier System lernen", detail: "ATMons hat ein <strong>spezifisches Mining-Tier-System</strong>, das von ATM10-Guides abweicht. Klick den Guide-Button unten für die vollständige verifizierte Tabelle.", guide: "mining-tiers" },
      { id: "3b", text: "Stein-Pickaxe: Kohle, Eisen, Kupfer, Tin, Aluminum, Lead", detail: "Alle 6 Stein-Tier-Erze sofort verfügbar. <strong>Y-Höhen Overworld:</strong> <em>Kohle</em> Y ~95 (oberflächennah), <em>Eisen</em> Y <strong>16</strong> (Peak der {{worldgen-distribution|Triangle-Verteilung}} im Middle Band — Range -24 bis 56), <em>Kupfer</em> Y ~48 (mehr in Dripstone Caves), <em>Tin</em> Y ~20, <em>Aluminum</em> Y ~60, <em>Lead</em> Y ~-16 (Deepslate). Sammle Eisen zuerst – mind. 2 Stacks. <strong>Tin</strong> wird zu Bronze (Campfire Pot!), <strong>Aluminum/Lead</strong> für frühe Maschinen. Alle Heights + Mining-Dim-Werte im Guide.", guide: "ore-heights" },
      { id: "3c", text: "Ofen bauen und schmelzen", detail: "8 Cobblestone = {{recipe:furnace|Ofen}}. Stelle 2–3 Öfen nebeneinander für paralleles Schmelzen, bis Mekanism Energized Smelter verfügbar ist." },
      { id: "3d", text: "Eisen-Pickaxe craften → Gold, Redstone, Lapis, Silver, Nickel, Diamant", detail: "Schaltet 6 weitere Erze frei. <strong>Y-Höhen Overworld:</strong> <em>Diamant</em> Y <strong>-58</strong> ({{worldgen-distribution|Triangle-Peak}}, tief wie Vanilla), <em>Redstone</em> Y <strong>-58</strong>, <em>Gold</em> Y ~-16, <em>Lapis</em> Y ~0, <em>Silver</em> Y ~-16, <em>Nickel</em> Y ~0. <strong>Geheim-Tipp:</strong> Ein Strip-Mine bei <strong>Y = -16</strong> erwischt gleichzeitig Gold, Lapis, Silver, Nickel, Osmium, Iridium und Uranium. Für Diamant/Redstone noch tiefer runter. {{recipe:iron-pickaxe|Rezept: Eisen-Pickaxe}}.", guide: "ore-heights" },
      { id: "3e", text: "Diamant-Pickaxe → Osmium, Platinum, Zinc, Uranium, Obsidian", detail: "Der <em>wichtigste</em> Upgrade-Schritt. <strong>Y-Höhen Overworld:</strong> <em>Osmium</em> Y ~0, <em>Platinum</em> Y ~-32 (selten, tief), <em>Zinc</em> Y ~0, <em>Uranium</em> Y <strong>-24</strong> ({{atmons-override|ATMons-Override}}!), <em>Obsidian</em> — Lavaseen überall. <strong>Osmium = Mekanism-Basis</strong> – ohne Diamant kein Mekanism. Ab jetzt ist Y -16 bis 0 dein Hauptstrip-Mine-Level. {{recipe:diamond-pickaxe|Rezept: Diamant-Pickaxe}}.", guide: "ore-heights" },
      { id: "3f", text: "Silent Gear als ein-Tool-für-alles (Vorschau)", detail: "{{silent-gear|Silent Gear}} Tools <em>brechen nie endgültig</em> und können mit Repair Kits unendlich repariert werden. Siehe Phase 13 für Details." },
      { id: "3g", text: "Silk Touch priorisieren", detail: "{{silk-touch|Silk Touch}} auf Pickaxe = Erze als <strong>Block</strong> statt Raw Ore abbauen. Erze als Block → Mekanism {{enrichment-chamber|Enrichment Chamber}} → <strong>2× Output</strong>. Silk Touch spart also langfristig viel Material!" },
      { id: "3h", text: "Netherite als finales Upgrade merken", detail: "Netherite-Pickaxe schaltet <strong>Allthemodium</strong> ({{deep-dark|Deep Dark Biome}}) und <strong>Vibranium</strong> (Nether, Crimson/Warped Forest) frei – nur dann in Phase 17 & 20 relevant." },
    ],
  },
];
/* Teil B/C werden in einem zweiten Script-Block hinzugefügt — siehe unten. */

/* ============== TEIL B1 — POKÉMON-PFAD ============== */
PHASES.push(
  {
    id: "p4", title: "Phase 4: Starter & erste Pokémon", icon: "🔴", path: "pokemon",
    desc: "Team aufbauen · Cobblepedia · Cobblenav",
    items: [
      { id: "4a", text: "Starter-Team bauen", detail: "Dein Starter ist oft dein erstes Mid-Game-Pokémon. Nutze {{cobblepedia|Cobblepedia}} (In-Game Pokédex-Buch aus Quest-Belohnung) um Stärken/Schwächen zu lernen. Mudkip-Linie ist objektiv stark (Wasser/Boden)." },
      { id: "4b", text: "3–6 verschiedene Typen fangen", detail: "Für gute Abdeckung: Wasser, Feuer, Pflanze, Elektro, Kampf/Boden. <strong>Wilde Pokémon erst schwächen</strong> (HP runter + Status wie Schlaf/Paralyse) = deutlich höhere Fangrate." },
      { id: "4c", text: "Cobblenav öffnen", detail: "{{cobblenav|Cobblenav}} zeigt dir alle Pokémon in der Umgebung mit Spawn-Biome, Level-Range und Seltenheit. Check regelmäßig ob du etwas seltenes übersehen hast." },
      { id: "4d", text: "XP-Mechaniken verstehen", detail: "ATMons hat massive {{atmons-override|XP-Overrides}}: <strong>Battle-XP × 2.0</strong>, <strong>Capture-XP × 20</strong> (!), <strong>Exp Share × 0.5</strong>. Fazit: Fangen levelt dein Team extrem schnell, aber passive Exp Share ist schwach → <strong>aktiv kämpfen lohnt sich deutlich mehr</strong>." },
      { id: "4e", text: "Healing Machine nutzen", detail: "Healing Machines spawnen in Dörfern (Rechtsklick = Team heilen). Eigene können gecraftet werden (Rezept in EMI). Später mit Redstone für Party-Heil-Automation." },
      { id: "4f", text: "PC-Box verstehen", detail: "Der PC ist deine Pokémon-Bank. Alles außerhalb der Party landet hier. Mehrere Boxen frei organisierbar – sortiere nach Typ, Einsatzzweck oder Shiny-Status." },
      { id: "4g", text: "XP Share an schwache Team-Mitglieder", detail: "Held Item im Party-Menü per Drag & Drop zuweisen. Auch bei 0.5× Multiplier wertvoll für passives Leveln während du mit deinem Main-Mon kämpfst." },
      { id: "4h", text: "Ersten Gym-Leader/Key-Trainer identifizieren", detail: "Die {{trainer-card|Trainer Card}} (siehe Phase 6) zeigt dir den nächsten {{key-trainer|Key-Trainer}}. Trainer Card ist <em>Voraussetzung für Trainer-Spawning</em> – besorge sie früh." },
    ],
  },
  {
    id: "p5", title: "Phase 5: Aprikokos & Pokéball-Produktion", icon: "🎾", path: "pokemon",
    desc: "ACHTUNG: Pokébälle sind in ATMons anders!",
    items: [
      { id: "5a", text: "Pokéball-Produktion ist komplett anders!", detail: "<strong>WICHTIG:</strong> Die Standard-Cobblemon-Pokéball-Rezepte sind in ATMons <em>komplett entfernt</em> ({{atmons-override|ATMons-Override}}). Pokébälle werden über {{sequenced-assembly|Create Sequenced Assembly}} produziert (Mod <code>createmonballsoverhaul</code>). Klick den Guide für die vollständige Anleitung.", guide: "pokeball-create" },
      { id: "5b", text: "Aprikokos sammeln (8 Farben)", detail: "{{apricorn|Aprikoko-Bäume}} spawnen in verschiedenen Biomen (Default Cobblemon-Worldgen, in ATMons nicht überschrieben). Farben + typische Biome: <strong>Red</strong> (Savanna), <strong>Yellow</strong> (Desert/Sunflower Plains), <strong>Green</strong> (Jungle), <strong>Blue</strong> (Snowy Taiga/Cold Biomes), <strong>Pink</strong> (Cherry Grove), <strong>White</strong> (Plains/Forest), <strong>Black</strong> (Dark Forest), <strong>Brown</strong> (Taiga/Old Growth). Jede Farbe = anderer Pokéball-Typ. Baum-Generierungs-Chance ist auf 10% konfiguriert – also selten, jeden Baum markieren oder Setzlinge sichern!" },
      { id: "5c", text: "Aprikoko-Setzlinge nachpflanzen", detail: "Sobald du einen Baum gefunden hast: Setzlinge sichern und anpflanzen. Später via <strong>Pylons Mod</strong> automatisch harvestbar – siehe Phase 18." },
      { id: "5d", text: "Loot-Truhen nach Ball-Teilen durchsuchen", detail: "In POI-Strukturen (Dörfer, Dungeons) droppen per Loot-Table: <strong>Blank Ball Lid</strong> (Gewicht 70), farbige Lids (je 5), <strong>Copper/Iron/Brass Mechanism</strong>. Durchsuche jede Loot-Kiste die du findest!" },
      { id: "5e", text: "Create-Minimum aufbauen (siehe Tech-Pfad)", detail: "Du brauchst mindestens <strong>Andesite Alloy</strong>, {{create-press|Mechanical Press}}, <strong>Encased Fan</strong>, {{create-deployer|Deployer}} und <strong>Mechanical Drill</strong> oder eine Rotation-Quelle. Siehe Phase 10 im Tech-Pfad." },
      { id: "5f", text: "Sequenced Assembly Line bauen", detail: "Eine Depot-Kette mit Conveyor + Deployern + Press. Der Guide-Button oben erklärt Schritt für Schritt." },
      { id: "5g", text: "Ersten Pokéball produzieren", detail: "Basis-Pokéball (rot/weiß) ist der einfachste Einstieg. Aufwändiger aber deutlich besser: Great Ball, Ultra Ball." },
      { id: "5h", text: "Spezialbälle nach Bedarf", detail: "Jede Aprikoko-Farbe + Material-Kombi = andere Ball-Art (Fast, Level, Lure, Heavy, Love, Friend, Moon, Competition, Dusk, Premier, Net, Dive, Nest, Repeat, Timer, Luxury, Cherish). Rezepte in EMI / via <code>createmonballsoverhaul</code>." },
      { id: "5i", text: "Master Ball: NICHT craftbar!", detail: "<em>Das Standard-{{master-ball|Master Ball}}-Rezept ist per kubejs entfernt.</em> Master Balls kommen nur aus {{raid-den|Raid Dens}}, {{battle-tower|Battle Tower}}, <strong>Quest-Belohnungen</strong> oder Endgame-Loot. Der ATM Star benötigt 2 davon – früh anfangen zu sammeln!" },
      { id: "5j", text: "ATMons-exklusive Bälle", detail: "Die Coremod fügt 4 exklusive Bälle hinzu: <strong>Allthemodium Ball, Vibranium Ball, Unobtainium Ball, Soul Lava Ball</strong>. Voraussetzung: entsprechende Metalle. Endgame-Tier Fangraten." },
    ],
  },
  {
    id: "p6", title: "Phase 6: Trainer-System & Level-Cap", icon: "🎖️", path: "pokemon",
    desc: "Pflicht verstehen: so funktioniert RCT in ATMons",
    items: [
      { id: "6a", text: "Trainer Card beschaffen (PFLICHT!)", detail: "Die {{trainer-card|Trainer Card}} ist <em>zwingend</em> erforderlich damit Trainer überhaupt spawnen (<code>spawningRequiresTrainerCard=true</code>). Rezept in EMI prüfen oder Quest-Belohnung. Ohne Card siehst du <strong>keine Trainer</strong>.", guide: "level-cap" },
      { id: "6b", text: "Trainer Card im Inventar behalten", detail: "Muss im Inventar sein – nicht nur in einer Kiste. Viele Spieler übersehen das und wundern sich warum keine Trainer spawnen." },
      { id: "6c", text: "Trainer-Serie wählen", detail: "Spieler starten in der Serie <code>empty</code> und müssen eine Serie über das <strong>Trainer Card Menü</strong> wählen (z.B. Radical Red, BDSP, Johto). Serie bestimmt Trainer-Pool und Progression." },
      { id: "6d", text: "Level-Cap verstehen (Start: 15)", detail: "Start-{{level-cap|Level-Cap}} ist <strong>15</strong>. Pokémon am/über Cap bekommen <em>keine XP</em>. Cap ist <strong>relativ 0</strong> = steigt exakt auf das Level des nächsten Key-Trainers. Trainer verweigern Kampf wenn du Pokémon <em>über</em> Cap dabei hast." },
      { id: "6e", text: "Key-Trainer besiegen → Cap erhöhen", detail: "{{key-trainer|Key-Trainer}} haben <strong>farbige Namen</strong>. Jeder besiegte Key-Trainer hebt den Cap um exakt die Level-Differenz. Die Trainer Card zeigt den nächsten Key-Trainer und leuchtet wenn einer in der Nähe ist." },
      { id: "6f", text: "Max. 5 Trainer gleichzeitig", detail: "Konfiguriert auf <strong>maxTrainersPerPlayer=5</strong> (Standard wäre 12). Spawn-Chance 85%, Interval 180 Ticks (9 Sek). Lebt sich überschaubarer an – keine Trainer-Überflutung." },
      { id: "6g", text: "Force Battle beachten", detail: "Bei <strong>60 Ticks Blickkontakt</strong> (3 Sekunden) und max. <strong>8 Blöcken Entfernung</strong> erzwingt der Trainer einen Kampf. Nicht guten Key-Trainer in einer schwachen Phase anschauen!" },
      { id: "6h", text: "Erste Serie komplettieren → Freeroam", detail: "<strong>Freeroam-Modus</strong> (= freies Mischen von Pokémon aus allen Serien) ist <em>erst freigeschaltet</em> nachdem du mindestens eine Serie komplett durchgespielt hast. Bis dahin bist du an deine Serie gebunden." },
      { id: "6i", text: "Trainer Spawner Block craften", detail: "Wenn natürliches Spawning zu langsam ist: <strong>Trainer Spawner</strong> Block beschwört gezielt Key-Trainer. Manche benötigen Signature-Items (Quest Book erklärt welche). Rezept in EMI." },
    ],
  },
  {
    id: "p7", title: "Phase 7: Pokémon vertiefen", icon: "🥚", path: "pokemon",
    desc: "Zucht · Fossilien · Mega-Evolution",
    items: [
      { id: "7a", text: "Pasture bauen", detail: "Der {{pasture|Pasture Block}} ist der Zucht/Lager-Block für Cobblemon. Rezept in EMI. Bis zu 16 Pokémon gleichzeitig, kompatible Pärchen produzieren Eier." },
      { id: "7b", text: "Zucht aktivieren", detail: "2 kompatible Pokémon in denselben Pasture = Eier. <strong>Breeding-Cooldown: 12000 Ticks (10 Min)</strong> zwischen Zucht-Versuchen. <em>Tipp:</em> {{link-cable|Link Cable}} an ein Elternteil geben = gilt als Tausch = <strong>erhöhte Shiny-Chance</strong>!" },
      { id: "7c", text: "Ei-Brutzeit verstehen", detail: "Ei-Brutzeit = <strong>6000 Ticks × Pokémon-Level</strong>. Flamebody/Magma Armor Pokémon in der Nähe = schnelleres Brüten (wie in Vanilla Pokémon)." },
      { id: "7d", text: "Redstone-Block unter Pasture = stoppt Eier", detail: "Wenn du kein neues Ei willst (z.B. beim Shiny-Breeding ohne Ditto-Reset): Redstone-Block direkt unter den Pasture = Ei-Produktion pausiert." },
      { id: "7e", text: "Cobblemon Campfire Pot craften", detail: "Rezept: <strong>5 Bronze Ingots + 1 Glasscheibe + 2 Aprikokos</strong>. Auf Campfire setzen. <em>Achtung:</em> Campfire Pot ist per kubejs als <code>c:relocation_not_supported</code> markiert – kann <strong>nicht mit Packing Tape</strong> verschoben werden." },
      { id: "7f", text: "Pokémon-Medizin kochen", detail: "Mit dem Campfire Pot craftest du <strong>Revive, Heal Powder, EXP Candy XS, Rare Candy</strong> usw. Rezepte in EMI. Der Pot hat einen <strong>Item Handler</strong> – vollständig automatisierbar!" },
      { id: "7g", text: "Pokémon-Fossilien finden", detail: "Fossilien-Pokémon aus Cobblemon-Strukturen in spezifischen Biomen: <strong>Prehistoric Birch Tree</strong> (Birch Forest — Aerodactyl, Anorith, Lileep), <strong>Dripstone Oasis</strong> (Dripstone Caves — Tirtouga, Archen, Shieldon, Cranidos), <strong>Moss Caves</strong> (Lush Caves — Kabuto, Omanyte, Dracozolt, Arctozolt). Fossil-Teile mit Archaeology-Brush freilegen. Assembler-Maschine baut aus Fragmenten komplette Pokémon zusammen." },
      { id: "7h", text: "Mega Evolution (Mega Showdown Mod)", detail: "{{mega-evolution|Mega Evolution}}: Ausgewählte Pokémon können mit <strong>Mega Stone</strong> (Held Item) im Kampf Mega-Evolvieren. Gen 6+ Mechanik. Mega Stones droppen aus Dungeons, Raid Dens oder sind Quest-Belohnungen." },
      { id: "7i", text: "Riding & Flying (mit Stamina!)", detail: "Manche Pokémon können geritten/geflogen werden. <em>ACHTUNG:</em> ATMons hat <code>infiniteRideStamina=false</code> – <strong>Stamina ist endlich</strong>. Außerdem <code>inFlightDismounting=false</code> = du kannst mitten im Flug nicht absteigen." },
      { id: "7j", text: "Cobbleworkers nutzen", detail: "<strong>Cobbleworkers Mod:</strong> Pokémon automatisieren Arbeit. Miltank = Milch, Combee = Honig, Bounsweet = Beeren etc. Früher Einstieg in Pokémon-basierte Automation." },
    ],
  },
  {
    id: "p8", title: "Phase 8: Gyms & Fortschritt", icon: "🏆", path: "pokemon",
    desc: "Radical Gym Structures · Battle Tower · PokéTokens",
    items: [
      { id: "8a", text: "Gyms in der Welt finden", detail: "Mod <strong>Radical Gyms Structures (RGS)</strong> spawnt physische Gym-Gebäude in der Welt. Nature's Compass / Explorer's Compass nutzen um sie zu finden." },
      { id: "8b", text: "Gym-Map-Items von Cartographer", detail: "Cartographer-Villager verkaufen <strong>Gym-Maps</strong> die direkt zum nächsten Gym führen. Günstiger als wildes Erkunden." },
      { id: "8c", text: "Battle Tower besuchen", detail: "{{battle-tower|Battle Tower}}: Strukturierte Kampf-Challenge mit 10+ Floors. Belohnungen: Seltene Items, Rare Candy, <strong>Master Ball-Chance</strong>!" },
      { id: "8d", text: "Raid Dens finden und kämpfen", detail: "{{raid-den|Raid Dens}}: Spawnende Raid-Strukturen mit stärkeren Pokémon. Droppen seltene Items und gelegentlich Master Balls." },
      { id: "8e", text: "PokéTokens sammeln", detail: "ATMons-Währung, erhältlich durch: <strong>Pokémon releasen, Trainer besiegen, Villager-Handel</strong>. Zum Einkaufen bei speziellen Villagern (PokéMart-Typ)." },
      { id: "8f", text: "Legendary-Info: NICHT wild spawn!", detail: "<em>Wichtig:</em> ATMons hat <strong>alle Legendary- und Paradox-Pokémon</strong> (100+) aus Wild-Spawns per kubejs deaktiviert (<code>server_scripts/Tweaks/disable_mons.js</code>). Sie kommen <strong>nur</strong> aus Battle Tower, Raid Dens, Quests oder Events." },
      { id: "8g", text: "Pokédex vervollständigen (Catch 'Em All)", detail: "FTB-Quest-Chapter <strong>'Catch Em All'</strong> belohnt Pokédex-Fortschritt. Type-basierte Quests (18 Typen) und Species-Quests (z.B. Ditto) geben starke Items." },
    ],
  },
);

/* ============== TEIL B2 — TECH-PFAD ============== */
PHASES.push(
  {
    id: "p9", title: "Phase 9: Essen & QoL-Mods", icon: "🍲", path: "tech",
    desc: "Farmer's Delight · Cooking for Blockheads · Storage",
    items: [
      { id: "9a", text: "Farmer's Delight Cooking Pot bauen", detail: "Rezept in EMI (Eisenbarren in Kessel-Form). Auf <strong>Campfire oder Hitzequelle</strong> stellen. Zutaten rein, warten, Mahlzeit raus. <em>Das wichtigste Essen-Item im ganzen Pack.</em>" },
      { id: "9b", text: "Nourishment-Mahlzeiten kochen", detail: "<strong>Plated Meals</strong> (auf Tellern serviert) geben den {{nourishment|Nourishment-Buff}}: solange aktiv verlierst du <em>keinen Hunger</em> durch Sprinten, Springen oder Kämpfen! Hält 1–5 Minuten je nach Gericht. Eines der stärksten Early-Game-QoL-Features." },
      { id: "9c", text: "Beef Stew, Chicken Soup, Mixed Salad", detail: "Starter-Rezepte: <strong>Beef Stew</strong> (Rohes Rindfleisch + Karotte + Kartoffel + Schüssel, im Cooking Pot) · <strong>Chicken Soup</strong> (Rohes Huhn + Karotte + Gemüse + Schüssel) · <strong>Mixed Salad</strong> (direkt in Werkbank). Alle Rezepte in EMI prüfen!" },
      { id: "9d", text: "Everlasting Beef von Miltank", detail: "<strong>Miltank droppt Everlasting Beef</strong> – ATMons-exklusiv, unendlich wiederverwendbar. Löst dein Essen-Problem dauerhaft. Miltank spawnt typischerweise in <strong>Plains und Savanna-Biomen</strong> (Default Cobblemon-Spawns, ersetzt teilweise Vanilla-Kühe durch <code>replaceAnimalSpawn=true</code>). Mit Cobblenav schnell finden." },
      { id: "9e", text: "Cooking for Blockheads: Kitchen bauen", detail: "Mod <strong>Cooking for Blockheads</strong> ist dabei: Kitchen-Counter + Oven + Fridge nebeneinander = voll-automatisierte Küche. Rezept-Buch zeigt was aus deinen gelagerten Zutaten machbar ist." },
      { id: "9f", text: "Easy Villagers für Villager-Farming", detail: "Mod <strong>Easy Villagers</strong>: Villager mit Rechtsklick einsammeln und als Block platzieren. Ideal für Trader-Hall ohne KI-Schmerzen. Cartographer, Librarian, Farmer auf Knopfdruck." },
      { id: "9g", text: "Sophisticated Storage für Kisten", detail: "Ersetzt 4–5 Vanilla-Kisten pro Upgrade-Stufe. <strong>Upgrades</strong>: Stack, Filter, Auto-Pickup, Void, Compacting. Rezept in EMI." },
      { id: "9h", text: "Sophisticated Backpacks tragen", detail: "Portable Inventar-Erweiterung mit den gleichen Upgrade-Slots wie Storage. <strong>Pickup Upgrade</strong> sammelt automatisch in den Rucksack." },
    ],
  },
  {
    id: "p10", title: "Phase 10: Create-Basics", icon: "⚙️", path: "tech",
    desc: "Pflicht für Pokéball-Produktion!",
    items: [
      { id: "10a", text: "Andesite Alloy craften", detail: "<strong>Andesite Alloy</strong> = Basis-Ressource für fast alles in Create. Rezept: Andesit + Eisennugget + Zinknugget (EMI prüfen). Früh ein Lager anlegen." },
      { id: "10b", text: "Rotation-Quelle bauen", detail: "Optionen: <strong>Water Wheel</strong> (Wasser), <strong>Windmill</strong> (mit Sails + Bearing), <strong>Steam Engine</strong> (später). Wasserräder sind Early-Game am einfachsten." },
      { id: "10c", text: "Mechanical Press", detail: "{{create-press|Mechanical Press}} presst Bleche (Iron/Gold/Brass Sheets) – Voraussetzung für viele Rezepte inkl. Pokéball-Produktion." },
      { id: "10d", text: "Encased Fan", detail: "Mit <strong>Wasser darunter</strong> = Washing · <strong>Feuer darunter</strong> = Smelting · <strong>Soul Fire</strong> = Haunting. Wasch-Modus wichtig für manche Ore-Processing-Routen." },
      { id: "10e", text: "Deployer", detail: "{{create-deployer|Deployer}} platziert Items auf ein Ziel – Kernstück der {{sequenced-assembly|Sequenced Assembly}}. Lässt sich wie ein Spieler-Rechtsklick steuern." },
      { id: "10f", text: "Mechanical Crafter (Endgame-Vorbereitung)", detail: "Große Crafting-Grids für komplexe Rezepte. <strong>Der ATM Star wird in einem 9×9 Mechanical Crafter Array gecraftet</strong> – also früh Erfahrung damit sammeln." },
      { id: "10g", text: "Sequenced Assembly Line aufbauen", detail: "Dies ist der Kern der <strong>Pokéball-Produktion</strong> – siehe Phase 5 und den Pokéball-Guide." },
    ],
  },
  {
    id: "p11", title: "Phase 11: Mekanism starten", icon: "⚡", path: "tech",
    desc: "Braucht: Osmium + Eisen + Redstone + Kohle",
    items: [
      { id: "11a", text: "Heat Generator bauen", detail: "Einfachster Mekanism-Generator. Rezept: Eisen, Osmium, Planken, Ofen, Kupfer (EMI). Betrieb: Kohle/Holzkohle intern <strong>oder</strong> neben Lava platzieren für passive Wärme." },
      { id: "11b", text: "Metallurgic Infuser → Stahl", detail: "{{metallurgic-infuser|Metallurgic Infuser}}: Kohle/Holzkohle in Infusions-Slot = Carbon. Eisenbarren rein → Enriched Iron → nochmal durch = <strong>Steel</strong>. Steel ist Basis für ALLE weiteren Mekanism-Maschinen und Kabel." },
      { id: "11c", text: "Kohle/Redstone VORHER enrichen", detail: "<strong>EINER DER WICHTIGSTEN TIPPS:</strong> Führe Kohle/Redstone ZUERST durch eine {{enrichment-chamber|Enrichment Chamber}} – Enriched Coal/Redstone liefert <strong>8× mehr Infuse Units</strong>! Spart enorm Material." },
      { id: "11d", text: "Basic Universal Cables verlegen", detail: "Übertragen FE/EU zwischen Maschinen. <em>Profi-Tipp:</em> Maschinen direkt nebeneinander platzieren = automatischer Item-Transfer ohne Pipes!" },
      { id: "11e", text: "Enrichment Chamber = 2× Erz", detail: "<strong>Die wichtigste Maschine.</strong> Ore-Block → 2× Dust → im Smelter = 2 Ingots statt 1. Verdoppelt sofort deinen Erz-Output. Skaliert später mit höheren Mekanism-Tiers." },
      { id: "11f", text: "Energized Smelter aufstellen", detail: "Schneller als der Ofen, mit Upgrade-Slots (Speed + Energy). Direkt neben Enrichment Chamber = automatischer Transfer." },
      { id: "11g", text: "ATMons Ore-Processing-Pipeline verstehen", detail: "Das Mekanism-Ore-Processing ist per kubejs <strong>custom angepasst</strong>: Washing → Injecting → Crushing → Enriching Pipeline mit pack-spezifischen Outputs (z.B. 5 Uraninite statt Standard). Der Guide erklärt die ATMons-Variante.", guide: "mekanism-ore" },
      { id: "11h", text: "Wind Generators über Y=100", detail: "Stahl + Osmium (EMI). <strong>Kostenlose Energie</strong>, je höher desto mehr Output. Turm bauen, 4–6 Generatoren oben drauf = stabile Grundversorgung." },
      { id: "11i", text: "Platinum Ore Hammer als Low-Tech-2×", detail: "Falls du noch kein Mekanism hast: <strong>Platinum Ore Hammer</strong> (Rezept EMI) verdoppelt Raw Ore → 2× Dust per Rechtsklick. Einfachste Erz-Verdopplung ohne Strom! Platinum spawnt Overworld Y ~-32 (selten) oder Mining Dim Y -62 bis 34.", guide: "ore-heights" },
    ],
  },
  {
    id: "p12", title: "Phase 12: Strom-Speicher & Transport", icon: "🔋", path: "tech",
    desc: "Powah · Flux Networks · Player Transmitter",
    items: [
      { id: "12a", text: "Powah Energy Cells", detail: "<strong>Powah</strong> hat die besten early-to-mid Energy-Cells: Basic → Hardened → Blazing → Niotic → Spirited → Nitro. Kapazitäten skalieren massiv." },
      { id: "12b", text: "Powah Furnator / Magmator / Thermo", detail: "Erste Powah-Generatoren: <strong>Furnator</strong> (Brennstoff), <strong>Magmator</strong> (Lava), <strong>Thermo</strong> (Hitzedifferenz), <strong>Solar Panels</strong> (Tageslicht). Kombinierbar für stabile Versorgung." },
      { id: "12c", text: "Player Transmitter (drahtlos!)", detail: "<strong>Powah Player Transmitter</strong> + Blank Binding Card: Rechtsklick lädt dich selbst! Danach wird <em>alles getragene Equipment</em> (Jetpack, Free Runners, Tools) drahtlos geladen – dimensionsübergreifend." },
      { id: "12d", text: "Flux Networks alternative", detail: "Mod <strong>Flux Networks</strong>: Drahtlose Energie-Verteilung zwischen Flux Points und Plugs. Ersetzt viele Kabel. Später sehr mächtig." },
      { id: "12e", text: "Extreme Reactors / Nuclear als Skalierung", detail: "<strong>Extreme Reactors</strong> Mod ist dabei für mittlere/späte Spielphase. Größerer Reaktor = mehr Output. Für richtig großes Endgame: Mekanism Induction Matrix + Fission Reactor." },
    ],
  },
  {
    id: "p13", title: "Phase 13: Silent Gear Tools", icon: "⚔️", path: "tech",
    desc: "Ein Tool fürs ganze Spiel",
    items: [
      { id: "13a", text: "Silent Gear Basics verstehen", detail: "{{silent-gear|Silent Gear}}: Tools aus <strong>austauschbaren Teilen</strong>: Template Board (Blaupause) + Kopf (Mining Level!) + Stab + Bindung. <em>Brechen nie endgültig</em> – immer reparierbar. Du brauchst nur EIN Tool, das du upgradest." },
      { id: "13b", text: "Template Board craften", detail: "Planken + Stöcke (EMI). Das Template Board ist die <strong>Blaupause</strong> für alle Teile. Einmal craften, dann immer wieder benutzen." },
      { id: "13c", text: "Erste Silent Gear Pickaxe bauen", detail: "Pickaxe Head Template in der Werkbank mit Material-Ingots füllen → Kopf. Mit Stab und Bindung zusammenfügen → deine erste SG-Pickaxe. Starte mit Diamant-Kopf für Diamant-Tier-Mining." },
      { id: "13d", text: "Repair Kit craften und benutzen", detail: "Rezept in EMI. Repair Kit mit Kopf-Material füllen (z.B. Diamanten) → Kit + Tool in Werkbank = repariert. <strong>Unendlich wiederholbar!</strong>" },
      { id: "13e", text: "Teile tauschen ohne Enchant-Verlust", detail: "<em>Killer-Feature:</em> Tool + neues Teil in Werkbank = Teil getauscht, <strong>Verzauberungen bleiben erhalten</strong>. Upgrade-Pfad: Diamant → Netherite → Allthemodium ohne alle Enchants neu zu erstellen." },
      { id: "13f", text: "Sinew von Pokémon sammeln", detail: "Silent Gear Bindung braucht Sinew. In ATMons droppt es von: <strong>Wooloo/Dubwool</strong> (Plains, Meadow), <strong>Mareep/Flaaffy/Ampharos</strong> (Plains, Savanna), <strong>Lechonk/Oinkologne</strong> (Forest, Plains), <strong>Tauros</strong> (Plains, Savanna), <strong>Bouffalant</strong> (Plains, Savanna). Die meisten dieser Pokémon sind Plains/Savanna-Mobs — ideal in derselben Region wie Miltank zu farmen. Sofort wenn du eines siehst: fangen oder KO schlagen." },
      { id: "13g", text: "Material-Upgrade-Pfad planen", detail: "Diamant → Netherite → Allthemodium → Vibranium → Unobtainium. Jedes Upgrade behält Enchants und verbessert Mining-Level, Speed, Durability." },
    ],
  },
  {
    id: "p14", title: "Phase 14: Mobilität", icon: "🚀", path: "tech",
    desc: "Jetpack · Free Runners · Waystones · Tempad",
    items: [
      { id: "14a", text: "Iron Jetpacks Wooden-Tier", detail: "Günstigster Jetpack (Mod <strong>Iron Jetpacks</strong>). Braucht FE-Laden. <strong>Space</strong> = hoch, <strong>Sneak</strong> = schweben, <strong>V</strong> = Hover-Modus. Player Transmitter lädt drahtlos!" },
      { id: "14b", text: "Free Runners (Mekanism)", detail: "Curio-Slot-Item: <strong>Kein Fallschaden + 1-Block Step-Assist</strong>. Rezept: Basic Control Circuit + Eisen + Energy Tablet. Perfekte Jetpack-Ergänzung." },
      { id: "14c", text: "Totem of Undying immer in Off-Hand", detail: "Von Evokers (Raids) oder Dungeon-Loot. Rettet einmalig vor Tod – IMMER in der Off-Hand tragen, besonders bei gefährlichen Aktionen (Nether, Deep Dark, The Other)." },
      { id: "14d", text: "Waystones vor jeder Expedition", detail: "Vor Nether / Deep Dark / The Other: <strong>Waystone am Eingang platzieren</strong>. Bei Tod → von anderem Waystone dorthin teleportieren. Lebensretter!" },
      { id: "14e", text: "Tempad nutzen", detail: "Mod <strong>Tempad</strong>: Portable Teleporter zu gespeicherten Locations. Braucht Energie. Locations können benannt und organisiert werden. Quasi ein erweiterter Waystone für die Hand." },
      { id: "14f", text: "Elytra (End-Game Vorbereitung)", detail: "Elytra aus dem End, kombinierbar mit Jetpack (<strong>Caelus</strong> Mod ist dabei – Elytra im Curio-Slot). Mega-Boost sobald End erreicht." },
    ],
  },
  {
    id: "p15", title: "Phase 15: AE2 Grundlagen", icon: "💾", path: "tech",
    desc: "ME-System aufbauen · Storage & Automation",
    items: [
      { id: "15a", text: "Meteorite Compass craften", detail: "Eisen + {{certus-quartz|Certus Quartz}}. Certus Quartz Ore spawnt in der Overworld als normales Erz (Deepslate-Layer, Y ~-16 bis 32) <em>und</em> in den Meteoriten selbst. Der Compass zeigt zum nächsten {{meteorite|Meteoriten}}. Meteorit = <strong>große Krater an der Oberfläche</strong> in der Overworld (alle Biome, aber in offenen Biomen wie Plains/Desert leichter zu sehen)." },
      { id: "15b", text: "4 Inscriber Presses finden", detail: "Im Meteorit-Zentrum liegt eine {{sky-stone-chest|Sky Stone Chest}} mit den 4 einzigartigen Inscriber Presses: <em>Calculation, Engineering, Logic, Silicon</em>. Unverzichtbar für AE2 – ohne sie kein Inscriber! Tipp: mehrere Meteoriten abklappern, Sky Stone + Schmuckstücke mitnehmen." },
      { id: "15c", text: "Certus Quartz Farm mit Budding Blocks", detail: "{{budding-certus|Budding Certus Blocks}} wachsen Kristalle nach. <strong>Crystal Growth Accelerators</strong> daneben beschleunigen. {{fortune|Fortune}} erhöht Ausbeute beim Ernten. Budding Blocks werden aus Flawless Certus Quartz Crystals gecraftet (EMI). Früh anlegen – Certus ist dauerhaft knapp." },
      { id: "15d", text: "Inscriber → Printed Circuits", detail: "Presses + Materialien + Silizium (aus Sand über Quartz Grindstone) = Printed Circuits. Die werden zu <strong>Logic/Calculation/Engineering Processors</strong>. Basis für alle AE2-Geräte." },
      { id: "15e", text: "ME-Controller + Drive + Storage Cells", detail: "Setup: Energy Acceptor (Strom rein) → {{me-system|ME Controller}} → ME Glass Cable → ME Drive mit 4k/16k/64k Storage Cells → ME Crafting Terminal. Fertig – alle Items zentral durchsuchbar!" },
      { id: "15f", text: "ME Crafting Terminal benutzen", detail: "Erweiterte Werkbank + Item-Such + Auto-Fetch aus dem Netzwerk. Ersetzt quasi das komplette Inventar-Management." },
      { id: "15g", text: "Import/Export Bus für Automation", detail: "<strong>Import Bus</strong> am Maschinen-Output = Items automatisch ins ME-System. <strong>Export Bus</strong> am Input = ME → Maschine. Damit wird jeder Prozess vollautomatisch." },
      { id: "15h", text: "Applied Mekanistics Integration", detail: "Mod <strong>Applied Mekanistics</strong>: Direkte Integration zwischen AE2 und Mekanism. Mekanism-Chemicals können im ME-System gespeichert werden. Extrem mächtig fürs Late-Game." },
    ],
  },
);

/* ============== TEIL C — MITTELSPIEL & ENDGAME ============== */
PHASES.push(
  {
    id: "p16", title: "Phase 16: Mystical Agriculture", icon: "🌱", path: "endgame",
    desc: "Jede Ressource als Pflanze",
    items: [
      { id: "16a", text: "Prosperity & Inferium beschaffen", detail: "<strong>Prosperity Shard</strong> und <strong>Inferium Essence</strong> sind die Basis-Ressourcen. <em>Prosperity Ore</em> spawnt in der Overworld (Y ~ -20 bis 60) <strong>und</strong> in der Mining Dimension (Y 65-250, häufiger!). <em>Inferium Ore</em> gleich. Per kubejs werden beide in der Mining Dim zusätzlich platziert (<code>miningDim.js</code>) – die Mining Dim ist <strong>die</strong> effektivste Farm-Location. Inferium Essence droppt auch aus Mob-Kills.", guide: "ore-heights" },
      { id: "16b", text: "Infusion Altar + Pedestals bauen", detail: "{{infusion-altar|Infusion Altar}} + 8× <strong>Infusion Pedestals</strong> im Kreis. Hier werden höhere Essence-Tiers, Samen und Equipment gefertigt. Früh bauen – spart später unzählige Crafts." },
      { id: "16c", text: "Essence-Tiers hochleveln", detail: "4 Inferium → 1 Prudentium → 1 Tertium → 1 Imperium → 1 Supremium → 1 Insanium (Mystical Agradditions). Samen und Equipment höherer Tiers brauchen die entsprechende Essence." },
      { id: "16d", text: "Ressourcen-Samen craften", detail: "Z.B. <strong>Iron Seed</strong> = Crafting Seed + Inferium Essence + Eisen-Materialien (EMI). Wachsen wie Weizen → droppen Essenz → zurück zu Eisen. <em>Eine Farm = unbegrenzte Ressource.</em>" },
      { id: "16e", text: "Growth Accelerators unter Farmland", detail: "<strong>Growth Accelerators</strong> (Inferium bis Supremium Tier) unter dem Farmland = schnelleres Wachstum. Mehrere stapeln möglich. Für Diamond/Netherite-Farmen quasi Pflicht." },
    ],
  },
  {
    id: "p17", title: "Phase 17: Nether & Allthemodium", icon: "🔥", path: "endgame",
    desc: "Netherite schaltet Allthemodium frei",
    items: [
      { id: "17a", text: "Nether-Portal bauen", detail: "10+ Obsidian im Portal-Rahmen + Feuerzeug. Der Nether hat: <strong>Ancient Debris</strong> (Y 8–22), <strong>Nether Quartz</strong> (Y 10–117), <strong>Glowstone</strong>, <strong>Vibranium Ore</strong> (später, <em>nur in Crimson/Warped Forest!</em>), Cobblemon Nether-Mons." },
      { id: "17b", text: "Ancient Debris farmen (Y 8–22, am besten Y 15)", detail: "{{ancient-debris|Ancient Debris}} spawnt im Nether zwischen <strong>Y 8 und Y 22</strong>, Peak bei <strong>Y = 15</strong>. Methoden: {{bed-mining|Bed-Mining}} (Betten explodieren im Nether – gefährlich aber effizient!), <em>TNT-Mining</em>, oder <em>FTB Ultimine Tunnel-Mode</em>. Biome egal – spawnt in allen Nether-Biomen.", guide: "ore-heights" },
      { id: "17c", text: "Netherite Ingots herstellen", detail: "4 Netherite Scrap (Debris im Ofen) + 4 Gold = 1 Netherite Ingot. Tools am {{recipe:smithing-table|Smithing Table}}: Diamant-Tool + Netherite Upgrade Template + Ingot. Upgrade Template aus {{bastion|Bastion-Loot}}." },
      { id: "17d", text: "Allthemodium Ore finden (Deep Dark Biome!)", detail: "ATMons hat Allthemodium-Spawns per kubejs biome-tag auf <strong>nur {{deep-dark|Deep Dark Biome}}</strong> beschränkt (verifiziert: <code>data/atm10/tags/worldgen/biome/allthemodium_spawnable.json</code> — ein {{atmons-override|ATMons-Override}}). 2 Fundorte: <strong>1)</strong> Deep Dark Biome in der Overworld (unter Y -40, Ore leuchtet blau-grün!). <strong>2)</strong> {{mining-dimension|Mining Dimension}}: Y <strong>65–128</strong>, Peak ~95. In der Mining Dim ist Allthemodium <em>deutlich</em> häufiger als im Deep Dark. Braucht Netherite-Pickaxe.", guide: "ore-heights" },
      { id: "17e", text: "Mining Dimension freischalten", detail: "Allthemodium Nuggets → <strong>Teleport Pad</strong> craften (EMI) → in der Overworld platzieren → draufsteigen. Die {{mining-dimension|Mining Dim}} hat <strong>37+ Erze, keine feindlichen Mobs</strong> und ist die beste Farming-Location. Siehe Ore-Heights Guide für die 2 besten Strip-Mining-Levels (Y 0 für tiefe Erze, Y 95 für Allthemodium + Standard-Metalle).", guide: "ore-heights" },
      { id: "17f", text: "Allthemodium Book beschaffen", detail: "Quest-Belohnung oder Rezept. Erklärt alle Allthemodium-Dimensionen: <strong>Mining Dim, The Other, The Beyond</strong>. Pflichtlektüre für Endgame-Progression." },
    ],
  },
  {
    id: "p18", title: "Phase 18: Pokéball-Produktion automatisieren", icon: "🤖", path: "endgame",
    desc: "Pylons · Create · ME-System",
    items: [
      { id: "18a", text: "Pylons Mod für Apricorn-Farm", detail: "Die <strong>Pylons Mod</strong> definiert per kubejs automatisches Harvesting für alle 8 Aprikoko-Sorten (<code>data/pylons/recipe/harvesting/cobblemon/</code>). Pylon + Aprikoko-Baum = automatische Produktion." },
      { id: "18b", text: "8-Farben-Aprikoko-Farm anlegen", detail: "Ein Baum jeder Farbe (White, Yellow, Pink, Red, Green, Black, Blue, Brown) + je ein Pylon. Output in einer gemeinsamen Kiste sammeln." },
      { id: "18c", text: "Create Sequenced Assembly vollautomatisieren", detail: "Depot-Ketten + Deployer + Press → vollautomatische Ball-Produktion. Eingang: Apricorns aus der Pylon-Farm. Ausgang: fertige Pokébälle in ME-System." },
      { id: "18d", text: "Ball-Teile über ME sortieren", detail: "Blank Ball Lids, farbige Lids, Mechanisms: alle aus Loot → Import Bus in ME → Export Bus → Create Assembly Line. Voll-automatisch sobald einmal konfiguriert." },
      { id: "18e", text: "Ball-Lager als ME-Auto-Storage", detail: "Storage Bus an einer Sophisticated Storage Kiste = dein Pokéball-Lager ist Teil des ME-Netzwerks. Jeder Ball-Typ auf einen Blick abrufbar." },
    ],
  },
  {
    id: "p19", title: "Phase 19: Power-Ups & Magic", icon: "✨", path: "endgame",
    desc: "Fortune 5 · Flying Potion · Ars Spells",
    items: [
      { id: "19a", text: "EvilCraft Enchantment Extractor", detail: "<strong>EvilCraft</strong> Enchantment Extractor zieht Verzauberungen von Items auf Bücher. Kombiniere im Amboss: {{fortune|Fortune}} 3 + 3 = 4, 4 + 4 = {{fortune-5-extraction|Fortune 5}}. Massiv mehr Drops!" },
      { id: "19b", text: "Apotheosis Flying Potion Chain", detail: "<strong>Apotheosis</strong> erlaubt Potion-Chaining: <em>Slow Falling → Levitation → Flying Potion</em>. Auf 30 Min verlängern, kombinieren → <strong>permanenter Creative-Flug Toggle</strong>. Jetpack wird überflüssig. ({{flying-potion|Details}})" },
      { id: "19c", text: "Ars Nouveau Spells", detail: "<strong>Ars Nouveau</strong>: Glyphen lernen und zu eigenen Spells kombinieren. AOE-Damage, Projektile, Heilung, Teleport, Mining. Skaliert mit Source Pool. Addons wie <em>Ars Elemental, Ars Additions, Ars Elemancy</em> erweitern das System massiv." },
      { id: "19d", text: "Apothic Enchanting Tiers", detail: "{{apothic-enchanting|Apothic Enchanting}}: Erweiterte Bücherregal-Tiers (Sculk, Stone, Pedestals). Ermöglicht Enchants <em>weit über</em> Vanilla-Level 30. Key für High-Tier Silent Gear Builds." },
      { id: "19e", text: "Relics & Artifacts durchsuchen", detail: "{{relics-artifacts|Relics und Artifacts}}: starke {{curio-slot|Curio-Items}} aus Dungeon-Loot und Chests. Dauerhaft Dungeons looten lohnt sich – manche Items sind game-changing (Flug-Ringe, Damage-Boosts)." },
      { id: "19f", text: "Forbidden Arcanus Hephaestus Forge", detail: "<strong>Forbidden Arcanus</strong>: Die {{hephaestus-forge|Hephaestus Forge}} ist eine mehrstufige Upgrade-Struktur. <em>Tier 5 wird für den ATM Star gebraucht</em> – siehe Phase 22." },
      { id: "19g", text: "Curio-Slot-Setup optimieren", detail: "Nutze alle Curio-Slots: Ring, Ring, Necklace, Belt, Charm, Cape, Back. Kombinationen aus Relics/Artifacts/Mekanism/Caelus können dich fast unverwundbar machen." },
    ],
  },
  {
    id: "p20", title: "Phase 20: Die 3 Alloy-Routen", icon: "🔨", path: "endgame",
    desc: "Vibranium-Allthemodium, Unobtainium-Allthemodium, Unobtainium-Vibranium",
    items: [
      { id: "20a", text: "Alloy-System verstehen", detail: "Für den ATM Star brauchst du alle 3 Super-Alloys. Jedes wird über einen <em>anderen</em> Mod-Pfad produziert – ATMons spezifisch konfiguriert. 3 Routen: {{powah-energizing|Powah Energizing}}, {{ars-apparatus|Ars Apparatus}}, {{if-dissolution|IF Dissolution}}. Klick Guide für die vollständige Rezept-Liste.", guide: "alloys" },
      { id: "20b", text: "Vibranium Ore (Nether, NUR Crimson/Warped Forest!)", detail: "<strong>Vibranium</strong> nur mit Netherite-Pickaxe. ATMons hat per kubejs biome-tag verifiziert: Vibranium spawnt <em>ausschließlich</em> in <strong>Crimson Forest</strong> und <strong>Warped Forest</strong> — <em>nicht</em> in Nether Wastes, Basalt Deltas oder Soul Sand Valley! Y-Range ~64 bis ~127, optimal ~95. Nature's Compass hilft beim Finden des richtigen Biomes. Netherrack-Layer darunter komplett ignorieren.", guide: "ore-heights" },
      { id: "20c", text: "Unobtainium (End Highlands oder The Other!)", detail: "<strong>Unobtainium</strong> braucht Allthemodium-Pickaxe. ATMons hat 2 Quellen verifiziert: <strong>1) End Highlands Biome</strong> (per kubejs biome-tag: <code>unobtainium_spawnable.json</code> – nur in End Highlands, nicht in End Midlands/Barrens!). <strong>2) The Other Dimension</strong> (via Allthemodium Teleport Pad aus Allthemodium Nuggets). Beide Optionen extrem gefährlich – Endgame-Equipment + Totem Pflicht!", guide: "ore-heights" },
      { id: "20d", text: "Piglich Hearts für Powah-Route", detail: "Route 1 (<strong>Vibranium-Allthemodium</strong>) braucht <em>Piglich Hearts</em>. Piglichs spawnen in {{bastion|Bastion Remnants}} (alle Typen) im Nether. Sehr gefährlich – in Gruppen bekämpfen, Soul-Speed + Fire-Resistance empfohlen." },
      { id: "20e", text: "Ars Nouveau Enchanting Apparatus bauen", detail: "Route 2 (<strong>Unobtainium-Allthemodium</strong>) läuft über {{ars-apparatus|Ars Nouveau Enchanting Apparatus}} mit <em>10.000 Source Cost</em>. Benötigt große Source Pools + Sourcelinks rundherum." },
      { id: "20f", text: "Industrial Foregoing Dissolution Chamber", detail: "Route 3 (<strong>Unobtainium-Vibranium</strong>) läuft über die {{if-dissolution|Industrial Foregoing Dissolution Chamber}} mit Pink Slime + Soul Lava als Katalysator." },
    ],
  },
  {
    id: "p21", title: "Phase 21: Fremde Dimensionen", icon: "🌌", path: "endgame",
    desc: "The Other · Deeper & Darker · Eternal Starlight · Aether",
    items: [
      { id: "21a", text: "The Other (Allthemodium)", detail: "Über <strong>Teleport Pad aus Allthemodium Nuggets</strong> erreichbar. Schwebende Inseln, Piglich, <strong>Unobtainium Ore</strong>, Ancient Grass. Extrem gefährlich." },
      { id: "21b", text: "The Beyond (Allthemodium)", detail: "Noch tiefere Dimension – über Vibranium-Teleport-Pads. Ultra-gefährlich, extrem seltene Materialien. Nur mit vollem Endgame-Gear." },
      { id: "21c", text: "Deeper and Darker", detail: "Mod <strong>Deeper and Darker</strong>: Verbessertes Deep Dark mit eigener Dimension. Quelle für <strong>Warden-Materialien</strong>, Echo-Shards und Sculk-Zeug." },
      { id: "21d", text: "Eternal Starlight", detail: "Mod <strong>Eternal Starlight</strong>: Ätherische Dimension mit eigenen Biomen, Mobs und Bossen. Eigene Fortschritts-Quest-Line im Questbook. Magisch, nicht Tech-lastig." },
      { id: "21e", text: "Aether (Himmelsdimension)", detail: "Mod <strong>Aether</strong>: Klassische Himmelsdimension mit schwebenden Inseln, Moas (flugfähige Mounts), Skyroot-Bäumen. Optional aber sehr lohnend für Mobilität und Early Flight." },
      { id: "21f", text: "Undergarden & Bumblezone", detail: "<strong>Undergarden</strong>: Unterirdische Dimension mit eigenen Mobs/Erzen. <strong>Bumblezone</strong>: Riesen-Bienen-Dimension mit Pollen-Mechaniken. Beide liefern einzigartige Ressourcen für Quests." },
    ],
  },
  {
    id: "p22", title: "Phase 22: ATM Star Endgame", icon: "🌟", path: "endgame",
    desc: "Das ultimative Ziel",
    items: [
      { id: "22a", text: "ATM Star Rezept verstehen", detail: "Der ATM Star wird im <strong>Create Mechanical Crafter</strong> (9×9 Pattern) gecraftet. Benötigt <em>Unobtainium-Allthemodium Block, 2× Master Ball, 2× Nether Star Block</em> + viele Custom-Items aus dem gesamten Pack. Klick Guide für alle Sub-Quests.", guide: "atm-star" },
      { id: "22b", text: "2 Master Balls beschaffen!", detail: "<em>KRITISCH:</em> ATMons verlangt <strong>2 {{master-ball|Master Balls}}</strong>. Das Standard-Rezept ist entfernt. Quellen: {{raid-den|Raid Dens}}, {{battle-tower|Battle Tower}}, <strong>Quest-Belohnungen, Endgame-Loot</strong>. Früh anfangen zu sammeln!" },
      { id: "22c", text: "Forbidden Arcanus Rune Setup", detail: "Sub-Quest 1 des ATM Stars: 4× Rune Block, Quantum Injector, 5× Arcane Crystal Block bauen. Belohnung: Obsidian Dust, Steel Ingots, Souls." },
      { id: "22d", text: "Hephaestus Forge Tier 5", detail: "Sub-Quest 2: {{hephaestus-forge|Hephaestus Forge Tier 5}} mit Quantum Injector, 8× Darkstone Pedestals, komplexer Bauplattform. Belohnung: Souls, Arcane Crystal Dust, XP Bucket." },
      { id: "22e", text: "Enchantment Table Setup", detail: "Sub-Quest 3: Enchantment Table + Quantum Injector + 4× Soul Lantern + 8× Darkstone Pedestal. Belohnung: Experience Essence, Lapis, Writable Book." },
      { id: "22f", text: "Weitere ATM Star Sub-Quests", detail: "<strong>9 Sub-Quests insgesamt</strong> aus verschiedenen Mods (Building Tips, Juste Dire Things, etc.). Das Quest Book trackt alles – einfach Schritt für Schritt abarbeiten." },
      { id: "22g", text: "ATM Star craften!", detail: "Alle Sub-Quests fertig + alle Materialien im Mechanical Crafter (9×9). Belohnung: <strong>50× ATM Star Shard + 1× Patrick Star</strong> (Easter Egg) + 50 XP-Level. <em>Herzlichen Glückwunsch – du hast ATMons gemeistert.</em>" },
    ],
  },
);