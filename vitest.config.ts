import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        '**/*.test.ts',
        '**/*.spec.ts',
        '**/vitest.config.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '@hedgewizard.dev/random-facts': './packages/random-facts/src',
    },
  },
}); 