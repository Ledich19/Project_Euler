import { generateSimpleNumbers, isSimple } from "./utils";

{
  // Кристиан Гольдбах показал, что любое нечетное составное число можно
  // записать в виде суммы простого числа и удвоенного квадрата.

  // 9 = 7 + 2×1**2
  // 15 = 7 + 2×2**2
  // 21 = 3 + 2×3**2
  // 25 = 7 + 2×3**2
  // 27 = 19 + 2×2**2
  // 33 = 31 + 2×1**2

  // Оказалось, что данная гипотеза неверна.

  // Каково наименьшее нечетное составное число,
  // которое нельзя записать в виде суммы простого числа и удвоенного квадрата?

  const simpleNumbers: number[] = [];

  const isTheHypothesisTrue = (value: number) => {
    for (let j = 0; j < simpleNumbers.length; j++) {
      const difference = value - simpleNumbers[j];
      const sqrt = Math.sqrt(difference / 2);
      if (difference > 0 && Number.isInteger(sqrt)) {
        return true;
      }
    }
    return false;
  };

  for (let i = 9; true; i++) {
    if (isSimple(i)) continue;
    if (i % 2 === 0) continue;
    generateSimpleNumbers(i, simpleNumbers);
    if (!isTheHypothesisTrue(i)) {
      console.log("result", i);
      break;
    }
  }
}
