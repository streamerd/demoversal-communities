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

/***/ "./components/type-ahead.js":
/*!**********************************!*\
  !*** ./components/type-ahead.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Typeahead; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction Typeahead(param) {\n    var dataUrl = param.dataUrl, data_global = param.data_global;\n    _s();\n    if (!dataUrl && !data1) {\n        throw new Error('Typeahead: dataUrl is required');\n    }\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data_global), data1 = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), value = ref1[0], setValue = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), searching = ref3[0], setSearching = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (dataUrl) {\n            setLoading(true);\n            fetch(dataUrl).then(function(res) {\n                return res.json();\n            }).then(function(data) {\n                setData(data);\n                setLoading(false);\n            });\n        }\n    }, []);\n    var onSelect = function(data) {\n        console.log('onSelect', data);\n    };\n    var onSearch = function(searchText) {\n        setValue(searchText);\n        setSearching(true);\n    };\n    var onChange = function(data) {\n        setValue(data);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_2__.AutoComplete, {\n            options: data1,\n            style: {\n                width: 200\n            },\n            value: value,\n            onSelect: onSelect,\n            onSearch: onSearch,\n            placeholder: \"input here\",\n            __source: {\n                fileName: \"/Users/jonsenterfitt/NEODAO/metaverse-arc-diagram/components/type-ahead.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            },\n            __self: this\n        })\n    }));\n};\n_s(Typeahead, \"Usq993hzVjw8B5QNgLxsyJw/llM=\");\n_c = Typeahead;\nvar _c;\n$RefreshReg$(_c, \"Typeahead\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3R5cGUtYWhlYWQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDZjs7QUFHcEIsUUFBUSxDQUFDSSxTQUFTLENBQUMsS0FHakMsRUFBRSxDQUFDO1FBRkFDLE9BQU8sR0FEdUIsS0FHakMsQ0FGR0EsT0FBTyxFQUNQQyxXQUFXLEdBRm1CLEtBR2pDLENBREdBLFdBQVc7O0lBRVgsRUFBRSxHQUFHRCxPQUFPLEtBQUtFLEtBQUksRUFBRSxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxHQUFHLENBQUNDLEtBQUssQ0FBQyxDQUFnQztJQUNwRCxDQUFDO0lBQ0QsR0FBSyxDQUFtQlAsR0FBcUIsR0FBckJBLCtDQUFRLENBQUNLLFdBQVcsR0FBckNDLEtBQUksR0FBYU4sR0FBcUIsS0FBaENRLE9BQU8sR0FBSVIsR0FBcUI7SUFDN0MsR0FBSyxDQUFxQkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBOUJTLEtBQUssR0FBY1QsSUFBWSxLQUF4QlUsUUFBUSxHQUFJVixJQUFZO0lBQ3RDLEdBQUssQ0FBeUJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXJDVyxPQUFPLEdBQWdCWCxJQUFlLEtBQTdCWSxVQUFVLEdBQUlaLElBQWU7SUFDN0MsR0FBSyxDQUE2QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssR0FBekNhLFNBQVMsR0FBa0JiLElBQWUsS0FBL0JjLFlBQVksR0FBSWQsSUFBZTtJQUVqREMsZ0RBQVMsQ0FBQyxRQUNkLEdBRG9CLENBQUM7UUFDYixFQUFFLEVBQUVHLE9BQU8sRUFBRSxDQUFDO1lBQ1ZRLFVBQVUsQ0FBQyxJQUFJO1lBQ2ZHLEtBQUssQ0FBQ1gsT0FBTyxFQUNSWSxJQUFJLENBQUNDLFFBQVEsQ0FBUkEsR0FBRztnQkFBSUEsTUFBTSxDQUFOQSxHQUFHLENBQUNDLElBQUk7ZUFDcEJGLElBQUksQ0FBQ1YsUUFBUSxDQUFSQSxJQUFJLEVBQUksQ0FBQztnQkFDWEUsT0FBTyxDQUFDRixJQUFJO2dCQUNaTSxVQUFVLENBQUMsS0FBSztZQUNwQixDQUFDO1FBQ1QsQ0FBQztJQUNMLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxHQUFLLENBQUNPLFFBQVEsR0FBRyxRQUFRLENBQVBiLElBQUksRUFBSyxDQUFDO1FBQ3hCYyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFVLFdBQUVmLElBQUk7SUFDaEMsQ0FBQztJQUVELEdBQUssQ0FBQ2dCLFFBQVEsR0FBRyxRQUFRLENBQVBDLFVBQVUsRUFBSyxDQUFDO1FBQzlCYixRQUFRLENBQUNhLFVBQVU7UUFDbkJULFlBQVksQ0FBQyxJQUFJO0lBQ3JCLENBQUM7SUFFRCxHQUFLLENBQUNVLFFBQVEsR0FBRyxRQUFRLENBQVBsQixJQUFJLEVBQUssQ0FBQztRQUN4QkksUUFBUSxDQUFDSixJQUFJO0lBQ2pCLENBQUM7SUFDRCxNQUFNO3VGQUVHSiw4Q0FBWTtZQUNUdUIsT0FBTyxFQUFFbkIsS0FBSTtZQUNib0IsS0FBSyxFQUFFLENBQUM7Z0JBQ0pDLEtBQUssRUFBRSxHQUFHO1lBQ2QsQ0FBQztZQUNEbEIsS0FBSyxFQUFFQSxLQUFLO1lBQ1pVLFFBQVEsRUFBRUEsUUFBUTtZQUNsQkcsUUFBUSxFQUFFQSxRQUFRO1lBQ2xCTSxXQUFXLEVBQUMsQ0FBWTs7Ozs7Ozs7O0FBSXhDLENBQUM7R0FsRHVCekIsU0FBUztLQUFUQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdHlwZS1haGVhZC5qcz9iZDhhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXV0b0NvbXBsZXRlIH0gZnJvbSAnYW50ZCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHlwZWFoZWFkKHtcbiAgICBkYXRhVXJsLFxuICAgIGRhdGFfZ2xvYmFsLFxufSkge1xuICAgIGlmICghZGF0YVVybCAmJiAhZGF0YSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1R5cGVhaGVhZDogZGF0YVVybCBpcyByZXF1aXJlZCcpO1xuICAgIH1cbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShkYXRhX2dsb2JhbCk7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzZWFyY2hpbmcsIHNldFNlYXJjaGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoZGF0YVVybCkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIGZldGNoKGRhdGFVcmwpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW10pXG5cbiAgICBjb25zdCBvblNlbGVjdCA9IChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvblNlbGVjdCcsIGRhdGEpO1xuICAgIH07XG5cbiAgICBjb25zdCBvblNlYXJjaCA9IChzZWFyY2hUZXh0KSA9PiB7XG4gICAgICAgIHNldFZhbHVlKHNlYXJjaFRleHQpO1xuICAgICAgICBzZXRTZWFyY2hpbmcodHJ1ZSk7XG4gICAgfVxuXG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoZGF0YSkgPT4ge1xuICAgICAgICBzZXRWYWx1ZShkYXRhKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8QXV0b0NvbXBsZXRlXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17ZGF0YX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgICAgICAgICBvblNlYXJjaD17b25TZWFyY2h9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJpbnB1dCBoZXJlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvPlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkF1dG9Db21wbGV0ZSIsIlR5cGVhaGVhZCIsImRhdGFVcmwiLCJkYXRhX2dsb2JhbCIsImRhdGEiLCJFcnJvciIsInNldERhdGEiLCJ2YWx1ZSIsInNldFZhbHVlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzZWFyY2hpbmciLCJzZXRTZWFyY2hpbmciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwib25TZWxlY3QiLCJjb25zb2xlIiwibG9nIiwib25TZWFyY2giLCJzZWFyY2hUZXh0Iiwib25DaGFuZ2UiLCJvcHRpb25zIiwic3R5bGUiLCJ3aWR0aCIsInBsYWNlaG9sZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/type-ahead.js\n");

/***/ })

});