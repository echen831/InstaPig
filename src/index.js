import { move } from './move';
import * as Util from './util'




console.log('webpack is working');


document.addEventListener('DOMContentLoaded', ()=> {

    const FRUITS = {
       'apple': '🍎', 
       'mango': '🥭', 
       'orange': '🍊', 
       'banana': '🍌'
    };

    for(let key in FRUITS) {
        let board = document.getElementById('board');
        let fruit = document.createElement('div');
        fruit.setAttribute('id', key);
        fruit.setAttribute('class', 'fruit');
        let pic = document.createTextNode(FRUITS[key]);
        fruit.appendChild(pic)
        board.appendChild(fruit)
    }






    let board = document.querySelector('.board');
    board.style.width = 400;
    board.style.height = 400;
    
    
    let circle = document.querySelector('.circle');
    circle.style.position = 'absolute';
    circle.style.left = parseInt(board.style.width) / 2;
    circle.style.top = parseInt(board.style.height) / 2;
    
    
    let apple = document.getElementById('apple');
    let mango = document.getElementById('mango');
    let orange = document.getElementById('orange');
    let banana = document.getElementById('banana');

    apple.style.position = 'absolute';
    apple.style.left = Util.randPos();
    apple.style.top = Util.randPos();

    mango.style.position = 'absolute';
    mango.style.left = Util.randPos();
    mango.style.top = Util.randPos();

    orange.style.position = 'absolute';
    orange.style.left = Util.randPos();
    orange.style.top = Util.randPos();

    banana.style.position = 'absolute';
    banana.style.left = Util.randPos();
    banana.style.top = Util.randPos();



    let deleteBtn = document.getElementById('delete-btn')
    deleteBtn.addEventListener('click', Util.removeFruit)

    document.addEventListener('keydown', move)

})