# Glosario — Cells / Web Components / LitElement

## Web Components

**Custom Element**
Elemento HTML definido por el desarrollador que extiende `HTMLElement`. Se registra con `customElements.define('tag-name', ClassName)`. El nombre siempre lleva guión para distinguirse de los elementos nativos.

**Shadow DOM**
Árbol DOM encapsulado e independiente del documento principal. Los estilos no entran ni salen (salvo variables CSS). Se crea con `element.attachShadow({ mode: 'open' })`.

**Light DOM**
El DOM que los usuarios del componente escriben entre las etiquetas de apertura y cierre. Se proyecta dentro del Shadow DOM mediante `<slot>`.

**Slot**
Punto de proyección de contenido dentro del Shadow DOM. Equivale a `ng-content`. Puede ser nombrado (`<slot name="header">`) o por defecto (`<slot>`).

**`<template>`**
Elemento HTML que contiene markup inerte (no se renderiza ni ejecuta). Se clona con `template.content.cloneNode(true)` para usarlo eficientemente varias veces.

**Host element**
El elemento custom en sí mismo (la etiqueta en el DOM). Se referencia con `:host` en CSS y con `this` en JS dentro de la clase.

**`connectedCallback`**
Callback del ciclo de vida nativo que se ejecuta cuando el elemento se inserta en el DOM. Equivale aproximadamente a `ngOnInit`.

**`disconnectedCallback`**
Se ejecuta cuando el elemento se elimina del DOM. Ideal para limpiar listeners. Equivale a `ngOnDestroy`.

**`attributeChangedCallback(name, oldVal, newVal)`**
Se ejecuta cuando cambia un atributo declarado en `static get observedAttributes()`. Diferencia clave: los atributos son siempre strings.

---

## LitElement

**LitElement**
Clase base de Lit que extiende `HTMLElement` y añade sistema de propiedades reactivas, renderizado eficiente y gestión de estilos encapsulados.

**`static properties`**
Objeto estático que declara las propiedades reactivas del componente. Cada cambio de propiedad dispara un ciclo de renderizado.

```js
static properties = {
  name: { type: String },
  count: { type: Number },
  active: { type: Boolean, reflect: true },
};
```

**`reflect`**
Opción de propiedad reactiva que sincroniza la propiedad JS con el atributo HTML (bidireccional). Solo útil para valores primitivos; evitar en objetos/arrays.

**`html\`...\``**
Template literal etiquetado de Lit que genera un `TemplateResult` eficiente. Lit solo actualiza los nodos que realmente cambian entre renders.

**`css\`...\``**
Template literal etiquetado de Lit para definir estilos adoptados (`CSSStyleSheet`). Se declara en `static styles` y se aplica al Shadow DOM del componente.

**`render()`**
Método que devuelve el `TemplateResult` del componente. Se ejecuta automáticamente cuando cambia cualquier propiedad reactiva.

**`updateComplete`**
Promesa que se resuelve cuando el componente ha terminado su ciclo de actualización actual. Imprescindible en tests: `await el.updateComplete`.

**`firstUpdated()`**
Hook que se ejecuta una sola vez tras el primer render. Equivale a `ngAfterViewInit`. Ideal para inicializar lógica que necesita acceso al DOM del componente.

**`updated(changedProperties)`**
Hook que se ejecuta tras cada render. `changedProperties` es un `Map` con los valores anteriores de las propiedades que cambiaron.

**`this.renderRoot`**
Referencia al Shadow Root del componente. Usar `this.renderRoot.querySelector(...)` en lugar de `this.querySelector(...)` para acceder al DOM interno.

---

## Cells / Open Cells

**Cells**
Framework de BBVA para aplicaciones web/mobile construido sobre LitElement. Añade router, pub-sub, convenciones de proyecto y CLI.

**Open Cells**
Versión open source del framework Cells. La documentación pública está en [open-cells.com](https://open-cells.com/).

**Página (page component)**
Componente LitElement que representa una ruta completa de la aplicación. Convención: nombre terminado en `-page` (ej. `login-page`).

**Bridge component**
Componente de Cells que conecta el estado global (canales) con componentes UI puros. Equivale al patrón contenedor/presentacional de Angular.

**Canal (channel)**
Unidad de estado reactivo en Cells. Basado en RxJS. Los componentes se suscriben a canales para recibir actualizaciones y publican en canales para emitir cambios.

**Pub-sub**
Patrón de comunicación donde los publicadores emiten datos en un canal y los suscriptores los reciben sin conocerse mutuamente.

**cells-cli**
Herramienta de línea de comandos para scaffold, desarrollo y build de aplicaciones Cells. Comandos principales: `cells new`, `cells generate`, `cells serve`, `cells build`.

---

## Testing

**Vitest**
Framework de testing moderno compatible con la API de Jest. Usa Vite internamente; soporta ES Modules nativamente sin configuración adicional.

**happy-dom**
Implementación de DOM en Node.js, más rápida que jsdom y con mejor soporte de Web Components. Se usa como entorno de test para componentes.

**`vi`**
Objeto global de Vitest equivalente a `jest`. Proporciona `vi.fn()`, `vi.spyOn()`, `vi.useFakeTimers()`, etc.

**`updateComplete`** (en tests)
Patrón obligatorio al testear LitElement:
```js
const el = document.createElement('my-comp');
document.body.appendChild(el);
await el.updateComplete; // esperar primer render
```
