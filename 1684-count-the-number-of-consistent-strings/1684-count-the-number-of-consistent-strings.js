/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    let map = new Map();
    for (const s of allowed) {
        map.set(s);
    }

    let count = 0;
    for (const s of words) {
        let check = 0;
        for (const a of s) {
            if (map.has(a)) check++;
            else break;
        }
        if (check === s.length) count++;
    }
    return count;
};
