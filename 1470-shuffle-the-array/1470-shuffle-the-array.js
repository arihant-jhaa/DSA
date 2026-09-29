/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
    let nums1 = nums.slice(0, n);
    let nums2 = nums.slice(n, (2 * n));
    let x = 0, y = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            nums[i] = nums1[x];
            x++;
        }
        if (i % 2 == 1) {
            nums[i] = nums2[y];
            y++;
        }
    }
    return nums;
};