/*
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

*/

function sumOfDifferences(arr) {
    // edge case: if the elements in array is 0, then return 0.
    if (arr.length <= 0) return 0;

    // first make arr in descending order, we can use split() then use replace((a,b) => b-a, 0) method or something...
    arr.sort((a, b) => b - a)

    // then make loop, for iterative over the descneded array, in that start from index, and make sub from immediately next indexed number, and put add sign and then repeat the exact process...
    let sum = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        sum += arr[i] + arr[i + 1]
    }

    // then make sum variable in loop, then return that sum..
    return sum;
}

// Other methods...
function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}

const sumOfDifferences = arr => arr
    .sort((a, b) => b - a)
    .map((a, i) => a - arr[i + 1] || 0)
    .reduce((a, b) => a + b, 0);

const sumOfDifferences = arr =>
    arr.sort((a, b) => b - a).shift() - arr.pop() || 0;