/**
  We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"
*/

// My Try Code
let prom = Number(prompt("Enter the num : "));

function numToString(prom) {
  var str = prom.toString();
  return str;
}

console.log(numToString(prom));

// method 1 
function numToString(num) {
  return num.toString()
}

// method 2
function numberToString(num) {
  return ''+num;
}

// method 3
const numberToString = num => `${num}`;