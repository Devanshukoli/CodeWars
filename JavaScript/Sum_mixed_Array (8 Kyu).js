/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/
function sumMin(x) {
    // first convert all the values of arrays into numbers.
    let num = x.map(Number)

    // then loop through them and then do sum of them...
    let result = num.reduce((a, b) => a + b)

    return result
}


// Other methods...
const sumMin = (x) => x.reduce((a, b) => a + Number(b), 0)