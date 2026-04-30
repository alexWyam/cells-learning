# 01 — Custom Elements

## Objetivo

Crear un elemento HTML personalizado desde cero, entender su ciclo de vida y la diferencia entre atributos y propiedades JS.

## Conceptos

- `class MyElement extends HTMLElement`
- `customElements.define('my-element', MyElement)`
- Ciclo de vida: `connectedCallback`, `disconnectedCallback`, `attributeChangedCallback`
- `static get observedAttributes()` — lista de atributos que disparan `attributeChangedCallback`
- **Atributo** (string, HTML) vs **propiedad** (cualquier tipo, JS)

## Paralelo Angular

| Web Components | Angular (clásico) | Angular v17+ |
|---|---|---|
| `class extends HTMLElement` | `@Component({ ... })` + `NgModule` | Standalone component (`standalone: true` por defecto) |
| `connectedCallback` | `ngOnInit` | `ngOnInit` (sin cambios) |
| `disconnectedCallback` | `ngOnDestroy` | `DestroyRef` + `takeUntilDestroyed()` |
| `attributeChangedCallback` | `ngOnChanges` | `input()` signal — reacciona automáticamente a cambios |
| `customElements.define(...)` | Declaración en `NgModule.declarations` | `imports: [MyComp]` directo en el consumidor |

## Ejercicio

Implementar `<user-card>` con:
1. Atributos observados: `name`, `role`
2. `connectedCallback` → renderizar el contenido inicial
3. `attributeChangedCallback` → actualizar el DOM al cambiar atributos
4. Un botón que emita `CustomEvent('user-contact', { bubbles: true, composed: true })`

## Archivo de trabajo

`user-card.js` — la clase `UserCard` ya está esqueletada con TODOs.

## Verificar

```bash
npx serve .   # desde la raíz
# Abrir: http://localhost:3000/blocks/01-web-components/01-custom-elements/
```
