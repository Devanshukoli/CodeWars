/*

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

For example, the score of abad is 8 (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

*/

function high(x) {
    // so i am to given a string. In which a to z is assigned 1 to ... numbers. Now the string contains multiple words.

    // so what i'm understanding is right that I need to loop through string and calculate addition of digits to each character in given words, words in string. Then need to check at the same time which words comes with highest numbers.

    // And then return that word.
}

function high(x) {
    // creating a variable which will keep track of the highest score being coming out.
    let highestScore = 0;
    // There should be another var which will store the max. score.
    let highestWord = "";

    // spliting the string
    const words = x.split(' ');

    // main loop for going through the splited words...
    for (let i = 0; i < words.length; i++) {
        let wordScore = 0;
        const word = words[i];

        // again inner loop for calculating the score of current word
        for (let j = 0; j < word.length; j++) {
            // chatCodeAt used here for their digits as 0 is 97 so strted with 96
            wordScore += word.charCodeAt(j) - 96;
        }

        if (wordScore > highestScore) {
            highestScore = wordScore;
            highestWord = word;
        }
    }

    return highestWord;
}

// Other methods...
function high(s) {
    let as = s.split(' ').map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
    return s.split(' ')[as.indexOf(Math.max(...as))];
}