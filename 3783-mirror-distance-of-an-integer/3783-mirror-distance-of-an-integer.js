/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function (n) {
    let num = n, rev = 0;
    while (num != 0) {
        let last = num % 10;
        rev = (10 * rev) + last;
        num = Math.floor(num / 10);
    }
    return Math.abs(n - rev)
};