import * as Util from './util';
import Game from './game';
import { FRUITS } from './game';


console.log('webpack is working');


document.addEventListener('DOMContentLoaded', ()=> {

    Util.addFruits(FRUITS); // Use addFruits method from Util file to add fruits to page.

    const game = new Game()
    game.start()


    document.addEventListener('keydown', (e)=>{
        if (e.keyCode === 32) {
            let currFruits = document.getElementById('basket').innerText;
            game.win(game.randomFruits, currFruits);
        }

        if (e.keyCode === 16) {
            game.resetFruits()
        }

        if (e.keyCode === 18) {
            Util.removeLastFruit()
        }
    })


})