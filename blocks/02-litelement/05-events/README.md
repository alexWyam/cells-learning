# 05 — Eventos en LitElement

## Objetivo

Implementar el patrón de comunicación estándar en Web Components: propiedades hacia abajo, eventos hacia arriba. Dominar `CustomEvent`, `@eventOptions` y la diferencia entre eventos que cruzan y que no cruzan el Shadow DOM.

## Conceptos

### Emitir eventos

```js
this.dispatchEvent(new CustomEvent('my-event', {
  detail: { value: this.value },
  bubbles: true,    // sube por el DOM
  composed: true,   // cruza el Shadow DOM boundary
}));
```

**`bubbles: true`** — el evento sube por el árbol DOM (como un click nativo).
**`composed: true`** — imprescindible para que el evento salga del Shadow Root y sea escuchable desde el documento principal o desde componentes padre.

### Escuchar eventos en templates Lit

```js
// Listener inline:
html`<button @click=${this.handleClick}>OK</button>`

// Con opciones (passive, capture, once):
html`<div @scroll=${this._onScroll} @scroll=${{ handleEvent: this._onScroll, passive: true }}>`
```

### `@eventOptions` decorator (alternativa)
```js
@eventOptions({ passive: true })
_onScroll(e) { ... }
```

### Patrón padre → hijo → padre

```
<parent-comp>
  ├── propiedad "value" → baja como propiedad a <child-comp>
  └── escucha 'value-change' ← child emite CustomEvent cuando el usuario interactúa
```

## Paralelo Angular

| LitElement | Angular |
|---|---|
| `@click=${this.fn}` | `(click)="fn()"` |
| `this.dispatchEvent(new CustomEvent('foo'))` | `@Output() foo = new EventEmitter(); foo.emit(val)` |
| `bubbles: true, composed: true` | `EventEmitter` burbujea por defecto en Angular |
| `detail` del CustomEvent | Valor pasado a `emit(val)` |

## Ejercicio

Crear un sistema de dos componentes:
1. `<rating-stars>` — emite `rating-change` con `{ detail: { rating: n } }` al seleccionar estrellas
2. `<rating-form>` — contiene `<rating-stars>` y escucha el evento para actualizar su estado interno y mostrar el valor seleccionado

## Archivos de trabajo

`rating-stars.js`, `rating-form.js`
