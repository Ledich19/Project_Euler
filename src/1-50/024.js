'use strict'
// Перестановка - это упорядоченная выборка объектов. К примеру,
// 3124 является одной из возможных перестановок из цифр 1, 2, 3 и 4.
// Если все перестановки приведены в порядке возрастания или алфавитном порядке,
// то такой порядок будем называть словарным. Словарные перестановки из цифр 0, 1 и 2 представлены ниже:
// 012   021   102   120   201   210
// Какова миллионная словарная перестановка из цифр 0, 1, 2, 3, 4, 5, 6, 7, 8 и 9?
let permutationOne = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let count = 1;
let findPermutation = 1000000;

while (count < factorial(permutationOne.length)) {
    permutationOne = narayanaAlgorithm(permutationOne);
    count++;
    if (count == findPermutation) {
        console.log(permutationOne);
    }
}
//Алгоритм Нараяны вычисляющий следующую перестановку
function narayanaAlgorithm(arr) {
    for (let i = arr.length - 1; i => 0; i--) {
        if (arr[i] < arr[i + 1]) {
            for (let j = arr.length - 1; i => 0; j--) {
                if (arr[j] > arr[i]) {
                    let a = arr[i];
                    let b = arr[j];
                    arr[i] = b;
                    arr[j] = a;
                    let arrForTurn = arr.splice(i + 1, arr.length);
                    return [...arr, ...turn(arrForTurn)];
                    break;
                }
            }
            break;
        }
    }
};
//Вычисляет факториал
function factorial(num) {
    if (num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
//Разворачивает масив
function turn(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr;
}