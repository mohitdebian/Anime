"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/html-dom-parser";
exports.ids = ["vendor-chunks/html-dom-parser"];
exports.modules = {

/***/ "(rsc)/./node_modules/html-dom-parser/index.js":
/*!***********************************************!*\
  !*** ./node_modules/html-dom-parser/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * When running on Node.js, use the server parser.\n * When bundling for the browser, use the client parser.\n *\n * @see {@link https://github.com/substack/node-browserify#browser-field}\n */ \nvar HTMLDOMParser = __webpack_require__(/*! ./lib/server/html-to-dom */ \"(rsc)/./node_modules/html-dom-parser/lib/server/html-to-dom.js\");\nmodule.exports = HTMLDOMParser;\nmodule.exports[\"default\"] = HTMLDOMParser;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaHRtbC1kb20tcGFyc2VyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDO0FBQ0QsSUFBSUEsZ0JBQWdCQyxtQkFBT0EsQ0FBQztBQUU1QkMsT0FBT0MsT0FBTyxHQUFHSDtBQUNqQkUseUJBQXNCLEdBQUdGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5pbWV0cml4Ly4vbm9kZV9tb2R1bGVzL2h0bWwtZG9tLXBhcnNlci9pbmRleC5qcz8zYzMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogV2hlbiBydW5uaW5nIG9uIE5vZGUuanMsIHVzZSB0aGUgc2VydmVyIHBhcnNlci5cbiAqIFdoZW4gYnVuZGxpbmcgZm9yIHRoZSBicm93c2VyLCB1c2UgdGhlIGNsaWVudCBwYXJzZXIuXG4gKlxuICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL3N1YnN0YWNrL25vZGUtYnJvd3NlcmlmeSNicm93c2VyLWZpZWxkfVxuICovXG52YXIgSFRNTERPTVBhcnNlciA9IHJlcXVpcmUoJy4vbGliL3NlcnZlci9odG1sLXRvLWRvbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhUTUxET01QYXJzZXI7XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gSFRNTERPTVBhcnNlcjtcbiJdLCJuYW1lcyI6WyJIVE1MRE9NUGFyc2VyIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/html-dom-parser/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/html-dom-parser/lib/server/html-to-dom.js":
/*!****************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/server/html-to-dom.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar Parser = (__webpack_require__(/*! htmlparser2 */ \"(rsc)/./node_modules/htmlparser2/lib/index.js\").Parser);\nvar DomHandler = (__webpack_require__(/*! domhandler */ \"(rsc)/./node_modules/domhandler/lib/index.js\").DomHandler);\nvar unsetRootParent = (__webpack_require__(/*! ./utilities */ \"(rsc)/./node_modules/html-dom-parser/lib/server/utilities.js\").unsetRootParent);\n/**\n * Parses HTML string to DOM nodes in Node.js.\n *\n * This is the same method as `require('htmlparser2').parseDOM`\n * https://github.com/fb55/htmlparser2/blob/v6.0.0/src/index.ts#L29-L41\n *\n * @param  {string}            html      - HTML markup.\n * @param  {DomHandlerOptions} [options] - Parser options (https://github.com/fb55/domhandler/tree/v4.0.0#readme).\n * @return {Array<Comment|Element|ProcessingInstruction|Text>} - DOM nodes.\n */ function HTMLDOMParser(html, options) {\n    if (typeof html !== \"string\") {\n        throw new TypeError(\"First argument must be a string.\");\n    }\n    if (html === \"\") {\n        return [];\n    }\n    var handler = new DomHandler(undefined, options);\n    new Parser(handler, options).end(html);\n    return unsetRootParent(handler.dom);\n}\nmodule.exports = HTMLDOMParser;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaHRtbC1kb20tcGFyc2VyL2xpYi9zZXJ2ZXIvaHRtbC10by1kb20uanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQUlBLFNBQVNDLGdHQUE2QjtBQUMxQyxJQUFJQyxhQUFhRCxrR0FBZ0M7QUFFakQsSUFBSUUsa0JBQWtCRix3SEFBc0M7QUFFNUQ7Ozs7Ozs7OztDQVNDLEdBQ0QsU0FBU0csY0FBY0MsSUFBSSxFQUFFQyxPQUFPO0lBQ2xDLElBQUksT0FBT0QsU0FBUyxVQUFVO1FBQzVCLE1BQU0sSUFBSUUsVUFBVTtJQUN0QjtJQUVBLElBQUlGLFNBQVMsSUFBSTtRQUNmLE9BQU8sRUFBRTtJQUNYO0lBRUEsSUFBSUcsVUFBVSxJQUFJTixXQUFXTyxXQUFXSDtJQUN4QyxJQUFJTixPQUFPUSxTQUFTRixTQUFTSSxHQUFHLENBQUNMO0lBQ2pDLE9BQU9GLGdCQUFnQkssUUFBUUcsR0FBRztBQUNwQztBQUVBQyxPQUFPQyxPQUFPLEdBQUdUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5pbWV0cml4Ly4vbm9kZV9tb2R1bGVzL2h0bWwtZG9tLXBhcnNlci9saWIvc2VydmVyL2h0bWwtdG8tZG9tLmpzPzg5ZDAiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFBhcnNlciA9IHJlcXVpcmUoJ2h0bWxwYXJzZXIyJykuUGFyc2VyO1xudmFyIERvbUhhbmRsZXIgPSByZXF1aXJlKCdkb21oYW5kbGVyJykuRG9tSGFuZGxlcjtcblxudmFyIHVuc2V0Um9vdFBhcmVudCA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzJykudW5zZXRSb290UGFyZW50O1xuXG4vKipcbiAqIFBhcnNlcyBIVE1MIHN0cmluZyB0byBET00gbm9kZXMgaW4gTm9kZS5qcy5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzYW1lIG1ldGhvZCBhcyBgcmVxdWlyZSgnaHRtbHBhcnNlcjInKS5wYXJzZURPTWBcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYjU1L2h0bWxwYXJzZXIyL2Jsb2IvdjYuMC4wL3NyYy9pbmRleC50cyNMMjktTDQxXG4gKlxuICogQHBhcmFtICB7c3RyaW5nfSAgICAgICAgICAgIGh0bWwgICAgICAtIEhUTUwgbWFya3VwLlxuICogQHBhcmFtICB7RG9tSGFuZGxlck9wdGlvbnN9IFtvcHRpb25zXSAtIFBhcnNlciBvcHRpb25zIChodHRwczovL2dpdGh1Yi5jb20vZmI1NS9kb21oYW5kbGVyL3RyZWUvdjQuMC4wI3JlYWRtZSkuXG4gKiBAcmV0dXJuIHtBcnJheTxDb21tZW50fEVsZW1lbnR8UHJvY2Vzc2luZ0luc3RydWN0aW9ufFRleHQ+fSAtIERPTSBub2Rlcy5cbiAqL1xuZnVuY3Rpb24gSFRNTERPTVBhcnNlcihodG1sLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgaHRtbCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdGaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgc3RyaW5nLicpO1xuICB9XG5cbiAgaWYgKGh0bWwgPT09ICcnKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBuZXcgRG9tSGFuZGxlcih1bmRlZmluZWQsIG9wdGlvbnMpO1xuICBuZXcgUGFyc2VyKGhhbmRsZXIsIG9wdGlvbnMpLmVuZChodG1sKTtcbiAgcmV0dXJuIHVuc2V0Um9vdFBhcmVudChoYW5kbGVyLmRvbSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gSFRNTERPTVBhcnNlcjtcbiJdLCJuYW1lcyI6WyJQYXJzZXIiLCJyZXF1aXJlIiwiRG9tSGFuZGxlciIsInVuc2V0Um9vdFBhcmVudCIsIkhUTUxET01QYXJzZXIiLCJodG1sIiwib3B0aW9ucyIsIlR5cGVFcnJvciIsImhhbmRsZXIiLCJ1bmRlZmluZWQiLCJlbmQiLCJkb20iLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/html-dom-parser/lib/server/html-to-dom.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/html-dom-parser/lib/server/utilities.js":
/*!**************************************************************!*\
  !*** ./node_modules/html-dom-parser/lib/server/utilities.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("/**\n * Sets root parent to null.\n *\n * @param  {Array<Comment|Element|ProcessingInstruction|Text>} nodes\n * @return {Array<Comment|Element|ProcessingInstruction|Text>}\n */ \nfunction unsetRootParent(nodes) {\n    for(var index = 0, len = nodes.length; index < len; index++){\n        var node = nodes[index];\n        node.parent = null;\n    }\n    return nodes;\n}\nmodule.exports = {\n    unsetRootParent: unsetRootParent\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaHRtbC1kb20tcGFyc2VyL2xpYi9zZXJ2ZXIvdXRpbGl0aWVzLmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7OztDQUtDO0FBQ0QsU0FBU0EsZ0JBQWdCQyxLQUFLO0lBQzVCLElBQUssSUFBSUMsUUFBUSxHQUFHQyxNQUFNRixNQUFNRyxNQUFNLEVBQUVGLFFBQVFDLEtBQUtELFFBQVM7UUFDNUQsSUFBSUcsT0FBT0osS0FBSyxDQUFDQyxNQUFNO1FBQ3ZCRyxLQUFLQyxNQUFNLEdBQUc7SUFDaEI7SUFDQSxPQUFPTDtBQUNUO0FBRUFNLE9BQU9DLE9BQU8sR0FBRztJQUNmUixpQkFBaUJBO0FBQ25CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW5pbWV0cml4Ly4vbm9kZV9tb2R1bGVzL2h0bWwtZG9tLXBhcnNlci9saWIvc2VydmVyL3V0aWxpdGllcy5qcz80OTMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU2V0cyByb290IHBhcmVudCB0byBudWxsLlxuICpcbiAqIEBwYXJhbSAge0FycmF5PENvbW1lbnR8RWxlbWVudHxQcm9jZXNzaW5nSW5zdHJ1Y3Rpb258VGV4dD59IG5vZGVzXG4gKiBAcmV0dXJuIHtBcnJheTxDb21tZW50fEVsZW1lbnR8UHJvY2Vzc2luZ0luc3RydWN0aW9ufFRleHQ+fVxuICovXG5mdW5jdGlvbiB1bnNldFJvb3RQYXJlbnQobm9kZXMpIHtcbiAgZm9yICh2YXIgaW5kZXggPSAwLCBsZW4gPSBub2Rlcy5sZW5ndGg7IGluZGV4IDwgbGVuOyBpbmRleCsrKSB7XG4gICAgdmFyIG5vZGUgPSBub2Rlc1tpbmRleF07XG4gICAgbm9kZS5wYXJlbnQgPSBudWxsO1xuICB9XG4gIHJldHVybiBub2Rlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHVuc2V0Um9vdFBhcmVudDogdW5zZXRSb290UGFyZW50XG59O1xuIl0sIm5hbWVzIjpbInVuc2V0Um9vdFBhcmVudCIsIm5vZGVzIiwiaW5kZXgiLCJsZW4iLCJsZW5ndGgiLCJub2RlIiwicGFyZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/html-dom-parser/lib/server/utilities.js\n");

/***/ })

};
;