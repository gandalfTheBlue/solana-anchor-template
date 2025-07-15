module.exports = {
    env: {
        node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
    },
    plugins: ["@typescript-eslint", "mocha"],
    extends: [
        "eslint:recommended",
        "prettier",
        "plugin:import/typescript",
        "plugin:mocha/recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
    ],
    rules: {
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "variable",
                format: ["camelCase", "UPPER_CASE", "PascalCase"],
            },
        ],
        "eol-last": ["error", "always"],
    },
    ignorePatterns: [".eslintrc.js", "package.json"],
};
