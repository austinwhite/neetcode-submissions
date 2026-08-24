class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        if (strs.length === 1) { return strs[0] }

        for (let i=0; i < strs[0].length; i++) {
            const comparator = strs[0][i]
            
            for (const str of strs) {
                const match = comparator === str[i]

                if (match === false) {
                    return strs[0].slice(0, i)
                }
            }
        }        
        return strs[0]
    }
}
