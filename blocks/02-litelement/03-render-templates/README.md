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

| Directiva | Uso | Equivalente Angular |
|---|---|---|
| `repeat(items, keyFn, templateFn)` | Listas con clave estable | `*ngFor="let x of xs; trackBy: fn"` |
| `when(condition, trueFn, falseFn)` | Condicional | `*ngIf` con `else` |
| `choose(value, cases)` | Switch | `ngSwitch` |
| `classMap({ active: bool })` | Clases dinámicas | `[class.active]="bool"` |
| `styleMap({ color: val })` | Estilos dinámicos | `[style.color]="val"` |
| `ifDefined(value)` | Omite atributo si `undefined` | `[attr.foo]="val ?? null"` |
| `live(value)` | Fuerza binding en inputs | Necesario con formularios controlados |
| `ref(callback)` | Referencia a elemento del DOM | `@ViewChild` |
| `unsafeHTML(str)` | HTML en string (peligroso) | `[innerHTML]="str"` |

## Ejercicio

Crear `<task-list>` con:
1. Lista de tareas renderizada con `repeat` y clave por `id`
2. Filtro de estado (todas / pendientes / completadas) con `when` o `choose`
3. Clases dinámicas en cada tarea con `classMap`
4. Formulario inline para añadir nueva tarea con `live` en el input

## Archivo de trabajo

`task-list.js`
