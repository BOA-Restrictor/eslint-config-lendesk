module.exports = {
  parser: 'babel-eslint',
  env: {
    'browser': true,
    'node': true,
    'es6': true
  },
  parserOptions: {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
        'jsx': true,
        'impliedStrict': true
    }
  },
  plugins: ['react'],
  settings: {
    react: {
      version: '15.1'
    }
  },
  rules: {
    'max-nested-callbacks': [2, 2],
    'no-undef': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/display-name': 2,
    'react/jsx-no-undef': 2,
    'react/no-deprecated': 2,
    'react/require-render-return': 2,
    'no-eval': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-invalid-regexp': 2,
    'valid-typeof': 2,
    'no-unreachable': 2,
    'no-const-assign': 2,
    'strict': [2, 'never'],
    'semi': [1, 'always'],
    'no-extra-semi': 1,
    'no-empty': 1,
    'camelcase': [1, { 'properties': 'never' }],
    'quotes': [1, 'single', 'avoid-escape'],
    'no-fallthrough': 1,
    'max-len': [1, 150, 4, { 'ignoreComments': true, 'ignoreUrls': true }],
    'no-implied-eval': 1,
    'array-bracket-spacing': [1, 'never'],
    'object-curly-spacing': [1, 'always'],
    'comma-spacing': [1, { 'before': false, 'after': true }],
    'comma-dangle': [1, 'never'],
    'no-trailing-spaces': 1,
    'no-unused-vars': [1, { 'argsIgnorePattern': '^_' }],
    'keyword-spacing': [1, { 'before': true, 'after': true, 'overrides': {} }],
    'space-before-blocks': 1,
    'spaced-comment': 1,
    'dot-location': [1, 'property'],
    'newline-per-chained-call': [1, { 'ignoreChainWithDepth': 3 }],
    'no-multiple-empty-lines': [1, { 'max': 2 }],
    'no-redeclare': 1,
    'jsx-quotes': [1, 'prefer-single'],
    'react/jsx-boolean-value': 1,
    'react/jsx-curly-spacing': 1,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-danger': 1,
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-multi-comp': 1,
    'react/no-unknown-property': 1,
    'react/prop-types': [1, { ignore: ['children'] }],
    'react/react-in-jsx-scope': 1,
    'react/require-extension': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': [1, {
      'order': [
        'constructor',
        'lifecycle',
        'everything-else',
        'render'
      ]
    }],
    'react/wrap-multilines': 1,
    'no-case-declarations': 1,
    'no-sparse-arrays': 1,
    'no-self-assign': 1,
    'no-lonely-if': 0,
    'no-underscore-dangle': 0,
    'no-console': 0,
    'valid-jsdoc': 0,
    'react/jsx-sort-prop-types': 0,
    'no-extra-boolean-cast': 0,
    'react/jsx-sort-props': 0,
    'space-before-function-paren': 0
  },
  globals: {
    'browser': false,
    'context': false,
    'require': false,
    'navigator': false,
    'Promise': false,
    'ActiveXObject': false,
    'Bugsnag': false,
    'google': false,
    'heap': false,
    'ga': false
  }
};
