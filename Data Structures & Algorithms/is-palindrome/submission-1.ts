class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        s = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '')
        const size = s.length

        for (let i = 0; i < size; i++) {
            if (s[i] !== s[size - 1 - i]) {
                return false
            }
        }
        return true
    }
}
