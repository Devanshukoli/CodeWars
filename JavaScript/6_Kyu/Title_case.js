/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

Example
titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

*/

function titleCase(title, minorWords) {
    if (!title) return ''; // If the title is empty, return an empty string

    // Convert minorWords to lowercase and split into an array
    let minorWordsArray = minorWords ? minorWords.toLowerCase().split(' ') : [];

    // Split the title into words and process each word
    return title.toLowerCase().split(' ').map((word, index) => {
        // Capitalize the first word or words not in the minorWordsArray
        if (index === 0 || !minorWordsArray.includes(word)) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            return word;
        }
    }).join(' ');
}

// Example usage:
console.log(titleCase('a clash of KINGS', 'a an the of')); // 'A Clash of Kings'
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); // 'The Wind in the Willows'
console.log(titleCase('the quick brown fox')); // 'The Quick Brown Fox'
