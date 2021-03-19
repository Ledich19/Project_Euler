'use strict';

let i = 0;
let x = 0;
while (i < 1000) {
	if (i % 3 == 0 || i % 5 == 0) {
		x = x + i;
	}
	i++;
}
console.log(x);