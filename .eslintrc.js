module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true
  },
  rules: {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'linebreak-style': 'off',
    'jsx-one-expression-per-line': 'off'
  },
  globals: {
    fetch: false
  }
};
