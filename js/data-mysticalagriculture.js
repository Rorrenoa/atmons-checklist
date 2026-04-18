/* ============================================================
   MYSTICAL AGRICULTURE — Vollständiger Guide-Tab
   Wird als Tab im Hauptbereich angezeigt (nur für Profil "Mike")
   ============================================================ */
const MA_HTML = `
<div class="campaign-content" id="ma-top">

  <h2>🌱 Mystical Agriculture — Kompletter Guide</h2>
  <p>Vom ersten Inferium-Erz bis zur vollautomatischen Farm für ALLE Ressourcen.<br>
  <em>Alle Rezepte: bitte in <strong>EMI</strong> nachschlagen (können sich je nach Version ändern).</em></p>

  <div class="campaign-toc">
    <h3>📑 Inhaltsverzeichnis</h3>
    <a href="#ma-was-ist">Was ist Mystical Agriculture?</a>
    <a href="#ma-schritt1" class="toc-indent">Schritt 1: Erze sammeln</a>
    <a href="#ma-schritt2" class="toc-indent">Schritt 2: Infusion Altar bauen</a>
    <a href="#ma-schritt3" class="toc-indent">Schritt 3: Inferium-Farm</a>
    <a href="#ma-essenz-chain">Essenz-Upgrade-Kette</a>
    <a href="#ma-samen">Samen für alle wichtigen Erze</a>
    <a href="#ma-farmland">Farmland-Typen &amp; Wachstum</a>
    <a href="#ma-accelerators">Growth Accelerators</a>
    <a href="#ma-harvester">Automatisierung: Harvester</a>
    <a href="#ma-automation">Vollautomatische Farm</a>
    <a href="#ma-botany">Botany Pots Alternative</a>
    <a href="#ma-seedreprocessor">Seed Reprocessor</a>
    <a href="#ma-essenz-output">Essenz → Ressource umwandeln</a>
    <a href="#ma-atm-seeds">ATM-spezifische Samen (Tier 6)</a>
    <a href="#ma-tipps">Tipps &amp; Tricks</a>
  </div>

  <div class="warn"><strong>Wichtige Konfiguration in ATMons:</strong>
    <br>• <strong>requiresEffectiveFarmland = false</strong> → Samen können auf beliebigem Farmland wachsen (nicht nur tier-spezifischem)
    <br>• <strong>seedCraftingRecipes = false</strong> → Samen können NICHT am Crafting Table gebaut werden — nur am <strong>Infusion Altar</strong>!
    <br>• <strong>growthAcceleratorCooldown = 10s</strong> → Acceleratoren beschleunigen alle 10 Sekunden
    <br>• <strong>fertilizableTier6Crops = false</strong> → Tier-6-Samen (Allthemodium etc.) können NICHT gedüngt werden
  </div>

  <!-- ============ WAS IST MA ============ -->
  <h3 id="ma-was-ist">Was ist Mystical Agriculture?</h3>
  <p>Mystical Agriculture ermöglicht das <strong>Anbauen von Ressourcen</strong> wie Erzen, Metallen und sogar Mob-Drops als Pflanzen. Statt manuell zu minen, baust du Samen an, die Essenz produzieren — die Essenz wird dann zu echten Ressourcen umgewandelt.</p>

  <table>
    <tr><th>Begriff</th><th>Bedeutung</th></tr>
    <tr><td><strong>Inferium Essence</strong></td><td>Basis-Essenz, aus Anbau oder Mob-Drops (hier: deaktiviert). Wird zu höheren Essenzen upgegraded.</td></tr>
    <tr><td><strong>Prosperity Shard</strong></td><td>Zweiter Basis-Rohstoff, aus Prosperity Ore. Wird für Seed Bases und Infusion Crystals benötigt.</td></tr>
    <tr><td><strong>Resource Seed</strong></td><td>Der Samen für ein spezifisches Material (z.B. Iron Seeds, Diamond Seeds).</td></tr>
    <tr><td><strong>Resource Essence</strong></td><td>Was der Samen produziert (z.B. Iron Essence). Wird zu Ingots/Materialien gecraftet.</td></tr>
    <tr><td><strong>Infusion Crystal</strong></td><td>Wiederverwendbares Item (500 Nutzungen in ATMons) für Essenz-Upgrades und Samen-Crafting.</td></tr>
    <tr><td><strong>Infusion Altar</strong></td><td>Multi-Block-Maschine zum Herstellen von Samen und höheren Essenzen.</td></tr>
    <tr><td><strong>Growth Accelerator</strong></td><td>Block direkt unter der Pflanze — beschleunigt Wachstum (alle 10s ein Tick).</td></tr>
  </table>

  <!-- ============ SCHRITT 1 ============ -->
  <h3 id="ma-schritt1">Schritt 1: Die Basis-Erze sammeln</h3>
  <p>Zuerst brauchst du die zwei Grundmaterialien — beide als Erz in der Welt:</p>

  <table>
    <tr><th>Erz</th><th>Wo</th><th>Mining-Tier</th><th>Für was</th></tr>
    <tr>
      <td><strong>Inferium Ore</strong></td>
      <td>Overworld (Y 0–80) + Nether + End (via MysticalAgradditions). Mining Dimension: Y 65–250</td>
      <td>Stein-Spitzhacke</td>
      <td>Inferium Essence (Basis für alles)</td>
    </tr>
    <tr>
      <td><strong>Prosperity Ore</strong></td>
      <td>Overworld (Y 0–80) + Nether + End. Mining Dimension: Y 65–250</td>
      <td>Stein-Spitzhacke</td>
      <td>Prosperity Shards (für Seed Bases &amp; Crystals)</td>
    </tr>
  </table>

  <div class="info"><strong>Tipp:</strong> Beide Erze spawnen in der Mining Dimension häufig zwischen Y 65–250 — ideal zum Massenfarmen. Mit Fortune-Spitzhacke deutlich mehr Drops. Inferium Ore droppt 2–4 Essenz (Fortune erhöht das).</div>

  <p>Wie viel brauchst du zum Starten?</p>
  <ul>
    <li>Mindestens <strong>40 Prosperity Shards</strong> (für erste Seed Base + Infusion Crystal + Infusion Altar)</li>
    <li>Mindestens <strong>64 Inferium Essence</strong> (für erste Infusion Crystal + Prudentium Essence)</li>
  </ul>

  <!-- ============ SCHRITT 2 ============ -->
  <h3 id="ma-schritt2">Schritt 2: Infusion Altar bauen</h3>
  <p>Der Infusion Altar ist die Kernmaschine für Mystical Agriculture. Er besteht aus:</p>
  <ul>
    <li><strong>1× Infusion Altar</strong> (3 Stein + 1 Red Wool + 2 Gold Ingots — Rezept in EMI prüfen)</li>
    <li><strong>8× Infusion Pedestals</strong> (jeweils Stone + Prosperity Shard — Rezept in EMI prüfen)</li>
  </ul>

  <p><strong>Aufbau:</strong> Stelle den Altar in die Mitte. Die 8 Pedestals werden um den Altar herum platziert — der Altar zeigt dir durch Partikel/Highlighting wo sie hingehören. Lege einfach den Altar hin und die möglichen Pedestal-Positionen leuchten auf.</p>

  <div class="info"><strong>Wie benutzen:</strong>
    <br>1. Lege den zentralen Slot-Item (z.B. Prosperity Seed Base) auf den Altar (Rechtsklick auf Altar)
    <br>2. Lege die Zutaten auf die 8 Pedestals (je 1 Item pro Pedestal)
    <br>3. Rechtsklick auf den Altar mit dem Infusion Crystal → Crafting startet
    <br>4. Ergebnis liegt im Altar-Ausgabe-Slot
  </div>

  <p><strong>Infusion Crystal craften</strong> (am normalen Crafting Table):</p>
  <ul>
    <li>Muster: Diagonal Inferium Essence (4×) + Prosperity Shards (4×) + Diamond in der Mitte</li>
    <li>Rezept genau in EMI prüfen — ergibt 1 Crystal mit <strong>500 Nutzungen</strong> in ATMons</li>
  </ul>

  <div class="warn"><strong>Wichtig:</strong> Der Infusion Crystal hat in ATMons nur <strong>500 Nutzungen</strong> (Standard wäre 1000). Craftet mehrere rechtzeitig! Ein Crystal kostet ~4 Prosperity Shards + ~4 Inferium Essence + 1 Diamond.</div>

  <!-- ============ SCHRITT 3 ============ -->
  <h3 id="ma-schritt3">Schritt 3: Inferium-Farm aufbauen</h3>
  <p>Die Inferium-Farm ist der erste und wichtigste Schritt — sie produziert die Basis-Essenz für ALLE weiteren Upgrades.</p>

  <p><strong>Was du brauchst:</strong></p>
  <ul>
    <li>1× Inferium Seeds (am Crafting Table: 8× Inferium Essence + 1 Wheat Seed — Rezept in EMI prüfen)</li>
    <li>Farmland (normales Farmland reicht dank <code>requiresEffectiveFarmland = false</code>)</li>
    <li>Optional: Growth Accelerators (direkt unter die Farmland-Blöcke)</li>
  </ul>

  <div class="info"><strong>Tipp für Early-Game:</strong> Baue sofort eine 9×9 oder 13×13 Inferium-Farm mit Growth Accelerators darunter. Je mehr Inferium du producierst, desto schneller kommst du an höhere Essenz-Tiers.</div>

  <!-- ============ ESSENZ CHAIN ============ -->
  <h3 id="ma-essenz-chain">Die Essenz-Upgrade-Kette</h3>
  <p>Inferium Essence kann stufenweise zu höheren Essenzen aufgewertet werden. Jede Stufe benötigt 4× die vorherige Essenz + 1 Infusion Crystal (am normalen Crafting Table!):</p>

  <table>
    <tr><th>Essenz</th><th>Rezept</th><th>Tier</th><th>Samen für...</th></tr>
    <tr>
      <td><strong>Inferium Essence</strong></td>
      <td>Direkt aus Inferium-Farm / Ore</td>
      <td>Tier 1</td>
      <td>Coal, Dirt, Stone, Wood, Chicken, Pig, Cow, Sheep, Fish</td>
    </tr>
    <tr>
      <td><strong>Prudentium Essence</strong></td>
      <td>4× Inferium + Crystal (Crafting Table)</td>
      <td>Tier 2</td>
      <td>Iron, Copper, Redstone, Lapis, Glowstone, Nether Quartz, Prismarine</td>
    </tr>
    <tr>
      <td><strong>Tertium Essence</strong></td>
      <td>4× Prudentium + Crystal (Crafting Table)</td>
      <td>Tier 3</td>
      <td>Gold, Tin, Lead, Zinc, Aluminum, Silver, Nickel, Osmium, Fluorite</td>
    </tr>
    <tr>
      <td><strong>Imperium Essence</strong></td>
      <td>4× Tertium + Crystal (Crafting Table)</td>
      <td>Tier 4</td>
      <td>Diamond, Emerald, Platinum, Uranium, Netherite, Certus Quartz</td>
    </tr>
    <tr>
      <td><strong>Supremium Essence</strong></td>
      <td>4× Imperium + Crystal (Crafting Table)</td>
      <td>Tier 5</td>
      <td>Nether Star, Dragon Egg, Elytra, Wither Skeleton, Enderman</td>
    </tr>
  </table>

  <div class="info"><strong>Umrechnungsrate:</strong> 4 Essenz der Tier N → 1 Essenz der Tier N+1. Das bedeutet: für 1 Supremium Essence brauchst du 4^4 = 256 Inferium Essence. Deshalb ist eine große Inferium-Farm so wichtig!</div>

  <!-- ============ SAMEN ============ -->
  <h3 id="ma-samen">Samen für alle wichtigen Erze</h3>
  <p>Alle Samen werden am <strong>Infusion Altar</strong> gecraftet (nicht am Crafting Table!). Das Muster ist immer gleich:</p>
  <ul>
    <li>Altar: <strong>Prosperity Seed Base</strong> (aus 4× Prosperity Shard + Wheat Seed — Rezept in EMI)</li>
    <li>4 Pedestals (alternierend): <strong>Tier-Essenz</strong> des Samens</li>
    <li>4 Pedestals (alternierend): <strong>Material</strong> (das Erz/Item selbst)</li>
  </ul>

  <table>
    <tr><th>Samen</th><th>Tier</th><th>Benötigte Essenz</th><th>Material auf Pedestals</th><th>Produkt</th></tr>
    <tr><td>Coal Seeds</td><td>1</td><td>Inferium Essence</td><td>Coal</td><td>Coal Essence → 12 Coal (8× Essence)</td></tr>
    <tr><td>Iron Seeds</td><td>2</td><td>Prudentium Essence</td><td>Iron Ingot</td><td>Iron Essence → 6 Iron Ingot (8× Essence)</td></tr>
    <tr><td>Copper Seeds</td><td>2</td><td>Prudentium Essence</td><td>Copper Ingot</td><td>Copper Essence → 6 Copper Ingot (8× Essence)</td></tr>
    <tr><td>Redstone Seeds</td><td>2</td><td>Prudentium Essence</td><td>Redstone</td><td>Redstone Essence → 12 Redstone (8× Essence)</td></tr>
    <tr><td>Lapis Seeds</td><td>2</td><td>Prudentium Essence</td><td>Lapis Lazuli</td><td>Lapis Essence → 12 Lapis (8× Essence)</td></tr>
    <tr><td>Gold Seeds</td><td>3</td><td>Tertium Essence</td><td>Gold Ingot</td><td>Gold Essence → 4 Gold Ingot (8× Essence)</td></tr>
    <tr><td>Tin Seeds</td><td>3</td><td>Tertium Essence</td><td>Tin Ingot</td><td>Tin Essence → 4 Tin Ingot (8× Essence)</td></tr>
    <tr><td>Lead Seeds</td><td>3</td><td>Tertium Essence</td><td>Lead Ingot</td><td>Lead Essence → 4 Lead Ingot (8× Essence)</td></tr>
    <tr><td>Silver Seeds</td><td>3</td><td>Tertium Essence</td><td>Silver Ingot</td><td>Silver Essence → 4 Silver Ingot (8× Essence)</td></tr>
    <tr><td>Nickel Seeds</td><td>3</td><td>Tertium Essence</td><td>Nickel Ingot</td><td>Nickel Essence → 4 Nickel Ingot (8× Essence)</td></tr>
    <tr><td>Zinc Seeds</td><td>3</td><td>Tertium Essence</td><td>Zinc Ingot</td><td>Zinc Essence → 4 Zinc Ingot (8× Essence)</td></tr>
    <tr><td>Osmium Seeds</td><td>3</td><td>Tertium Essence</td><td>Osmium Ingot</td><td>Osmium Essence → 4 Osmium Ingot (8× Essence)</td></tr>
    <tr><td>Aluminum Seeds</td><td>3</td><td>Tertium Essence</td><td>Aluminum Ingot</td><td>Aluminum Essence → 4 Aluminum Ingot (8× Essence)</td></tr>
    <tr><td>Platinum Seeds</td><td>4</td><td>Imperium Essence</td><td>Platinum Ingot</td><td>Platinum Essence → 4 Platinum Ingot (8× Essence)</td></tr>
    <tr><td>Diamond Seeds</td><td>4</td><td>Imperium Essence</td><td>Diamond</td><td>Diamond Essence → 1 Diamond (9× Essence)</td></tr>
    <tr><td>Emerald Seeds</td><td>4</td><td>Imperium Essence</td><td>Emerald</td><td>Emerald Essence → 1 Emerald (9× Essence)</td></tr>
    <tr><td>Uranium Seeds</td><td>4</td><td>Imperium Essence</td><td>Uranium Ingot</td><td>Uranium Essence → 4 Uranium Ingot (8× Essence)</td></tr>
    <tr><td>Netherite Seeds</td><td>4</td><td>Imperium Essence</td><td>Netherite Ingot</td><td>Netherite Essence → 1 Netherite Ingot (8× Essence)</td></tr>
  </table>

  <div class="warn"><strong>Essenz → Ressource:</strong> Das Umwandeln läuft am normalen Crafting Table mit einem speziellen Muster (8 Essenz im Ring = Produkt in der Mitte). Genaue Rezepte immer in EMI prüfen!</div>

  <!-- ============ FARMLAND ============ -->
  <h3 id="ma-farmland">Farmland-Typen &amp; Wachstumsgeschwindigkeit</h3>
  <p>In ATMons gilt: <code>requiresEffectiveFarmland = false</code> — Samen wachsen auf JEDEM Farmland. Aber <strong>Essence Farmland</strong> erhöht die Wachstumsgeschwindigkeit:</p>

  <table>
    <tr><th>Farmland-Typ</th><th>Wachstums-Bonus</th><th>Wie erhalten</th></tr>
    <tr><td>Normales Farmland</td><td>Kein Bonus (Basis)</td><td>Hacke auf Erde</td></tr>
    <tr><td>Inferium Farmland</td><td>+10% Wachstum</td><td>Rechtsklick Farmland mit Inferium Essence</td></tr>
    <tr><td>Prudentium Farmland</td><td>+25% Wachstum</td><td>Rechtsklick Farmland mit Prudentium Essence</td></tr>
    <tr><td>Tertium Farmland</td><td>+50% Wachstum</td><td>Rechtsklick Farmland mit Tertium Essence</td></tr>
    <tr><td>Imperium Farmland</td><td>+75% Wachstum</td><td>Rechtsklick Farmland mit Imperium Essence</td></tr>
    <tr><td>Supremium Farmland</td><td>+100% Wachstum (2×)</td><td>Rechtsklick Farmland mit Supremium Essence</td></tr>
  </table>

  <div class="info">Alle Samen wachsen auch auf normalem Farmland — Essence Farmland ist ein optionaler Bonus. Starte mit normalem Farmland und upgrade später wenn du genug Essenz hast.</div>

  <!-- ============ ACCELERATORS ============ -->
  <h3 id="ma-accelerators">Growth Accelerators</h3>
  <p>Growth Accelerators sind Blöcke die <strong>direkt unter die Farmland-Blöcke</strong> (nicht unter die Pflanze selbst!) platziert werden und einen zusätzlichen Wachstums-Tick alle 10 Sekunden auslösen.</p>

  <table>
    <tr><th>Accelerator</th><th>Tier</th><th>Benötigt</th><th>Stacked?</th></tr>
    <tr><td>Inferium Growth Accelerator</td><td>1</td><td>Inferium Essence + Stein</td><td>Ja</td></tr>
    <tr><td>Prudentium Growth Accelerator</td><td>2</td><td>Prudentium Essence + Stein</td><td>Ja</td></tr>
    <tr><td>Tertium Growth Accelerator</td><td>3</td><td>Tertium Essence + Stein</td><td>Ja</td></tr>
    <tr><td>Imperium Growth Accelerator</td><td>4</td><td>Imperium Essence + Stein</td><td>Ja</td></tr>
    <tr><td>Supremium Growth Accelerator</td><td>5</td><td>Supremium Essence + Stein</td><td>Ja</td></tr>
    <tr><td>Awakened Supremium Accelerator</td><td>6</td><td>Awakened Supremium</td><td>Ja</td></tr>
  </table>

  <p><strong>Stapeln:</strong> Mehrere Accelerators können <strong>direkt übereinander</strong> gestapelt werden (unter dem Farmland-Block). Jeder Accelerator feuert unabhängig → mehr Accelerators = schnelleres Wachstum. Typisch: 3–6 Accelerators pro Pflanzenpatch für gutes Early-Mid-Game Tempo.</p>

  <div class="info"><strong>Platzierungs-Schema:</strong>
    <pre>[ Pflanze      ]  ← Farmland-Ebene
[ Farmland     ]  ← Farmland-Block
[ Accelerator  ]  ← Ebene -1 (direkt unter Farmland)
[ Accelerator  ]  ← Ebene -2
[ Accelerator  ]  ← Ebene -3 (usw.)</pre>
    Jede Ebene unter dem Farmland kann einen Accelerator halten. ATMons-Config: alle 10 Sekunden ein zusätzlicher Tick pro Accelerator.
  </div>

  <!-- ============ HARVESTER ============ -->
  <h3 id="ma-harvester">Automatisierung: Der Harvester</h3>
  <p>Der <strong>Harvester</strong> (MA-Maschine) erntet automatisch alle reifen Pflanzen in einem 9×9 Bereich und legt die Drops in seinen internen Inventar. Kein Strom nötig!</p>

  <ul>
    <li>Platzierung: <strong>1 Block über dem Boden</strong> am Rand der Farm, nicht auf dem Farmland</li>
    <li>Reichweite: 9×9 Felder</li>
    <li>Erntet nur reife Pflanzen (kein Abbrechen von wachsenden)</li>
    <li>Ausgabe: über Hopper/Pipe an Storage anschließen</li>
    <li><strong>Upgrade-Slots</strong>: Speed Upgrades können eingesetzt werden für schnellere Ernte-Intervalle</li>
  </ul>

  <div class="info"><strong>Wichtig zur Kompatibilität:</strong> Der Harvester braucht keinen Strom (FE). Er ist ein reines Redstone-unabhängiges Gerät. Perfekt als erster Automatisierungsschritt ohne Energie-Infrastruktur.</div>

  <!-- ============ VOLLAUTOMATISCHE FARM ============ -->
  <h3 id="ma-automation">Vollautomatische Farm — Schritt für Schritt</h3>

  <div class="info"><strong>Benötigte Komponenten:</strong>
    <br>• Mystical Agriculture Harvester (1 pro 9×9 Bereich)
    <br>• Hopper oder Item-Pipe (LaserIO / Pipez / XNet) für Transport
    <br>• Storage (Chest, Sophisticated Storage, AE2 ME-System)
    <br>• Optional: Crafting-Automatisierung für Essenz → Ingots
  </div>

  <h4>Phase 1: Manuelle Farm (Early-Game)</h4>
  <ol>
    <li>9×9 oder 13×13 Inferium-Farm anlegen</li>
    <li>Normales Farmland (kein Wasser nötig wenn Farmland feucht bleibt)</li>
    <li>Growth Accelerators (Tier 1) direkt unter jedem Farmland-Block stapeln (3–5 hoch)</li>
    <li>Inferium Seeds auf jeden Farmland-Block</li>
    <li>Harvester am Rand platzieren</li>
    <li>Hopper unter Harvester → Chest</li>
  </ol>

  <h4>Phase 2: Automatische Essenz-Verarbeitung (Mid-Game)</h4>
  <ol>
    <li>AE2 ME-System oder Sophisticated Storage für alle Essenzen aufbauen</li>
    <li>Crafting-Karten/Patterns für Essenz-Upgrades (Inferium → Prudentium usw.) definieren</li>
    <li>Separate Felder für jede Samen-Art anlegen (Tier 2–4 Samen)</li>
    <li>Harvester für jede Farm-Sektion</li>
    <li>Alle Drops ins gleiche AE2-Netzwerk funneln</li>
  </ol>

  <h4>Phase 3: Vollautomatisierung mit AE2 (Late-Mid-Game)</h4>
  <ol>
    <li>ME Crafting Terminal nutzen um Essenzen On-Demand zu Ressourcen zu craften</li>
    <li>Auto-Crafting Patterns für alle Essenz → Ressource Rezepte hinterlegen</li>
    <li>ME Import Bus von Harvester direkt ins Netzwerk</li>
    <li>Resultat: alle Ressourcen werden automatisch aus der Farm produziert und ins System gelagert</li>
  </ol>

  <div class="warn"><strong>Farm-Layout-Tipp:</strong> Baue Farmen in einem Raster aus 9×9-Sektionen. Jede Sektion hat ihren eigenen Harvester. Zwischen den Sektionen lässt du 1 Block Abstand für Hopper/Pipe-Routing.</div>

  <!-- ============ BOTANY POTS ============ -->
  <h3 id="ma-botany">Botany Pots — Alternative für Anfänger</h3>
  <p>Botany Pots mit der Mystical Agriculture Compat sind in ATMons aktiv (<code>botanypotsmystical</code> Mod ist installiert). Botany Pots sind eine Variante der Farm für <strong>kompakte Setups</strong>.</p>

  <table>
    <tr><th>Merkmal</th><th>Botany Pot</th><th>Normales Farmland + Harvester</th></tr>
    <tr><td>Platz</td><td>1 Block pro Pflanze (vertikal stapelbar)</td><td>9×9 Fläche pro Harvester</td></tr>
    <tr><td>Strom</td><td>Keiner</td><td>Keiner</td></tr>
    <tr><td>Automatisch?</td><td>Ja (built-in Output)</td><td>Ja (Harvester + Hopper)</td></tr>
    <tr><td>Soil-Tier</td><td>Muss Tier des Samens entsprechen</td><td>Beliebig (ATMons-Config)</td></tr>
    <tr><td>Seed-Drops</td><td>In ATMons: <strong>deaktiviert</strong> (<code>allow_seed_drops = false</code>)</td><td>Möglich</td></tr>
    <tr><td>Fertilized Essence</td><td>Aktiv (10% Chance)</td><td>Aktiv (10% Chance)</td></tr>
    <tr><td>Geschwindigkeit</td><td>Mit Catalyst schneller</td><td>Mit Accelerators skalierbar</td></tr>
  </table>

  <div class="warn"><strong>Wichtig für ATMons:</strong> In Botany Pots sind Seed-Drops <strong>deaktiviert</strong> (<code>allow_seed_drops = false</code>). Du erhältst nur die Essenz, keine zusätzlichen Samen. Für Massenfarmung von Essenz sind normale Felder + Harvester besser skalierbar.</div>

  <div class="info"><strong>Soil-Tier in Botany Pots:</strong> Das Pot braucht Soil des gleichen Tiers wie der Samen. Inferium Soil für Tier-1-Samen, Prudentium Soil für Tier-2-Samen usw. Soil craften mit Essenz + Dirt — Rezept in EMI prüfen.</div>

  <!-- ============ SEED REPROCESSOR ============ -->
  <h3 id="ma-seedreprocessor">Seed Reprocessor</h3>
  <p>Der <strong>Seed Reprocessor</strong> wandelt überschüssige Seeds in Essenz zurück um. Nützlich wenn du von einer Farm überversorgt wirst oder Samen der falschen Art hast.</p>

  <ul>
    <li>Input: 1 Seed beliebiger Art</li>
    <li>Output: Tier-Essenz des Samens (z.B. Iron Seeds → Prudentium Essence)</li>
    <li>Benötigt: Strom (FE) — vergleichsweise geringe Menge</li>
    <li>Hauptnutzen: Überschuss-Samen recyceln, Essenz-Tiers auffüllen</li>
  </ul>

  <!-- ============ ESSENZ OUTPUT ============ -->
  <h3 id="ma-essenz-output">Essenz → Ressource umwandeln</h3>
  <p>Geerntete Ressourcen-Essenz wird am <strong>normalen Crafting Table</strong> zu echten Items umgewandelt:</p>

  <table>
    <tr><th>Essenz</th><th>Muster</th><th>Ergebnis</th></tr>
    <tr><td>Coal Essence (×8)</td><td>8 im Ring (mittleres Feld leer)</td><td>12 Coal</td></tr>
    <tr><td>Iron Essence (×8)</td><td>8 im Ring (mittleres Feld leer)</td><td>6 Iron Ingot</td></tr>
    <tr><td>Copper Essence (×8)</td><td>8 im Ring</td><td>6 Copper Ingot</td></tr>
    <tr><td>Redstone Essence (×8)</td><td>8 im Ring</td><td>12 Redstone</td></tr>
    <tr><td>Lapis Essence (×8)</td><td>8 im Ring</td><td>12 Lapis Lazuli</td></tr>
    <tr><td>Gold Essence (×8)</td><td>8 im Ring</td><td>4 Gold Ingot</td></tr>
    <tr><td>Tin Essence (×8)</td><td>8 im Ring</td><td>4 Tin Ingot</td></tr>
    <tr><td>Lead Essence (×8)</td><td>8 im Ring</td><td>4 Lead Ingot</td></tr>
    <tr><td>Osmium Essence (×8)</td><td>8 im Ring</td><td>4 Osmium Ingot</td></tr>
    <tr><td>Platinum Essence (×8)</td><td>8 im Ring</td><td>4 Platinum Ingot</td></tr>
    <tr><td>Diamond Essence (×9)</td><td>9 voll (3×3)</td><td>1 Diamond</td></tr>
    <tr><td>Emerald Essence (×9)</td><td>9 voll (3×3)</td><td>1 Emerald</td></tr>
    <tr><td>Netherite Essence (×8)</td><td>8 im Ring</td><td>1 Netherite Ingot</td></tr>
  </table>

  <div class="info"><strong>Auto-Crafting:</strong> Mit AE2 kannst du Patterns für alle Essenz-zu-Item Rezepte hinterlegen. Dann läuft die gesamte Kette vom Samen bis zum fertigen Ingot vollautomatisch!</div>

  <!-- ============ ATM SEEDS ============ -->
  <h3 id="ma-atm-seeds">ATM-spezifische Samen (Tier 6)</h3>
  <p>Durch Mystical Agradditions gibt es Tier-6-Samen für die ATM-Erze. Diese sind die mächtigsten Seeds im Pack:</p>

  <table>
    <tr><th>Samen</th><th>Tier</th><th>Besonderheit</th></tr>
    <tr><td>Allthemodium Seeds</td><td>6</td><td>Kann <strong>nicht</strong> gedüngt werden (Config: fertilizableTier6Crops = false). Benötigt Supremium Essence + Allthemodium Ingot am Altar.</td></tr>
    <tr><td>Vibranium Seeds</td><td>6</td><td>Wie Allthemodium. Vibranium-Ingot nötig.</td></tr>
    <tr><td>Unobtainium Seeds</td><td>6</td><td>Wie Allthemodium. Unobtainium-Ingot nötig.</td></tr>
  </table>

  <div class="warn"><strong>Voraussetzung:</strong> Tier-6-Samen erfordern dass du bereits Allthemodium/Vibranium/Unobtainium abbaust — daher Late-Game. Die Samen sind dann aber die einzige Möglichkeit diese Materialien <em>unbegrenzt</em> zu produzieren ohne ständig in die Mining Dimension zu müssen.</div>

  <!-- ============ TIPPS ============ -->
  <h3 id="ma-tipps">Tipps &amp; Tricks</h3>

  <table>
    <tr><th>Situation</th><th>Lösung</th></tr>
    <tr>
      <td>Inferium wächst zu langsam</td>
      <td>Mehr Growth Accelerators stapeln (5–8 tief). Tier-1-Accelerators kosten kaum — bau viele davon früh!</td>
    </tr>
    <tr>
      <td>Infusion Crystal läuft aus (500 Nutzungen)</td>
      <td>Immer 2–3 Crystals auf Vorrat haben. 1 Crystal = ~4 Prosperity Shards + 4 Inferium Essence + 1 Diamond</td>
    </tr>
    <tr>
      <td>Tier-4-Samen brauchen Diamond — woher?</td>
      <td>Erst Diamond minen (Eisen-Spitzhacke reicht für Diamond-Ore!), dann Diamond Seeds craften → selbst produzieren</td>
    </tr>
    <tr>
      <td>Osmium Seeds für Mekanism</td>
      <td>Osmium Seeds sind Tier 3 — früher erreichbar als Osmium-Mining (das Diamant-Pickaxe braucht). Priorität: Osmium Seeds vor Mekanism starten!</td>
    </tr>
    <tr>
      <td>Zu wenig Prosperity Shards</td>
      <td>Mining Dimension zwischen Y 65–250 — Prosperity Ore ist dort sehr häufig. Fortune III auf der Spitzhacke maximiert den Ertrag.</td>
    </tr>
    <tr>
      <td>Netherite über MA farmen</td>
      <td>Netherite Seeds sind Tier 4 (Imperium Essence + Netherite Ingot). 8 Essence → 1 Netherite Ingot. Sehr effizient im Late-Game!</td>
    </tr>
    <tr>
      <td>Pflanzen wachsen nicht</td>
      <td>Farmland muss feucht sein (Wasser in Reichweite) ODER du nutzt Essence Farmland (kein Wasser nötig). Licht ≥ 9 notwendig!</td>
    </tr>
    <tr>
      <td>Master Infusion Crystal</td>
      <td>Benötigt 4× Supremium Essence (spät!) + weitere Materialien. Hat unbegrenzte Nutzungen — Endgame-Upgrade des normalen Crystals.</td>
    </tr>
  </table>

  <h4>Empfohlene Prioritäten-Reihenfolge</h4>
  <ol>
    <li>🟢 <strong>Inferium &amp; Prosperity Ore minen</strong> (Stein-Spitzhacke, Mining Dim Y 65–250)</li>
    <li>🟢 <strong>Infusion Crystal + Altar + Pedestals</strong> bauen</li>
    <li>🟢 <strong>Inferium-Farm</strong> mit Tier-1-Accelerators (9×9 minimum)</li>
    <li>🟢 <strong>Harvester</strong> + Hopper-Output aufbauen</li>
    <li>🟡 <strong>Prudentium Essence</strong> farmen → Iron/Copper/Redstone/Lapis Seeds</li>
    <li>🟡 <strong>Tertium Essence</strong> → Osmium Seeds (Mekanism ohne Mining!), Gold, Tin, Lead, Silver Seeds</li>
    <li>🟠 <strong>Imperium Essence</strong> → Diamond, Emerald, Platinum, Netherite Seeds</li>
    <li>🔴 <strong>Supremium Essence</strong> → Nether Star Seeds, Tier-6 vorbereiten</li>
    <li>🔴 <strong>Tier-6 Seeds</strong> (Allthemodium, Vibranium, Unobtainium) wenn Late-Game-Ores vorhanden</li>
  </ol>

  <div class="info"><strong>Synergien mit anderen Mods:</strong>
    <br>• <strong>AE2:</strong> ME-Import-Bus direkt an Harvester → alles automatisch ins Lager
    <br>• <strong>Mekanism:</strong> Osmium Seeds bedeuten: Mekanism startet ohne Diamond-Pickaxe-Grind!
    <br>• <strong>Botany Pots:</strong> Für kompakte Setups in kleinen Räumen ideal
    <br>• <strong>Pylons:</strong> Für Aprikoko-Farming (Pokéball-Zutaten) — nicht MA, aber ähnliches Konzept
  </div>

  <a href="#ma-top" class="back-to-top" style="display:block;text-align:right;margin-top:20px;">↑ Nach oben</a>

</div>
`;
