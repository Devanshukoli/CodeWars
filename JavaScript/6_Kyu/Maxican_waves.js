/*

Task : In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

Rules :  1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

Example : wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

*/

function wave(str) {
 // first split the string and then turn each char into array.
  let char =  str.split(' ')

  // then loop through each character one by one.
  for(let i = 0; i < char.length; i++) {
    // here each 
    char[i].toUppercase()
  }

  return str.join(' ')
}


// corrected code.
function wave(str) {
  let result = []

  for(let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
    let chars = str.split('')
      chars[i] = chars[i].toUpperCase();
      result.push(chars.join(''))
    }
  }
  return result
}
