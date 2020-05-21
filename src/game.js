import * as Util from './util';
import Board from './board';


const FRUITS = {
    'apple': '🍎',
    'mango': '🥭',
    'orange': '🍊',
    'banana': '🍌',
    'grape': '🍇',
    'strawberry': '🍓'
}

class Game {

    constructor() {
        this.board = new Board();
        this.lvl = 3;
        this.randomFruits = Util.randomFruit(Object.values(FRUITS), this.lvl)

    }

    start () {
        this.addMoveListener();
        this.addDeleteListener();
        this.generateRandomFruits()
    }

    win (target, current) {
        let win = false

        if (target.join(" ") === current.replace(/\n/g, " ")) {
            win = true
        }

        if (win) {
            alert('you win')
        } else {
            alert('keep trying')
        }
    }

    addMoveListener () {
        document.addEventListener('keydown', this.move);
    }

    addDeleteListener () {
        document.getElementById('rm-all-btn').addEventListener('click', Util.removeAllFruit);
        document.getElementById('rm-one-btn').addEventListener('click', Util.removeLastFruit);
    }

    generateRandomFruits () {
        Util.targetFruits(this.randomFruits)
    }

    move(e) {
        let moveBy = 25
        switch (e.keyCode) {
            case 37:
                if (parseInt(circle.style.left) - 25 > 0) {
                    circle.style.left = parseInt(circle.style.left) - moveBy
                } else {
                    circle.style.left = 0
                }
                Util.addFruit()
                break;
            case 39:
                if (parseInt(circle.style.left) + 25 < 400) {
                    circle.style.left = parseInt(circle.style.left) + moveBy
                } else {
                    circle.style.left = (400 - 25)
                }
                Util.addFruit()
                break;
            case 38:
                if (parseInt(circle.style.top) - 25 > 0) {
                    circle.style.top = parseInt(circle.style.top) - moveBy
                } else {
                    circle.style.top = 0
                }
                Util.addFruit()

                break;
            case 40:
                if (parseInt(circle.style.top) + 25 < 400) {
                    circle.style.top = parseInt(circle.style.top) + moveBy
                } else {
                    circle.style.top = (400 - 25)
                }
                Util.addFruit()
                break;
            default:
                break;
        }

    }

};

export default Game