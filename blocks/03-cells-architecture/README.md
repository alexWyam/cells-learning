# Bloque 03 — Arquitectura Cells

## Objetivo

Entender cómo Cells orquesta componentes LitElement en una aplicación real: routing, gestión de estado con pub-sub, estructura de proyecto y uso del CLI.

## Contexto

Cells es el framework de BBVA que añade sobre LitElement:
- Un **router** declarativo basado en páginas
- Un sistema de **pub-sub** (canales) para comunicación entre componentes sin acoplamiento
- **Convenciones** de estructura de proyecto y nomenclatura
- Un **CLI** (`cells-cli`) para scaffold y build

## Ejercicios

| Carpeta | Concepto clave | Paralelo Angular (clásico) | Angular v17+ |
|---|---|---|---|
| `01-router/` | Definición de rutas, navegación, parámetros | `@angular/router`, `RouterModule` | Router standalone sin `RouterModule`; `inject(ActivatedRoute)` |
| `02-state-pubsub/` | Canales reactivos con RxJS, bridge components | `@ngrx/store`, servicios con `BehaviorSubject` | `signal()` + `computed()` para estado local; `toSignal()` para adaptar RxJS |
| `03-project-structure/` | Anatomía de una app Cells | Estructura de módulos Angular | Sin `NgModule` — standalone components organizados por feature |
| `04-cells-cli/` | `cells new`, `cells generate`, `cells build` | Angular CLI | `ng generate` crea standalone por defecto; `ng new --minimal` elimina `NgModule` |

## Requisito previo

```bash
npm install -g @cells/cells-cli
cells --version
```

## Cómo ejecutar (bloque 3+)

```bash
cells serve   # Servidor de desarrollo Cells (reemplaza npx serve)
```

## Referencia

- [Open Cells — Documentación](https://open-cells.com/)
- [cells-cli — npm](https://www.npmjs.com/package/@cells/cells-cli)
