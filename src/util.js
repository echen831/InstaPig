
export const removeLastFruit = () => {

    let fruit = document.querySelector('.fruit-list:last-child');

    if (fruit) {
        fruit.remove();
    }

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

export const createPos = (current) => {

    let unique = false;
    let res;

    while (!unique) {
        let left = randPos()
        let top = randPos()

        if(checkUnique(current, [left, top])) {
            unique = true
            res = [left, top]
        }

    }

    return res

};

export const checkUnique = (current, pos) => {

    for(let i = 0; i < current.length; i ++) {
        let ele = current[i]

        if(pos[0] === ele[0] && pos[1] === ele[1]) {
            return false
        }
    }

    return true
}


export const addList = (str) => {
    let basket = document.getElementById('basket')
    if(basket.children.length > 14) {
        return
    }
    
    let list = document.createElement('li')
    list.setAttribute('class', 'fruit-list')
    let fruit = document.createTextNode(str)
    list.appendChild(fruit)
    basket.appendChild(list)
}

export const addFruit = () => {

    if ((circle.style.left === apple.style.left) && (circle.style.top === apple.style.top)) {
        addList('🍎');
        replaceFruit('apple');
    }

    if ((circle.style.left === mango.style.left) && (circle.style.top === mango.style.top)) {
        addList('🥭');
        replaceFruit('mango');
    }

    if ((circle.style.left === orange.style.left) && (circle.style.top === orange.style.top)) {
        addList('🍊');
        replaceFruit('orange');
    }

    if ((circle.style.left === banana.style.left) && (circle.style.top === banana.style.top)) {
        addList('🍌');
        replaceFruit('banana');
    }

    if ((circle.style.left === grape.style.left) && (circle.style.top === grape.style.top)) {
        addList('🍇');
        replaceFruit('grape');
    }

    if ((circle.style.left === strawberry.style.left) && (circle.style.top === strawberry.style.top)) {
        addList('🍓');
        replaceFruit('strawberry');
    }
    if ((circle.style.left === watermelon.style.left) && (circle.style.top === watermelon.style.top)) {
        addList('🍉');
        replaceFruit('watermelon');
    }
    if ((circle.style.left === cherry.style.left) && (circle.style.top === cherry.style.top)) {
        addList('🍒');
        replaceFruit('cherry');
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

export const replaceFruit = (str) => {
    let current = findAllPos()
    let fruit = document.getElementById(str);

    let pos = createPos(current)
    fruit.style.left = pos[0];
    fruit.style.top = pos[1];
}

export const placeFruits = () => {
    let circle = document.getElementById('circle')
    let fruits = document.querySelectorAll('.fruit');

    let currentPos = [[
        Number(circle.style.left.slice(0, circle.style.left.length - 2)),
        Number(circle.style.top.slice(0, circle.style.top.length - 2))]];

    fruits.forEach(fruit => {
        fruit.style.position = 'absolute';
        let pos = createPos(currentPos);
        let left = pos[0];
        let top = pos[1]
        fruit.style.left = left;
        fruit.style.top = top;

        currentPos.push(pos)
    })
};

export const findAllPos = () => {
    let circle = document.getElementById('circle')
    let fruits = document.querySelectorAll('.fruit')
    let res = [[
        Number(circle.style.left.slice(0, circle.style.left.length - 2)), 
        Number(circle.style.top.slice(0, circle.style.top.length-2))]]

    fruits.forEach(fruit => {
        let left = Number(fruit.style.left.slice(0, fruit.style.left.length-2));
        let top = Number(fruit.style.top.slice(0,fruit.style.top.length-2));

        res.push([left, top])
    })
    return res
}






