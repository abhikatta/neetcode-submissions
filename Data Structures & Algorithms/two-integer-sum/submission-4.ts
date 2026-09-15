class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const mapping = new Map();
        for (let i = 0; i < nums.length; i++) {
            const newFirst = target - nums[i]
            const hasNewFirst = mapping.has(newFirst)
            if (hasNewFirst) {
                return [i, mapping.get(newFirst)]
            }
            else {
                mapping.set(nums[i], i)
            }
        }
    }
}
