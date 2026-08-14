class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) { return false }

        const array = new Array(2**7).fill(0);

        for (const char of s) {
            const key = char.charCodeAt(0)
            array[key] += 1
        }

        for (const char of t) {
            const key = char.charCodeAt(0)
            array[key] -= 1
            if (array[key] < 0) { return false }
        }

        for (const value of array) {
            if (value !== 0) { return false}
        }

        return true
    }
}
