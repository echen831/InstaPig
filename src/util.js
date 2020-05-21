export const FRUITS = {
    'apple': '🍎',
    'mango': '🥭',
    'orange': '🍊',
    'banana': '🍌',
    'grape': '🍇',
    'strawberry': '🍓'
}

export const removeLastFruit = () => {

    let fruit = document.querySelector('.fruit-list:last-child');
    fruit.remove();

}

export const removeAllFruit = () => {
    let fruits = document.querySelectorAll('.fruit-list');
    fruits.forEach(fruit => {
        fruit.remove()
    })
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

    if ((circle.style.left === grape.style.left) && (circle.style.top === grape.style.top)) {
        addList('🍇');
    }

    if ((circle.style.left === strawberry.style.left) && (circle.style.top === strawberry.style.top)) {
        addList('🍓');
    }
}

export const addFruits = (fruits) => {
    for (let key in fruits) {
        let board = document.getElementById('board');
        let fruit = document.createElement('div');
        fruit.setAttribute('id', key);
        fruit.setAttribute('class', 'fruit');
        let pic = document.createTextNode(fruits[key]);
        fruit.appendChild(pic)
        board.appendChild(fruit)
    }
}

export const randomFruit = (fruits, lvl=3) => {
    let res = [];

    while (res.length < lvl) {
        let rand = Math.floor(Math.random() * fruits.length)
        res.push(fruits[rand])
    }
    return res
};

export const targetFruits = (arr) => {
    arr.forEach(ele => {
        let basket = document.getElementById('target-basket');
        let item = document.createElement('div');
        item.setAttribute('class', 'target-fruit');
        let pic = document.createTextNode(ele);
        item.appendChild(pic);
        basket.appendChild(item);
    })
};
