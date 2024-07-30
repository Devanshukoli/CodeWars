/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(str) {
    // Convert the string to lowercase and remove non-alphabetic characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, '');

    // Create a Set from the cleaned string to get unique characters
    const uniqueChars = new Set(cleanedStr);

    // Check if the length of the Set is 26 (i.e., all letters of the alphabet are present)
    return uniqueChars.size === 26;
}

console.log(isPangram('Quick Brown fox jumps over the lazy dog.'))

// Other methods.
function isPangram(string) {
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
        return string.indexOf(x) !== -1;
    });
}