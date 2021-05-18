/* prettier-ignore */

module.exports = {
  extends: [
    './rules/eslint',
    './rules/node',
    './rules/es',
    './rules/imports',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
};
