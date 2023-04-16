/** 
It's pretty straightforward. Your goal is to create a function that removes a string's first and last characters. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/

// my code
const promp = String(prompt("Enter the string: "))

function removeFirstAndLastChar(promp) {
  let result = promp.slice(1, -1)
  console.log(result)
}

removeFirstAndLastChar(promp)

// method 1
let removeChar = (str) => str.slice(1, -1)

// method 2 (using substring method)
let remveChar = (str) => str.subString(1, str.length-1)

// method 3