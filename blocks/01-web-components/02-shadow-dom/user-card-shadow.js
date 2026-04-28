class UserCardShadow extends HTMLElement {
  constructor() {
    super();
    this._name = '';
    this._role = '';
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['name', 'role'];
  }

  connectedCallback() {
    this.shadowRoot.addEventListener('click', this._handleClick);
    this.render();
  }

  attributeChangedCallback(_data, _oldValue, _newValue) {
    if (_data === 'name') {
      this._name = _newValue;
    } else if (_data === 'role') {
      this._role = _newValue;
    }
    if (this.isConnected) this.render();
  }

  disconnectedCallback() {
    this.shadowRoot.removeEventListener('click', this._handleClick);
  }

  _handleClick = (e) => {
    if (e.target.closest('#contact-btn')) {
      this.dispatchEvent(
        new CustomEvent('user-contact', {
          detail: { name: this._name, role: this._role },
          bubbles: true,
          composed: true,
        })
      );
    }
  };

  render() {
    this.shadowRoot.innerHTML = `
    <style>
      :host {
        display: block;
        background: var(--card-background, #fff);
        color: var(--card-color, #000);
        border: 1px solid #ccc;
        padding: 1em;
        border-radius: 0.5em;
        max-width: 200px;
      }
      button {
        margin-top: 1em;
        padding: 0.5em 1em;
        background: var(--button-background, #007bff);
        color: var(--button-color, #fff);
        border: none;
        border-radius: 0.25em;
        cursor: pointer;
      }
      button:hover {
        background: var(--button-hover-background, #0056b3);
      }
    </style>
    <p>Name: ${this._name}</p>
    <p>Role: ${this._role}</p>
    <button id="contact-btn">Contact</button>
    `;
  }
}

customElements.define('user-card-shadow', UserCardShadow);
