// n-й член последовательности треугольных чисел задается как tn = ½n(n+1).
// Таким образом, первые десять треугольных чисел:
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
// Преобразовывая каждую букву в число, соответствующее ее порядковому номеру в алфавите,
// и складывая эти значения, мы получим числовое значение слова.
// Для примера, числовое значение слова SKY равно 19 + 11 + 25 = 55 = t10.
// Если числовое значение слова является треугольным числом, то мы назовем это слово треугольным словом.
// Используя words.txt (щелкнуть правой кнопкой мыши и выбрать 'Save Link/Target As...'), 16 КБ текстовый файл,
// содержащий около двух тысяч часто используемых английских слов, определите, сколько в нем треугольных слов.

import { readFileSync } from "fs";

const triangleNumbersInit = (): Array<number> => {
  const result: Array<number> = [];
  let n = 1;
  while (true) {
    const tn = Math.floor((n * (n + 1)) / 2);
    if (tn > 1000) break;
    result.push(tn);
    n++;
  }
  return result;
};

const readWordsFromFile = (fileName: string): Array<string> => {
  const fileContent = readFileSync(fileName, "utf-8");
  console.log(fileContent.split(","));

  return fileContent.split(",").map((word) => word.replace(/"/g, ""));
};

const countWordSum = (word: string): number => {
  let sum = 0;
  for (let i = 0; i < word.length; i++) {
    sum += ALPHABET.indexOf(word[i].toUpperCase()) + 1;
    console.log(sum);
  }
  return sum;
};

/* **/

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const triangleWords = triangleNumbersInit();
const words = readWordsFromFile("./p042_words.txt");
let triangleWordCount = 0;

words.forEach((word) => {
  if (triangleWords.includes(countWordSum(word))) {
    triangleWordCount++;
  }
});

console.log(triangleWordCount);
// ts-node 42.ts
