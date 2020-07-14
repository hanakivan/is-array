const toString = {}.toString;

const isArray = Array.isArray || function (arr) {
    return toString.call(arr) === '[object Array]' && !!arr.join;
};

export default isArray;