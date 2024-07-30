/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
*/

// My Try code
function oddOrEven(str) {
  let sum = str.reduce((acc, currentValue) => acc + currentValue, intialValue = 0)
  console.log('sum : ', sum)
  let res = (sum % 2 == 0) ? 'even' : 'odd'
  return res
}

console.log(oddOrEven([0, -1, -5]))

// method 1 : using one liner code
const oddOrEven = a => a.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';

// method 2 : using for loop
function oddOrEven(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++)
  {result+=array[i];}
  if (result%2 == 0)
  {return "even";}
  else{return "odd";}
}