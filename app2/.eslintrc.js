module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
    },
  },
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['html', 'jsx-a11y', 'react', 'react-hooks', 'prettier'],
  rules: {
    'jsx-a11y/alt-text': 1,
    'arrow-parens': 'off',
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react/display-name': 'off',
    'no-mixed-operators': 'off', // change it to 'warn' or 'error' when need to fix these kind of warnings
    'no-case-declarations': 'warn',
    'import/no-anonymous-default-export': 0,
    'no-unsafe-finally': 'off',
    'no-unused-vars': [
      process.env.NODE_ENV === 'development' ? 'warn' : 'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ], // will ignore any   args starting with underscore
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
    'no-class-assign': 'off',
    'no-extra-semi': 'error',
    'no-useless-escape': 'error',
    'react/no-unescaped-entities': 'warn',
    'jsx-a11y/label-has-for': 'off',
    'react-hooks/rules-of-hooks': 'warn', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'react/no-children-prop': 'warn',
    'react/jsx-no-duplicate-props': 'warn',
    'react/destructuring-assignment': 0,
    'react/no-unused-state': 0,
    'react/jsx-props-no-spreading': 0,
    'prettier/prettier': 'warn',
  },
};
