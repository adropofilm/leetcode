/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6
*/


// input: array of numbers
// output: manipulated array of numbers where [a, a+b, +a+b+c]

var runningSumSolutionOne = function(nums) {
    let total = 0;
    const output = nums.map((x, i) => {
        if(i==0) {
            total += x
            return x
        }
        total+=x
        return total
    });

    return output;
}

var runningSumSolutionTwo = function(nums) {
    let total = 0;
    let arr = [];

    for(let i = 0; i < nums.length; i++) {
        total += nums[i]
        arr.push(total)
    }

    return arr;
};

let testArray = [1,2,3,4,5,6]
let sumFirstSolution = runningSumSolutionOne(testArray)
let sumSecondSolution = runningSumSolutionTwo(testArray)

console.log(`First Solution: ${sumFirstSolution}`)
console.log(`Second Solution: ${sumSecondSolution}`)