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
let maxDivider = 1000;
let answer = {
    long: 0,
    numberD: 0,
    decimalPart: '0'
};

for (let j = 2; j < maxDivider; j++) {
    arr = [];
    numerator = 1;
    for (let i = 0; i < 10000; i++) {
        let a = (numerator * 10) % j;
        arr.push(Math.floor(numerator * 10 / j));
        numerator = a;
    }
    let result2 = findeRecurringCycle(arr.join(''));
    
    if (result2 > answer.long) {
        answer.long = result2;
        answer.numberD = j,
        answer.decimalPart = (arr.join(''))
    }
}
console.log(answer);

function findeRecurringCycle(str) {
    let result = 0;
    let count = 0;
    let num = ``;
    //Беру с масива последовательность из девяти чисел
    for (let i = 10; i < 20; i++) {
        num += str[i];
    }
    //ищу следующую такую же
    let a = str.indexOf(num);
    let b = str.indexOf(num, a + 1);

    if (a >= 0 && b >= 0) {
        for (let i = 0; a + i != b; i++) {
            if (str[a + i] == str[b + i]) {
                count++;
            } else {
                break;
            }
        }
    }
    //Возвращает количество символов в повторе
    return (count);
}