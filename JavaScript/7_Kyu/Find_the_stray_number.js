/*

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/

function stray(num) {
    num.sort((a, b) => a - b)

    return num[0] === num[1] ? num[num.length - 1] : num[0];
}

// Other methods...
function stray(num) {
    for (var i in num) {
        if (num.indexOf(num[i]) === num.lastIndexOf(num[i])) return num[i]
    }
}

const stray = nums => nums.reduce((a, b) => a ^ b)
