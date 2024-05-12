"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/view/page",{

/***/ "(app-pages-browser)/./src/lib/components/docks/dockIcon/index.tsx":
/*!*****************************************************!*\
  !*** ./src/lib/components/docks/dockIcon/index.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DockIcon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ \"(app-pages-browser)/./src/lib/components/docks/dockIcon/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_hooks_contexts_actionsContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/hooks/contexts/actionsContext */ \"(app-pages-browser)/./src/lib/utils/hooks/contexts/actionsContext.ts\");\n/* harmony import */ var _utils_hooks_contexts_instancesContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/hooks/contexts/instancesContext */ \"(app-pages-browser)/./src/lib/utils/hooks/contexts/instancesContext.ts\");\n/* harmony import */ var _menus_contextMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../menus/contextMenu */ \"(app-pages-browser)/./src/lib/components/menus/contextMenu/index.tsx\");\n/* harmony import */ var _lib_components_menus_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/lib/components/menus/section */ \"(app-pages-browser)/./src/lib/components/menus/section/index.tsx\");\n/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Close */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Close.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction DockIcon(param) {\n    let { app } = param;\n    _s();\n    const allInstances = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_utils_hooks_contexts_instancesContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n    const [instances, setInstances] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [Menu, setMenu] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const menuRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (allInstances) {\n            const filteredInstances = allInstances.instances.filter((instance)=>instance.name === app.name);\n            setInstances(filteredInstances);\n        }\n        (async ()=>{\n            const module = await __webpack_require__(\"(app-pages-browser)/./apps lazy recursive ^\\\\.\\\\/.*$\")(\"./\".concat(app.name.toLocaleLowerCase()));\n            setMenu(module._dockmenu_ ? module._dockmenu_ : null);\n        })();\n    }, [\n        allInstances\n    ]);\n    const actions = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_utils_hooks_contexts_actionsContext__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n    const handleClick = async ()=>{\n        if ((instances === null || instances === void 0 ? void 0 : instances.length) === 0) {\n            const res = await fetch(\"/api/apps/instances\", {\n                method: \"PUT\",\n                body: JSON.stringify({\n                    name: app.name\n                })\n            });\n            const instance = await res.json();\n            actions.open(instance);\n            setInstances([\n                ...instances,\n                instance\n            ]);\n        }\n    };\n    const handleCloseInstance = (evt)=>{\n        evt.preventDefault();\n        const pid = evt.target.id;\n        actions === null || actions === void 0 ? void 0 : actions.close(pid);\n    };\n    const handleMenu = async (evt)=>{\n        evt.preventDefault();\n        menuRef.current.style.display = \"block\";\n    };\n    return instances && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: \"\".concat((_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().article), \" \").concat(instances.length > 0 ? (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().active) : \"\"),\n        onClick: handleClick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().img),\n                src: \"/api/apps/instances/icons/\".concat(app.name.toLowerCase()),\n                alt: \"icon\",\n                width: 64,\n                height: 64,\n                onContextMenu: handleMenu\n            }, void 0, false, {\n                fileName: \"/home/leny/Documents/projects/webserv/src/lib/components/docks/dockIcon/index.tsx\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menus_contextMenu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                menuRef: menuRef,\n                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_3___default().menu),\n                children: Menu ? [\n                    Menu\n                ][0] : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_components_menus_section__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        title: \"instances\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: instances.map((instance, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: [\n                                        instance.name,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: handleCloseInstance,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                id: instance.pid\n                                            }, void 0, false, {\n                                                fileName: \"/home/leny/Documents/projects/webserv/src/lib/components/docks/dockIcon/index.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 53\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/leny/Documents/projects/webserv/src/lib/components/docks/dockIcon/index.tsx\",\n                                            lineNumber: 83,\n                                            columnNumber: 49\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/home/leny/Documents/projects/webserv/src/lib/components/docks/dockIcon/index.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 45\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/home/leny/Documents/projects/webserv/src/lib/components/docks/dockIcon/index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 33\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/leny/Documents/projects/webserv/src/lib/components/docks/dockIcon/index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/leny/Documents/projects/webserv/src/lib/components/docks/dockIcon/index.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 25\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/leny/Documents/projects/webserv/src/lib/components/docks/dockIcon/index.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/leny/Documents/projects/webserv/src/lib/components/docks/dockIcon/index.tsx\",\n        lineNumber: 68,\n        columnNumber: 9\n    }, this);\n}\n_s(DockIcon, \"3zppqiSSsgTLowmrzA7fqruvYqE=\");\n_c = DockIcon;\nvar _c;\n$RefreshReg$(_c, \"DockIcon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvY29tcG9uZW50cy9kb2Nrcy9kb2NrSWNvbi9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFK0I7QUFDK0I7QUFDckI7QUFDeUI7QUFDSTtBQUNwQjtBQUNHO0FBQ0g7QUFNbkMsU0FBU1csU0FBUyxLQUFzQjtRQUF0QixFQUFFQyxHQUFHLEVBQWlCLEdBQXRCOztJQUM3QixNQUFNQyxlQUFlWixpREFBVUEsQ0FBQ00sOEVBQWdCQTtJQUNoRCxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR1gsK0NBQVFBO0lBQzFDLE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBTTtJQUV0QyxNQUFNYyxVQUFVZiw2Q0FBTUEsQ0FBa0I7SUFHeENELGdEQUFTQSxDQUFDO1FBQ04sSUFBSVcsY0FBYztZQUNoQixNQUFNTSxvQkFBb0JOLGFBQWFDLFNBQVMsQ0FBQ00sTUFBTSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLEtBQUtWLElBQUlVLElBQUk7WUFDOUZQLGFBQWFJO1FBQ2Y7UUFFQztZQUNHLE1BQU1JLFNBQVMsTUFBTSw0RUFBTyxLQUFvRCxPQUE3QlgsSUFBSVUsSUFBSSxDQUFDRSxpQkFBaUI7WUFFN0VQLFFBQVFNLE9BQU9FLFVBQVUsR0FBR0YsT0FBT0UsVUFBVSxHQUFHO1FBQ3BEO0lBQ0osR0FBRztRQUFDWjtLQUFhO0lBRWpCLE1BQU1hLFVBQVV6QixpREFBVUEsQ0FBQ0ssNEVBQWNBO0lBRXpDLE1BQU1xQixjQUFjO1FBQ2hCLElBQUliLENBQUFBLHNCQUFBQSxnQ0FBQUEsVUFBV2MsTUFBTSxNQUFLLEdBQUc7WUFDekIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLHVCQUF1QjtnQkFDM0NDLFFBQVE7Z0JBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztvQkFBRVosTUFBTVYsSUFBSVUsSUFBSTtnQkFBQztZQUMxQztZQUVBLE1BQU1ELFdBQVcsTUFBTVEsSUFBSU0sSUFBSTtZQUMvQlQsUUFBU1UsSUFBSSxDQUFDZjtZQUVkTixhQUFhO21CQUFJRDtnQkFBV087YUFBUztRQUN6QztJQUNKO0lBRUEsTUFBTWdCLHNCQUFzQixDQUFDQztRQUN6QkEsSUFBSUMsY0FBYztRQUNsQixNQUFNQyxNQUFNRixJQUFJRyxNQUFNLENBQUNDLEVBQUU7UUFFekJoQixvQkFBQUEsOEJBQUFBLFFBQVNpQixLQUFLLENBQUNIO0lBQ25CO0lBRUEsTUFBTUksYUFBYSxPQUFPTjtRQUN0QkEsSUFBSUMsY0FBYztRQUVsQnJCLFFBQVEyQixPQUFPLENBQUVDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHO0lBQ3JDO0lBRUEsT0FDSWpDLDJCQUNBLDhEQUFDa0M7UUFBUUMsV0FBVyxHQUFxQm5DLE9BQWxCVCxtRUFBYyxFQUFDLEtBQThDLE9BQTNDUyxVQUFXYyxNQUFNLEdBQUcsSUFBSXZCLGtFQUFhLEdBQUc7UUFBTThDLFNBQVN4Qjs7MEJBQzVGLDhEQUFDM0Isa0RBQUtBO2dCQUFDaUQsV0FBVzVDLCtEQUFVO2dCQUFFZ0QsS0FBSyw2QkFBb0QsT0FBdkJ6QyxJQUFJVSxJQUFJLENBQUNnQyxXQUFXO2dCQUFNQyxLQUFJO2dCQUFPQyxPQUFPO2dCQUFJQyxRQUFRO2dCQUFJQyxlQUFlZDs7Ozs7OzBCQUMzSSw4REFBQ3BDLDBEQUFXQTtnQkFBQ1UsU0FBU0E7Z0JBQVMrQixXQUFXNUMsZ0VBQVc7MEJBRTdDVyxPQUNNO29CQUFDQTtpQkFBSyxDQUFDLEVBQUUsaUJBRVgsOERBQUM0Qzs4QkFDRyw0RUFBQ25ELHFFQUFPQTt3QkFBQ29ELE9BQU07a0NBQ1gsNEVBQUNDO3NDQUVPaEQsVUFBVWlELEdBQUcsQ0FBQyxDQUFDMUMsVUFBVTJDLHNCQUNyQiw4REFBQ0M7O3dDQUNJNUMsU0FBU0MsSUFBSTtzREFFZCw4REFBQzRDOzRDQUFPZixTQUFTZDtzREFDYiw0RUFBQzNCLGlFQUFTQTtnREFBQ2dDLElBQUlyQixTQUFTbUIsR0FBRzs7Ozs7Ozs7Ozs7O21DQUoxQndCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJyRDtHQWpGd0JyRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL2NvbXBvbmVudHMvZG9ja3MvZG9ja0ljb24vaW5kZXgudHN4PzllYWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwLCBBcHBJbnN0YW5jZSB9IGZyb20gXCIkdHlwZXNcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBBY3Rpb25zQ29udGV4dCBmcm9tIFwiQHV0aWxzL2hvb2tzL2NvbnRleHRzL2FjdGlvbnNDb250ZXh0XCI7XG5pbXBvcnQgSW5zdGFuY2VzQ29udGV4dCBmcm9tIFwiQHV0aWxzL2hvb2tzL2NvbnRleHRzL2luc3RhbmNlc0NvbnRleHRcIjtcbmltcG9ydCBDb250ZXh0TWVudSBmcm9tIFwiLi4vLi4vbWVudXMvY29udGV4dE1lbnVcIjtcbmltcG9ydCBTZWN0aW9uIGZyb20gXCJAL2xpYi9jb21wb25lbnRzL21lbnVzL3NlY3Rpb25cIjtcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2VcIjtcblxuaW50ZXJmYWNlIERvY2tJY29uUHJvcHMge1xuICAgIGFwcDogQXBwXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY2tJY29uKHsgYXBwIH06IERvY2tJY29uUHJvcHMpIHtcbiAgICBjb25zdCBhbGxJbnN0YW5jZXMgPSB1c2VDb250ZXh0KEluc3RhbmNlc0NvbnRleHQpITtcbiAgICBjb25zdCBbaW5zdGFuY2VzLCBzZXRJbnN0YW5jZXNdID0gdXNlU3RhdGU8QXBwSW5zdGFuY2VbXT4oKTtcbiAgICBjb25zdCBbTWVudSwgc2V0TWVudV0gPSB1c2VTdGF0ZTxhbnk+KG51bGwpO1xuXG4gICAgY29uc3QgbWVudVJlZiA9IHVzZVJlZjxIVE1MTWVudUVsZW1lbnQ+KG51bGwpO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoYWxsSW5zdGFuY2VzKSB7XG4gICAgICAgICAgY29uc3QgZmlsdGVyZWRJbnN0YW5jZXMgPSBhbGxJbnN0YW5jZXMuaW5zdGFuY2VzLmZpbHRlcihpbnN0YW5jZSA9PiBpbnN0YW5jZS5uYW1lID09PSBhcHAubmFtZSk7XG4gICAgICAgICAgc2V0SW5zdGFuY2VzKGZpbHRlcmVkSW5zdGFuY2VzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoYC4uLy4uLy4uLy4uLy4uL2FwcHMvJHthcHAubmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpfWApO1xuXG4gICAgICAgICAgICBzZXRNZW51KG1vZHVsZS5fZG9ja21lbnVfID8gbW9kdWxlLl9kb2NrbWVudV8gOiBudWxsKTtcbiAgICAgICAgfSkoKVxuICAgIH0sIFthbGxJbnN0YW5jZXNdKTtcblxuICAgIGNvbnN0IGFjdGlvbnMgPSB1c2VDb250ZXh0KEFjdGlvbnNDb250ZXh0KTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoaW5zdGFuY2VzPy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2FwcHMvaW5zdGFuY2VzJywge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lOiBhcHAubmFtZSB9KVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgYWN0aW9ucyEub3BlbihpbnN0YW5jZSk7XG5cbiAgICAgICAgICAgIHNldEluc3RhbmNlcyhbLi4uaW5zdGFuY2VzLCBpbnN0YW5jZV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VJbnN0YW5jZSA9IChldnQ6IGFueSkgPT4ge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcGlkID0gZXZ0LnRhcmdldC5pZDtcblxuICAgICAgICBhY3Rpb25zPy5jbG9zZShwaWQpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZU1lbnUgPSBhc3luYyAoZXZ0OiBSZWFjdC5Nb3VzZUV2ZW50PGFueT4pID0+IHtcbiAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbWVudVJlZi5jdXJyZW50IS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIGluc3RhbmNlcyAmJlxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e2Ake3N0eWxlcy5hcnRpY2xlfSAke2luc3RhbmNlcyEubGVuZ3RoID4gMCA/IHN0eWxlcy5hY3RpdmUgOiAnJ31gfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICA8SW1hZ2UgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSBzcmM9e2AvYXBpL2FwcHMvaW5zdGFuY2VzL2ljb25zLyR7YXBwLm5hbWUudG9Mb3dlckNhc2UoKX1gfSBhbHQ9XCJpY29uXCIgd2lkdGg9ezY0fSBoZWlnaHQ9ezY0fSBvbkNvbnRleHRNZW51PXtoYW5kbGVNZW51fT48L0ltYWdlPlxuICAgICAgICAgICAgPENvbnRleHRNZW51IG1lbnVSZWY9e21lbnVSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgTWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbTWVudV1bMF1cbiAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb24gdGl0bGU9XCJpbnN0YW5jZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlcy5tYXAoKGluc3RhbmNlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5zdGFuY2UubmFtZX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZUluc3RhbmNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2xvc2VJY29uIGlkPXtpbnN0YW5jZS5waWR9PjwvQ2xvc2VJY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L0NvbnRleHRNZW51PlxuXG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJBY3Rpb25zQ29udGV4dCIsIkluc3RhbmNlc0NvbnRleHQiLCJDb250ZXh0TWVudSIsIlNlY3Rpb24iLCJDbG9zZUljb24iLCJEb2NrSWNvbiIsImFwcCIsImFsbEluc3RhbmNlcyIsImluc3RhbmNlcyIsInNldEluc3RhbmNlcyIsIk1lbnUiLCJzZXRNZW51IiwibWVudVJlZiIsImZpbHRlcmVkSW5zdGFuY2VzIiwiZmlsdGVyIiwiaW5zdGFuY2UiLCJuYW1lIiwibW9kdWxlIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJfZG9ja21lbnVfIiwiYWN0aW9ucyIsImhhbmRsZUNsaWNrIiwibGVuZ3RoIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJvcGVuIiwiaGFuZGxlQ2xvc2VJbnN0YW5jZSIsImV2dCIsInByZXZlbnREZWZhdWx0IiwicGlkIiwidGFyZ2V0IiwiaWQiLCJjbG9zZSIsImhhbmRsZU1lbnUiLCJjdXJyZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiYXJ0aWNsZSIsImNsYXNzTmFtZSIsImFjdGl2ZSIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJ0b0xvd2VyQ2FzZSIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwib25Db250ZXh0TWVudSIsIm1lbnUiLCJkaXYiLCJ0aXRsZSIsInVsIiwibWFwIiwiaW5kZXgiLCJsaSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/components/docks/dockIcon/index.tsx\n"));

/***/ })

});