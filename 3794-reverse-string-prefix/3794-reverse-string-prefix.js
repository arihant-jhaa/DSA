/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function (srr, k) {
    let s = srr.split('');
    for (let i = 0, j = k - 1; i < j; i++, j--) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
    return s.join('');
};