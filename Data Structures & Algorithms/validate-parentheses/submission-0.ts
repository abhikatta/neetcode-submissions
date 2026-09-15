class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const brackets = { '{': "}", "(": ")", "[": "]" }
        const stack = []
        const openingBrackets = Object.keys(brackets);
        const closingBrackets = Object.values(brackets);
        for (let i = 0; i < s.length; i++) {
            if (openingBrackets.includes(s[i])) {
                stack.push(s[i])
            }
            else if (closingBrackets.includes(s[i]) ) {
                if(s[i] !== brackets[stack.pop()]){
                    return false
                }

            }
        }
        return !Boolean(stack.length)
    }
}
