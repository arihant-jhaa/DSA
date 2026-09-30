/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const grouped = {};
    for (let i = 0; i < this.length; i++) {
        const key = fn(this[i]);
        if (!grouped[key]) {
            grouped[key] = [];
        }
        grouped[key].push(this[i]);
    }
    return grouped;
};
