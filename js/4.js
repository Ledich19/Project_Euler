'use strict';

let max = 0;
let x = 100,
	y = 100;
const z = 1000;

while (x < z) {
	while (y < z) {
		if (palindrom(String(x * y)) != false) {
			sort(x * y);
			y++;
		}
		y++;
	}
	x++;
	y = x;
}
console.log(max);

function palindrom(num) {
	for (let i = 0; i < num.length; i++) {
		if (num[i] != num[num.length - i - 1]) {
			return false;
		}
	}
}

function sort(i) {
	if (i > max) {
		max = i;
	}
}