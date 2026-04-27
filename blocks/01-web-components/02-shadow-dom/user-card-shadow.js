class UserCardShadow extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'role'];
  }

  constructor() {
    super();
    // TODO: crear el shadow root aquí
    // this.shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    // TODO: solo renderizar si el shadow root ya existe (evitar render prematuro)
    this.render();
  }

  render() {
    // TODO: renderizar en this.shadowRoot en lugar de this.innerHTML
    // TODO: incluir <style> con estilos encapsulados
    // TODO: usar var(--card-background, #fff) y var(--card-color, #000) en los estilos
  }
}

customElements.define('user-card-shadow', UserCardShadow);
