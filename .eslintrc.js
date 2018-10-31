'use strict'

const plugins = ['react']
const rules = Object.assign({},
  require('./.eslint-rules/adam.json'),
  require('./.eslint-rules/react.json')
)

// # Based on:
//    - https://www.npmjs.com/package/eslint-config-airbnb
//    - https://www.npmjs.com/package/eslint-plugin-react

module.exports = {
  extends: ['airbnb'],

  parser: "babel-eslint",

  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },

  env: {
    browser: true,
    es6: true,
    node: true
  },

  globals: {
    beforeEach: true,
    afterEach: true,
    describe: true,
    it: true,
    React: true,
    ol: true
  },

  plugins,
  rules
}
