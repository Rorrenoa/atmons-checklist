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
};
