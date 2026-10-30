/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (arr) {
    let ans = [];
    let s = [];
    let n = arr.length;
    s.push([arr[n - 1], n - 1]);
    ans.push(0);
    for (let i = n - 2; i > -1; i--) {
        while (s.length) {
            if (s[s.length - 1][0] <= arr[i]) {
                s.pop();
            }
            else {
                ans.push(s[s.length - 1][1] - i);
                break;
            }
        }
        if (s.length === 0) {
            ans.push(0);
        }

        s.push([arr[i], i]);
    }

    return ans.reverse();
};