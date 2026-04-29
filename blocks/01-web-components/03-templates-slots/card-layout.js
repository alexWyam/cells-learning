// TODO: definir el template HTML con los tres slots nombrados
// Opción A: crear el template en JS y añadirlo al documento
// Opción B: usar innerHTML directamente en el shadowRoot

const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      border: 1px solid #ccc;
      padding: 1em;
    }
    ::slotted(*) {
      margin: 0.5em 0;
    }
  </style>
  <div class="card">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="body"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
    <div class="default">
      <slot></slot>
    </div>
  </div>
`;

class CardLayout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('card-layout', CardLayout);
