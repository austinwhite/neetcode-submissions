class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>()

        for (let i=0; i<nums.length; i++) {
            const compliment = target - nums[i]

            if (map.get(nums[i]) !== undefined) {
                return [map.get(nums[i]), i]
            } else {
                map.set(compliment, i)
            }
        }
    }
}
