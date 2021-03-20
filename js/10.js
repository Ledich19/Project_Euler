'use strict'

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