/*

When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"
*/

function position(letter) {
    // Convert the letter to lowercase to handle both upper and lower case
    letter = letter.toLowerCase();

    // Get the character code and subtract 96 to get the position
    const position = letter.charCodeAt(0) - 96;

    // Return the formatted string
    return `Position of alphabet: ${position}`;
}

// Other methods.
function position(letter) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}