class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for (let i = 0; i < nums.length; i++) {
            let start = i;
            let res: number[] = [start]
            const remaining = target - nums[start]
            const hasRemaining = nums.includes(remaining)
            const last = nums.lastIndexOf(remaining)
            if (hasRemaining && last !== start) {
                res.push(last)
                return res
            }
        }
    }
}
