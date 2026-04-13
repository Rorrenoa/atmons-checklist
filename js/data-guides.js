/* ============================================================
   GUIDES — Große, modale Erklär-Panels für komplexe Themen
   ============================================================ */
const GUIDES = {
  "ore-heights": {
    icon: "📐",
    title: "Ore-Heights Übersicht (Overworld + Mining Dim)",
    content: `
      <p>ATMons unterscheidet zwei grundlegende Mining-Locations: die <strong>Overworld</strong> und die <strong>Mining Dimension</strong>. Die Y-Höhen sind <em>unterschiedlich</em>, weil die Mining Dim eine eigene Worldgen-Konfiguration hat. Alle Werte hier sind aus den lokalen <code>kubejs/</code> und offiziellen Allthemodium-Guides verifiziert.</p>

      <h3>📊 Verteilungs-Typen verstehen</h3>
      <p>In Minecraft 1.18+ spawnen Erze nach 3 verschiedenen Verteilungs-Formen — wichtig zu wissen, damit du "Peak"-Werte richtig interpretierst:</p>
      <ul>
        <li><strong>Uniform</strong> — im ganzen Y-Bereich gleich wahrscheinlich. Du findest gleich viel bei Y 20 wie bei Y 100. Beispiel: Nether Quartz.</li>
        <li><strong>Triangle</strong> — Peak in der <em>Mitte</em>, fällt zu den Rändern hin ab. Beispiele: <em>Diamant</em> (Peak Y -58), <em>Eisen Middle Band</em> (Peak Y 16), <em>Redstone</em> (Peak Y -58). Am Peak findest du <strong>signifikant mehr</strong> als an den Rändern.</li>
        <li><strong>Trapezoid</strong> — wie Triangle, aber mit Plateau in der Mitte. Einige AllTheOres-Erze (Uranium, Cinnabar, Iridium) nutzen diesen Typ.</li>
      </ul>
      <div class="info">Wenn die Tabelle "Peak Y -58" sagt und Range "-64 bis 16" ist, heißt das: die meisten Diamanten findest du bei Y -58. Theoretisch gibt's sie auch höher, aber deutlich seltener.</div>

      <h3>⛏️ Overworld Ore-Heights</h3>
      <p>Strip-Mining-Sweet-Spot: <strong>Y = -16</strong> (Deepslate-Layer, hohe Dichte an fast allen tiefen Erzen).</p>
      <table>
        <tr><th>Erz</th><th>Min Y</th><th>Max Y</th><th>Optimal Y</th><th>Notiz</th></tr>
        <tr><td><strong>Kohle</strong></td><td>0</td><td>320</td><td>~95</td><td>Überall, oberflächennah bevorzugt</td></tr>
        <tr><td><strong>Eisen</strong></td><td>-63</td><td>256</td><td>~16 oder ~-24</td><td>Triangle — zwei Peaks</td></tr>
        <tr><td><strong>Kupfer</strong></td><td>-16</td><td>112</td><td>~48</td><td>In Dripstone Caves deutlich mehr</td></tr>
        <tr><td><strong>Tin</strong></td><td>-64</td><td>~100</td><td>~20</td><td>AllTheOres — ähnlich wie Eisen</td></tr>
        <tr><td><strong>Aluminum</strong></td><td>-64</td><td>~120</td><td>~60</td><td>AllTheOres — oberflächennah</td></tr>
        <tr><td><strong>Lead</strong></td><td>-64</td><td>~32</td><td>~-16</td><td>AllTheOres — Deepslate</td></tr>
        <tr><td><strong>Gold</strong></td><td>-64</td><td>32</td><td>~-16</td><td>Badlands-Biome extra Gold</td></tr>
        <tr><td><strong>Redstone</strong></td><td>-64</td><td>15</td><td><strong>-58</strong></td><td>Tiefer ist besser</td></tr>
        <tr><td><strong>Lapis</strong></td><td>-64</td><td>64</td><td>~0</td><td>Peak um Y=0</td></tr>
        <tr><td><strong>Silver</strong></td><td>-64</td><td>~30</td><td>~-16</td><td>AllTheOres — Deepslate</td></tr>
        <tr><td><strong>Nickel</strong></td><td>-64</td><td>~64</td><td>~0</td><td>AllTheOres</td></tr>
        <tr><td><strong>Diamant</strong></td><td>-64</td><td>16</td><td><strong>-58</strong></td><td>Tiefer ist besser, wie Vanilla</td></tr>
        <tr><td><strong>Osmium</strong></td><td>-64</td><td>~64</td><td>~0</td><td>Mekanism — Deepslate-Layer</td></tr>
        <tr><td><strong>Platinum</strong></td><td>-64</td><td>~10</td><td><strong>-32</strong></td><td>AllTheOres — selten, tief</td></tr>
        <tr><td><strong>Zinc</strong></td><td>-64</td><td>~70</td><td>~0</td><td>AllTheOres</td></tr>
        <tr><td><strong>Uranium</strong></td><td>-64</td><td>16</td><td><strong>-24</strong></td><td><em>ATMons-Override</em> (kubejs verifiziert)</td></tr>
        <tr><td><strong>Iridium</strong></td><td>-64</td><td>32</td><td>-16</td><td><em>ATMons-Override</em> (kubejs verifiziert)</td></tr>
        <tr><td><strong>Cinnabar</strong></td><td>-64</td><td>228</td><td>~82</td><td><em>ATMons-Override</em> (kubejs verifiziert)</td></tr>
      </table>

      <div class="info">
        <strong>Best Overworld Strip-Mine: Y = -16</strong><br>
        Bei Y=-16 erwischst du gleichzeitig: Eisen (Triangle), Gold, Lapis, Lead, Silver, Nickel, Osmium, Iridium, Uranium (Peak). Für Diamant/Redstone musst du nur ein paar Blöcke weiter runter auf Y -58.
      </div>

      <h3>🌌 Mining Dimension Ore-Heights</h3>
      <p>Die Mining Dimension hat <strong>erweiterte Y-Bereiche</strong> und keine feindlichen Mobs — die <em>mit Abstand</em> beste Farm-Location. Die folgenden Werte stammen aus dem offiziellen Allthemodium-Guide für die Mining Dim.</p>
      <table>
        <tr><th>Erz</th><th>Min Y</th><th>Max Y</th><th>Optimal Y</th></tr>
        <tr><td><strong>Allthemodium</strong></td><td>65</td><td>128</td><td>~95</td></tr>
        <tr><td><strong>Osmium</strong></td><td>-62</td><td>64</td><td>~0</td></tr>
        <tr><td><strong>Platinum</strong></td><td>-62</td><td>34</td><td>~-16</td></tr>
        <tr><td><strong>Diamant</strong></td><td>93</td><td>174</td><td>~130</td></tr>
        <tr><td><strong>Eisen / Kohle / Kupfer / Aluminum</strong></td><td>65</td><td>247</td><td>~150</td></tr>
        <tr><td><strong>Gold</strong></td><td>65</td><td>155</td><td>~110</td></tr>
        <tr><td><strong>Redstone</strong></td><td>65</td><td>205</td><td>~130</td></tr>
        <tr><td><strong>Tin</strong></td><td>-62</td><td>181</td><td>~60</td></tr>
        <tr><td><strong>Lead / Silver</strong></td><td>-62</td><td>34</td><td>~-16</td></tr>
        <tr><td><strong>Nickel</strong></td><td>-62</td><td>64</td><td>~0</td></tr>
        <tr><td><strong>Zinc</strong></td><td>-62</td><td>128</td><td>~30</td></tr>
        <tr><td><strong>Uranium</strong></td><td>-62</td><td>157</td><td>~50</td></tr>
        <tr><td><strong>Lapis</strong></td><td>-62</td><td>64</td><td>~0</td></tr>
      </table>

      <h3>🎯 Die 2 besten Strip-Mining-Spots in der Mining Dimension</h3>
      <div class="info">
        <strong>Spot 1 — Y = 0</strong> (Deep Run)<br>
        Erwischt: <em>Osmium, Platinum, Lead, Silver, Nickel, Lapis, Zinc-Bottom, Uranium-Mid, Tin-Deep</em>.<br>
        Perfekt für alle "tiefen" Erze in einer Fahrt.
      </div>
      <div class="info">
        <strong>Spot 2 — Y = 95</strong> (High Run)<br>
        Erwischt: <em>Allthemodium (Peak!), Diamant (Range beginnt), Eisen, Kohle, Kupfer, Gold-Peak, Redstone-Peak, Aluminum</em>.<br>
        Der wichtigere der beiden Spots — hier ist das Allthemodium-Peak und das meiste Standard-Metall.
      </div>
      <p>Mit einer <strong>FTB Ultimine Tunnel Shape</strong> auf diesen beiden Y-Höhen bekommst du in der Mining Dim praktisch alles was du brauchst.</p>

      <h3>🔥 Nether Ore-Heights</h3>
      <table>
        <tr><th>Erz</th><th>Min Y</th><th>Max Y</th><th>Optimal Y</th><th>Besonderheit</th></tr>
        <tr><td><strong>Ancient Debris</strong></td><td>8</td><td>22</td><td><strong>15</strong></td><td>Vanilla</td></tr>
        <tr><td><strong>Vibranium</strong></td><td>~64</td><td>~127</td><td>~95</td><td><em>Nur in Crimson Forest + Warped Forest!</em></td></tr>
        <tr><td><strong>Nether Quartz</strong></td><td>10</td><td>117</td><td>~65</td><td>Überall im Nether</td></tr>
      </table>
      <div class="warn"><strong>Vibranium ist biome-beschränkt!</strong> ATMons konfiguriert per kubejs (<code>data/atm10/tags/worldgen/biome/vibranium_spawnable.json</code>): Vibranium spawnt <em>nur</em> in <strong>Crimson Forest</strong> und <strong>Warped Forest</strong>. Basalt Deltas und Nether Wastes = kein Vibranium. Such dir einen dieser beiden Forest-Biome bevor du zu graben anfängst.</div>

      <h3>💎 End & Dimensions</h3>
      <table>
        <tr><th>Erz</th><th>Dimension</th><th>Biome</th><th>Notiz</th></tr>
        <tr><td><strong>Unobtainium</strong></td><td>End</td><td><em>End Highlands nur!</em></td><td>kubejs <code>unobtainium_spawnable.json</code> verifiziert</td></tr>
        <tr><td><strong>Unobtainium (Alternative)</strong></td><td>The Other</td><td>—</td><td>Über Allthemodium Teleport Pad erreichbar</td></tr>
      </table>
      <div class="warn"><strong>Unobtainium:</strong> Im Gegensatz zu vielen anderen ATM-Packs spawnt Unobtainium in ATMons <em>im End</em>, genauer gesagt <strong>nur im End Highlands Biom</strong> — nicht in The Other! Das ist per kubejs biome-tag verifiziert. Alternative: The Other Dimension via Allthemodium Teleport Pad.</div>

      <h3>📊 Spezielle Mining-Dim-Zusatz-Erze (ATMons-Custom)</h3>
      <p>Per <code>kubejs/server_scripts/modpack/miningDim.js</code> fügt ATMons zusätzliche Erze <em>nur in die Mining Dimension</em> hinzu:</p>
      <ul>
        <li><strong>Runic Stone, Arcane Crystal Ore</strong> (Forbidden Arcanus) — Y 65-250</li>
        <li><strong>Uraninite</strong> (Powah) — Y 65-250</li>
        <li><strong>Inferium / Prosperity Ore</strong> (Mystical Agriculture) — Y 65-250</li>
        <li><strong>Soulium Ore</strong> — Y -63 bis 250</li>
        <li><strong>Titanium (Sal Ammoniac)</strong>, <strong>Black Quartz</strong>, <strong>Dimensional Shard</strong> — Y 65-250</li>
        <li><strong>Sulfur, Fluorite, Salt, Cinnabar</strong> (AllTheOres) — Y -63 bis 250</li>
        <li><strong>Crimson Iron, Azure Silver</strong> (Silent Gear) — nur Netherrack/Endstone-Layer der Mining Dim</li>
        <li><strong>Draconium</strong> — Y -63 bis 250</li>
      </ul>
      <p class="info">Viele dieser Erze sind in der normalen Overworld gar nicht verfügbar oder extrem selten. Die Mining Dim ist für Mystical Agriculture, Forbidden Arcanus und Powah praktisch die einzige vernünftige Quelle.</p>
    `
  },

  "mining-tiers": {
    icon: "⛏️",
    title: "Mining-Tier System (verifiziert)",
    content: `
      <p>ATMons hat ein <strong>spezifisches Mining-Tier-System</strong>, das von Standard-ATM10-Guides abweicht. Die kubejs-Skripte überschreiben die Tier-Tags <em>nicht aktiv</em> – stattdessen ergeben sich die Tiers aus der Kombination der enthaltenen Mods (AllTheOres, Mekanism, Allthemodium). Die folgende Tabelle ist <em>im Spiel verifiziert</em>.</p>

      <h3>Tier-Tabelle</h3>
      <table>
        <tr><th>Pickaxe</th><th>Erze</th></tr>
        <tr><td><strong>Holz</strong></td><td>Nur Vanilla (Stein, Kohle-Stein)</td></tr>
        <tr><td><strong>Stein</strong></td><td>Kohle, Eisen, Kupfer, Tin, Aluminum, Lead</td></tr>
        <tr><td><strong>Eisen</strong></td><td>Gold, Redstone, Lapis, Silver, Nickel, Diamant</td></tr>
        <tr><td><strong>Diamant</strong></td><td>Platinum, Osmium, Zinc, Uranium, Obsidian</td></tr>
        <tr><td><strong>Netherite</strong></td><td>Allthemodium, Vibranium</td></tr>
        <tr><td><strong>Allthemodium</strong></td><td>Unobtainium</td></tr>
      </table>

      <h3>Warum ist das so wichtig?</h3>
      <p>Die meisten Online-Guides für ATM10 zeigen <em>falsche</em> Tier-Zuordnungen für ATMons, weil ATMons sein eigenes Modpack mit eigener Mod-Kombination ist. Wer nach ATM10-Reihenfolge progresst, wundert sich warum Osmium mit Eisen-Pickaxe nicht klappt.</p>

      <div class="warn"><strong>Wichtig:</strong> <em>Osmium braucht Diamant-Pickaxe!</em> Das heißt: Mekanism ist <strong>Mid-Game</strong> in ATMons, nicht Early-Game wie in vielen ATM-Packs.</div>

      <h3>Konsequenzen für deine Progression</h3>
      <ul>
        <li><strong>Holz → Stein</strong> so schnell wie möglich (Stein schaltet 6 Erze frei)</li>
        <li><strong>Stein → Eisen</strong> für Gold/Redstone/Lapis/Diamant</li>
        <li><strong>Eisen → Diamant</strong> ist der <em>wichtigste</em> Schritt – schaltet Osmium frei</li>
        <li><strong>Silent Gear Tools</strong> behalten ihre Enchants bei Material-Wechsel – ideal für diesen Upgrade-Pfad</li>
        <li><strong>Silk Touch</strong> früh besorgen: Erz-Block → Mekanism Enrichment → 2× Output</li>
      </ul>

      <div class="info">Für die <strong>konkreten Y-Höhen</strong> in Overworld und Mining Dimension gibt es einen eigenen Guide mit detaillierten Tabellen und Strip-Mining-Empfehlungen. Öffne dazu den <em>Ore-Heights Guide</em> aus Phase 3 (Item 3b, 3d oder 3e).</div>
    `
  },

  "pokeball-create": {
    icon: "🎾",
    title: "Pokéball-Produktion via Create",
    content: `
      <div class="warn"><strong>ATMons entfernt alle Standard-Pokéball-Rezepte per kubejs!</strong> Die Cobblemon-Vanilla-Methode (4 Aprikokos + 1 Kupfer) funktioniert <em>nicht</em>. Bälle werden ausschließlich über Create Sequenced Assembly produziert (Mod <code>createmonballsoverhaul</code>).</div>

      <h3>Die 3 Zutaten-Kategorien</h3>
      <ol>
        <li><strong>Ball-Lid</strong> (Oberseite) – farbig, aus Aprikokos ODER aus Loot-Truhen</li>
        <li><strong>Ball-Base</strong> (Unterseite) – weiß, Basis für jeden Ball</li>
        <li><strong>Ball-Mechanism</strong> (Innenleben) – <em>Copper</em> → <em>Iron</em> → <em>Brass</em> für bessere Fangraten</li>
      </ol>

      <h3>Quellen für Ball-Teile</h3>
      <p><strong>Loot-Truhen (POI-Strukturen)</strong> droppen Ball-Teile mit folgender Gewichtung (<code>data/cobblemon/loot_table/sets/any_common_pokeball.json</code>):</p>
      <ul>
        <li>Blank Ball Lid: Gewicht <strong>70</strong> (häufigstes Drop)</li>
        <li>Kompletter Poké Ball: Gewicht 40</li>
        <li>Copper Ball Mechanism: Gewicht 30</li>
        <li>Iron Ball Mechanism: Gewicht 15</li>
        <li>Brass Ball Mechanism: Gewicht 7</li>
        <li>Farbige Lids (Red/Green/Blue/Yellow/White/Black/Pink): je Gewicht 5</li>
      </ul>
      <p class="info">Jede Loot-Kiste in Dörfern, Dungeons und Strukturen durchsuchen – das ist deine wichtigste Ball-Teil-Quelle am Anfang!</p>

      <h3>Ball-Teile selber bauen (Create)</h3>
      <p>Die Basis-Route verwendet Apricorns + Create-Maschinen:</p>
      <ol>
        <li><strong>Aprikoko-Hälften</strong> herstellen: Apricorn + Mechanical Saw oder Deployer mit Axt</li>
        <li><strong>Apricorn-Bits</strong> durch weitere Verarbeitung</li>
        <li>Im <strong>Mechanical Press</strong> zu Ball-Lid pressen</li>
        <li>Zusammensetzen mit Base + Mechanism über <strong>Sequenced Assembly</strong> (Depot + Conveyor + Deployer-Kette)</li>
      </ol>

      <h3>Sequenced Assembly Setup</h3>
      <p>Ein typisches Setup:</p>
      <ul>
        <li>1× <strong>Depot</strong> am Start mit dem Input-Item</li>
        <li>Mehrere <strong>Conveyor Belts</strong> die das Item durch die Station tragen</li>
        <li>Jeder Deployer hält ein anderes Zutaten-Item und klickt es auf das laufende Werkstück</li>
        <li>Am Ende: <strong>Mechanical Press</strong> finalisiert das Produkt</li>
        <li>Ausgabe-Depot mit Chute in deine Storage-Kiste</li>
      </ul>

      <div class="warn"><strong>Master Ball:</strong> Das Master-Ball-Rezept ist <em>komplett entfernt</em> (<code>server_scripts/mods/Cobblemon/Recipes.js</code>). Master Balls kommen nur aus <strong>Raid Dens, Battle Tower, Quests</strong> oder seltenem Loot. Plane das für den ATM Star ein – du brauchst 2 Stück!</div>

      <h3>ATMons-exklusive Bälle (Coremod)</h3>
      <ul>
        <li><strong>Allthemodium Ball</strong> – Basis Allthemodium</li>
        <li><strong>Vibranium Ball</strong> – Basis Vibranium</li>
        <li><strong>Unobtainium Ball</strong> – Basis Unobtainium</li>
        <li><strong>Soul Lava Ball</strong> – Basis Soul Lava</li>
      </ul>
      <p>Alle 4 haben extrem hohe Fangraten und sind Endgame-Tier. Sie werden ebenfalls über Create-Routen gefertigt.</p>

      <div class="links">
        <a href="https://wiki.cobblemon.com/" target="_blank" rel="noopener">Cobblemon Wiki</a>
        <a href="https://create.fandom.com/wiki/Sequenced_Assembly" target="_blank" rel="noopener">Create: Sequenced Assembly</a>
      </div>
    `
  },

  "level-cap": {
    icon: "🎖️",
    title: "Level-Cap & Trainer-System (RCT)",
    content: `
      <p>ATMons nutzt <strong>Radical Cobblemon Trainers (RCT)</strong> mit einer speziell konfigurierten Level-Cap-Mechanik. Die Config liegt in <code>config/rctmod-server.toml</code>.</p>

      <h3>Die wichtigsten Konfig-Werte</h3>
      <table>
        <tr><th>Parameter</th><th>Wert</th><th>Bedeutung</th></tr>
        <tr><td>initialLevelCap</td><td><strong>15</strong></td><td>Start-Cap – so hoch darf dein höchstes Pokémon sein</td></tr>
        <tr><td>relativeLevelCap</td><td><strong>0</strong></td><td>Cap = exakt auf Key-Trainer-Level (kein Puffer)</td></tr>
        <tr><td>spawningRequiresTrainerCard</td><td><strong>true</strong></td><td>Ohne Trainer Card spawnen <em>keine</em> Trainer!</td></tr>
        <tr><td>maxTrainersPerPlayer</td><td><strong>5</strong></td><td>Reduziert von Vanilla 12 – weniger Überforderung</td></tr>
        <tr><td>globalSpawnChance</td><td>0.85</td><td>85% Spawn-Chance pro Versuch</td></tr>
        <tr><td>spawnInterval</td><td>180 Ticks</td><td>Alle 9 Sekunden Spawn-Versuch</td></tr>
        <tr><td>Force-Battle Blickkontakt</td><td>60 Ticks / 8 Blöcke</td><td>3 Sek Blickkontakt ≤ 8 Blöcke = erzwungener Kampf</td></tr>
      </table>

      <h3>Wie das Cap wächst</h3>
      <p>Mit <code>relativeLevelCap=0</code> gilt: Nach einem Key-Trainer-Sieg steigt dein Cap auf das <em>exakte</em> Level des höchsten Pokémons dieses Trainers. Kein Puffer, kein Overshoot.</p>
      <p>Beispiel: Cap ist 15, du besiegst einen Key-Trainer mit 18er Pokémon → neues Cap ist <strong>18</strong>.</p>

      <div class="warn">Pokémon <em>über</em> dem Cap bekommen <strong>0 XP</strong>. Außerdem verweigern Trainer den Kampf, wenn du Pokémon über Cap in der Party hast. Du musst sie rausrotieren.</div>

      <h3>Das Serien-System</h3>
      <p>Spieler starten in der Serie <code>empty</code>. Über das <strong>Trainer Card Menü</strong> wählst du eine Serie (z.B. <em>Radical Red</em>, <em>BDSP</em>, <em>Johto</em>). Jede Serie hat ihren eigenen Trainer-Pool und ihre eigene Progression.</p>

      <h3>Freeroam – erst nach erster Serie!</h3>
      <p class="info">Der <strong>Freeroam-Modus</strong> (wo du Pokémon aus verschiedenen Serien mischen kannst) ist <em>gesperrt</em>, bis du mindestens eine Serie komplett durchgespielt hast. Das ist Absicht – der Autor will dass du einmal eine strukturierte Progression erlebst.</p>

      <h3>Trainer Spawner Block</h3>
      <p>Wenn dir natürliches Spawning zu langsam ist: der <strong>Trainer Spawner Block</strong> (Rezept in EMI) beschwört Trainer gezielt. Manche brauchen Signature-Items als Input (das Quest Book erklärt welche).</p>

      <h3>Praktische Tipps</h3>
      <ul>
        <li><strong>Trainer Card IMMER im Inventar</strong> – die häufigste Frustration bei neuen Spielern</li>
        <li>Ein Pokémon auf Cap-Level halten → spawnt stärkere Trainer</li>
        <li>Force-Battle beachten: schwache Phase = nicht in die Augen des Key-Trainers schauen</li>
        <li>Team rotieren statt nur eines maxen – du brauchst Level-Cap-fähige Kämpfer in mehreren Typen</li>
      </ul>

      <div class="links">
        <a href="https://srcmc.gitlab.io/rct/docs/0.13/" target="_blank" rel="noopener">Radical Cobblemon Trainers Docs</a>
      </div>
    `
  },

  "mekanism-ore": {
    icon: "⚙️",
    title: "Mekanism Ore-Processing in ATMons",
    content: `
      <p>ATMons hat die Mekanism-Ore-Processing-Pipeline per kubejs angepasst (<code>server_scripts/mods/Mekanism/ore_processing.js</code>). Die Outputs unterscheiden sich stellenweise von Vanilla-Mekanism.</p>

      <h3>Die 5 Mekanism-Tiers</h3>
      <p>Mekanism-Ore-Processing wird stufenweise ausgebaut. Jede Stufe <em>verdoppelt</em> den Output gegenüber der vorigen:</p>
      <table>
        <tr><th>Tier</th><th>Output / Erz-Block</th><th>Maschinen</th></tr>
        <tr><td>Basic (Smelter)</td><td>1× Ingot</td><td>Ofen</td></tr>
        <tr><td>2× (Enrichment)</td><td>2× Ingot</td><td>Enrichment Chamber → Smelter</td></tr>
        <tr><td>3× (Purification)</td><td>3× Ingot</td><td>Purification Chamber → Crusher → Smelter</td></tr>
        <tr><td>4× (Injection)</td><td>4× Ingot</td><td>Chemical Injection Chamber → Purification → Crusher → Smelter</td></tr>
        <tr><td>5× (Dissolution)</td><td>5× Ingot</td><td>Chemical Dissolution Chamber → Washer → Crystallizer → Injection → Purification → Crusher → Smelter</td></tr>
      </table>

      <h3>ATMons-spezifische Pipeline-Anpassungen</h3>
      <p>Per kubejs wurden AllTheOres-Materialien in die Pipeline integriert:</p>
      <ul>
        <li><strong>Washing → Injecting → Crushing → Enriching</strong> Pipeline für AllTheOres-Erze</li>
        <li>Pack-spezifische Outputs, z.B. <strong>5 Uraninite aus Uranium-Dissolution</strong> statt Standard-Mekanism-Mengen</li>
        <li>AllTheOres Dust/Crystal/Shard werden über die Standard-Mekanism-Maschinen verarbeitet</li>
      </ul>

      <h3>Einstiegs-Setup (2× Tier)</h3>
      <ol>
        <li><strong>Heat Generator</strong> oder Wind Generator als Energie</li>
        <li><strong>Metallurgic Infuser</strong> + Enriched Coal (durch Enrichment Chamber) → <strong>Steel</strong></li>
        <li><strong>Enrichment Chamber</strong>: Erz-Block rein → 2× Dust raus</li>
        <li><strong>Energized Smelter</strong>: Dust → Ingot</li>
        <li>Direkte Platzierung (Chamber neben Smelter) = automatischer Transfer ohne Pipes</li>
      </ol>

      <h3>Silk Touch + Enrichment = perfekte Kombi</h3>
      <div class="info"><strong>Silk Touch Pickaxe</strong> → Erz als <em>Block</em> abbauen → Block in Enrichment Chamber → 2× Dust → 2× Ingot. Ohne Silk Touch hast du Raw Ore → Chamber gibt weniger Output. <em>Silk Touch ist ein Multiplier für deinen gesamten Erz-Ertrag.</em></div>

      <h3>Kohle/Redstone zuerst enrichen!</h3>
      <p class="warn">Der wichtigste Early-Game-Tipp: <strong>Kohle und Redstone zuerst durch die Enrichment Chamber</strong>, bevor du sie im Metallurgic Infuser nutzt. Enriched Coal/Redstone gibt <strong>8× mehr Infuse Units</strong> – das spart enorm Material beim Steel-Herstellen.</p>

      <h3>Fortgeschritten: Chemical Dissolution Chamber (5× Tier)</h3>
      <p>Für das 5×-Tier brauchst du viele Maschinen und Chemicals (Hydrogen Chloride, Sulfuric Acid, Water, Oxygen). Fangen aber erst an, wenn deine Basis stabil läuft – das ist Late-Game Setup.</p>

      <div class="links">
        <a href="https://wiki.aidancbrady.com/wiki/Ore_Processing" target="_blank" rel="noopener">Mekanism Wiki: Ore Processing</a>
      </div>
    `
  },

  "alloys": {
    icon: "🔨",
    title: "Die 3 Super-Alloy-Routen",
    content: `
      <p>ATMons erfordert drei Legierungen für den ATM Star, und jede läuft über einen <em>anderen</em> Mod-Pfad. Die Rezepte sind per kubejs in <code>server_scripts/modpack/atm_alloys.js</code> definiert.</p>

      <h3>Übersicht</h3>
      <table>
        <tr><th>Alloy</th><th>Route</th><th>Key-Ingredient</th></tr>
        <tr><td>Vibranium-Allthemodium</td><td>Powah Energizing</td><td>1 Mrd. FE + Piglich Hearts</td></tr>
        <tr><td>Unobtainium-Allthemodium</td><td>Ars Nouveau Apparatus</td><td>10.000 Source Cost</td></tr>
        <tr><td>Unobtainium-Vibranium</td><td>Industrial Foregoing Dissolution</td><td>Pink Slime + Soul Lava</td></tr>
      </table>

      <h3>Route 1: Vibranium-Allthemodium via Powah</h3>
      <p>Die Powah-Route nutzt den <strong>Powah Energizing Orb</strong>:</p>
      <ol>
        <li>Multi-Block Energizing-Struktur bauen (Orb + mehrere Energizing Rods)</li>
        <li>Rohmaterialien auf die Rods legen (Vibranium-Ingot, Allthemodium-Ingot)</li>
        <li>Piglich Hearts als Katalysator hinzu</li>
        <li>Ca. <strong>1 Milliarde FE</strong> einspeisen</li>
        <li>Output: Vibranium-Allthemodium Alloy</li>
      </ol>
      <p class="warn"><strong>Piglich Hearts</strong> droppen von <em>Piglichs</em> – rare Bastion-Mobs im Nether. Sehr gefährlich, aber der einzige Weg. Mindestens in voller Diamant/Netherite-Rüstung angehen.</p>

      <h3>Route 2: Unobtainium-Allthemodium via Ars Nouveau</h3>
      <ol>
        <li><strong>Enchanting Apparatus</strong> bauen (Ars Nouveau Kern-Block)</li>
        <li>Rundum <strong>Arcane Pedestals</strong> mit den Input-Items bestücken</li>
        <li>Große <strong>Source Pool</strong> Infrastruktur nötig – mehrere Sourcelinks / Source Jars</li>
        <li><strong>10.000 Source Cost</strong> für den Craft</li>
        <li>Output: Unobtainium-Allthemodium Alloy</li>
      </ol>
      <p class="info">Source sammelt sich passiv über Mana Berries, Wilden Magic-Crops, Sourcelinks in passenden Biomen. Für Endgame-Mengen brauchst du eine richtige <strong>Source-Farm</strong>.</p>

      <h3>Route 3: Unobtainium-Vibranium via Industrial Foregoing</h3>
      <ol>
        <li><strong>Dissolution Chamber</strong> (Industrial Foregoing) bauen</li>
        <li>Energie und Chemicals einspeisen</li>
        <li>Input: Unobtainium + Vibranium + <strong>Pink Slime</strong> + <strong>Soul Lava</strong></li>
        <li>Output: Unobtainium-Vibranium Alloy</li>
      </ol>
      <p><strong>Pink Slime</strong> wird über die Mob Slaughter Factory / Industrial Foregoing Pink Slime Farm produziert. <strong>Soul Lava</strong> kommt aus speziellen Strukturen oder als Quest-Belohnung.</p>

      <h3>Welche Route zuerst?</h3>
      <p>Empfehlung:</p>
      <ol>
        <li><strong>Powah-Route zuerst</strong> – Powah ist meist schon für Strom-Infrastruktur aufgebaut, die Extension zum Energizing-Setup ist klein</li>
        <li>Dann <strong>Industrial Foregoing</strong> – Pink Slime Farm ist eigenständiges Projekt, skaliert gut</li>
        <li>Zum Schluss <strong>Ars Nouveau</strong> – braucht die meiste eigenständige Infrastruktur</li>
      </ol>

      <p class="info">Parallel kannst du alle 3 Mods schon früher aufbauen, weil jeder für sich mächtige Features liefert (Ars für Spells, IF für Automation, Powah für Strom).</p>
    `
  },

  "atm-star": {
    icon: "🌟",
    title: "ATM Star Endgame-Checkliste",
    content: `
      <p>Der <strong>ATM Star</strong> ist das ultimative Ziel von ATMons. Er wird im <strong>Create Mechanical Crafter</strong> (9×9 Pattern) aus Materialien dutzender Mods gefertigt. Das Rezept ist in <code>server_scripts/modpack/atm_star.js</code> definiert.</p>

      <h3>Hauptmaterialien</h3>
      <ul>
        <li>1× <strong>Unobtainium-Allthemodium Block</strong></li>
        <li>2× <strong>Master Ball</strong> ⚠️ <em>nicht craftbar – nur aus Raids/Battle Tower/Quests!</em></li>
        <li>2× <strong>Nether Star Block</strong> (aus 9 Nether Stars = mind. 9 Wither-Kills)</li>
        <li>Zahlreiche Custom-Items aus den Sub-Quests</li>
      </ul>
      <p>Außerdem gibt es eine Alternativ-Variante aus 9× <strong>ATM Star Shards</strong>.</p>

      <h3>Die 9 Sub-Quests (FTB Questbook)</h3>
      <p>Chapter <code>achapter_2r_6the_atm_star</code>, <code>order_index: 4</code>. Das Questbook trackt jeden Sub-Quest-Fortschritt automatisch.</p>

      <h3>Sub-Quest 1: Forbidden Arcanus Rune Setup</h3>
      <ul>
        <li>4× Rune Block</li>
        <li>Quantum Injector</li>
        <li>5× Arcane Crystal Block</li>
      </ul>
      <p><strong>Belohnung:</strong> 10× Obsidian Dust, 5× Steel Ingot, 5× Souls</p>

      <h3>Sub-Quest 2: Hephaestus Forge Tier 5</h3>
      <p>Die Hephaestus Forge ist die zentrale Endgame-Struktur in Forbidden Arcanus. Tier 5 ist die höchste Ausbau-Stufe.</p>
      <ul>
        <li>Quantum Injector</li>
        <li>Hephaestus Forge Core</li>
        <li>8× Darkstone Pedestal</li>
        <li>Komplexe mehrstufige Baustruktur (siehe Forbidden Arcanus Patchouli)</li>
      </ul>
      <p><strong>Belohnung:</strong> 10× Souls, 20× Arcane Crystal Dust, 1× XP Bucket</p>

      <h3>Sub-Quest 3: Enchantment Table Setup</h3>
      <ul>
        <li>Quantum Injector</li>
        <li>Enchantment Table</li>
        <li>4× Soul Lantern</li>
        <li>8× Darkstone Pedestal</li>
      </ul>
      <p><strong>Belohnung:</strong> 16× Experience Essence, 64× Lapis Lazuli, 1× Writable Book, XP-Level</p>

      <h3>Sub-Quest 4–9</h3>
      <p>Weitere Sub-Quests aus verschiedenen Mods: Building Tips, Juste Dire Things, Pokémon-Meilensteine, etc. Das Questbook zeigt den exakten Stand – einfach Schritt für Schritt abarbeiten.</p>

      <h3>Critical Path für den ATM Star</h3>
      <ol>
        <li><strong>Alle 3 Super-Alloys herstellen</strong> (siehe Alloy-Guide) → Unobtainium-Allthemodium Block</li>
        <li><strong>Master Balls sammeln</strong> – das ist oft der längste Flaschenhals. Sobald du erste Master Balls siehst, grinden!</li>
        <li><strong>Nether Stars farmen</strong> – Wither-Farm aufbauen oder zumindest 18× Wither-Skulls sammeln</li>
        <li><strong>Forbidden Arcanus Hephaestus Forge</strong> aufbauen (Tier 1 → 2 → 3 → 4 → 5)</li>
        <li><strong>Alle Sub-Quests</strong> im Questbook abhaken</li>
        <li>Materialien im <strong>9×9 Mechanical Crafter</strong> platzieren → craften</li>
      </ol>

      <h3>Belohnung</h3>
      <div class="info">
        <strong>50× ATM Star Shard</strong> + <strong>1× Patrick Star</strong> (Easter-Egg-Item) + 50 XP-Level
      </div>
      <p>Der ATM Star selbst ist ein Status-Symbol – in ATMons <em>nicht duplizierbar</em> aus eigenen Shards (anders als Standard-ATM-Packs!). Jede Kopie braucht alle Materialien frisch.</p>

      <div class="warn"><strong>Tipp:</strong> Starte das Master-Ball-Hunting schon im frühen Mid-Game – das ist fast immer der Flaschenhals. Jede Raid Den und jeder Battle Tower Run ist ein möglicher Master Ball.</div>

      <div class="links">
        <a href="https://www.curseforge.com/minecraft/modpacks/all-the-mons" target="_blank" rel="noopener">ATMons auf CurseForge</a>
        <a href="https://discord.gg/3paFjuRfz9" target="_blank" rel="noopener">ATMons Discord</a>
      </div>
    `
  },

  "rr-campaign": {
    icon: "🎯",
    title: "Radical Red — Kampagne & Strategien",
    content: `
      <p>Vollständige Trainer-Progression der <strong>Radical Red</strong> Serie in ATMons. Alle Daten aus <code>rctmod</code> Mod-Jar verifiziert. Schwierigkeitsgrad: <strong>9/10</strong>.</p>

      <h3>Vollständige Reihenfolge (24 Kämpfe)</h3>
      <p>Signature Item = Item im <strong>Trainer Spawner Block</strong> um den Trainer gezielt zu beschwören.</p>
      <table>
        <tr><th>#</th><th>Trainer</th><th>Lv</th><th>Signature Item</th><th>Biome</th></tr>
        <tr><td>1</td><td><strong>Brock</strong></td><td>12–14</td><td>Hard Stone</td><td>Cave, Mountain, Hill</td></tr>
        <tr><td>2</td><td><strong>Rocket Archer</strong></td><td>18–21</td><td>Black Tumblestone</td><td>Underground, Badlands, Savanna</td></tr>
        <tr><td>3</td><td><strong>Rival Terry 1</strong></td><td>18–21</td><td>Gold Nugget</td><td>Plains, Rare</td></tr>
        <tr><td>4</td><td><strong>Misty</strong></td><td>25–27</td><td>Mystic Water</td><td>Wet, Water, River, Beach</td></tr>
        <tr><td>5</td><td><strong>Trainer Brendan 1</strong></td><td>~27</td><td>Silk Scarf</td><td>Plains, Underground</td></tr>
        <tr><td>6</td><td><strong>Lt. Surge</strong></td><td>32–34</td><td>Magnet</td><td>Plains</td></tr>
        <tr><td>7</td><td><strong>Erika</strong></td><td>43–44</td><td>Miracle Seed</td><td>Dense Vegetation, Lush</td></tr>
        <tr><td>8</td><td><strong>Giovanni 1</strong></td><td>45–46</td><td>Upgrade</td><td>Badlands, Savanna</td></tr>
        <tr><td>9</td><td><strong>Rival Terry 2</strong></td><td>54–55</td><td>Soothe Bell</td><td>Plains, Rare</td></tr>
        <tr><td>10</td><td><strong>Archer+Ariana</strong></td><td>54–55</td><td>Black Sludge</td><td><em>Nether!</em>, Badlands</td></tr>
        <tr><td>11</td><td><strong>Giovanni 2</strong></td><td>54–56</td><td>Dubious Disc</td><td><em>Nether!</em>, Badlands</td></tr>
        <tr><td>12</td><td><strong>Sabrina</strong></td><td>57–59</td><td>Twisted Spoon</td><td>Spooky</td></tr>
        <tr><td>13</td><td><strong>Trainer Brendan 2</strong></td><td>~59</td><td>Expert Belt</td><td>Plains, Underground</td></tr>
        <tr><td>14</td><td><strong>Koga</strong></td><td>67–68</td><td>Poison Barb</td><td>Swamp, Jungle</td></tr>
        <tr><td>15</td><td><strong>Trainer May</strong></td><td>~68</td><td>Vivichoke</td><td>Plains, Forest</td></tr>
        <tr><td>16</td><td><strong>Blaine</strong></td><td>75–76</td><td>Charcoal Stick</td><td>Hot Biomes</td></tr>
        <tr><td>17</td><td><strong>Archer 2</strong></td><td>77–79</td><td>Covert Cloak</td><td><em>Nether!</em>, Badlands</td></tr>
        <tr><td>18</td><td><strong>Ariana 2</strong></td><td>77–79</td><td>Utility Umbrella</td><td><em>Nether!</em>, Badlands</td></tr>
        <tr><td>19</td><td><strong>Giovanni 3</strong></td><td>80</td><td>Destiny Knot</td><td><em>Nether!</em>, Badlands</td></tr>
        <tr><td>20</td><td><strong>Clair</strong></td><td>~80</td><td>Dragon Scale</td><td>Mountain, Peak</td></tr>
        <tr><td>21</td><td><strong>Rival Terry 3</strong></td><td>80–81</td><td>Lucky Egg</td><td>Plains, Rare</td></tr>
        <tr><td>22</td><td><strong>Trainer Brendan 3</strong></td><td>~81</td><td>Choice Scarf</td><td>Plains, Underground</td></tr>
        <tr><td>23</td><td><strong>E4</strong> (beliebige Reihenfolge)</td><td>84–85</td><td>Never-Melt Ice / Focus Band / Cleanse Tag / Dragon Fang</td><td>Cold / Cave / Spooky / Peak</td></tr>
        <tr><td>24</td><td><strong>Champion Terry</strong></td><td>85</td><td>Life Orb</td><td>End City, Rare</td></tr>
      </table>
      <div class="info"><strong>Nether-Zugang ab Schritt 10 nötig!</strong> Ab Archer+Ariana spawnen viele Trainer im Nether oder Badlands. Du brauchst ein Nether-Portal + gute Ausrüstung.</div>

      <div class="warn"><strong>WICHTIG — Move Relearning!</strong> In Cobblemon kannst du im Party-Menü <em>kostenlos</em> alle Moves relearnen die dein Pokémon bis zu seinem aktuellen Level hätte lernen können. Das ist bei JEDEM neuen Cap der erste Schritt — Moves optimieren!</div>

      <h3>Generelle Kampf-Tipps: Wenn der Gegner wechselt</h3>
      <div class="info">
        <p>RCT-Trainer wechseln <strong>aktiv</strong> ihre Pokémon, wenn sie im Typ-Nachteil sind! So reagierst du:</p>
        <ul>
          <li><strong>Gegner wechselt aus:</strong> Du bekommst einen <em>freien Zug</em>. Nutze ihn für:
            <br>— <strong>Setup-Move</strong> (Growth, Cotton Spore, Charge, Swords Dance) → du wirst stärker/schneller
            <br>— <strong>Eigener Wechsel</strong> → passenden Counter reinbringen für das neue Pokémon
            <br>— <strong>Angriff</strong> → der eingewechselte Gegner nimmt den Hit beim Reinkommen (kein Protect möglich!)
          </li>
          <li><strong>Was kommt als nächstes?</strong> Schau auf die <em>Typ-Tabelle</em> (⚔️ Quick-Link oben). Wenn der Gegner sein Fire-Mon gegen dein Water-Mon tauscht, kommt wahrscheinlich ein Grass oder Electric rein.</li>
          <li><strong>Predict den Switch:</strong> Wenn du <em>weißt</em> dass der Gegner wechseln wird (z.B. sein Fire-Mon steht gegen dein Marshtomp), nutze einen Move der das <em>einwechselnde</em> Mon trifft — z.B. <strong>Earthquake</strong> trifft das neue Electric-Mon beim Reinkommen super effektiv!</li>
          <li><strong>Stealth Rock / Entry Hazards:</strong> Falls du Stealth Rock hast (Marshtomp/Graveler können es lernen!), setze es früh — jeder Wechsel des Gegners kostet ihn dann HP. Besonders stark gegen Teams die viel wechseln.</li>
          <li><strong>Breloom Spore + Mach Punch:</strong> Breloom hat <strong>Spore</strong> (100% Sleep!) um gefährliche Gegner auszuschalten, und <strong>Mach Punch</strong> (+1 Prio) als Priority-Finisher. Perfekt gegen Focus Sash-Mons!</li>
          <li><strong>Arcanine Extreme Speed:</strong> Bei niedrigem HP des Gegner-Mons: <strong>Slot 2 Extreme Speed</strong> (+2 Priorität) trifft immer zuerst — egal ob der Gegner wechselt oder angreift.</li>
        </ul>
      </div>
      <div class="warn"><strong>Faustregel für Wechsel-Situationen:</strong>
        <br>1) Gegner wechselt? → <strong>Attacke weiter, treffe das neue Mon beim Reinkommen</strong>
        <br>2) Du bist im Nachteil? → <strong>Selbst wechseln auf den passenden Counter</strong> (siehe Kampfplan-Tabellen)
        <br>3) Unsicher was kommt? → <strong>Neutral-starken STAB-Move nutzen</strong> (Earthquake, Flare Blitz, Surf) — trifft fast alles gut
        <br>4) Du hast einen freien Zug? → <strong>Setup!</strong> (Growth, Charge → nächster Hit doppelt stark)
      </div>

      <h3>1. Leader Brock (Lv 12–14) ✅</h3>
      <p><strong>Thema:</strong> Rock · <strong>Bag:</strong> 1× Potion</p>
      <ul>
        <li><strong>Geodude-Alolan</strong> Lv13 Rock/Electric — Sturdy, Spark, Self-Destruct! Custap Berry</li>
        <li><strong>Vulpix</strong> Lv14 Fire — Flash Fire, Incinerate</li>
        <li><strong>Onix</strong> Lv14 Rock/Ground — Sturdy + Berry Juice = überlebt 2 Hits</li>
        <li><strong>Archen</strong> Lv12 Rock/Flying — Defeatist (wird schwach unter 50% HP)</li>
      </ul>
      <div class="info"><strong>Strategie:</strong> Geodude (Ground) gegen Alolan Geodude starten (immun gegen Spark, Bulldoze ×4). Dann Mudkip für den Rest (Water Gun ×2/×4 auf alles). <em>Achtung Self-Destruct bei Geodude!</em></div>

      <h3>2. Rocket Admin Archer (Lv 18–21) ✅</h3>
      <p><strong>Thema:</strong> Dark · <strong>Bag:</strong> 1× Super Potion · <strong>Signature:</strong> Black Tumblestone · <strong>Biome:</strong> Underground/Badlands/Savanna</p>
      <ul>
        <li><strong>Impidimp</strong> Lv18 Dark/Fairy — Prankster + Thunder Wave (Priorität!), Fake Out, Bite, Draining Kiss</li>
        <li><strong>Houndour</strong> Lv19 Dark/Fire — Thunder Fang, Incinerate, Snarl, Wise Glasses</li>
        <li><strong>Mightyena</strong> Lv21 Dark — Strong Jaw (×1.5 Fang-Moves!), Bite, Ice Fang, Poison Fang, Berry Juice</li>
      </ul>
      <div class="warn"><strong>VOR dem Kampf — Moves relearnen!</strong> Im Party-Menü kostenlos:
        <br>• <strong>Arcanine:</strong> Flare Blitz (120!), Extreme Speed (+2 Prio!), Crunch (80, Dark), Play Rough (90, Fairy!)
        <br>• <strong>Marshtomp:</strong> Earthquake (100!), Surf (90!), Mud Shot (55, senkt Speed)
        <br>• <strong>Nuzleaf:</strong> Fake Out (Prio-Flinch!), Mega Drain (40, heilt), Air Cutter (60)
        <br>• <strong>Staravia:</strong> Endeavor (Clutch!), Wing Attack, Quick Attack
        <br>• <strong>Geodude:</strong> Smack Down (50, Rock), Bulldoze (60), Magnitude
      </div>
      <div class="info"><strong>Kampfplan mit optimierten Moves:</strong>
        <br><strong>1. Impidimp →</strong> <strong>Arcanine</strong> mit <em>Play Rough</em> (Fairy ×2 auf Dark!). Tank Fake Out (Flinch Runde 1) + Thunder Wave (Paralyse). Play Rough sollte 1–2 Hit KO sein!
        <br><strong>2. Houndour →</strong> <strong>Marshtomp</strong> mit <em>Earthquake</em> (Ground ×2 auf Fire, 100 Power STAB!). Ground = immun gegen Thunder Fang. Instant KO.
        <br><strong>3. Mightyena →</strong> <strong>Arcanine</strong> mit <em>Play Rough</em> (Fairy ×2 auf Dark). Falls Arcanine paralysiert: <em>Extreme Speed</em> (+2 Prio, ignoriert Paralyse-Speed-Loss). NICHT Marshtomp (Ice Fang ×2 + Strong Jaw ×1.5 = tödlich!).
      </div>

      <h3>3. Rival Terry 1 (Lv 18–21)</h3>
      <p><strong>Signature:</strong> Gold Nugget · <strong>Biome:</strong> Plains · <strong>3 Varianten</strong> (abhängig vom Starter)</p>
      <ul>
        <li><strong>Variante A:</strong> Kirlia Lv19, Staravia Lv19, Rockruff Lv20, <strong>Wartortle</strong> Lv21</li>
        <li><strong>Variante B:</strong> Kirlia Lv18, Staravia Lv19, Rockruff Lv20, <strong>Ivysaur</strong> Lv21</li>
        <li><strong>Variante C:</strong> Kirlia Lv18, Staravia Lv19, Rockruff Lv20, <strong>Charmeleon</strong> Lv21</li>
      </ul>
      <div class="info"><strong>Strategie:</strong> Gemischtes Team — Kirlia (Psychic/Fairy) mit <em>Arcanine Crunch</em> (Dark ×2). Staravia mit <em>Marshtomp Rock Throw</em>. Rockruff (Rock) mit <em>Marshtomp Earthquake</em> (Ground ×2). Starter-Mon: Typ-Vorteil nutzen (Wartortle → Flaaffy, Ivysaur → Arcanine Flare Blitz, Charmeleon → Marshtomp Surf).</div>

      <h3>4. Leader Misty (Lv 25–27)</h3>
      <p><strong>Thema:</strong> Water · <strong>Bag:</strong> 1× Super Potion · <strong>Signature:</strong> Mystic Water · <strong>Biome:</strong> Wet/Water/River/Beach</p>
      <ul>
        <li><strong>Frogadier</strong> Lv25 Water — <em>Protean</em> (ändert Typ!), Ice Punch, Rock Tomb, Flip Turn, Grass Knot, Eviolite</li>
        <li><strong>Floatzel</strong> Lv25 Water — Technician, Water Pulse, Flip Turn, Icy Wind</li>
        <li><strong>Starmie</strong> Lv27 Water/Psychic — Analytic (+30% wenn langsamer!), Scald, Psyshock, Recover, Sitrus Berry</li>
        <li><strong>Lanturn</strong> Lv25 Water/Electric — Volt Absorb (heilt sich durch Electric!), Scald, Parabolic Charge</li>
      </ul>
      <div class="warn"><strong>VOR dem Kampf — TEAM-UMBAU!</strong>
        <br>1) <strong>Lotad fangen</strong> (Swamp-Biom, COMMON) → Lv 14 = Lombre → <strong>Water Stone = Ludicolo!</strong>
        <br>2) <strong>Geodude/Graveler RAUS → Ludicolo REIN!</strong>
        <br>3) Ludicolo Moves relearnen: Slot 1 Energy Ball (80), Slot 2 Giga Drain (75), Slot 3 Fake Out, Slot 4 Knock Off (65)
        <br>4) Team auf Lv 25+ leveln
        <br>5) Nuzleaf: Slot 3 → Feint Attack (Lv 24), Flaaffy: Slot 1 → Electro Ball (Lv 25)
      </div>
      <div class="info"><strong>Kampfplan — Ludicolo Solo-Sweep:</strong>
        <br><strong>Lead: Ludicolo!</strong> Resistiert Water ×0.25, kein Move von Misty trifft super effektiv.
        <br>
        <br><strong>1. Frogadier →</strong> Slot 3 Fake Out (Flinch!) → Slot 4 Knock Off (entfernt Eviolite!) → Slot 1 Energy Ball (Grass ×2 = KO!)
        <br><strong>2. Floatzel →</strong> Slot 1 Energy Ball (×2). Floatzels Water Pulse = ×0.25 Schaden auf dich.
        <br><strong>3. Starmie →</strong> Slot 4 Knock Off (entfernt Sitrus Berry, Dark ×2) → Slot 2 Giga Drain (Grass ×2 + heilt!)
        <br><strong>4. Lanturn →</strong> Slot 1 Energy Ball (Grass ×2). Volt Absorb egal — wir nutzen Grass!
        <br>
        <br><em>⚠️ Ludicolo bleibt IMMER drin!</em> Bei niedrigem HP → Slot 2 Giga Drain heilt zurück.
        <br>Backup: Arcanine Slot 3 Crunch (Dark ×2) gegen Starmie falls Ludicolo fällt.
      </div>

      <h3>5. Trainer Brendan 1 (Lv 28–29)</h3>
      <p><strong>Signature:</strong> Silk Scarf · <strong>Biome:</strong> Plains/Underground · <strong>Bag:</strong> 1× Super Potion</p>
      <ul>
        <li><strong>Loudred</strong> Lv28 Normal — Punk Rock (Sound-Moves ×1.3!), Hyper Voice, Brick Break, Ice Beam, Shadow Ball. Chople Berry</li>
        <li><strong>Lunatone</strong> Lv28 Rock/Psychic — Levitate (immun vs Ground!), Psyshock, Power Gem, Hypnosis, Calm Mind. Colbur Berry</li>
        <li><strong>Crawdaunt</strong> Lv29 Water/Dark — <em>Adaptability</em> (STAB ×2 statt ×1.5!), Aqua Jet (+1 Prio), Waterfall, Knock Off, X-Scissor. <strong>Focus Sash!</strong></li>
        <li><strong>Grovyle</strong> Lv29 Grass — Overgrow, Power-Up Punch, Aerial Ace, Leaf Blade (High Crit!), Rock Tomb. Sitrus Berry</li>
      </ul>
      <div class="warn"><strong>VOR dem Kampf — TEAM-UMBAU!</strong> Dein bisheriges Team hat <strong>0% Siegchance</strong> gegen Brendan — Crawdaunt (Adaptability + Focus Sash) sweept alles ohne Fighting-Coverage!
        <br><br><strong>1) Shroomish fangen → Breloom!</strong>
        <br>• <strong>Shroomish</strong> spawnt in <strong>Forest</strong> (COMMON, Lv 5–30)
        <br>• Shroomish → <strong>Breloom</strong> bei Lv 23 (lernt <strong>Mach Punch</strong> bei Evolution!)
        <br>• Breloom Moves relearnen: Slot 1 <strong>Mach Punch</strong> (40, Fighting +1 Prio), Slot 2 <strong>Close Combat</strong> (120, Fighting), Slot 3 <strong>Spore</strong> (100% Sleep!), Slot 4 <strong>Seed Bomb</strong> (80, Grass)
        <br><br><strong>2) Crabrawler fangen → Crabominable!</strong>
        <br>• <strong>Crabrawler</strong> spawnt an <strong>Küste/Coast</strong> (COMMON, Lv 9–34)
        <br>• Evolution: <strong>Ice Stone</strong> benutzen (Rezept in EMI)
        <br>• Crabominable Moves relearnen: Slot 1 <strong>Close Combat</strong> (120, Fighting), Slot 2 <strong>Ice Hammer</strong> (100, Ice), Slot 3 <strong>Gunk Shot</strong> (120, Poison), Slot 4 <strong>Avalanche</strong> (60, Ice — ×2 wenn zuletzt getroffen)
        <br><br><strong>3) Karrablast fangen → Escavalier!</strong>
        <br>• <strong>Karrablast</strong> spawnt in <strong>Swamp</strong> (COMMON, Lv 7–32) — gleiches Biom wie Lotad!
        <br>• Evolution: <strong>Shell Helmet</strong> Item benutzen (Rezept in EMI) oder Trade mit Shelmet
        <br>• Escavalier Moves relearnen: Slot 1 <strong>Megahorn</strong> (120, Bug), Slot 2 <strong>Close Combat</strong> (120, Fighting), Slot 3 <strong>Iron Head</strong> (80, Steel), Slot 4 <strong>Fell Stinger</strong> (50, Bug — +3 Atk bei KO!)
        <br>• Escavalier ist Bug/Steel → <strong>resistiert Crawdaunts Knock Off</strong> (Dark ×0.5) und X-Scissor (×1)!
        <br><br><strong>4) Nuzleaf + Staravia + Flaaffy RAUS → Breloom + Crabominable + Escavalier REIN!</strong>
      </div>
      <div class="info"><strong>Brendan-Kampfplan (Simulator-verifiziert, 93% Siegrate):</strong>
        <br><strong>Lead: Escavalier</strong> (Bug/Steel = resistiert fast alles von Brendan!)
        <br>
        <br><strong>1. Loudred →</strong> <strong>Escavalier Slot 2</strong> Close Combat (Fighting ×2 auf Normal = OHKO!)
        <br><strong>2. Lunatone →</strong> <strong>Ludicolo</strong> rein, Slot 1 Energy Ball (Grass ×2 auf Rock). 2 Hits = KO. (Escavalier schwach vs Power Gem!)
        <br><strong>3. Crawdaunt →</strong> <strong>DER Schlüsselkampf!</strong> Ludicolo raus → <strong>Breloom</strong> rein!
        <br>&nbsp;&nbsp;• Slot 3 <strong>Spore</strong> (100% Sleep!) → Crawdaunt schläft ein
        <br>&nbsp;&nbsp;• Slot 2 <strong>Close Combat</strong> (Fighting ×2 auf Dark = 114%+ Schaden!) → Focus Sash rettet auf 1 HP
        <br>&nbsp;&nbsp;• Slot 1 <strong>Mach Punch</strong> (+1 Priorität, geht VOR Aqua Jet!) → finisht Crawdaunt bei 1 HP!
        <br><strong>4. Grovyle →</strong> <strong>Arcanine</strong> rein, Intimidate senkt Angriff, Slot 1 <strong>Flare Blitz</strong> (Fire ×2 auf Grass = OHKO!)
        <br>
        <br><em>⚠️ Wenn Brendan wechselt:</em>
        <br>• Brendan bringt <strong>Crawdaunt</strong> früh? → <strong>Sofort Breloom!</strong> Spore + Close Combat + Mach Punch
        <br>• Brendan bringt <strong>Grovyle</strong> gegen Ludicolo? → <strong>Arcanine</strong> einwechseln (Flare Blitz ×2)
        <br>• <strong>Backup:</strong> Crabominable hat Close Combat + Ice Hammer gegen alles was durchkommt
        <br>• <strong>Hauptregel:</strong> Breloom NUR gegen Crawdaunt einsetzen, nicht vorher verschwenden!
      </div>

      <h3>6. Leader Lt. Surge (Lv 32–34)</h3>
      <p><strong>Thema:</strong> Electric · <strong>Bag:</strong> 1× Super Potion · <strong>Signature:</strong> Magnet · <strong>Biome:</strong> Plains</p>
      <ul>
        <li><strong>Pincurchin</strong> Lv32 Electric — Electric Surge (Terrain!), Scald (!)</li>
        <li><strong>Raichu-Alolan</strong> Lv33 Electric/Psychic — Surge Surfer (×2 Speed im Terrain!)</li>
        <li><strong>Vikavolt</strong> Lv33 Bug/Electric — Levitate (immun vs Ground!), Energy Ball</li>
        <li><strong>Manectric</strong> Lv34 Electric — Intimidate, kann Mega-Evolvieren! Manectite</li>
        <li><strong>Boltund</strong> Lv33 Electric — Strong Jaw Fangs (Fire/Ice/Psychic Fang)</li>
      </ul>
      <div class="info"><strong>Strategie:</strong> Marshtomp/Swampert mit <em>Earthquake</em> (100 Power, Ground STAB) ist MVP — immun gegen alle Electric. ABER: Vikavolt hat Levitate (immun vs Ground!) + Energy Ball (Grass ×4 auf Marshtomp!). Vikavolt mit <em>Arcanine Flare Blitz</em> (Fire ×2 auf Bug) oder Escavalier Iron Head besiegen. Rest = Marshtomp Earthquake sweep.</div>

      <h3>7. Leader Erika (Lv 43–44)</h3>
      <p><strong>Thema:</strong> Grass · <strong>Bag:</strong> 2× Hyper Potion · <strong>Signature:</strong> Miracle Seed · <strong>Biome:</strong> Dense Vegetation/Lush</p>
      <ul>
        <li><strong>Rillaboom</strong> Lv43 Grass — Grassy Surge + Grassy Glide (Priorität!), U-turn</li>
        <li><strong>Serperior</strong> Lv43 Grass — <em>Contrary</em> (Leaf Storm ERHÖHT Sp.Atk statt senkt!)</li>
        <li><strong>Venusaur</strong> Lv44 Grass/Poison — Mega-Evo möglich, Sleep Powder!</li>
        <li><strong>Meganium</strong> Lv44 Grass — Triage (Heilmoves haben Priorität)</li>
        <li><strong>Electrode-Hisui</strong> Lv44 Electric/Grass — Explosion!</li>
      </ul>
      <div class="warn"><strong>Brutal!</strong> Contrary Serperior wird mit jedem Leaf Storm STÄRKER. Venusaur kann Mega + Sleep Powder. Rillaboom hat Prioritäts-Grass-STAB.<br><strong>Strategie:</strong> <em>Arcanine Flare Blitz</em> (120, Fire ×2 auf Grass) + Crabominable <em>Ice Hammer</em> (100, Ice ×2 auf Grass) als Duo. Serperior SOFORT KOen bevor es boosted. Venusaur: <em>Extreme Speed</em> auf Arcanine als Priority um Sleep Powder zuvorzukommen. Breloom <em>Spore</em> kann gefährliche Mons einschläfern!</div>

      <h3>8. Boss Giovanni 1 (Lv 45–46)</h3>
      <p><strong>Bag:</strong> 2× Hyper Potion · <strong>Signature:</strong> Upgrade · <strong>Biome:</strong> Badlands/Savanna</p>
      <ul>
        <li><strong>Nidoking</strong> Lv45 Poison/Ground — Sheer Force + Life Orb (kein Recoil, +30%!)</li>
        <li><strong>Honchkrow</strong> Lv45 Dark/Flying — Super Luck, Sucker Punch</li>
        <li><strong>Infernape</strong> Lv45 Fire/Fighting — Pyro Ball, Close Combat</li>
        <li><strong>Kangaskhan</strong> Lv46 Normal — Mega möglich, Fake Out + Power-Up Punch</li>
        <li><strong>Rotom-Frost</strong> Lv45 Electric/Ice — Will-O-Wisp, Freeze-Dry</li>
      </ul>
      <div class="info"><strong>Strategie:</strong> Gemischtes Team nötig. Marshtomp/Swampert gegen Nidoking (Ground immun vs Electric, Water ×2 auf Ground). Gegen Kangaskhan-Mega: Fighting-Typ oder Kampf-Move. Rotom-Frost: kein einfacher Counter, Fire oder Fighting.</div>

      <h3>9–24: Mid- bis Endgame (Lv 54–85)</h3>
      <p>Ab Giovanni 1 wird die Progression <strong>deutlich länger</strong> mit Rivals, Brendan und May dazwischen:</p>
      <ul>
        <li><strong>#9 Rival Terry 2</strong> (Lv54-55): Staraptor, Electivire, Darmanitan + Mega-Starter. <em>Signature: Soothe Bell</em></li>
        <li><strong>#10 Archer+Ariana DOUBLES</strong> (Lv54-55): Incineroar, Aegislash, Mega Mawile. <em>Signature: Black Sludge · Biome: Nether!</em></li>
        <li><strong>#11 Giovanni 2</strong> (Lv54-56): Sand Rush Excadrill, Mega Kangaskhan, Garchomp. <em>Signature: Dubious Disc · Biome: Nether!</em></li>
        <li><strong>#12 Sabrina</strong> (Lv57-59): Psychic Terrain, Mega Gardevoir, Trick Room. <em>Signature: Twisted Spoon · Biome: Spooky</em></li>
        <li><strong>#13 Trainer Brendan 2</strong> (~Lv59). <em>Signature: Expert Belt</em></li>
        <li><strong>#14 Koga</strong> (Lv67-68): Battle Bond Greninja, Dragapult, Toxtricity. <em>Signature: Poison Barb · Biome: Swamp/Jungle</em></li>
        <li><strong>#15 Trainer May</strong> (~Lv68). <em>Signature: Vivichoke · Biome: Plains/Forest</em></li>
        <li><strong>#16 Blaine</strong> (Lv75-76): Drought + Mega Charizard Y, Chlorophyll. <em>Signature: Charcoal Stick · Biome: Hot</em></li>
        <li><strong>#17 Archer 2</strong> (Lv77-79): Mamoswine, Durant, Mega Houndoom. <em>Signature: Covert Cloak · Biome: Nether!</em></li>
        <li><strong>#18 Ariana 2</strong> (Lv77-79): Magic Bounce Hatterene, Mega Mawile. <em>Signature: Utility Umbrella · Biome: Nether!</em></li>
        <li><strong>#19 Giovanni 3 DOUBLES</strong> (Lv80): Mewtwo-Mega-Y, Tyranitar, Celesteela! <em>Signature: Destiny Knot · Biome: Nether!</em></li>
        <li><strong>#20 Leader Clair</strong> (~Lv80): Dragon-Gym. <em>Signature: Dragon Scale · Biome: Mountain/Peak</em></li>
        <li><strong>#21 Rival Terry 3</strong> (Lv80-81): Kartana, Mega-Starter, Hatterene. <em>Signature: Lucky Egg</em></li>
        <li><strong>#22 Trainer Brendan 3</strong> (~Lv81). <em>Signature: Choice Scarf</em></li>
        <li><strong>#23 Elite Four</strong> (Lv84-85, beliebige Reihenfolge): <em>Lorelei</em> (Never-Melt Ice, Cold), <em>Bruno</em> (Focus Band, Cave/Mountain), <em>Agatha</em> (Cleanse Tag, Spooky/Swamp), <em>Lance</em> (Dragon Fang, Mountain/Peak)</li>
        <li><strong>#24 Champion Terry</strong> (Lv85): Primal Groudon, Yveltal, Eternatus, Mega Metagross, Imposter Ditto. <em>Signature: Life Orb · Biome: End City/Rare</em></li>
      </ul>
      <div class="warn"><strong>Ab Koga (#14) brauchst du ein komplett neues Team</strong> mit legendären/pseudo-legendären Pokémon, Mega-Evolutionen und perfektem EV-Training. Nether-Zugang ab #10 Pflicht! Die Radical Red Serie ist Schwierigkeitsgrad <strong>9/10</strong>.</div>
    `
  },

  "rr-teams": {
    icon: "🏆",
    title: "Radical Red — Teams pro Level-Cap",
    content: `
      <p>Optimale Team-Zusammenstellung für jede Phase der Radical Red Kampagne. Alle Spawn-Daten aus dem Cobblemon-Jar verifiziert.</p>

      <h3>Cap 15 → Brock besiegen</h3>
      <table>
        <tr><th>#</th><th>Pokémon</th><th>Typ</th><th>Catch/Evo</th><th>Wo</th></tr>
        <tr><td>1</td><td><strong>Mudkip</strong></td><td>Water</td><td>Starter</td><td>—</td></tr>
        <tr><td>2</td><td><strong>Mareep → Flaaffy</strong></td><td>Electric</td><td>Lv 15</td><td>Plains/Highlands, COMMON</td></tr>
        <tr><td>3</td><td><strong>Growlithe → Arcanine</strong></td><td>Fire</td><td>Fire Stone</td><td>Overworld (nicht Wüste), UNCOMMON, tagsüber</td></tr>
        <tr><td>4</td><td><strong>Starly → Staravia</strong></td><td>Normal/Flying</td><td>Lv 14</td><td>Hills/Taiga, COMMON</td></tr>
        <tr><td>5</td><td><strong>Seedot → Nuzleaf</strong></td><td>Grass/Dark</td><td>Lv 14</td><td>Forest, COMMON</td></tr>
        <tr><td>6</td><td><strong>Geodude</strong></td><td>Rock/Ground</td><td>—</td><td>Höhlen + Berge, COMMON</td></tr>
      </table>
      <div class="info"><strong>Mount:</strong> Arcanine (Ground). <strong>Flug:</strong> noch nicht möglich. <strong>Brock-MVP:</strong> Geodude (Bulldoze ×4 vs Alolan Geodude) + Mudkip (Water Gun auf den Rest).</div>

      <h3>Cap 21 → Archer besiegen</h3>
      <div class="warn"><strong>WICHTIG — Moves relearnen!</strong> In Cobblemon kannst du im Party-Menü <em>kostenlos</em> alle Level-Up-Moves relearnen. Slot-Nummern beachten — die bleiben über die Caps hinweg konsistent!</div>
      <table>
        <tr><th>Pokémon</th><th>Slot 1</th><th>Slot 2</th><th>Slot 3</th><th>Slot 4</th></tr>
        <tr><td><strong>Marshtomp</strong></td><td><strong>Earthquake</strong> (100)</td><td><strong>Surf</strong> (90)</td><td>Mud Shot (55)</td><td>Protect</td></tr>
        <tr><td><strong>Arcanine</strong></td><td><strong>Flare Blitz</strong> (120)</td><td><strong>Extreme Speed</strong> (80)</td><td><strong>Crunch</strong> (80)</td><td><strong>Play Rough</strong> (90)</td></tr>
        <tr><td><strong>Nuzleaf</strong></td><td><strong>Fake Out</strong> (40, Prio)</td><td><strong>Mega Drain</strong> (40)</td><td><strong>Air Cutter</strong> (60)</td><td>Growth</td></tr>
        <tr><td><strong>Staravia</strong></td><td>Wing Attack (60)</td><td>Quick Attack (40)</td><td><strong>Endeavor</strong></td><td>Double Team</td></tr>
        <tr><td><strong>Flaaffy</strong></td><td>Thunder Shock (40)</td><td><strong>Charge</strong></td><td>Cotton Spore</td><td>Thunder Wave</td></tr>
        <tr><td><strong>Geodude</strong></td><td>Bulldoze (60)</td><td><strong>Smack Down</strong> (50)</td><td>Magnitude</td><td>Rock Throw (50)</td></tr>
      </table>
      <div class="info"><strong>Archer-Kampfplan (Slot-Referenz):</strong>
        <br>• Impidimp → <strong>Arcanine Slot 4</strong> Play Rough (Fairy ×2 auf Dark!)
        <br>• Houndour → <strong>Marshtomp Slot 1</strong> Earthquake (Ground ×2, immun vs Thunder Fang!)
        <br>• Mightyena → <strong>Arcanine Slot 4</strong> Play Rough (×2) → <strong>Slot 2</strong> Extreme Speed als Finisher. NICHT Marshtomp (Ice Fang!)
        <br><em>⚠️ Wenn Archer wechselt:</em>
        <br>• Archer tauscht Impidimp gegen Houndour? → <strong>Bleib bei Arcanine</strong>, Slot 1 Flare Blitz ist neutral auf Houndour (Fire resists Fire), aber du kannst auf Marshtomp wechseln
        <br>• Archer tauscht gegen Mightyena? → <strong>Arcanine bleibt drin</strong> — Play Rough (Slot 4) trifft Mightyena ×2 beim Reinkommen!
        <br>• Generell: Arcanine ist gegen alle 3 Archer-Mons brauchbar, du musst selten wechseln
      </div>

      <h3>Cap 27 → Misty besiegen</h3>
      <div class="warn"><strong>TEAM-UMBAU PFLICHT!</strong> Misty ist der schwerste Early-Game-Kampf. Ihr Protean-Frogadier hat Coverage gegen fast alles. Die Lösung:
        <br><br><strong>1) Lotad fangen → Ludicolo!</strong>
        <br>• <strong>Lotad</strong> spawnt in <strong>Swamp-Biom</strong> (COMMON, Lv 1–22, am Wasser oder Angeln)
        <br>• Nature's Compass → "Swamp" suchen
        <br>• Lotad → <strong>Lombre</strong> bei Lv 14 → <strong>Ludicolo</strong> mit <strong>Water Stone</strong> (EMI: "water_stone")
        <br><br><strong>2) Geodude/Graveler raus, Ludicolo rein!</strong>
        <br><br><strong>3) Ludicolo Moves relearnen (alles Lv-1, kostenlos!):</strong>
        <br>• Slot 1: <strong>Energy Ball</strong> (80, Grass STAB — ×2 auf alle Water!)
        <br>• Slot 2: <strong>Giga Drain</strong> (75, Grass STAB + heilt 50%!)
        <br>• Slot 3: <strong>Fake Out</strong> (40, Priority + Flinch!)
        <br>• Slot 4: <strong>Knock Off</strong> (65, Dark — entfernt Eviolite/Sitrus Berry!)
        <br><br><strong>4) Weitere Slot-Änderungen:</strong>
        <br>• Nuzleaf Slot 3: Air Cutter → <strong>Feint Attack</strong> (Dark, 60, Lv 24)
        <br>• Flaaffy Slot 1: Thunder Shock → <strong>Electro Ball</strong> (Lv 25)
      </div>

      <h3>Warum Ludicolo? (Water/Grass)</h3>
      <table>
        <tr><th>Mistys Move</th><th>Schaden auf Ludicolo</th></tr>
        <tr><td>Alle Water-Moves (Scald, Flip Turn, Water Pulse)</td><td><strong>×0.25!</strong> (doppelt resisted!)</td></tr>
        <tr><td>Ice Punch / Icy Wind</td><td>×1 (neutral)</td></tr>
        <tr><td>Grass Knot</td><td>×1 (neutral)</td></tr>
        <tr><td>Rock Tomb</td><td>×1 (neutral)</td></tr>
        <tr><td>Psyshock</td><td>×1 (neutral)</td></tr>
        <tr><td>Hidden Power Grass</td><td>×1 (neutral)</td></tr>
      </table>
      <p><em>Kein einziger Move von Misty trifft Ludicolo super effektiv! Water macht fast 0 Schaden.</em></p>

      <p><strong>Team nach Umbau (Lv 25+):</strong></p>
      <table>
        <tr><th>Pokémon</th><th>Slot 1</th><th>Slot 2</th><th>Slot 3</th><th>Slot 4</th></tr>
        <tr><td><strong>Marshtomp</strong></td><td>Earthquake (100)</td><td>Surf (90)</td><td>Mud Shot (55)</td><td>Protect</td></tr>
        <tr><td><strong>Arcanine</strong></td><td>Flare Blitz (120)</td><td>Extreme Speed (80)</td><td>Crunch (80)</td><td>Play Rough (90)</td></tr>
        <tr><td><strong>Nuzleaf</strong></td><td>Fake Out (40)</td><td>Mega Drain (40)</td><td><strong>⬆ Feint Attack (60)</strong></td><td>Growth</td></tr>
        <tr><td><strong>Staravia</strong></td><td>Wing Attack (60)</td><td>Quick Attack (40)</td><td>Endeavor</td><td>Double Team</td></tr>
        <tr><td><strong>Flaaffy</strong></td><td><strong>⬆ Electro Ball</strong></td><td>Charge</td><td>Cotton Spore</td><td>Thunder Wave</td></tr>
        <tr><td><strong>⬆ Ludicolo (NEU!)</strong></td><td><strong>Energy Ball (80)</strong></td><td><strong>Giga Drain (75)</strong></td><td><strong>Fake Out (40)</strong></td><td><strong>Knock Off (65)</strong></td></tr>
      </table>

      <div class="info"><strong>Misty-Kampfplan — Ludicolo Solo-Sweep:</strong>
        <br><strong>Lead: Ludicolo</strong> gegen alles!
        <br>
        <br>• <strong>Frogadier →</strong> Slot 3 Fake Out (Flinch!) → Slot 4 Knock Off (entfernt Eviolite!) → Slot 1 Energy Ball (Grass ×2 = KO ohne Eviolite!)
        <br>• <strong>Floatzel →</strong> Slot 1 Energy Ball (Grass ×2). Floatzels Water Pulse macht nur ×0.25 Schaden auf dich!
        <br>• <strong>Starmie →</strong> Slot 4 Knock Off (entfernt Sitrus Berry + Dark ×2 auf Psychic!) → Slot 2 Giga Drain (Grass ×2 + heilt dich!)
        <br>• <strong>Lanturn →</strong> Slot 1 Energy Ball (Grass ×2 auf Water!). Volt Absorb ist egal — wir nutzen Grass, nicht Electric!
        <br>
        <br><em>⚠️ Wenn Misty wechselt:</em>
        <br>• <strong>Ludicolo bleibt IMMER drin!</strong> Gegen alle 4 Misty-Mons hat Ludicolo ×2 Grass STAB + nimmt minimalen Schaden
        <br>• Frogadier nutzt Flip Turn? → ×0.25 Schaden auf Ludicolo, egal was reinkommt → Energy Ball/Giga Drain weiter
        <br>• Ludicolo HP niedrig? → Slot 2 Giga Drain heilt 50% des angerichteten Schadens zurück!
        <br>• <strong>Backup:</strong> Falls Ludicolo wider Erwarten fällt → Arcanine Slot 3 Crunch gegen Starmie, Marshtomp Slot 1 Earthquake gegen Lanturn
      </div>

      <h3>Cap 27 → Brendan besiegen (TEAM-UMBAU!)</h3>
      <div class="warn"><strong>TEAM-UMBAU PFLICHT!</strong> Brendans Crawdaunt (Adaptability + Focus Sash) sweept dein bisheriges Team ohne Fighting-Coverage. <strong>0% Siegrate ohne Umbau!</strong>
        <br><br><strong>Änderungen:</strong>
        <br>• <strong>Nuzleaf RAUS → Breloom REIN!</strong> (Shroomish fangen in Forest, COMMON, Evo Lv 23)
        <br>• <strong>Staravia RAUS → Crabominable REIN!</strong> (Crabrawler an Küste COMMON, Ice Stone für Evo)
        <br>• <strong>Flaaffy RAUS → Escavalier REIN!</strong> (Karrablast in Swamp COMMON, Shell Helmet Item für Evo)
      </div>
      <table>
        <tr><th>Pokémon</th><th>Slot 1</th><th>Slot 2</th><th>Slot 3</th><th>Slot 4</th></tr>
        <tr><td><strong>Marshtomp</strong></td><td>Earthquake (100)</td><td>Surf (90)</td><td>Mud Shot (55)</td><td>Protect</td></tr>
        <tr><td><strong>Arcanine</strong></td><td>Flare Blitz (120)</td><td>Extreme Speed (80)</td><td>Crunch (80)</td><td>Play Rough (90)</td></tr>
        <tr><td><strong>⬆ Breloom (NEU!)</strong></td><td><strong>Mach Punch (40, +1 Prio)</strong></td><td><strong>Close Combat (120)</strong></td><td><strong>Spore (100% Sleep!)</strong></td><td><strong>Seed Bomb (80)</strong></td></tr>
        <tr><td><strong>⬆ Crabominable (NEU!)</strong></td><td><strong>Close Combat (120)</strong></td><td><strong>Ice Hammer (100)</strong></td><td><strong>Gunk Shot (120)</strong></td><td><strong>Avalanche (60)</strong></td></tr>
        <tr><td><strong>⬆ Escavalier (NEU!)</strong></td><td><strong>Megahorn (120)</strong></td><td><strong>Close Combat (120)</strong></td><td><strong>Iron Head (80)</strong></td><td><strong>Fell Stinger (50)</strong></td></tr>
        <tr><td><strong>Ludicolo</strong></td><td>Energy Ball (80)</td><td>Giga Drain (75)</td><td>Fake Out (40)</td><td>Knock Off (65)</td></tr>
      </table>
      <div class="info"><strong>Brendan-Kampfplan (93% Siegrate, Simulator-verifiziert):</strong>
        <br>• <strong>Loudred →</strong> Escavalier Slot 2 Close Combat (OHKO!)
        <br>• <strong>Lunatone →</strong> Ludicolo Slot 1 Energy Ball (2× = KO)
        <br>• <strong>Crawdaunt →</strong> Breloom! Slot 3 Spore → Slot 2 Close Combat (Focus Sash → 1 HP) → Slot 1 Mach Punch (Priority-Finish!)
        <br>• <strong>Grovyle →</strong> Arcanine Slot 1 Flare Blitz (OHKO!)
        <br>• <strong>Backup:</strong> Crabominable hat Close Combat + Ice Hammer gegen alles was durchkommt
      </div>

      <h3>Cap 34 → Lt. Surge besiegen</h3>
      <div class="warn"><strong>Keine Slot-Änderungen nötig.</strong> Breloom, Crabominable, Escavalier und Ludicolo sind bereits optimal. Alle Moves bleiben.</div>
      <table>
        <tr><th>Pokémon</th><th>Slot 1</th><th>Slot 2</th><th>Slot 3</th><th>Slot 4</th></tr>
        <tr><td><strong>Marshtomp</strong></td><td>Earthquake (100)</td><td>Surf (90)</td><td>Mud Shot (55)</td><td>Protect</td></tr>
        <tr><td><strong>Arcanine</strong></td><td>Flare Blitz (120)</td><td>Extreme Speed (80)</td><td>Crunch (80)</td><td>Play Rough (90)</td></tr>
        <tr><td><strong>Breloom</strong></td><td>Mach Punch (40)</td><td>Close Combat (120)</td><td>Spore</td><td>Seed Bomb (80)</td></tr>
        <tr><td><strong>Crabominable</strong></td><td>Close Combat (120)</td><td>Ice Hammer (100)</td><td>Gunk Shot (120)</td><td>Avalanche (60)</td></tr>
        <tr><td><strong>Escavalier</strong></td><td>Megahorn (120)</td><td>Close Combat (120)</td><td>Iron Head (80)</td><td>Fell Stinger (50)</td></tr>
        <tr><td><strong>Ludicolo</strong></td><td>Energy Ball (80)</td><td>Giga Drain (75)</td><td>Fake Out (40)</td><td>Knock Off (65)</td></tr>
      </table>
      <div class="info"><strong>Surge-Kampfplan (Slot-Referenz):</strong>
        <br>• Pincurchin/Raichu/Manectric/Boltund → <strong>Marshtomp Slot 1</strong> Earthquake (Ground immun vs Electric, ×2!)
        <br>• Vikavolt (Levitate = immun vs Ground!) → <strong>Arcanine Slot 1</strong> Flare Blitz (Fire ×2 auf Bug!) — NICHT Marshtomp (Energy Ball ×4!)
        <br>• Pincurchin hat <strong>Scald</strong> (Water!) → falls Marshtomp HP niedrig: <strong>Ludicolo</strong> einwechseln (Water ×0.25 + Energy Ball ×2)
        <br><em>⚠️ Wenn Surge wechselt:</em>
        <br>• Surge nutzt <strong>Volt Switch</strong> überall! Marshtomp ist immun → 0 Schaden. <strong>Marshtomp bleibt stehen + Earthquake spam.</strong>
        <br>• Surge bringt <strong>Vikavolt</strong>? → <strong>Sofort Arcanine!</strong> Flare Blitz (Fire ×2 auf Bug). NICHT Marshtomp (Energy Ball ×4)!
        <br>• Nach Vikavolt-KO: <strong>Zurück zu Marshtomp</strong> → sweep weiter
      </div>

      <h3>Cap 44 → Erika besiegen</h3>
      <div class="warn"><strong>Evolutions + Slot-Änderungen:</strong>
        <br>• <strong>Flaaffy → Ampharos</strong> bei Lv 30! Neue Moves:
        <br>&nbsp;&nbsp;Slot 2: Confuse Ray → <strong>Power Gem</strong> (80, Rock Coverage! Lv 34)
        <br>&nbsp;&nbsp;Slot 1: Electro Ball → <strong>Discharge</strong> (80, Lv 38)
        <br>• <strong>Marshtomp → Swampert</strong> bei Lv 36! Moves bleiben, höhere Stats
        <br>• Breloom, Crabominable, Escavalier: Moves unverändert — bereits optimal
        <br>• <strong>Marshtomp → Swampert</strong> bei Lv 36! Moves bleiben, höhere Stats
      </div>
      <table>
        <tr><th>Pokémon</th><th>Slot 1</th><th>Slot 2</th><th>Slot 3</th><th>Slot 4</th></tr>
        <tr><td><strong>Swampert</strong></td><td>Earthquake (100)</td><td>Surf (90)</td><td>Mud Shot (55)</td><td>Protect</td></tr>
        <tr><td><strong>Arcanine</strong></td><td>Flare Blitz (120)</td><td>Extreme Speed (80)</td><td>Crunch (80)</td><td>Play Rough (90)</td></tr>
        <tr><td><strong>Breloom</strong></td><td>Mach Punch (40)</td><td>Close Combat (120)</td><td>Spore</td><td>Seed Bomb (80)</td></tr>
        <tr><td><strong>Crabominable</strong></td><td>Close Combat (120)</td><td>Ice Hammer (100)</td><td>Gunk Shot (120)</td><td>Avalanche (60)</td></tr>
        <tr><td><strong>Escavalier</strong></td><td>Megahorn (120)</td><td>Close Combat (120)</td><td>Iron Head (80)</td><td>Fell Stinger (50)</td></tr>
        <tr><td><strong>Ludicolo</strong></td><td>Energy Ball (80)</td><td>Giga Drain (75)</td><td>Fake Out (40)</td><td>Knock Off (65)</td></tr>
      </table>
      <div class="warn"><strong>Erika-Kampfplan (Slot-Referenz):</strong>
        <br>• Serperior (Contrary!) → <strong>Arcanine Slot 1</strong> Flare Blitz (Fire ×2) — SOFORT KOen bevor es mit Leaf Storm boosted!
        <br>• Venusaur (Sleep Powder!) → <strong>Arcanine Slot 2</strong> Extreme Speed (+2 Prio, schlägt vor Sleep Powder zu!)
        <br>• Rillaboom/Meganium → <strong>Crabominable Slot 2</strong> Ice Hammer (Ice ×2 auf Grass) oder <strong>Arcanine Slot 1</strong> Flare Blitz
        <br>• Electrode-Hisui (Explosion!) → <strong>Swampert Slot 4</strong> Protect um Explosion zu blocken, dann Slot 1 Earthquake
        <br><em>⚠️ Wenn Erika wechselt:</em>
        <br>• Erika bringt <strong>Serperior</strong> zurück? → <strong>SOFORT Arcanine rein + Slot 1 Flare Blitz!</strong> Serperior darf KEINEN Turn mit Leaf Storm bekommen (wird durch Contrary immer stärker!)
        <br>• Erika tauscht gegen <strong>Venusaur</strong>? → <strong>NICHT wechseln wenn Arcanine draußen</strong>. Slot 1 Flare Blitz trifft Venusaur ×2 beim Reinkommen. Wenn Venusaur überlebt: Slot 2 Extreme Speed (+2 Prio) als Finisher VOR Sleep Powder.
        <br>• Rillaboom nutzt <strong>U-Turn</strong> (Hit + Rückzug)? → Du nimmst Bug-Schaden (neutral). Nächstes Mon kommt rein. <strong>Nicht panisch wechseln</strong> — Arcanine/Crabominable treffen fast alles von Erika ×2 mit Fire/Ice.
        <br>• <strong>Hauptregel bei Erika:</strong> Arcanine + Crabominable abwechselnd einsetzen. Arcanine hat Fire ×2, Crabominable hat Ice Hammer (×2 auf Grass) + Close Combat auf ALLES in Erikas Team.
      </div>

      <h3>Cap 46+ → Giovanni 1 und weiter</h3>
      <p>Ab hier wird das Team-Building <strong>situativ</strong>. Du brauchst:</p>
      <ul>
        <li><strong>Marshtomp → Swampert</strong> (Lv 36) — Mega-fähig mit Swampertite</li>
        <li><strong>Diverse Coverage</strong> — Fighting, Fairy, Steel werden wichtiger</li>
        <li><strong>Speed Control</strong> — viele Gegner sind schnell, Priority-Moves helfen</li>
        <li><strong>Held Items</strong> — Focus Sash, Life Orb, Choice Scarf werden Pflicht</li>
      </ul>
      <div class="info">Pokémon-Empfehlungen für Mid-Game (Cap 46–68):</div>
      <table>
        <tr><th>Slot</th><th>Empfehlung</th><th>Typ</th><th>Warum</th></tr>
        <tr><td>1</td><td><strong>Swampert</strong> (Mega)</td><td>Water/Ground</td><td>Swift Swim + Mega = Allrounder</td></tr>
        <tr><td>2</td><td><strong>Arcanine</strong></td><td>Fire</td><td>Intimidate, Ground Mount</td></tr>
        <tr><td>3</td><td><strong>Escavalier</strong></td><td>Bug/Steel</td><td>135 Atk, Megahorn + Close Combat, massive Bulk</td></tr>
        <tr><td>4</td><td><strong>Breloom/Crabominable</strong></td><td>Fighting</td><td>Spore + Mach Punch / Ice Hammer + Close Combat</td></tr>
        <tr><td>5</td><td><strong>Gardevoir/Togekiss</strong></td><td>Fairy</td><td>Fairy ×2 auf Dark/Dragon + Psychic STAB</td></tr>
        <tr><td>6</td><td><strong>Lucario/Machamp</strong></td><td>Fighting</td><td>Fighting Coverage für Normal/Dark/Steel</td></tr>
      </table>

      <h3>Endgame (Cap 80–85) → E4 + Champion Terry</h3>
      <p><strong>Du brauchst Legendäre und Mega-Evolvierte Pokémon.</strong> Die Gegner haben Primal Groudon, Primal Kyogre, Zacian, Mewtwo, Dialga, Yveltal.</p>
      <div class="warn">
        <strong>Champion Terrys Team:</strong><br>
        Pheromosa (Bug/Fighting), Mega Metagross (Steel/Psychic), <strong>Primal Groudon</strong> (Ground), <strong>Yveltal</strong> (Dark/Flying), <strong>Eternatus</strong> (Poison/Dragon), <strong>Imposter Ditto</strong> (kopiert dein bestes Mon!)
      </div>
      <p>Empfohlenes Endgame-Team:</p>
      <table>
        <tr><th>Pokémon</th><th>Typ</th><th>Rolle</th><th>Quelle</th></tr>
        <tr><td><strong>Mega Swampert</strong></td><td>Water/Ground</td><td>Rain Sweeper</td><td>Starter-Evolution + Swampertite</td></tr>
        <tr><td><strong>Mega Gardevoir</strong></td><td>Psychic/Fairy</td><td>Sp.Atk Nuke</td><td>Ralts (Rare, Floral/Village)</td></tr>
        <tr><td><strong>Excadrill</strong></td><td>Ground/Steel</td><td>Sand Rush Sweeper</td><td>Drilbur (Höhlen, COMMON)</td></tr>
        <tr><td><strong>Dragapult</strong></td><td>Dragon/Ghost</td><td>Speed Control</td><td>Dreepy (selten)</td></tr>
        <tr><td><strong>Toxapex</strong></td><td>Poison/Water</td><td>Wall/Stall</td><td>Mareanie (Fishing)</td></tr>
        <tr><td><strong>Legendary</strong></td><td>variabel</td><td>Power Pick</td><td>Raid Dens / Battle Tower</td></tr>
      </table>
      <p class="info">Das Endgame-Team ist <strong>hochgradig situativ</strong>. Passe es an den nächsten E4-Gegner an — jeder hat 2 zufällige Team-Varianten!</p>
    `
  },
};