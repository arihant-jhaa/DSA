/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
    let ans = [pref[0]];
    for (let i = 1; i < pref.length; i++) {
        ans.push(pref[i - 1] ^ pref[i]);
    }
    return ans;
};