"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_rsc_apps_terminal_api_route_ts";
exports.ids = ["_rsc_apps_terminal_api_route_ts"];
exports.modules = {

/***/ "(rsc)/./apps/terminal/api/route.ts":
/*!************************************!*\
  !*** ./apps/terminal/api/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! private-next-rsc-server-reference */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! private-next-rsc-action-encryption */ \"(rsc)/./node_modules/next/dist/server/app-render/encryption.js\");\n/* harmony import */ var private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(private_next_rsc_action_encryption__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! private-next-rsc-action-validate */ \"(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js\");\n/* __next_internal_action_entry_do_not_use__ {\"67175e9dd0be03048ff7e2b15b862e0c9ff5ec11\":\"POST\"} */ \n\n\n\nasync function POST(req) {\n    const body = await req.json();\n    const response = (0,child_process__WEBPACK_IMPORTED_MODULE_2__.execSync)(body.command).toString().trim();\n    console.log(response);\n    return next_server__WEBPACK_IMPORTED_MODULE_3__.NextResponse.json({\n        output: response\n    });\n}\n\n(0,private_next_rsc_action_validate__WEBPACK_IMPORTED_MODULE_4__.ensureServerEntryExports)([\n    POST\n]);\n(0,private_next_rsc_server_reference__WEBPACK_IMPORTED_MODULE_0__.registerServerReference)(\"67175e9dd0be03048ff7e2b15b862e0c9ff5ec11\", POST);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHBzL3Rlcm1pbmFsL2FwaS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXlDO0FBQ2U7QUFFakQsZUFBZUUsS0FBS0MsR0FBZ0I7SUFDdkMsTUFBTUMsT0FBTyxNQUFNRCxJQUFJRSxJQUFJO0lBRTNCLE1BQU1DLFdBQVdOLHVEQUFRQSxDQUFDSSxLQUFLRyxPQUFPLEVBQUVDLFFBQVEsR0FBR0MsSUFBSTtJQUN2REMsUUFBUUMsR0FBRyxDQUFDTDtJQUdaLE9BQU9MLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7UUFBRU8sUUFBUU47SUFBUztBQUNoRCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnNlcnYvLi9hcHBzL3Rlcm1pbmFsL2FwaS9yb3V0ZS50cz8xMzUzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJ1xuXG5pbXBvcnQgeyBleGVjU3luYyB9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gZXhlY1N5bmMoYm9keS5jb21tYW5kKS50b1N0cmluZygpLnRyaW0oKTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgXG4gICAgXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgb3V0cHV0OiByZXNwb25zZSB9KVxufSJdLCJuYW1lcyI6WyJleGVjU3luYyIsIk5leHRSZXNwb25zZSIsIlBPU1QiLCJyZXEiLCJib2R5IiwianNvbiIsInJlc3BvbnNlIiwiY29tbWFuZCIsInRvU3RyaW5nIiwidHJpbSIsImNvbnNvbGUiLCJsb2ciLCJvdXRwdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./apps/terminal/api/route.ts\n");

/***/ })

};
;