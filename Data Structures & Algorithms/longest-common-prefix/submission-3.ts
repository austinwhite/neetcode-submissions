class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs: string[]): string {
        let prefix = strs[0]

        for (const str of strs) {
            while (str.startsWith(prefix) === false) {
                prefix = prefix.slice(0,-1)
            }
        }

        return prefix
    }
}
