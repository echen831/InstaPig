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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Board; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\nclass Board {\n    constructor(width = 400, height = 400) {\n        this.board = document.querySelector('.board');\n        this.board.style.width = width;\n        this.board.style.height = height;\n\n        this.circle = document.querySelector('.circle');\n        this.circle.style.position = 'absolute';\n        this.circle.style.left = parseInt(this.board.style.width) / 2;\n        this.circle.style.top = parseInt(this.board.style.height) / 2;\n\n\n        _util__WEBPACK_IMPORTED_MODULE_0__[\"addFruits\"](_game__WEBPACK_IMPORTED_MODULE_1__[\"FRUITS\"])\n        _util__WEBPACK_IMPORTED_MODULE_0__[\"placeFruits\"]()\n\n    }\n\n\n}\n\n\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: FRUITS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FRUITS\", function() { return FRUITS; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\n\nconst FRUITS = {\n    'apple': '🍎',\n    'mango': '🥭',\n    'orange': '🍊',\n    'banana': '🍌',\n    'grape': '🍇',\n    'strawberry': '🍓',\n    'watermelon': '🍉',\n    'cherry':'🍒',\n    'peach':'🍑',\n    'pear':'🍐',\n    'kiwi':'🥝',\n    'melon':'🍈',\n    'lemon':'🍋',\n    'coco':'🥥',\n    'green':'🍏'\n}\n\nclass Game {\n\n    constructor() {\n        this.board = new _board__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.lvl = 1;\n        this.streak = 0;\n        this.randomFruits = '';\n        this.timer;\n    }\n\n    start () {\n        this.reset();\n        this.renderStreak();\n        this.addMoveListener();\n        this.resetFruits();\n        this.timer = setInterval(this.setTimer.bind(this), 1000)\n        _util__WEBPACK_IMPORTED_MODULE_0__[\"findAllPos\"]()\n    };\n\n    reset () {\n        this.pause();\n        let circle = document.getElementById('circle');\n        circle.style.left = 200;\n        circle.style.top = 200;\n        let lb = document.getElementById('submit-leader-board');\n        lb.style.display = 'none';\n        this.lvl = 1;\n        this.streak = 0;\n        this.resetTimer();\n    }\n\n    pause() {\n        clearInterval(this.timer);\n    }\n\n    unPause() {\n        this.timer = setInterval(this.setTimer.bind(this), 1000);\n    }\n\n    win(target, current) {\n        let win = false\n\n        if (target.join(\" \") === current.replace(/\\n/g, \" \")) {\n            win = true\n        };\n\n        if (win) {\n            this.increaseLevel()\n        }\n        else {\n            this.streak = this.streak > 0 ? this.streak -= 1 : 0;\n            this.renderStreak()\n            _util__WEBPACK_IMPORTED_MODULE_0__[\"removeAllFruit\"]()\n            this.wrongModal('block')\n            setTimeout(this.wrongModal.bind(this), 500)\n        };\n    };\n\n    wrongModal(str = 'none') {\n        let wo = document.getElementById('wo-modal')\n        wo.style.display = `${str}`\n    };\n\n    increaseLevel() {\n        this.streak ++\n        if (this.lvl === 10) {\n            this.lvl = 10\n        } else {\n            this.lvl ++\n        }\n        this.resetFruits();\n        this.renderStreak();\n        this.addTime();\n    };\n\n    addTime() {\n        let timer = document.getElementById('timer');\n        let num = parseInt(timer.innerText)\n        timer.innerText = num + this.lvl\n    }\n\n    renderStreak() {\n        let ele = document.getElementById('streak');\n        ele.innerText = this.streak;\n    }\n\n    addMoveListener () {\n        document.addEventListener('keydown', this.move);\n    };\n\n\n    resetFruits() {\n        this.randomFruits = _util__WEBPACK_IMPORTED_MODULE_0__[\"randomFruit\"](Object.values(FRUITS), this.lvl);\n        this.deleteRandomFruits();\n        _util__WEBPACK_IMPORTED_MODULE_0__[\"removeAllFruit\"]();\n        _util__WEBPACK_IMPORTED_MODULE_0__[\"placeFruits\"]();\n        this.generateRandomFruits(this.randomFruits);\n    };\n\n    generateRandomFruits (arr) {\n        arr.forEach(ele => {\n            let basket = document.getElementById('target-basket');\n            let item = document.createElement('div');\n            item.setAttribute('class', 'target-fruit');\n            let pic = document.createTextNode(ele);\n            item.appendChild(pic);\n            basket.appendChild(item);\n        })\n    };\n\n    deleteRandomFruits () {\n        let fruits = document.querySelectorAll('.target-fruit');\n        fruits.forEach(fruit => {\n            fruit.remove()\n        })\n    };\n\n    setTimer() {\n        let timer = document.getElementById('timer');\n        let num = parseInt(timer.innerText)\n        if (num > 0) {\n            timer.innerText = (num - 1)\n        } else {\n            this.endGame();\n            this.resetTimer();\n        }\n    }\n\n    endGame () {\n        document.removeEventListener('keydown', this.move);\n        let goModal = document.getElementById('go-modal');\n        goModal.style.display = 'block';\n        let goCloseBtn = document.getElementById('go-closeBtn');\n        goCloseBtn.addEventListener('click', () => { goModal.style.display = 'none' });\n        let score = document.getElementById('streak').innerText;\n        let finalScore = document.getElementById('final-score');\n        finalScore.innerText = score;\n        let leaderBoard = document.getElementById('lb-list');\n        if (score >= leaderBoard.lastChild.innerText.slice(leaderBoard.lastChild.innerText.length-1)) {\n            let submit = document.getElementById('submit-leader-board');\n            submit.style.display = 'flex';\n            let btn = document.getElementById('name-submit')\n            btn.addEventListener('click', () => this.addToLeader(score,goModal))\n        }\n    }\n\n    addToLeader (score, modal) {\n        let i = document.getElementById('name-input').value;\n        if (!i.length) {\n            i = 'Mystery Pig'\n        }\n        _util__WEBPACK_IMPORTED_MODULE_0__[\"updateLeader\"](i, score);\n        modal.style.display = 'none';\n    }\n    \n    resetTimer () {\n        clearInterval(this.timer)\n        let timer = document.getElementById('timer');\n        timer.innerText = 60\n    }\n\n    move(e) {\n        let moveBy = 25\n\n        if (e.keyCode === 37 || e.keyCode === 65) {\n            circle.style.backgroundImage = \"url('./assets/piggy_left.png')\";\n            if (parseInt(circle.style.left) - 25 > 0) {\n                circle.style.left = parseInt(circle.style.left) - moveBy;\n            } else {\n                circle.style.left = 0\n            }\n            _util__WEBPACK_IMPORTED_MODULE_0__[\"addFruit\"]()\n        };\n\n        if (e.keyCode === 39 || e.keyCode === 68) {\n            circle.style.backgroundImage = \"url('./assets/piggy_right.png')\";\n            if (parseInt(circle.style.left) + 25 < 400) {\n                circle.style.left = parseInt(circle.style.left) + moveBy\n            } else {\n                circle.style.left = (400 - 25)\n            }\n            _util__WEBPACK_IMPORTED_MODULE_0__[\"addFruit\"]()\n        };\n\n        if (e.keyCode === 38 || e.keyCode === 87) {\n            if (parseInt(circle.style.top) - 25 > 0) {\n                circle.style.top = parseInt(circle.style.top) - moveBy\n                \n            } else {\n                circle.style.top = 0\n            }\n            _util__WEBPACK_IMPORTED_MODULE_0__[\"addFruit\"]()\n        };\n\n        if (e.keyCode === 40 || e.keyCode === 83) {\n            if (parseInt(circle.style.top) + 25 < 400) {\n                circle.style.top = parseInt(circle.style.top) + moveBy\n            } else {\n                circle.style.top = (400 - 25)\n            }\n            _util__WEBPACK_IMPORTED_MODULE_0__[\"addFruit\"]()    \n        }\n\n    }\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\n\n\nconsole.log('webpack is working');\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', ()=> {\n\n    let modal = document.getElementById('modal');\n    let closeBtn = document.getElementById('closeBtn');\n\n    const closeModal = () => {\n        modal.style.display = 'none';\n    }\n\n    closeBtn.addEventListener('click', closeModal);\n\n    const game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    // game.start();\n    let audio = document.getElementById('audio');\n\n    _util__WEBPACK_IMPORTED_MODULE_0__[\"setLeader\"]();\n\n    document.addEventListener('keydown', (e)=>{\n        if (e.keyCode === 13) {\n            let currFruits = document.getElementById('basket').innerText;\n            game.win(game.randomFruits, currFruits);\n        }\n\n        if (e.keyCode === 16) {\n            game.resetFruits()\n        }\n\n        if (e.keyCode === 18) {\n            _util__WEBPACK_IMPORTED_MODULE_0__[\"removeLastFruit\"]();\n        } \n        \n        if (e.keyCode === 32) {\n            game.start();\n        }\n\n        if (e.keyCode === 86) {\n            game.pause();\n        }\n\n        if(e.keyCode === 66) {\n            game.unPause();\n        }\n\n    })\n\n\n\n})\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: setLeader, updateLeader, removeLastFruit, removeFirstFruit, removeAllFruit, randPos, createPos, checkUnique, addList, addFruit, addFruits, randomFruit, replaceFruit, placeFruits, findAllPos, addControls, setControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setLeader\", function() { return setLeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateLeader\", function() { return updateLeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeLastFruit\", function() { return removeLastFruit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeFirstFruit\", function() { return removeFirstFruit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeAllFruit\", function() { return removeAllFruit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randPos\", function() { return randPos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPos\", function() { return createPos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkUnique\", function() { return checkUnique; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addList\", function() { return addList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFruit\", function() { return addFruit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFruits\", function() { return addFruits; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomFruit\", function() { return randomFruit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"replaceFruit\", function() { return replaceFruit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"placeFruits\", function() { return placeFruits; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findAllPos\", function() { return findAllPos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addControls\", function() { return addControls; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setControls\", function() { return setControls; });\nconst LEADERS = [\n    { name: 'Warthog', score: 1 },\n    { name: 'Tea-cup', score: 9 },\n    { name: 'Berkshire', score: 10 },\n    { name: 'Kunekune', score: 4 },\n    { name: 'Hamshire', score: 7 },\n    { name: 'Hereford', score: 5 },\n    { name: 'Mulefoot', score: 6 },\n    { name: 'Guinea', score: 8 },\n    { name: 'Gottingen', score: 2 },\n    { name: 'Bentheim', score: 3 }\n];\n\n\nconst setLeader = () => {\n\n    let leaders = LEADERS.sort((a,b) => (b.score - a.score)).slice(0,8)\n    let list = document.getElementById('lb-list')\n    leaders.forEach((leader, idx) => {\n        // let str = `${idx+1}. ${leader.name} ----- ${leader.score}`;\n        let str = setString(idx, leader.name, leader.score);\n        let item = document.createElement('li');\n        item.innerText = str;\n        if (leader.color) {\n            item.style.color = leader.color;\n        }\n        list.appendChild(item);\n    })\n};\n\nconst setString = (idx, name, score) => {\n    let str = `${idx+1}. `\n    let dashLength = 15 - (name.length);\n    str = str.concat(name + \" \");\n\n    while(dashLength > 0) {\n        str = str.concat(\"-\");\n        dashLength --;\n    }\n    str = str.concat(\" \" + score)\n    return str\n}   \n\nconst updateLeader = (name, score) => {\n    LEADERS.push({name, score, color: 'red'});\n    let list = document.getElementById('lb-list');\n    list.innerHTML = '';\n    setLeader();\n};\n\nconst removeLastFruit = () => {\n\n    let fruit = document.querySelector('.fruit-list:last-child');\n\n    if (fruit) {\n        fruit.remove();\n    }\n};\n\nconst removeFirstFruit = () => {\n    let fruit = document.querySelector('.fruit-list:first-child');\n\n    if(fruit) {\n        fruit.remove();\n    }\n}\n\nconst removeAllFruit = () => {\n    let fruits = document.querySelectorAll('.fruit-list');\n    fruits.forEach(fruit => {\n        fruit.remove()\n    })\n}\n \nconst randPos = () => {\n    let rand = Math.floor(Math.random() * 15);\n    return rand * 25\n}\n\nconst createPos = (current) => {\n\n    let unique = false;\n    let res;\n\n    while (!unique) {\n        let left = randPos()\n        let top = randPos()\n\n        if(checkUnique(current, [left, top])) {\n            unique = true\n            res = [left, top]\n        }\n\n    }\n\n    return res\n\n};\n\nconst checkUnique = (current, pos) => {\n\n    for(let i = 0; i < current.length; i ++) {\n        let ele = current[i]\n\n        if(pos[0] === ele[0] && pos[1] === ele[1]) {\n            return false\n        }\n\n        if (pos[0] === ele[0] + 25 && pos[1] === ele[1]) {\n            return false\n        }\n\n        if (pos[0] === ele[0] - 25 && pos[1] === ele[1]) {\n            return false\n        }\n\n        if (pos[0] === ele[0] && pos[1] === ele[1] + 25) {\n            return false\n        }\n\n        if (pos[0] === ele[0] && pos[1] === ele[1] - 25) {\n            return false\n        }\n        if (pos[0] === ele[0] + 25 && pos[1] === ele[1] + 25) {\n            return false\n        }\n        if (pos[0] === ele[0] + 25 && pos[1] === ele[1] - 25) {\n            return false\n        }\n        if (pos[0] === ele[0] - 25 && pos[1] === ele[1] - 25) {\n            return false\n        }\n        if (pos[0] === ele[0] - 25 && pos[1] === ele[1] + 25) {\n            return false\n        }\n    }\n\n    return true\n}\n\n\nconst addList = (str) => {\n    let basket = document.getElementById('basket')\n    if(basket.children.length > 9) {\n        removeFirstFruit()\n    }\n    \n    let list = document.createElement('li')\n    list.setAttribute('class', 'fruit-list')\n    let fruit = document.createTextNode(str)\n    list.appendChild(fruit)\n    basket.appendChild(list)\n}\n\nconst addFruit = () => {\n\n    if ((circle.style.left === apple.style.left) && (circle.style.top === apple.style.top)) {\n        addList('🍎');\n        replaceFruit('apple');\n    }\n\n    if ((circle.style.left === mango.style.left) && (circle.style.top === mango.style.top)) {\n        addList('🥭');\n        replaceFruit('mango');\n    }\n\n    if ((circle.style.left === orange.style.left) && (circle.style.top === orange.style.top)) {\n        addList('🍊');\n        replaceFruit('orange');\n    }\n\n    if ((circle.style.left === banana.style.left) && (circle.style.top === banana.style.top)) {\n        addList('🍌');\n        replaceFruit('banana');\n    }\n\n    if ((circle.style.left === grape.style.left) && (circle.style.top === grape.style.top)) {\n        addList('🍇');\n        replaceFruit('grape');\n    }\n\n    if ((circle.style.left === strawberry.style.left) && (circle.style.top === strawberry.style.top)) {\n        addList('🍓');\n        replaceFruit('strawberry');\n    }\n    if ((circle.style.left === watermelon.style.left) && (circle.style.top === watermelon.style.top)) {\n        addList('🍉');\n        replaceFruit('watermelon');\n    }\n    if ((circle.style.left === cherry.style.left) && (circle.style.top === cherry.style.top)) {\n        addList('🍒');\n        replaceFruit('cherry');\n    }\n    if ((circle.style.left === peach.style.left) && (circle.style.top === peach.style.top)) {\n        addList('🍑');\n        replaceFruit('peach');\n    }\n    if ((circle.style.left === pear.style.left) && (circle.style.top === pear.style.top)) {\n        addList('🍐');\n        replaceFruit('pear');\n    }\n    if ((circle.style.left === kiwi.style.left) && (circle.style.top === kiwi.style.top)) {\n        addList('🥝');\n        replaceFruit('kiwi');\n    }\n    if ((circle.style.left === melon.style.left) && (circle.style.top === melon.style.top)) {\n        addList('🍈');\n        replaceFruit('melon');\n    }\n    if ((circle.style.left === lemon.style.left) && (circle.style.top === lemon.style.top)) {\n        addList('🍋');\n        replaceFruit('lemon');\n    }\n    if ((circle.style.left === coco.style.left) && (circle.style.top === coco.style.top)) {\n        addList('🥥');\n        replaceFruit('coco');\n    }\n    if ((circle.style.left === green.style.left) && (circle.style.top === green.style.top)) {\n        addList('🍏');\n        replaceFruit('green');\n    }\n\n}\n\nconst addFruits = (fruits) => {\n    for (let key in fruits) {\n        let board = document.getElementById('board');\n        let fruit = document.createElement('div');\n        fruit.setAttribute('id', key);\n        fruit.setAttribute('class', 'fruit');\n        let pic = document.createTextNode(fruits[key]);\n        fruit.appendChild(pic)\n        board.appendChild(fruit)\n    }\n}\n\nconst randomFruit = (fruits, lvl=3) => {\n    let res = [];\n\n    while (res.length < lvl) {\n        let rand = Math.floor(Math.random() * fruits.length)\n        res.push(fruits[rand])\n    }\n    return res\n};\n\nconst replaceFruit = (str) => {\n    let current = findAllPos()\n    let fruit = document.getElementById(str);\n\n    let pos = createPos(current)\n    fruit.style.left = pos[0];\n    fruit.style.top = pos[1];\n}\n\nconst placeFruits = () => {\n    let circle = document.getElementById('circle')\n    let fruits = document.querySelectorAll('.fruit');\n\n    let currentPos = [[\n        Number(circle.style.left.slice(0, circle.style.left.length - 2)),\n        Number(circle.style.top.slice(0, circle.style.top.length - 2))]];\n\n    fruits.forEach(fruit => {\n        fruit.style.position = 'absolute';\n        let pos = createPos(currentPos);\n        let left = pos[0];\n        let top = pos[1]\n        fruit.style.left = left;\n        fruit.style.top = top;\n\n        currentPos.push(pos)\n    })\n};\n\nconst findAllPos = () => {\n    let circle = document.getElementById('circle')\n    let fruits = document.querySelectorAll('.fruit')\n    let res = [[\n        Number(circle.style.left.slice(0, circle.style.left.length - 2)), \n        Number(circle.style.top.slice(0, circle.style.top.length-2))]]\n\n    fruits.forEach(fruit => {\n        let left = Number(fruit.style.left.slice(0, fruit.style.left.length-2));\n        let top = Number(fruit.style.top.slice(0,fruit.style.top.length-2));\n\n        res.push([left, top])\n    })\n    return res\n}\n\nconst addControls = () => {\n    document.addEventListener('keydown', setControls)\n}\n\nconst setControls = (e) => {\n\n    if (e.keyCode === 13) {\n        let currFruits = document.getElementById('basket').innerText;\n        game.win(game.randomFruits, currFruits);\n    }\n\n    if (e.keyCode === 16) {\n        game.resetFruits()\n    }\n\n    if (e.keyCode === 18) {\n        Util.removeLastFruit();\n    }\n\n    if (e.keyCode === 32) {\n        game.start();\n    }\n\n    if (e.keyCode === 86) {\n        game.pause();\n    }\n\n    if (e.keyCode === 66) {\n        game.unPause();\n    }\n\n}\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });