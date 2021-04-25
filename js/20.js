'use strict'
// n! означает n × (n − 1) × ... × 3 × 2 × 1
// Например, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// и сумма цифр в числе 10! равна 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
// Найдите сумму цифр в числе 100!.

let stringNum = String(factorial(100));
console.log(summString(stringNum));

function factorial(num) {
    num = BigInt(num);
    if (num == 1n) {
        return num;
    }
    return (num * factorial(num - 1n))
}

function summString(string) {
    let summ = 0;
    for (let i = 0; i < string.length; i++) {
        summ += +string[i];
    }
    return summ;
}
