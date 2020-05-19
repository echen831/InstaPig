import * as Util from './util'

export default class Board {
    constructor() {
        this.board = document.querySelector('.board');
        this.board.style.width = 400;
        this.board.style.height = 400;

        this.circle = document.querySelector('.circle');
        this.circle.style.position = 'absolute';
        this.circle.style.left = parseInt(this.board.style.width) / 2;
        this.circle.style.top = parseInt(this.board.style.height) / 2;

        this.apple = document.getElementById('apple');
        this.apple.style.position = 'absolute';
        this.apple.style.left = Util.randPos();
        this.apple.style.top = Util.randPos();

        this.mango = document.getElementById('mango');
        this.mango.style.position = 'absolute';
        this.mango.style.left = Util.randPos();
        this.mango.style.top = Util.randPos();

        this.orange = document.getElementById('orange');
        this.orange.style.position = 'absolute';
        this.orange.style.left = Util.randPos();
        this.orange.style.top = Util.randPos();

        this.banana = document.getElementById('banana');
        this.banana.style.position = 'absolute';
        this.banana.style.left = Util.randPos();
        this.banana.style.top = Util.randPos();

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


}

