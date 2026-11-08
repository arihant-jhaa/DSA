/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (a) {
    let r = a.length - 1; l = 0;
    while (l <= r) {
        m = l + Math.floor((r - l / 2));
        if (a[m] === a[m - 1]) {
            lcount = m - l - 1;
            if (lcount % 2 === 1) r = m - 2;
            else l = m + 1;
        }
        else if (a[m] === a[m + 1]) {
            lcount = m - l;
            if (lcount % 2 === 1) r = m - 1;
            else l = m + 2;
        }
        else return a[m];
    }
    return a[r];
};