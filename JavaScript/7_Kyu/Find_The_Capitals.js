/*
Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

"CodEWaRs" --> [0,3,4,6]

*/

function capitals(word) {
    // first we split the word into an array.
    let splitedWords = word.split('');

    // then we use the map function to iterate over the array and return the index of the capital letters.
    return splitedWords.map((letter, index) => {
        // here then we check if the given letter is uppercase, if it is we return the index of the letter.
        if (letter === letter.toUpperCase()) {
            return index;
        }
    }).filter((index) => index !== undefined); // then we filter out the undefined values.

}

console.log(capitals('CodEWaRs')) // [0,3,4,6]


// Other Methods.
function capitals(word) {
    let caps = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() == word[i]) caps.push(i);
    }
    return caps;
};