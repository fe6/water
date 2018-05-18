// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true,
    jest: true,
  },
  extends: "airbnb-base",
  // required to lint *.vue files
  plugins: [
    "html",
  ],
  // check if imports actually resolve
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "build/webpack.water.base.conf.js"
      }
    }
  },
  // add your custom rules here
  "rules": {
    // don"t require .vue extension when importing
    "import/extensions": ["error", "always", {
      "js": "never",
      "vue": "never"
    }],
    "spaced-comment": "off",
    "no-dupe-keys": "off",
    "no-console": "off",
    "no-plusplus": "off",
    // allow optionalDependencies
    "import/no-extraneous-dependencies": ["error", {
      "optionalDependencies": ["test/unit/index.js"]
    }],
    "no-param-reassign": ["error", { "props": false }],
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
  }
}
