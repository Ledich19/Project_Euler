export const isPrime = (value: number) => {
  if (!Number.isInteger(value)) return false;

  for (let i = 2; i <= Math.sqrt(value); i++) {
    if (value % i === 0) return false;
  }
  return value > 1;
};

const sortDigits = (num: number) => {
  return Number.parseInt(
    num.toString().split("").map(Number).sort().join(""),
    10
  );
};

export const isPermutations = (progression: number[]) => {
  const firstNumber = sortDigits(progression[0]);
  return progression.every((number) => sortDigits(number) === firstNumber);
};

export const generateSimpleNumbers = (value: number, numbers: number[]) => {
  const last = numbers.at(-1) || 0;
  for (let i = last + 1; i <= value; i++) {
    if (isPrime(i)) {
      numbers.push(i);
    }
  }

  return numbers;
};
