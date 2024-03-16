/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square


*/

// My Try code.
function findNextSquare(sq) {
    // first check if given parameter `sq` is square root of someone.
    const sqrt = Math.sqrt(sq);

    // then for failing some test cases round them to near integer possible.
    const roundsq = Math.round(sqrt)

    // Now, if It's certainly sqrt then find next sqrt. and if not then return -1.
    if (roundsq * roundsq === sq) {
        // that means sq is really sqrt. :)
        const nextSqrt = roundsq + 1;
        return nextSqrt * nextSqrt;
    } else {
        return -1;
    }
}

// Method 1 : Short-hand + ternary way.
function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}
