import { LitElement, html, css } from 'lit';

class DsButton extends LitElement {
  static properties = {
    variant: { type: String, reflect: true },
    disabled: { type: Boolean, reflect: true },
  };

  static styles = css`
    :host {
      display: inline-block;
    }
    :host([disabled]) {
      opacity: 0.5;
      pointer-events: none;
    }
    button {
      padding: var(--ds-spacing, 0.75rem) calc(var(--ds-spacing, 0.75rem) * 1.5);
      border: none;
      border-radius: var(--ds-radius, 6px);
      font-size: var(--ds-font-size, 0.9rem);
      cursor: pointer;
      background: var(--ds-color-secondary, #546e7a);
      color: #fff;
      transition: filter 0.15s;
    }
    button:hover {
      filter: brightness(1.1);
    }
    :host([variant='primary']) button {
      background: var(--ds-color-primary, #6200ea);
    }
    :host([variant='secondary']) button {
      background: var(--ds-color-secondary, #546e7a);
    }
    :host([variant='danger']) button {
      background: var(--ds-color-danger, #e53935);
    }
  `;

  constructor() {
    super();
    this.variant = 'default';
    this.disabled = false;
  }

  render() {
    return html`<button ?disabled=${this.disabled}><slot></slot></button>`;
  }
}

customElements.define('ds-button', DsButton);
