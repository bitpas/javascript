/* prettier-ignore */

module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        './rules/typescript-eslint',
      ].map(require.resolve),
    },
  ],
};
