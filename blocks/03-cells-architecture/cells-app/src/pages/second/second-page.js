import { html, LitElement } from 'lit';
import { PageController } from '@open-cells/page-controller';

class SecondPage extends LitElement {
  pageController = new PageController(this);

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <h1>Second</h1>
      <button @click=${() => this.pageController.navigate('home')}>Volver a Home</button>
    `;
  }
}

customElements.define('second-page', SecondPage);
