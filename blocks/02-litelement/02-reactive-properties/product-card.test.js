import { describe, expect, beforeEach, afterEach, test } from 'vitest';
import './product-card.js';

describe('product-card', () => {
  let el;

  beforeEach(async () => {
    el = document.createElement('product-card');
    document.body.appendChild(el);
    await el.updateComplete;
  });

  afterEach(() => {
    el.remove();
  });

  test('should render the product name', async () => {
    el.name = 'Product Name';
    await el.updateComplete;
    expect(el.shadowRoot.querySelector('h3').textContent).toBe('Product Name');
  });

  test('should render the price formatted to 2 decimals', async () => {
    el.price = 9.99;
    await el.updateComplete;
    expect(el.shadowRoot.querySelector('.price').textContent).toBe('€9.99');
  });

  test('should show "Sin stock" when inStock is false', async () => {
    el.inStock = false;
    await el.updateComplete;
    expect(el.shadowRoot.querySelector('.stock').textContent).toBe('Sin stock');
  });

  test('should show "En stock" when inStock is true', async () => {
    el.inStock = true;
    await el.updateComplete;
    expect(el.shadowRoot.querySelector('.stock').textContent).toBe('En stock');
  });

  test('should reflect inStock as attribute on the host element', async () => {
    el.inStock = true;
    await el.updateComplete;
    expect(el.hasAttribute('in-stock')).toBe(true);
  });

  test('should remove in-stock attribute when inStock is set to false', async () => {
    el.inStock = true;
    await el.updateComplete;
    el.inStock = false;
    await el.updateComplete;
    expect(el.hasAttribute('in-stock')).toBe(false);
  });

  test('should render one button per tag', async () => {
    el.tags = ['sale', 'new', 'hot'];
    await el.updateComplete;
    expect(el.shadowRoot.querySelectorAll('.tag').length).toBe(3);
  });

  test('should render no tag buttons when tags is empty', async () => {
    el.tags = [];
    await el.updateComplete;
    expect(el.shadowRoot.querySelectorAll('.tag').length).toBe(0);
  });

  test('should mark tag as selected when clicked', async () => {
    el.tags = ['sale', 'new', 'hot'];
    await el.updateComplete;
    el.shadowRoot.querySelectorAll('.tag')[0].click();
    await el.updateComplete;
    expect(el.shadowRoot.querySelectorAll('.tag')[0].classList.contains('selected')).toBe(true);
  });

  test('should deselect tag when same tag is clicked twice', async () => {
    el.tags = ['sale', 'new', 'hot'];
    await el.updateComplete;
    const firstTag = el.shadowRoot.querySelectorAll('.tag')[0];
    firstTag.click();
    await el.updateComplete;
    firstTag.click();
    await el.updateComplete;
    expect(firstTag.classList.contains('selected')).toBe(false);
  });

  test('should show selected tag label when a tag is active', async () => {
    el.tags = ['sale', 'new', 'hot'];
    el._selectedTag = 'new';
    await el.updateComplete;
    expect(el.shadowRoot.querySelector('em').textContent).toBe('new');
  });

  test('should hide selected tag label when no tag is selected', async () => {
    expect(el.shadowRoot.querySelector('em')).toBeNull();
  });

  test('should switch selection when a different tag is clicked', async () => {
    el.tags = ['sale', 'new', 'hot'];
    await el.updateComplete;
    const [first, second] = el.shadowRoot.querySelectorAll('.tag');
    first.click();
    await el.updateComplete;
    second.click();
    await el.updateComplete;
    expect(first.classList.contains('selected')).toBe(false);
    expect(second.classList.contains('selected')).toBe(true);
  });
});
