/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
    let orSum = 0;

    for (const num of nums) {
        orSum |= num;
    }

    // Multiply by 2^(n - 1) using left shift
    return orSum << (nums.length - 1);
};