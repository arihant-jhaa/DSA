/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (a) {
    let ans = [];
    for (let i = 0; i < a.length; i++) {
        let count = 0;
        for (let j = 0; j < a.length; j++) {
            if (a[j] === '1') {
                count += Math.abs(i - j);
            }
        }
        ans.push(count);
    }
    return ans;
};