/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    let map = new Map(), ans = [];
    for (let a of nums) {
        if (map.has(a)) ans.push(a);
        else map.set(a);
    }
    return ans;
};