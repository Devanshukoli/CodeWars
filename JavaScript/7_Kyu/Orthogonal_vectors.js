/*

Suppose I have two vectors: (a1, a2, a3, ..., aN) and (b1, b2, b3, ..., bN). The dot product between these two vectors is defined as:

a1*b1 + a2*b2 + a3*b3 + ... + aN*bN
The vectors are classified as orthogonal if the dot product equals zero.

Complete the function that accepts two sequences as inputs and returns true if the vectors are orthogonal, and false if they are not. The sequences will always be correctly formatted and of the same length, so there is no need to check them first.

Examples
[1, 1, 1], [2, 5, 7]        --> false
[1, 0, 0, 1], [0, 1, 1, 0]  --> true

*/

function isOrthogonal(a, b) {
    // so a and be are two arrays.
    // need multiplication of each index with another array, like 0 x 0, 1 x 1...
    // could use loop to do that...

    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i] * b[i]
    }
    return sum === 0;
}

console.log(isOrthogonal([1, 1, 1], [2, 5, 7]))
console.log(isOrthogonal([-1, 1, -1], [2, -5, 7]))
console.log(isOrthogonal([1, 1, 0], [2, 5, 7]))
console.log(isOrthogonal([1, 0, 0, 1], [0, 1, 1, 0]))

// Other methods...
function isOrthogonal(u, v) {
    return !u.reduce((s, n, i) => s + n * v[i], 0)
}