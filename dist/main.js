/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _move__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move */ \"./src/move.js\");\n\n\n\n\n\n\nconsole.log('webpack is working');\n\n\ndocument.addEventListener('DOMContentLoaded', ()=> {\n\n    const FRUITS = ['🍎', '🥭', '🍊', '🍌'];\n    const FRUITS_STR = ['apple', 'mango', 'orange', 'banana'];\n\n\n    let circle = document.querySelector('.circle');\n    let board = document.querySelector('.board');\n    let apple = document.getElementById('apple');\n    let mango = document.getElementById('mango');\n    let orange = document.getElementById('orange');\n    let banana = document.getElementById('banana');\n\n    board.style.width = 400;\n    board.style.height = 400;\n\n    circle.style.position = 'absolute';\n    circle.style.left = parseInt(board.style.width) / 2;\n    circle.style.top = parseInt(board.style.height) / 2;\n\n\n    apple.style.position = 'absolute';\n    apple.style.left = 0;\n    apple.style.top = 0;\n\n    mango.style.position = 'absolute';\n    mango.style.left = 125;\n    mango.style.top = 0;\n\n    orange.style.position = 'absolute';\n    orange.style.left = 250;\n    orange.style.top = 0;\n\n    banana.style.position = 'absolute';\n    banana.style.left = 375;\n    banana.style.top = 0;\n\n\n    const removeFruit = () => {\n        let fruits = document.querySelectorAll('.fruit-list')\n        fruits.forEach(fruit => {\n            fruit.remove()\n        })\n\n    }\n\n    document.addEventListener('click', removeFruit)\n    document.addEventListener('keydown', _move__WEBPACK_IMPORTED_MODULE_0__[\"move\"])\n\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/move.js":
/*!*********************!*\
  !*** ./src/move.js ***!
  \*********************/
/*! exports provided: addList, addFruit, move */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addList\", function() { return addList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFruit\", function() { return addFruit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"move\", function() { return move; });\nconst addList = (str) => {\n    let basket = document.getElementById('basket')\n    let list = document.createElement('li')\n    list.setAttribute('class', 'fruit-list')\n    let fruit = document.createTextNode(str)\n    list.appendChild(fruit)\n    basket.appendChild(list)\n}\n\nconst addFruit = () => {\n\n\n    if ((circle.style.left === apple.style.left) && (circle.style.top === apple.style.top)) {\n        addList('🍎');\n    }\n\n    if ((circle.style.left === mango.style.left) && (circle.style.top === mango.style.top)) {\n        addList('🥭');\n    }\n\n    if ((circle.style.left === orange.style.left) && (circle.style.top === orange.style.top)) {\n        addList('🍊');\n    }\n\n    if ((circle.style.left === banana.style.left) && (circle.style.top === banana.style.top)) {\n        addList('🍌');\n    }\n}\n\n\nconst move = (e) => {\n    let moveBy = 25\n    switch (e.keyCode) {\n        case 37:\n            if (parseInt(circle.style.left) - 25 > 0) {\n                circle.style.left = parseInt(circle.style.left) - moveBy\n            } else {\n                circle.style.left = 0\n            }\n            addFruit()\n            break;\n        case 39:\n            if (parseInt(circle.style.left) + 25 < 400) {\n                circle.style.left = parseInt(circle.style.left) + moveBy\n            } else {\n                circle.style.left = (400 - 25)\n            }\n            addFruit()\n            break;\n        case 38:\n            if (parseInt(circle.style.top) - 25 > 0) {\n                circle.style.top = parseInt(circle.style.top) - moveBy\n            } else {\n                circle.style.top = 0\n            }\n            addFruit()\n\n            break;\n        case 40:\n            if (parseInt(circle.style.top) + 25 < 400) {\n                circle.style.top = parseInt(circle.style.top) + moveBy\n            } else {\n                circle.style.top = (400 - 25)\n            }\n            addFruit()\n            break;\n        default:\n            break;\n    }\n}\n\n//# sourceURL=webpack:///./src/move.js?");

/***/ })

/******/ });