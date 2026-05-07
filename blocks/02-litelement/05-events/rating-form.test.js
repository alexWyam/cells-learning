import { describe, expect, beforeEach, afterEach, test } from 'vitest';
import './rating-stars.js';
import './rating-form.js';

describe('rating-form', () => {
  let el;

  beforeEach(async () => {
    el = document.createElement('rating-form');
    document.body.appendChild(el);
    await el.updateComplete;
  });

  afterEach(() => {
    el.remove();
  });

  // --- estado inicial ---

  test('should start with rating 0', async () => {
    expect(el._rating).toBe(0);
  });

  test('should render submit button as disabled when no rating', async () => {
    expect(el.shadowRoot.querySelector('button').disabled).toBe(true);
  });

  // --- _onRatingChange ---

  test('should update _rating when rating-change event is received', async () => {
    el._onRatingChange(new CustomEvent('rating-change', { detail: { rating: 3 } }));
    await el.updateComplete;
    expect(el._rating).toBe(3);
  });

  test('should enable submit button when rating is set', async () => {
    el._rating = 4;
    await el.updateComplete;
    expect(el.shadowRoot.querySelector('button').disabled).toBe(false);
  });

  // --- _submit ---

  test('should show thank you message after submit', async () => {
    el._rating = 5;
    el._submit();
    await el.updateComplete;
    expect(el.shadowRoot.textContent).toContain('¡Gracias!');
  });

  test('should show correct number of stars in thank you message', async () => {
    el._rating = 3;
    el._submit();
    await el.updateComplete;
    expect(el.shadowRoot.textContent).toContain('★★★');
  });

  test('should hide form after submit', async () => {
    el._rating = 4;
    el._submit();
    await el.updateComplete;
    expect(el.shadowRoot.querySelector('button')).toBeNull();
  });
});
