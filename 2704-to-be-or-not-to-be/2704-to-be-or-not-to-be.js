/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (otherVal) => {
            if (val === otherVal) return true;
            throw new Error("Not Equal");
        },
        notToBe: (otherVal) => {
            if (val !== otherVal) return true;
            throw new Error("Equal");
        }
    };
};
