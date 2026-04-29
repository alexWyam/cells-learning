import { describe, expect, beforeEach, afterEach, test } from 'vitest';
import './card-layout.js';

describe('card-layout', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('card-layout');
    document.body.appendChild(el);
  });

  afterEach(() => {
    el.remove();
  });

  test('should create a shadow root on connect', () => {
    expect(el.shadowRoot).toBeTruthy();
  });

  test('should project header slot content', () => {
    const headerSlot = el.shadowRoot.querySelector('slot[name="header"]');
    expect(headerSlot).toBeTruthy();
  });

  test('should project body slot content', () => {
    const bodySlot = el.shadowRoot.querySelector('slot[name="body"]');
    expect(bodySlot).toBeTruthy();
  });

  test('should project footer slot content', () => {
    const footerSlot = el.shadowRoot.querySelector('slot[name="footer"]');
    expect(footerSlot).toBeTruthy();
  });

  test('should project default slot content when no slot name is specified', () => {
    const defaultSlot = el.shadowRoot.querySelector('slot:not([name])');
    expect(defaultSlot).toBeTruthy();
  });
});
