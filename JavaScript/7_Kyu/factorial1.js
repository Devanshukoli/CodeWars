/*

Implment function that solves the factorials.
*/

function factorials(n) {
    if (n == 0) {
        return 1
    } else {
        return n * factorials(n - 1)
    }
}

// Other methods.
/**
 * In typescript I try to solve this problem which is below
 */

export const factorials(n: Number): Number {
    if (n === 0) {
        return 1
    } else {
        return n * factorials(n - 1)
    }
}