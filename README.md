# TTMC pour les devs

Sorry but this is in french 🥖 😅

Ce jeu de société inspiré de TTMC, "tu te mets combien" a pour but d'aider à développer sa culture dev tout en s'amusant.

## Tester le projet en local

1. Lance ces commandes dans ton terminal :

```sh
pnpm install # ou npm
pnpm run dev # ou npm
```

2. Ouvre [cette url](http://localhost:5173/).

_Le projet utilise vite pour se lancer mais il est écrit en Vanilla JavaScript à l'exception de rehype pour gérer le markdown dans le JSON des cartes._

## Pourquoi ?

Lorsqu'on devient développeur il y a énormément de vocabulaire, nouvelles notions et concepts à assimiler ce qui peut vite devenir compliquer à gérer. En plus, ce n'est pas toujours amusant d'emmagasiner toute cette théorie.

Malhereusement, c'est le genre de choses qu'on va souvent retrouver en entretien tech 😬 C'est pourquoi j'ai voulu créer ce jeu. Pour pouvoir découvrir les choses petit à petit et améliorer sa culture tech sans trop se prendre la tête 🥴

## Comment contribuer ?

L'idée c'est d'avoir un maximum de cartes pour permettre d'améliorer la rejouabilité. Aussi, j'essaye, autant que possible de baser les questions sur des choses qui reviennent souvent en entretien.

Il existe 4 catégories de questions :

-   **Dev front** : tout ce qui concerne le dev web front, autrement-dit le HTML/CSS/JS, mais aussi les frameworks comme React, ou même des notions de UI/UX, accessibilité, etc.
-   **Dev back** : le developpement de backend, d'apis, les bases de données, le dev ops, etc.
-   **Algo et paradigmes** : les algorithmes et notion d'optimisation, ainsi que les paradigmes de programmation, bonnes pratiques, design patterns, etc.
-   **Dev tools** tout ce qui n'est pas directement du code mais concerne le dev (les editeurs de code et autres outils, services en ligne, etc.)

### Tu as des idées mais tu n'as pas forcément la réponse ou tu ne sais pas comment les formuler ?

Ajoute les dans une issue sur le répo !

### Tu as répéré une erreur / amélioration potentielle dans une carte existante ?

Si jamais tu remarques une faute d'orthographe, un contenu pas clair ou imprécis, c'est une bonne raison de proposer une modification !

Tu peux forker le repo et modifier `src/cards.json` pour y ajouter tes changements, puis soumettre une pull request ✨

### Tu as une idée précise de carte ? Encore mieux !

Tu peux forker le repo, rajouter ta carte dans `src/cards.json`, puis soumettre une pull request ✨

Chaque carte doit contenir :

-   un thème `theme`, de maximum 60 caractères
-   une catégorie `category` parmi `"dev-front"`, `"dev-back"`, `"dev-tools"` et `"algo-paradigms"`
-   un tableau de questions `questions`, chaque question doit faire maximum 120 caractères
-   un tableau de réponses `answers`, chaque réponse doit faire maximum 120 caractères

Attention, les questions doivent être de plus en plus dures !

Par exemple le json :

```json
{
    "theme": "Déclaration de Variables JS",
    "category": "dev-front",
    "questions": [
        "Quel mot clé entre `let`, `var`, et `if` ne permet pas de déclarer une variable ?",
        "Quel est le mot clé utilisé pour déclarer une variable dont la valeur ne doit pas changer ?",
        "Est-ce qu'une variable peut changer de type après sa déclaration ?",
        "Comment appelle-t-on la syntaxe qui permet de déclarer plusieurs variables à partir des champs d'un object ?",
        "Qu'est-ce que le hoisting et quel mot clé permet de hoister une variable ?"
    ],
    "answers": [
        "`if`, c'est pour les conditions !",
        "`const`",
        "Oui. JS est un langage au typage dynamique, ce qui fait que le type d'une variable peut changer n'importe quand.",
        "On appelle cette syntaxe la destructuration. Par exemple: `const {name, age} = person;`",
        "Le hoisting permet d'accéder à une variable avant sa déclaration. On utilise le mot clé `var` pour hoister une variable."
    ]
}
```

Génère la carte suivante :

<img width="453" alt="image" src="https://github.com/jeremt/ttmc-for-dev/assets/1913169/58b665f5-71b4-4e3c-bf2e-157572a01e6e">

## Fonctionnalités

Vous pouvez contribuer sur les fonctionnalités aussi si vous voulez 🙃 :

-   [x] Générer les cartes par thème en fonction du Json
-   [x] Implémenter le style pour chacune des cartes
-   [x] Écrire les règles du jeu
-   [x] Générer ou designer le plateau de jeu
-   [x] Écrire une planche par cartes spéciales (bugs et pause café)
-   [x] Faire un logo
-   [ ] Écris au moins 1 planche (9 cartes par thème)
-   [ ] Écrire une planche de `startGame();` et une planche de `return winner;`
-   [ ] Générer correctement l'espacement entre les différentes pages à l'impression (pour avoir 9 cartes par page en faisant `⌘+P`)
-   [ ] Faire en sorte d'avoir 9 cartes par page et 9 dos correspondant sur la page suivante (plutòt que les dos directement à la suite)
-   [ ] Générer les cartes spéciales (bug, pause café, startGame et return winner) à partir d'un Json
-   [ ] Trouver un autre nom
-   [ ] Faire une landing page
-   [ ] Faire une version en ligne
