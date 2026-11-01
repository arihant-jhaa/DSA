/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function (arr) {
    let ans = [];
    let count = 0;//for alternate cell
    for (let i = 0; i < arr.length; i++) {
        //increasing...
        for (let j = 0; j < arr[0].length; j++) {
            if (count % 2 === 0) ans.push(arr[i][j]);
            count++;
        }
        //decreasing...
        i++;
        for (let k = arr[0].length - 1; k >= 0; k--) {
            if (count % 2 === 0 && i < arr.length) ans.push(arr[i][k]);
            count++;
        }
    }
    return ans;
};