import * as Util from './util'
import Board from './board'



console.log('webpack is working');

const FRUITS = {
    'apple': '🍎',
    'mango': '🥭',
    'orange': '🍊',
    'banana': '🍌',
    'grape': '🍇',
    'strawberry': '🍓'
};

document.addEventListener('DOMContentLoaded', ()=> {

    Util.addFruits(FRUITS)

    let fruits = Object.values(FRUITS)
    Util.randomFruit(fruits)
    window.randomFruit = Util.randomFruit

    const board = new Board()

    window.circle = circle
    window.grape = grape

    document.addEventListener('move', () => {

        if ((circle.style.left === grape.style.left) && (circle.style.top === grape.style.top)) {
            Util.addList('🍇');
        }
    })

    let deleteBtn = document.getElementById('delete-btn')
    deleteBtn.addEventListener('click', Util.removeFruit)

    document.addEventListener('keydown', board.move)

})