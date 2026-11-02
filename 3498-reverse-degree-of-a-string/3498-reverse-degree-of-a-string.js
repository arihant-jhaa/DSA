/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
    let ans = 0;

    for (let i = 0; i < s.length; i++) {
        ans += ('z'.charCodeAt(0) - s.charCodeAt(i) + 1) * (i + 1);
    }

    return ans;
};