/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (a, p) {
    const n = a.length;
    let left = 0, right = n - 1;
    let ans = new Array(n).fill(p);
    for (let i = 0, j = n - 1; i < n; i++, j--) {
        if (a[i] < p) {
            ans[left] = a[i];
            left++;
        }
        if (a[j] > p) {
            ans[right] = a[j];
            right--;
        }
    }
    return ans;
};