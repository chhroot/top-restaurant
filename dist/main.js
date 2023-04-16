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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\r\n    const content = document.querySelector(\"#content\");\r\n    \r\n\r\n    const pageContent = document.createElement('div');\r\n    pageContent.classList.add('page-content');\r\n\r\n    const phoneNumber = document.createElement('p');\r\n    phoneNumber.classList.add('phone');\r\n    phoneNumber.textContent = \"455 343 323\";\r\n\r\n    const address = document.createElement('p');\r\n    address.classList.add('address');\r\n    address.textContent = \"Diagon Alley 56, London, UK\";\r\n\r\n    pageContent.appendChild(phoneNumber);\r\n    pageContent.appendChild(address);\r\n\r\n    content.appendChild(pageContent);\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\n//# sourceURL=webpack://top-restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n\r\n\r\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://top-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\r\n\r\n    const content = document.querySelector(\"#content\");\r\n    const pageContent = document.createElement('div');\r\n    pageContent.classList.add('page-content');\r\n    \r\n    const heading = document.createElement('h2');\r\n    heading.textContent = \"MENU\";\r\n\r\n    pageContent.appendChild(heading);\r\n    content.appendChild(pageContent);\r\n\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://top-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs */ \"./src/tabs.js\");\n\r\n\r\n\r\nfunction initalLoad() {\r\n    (0,_tabs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initalLoad);\n\n//# sourceURL=webpack://top-restaurant/./src/pageLoad.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createRestaurantHomePage = () => {\r\n  const content = document.querySelector('#content');\r\n  const pageContent = document.createElement('div');\r\n  pageContent.classList.add('page-content');\r\n  \r\n  const headLine = document.createElement('h1');\r\n  headLine.classList.add('headline');\r\n  headLine.textContent = \"Oh Hello\";\r\n  pageContent.appendChild(headLine);\r\n\r\n  const paragraph = document.createElement('p');\r\n  paragraph.classList.add('hero');\r\n  paragraph.textContent = \"There is not much to see, just two shades\";\r\n  pageContent.appendChild(paragraph);\r\n\r\n  // const background = document.createElement('img');\r\n  // background.src = 'https://imgur.com/CTfKt59';\r\n  // background.classList.add('bg-img');\r\n  // pageContent.appendChild(background);\r\n\r\n  content.appendChild(pageContent)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);\n\n//# sourceURL=webpack://top-restaurant/./src/restaurant.js?");

/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n\r\n\r\n\r\n\r\nconst createNav = () => {\r\n    const content = document.querySelector(\"#content\");\r\n\r\n    const topnav = document.createElement('div');\r\n    topnav.classList.add('topnav');\r\n\r\n    const logo = document.createElement('p');\r\n    const home = document.createElement('a');\r\n    const menu = document.createElement('a');\r\n    const contact = document.createElement('a');\r\n\r\n    logo.classList.add(\"logo\");\r\n\r\n    logo.textContent = \"Monochrome\"\r\n    home.textContent = 'Home';\r\n    menu.textContent = 'Menu';\r\n    contact.textContent = 'Contact';\r\n\r\n    home.classList.add(\"active\");\r\n\r\n    // topnav.appendChild(logo);\r\n    topnav.appendChild(home);\r\n    topnav.appendChild(menu);\r\n    topnav.appendChild(contact);\r\n\r\n    content.appendChild(topnav);\r\n\r\n    home.addEventListener(\"click\", () => {\r\n        clearContent();\r\n        (0,_restaurant__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n        menu.classList.remove(\"active\");\r\n        contact.classList.remove(\"active\");\r\n        home.classList.add(\"active\");\r\n    });\r\n\r\n    menu.addEventListener(\"click\", () => {\r\n        clearContent();\r\n        (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n        menu.classList.add(\"active\");\r\n        home.classList.remove(\"active\");\r\n        contact.classList.remove(\"active\");\r\n    });\r\n\r\n    contact.addEventListener(\"click\", () => {\r\n        clearContent();\r\n        menu.classList.remove(\"active\");\r\n        contact.classList.add(\"active\");\r\n        home.classList.remove(\"active\");\r\n        (0,_contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    });\r\n\r\n}\r\n\r\nfunction clearContent() {\r\n    const content = document.querySelector(\"#content\");\r\n    const pageContent = document.querySelector(\".page-content\");\r\n\r\n    if(pageContent){\r\n        content.removeChild(pageContent);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNav);\n\n//# sourceURL=webpack://top-restaurant/./src/tabs.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;