"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/kind-of";
exports.ids = ["vendor-chunks/kind-of"];
exports.modules = {

/***/ "(rsc)/./node_modules/kind-of/index.js":
/*!***************************************!*\
  !*** ./node_modules/kind-of/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isBuffer = __webpack_require__(/*! is-buffer */ \"(rsc)/./node_modules/is-buffer/index.js\");\nvar toString = Object.prototype.toString;\n/**\n * Get the native `typeof` a value.\n *\n * @param  {*} `val`\n * @return {*} Native javascript type\n */ module.exports = function kindOf(val) {\n    // primitivies\n    if (typeof val === \"undefined\") {\n        return \"undefined\";\n    }\n    if (val === null) {\n        return \"null\";\n    }\n    if (val === true || val === false || val instanceof Boolean) {\n        return \"boolean\";\n    }\n    if (typeof val === \"string\" || val instanceof String) {\n        return \"string\";\n    }\n    if (typeof val === \"number\" || val instanceof Number) {\n        return \"number\";\n    }\n    // functions\n    if (typeof val === \"function\" || val instanceof Function) {\n        return \"function\";\n    }\n    // array\n    if (typeof Array.isArray !== \"undefined\" && Array.isArray(val)) {\n        return \"array\";\n    }\n    // check for instances of RegExp and Date before calling `toString`\n    if (val instanceof RegExp) {\n        return \"regexp\";\n    }\n    if (val instanceof Date) {\n        return \"date\";\n    }\n    // other objects\n    var type = toString.call(val);\n    if (type === \"[object RegExp]\") {\n        return \"regexp\";\n    }\n    if (type === \"[object Date]\") {\n        return \"date\";\n    }\n    if (type === \"[object Arguments]\") {\n        return \"arguments\";\n    }\n    if (type === \"[object Error]\") {\n        return \"error\";\n    }\n    // buffer\n    if (isBuffer(val)) {\n        return \"buffer\";\n    }\n    // es6: Map, WeakMap, Set, WeakSet\n    if (type === \"[object Set]\") {\n        return \"set\";\n    }\n    if (type === \"[object WeakSet]\") {\n        return \"weakset\";\n    }\n    if (type === \"[object Map]\") {\n        return \"map\";\n    }\n    if (type === \"[object WeakMap]\") {\n        return \"weakmap\";\n    }\n    if (type === \"[object Symbol]\") {\n        return \"symbol\";\n    }\n    // typed arrays\n    if (type === \"[object Int8Array]\") {\n        return \"int8array\";\n    }\n    if (type === \"[object Uint8Array]\") {\n        return \"uint8array\";\n    }\n    if (type === \"[object Uint8ClampedArray]\") {\n        return \"uint8clampedarray\";\n    }\n    if (type === \"[object Int16Array]\") {\n        return \"int16array\";\n    }\n    if (type === \"[object Uint16Array]\") {\n        return \"uint16array\";\n    }\n    if (type === \"[object Int32Array]\") {\n        return \"int32array\";\n    }\n    if (type === \"[object Uint32Array]\") {\n        return \"uint32array\";\n    }\n    if (type === \"[object Float32Array]\") {\n        return \"float32array\";\n    }\n    if (type === \"[object Float64Array]\") {\n        return \"float64array\";\n    }\n    // must be a plain object\n    return \"object\";\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMva2luZC1vZi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsSUFBSUEsV0FBV0MsbUJBQU9BLENBQUM7QUFDdkIsSUFBSUMsV0FBV0MsT0FBT0MsU0FBUyxDQUFDRixRQUFRO0FBRXhDOzs7OztDQUtDLEdBRURHLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxPQUFPQyxHQUFHO0lBQ2xDLGNBQWM7SUFDZCxJQUFJLE9BQU9BLFFBQVEsYUFBYTtRQUM5QixPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxRQUFRLE1BQU07UUFDaEIsT0FBTztJQUNUO0lBQ0EsSUFBSUEsUUFBUSxRQUFRQSxRQUFRLFNBQVNBLGVBQWVDLFNBQVM7UUFDM0QsT0FBTztJQUNUO0lBQ0EsSUFBSSxPQUFPRCxRQUFRLFlBQVlBLGVBQWVFLFFBQVE7UUFDcEQsT0FBTztJQUNUO0lBQ0EsSUFBSSxPQUFPRixRQUFRLFlBQVlBLGVBQWVHLFFBQVE7UUFDcEQsT0FBTztJQUNUO0lBRUEsWUFBWTtJQUNaLElBQUksT0FBT0gsUUFBUSxjQUFjQSxlQUFlSSxVQUFVO1FBQ3hELE9BQU87SUFDVDtJQUVBLFFBQVE7SUFDUixJQUFJLE9BQU9DLE1BQU1DLE9BQU8sS0FBSyxlQUFlRCxNQUFNQyxPQUFPLENBQUNOLE1BQU07UUFDOUQsT0FBTztJQUNUO0lBRUEsbUVBQW1FO0lBQ25FLElBQUlBLGVBQWVPLFFBQVE7UUFDekIsT0FBTztJQUNUO0lBQ0EsSUFBSVAsZUFBZVEsTUFBTTtRQUN2QixPQUFPO0lBQ1Q7SUFFQSxnQkFBZ0I7SUFDaEIsSUFBSUMsT0FBT2YsU0FBU2dCLElBQUksQ0FBQ1Y7SUFFekIsSUFBSVMsU0FBUyxtQkFBbUI7UUFDOUIsT0FBTztJQUNUO0lBQ0EsSUFBSUEsU0FBUyxpQkFBaUI7UUFDNUIsT0FBTztJQUNUO0lBQ0EsSUFBSUEsU0FBUyxzQkFBc0I7UUFDakMsT0FBTztJQUNUO0lBQ0EsSUFBSUEsU0FBUyxrQkFBa0I7UUFDN0IsT0FBTztJQUNUO0lBRUEsU0FBUztJQUNULElBQUlqQixTQUFTUSxNQUFNO1FBQ2pCLE9BQU87SUFDVDtJQUVBLGtDQUFrQztJQUNsQyxJQUFJUyxTQUFTLGdCQUFnQjtRQUMzQixPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxTQUFTLG9CQUFvQjtRQUMvQixPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxTQUFTLGdCQUFnQjtRQUMzQixPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxTQUFTLG9CQUFvQjtRQUMvQixPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxTQUFTLG1CQUFtQjtRQUM5QixPQUFPO0lBQ1Q7SUFFQSxlQUFlO0lBQ2YsSUFBSUEsU0FBUyxzQkFBc0I7UUFDakMsT0FBTztJQUNUO0lBQ0EsSUFBSUEsU0FBUyx1QkFBdUI7UUFDbEMsT0FBTztJQUNUO0lBQ0EsSUFBSUEsU0FBUyw4QkFBOEI7UUFDekMsT0FBTztJQUNUO0lBQ0EsSUFBSUEsU0FBUyx1QkFBdUI7UUFDbEMsT0FBTztJQUNUO0lBQ0EsSUFBSUEsU0FBUyx3QkFBd0I7UUFDbkMsT0FBTztJQUNUO0lBQ0EsSUFBSUEsU0FBUyx1QkFBdUI7UUFDbEMsT0FBTztJQUNUO0lBQ0EsSUFBSUEsU0FBUyx3QkFBd0I7UUFDbkMsT0FBTztJQUNUO0lBQ0EsSUFBSUEsU0FBUyx5QkFBeUI7UUFDcEMsT0FBTztJQUNUO0lBQ0EsSUFBSUEsU0FBUyx5QkFBeUI7UUFDcEMsT0FBTztJQUNUO0lBRUEseUJBQXlCO0lBQ3pCLE9BQU87QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2FuaW1ldHJpeC8uL25vZGVfbW9kdWxlcy9raW5kLW9mL2luZGV4LmpzP2IzNjAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIEdldCB0aGUgbmF0aXZlIGB0eXBlb2ZgIGEgdmFsdWUuXG4gKlxuICogQHBhcmFtICB7Kn0gYHZhbGBcbiAqIEByZXR1cm4geyp9IE5hdGl2ZSBqYXZhc2NyaXB0IHR5cGVcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGtpbmRPZih2YWwpIHtcbiAgLy8gcHJpbWl0aXZpZXNcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICB9XG4gIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICByZXR1cm4gJ251bGwnO1xuICB9XG4gIGlmICh2YWwgPT09IHRydWUgfHwgdmFsID09PSBmYWxzZSB8fCB2YWwgaW5zdGFuY2VvZiBCb29sZWFuKSB7XG4gICAgcmV0dXJuICdib29sZWFuJztcbiAgfVxuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgfHwgdmFsIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgcmV0dXJuICdzdHJpbmcnO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsID09PSAnbnVtYmVyJyB8fCB2YWwgaW5zdGFuY2VvZiBOdW1iZXIpIHtcbiAgICByZXR1cm4gJ251bWJlcic7XG4gIH1cblxuICAvLyBmdW5jdGlvbnNcbiAgaWYgKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicgfHwgdmFsIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIC8vIGFycmF5XG4gIGlmICh0eXBlb2YgQXJyYXkuaXNBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgcmV0dXJuICdhcnJheSc7XG4gIH1cblxuICAvLyBjaGVjayBmb3IgaW5zdGFuY2VzIG9mIFJlZ0V4cCBhbmQgRGF0ZSBiZWZvcmUgY2FsbGluZyBgdG9TdHJpbmdgXG4gIGlmICh2YWwgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gIH1cbiAgaWYgKHZhbCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gJ2RhdGUnO1xuICB9XG5cbiAgLy8gb3RoZXIgb2JqZWN0c1xuICB2YXIgdHlwZSA9IHRvU3RyaW5nLmNhbGwodmFsKTtcblxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgUmVnRXhwXScpIHtcbiAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIHJldHVybiAnZGF0ZSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nKSB7XG4gICAgcmV0dXJuICdhcmd1bWVudHMnO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBFcnJvcl0nKSB7XG4gICAgcmV0dXJuICdlcnJvcic7XG4gIH1cblxuICAvLyBidWZmZXJcbiAgaWYgKGlzQnVmZmVyKHZhbCkpIHtcbiAgICByZXR1cm4gJ2J1ZmZlcic7XG4gIH1cblxuICAvLyBlczY6IE1hcCwgV2Vha01hcCwgU2V0LCBXZWFrU2V0XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBTZXRdJykge1xuICAgIHJldHVybiAnc2V0JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgV2Vha1NldF0nKSB7XG4gICAgcmV0dXJuICd3ZWFrc2V0JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgTWFwXScpIHtcbiAgICByZXR1cm4gJ21hcCc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFdlYWtNYXBdJykge1xuICAgIHJldHVybiAnd2Vha21hcCc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFN5bWJvbF0nKSB7XG4gICAgcmV0dXJuICdzeW1ib2wnO1xuICB9XG5cbiAgLy8gdHlwZWQgYXJyYXlzXG4gIGlmICh0eXBlID09PSAnW29iamVjdCBJbnQ4QXJyYXldJykge1xuICAgIHJldHVybiAnaW50OGFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgVWludDhBcnJheV0nKSB7XG4gICAgcmV0dXJuICd1aW50OGFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJykge1xuICAgIHJldHVybiAndWludDhjbGFtcGVkYXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBJbnQxNkFycmF5XScpIHtcbiAgICByZXR1cm4gJ2ludDE2YXJyYXknO1xuICB9XG4gIGlmICh0eXBlID09PSAnW29iamVjdCBVaW50MTZBcnJheV0nKSB7XG4gICAgcmV0dXJuICd1aW50MTZhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEludDMyQXJyYXldJykge1xuICAgIHJldHVybiAnaW50MzJhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IFVpbnQzMkFycmF5XScpIHtcbiAgICByZXR1cm4gJ3VpbnQzMmFycmF5JztcbiAgfVxuICBpZiAodHlwZSA9PT0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScpIHtcbiAgICByZXR1cm4gJ2Zsb2F0MzJhcnJheSc7XG4gIH1cbiAgaWYgKHR5cGUgPT09ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nKSB7XG4gICAgcmV0dXJuICdmbG9hdDY0YXJyYXknO1xuICB9XG5cbiAgLy8gbXVzdCBiZSBhIHBsYWluIG9iamVjdFxuICByZXR1cm4gJ29iamVjdCc7XG59O1xuIl0sIm5hbWVzIjpbImlzQnVmZmVyIiwicmVxdWlyZSIsInRvU3RyaW5nIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibW9kdWxlIiwiZXhwb3J0cyIsImtpbmRPZiIsInZhbCIsIkJvb2xlYW4iLCJTdHJpbmciLCJOdW1iZXIiLCJGdW5jdGlvbiIsIkFycmF5IiwiaXNBcnJheSIsIlJlZ0V4cCIsIkRhdGUiLCJ0eXBlIiwiY2FsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/kind-of/index.js\n");

/***/ })

};
;