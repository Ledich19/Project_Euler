'use strict';
// Число-палиндром с обеих сторон (справа налево и слева направо) читается одинаково.
//  Самое большое число-палиндром, полученное умножением двух двузначных чисел – 9009 = 91 × 99.
// Найдите самый большой палиндром, полученный умножением двух трехзначных чисел.
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



// function palindrom(num) {
// 	if(num.length == 1) {
// 		return true;
// 	}
// 	if (num[0] !== num[num.length - 1]) {
// 		return false;
// 	}
// num = num.slice(1,-1);
// return palindrom(num);
// }