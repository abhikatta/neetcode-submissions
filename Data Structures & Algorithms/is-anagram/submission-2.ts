class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if (s.length !== t.length) return false;
        const countS = new Map()
        const countT = new Map()

        for (let i = 0; i < s.length; i++) {
            const currentCountSI = countS.get(s[i])
            if (currentCountSI)
                countS.set(s[i], currentCountSI + 1)
            else countS.set(s[i], 1)

            const currentCountTI = countT.get(t[i])
            if (currentCountTI)
                countT.set(t[i], currentCountTI + 1)
            else countT.set(t[i], 1)
        }
        for (let i = 0; i < s.length; i++) {
            if (countS.get(s[i]) !== countT.get(s[i]))
                return false
        }
        return true
    }
}