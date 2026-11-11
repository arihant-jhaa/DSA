/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
    let min = 101, max = 0, map = new Map(), ans = [];
    for (let ele of nums) {
        if (ele < min) min = ele;
        if (ele > max) max = ele;
        map.set(ele);
    }
    for (let i = min; i <= max; i++) {
        if (!map.has(i)) ans.push(i)
    }
    return ans;
};