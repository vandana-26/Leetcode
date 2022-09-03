/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {   
    let price = Number.MAX_VALUE;
    let profit = 0;
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < price){
            price = prices[i];
        }
        
        else if(prices[i] - price > profit)
            profit = prices[i] - price; 
    }
    
    return profit;
};