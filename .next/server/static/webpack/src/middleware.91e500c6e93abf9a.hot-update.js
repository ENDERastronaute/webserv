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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var _lib_utils_security_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/utils/security/auth */ \"(middleware)/./src/lib/utils/security/auth.ts\");\n\n\nasync function middleware(request) {\n    if (request.nextUrl.pathname === \"/\" && await (0,_lib_utils_security_auth__WEBPACK_IMPORTED_MODULE_1__.isAuthenticated)(request)) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/view\", request.url));\n    }\n    if (request.nextUrl.pathname.startsWith(\"/view\") && !await (0,_lib_utils_security_auth__WEBPACK_IMPORTED_MODULE_1__.isAuthenticated)(request)) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(new URL(\"/\", request.url));\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL21pZGRsZXdhcmUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3dEO0FBQ0k7QUFHN0MsZUFBZUUsV0FBV0MsT0FBb0I7SUFDekQsSUFBSUEsUUFBUUMsT0FBTyxDQUFDQyxRQUFRLEtBQUssT0FBTyxNQUFNSix5RUFBZUEsQ0FBQ0UsVUFBVTtRQUNwRSxPQUFPSCxxREFBWUEsQ0FBQ00sUUFBUSxDQUFDLElBQUlDLElBQUksU0FBU0osUUFBUUssR0FBRztJQUM3RDtJQUVBLElBQUlMLFFBQVFDLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDSSxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU1SLHlFQUFlQSxDQUFDRSxVQUFVO1FBQ2pGLE9BQU9ILHFEQUFZQSxDQUFDTSxRQUFRLENBQUMsSUFBSUMsSUFBSSxLQUFLSixRQUFRSyxHQUFHO0lBQ3pEO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21pZGRsZXdhcmUudHM/ZDE5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGlzQXV0aGVudGljYXRlZCB9IGZyb20gXCJAL2xpYi91dGlscy9zZWN1cml0eS9hdXRoXCI7XG5pbXBvcnQgeyBoYW5kbGVBcHBzQVBJIH0gZnJvbSBcIi4vbGliL3V0aWxzL3JvdXRlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gICAgaWYgKHJlcXVlc3QubmV4dFVybC5wYXRobmFtZSA9PT0gJy8nICYmIGF3YWl0IGlzQXV0aGVudGljYXRlZChyZXF1ZXN0KSkge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy92aWV3JywgcmVxdWVzdC51cmwpKTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdC5uZXh0VXJsLnBhdGhuYW1lLnN0YXJ0c1dpdGgoJy92aWV3JykgJiYgIWF3YWl0IGlzQXV0aGVudGljYXRlZChyZXF1ZXN0KSkge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KG5ldyBVUkwoJy8nLCByZXF1ZXN0LnVybCkpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiaXNBdXRoZW50aWNhdGVkIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJyZWRpcmVjdCIsIlVSTCIsInVybCIsInN0YXJ0c1dpdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/middleware.ts\n");

/***/ })

});