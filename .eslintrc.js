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
    ],
    'no-unused-vars': ['error', { varsIgnorePattern: '^dom$' }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/no-unknown-property': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/label-has-associated-control': 'off'
  }
};
