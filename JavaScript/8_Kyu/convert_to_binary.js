/*
Task Overview
Given a non-negative integer b, write a function which returns an integer d such that the binary representation of b is the same as the decimal representation of d.

Examples:

n = 1 should return 1
n = 5 should return 101
n = 11 should return 1011

*/


function toBinary(n) {

    // so `toString()` method converts string to it's binary value.
    // and passing 2 as arguments, sets the base to 2 (binary) representation value.
    return Number(n.toString(2))
    // return +n.toString(2) // here `+` is unary plus operator which is shorthand property for using Number() method. interesting yeah!?
}
