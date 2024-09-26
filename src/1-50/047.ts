import { generateSimpleNumbers, isPrime } from "../utils/utils";
// Первые два последовательные числа,
// каждое из которых имеет два отличных друг от друга простых множителя:
// 14 = 2 × 7
// 15 = 3 × 5
// Первые три последовательные числа,
//  каждое из которых имеет три отличных друг от друга простых множителя:
// 644 = 2² × 7 × 23
// 645 = 3 × 5 × 43
// 646 = 2 × 17 × 19.
// Найдите первые четыре последовательных числа,
// каждое из которых имеет четыре отличных друг от друга простых множителя.
// Каким будет первое число?

{
  const RESULT_SIZE = 4;
  const simpleNumbers: number[] = [];
  let result: number[] = [];

  const getSimpleDivider = (value: number) => {
    if (!value || !Number.isInteger(value)) {
      return [];
    }

    if (isPrime(value)) {
      return [value];
    }
    return getSimpleDividers(value);
  };

  const getSimpleDividers = (value: number): number[] => {
    if (isPrime(value)) {
      return [value];
    }

    for (const simpleNumber of simpleNumbers) {
      const dividers: number[] = [simpleNumber];
      const result = value / simpleNumber;
      const div = dividers.concat(getSimpleDivider(result));

      if (div.reduce((acc, num) => acc * num, 1) === value) {
        return div;
      }
    }
    return [];
  };

  for (
    let number = 10;
    result.length !== RESULT_SIZE && number < 1000000;
    number++
  ) {
    generateSimpleNumbers(Math.ceil(Math.sqrt(number)), simpleNumbers);
    const simpleDividers = getSimpleDividers(number);

    const set = new Set(simpleDividers);

    if (set.size === RESULT_SIZE && result.at(-1) === number - 1) {
      result.push(number);
    } else if (set.size === RESULT_SIZE) {
      result = [number];
    } else {
      result = [];
    }
  }

  console.log(result);
}
