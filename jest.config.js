module.exports = {
  rootDir: '.',
  testEnvironment: 'jsdom',
  testMatch: ['**/test/**/*.test.js'],
  collectCoverage: true,
  collectCoverageFrom: ['todomvc/**/*.js', '!todomvc/index.js'],
  coverageDirectory: './coverage',
  coverageReporters: ['cobertura', 'text', 'lcov'],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 20,
      functions: 40,
      lines: 50
    }
  }
};
