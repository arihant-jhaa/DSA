/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let arr = new Array(26).fill(0);
    for (let ch of s) {
        arr[ch.charCodeAt(s) - 97]++;
    }

    let maxv = 0, maxc = 0;
    for (let i = 0; i < arr.length; i++) {
        if ([0, 4, 8, 14, 20].includes(i)) {
            maxv = Math.max(arr[i], maxv);
        }
        else {
            maxc = Math.max(arr[i], maxc);
        }
    }
    return maxv + maxc;

};