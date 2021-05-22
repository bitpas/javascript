const extensions = ['.js', '.json'];

module.exports = {
  extends: ['plugin:import/recommended'],
  plugins: ['import'],
  settings: {
    'import/extensions': extensions,
    'import/resolver': {
      node: {
        extensions,
      },
    },
  },
};
