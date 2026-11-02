/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function (matrix) {
    let ans = [];
    for (let i = 0; i < matrix.length; i++) {
        let sum = 0;
        for (let j = 0; j < matrix[0].length; j++) {
            sum += matrix[i][j];
        }
        ans.push(sum);
    }
    return ans;
};