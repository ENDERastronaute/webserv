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

/***/ "(middleware)/./src/middleware.ts":
/*!***************************!*\
  !*** ./src/middleware.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var _lib_utils_security_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils/security/auth */ \"(middleware)/./src/lib/utils/security/auth.ts\");\n\n\nasync function middleware(request) {\n    if (request.nextUrl.pathname === \"/\" && await (0,_lib_utils_security_auth__WEBPACK_IMPORTED_MODULE_1__.isAuthenticated)(request)) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/view\", request.url));\n    }\n    if (request.nextUrl.pathname.startsWith(\"/view\") && !await (0,_lib_utils_security_auth__WEBPACK_IMPORTED_MODULE_1__.isAuthenticated)(request)) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/\", request.url));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3dEO0FBQ0k7QUFFN0MsZUFBZUUsV0FBV0MsT0FBb0I7SUFDekQsSUFBSUEsUUFBUUMsT0FBTyxDQUFDQyxRQUFRLEtBQUssT0FBTyxNQUFNSix5RUFBZUEsQ0FBQ0UsVUFBVTtRQUNwRSxPQUFPSCxxREFBWUEsQ0FBQ00sUUFBUSxDQUFDLElBQUlDLElBQUksU0FBU0osUUFBUUssR0FBRztJQUM3RDtJQUVBLElBQUlMLFFBQVFDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDSSxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU1SLHlFQUFlQSxDQUFDRSxVQUFVO1FBQ2pGLE9BQU9ILHFEQUFZQSxDQUFDTSxRQUFRLENBQUMsSUFBSUMsSUFBSSxLQUFLSixRQUFRSyxHQUFHO0lBQ3pEO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGlzQXV0aGVudGljYXRlZCB9IGZyb20gXCJAL2xpYi91dGlscy9zZWN1cml0eS9hdXRoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcbiAgICBpZiAocmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lID09PSAnLycgJiYgYXdhaXQgaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QpKSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnL3ZpZXcnLCByZXF1ZXN0LnVybCkpO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0Lm5leHRVcmwucGF0aG5hbWUuc3RhcnRzV2l0aCgnL3ZpZXcnKSAmJiAhYXdhaXQgaXNBdXRoZW50aWNhdGVkKHJlcXVlc3QpKSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UucmVkaXJlY3QobmV3IFVSTCgnLycsIHJlcXVlc3QudXJsKSk7XG4gICAgfVxufSJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJpc0F1dGhlbnRpY2F0ZWQiLCJtaWRkbGV3YXJlIiwicmVxdWVzdCIsIm5leHRVcmwiLCJwYXRobmFtZSIsInJlZGlyZWN0IiwiVVJMIiwidXJsIiwic3RhcnRzV2l0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});