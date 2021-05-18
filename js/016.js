'use strict'

let x = BigInt( 2 ** 1000);
let summ = 0;
let arrayX = Array.from(String(x));

arrayX.forEach(e => {
    summ += +e;
});

console.log(summ);