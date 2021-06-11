'use strict'
/*Десятичное число 585 = 10010010012 (в двоичной системе),
является палиндромом по обоим основаниям.
Найдите сумму всех чисел меньше миллиона,
являющихся палиндромами по основаниям 10 и 2.
(Пожалуйста, обратите внимание на то,
что палиндромы не могут начинаться с нуля ни 
в одном из оснований).
*/
let summ = 0;
const limit =1000000;
for (let i = 1; i < limit; i++) {
    let iBinary = i.toString(2);
    if (isPalindrom(i) && isPalindrom(iBinary)) {
        summ += i
    }
}
console.log(summ);

function isPalindrom(string) {
    string = `${string}`;
    for (let i = 0; i < string.length; i++) {
        if (string[i] != string[string.length - i - 1]) {
            return false;
        }
    }
    return true;
}