/*
 * @Author: your name
 * @Date: 2021-09-25 10:44:02
 * @LastEditTime: 2021-09-25 10:44:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \data-screen-study\imooc-datav-report-dev\.eslintrc.js
 */
module.exports = {

  root: true,

  env: {

    browser: true,

    node: true,

    jasmine: true,

    jest: true,

    es6: true,

  },

  parserOptions: {

    parser: 'babel-eslint',

  },

  extends: ['plugin:vue/essential', 'plugin:prettier/recommended'],

  plugins: ['vue', 'prettier'],

  rules: {

    'prettier/prettier': 'error',

    // allow debugger during development

    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

  },

};