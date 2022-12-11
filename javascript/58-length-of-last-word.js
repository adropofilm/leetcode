/*
58. Length of Last Word

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 

Constraints:

1 <= s.length <= 104
s consists of only English letters and spaces ' '.
There will be at least one word in s.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const words = s.split(" ")
    let lastWord;

    for(let i = words.length-1; i >=0; i--) {
        if(words[i].length > 0) { 
            lastWord = words[i]
            break
        }
    }

    return lastWord.length
};

console.log("lengthOfLastWord('Hello World') is 5 =>", lengthOfLastWord("Hello World")==5)
console.log("lengthOfLastWord('   fly me   to   the moon  ') is 4 =>", lengthOfLastWord("   fly me   to   the moon  ")==4)
console.log("lengthOfLastWord('luffy is still joyboy') is 6 =>", lengthOfLastWord("luffy is still joyboy")==6)