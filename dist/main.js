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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\nclass Board {\n    constructor(width = 400, height = 400) {\n        this.board = document.querySelector('.board');\n        this.board.style.width = width;\n        this.board.style.height = height;\n\n        this.circle = document.querySelector('.circle');\n        this.circle.style.position = 'absolute';\n        this.circle.style.left = parseInt(this.board.style.width) / 2;\n        this.circle.style.top = parseInt(this.board.style.height) / 2;\n\n        _util__WEBPACK_IMPORTED_MODULE_0__[\"placeFruits\"]()\n        // this.fruits = document.querySelectorAll('.fruit');\n\n        // this.fruits.forEach(fruit => {\n        //     fruit.style.position = 'absolute';\n        //     fruit.style.left = Util.randPos();\n        //     fruit.style.top = Util.randPos();\n        // })\n\n    }\n\n\n}\n\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: FRUITS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRUITS\", function() { return FRUITS; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\n\n\nconst FRUITS = {\n    'apple': '🍎',\n    'mango': '🥭',\n    'orange': '🍊',\n    'banana': '🍌',\n    'grape': '🍇',\n    'strawberry': '🍓'\n}\n\nclass Game {\n\n    constructor() {\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.lvl = 1;\n        this.streak = 0;\n        this.randomFruits = _util__WEBPACK_IMPORTED_MODULE_0__[\"randomFruit\"](Object.values(FRUITS), this.lvl)\n\n    }\n\n    start () {\n        this.addMoveListener();\n        this.resetFruits()\n    }\n\n    win (target, current) {\n        let win = false\n\n        if (target.join(\" \") === current.replace(/\\n/g, \" \")) {\n            win = true\n        };\n\n        if (win) {\n            this.increaseLevel()\n        } else {\n            alert('keep trying')\n        };\n    };\n\n    increaseLevel() {\n        this.streak ++\n        this.lvl ++\n        this.resetFruits()\n    }\n\n    hideTarget () {\n        let basket = document.getElementById('target-basket');\n        basket.setAttribute('class', 'target-basket-hide');\n    };\n\n    showTarget () {\n        let basket = document.getElementById('target-basket');\n        basket.setAttribute('class', 'target-basket')\n    };\n\n\n\n    addMoveListener () {\n        document.addEventListener('keydown', this.move);\n    };\n\n    resetFruits() {\n        this.randomFruits = _util__WEBPACK_IMPORTED_MODULE_0__[\"randomFruit\"](Object.values(FRUITS), this.lvl);\n        this.deleteRandomFruits();\n        _util__WEBPACK_IMPORTED_MODULE_0__[\"removeAllFruit\"]();\n        _util__WEBPACK_IMPORTED_MODULE_0__[\"placeFruits\"]();\n        this.generateRandomFruits(this.randomFruits);\n    };\n\n    generateRandomFruits (arr) {\n        arr.forEach(ele => {\n            let basket = document.getElementById('target-basket');\n            let item = document.createElement('div');\n            item.setAttribute('class', 'target-fruit');\n            let pic = document.createTextNode(ele);\n            item.appendChild(pic);\n            basket.appendChild(item);\n        })\n    };\n\n    deleteRandomFruits () {\n        let fruits = document.querySelectorAll('.target-fruit');\n        fruits.forEach(fruit => {\n            fruit.remove()\n        })\n    };\n\n    move(e) {\n        let moveBy = 25\n        switch (e.keyCode) {\n            case 37:\n                if (parseInt(circle.style.left) - 25 > 0) {\n                    circle.style.left = parseInt(circle.style.left) - moveBy\n                } else {\n                    circle.style.left = 0\n                }\n                _util__WEBPACK_IMPORTED_MODULE_0__[\"addFruit\"]()\n                break;\n            case 39:\n                if (parseInt(circle.style.left) + 25 < 400) {\n                    circle.style.left = parseInt(circle.style.left) + moveBy\n                } else {\n                    circle.style.left = (400 - 25)\n                }\n                _util__WEBPACK_IMPORTED_MODULE_0__[\"addFruit\"]()\n                break;\n            case 38:\n                if (parseInt(circle.style.top) - 25 > 0) {\n                    circle.style.top = parseInt(circle.style.top) - moveBy\n                } else {\n                    circle.style.top = 0\n                }\n                _util__WEBPACK_IMPORTED_MODULE_0__[\"addFruit\"]()\n\n                break;\n            case 40:\n                if (parseInt(circle.style.top) + 25 < 400) {\n                    circle.style.top = parseInt(circle.style.top) + moveBy\n                } else {\n                    circle.style.top = (400 - 25)\n                }\n                _util__WEBPACK_IMPORTED_MODULE_0__[\"addFruit\"]()\n                break;\n            default:\n                break;\n        }\n\n    }\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\n\n\nconsole.log('webpack is working');\n\n\ndocument.addEventListener('DOMContentLoaded', ()=> {\n\n    _util__WEBPACK_IMPORTED_MODULE_0__[\"addFruits\"](_game__WEBPACK_IMPORTED_MODULE_1__[\"FRUITS\"]); // Use addFruits method from Util file to add fruits to page.\n\n    const game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\n    game.start()\n\n\n\n    let basket = document.getElementById('basket');\n    window.basket = basket\n    window.random = game.randomFruits\n\n    window.win = game.win\n\n\n    document.addEventListener('keydown', (e)=>{\n        if (e.keyCode === 32) {\n            let currFruits = document.getElementById('basket').innerText;\n            game.win(game.randomFruits, currFruits);\n        }\n\n        if (e.keyCode === 16) {\n            game.resetFruits()\n        }\n\n        if (e.keyCode === 18) {\n            _util__WEBPACK_IMPORTED_MODULE_0__[\"removeLastFruit\"]()\n        }\n    })\n\n\n\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: removeLastFruit, removeAllFruit, randPos, addList, addFruit, addFruits, randomFruit, placeFruits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeLastFruit\", function() { return removeLastFruit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeAllFruit\", function() { return removeAllFruit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randPos\", function() { return randPos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addList\", function() { return addList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFruit\", function() { return addFruit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFruits\", function() { return addFruits; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomFruit\", function() { return randomFruit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"placeFruits\", function() { return placeFruits; });\n\nconst removeLastFruit = () => {\n\n    let fruit = document.querySelector('.fruit-list:last-child');\n    fruit.remove();\n\n}\n\nconst removeAllFruit = () => {\n    let fruits = document.querySelectorAll('.fruit-list');\n    fruits.forEach(fruit => {\n        fruit.remove()\n    })\n}\n \nconst randPos = () => {\n    let rand = Math.floor(Math.random() * 15);\n    return rand * 25\n}\n\n\nconst addList = (str) => {\n    let basket = document.getElementById('basket')\n    let list = document.createElement('li')\n    list.setAttribute('class', 'fruit-list')\n    let fruit = document.createTextNode(str)\n    list.appendChild(fruit)\n    basket.appendChild(list)\n}\n\nconst addFruit = () => {\n\n    if ((circle.style.left === apple.style.left) && (circle.style.top === apple.style.top)) {\n        addList('🍎');\n    }\n\n    if ((circle.style.left === mango.style.left) && (circle.style.top === mango.style.top)) {\n        addList('🥭');\n    }\n\n    if ((circle.style.left === orange.style.left) && (circle.style.top === orange.style.top)) {\n        addList('🍊');\n    }\n\n    if ((circle.style.left === banana.style.left) && (circle.style.top === banana.style.top)) {\n        addList('🍌');\n    }\n\n    if ((circle.style.left === grape.style.left) && (circle.style.top === grape.style.top)) {\n        addList('🍇');\n    }\n\n    if ((circle.style.left === strawberry.style.left) && (circle.style.top === strawberry.style.top)) {\n        addList('🍓');\n    }\n}\n\nconst addFruits = (fruits) => {\n    for (let key in fruits) {\n        let board = document.getElementById('board');\n        let fruit = document.createElement('div');\n        fruit.setAttribute('id', key);\n        fruit.setAttribute('class', 'fruit');\n        let pic = document.createTextNode(fruits[key]);\n        fruit.appendChild(pic)\n        board.appendChild(fruit)\n    }\n}\n\nconst randomFruit = (fruits, lvl=3) => {\n    let res = [];\n\n    while (res.length < lvl) {\n        let rand = Math.floor(Math.random() * fruits.length)\n        res.push(fruits[rand])\n    }\n    return res\n};\n\nconst placeFruits = () => {\n\n    let fruits = document.querySelectorAll('.fruit');\n\n    fruits.forEach(fruit => {\n        fruit.style.position = 'absolute';\n        fruit.style.left = randPos();\n        fruit.style.top = randPos();\n    })\n}\n\n\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });