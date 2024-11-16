/*
You may assume the input is always valid.

Examples
isPowerOfTwo(1024) // -> true
isPowerOfTwo(4096) // -> true
isPowerOfTwo(333)  // -> false
Beware of certain edge cases - for example, 1 is a power of 2 since 2^0 = 1 and 0 is not a power of 2.

*/

function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0
}

// Other methods..
function isPowerOfTwo(n) {
    if (n == 1)
        return true
    if (n < 1)
        return false

    return isPowerOfTwo(n / 2)
}