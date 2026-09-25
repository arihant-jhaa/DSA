/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (right >= left) {
        let middle = Math.floor((left + right) / 2);
        if (nums[middle] == target) return middle;
        if (nums[middle] > target) right = middle - 1;
        if (nums[middle] < target) left = middle + 1;
    }
    return -1;
};