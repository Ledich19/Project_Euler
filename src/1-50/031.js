'use strict'
/* В Англии валютой являются фунты стерлингов £ и пенсы p, 
и в обращении есть восемь монет:
1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) и £2 (200p).
£2 возможно составить следующим образом:
1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
Сколькими разными способами можно составить £2,
 используя любое количество монет? */

let arrPence = [1, 2, 5, 10, 20, 50, 100, 200];
let arrResult = [];
const findSumm = 200;

for (let i = 0; i <= findSumm; i++) {
    arrResult.push([]);
}

for (let i = 0; i <= findSumm; i++) {
    for (let j = 0; j < arrPence.length; j++) {
        if (j === 0) {
            arrResult[i][j] = 1;
        } else if (i < arrPence[j]) {
            arrResult[i][j] = arrResult[i][j - 1];
        } else {
            arrResult[i][j] = arrResult[i][j - 1] + arrResult[i - arrPence[j]][j];
        }
    }
}

console.log(arrResult[arrResult.length - 1][arrPence.length - 1]);

for (let i = 0; i < arrResult.length; i++) {
    console.log(i + '   ' + String(arrResult[i]));
}