/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function (nums) {
    let minsum = Infinity;
    for (let i of nums) {
        let n = i, sum = 0;
        while (n != 0) {
            let last = n % 10;
            sum += last;
            n = Math.floor(n / 10);
        }
        if (minsum > sum) minsum = sum;
    }
    return minsum;
};