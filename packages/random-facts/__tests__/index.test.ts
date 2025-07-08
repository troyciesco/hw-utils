import { describe, it, expect } from 'vitest';
import { getFact } from '../src/index';
import { facts } from '../src/facts';

describe('getFact', () => {
  it('should return a string', () => {
    const fact = getFact();
    expect(typeof fact).toBe('string');
  });

  it('should return a fact from the facts array', () => {
    const fact = getFact();
    expect(facts).toContain(fact);
  });

  it('should return different facts on multiple calls (statistically)', () => {
    const results = new Set();

    // Call getFact many times to increase chance of getting different results
    for (let i = 0; i < 100; i++) {
      results.add(getFact());
    }

    // We should get at least 2 different facts out of 100 calls
    expect(results.size).toBeGreaterThan(1);
  });

  it('should always return a non-empty string', () => {
    for (let i = 0; i < 10; i++) {
      const fact = getFact();
      expect(fact).toBeTruthy();
      expect(fact.length).toBeGreaterThan(0);
    }
  });
}); 