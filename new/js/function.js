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