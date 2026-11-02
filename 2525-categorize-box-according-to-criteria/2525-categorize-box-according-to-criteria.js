/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function (length, width, height, mass) {
    let a = [length, width, height, mass];
    let v = a[0] * a[1] * a[2];

    let b = [0, 0];

    if (a[0] >= 10000 || a[1] >= 10000 || a[2] >= 10000 || v >= 1000000000)
        b[0] = 1;

    if (a[3] >= 100) b[1] = 1;

    if(b[0]===1 && b[1]===1)return "Both";
    if(b[0]===1 && b[1]===0)return "Bulky";
    if(b[0]===0 && b[1]===1)return "Heavy";
    if(b[0]===0 && b[1]===0)return "Neither";

};