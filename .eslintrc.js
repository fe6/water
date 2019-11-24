module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    'prettier/vue',
  ],
  plugins: ['@typescript-eslint', 'vue', 'jsx-control-statements', 'prettier'],
  rules: {
    'prettier/prettier': 1,
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        js: 'never',
      },
    ],
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'change',
          'changeHandle',
          'beforeHandle',
          'setTitle',
          'bindKeyUp',
          'setScroll',
          'returnModel',
          'popoverClick',
        ],
      },
    ],
    'no-unused-vars': [
      'error',
      { varsIgnorePattern: '^V|Moment|Entity$|ENUM$' },
    ],
    'no-underscore-dangle': ['error', { allow: ['_componentTag'] }],
    'spaced-comment': 'off',
    'no-dupe-keys': 'off',
    'no-console': 'always',
    'no-plusplus': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: ['test/unit/index.js'],
      },
    ],
    'no-param-reassign': ['error', { props: false }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
