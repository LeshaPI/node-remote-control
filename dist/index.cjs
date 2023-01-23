/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_http_server_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/http_server/index */ \"./src/http_server/index.ts\");\n/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ws */ \"ws\");\n/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ws__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/handler */ \"./src/handler.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\n\r\nconst HTTP_PORT = 8181;\r\nconsole.log(`Start static http server on the ${HTTP_PORT} port!`);\r\n_src_http_server_index__WEBPACK_IMPORTED_MODULE_0__.httpServer.listen(HTTP_PORT);\r\nconst WS_PORT = 8080;\r\nconst ws = new ws__WEBPACK_IMPORTED_MODULE_1__.WebSocketServer({ port: WS_PORT }, () => { console.log(`Start WS server on the ${WS_PORT} port!`); });\r\nws.on('connection', (ws, req) => __awaiter(void 0, void 0, void 0, function* () {\r\n    yield (0,_src_handler__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ws);\r\n}));\r\n\n\n//# sourceURL=webpack://ws_task/./index.ts?");

/***/ }),

/***/ "./src/handler.ts":
/*!************************!*\
  !*** ./src/handler.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _websocket_commands_navigationOverXY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./websocket_commands/navigationOverXY */ \"./src/websocket_commands/navigationOverXY.ts\");\n/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ws */ \"ws\");\n/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ws__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _websocket_commands_drawing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./websocket_commands/drawing */ \"./src/websocket_commands/drawing.ts\");\n/* harmony import */ var _websocket_commands_printScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./websocket_commands/printScreen */ \"./src/websocket_commands/printScreen.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\n\r\n\r\nconst commandsHandler = (ws) => __awaiter(void 0, void 0, void 0, function* () {\r\n    const webSocketStream = (0,ws__WEBPACK_IMPORTED_MODULE_1__.createWebSocketStream)(ws, {\r\n        encoding: 'utf8',\r\n        decodeStrings: false,\r\n    });\r\n    webSocketStream.on('data', (message) => __awaiter(void 0, void 0, void 0, function* () {\r\n        const [cmd, ...args] = message.split(' ');\r\n        switch (cmd) {\r\n            case \"mouse_up\" /* commandsList.UP */: {\r\n                yield (0,_websocket_commands_navigationOverXY__WEBPACK_IMPORTED_MODULE_0__.mouseUp)(args);\r\n                webSocketStream.write(cmd);\r\n                break;\r\n            }\r\n            case \"mouse_down\" /* commandsList.DOWN */: {\r\n                yield (0,_websocket_commands_navigationOverXY__WEBPACK_IMPORTED_MODULE_0__.mouseDown)(args);\r\n                webSocketStream.write(cmd);\r\n                break;\r\n            }\r\n            case \"mouse_left\" /* commandsList.LEFT */: {\r\n                yield (0,_websocket_commands_navigationOverXY__WEBPACK_IMPORTED_MODULE_0__.mouseLeft)(args);\r\n                webSocketStream.write(cmd);\r\n                break;\r\n            }\r\n            case \"mouse_right\" /* commandsList.RIGHT */: {\r\n                yield (0,_websocket_commands_navigationOverXY__WEBPACK_IMPORTED_MODULE_0__.mouseRight)(args);\r\n                webSocketStream.write(cmd);\r\n                break;\r\n            }\r\n            case \"mouse_position\" /* commandsList.GET_POSITION */: {\r\n                const { x, y } = yield (0,_websocket_commands_navigationOverXY__WEBPACK_IMPORTED_MODULE_0__.getMouseCoordinates)();\r\n                webSocketStream.write(`${cmd} ${x},${y}`);\r\n                break;\r\n            }\r\n            case \"draw_circle\" /* commandsList.DRAW_CIRCLE */: {\r\n                yield (0,_websocket_commands_drawing__WEBPACK_IMPORTED_MODULE_2__.drawCircle)(args);\r\n                webSocketStream.write(cmd);\r\n                break;\r\n            }\r\n            case \"draw_square\" /* commandsList.DRAW_SQUARE */: {\r\n                yield (0,_websocket_commands_drawing__WEBPACK_IMPORTED_MODULE_2__.drawSquare)(args);\r\n                webSocketStream.write(cmd);\r\n                break;\r\n            }\r\n            case \"draw_rectangle\" /* commandsList.DRAW_RECTANGLE */: {\r\n                yield (0,_websocket_commands_drawing__WEBPACK_IMPORTED_MODULE_2__.drawRectangle)(args);\r\n                webSocketStream.write(cmd);\r\n                break;\r\n            }\r\n            case \"prnt_scrn\" /* commandsList.PRINT_SCREEN */: {\r\n                const string = yield (0,_websocket_commands_printScreen__WEBPACK_IMPORTED_MODULE_3__.printScreen)();\r\n                webSocketStream.write(`${cmd} ${string}`);\r\n                break;\r\n            }\r\n        }\r\n    }));\r\n});\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commandsHandler);\r\n\n\n//# sourceURL=webpack://ws_task/./src/handler.ts?");

/***/ }),

