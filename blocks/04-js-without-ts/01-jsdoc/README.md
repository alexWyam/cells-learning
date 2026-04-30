# 01 — JSDoc

## Objetivo

Añadir tipado estático y documentación a JavaScript puro usando JSDoc, de forma que el editor proporcione autocompletado, comprobación de tipos y documentación inline.

## Por qué JSDoc en lugar de TypeScript

En el stack Cells se trabaja con JS puro. VSCode (y el Language Server) lee JSDoc y ofrece la misma experiencia de tipos que TypeScript sin necesidad de compilador.

## Anotaciones más usadas

```js
/**
 * @param {string} name - Nombre del usuario
 * @param {number} [age=18] - Edad (opcional, default 18)
 * @returns {string}
 */
const greet = (name, age = 18) => `Hola ${name}, tienes ${age} años`;

/** @type {string[]} */
const tags = [];

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {'admin' | 'viewer'} role
 */

/** @param {User} user */
const displayUser = (user) => user.name;

/**
 * @template T
 * @param {T[]} arr
 * @returns {T | undefined}
 */
const first = (arr) => arr[0];
```

## Paralelo TypeScript

| JSDoc | TypeScript (clásico) | TypeScript / Angular v17+ |
|---|---|---|
| `@param {string} name` | `name: string` en la firma | Sin cambios |
| `@returns {User}` | `: User` en la firma | Sin cambios |
| `@typedef {Object} User` | `interface User {}` o `type User = {}` | Sin cambios |
| `@type {string[]}` | `const arr: string[] = []` | Sin cambios |
| `@template T` | `<T>` en función genérica | Sin cambios |
| `// @ts-check` en la cabecera | `tsconfig.json` strict mode | Angular v17+ requiere TS 5.x — mayor inferencia de tipos; decoradores de señales (`input()`, `output()`) son funciones, no decoradores de clase |

## Activar comprobación de tipos en VSCode

Añadir `// @ts-check` al inicio del archivo para que VSCode aplique las reglas de tipos sobre el JSDoc.

O de forma global en `jsconfig.json`:
```json
{ "compilerOptions": { "checkJs": true, "strict": true } }
```

## Ejercicio

Partiendo de `utils.js` del ejercicio `04-es-modules`:
1. Añadir `// @ts-check` y `jsconfig.json`
2. Documentar todas las funciones con `@param` y `@returns`
3. Crear un `@typedef` para el tipo `User`
4. Añadir una función genérica `groupBy` con `@template`
5. Verificar que VSCode detecta errores de tipo en tiempo real

## Archivo de trabajo

`utils.js`, `jsconfig.json`
