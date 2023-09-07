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
// Here, prompt() method will not work because it is global window object that manipulate brwoser dom apis, and it is not part of js language, such that If you directly try to run it in without any browser, it will give you error like this : prompt is not defined.(It will literally take it as function.)
const promp = prompt('Enter the string:');

function stringToNum(promp) {
  return Number(promp);
}

console.log(stringToNum(promp));

// method 1 : Using parseInt() method
var stringToNumber = function (str) {
  return parseInt(str);
}

// method 3
var stringToNumber = (str) => {
  return +str;
}

// method 4 
var stringToNumber = Number;