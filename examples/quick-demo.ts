#!/usr/bin/env npx ts-node

/**
 * Quick Demo - HW-Utils Random Facts
 * 
 * This script demonstrates the @hw-utils/random-facts package
 * by logging random dinosaur facts to the console.
 * 
 * Usage:
 *   yarn demo
 *   # or
 *   npx ts-node examples/quick-demo.ts
 */

import { getFact } from '@hw-utils/random-facts';

console.log('🦕 HW-Utils Random Facts Demo\n');
console.log('═'.repeat(50));

// Display a single random fact
console.log('\n📖 Random Dinosaur Fact:');
console.log(`"${getFact()}"`);

// Display multiple facts
console.log('\n📚 More Random Facts:');
for (let i = 1; i <= 3; i++) {
  console.log(`${i}. ${getFact()}`);
}

console.log('\n' + '═'.repeat(50));
console.log('✨ Demo complete! Each fact is randomly selected.');
console.log('🔄 Run again to see different facts.');
console.log('\n📦 Package: @hw-utils/random-facts');
console.log('🌐 Repository: https://github.com/hedgewizard-dev/hw-utils'); 