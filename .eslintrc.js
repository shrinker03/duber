module.exports = {
  root: true,
  env: {
    browser: true,
    es2023: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier', // Ensures ESLint and Prettier don’t conflict
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks', 'import', 'jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // Show Prettier errors as ESLint errors
    'react/react-in-jsx-scope': 'off', // Not needed in Expo
    'react/prop-types': 'off', // Optional, disable if not using PropTypes
    'import/no-unresolved': 'off', // Avoid import path issues in React Native
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
