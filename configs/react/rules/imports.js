const extensions = ['.js', '.jsx', '.json'];

module.exports = {
  plugins: ['import'],
  settings: {
    'import/extensions': extensions,
    'import/resolver': {
      node: {
        extensions,
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        json: 'never',
      },
    ],
  },
};
