import { formatName, getInitials } from './utils.js';

class UserCard extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'role'];
  }

  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  attributeChangedCallback() {
    if (this.shadowRoot) this.render();
  }

  render() {
    const name = this.getAttribute('name') ?? '';
    const role = this.getAttribute('role') ?? '';

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        .card { border: 1px solid #ddd; border-radius: 8px; padding: 1rem; margin: 0.5rem 0; }
        .avatar { width: 40px; height: 40px; border-radius: 50%; background: #6c63ff; color: #fff;
                  display: flex; align-items: center; justify-content: center; font-weight: bold; }
      </style>
      <div class="card">
        <div class="avatar">${getInitials(name)}</div>
        <strong>${formatName(name)}</strong>
        <span>${role}</span>
      </div>
    `;
  }
}

customElements.define('user-card', UserCard);
