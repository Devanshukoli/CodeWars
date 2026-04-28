/*
The goal is to create a function of two inputs number and power, that "raises" the number up to power (ie multiplies number by itself power times).

Examples
numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
numberToPower(10, 6) // -> 1000000
Note: Math.pow and some other Math functions like eval() and ** are disabled.

*/

function numberToPower(number, power) {
  // so i have to multiply number with number itself.
  // how many times do i multiple. that is where power comes. power times multiplications.

  let result = 1;
  for (let i = 0; i < power; i++) {
    result = result * number
  }

  return result
}

console.log(numberToPower(3, 2)) // 9