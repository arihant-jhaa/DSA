/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function (date) {
    let arr = date.split('-');
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        ans.push(Number(arr[i]).toString(2));
    }
    return ans.join('-');
};