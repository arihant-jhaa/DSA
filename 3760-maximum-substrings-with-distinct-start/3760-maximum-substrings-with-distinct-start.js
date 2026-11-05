/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function (s) {
    let map = new Map();
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) {
            count++;
            map.set(s[i]);
        }
    }
    return count;
};