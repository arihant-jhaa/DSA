/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const combined = {};

    for (const item of arr1) {
        combined[item.id] = item;
    }

    for (const item of arr2) {
        if (combined[item.id]) {
            combined[item.id] = { ...combined[item.id], ...item };
        } else {
            combined[item.id] = item;
        }
    }

    return Object.values(combined).sort((a, b) => a.id - b.id);
};
