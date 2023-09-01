/*
Write a function that take argument and return it's square.
*/

// My try code.
function square(n) {
  return n * n
}

console.log(square(2))

// Method 1 : using Math.pow() method.
let square = (n) => {
  Math.pow(n, 2)
  return n
}

const square = s => s ** 2