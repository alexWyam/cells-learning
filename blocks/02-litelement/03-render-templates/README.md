# 03 — Render y templates

## Objetivo

Dominar el sistema de templates de Lit: `html` tagged template literal, directivas integradas y patrones de renderizado condicional y de listas.

## Conceptos

### Template literals etiquetados

```js
import { html } from 'lit';

render() {
  return html`<p>Hola ${this.name}</p>`;
}
```

Lit solo actualiza los nodos que cambian entre renders, no regenera el DOM completo.

### Directivas principales

| Directiva Lit | Equivalente Angular (clásico) | Angular v17+ |
|---|---|---|
| `repeat(items, keyFn, templateFn)` | `*ngFor="let x of xs; trackBy: fn"` | `@for (x of xs; track x.id) { ... }` — `track` obligatorio |
| `when(condition, trueFn, falseFn)` | `*ngIf` con `else` | `@if (cond) { ... } @else { ... }` |
| `choose(value, cases)` | `ngSwitch` / `*ngSwitchCase` | `@switch (val) { @case ('a') { ... } }` |
| `classMap({ active: bool })` | `[class.active]="bool"` | Sin cambios |
| `styleMap({ color: val })` | `[style.color]="val"` | Sin cambios |
| `ifDefined(value)` | `[attr.foo]="val ?? null"` | Sin cambios |
| `live(value)` | Necesario con formularios controlados | Sin cambios |
| `ref(callback)` | `@ViewChild` | `viewChild('ref')` — signal-based, sin decorador |
| `unsafeHTML(str)` | `[innerHTML]="str"` | Sin cambios |

## Ejercicio

Crear `<task-list>` con:
1. Lista de tareas renderizada con `repeat` y clave por `id`
2. Filtro de estado (todas / pendientes / completadas) con `when` o `choose`
3. Clases dinámicas en cada tarea con `classMap`
4. Formulario inline para añadir nueva tarea con `live` en el input

## Archivo de trabajo

`task-list.js`
