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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAppsAPI: () => (/* binding */ handleAppsAPI)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_spec_extension_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/spec-extension/request */ \"(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/request.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\n\nasync function handleAppsAPI(pathname, req) {\n    const appnameResult = pathname.match(/\\/api\\/application\\/([^/]+)/i);\n    const routeResult = pathname.match(/\\/api\\/application\\/[^/]+\\/(.*)/i);\n    const appname = appnameResult ? appnameResult[1] : \"\";\n    const route = routeResult ? routeResult[1] : \"\";\n    console.log(req);\n    try {\n        const response = await fetch(`${req.nextUrl.origin}/api/custom`, {\n            method: \"POST\",\n            body: JSON.stringify({\n                appname: appname,\n                route: route,\n                req: req[next_dist_server_web_spec_extension_request__WEBPACK_IMPORTED_MODULE_0__.INTERNALS]\n            })\n        });\n        const result = await response.json();\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(result, {\n            status: response.status\n        });\n    } catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2xpYi91dGlscy9yb3V0ZXMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdFO0FBQ2hCO0FBRWpELGVBQWVFLGNBQWNDLFFBQWdCLEVBQUVDLEdBQWdCO0lBQ2xFLE1BQU1DLGdCQUFnQkYsU0FBU0csS0FBSyxDQUFDO0lBQ3JDLE1BQU1DLGNBQWNKLFNBQVNHLEtBQUssQ0FBQztJQUVuQyxNQUFNRSxVQUFVSCxnQkFBZ0JBLGFBQWEsQ0FBQyxFQUFFLEdBQUc7SUFDbkQsTUFBTUksUUFBUUYsY0FBY0EsV0FBVyxDQUFDLEVBQUUsR0FBRztJQUU3Q0csUUFBUUMsR0FBRyxDQUFDUDtJQUdaLElBQUk7UUFDQSxNQUFNUSxXQUFXLE1BQU1DLE1BQU0sQ0FBQyxFQUFFVCxJQUFJVSxPQUFPLENBQUNDLE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM3REMsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ2pCWCxTQUFTQTtnQkFDVEMsT0FBT0E7Z0JBQ1BMLEtBQUtBLEdBQUcsQ0FBQ0osa0ZBQVNBLENBQUM7WUFDdkI7UUFDSjtRQUVBLE1BQU1vQixTQUFTLE1BQU1SLFNBQVNTLElBQUk7UUFFbEMsT0FBT3BCLHFEQUFZQSxDQUFDb0IsSUFBSSxDQUFDRCxRQUFRO1lBQUVFLFFBQVFWLFNBQVNVLE1BQU07UUFBQztJQUMvRCxFQUNBLE9BQU07UUFDRixPQUFPckIscURBQVlBLENBQUNvQixJQUFJLENBQUM7WUFBRUUsT0FBTztRQUF3QixHQUFHO1lBQUVELFFBQVE7UUFBSTtJQUMvRTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvdXRpbHMvcm91dGVzL2luZGV4LnRzPzc1YmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU5URVJOQUxTIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvd2ViL3NwZWMtZXh0ZW5zaW9uL3JlcXVlc3RcIjtcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFwcHNBUEkocGF0aG5hbWU6IHN0cmluZywgcmVxOiBOZXh0UmVxdWVzdCkge1xuICAgIGNvbnN0IGFwcG5hbWVSZXN1bHQgPSBwYXRobmFtZS5tYXRjaCgvXFwvYXBpXFwvYXBwbGljYXRpb25cXC8oW14vXSspL2kpO1xuICAgIGNvbnN0IHJvdXRlUmVzdWx0ID0gcGF0aG5hbWUubWF0Y2goL1xcL2FwaVxcL2FwcGxpY2F0aW9uXFwvW14vXStcXC8oLiopL2kpO1xuICAgIFxuICAgIGNvbnN0IGFwcG5hbWUgPSBhcHBuYW1lUmVzdWx0ID8gYXBwbmFtZVJlc3VsdFsxXSA6ICcnO1xuICAgIGNvbnN0IHJvdXRlID0gcm91dGVSZXN1bHQgPyByb3V0ZVJlc3VsdFsxXSA6ICcnO1xuXG4gICAgY29uc29sZS5sb2cocmVxKTtcbiAgICBcbiAgICBcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3JlcS5uZXh0VXJsLm9yaWdpbn0vYXBpL2N1c3RvbWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGFwcG5hbWU6IGFwcG5hbWUsXG4gICAgICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICAgICAgICAgIHJlcTogcmVxW0lOVEVSTkFMU10sXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIFxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihyZXN1bHQsIHsgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMgfSlcbiAgICB9XG4gICAgY2F0Y2gge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiB9LCB7IHN0YXR1czogNTAwIH0pXG4gICAgfVxufSJdLCJuYW1lcyI6WyJJTlRFUk5BTFMiLCJOZXh0UmVzcG9uc2UiLCJoYW5kbGVBcHBzQVBJIiwicGF0aG5hbWUiLCJyZXEiLCJhcHBuYW1lUmVzdWx0IiwibWF0Y2giLCJyb3V0ZVJlc3VsdCIsImFwcG5hbWUiLCJyb3V0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibmV4dFVybCIsIm9yaWdpbiIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzdWx0IiwianNvbiIsInN0YXR1cyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/lib/utils/routes/index.ts\n");

/***/ })

});