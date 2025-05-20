module.exports = {
  '*.(js,jsx)': [
    'eslint',
    files => `jest --findRelatedTests --coverageThreshold ${files.join(' ')}`
  ],
  '*.{js,jsx,json,css}': ['prettier --write', 'git add']
};
