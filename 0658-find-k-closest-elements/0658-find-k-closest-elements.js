/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    let l = 0, r = arr.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (x - arr[m] > arr[m + k] - x) {
            l = m + 1;
        }
        else r = m;
    }
    return arr.slice(l, l + k);
};