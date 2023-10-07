# TTMC pour les devs

Sorry but this is in french 🥖 😅

Ce jeu de société inspiré de TTMC, "tu te mets combien" a pour but d'aider à developper sa culture dev tout en s'amusant.

## Pourquoi ?

Lorsqu'on devient developpeur il y a énormément de vocabulaire, nouvelles notions et concepts à assimiler ce qui peut vite devenir compliquer à gérer. En plus, ce n'est pas toujours amusant d'emmagasiner toute cette théorie.

Malhereusement, c'est le genre de choses qu'on va souvent retrouver en entretien tech 😬 C'est pourquoi j'ai voulu créer ce jeu. Pour pouvoir découvrir les choses petit à petit et améliorer sa culture tech sans trop se prendre la tête 🥴

## Comment contribuer ?

L'idée c'est d'avoir un maximum de cartes pour permettre d'améliorer la rejouabilité. Aussi, j'essaye, autant que possible de baser les questions sur des choses qui reviennent souvent en entretien.

Il existe 4 catégories de questions :

-   **Dev front** : tout ce qui concerne le dev web front, autrement-dit le HTML/CSS/JS, mais aussi les frameworks comme React, ou même des notions de UI/UX, accessibilité, etc.
-   **Dev back** : le developpement de backend, d'apis, les bases de données, le dev ops, etc.
-   **Algo et paradigmes** : les algorithmes et notion d'optimisation, ainsi que les paradigmes de programmation, bonnes pratiques, design patterns, etc.
-   **Dev tools** tout ce qui n'est pas directement du code mais concerne le dev (les editeurs de code et autres outils, services en ligne, etc.)

### Tu as des idées mais tu n'as pas forcément la réponse ou tu ne sais pas comment les formuler ?

J'ajoute les dans une issue sur le répo !

### Tu as une idée précise de carte ? Encore mieux !

Tu peux forker le repo, rajouter ta carte dans `src/cards.json`, puis soumettre une pull request ✨

Chaque carte doit contenir :

-   un theme `theme`, de maximum 60 caractères
-   une categorie `category` parmis `"dev-front"`, `"dev-back"`, `"dev-tools"` et `"algo-paradigms"`
-   un tableau de questions `questions`, chaque question doit faire maximum 120 caractères
-   un tableau de réponses `answers`, chaque question doit faire maximum 120 caractères

Attention, les questions doivent être de plus en plus dures !

Enfin, essaye d'éviter les fautes d'orthographes, merci (et si tu en remarques dans les cartes existantes n'hésite pas à contribuer 😇).

## Tester le projet

1. Lance ses commandes dans ton terminal :

```
git clone git@github.com/jeremt/ttmc-for-dev.git
cd ttmc-for-dev
pnpm install
pnpm run dev
```

2. Ouvre [cette url](http://localhost:5173/).

## Fonctionnalités

-   [x] Générer les cartes par thème en fonction du Json
-   [x] Implémenter le style pour chacune des cartes
-   [ ] Écris au moins 1 planche (9 cartes par thème)
-   [ ] Écrire une planche de `startGame();` et une planche de `return winner;`
-   [ ] Générer la disposition d'une planche à imprimer et gérer correctement le media print
-   [x] Écrire les règles du jeu
-   [x] Générer ou designer le plateau de jeu
-   [x] Écrire une planche par cartes spéciales (bugs et pause café)
-   [ ] Générer les cartes spéciale à partir d'un Json
-   [ ] Trouver un autre nom
-   [x] Faire un logo
-   [ ] Faire une landing page
-   [ ] Faire une version en ligne

_(Vous pouvez contribuer sur les fonctionnalités aussi si vous voulez 🙃)_
