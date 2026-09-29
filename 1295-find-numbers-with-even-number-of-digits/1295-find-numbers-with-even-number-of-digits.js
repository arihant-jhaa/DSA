/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let count = 0, even = 0;
    for (let i = 0; i < nums.length; i++) {
        count = nums[i].toString().length;
        if (count % 2 == 0) {
            even++;
        }
    }
    return even;
};