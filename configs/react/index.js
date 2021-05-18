/* prettier-ignore */

module.exports = {
  extends: [
    './rules/react',
    './rules/react-hooks',
    './rules/jsx-a11y',
  ].map(require.resolve),
};
