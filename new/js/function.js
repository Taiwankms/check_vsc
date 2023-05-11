"use strict";


let num = 20

function my_first_func(text) {
    console.log(text)
    let num = 5
}

my_first_func('Hello world')
console.log(num)

function calc(a, b) {
    return (a + b);
}

console.log(calc(3, 2));
console.log(calc(4, 2));
console.log(calc(6, 2));
console.log(calc(9, 2));

function ret() {
    let num = 50;


    //

    return num
}

let anotherNum = ret();
console.log(anotherNum)

let varib = 'text';

console.log(varib.toLocaleUpperCase())

const fruit = 'Some fruit'

console.log(fruit.indexOf('fruit'))

const logg = 'hello world';

console.log(logg.substring(5))

let numb = '4.5px';
//console.log(Math.round(numb))
console.log(parseFloat(numb))

function first() {
    // Do something
    setTimeout(function() {
        console.log(1)
    }, 500);
};

function second() {
    console.log(2)
};

first();
second();


function learnJs(lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {
    console.log('я прошел этот урок');
}

learnJs('JavaScript', done)

const obj = {
    a: 5,
    b: 1,
};

const copy = obj;// передает ссылку

copy.a = 10;
console.log(copy);
console.log(obj)

function objCopy(mainObj) {
    let copyObj = {};
    //let key;
    for (key in mainObj) {
        copyObj[key] = mainObj[key];
    }
    return copyObj
}

const numbers = {
    a: 2,
    b: 4,
    c: {
        x: 7,
        y: 9,
        z: 15,
    }
};

const copyNumbers = objCopy(numbers);
copyNumbers.a = 10;
console.log(numbers);
console.log(copyNumbers);

const add = {
    d: 18,
    e: 19
};

const clone = Object.assign({}, add);
clone.d = 21;
console.log(add);
console.log(clone)

const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();
newArr[0] = 4;
console.log(newArr)
console.log(oldArr)

const video = ['youtube', 'rutube', 'tiktok'],
      blog = ['livejournal', 'wordpress', 'habr'],
      internet = [...video, ...blog, 'facebook', 'vk'];

console.log(internet.length)

 



