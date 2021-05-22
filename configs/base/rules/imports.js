const extensions = ['.js', '.json'];

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
    // Static analysis
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/default': 'off',
    'import/namespace': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'error',

    // Helpful warnings
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'off',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unused-modules': 'off',

    // Style guide
    'import/no-duplicates': 'error',
  },
};
