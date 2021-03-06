'use strict'
// Эйлер опубликовал свою замечательную квадратичную формулу:
// n2+n+41
// Оказалось, что согласно данной формуле можно получить 40 простых чисел, 
// последовательно подставляя значения 0 ≤ n ≤ 39. Однако, при n=40, 402+40+41=40(40+1)+41 
// делится на 41 без остатка, и, очевидно, при n = 41, 412 + 41 + 41 делится на 41 без остатка.
// При помощи компьютеров была найдена невероятная формула n2−79n+1601,
//  согласно которой можно получить 80 простых чисел для последовательных значений n от 0 до 79. 
//  Произведение коэффициентов −79 и 1601 равно −126479.
// Рассмотрим квадратичную формулу вида:
// n2+an+b, где |a|<1000 и |b|≤1000
// где |n| является модулем (абсолютным значением) n.
// К примеру, |11| = 11 и |−4| = 4
// Найдите произведение коэффициентов a и b квадратичного выражения,
//  согласно которому можно получить максимальное количество простых чисел для последовательных значений n,
//   начиная со значения n=0.
let limitA = 1000;
let limitB = 1000;
let answer = {
    a: 0,
    b: 0,
    count: 0,
    productOfTheCoefficients() {
        return this.a * this.b
    }
};

function formula(n, a, b) {
    return Math.pow(n, 2) + (a * n) + b;
}

function primeCheck(x) {
    if (x < 0) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

for (let a = -limitA; a <= limitA; a++) {
    for (let b = -limitB; b <= limitB; b++) {
        let count = 0;
        for (let i = 0; i < Infinity; i++) {
            if (primeCheck(formula(i, a, b))) {
                count++;
            } else if (count > answer.count) {
                answer.count = count;
                answer.a = a;
                answer.b = b;
                break
            } else {
                break
            }
        }
    }
}

console.log(answer.productOfTheCoefficients());
