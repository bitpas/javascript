# @bitpas/eslint-config-base

**Unstable until v1. Updates may include breaking changes. Use at your own risk.**

Bitpas' base ESLint configuration.

## Installation

1. Install config

```sh
npm install --save-dev @bitpas/eslint-config-base
```

Manual [peer dependency](https://nodejs.org/en/blog/npm/peer-dependencies/) installation may be required depending on your npm version.

> npm versions 1, 2, and 7 will automatically install peerDependencies if they are not explicitly depended upon higher in the dependency tree. For npm versions 3 through 6, you will receive a warning that the peerDependency is not installed instead.

2. Install base peer dependencies

```sh
npm install --save-dev eslint eslint-plugin-import
```

## Usage

Add `"extends": "@bitpas/base"` to your `.eslintrc`.
