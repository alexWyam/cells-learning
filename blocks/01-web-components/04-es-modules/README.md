# 04 — ES Modules

## Objetivo

Organizar el código en módulos ES nativos del navegador: `import`/`export`, import maps y patrones de diseño aplicables a un sistema de componentes.

## Conceptos

- `export` nombrado vs `export default`
- `import` estático vs `import()` dinámico (lazy)
- `type="module"` en `<script>` — modo estricto automático, scope propio, defer por defecto
- **Import maps** — resolver bare specifiers (`import 'lit'`) en el navegador sin bundler
- Orden de ejecución y efectos secundarios en módulos
- Ciclo de importación: por qué importar dos veces el mismo módulo no lo ejecuta dos veces

## Paralelo Angular

| ES Modules nativos | Angular (clásico) | Angular v17+ |
|---|---|---|
| `export class Foo {}` | `export class FooComponent {}` + `NgModule.declarations` | Standalone: se importa directamente en `imports: [FooComponent]` |
| `import { Foo } from './foo.js'` | `import { FooComponent } from './foo.component'` | Sin cambios |
| Import map para `lit` | `tsconfig.json` paths + webpack | `tsconfig.json` paths + Vite/esbuild |
| `import()` dinámico | Lazy loading con `loadChildren` / `loadComponent` | `@defer { <comp /> }` para diferir en el template; `loadComponent` para rutas |
| Sin sistema de módulos adicional | `NgModule` como capa organizativa | `NgModule` opcional — standalone es el default en v17+ |

## Ejercicio

1. Extraer utilidades del componente `UserCard` a un módulo `utils.js` (formatear nombre, generar avatar URL…)
2. Importar `utils.js` desde `user-card.js`
3. Añadir un import map en el `index.html` para resolver `lit` desde CDN
4. Implementar carga dinámica de un segundo componente al hacer click

## Estructura propuesta

```
04-es-modules/
├── index.html
├── user-card.js       ← importa desde utils.js
└── utils.js           ← funciones puras exportadas
```

## Verificar

```bash
npx serve .
# Abrir: http://localhost:3000/blocks/01-web-components/04-es-modules/
```
