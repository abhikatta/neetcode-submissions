class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures: number[]): number[] {
        const n = temperatures.length
        let res = Array(n).fill(0)
        let stack = [] // indices of temp. array's values
        for (let i = 0; i < n; i++) {
            while (temperatures[stack[stack.length - 1]] < temperatures[i]) {
                const pos = stack.pop()
                res[pos] = i - pos
            }
            stack.push(i)
        }
        return res
    }
}
