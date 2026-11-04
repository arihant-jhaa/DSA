/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
    function palindromic(a) {
        let b = a, rev = 0;
        while (b != 0) {
            let last = b % 10;
            rev = 10 * rev + last;
            b = Math.floor(b / 10);
        }
        if (rev === a) return true;
        else return false;
    }

    for (let i = 2; i <= n - 2; i++) {
        let convert = n.toString(i);
        let check = palindromic(Number(convert));
        if (check === false) return false;
    }
    return true;
};