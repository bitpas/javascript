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
    'import/first': 'error',
    'import/exports-last': 'off',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        json: 'never',
      },
    ],
    'import/order': 'error',
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'error',
    'import/max-dependencies': 'off',
    'import/no-unassigned-import': 'off',
    'import/no-named-default': 'error',
    'import/no-default-export': 'off',
    'import/no-named-export': 'off',
    'import/no-anonymous-default-export': 'error',
    'import/group-exports': 'off',
    'import/dynamic-import-chunkname': 'off',
  },
};
