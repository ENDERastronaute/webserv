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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAppsAPI: () => (/* binding */ handleAppsAPI)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_spec_extension_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/spec-extension/request */ \"(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/request.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\n\nasync function handleAppsAPI(pathname, req) {\n    const appnameResult = pathname.match(/\\/api\\/application\\/([^/]+)/i);\n    const routeResult = pathname.match(/\\/api\\/application\\/[^/]+\\/(.*)/i);\n    const appname = appnameResult ? appnameResult[1] : \"\";\n    const route = routeResult ? routeResult[1] : \"\";\n    const reqjson = await req.json();\n    const response = await fetch(`${req.nextUrl.origin}/api/custom`, {\n        method: \"POST\",\n        body: JSON.stringify({\n            appname: appname,\n            route: route,\n            req: JSON.stringify({\n                method: req.method,\n                json: reqjson,\n                request: req[next_dist_server_web_spec_extension_request__WEBPACK_IMPORTED_MODULE_0__.INTERNALS]\n            })\n        })\n    });\n    const result = await response.json();\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(result, {\n        status: response.status\n    });\n    try {} catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2xpYi91dGlscy9yb3V0ZXMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3dFO0FBQ2hCO0FBRWpELGVBQWVFLGNBQWNDLFFBQWdCLEVBQUVDLEdBQWdCO0lBQ2xFLE1BQU1DLGdCQUFnQkYsU0FBU0csS0FBSyxDQUFDO0lBQ3JDLE1BQU1DLGNBQWNKLFNBQVNHLEtBQUssQ0FBQztJQUVuQyxNQUFNRSxVQUFVSCxnQkFBZ0JBLGFBQWEsQ0FBQyxFQUFFLEdBQUc7SUFDbkQsTUFBTUksUUFBUUYsY0FBY0EsV0FBVyxDQUFDLEVBQUUsR0FBRztJQUU3QyxNQUFNRyxVQUFVLE1BQU1OLElBQUlPLElBQUk7SUFHOUIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLENBQUMsRUFBRVQsSUFBSVUsT0FBTyxDQUFDQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7UUFDN0RDLFFBQVE7UUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQ2pCWCxTQUFTQTtZQUNUQyxPQUFPQTtZQUNQTCxLQUFLYyxLQUFLQyxTQUFTLENBQUM7Z0JBQ2hCSCxRQUFRWixJQUFJWSxNQUFNO2dCQUNsQkwsTUFBTUQ7Z0JBQ05VLFNBQVNoQixHQUFHLENBQUNKLGtGQUFTQSxDQUFDO1lBQzNCO1FBQ0o7SUFDSjtJQUVBLE1BQU1xQixTQUFTLE1BQU1ULFNBQVNELElBQUk7SUFFbEMsT0FBT1YscURBQVlBLENBQUNVLElBQUksQ0FBQ1UsUUFBUTtRQUFFQyxRQUFRVixTQUFTVSxNQUFNO0lBQUM7SUFFM0QsSUFBSSxDQUVKLEVBQ0EsT0FBTTtRQUNGLE9BQU9yQixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVZLE9BQU87UUFBd0IsR0FBRztZQUFFRCxRQUFRO1FBQUk7SUFDL0U7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL3V0aWxzL3JvdXRlcy9pbmRleC50cz83NWJjIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSU5URVJOQUxTIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvd2ViL3NwZWMtZXh0ZW5zaW9uL3JlcXVlc3RcIjtcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFwcHNBUEkocGF0aG5hbWU6IHN0cmluZywgcmVxOiBOZXh0UmVxdWVzdCkge1xuICAgIGNvbnN0IGFwcG5hbWVSZXN1bHQgPSBwYXRobmFtZS5tYXRjaCgvXFwvYXBpXFwvYXBwbGljYXRpb25cXC8oW14vXSspL2kpO1xuICAgIGNvbnN0IHJvdXRlUmVzdWx0ID0gcGF0aG5hbWUubWF0Y2goL1xcL2FwaVxcL2FwcGxpY2F0aW9uXFwvW14vXStcXC8oLiopL2kpO1xuICAgIFxuICAgIGNvbnN0IGFwcG5hbWUgPSBhcHBuYW1lUmVzdWx0ID8gYXBwbmFtZVJlc3VsdFsxXSA6ICcnO1xuICAgIGNvbnN0IHJvdXRlID0gcm91dGVSZXN1bHQgPyByb3V0ZVJlc3VsdFsxXSA6ICcnO1xuXG4gICAgY29uc3QgcmVxanNvbiA9IGF3YWl0IHJlcS5qc29uKCk7XG4gICAgXG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3JlcS5uZXh0VXJsLm9yaWdpbn0vYXBpL2N1c3RvbWAsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGFwcG5hbWU6IGFwcG5hbWUsXG4gICAgICAgICAgICByb3V0ZTogcm91dGUsXG4gICAgICAgICAgICByZXE6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IHJlcS5tZXRob2QsXG4gICAgICAgICAgICAgICAganNvbjogcmVxanNvbixcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXFbSU5URVJOQUxTXVxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihyZXN1bHQsIHsgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMgfSlcbiAgICBcbiAgICB0cnkge1xuXG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCIgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsiSU5URVJOQUxTIiwiTmV4dFJlc3BvbnNlIiwiaGFuZGxlQXBwc0FQSSIsInBhdGhuYW1lIiwicmVxIiwiYXBwbmFtZVJlc3VsdCIsIm1hdGNoIiwicm91dGVSZXN1bHQiLCJhcHBuYW1lIiwicm91dGUiLCJyZXFqc29uIiwianNvbiIsInJlc3BvbnNlIiwiZmV0Y2giLCJuZXh0VXJsIiwib3JpZ2luIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXF1ZXN0IiwicmVzdWx0Iiwic3RhdHVzIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./src/lib/utils/routes/index.ts\n");

/***/ })

});