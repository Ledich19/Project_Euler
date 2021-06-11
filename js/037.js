'use strict'
/*Число 3797 обладает интересным свойством. 
Будучи само по себе простым числом, из него можно последовательно 
выбрасывать цифры слева направо, число же при этом остается
простым на каждом этапе: 3797, 797, 97, 7. Точно таким же 
способом можно выбрасывать цифры справа налево: 3797, 379, 37, 3.
Найдите сумму единственных одиннадцати простых чисел,
из которых можно выбрасывать цифры как справа налево,
так и слева направо, но числа при этом остаются простыми.
ПРИМЕЧАНИЕ: числа 2, 3, 5 и 7 таковыми не считаются.*/
let arrRasult = [];

for (let num = 10; arrRasult.length != 11; num++) {
    if (leftToRight(num) && rightTolLeft(num) && isPrime(num)) {
    
        arrRasult.push(num);
    }
}
console.log(arrRasult, arrRasult.reduce((summ, current) => {
    return summ + current;
}));

function leftToRight(num) {
    num = `${num}`;
    for (let i = 0; i < num.length; i++) {
        let num1 = num.slice(i);
        if (!isPrime(num1)) {
            return false;
        }
    }
    return true;
}

function rightTolLeft(num) {
    num = `${num}`;
    for (let i = 0; i < num.length; i++) {
        let num1 = num.substring(0, num.length - i);
        if (!isPrime(num1)) {
            return false;
        }
    }
    return true;
}

function isPrime(x) {
    if (x==1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}