module.exports = {
  extends: ['airbnb', 'prettier'],
  env: {
    browser: true,
    jest: true
  },
  rules: {
    'prefer-object-spread': [0],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/webpack.*.js'] }
    ]
  }
};
