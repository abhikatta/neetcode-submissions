class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let left = 0, maxProfit = 0
        for (let right = 1; right < prices.length; right++) {
            if (prices[left] < prices[right]) {
                maxProfit = Math.max(maxProfit, prices[right] - prices[left])
            }
            else {
                left = right
            }
        }
        return maxProfit
    }
}
