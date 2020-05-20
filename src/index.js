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

    Util.addFruits(FRUITS); // Use addFruits method from Util file to add fruits to page.

    let fruits = Object.values(FRUITS); // Generate an array of 4 random fruits using random fruits from Util file.
    Util.randomFruit(fruits);

    const board = new Board() // creating a new instance of board.


    let deleteBtn = document.getElementById('delete-btn')
    deleteBtn.addEventListener('click', Util.removeFruit)

    document.addEventListener('keydown', board.move) // adding movements to arrow keys

})