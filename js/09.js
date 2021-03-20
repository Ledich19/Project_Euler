'use strict'

let a,
    b,
    D;

for (let c = 1; c < 500; c++) {

    D = ((2 * (1000 - c)) ** 2) - (8 * (((1000 - c) ** 2) - (c ** 2)));

    if (D >= 0) {
        a = (2 * (1000 - c) - Math.sqrt(D)) / 4;
        if (Number.isInteger(a)) {
            b = 1000 - a - c;
            console.log(`a = ${a}  b = ${b}  c = ${c}`);
            break;
        }
    }

}
// a**2 +b**2 = c**2
// a + b + c = 1000

// b = 1000 -a -c
// j = 1000 -c
// b = j - a

// a**2 + (j -a)**2 = c**2
// a**2 + (j -a)**2 - c**2 = 0

// (j - a)**2 = j**2 - 2aj + a**2

// a**2 + j**2 - 2aj + a**2 - c**2 = 0

// 2a**2 - 2aj - c**2  + j**2 =0

