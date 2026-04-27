import { describe, it, expect } from 'vitest';
import { formatName, getInitials, groupBy } from '../01-jsdoc/utils.js';

describe('formatName', () => {
  it('should capitalize each word when given lowercase input', () => {
    expect(formatName('ada lovelace')).toBe('Ada Lovelace');
  });

  it('should handle single word', () => {
    expect(formatName('ada')).toBe('Ada');
  });

  it('should return empty string when given empty string', () => {
    expect(formatName('')).toBe('');
  });
});

describe('getInitials', () => {
  it('should return two initials when given a full name', () => {
    expect(getInitials('Ada Lovelace')).toBe('AL');
  });

  it('should return one initial when given a single word', () => {
    expect(getInitials('Ada')).toBe('A');
  });

  it('should return only first two initials when given more than two words', () => {
    expect(getInitials('Ada Augusta Lovelace')).toBe('AA');
  });
});

describe('groupBy', () => {
  const users = [
    { id: '1', name: 'Ada', role: 'admin' },
    { id: '2', name: 'Grace', role: 'viewer' },
    { id: '3', name: 'Margaret', role: 'admin' },
  ];

  it('should group items by the key function result', () => {
    const result = groupBy(users, (u) => u.role);
    expect(result.admin).toHaveLength(2);
    expect(result.viewer).toHaveLength(1);
  });

  it('should return empty object when given empty array', () => {
    expect(groupBy([], (x) => x)).toEqual({});
  });

  it('should include all items in the groups', () => {
    const result = groupBy(users, (u) => u.role);
    const total = Object.values(result).flat().length;
    expect(total).toBe(users.length);
  });
});
