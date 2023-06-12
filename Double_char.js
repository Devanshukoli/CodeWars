/** 
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

const str = String(prompt('Enter string : '))

function double(str) {
  let output = str.split("");
  let result = "";
  for (i = 0; i < str.length; i++) {
    result += output[i] + output[i]; // <- change = to +=
  }
  return result;
}
console.log(double(str))

// method 1 : using map() method 
const double = (str) => str.split('').map(c => c + c).join('')

// method 2 : using regex
const double = (str) => str.replace(/(.)/g, "$1$1")

// method 3 : 