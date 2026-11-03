/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function (nums) {
    let ans = [], count = 0;
    for (let a of nums) {
        if (a % 2 === 0) ans.push(0);
        else count++;
    }
    while (count != 0) {
        ans.push(1);
        count--;
    }
    return ans;
};