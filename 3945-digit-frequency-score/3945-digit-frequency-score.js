/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function (n) {
    let sum = 0;
    while (n != 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
};