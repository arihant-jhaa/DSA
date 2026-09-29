/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (num1, m, num2, n) {

    let p1 = m - 1, p2 = n - 1;

    for (let i = m + n - 1; i >= 0; i--) {
        if (p2 < 0) {
            break;
        }
        if (p1 >= 0 && num1[p1] > num2[p2]) {
            num1[i] = num1[p1];
            p1--;
        }
        else {
            num1[i] = num2[p2];
            p2--;
        }
    }
    return num1;
};