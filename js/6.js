'use strict'

let sum1 = 0;
let sum2 = 0;

for (let i = 0; i <= 100; i++) {
    sum1 = sum1 + i * i;
    sum2 = sum2 + i;
}

console.log(sum2 * sum2 - sum1);