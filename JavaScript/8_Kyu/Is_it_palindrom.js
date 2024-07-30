/*
Write a function that checks if a given string (case insensitive) is a palindrome.

A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
*/

function checkPalindrom(str) {
    // return str == str.split('').reverse().join('');
    console.log(str.toLowerCase() == str.split('').reverse().join('').toLowerCase())
}

checkPalindrom('Hello') // print : false
