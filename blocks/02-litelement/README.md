# Bloque 02 — LitElement

## Objetivo

Aprender LitElement como capa reactiva sobre Web Components nativos: sistema de propiedades, renderizado eficiente con `html` template literals, estilos encapsulados y comunicación basada en eventos.

## Por qué importa en Cells

Todos los componentes de Cells están construidos con LitElement. Este bloque es el salto directo al trabajo diario del equipo Mobile.

## Ejercicios

| Carpeta | Concepto clave | Paralelo Angular |
|---|---|---|
| `01-lifecycle/` | `connectedCallback`, `disconnectedCallback`, `updated`, `firstUpdated` | `ngOnInit`, `ngOnDestroy`, `ngAfterViewInit` |
| `02-reactive-properties/` | `static properties`, actualizaciones automáticas del DOM | `@Input()`, detección de cambios |
| `03-render-templates/` | `render()`, directivas `repeat`, `when`, `classMap` | Template syntax Angular, `*ngFor`, `*ngIf` |
| `04-styles/` | `static styles = css\`...\``, variables CSS, theming | `styleUrls`, CSS custom properties |
| `05-events/` | `CustomEvent`, `@eventOptions`, pattern de comunicación padre-hijo | `@Output()`, `EventEmitter` |

## Instalación de LitElement

LitElement se importa desde el CDN (bloques de navegador) o desde `node_modules` (tests Vitest):

```html
<!-- En index.html -->
<script type="importmap">
  { "imports": { "lit": "https://esm.run/lit@3" } }
</script>
```

```js
// En tests
import { LitElement, html, css } from 'lit';
```

## Referencia

- [Lit — Getting Started](https://lit.dev/docs/getting-started/)
- [Lit — Reactive Properties](https://lit.dev/docs/components/properties/)
- [Lit — Templates](https://lit.dev/docs/templates/overview/)
