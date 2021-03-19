function primeCheck(x) {
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x%i == 0) {
        return false;
      }
  }
  }

  for (let i = 2, x =0; x < 10001; i++){
 if (primeCheck(i) != false) {
   x++;
  console.log(`${x}:::${i}`);
 }
  }
