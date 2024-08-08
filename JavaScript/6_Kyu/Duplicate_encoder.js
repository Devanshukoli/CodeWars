/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

*/

// function duplicateEncoder(word) {
//     let word = word.toLowerCase()
//     // go thorough each string with loop, Then start replacing charactr with '(' , simultenously also check if it repeating again!! so replace it with ')', we can do this in ternary, I guess!

//     // Though here, I wonder if empty character comes then it is also included as character and replace it with '(', yeah!
//     if ()
//         return
// }

function duplicateEncoder(word) {
    word = word.toLowerCase();
    return `word = ${word} ->` + ` ` +  word.split('').map(char =>word.indexOf(char) === word.lastIndexOf(char) ? '(' : ')').join('');
}

console.log(duplicateEncoder("din"));      // "(((
console.log(duplicateEncoder("recede"));   // "()()()"
console.log(duplicateEncoder("Success"));  // ")())())"
console.log(duplicateEncoder("(( @"));     // "))(("


// Other methods...
function duplicateEncoder(word) {
    return word
        .toLowerCase()
        .split('')
        .map((a, i, w) => w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')')
        .join('')
}

function duplicateEncoder(word) {
    var unique = '';
    word = word.toLowerCase();
    for (var i = 0; i < word.length; i++) {
        if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
            unique += '(';
        } else {
            unique += ')';
        }
    }
    return unique;
}