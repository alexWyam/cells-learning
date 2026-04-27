import { LitElement, html, css } from 'lit';

class LifecycleDemo extends LitElement {
  static properties = {
    count: { type: Number },
    // TODO: añadir un array 'logs' para mostrar el log visual en pantalla
  };

  static styles = css`
    :host { display: block; border: 1px solid #ddd; border-radius: 8px; padding: 1rem; margin-top: 1rem; }
    .log { font-family: monospace; font-size: 0.85rem; color: #555; }
    .log span { display: block; padding: 0.1rem 0; }
    button { margin-top: 0.5rem; }
  `;

  constructor() {
    super();
    this.count = 0;
    // TODO: inicializar logs como array vacío
    // TODO: añadir entrada al log: 'constructor'
  }

  connectedCallback() {
    super.connectedCallback();
    // TODO: añadir entrada al log: 'connectedCallback'
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // TODO: añadir entrada al log: 'disconnectedCallback'
  }

  firstUpdated() {
    // TODO: añadir entrada al log: 'firstUpdated'
  }

  updated(_changedProps) {
    // TODO: añadir entrada al log: `updated (changed: ${[...changedProps.keys()].join(', ')})`
  }

  render() {
    return html`
      <p>Count: <strong>${this.count}</strong></p>
      <button @click=${() => (this.count += 1)}>Incrementar</button>
      <div class="log">
        <!-- TODO: renderizar this.logs como lista de <span> -->
      </div>
    `;
  }
}

customElements.define('lifecycle-demo', LifecycleDemo);
