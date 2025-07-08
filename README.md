# HW-Utils

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://github.com/hedgewizard-dev/hw-utils/workflows/CI/badge.svg)](https://github.com/hedgewizard-dev/hw-utils/actions)
[![Coverage Status](https://coveralls.io/repos/github/hedgewizard-dev/hw-utils/badge.svg?branch=main)](https://coveralls.io/github/hedgewizard-dev/hw-utils?branch=main)

A collection of utility packages for [Hedgewizard.dev](https://hedgewizard.dev).

## 📦 Packages

| Package | Version | Description |
|---------|---------|-------------|
| [@hw-utils/random-facts](./packages/random-facts) | ![npm](https://img.shields.io/npm/v/@hw-utils/random-facts) | Random dinosaur facts generator |

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- Yarn >= 1.22.0

### Installation

```bash
# Clone the repository
git clone https://github.com/hedgewizard-dev/hw-utils.git
cd hw-utils

# Install dependencies and bootstrap packages
yarn setup
```

### Development

```bash
# Run tests across all packages
yarn test

# Lint all packages
yarn lint

# Build all packages
yarn build

# Clean node_modules across all packages
yarn clean
```

## 🏗️ Architecture

This monorepo is managed using [Lerna](https://lerna.js.org/) with [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) in independent versioning mode.

```
hw-utils/
├── packages/
│   └── random-facts/          # @hw-utils/random-facts
├── examples/                  # Usage examples
├── package.json              # Root package configuration
├── lerna.json               # Lerna configuration
└── README.md               # This file
```

## 📝 License

MIT © [Hedgewizard.dev](https://hedgewizard.dev)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests. 