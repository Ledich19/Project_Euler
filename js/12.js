'use strict';

let y = [];
let z = [];

for (let i = 1; i > 0; i++) {
    let x = 0;
    for (let j = 1; j <= i; j++) {
        x = x + j;
    }
    y = [];
    z = [];
   
    primeFactors(x);
    
    for (let j = 2; j <= y[y.length - 1]; j++) {
        if (number(j)) {
            let k = 0;
            for (let i = 0; i < y.length; i++) {
                if (y[i] == j) {
                    k++;
                }
            }
            z.push(k);
        }
    
    }
    let c = 1;
    for (let i = 0; i < z.length; i++) {
        c = (z[i] + 1) * c;
    }

    if (c > 500) {
        console.log(x);
        break;
    }
}

 
function primeFactors(x) {
    for (let i = 2; i <= x; i++) {
        if (x % i == 0) {
            x = x / i;
            y.push(i);
            i--;
        }
    }
}

function number(x) {
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}