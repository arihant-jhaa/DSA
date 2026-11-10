/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    let sum = 0, max = 0, l = nums.length;
    for (let n of nums) {
        if (max < n) max = n;
        sum += n;
    }
    return max * l - sum;
};