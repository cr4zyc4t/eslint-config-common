"use strict";
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    "array-bracket-spacing": [
      "error",
      "never"
    ],
    "array-callback-return": "error",
    "brace-style": "error",
    "comma-dangle": [
      "error",
      "always-multiline"
    ],
    "comma-style": [
      "error",
      "last"
    ],
    "generator-star-spacing": [
      "error",
      "after"
    ],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "max-depth": ["error", 4],
    "max-lines": [
      "error",
      {
        "max": 1000,
        "skipBlankLines": true,
        "skipComments": true
      }
    ],
    "max-statements": [
      "error",
      100,
      {
        "ignoreTopLevelFunctions": true
      }
    ],
    "new-cap": [
      "error",
      {
        "capIsNew": false
      }
    ],
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-console": "warn",
    "no-const-assign": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-imports": "error",
    "no-else-return": [
      "error",
      {
        "allowElseIf": true
      }
    ],
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ],
    "no-empty-function": "warn",
    "no-func-assign": "error",
    "no-irregular-whitespace": "off",
    "no-loop-func": "error",
    "no-multi-assign": "error",
    "no-multi-spaces": [
      "error",
      {
        "ignoreEOLComments": true
      }
    ],
    "no-nested-ternary": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-param-reassign": "error",
    "no-unneeded-ternary": "error",
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": true
      }
    ],
    "no-useless-constructor": "error",
    "no-var": [
      "error"
    ],
    "no-whitespace-before-property": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "one-var": [
      "error",
      "never"
    ],
    "prefer-const": "warn",

    "prefer-rest-params": "error",
    "prefer-template": "warn",
    "quotes": [
      "warn",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "space-before-blocks": "error",
    "space-in-parens": [
      "error",
      "never"
    ],
    "space-infix-ops": "error",
    "strict": "off",
    "template-curly-spacing": "error"
  },
};