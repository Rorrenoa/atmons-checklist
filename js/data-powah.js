/* ============================================================
   POWAH — Vollständiger Guide-Tab (Nitro Reactor als Endziel)
   Wird als Tab im Hauptbereich angezeigt (nur für Profil "Mike")
   Tooltips: {{term-key|Display-Text}} → wird via transformTerms() aufgelöst
   ============================================================ */
const POWAH_HTML = `
<div class="campaign-content" id="powah-top">

  <h2>⚡ Powah — Der Weg zum Nitro Reactor</h2>
  <p>Vom ersten Uraninite-Erz bis zu <strong>500.000 FE/t</strong> stabiler, skalierbarer Stromerzeugung — das Endziel für "nie wieder Strom-Sorgen".<br>
  <em>Alle Rezepte: bitte in <strong>EMI</strong> nachschlagen (bestätigen).</em></p>

  <div class="warn"><strong>Warum Powah in ATMons?</strong>
    <br>Das Pack hat Mekanism bewusst genervt (Ethen ÷40, Fission ÷4, SPS ÷10 — Quelle: <code>kubejs/.../Rebalance/rebalance.md</code>) und andere Generatoren gebufft "to match powah". Der Nitro Reactor liefert <strong>500.000 FE/t default, nicht genervt</strong>, ist linear parallelisierbar und hat <strong>keinen Meltdown</strong>.
  </div>

  <div class="campaign-toc">
    <h3>📑 Inhaltsverzeichnis</h3>
    <a href="#powah-overview">Die Roadmap auf einen Blick</a>
    <a href="#powah-step1" class="toc-indent">Schritt 1: Uraninite-Erz sammeln</a>
    <a href="#powah-step2" class="toc-indent">Schritt 2: Dielectric Paste &amp; Rods</a>
    <a href="#powah-step3" class="toc-indent">Schritt 3: Bootstrap-Power (Thermo / Magmator)</a>
    <a href="#powah-step4" class="toc-indent">Schritt 4: Energizing Orb (Starter → Basic)</a>
    <a href="#powah-step5" class="toc-indent">Schritt 5: Energized Steel &amp; Hardened-Tier</a>
    <a href="#powah-step6" class="toc-indent">Schritt 6: Basic Reactor (erster Strom-Sprung)</a>
    <a href="#powah-step7" class="toc-indent">Schritt 7: Blazing Crystal (Nether-Farm)</a>
    <a href="#powah-step8" class="toc-indent">Schritt 8: Niotic Crystal (Diamant)</a>
    <a href="#powah-step9" class="toc-indent">Schritt 9: Spirited Crystal (Emerald)</a>
    <a href="#powah-step10" class="toc-indent">Schritt 10: Nitro Crystal (Nether Star!)</a>
    <a href="#powah-step11" class="toc-indent">Schritt 11: Nitro Reactor bauen &amp; starten</a>
    <a href="#powah-automation">Automatisierung: Was MUSS laufen?</a>
    <a href="#powah-scaling">Skalierung: 1 → 4 Reactors</a>
    <a href="#powah-shopping">Shopping-Liste (für 1× Nitro Reactor)</a>
    <a href="#powah-troubleshoot">Troubleshooting</a>
  </div>

  <!-- ============ OVERVIEW ============ -->
  <h3 id="powah-overview">Die Roadmap auf einen Blick</h3>
  <p>Der Weg von "kein Strom" zu "Nitro Reactor läuft" hat ~11 Schritte. Die Reihenfolge ist kritisch — du kannst nicht Stufen überspringen, weil jede Reactor/Capacitor-Stufe die vorherige als Zutat braucht.</p>

  <table>
    <tr><th>#</th><th>Meilenstein</th><th>Kritische Ressource</th><th>FE/t (grob)</th></tr>
    <tr><td>1</td><td>Uraninite-Stash</td><td>Powah-Erz (Y &lt; 20)</td><td>—</td></tr>
    <tr><td>2</td><td>Dielectric Paste</td><td>Coal + Clay + Lava</td><td>—</td></tr>
    <tr><td>3</td><td>Bootstrap-Power</td><td>Lava-Bucket</td><td>40–150</td></tr>
    <tr><td>4</td><td>Energizing Orb (Starter)</td><td>Redstone + Paste</td><td>—</td></tr>
    <tr><td>5</td><td>Energized Steel</td><td>Iron + Gold</td><td>—</td></tr>
    <tr><td>6</td><td>Basic Reactor</td><td>Uraninite × 5</td><td>~2.000</td></tr>
    <tr><td>7</td><td>Blazing Crystal</td><td>Blaze Rods (120k FE)</td><td>—</td></tr>
    <tr><td>8</td><td>Niotic Crystal</td><td>Diamond (300k FE)</td><td>—</td></tr>
    <tr><td>9</td><td>Spirited Crystal</td><td>Emerald (1M FE)</td><td>—</td></tr>
    <tr><td>10</td><td>Nitro Crystal</td><td>Nether Star (20M FE)</td><td>—</td></tr>
    <tr><td>11</td><td><strong>Nitro Reactor</strong></td><td>Spirited Reactor + Capacitor</td><td><strong>500.000</strong></td></tr>
  </table>

  <!-- ============ SCHRITT 1 ============ -->
  <h3 id="powah-step1">Schritt 1: Uraninite-Erz sammeln</h3>
  <p>{{powah-uraninite|Uraninite}} ist der Brennstoff aller Powah-Reaktoren. Das Erz spawnt <strong>tief</strong> — in der Overworld oder idealerweise in der {{mining-dimension|Mining Dimension}}.</p>

  <table>
    <tr><th>Erz-Variante</th><th>Y-Range</th><th>Häufigkeit</th><th>Drop pro Block</th></tr>
    <tr><td><strong>Uraninite Ore Poor</strong></td><td>Y -64 bis 0</td><td>6/chunk</td><td>1× Raw (→ 2× Uraninite via Energizing)</td></tr>
    <tr><td><strong>Uraninite Ore</strong></td><td>Y -64 bis 20</td><td>6/chunk</td><td>→ 5× Uraninite (Energizing)</td></tr>
    <tr><td><strong>Uraninite Ore Dense</strong></td><td>Y -64 bis 0</td><td>3/chunk</td><td>→ 10× Uraninite (Energizing)</td></tr>
  </table>

  <div class="info"><strong>Schneller Start:</strong>
    <br>• Mining-Dim unter Y 0 ist am besten (keine Höhlen, 1:1 Stein-Blöcke).
    <br>• {{ftb-ultimine|FTB Ultimine}} für Vein-Mining nutzen — ein ganzer Vein auf einmal.
    <br>• {{fortune|Fortune 3+}} wirkt auf Uraninite-Ore (Raw-Drops).
  </div>

  <p><strong>Ziel:</strong> Mindestens <strong>64 Uraninite Raw</strong> für den Start. Danach Mystical Agriculture-Automation (siehe Schritt "Automation").</p>

  <p><strong>Alternative ohne Uraninite-Farming:</strong> Mekanism-Uranium-Ingot + 30.000 FE im Energizing Orb = 1 Uraninite. Wenn du Uranium via {{enrichment-chamber|Mekanism-Ore-Processing}} oder MA-Seeds farmst → direkter Konverter.</p>

  <!-- ============ SCHRITT 2 ============ -->
  <h3 id="powah-step2">Schritt 2: Dielectric Paste &amp; Rods</h3>
  <p>{{powah-dielectric-paste|Dielectric Paste}} ist das Basis-Material für jeden Powah-Craft. Ein Rezept ergibt 24 Paste, aber bis Nitro brauchst du <strong>300+</strong>.</p>

  <p><strong>Rezept (shapeless, Crafting Table):</strong></p>
  <ul>
    <li>3× Coal (oder Charcoal)</li>
    <li>2× Clay Ball</li>
    <li>1× Lava Bucket</li>
    <li>→ <strong>24× Dielectric Paste</strong></li>
  </ul>

  <div class="info"><strong>Lava-Pipeline</strong> früh einrichten:
    <br>• <em>Industrial Foregoing Pitiful/Mycelial Generator</em> als Start oder
    <br>• <em>Mekanism Pipes + Fluidic Plenisher</em> oder
    <br>• einfach 10× Lava-Bucket aus dem Nether und manuell crafting.
    <br>Du wirst die Lava bei Schritt 3 (Magmator) ohnehin brauchen.
  </div>

  <p><strong>Folge-Crafts aus Paste:</strong></p>
  <ul>
    <li><strong>Dielectric Rod</strong> (6× Paste + 3× Iron Bars → 8 Rods)</li>
    <li><strong>Dielectric Rod (Horizontal)</strong> (Rotation im Crafting Table)</li>
    <li><strong>Dielectric Casing</strong> (4× Rod + 2× Rod Horizontal + 4× Iron Ingot → 1 Casing) — Herzstück jeder Energizing Rod</li>
  </ul>

  <!-- ============ SCHRITT 3 ============ -->
  <h3 id="powah-step3">Schritt 3: Bootstrap-Power</h3>
  <p>Bevor der Energizing Orb läuft, brauchst du einen <em>temporären</em> Stromlieferanten. Zwei Optionen:</p>

  <h4>Option A: {{powah-magmator|Magmator}} (empfohlen)</h4>
  <p>Einfach: Magmator craften, Lava-Bucket reinkippen, fertig. Keine Platzierungs-Tricks. Output: einige hundert FE/t je nach Stufe — für die ersten Energizing-Crafts mehr als genug.</p>

  <h4>Option B: {{powah-thermo-generator|Thermo Generator}}</h4>
  <p>Platzier den Generator mit einem <strong>heißen Block unter sich</strong> (Lava-Block) und einem <strong>kalten über sich</strong> (Eis, Wasser). Passiver Lauf, aber kompliziertere Platzierung. Werte siehe Tooltip.</p>

  <div class="info"><strong>Beides überflüssig ab Schritt 6</strong> (Basic Reactor). Nicht zu viel Zeit in Bootstrap-Tier investieren.</div>

  <!-- ============ SCHRITT 4 ============ -->
  <h3 id="powah-step4">Schritt 4: Energizing Orb (Starter → Basic)</h3>
  <p>Der {{powah-energizing-orb|Energizing Orb}} ist das Kern-Multiblock für alle weiteren Crafts. Du brauchst:</p>

  <ul>
    <li><strong>1× Energizing Orb</strong> (Core-Block)</li>
    <li><strong>Mind. 2× Energizing Rod Starter</strong> (empfohlen: 4–8 Stück)</li>
  </ul>

  <h4>Rezept Energizing Rod Starter</h4>
  <p>Pattern: <code>" q "</code> / <code>"bcb"</code> / <code>" h "</code></p>
  <ul>
    <li><strong>q</strong> (oben): Quartz Block</li>
    <li><strong>b</strong>: Redstone + Dielectric Paste (genaue Zutaten in EMI)</li>
    <li><strong>c</strong> (Mitte): Dielectric Casing</li>
    <li><strong>h</strong> (unten): <em>(beim Starter: leer / Crafting Item)</em></li>
  </ul>

  <div class="warn"><strong>Bau-Tipp:</strong> Stelle Orb in die Mitte. Rods müssen nicht direkt anliegen — sie wirken in einem <strong>9×9×9 Würfel</strong> um den Orb. Du kannst sie also dekorativ auf Pillar setzen. Verbinde Rods mit Energy Cables oder Flux Points — sie brauchen FE-Input.</div>

  <p><strong>Test:</strong> Wirf 1× Uraninite Raw auf den Orb (per Item Drop oder Hopper) → bei ausreichend FE → wird nach kurzer Zeit zu 2× Uraninite. Das ist deine erste Batch Brennstoff.</p>

  <!-- ============ SCHRITT 5 ============ -->
  <h3 id="powah-step5">Schritt 5: Energized Steel &amp; Hardened-Tier</h3>
  <p>{{powah-energized-steel|Energized Steel}} ist das Upgrade-Material für alle höheren Capacitoren/Rods. Nur im Energizing Orb craftbar:</p>

  <ul>
    <li>1× Iron Ingot + 1× Gold Ingot + 10.000 FE → <strong>2× Energized Steel</strong></li>
  </ul>

  <p>Mit Energized Steel craftest du:</p>
  <ul>
    <li><strong>Energizing Rod Basic → Hardened</strong> (Upgrade von Starter)</li>
    <li><strong>{{powah-capacitor|Hardened Capacitor}}</strong> (8× Energized Steel + 1× Basic Large Capacitor + Paste)</li>
  </ul>

  <div class="info"><strong>Ziel dieser Stufe:</strong> 4× Hardened Rods rund um den Orb + 1× Hardened Capacitor als Zutat für den Hardened Reactor. Ab hier steigt die Energizing-Throughput deutlich.</div>

  <!-- ============ SCHRITT 6 ============ -->
  <h3 id="powah-step6">Schritt 6: Basic Reactor (der erste echte Sprung)</h3>
  <p>Erster echter Strom-Meilenstein. Die Reactor-Kette geht <strong>Starter → Basic → Hardened → Blazing → Niotic → Spirited → Nitro</strong>. Jede Stufe besteht aus 4× der vorherigen + 4× Capacitor + 1× Uraninite.</p>

  <h4>Crafting-Pattern (immer gleich für alle Stufen):</h4>
  <p><code>rlr / lul / rlr</code> — 4× Reactor-Parts + 4× Capacitor + 1× Uraninite → <strong>4× neue Reactor-Parts</strong>.</p>

  <h4>Reactor-Betrieb</h4>
  <p>Ein Reactor ist <strong>ein Multiblock</strong> aus Reactor-Parts (Frame + Core). Beim Platzieren automatisch formen lassen — Anleitung via {{powah-reactor-fuel|Reactor-Fuel-Tooltip}} oder JEI-Multiblock-Preview.</p>

  <p><strong>Inputs pro Reactor:</strong></p>
  <ul>
    <li><strong>Uraninite</strong> (Fuel-Slot)</li>
    <li><strong>Carbon</strong> (Coal / Charcoal / Coal Block → mehr Output)</li>
    <li><strong>Redstone</strong> (Dust → beschleunigt Uran-Burn)</li>
    <li>Optional: <strong>Solid Coolant</strong> (Ice / Packed Ice / Blue Ice) gegen Overheating</li>
    <li>Optional: <strong>Fluid</strong> (Wasser für Kühlung)</li>
  </ul>

  <!-- ============ SCHRITT 7 ============ -->
  <h3 id="powah-step7">Schritt 7: Blazing Crystal (Nether-Farm)</h3>
  <p>Erste Stufe aus der {{powah-crystal-chain|Crystal-Kette}}. Für alle höheren Capacitoren nötig.</p>

  <p><strong>Rezept (Energizing):</strong> 1× Blaze Rod (oder 4× Blaze Powder) + <strong>120.000 FE</strong> → 1× Blazing Crystal</p>

  <div class="info"><strong>Blaze-Supply:</strong>
    <br>• Nether: Blaze Spawner in Nether Fortress
    <br>• Skalierung: {{apothic-enchanting|Apothic Spawners}} mit Blaze — 1 Stack Blaze Powder = 32 Crystals = 32× Blazing Capacitor möglich
    <br>• <strong>Mystical Agriculture</strong>: Blaze Seeds (Tier 3) — {{infusion-altar|Infusion Altar}} → Blaze Essence → Blaze Powder/Rods
  </div>

  <p><strong>Blazing Crystal Block</strong> (9× Blazing Crystal → 1 Block) wird für den Nitro Crystal Craft benötigt — also Material nicht verschwenden!</p>

  <!-- ============ SCHRITT 8 ============ -->
  <h3 id="powah-step8">Schritt 8: Niotic Crystal (Diamant)</h3>
  <p><strong>Rezept (Energizing):</strong> 1× Diamond + <strong>300.000 FE</strong> → 1× Niotic Crystal</p>

  <div class="info"><strong>Diamond-Supply:</strong> Mystical Agriculture Diamond Seeds (Tier 3) sind ab hier Pflicht — Endgame-Mengen manuell minen ist Zeitverschwendung. Alternativ Mekanism Digital Miner mit Diamond-Filter.</div>

  <!-- ============ SCHRITT 9 ============ -->
  <h3 id="powah-step9">Schritt 9: Spirited Crystal (Emerald)</h3>
  <p><strong>Rezept (Energizing):</strong> 1× Emerald + <strong>1.000.000 FE</strong> → 1× Spirited Crystal</p>

  <div class="info"><strong>Emerald-Supply:</strong>
    <br>• MA Emerald Seeds (Tier 4) — jetzt musst du die MA-Kette wirklich hochzüchten
    <br>• Alternative: Villager-Trading (langsam)
    <br>• Peak-Option: Apothic Boss-Loot (unzuverlässig)
  </div>

  <p><strong>Energie-Bedarf:</strong> 1M FE pro Crystal. Mit Hardened-Energizing-Rods × 8 dauert das mehrere Minuten pro Crystal. Früh auf <strong>Blazing/Niotic-Rods</strong> upgraden, das beschleunigt den ganzen Pfad.</p>

  <!-- ============ SCHRITT 10 ============ -->
  <h3 id="powah-step10">Schritt 10: Nitro Crystal (Nether Star!)</h3>
  <p>Der kritische Schritt. 16× Nitro Crystal pro Craft, aber <strong>Nether Star</strong> ist der Bottleneck.</p>

  <p><strong>Rezept (Energizing):</strong></p>
  <ul>
    <li>1× Nether Star</li>
    <li>2× Redstone Block</li>
    <li>1× Blazing Crystal Block (= 9 Blazing Crystals)</li>
    <li>+ <strong>20.000.000 FE</strong></li>
    <li>→ <strong>16× Nitro Crystal</strong></li>
  </ul>

  <div class="warn"><strong>Wither-Farm EMPFOHLEN:</strong>
    <br>Ein einzelner Nether Star = 1 Craft = 16 Nitros. Aber für 1 Nitro Reactor brauchst du <strong>4 Nitro Capacitors = 4 Nitro Crystals</strong>. Ein einziger Wither-Kill reicht also theoretisch für 4 Nitro Reactors (16 Crystals / 4 pro Reactor).
    <br>Siehe {{powah-wither-farm|Wither-Farm}}-Tooltip für ATMons-Setup.
  </div>

  <div class="info"><strong>Alternative: Nether Star Seeds</strong>
    <br>Mystical Agriculture Tier 5. Langsamer aber vollautomatisch. Gute Option wenn du MA schon aufgebaut hast und keinen Killing-Setup aufbauen willst.
  </div>

  <!-- ============ SCHRITT 11 ============ -->
  <h3 id="powah-step11">Schritt 11: Nitro Reactor bauen &amp; starten</h3>
  <p>Das Finale. Du brauchst:</p>

  <h4>A) 4× Nitro Reactor-Parts craften</h4>
  <ul>
    <li>Pattern <code>rlr / lul / rlr</code></li>
    <li><strong>r (4×)</strong>: Spirited Reactor-Parts (= 4 zuvor gecrafted)</li>
    <li><strong>l (4×)</strong>: {{powah-capacitor|Nitro Capacitor}} (= 4× Nitro Crystal + 4× Basic Large Capacitor + 8× Paste)</li>
    <li><strong>u (1×)</strong>: 1× Uraninite</li>
    <li>→ <strong>4× Nitro Reactor Parts</strong> (genug für 1× kompletten Reactor-Multiblock)</li>
  </ul>

  <h4>B) Multiblock zusammensetzen</h4>
  <p>Powah-Reaktoren haben ein festes Muster (3×4×5 oder ähnlich). Einfacher Weg:</p>
  <ol>
    <li>Öffne JEI/EMI → suche "{{powah-reactor-nitro|Nitro Reactor}}" → Tab "Multiblock Pattern" prüfen</li>
    <li>Alternativ: Mod <strong>JustEnoughMekanismMultiblocks</strong> ist installiert — zeigt auch Powah-Multiblocks?<br>Falls nicht: im Spiel ein Reactor-Part platzieren und im Tooltip/Buch nachsehen.</li>
    <li>Pattern bauen, dann <strong>mit Wrench (oder Rechtsklick) auf den Core</strong> → Multiblock formt sich.</li>
  </ol>

  <h4>C) Inputs anschließen</h4>
  <ul>
    <li><strong>Uraninite-Pipeline</strong> → Fuel-Slot (Pipez Item Pipe / Hopper / Create Funnel)</li>
    <li><strong>Coal/Charcoal-Pipeline</strong> → Carbon-Slot</li>
    <li><strong>Redstone Dust-Pipeline</strong> → Redstone-Slot</li>
    <li><strong>Water</strong> → Fluid-Input (Mekanism Mechanical Pipe / Create Fluid Pipe / unendliche Quelle)</li>
    <li><strong>Output</strong>: FE via Energy Cable oder {{powah-flux-network|Flux Plug}}</li>
  </ul>

  <h4>D) Starten</h4>
  <p>Im Reactor-GUI den <strong>Power-Button</strong> aktivieren (oder Redstone-Signal geben). Temperatur steigt langsam, Output steigt mit. <strong>Volllast</strong> (500.000 FE/t) erreicht er nach einigen Minuten.</p>

  <!-- ============ AUTOMATION ============ -->
  <h3 id="powah-automation">Automatisierung: Was MUSS laufen?</h3>
  <p>Der Nitro Reactor ist nur "sorgenfrei" wenn die 4 kritischen Ressourcen selbstständig nachlaufen:</p>

  <table>
    <tr><th>Ressource</th><th>Verbrauch</th><th>Automations-Quelle</th></tr>
    <tr><td><strong>Uraninite</strong></td><td>konstant, langsam</td><td>MA Uran-Seeds → Crusher → Energizing Orb (Uranium → Uraninite)</td></tr>
    <tr><td><strong>Coal/Charcoal</strong></td><td>mittel</td><td>MA Coal-Seeds → Storage; ODER Tree-Farm + Smelter (Charcoal)</td></tr>
    <tr><td><strong>Redstone Dust</strong></td><td>mittel</td><td>MA Redstone-Seeds → direkter Drop</td></tr>
    <tr><td><strong>Water</strong></td><td>klein</td><td>Unendliche Wasserquelle + Pipe</td></tr>
  </table>

  <div class="info"><strong>Priorität:</strong>
    <br>1. Redstone-Seeds — am billigsten, sofort Impact
    <br>2. Uran-Seeds — Dauerbedarf
    <br>3. Coal-Seeds — optional, Tree-Farm reicht auch
  </div>

  <p><strong>Input-Pipelines (empfohlen):</strong> {{sequenced-assembly|Create}}-Funnel oder Pipez Item Pipes. Jede Input-Pipe mit Filter (nur 1 Ressource) damit nichts verwechselt wird.</p>

  <!-- ============ SCALING ============ -->
  <h3 id="powah-scaling">Skalierung: 1 → 4 Reactors</h3>
  <p>Ein einzelner Nitro Reactor: 500 kFE/t. Das reicht für ~90% der ATMons-Endgame-Maschinen. Wenn du mehr brauchst (z.B. AE2 Auto-Crafting für ATM Star, Unobtainium-Alloys):</p>

  <ol>
    <li><strong>2. Reactor</strong> daneben → 1 MFE/t. Teilt Ressourcen-Pipeline.</li>
    <li><strong>{{powah-flux-network|Flux Networks}}</strong> (bereits installiert) für wireless Power-Transport. Flux Plug an jedem Reactor, Flux Points bei AE2/Mekasuit-Charger.</li>
    <li><strong>Applied Flux</strong> (auch installiert) verbindet Flux direkt mit AE2-Energy-Acceptor — keine extra Energy Cells mehr nötig.</li>
    <li><strong>Maximum</strong>: 4–8 Reactors parallel = 2–4 MFE/t. Mehr braucht man praktisch nicht — ab da lohnt sich eher Fusion Reactor.</li>
  </ol>

  <!-- ============ SHOPPING LISTE ============ -->
  <h3 id="powah-shopping">Shopping-Liste für 1× Nitro Reactor (ab Null)</h3>

  <div class="warn">Diese Liste umfasst <strong>alle</strong> Zwischenstufen (Starter → Basic → Hardened → Blazing → Niotic → Spirited → Nitro). Zahlen sind Richtwerte — exakt in EMI nachrechnen.</div>

  <table>
    <tr><th>Kategorie</th><th>Item</th><th>Menge</th></tr>
    <tr><td rowspan="3">Erze</td><td>Uraninite Raw (total)</td><td>~40–60</td></tr>
    <tr><td>Iron Ingots</td><td>~200</td></tr>
    <tr><td>Gold Ingots</td><td>~50</td></tr>
    <tr><td rowspan="4">Basis</td><td>Coal</td><td>~64</td></tr>
    <tr><td>Clay Ball</td><td>~40</td></tr>
    <tr><td>Lava Bucket</td><td>~15–20</td></tr>
    <tr><td>Redstone Block</td><td>~30</td></tr>
    <tr><td rowspan="4">Kristall-Zutaten</td><td>Blaze Rods (für Blazing Crystals)</td><td>~20</td></tr>
    <tr><td>Diamond (für Niotic)</td><td>~5–8</td></tr>
    <tr><td>Emerald (für Spirited)</td><td>~5–8</td></tr>
    <tr><td><strong>Nether Star</strong></td><td><strong>1</strong> (reicht für 16 Nitro Crystals = 4 Reaktoren!)</td></tr>
    <tr><td rowspan="2">Bauen</td><td>Quartz Block</td><td>~10</td></tr>
    <tr><td>Iron Bars</td><td>~40</td></tr>
  </table>

  <!-- ============ TROUBLESHOOTING ============ -->
  <h3 id="powah-troubleshoot">Troubleshooting</h3>

  <table>
    <tr><th>Problem</th><th>Ursache / Lösung</th></tr>
    <tr>
      <td>Reactor zeigt geringen Output (&lt;50% Max)</td>
      <td>Temperatur zu niedrig → mehr <strong>Carbon</strong> (Coal Block statt einzelne Coals) + <strong>Redstone</strong>. Oder zu hoch → Solid Coolant oder Water rein.</td>
    </tr>
    <tr>
      <td>Energizing dauert ewig</td>
      <td>Zu wenige oder zu schwache Rods. Für 20M FE Nitro Crystal brauchst du <strong>mindestens 4× Blazing-Rods</strong>, besser 8× Spirited-Rods.</td>
    </tr>
    <tr>
      <td>Multiblock formt sich nicht</td>
      <td>Pattern falsch. JEI/EMI Multiblock-Tab nutzen. Beachte: <em>alle</em> Blöcke müssen Reactor-Parts aus der gleichen Stufe sein — keine Mischung.</td>
    </tr>
    <tr>
      <td>Rods bekommen keine Power</td>
      <td>Rods brauchen FE-Input an der <em>Rod selbst</em>, nicht am Orb. Energy Cable oder Flux Point <strong>an jede Rod</strong> legen.</td>
    </tr>
    <tr>
      <td>Nether Star zu teuer</td>
      <td>Apothic Spawner-Wither-Farm bauen (siehe {{powah-wither-farm|Wither-Farm}}-Tooltip). Oder MA Nether Star Seeds (Tier 5).</td>
    </tr>
  </table>

  <div class="info" style="margin-top: 24px;"><strong>Zeitplan-Richtwert (realistisch):</strong>
    <br>Schritt 1–6 (Basic Reactor läuft): ~2h bei fokussiertem Spielen
    <br>Schritt 7–10 (Nitro Crystal craftbar): ~3–4h + Wither-Farm-Setup
    <br>Schritt 11 (Nitro Reactor läuft): ~30 min nach Nitro Crystal
    <br><strong>Gesamt: 5–8h</strong> von 0 zu 500k FE/t. Danach: niemals wieder Strom-Sorgen.
  </div>

</div>
`;
