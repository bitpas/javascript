const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];

module.exports = {
  plugins: ['import'],
  settings: {
    'import/extensions': extensions,
    'import/resolver': {
      node: {
        extensions,
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
        json: 'never',
      },
    ],
  },
};
