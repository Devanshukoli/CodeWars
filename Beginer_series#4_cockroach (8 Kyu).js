/** 
The cockroach is one of the fastest insects. Write a function that takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (the actual type is language-dependent) and is >= 0. The result should be an Integer.

*/

const cockroackSpeed = (v) => Math.floor((5 / 18) * 100 * v)

console.log(cockroackSpeed(1.08))