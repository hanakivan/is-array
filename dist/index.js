"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var toString = {}.toString;

var isArray = Array.isArray || function (arr) {
  return toString.call(arr) === '[object Array]' && !!arr.join;
};

var _default = isArray;
exports.default = _default;