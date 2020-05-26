export const setTimer = () => {
    let timer = document.getElementById('timer');
    let num = parseInt(timer.innerText)
    if (num > 0) {
        timer.innerText = (num - 1)
    } else {
        // console.log('you lose')
    }
}

export const resetTimer = () => {
    let timer = document.getElementById('timer');
    timer.innerText = 60
}