module.exports = {
    extends: [
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:jsx-a11y/recommended",
      "plugin:prettier/recommended"
    ],
    plugins: ["react", "react-hooks", "jsx-a11y", "prettier"],
    rules: {
      "prettier/prettier": "error"
    },
    settings: {
      react: {
        version: "detect"
      }
    }
  };
  