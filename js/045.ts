// Треугольные, пятиугольные и шестиугольные числа вычисляются по нижеследующим формулам:
// Треугольные	 	Tn=n(n+1)/2	 	1, 3, 6, 10, 15, ...
// Пятиугольные	 	Pn=n(3n−1)/2	 	1, 5, 12, 22, 35, ...
// Шестиугольные	 	Hn=n(2n−1)	 	1, 6, 15, 28, 45, ...
// Можно убедиться в том, что T285 = P165 = H143 = 40755.
// Найдите следующее треугольное число, являющееся также пятиугольным и шестиугольным.

const getTn = (n: number): number => (n * (n + 1)) / 2;
const getPn = (n: number): number => (n * (3 * n - 1)) / 2;
const getHn = (n: number): number => n * (2 * n - 1);
const getTriangleIndex = (Tn: number): number | null => {
  const n = (-1 + Math.sqrt(1 + 8 * Tn)) / 2;
  return Number.isInteger(n) ? n : null;
};
const getPentagonIndex = (Pn: number): number | null => {
  const n = (1 + Math.sqrt(1 + 24 * Pn)) / 6;
  return Number.isInteger(n) ? n : null;
};
const getHexagonIndex = (Hn: number): number | null => {
  const n = (1 + Math.sqrt(1 + 8 * Hn)) / 4;
  return Number.isInteger(n) ? n : null;
};

let flag = true;
let TIndex = 286;

while (flag) {
  const numberTn = getTn(TIndex);
  const indexOfPn = getPentagonIndex(numberTn);
  const indexOfHn = getHexagonIndex(numberTn);
  if (indexOfHn && indexOfPn) {
    flag = false;
    console.log(numberTn);
  }
  TIndex++;
}
