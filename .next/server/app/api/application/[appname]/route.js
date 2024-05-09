/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/application/[appname]/route";
exports.ids = ["app/api/application/[appname]/route"];
exports.modules = {

/***/ "(rsc)/./apps lazy recursive ^\\.\\/.*\\/api\\/.*\\/route\\.ts$":
/*!******************************************************************!*\
  !*** ./apps/ lazy ^\.\/.*\/api\/.*\/route\.ts$ namespace object ***!
  \******************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "(rsc)/./apps lazy recursive ^\\.\\/.*\\/api\\/.*\\/route\\.ts$";
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ "(rsc)/./apps lazy recursive ^\\.\\/.*\\/api\\/route\\.ts$":
/*!**************************************************************!*\
  !*** ./apps/ lazy ^\.\/.*\/api\/route\.ts$ namespace object ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./settings/api/route.ts": [
		"(rsc)/./apps/settings/api/route.ts",
		"_rsc_apps_settings_api_route_ts"
	],
	"./terminal/api/route.ts": [
		"(rsc)/./apps/terminal/api/route.ts",
		"vendor-chunks/next",
		"_rsc_apps_terminal_api_route_ts"
	],
	"./text_editor/api/route.ts": [
		"(rsc)/./apps/text_editor/api/route.ts",
		"_rsc_apps_text_editor_api_route_ts"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "(rsc)/./apps lazy recursive ^\\.\\/.*\\/api\\/route\\.ts$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fapplication%2F%5Bappname%5D%2Froute&page=%2Fapi%2Fapplication%2F%5Bappname%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fapplication%2F%5Bappname%5D%2Froute.ts&appDir=%2Fhome%2Fleny%2FDocuments%2Fprojects%2Fwebserv%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fleny%2FDocuments%2Fprojects%2Fwebserv&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fapplication%2F%5Bappname%5D%2Froute&page=%2Fapi%2Fapplication%2F%5Bappname%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fapplication%2F%5Bappname%5D%2Froute.ts&appDir=%2Fhome%2Fleny%2FDocuments%2Fprojects%2Fwebserv%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fleny%2FDocuments%2Fprojects%2Fwebserv&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_leny_Documents_projects_webserv_src_app_api_application_appname_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/application/[appname]/route.ts */ \"(rsc)/./src/app/api/application/[appname]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/application/[appname]/route\",\n        pathname: \"/api/application/[appname]\",\n        filename: \"route\",\n        bundlePath: \"app/api/application/[appname]/route\"\n    },\n    resolvedPagePath: \"/home/leny/Documents/projects/webserv/src/app/api/application/[appname]/route.ts\",\n    nextConfigOutput,\n    userland: _home_leny_Documents_projects_webserv_src_app_api_application_appname_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/application/[appname]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhcHBsaWNhdGlvbiUyRiU1QmFwcG5hbWUlNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmFwcGxpY2F0aW9uJTJGJTVCYXBwbmFtZSU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmFwcGxpY2F0aW9uJTJGJTVCYXBwbmFtZSU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGbGVueSUyRkRvY3VtZW50cyUyRnByb2plY3RzJTJGd2Vic2VydiUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRmxlbnklMkZEb2N1bWVudHMlMkZwcm9qZWN0cyUyRndlYnNlcnYmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2dDO0FBQzdHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2Vydi8/M2IyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9sZW55L0RvY3VtZW50cy9wcm9qZWN0cy93ZWJzZXJ2L3NyYy9hcHAvYXBpL2FwcGxpY2F0aW9uL1thcHBuYW1lXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXBwbGljYXRpb24vW2FwcG5hbWVdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXBwbGljYXRpb24vW2FwcG5hbWVdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hcHBsaWNhdGlvbi9bYXBwbmFtZV0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9sZW55L0RvY3VtZW50cy9wcm9qZWN0cy93ZWJzZXJ2L3NyYy9hcHAvYXBpL2FwcGxpY2F0aW9uL1thcHBuYW1lXS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvYXBwbGljYXRpb24vW2FwcG5hbWVdL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fapplication%2F%5Bappname%5D%2Froute&page=%2Fapi%2Fapplication%2F%5Bappname%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fapplication%2F%5Bappname%5D%2Froute.ts&appDir=%2Fhome%2Fleny%2FDocuments%2Fprojects%2Fwebserv%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fleny%2FDocuments%2Fprojects%2Fwebserv&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/application/[appname]/route.ts":
/*!****************************************************!*\
  !*** ./src/app/api/application/[appname]/route.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nasync function GET(req, context) {\n    const appnameResult = req.nextUrl.pathname.match(/\\/api\\/application\\/([^/]+)/i);\n    const routeResult = req.nextUrl.pathname.match(/\\/api\\/application\\/[^/]+\\/(.*)/i);\n    const appname = appnameResult ? appnameResult[1] : \"\";\n    const route = routeResult ? routeResult[1] : \"\";\n    try {\n        const handler = route ? await __webpack_require__(\"(rsc)/./apps lazy recursive ^\\\\.\\\\/.*\\\\/api\\\\/.*\\\\/route\\\\.ts$\")(`./${appname}/api/${route}/route.ts`) : await __webpack_require__(\"(rsc)/./apps lazy recursive ^\\\\.\\\\/.*\\\\/api\\\\/route\\\\.ts$\")(`./${appname}/api/route.ts`);\n        if (handler && typeof handler[req.method] === \"function\") {\n            return handler[req.method](req);\n        } else {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Method Not Allowed\"\n            }, {\n                status: 405\n            });\n        }\n    } catch  {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hcHBsaWNhdGlvbi9bYXBwbmFtZV0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0Q7QUFNakQsZUFBZUMsSUFBSUMsR0FBZ0IsRUFBRUMsT0FBMkI7SUFDbkUsTUFBTUMsZ0JBQWdCRixJQUFJRyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDO0lBQ2pELE1BQU1DLGNBQWNOLElBQUlHLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDQyxLQUFLLENBQUM7SUFFL0MsTUFBTUUsVUFBVUwsZ0JBQWdCQSxhQUFhLENBQUMsRUFBRSxHQUFHO0lBQ25ELE1BQU1NLFFBQVFGLGNBQWNBLFdBQVcsQ0FBQyxFQUFFLEdBQUc7SUFFN0MsSUFBSTtRQUNBLE1BQU1HLFVBQVVELFFBQVEsTUFBTSxzRkFBTyxHQUFxQixFQUFFRCxRQUFRLEtBQUssRUFBRUMsTUFBTSxVQUFVLENBQUMsR0FBRyxNQUFNLGlGQUFPLEdBQXFCLEVBQUVELFFBQVEsY0FBYyxDQUFDO1FBRTFKLElBQUlFLFdBQVcsT0FBT0EsT0FBTyxDQUFDVCxJQUFJVSxNQUFNLENBQUMsS0FBSyxZQUFZO1lBQ3RELE9BQU9ELE9BQU8sQ0FBQ1QsSUFBSVUsTUFBTSxDQUFDLENBQUNWO1FBQy9CLE9BQ0s7WUFDRCxPQUFPRixxREFBWUEsQ0FBQ2EsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXFCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUM1RTtJQUVKLEVBQ0EsT0FBTTtRQUNGLE9BQU9mLHFEQUFZQSxDQUFDYSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMvRTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2Vydi8uL3NyYy9hcHAvYXBpL2FwcGxpY2F0aW9uL1thcHBuYW1lXS9yb3V0ZS50cz81MjhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxudHlwZSBQYXJhbXMgPSB7XG4gICAgYXBwbmFtZTogc3RyaW5nXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxOiBOZXh0UmVxdWVzdCwgY29udGV4dDogeyBwYXJhbXM6IFBhcmFtcyB9KSB7XG4gICAgY29uc3QgYXBwbmFtZVJlc3VsdCA9IHJlcS5uZXh0VXJsLnBhdGhuYW1lLm1hdGNoKC9cXC9hcGlcXC9hcHBsaWNhdGlvblxcLyhbXi9dKykvaSk7XG4gICAgY29uc3Qgcm91dGVSZXN1bHQgPSByZXEubmV4dFVybC5wYXRobmFtZS5tYXRjaCgvXFwvYXBpXFwvYXBwbGljYXRpb25cXC9bXi9dK1xcLyguKikvaSk7XG4gICAgXG4gICAgY29uc3QgYXBwbmFtZSA9IGFwcG5hbWVSZXN1bHQgPyBhcHBuYW1lUmVzdWx0WzFdIDogJyc7XG4gICAgY29uc3Qgcm91dGUgPSByb3V0ZVJlc3VsdCA/IHJvdXRlUmVzdWx0WzFdIDogJyc7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IHJvdXRlID8gYXdhaXQgaW1wb3J0KGAuLi8uLi8uLi8uLi8uLi9hcHBzLyR7YXBwbmFtZX0vYXBpLyR7cm91dGV9L3JvdXRlLnRzYCkgOiBhd2FpdCBpbXBvcnQoYC4uLy4uLy4uLy4uLy4uL2FwcHMvJHthcHBuYW1lfS9hcGkvcm91dGUudHNgKTtcblxuICAgICAgICBpZiAoaGFuZGxlciAmJiB0eXBlb2YgaGFuZGxlcltyZXEubWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJbcmVxLm1ldGhvZF0ocmVxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnTWV0aG9kIE5vdCBBbGxvd2VkJyB9LCB7IHN0YXR1czogNDA1IH0pO1xuICAgICAgICB9XG4gICAgXG4gICAgfVxuICAgIGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgZXJyb3I6IFwiSW50ZXJuYWwgc2VydmVyIGVycm9yXCIgfSwgeyBzdGF0dXM6IDUwMCB9KVxuICAgIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiR0VUIiwicmVxIiwiY29udGV4dCIsImFwcG5hbWVSZXN1bHQiLCJuZXh0VXJsIiwicGF0aG5hbWUiLCJtYXRjaCIsInJvdXRlUmVzdWx0IiwiYXBwbmFtZSIsInJvdXRlIiwiaGFuZGxlciIsIm1ldGhvZCIsImpzb24iLCJlcnJvciIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/application/[appname]/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fapplication%2F%5Bappname%5D%2Froute&page=%2Fapi%2Fapplication%2F%5Bappname%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fapplication%2F%5Bappname%5D%2Froute.ts&appDir=%2Fhome%2Fleny%2FDocuments%2Fprojects%2Fwebserv%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fleny%2FDocuments%2Fprojects%2Fwebserv&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();