/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    //greatest number in array
    let max = 0
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > max)
            max = candies[i];
    }
    let result = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies < max)
            result[i] = false;
        else
            result[i] = true;
    }
    return result;
};