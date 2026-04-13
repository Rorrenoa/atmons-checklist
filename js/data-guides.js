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

  "gen-changes": {
    icon: "🕹️",
    title: "Änderungen seit Generation 1",
    content: `
      <p>Du hast zuletzt Gen 1 (Rot/Blau) gespielt? Keine Sorge — das Grundprinzip ist dasselbe: <strong>Rundenbasierte Kämpfe, Typenvorteile, Pokémon fangen &amp; entwickeln.</strong> Aber seit Gen 1 sind <em>viele</em> neue Systeme dazugekommen. Hier ist alles, was du wissen musst — und wie es in <strong>ATMons/Cobblemon</strong> umgesetzt ist.</p>

      <div class="info"><strong>Cobblemon</strong> basiert auf <strong>Generation 9</strong> — dem aktuellsten Pokémon-Kampfsystem. Das bedeutet: alle dauerhaften Verbesserungen (neue Typen, Split, Fähigkeiten, etc.) sind aktiv. Temporäre Gimmicks einzelner Generationen (Z-Moves, Dynamax, Terakristallisierung) sind <em>nicht</em> implementiert.</div>

      <h3>⚙️ Generation 2 — Gold / Silber / Kristall</h3>
      <p>Der erste große Umbruch nach Gen 1. Praktisch alles, was hier eingeführt wurde, ist heute Standard.</p>

      <h4>🆕 Zwei neue Typen: Unlicht &amp; Stahl</h4>
      <p>In Gen 1 war Psycho dominant — fast nichts konnte es effektiv kontern. <strong>Unlicht</strong> (immun gegen Psycho, stark gegen Psycho/Geist) und <strong>Stahl</strong> (resistiert 10 Typen!) wurden als Gegengewicht eingeführt.</p>
      <div class="info"><strong>In ATMons:</strong> Aktiv. Die Typ-Tabelle hat 18 Typen (inkl. Fee aus Gen 6). Du erkennst Unlicht- und Stahl-Pokémon z.B. an Umbreon, Murkrow, Skarmory, Steelix. Öffne die <em>Typ-Tabelle</em> in der Quick-Link-Leiste für alle Matchups.</div>

      <h4>🔀 Spezial-Split: Sp. Angriff &amp; Sp. Verteidigung</h4>
      <p>In Gen 1 gab es nur <em>einen</em> "Spezial"-Wert für Angriff und Verteidigung. Seit Gen 2 sind das <strong>zwei getrennte Werte</strong>. Ein Pokémon kann jetzt hohen Spezial-Angriff aber niedrige Spezial-Verteidigung haben (oder umgekehrt).</p>
      <div class="info"><strong>In ATMons:</strong> Aktiv. Jedes Pokémon hat 6 Statuswerte: <em>KP, Angriff, Verteidigung, Sp. Angriff, Sp. Verteidigung, Initiative</em>. Sichtbar im Pokémon-Summary-Screen.</div>

      <h4>🎒 Getragene Items (Held Items)</h4>
      <p>Jedes Pokémon kann <strong>genau ein Item</strong> halten. Held Items wirken automatisch im Kampf — manche heilen (Sitrus Berry), manche verstärken Attacken (Mystic Water = +20% Wasser), manche haben strategische Effekte (Focus Sash = überlebt jeden OHKO mit 1 KP, Choice Band = +50% Atk aber nur ein Move nutzbar). Auch manche Entwicklungen brauchen Items (z.B. Onix + Metallmantel bei Tausch = Stahlos).</p>
      <div class="info"><strong>In ATMons:</strong> Voll aktiv! Held Items sind <em>zentral</em> für Kampf-Strategien. Die RCT-Trainer nutzen Items aggressiv — du solltest das auch. Items findest du in Loot-Truhen, kaufst sie bei Villagers mit PokéTokens, oder bekommst sie als Quest-Belohnungen.</div>

      <h4>🥚 Zucht &amp; Eier</h4>
      <p>Seit Gen 2 können kompatible Pokémon zusammen Eier produzieren. Das Ei ergibt die Grundform der Mutter und kann Attacken vom Vater erben (<em>Egg Moves</em>). Zwei Pokémon können züchten wenn sie in der gleichen <em>Ei-Gruppe</em> sind.</p>
      <div class="info"><strong>In ATMons:</strong> Aktiv! Zucht läuft über den <strong>Pasture</strong>-Block. Zwei kompatible Pokémon drin → nach einiger Zeit erscheint ein Ei. Brutzeit = 6000 Ticks × Pokémon-Level. <em>Redstone-Block unter dem Pasture stoppt Ei-Produktion.</em> Breeding-Cooldown: 10 Minuten.</div>

      <h4>✨ Shinies</h4>
      <p>Seit Gen 2 gibt es <strong>Shiny-Pokémon</strong> — extrem seltene Farbvarianten. Kein Stärkeunterschied, rein kosmetisch, aber ein beliebtes Sammelziel.</p>
      <div class="info"><strong>In ATMons:</strong> Shiny-Rate = <strong>1:8192</strong> (Standard). Tipp: Link Cable an ein Elternteil beim Züchten = gilt als "Tausch" → <em>erhöhte Shiny-Chance</em> (Masuda-Methoden-Äquivalent).</div>

      <h4>💕 Freundschaft</h4>
      <p>Jedes Pokémon hat einen <strong>Freundschaftswert</strong> (0–255). Manche Pokémon entwickeln sich erst bei hoher Freundschaft (z.B. Pichu → Pikachu, Riolu → Lucario). Freundschaft steigt durch Kämpfe, Laufen, Heilen und sinkt durch Kampfunfähigkeit.</p>
      <div class="info"><strong>In ATMons:</strong> Aktiv. Freundschaft wird über Kämpfe, Laufen und Interaktion aufgebaut. Sichtbar im Pokémon-Summary. Soothe Bell (Held Item) beschleunigt den Aufbau.</div>

      <h4>♂♀ Geschlechter</h4>
      <p>In Gen 1 waren alle Pokémon geschlechtslos. Seit Gen 2 haben die meisten Pokémon ein Geschlecht. Manche Entwicklungen sind geschlechtsabhängig (z.B. Kirlia → Gallade nur ♂, Combee → Vespiquen nur ♀).</p>
      <div class="info"><strong>In ATMons:</strong> Aktiv. Geschlecht wird beim Spawn/Schlüpfen bestimmt und ist relevant für Zucht und bestimmte Entwicklungen.</div>

      <h3>⚙️ Generation 3 — Rubin / Saphir / Smaragd</h3>
      <p>Brachte die moderne Kampfstruktur. Jedes einzelne Pokémon ist jetzt durch <strong>Fähigkeit + Wesen</strong> individuell.</p>

      <h4>🧬 Fähigkeiten (Abilities)</h4>
      <p>Jedes Pokémon hat eine <strong>passive Fähigkeit</strong>, die permanent wirkt. Beispiele: <em>Intimidate</em> (senkt Angriff des Gegners beim Einwechseln), <em>Levitate</em> (immun gegen Boden-Attacken), <em>Flash Fire</em> (immun gegen Feuer, eigene Feuer-Moves werden stärker). Jede Art hat 1–2 normale Fähigkeiten + evtl. eine versteckte Fähigkeit.</p>
      <div class="info"><strong>In ATMons:</strong> Voll aktiv! Fähigkeiten beeinflussen Kämpfe <em>massiv</em>. RCT-Trainer nutzen Abilities strategisch (z.B. Drought für Sonne, Intimidate zum Stat-Drop). Prüfe die Fähigkeit deiner Pokémon im Summary-Screen — manchmal ist ein "schlechtes" Pokémon mit der richtigen Ability besser als ein "gutes" mit der falschen.</div>

      <h4>🎭 Wesen (Natures)</h4>
      <p>Jedes Pokémon hat eines von <strong>25 Wesen</strong>. Die meisten geben <strong>+10% auf einen Wert</strong> und <strong>-10% auf einen anderen</strong>. Beispiel: <em>Adamant</em> = +Angriff/-Sp.Angriff (ideal für physische Angreifer). 5 Wesen sind neutral (keine Veränderung). Das Wesen wird beim Fangen/Schlüpfen zufällig bestimmt.</p>
      <div class="info"><strong>In ATMons:</strong> Aktiv. Wesen sind im Summary sichtbar (rot = +10%, blau = -10%). Für schwere Kämpfe lohnt es sich, ein Pokémon mit passendem Wesen zu fangen. <em>Mints</em> zum Überschreiben gibt es in Cobblemon aktuell <strong>nicht</strong> — das richtige Wesen muss gefangen werden.</div>

      <h4>💪 EVs &amp; IVs (versteckte Stärke-Systeme)</h4>
      <p>Seit Gen 3 hat jedes Pokémon <strong>Individual Values (IVs)</strong> — angeborene Werte von 0–31 pro Stat, die die maximale Stärke bestimmen. Dazu kommen <strong>Effort Values (EVs)</strong> — Trainingspunkte die durch Kämpfe gesammelt werden (max. 252 pro Stat, 510 total). IVs + EVs zusammen können einen Stat um ~30% verändern.</p>
      <div class="info"><strong>In ATMons:</strong> Beides aktiv! IVs sind beim Fang zufällig. EVs werden durch Kämpfe verdient. Die RCT-Trainer haben oft <strong>perfekte IVs und optimierte EVs</strong> — deine Pokémon nicht. Das erklärt, warum Trainerkämpfe so viel härter sind als Wildkämpfe. Tipp: Gegen viele Pokémon desselben Typs kämpfen = EVs in dem Stat den diese Art gibt.</div>

      <h4>⛈️ Wetter im Kampf</h4>
      <p>Bestimmte Moves und Abilities erzeugen Wetter-Effekte (Sonne, Regen, Sandsturm, Hagel). Sonne verstärkt Feuer +50% und schwächt Wasser -50%. Regen umgekehrt. Sandsturm gibt Gestein +50% Sp.Vrt. und Chip-Schaden. Hagel gibt Chip-Schaden an Nicht-Eis-Pokémon.</p>
      <div class="info"><strong>In ATMons:</strong> Aktiv. Wetter wird von den RCT-Trainern <em>aggressiv</em> genutzt (z.B. Drought + Solar Beam, Sand Stream + Sand Rush). Dauer: 5 Runden (8 mit Heat Rock/Damp Rock etc.).</div>

      <h3>⚙️ Generation 4 — Diamant / Perl / Platin</h3>
      <p>Die wohl wichtigste einzelne Kampf-Änderung in der gesamten Pokémon-Geschichte.</p>

      <h4>💥 Physisch / Speziell Split (pro Attacke!)</h4>
      <p>In Gen 1–3 war die Kategorie an den <strong>Typ</strong> gebunden: alle Feuer-Attacken waren speziell, alle Kampf-Attacken physisch — egal wie die Attacke aussah. <strong>Seit Gen 4 hat jede einzelne Attacke ihre eigene Kategorie.</strong></p>
      <p>Das bedeutet: <em>Fire Punch</em> ist jetzt <strong>physisch</strong> (nutzt Angriff), <em>Flamethrower</em> ist <strong>speziell</strong> (nutzt Sp.Angriff). Ein Pokémon mit hohem physischen Angriff kann endlich auch Feuer-Moves physisch nutzen!</p>
      <div class="warn"><strong>Das ist RIESIG!</strong> Wenn du aus Gen 1 kommst, vergiss die alte Typ→Kategorie-Zuordnung komplett. Jeder Move zeigt im Summary an ob er physisch (💥) oder speziell (🌀) ist. Wähle Moves die zum <em>stärkeren Wert</em> deines Pokémon passen!</div>
      <div class="info"><strong>In ATMons:</strong> Voll aktiv. Cobblemon zeigt bei jedem Move die Kategorie an. Physische Moves nutzen <em>Angriff vs. Verteidigung</em>, spezielle Moves nutzen <em>Sp.Angriff vs. Sp.Verteidigung</em>. Es gibt auch <em>Status-Moves</em> (weder physisch noch speziell — Effekte wie Schlaf, Stat-Boosts etc.).</div>

      <h4>🔗 Neue Entwicklungen für alte Pokémon</h4>
      <p>Gen 4 gab vielen Gen-1/2-Pokémon neue Entwicklungen: Electabuzz → <em>Electivire</em>, Magmar → <em>Magmortar</em>, Rhydon → <em>Rhyperior</em>, Togetic → <em>Togekiss</em>, etc. Manche brauchen spezielle Items beim Tausch.</p>
      <div class="info"><strong>In ATMons:</strong> Alle verfügbar! "Tausch"-Entwicklungen funktionieren in Cobblemon über die <strong>Link Cable</strong> — ein Item das den Tausch simuliert. Kein echter Spieler-Tausch nötig!</div>

      <h3>⚙️ Generation 5 — Schwarz / Weiß</h3>

      <h4>🔓 Versteckte Fähigkeiten (Hidden Abilities)</h4>
      <p>Jede Pokémon-Art hat neben ihren 1–2 normalen Fähigkeiten eine <strong>versteckte Fähigkeit</strong> — oft deutlich stärker. Beispiel: Blaziken mit <em>Speed Boost</em> (jede Runde +1 Initiative) statt Blaze.</p>
      <div class="info"><strong>In ATMons:</strong> Aktiv. Versteckte Fähigkeiten sind seltener beim Fang. Ob dein Pokémon die normale oder versteckte Fähigkeit hat, siehst du im Summary. Ability Patches/Capsules zum Wechseln gibt es in Cobblemon <strong>noch nicht</strong>.</div>

      <h4>♾️ Unbegrenzte TMs</h4>
      <p>In Gen 1–4 waren TMs <strong>Einweg-Items</strong> — einmal benutzt, weg. Seit Gen 5 sind TMs <strong>unbegrenzt wiederverwendbar</strong>. Du kannst eine TM beliebig oft auf verschiedene Pokémon anwenden.</p>
      <div class="info"><strong>In ATMons:</strong> TMs sind wiederverwendbar. Du findest sie in Loot-Truhen, bei Trainern und als Quest-Belohnungen. Wichtig: Nicht jedes Pokémon kann jede TM lernen — in Cobblemon ist die <em>Learnability pro Art festgelegt</em>.</div>

      <h3>⚙️ Generation 6 — X / Y</h3>
      <p>Zwei massive Neuerungen, die das Metagame komplett verändert haben.</p>

      <h4>🧚 Neuer Typ: Fee (Fairy)</h4>
      <p>Der <strong>18. und bisher letzte Typ</strong>. Eingeführt um Drache-Typen zu schwächen, die vorher fast unaufhaltsam waren. Fee ist:</p>
      <ul>
        <li><strong>Super effektiv gegen:</strong> Drache, Kampf, Unlicht</li>
        <li><strong>Resistent gegen:</strong> Kampf, Käfer, Unlicht</li>
        <li><strong>Immun gegen:</strong> Drache (!)</li>
        <li><strong>Schwach gegen:</strong> Gift, Stahl</li>
      </ul>
      <p>Viele alte Pokémon wurden <strong>nachträglich</strong> zu Fee umgetypt: Clefairy-Linie (war Normal), Jigglypuff-Linie (war Normal), Mr. Mime (war Psycho → Psycho/Fee), Gardevoir (Psycho → Psycho/Fee).</p>
      <div class="info"><strong>In ATMons:</strong> Voll aktiv. Fee ist einer der stärksten defensiven Typen. Nutze die <em>Typ-Tabelle</em> in der Quick-Link-Leiste — dort sind alle 18 Typen inkl. Fee abgebildet.</div>

      <h4>🔮 Mega-Entwicklung</h4>
      <p>Bestimmte Pokémon können sich <strong>im Kampf</strong> temporär "Mega-Entwickeln". Das verändert Aussehen, erhöht Statuswerte massiv und ändert manchmal Typ oder Fähigkeit. Voraussetzung: Das Pokémon hält seinen spezifischen <strong>Mega-Stein</strong> (z.B. Charizardite Y für Mega Charizard Y). Nur <strong>einmal pro Kampf</strong> möglich.</p>
      <p>Beispiele: Charizard → Mega Charizard X (wird Feuer/<strong>Drache</strong>!), Gardevoir → Mega Gardevoir (Pixilate-Fähigkeit), Kangaskhan → Mega Kangaskhan (Parental Bond = jeder Move trifft 2×).</p>
      <div class="warn"><strong>In ATMons: AKTIV und WICHTIG!</strong> Mega Evolution ist über die <strong>Mega Showdown</strong> Mod implementiert. Die RCT-Trainer nutzen Megas <em>aggressiv</em> — z.B. Mega Charizard Y mit Drought, Mega Kangaskhan mit Parental Bond, Mega Gardevoir mit Pixilate. Du brauchst den passenden Mega-Stein als Held Item. Mega-Steine findest du in Loot und als Belohnungen.</div>

      <h4>📡 Team-weiter Exp. Share</h4>
      <p>In Gen 1 bekam nur das aktiv kämpfende Pokémon Erfahrung. Seit Gen 6 teilt der <strong>Exp. Share</strong> Erfahrung mit dem <em>gesamten Team</em> — nicht mehr nur einem einzelnen Pokémon.</p>
      <div class="info"><strong>In ATMons:</strong> Exp Share ist aktiv, gibt aber nur <strong>×0.5</strong> der Erfahrung an Nicht-Kämpfer weiter. Das aktiv kämpfende Pokémon bekommt immer die vollen XP. Fazit: Aktiv kämpfen lohnt sich deutlich mehr als passiv mitleveln! Battle-XP ist generell <strong>×2.0</strong> (doppelt) und Fang-XP sogar <strong>×20</strong>.</div>

      <h3>⚙️ Generation 7 — Sonne / Mond</h3>

      <h4>💎 Z-Moves</h4>
      <p>Einmal pro Kampf kann ein Pokémon eine Super-Attacke auslösen, wenn es einen passenden <strong>Z-Kristall</strong> hält und der Trainer einen Z-Ring trägt. Z-Moves verwandeln einen normalen Move in eine übermächtige Version mit hohem Schaden oder starkem Effekt.</p>
      <div class="warn"><strong>In ATMons: NICHT vorhanden.</strong> Z-Moves sind ein gen-spezifisches Feature das in Cobblemon nicht implementiert ist. Kein Z-Ring, keine Z-Kristalle.</div>

      <h4>🌴 Regionale Formen (Alola-Formen)</h4>
      <p>Bekannte Gen-1-Pokémon haben in der Alola-Region <strong>komplett andere Typen und Designs</strong>: Vulpix/Ninetales = Eis statt Feuer, Sandshrew/Sandslash = Eis/Stahl, Raichu = Elektro/Psycho, Marowak = Feuer/Geist. Später kamen Galar-Formen (Gen 8), Hisui-Formen und Paldea-Formen (Gen 9) dazu.</p>
      <div class="info"><strong>In ATMons:</strong> Regionale Formen sind verfügbar! Du kannst z.B. Alola-Vulpix (Eis), Galar-Zigzagoon (Unlicht/Normal) oder Hisui-Growlithe (Feuer/Gestein) in der Wildnis finden. Jede regionale Form ist ein eigenständiges Pokémon mit eigenen Typen, Stats und Moves.</div>

      <h3>⚙️ Generation 8 — Schwert / Schild</h3>

      <h4>🦖 Dynamax &amp; Gigantamax</h4>
      <p>In den Hauptspielen wird ein Pokémon für <strong>3 Züge riesig</strong> — KP verdoppelt, Moves werden zu starken "Max-Attacken" mit Nebeneffekten (Wetter setzen, Stats boosten etc.). Gigantamax ist die Sonderform mit exklusiven G-Max-Moves. Kein Held Item nötig — Item-Slot bleibt frei.</p>
      <div class="warn"><strong>In ATMons: NICHT vorhanden.</strong> Dynamax/Gigantamax existiert in Cobblemon nicht. Raid Dens in ATMons funktionieren anders als in Schwert/Schild.</div>

      <h4>🍬 Nature Mints &amp; Hyper Training</h4>
      <p>In den Hauptspielen seit Gen 8: <strong>Mints</strong> überschreiben den Stat-Effekt eines Wesens (das Wesen selbst bleibt, aber die Werte ändern sich). <strong>Hyper Training</strong> mit Bottle Caps setzt IVs auf Maximum.</p>
      <div class="warn"><strong>In ATMons: NICHT vorhanden.</strong> Weder Mints noch Hyper Training/Bottle Caps sind in Cobblemon implementiert. Du musst das passende Wesen <em>beim Fangen</em> erwischen. Für IVs hilft nur Zucht.</div>

      <h3>⚙️ Generation 9 — Karmesin / Purpur</h3>

      <h4>💠 Terakristallisierung</h4>
      <p>In den Hauptspielen bekommt jedes Pokémon einen <strong>Tera-Typ</strong>. Beim Terakristallisieren wird dieser Typ aktiv — Pokémon ändert seine Typ-Schwächen/Resistenzen und bekommt STAB auf den Tera-Typ. Extrem flexibel: Ein Wasser-Pokémon mit Tera-Typ Pflanze kann plötzlich seine Elektro-Schwäche verlieren.</p>
      <div class="warn"><strong>In ATMons: NICHT vorhanden.</strong> Terakristallisierung ist nicht in Cobblemon implementiert. Kein Tera-Typ, kein Terakristallisieren.</div>

      <h3>📋 Weitere wichtige Änderungen über alle Generationen</h3>

      <h4>🔄 STAB (Same Type Attack Bonus)</h4>
      <p>Seit Gen 1 existiert, aber erst seit Gen 3+ wirklich relevant: Wenn ein Pokémon eine Attacke nutzt <strong>die seinem eigenen Typ entspricht</strong>, macht diese <strong>×1.5 Schaden</strong>. Beispiel: Ein Wasser-Pokémon das Surf nutzt → ×1.5 Bonus. Deshalb sollten Moves zum Typ des Pokémon passen.</p>
      <div class="info"><strong>In ATMons:</strong> Aktiv. STAB ist einer der wichtigsten Faktoren bei der Move-Auswahl. Ein Pokémon mit zwei Typen bekommt STAB auf <em>beide</em> Typen.</div>

      <h4>📊 Typ-Tabellen-Änderungen seit Gen 1</h4>
      <p>Die Typ-Tabelle hat sich seit Gen 1 mehrfach geändert:</p>
      <ul>
        <li><strong>Gen 2:</strong> Stahl und Unlicht hinzugefügt. Gift war in Gen 1 super effektiv gegen Käfer — jetzt ×1. Käfer war super effektiv gegen Gift — jetzt ×0.5.</li>
        <li><strong>Gen 2:</strong> Geist-Attacken treffen Psycho jetzt <strong>super effektiv</strong> (in Gen 1 war das wegen eines Programmierfehlers wirkungslos — obwohl es laut Spielanleitung super effektiv sein sollte!)</li>
        <li><strong>Gen 6:</strong> Fee-Typ hinzugefügt. Stahl verlor seine Resistenz gegen Geist und Unlicht (vorher ×0.5, jetzt ×1).</li>
        <li><strong>Gen 6:</strong> Elektro-Pokémon sind <strong>immun gegen Paralyse</strong>. Pflanzen-Pokémon sind <strong>immun gegen Puder/Sporen-Moves</strong> (Schlafpuder, Stachelspore etc.).</li>
      </ul>
      <div class="info"><strong>In ATMons:</strong> Die aktuelle Gen-9-Typ-Tabelle mit allen 18 Typen ist aktiv. Die <em>Typ-Tabelle</em> in der Quick-Link-Leiste zeigt die korrekten Matchups.</div>

      <h4>❄️ Schnee statt Hagel (Gen 9)</h4>
      <p>In Gen 9 wurde <strong>Hagel durch Schnee</strong> ersetzt. Statt nur Chip-Schaden an Nicht-Eis-Pokémon zu machen, erhöht Schnee jetzt die <strong>Verteidigung von Eis-Pokémon um 50%</strong> — ein deutlicher Buff für Eis-Teams.</p>
      <div class="info"><strong>In ATMons:</strong> Cobblemon nutzt das Gen-9-Wettersystem. Eis-Pokémon profitieren defensiv von Schnee deutlich mehr als vom alten Hagel.</div>

      <h4>🏃 Initiative (Speed) bestimmt die Reihenfolge</h4>
      <p>Das war in Gen 1 auch schon so, aber seitdem gibt es viel mehr Möglichkeiten die Initiative zu manipulieren: <em>Priority-Moves</em> (gehen immer zuerst, z.B. Quick Attack, Fake Out, Extreme Speed), <em>Trick Room</em> (dreht Speed-Reihenfolge um für 5 Runden), <em>Choice Scarf</em> (Held Item: +50% Speed aber nur ein Move), <em>Tailwind</em> (+100% Team-Speed für 4 Runden), <em>Paralysis</em> (halbiert Speed).</p>
      <div class="info"><strong>In ATMons:</strong> Alles aktiv. Speed-Control ist in RCT-Kämpfen <em>entscheidend</em>. Trick Room wird von Gegnern wie Sabrina genutzt. Choice Scarf ist eines der stärksten Items im Spiel.</div>

      <h4>🎯 Move-Relearning</h4>
      <p>In Gen 1 war ein vergessener Move für immer verloren. Seit mehreren Generationen gibt es den <strong>Move Relearner</strong> — in Cobblemon noch einfacher: Alle <em>Level-Up-Moves bis zum aktuellen Level</em> können direkt im <strong>Party-Menü</strong> jederzeit kostenlos neu gelernt werden.</p>
      <div class="info"><strong>In ATMons:</strong> Level-Up-Moves können jederzeit über das Party-Menü relearned werden — komplett kostenlos! TM-Moves können allerdings <strong>nicht</strong> relearned werden; dafür brauchst du das TM-Item erneut.</div>

      <h4>🔄 Entwicklungs-Methoden</h4>
      <p>In Gen 1 gab es nur Level-Up und Steine. Heute gibt es <em>viele</em> Methoden:</p>
      <ul>
        <li><strong>Level-Up</strong> — klassisch, bei bestimmtem Level</li>
        <li><strong>Steine</strong> — Feuerstein, Wasserstein, Blattstein, etc.</li>
        <li><strong>Tausch</strong> — in ATMons via <strong>Link Cable</strong> statt echtem Tausch</li>
        <li><strong>Tausch + Item</strong> — z.B. Onix + Metallmantel + Link Cable = Stahlos</li>
        <li><strong>Freundschaft</strong> — hohe Freundschaft + Level-Up (Pichu→Pikachu, Riolu→Lucario)</li>
        <li><strong>Tageszeit</strong> — manche entwickeln sich nur Tags oder Nachts</li>
        <li><strong>Bestimmter Move</strong> — z.B. Tangela mit Ancient Power gelernt</li>
        <li><strong>Bestimmte Location</strong> — z.B. Magneton in der Nähe eines speziellen Blocks</li>
        <li><strong>Geschlecht</strong> — z.B. Combee → Vespiquen nur wenn ♀</li>
      </ul>
      <div class="info"><strong>In ATMons:</strong> Alle Methoden aktiv. Besonders wichtig: <strong>Link Cable</strong> ersetzt den Tausch. Steine findest du in der Wildnis, in Loot-Truhen und bei bestimmten Pokémon als Drop.</div>

      <h3>🎮 Zusammenfassung: Was ist in ATMons aktiv?</h3>
      <table>
        <tr><th>Feature</th><th>Status</th><th>Seit Gen</th></tr>
        <tr><td>18 Typen (inkl. Unlicht, Stahl, Fee)</td><td><strong style="color:var(--green)">✓ Aktiv</strong></td><td>2 / 6</td></tr>
        <tr><td>Sp.Angriff / Sp.Verteidigung getrennt</td><td><strong style="color:var(--green)">✓ Aktiv</strong></td><td>2</td></tr>
        <tr><td>Held Items</td><td><strong style="color:var(--green)">✓ Aktiv</strong></td><td>2</td></tr>
        <tr><td>Zucht &amp; Eier</td><td><strong style="color:var(--green)">✓ Aktiv</strong></td><td>2</td></tr>
        <tr><td>Shinies (1:8192)</td><td><strong style="color:var(--green)">✓ Aktiv</strong></td><td>2</td></tr>
        <tr><td>Freundschaft &amp; Geschlechter</td><td><strong style="color:var(--green)">✓ Aktiv</strong></td><td>2</td></tr>
        <tr><td>Fähigkeiten (Abilities)</td><td><strong style="color:var(--green)">✓ Aktiv</strong></td><td>3</td></tr>
        <tr><td>Wesen (Natures, ±10%)</td><td><strong style="color:var(--green)">✓ Aktiv</strong></td><td>3</td></tr>
        <tr><td>EVs &amp; IVs</td><td><strong style="color:var(--green)">✓ Aktiv</strong></td><td>3</td></tr>
        <tr><td>Wetter &amp; Terrain</td><td><strong style="color:var(--green)">✓ Aktiv</strong></td><td>3 / 7</td></tr>
        <tr><td>Physisch/Speziell-Split pro Move</td><td><strong style="color:var(--green)">✓ Aktiv</strong></td><td>4</td></tr>
        <tr><td>Versteckte Fähigkeiten</td><td><strong style="color:var(--green)">✓ Aktiv</strong></td><td>5</td></tr>
        <tr><td>Unbegrenzte TMs</td><td><strong style="color:var(--green)">✓ Aktiv</strong></td><td>5</td></tr>
        <tr><td>Regionale Formen</td><td><strong style="color:var(--green)">✓ Aktiv</strong></td><td>7+</td></tr>
        <tr><td>Mega-Entwicklung</td><td><strong style="color:var(--green)">✓ Aktiv</strong> (Mega Showdown Mod)</td><td>6</td></tr>
        <tr><td>Z-Moves</td><td><strong style="color:var(--red)">✗ Nicht vorhanden</strong></td><td>7</td></tr>
        <tr><td>Dynamax / Gigantamax</td><td><strong style="color:var(--red)">✗ Nicht vorhanden</strong></td><td>8</td></tr>
        <tr><td>Nature Mints / Hyper Training</td><td><strong style="color:var(--red)">✗ Nicht vorhanden</strong></td><td>8</td></tr>
        <tr><td>Terakristallisierung</td><td><strong style="color:var(--red)">✗ Nicht vorhanden</strong></td><td>9</td></tr>
      </table>

      <div class="info"><strong>Fazit:</strong> Cobblemon/ATMons nutzt das <strong>Gen-9-Kampfsystem</strong> mit allen dauerhaften Verbesserungen. Die "Gimmick-Mechaniken" einzelner Generationen (Z-Moves, Dynamax, Tera) fehlen — nur <strong>Mega-Evolution</strong> ist über eine Addon-Mod aktiv. Für Gen-1-Veteranen heißt das: Gewöhne dich vor allem an <em>Held Items</em>, <em>Fähigkeiten</em>, <em>Wesen</em> und den <em>Physisch/Speziell-Split</em> — das sind die vier größten Umstellungen im Alltag.</div>
    `
  },
};
