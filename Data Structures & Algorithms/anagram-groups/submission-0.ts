class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    /*basically have a map from a key to values where keys are the count of each character appeared in the string nad the values are the final array grouped anagrams*/

    groupAnagrams(strs: string[]): string[][] {
        let mapping = new Map<string, string[]>()

        strs.forEach((str, i) => {
            let count: number[] = new Array(26).fill(0)
            for (let i = 0; i < str.length; i++) {
                count[str[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            const key = count.join(',')
            if (mapping.has(key)) {
                mapping.get(key).push(str)
            }
            else {
                mapping.set(key, [str])
            }
        })
        return [...mapping.values()]
    }
}
