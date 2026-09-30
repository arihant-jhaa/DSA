/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if (n === 0) return arr;

    const result = [];

    function flatten(currentArr, currentDepth) {
        for (const item of currentArr) {
            if (Array.isArray(item) && currentDepth < n) {
                flatten(item, currentDepth + 1);
            } else {
                result.push(item);
            }
        }
    }

    flatten(arr, 0);
    return result;
};
