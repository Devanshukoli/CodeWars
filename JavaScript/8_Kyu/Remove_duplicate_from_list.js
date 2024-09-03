/*
Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

Examples:

Input -> Output
[1, 1, 2] -> [1, 2]
[1, 2, 1, 1, 3, 2] -> [1, 2, 3]

*/

// function distinct(a) {
//     // so for iterating over array use map() func, then for comparing, i can use if-else statemtn ( basically checking if the number is already come...), then return it using ternary operation (if don't want to use if-else)
//     return a.map((x) => something) ? return a : return this.a 
// }

function distinct(a) {
    const seen = new Set() // Set is built-in JS object that only stores unique values.
    return a.filter(num => {
        if (seen.has(num)) {
            return false
        } else {
            seen.add(num);
            return true;
        }
    })
}

// Other methods.
function distinct(a) {
    return [...new Set(a)];
}