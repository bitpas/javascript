const react = require.resolve('./configs/react');
const typescript = require.resolve('./configs/typescript');

module.exports = {
  extends: [
    '@bitpas/base',
    react,
    typescript,
  ],
};
