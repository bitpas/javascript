module.exports = {
  extends: ['plugin:react/recommended'],
  plugins: ['react'],
  rules: {
    'react/require-default-props': 'error',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
