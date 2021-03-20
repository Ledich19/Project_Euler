"use strict";

const limit = 4000000;
let x = 1,
	y = x,
	i = x + y,
	z = 0;

while (i < limit) {
	if (i % 2 === 0) {
		z = z + i;
	}
	x = y;
	y = i;
	i = x + y;
}
console.log(`Сумма четных чисел последовательности фибоначи не превышающих ${limit} ${z}`);