class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        const map = new Map<number, number>()
        for (let i = 0; i < numbers.length; i++) {
            if (map.has(target - numbers[i])) {
                return [map.get(target - numbers[i]) + 1, i + 1]
            }
            else {
                map.set(numbers[i],i)
            }
        }
    }
}