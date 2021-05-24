'use strict'
/* Начиная с числа 1 и двигаясь дальше вправо по часовой стрелке,
образуется следующая спираль 5 на 5:
21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13
Можно убедиться, что сумма чисел в диагоналях равна 101.
Какова сумма чисел в диагоналях спирали 1001 на 1001, образованной таким же способом? */

const width = 1001;
const height = 1001;
const amount = width * height;

let summDiagonals = 0;
let num = 1;
let delta = 2;
let count = 0;

while (num < amount) {
    count++;
    if (count > 4) {
        count = 1;
        delta = delta + 2;
    }
    num = num + delta;
    summDiagonals = summDiagonals + num;
}
console.log(summDiagonals + 1);