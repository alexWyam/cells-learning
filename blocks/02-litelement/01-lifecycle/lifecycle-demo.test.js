import { describe, expect, beforeEach, afterEach, test } from 'vitest';
import './lifecycle-demo.js';

describe('lifecycle-demo', () => {
  let el;

  beforeEach(async () => {
    el = document.createElement('lifecycle-demo');
    document.body.appendChild(el);
    await el.updateComplete;
  });

  afterEach(() => {
    el.remove();
  });

  test('should log constructor and connectedCallback on creation', () => {
    expect(el.logs.slice(0, 2)).toEqual(['constructor', 'connectedCallback']);
  });

  test('should log firstUpdated after first render', () => {
    expect(el.logs).toContain('firstUpdated');
  });

  test('should log updated with changed property name when count changes', async () => {
    el.count = 5;
    await el.updateComplete;
    expect(el.logs).toContain('updated (changed: count)');
  });

  test('should increment count when button is clicked', async () => {
    const button = el.shadowRoot.querySelector('button');
    button.click();
    await el.updateComplete;
    expect(el.count).toBe(1);
    expect(el.logs).toContain('updated (changed: count)');
  });

  test('should log disconnectedCallback when removed from DOM', () => {
    el.remove();
    expect(el.logs).toContain('disconnectedCallback');
  });

  test('should preserve count when reconnected to DOM', async () => {
    el.count = 3;
    await el.updateComplete;
    el.remove();
    document.body.appendChild(el);
    await el.updateComplete;
    expect(el.count).toBe(3);
  });
});
