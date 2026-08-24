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
            const match = map.get(nums[i])

            if (match !== undefined) {
                return [match, i]
            } else {
                map.set(compliment, i)
            }
        }
    }
}
