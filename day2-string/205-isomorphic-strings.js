/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 const helper = (word) => {
    let lookup = new Map();
    let output = [] //numerical conversion of string
    let i = 1; 

    for(character of word) {
        //  if character is unique, add it to the lookup map first
        if (!lookup.has(character)) {
            lookup.set(character, i)
            i += 1
        }
        output.push(lookup.get(character))
    }
    return output.join("")
}

const isIsomorphic = (s, t) => {
    if(s.length != t.length) { return false }
    return helper(s) == helper(t)   
};

console.log(`isIsomorphic("egg", "add") is true = ${isIsomorphic("egg", "add")}`)
console.group(`isIsomorphic("foo", "bar") is false = ${isIsomorphic("foo", "bar")}`)