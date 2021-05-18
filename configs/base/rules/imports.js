const extensions = ['.js', '.jsx', '.json', '.ts', '.tsx'];

module.exports = {
  extends: ['plugin:import/recommended'],
  settings: {
    'import/resolver': {
      node: {
        extensions,
      },
    },
  },
};
