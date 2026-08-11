class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
      const map = new Map<number, number>();

      for (const num of nums) {
          const count = map.get(num) ?? 0
          map.set(num, count + 1)

          if (count > 0) {
            return true
          }
      }

      return false;
    }
}
