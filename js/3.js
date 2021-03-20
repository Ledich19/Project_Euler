'use strict';

const num = 600851475143;
let max = 0;

let i = 0;
while (i < Math.sqrt(num)) {
	if (Number.isInteger(num / i) && primeCheck(i) !== false) {
		sort(i);
	}
	i++;
}
console.log(max);

function primeCheck(x) {
	for (let i = 2; i <= Math.sqrt(x); i++) {
		if (x % i == 0) {
			return false;
		}
	}
}

function sort(i) {
	if (i > max) {
		max = i;
	}
}
