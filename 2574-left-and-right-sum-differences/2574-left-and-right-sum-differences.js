/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function (nums) {
    let sum = 0;
    for (let element of nums) {
        sum += element;
    }

    let leftsum = [], lsum = 0;
    for (let i = nums.length - 1; i >= 0; i--) {
        lsum += nums[i]
        leftsum[i] = sum - lsum;
    }

    let rightsum = [], rsum = 0;
    for (let i = 0; i < nums.length; i++) {
        rsum += nums[i]
        rightsum[i] = sum - rsum;
    }

    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        ans[i] = Math.abs(leftsum[i] - rightsum[i]);
    }

    return ans;
};