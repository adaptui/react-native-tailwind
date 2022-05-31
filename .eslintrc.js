module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
    'react-native/react-native': true,
  },
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier', '@react-native-community'],
  rules: {
    'react/prop-types': 'off',
    quotes: ['error', 'single'],
    'prettier/prettier': 'error',
    // React Native Rules
    'react-native/no-unused-styles': "error",
    'react-native/split-platform-components': "off",
    'react-native/no-raw-text': "off"
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};