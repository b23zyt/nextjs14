"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/component/navbar/links/Links.jsx":
/*!**********************************************!*\
  !*** ./src/component/navbar/links/Links.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _links_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./links.module.css */ \"(app-pages-browser)/./src/component/navbar/links/links.module.css\");\n/* harmony import */ var _links_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_links_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _navLink_NavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navLink/NavLink */ \"(app-pages-browser)/./src/component/navbar/links/navLink/NavLink.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst links = [\n    {\n        title: \"HomePage\",\n        path: \"/\"\n    },\n    {\n        title: \"About\",\n        path: \"/about\"\n    },\n    {\n        title: \"Contact\",\n        path: \"/contact\"\n    },\n    {\n        title: \"Blog\",\n        path: \"/blog\"\n    }\n];\nconst Links = ()=>{\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //check if the user login temperary\n    const session = true;\n    const isAdmin = true;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_links_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n        children: [\n            links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navLink_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    item: link,\n                    id: link.title\n                }, void 0, false, {\n                    fileName: \"/Users/b23zeng/Desktop/nextjs14/src/component/navbar/links/Links.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, undefined)),\n            session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    isAdmin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navLink_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        item: {\n                            title: \"Admin\",\n                            path: \"/admin\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/b23zeng/Desktop/nextjs14/src/component/navbar/links/Links.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 37\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_links_module_css__WEBPACK_IMPORTED_MODULE_2___default().logout),\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"/Users/b23zeng/Desktop/nextjs14/src/component/navbar/links/Links.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navLink_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                item: {\n                    title: \"login\",\n                    path: \"/login\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/b23zeng/Desktop/nextjs14/src/component/navbar/links/Links.jsx\",\n                lineNumber: 48,\n                columnNumber: 21\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/b23zeng/Desktop/nextjs14/src/component/navbar/links/Links.jsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Links, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c = Links;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Links);\nvar _c;\n$RefreshReg$(_c, \"Links\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvbmF2YmFyL2xpbmtzL0xpbmtzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFaUM7QUFDTTtBQUNDO0FBRXhDLE1BQU1HLFFBQVE7SUFDVjtRQUNJQyxPQUFPO1FBQ1BDLE1BQU07SUFDVjtJQUNBO1FBQ0lELE9BQU87UUFDUEMsTUFBTTtJQUNWO0lBQ0E7UUFDSUQsT0FBTztRQUNQQyxNQUFNO0lBQ1Y7SUFDQTtRQUNJRCxPQUFPO1FBQ1BDLE1BQU07SUFDVjtDQUNIO0FBRUQsTUFBTUMsUUFBUTs7SUFFVixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7SUFDakMsbUNBQW1DO0lBQ25DLE1BQU1TLFVBQVU7SUFDaEIsTUFBTUMsVUFBVTtJQUVoQixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBV1gsK0RBQVc7O1lBQ3RCRSxNQUFNVyxHQUFHLENBQUNELENBQUFBLHFCQUNQLDhEQUFDWCx3REFBT0E7b0JBQUNhLE1BQU1GO29CQUFNRyxJQUFJSCxLQUFLVCxLQUFLOzs7Ozs7WUFJbkNLLHdCQUNJOztvQkFFSUMseUJBQVksOERBQUNSLHdEQUFPQTt3QkFBQ2EsTUFBTTs0QkFBQ1gsT0FBTzs0QkFBU0MsTUFBTTt3QkFBUTs7Ozs7O2tDQUU5RCw4REFBQ1k7d0JBQU9MLFdBQVdYLGlFQUFhO2tDQUFFOzs7Ozs7OzZDQUdsQyw4REFBQ0Msd0RBQU9BO2dCQUFDYSxNQUFPO29CQUFDWCxPQUFPO29CQUFTQyxNQUFNO2dCQUFROzs7Ozs7Ozs7Ozs7QUFLbkU7R0EzQk1DO0tBQUFBO0FBNkJOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnQvbmF2YmFyL2xpbmtzL0xpbmtzLmpzeD81OGU5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9saW5rcy5tb2R1bGUuY3NzXCJcbmltcG9ydCBOYXZMaW5rIGZyb20gXCIuL25hdkxpbmsvTmF2TGlua1wiO1xuXG5jb25zdCBsaW5rcyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkhvbWVQYWdlXCIsXG4gICAgICAgIHBhdGg6IFwiL1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJBYm91dFwiLFxuICAgICAgICBwYXRoOiBcIi9hYm91dFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJDb250YWN0XCIsXG4gICAgICAgIHBhdGg6IFwiL2NvbnRhY3RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQmxvZ1wiLFxuICAgICAgICBwYXRoOiBcIi9ibG9nXCIsXG4gICAgfSxcbl07XG5cbmNvbnN0IExpbmtzID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIC8vY2hlY2sgaWYgdGhlIHVzZXIgbG9naW4gdGVtcGVyYXJ5XG4gICAgY29uc3Qgc2Vzc2lvbiA9IHRydWU7XG4gICAgY29uc3QgaXNBZG1pbiA9IHRydWU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9PlxuICAgICAgICAgICAge2xpbmtzLm1hcChsaW5rID0+IChcbiAgICAgICAgICAgICAgICA8TmF2TGluayBpdGVtPXtsaW5rfSBpZD17bGluay50aXRsZX0vPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7LyogaWYgYXV0aGVudGljYXRlZCwgc2VlIHRoZSBsb2dvdXQgYnV0dG9uLCBpZiBhZG1pbiwgc2VlIHRoZSBhZG1pbiBsaW5rLCBpZiBubyB1c2VyLCBzZWUgbG9naW4gKi99XG4gICAgICAgICAgICB7IFxuICAgICAgICAgICAgICAgIHNlc3Npb24gPyAoXG4gICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQWRtaW4gJiYgKDxOYXZMaW5rIGl0ZW09e3t0aXRsZTogXCJBZG1pblwiLCBwYXRoOiBcIi9hZG1pblwifX0gLz4pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvdXR9PkxvZ291dDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBpdGVtPSB7e3RpdGxlOiBcImxvZ2luXCIsIHBhdGg6IFwiL2xvZ2luXCJ9fSAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua3M7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiTmF2TGluayIsImxpbmtzIiwidGl0bGUiLCJwYXRoIiwiTGlua3MiLCJvcGVuIiwic2V0T3BlbiIsInNlc3Npb24iLCJpc0FkbWluIiwiZGl2IiwiY2xhc3NOYW1lIiwibGluayIsIm1hcCIsIml0ZW0iLCJpZCIsImJ1dHRvbiIsImxvZ291dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/navbar/links/Links.jsx\n"));

/***/ })

});