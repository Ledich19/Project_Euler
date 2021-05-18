'use strict'
// Сумма простых чисел меньше 10 равна 2 + 3 + 5 + 7 = 17.
// Найдите сумму всех простых чисел меньше двух миллионов.

let summ = 0;

for (let i = 2; i < 2000000; i++) {
    if (primeCheck(i)) {
        summ += i;
    }
}
console.log(summ);

function primeCheck(x) {
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}