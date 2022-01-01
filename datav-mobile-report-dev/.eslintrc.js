module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],
    parserOptions: {
        parser: "babel-eslint",
    },
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
        "indent": 0,
        "prettier/prettier": 0, //让eslint忽略pretteir的格式化，不发出警告 已经有自动化格式插件
        "no-unused-vars": "off",
        'no-tabs': 0,
        'no-mixed-spaces-and-tabs': 0,
        'indent': ["off", "tab"],
        'no-trailing-spaces': 0,
        "standard/no-callback-literal": 0
    },
};