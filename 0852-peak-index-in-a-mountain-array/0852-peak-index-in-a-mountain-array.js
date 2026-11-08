/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let r = arr.length - 1, l = 0;
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (arr[m] < arr[m + 1]) {
            l = m + 1;
        }
        else {
            r = m;
        }
    }
    return r;
};