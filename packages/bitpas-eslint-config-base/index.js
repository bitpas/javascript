module.exports = {
  extends: [
    './rules/recommended',
    './rules/node',
    './rules/es',
    './rules/imports',
  ].map(require.resolve),
};
