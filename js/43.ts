// Число 1406357289, является пан-цифровым,
// поскольку оно состоит из цифр от 0 до 9 в определенном порядке.
// Помимо этого, оно также обладает интересным свойством делимости подстрок.

// Пусть d1 будет 1-й цифрой, d2 будет 2-й цифрой, и т.д.
// В таком случае, можно заметить следующее:

// d2d3d4=406 делится на 2 без остатка
// d3d4d5=063 делится на 3 без остатка
// d4d5d6=635 делится на 5 без остатка
// d5d6d7=357 делится на 7 без остатка
// d6d7d8=572 делится на 11 без остатка
// d7d8d9=728 делится на 13 без остатка
// d8d9d10=289 делится на 17 без остатка
// Найдите сумму всех пан-цифровых чисел из цифр от 0 до 9,
// обладающих данным свойством.

const simpleNumbers: number[] = [2, 3, 5, 7, 11, 13, 17];

const isPanDigital = (num: number): boolean => {
  const numStr = num.toString();
  let mask = 0;
  for (const char of numStr) {
    const digit = parseInt(char, 10);
    mask |= 1 << digit;
  }
  return mask === (1 << 10) - 1;
};

const makeSubstrings = (string: string, size: number): string[] => {
  const strings: string[] = [];

  for (let i = 1; i < string.length; i++) {
    strings.push(string.substring(i, i + size));
  }
  return strings.slice(0, -(size - 1));
};

let sum: number = 0;

function* permute(
  arr: string[],
  l: number,
  r: number
): IterableIterator<string> {
  if (l === r) {
    yield arr.join("");
  } else {
    for (let i = l; i <= r; i++) {
      [arr[l], arr[i]] = [arr[i], arr[l]]; // Swap
      yield* permute(arr, l + 1, r);
      [arr[l], arr[i]] = [arr[i], arr[l]]; // Swap back
    }
  }
}

const digits = "0123456789";
const allPermutations = Array.from(
  permute(digits.split(""), 0, digits.length - 1)
);

allPermutations.forEach((value) => {
  const substrings: string[] = makeSubstrings(value, 3);
  if (substrings.every((string, i) => +string % simpleNumbers[i] === 0)) {
    sum += Number.parseInt(value as string, 10);
  }
});

console.log(sum);
