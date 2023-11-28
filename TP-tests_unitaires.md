# TP - tests unitaires

## Comment travailler sur le TP

Cloner : https://github.com/ThomasLaforge/tests-ts

```bash
npm i
npm run test
```

Pour le faire vous même plus tard :

```bash
npm i -D vitest
```

ajouter un script dans le package.json :

```json
"scripts": {
    ...,
    "test": "vitest"
}
```

## Exercice 1

Ajouter des tests unitaires sur la fonction `additionner` du fichier `__tests__/additionner.ts`.

## Exercice 2

Gérer la multiplication et les puissance dans un fichier `__tests__/pow.test.ts`, `modules/pow.ts` et `__tests__/multiplication.test.ts`, `modules/multiplication.ts`.

## Exercice 3

gérer la soustration et la division dans un fichier `__tests__/soustraire.test.ts`, `modules/soustraire.ts` et `__tests__/division.test.ts`, `modules/division.ts`.
Appuyer vous de la fonction : smallNumberSubstraction 