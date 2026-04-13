/* ============================================================
   CAMPAIGN — Kombinierter Walkthrough: Team + Strategie pro Cap
   Wird als Tab im Hauptbereich angezeigt (nur für Profil "Mike")
   ============================================================ */
const CAMPAIGN_HTML = `
<div class="campaign-content" id="campaign-top">

  <h2>Radical Red — Kompletter Walkthrough</h2>
  <p>Kombiniert: Team-Aufbau, Move-Slots und Kampf-Strategien für alle 24 Trainer der Radical Red Serie.<br>
  <em>Signature Item = Item im Trainer Spawner Block zum gezielten Beschwören.</em></p>

  <div class="campaign-toc">
    <h3>📑 Inhaltsverzeichnis</h3>
    <a href="#cap15">Cap 15 — Start-Team aufbauen</a>
    <a href="#t1" class="toc-indent">🏆 #1 Leader Brock</a>
    <a href="#cap21">Cap 21 — Moves relearnen</a>
    <a href="#t2" class="toc-indent">🏆 #2 Rocket Admin Archer</a>
    <a href="#t3" class="toc-indent">🏆 #3 Rival Terry 1</a>
    <a href="#cap27">Cap 27 — Ludicolo Team-Umbau</a>
    <a href="#t4" class="toc-indent">🏆 #4 Leader Misty</a>
    <a href="#brendan-umbau">Cap 27 — Breloom + Crabominable + Escavalier!</a>
    <a href="#t5" class="toc-indent">🏆 #5 Trainer Brendan 1</a>
    <a href="#cap34">Cap 34 — Keine Änderungen</a>
    <a href="#t6" class="toc-indent">🏆 #6 Leader Lt. Surge</a>
    <a href="#cap44">Cap 44 — Evolutions!</a>
    <a href="#t7" class="toc-indent">🏆 #7 Leader Erika</a>
    <a href="#t8" class="toc-indent">🏆 #8 Boss Giovanni 1</a>
    <a href="#late">Spätere Kämpfe (Lv 54–85)</a>
  </div>

  <div class="warn"><strong>Grundregeln:</strong>
    <br>• <strong>Move Relearning:</strong> Im Party-Menü kannst du <em>kostenlos</em> alle Level-Up-Moves relearnen — bei JEDEM neuen Cap als erstes Moves optimieren!
    <br>• <strong>Capture-XP ×20:</strong> Jedes gefangene Pokémon gibt 20× XP — fang alles was du siehst!
    <br>• <strong>Gegner wechselt?</strong> Freier Zug! Entweder angreifen (trifft das neue Mon beim Reinkommen) oder selbst auf passenden Counter wechseln.
  </div>

  <!-- ============ CAP 15 ============ -->
  <h3 id="cap15">Cap 15 — Start-Team aufbauen</h3>
  <table>
    <tr><th>#</th><th>Pokémon</th><th>Typ</th><th>Fangen/Evo</th><th>Wo (Biom)</th></tr>
    <tr><td>1</td><td><strong>Mudkip</strong></td><td>Water</td><td>Starter</td><td>—</td></tr>
    <tr><td>2</td><td><strong>Mareep → Flaaffy</strong></td><td>Electric</td><td>Lv 15</td><td>Plains/Highlands, COMMON</td></tr>
    <tr><td>3</td><td><strong>Growlithe → Arcanine</strong></td><td>Fire</td><td>Fire Stone</td><td>Overworld (nicht Wüste), UNCOMMON, tags</td></tr>
    <tr><td>4</td><td><strong>Starly → Staravia</strong></td><td>Normal/Flying</td><td>Lv 14</td><td>Hills/Taiga, COMMON</td></tr>
    <tr><td>5</td><td><strong>Seedot → Nuzleaf</strong></td><td>Grass/Dark</td><td>Lv 14</td><td>Forest, COMMON</td></tr>
    <tr><td>6</td><td><strong>Geodude</strong></td><td>Rock/Ground</td><td>—</td><td>Höhlen + Berge, COMMON</td></tr>
  </table>

  <h3 id="t1">🏆 #1 Leader Brock (Lv 12–14) ✅ <a href="#campaign-top" class="back-to-top">↑ Oben</a></h3>
  <p>Signature: <strong>Hard Stone</strong> · Biome: Cave/Mountain/Hill</p>
  <table>
    <tr><th>Gegner</th><th>Lv</th><th>Typ</th><th>Ability</th><th>Gefahr</th></tr>
    <tr><td>Geodude-Alolan</td><td>13</td><td>Rock/Electric</td><td>Sturdy</td><td>Self-Destruct! Custap Berry</td></tr>
    <tr><td>Vulpix</td><td>14</td><td>Fire</td><td>Flash Fire</td><td>Incinerate</td></tr>
    <tr><td>Onix</td><td>14</td><td>Rock/Ground</td><td>Sturdy</td><td>Berry Juice = überlebt 2 Hits</td></tr>
    <tr><td>Archen</td><td>12</td><td>Rock/Flying</td><td>Defeatist</td><td>Wird schwach unter 50%</td></tr>
  </table>
  <div class="info"><strong>Strategie:</strong> Geodude Lead → Bulldoze (×4 auf Alolan Geodude, immun vs Spark). Dann Mudkip Water Gun auf den Rest (×2/×4).</div>

  <!-- ============ CAP 21 ============ -->
  <h3 id="cap21">Cap 21 — Moves relearnen! <a href="#campaign-top" class="back-to-top">↑ Oben</a></h3>
  <div class="warn"><strong>Sofort Moves optimieren!</strong> Mudkip evolves bei Lv 16 → Marshtomp!</div>
  <table>
    <tr><th>Pokémon</th><th>Slot 1</th><th>Slot 2</th><th>Slot 3</th><th>Slot 4</th></tr>
    <tr><td><strong>Marshtomp</strong></td><td><strong>Earthquake</strong> (100)</td><td><strong>Surf</strong> (90)</td><td>Mud Shot (55)</td><td>Protect</td></tr>
    <tr><td><strong>Arcanine</strong></td><td><strong>Flare Blitz</strong> (120)</td><td><strong>Extreme Speed</strong> (80)</td><td><strong>Crunch</strong> (80)</td><td><strong>Play Rough</strong> (90)</td></tr>
    <tr><td><strong>Nuzleaf</strong></td><td>Fake Out (40, Prio)</td><td>Mega Drain (40)</td><td>Air Cutter (60)</td><td>Growth</td></tr>
    <tr><td><strong>Staravia</strong></td><td>Wing Attack (60)</td><td>Quick Attack (40)</td><td>Endeavor</td><td>Double Team</td></tr>
    <tr><td><strong>Flaaffy</strong></td><td>Thunder Shock (40)</td><td>Charge</td><td>Cotton Spore</td><td>Thunder Wave</td></tr>
    <tr><td><strong>Geodude</strong></td><td>Bulldoze (60)</td><td>Smack Down (50)</td><td>Magnitude</td><td>Rock Throw (50)</td></tr>
  </table>

  <h3 id="t2">🏆 #2 Rocket Admin Archer (Lv 18–21) ✅ <a href="#campaign-top" class="back-to-top">↑ Oben</a></h3>
  <p>Signature: <strong>Black Tumblestone</strong> · Biome: Underground/Badlands/Savanna</p>
  <table>
    <tr><th>Gegner</th><th>Lv</th><th>Typ</th><th>Ability</th><th>Gefahr</th></tr>
    <tr><td>Impidimp</td><td>18</td><td>Dark/Fairy</td><td>Prankster</td><td>Thunder Wave (Priorität!), Fake Out</td></tr>
    <tr><td>Houndour</td><td>19</td><td>Dark/Fire</td><td>Early Bird</td><td>Thunder Fang, Wise Glasses</td></tr>
    <tr><td>Mightyena</td><td>21</td><td>Dark</td><td>Strong Jaw</td><td>Ice Fang ×1.5! Poison Fang</td></tr>
  </table>
  <div class="info"><strong>Kampfplan:</strong>
    <br>• Impidimp → <strong>Arcanine Slot 4</strong> Play Rough (Fairy ×2 auf Dark!)
    <br>• Houndour → <strong>Marshtomp Slot 1</strong> Earthquake (Ground ×2, immun vs Thunder Fang!)
    <br>• Mightyena → <strong>Arcanine Slot 4</strong> Play Rough → <strong>Slot 2</strong> Extreme Speed Finisher. NICHT Marshtomp (Ice Fang!)
  </div>

  <h3 id="t3">🏆 #3 Rival Terry 1 (Lv 18–21) <a href="#campaign-top" class="back-to-top">↑ Oben</a></h3>
  <p>Signature: <strong>Gold Nugget</strong> · Biome: Plains</p>
  <p>3 Varianten (starter-abhängig): Kirlia + Staravia + Rockruff + <strong>Wartortle/Ivysaur/Charmeleon</strong> Lv21</p>
  <div class="info"><strong>Strategie:</strong> Arcanine Crunch vs Kirlia (Dark ×2). Marshtomp Earthquake vs Rockruff (Ground ×2). Starter-Counter: Wartortle → Flaaffy, Ivysaur → Arcanine, Charmeleon → Marshtomp.</div>

  <!-- ============ CAP 27 ============ -->
  <h3 id="cap27">Cap 27 — TEAM-UMBAU: Ludicolo! <a href="#campaign-top" class="back-to-top">↑ Oben</a></h3>
  <div class="warn"><strong>Geodude/Graveler RAUS → Ludicolo REIN!</strong>
    <br>1) <strong>Lotad fangen</strong> (Swamp-Biom, COMMON, am Wasser)
    <br>2) Lotad → Lombre (Lv 14) → <strong>Ludicolo</strong> (Water Stone!)
    <br>3) Moves relearnen: alle Lv-1, kostenlos!
    <br>4) Nuzleaf Slot 3: → <strong>Feint Attack</strong> (Lv 24)
    <br>5) Flaaffy Slot 1: → <strong>Electro Ball</strong> (Lv 25)
  </div>
  <table>
    <tr><th>Pokémon</th><th>Slot 1</th><th>Slot 2</th><th>Slot 3</th><th>Slot 4</th></tr>
    <tr><td><strong>Marshtomp</strong></td><td>Earthquake (100)</td><td>Surf (90)</td><td>Mud Shot (55)</td><td>Protect</td></tr>
    <tr><td><strong>Arcanine</strong></td><td>Flare Blitz (120)</td><td>Extreme Speed (80)</td><td>Crunch (80)</td><td>Play Rough (90)</td></tr>
    <tr><td><strong>Nuzleaf</strong></td><td>Fake Out (40)</td><td>Mega Drain (40)</td><td>⬆ <strong>Feint Attack</strong> (60)</td><td>Growth</td></tr>
    <tr><td><strong>Staravia</strong></td><td>Wing Attack (60)</td><td>Quick Attack (40)</td><td>Endeavor</td><td>Double Team</td></tr>
    <tr><td><strong>Flaaffy</strong></td><td>⬆ <strong>Electro Ball</strong></td><td>Charge</td><td>Cotton Spore</td><td>Thunder Wave</td></tr>
    <tr><td>⬆ <strong>Ludicolo (NEU)</strong></td><td><strong>Energy Ball (80)</strong></td><td><strong>Giga Drain (75)</strong></td><td><strong>Fake Out (40)</strong></td><td><strong>Knock Off (65)</strong></td></tr>
  </table>

  <h3 id="t4">🏆 #4 Leader Misty (Lv 25–27) <a href="#campaign-top" class="back-to-top">↑ Oben</a></h3>
  <p>Signature: <strong>Mystic Water</strong> · Biome: Wet/Water/River/Beach</p>
  <table>
    <tr><th>Gegner</th><th>Lv</th><th>Typ</th><th>Ability</th><th>Gefahr</th></tr>
    <tr><td>Frogadier</td><td>25</td><td>Water</td><td>Protean (!)</td><td>Ändert Typ! Ice Punch, Grass Knot, Flip Turn, Eviolite</td></tr>
    <tr><td>Floatzel</td><td>25</td><td>Water</td><td>Technician</td><td>Water Pulse, Flip Turn, Icy Wind</td></tr>
    <tr><td>Starmie</td><td>27</td><td>Water/Psychic</td><td>Analytic (+30%!)</td><td>Scald, Psyshock, <strong>Recover!</strong> Sitrus Berry</td></tr>
    <tr><td>Lanturn</td><td>25</td><td>Water/Electric</td><td>Volt Absorb</td><td>Scald, <strong>Hidden Power Grass (×4 auf Marshtomp!)</strong></td></tr>
  </table>
  <div class="warn"><strong>ACHTUNG:</strong> Staravia, Nuzleaf, Arcanine und Marshtomp werden alle von Mistys Coverage zerstört! <strong>Ludicolo ist der einzige der überlebt</strong> (Water ×0.25, alles andere neutral).</div>
  <div class="info"><strong>Kampfplan — Ludicolo Solo-Sweep:</strong>
    <br>• Frogadier → <strong>Ludicolo Slot 3</strong> Fake Out (Flinch!) → <strong>Slot 4</strong> Knock Off (entfernt Eviolite!) → <strong>Slot 1</strong> Energy Ball (×2 = KO!)
    <br>• Floatzel → <strong>Ludicolo Slot 1</strong> Energy Ball (×2). Water Pulse macht nur ×0.25 auf dich!
    <br>• Starmie → <strong>Ludicolo Slot 4</strong> Knock Off (entfernt Sitrus, Dark ×2) → <strong>Slot 2</strong> Giga Drain (×2 + heilt!)
    <br>• Lanturn → <strong>Ludicolo Slot 1</strong> Energy Ball (Grass ×2). Volt Absorb egal — wir nutzen Grass!
    <br>⚠️ Ludicolo bleibt IMMER drin! HP niedrig? Slot 2 Giga Drain heilt zurück.
  </div>

  <h3 id="brendan-umbau">TEAM-UMBAU: Breloom + Crabominable + Escavalier! <a href="#campaign-top" class="back-to-top">↑ Oben</a></h3>
  <div class="warn"><strong>Nuzleaf + Staravia + Flaaffy RAUS → Breloom + Crabominable + Escavalier REIN!</strong>
    <br>Brendans Crawdaunt (Adaptability + Focus Sash) sweept das bisherige Team. <strong>0% Siegrate ohne Umbau!</strong>
    <br>
    <br>1) <strong>Shroomish fangen</strong> (Forest, COMMON, Lv 5–30) → Breloom bei Lv 23 (lernt Mach Punch!)
    <br>2) <strong>Crabrawler fangen</strong> (Stony Shore / Beach, COMMON, Lv 9–34) → <strong>Crabominable</strong> mit Ice Stone!
    <br>3) <strong>Karrablast fangen</strong> (Swamp, COMMON, Lv 7–32) → <strong>Escavalier</strong> mit Shell Helmet Item!
  </div>
  <table>
    <tr><th>Pokémon</th><th>Slot 1</th><th>Slot 2</th><th>Slot 3</th><th>Slot 4</th></tr>
    <tr><td><strong>Marshtomp</strong></td><td>Earthquake (100)</td><td>Surf (90)</td><td>Mud Shot (55)</td><td>Protect</td></tr>
    <tr><td><strong>Arcanine</strong></td><td>Flare Blitz (120)</td><td>Extreme Speed (80)</td><td>Crunch (80)</td><td>Play Rough (90)</td></tr>
    <tr><td>⬆ <strong>Breloom (NEU)</strong></td><td><strong>Mach Punch (40, +1 Prio)</strong></td><td><strong>Sky Uppercut (85)</strong></td><td><strong>Spore (100% Sleep!)</strong></td><td><strong>Force Palm (60)</strong></td></tr>
    <tr><td>⬆ <strong>Crabominable (NEU)</strong></td><td><strong>Ice Punch (75)</strong></td><td><strong>Brick Break (75)</strong></td><td><strong>Crabhammer (100!)</strong></td><td><strong>Avalanche (60)</strong></td></tr>
    <tr><td>⬆ <strong>Escavalier (NEU)</strong></td><td><strong>Double-Edge (120)</strong></td><td><strong>Slash (70)</strong></td><td><strong>Fell Stinger (50)</strong></td><td><strong>Headbutt (70)</strong></td></tr>
    <tr><td><strong>Ludicolo</strong></td><td>Energy Ball (80)</td><td>Giga Drain (75)</td><td>Fake Out (40)</td><td>Knock Off (65)</td></tr>
  </table>
  <p><em>Alle Moves sind Level-Up Moves (kostenlos relernbar!). Keine TMs nötig.</em></p>

  <h3 id="t5">🏆 #5 Trainer Brendan 1 (Lv 28–29) <a href="#campaign-top" class="back-to-top">↑ Oben</a></h3>
  <p>Signature: <strong>Silk Scarf</strong> · Biome: Plains/Underground · Bag: 1× Super Potion</p>
  <table>
    <tr><th>Gegner</th><th>Lv</th><th>Typ</th><th>Gefahr</th></tr>
    <tr><td>Loudred</td><td>28</td><td>Normal</td><td>Punk Rock! Hyper Voice, Brick Break, Ice Beam, Shadow Ball. Chople Berry</td></tr>
    <tr><td>Lunatone</td><td>28</td><td>Rock/Psychic</td><td>Levitate! Psyshock, Power Gem, Hypnosis(!), Calm Mind. Colbur Berry</td></tr>
    <tr><td>Crawdaunt</td><td>29</td><td>Water/Dark</td><td><strong>Adaptability!</strong> Aqua Jet (+1 Prio), Waterfall, Knock Off, X-Scissor. <strong>Focus Sash!</strong></td></tr>
    <tr><td>Grovyle</td><td>29</td><td>Grass</td><td>Leaf Blade (High Crit!), Power-Up Punch, Aerial Ace, Rock Tomb. Sitrus Berry</td></tr>
  </table>
  <div class="info"><strong>Kampfplan (96% Siegrate, Simulator-verifiziert):</strong>
    <br>• Loudred → <strong>Crabominable Slot 2</strong> Brick Break (Fighting ×2 auf Normal = OHKO mit 123%!)
    <br>• Lunatone → Crabominable stirbt (Psyshock ×2) → <strong>Ludicolo</strong> rein, Slot 1 Energy Ball (Grass ×2 auf Rock). 2 Hits = KO
    <br>• Crawdaunt → <strong>DER Schlüsselkampf!</strong> → <strong>Breloom</strong> rein!
    <br>&nbsp;&nbsp;Slot 3 <strong>Spore</strong> (100% Sleep!) → Slot 2 <strong>Sky Uppercut</strong> (Fighting ×2 auf Dark, 95-114%!) → Focus Sash rettet auf 1 HP → Slot 1 <strong>Mach Punch</strong> (+1 Prio, vor Aqua Jet!) = KO!
    <br>• Grovyle → <strong>Arcanine</strong> rein, Intimidate, Slot 1 <strong>Flare Blitz</strong> (Fire ×2 auf Grass = OHKO!)
    <br>⚠️ Breloom NUR gegen Crawdaunt einsetzen! Backup: Escavalier + Marshtomp
  </div>

  <!-- ============ CAP 34 ============ -->
  <h3 id="cap34">Cap 34 — Move-Upgrades <a href="#campaign-top" class="back-to-top">↑ Oben</a></h3>
  <div class="warn"><strong>Keine Slot-Änderungen nötig.</strong> Breloom, Crabominable, Escavalier und Ludicolo sind bereits optimal. Alle Moves bleiben.
  </div>

  <h3 id="t6">🏆 #6 Leader Lt. Surge (Lv 32–34) <a href="#campaign-top" class="back-to-top">↑ Oben</a></h3>
  <p>Signature: <strong>Magnet</strong> · Biome: Plains</p>
  <table>
    <tr><th>Gegner</th><th>Lv</th><th>Typ</th><th>Gefahr</th></tr>
    <tr><td>Pincurchin</td><td>32</td><td>Electric</td><td>Electric Surge! <strong>Scald (Water!)</strong></td></tr>
    <tr><td>Raichu-Alolan</td><td>33</td><td>Electric/Psychic</td><td>Surge Surfer = ×2 Speed im Terrain!</td></tr>
    <tr><td>Vikavolt</td><td>33</td><td>Bug/Electric</td><td><strong>Levitate (immun vs Ground!)</strong> Energy Ball!</td></tr>
    <tr><td>Manectric</td><td>34</td><td>Electric</td><td>Intimidate, <strong>kann Mega!</strong> Manectite</td></tr>
    <tr><td>Boltund</td><td>33</td><td>Electric</td><td>Strong Jaw Fangs (Fire/Ice/Psychic)</td></tr>
  </table>
  <div class="info"><strong>Kampfplan:</strong>
    <br>• Alles außer Vikavolt → <strong>Marshtomp Slot 1</strong> Earthquake (Ground immun vs Electric, ×2!) Volt Switch macht 0!
    <br>• <strong>Vikavolt</strong> (Levitate!) → <strong>Sofort Arcanine!</strong> Slot 1 Flare Blitz (Fire ×2 auf Bug). NICHT Marshtomp (Energy Ball ×4!)
    <br>• Pincurchin hat Scald → falls Marshtomp HP niedrig: <strong>Ludicolo</strong> (Water ×0.25 + Energy Ball ×2)
  </div>

  <!-- ============ CAP 44 ============ -->
  <h3 id="cap44">Cap 44 — Evolutions! <a href="#campaign-top" class="back-to-top">↑ Oben</a></h3>
  <div class="warn"><strong>Große Upgrades:</strong>
    <br>• <strong>Marshtomp → Swampert</strong> (Lv 36)! Höhere Stats, Mega-fähig
    <br>• Breloom, Crabominable, Escavalier: Moves bleiben — bereits optimal
  </div>

  <h3 id="t7">🏆 #7 Leader Erika (Lv 43–44) <a href="#campaign-top" class="back-to-top">↑ Oben</a></h3>
  <p>Signature: <strong>Miracle Seed</strong> · Biome: Dense Vegetation/Lush</p>
  <table>
    <tr><th>Gegner</th><th>Lv</th><th>Typ</th><th>Gefahr</th></tr>
    <tr><td>Rillaboom</td><td>43</td><td>Grass</td><td>Grassy Surge + <strong>Grassy Glide (Priorität!)</strong></td></tr>
    <tr><td>Serperior</td><td>43</td><td>Grass</td><td><strong>Contrary!</strong> Leaf Storm ERHÖHT Sp.Atk!</td></tr>
    <tr><td>Venusaur</td><td>44</td><td>Grass/Poison</td><td><strong>Mega möglich!</strong> Sleep Powder!</td></tr>
    <tr><td>Meganium</td><td>44</td><td>Grass</td><td>Triage (Heal-Moves = Priorität)</td></tr>
    <tr><td>Electrode-Hisui</td><td>44</td><td>Electric/Grass</td><td><strong>Explosion!</strong></td></tr>
  </table>
  <div class="warn"><strong>Kampfplan:</strong>
    <br>• Serperior → <strong>Arcanine Slot 1</strong> Flare Blitz (Fire ×2) — <strong>SOFORT KOen!</strong> Contrary + Leaf Storm macht es sonst unkontrollierbar!
    <br>• Venusaur → <strong>Arcanine Slot 2</strong> Extreme Speed (+2 Prio, schlägt VOR Sleep Powder!) dann Slot 1 Flare Blitz. Oder <strong>Breloom Slot 3</strong> Spore (100% Sleep) zuerst!
    <br>• Rillaboom/Meganium → <strong>Crabominable Slot 2</strong> Ice Hammer (Ice ×2 auf Grass) oder <strong>Arcanine Slot 1</strong> Flare Blitz
    <br>• Electrode-Hisui → <strong>Swampert Slot 4</strong> Protect (blockt Explosion!) → dann Slot 1 Earthquake
    <br>⚠️ Ludicolo NICHT gegen Erika (Venusaur Sludge Bomb = Poison ×2 auf Grass!)
  </div>

  <h3 id="t8">🏆 #8 Boss Giovanni 1 (Lv 45–46) <a href="#campaign-top" class="back-to-top">↑ Oben</a></h3>
  <p>Signature: <strong>Upgrade</strong> · Biome: Badlands/Savanna</p>
  <table>
    <tr><th>Gegner</th><th>Lv</th><th>Typ</th><th>Gefahr</th></tr>
    <tr><td>Nidoking</td><td>45</td><td>Poison/Ground</td><td>Sheer Force + Life Orb! Ice Beam, Sludge Bomb</td></tr>
    <tr><td>Honchkrow</td><td>45</td><td>Dark/Flying</td><td>Super Luck, Sucker Punch (Priority Dark!)</td></tr>
    <tr><td>Infernape</td><td>45</td><td>Fire/Fighting</td><td>Pyro Ball, Close Combat</td></tr>
    <tr><td>Kangaskhan</td><td>46</td><td>Normal</td><td><strong>Mega möglich!</strong> Fake Out + Power-Up Punch</td></tr>
    <tr><td>Rotom-Frost</td><td>45</td><td>Electric/Ice</td><td>Will-O-Wisp, Freeze-Dry</td></tr>
  </table>
  <div class="info"><strong>Strategie:</strong> Gemischtes Team nötig.
    <br>• Nidoking → <strong>Swampert Slot 1</strong> Earthquake (Ground ×2, immun vs Electric). NICHT Ludicolo (Sludge Bomb ×2)!
    <br>• Honchkrow → <strong>Ampharos</strong> Discharge (Electric ×2 auf Flying) oder Arcanine Play Rough (Fairy ×2 auf Dark)
    <br>• Infernape → <strong>Swampert Slot 2</strong> Surf (Water ×2 auf Fire)
    <br>• Kangaskhan → <strong>Swampert Slot 1</strong> Earthquake oder Escavalier/Breloom Close Combat (Fighting ×2 auf Normal)
    <br>• Rotom-Frost → <strong>Arcanine Slot 1</strong> Flare Blitz (Fire ×2 auf Ice)
  </div>

  <!-- ============ SPÄTERE KÄMPFE (KOMPAKT) ============ -->
  <h3 id="late">Spätere Kämpfe (Lv 54–85) <a href="#campaign-top" class="back-to-top">↑ Oben</a></h3>
  <p>Ab hier wird die Serie <strong>extrem schwer</strong>. Die Gegner haben Legendäre, Mega-Evolutionen und perfekte IVs/EVs. Du brauchst ein komplett neues Late-Game-Team.</p>

  <table>
    <tr><th>#</th><th>Trainer</th><th>Lv</th><th>Signature</th><th>Highlights</th></tr>
    <tr><td>9</td><td><strong>Rival Terry 2</strong></td><td>54–55</td><td>Soothe Bell</td><td>Staraptor, Electivire, Darmanitan + Mega-Starter</td></tr>
    <tr><td>10</td><td><strong>Archer+Ariana</strong> <em>DOUBLES!</em></td><td>54–55</td><td>Black Sludge</td><td>Incineroar, Aegislash, Mega Mawile. <em>Nether-Biom!</em></td></tr>
    <tr><td>11</td><td><strong>Giovanni 2</strong></td><td>54–56</td><td>Dubious Disc</td><td>Sand Rush Excadrill, Mega Kangaskhan, Garchomp</td></tr>
    <tr><td>12</td><td><strong>Sabrina</strong></td><td>57–59</td><td>Twisted Spoon</td><td>Psychic Terrain, Mega Gardevoir, Trick Room</td></tr>
    <tr><td>13</td><td><strong>Brendan 2</strong></td><td>61–63</td><td>Expert Belt</td><td>Metagross, Huge Power Medicham, Adaptability Crawdaunt</td></tr>
    <tr><td>14</td><td><strong>Koga</strong></td><td>67–68</td><td>Poison Barb</td><td>Battle Bond Greninja, Dragapult, Toxtricity</td></tr>
    <tr><td>15</td><td><strong>Trainer May</strong></td><td>71–72</td><td>Vivichoke</td><td>Spore Breloom, Relicanth, Mega Sceptile</td></tr>
    <tr><td>16</td><td><strong>Blaine</strong></td><td>75–76</td><td>Charcoal Stick</td><td>Drought + Mega Charizard Y, Chlorophyll Sunflora</td></tr>
    <tr><td>17</td><td><strong>Archer 2</strong></td><td>77–79</td><td>Covert Cloak</td><td>Mamoswine, Durant, Mega Houndoom</td></tr>
    <tr><td>18</td><td><strong>Ariana 2</strong></td><td>77–79</td><td>Utility Umbrella</td><td>Magic Bounce Hatterene, Mega Mawile</td></tr>
    <tr><td>19</td><td><strong>Giovanni 3</strong> <em>DOUBLES!</em></td><td>80</td><td>Destiny Knot</td><td><strong>Mega Mewtwo Y, Tyranitar, Celesteela!</strong></td></tr>
    <tr><td>20</td><td><strong>Leader Clair</strong></td><td>80–81</td><td>Dragon Scale</td><td>Dracovish, Multiscale Dragonite, Magearna, Naganadel</td></tr>
    <tr><td>21</td><td><strong>Rival Terry 3</strong></td><td>80–81</td><td>Lucky Egg</td><td>Kartana, Mega-Starter, Hatterene</td></tr>
    <tr><td>22</td><td><strong>Brendan 3</strong></td><td>81–82</td><td>Choice Scarf</td><td><strong>Deoxys-Attack, Jirachi, Landorus, Zapdos-Galar!</strong></td></tr>
    <tr><td>23</td><td><strong>E4</strong> (beliebig)</td><td>84–85</td><td>Varies</td><td>Primal Kyogre, Zacian, Marshadow, Dialga</td></tr>
    <tr><td>24</td><td><strong>Champion Terry</strong></td><td>85</td><td>Life Orb</td><td><strong>Primal Groudon, Yveltal, Eternatus, Mega Metagross, Ditto</strong></td></tr>
  </table>

  <h3>Empfohlenes Late-Game Team (Cap 68+)</h3>
  <table>
    <tr><th>Slot</th><th>Empfehlung</th><th>Typ</th><th>Warum</th></tr>
    <tr><td>1</td><td><strong>Mega Swampert</strong></td><td>Water/Ground</td><td>Swift Swim + Mega = Allrounder</td></tr>
    <tr><td>2</td><td><strong>Arcanine</strong></td><td>Fire</td><td>Intimidate, Ground Mount, Play Rough Coverage</td></tr>
    <tr><td>3</td><td><strong>Staraptor</strong></td><td>Normal/Flying</td><td>Intimidate, Brave Bird, Fly Mount, Close Combat</td></tr>
    <tr><td>4</td><td><strong>Gardevoir/Togekiss</strong></td><td>Fairy</td><td>Fairy ×2 auf Dark/Dragon + Psychic</td></tr>
    <tr><td>5</td><td><strong>Weavile/Shiftry</strong></td><td>Dark</td><td>Dark Coverage für Psychic/Ghost</td></tr>
    <tr><td>6</td><td><strong>Legendäres</strong></td><td>variabel</td><td>Aus Raid Dens / Battle Tower</td></tr>
  </table>

  <div class="warn"><strong>Ab Koga (#14) brauchst du Legendäre und Mega-Pokémon.</strong> Die Radical Red Serie ist Schwierigkeitsgrad 9/10. Champion Terrys Team hat Primal Groudon, Yveltal, Eternatus und einen Imposter Ditto der dein bestes Mon kopiert!</div>

</div>
`;
