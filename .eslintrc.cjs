module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: "vue-eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  overrides: [],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "vue/no-mutating-props": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-unused-vars": "warn",
    "no-non-null-assertion": "off",
    "vue/valid-v-for": "off"
  }
}
