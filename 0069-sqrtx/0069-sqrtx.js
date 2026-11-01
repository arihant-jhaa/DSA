/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x;
    let l = 2;
    let r = Math.floor(x / 2);
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (x === m * m) return m;
        else if (x < m * m) r = m - 1;
        else if (x > m * m) l = m + 1;
    }
    return r;
};