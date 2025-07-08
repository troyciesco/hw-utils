import { facts } from './facts';

/**
 * Returns a random dinosaur fact from the internal collection
 * @returns {string} A random dinosaur fact
 */
export function getFact(): string {
  return facts[Math.floor(Math.random() * facts.length)];
} 