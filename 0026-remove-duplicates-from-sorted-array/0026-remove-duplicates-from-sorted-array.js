/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(arr) {
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[x]) {
            x++;
            arr[x] = arr[i];
        }
    }
    return x+1;
};