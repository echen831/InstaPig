const LEADERS = [
    { name: 'Warthog', score: 1 },
    { name: 'Tea-cup', score: 9 },
    { name: 'Berkshire', score: 10 },
    { name: 'Kunekune', score: 4 },
    { name: 'Hamshire', score: 7 },
    { name: 'Hereford', score: 5 },
    { name: 'Mulefoot', score: 6 },
    { name: 'Guinea', score: 8 },
    { name: 'Gottingen', score: 2 },
    { name: 'Bentheim', score: 3 }
];


export const setLeader = () => {

    let leaders = LEADERS.sort((a,b) => (b.score - a.score)).slice(0,8)
    let list = document.getElementById('lb-list')
    leaders.forEach((leader, idx) => {
        // let str = `${idx+1}. ${leader.name} ----- ${leader.score}`;
        let str = setString(idx, leader.name, leader.score);
        let item = document.createElement('li');
        item.innerText = str;
        if (leader.color) {
            item.style.color = leader.color;
        }
        list.appendChild(item);
    })
};

const setString = (idx, name, score) => {
    let str = `${idx+1}. `
    let dashLength = 15 - (name.length);
    str = str.concat(name + " ");

    while(dashLength > 0) {
        str = str.concat("-");
        dashLength --;
    }
    str = str.concat(" " + score)
    return str
}   

export const updateLeader = (name, score) => {
    LEADERS.push({name, score, color: 'red'});
    let list = document.getElementById('lb-list');
    list.innerHTML = '';
    setLeader();
};

export const removeLastFruit = () => {

    let fruit = document.querySelector('.fruit-list:last-child');

    if (fruit) {
        fruit.remove();
    }
};

export const removeFirstFruit = () => {
    let fruit = document.querySelector('.fruit-list:first-child');

    if(fruit) {
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

        if (pos[0] === ele[0] + 25 && pos[1] === ele[1]) {
            return false
        }

        if (pos[0] === ele[0] - 25 && pos[1] === ele[1]) {
            return false
        }

        if (pos[0] === ele[0] && pos[1] === ele[1] + 25) {
            return false
        }

        if (pos[0] === ele[0] && pos[1] === ele[1] - 25) {
            return false
        }
        if (pos[0] === ele[0] + 25 && pos[1] === ele[1] + 25) {
            return false
        }
        if (pos[0] === ele[0] + 25 && pos[1] === ele[1] - 25) {
            return false
        }
        if (pos[0] === ele[0] - 25 && pos[1] === ele[1] - 25) {
            return false
        }
        if (pos[0] === ele[0] - 25 && pos[1] === ele[1] + 25) {
            return false
        }
    }

    return true
}


export const addList = (str) => {
    let basket = document.getElementById('basket')
    if(basket.children.length > 9) {
        removeFirstFruit()
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
    if ((circle.style.left === peach.style.left) && (circle.style.top === peach.style.top)) {
        addList('🍑');
        replaceFruit('peach');
    }
    if ((circle.style.left === pear.style.left) && (circle.style.top === pear.style.top)) {
        addList('🍐');
        replaceFruit('pear');
    }
    if ((circle.style.left === kiwi.style.left) && (circle.style.top === kiwi.style.top)) {
        addList('🥝');
        replaceFruit('kiwi');
    }
    if ((circle.style.left === melon.style.left) && (circle.style.top === melon.style.top)) {
        addList('🍈');
        replaceFruit('melon');
    }
    if ((circle.style.left === lemon.style.left) && (circle.style.top === lemon.style.top)) {
        addList('🍋');
        replaceFruit('lemon');
    }
    if ((circle.style.left === coco.style.left) && (circle.style.top === coco.style.top)) {
        addList('🥥');
        replaceFruit('coco');
    }
    if ((circle.style.left === green.style.left) && (circle.style.top === green.style.top)) {
        addList('🍏');
        replaceFruit('green');
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


export const controls = (e, game) => {
    
    if (e.keyCode === 13) {
        let currFruits = document.getElementById('basket').innerText;
        game.win(game.randomFruits, currFruits);
    }

    if (e.keyCode === 16) {
        game.resetFruits()
    }

    if (e.keyCode === 18) {
        removeLastFruit();
    }

    if (e.keyCode === 32) {
        game.start();
    }

    if (e.keyCode === 86) {
        game.pause();
    }

    if (e.keyCode === 66) {
        game.unPause();
    }

    

}






