/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (a) {
    let l = 0; r = a.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (a[m] < a[m + 1]) {
            l = m + 1;
        }
        else {
            r = m;
        }
    }
    return r;
};