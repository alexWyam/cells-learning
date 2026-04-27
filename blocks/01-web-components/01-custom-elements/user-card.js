class UserCard extends HTMLElement {
  // TODO: declarar los atributos que queremos observar
  static get observedAttributes() {
    return [];
  }

  // TODO: se ejecuta cuando el elemento entra en el DOM
  connectedCallback() {}

  // TODO: se ejecuta cuando cambia uno de los atributos observados
  attributeChangedCallback(_name, _oldValue, _newValue) {}

  // TODO: se ejecuta cuando el elemento sale del DOM (limpiar listeners)
  disconnectedCallback() {}

  render() {
    // TODO: leer atributos con this.getAttribute(...)
    // TODO: actualizar this.innerHTML con el template del card
    // TODO: añadir listener al botón que emita CustomEvent('user-contact', ...)
  }
}

customElements.define('user-card', UserCard);
