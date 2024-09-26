// Арифметическая прогрессия: 1487, 4817, 8147,
// в которой каждый член возрастает на 3330,
// необычна в двух отношениях: (1) каждый из трех членов является простым числом,
// (2) все три четырехзначные числа являются перестановками друг друга.

// Не существует арифметических прогрессий из трех однозначных,
// двухзначных и трехзначных простых чисел, демонстрирующих это свойство. Однако,
// существует еще одна четырехзначная возрастающая арифметическая прогрессия.

// Какое 12-значное число образуется, если объединить три члена этой прогрессии?
import { isPrime } from "../utils/utils";

const START = 1000;
const LIMIT = 10000;
const SIZE = 3;
const result: number[][] = [];

const makeArithmeticSequence = (start: number, n: number): number[] => {
  const numbers = [];
  let currentNumber = start;
  while (currentNumber < LIMIT) {
    numbers.push(currentNumber);
    currentNumber += n;
  }
  return numbers;
};

const sortDigits = (num: number) => {
  return Number.parseInt(
    num.toString().split("").map(Number).sort().join(""),
    10
  );
};

const isPermutations = (progression: number[]) => {
  const firstNumber = sortDigits(progression[0]);
  return progression.every((number) => sortDigits(number) === firstNumber);
};

const findSimpleNumbers = (progression: number[] ): number[] | null => {
  if (progression.length < SIZE ) return null;
  if (progression.every((number) => isPrime(number)) && isPermutations(progression)) {
    return progression;
  }
  return null;
};


//console.log(findSimpleNumbers(makeArithmeticSequence(1487, 3330), SIZE));

for (let i = START; i < LIMIT; i++) {
  for (let j = 1; j < LIMIT; j++) {
    const numbers = findSimpleNumbers(makeArithmeticSequence(i, j));
    if (numbers?.length) {
      result.push(numbers);
    }
  }
}
console.log(result);
