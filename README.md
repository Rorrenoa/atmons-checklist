# ATMons – Perfekter Start Checkliste

Eine interaktive, deutschsprachige Einsteiger-Checkliste für das Minecraft-Modpack **[All the Mons (ATMons)](https://www.curseforge.com/minecraft/modpacks/all-the-mons)** – eine Kombination aus All the Mods 10 und Cobblemon.

Die Checkliste führt neue Spieler strukturiert vom ersten Spawn bis zum Endgame-Ziel **ATM Star**, berücksichtigt dabei die pack-spezifischen Mechaniken (eigenes Mining-Tier-System, Pokéball-Produktion via Create, RCT Level-Cap-System, u.v.m.) und unterscheidet sich dadurch bewusst von generischen ATM10-Guides.

## Features

- **22 Phasen / ~160 Items** — vom Spielstart bis ATM Star
- **Parallele Pfade**: Pokémon und Tech können gleichzeitig gespielt werden
- **Pfad-Filter**: Alles · Basis · Pokémon · Tech · Endgame
- **Live-Suche** über alle Items mit Treffer-Highlight
- **6 ausführliche Guide-Panels** für komplexe Themen:
  - Mining-Tier System (mit Ore-Distribution-Tabelle)
  - Pokéball-Produktion via Create Sequenced Assembly
  - Level-Cap & Trainer-System (Radical Cobblemon Trainers)
  - Mekanism Ore-Processing Pipeline
  - Die 3 Alloy-Routen (Powah / Ars Nouveau / Industrial Foregoing)
  - ATM Star Endgame-Checkliste
- **Fortschritt-Persistenz** via `localStorage` (kein Account, kein Server)
- **Mobile-first** — funktioniert auf dem Handy neben dem PC
- **Dark Theme** inspiriert von Minecraft/Pokémon-Atmosphäre

## Wichtige ATMons-Fakten

Einige der Mechaniken, die ATMons von Standard-ATM10 unterscheiden und oft zu Verwirrung führen:

- **Pokébälle** werden **nicht** aus Aprikokos + Kupfer gecraftet — alle Standard-Rezepte sind entfernt. Stattdessen läuft alles über **Create Sequenced Assembly** (Mod `createcobblemonballsoverhaul`).
- **Master Ball ist nicht craftbar** — nur aus Raid Dens, Battle Tower oder Quest-Belohnungen. Der ATM Star benötigt **2 Stück**.
- **Mining-Tiers sind anders**: Osmium braucht eine **Diamant-Pickaxe** — Mekanism ist damit Mid-Game, nicht Early-Game.
- **Trainer Card ist Pflicht** im Inventar, damit Trainer überhaupt spawnen (`spawningRequiresTrainerCard=true`).
- **Level-Cap startet bei 15** und wird exakt auf Key-Trainer-Level angehoben (`relativeLevelCap=0`).
- **Legendäre + Paradox Pokémon** (100+) spawnen **nicht** wild — nur über Raid Dens, Battle Tower und Quests.
- Viele **Vanilla-Tiere** (Kuh, Schwein, Huhn) werden durch Pokémon ersetzt (`replaceAnimalSpawn=true`).

Alle Angaben sind aus der lokalen Instanz verifiziert (Configs, KubeJS-Skripte, FTB-Questbook).

## Tech-Stack

- **Vanilla HTML/CSS/JS** — keine Frameworks, keine Build-Tools, keine npm-Dependencies
- **Alles in einer Datei** ([index.html](index.html))
- **Google Fonts**: Chakra Petch (Display) + IBM Plex Sans (Body)
- **GitHub Pages** als Hosting

## Lokal öffnen

```bash
# Klonen
git clone https://github.com/<username>/atmons-checklist.git
cd atmons-checklist

# index.html im Browser öffnen — fertig.
```

Es gibt keinen Build-Step. Doppelklick auf `index.html` reicht.

## Mitmachen / Feedback

Wenn dir Fehler auffallen, du zusätzliche Tipps hast oder Vorschläge für neue Phasen/Items machen möchtest:

- Öffne ein [Issue](../../issues) mit konkretem Bezug (welche Phase, welches Item)
- Oder reiche einen Pull Request ein — die Struktur in [index.html](index.html) ist einfach zu lesen (`PHASES` und `GUIDES` als JavaScript-Objekte)

Bitte **keine** generischen ATM10-Tipps übernehmen — ATMons weicht oft ab. Idealerweise alles durch einen Blick in die Mod-Configs oder in-game verifiziert.

## Offizielle Quellen

- **All the Mons (CurseForge)**: https://www.curseforge.com/minecraft/modpacks/all-the-mons
- **ATMons GitHub**: https://github.com/AllTheMods/All-the-Mons
- **ATMons Coremod**: https://www.curseforge.com/minecraft/mc-mods/all-the-mons-coremod
- **Cobblemon Wiki**: https://wiki.cobblemon.com/
- **Radical Cobblemon Trainers Docs**: https://srcmc.gitlab.io/rct/docs/0.13/
- **ATM10 Guides** (als Basis-Referenz — beachte: ATMons weicht ab!): https://allthemods.github.io/alltheguides/atm10/

## Disclaimer

Dieses Projekt ist ein **Community-Guide** und steht in keinerlei offizieller Verbindung zu *All the Mods*, *All the Mons*, *Cobblemon* oder *Mojang*. Alle Marken, Mods und Pokémon-bezogenen Inhalte gehören ihren jeweiligen Eigentümern.

## Lizenz

MIT — Siehe [LICENSE](LICENSE), falls vorhanden. Der Inhalt darf frei genutzt, angepasst und weitergegeben werden.
