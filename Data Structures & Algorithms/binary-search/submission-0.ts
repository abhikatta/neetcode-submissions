class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let first = 0, last = nums.length
        while (first <= last) {
            const mid = Math.floor((first + last) / 2);
            if (target === nums[mid]) {
                return mid
            }
            else if (first + 1 === last && nums[mid] !== target) {
                return -1
            }
            else {
                if (target < nums[mid]) {
                    last = mid
                }
                else {
                    first = mid
                }
            }
        }
        return -1
    }
}
