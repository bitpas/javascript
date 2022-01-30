/* prettier-ignore */

module.exports = {
  extends: [
    './rules/react',
    './rules/react-hooks',
    './rules/jsx-a11y',
    './rules/imports',
  ].map(require.resolve),
};
