import { isPermutations } from "../utils/utils";
// Найдите такое наименьшее натуральное число x,
// чтобы 2x, 3x, 4x, 5x и 6x состояли из одних и тех же цифр.

let flag = true;
let i = 1;
while (flag) {
  if (isPermutations([2 * i, 3 * i, 4 * i, 5 * i, 6 * i])) {
    flag = false;
    console.log(i);
  }
  i++;
}

// 142857