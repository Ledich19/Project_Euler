{
  // Будем считать n-значное число пан-цифровым,
  // если каждая из цифр от 1 до n используется в нем ровно один раз.
  // К примеру, 2143 является 4-значным пан-цифровым числом, а также простым числом.
  // Какое существует наибольшее n-значное пан-цифровое простое число?

  const isnPrime = (num: number): boolean => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const isPanDigital = (num: number): boolean => {
    const arrNum = num.toString().split("");
    if (arrNum.includes("0")) return false;
    if (new Set(arrNum).size !== arrNum.length) return false;

    return arrNum.every((digit) => +digit <= arrNum.length);
  };

  /*
  * 8- и 9-значные пан-цифровые числа не могут быть простыми, так как их сумма цифр делится на 3, 
  * 
  **/

  const END_LIMIT = 9876543;
  let maxPrimePanDigital = 0;

  for (let i = END_LIMIT; i > 0; i--) {
    if (isPanDigital(i) && isnPrime(i)) {
      maxPrimePanDigital = i;
      break;
    }
  }

  console.log(maxPrimePanDigital);
}
