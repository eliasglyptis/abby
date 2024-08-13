module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: [],
  rules: {
    "no-restricted-globals": "off",
    "prefer-arrow-callback": "off",
    "quotes": "off",
    "indent": "off",
    "no-unused-vars": "off", 
    "max-len": "off", 
  },
  overrides: [{
    files: ["**/*.spec.*"],
    env: {
      mocha: true,
    },
    rules: {},
  }, ],
  globals: {},
};
