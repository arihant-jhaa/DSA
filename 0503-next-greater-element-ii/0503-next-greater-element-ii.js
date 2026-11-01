/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (arr) {
    let n = arr.length;
    let s = [];
    let ans = Array(n).fill(-1);
    s.push(arr[n - 1]);

    for (let i = (2 * n) - 2; i >= 0; i--) {
        while (s.length) {
            if (arr[i % n] < s[s.length - 1]) {
                ans[i] = s[s.length - 1];
                break;
            }
            else {
                s.pop();
            }
        }
        s.push(arr[i % n]);
    }
    return ans.slice(0, n);
};