# Playing Cards — Cartes de monstres en Angular

Petite application Angular de cartes à jouer : une collection de monstres affichés sous forme de
cartes, avec une recherche et une page dédiée à chaque monstre.

## Fonctionnalités

- Liste des monstres sous forme de cartes (`/home`).
- Barre de recherche pour filtrer les cartes.
- Page d'un monstre, identifiée par un paramètre de route (`/monster`).
- Page 404 pour les routes inconnues.

## Notions travaillées

- Composants standalone, entrées de composant avec `input()`, signaux et `computed()`.
- Service de données (`MonsterService`).
- Routage : route par défaut, paramètres de route, route joker.

## Stack technique

- Angular 21
- TypeScript

## Lancement

Prérequis : Node.js 20+ et Angular CLI 21.

```bash
git clone https://github.com/kylaodou/playingCardAngular.git
cd playingCardAngular
npm install
npm start
```

Ouvrez http://localhost:4200.

## Auteur

[@kylaodou](https://github.com/kylaodou)
