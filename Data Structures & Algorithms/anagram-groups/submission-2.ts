class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
    const groups = new Map<string, string[]>()

        for (const str of strs) {
            const counts = new Array<number>(26).fill(0)

            for (const char of str) {
                const index = char.charCodeAt(0) - "a".charCodeAt(0)
                counts[index]++
            }

            const canonicalKey = counts.join(",")
            const group = groups.get(canonicalKey)

            if (group) {
                group.push(str)
            } else {
                groups.set(canonicalKey, [str])
            }
        }

        return [...groups.values()]
    }
}
