"use strict";
//
//function hello() {
//    console.log('Hello world');
//};
//
//hello();
//
//function hi() {
//    console.log('Say hi');
//};
//
//hi();
//
//const arr = [4, 1, 15, 22, 49, 30],
//    sorted = arr.sort(comperNum);
//
//function comperNum(a, b) {
//    return a - b;
//}
//
//console.log(sorted)

// To string
console.log(typeof(String(43)));
console.log(typeof(5 + 'dsf'));
console.log(5 + 'dsf');
const num = 5;
console.log('https://vk.com/' + num);
const fontSize = 25 + 'px';
//To number
console.log(typeof(Number('43')));
console.log(typeof(+'5'));
console.log(typeof(parseInt('5px', 10)));

const an = +prompt('How old are you?', '');

//To boolean

//0, '', null, undefined, NaN
let switcher = null;

if (switcher) {
    console.log('it is worcking.....')
} else {
    console.log('It does not work....')
};

switcher = 1;

if (switcher) {
    console.log('it is worcking.....')
} else {
    console.log('It does not work....')
};

console.log(typeof(Boolean(1)));

console.log(typeof(!!'1'));

let x = 5;

console.log(++x);

console.log(1 && 2 && 0 && null && undefined) // и запинается на лжи
                                              // или запинается на правде

console.log(!!( 1 && 3 ) === (1 && 3))
console.log(typeof(+'inf'));
