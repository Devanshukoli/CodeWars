/*
An anagram is the result of rearranging the letters of a word to produce a new word.

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

const isAnagram = (test, original) => {
    // will use toLowerCase() to lower them...
    const cleanString = str = str.toLowerCase().replace(/[^a-z]/g, '')

    const cleanTest = cleanString(test)
    const cleanOriginal = cleanString(original)

    // first their lengths would be same.
    if (cleanOriginal !== cleanTest) {
        return false
    }

    // The letters that would be used in them, are also same
    const sortedTest = cleanTest.split('').sort().join('')
    const sortedOriginal = cleanOriginal.split('').sort().join('')

    return sortedOriginal === sortedTest

}


// Other methods.
var isAnagram = function (test, original) {
    var t = test.toLowerCase().split('').sort().join('');
    var o = original.toLowerCase().split('').sort().join('');
    return (t == o) ? true : false;
}

function isAnagram(test, original) {
    return test.toLowerCase().split("").sort().join("") === original.toLowerCase().split("").sort().join("");
}
