# is-array

[![](https://flat.badgen.net/npm/v/@ivanhanak_com/is-array?icon=npm)](https://www.npmjs.com/package/@ivanhanak_com/is-array)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/@ivanhanak_com/is-array)](https://www.npmjs.com/package/@ivanhanak_com/is-array)

A simple library for older browsers for checking if an array is an array.

Use this library for really old browsers (if you need) or if you can not use `Array.isArray`.

**Array.isArray** is supported since:
- Chrome 5+
- Edge 12+
- Firefox 4+
- IE9+
- Opera 10.5+
- Safari 5+
- Android WebView 1+
- Chrome for Android 18+
- Firefox for Android 4+
- iOS Safari 5+

 

## Changelog

See the whole [Changelog](/CHANGELOG.md).

## Install

Using npm:

```sh
npm install @ivanhanak_com/is-array
```

Using yarn:

```sh
yarn add @ivanhanak_com/is-array
```

## Import
```javascript
import isArray from '@ivanhanak_com/is-array';
```

## Usage

```javascript
const thisIsArray = isArray([]); // => true
const thisIsNotArray = isArray({}); // => false
```