import { generateSimpleNumbers, isSimple } from "./utils";
// Простое число 41 можно записать в виде суммы шести последовательных простых чисел:
// 41 = 2 + 3 + 5 + 7 + 11 + 13
// Это - самая длинная сумма последовательных простых чисел,
// в результате которой получается простое число меньше одной сотни.
// Самая длинная сумма последовательных простых чисел,
//  в результате которой получается простое число меньше одной тысячи, содержит 21 слагаемое и равна 953.
// Какое из простых чисел меньше одного миллиона можно
// записать в виде суммы наибольшего количества последовательных простых чисел?
{
  const LIMIT = 1000000;
  const simpleNumbers: number[] = generateSimpleNumbers(LIMIT, []);

  const findSum = (startNumber: number): { sumCount: number; sum: number } => {
    let result = 0;
    let sumCount = 0;

    let sum = 0;
    let count = 0;
    for (let i = startNumber; i < simpleNumbers.length; i++) {
      if (sum + simpleNumbers[i] > LIMIT) {
        break;
      }
      count++;
      sum += simpleNumbers[i];

      if (isSimple(sum)) {
        result = sum;
        sumCount = count;
      }
    }

    return { sumCount, sum: result };
  };

  let result: { sumCount: number; sum: number } = { sumCount: 0, sum: 0 };
  for (let index = 0; index < simpleNumbers.length; index++) {
    const { sumCount, sum } = findSum(index);

    if (sum < LIMIT && result.sumCount < sumCount) {
      result = { sumCount, sum };
    }
  }

  console.log(result);
}
