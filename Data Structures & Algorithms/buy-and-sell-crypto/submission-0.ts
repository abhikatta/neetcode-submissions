class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let minBuyIndex = prices[0];
        let maxProfit = 0
        for (let i = 0; i < prices.length; i++) {
            minBuyIndex = Math.min(prices[i], minBuyIndex)
            maxProfit = Math.max(maxProfit, prices[i] - minBuyIndex)
        }

        return maxProfit > 0 ? maxProfit : 0
    }
}