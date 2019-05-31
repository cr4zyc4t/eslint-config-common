"use strict";
module.exports = {
  plugins: [
    'react'
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    "react/jsx-closing-bracket-location": [
      "error",
      "line-aligned"
    ],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-no-bind": "error",
    "react/jsx-pascal-case": [
      "error",
      {
        "allowAllCaps": true,
        "ignore": []
      }
    ],
    "react/jsx-tag-spacing": [
      "error"
    ],
    "react/jsx-wrap-multilines": [
      "error",
      {
        "declaration": "parens-new-line",
        "assignment": "parens-new-line",
        "return": "parens-new-line",
        "arrow": "parens-new-line",
        "condition": "parens-new-line",
        "logical": "ignore",
        "prop": "parens-new-line"
      }
    ],
    "react/no-multi-comp": "off",
    "react/no-string-refs": "error",
    "react/no-unknown-property": "error",
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": false
      }
    ],
    "react/sort-comp": "error",
    "react/no-unused-prop-types": [
      "error"
    ],
  }
}