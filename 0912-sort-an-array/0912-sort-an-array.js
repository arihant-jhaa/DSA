/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (arr) {
    function mergeArr(arr1, arr2) {
        let p1 = 0,
            p2 = 0;
        ((n = arr1.length), (m = arr2.length));
        let arr = [];

        for (let i = 0; i < m + n; i++) {
            if ((arr1[p1] < arr2[p2] && p1 < m) || p2 >= m) {
                arr[i] = arr1[p1];
                p1++;
            } else {
                arr[i] = arr2[p2];
                p2++;
            }
        }
        return arr;
    }

    function mergeSort(arr) {
        if (arr.length <= 1) return arr;
        let mid = Math.floor(arr.length / 2);
        let left = mergeSort(arr.slice(0, mid));
        let right = mergeSort(arr.slice(mid));
        return mergeArr(left, right);
    }
    return mergeSort(arr);
};