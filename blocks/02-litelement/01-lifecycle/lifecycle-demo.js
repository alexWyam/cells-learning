import { LitElement, html, css } from 'lit';

class LifecycleDemo extends LitElement {
  static properties = {
    count: { type: Number },
    logs: { state: true },
  };

  static styles = css`
    :host {
      display: block;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1rem;
      margin-top: 1rem;
    }
    .log {
      font-family: monospace;
      font-size: 0.85rem;
      color: #555;
    }
    .log span {
      display: block;
      padding: 0.1rem 0;
    }
    button {
      margin-top: 0.5rem;
    }
  `;

  constructor() {
    super();
    this.count = 0;
    this.logs = [];
    this.logs.push('constructor');
  }

  connectedCallback() {
    super.connectedCallback();
    this.logs = [...this.logs, 'connectedCallback'];
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.logs = [...this.logs, 'disconnectedCallback'];
  }

  firstUpdated() {
    this.logs = [...this.logs, 'firstUpdated'];
  }

  updated(_changedProps) {
    if (_changedProps.has('count')) {
      this.logs = [...this.logs, `updated (changed: ${[..._changedProps.keys()].join(', ')})`];
    }
  }

  render() {
    return html`
      <p>Count: <strong>${this.count}</strong></p>
      <button @click=${() => (this.count += 1)}>Incrementar</button>
      <div class="log">
        <!-- TODO: renderizar this.logs como lista de <span> -->
        ${this.logs.map((log) => html`<span>${log}</span>`)}
      </div>
    `;
  }
}

customElements.define('lifecycle-demo', LifecycleDemo);
