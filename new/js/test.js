"use strict";

if (4 == 5) {
    console.log('ok!');
}else{
    console.log('not ok')
}



/* if ( 100 > num > 0) {
    console.log('ok')
} else {
    console.log('not ok')
}
const num = -50;
(num == 50)?console.log('ok'):console.log('not ok'); */

/* const num = -50;
switch (num) {
    case 49:
        console.log('Not 49');
        break;
    case 50:
        console.log('Not 50');
        break;
    case -51:
        console.log('it is - 50')    
        break;
    default:
        console.log('You lose, sorry')
} */

/* let num = 50;

while (num < 55) {
    console.log(num)
    num++;
}; */
let num = 50

do {
    console.log(num)
    num++;
} while (num < 55)


for (let i = 1; i < 15; i++) {
    if (i === 6, i === 9) {
        //break;
        continue;
    }
    console.log(i)
}

