module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    semi: "warn",
    "no-unused-vars": "warn",
  },
  ignorePatterns: ["!.eslintrc.js", "!.prettierrc.json"],
};
