import { isPrime } from "../utils/utils";
// Меняя первую цифру числа *3 (двузначного числа, заканчивающегося цифрой 3),
// оказывается, что шесть из девяти возможных значений
// - 13, 23, 43, 53, 73 и 83 - являются простыми числами.

// При замене третьей и четвертой цифры числа 56**3 одинаковыми цифрами,
// получаются десять чисел, из которых семь - простые: 56003, 56113, 56333, 56443, 56663, 56773 и 56993.
// Число 56**3 является наименьшим числом, подставление цифр в которое дает именно семь простых чисел.
// Соответственно, число 56003, будучи первым из полученных простых чисел, является наименьшим простым числом,
// обладающим указанным свойством.

// Найдите наименьшее простое число, которое является одним из восьми простых чисел,
// полученных заменой части цифр (не обязательно соседних) одинаковыми цифрами.

const replaceAt = (str: string, index: number, char: string): string => {
  return str.substring(0, index) + char + str.substring(index + 1);
};

const createMasks = (base: string) => {
  let result: Set<string> = new Set();
  const makeMask = (base: string) => {
    if (!base.includes("*")) return;
    result.add(base);
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < base.length; j++) {
        if (base[j] === "*") {
          const string = replaceAt(base, j, `${i}`);
          makeMask(string);
        }
      }
    }
  };
  makeMask(base);
  return Array.from(result).sort();
};

const replaceAsterisk = (base: string): string[] => {
  const result: string[] = [];
  for (let i = 0; i < 10; i++) {
    result.push(base.replaceAll("*", `${i}`));
  }
  return result.sort();
};

function countPrimeNumbers(masks: string[], findAmount: number) {
  return masks.map((mask) => {
    const numbers = replaceAsterisk(mask);
    let count = 0;

    numbers.forEach((number) => {
      if (!number.startsWith('0') && isPrime(+number)) {
        count++;
      }
    });

    return {
      numbers,
      mask,
      primeCount: count
    };
  }).filter(mask => mask.primeCount >= findAmount);
}

const masks = createMasks("******");

const results = countPrimeNumbers(masks, 8);

console.log(results);


// {
//   numbers: [
//     '020303', '121313',
//     '222323', '323333',
//     '424343', '525353',
//     '626363', '727373',
//     '828383', '929393'
//   ],
//   mask: '*2*3*3',
//   primeCount: 8
// }
