/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (a) {
    let l = 0, r = a.length - 1;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (a[m] > a[r]) {
            l = m + 1;
        }
        else {
            r = m;
        }
    }
    return a[r];
};