'use strict'
/* 145 является любопытным числом, 
поскольку 1! + 4! + 5! = 1 + 24 + 120 = 145.
Найдите сумму всех чисел, каждое из которых 
равно сумме факториалов своих цифр.
Примечание: поскольку 1! = 1 и 2! = 2 не являются суммами,
 учитывать их не следует. */
let result = 0;

for (let i = 10; i < 10000000; i++) {
    if (i === summFactorial(i)) {
        console.log(i);
        result += i;
    }
}
console.log(result);
function summFactorial(num) {
    num = `${num}`;
    let summ = 0;
    for (let i = 0; i < num.length; i++) {
        let factorial = 1;
        for (let j = 1; j <= num[i]; j++) {
            factorial *= j;
        }
        summ += factorial;
    }
    return (parseInt(summ));
}