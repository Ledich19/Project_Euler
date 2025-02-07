// Существует ровно десять способов выбора 3 элементов из множества пяти {1, 2, 3, 4, 5}:
// 123, 124, 125, 134, 135, 145, 234, 235, 245, и 345
// В комбинаторике для этого используется обозначение 5C3 = 10.
// В общем случае,
// nCr =	n!/(r!(n−r)!), где r ≤ n, n! = n×(n−1)×...×3×2×1 и 0! = 1.
// Это значение превышает один миллион, начиная с n = 23: 23C10 = 1144066.
// Cколько значений (не обязательно различных)  nCr для 1 ≤ n ≤ 100 больше одного миллиона?

// 5 = 120
const countFactorial = (n: number): number => {
  let result = 1;
  for (let index = 1; index <= n; index++) {
    result *= index;
  }
  return result;
};

const countNCR = (n: number, r: number): number => {
  return countFactorial(n) / (countFactorial(r) * countFactorial(n - r));
};

let result = 0;

for (let i = 10; i <= 100; i++) {
  for (let j = 1; j <= i; j++) {
    const nCr = countNCR(i, j);
    if (nCr > 1000000) {
      result++;
    }
  }
}

console.log(result);
