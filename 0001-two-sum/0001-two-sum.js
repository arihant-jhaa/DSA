/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (a, target) {
    // let p1 = 0, p2 = 1;
    // while (p1 != a.length - 1) {
    //     if (a[p1] + a[p2] === target) return [p1, p2];
    //     if (p2 === a.length - 1) {
    //         p1++;
    //         p2 = p1 + 1;
    //     }
    //     else p2++;
    // }

    // -----------------------------------------------------------

    let map = {};
    for (let i = 0; i < a.length; i++) {
        map[a[i]] = i;
    }
    for (let i = 0; i < a.length; i++) {
        let pair = target - a[i];
        if (map[pair] && map[pair] != i) {
            return [i, map[pair]]
        }
    }
};