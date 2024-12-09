/*
Description: Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

*/

function consonantsCount(str) {
    const consonants = str.match(/[b-df-hj-np-tv-z]/gi)

    return consonants ? consonants.length : 0;
}

// Other methods...
const consonantCount = str => str.replace(/[^a-z]|[aeiou]/gi, '').length;
