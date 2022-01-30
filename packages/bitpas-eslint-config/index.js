const base = require.resolve('./configs/base');
const react = require.resolve('./configs/react');
const typescript = require.resolve('./configs/typescript');

module.exports = {
  extends: [
    base,
    react,
    typescript,
  ],
};
