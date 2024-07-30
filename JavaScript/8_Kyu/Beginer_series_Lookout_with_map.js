/*
Given an array of integers, return a new array with each value doubled.

For example: [1, 2, 3] --> [2, 4, 6]

*/

function doubleValues(x) {
    return x.map((a) => a * 2)
}

console.log(doubleValues([1, 4, 6]))

// One liner code.
doubleValues = (x) => x.map((a) => a * 2)