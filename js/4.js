function palindrom(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] != num[num.length - i - 1]) {
      return false;
    }
  }
}

let j = 1;
let x = 100,
    y = 100;
const z = 1000;
while (x < z) {
  while (y < z) {
    if (palindrom(String(x * y)) != false) {
      if (j < (x * y)) {
        j = (x * y);
        console.log(j);
        y++;
      }
    }
    y++;
  }
  x++;
  y = x;
}