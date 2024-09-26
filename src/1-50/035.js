'use strict'
/* Число 197 называется круговым простым числом,
потому что все перестановки его цифр с конца 
в начало являются простыми числами: 197, 719 и 971.
Существует тринадцать таких простых чисел меньше 100:
2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79 и 97.
Сколько существует круговых простых чисел меньше миллиона? */
let count = 0;

for (let i = 2; i < 1000000; i++) {
    let array = rotation(i);
    if (isArrayOfPrimes(array)) {
        count++;
    }
}
console.log(count);

function rotation(num) {
    num = `${num}`;
    let arr = [];
    for (let i = 0; i < num.length; i++) {
        arr.push(parseInt(num));
        let num1 = num.slice(0, num.length - 1);
        let num2 = num.slice(num.length - 1);
        num = `${num2}${num1}`;
    }
    return arr;
}

function isArrayOfPrimes(arr) {
    for (let j = 0; j < arr.length; j++) {
        for (let i = 2; i <= Math.sqrt(arr[j]); i++) {
            if (arr[j] % i == 0) {
                return false;
            }
        }
    }
    return true;
}