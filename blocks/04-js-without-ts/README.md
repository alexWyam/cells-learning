# Bloque 04 — JavaScript sin TypeScript

## Objetivo

Desarrollar código JS de calidad de producción sin TypeScript: tipado estático mediante JSDoc, configuración avanzada de ESLint y testing robusto con Vitest.

## Por qué importa en Cells

El stack Cells trabaja en JavaScript puro. La seguridad de tipos viene de JSDoc + ESLint, no del compilador TypeScript. Este bloque cubre las herramientas que reemplazan esa capa.

## Ejercicios

| Carpeta | Concepto clave | Paralelo TypeScript/Angular (clásico) | Angular v17+ / TS moderno |
|---|---|---|---|
| `01-jsdoc/` | `@param`, `@returns`, `@typedef`, `@type`, `@template` | Tipos TypeScript, interfaces | Sin cambios — JSDoc sigue siendo la alternativa para JS puro |
| `02-eslint/` | Flat config, reglas personalizadas, plugins | `tsconfig.json` strict mode | Angular ESLint actualizado para flat config; reglas para signals disponibles |
| `03-testing/` | Vitest + happy-dom, patrones de test para Web Components | Jest + Testing Library | Angular Testing con `TestBed` soporta signals; `ComponentFixture` se puede reemplazar por `render` de `@testing-library/angular` |

## Referencia

- [JSDoc — Referencia completa](https://jsdoc.app/)
- [ESLint — Flat config](https://eslint.org/docs/latest/use/configure/configuration-files)
- [Vitest — Documentación](https://vitest.dev/)
- [happy-dom](https://github.com/capricorn86/happy-dom)
