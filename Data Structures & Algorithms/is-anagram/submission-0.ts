class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) {return false}

        const mapS = new Map<string, number>();
        const mapT = new Map<string, number>();

        for (const char of s) {
            mapS.set(char, (mapS.get(char) ?? 0) + 1)
        }

        for (const char of t) {
            mapT.set(char, (mapT.get(char) ?? 0) + 1)
        }

        for (const [char, count] of mapS) {
            if (count !== mapT.get(char)) {
                return false
            }
        }

        return true
    }
}
