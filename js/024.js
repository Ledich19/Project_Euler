'use strict'
// Перестановка - это упорядоченная выборка объектов. К примеру,
// 3124 является одной из возможных перестановок из цифр 1, 2, 3 и 4.
// Если все перестановки приведены в порядке возрастания или алфавитном порядке,
// то такой порядок будем называть словарным. Словарные перестановки из цифр 0, 1 и 2 представлены ниже:
// 012   021   102   120   201   210
// Какова миллионная словарная перестановка из цифр 0, 1, 2, 3, 4, 5, 6, 7, 8 и 9?
let permutationOne = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let count = 1;

while (count < factorial(permutationOne.length)) {
    narayanaAlgorithm();
    count++;
    if (count == 1000000) {
        console.log(permutationOne);
    }
}


function narayanaAlgorithm() {
    for (let i = permutationOne.length - 1; i => 0; i--) {
        if (permutationOne[i] < permutationOne[i + 1]) {
            for (let j = permutationOne.length - 1; i => 0; j--) {
                if (permutationOne[j] > permutationOne[i]) {
                    let a = permutationOne[i];
                    let b = permutationOne[j];
                    permutationOne[i] = b;
                    permutationOne[j] = a;
                    let arr = permutationOne.splice(i + 1, permutationOne.length);
                    permutationOne = [...permutationOne, ...turn(arr)];
                    break;
                }
            }
            break;
        }
    }
};

function factorial(num) {
    if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

function turn(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr;
}