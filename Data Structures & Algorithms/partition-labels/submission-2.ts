class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S: string): number[] {
        let map = new Map<string, number>()
        for (let i = 0; i < S.length; i++) {
            map.set(S[i], i)
        }

        let res = [],
            size = 1,
            end = 0;
        for (let i = 0; i < S.length; i++) {
            end = Math.max(end, map.get(S[i]))
            if (i < end) {
                size += 1
            }
            else {
                end = i
                res.push(size)
                size = 1
            }
        }
        return res
    }
}
