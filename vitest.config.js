import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'happy-dom',
    include: ['blocks/**/*.test.js', 'sandbox/**/*.test.js'],
    coverage: {
      provider: 'v8',
      // all: false → solo archivos importados por tests, no stubs sin tests
      all: false,
      exclude: ['**/*.test.js'],
      thresholds: {
        lines: 80,
        branches: 80,
      },
      reporter: ['text', 'lcov'],
    },
  },
});
