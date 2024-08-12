/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.
*/

const binaryArrayToNumber = (arr) => {
    return arr.reduce((sum, digit, index) => {
        return sum + digit * Math.pow(2, arr.length - 1 - index);
    }, 0);
};


console.log(binaryArrayToNumber([0, 0, 0, 1])); // Should output 1
console.log(binaryArrayToNumber([0, 0, 1, 0])); // Should output 2
console.log(binaryArrayToNumber([0, 1, 0, 1])); // Should output 5
console.log(binaryArrayToNumber([1, 0, 0, 1])); // Should output 9


// Other methods...
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

function binaryArrayToNumber(arr) {
    return arr.reduce((a, b) => a << 1 | b);
}