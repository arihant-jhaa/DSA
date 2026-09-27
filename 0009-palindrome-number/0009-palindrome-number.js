/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let og = x;
    let rev = 0;
    if (og < 0) return false;

    while (og > 0) {
        let last = og % 10;
        rev = rev * 10 + last;
        og = og / 10 | 0;
    }

    return x === rev;
};