import * as Util from './util'

export default class Board {
    constructor(width = 400, height = 400) {
        this.board = document.querySelector('.board');
        this.board.style.width = width;
        this.board.style.height = height;

        this.circle = document.querySelector('.circle');
        this.circle.style.position = 'absolute';
        this.circle.style.left = parseInt(this.board.style.width) / 2;
        this.circle.style.top = parseInt(this.board.style.height) / 2;

        Util.placeFruits()
        // this.fruits = document.querySelectorAll('.fruit');

        // this.fruits.forEach(fruit => {
        //     fruit.style.position = 'absolute';
        //     fruit.style.left = Util.randPos();
        //     fruit.style.top = Util.randPos();
        // })

    }


}

