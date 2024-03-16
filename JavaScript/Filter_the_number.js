/*

Filter the number
Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

Task
Your task is to return a number from a string.

Details
You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

*/

function filterNumber(str) {
    // Use a regular expression to match all numbers in the string
    let numArray = str.match(/\d+/g).join('')
    return parseInt(numArray)
}

// Example usage:
const mixedString = "abc123def456gh7";
const numbersArray = filterNumber(mixedString);
console.log(numbersArray);



// Method 1 : using one liner code.
let FilterString = value => +value.replace(/\D/g, '');

let FilterString = function (value) {
    return +value.split('').filter(n => !isNaN(n)).join('');
}