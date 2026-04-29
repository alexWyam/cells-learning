import { LitElement, html, css } from 'lit';

class ProductCard extends LitElement {
  static properties = {
    name: { type: String },
    price: { type: Number },
    inStock: { type: Boolean, attribute: 'in-stock', reflect: true },
    tags: { type: Array },
    _selectedTag: { state: true },
  };

  static styles = css`
    :host {
      display: block;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 1rem;
      margin: 0.5rem 0;
      max-width: 320px;
    }
    :host([in-stock]) {
      border-color: #4caf50;
    }
    .price {
      font-size: 1.25rem;
      font-weight: bold;
    }
    .stock {
      font-size: 0.8rem;
    }
    :host([in-stock]) .stock {
      color: #4caf50;
    }
    .stock:not([in-stock]) {
      color: #f44336;
    }
    .tags {
      display: flex;
      gap: 0.25rem;
      flex-wrap: wrap;
      margin-top: 0.5rem;
    }
    .tag {
      padding: 0.15rem 0.5rem;
      border-radius: 12px;
      font-size: 0.75rem;
      background: #eee;
      cursor: pointer;
      border: none;
    }
    .tag.selected {
      background: #6c63ff;
      color: #fff;
    }
  `;

  constructor() {
    super();
    this.inStock = false;
    this.tags = [];
    this._selectedTag = null;
  }

  render() {
    return html`
      <h3>${this.name}</h3>
      <p class="price">€${this.price?.toFixed(2)}</p>
      <p class="stock">${this.inStock ? 'En stock' : 'Sin stock'}</p>
      <div class="tags">
        ${this.tags.map(
          (tag) => html`
            <button
              class="tag ${this._selectedTag === tag ? 'selected' : ''}"
              @click=${() => (this._selectedTag = this._selectedTag === tag ? null : tag)}
            >
              ${tag}
            </button>
          `
        )}
      </div>
      <p class="tag-label">${this._selectedTag ? html`Tag seleccionado: <em>${this._selectedTag}</em>` : ''}</p>
    `;
  }
}

customElements.define('product-card', ProductCard);
