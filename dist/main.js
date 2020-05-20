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

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nclass Board {\n    constructor() {\n        this.board = document.querySelector('.board');\n        this.board.style.width = 400;\n        this.board.style.height = 400;\n\n        this.circle = document.querySelector('.circle');\n        this.circle.style.position = 'absolute';\n        this.circle.style.left = parseInt(this.board.style.width) / 2;\n        this.circle.style.top = parseInt(this.board.style.height) / 2;\n\n\n        this.fruits = document.querySelectorAll('.fruit');\n\n        this.fruits.forEach(fruit => {\n            fruit.style.position = 'absolute';\n            fruit.style.left = _util__WEBPACK_IMPORTED_MODULE_0__[\"randPos\"]();\n            fruit.style.top = _util__WEBPACK_IMPORTED_MODULE_0__[\"randPos\"]();\n        })\n\n    }\n\n    move(e) {\n        let moveBy = 25\n        switch (e.keyCode) {\n            case 37:\n                if (parseInt(circle.style.left) - 25 > 0) {\n                    circle.style.left = parseInt(circle.style.left) - moveBy\n                } else {\n                    circle.style.left = 0\n                }\n                _util__WEBPACK_IMPORTED_MODULE_0__[\"addFruit\"]()\n                break;\n            case 39:\n                if (parseInt(circle.style.left) + 25 < 400) {\n                    circle.style.left = parseInt(circle.style.left) + moveBy\n                } else {\n                    circle.style.left = (400 - 25)\n                }\n                _util__WEBPACK_IMPORTED_MODULE_0__[\"addFruit\"]()\n                break;\n            case 38:\n                if (parseInt(circle.style.top) - 25 > 0) {\n                    circle.style.top = parseInt(circle.style.top) - moveBy\n                } else {\n                    circle.style.top = 0\n                }\n                _util__WEBPACK_IMPORTED_MODULE_0__[\"addFruit\"]()\n\n                break;\n            case 40:\n                if (parseInt(circle.style.top) + 25 < 400) {\n                    circle.style.top = parseInt(circle.style.top) + moveBy\n                } else {\n                    circle.style.top = (400 - 25)\n                }\n                _util__WEBPACK_IMPORTED_MODULE_0__[\"addFruit\"]()\n                break;\n            default:\n                break;\n        }\n\n    }\n\n\n}\n\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\n\n\n\nconsole.log('webpack is working');\n\nconst FRUITS = {\n    'apple': '🍎',\n    'mango': '🥭',\n    'orange': '🍊',\n    'banana': '🍌',\n    'grape': '🍇',\n    'strawberry': '🍓'\n};\n\ndocument.addEventListener('DOMContentLoaded', ()=> {\n\n    _util__WEBPACK_IMPORTED_MODULE_0__[\"addFruits\"](FRUITS); // Use addFruits method from Util file to add fruits to page.\n\n    let fruits = Object.values(FRUITS); // Generate an array of 4 random fruits using random fruits from Util file.\n    _util__WEBPACK_IMPORTED_MODULE_0__[\"randomFruit\"](fruits);\n\n    const board = new _board__WEBPACK_IMPORTED_MODULE_1__[\"default\"]() // creating a new instance of board.\n\n\n    let deleteBtn = document.getElementById('delete-btn')\n    deleteBtn.addEventListener('click', _util__WEBPACK_IMPORTED_MODULE_0__[\"removeFruit\"])\n\n    document.addEventListener('keydown', board.move) // adding movements to arrow keys\n\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: removeFruit, randPos, addList, addFruit, addFruits, randomFruit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeFruit\", function() { return removeFruit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randPos\", function() { return randPos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addList\", function() { return addList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFruit\", function() { return addFruit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFruits\", function() { return addFruits; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomFruit\", function() { return randomFruit; });\nconst removeFruit = () => {\n\n    let fruit = document.querySelector('.fruit-list:last-child');\n    fruit.remove();\n\n}\n\nconst randPos = () => {\n    let rand = Math.floor(Math.random() * 15);\n    return rand * 25\n}\n\n\nconst addList = (str) => {\n    let basket = document.getElementById('basket')\n    let list = document.createElement('li')\n    list.setAttribute('class', 'fruit-list')\n    let fruit = document.createTextNode(str)\n    list.appendChild(fruit)\n    basket.appendChild(list)\n}\n\nconst addFruit = () => {\n\n\n    if ((circle.style.left === apple.style.left) && (circle.style.top === apple.style.top)) {\n        addList('🍎');\n    }\n\n    if ((circle.style.left === mango.style.left) && (circle.style.top === mango.style.top)) {\n        addList('🥭');\n    }\n\n    if ((circle.style.left === orange.style.left) && (circle.style.top === orange.style.top)) {\n        addList('🍊');\n    }\n\n    if ((circle.style.left === banana.style.left) && (circle.style.top === banana.style.top)) {\n        addList('🍌');\n    }\n}\n\nconst addFruits = (fruits) => {\n    for (let key in fruits) {\n        let board = document.getElementById('board');\n        let fruit = document.createElement('div');\n        fruit.setAttribute('id', key);\n        fruit.setAttribute('class', 'fruit');\n        let pic = document.createTextNode(fruits[key]);\n        fruit.appendChild(pic)\n        board.appendChild(fruit)\n    }\n}\n\nconst randomFruit = (fruits) => {\n    let res = [];\n\n    while (res.length < 4) {\n        let rand = Math.floor(Math.random() * fruits.length)\n        res.push(fruits[rand])\n    }\n    return res\n}\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });