import { describe, expect, beforeEach, afterEach, test, vi } from 'vitest';
import './user-card.js';

describe('user-card', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('user-card');
    document.body.appendChild(el);
  });

  afterEach(() => {
    el.remove();
  });

  test('should render empty name and role by default', () => {
    expect(el.innerHTML).toContain('Name:');
    expect(el.innerHTML).toContain('Role:');
  });

  test('should render name when name attribute is set', () => {
    el.setAttribute('name', 'Alice');
    expect(el.innerHTML).toContain('Name: Alice');
  });

  test('should render role when role attribute is set', () => {
    el.setAttribute('role', 'Developer');
    expect(el.innerHTML).toContain('Role: Developer');
  });

  test('should update rendered name when name attribute changes', () => {
    el.setAttribute('name', 'Alice');
    expect(el.innerHTML).toContain('Name: Alice');
    el.setAttribute('name', 'Bob');
    expect(el.innerHTML).toContain('Name: Bob');
  });

  test('should dispatch user-contact event with correct detail when button is clicked', () => {
    el.setAttribute('name', 'Alice');
    el.setAttribute('role', 'Developer');

    const handler = vi.fn();
    el.addEventListener('user-contact', handler);
    el.querySelector('#contact-btn').click();

    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail).toEqual({ name: 'Alice', role: 'Developer' });
  });

  test('should remove click listener when disconnected', () => {
    const handler = vi.fn();
    el.addEventListener('user-contact', handler);
    document.body.removeChild(el);
    el.querySelector('#contact-btn').click();
    expect(handler).not.toHaveBeenCalled();
  });
});
