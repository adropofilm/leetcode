/*

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let lookUp = new Map();
    let i = 0;
    const len = nums.length-1;

    while(i <= len) {
        let curr = nums[i];
        let lookingFor = target-curr;

        if(lookUp.has(lookingFor)) { 
            return [lookUp.get(lookingFor), i];
        }

        if(!lookUp.has(curr)) { lookUp.set(curr, i) }

        i+=1
    }
};

console.log(`twoSum([2,7,11,15], 9) is [0,1] = ${twoSum([2,7,11,15], 9)}`)
console.log(`twoSum([3,2,4], 6) is [1,2] = ${twoSum([3,2,4], 6)}`)
console.log(`twoSum([3,3], 6) is [0,1] = ${twoSum([3,3], 6)}`)
console.log(`twoSum([3,2,3], 6) is [0,2] = ${twoSum([3,2,3], 6)}`)

// Runtime: 80 ms, faster than 94.44% of JavaScript online submissions for Two Sum.
