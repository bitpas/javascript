/* prettier-ignore */

module.exports = {
  extends: [
    './rules/imports',
  ].map(require.resolve),
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        './rules/typescript-eslint',
      ].map(require.resolve),
    },
  ],
};
