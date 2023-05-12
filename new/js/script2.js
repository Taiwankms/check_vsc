"use strict";

const str = 'some str';
const newStr = new String(str);

//console.log(typeof(str));
//console.log(typeof(newStr));

console.dir([1, 2, 3])

const solder = {
    health: 400,
    armor: 150,
    sayHi: function() {
        console.log('Hi')
    }
};
const john = {
    health: 100,    
};

Object.setPrototypeOf(john, solder)
john.sayHi()