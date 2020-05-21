import * as Util from './util'
import Board from './board'



console.log('webpack is working');

const FRUITS = Util.FRUITS

document.addEventListener('DOMContentLoaded', ()=> {

    Util.addFruits(FRUITS); // Use addFruits method from Util file to add fruits to page.

    let fruits = Object.values(FRUITS); // Generate an array of random fruits using random fruits from Util file.
    let randomFruits = Util.randomFruit(fruits);
    Util.targetFruits(randomFruits) //produce them onto the target basket


    const board = new Board() // creating a new instance of board.

    const win = (target, current) => {
        let win = false

        if (target.join(" ") === current.replace(/\n/g, " ")) {
            win = true
        }

        if (win) {
            alert('you win')
        } else {
            alert('keep trying')
        }
    }




    document.addEventListener('keydown', (e)=>{
        if (e.keyCode === 32) {
            let currFruits = document.getElementById('basket').innerText;
            console.log(currFruits);
            console.log(randomFruits.join(''));
            win(randomFruits, currFruits)
        }
    })


    let deleteBtn = document.getElementById('rm-all-btn');
    deleteBtn.addEventListener('click', Util.removeAllFruit);

    document.getElementById('rm-one-btn').addEventListener('click', Util.removeLastFruit);


    document.addEventListener('keydown', board.move); // adding movements to arrow keys

})