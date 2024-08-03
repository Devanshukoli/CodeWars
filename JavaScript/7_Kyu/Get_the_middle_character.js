/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"

#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"

#Input

A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

#Output

The middle character(s) of the word represented as a string.
*/

function getMiddle(s) {
    const length = s.length;
    const middleIndex = Math.floor(length / 2);
    console.log('middleIndex', middleIndex)
    if (length % 2 === 0) {
        // If the length is even, return two middle characters
        return s.slice(middleIndex - 1, middleIndex + 1);
    } else {
        // If the length is odd, return the middle character
        return s.charAt(middleIndex);
    }
}

console.log(getMiddle("test"));    // Returns "es"
console.log(getMiddle("testing")); // Returns "t"
console.log(getMiddle("middle"));  // Returns "dd"
console.log(getMiddle("A"));       // Returns "A"


// Other methods.
function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

const getMiddle = (s) => s.slice((s.length - 1) / 2, s.length / 2 + 1);
