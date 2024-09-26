// Дана иррациональная десятичная дробь,
// образованная объединением натуральных чисел:

// 0.123456789101112131415161718192021...

// Видно, что 12-я цифра дробной части - 1.

// Также дано, что dn представляет собой n-ю цифру дробной части.
// Найдите значение следующего выражения:

// d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000

{
  const indexesInit = (max: number) => {
    const result: Array<number> = [];
    while (max !== result.at(-1)) {
      result.push(Number.parseInt(result.at(-1)?.toString() + "0") || 1);
    }
    return result;
  };

  const MAX = 1000000;
  const indexes: Array<number> = indexesInit(MAX);
  const result: Array<number> = [];
  let currentIndex = 0;
  let numberLength = 0;

  for (let i = 1; i <= MAX; i++) {
    const number = String(i);
    numberLength += number.length;

    if (numberLength >= indexes[currentIndex]) {
      const index = indexes[currentIndex] - numberLength;
      const value = number.at(index - 1);
      if (value) result.push(Number.parseInt(value));
      currentIndex++;
      console.log(value);
    }
  }

  console.log(result.reduce((acc, curr) => acc * curr, 1));
}
