# 04 — Estilos en LitElement

## Objetivo

Dominar el sistema de estilos encapsulados de Lit: `static styles`, herencia de estilos, variables CSS para theming y el selector `:host`.

## Conceptos

### `static styles`

```js
import { css } from 'lit';

static styles = css`
  :host { display: block; }           /* el elemento custom en sí */
  :host([disabled]) { opacity: 0.5; } /* host con atributo */
  :host-context(.dark-theme) { ... }  /* host dentro de un contexto */
  ::slotted(p) { margin: 0; }         /* contenido proyectado con slot */
`;
```

### Herencia de estilos (array)

```js
static styles = [BaseComponent.styles, css`...estilos propios...`];
```

### Variables CSS — la API de theming

Las variables CSS son la única manera de que los estilos externos afecten al Shadow DOM:

```css
/* Consumidor del componente: */
my-button { --btn-color: #6c63ff; }

/* Dentro del componente: */
button { background: var(--btn-color, #007bff); } /* fallback */
```

### `adoptedStyleSheets`

Lit usa `CSSStyleSheet` adoptados internamente. El resultado: los estilos se comparten entre todas las instancias del mismo componente, sin duplicación.

## Paralelo Angular

| LitElement | Angular (clásico) | Angular v17+ |
|---|---|---|
| `static styles = css\`...\`` | `styleUrls: ['./component.scss']` | `styles` inline o `styleUrl` (singular) en standalone |
| `:host` | `:host` en SCSS | Sin cambios |
| `:host([disabled])` | `@HostBinding('class.disabled')` + `:host(.disabled)` | `host: { '[class.disabled]': 'disabled()' }` con signal |
| `var(--color, fallback)` | Variables SCSS `$color` (no atraviesan ViewEncap) | CSS custom properties siguen siendo el mecanismo cross-component |
| Herencia de estilos con array | Mixins SCSS | Sin cambios en Angular para este caso |
| `::slotted(*)` | No existe equivalente directo | Sin cambios |

## Ejercicio

Crear un sistema de diseño mínimo con dos componentes:
1. `<ds-button>` — botón con variantes (`variant="primary|secondary|danger"`) y estado `disabled`
2. `<ds-card>` — tarjeta que hereda estilos base y añade los propios
3. Exponer variables CSS: `--ds-color-primary`, `--ds-radius`, `--ds-spacing`
4. Crear una página de demo con un tema oscuro usando las variables

## Archivo de trabajo

`ds-button.js`, `ds-card.js`, `ds-tokens.css`
