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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleAppsAPI: () => (/* binding */ handleAppsAPI)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_spec_extension_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/spec-extension/request */ \"(middleware)/./node_modules/next/dist/esm/server/web/spec-extension/request.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\n\nasync function handleAppsAPI(pathname, req) {\n    const appnameResult = pathname.match(/\\/api\\/application\\/([^/]+)/i);\n    const routeResult = pathname.match(/\\/api\\/application\\/[^/]+\\/(.*)/i);\n    const appname = appnameResult ? appnameResult[1] : \"\";\n    const route = routeResult ? routeResult[1] : \"\";\n    const reqtext = await req.text();\n    const reqjson = await req.json();\n    console.log(reqtext);\n    const response = await fetch(`${req.nextUrl.origin}/api/custom`, {\n        method: \"POST\",\n        body: JSON.stringify({\n            appname: appname,\n            route: route,\n            req: JSON.stringify({\n                body: req.body,\n                method: req.method,\n                text: reqtext,\n                json: reqjson,\n                request: req[next_dist_server_web_spec_extension_request__WEBPACK_IMPORTED_MODULE_0__.INTERNALS]\n            })\n        })\n    });\n    const result = await response.json();\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(result, {\n        status: response.status\n    });\n    try {} catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vc3JjL2xpYi91dGlscy9yb3V0ZXMvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3dFO0FBQ2hCO0FBRWpELGVBQWVFLGNBQWNDLFFBQWdCLEVBQUVDLEdBQWdCO0lBQ2xFLE1BQU1DLGdCQUFnQkYsU0FBU0csS0FBSyxDQUFDO0lBQ3JDLE1BQU1DLGNBQWNKLFNBQVNHLEtBQUssQ0FBQztJQUVuQyxNQUFNRSxVQUFVSCxnQkFBZ0JBLGFBQWEsQ0FBQyxFQUFFLEdBQUc7SUFDbkQsTUFBTUksUUFBUUYsY0FBY0EsV0FBVyxDQUFDLEVBQUUsR0FBRztJQUU3QyxNQUFNRyxVQUFVLE1BQU1OLElBQUlPLElBQUk7SUFDOUIsTUFBTUMsVUFBVSxNQUFNUixJQUFJUyxJQUFJO0lBRTlCQyxRQUFRQyxHQUFHLENBQUNMO0lBR1osTUFBTU0sV0FBVyxNQUFNQyxNQUFNLENBQUMsRUFBRWIsSUFBSWMsT0FBTyxDQUFDQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7UUFDN0RDLFFBQVE7UUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQ2pCZixTQUFTQTtZQUNUQyxPQUFPQTtZQUNQTCxLQUFLa0IsS0FBS0MsU0FBUyxDQUFDO2dCQUNoQkYsTUFBTWpCLElBQUlpQixJQUFJO2dCQUNkRCxRQUFRaEIsSUFBSWdCLE1BQU07Z0JBQ2xCVCxNQUFNRDtnQkFDTkcsTUFBTUQ7Z0JBQ05ZLFNBQVNwQixHQUFHLENBQUNKLGtGQUFTQSxDQUFDO1lBQzNCO1FBQ0o7SUFDSjtJQUVBLE1BQU15QixTQUFTLE1BQU1ULFNBQVNILElBQUk7SUFFbEMsT0FBT1oscURBQVlBLENBQUNZLElBQUksQ0FBQ1ksUUFBUTtRQUFFQyxRQUFRVixTQUFTVSxNQUFNO0lBQUM7SUFFM0QsSUFBSSxDQUVKLEVBQ0EsT0FBTTtRQUNGLE9BQU96QixxREFBWUEsQ0FBQ1ksSUFBSSxDQUFDO1lBQUVjLE9BQU87UUFBd0IsR0FBRztZQUFFRCxRQUFRO1FBQUk7SUFDL0U7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL3V0aWxzL3JvdXRlcy9pbmRleC50cz83NWJjIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSU5URVJOQUxTIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvd2ViL3NwZWMtZXh0ZW5zaW9uL3JlcXVlc3RcIjtcbmltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFwcHNBUEkocGF0aG5hbWU6IHN0cmluZywgcmVxOiBOZXh0UmVxdWVzdCkge1xuICAgIGNvbnN0IGFwcG5hbWVSZXN1bHQgPSBwYXRobmFtZS5tYXRjaCgvXFwvYXBpXFwvYXBwbGljYXRpb25cXC8oW14vXSspL2kpO1xuICAgIGNvbnN0IHJvdXRlUmVzdWx0ID0gcGF0aG5hbWUubWF0Y2goL1xcL2FwaVxcL2FwcGxpY2F0aW9uXFwvW14vXStcXC8oLiopL2kpO1xuICAgIFxuICAgIGNvbnN0IGFwcG5hbWUgPSBhcHBuYW1lUmVzdWx0ID8gYXBwbmFtZVJlc3VsdFsxXSA6ICcnO1xuICAgIGNvbnN0IHJvdXRlID0gcm91dGVSZXN1bHQgPyByb3V0ZVJlc3VsdFsxXSA6ICcnO1xuXG4gICAgY29uc3QgcmVxdGV4dCA9IGF3YWl0IHJlcS50ZXh0KCk7XG4gICAgY29uc3QgcmVxanNvbiA9IGF3YWl0IHJlcS5qc29uKCk7XG5cbiAgICBjb25zb2xlLmxvZyhyZXF0ZXh0KTtcbiAgICBcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7cmVxLm5leHRVcmwub3JpZ2lufS9hcGkvY3VzdG9tYCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgYXBwbmFtZTogYXBwbmFtZSxcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgICAgIHJlcTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGJvZHk6IHJlcS5ib2R5LFxuICAgICAgICAgICAgICAgIG1ldGhvZDogcmVxLm1ldGhvZCxcbiAgICAgICAgICAgICAgICB0ZXh0OiByZXF0ZXh0LFxuICAgICAgICAgICAgICAgIGpzb246IHJlcWpzb24sXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxW0lOVEVSTkFMU11cbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocmVzdWx0LCB7IHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzIH0pXG4gICAgXG4gICAgdHJ5IHtcblxuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkludGVybmFsIHNlcnZlciBlcnJvclwiIH0sIHsgc3RhdHVzOiA1MDAgfSlcbiAgICB9XG59Il0sIm5hbWVzIjpbIklOVEVSTkFMUyIsIk5leHRSZXNwb25zZSIsImhhbmRsZUFwcHNBUEkiLCJwYXRobmFtZSIsInJlcSIsImFwcG5hbWVSZXN1bHQiLCJtYXRjaCIsInJvdXRlUmVzdWx0IiwiYXBwbmFtZSIsInJvdXRlIiwicmVxdGV4dCIsInRleHQiLCJyZXFqc29uIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImZldGNoIiwibmV4dFVybCIsIm9yaWdpbiIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVxdWVzdCIsInJlc3VsdCIsInN0YXR1cyIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./src/lib/utils/routes/index.ts\n");

/***/ })

});