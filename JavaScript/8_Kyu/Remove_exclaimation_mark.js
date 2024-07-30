/** 
Just removing the exclaimation mark in the given string.
*/

// My Try code
const str = String(prompt('Enter string:'))

// function removeEx(str) {
  // return str.replace(/!/g, '')
// }

// console.log(removeEx(str))

// method 1 : using regex
// const removeEx = (str) => str.replace(/!/gi, '')

// method 2 : using split() and join() methods
// const removeEx = (str) => str.split('!').join('')
// console.log(removeEx(str))

// method 3 : using replaceAll() method
const removeEx = (str) => str.replaceAll("!", '')
console.log(removeEx(str))