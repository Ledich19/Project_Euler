'use strict'

let arr1 = `3
7 4
2 4 6
8 5 9 3`

let arr = [];
let arr2 = arr1.split('\n');
arr2.forEach(element => {
    arr.push(element.split(' '));
});
console.log(arr);
console.log(arr.lenght);

for (let j = arr.lenght; j >= 0; j--) {
    for (let i = 0; i < arr[j].length; i++) {
        ;
        arr[j].splice(i, 1, summ(j, i));
    }
}
console.log(arr[0][0]);

function summ(j, i) {
    let a, b;
    a = +arr[j + 1][i];
    b = +arr[j + 1][i + 1];
    return (+arr[j][i] + biggest(a, b));
}

function biggest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}