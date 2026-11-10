/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function (x, y, z) {
    if (x === y || Math.abs(z - x) === Math.abs(z - y)) return 0;
    return Math.abs(z - x) < Math.abs(z - y) ? 1 : 2;
};