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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _links_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./links.module.css */ \"(app-pages-browser)/./src/component/navbar/links/links.module.css\");\n/* harmony import */ var _links_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_links_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _navLink_NavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navLink/NavLink */ \"(app-pages-browser)/./src/component/navbar/links/navLink/NavLink.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst links = [\n    {\n        title: \"HomePage\",\n        path: \"/\"\n    },\n    {\n        title: \"About\",\n        path: \"/about\"\n    },\n    {\n        title: \"Contact\",\n        path: \"/contact\"\n    },\n    {\n        title: \"Blog\",\n        path: \"/blog\"\n    }\n];\nconst Links = ()=>{\n    _s();\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //check if the user login temperary\n    const session = true;\n    const isAdmin = true;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_links_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_links_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n            children: [\n                links.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navLink_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        item: link,\n                        id: link.title\n                    }, void 0, false, {\n                        fileName: \"/Users/b23zeng/Desktop/nextjs14/src/component/navbar/links/Links.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, undefined)),\n                session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        isAdmin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navLink_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            item: {\n                                title: \"Admin\",\n                                path: \"/admin\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/b23zeng/Desktop/nextjs14/src/component/navbar/links/Links.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 41\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: (_links_module_css__WEBPACK_IMPORTED_MODULE_2___default().logout),\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/Users/b23zeng/Desktop/nextjs14/src/component/navbar/links/Links.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navLink_NavLink__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    item: {\n                        title: \"login\",\n                        path: \"/login\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/b23zeng/Desktop/nextjs14/src/component/navbar/links/Links.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 25\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/b23zeng/Desktop/nextjs14/src/component/navbar/links/Links.jsx\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/b23zeng/Desktop/nextjs14/src/component/navbar/links/Links.jsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Links, \"xG1TONbKtDWtdOTrXaTAsNhPg/Q=\");\n_c = Links;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Links);\nvar _c;\n$RefreshReg$(_c, \"Links\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnQvbmF2YmFyL2xpbmtzL0xpbmtzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFaUM7QUFDTTtBQUNDO0FBRXhDLE1BQU1HLFFBQVE7SUFDVjtRQUNJQyxPQUFPO1FBQ1BDLE1BQU07SUFDVjtJQUNBO1FBQ0lELE9BQU87UUFDUEMsTUFBTTtJQUNWO0lBQ0E7UUFDSUQsT0FBTztRQUNQQyxNQUFNO0lBQ1Y7SUFDQTtRQUNJRCxPQUFPO1FBQ1BDLE1BQU07SUFDVjtDQUNIO0FBRUQsTUFBTUMsUUFBUTs7SUFFVixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1IsK0NBQVFBLENBQUM7SUFDakMsbUNBQW1DO0lBQ25DLE1BQU1TLFVBQVU7SUFDaEIsTUFBTUMsVUFBVTtJQUVoQixxQkFDSSw4REFBQ0M7UUFBSUMsV0FBV1gsb0VBQWdCO2tCQUM1Qiw0RUFBQ1U7WUFBSUMsV0FBV1gsK0RBQVc7O2dCQUN0QkUsTUFBTVksR0FBRyxDQUFDRCxDQUFBQSxxQkFDUCw4REFBQ1osd0RBQU9BO3dCQUFDYyxNQUFNRjt3QkFBTUcsSUFBSUgsS0FBS1YsS0FBSzs7Ozs7O2dCQUluQ0ssd0JBQ0k7O3dCQUVJQyx5QkFBWSw4REFBQ1Isd0RBQU9BOzRCQUFDYyxNQUFNO2dDQUFDWixPQUFPO2dDQUFTQyxNQUFNOzRCQUFROzs7Ozs7c0NBRTlELDhEQUFDYTs0QkFBT04sV0FBV1gsaUVBQWE7c0NBQUU7Ozs7Ozs7aURBR2xDLDhEQUFDQyx3REFBT0E7b0JBQUNjLE1BQU87d0JBQUNaLE9BQU87d0JBQVNDLE1BQU07b0JBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXZFO0dBN0JNQztLQUFBQTtBQStCTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50L25hdmJhci9saW5rcy9MaW5rcy5qc3g/NThlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vbGlua3MubW9kdWxlLmNzc1wiXG5pbXBvcnQgTmF2TGluayBmcm9tIFwiLi9uYXZMaW5rL05hdkxpbmtcIjtcblxuY29uc3QgbGlua3MgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJIb21lUGFnZVwiLFxuICAgICAgICBwYXRoOiBcIi9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQWJvdXRcIixcbiAgICAgICAgcGF0aDogXCIvYWJvdXRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiQ29udGFjdFwiLFxuICAgICAgICBwYXRoOiBcIi9jb250YWN0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIkJsb2dcIixcbiAgICAgICAgcGF0aDogXCIvYmxvZ1wiLFxuICAgIH0sXG5dO1xuXG5jb25zdCBMaW5rcyA9ICgpID0+IHtcblxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICAvL2NoZWNrIGlmIHRoZSB1c2VyIGxvZ2luIHRlbXBlcmFyeVxuICAgIGNvbnN0IHNlc3Npb24gPSB0cnVlO1xuICAgIGNvbnN0IGlzQWRtaW4gPSB0cnVlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+XG4gICAgICAgICAgICAgICAge2xpbmtzLm1hcChsaW5rID0+IChcbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaXRlbT17bGlua30gaWQ9e2xpbmsudGl0bGV9Lz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICB7LyogaWYgYXV0aGVudGljYXRlZCwgc2VlIHRoZSBsb2dvdXQgYnV0dG9uLCBpZiBhZG1pbiwgc2VlIHRoZSBhZG1pbiBsaW5rLCBpZiBubyB1c2VyLCBzZWUgbG9naW4gKi99XG4gICAgICAgICAgICAgICAgeyBcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBZG1pbiAmJiAoPE5hdkxpbmsgaXRlbT17e3RpdGxlOiBcIkFkbWluXCIsIHBhdGg6IFwiL2FkbWluXCJ9fSAvPilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubG9nb3V0fT5Mb2dvdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaXRlbT0ge3t0aXRsZTogXCJsb2dpblwiLCBwYXRoOiBcIi9sb2dpblwifX0gLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rczsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJOYXZMaW5rIiwibGlua3MiLCJ0aXRsZSIsInBhdGgiLCJMaW5rcyIsIm9wZW4iLCJzZXRPcGVuIiwic2Vzc2lvbiIsImlzQWRtaW4iLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJsaW5rIiwibWFwIiwiaXRlbSIsImlkIiwiYnV0dG9uIiwibG9nb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/component/navbar/links/Links.jsx\n"));

/***/ })

});