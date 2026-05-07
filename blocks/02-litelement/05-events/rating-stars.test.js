import { describe, expect, beforeEach, afterEach, test, vi } from 'vitest';
import './rating-stars.js';

describe('rating-stars', () => {
  let el;

  beforeEach(async () => {
    el = document.createElement('rating-stars');
    document.body.appendChild(el);
    await el.updateComplete;
  });

  afterEach(() => {
    el.remove();
  });

  // --- propiedades ---

  test('should default value to 0', async () => {
    expect(el.value).toBe(0);
  });

  test('should default max to 5', async () => {
    expect(el.max).toBe(5);
  });

  test('should update value when _select is called', async () => {
    el._select(3);
    expect(el.value).toBe(3);
  });

  // --- emisión de evento ---

  test('should dispatch rating-change event when _select is called', async () => {
    const handler = vi.fn();
    el.addEventListener('rating-change', handler);
    el._select(4);
    expect(handler).toHaveBeenCalled();
  });

  test('should emit correct rating in event detail', async () => {
    let capturedRating = null;
    el.addEventListener('rating-change', (e) => {
      capturedRating = e.detail.rating;
    });
    el._select(2);
    expect(capturedRating).toBe(2);
  });

  test('should emit event with bubbles: true', async () => {
    const handler = vi.fn();
    el.addEventListener('rating-change', handler);
    el._select(4);
    expect(handler.mock.calls[0][0].bubbles).toBe(true);
  });

  test('should emit event with composed: true', async () => {
    const handler = vi.fn();
    el.addEventListener('rating-change', handler);
    el._select(4);
    expect(handler.mock.calls[0][0].composed).toBe(true);
  });
});
