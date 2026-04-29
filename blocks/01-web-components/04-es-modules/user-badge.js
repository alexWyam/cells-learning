class UserBadge extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<span>🏷️ Badge cargado dinámicamente</span>`;
  }
}

customElements.define('user-badge', UserBadge);
