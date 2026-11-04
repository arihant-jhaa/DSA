/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (a, target) {
    let l = 0, r = a.length - 1;
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (target === a[m]) {
            return m;
        }
        else if (a[l] <= a[m]) {
            if (target < a[m] && target >= a[l]) r = m - 1;
            else l = m + 1;
        }
        else {
            if (target > a[m] && target <= a[r]) l = m + 1;
            else r = m - 1
        }
    }
    return -1;
};