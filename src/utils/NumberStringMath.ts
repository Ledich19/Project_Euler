export class NumberStringMath {
  multiplier = (n1: string, n2: string): string => {
    const result = Array(n1.length + n2.length).fill(0);
    for (let i = n1.length - 1; i >= 0; i--) {
      for (let j = n2.length - 1; j >= 0; j--) {
        const mul = +n1[i] * +n2[j];
        const p1 = i + j,
          p2 = i + j + 1;
        const sum = mul + result[p2];

        result[p2] = sum % 10;
        result[p1] += Math.floor(sum / 10);
      }
    }
    while (result[0] === 0) {
      result.shift();
    }
    return result.length ? result.join("") : "0";
  };

  toThePower = (n1: string, n2: string): string => {
    let result: string = "1";
    for (let i = 0; i < +n2; i++) {
      result = this.multiplier(result, n1);
    }
    return result;
  };

  sum = (n1: string, n2: string): string => {
    let carry = 0;
    let result = "";
    let i = n1.length - 1;
    let j = n2.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
      const digit1 = i >= 0 ? +n1[i] : 0;
      const digit2 = j >= 0 ? +n2[j] : 0;
      const sum = digit1 + digit2 + carry;

      result = (sum % 10) + result;
      carry = Math.floor(sum / 10);

      i--;
      j--;
    }

    return result;
  };
}
