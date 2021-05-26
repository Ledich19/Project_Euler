/* Удивительно, но существует только три числа,
 которые могут быть записаны в виде суммы четвертых степеней их цифр:
1634 = 1**4 + 6**4 + 3**4 + 4**4
8208 = 8**4 + 2**4 + 0**4 + 8**4
9474 = 9**4 + 4**4 + 7**4 + 4**4
1 = 1**4 не считается, так как это - не сумма.
Сумма этих чисел равна 1634 + 8208 + 9474 = 19316.
Найдите сумму всех чисел, которые могут быть записаны в виде суммы пятых степеней их цифр. */

let degree = 5;
let arr = [];
let limit = countLimit(degree);

for (let i = 0; i < limit; i++) {
    let sum = summDegree(i, degree);
    if (sum == i && sum > 1) {
        arr.push(i);
    }
}
console.log(arr);
console.log(arr.reduce((summ, current) => {
    return summ + current;
}));

function summDegree(num, degree) {
    if (num < 10) {
        return Math.pow(num, degree)
    }
    let arr = String(num).split('');
    arr = arr.map((e) =>  Math.pow(e,degree));
    summ = arr.reduce((summ, current) => {
        return +summ + current;
    })
    return summ;
};

function countLimit(degree) {
    let n = 9;
    let b = summDegree(+n, degree);
    while (b > n) {
        n = n + '9';
        b = summDegree(+n, degree);
    }
    return +n;
}; 
