/** 
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

// My Try code:
const str = prompt('Enter string:')

function alphabetPosition(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz' // this for only taking english alphabet letters to take into acount
  const normalLowerCaseText = str.toLowerCase() // this for conveting given string into lowercase
  let result = '' // empty variable where I will store my result
  
  // now, i will take one for loop for iterating over the given this text/string.
  for(let i = 0; i<normalLowerCaseText.length; i++){
  	// now i will take char out of the string for replacing wit it's position
    const char = normalLowerCaseText[i]
    // another variable for finding out this charcter index.
    const charIndex = alphabet.indexOf(char)
    
    // now we check to find the position of the letter in given `alphabet` string.
    if(charIndex !== -1){
      const position = charIndex + 1 // This line will calculate position of charindex in the `alphabet` string. and why we add 1 here, because array indices start from 0. mean that when index is 0 that means the latter is 'a' and it's position is 1.
      result += position + ' '
    }
  }
  // retutrn the text, condition : ignore everything that isn't letter
  return result.trim() // trim() function will remove any leading and trailing whitespace in the result string.
}

console.log(alphabetPosition(str))

// method 1 : One liner code 
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');

// method 2 : One liner code 
let alphabetPosition = (text) => text.toLowerCase().split('').map(a => a.charCodeAt(0) - 96).filter(a => a > 0 && a < 27).join(' ');
const alphabetPosition = text =>
  [...text.toLowerCase().replace(/[^a-z]/g, ``)].map(val => val.charCodeAt() - 96).join(` `);

// method 3
function alphabetPosition(text) {
  var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  return text.toLowerCase().replace(/[^a-z]/g,'').split('').map(x => alphabet.indexOf(x)+1).join(' ');  
}
// OR


// method 4
function transform(char){
  switch(char){
      case 'a':
        return 1
      case 'b':
        return 2
      case 'c':
        return 3
      case 'd':
        return 4
      case 'e':
        return 5
      case 'f':
        return 6
      case 'g':
        return 7
      case 'h':
        return 8
      case 'i':
        return 9
      case 'j':
        return 10
      case 'k':
        return 11
      case 'l':
        return 12
      case 'm':
        return 13
      case 'n':
        return 14
      case 'o':
        return 15
      case 'p':
        return 16
      case 'q':
        return 17
      case 'r':
        return 18
      case 's':
        return 19
      case 't':
        return 20
      case 'u':
        return 21
      case 'v':
        return 22
      case 'w':
        return 23
      case 'x':
        return 24
      case 'y':
        return 25
      case 'z':
        return 26
      default:
        return -1
  }
}
function alphabetPosition(text) {
  let new_text = ''
  text = text.toLowerCase()
  for(let i = 0; i < text.length; i++){
    let n_char = transform(text.charAt(i))
    if(n_char != -1){
      new_text += n_char + ' '
    }    
  }  
  return new_text.trim();
}