class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // 48-57 or 97-122
    isInAsciiRange(s: string): boolean {
        return (s >= 'a' && s <= 'z') || (s >= "0" && s <= "9")
    }
    isPalindrome(s: string): boolean {
        s = s.toLowerCase()
        let onlyCharStr = ''

        for (const char of s) {
            if (this.isInAsciiRange(char))
                onlyCharStr += char
        }
        const size = onlyCharStr.length
        for (let i = 0; i < size; i++) {
            if (onlyCharStr[i] !== onlyCharStr[size - 1 - i]) {
                return false
            }
        }

        return true
    }
}
