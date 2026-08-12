class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) { return false }

        const map = new Map<string, number>();

        for (const char of s) {
            map.set(char, (map.get(char) ?? 0) + 1)
        }

        for (const char of t) {
            const count = map.get(char)

            if (count === undefined || count === 0) {
                return false
            }

            map.set(char, count-1)
        }

        for (const count of map.values()) {
            if (count !== 0) { return false }
        }

        return true
    }
}
