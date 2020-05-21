import * as Util from './util';
import Board from './board';
import Game from './game';



console.log('webpack is working');

const FRUITS = Util.FRUITS

document.addEventListener('DOMContentLoaded', ()=> {

    Util.addFruits(FRUITS); // Use addFruits method from Util file to add fruits to page.


    // const board = new Board() // creating a new instance of board.

    const game = new Game()
    game.start()






    document.addEventListener('keydown', (e)=>{
        if (e.keyCode === 32) {
            let currFruits = document.getElementById('basket').innerText;
            game.win(game.randomFruits, currFruits)
        }
    })




    

})