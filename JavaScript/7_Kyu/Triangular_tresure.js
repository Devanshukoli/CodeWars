/*

Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.

1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:

For example: (Input --> Output)

0 --> 0
2 --> 3
3 --> 6
-10 --> 0

*/


function triangular(n) {
    // Check if n is less than or equal to 0
    if (n <= 0) {
        return 0; // Return 0 for out of range values
    }

    // Calculate the nth triangular number using the formula
    return (n * (n + 1)) / 2;
}

// Example usage:
console.log(triangular(0));  // Output: 0
console.log(triangular(2));  // Output: 3
console.log(triangular(3));  // Output: 6
console.log(triangular(-10)); // Output: 0


// Other methods..
const triangular = n => n <= 0 ? 0 : n * (n + 1) / 2;