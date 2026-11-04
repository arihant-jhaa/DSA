/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
    let max = 0;
    for (digit of n) {
        if (Number(digit) > max) max = Number(digit)
    }
    return max;

};