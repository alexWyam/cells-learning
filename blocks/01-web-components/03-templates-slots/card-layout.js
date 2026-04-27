// TODO: definir el template HTML con los tres slots nombrados
// Opción A: crear el template en JS y añadirlo al documento
// Opción B: usar innerHTML directamente en el shadowRoot

class CardLayout extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // TODO: clonar el template o construir el shadowRoot con:
    // - <slot name="header"> para el encabezado
    // - <slot name="body"> para el cuerpo
    // - <slot name="footer"> para el pie
    // - <slot> por defecto para el resto
    // TODO: añadir estilos con ::slotted(*) para formatear el contenido proyectado
  }
}

customElements.define('card-layout', CardLayout);
