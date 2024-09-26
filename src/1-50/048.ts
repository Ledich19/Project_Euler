import { NumberStringMath } from "../utils/NumberStringMath";
// Сумма 11 + 22 + 33 + ... + 1010 = 10405071317.
// Найдите последние десять цифр суммы 11 + 22 + 33 + ... + 10001000.

const match = new NumberStringMath()

let result = "0";
for (let i = 1; i <= 1000; i++) {  
  result = match.sum(result, match.toThePower(i.toString(), i.toString()));
}
console.log(result);
