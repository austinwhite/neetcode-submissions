class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const array = new Array<number>(nums.length*2);
        const offset = nums.length

        for (let i=0; i < nums.length; i++) {
            const num = nums[i]
            array[i] = num
            array[offset + i] = num
        }

        return array
    }
}
