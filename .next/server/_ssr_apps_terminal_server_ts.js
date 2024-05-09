"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_ssr_apps_terminal_server_ts";
exports.ids = ["_ssr_apps_terminal_server_ts"];
exports.modules = {

/***/ "(ssr)/./apps/terminal/server.ts":
/*!*********************************!*\
  !*** ./apps/terminal/server.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   execute: () => (/* binding */ execute)\n/* harmony export */ });\nasync function execute(command) {\n    const res = await fetch(\"/api/application/terminal\", {\n        method: \"POST\",\n        body: JSON.stringify({\n            command: command\n        })\n    });\n    const output = await res.json();\n    return output.output;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9hcHBzL3Rlcm1pbmFsL3NlcnZlci50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQ08sZUFBZUEsUUFBUUMsT0FBZTtJQUN6QyxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sNkJBQTZCO1FBQ2pEQyxRQUFRO1FBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUNqQk4sU0FBU0E7UUFDYjtJQUNKO0lBRUEsTUFBTU8sU0FBUyxNQUFNTixJQUFJTyxJQUFJO0lBRTdCLE9BQU9ELE9BQU9BLE1BQU07QUFDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzZXJ2Ly4vYXBwcy90ZXJtaW5hbC9zZXJ2ZXIudHM/ZjNmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGVjdXRlKGNvbW1hbmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvYXBwbGljYXRpb24vdGVybWluYWwnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBjb21tYW5kOiBjb21tYW5kXG4gICAgICAgIH0pXG4gICAgfSlcblxuICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICByZXR1cm4gb3V0cHV0Lm91dHB1dDtcbn0iXSwibmFtZXMiOlsiZXhlY3V0ZSIsImNvbW1hbmQiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib3V0cHV0IiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./apps/terminal/server.ts\n");

/***/ })

};
;