class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>()
        const result = []

        for (const str of strs) {
            const canonicalKey = [...str].sort().join("")
            let value = map.get(canonicalKey)

            if (value) {
                value.push(str)
            } else {
                value = [str]
            }

            map.set(canonicalKey, value)
        }

        for (const value of map.values()) {
            result.push(value)
        }

        return result
    }
}
