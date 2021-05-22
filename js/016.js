'use strict'
// 215 = 32768, сумма цифр этого числа равна 3 + 2 + 7 + 6 + 8 = 26.
// Какова сумма цифр числа 21000?

let x = BigInt( 2 ** 1000);
let summ = 0;
let arrayX = Array.from(String(x));

arrayX.forEach(e => {
    summ += +e;
});

console.log(summ);