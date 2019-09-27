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
      statements: 93,
      branches: 73,
      functions: 100,
      lines: 93
    }
  }
};
