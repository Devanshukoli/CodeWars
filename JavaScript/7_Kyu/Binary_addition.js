/** 
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

*/

// My Code
const a = Number(prompt('Enter number a : '));
const b = Number(prompt('Enter number b : '))

let sum = a + b

function returnBinary(sum) {
  return sum.toString(2)
  // Here I have chosse this `radix` or 'base' = 2 for displying as binary format. You can also use between 2 to 36.
  // Or if you want to read more about this : https://stackoverflow.com/questions/9939760/how-do-i-convert-an-integer-to-binary-in-javascript
}

console.log(returnBinary(sum))

// Method 1 : clear code(arrow function)
const returnBinary = (sum) => sum.toString(2)