import * as Util from './util';
import Game from './game';
import { FRUITS } from './game';


console.log('webpack is working');


document.addEventListener('DOMContentLoaded', ()=> {


    const game = new Game();
    game.start();
    let audio = document.getElementById('audio');
    audio.loop = true;

    
    
    

    document.addEventListener('keydown', (e)=>{
        if (e.keyCode === 13) {
            let currFruits = document.getElementById('basket').innerText;
            game.win(game.randomFruits, currFruits);
        }

        if (e.keyCode === 16) {
            game.resetFruits()
        }

        if (e.keyCode === 18) {
            Util.removeLastFruit();
        } 
        
        if (e.keyCode === 32) {
            game.start();
            audio.play();
        }
    })



})