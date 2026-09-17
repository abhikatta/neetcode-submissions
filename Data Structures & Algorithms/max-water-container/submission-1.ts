class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let res: number = 0;
        let first = 0, last = heights.length-1;
        while (first < last) {
            res = Math.max(res, Math.min(heights[first], heights[last]) * (last - first))
            if (heights[first] < heights[last]) {
                first += 1
            }
            else  {
                last -= 1
            }
        }
        return res
    }
}
