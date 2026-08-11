class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let compliment = new Map()

        for (let i=0; i<nums.length; i++) {
            if (compliment.has(nums[i]))
                return [compliment.get(nums[i]), i]
            else {
                compliment.set(target-nums[i], i)
            }
        }
    }
}
