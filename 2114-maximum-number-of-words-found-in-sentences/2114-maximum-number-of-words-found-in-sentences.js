/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentence) {
    let max = 0;
    for (let i = 0; i < sentence.length; i++) {
        let arr = sentence[i].split(" ");
        let count = arr.length;
        if (max < count)
            max = count;
    }
    return max;
};