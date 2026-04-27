# 02 — ESLint

## Objetivo

Entender la configuración flat config de ESLint 9+, las reglas más relevantes para el stack Cells y cómo añadir reglas personalizadas para reforzar convenciones del equipo.

## Flat config (ESLint 9+)

A diferencia del `.eslintrc.js` legacy, la flat config es un array de objetos exportado por `eslint.config.js`. Cada objeto aplica reglas a un conjunto de archivos.

```js
// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,  // reglas base recomendadas
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      eqeqeq: ['error', 'always'],
      'no-console': 'warn',
    },
  },
];
```

## Reglas clave para Cells

| Regla | Nivel | Motivo |
|---|---|---|
| `no-var` | error | Usar `const`/`let` siempre |
| `prefer-const` | error | `const` por defecto |
| `eqeqeq` | error | Siempre `===` |
| `no-console` | warn | Sin logs en producción |
| `no-unused-vars` | error | Limpiar código muerto |

## Comandos

```bash
npm run lint          # reporta errores
npm run lint:fix      # autofix
```

## Ejercicio

1. Revisar `eslint.config.js` en la raíz del proyecto
2. Crear un archivo `bad-code.js` que intencionalmente viole varias reglas
3. Ejecutar `npm run lint` y observar los errores
4. Ejecutar `npm run lint:fix` y ver qué se puede corregir automáticamente
5. Añadir una regla personalizada: prohibir `setTimeout` sin `clearTimeout` (investigar cómo escribir una regla custom o usar un plugin)

## Archivo de trabajo

`bad-code.js` (temporal, para ejercicio)
