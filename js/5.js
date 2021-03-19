for (let num = 1;; num++) {
    let ar = [];
    for (let i = 20; i >= 1; i--) {
        let x = (num / i);
        if (!Number.isInteger(x)) {
            break;
        }
        ar.push(x);
    }
    if (ar.length == 20) {
        console.log(num);
        break;
    }
}
