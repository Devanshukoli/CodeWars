/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

*/

function cubeOdd(arr) {
    // return 'undefined' if a array values is not number.
    if (!Array.isArray(arr) || arr.some(value => typeof value !== 'number')) undefined;

    // first seperate odd number from array...
    let oddNum = arr.filter(num => num % 2 !== 0)

    // then sum the cubes of it
    return oddNum.reduce((sum, num) => sum + Math.pow(num, 3), 0)
}

console.log(cubeOdd([1, 2, 3, 4]))