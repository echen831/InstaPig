import * as Util from './util';
import Game from './game';


console.log('webpack is working');



document.addEventListener('DOMContentLoaded', ()=> {

    const game = new Game();
    let modal = document.getElementById('modal');
    let closeBtn = document.getElementById('closeBtn');

    const closeModal = () => {
        modal.style.display = 'none';
        document.addEventListener('keydown', (e) => Util.controls(e,game))
    }

    closeBtn.addEventListener('click', closeModal);
    let audio = document.getElementById('audio');

    Util.setLeader();

    // document.addEventListener('keydown', (e)=>{
    //     if (e.keyCode === 13) {
    //         let currFruits = document.getElementById('basket').innerText;
    //         game.win(game.randomFruits, currFruits);
    //     }

    //     if (e.keyCode === 16) {
    //         game.resetFruits()
    //     }

    //     if (e.keyCode === 18) {
    //         Util.removeLastFruit();
    //     } 
        
    //     if (e.keyCode === 32) {
    //         game.start();
    //     }

    //     if (e.keyCode === 86) {
    //         game.pause();
    //     }

    //     if(e.keyCode === 66) {
    //         game.unPause();
    //     }

    // })



})