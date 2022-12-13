/*
9. Palindrome Number
Given an integer x, return true if x is a 
palindrome, and false otherwise.

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 
Constraints:

-231 <= x <= 231 - 1
*/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (input) => { 
    const num =  Math.abs(input)
    const numLength = num.length
    const maxComparisons = numLength % 2 === 0 ? numLength / 2 : Math.floor(numLength / 2);

    for(let i = 0; i < maxComparisons; i++) {
        console.log(`i`, i)
        let firstChar = num[i]
        let lastChar = num[numLength - 1 - i]
        
        if(firstChar !== lastChar) { return false }
    }
    return true
}

console.log(`isPalindrome(-121)`, isPalindrome(-121))
console.log(`isPalindrome(121)`, isPalindrome(121))
console.log(`isPalindrome(10)`, isPalindrome(10))
console.log(`isPalindrome(1022)`, isPalindrome(1022))