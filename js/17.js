'use strict'
const arr1To9 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const arr10To19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const arr20To90 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
let and = 'and';
let hundred = 'hundred';
const thousand = 'onethousand';

let summ = 0;

for (let world = 0; world < 1000; world++) {
    world = String(world);

    if (world.length == 1) {
        arr1To9.forEach((e, i) => {
            if (world[0] == i) {
                summ = summ + e.length;
                console.log(e);
            }
        });
    }

    if (world.length == 2) {
        if (world[0] == 1) {
            arr10To19.forEach((e, i) => {
                if (world[1] == i) {
                    summ = summ + e.length;
                    console.log(e);
                }
            });
        } else {
            arr20To90.forEach((j, i) => {
                if (world[0] == i) {
                    arr1To9.forEach((e, i) => {
                        if (world[1] == i) {
                            summ = summ + j.length + e.length;
                            console.log(j + '-' + e);
                        }
                    });
                }
            });
        }
    }


    if (world.length == 3) {
        arr1To9.forEach((g, i) => {
            if (world[0] == i) {

                if (world[1] !== '0' || world[2] !== '0') {
                    if (world[1] == 1) {
                        arr10To19.forEach((e, i) => {
                            if (world[2] == i) {
                                summ = summ + g.length + hundred.length + and.length + e.length;
                                console.log(g + '-' + hundred + '-' + and + '-' + e);
                            }
                        });
                    } else {
                        arr20To90.forEach((j, i) => {
                            if (world[1] == i) {
                                arr1To9.forEach((e, i) => {

                                    if (world[2] == i) {
                                        console.log(g + '-' + hundred + '-' + and + '-' + j + '-' + e);
                                        summ = summ + g.length + hundred.length + and.length + j.length + e.length;
                                    }
                                });
                            }
                        });
                    }
                } else {
                    summ = summ + g.length + hundred.length;
                    console.log(g + '-' + hundred);
                }
            }

        });

    }
}
console.log(summ + thousand.length);


// let one = 3;
// let two = 2;
// let three = 5;
// let four = 4;
// let five = 5;
// let six = 3;
// let seven = 5;
// let eight = 5;
// let nine = 4;

// function _1__9(num) {
//     switch (num) {
//         case 1:
//             return (one);
//         case 2:
//             return (two);
//         case 3:
//             return (three);
//         case 4:
//             return (four);
//         case 5:
//             return (five);
//         case 6:
//             return (six);
//         case 7:
//             return (seven);
//         case 8:
//             return (eight);
//         case 9:
//             return (nine);
//         default:
//             break;
//     }
// }
// console.log(_1__9(num));