/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function (nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans.push(nums[i]);
    }
    for (let j = nums.length - 1; j >= 0; j--) {
        ans.push(nums[j]);
    }
    return ans;
};