/***/ "./src/http_server/index.ts":
/*!**********************************!*\
  !*** ./src/http_server/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"httpServer\": () => (/* binding */ httpServer)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\nconst httpServer = http__WEBPACK_IMPORTED_MODULE_2__.createServer(function (req, res) {\r\n    const __dirname = path__WEBPACK_IMPORTED_MODULE_1__.resolve(path__WEBPACK_IMPORTED_MODULE_1__.dirname(''));\r\n    const file_path = __dirname + (req.url === '/' ? '/front/index.html' : '/front' + req.url);\r\n    fs__WEBPACK_IMPORTED_MODULE_0__.readFile(file_path, function (err, data) {\r\n        if (err) {\r\n            res.writeHead(404);\r\n            res.end(JSON.stringify(err));\r\n            return;\r\n        }\r\n        res.writeHead(200);\r\n        res.end(data);\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://ws_task/./src/http_server/index.ts?");

/***/ }),

/***/ "./src/websocket_commands/drawing.ts":
/*!*******************************************!*\
  !*** ./src/websocket_commands/drawing.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawCircle\": () => (/* binding */ drawCircle),\n/* harmony export */   \"drawRectangle\": () => (/* binding */ drawRectangle),\n/* harmony export */   \"drawSquare\": () => (/* binding */ drawSquare)\n/* harmony export */ });\n/* harmony import */ var _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nut-tree/nut-js */ \"@nut-tree/nut-js\");\n/* harmony import */ var _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nconst drawCircle = (radius) => __awaiter(void 0, void 0, void 0, function* () {\r\n    radius = Number(radius);\r\n    const { x: posX, y: posY } = yield _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.getPosition();\r\n    const circle = [];\r\n    for (let i = 0; i < 360; i++) {\r\n        const radians = i * Math.PI / 180;\r\n        const x = radius * Math.cos(radians) + posX - radius;\r\n        const y = radius * Math.sin(radians) + posY;\r\n        circle.push({ x, y });\r\n    }\r\n    yield _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.drag(circle);\r\n});\r\nconst drawSquare = (px) => __awaiter(void 0, void 0, void 0, function* () {\r\n    px = Number(px);\r\n    yield _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.drag((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.left)(px));\r\n    yield _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.drag((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.down)(px));\r\n    yield _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.drag((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.right)(px));\r\n    yield _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.drag((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.up)(px));\r\n});\r\nconst drawRectangle = ([px, length]) => __awaiter(void 0, void 0, void 0, function* () {\r\n    px = Number(px);\r\n    length = Number(length);\r\n    yield _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.drag((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.left)(length));\r\n    yield _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.drag((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.down)(px));\r\n    yield _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.drag((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.right)(length));\r\n    yield _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.drag((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.up)(px));\r\n});\r\n\n\n//# sourceURL=webpack://ws_task/./src/websocket_commands/drawing.ts?");

/***/ }),

/***/ "./src/websocket_commands/navigationOverXY.ts":
/*!****************************************************!*\
  !*** ./src/websocket_commands/navigationOverXY.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMouseCoordinates\": () => (/* binding */ getMouseCoordinates),\n/* harmony export */   \"mouseDown\": () => (/* binding */ mouseDown),\n/* harmony export */   \"mouseLeft\": () => (/* binding */ mouseLeft),\n/* harmony export */   \"mouseRight\": () => (/* binding */ mouseRight),\n/* harmony export */   \"mouseUp\": () => (/* binding */ mouseUp)\n/* harmony export */ });\n/* harmony import */ var _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nut-tree/nut-js */ \"@nut-tree/nut-js\");\n/* harmony import */ var _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\nconst mouseUp = (px) => __awaiter(void 0, void 0, void 0, function* () {\r\n    yield _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.move((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.up)(Number(px)));\r\n});\r\nconst mouseDown = (px) => __awaiter(void 0, void 0, void 0, function* () {\r\n    yield _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.move((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.down)(Number(px)));\r\n});\r\nconst mouseLeft = (px) => __awaiter(void 0, void 0, void 0, function* () {\r\n    yield _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.move((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.left)(Number(px)));\r\n});\r\nconst mouseRight = (px) => __awaiter(void 0, void 0, void 0, function* () {\r\n    yield _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.move((0,_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.right)(Number(px)));\r\n});\r\nconst getMouseCoordinates = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    return yield _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.getPosition();\r\n});\r\n\n\n//# sourceURL=webpack://ws_task/./src/websocket_commands/navigationOverXY.ts?");

/***/ }),

/***/ "./src/websocket_commands/printScreen.ts":
/*!***********************************************!*\
  !*** ./src/websocket_commands/printScreen.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"printScreen\": () => (/* binding */ printScreen)\n/* harmony export */ });\n/* harmony import */ var _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nut-tree/nut-js */ \"@nut-tree/nut-js\");\n/* harmony import */ var _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jimp_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimp/es */ \"jimp/es\");\n/* harmony import */ var jimp_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jimp_es__WEBPACK_IMPORTED_MODULE_1__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\nconst printScreen = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    const { x, y } = yield _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.mouse.getPosition();\r\n    const reg = new _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.Region(x - 100, y - 100, 200, 200);\r\n    yield _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.screen.highlight(reg);\r\n    const bgr = yield _nut_tree_nut_js__WEBPACK_IMPORTED_MODULE_0__.screen.grabRegion(reg);\r\n    const rgb = yield bgr.toRGB();\r\n    const image = new (jimp_es__WEBPACK_IMPORTED_MODULE_1___default())({\r\n        data: rgb.data,\r\n        width: rgb.width,\r\n        height: rgb.height\r\n    });\r\n    const base64String = yield image.getBase64Async((jimp_es__WEBPACK_IMPORTED_MODULE_1___default().MIME_PNG));\r\n    return base64String.replace('data:image/png;base64,', '');\r\n});\r\n\n\n//# sourceURL=webpack://ws_task/./src/websocket_commands/printScreen.ts?");

/***/ }),

/***/ "@nut-tree/nut-js":
/*!***********************************!*\
  !*** external "@nut-tree/nut-js" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nut-tree/nut-js");

/***/ }),

/***/ "jimp/es":
/*!**************************!*\
  !*** external "jimp/es" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("jimp/es");

/***/ }),

/***/ "ws":
/*!*********************!*\
  !*** external "ws" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("ws");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;