/* prettier-ignore */

module.exports = {
  extends: [
    './rules/eslint',
    './rules/node',
    './rules/es',
    './rules/imports',
  ].map(require.resolve),
};
