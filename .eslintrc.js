module.exports =  {
  root: true,

  env: {
    node: true
  },

  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],

  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  rules: {
    "no-unused-vars": process.env.NODE_ENV !== "production" ? "warn" : "error",
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
