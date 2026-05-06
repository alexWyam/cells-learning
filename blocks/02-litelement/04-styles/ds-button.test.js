import { describe, expect, beforeEach, afterEach, test } from 'vitest';
import './ds-button.js';

describe('ds-button', () => {
  let el;

  beforeEach(async () => {
    el = document.createElement('ds-button');
    document.body.appendChild(el);
    await el.updateComplete;
  });

  afterEach(() => {
    el.remove();
  });

  // --- render ---

  test('should render a button element', async () => {
    expect(el.shadowRoot.querySelector('button')).toBeTruthy();
  });

  test('should render slotted content', async () => {
    el.textContent = 'Click me';
    expect(el.textContent).toBe('Click me');
  });

  // --- variant ---

  test('should reflect variant as attribute on host', async () => {
    el.variant = 'primary';
    await el.updateComplete;
    expect(el.getAttribute('variant')).toBe('primary');
  });

  test('should default variant to "default"', async () => {
    expect(el.variant).toBe('default');
  });

  test('should apply primary variant when variant is "primary"', async () => {
    el.variant = 'primary';
    await el.updateComplete;
    expect(el.getAttribute('variant')).toBe('primary');
  });

  test('should apply danger variant when variant is "danger"', async () => {
    el.variant = 'danger';
    await el.updateComplete;
    expect(el.getAttribute('variant')).toBe('danger');
  });

  // --- disabled ---

  test('should reflect disabled as attribute on host', async () => {
    el.disabled = true;
    await el.updateComplete;
    expect(el.hasAttribute('disabled')).toBe(true);
  });

  test('should set disabled attribute on inner button when disabled is true', async () => {
    el.disabled = true;
    await el.updateComplete;
    expect(el.shadowRoot.querySelector('button').disabled).toBe(true);
  });

  test('should remove disabled from inner button when disabled is false', async () => {
    el.disabled = true;
    await el.updateComplete;
    el.disabled = false;
    await el.updateComplete;
    expect(el.shadowRoot.querySelector('button').disabled).toBe(false);
  });
});
