// Гугол (10100) - гигантское число: один со ста нулями;
// 100100 почти невообразимо велико: один с двумястами нулями.
//  Несмотря на их размер, сумма цифр каждого числа равна всего лишь 1.

// Рассматривая натуральные числа вида ab, где a, b < 100,
//  какая встретится максимальная сумма цифр числа?

const sumDigitsOfNumber = (number: bigint) => {
  let digitsSum = 0;
  const arrayOfDigits = number.toString().split("");

  for (let i = 0; i < arrayOfDigits.length; i) {
    const parsedDigits = parseInt(arrayOfDigits[i], 10);
    digitsSum += parsedDigits;
    i++;
  }

  return digitsSum;
};

let maximumSumOfNumbers = 0;

for (let i = 1n; i <= 100n; i++) {
  for (let j = 1n; j <= 100n; j++) {
    const number = i ** j;
    const sum = sumDigitsOfNumber(number);
    if (sum > maximumSumOfNumbers) {
      maximumSumOfNumbers = sum;
    }
  }
}

console.log("maximum sum of numbers: " + maximumSumOfNumbers);
