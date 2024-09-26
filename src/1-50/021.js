'use strict'
// Пусть d(n) определяется как сумма делителей n (числа меньше n, делящие n нацело).
// Если d(a) = b и d(b) = a, где a ≠ b, то a и b называются дружественной парой,
// а каждое из чисел a и b - дружественным числом.
// Например, делителями числа 220 являются 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 и 110, 
//поэтому d(220) = 284. Делители 284 - 1, 2, 4, 71, 142, поэтому d(284) = 220.
// Подсчитайте сумму всех дружественных чисел меньше 10000.
let summFreandlyNum = 0;
let arrResult = [];

for (let i = 1; i < 10000; i++) {
    let dNa = dividers(i);
    let dNb = dividers(dNa);
    if (dNb == i && dNb != dNa) {
        console.log(dNb + '  ' + dNa);
        if (arrResult.indexOf(dNa, 0) == -1 && arrResult.indexOf(dNb, 0) == -1) {
            arrResult.push(dNa);
            arrResult.push(dNb);
        }
    }
}
let summ = arrResult.reduce((summ, current) => {
    return summ + current;
})
console.log(summ);

function dividers(num) {
    let summ = 0;
    for (let i = 0; i <= Math.ceil(num / 2); i++) {
        if (num % i == 0) {
            summ += i;
        }
    }
    return (summ);
}
