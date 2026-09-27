/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    const digits = x.toString().split('');
    let n = digits.length;
    let mid = (n / 2) - 1;
    let check = true;
    for (let i = 0, j = n - 1; i <= j; i++, j--) {
        if (digits[i] != digits[j])
            check = false;
    }
    return check;
};