import { describe, expect, beforeEach, afterEach, test, vi } from 'vitest';
import './user-card-shadow.js';

describe('user-card-shadow', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('user-card-shadow');
    document.body.appendChild(el);
  });

  afterEach(() => {
    el.remove();
  });

  test('should render empty name and role by default', () => {
    const shadowContent = el.shadowRoot.innerHTML;
    expect(shadowContent).toContain('Name:');
    expect(shadowContent).toContain('Role:');
  });

  test('should render name inside shadow root when name attribute is set', () => {
    el.setAttribute('name', 'Alice');
    const shadowContent = el.shadowRoot.innerHTML;
    expect(shadowContent).toContain('Name: Alice');
  });

  test('should render role inside shadow root when role attribute is set', () => {
    el.setAttribute('role', 'Engineer');
    const shadowContent = el.shadowRoot.innerHTML;
    expect(shadowContent).toContain('Role: Engineer');
  });

  test('should update rendered name when name attribute changes', () => {
    el.setAttribute('name', 'Alice');
    const shadowContent = el.shadowRoot.innerHTML;
    expect(shadowContent).toContain('Name: Alice');

    el.setAttribute('name', 'Bob');
    const shadowContent2 = el.shadowRoot.innerHTML;
    expect(shadowContent2).toContain('Name: Bob');
  });

  test('should dispatch user-contact event with correct detail when button is clicked', () => {
    el.setAttribute('name', 'Alice');
    el.setAttribute('role', 'Engineer');

    const handler = vi.fn();
    el.addEventListener('user-contact', handler);
    el.shadowRoot.querySelector('#contact-btn').click();

    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail).toEqual({ name: 'Alice', role: 'Engineer' });
  });

  test('should remove click listener when disconnected', () => {
    const handler = vi.fn();
    el.addEventListener('user-contact', handler);
    document.body.removeChild(el);
    el.shadowRoot.querySelector('#contact-btn').click();
    expect(handler).not.toHaveBeenCalled();
  });
});
