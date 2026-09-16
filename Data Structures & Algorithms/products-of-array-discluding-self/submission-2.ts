class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let res: number[] = [],
            prefixNums: number[] = [],
            suffixNums: number[] = []

        for (let i = 0; i < nums.length; i++) {
            prefixNums.push(nums[i] * (prefixNums[i - 1] ?? 1))
        }
        for (let i = nums.length - 1; i >= 0; i--) {
            suffixNums.unshift(nums[i] * (suffixNums[0] ?? 1))
        }

        for (let i = 0; i < nums.length; i++) {
            res.push((prefixNums[i-1]??1) * (suffixNums[i + 1]??1))
        }


        return res
    }
}
