import { describe, expect, beforeEach, afterEach, test } from 'vitest';
import { formatName, getInitials } from './utils.js';
import './user-card.js';
import './user-badge.js';

describe('utils', () => {
  test('should capitalize each word when given lowercase input', () => {
    expect(formatName('john doe')).toBe('John Doe');
  });

  test('should return two initials when given a full name', () => {
    expect(getInitials('John Doe')).toBe('JD');
  });
});

describe('user-card', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('user-card');
    document.body.appendChild(el);
  });

  afterEach(() => {
    el.remove();
  });

  test('should render formatted name using formatName', () => {
    el.setAttribute('name', 'john doe');
    expect(el.shadowRoot.querySelector('strong').textContent).toBe('John Doe');
  });

  test('should render initials in avatar using getInitials', () => {
    el.setAttribute('name', 'John Doe');
    expect(el.shadowRoot.querySelector('.avatar').textContent).toBe('JD');
  });
});

describe('user-badge', () => {
  let el;

  beforeEach(() => {
    el = document.createElement('user-badge');
    document.body.appendChild(el);
  });

  afterEach(() => {
    el.remove();
  });

  test('should render badge content on connect', () => {
    expect(el.innerHTML).toBe('<span>🏷️ Badge cargado dinámicamente</span>');
  });
});
