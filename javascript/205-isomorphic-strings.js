/**
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 
Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true
 

Constraints:
1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
 */

 const helperOne = (word) => {
    let lookup = new Map();
    let output = [] 
    let i = 1; 

    for(character of word) {
        if (!lookup.has(character)) {
            lookup.set(character, i)
            i += 1
        }
        output.push(lookup.get(character))
    }
    return output.join("")
}

const helperTwo = (word) => {
    let lookup = new Map();
    let output = []
    let i = 1; 
    let j = 0;
    const length = word.length-1

    while(j <= length) {
        if(!lookup.has(word[j])) {
            lookup.set(word[j], i)
        }
        output.push(lookup.get(word[j]))
        j+=1
        i+=1
    }

    return output.toString()
}

const isIsomorphicOne = (s, t) => {
    if(s.length != t.length) { return false }
    return helperOne(s) == helperOne(t)   
};

const isIsomorphicTwo = (s, t) => {
    if(s.length != t.length) { return false }
    return helperTwo(s) == helperTwo(t)   
};

console.log(`isIsomorphicOne("egg", "add") is true = ${isIsomorphicOne("egg", "add")}`)
console.group(`isIsomorphicOne("foo", "bar") is false = ${isIsomorphicOne("foo", "bar")}`)
console.log(`isIsomorphicTwo("egg", "add") is true = ${isIsomorphicTwo("egg", "add")}`)
console.group(`isIsomorphicTwo("foo", "bar") is false = ${isIsomorphicTwo("foo", "bar")}`)