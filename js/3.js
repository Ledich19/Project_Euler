const num = 600851475143;

function primeCheck(x) {
  for (let i = 2; i <= Math.sqrt(x); i++) {
    if (x%i == 0) {
      return false;
    }
}
}

let i = 0;
while (i < Math.sqrt(num)) {
  if (Number.isInteger(num/i) && primeCheck(i) != false) {
    console.log(i + "  ");
  } 
  i--;
}


