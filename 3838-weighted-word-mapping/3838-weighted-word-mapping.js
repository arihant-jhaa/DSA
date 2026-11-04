/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function (words, weights) {
    let result = "";

    for (const word of words) {
        let totalWeight = 0;
        for (let i = 0; i < word.length; i++) {
            totalWeight += weights[word.charCodeAt(i) - 97];
        }
        const mappedChar = String.fromCharCode(122 - (totalWeight % 26));
        result += mappedChar;
    }

    return result;
};