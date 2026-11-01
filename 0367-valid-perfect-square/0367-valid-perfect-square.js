/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (x) {
    let r = Math.floor(x / 2), l = 2;
    if (x === 1) return true;
    if (x === 2) return false;

    while (r >= l) {
        m = Math.floor((r + l) / 2);
        if (m * m === x) return true;
        else if (m * m > x) r = m - 1;
        else if (m * m < x) l = m + 1;

    }
    return false;
};