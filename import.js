"use strict";
module.exports = {
  plugins: [
    'import'
  ],
  rules: {
    "import/named": "error",
    "import/no-mutable-exports": "error",
    "import/no-webpack-loader-syntax": "warn",
  }
}