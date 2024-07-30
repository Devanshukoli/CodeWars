/*
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"
*/

// My Try code
// let n = Number(prompt('Enter Integer  :'))
// let s = String(prompt('Enter String : '))

// function returnString(n, s) {
//   let ans = ''
//   for (let i = 1; i <= n; i++) {
//     ans += s
//   }
//   return ans
// }

// console.log(returnString(n, s))

// method 1 : using repeat() function
let n = Number(prompt('Enter Integer  :'))
let s = String(prompt('Enter String : '))

function returnString(n, s) {
  return s.repeat(n)
}

console.log(returnString(n, s))
