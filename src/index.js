import { move } from './move';
import * as Util from './util'




console.log('webpack is working');


document.addEventListener('DOMContentLoaded', ()=> {

    const FRUITS = ['🍎', '🥭', '🍊', '🍌'];
    const FRUITS_STR = ['apple', 'mango', 'orange', 'banana'];


    let circle = document.querySelector('.circle');
    let board = document.querySelector('.board');
    let apple = document.getElementById('apple');
    let mango = document.getElementById('mango');
    let orange = document.getElementById('orange');
    let banana = document.getElementById('banana');

    board.style.width = 400;
    board.style.height = 400;

    circle.style.position = 'absolute';
    circle.style.left = parseInt(board.style.width) / 2;
    circle.style.top = parseInt(board.style.height) / 2;

    const randPos = () => {
        let rand = Math.floor(Math.random() * 15);
        return rand * 25
    }


    apple.style.position = 'absolute';
    apple.style.left = randPos();
    apple.style.top = randPos();

    mango.style.position = 'absolute';
    mango.style.left = randPos();
    mango.style.top = randPos();

    orange.style.position = 'absolute';
    orange.style.left = randPos();
    orange.style.top = randPos();

    banana.style.position = 'absolute';
    banana.style.left = randPos();
    banana.style.top = randPos();




    document.addEventListener('click', Util.removeFruit)
    document.addEventListener('keydown', move)

})