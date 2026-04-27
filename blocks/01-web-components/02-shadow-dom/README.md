# 02 — Shadow DOM

## Objetivo

Añadir encapsulación real de DOM y estilos al componente del ejercicio anterior mediante Shadow DOM.

## Conceptos

- `this.attachShadow({ mode: 'open' })` — crear el Shadow Root
- **Light DOM** vs **Shadow DOM**: qué es visible desde fuera, qué está encapsulado
- Estilos dentro del Shadow DOM: no afectan al exterior, no son afectados por el exterior
- **Variables CSS** (`--color-primary`): la única forma de que los estilos externos lleguen al Shadow DOM
- `:host` — selector que apunta al elemento custom desde sus propios estilos

## Paralelo Angular

| Web Components | Angular |
|---|---|
| `attachShadow({ mode: 'open' })` | `ViewEncapsulation.ShadowDom` |
| `:host` selector | `:host` en SCSS de componente |
| Variables CSS atraviesan el Shadow DOM | Variables CSS globales en Angular |
| Estilos completamente encapsulados | `ViewEncapsulation.Emulated` solo los emula |

## Ejercicio

Partir del componente `UserCard` del ejercicio anterior y:
1. Mover el render al `shadowRoot` en lugar de `this.innerHTML`
2. Añadir estilos encapsulados con `<style>` dentro del shadow root
3. Comprobar que los estilos globales del `body` no afectan al componente
4. Exponer `--card-background` y `--card-color` como variables CSS customizables

## Archivo de trabajo

`user-card-shadow.js`

## Verificar

```bash
npx serve .
# Abrir: http://localhost:3000/blocks/01-web-components/02-shadow-dom/
```
