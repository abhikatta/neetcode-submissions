class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        let first = 0,
            last = nums.length - 1;
        let freq = new Map<number, number>();
        if(nums.length===1){
            return nums
        }
        while (true) {
            const newFirst = freq.get(nums[first])
            freq.set(nums[first], (newFirst || 0) + 1);

            const newLast = freq.get(nums[last])
            freq.set(nums[last], (newLast || 0) + 1);

            if (first + 1 === last ||first===last) {
                break
            }
            else {
                first += 1
                last -= 1
            }
        }
console.log(freq)
        const result = [...freq.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, k)
            .map(([key]) => key);

        return result
    }
}
