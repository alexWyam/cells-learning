import { LitElement, html, css } from 'lit';

/**
 * Componente de valoración con estrellas.
 *
 * @fires {CustomEvent<{ rating: number }>} rating-change - Emitido al seleccionar una estrella.
 * @prop {number} value - Estrella actualmente seleccionada (1-5).
 * @prop {number} max - Número de estrellas totales.
 */
class RatingStars extends LitElement {
  static properties = {
    value: { type: Number },
    max: { type: Number },
    _hovered: { state: true },
  };

  static styles = css`
    :host {
      display: inline-flex;
      gap: 4px;
    }
    button {
      background: none;
      border: none;
      font-size: 1.75rem;
      cursor: pointer;
      padding: 0;
      line-height: 1;
      transition: transform 0.1s;
    }
    button:hover {
      transform: scale(1.2);
    }
  `;

  constructor() {
    super();
    this.value = 0;
    this.max = 5;
    this._hovered = 0;
  }

  _select(rating) {
    this.value = rating;
    this.dispatchEvent(
      new CustomEvent('rating-change', {
        detail: { rating },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    const active = this._hovered || this.value;
    return html`
      ${Array.from({ length: this.max }, (_, i) => i + 1).map(
        (n) => html`
          <button
            aria-label="Valorar ${n} de ${this.max}"
            @click=${() => this._select(n)}
            @mouseenter=${() => (this._hovered = n)}
            @mouseleave=${() => (this._hovered = 0)}
          >
            ${n <= active ? '★' : '☆'}
          </button>
        `
      )}
    `;
  }
}

customElements.define('rating-stars', RatingStars);
