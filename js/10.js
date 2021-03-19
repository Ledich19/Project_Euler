let summ = 0;

function number(x) {
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

for (let i = 2; i < 2000000; i++) {
    if (number(i)) {
        summ += i;
    }
}
console.log(summ);