export const setTimer = () => {
    let timer = document.getElementById('timer');
    let num = parseInt(timer.innerText)
    if (num > 0) {
        timer.innerText = (num - 1)
    } else {
        let modal = document.getElementById('modal')
        modal.style.display = 'block'
        // resetTimer();
    }
}

export const resetTimer = () => {
    // clearInterval(this.timer)
    let timer = document.getElementById('timer');
    timer.innerText = 60
}
