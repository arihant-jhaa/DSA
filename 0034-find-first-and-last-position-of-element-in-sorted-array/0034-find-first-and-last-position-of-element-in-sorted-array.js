/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (a, target) {
    let r = a.length - 1, l = 0;
    let arr = [];
    while (l < r) {
        let m = l + Math.floor((r - l) / 2);
        if (a[m] < target) {
            l = m + 1;
        }
        else {
            r = m;
        }
    }
    if (a[l] === target) {
        arr.push(l);
    }
    else arr.push(-1);

    r = a.length - 1; l = 0;

    while (l < r) {
        let m = l + Math.ceil((r - l) / 2);
        if (a[m] > target) {
            r = m - 1;
        }
        else {
            l = m;
        }
    }
    if (a[l] === target) {
        arr.push(l);
    }
    else arr.push(-1);

    return arr;
};