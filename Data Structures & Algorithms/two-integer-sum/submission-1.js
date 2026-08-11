class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let compliments = new Map()

        for (let i=0; i<nums.length; i++) {
            if (compliments.has(nums[i]))
                return [compliments.get(nums[i]), i]
            else {
                let newCompliment = target-nums[i]
                compliments.set(newCompliment, i)
            }
        }
    }
}
