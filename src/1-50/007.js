'use strict'
// Выписав первые шесть простых чисел, получим 2, 3, 5, 7, 11 и 13.
//  Очевидно, что 6-е простое число - 13.
// Какое число является 10001-м простым числом?
// const primeNumber = 10001;

for (let i = 2, x = 0; x < primeNumber; i++) {
	if (primeCheck(i) != false) {
		x++;
		if (x == primeNumber) {
			console.log(`${x} простое число = ${i}`);
		}
	}
}

function primeCheck(x) {
	for (let i = 2; i <= Math.sqrt(x); i++) {
		if (x % i == 0) {
			return false;
		}
	}
}