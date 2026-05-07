import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';

class HomePage extends LitElement {
  pageController = new PageController(this);

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <h1>Home</h1>
      <button @click=${() => this.pageController.navigate('second')}>Ir a Second</button>
    `;
  }
}

customElements.define('home-page', HomePage);
