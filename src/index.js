import * as Util from './util'
import Board from './board'



console.log('webpack is working');

const FRUITS = {
    'apple': '🍎',
    'mango': '🥭',
    'orange': '🍊',
    'banana': '🍌'
};

document.addEventListener('DOMContentLoaded', ()=> {

    Util.addFruits(FRUITS)

    const board = new Board()
    
    


    let deleteBtn = document.getElementById('delete-btn')
    deleteBtn.addEventListener('click', Util.removeFruit)

    document.addEventListener('keydown', board.move)

})