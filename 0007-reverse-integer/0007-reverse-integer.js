/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let n = Math.abs(x);

    let rev = 0;
    while (n > 0) {
        let last = n % 10;
        rev = 10 * rev + last;
        n = Math.floor(n / 10);
    }
    let a = -1;
    if (rev > 2147483648 || rev < -2147483647) return 0;
        if (x < 0) return a * rev;
    return rev;
};