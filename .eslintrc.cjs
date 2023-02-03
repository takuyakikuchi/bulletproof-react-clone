module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        // To allow module.exports
        "node": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        /**
         * Fix "React must be in scope when using JSX"
         * @see https://ja.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
         */
        "react/jsx-uses-react": "off",
        "react/react-in-jsx-scope": "off"
    }
}
