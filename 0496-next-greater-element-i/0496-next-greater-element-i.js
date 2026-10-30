/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums2, arr) {
    let map = {};
    let s = [];
    let n = arr.length;
    s.push(arr[n - 1]);
    map[arr[n - 1]] = -1;
    for (let i = n - 2; i > -1; i--) {
        while (s.length) {
            if (s[s.length - 1] < arr[i]) {
                s.pop();
            }
            else {
                map[arr[i]] = s[s.length - 1];
                break;
            }
        }
        if (s.length === 0) {
            map[arr[i]] = -1;
        }

        s.push(arr[i]);
    }

    let ans = [];
    for (let i = 0; i < nums2.length; i++) {
        ans.push(map[nums2[i]]);
    }

    return ans;
};