class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Map<number, number>();

        for (let i=0; i<nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) ?? 0) + 1)
        }

        for (const value of map.values()) {
            if (value > 1) { return true}
        }

        return false
    }
}
