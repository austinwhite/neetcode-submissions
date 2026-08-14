class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) { return false }

        const array = new Array(26).fill(0);

        for (const char of s) {
            const key = char.charCodeAt(0) - 'a'.charCodeAt(0)
            array[key] += 1
        }

        for (const char of t) {
            const key = char.charCodeAt(0) - 'a'.charCodeAt(0)
            array[key] -= 1
        }

        for (const value of array) {
            if (value !== 0) { return false}
        }

        return true
    }
}
