import { LitElement, html, css } from 'lit';

class RatingForm extends LitElement {
  static properties = {
    _rating: { state: true },
    _submitted: { state: true },
  };

  static styles = css`
    :host {
      display: block;
      max-width: 360px;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1.5rem;
    }
    p {
      margin: 0.5rem 0;
    }
    button {
      margin-top: 1rem;
      padding: 0.5rem 1.25rem;
      background: #6c63ff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.5;
    }
  `;

  constructor() {
    super();
    this._rating = 0;
    this._submitted = false;
  }

  _onRatingChange(e) {
    this._rating = e.detail.rating;
  }

  _submit() {
    this._submitted = true;
  }

  render() {
    if (this._submitted) {
      return html`<p>¡Gracias! Valoración enviada: ${'★'.repeat(this._rating)}</p>`;
    }

    return html`
      <p>¿Cómo valorarías este contenido?</p>
      <!--
        Escuchar 'rating-change' en el componente hijo.
        Como composed: true, el evento sale del Shadow DOM de rating-stars
        y es capturable desde aquí.
      -->
      <rating-stars .value=${this._rating} @rating-change=${this._onRatingChange}></rating-stars>
      <p>${this._rating > 0 ? `Seleccionado: ${this._rating}/5` : 'Sin valorar'}</p>
      <button ?disabled=${this._rating === 0} @click=${this._submit}>Enviar</button>
    `;
  }
}

customElements.define('rating-form', RatingForm);
