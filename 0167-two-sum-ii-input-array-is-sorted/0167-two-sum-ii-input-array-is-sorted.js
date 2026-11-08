/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (a, target) {
    let p1 = 0; p2 = a.length - 1;
    while (p1 < p2) {
        if (a[p1] + a[p2] === target) {
            return [++p1, ++p2];
        }
        if (a[p1] + a[p2] > target) {
            p2--;
        }
        if (a[p1] + a[p2] < target) {
            p1++;
        }
    }
};