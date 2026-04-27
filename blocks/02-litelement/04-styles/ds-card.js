import { LitElement, html, css } from 'lit';

class DsCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: var(--ds-color-bg, #fff);
      color: var(--ds-color-text, #212121);
      border: 1px solid var(--ds-color-border, #e0e0e0);
      border-radius: var(--ds-radius, 6px);
      padding: var(--ds-spacing, 0.75rem);
      margin: var(--ds-spacing, 0.75rem) 0;
      max-width: 400px;
    }
    header {
      font-weight: bold;
      font-size: 1.05rem;
      margin-bottom: var(--ds-spacing, 0.75rem);
      padding-bottom: var(--ds-spacing, 0.75rem);
      border-bottom: 1px solid var(--ds-color-border, #e0e0e0);
    }
    footer {
      margin-top: var(--ds-spacing, 0.75rem);
      padding-top: var(--ds-spacing, 0.75rem);
      border-top: 1px solid var(--ds-color-border, #e0e0e0);
    }
    ::slotted(p) { margin: 0; }
  `;

  render() {
    return html`
      <header><slot name="header"></slot></header>
      <main><slot name="body"></slot></main>
      <footer><slot name="footer"></slot></footer>
    `;
  }
}

customElements.define('ds-card', DsCard);
