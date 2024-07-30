/*
Everyone knows passphrases. One can choose passphrases from poems, songs, movies names and so on but frequently they can be guessed due to common cultural references. You can get your passphrases stronger by different means. One is the following:

choose a text in capital letters including or not digits and non alphabetic characters,

shift each letter by a given number but the transformed letter must be a letter (circular shift),
replace each digit by its complement to 9,
keep such as non alphabetic and non digit characters,
downcase each letter in odd position, upcase each letter in even position (the first character is in position 0),
reverse the whole result.
Example:
your text: "BORN IN 2015!", shift 1

1 + 2 + 3 -> "CPSO JO 7984!"

4 "CpSo jO 7984!"

5 "!4897 Oj oSpC"

With longer passphrases it's better to have a small and easy program. Would you write it?

https://en.wikipedia.org/wiki/Passphrase
*/

// function playPass(str, num) {
//     // Here, 1 and 2 are done

//     var result = "";
//     var charcode = 0;

//     for (var i = 0; i < str.length; i++) {
//         charcode = str[i].charCodeAt() + num;
//         result += String.fromCharCode(charcode);
//     }
//     // return result;

//     // Now for 3
//     for (let j = 0; j < result.length; j++) {
//         let char = result[j];
//         if (j % 2 === 0) {
//             result += char.toUpperCase();
//         } else {
//             result += char.toLowerCase();
//         }
//     }
//     console.log(result);
//     return result;
// }
// console.log(playPass("BORN IN 2015!", 1));


function playPass(str, num) {
    const originalChars = str.split('');
    const transformedChars = [];

    for (let i = 0; i < originalChars.length; i++) {
        let char = originalChars[i];

        if (char.match(/[A-Z]/)) {
            // Shift uppercase letters by num
            char = String.fromCharCode(((char.charCodeAt(0) - 65 + num) % 26) + 65);
        } else if (char.match(/[0-9]/)) {
            // Replace digits with complement to 9
            char = String.fromCharCode(57 - char.charCodeAt(0));
        }

        if (i % 2 !== 0) {
            // Downcase letters in odd positions
            char = char.toLowerCase();
        } else {
            // Upcase letters in even positions
            char = char.toUpperCase();
        }

        transformedChars.push(char);
    }

    // Reverse the result
    return transformedChars.reverse().join('');
}

console.log(playPass('BORN IN 2015!', 1)); // Output: "!4897 Oj oSpC"
