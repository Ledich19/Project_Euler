'use strict'
// Единичная дробь имеет 1 в числителе.
//  Десятичные представления единичных дробей со знаменателями от 2 до 10 даны ниже:
// 1/2	=	0.5
// 1/3	=	0.(3)
// 1/4	=	0.25
// 1/5	=	0.2
// 1/6	=	0.1(6)
// 1/7	=	0.(142857)
// 1/8	=	0.125
// 1/9	=	0.(1)
// 1/10	=	0.1
// Где 0.1(6) значит 0.166666..., и имеет повторяющуюся последовательность из одной цифры.
// Заметим, что 1/7 имеет повторяющуюся последовательность из 6 цифр.
// Найдите значение d < 1000, для которого 1/d в десятичном виде 
// содержит самую длинную повторяющуюся последовательность цифр.
let numerator = 1;
let arr = [];
let result = {
    long: 0,
    numberD: 0,
    decimalPart: '0'
};

for (let j = 2; j < 1000; j++) {
    arr = [];
    numerator = 1;
    for (let i = 0; i < 10000; i++) {
        let a = (numerator * 10) % j;
        arr.push(Math.floor(numerator * 10 / j));
        numerator = a;
    }
    let result2 = findeRecurringCycle(arr.join(''));
    if (result2 > result.long) {
        result.long = result2;
        result.numberD = j,
        result.decimalPart = (arr.join(''))
    }
}
console.log(result);

function findeRecurringCycle(str) {
    let result = 0;
    let j = `${str[20]}${str[21]}${str[22]}${str[23]}${str[24]}`;
    let a = str.indexOf(j);
    let b = str.indexOf(j, a + 1);
    let count = 0;
    if (a >= 0 && b >= 0) {
        for (let i = 0; a + i != b; i++) {
            if (str[a + i] == str[b + i]) {
                count++;
            } else {
                break;
            }
        }
        if (count > result) {
            result = count;
        }
    }
    return (result);
}