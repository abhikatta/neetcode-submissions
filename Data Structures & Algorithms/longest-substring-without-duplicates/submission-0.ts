class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let res = 0, left = 0, seen = new Set()
        for (let right = 0; right < s.length; right++) {
            while (seen.has(s[right])) {
                seen.delete(s[left])
                left += 1
            }
            seen.add(s[right])
            res = Math.max(res, right - left + 1)

        }
        return res
    }
}
