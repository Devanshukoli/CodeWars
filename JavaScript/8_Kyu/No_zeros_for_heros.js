/*
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway
*/

function noBorgingZeros(n) {
    // first if I split them and then map through them for check each digit one by one to track if they are zero.

    // now similarly check if the digit is in the end of the number with length or similar and then check it. Then return it.
    return n === 0 ? 0 : parseInt(n / 10) === n / 10 ? noBorgingZeros(n / 10) : n
}

console.log(noBorgingZeros(1450))
console.log(noBorgingZeros(960000))
console.log(noBorgingZeros(1050))
console.log(noBorgingZeros(-1050))


function noBoringZeros(n) {
    while (n % 10 == 0 && n != 0) { n /= 10; }
    return n;
}