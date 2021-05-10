'use strict'
// Последовательность Фибоначчи определяется рекурсивным правилом:
// Fn = Fn−1 + Fn−2, где F1 = 1 и F2 = 1.
// Таким образом, первые 12 членов последовательности равны:
// F1 = 1
// F2 = 1
// F3 = 2
// F4 = 3
// F5 = 5
// F6 = 8
// F7 = 13
// F8 = 21
// F9 = 34
// F10 = 55
// F11 = 89
// F12 = 144
// Двенадцатый член F12 - первый член последовательности, который содержит три цифры.
// Каков порядковый номер первого члена последовательности Фибоначчи, содержащего 1000 цифр?
let count = 2;
let numOne = 1n;
let numTwo = 1n;
let numNext;
let numberLength = 1000;

while (true) {
    numNext = numOne + numTwo;
    numOne = numTwo;
    numTwo = numNext;
    if (String(numNext).length == numberLength) {
        console.log(count + 1);
        break;
    }
    count++
}