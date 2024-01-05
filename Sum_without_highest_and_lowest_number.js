/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
*/

// My Try code.

// const array = [6, 2, 1, 8, 10]
// function sumArray(array) {

//     // first check if *array* is null or what?
//     if (!array || array.length <= 1) {
//         return 0;
//     }


//     // let loop first for separating high and low nums(element).
//     let sum = 0;
//     let high = Math.max(...array)
//     let low = Math.min(...array)
//     for (let i = 0; i < array.length; i++) {

//         // Now, if I get the ans for *high* and *low* then just need to remove it right?
//         if (array[i] !== high && array[i] !== low) {
//             sum += array[i]
//         }
//     }
//     console.log('sum', sum)
// }

// sumArray(array)




function sumArray(arr) {
    // Check if the array is null or has fewer than two elements
    if (!arr || arr.length <= 1) {
        return 0;
    }

    // Sort the array in ascending order
    const sortedArray = arr.slice().sort((a, b) => a - b);
    console.log('sortedArray...', sortedArray)
    // Remove the first and last elements (lowest and highest)
    const trimmedArray = sortedArray.slice(1, sortedArray.length - 1);
    console.log('trimmedArray....', trimmedArray);
    // Sum the remaining elements
    const sum = trimmedArray.reduce((acc, num) => acc + num, 0);
    console.log('sum', sum)
    return sum;
}

// Example usage:
const array1 = [6, 2, 1, 8, 10];
const array2 = [1, 1, 11, 2, 3];

console.log(sumArray(array1)); // Output: 16
console.log(sumArray(array2)); // Output: 6

// Method 1: Short-hand + Ternary;
sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((acc, num) => acc + num, 0) : 0

// Method 2 : Using spread operator for finding out high and low.
function sumArray(array) {
    return Array.isArray(array) && array.length > 1
        ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
        : 0
}