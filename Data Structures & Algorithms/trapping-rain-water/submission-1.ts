class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let left = 0, right = height.length-1, maxL = height[left], maxR = height[right], res = 0;

        while (left < right) {
            if (maxL < maxR) {
                left += 1
                maxL = Math.max(maxL, height[left])
                res += maxL - height[left]
            }
            else {
                right -= 1
                maxR = Math.max(maxR, height[right])
                res += maxR - height[right]
            }
        }

        return res
    }
}
