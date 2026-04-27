# 02 — Propiedades reactivas

## Objetivo

Dominar el sistema de propiedades reactivas de LitElement: declaración, tipos, conversión de atributos, `reflect` y acceso al estado previo en `updated`.

## Conceptos

### Declaración

```js
static properties = {
  name:    { type: String },           // atributo → prop automático
  count:   { type: Number },
  active:  { type: Boolean, reflect: true }, // sync prop → atributo
  items:   { type: Array },            // JSON.parse en el atributo
  config:  { type: Object, attribute: 'data-config' }, // nombre de atributo custom
  _hidden: { state: true },            // estado interno, sin atributo
};
```

### `reflect: true`
Sincroniza el valor de la propiedad JS de vuelta al atributo HTML. Útil para:
- Selectores CSS que dependen de atributos (`[active]`)
- Herramientas de inspección que leen atributos
- Evitar en objetos/arrays (serialización costosa e incorrecta)

### `state: true`
Propiedad reactiva sin atributo HTML correspondiente. Estado interno del componente.

### `updated(changedProperties)`
`changedProperties` es un `Map<string, unknown>` con los **valores anteriores** de las props que cambiaron.

```js
updated(changed) {
  if (changed.has('userId')) {
    this.fetchUser(this.userId);
  }
}
```

## Paralelo Angular

| LitElement | Angular |
|---|---|
| `static properties = { name: { type: String } }` | `@Input() name: string` |
| `reflect: true` | `@HostBinding('attr.active')` |
| `state: true` | Propiedad privada del componente |
| `updated(changedProps)` | `ngOnChanges(changes: SimpleChanges)` |

## Ejercicio

Crear `<product-card>` con las siguientes propiedades:
- `name` (String, refleja al atributo)
- `price` (Number)
- `inStock` (Boolean, reflect — usa `[in-stock]` en CSS para color)
- `tags` (Array — pasa como JSON desde HTML)
- `_selectedTag` (state — estado interno)
