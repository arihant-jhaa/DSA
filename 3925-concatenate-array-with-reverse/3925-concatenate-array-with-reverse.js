/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function (nums) {
    for(let i = nums.length - 1; i >= 0; i--){
        nums.push(nums[i])
    }
    return nums;
};