// Title: Power of Two
            // Difficulty: Easy
            // Language: JavaScript
            // Link: https://leetcode.com/problems/power-of-two/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n == 1)
        return true;
    else if (n < 1 || (n % 2 != 0))
        return false;
    return isPowerOfTwo(n / 2);
};
