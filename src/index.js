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


    apple.style.position = 'absolute';
    apple.style.left = 0;
    apple.style.top = 0;

    mango.style.position = 'absolute';
    mango.style.left = 125;
    mango.style.top = 0;

    orange.style.position = 'absolute';
    orange.style.left = 250;
    orange.style.top = 0;

    banana.style.position = 'absolute';
    banana.style.left = 375;
    banana.style.top = 0;




    document.addEventListener('click', Util.removeFruit)
    document.addEventListener('keydown', move)

})