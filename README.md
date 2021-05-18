# @bitpas/eslint-config

**Unstable until v1. Updates may include breaking changes. Use at your own risk.**

Shared ESLint config.

The default export contains all rules for ES2021, React, and TypeScript.

## Installation

1. Install config

```sh
npm install --save-dev @bitpas/eslint-config
```

2. Install base peer dependencies

```sh
npm install --save-dev eslint eslint-plugin-import
```

3. Install React peer dependencies

```sh
npm install --save-dev eslint-plugin-{react,react-hooks,jsx-a11y}
```

4. Install TypeScript peer dependencies

```sh
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin

```

## Usage

Extend in `.eslintrc`

```js:title=.eslintrc.js
module.exports = {
  extends: [@bitpas/eslint-config],
};
```
