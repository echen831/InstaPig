export const addList = (str) => {
    let basket = document.getElementById('basket')
    let list = document.createElement('li')
    list.setAttribute('class', 'fruit-list')
    let fruit = document.createTextNode(str)
    list.appendChild(fruit)
    basket.appendChild(list)
}

export const addFruit = () => {


    if ((circle.style.left === apple.style.left) && (circle.style.top === apple.style.top)) {
        addList('🍎');
    }

    if ((circle.style.left === mango.style.left) && (circle.style.top === mango.style.top)) {
        addList('🥭');
    }

    if ((circle.style.left === orange.style.left) && (circle.style.top === orange.style.top)) {
        addList('🍊');
    }

    if ((circle.style.left === banana.style.left) && (circle.style.top === banana.style.top)) {
        addList('🍌');
    }
}


export const move = (e) => {
    let moveBy = 25
    switch (e.keyCode) {
        case 37:
            if (parseInt(circle.style.left) - 25 > 0) {
                circle.style.left = parseInt(circle.style.left) - moveBy
            } else {
                circle.style.left = 0
            }
            addFruit()
            break;
        case 39:
            if (parseInt(circle.style.left) + 25 < 400) {
                circle.style.left = parseInt(circle.style.left) + moveBy
            } else {
                circle.style.left = (400 - 25)
            }
            addFruit()
            break;
        case 38:
            if (parseInt(circle.style.top) - 25 > 0) {
                circle.style.top = parseInt(circle.style.top) - moveBy
            } else {
                circle.style.top = 0
            }
            addFruit()

            break;
        case 40:
            if (parseInt(circle.style.top) + 25 < 400) {
                circle.style.top = parseInt(circle.style.top) + moveBy
            } else {
                circle.style.top = (400 - 25)
            }
            addFruit()
            break;
        default:
            break;
    }
}