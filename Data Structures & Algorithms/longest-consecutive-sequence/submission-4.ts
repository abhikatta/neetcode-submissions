class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let map = new Map()
        let seqLength = 0

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], nums[i] + 1)
        }

        for (const num of nums) {
            let len = 0
            if (!map.has(num - 1)) {
                while (map.has(num + len)) {
                    len += 1
                }
            }
            seqLength = Math.max(seqLength, len)
        }
        return seqLength
    }
}