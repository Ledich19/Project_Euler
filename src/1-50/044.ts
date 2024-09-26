// Пятиугольные числа вычисляются по формуле: Pn=n(3n−1)/2.
// Первые десять пятиугольных чисел:
// 1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...
// Можно убедиться в том, что P4 + P7 = 22 + 70 = 92 = P8.
// Однако, их разность, 70 − 22 = 48, не является пятиугольным числом.
// Найдите пару пятиугольных чисел Pj и Pk,
// для которых сумма и разность являются пятиугольными числами и значение
// D = |Pk − Pj| минимально, и дайте значение D в качестве ответа.

const getPenroseNumber = (n: number): number => (n * (3 * n - 1)) / 2;

function findPenroseIndex(Pn: number): number {
  const discriminant = 1 + 24 * Pn;
  const sqrtDisc = Math.sqrt(discriminant);
  const n = (1 + sqrtDisc) / 6;

  return Number.isInteger(n) ? n : -1;
}

let currentDifference = Number.MAX_SAFE_INTEGER;
const penroseNumbers: number[] = [];

for (let i = 1; i <= 100000; i++) {
  const penroseNumber = getPenroseNumber(i);
  for (let j = 0; j < penroseNumbers.length; j++) {
    const sum = penroseNumbers[j] + penroseNumber;
    const dif = penroseNumber - penroseNumbers[j] ;
    if (findPenroseIndex(sum) >= 0 && findPenroseIndex(dif) >= 0) {
      currentDifference = Math.min(currentDifference, dif);
      break;
    }
  }
  penroseNumbers.push(penroseNumber);
}
console.log('Result: ', currentDifference);
