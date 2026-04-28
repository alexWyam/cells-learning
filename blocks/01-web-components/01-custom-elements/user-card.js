class UserCard extends HTMLElement {
  constructor() {
    super();
    this._name = '';
    this._role = '';
  }

  static get observedAttributes() {
    return ['name', 'role'];
  }

  connectedCallback() {
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

  disconnectedCallback() {}

  render() {
    this.innerHTML = `
    <p>Name: ${this._name}</p>
    <p>Role: ${this._role}</p>
    <button id="contact-btn">Contact</button>
    `;

    this.querySelector('#contact-btn').addEventListener('click', () => {
      this.dispatchEvent(
        new CustomEvent('user-contact', {
          detail: { name: this._name, role: this._role },
          bubbles: true,
          composed: true,
        })
      );
    });
  }
}

customElements.define('user-card', UserCard);
