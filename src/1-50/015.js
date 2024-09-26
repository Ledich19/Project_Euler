'use strict'
// Начиная в левом верхнем углу сетки 2×2 и имея возможность двигаться только вниз или вправо,
//  существует ровно 6 маршрутов до правого нижнего угла сетки.
// Сколько существует таких маршрутов в сетке 20×20?
let width = 20;
let height = 20;
let arr = [];
width ++;
height ++;

for (let i = 0; i < width * height; i++) {
    arr[i] = 0;
}

for (let i = 0; i < width; i++) {
    arr[i] = 1;
}

for (let i = 0; i < width * height; i += width) {
    arr[i] = 1;
}

arr.forEach((e, i) => {
    if (e != 1) {
        arr[i] = arr[i - 1] + arr[i - width];
    }
});

console.log(arr[arr.length - 1]);



// Не мой вариант оставил чтобы запомнить

// const calculateFactorial = (number) => {
//     let result = 0;
//     for (let i = number; i > 1; i--) {
//       if (i == number) {
//         // console.log(`${result} += ${i} * (${i} - 1)`);
//         result += i * (i - 1);
//       } else {
//         // console.log(`${result} *= ${i} - 1`);
//         result *= i - 1;
//       }
//     }
//     return result;
//   };
  
//   const main = (row, col) => {
//     let gridRowSize = row;
//     let gridColumnSize = col;
  
//     let answer =
//       calculateFactorial(gridRowSize + gridColumnSize) /
//       calculateFactorial(gridRowSize) /
//       calculateFactorial(gridColumnSize);
  
//     answer = Math.round(answer);
  
//     console.log(
//       `For a ${gridRowSize} by ${gridColumnSize} grid, there are ${answer} possible paths;`
//     );
//   };
  
//   main(20, 20);