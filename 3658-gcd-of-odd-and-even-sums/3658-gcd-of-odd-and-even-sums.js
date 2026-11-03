/**
 * @param {number} n
 * @return {number}
 */
function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}
var gcdOfOddEvenSums = function (n) {
    let oddsum = evensum = 0;
    for (let i = 0; i <= 2 * n; i++) {
        if (i % 2 === 0) evensum += i;
        else oddsum += i;
    }
    return gcd(oddsum, evensum);
};