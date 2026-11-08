/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (a, target) {
    let p1 = 0; p2 = a.length - 1;
    while (p1 < p2) {
        let sum = a[p1] + a[p2];
        if (sum === target) {
            return [++p1, ++p2];
        }
        else if (sum > target) {
            p2--;
        }
        else {
            p1++;
        }
    }
};