/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let a = arr;
    for(let i = 0;i<a.length;i++){
        a[i]= fn(a[i],i);
    }
    return a;
};