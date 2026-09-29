/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(arr, val) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]!= val) {
            arr[x] = arr[i];
            x++;
        }
    }
    return x;
};