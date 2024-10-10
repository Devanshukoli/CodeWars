/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
there are no special characters used, only letters and spaces
words are separated by a single space
there are no leading or trailing spaces
Examples

'72olle 103doo 100ya' --> 'Hello good day'
'82yade 115te 103o'   --> 'Ready set go'
*/

function decipherMessage(message) {
    return message.split(' ').map(word => {
        // Replace the character code with the corresponding letter
        let charCode = '';
        let i = 0;
        while (!isNaN(word[i])) {
            charCode += word[i];
            i++;
        }
        let firstLetter = String.fromCharCode(charCode);
        let restOfWord = word.slice(i);

        // Swap the second and last letters
        if (restOfWord.length > 1) {
            restOfWord = restOfWord[restOfWord.length - 1] + restOfWord.slice(1, -1) + restOfWord[0];
        }

        // Combine the first letter and the rest of the word
        return firstLetter + restOfWord;
    }).join(' ');
}

// Example usage:
console.log(decipherMessage('72olle 103doo 100ya')); // Output: 'Hello good day'
console.log(decipherMessage('82yade 115te 103o'));   // Output: 'Ready set go'
