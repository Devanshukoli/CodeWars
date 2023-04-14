/** 
  We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
*/

// My code
const promp = prompt('Enter the string:');

function stringToNum(promp) {
  return Number(promp);
}

console.log(stringToNum(promp));

// method 1
var stringToNumber = function(str){
  return parseInt(str);
}

// method 2
var stringToNumber = function (str) {
  return Number(str)
}

// method 3
var stringToNumber = (str) => {
  return +str;
}

// method 4 
var stringToNumber = Number;