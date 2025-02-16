// Можно убедиться в том, что квадратный корень из двух можно выразить в виде бесконечно длинной дроби.
// √ 2 = 1 + 1/(2 + 1/(2 + 1/(2 + ... ))) = 1.414213...
// Приблизив это выражение для первых четырех итераций, получим:

// 1 + 1/2 = 3/2 = 1.5
// 1 + 1/(2 + 1/2) = 7/5 = 1.4
// 1 + 1/(2 + 1/(2 + 1/2)) = 17/12 = 1.41666...
// 1 + 1/(2 + 1/(2 + 1/(2 + 1/2))) = 41/29 = 1.41379...

// Следующие три приближения: 99/70, 239/169 и 577/408, а восьмое приближение, 1393/985,
//  является первым случаем, в котором количество цифр в числителе превышает количество цифр в знаменателе.
// У скольких дробей длина числителя больше длины знаменателя в первой тысяче приближений выражения?

const getNumbersFromFraction = (
  fraction: string
): {
  numerator: bigint;
  denominator: bigint;
} => {
  const numbers = fraction.split("/");
  return {
    numerator: BigInt(numbers[0]),
    denominator: BigInt(numbers[1]),
  };
};

const sumNumberEndFraction = (number: bigint, fraction: string): string => {
  const { numerator, denominator } = getNumbersFromFraction(fraction);
  return `${number * denominator + numerator}/${denominator}`;
};

const divideNumberEndFraction = (number: bigint, fraction: string): string => {
  const { numerator, denominator } = getNumbersFromFraction(fraction);
  return `${number * denominator}/${numerator}`;
};

const checkNumberEndFraction = (
  fraction: string
): {
  numerator: bigint;
  denominator: bigint;
  moreDigits: boolean;
} => {
  const { numerator, denominator } = getNumbersFromFraction(fraction);
  const numeratorLength = numerator.toString().length;
  const denominatorLength = denominator.toString().length;

  return {
    numerator,
    denominator,
    moreDigits: numeratorLength > denominatorLength,
  };
};

let countFraction = 0;
let resultFraction: string = `1/2`;

for (let i = 1; i < 1000; i++) {
  resultFraction = divideNumberEndFraction(
    1n,
    sumNumberEndFraction(2n, resultFraction)
  );

  const { moreDigits } = checkNumberEndFraction(
    sumNumberEndFraction(1n, resultFraction)
  );
  if (moreDigits) countFraction++;
}

console.log(countFraction);
