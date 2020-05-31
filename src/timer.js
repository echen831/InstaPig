export const setTimer = () => {
    let timer = document.getElementById('timer');
    let num = parseInt(timer.innerText)
    if (num > 0) {
        timer.innerText = (num - 1)
    } else {
        alert('you lose');
        resetTimer();
    }
}

export const resetTimer = () => {
    let timer = document.getElementById('timer');
    timer.innerText = 60
}