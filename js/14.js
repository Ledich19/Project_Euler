'use strict'
let obj = {
    num: 1,
    length: 1
};

for (let firstNum = 1; firstNum < 1000000; firstNum++) {
    if (sequence(firstNum).length >obj.length) {
        obj.num = firstNum;
        obj.length = sequence(firstNum).length;
    }
}
console.log(obj);

function sequence(n) {
    let arr = [];
    arr.push(n);
    for (let i = 0; 1 < n; i++) {
        if (n % 2 == 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        arr.push(n);
    }
    return (arr);
}


    