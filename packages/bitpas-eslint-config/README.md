# @bitpas/eslint-config

**Unstable until v1. Updates may include breaking changes. Use at your own risk.**

Shared ESLint config.

The default export contains all rules for ES2021, React, and TypeScript.

## Installation

1. Install config

```sh
npm install --save-dev @bitpas/eslint-config
```

Manual [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies/) installation may be required depending on your npm version.

> npm versions 1, 2, and 7 will automatically install peerDependencies if they are not explicitly depended upon higher in the dependency tree. For npm versions 3 through 6, you will receive a warning that the peerDependency is not installed instead.

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
npm install --save-dev @typescript-eslint/{parser,eslint-plugin}

```

## Usage

Extend in `.eslintrc.js`

```js:title=.eslintrc.js
module.exports = {
  extends: ['@bitpas/eslint-config'],
};
```
