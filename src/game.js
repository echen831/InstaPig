import * as Util from './util';
import Board from './board';

export const FRUITS = {
    'apple': '🍎',
    'mango': '🥭',
    'orange': '🍊',
    'banana': '🍌',
    'grape': '🍇',
    'strawberry': '🍓',
    'watermelon': '🍉',
    'cherry':'🍒',
    'peach':'🍑',
    'pear':'🍐',
    'kiwi':'🥝',
    'melon':'🍈',
    'lemon':'🍋',
    'coco':'🥥',
    'green':'🍏'
}

class Game {

    constructor() {
        this.board = new Board();
        this.lvl = 1;
        this.streak = 0;
        this.randomFruits = '';
        this.timer;
    }

    start () {
        this.reset();
        this.renderStreak();
        this.addMoveListener();
        this.resetFruits();
        this.timer = setInterval(this.setTimer.bind(this), 1000)
        Util.findAllPos()
    };

    reset () {
        this.pause();
        this.lvl = 1;
        this.streak = 0;
        this.resetTimer();
    }

    pause() {
        clearInterval(this.timer);
    }

    unPause() {
        this.timer = setInterval(this.setTimer.bind(this), 1000);
    }

    win(target, current) {
        let win = false

        if (target.join(" ") === current.replace(/\n/g, " ")) {
            win = true
        };

        if (win) {
            this.increaseLevel()
        }
        else {
            this.streak = this.streak > 0 ? this.streak -= 1 : 0;
            this.renderStreak()
            Util.removeAllFruit()
            this.wrongModal('block')
            setTimeout(this.wrongModal.bind(this), 500)
        };
    };

    wrongModal(str = 'none') {
        let wo = document.getElementById('wo-modal')
        wo.style.display = `${str}`
    };

    increaseLevel() {
        this.streak ++
        if (this.lvl === 10) {
            this.lvl = 10
        } else {
            this.lvl ++
        }
        this.resetFruits();
        this.renderStreak();
        this.addTime();
    }

    addTime() {
        let timer = document.getElementById('timer');
        let num = parseInt(timer.innerText)
        timer.innerText = num + this.lvl
    }

    renderStreak() {
        let ele = document.getElementById('streak');
        ele.innerText = this.streak;
    }

    addMoveListener () {
        document.addEventListener('keydown', this.move);
    };

    resetFruits() {
        this.randomFruits = Util.randomFruit(Object.values(FRUITS), this.lvl);
        this.deleteRandomFruits();
        Util.removeAllFruit();
        Util.placeFruits();
        this.generateRandomFruits(this.randomFruits);
    };

    generateRandomFruits (arr) {
        arr.forEach(ele => {
            let basket = document.getElementById('target-basket');
            let item = document.createElement('div');
            item.setAttribute('class', 'target-fruit');
            let pic = document.createTextNode(ele);
            item.appendChild(pic);
            basket.appendChild(item);
        })
    };

    deleteRandomFruits () {
        let fruits = document.querySelectorAll('.target-fruit');
        fruits.forEach(fruit => {
            fruit.remove()
        })
    };

    setTimer() {
        let timer = document.getElementById('timer');
        let num = parseInt(timer.innerText)
        if (num > 0) {
            timer.innerText = (num - 1)
        } else {
            this.endGame();
            this.resetTimer();
        }
    }

    endGame () {
        document.removeEventListener('keydown', this.move);
        let goModal = document.getElementById('go-modal');
        goModal.style.display = 'block';
        let goCloseBtn = document.getElementById('go-closeBtn');
        goCloseBtn.addEventListener('click', () => { goModal.style.display = 'none' });
        let score = document.getElementById('streak').innerText;
        let finalScore = document.getElementById('final-score');
        finalScore.innerText = score;

        let input = document.getElementById('name-input').value;
        let submit = document.getElementById('name-submit');
        submit.addEventListener('click', () => {console.log(score)})
    }
    
    resetTimer () {
        clearInterval(this.timer)
        let timer = document.getElementById('timer');
        timer.innerText = 60
    }

    move(e) {
        let moveBy = 25

        if (e.keyCode === 37 || e.keyCode === 65) {
            circle.style.backgroundImage = "url('./assets/piggy_left.png')";
            if (parseInt(circle.style.left) - 25 > 0) {
                circle.style.left = parseInt(circle.style.left) - moveBy;
            } else {
                circle.style.left = 0
            }
            Util.addFruit()
        };

        if (e.keyCode === 39 || e.keyCode === 68) {
            circle.style.backgroundImage = "url('./assets/piggy_right.png')";
            if (parseInt(circle.style.left) + 25 < 400) {
                circle.style.left = parseInt(circle.style.left) + moveBy
            } else {
                circle.style.left = (400 - 25)
            }
            Util.addFruit()
        };

        if (e.keyCode === 38 || e.keyCode === 87) {
            if (parseInt(circle.style.top) - 25 > 0) {
                circle.style.top = parseInt(circle.style.top) - moveBy
                
            } else {
                circle.style.top = 0
            }
            Util.addFruit()
        };

        if (e.keyCode === 40 || e.keyCode === 83) {
            if (parseInt(circle.style.top) + 25 < 400) {
                circle.style.top = parseInt(circle.style.top) + moveBy
            } else {
                circle.style.top = (400 - 25)
            }
            Util.addFruit()    
        }

    }

};

export default Game;