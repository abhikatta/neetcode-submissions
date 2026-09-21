class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let totalWater = 0;
        let maxLeft = new Map<number,number>(), maxRight = new Map<number,number>()
        let currMaxLeft = 0, currMaxRight = 0

        for (let i = 0; i < height.length; i++) {
            currMaxLeft = Math.max(currMaxLeft, height[i - 1] ?? 0)
            maxLeft.set(i,currMaxLeft)
        }
        for (let i = height.length-1; i >= 0; i--) {
            currMaxRight = Math.max(currMaxRight, height[i + 1] ?? 0)
            maxRight.set(i,currMaxRight)
        }
        for (let i = 0; i < height.length; i++) {
            const currWater = Math.min(maxLeft.get(i), maxRight.get(i)) - height[i]
            const water = currWater < 0 ? 0 : currWater
            totalWater += water
        }
        return totalWater
    }
}
