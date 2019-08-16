module.exports = {
  rootDir: '.',
  testEnvironment: 'jsdom',
  testMatch: ['**/test/**/*.test.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'todomvc/**/*.js',
    '!todomvc/index.js',
    '!todomvc/lib/state-manager/**'
  ],
  coverageDirectory: './coverage',
  coverageReporters: ['cobertura', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 75,
      functions: 100,
      lines: 95
    }
  }
};
