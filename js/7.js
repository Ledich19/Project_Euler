'use strict'

const primeNumber = 10001;

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