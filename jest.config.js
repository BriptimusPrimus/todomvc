module.exports = {
  rootDir: '.',
  testEnvironment: 'jsdom',
  testMatch: ['**/test/**/*.test.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'todomvc/**/*.js',
    '!todomvc/index.js',
    '!todomvc/components/**',
    '!todomvc/lib/state-manager/**'
  ],
  coverageDirectory: './coverage',
  coverageReporters: ['cobertura', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      statements: 40,
      branches: 40,
      functions: 40,
      lines: 40
    }
  }
};
