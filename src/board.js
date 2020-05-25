import * as Util from './util'
import { FRUITS } from './game';


export default class Board {
    constructor(width = 400, height = 400) {
        this.board = document.querySelector('.board');
        this.board.style.width = width;
        this.board.style.height = height;

        this.circle = document.querySelector('.circle');
        this.circle.style.position = 'absolute';
        this.circle.style.left = parseInt(this.board.style.width) / 2;
        this.circle.style.top = parseInt(this.board.style.height) / 2;


        Util.addFruits(FRUITS)
        Util.placeFruits()

    }


}

