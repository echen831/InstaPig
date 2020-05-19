export const removeFruit = () => {

    let fruit = document.querySelector('.fruit-list:last-child');
    fruit.remove();

}

export const randPos = () => {
    let rand = Math.floor(Math.random() * 15);
    return rand * 25
}


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