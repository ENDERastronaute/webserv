"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src/middleware",{

/***/ "(middleware)/./src/lib/utils/routes/index.ts":
/*!***************************************!*\
  !*** ./src/lib/utils/routes/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAppsAPI: () => (/* binding */ handleAppsAPI)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nasync function handleAppsAPI(pathname, req) {\n    const appnameResult = pathname.match(/\\/api\\/application\\/([^/]+)/i);\n    const routeResult = pathname.match(/\\/api\\/application\\/[^/]+\\/(.*)/i);\n    const appname = appnameResult ? appnameResult[1] : \"\";\n    const route = routeResult ? routeResult[1] : \"\";\n    try {} catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2xpYi91dGlscy9yb3V0ZXMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFd0Q7QUFFakQsZUFBZUMsY0FBY0MsUUFBZ0IsRUFBRUMsR0FBZ0I7SUFDbEUsTUFBTUMsZ0JBQWdCRixTQUFTRyxLQUFLLENBQUM7SUFDckMsTUFBTUMsY0FBY0osU0FBU0csS0FBSyxDQUFDO0lBRW5DLE1BQU1FLFVBQVVILGdCQUFnQkEsYUFBYSxDQUFDLEVBQUUsR0FBRztJQUNuRCxNQUFNSSxRQUFRRixjQUFjQSxXQUFXLENBQUMsRUFBRSxHQUFHO0lBRTdDLElBQUksQ0FFSixFQUNBLE9BQU07UUFDRixPQUFPTixxREFBWUEsQ0FBQ1MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBd0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDL0U7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL3V0aWxzL3JvdXRlcy9pbmRleC50cz83NWJjIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSU5URVJOQUxTIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvd2ViL3NwZWMtZXh0ZW5zaW9uL3JlcXVlc3RcIjtcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFwcHNBUEkocGF0aG5hbWU6IHN0cmluZywgcmVxOiBOZXh0UmVxdWVzdCkge1xuICAgIGNvbnN0IGFwcG5hbWVSZXN1bHQgPSBwYXRobmFtZS5tYXRjaCgvXFwvYXBpXFwvYXBwbGljYXRpb25cXC8oW14vXSspL2kpO1xuICAgIGNvbnN0IHJvdXRlUmVzdWx0ID0gcGF0aG5hbWUubWF0Y2goL1xcL2FwaVxcL2FwcGxpY2F0aW9uXFwvW14vXStcXC8oLiopL2kpO1xuICAgIFxuICAgIGNvbnN0IGFwcG5hbWUgPSBhcHBuYW1lUmVzdWx0ID8gYXBwbmFtZVJlc3VsdFsxXSA6ICcnO1xuICAgIGNvbnN0IHJvdXRlID0gcm91dGVSZXN1bHQgPyByb3V0ZVJlc3VsdFsxXSA6ICcnO1xuICAgIFxuICAgIHRyeSB7XG5cbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiB9LCB7IHN0YXR1czogNTAwIH0pXG4gICAgfVxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJoYW5kbGVBcHBzQVBJIiwicGF0aG5hbWUiLCJyZXEiLCJhcHBuYW1lUmVzdWx0IiwibWF0Y2giLCJyb3V0ZVJlc3VsdCIsImFwcG5hbWUiLCJyb3V0ZSIsImpzb24iLCJlcnJvciIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/lib/utils/routes/index.ts\n");

/***/ })

});