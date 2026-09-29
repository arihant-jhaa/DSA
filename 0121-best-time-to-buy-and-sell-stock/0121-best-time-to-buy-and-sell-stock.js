/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let maxProfit = 0;
    for(let i = 0;i< prices.length;i++){
        if(maxProfit < prices[i] - min){
            maxProfit = prices[i] - min;
        }
        if(min > prices[i]){
            min = prices[i];
        }
    }
    return maxProfit;
};