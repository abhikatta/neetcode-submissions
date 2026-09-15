class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        let i = 0
        let T=t,S=s;
        while (i < s.length) {
            if (t.includes(s[i])) {
                S = S.replace(s[i], '')
                T = T.replace(s[i], '')
            }
            i++;
        }

        return T.length === 0 && S.length === 0;

    }
}
