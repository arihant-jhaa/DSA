/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (account) {
    let maxWealth = 0, count = 0;
    for (let i = 0; i < account.length; i++) {
        for (let j = 0; j < account[i].length; j++) {
            count += account[i][j];
        }
        if (count > maxWealth)
            maxWealth = count;
        count = 0;
    }
    return maxWealth;
};