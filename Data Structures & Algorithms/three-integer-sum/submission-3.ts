class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        nums = nums.sort((a, b) => (a - b))
        console.log(nums)
        let res: number[][] = []
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) continue
            else {
                const k = nums[i];
                let first = i + 1, last = nums.length - 1
                while (first < last) {
                    const sum = nums[first] + nums[last] + k
                    if (sum > 0) {
                        last -= 1
                    }
                    else if (sum < 0) {
                        first += 1
                    }
                    else {
                        res.push([k, nums[first], nums[last]])
                        first += 1
                        while (nums[first] === nums[first - 1] && first < last) {
                            first += 1
                        }
                    }
                }
            }
        }


        return res
    }
}
