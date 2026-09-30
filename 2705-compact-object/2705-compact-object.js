/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    }

    const compacted = {};
    for (const key in obj) {
        if (Boolean(obj[key])) {
            compacted[key] = compactObject(obj[key]);
        }
    }
    return compacted;
};
