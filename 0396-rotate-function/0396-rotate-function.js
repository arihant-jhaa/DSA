/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (arr) {
    let currsum = totalsum = 0;
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        totalsum += arr[i];
        currsum += i * arr[i];
    }

    let max = currsum;

    for (let i = 1; i < n; i++) {
        currsum += totalsum - n * arr[n - i];
        max = Math.max(max, currsum);
    }
    return max;
};