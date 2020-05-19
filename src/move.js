import * as Util from './util'




export const move = (e) => {
    let moveBy = 25
    switch (e.keyCode) {
        case 37:
            if (parseInt(circle.style.left) - 25 > 0) {
                circle.style.left = parseInt(circle.style.left) - moveBy
            } else {
                circle.style.left = 0
            }
            Util.addFruit()
            break;
        case 39:
            if (parseInt(circle.style.left) + 25 < 400) {
                circle.style.left = parseInt(circle.style.left) + moveBy
            } else {
                circle.style.left = (400 - 25)
            }
            Util.addFruit()
            break;
        case 38:
            if (parseInt(circle.style.top) - 25 > 0) {
                circle.style.top = parseInt(circle.style.top) - moveBy
            } else {
                circle.style.top = 0
            }
            Util.addFruit()

            break;
        case 40:
            if (parseInt(circle.style.top) + 25 < 400) {
                circle.style.top = parseInt(circle.style.top) + moveBy
            } else {
                circle.style.top = (400 - 25)
            }
            Util.addFruit()
            break;
        default:
            break;
    }
}