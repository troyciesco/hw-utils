# @hw-utils/random-facts

[![npm version](https://badge.fury.io/js/%40hw-utils%2Frandom-facts.svg)](https://badge.fury.io/js/%40hw-utils%2Frandom-facts)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A simple utility package that provides random dinosaur facts.

## Installation

```bash
npm install @hw-utils/random-facts
```

## Usage

```typescript
import { getFact } from '@hw-utils/random-facts';

// Get a random dinosaur fact
const fact = getFact();
console.log(fact);
// Output: "Tyrannosaurus rex had teeth up to 8 inches long, but they were shaped like bananas rather than sharp knives."

// Get multiple facts
for (let i = 0; i < 3; i++) {
  console.log(`${i + 1}. ${getFact()}`);
}
```

## API

### `getFact(): string`

Returns a random dinosaur fact from an internal collection of 10 facts.

**Returns:** A string containing a random dinosaur fact.

**Example:**
```typescript
const fact = getFact();
console.log(typeof fact); // "string"
console.log(fact.length > 0); // true
```

## Features

- 🦕 10 carefully curated dinosaur facts
- 🎲 Uses `Math.random()` for randomness (no external dependencies)
- 📝 Written in TypeScript with full type definitions
- 🧪 Thoroughly tested with Vitest
- 📦 Zero dependencies
- 🔒 Immutable fact collection

## License

MIT © [Hedgewizard.dev](https://hedgewizard.dev)

## Contributing

This package is part of the [hw-utils](https://github.com/hedgewizard-dev/hw-utils) monorepo. Please see the main repository for contribution guidelines. 