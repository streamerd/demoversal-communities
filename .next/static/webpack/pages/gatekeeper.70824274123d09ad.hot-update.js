"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/gatekeeper",{

/***/ "./pages/gatekeeper.js":
/*!*****************************!*\
  !*** ./pages/gatekeeper.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GateKeeper; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_matrix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/matrix.js */ \"./components/matrix.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction GateKeeper() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), address = ref[0], setAddress = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), payload = ref1[0], setPayload = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), ready = ref2[0], setReady = ref2[1];\n    var submitAddress = function() {\n        console.log(address);\n        setReady(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var value = window.location.href;\n        var query_string = window.location.search;\n        var url_params = new URLSearchParams(query_string);\n        var randomContainerName = url_params.get(\"container\");\n        setPayload({\n            \"address\": url_params.get('address'),\n            \"request_id\": randomContainerName,\n            \"token_address\": \"0x0000000000000000000000000000000000000000\",\n            \"date\": new Date().toISOString(),\n            \"name\": \"Metaverse Access Pass\"\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (ready) {\n            // Navigate to {root_url}/access-pass-generator with the address as a query parameter\n            window.location.href = \"\".concat(window.location.origin, \"/access-pass-generator?address=\").concat(address);\n        }\n    }, [\n        ready\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: 'matrix',\n                __source: {\n                    fileName: \"/Users/jonsenterfitt/NEODAO/metaverse-arc-diagram/pages/gatekeeper.js\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                        __source: {\n                            fileName: \"/Users/jonsenterfitt/NEODAO/metaverse-arc-diagram/pages/gatekeeper.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \" GateKeeper \"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                        type: \"text\",\n                        onChange: function(e) {\n                            return setAddress(e.target.value);\n                        },\n                        placeholder: \"Enter metaverse address\",\n                        __source: {\n                            fileName: \"/Users/jonsenterfitt/NEODAO/metaverse-arc-diagram/pages/gatekeeper.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        },\n                        __self: this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"button\",\n                        onClick: function() {\n                            return submitAddress();\n                        },\n                        __source: {\n                            fileName: \"/Users/jonsenterfitt/NEODAO/metaverse-arc-diagram/pages/gatekeeper.js\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        },\n                        __self: this,\n                        children: \"Teleport\"\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_matrix_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                selection: true,\n                __source: {\n                    fileName: \"/Users/jonsenterfitt/NEODAO/metaverse-arc-diagram/pages/gatekeeper.js\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                },\n                __self: this\n            })\n        ]\n    }));\n};\n_s(GateKeeper, \"E9Cad4lYQHEH7iThEbtms7MOV/w=\");\n_c = GateKeeper;\nvar _c;\n$RefreshReg$(_c, \"GateKeeper\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYXRla2VlcGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ0o7O0FBRS9CLFFBQVEsQ0FBQ0ksVUFBVSxHQUFHLENBQUM7O0lBQ3BDLEdBQUssQ0FBeUJILEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXJDSSxPQUFPLEdBQWdCSixHQUFlLEtBQTdCSyxVQUFVLEdBQUlMLEdBQWU7SUFDN0MsR0FBSyxDQUF5QkEsSUFBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBcENNLE9BQU8sR0FBZ0JOLElBQWMsS0FBNUJPLFVBQVUsR0FBSVAsSUFBYztJQUM1QyxHQUFLLENBQXFCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUFqQ1EsS0FBSyxHQUFjUixJQUFlLEtBQTNCUyxRQUFRLEdBQUlULElBQWU7SUFFekMsR0FBSyxDQUFDVSxhQUFhLEdBQUcsUUFDeEIsR0FEOEIsQ0FBQztRQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNSLE9BQU87UUFDbkJLLFFBQVEsQ0FBQyxJQUFJO0lBQ2YsQ0FBQztJQUVEUixnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmLEdBQUssQ0FBQ1ksS0FBSyxHQUFHQyxNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSTtRQUNsQyxHQUFLLENBQUNDLFlBQVksR0FBR0gsTUFBTSxDQUFDQyxRQUFRLENBQUNHLE1BQU07UUFDM0MsR0FBSyxDQUFDQyxVQUFVLEdBQUcsR0FBRyxDQUFDQyxlQUFlLENBQUNILFlBQVk7UUFDbkQsR0FBSyxDQUFDSSxtQkFBbUIsR0FBR0YsVUFBVSxDQUFDRyxHQUFHLENBQUMsQ0FBVztRQUV0RGYsVUFBVSxDQUFDLENBQUM7WUFDUixDQUFTLFVBQUVZLFVBQVUsQ0FBQ0csR0FBRyxDQUFDLENBQVM7WUFDbkMsQ0FBWSxhQUFFRCxtQkFBbUI7WUFDakMsQ0FBZSxnQkFBRSxDQUE0QztZQUM3RCxDQUFNLE9BQUUsR0FBRyxDQUFDRSxJQUFJLEdBQUdDLFdBQVc7WUFDOUIsQ0FBTSxPQUFFLENBQXVCO1FBQ25DLENBQUM7SUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUh2QixnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmLEVBQUUsRUFBRU8sS0FBSyxFQUFFLENBQUM7WUFDVixFQUFxRjtZQUNyRk0sTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksR0FBSSxHQUEwRFosTUFBTyxDQUEvRFUsTUFBTSxDQUFDQyxRQUFRLENBQUNVLE1BQU0sRUFBQyxDQUErQixrQ0FBVSxPQUFSckIsT0FBTztRQUMzRixDQUFDO0lBQ0gsQ0FBQyxFQUFFLENBQUNJO1FBQUFBLEtBQUs7SUFBQSxDQUFDO0lBQ1IsTUFBTTs7a0ZBRUhrQixDQUFHO2dCQUNBQyxTQUFTLEVBQUUsQ0FBUTs7Ozs7Ozs7eUZBQ2hCQyxDQUFFOzs7Ozs7O2tDQUFDLENBQVk7O3lGQUNmQyxDQUFLO3dCQUFDQyxJQUFJLEVBQUMsQ0FBTTt3QkFBQ0MsUUFBUSxFQUFFLFFBQVEsQ0FBUEMsQ0FBQzs0QkFBSzNCLE1BQU0sQ0FBTkEsVUFBVSxDQUFDMkIsQ0FBQyxDQUFDQyxNQUFNLENBQUNwQixLQUFLOzt3QkFBR3FCLFdBQVcsRUFBQyxDQUF5Qjs7Ozs7Ozs7eUZBQ3BHUixDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBUTt3QkFBQ1EsT0FBTyxFQUFFLFFBQVE7NEJBQUZ6QixNQUFNLENBQU5BLGFBQWE7Ozs7Ozs7O2tDQUFJLENBQVE7Ozs7aUZBRWpFUiw2REFBUTtnQkFBQ2tDLFNBQVMsRUFBRSxJQUFJOzs7Ozs7Ozs7O0FBR2pDLENBQUM7R0ExQ3FCakMsVUFBVTtLQUFWQSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dhdGVrZWVwZXIuanM/YjA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hdHJpeEJHIGZyb20gXCIuLi9jb21wb25lbnRzL21hdHJpeC5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYXRlS2VlcGVyKCkge1xuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwYXlsb2FkLCBzZXRQYXlsb2FkXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcmVhZHksIHNldFJlYWR5XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gIGNvbnN0IHN1Ym1pdEFkZHJlc3MgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYWRkcmVzcylcbiAgICBzZXRSZWFkeSh0cnVlKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgY29uc3QgcXVlcnlfc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICBjb25zdCB1cmxfcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeV9zdHJpbmcpO1xuICAgIGNvbnN0IHJhbmRvbUNvbnRhaW5lck5hbWUgPSB1cmxfcGFyYW1zLmdldChcImNvbnRhaW5lclwiKTtcblxuICAgIHNldFBheWxvYWQoe1xuICAgICAgICBcImFkZHJlc3NcIjogdXJsX3BhcmFtcy5nZXQoJ2FkZHJlc3MnKSxcbiAgICAgICAgXCJyZXF1ZXN0X2lkXCI6IHJhbmRvbUNvbnRhaW5lck5hbWUsXG4gICAgICAgIFwidG9rZW5fYWRkcmVzc1wiOiBcIjB4MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMFwiLFxuICAgICAgICBcImRhdGVcIjogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICBcIm5hbWVcIjogXCJNZXRhdmVyc2UgQWNjZXNzIFBhc3NcIlxuICAgIH0pO1xufSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlYWR5KSB7XG4gICAgICAvLyBOYXZpZ2F0ZSB0byB7cm9vdF91cmx9L2FjY2Vzcy1wYXNzLWdlbmVyYXRvciB3aXRoIHRoZSBhZGRyZXNzIGFzIGEgcXVlcnkgcGFyYW1ldGVyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L2FjY2Vzcy1wYXNzLWdlbmVyYXRvcj9hZGRyZXNzPSR7YWRkcmVzc31gO1xuICAgIH1cbiAgfSwgW3JlYWR5XSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXsnbWF0cml4J30+XG4gICAgICAgICAgICA8aDE+IEdhdGVLZWVwZXIgPC9oMT5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9IHBsYWNlaG9sZGVyPVwiRW50ZXIgbWV0YXZlcnNlIGFkZHJlc3NcIiAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzdWJtaXRBZGRyZXNzKCl9PlRlbGVwb3J0PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPE1hdHJpeEJHIHNlbGVjdGlvbj17dHJ1ZX0gLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbiAgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJNYXRyaXhCRyIsIkdhdGVLZWVwZXIiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsInBheWxvYWQiLCJzZXRQYXlsb2FkIiwicmVhZHkiLCJzZXRSZWFkeSIsInN1Ym1pdEFkZHJlc3MiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeV9zdHJpbmciLCJzZWFyY2giLCJ1cmxfcGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwicmFuZG9tQ29udGFpbmVyTmFtZSIsImdldCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsIm9yaWdpbiIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIiwic2VsZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/gatekeeper.js\n");

/***/ })

});