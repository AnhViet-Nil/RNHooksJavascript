module.exports = {
  // root: true,
  // parser: 'babel-eslint',
  env: {
    // jest: true,
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  // globals: {
  //   fetch: false,
  //   __DEV__: 'readonly',
  // },
  extends: [
    // '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
    'plugin:react-native/all',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'prettier/react',
    // 'eslint-config-prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      tsx: true,
      ts: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    'react-native',
    'module-resolver',
    'import',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'always', children: 'always' },
    ],
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'no-use-before-define': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'import/no-cycle': 'warn',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'import/no-extraneous-dependencies': [
      'warn',
      {
        devDependencies: ['storybook/**', '**/**.stories.js', '**/**.test.js'],
      },
    ],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: false },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'ignore',
        custom: 'ignore',
        explicitSpread: 'ignore',
        exceptions: [''],
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
};
