/*
Task: Find the sum of all multiples of n below m

Keep in Mind: 
- n and m are natural numbers (positive integers)
- m is excluded from the multiples

Examples:
sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7)  ==> "INVALID"

*/

function sumMul(n, m) {
    // so here I noticed it is very similar to a series...

    // the series is dependent of the n... if n = 4 then the next one is addition to that number and added same amount which is n. This is one part..

    // In next part, there is m, which is to halt a series, what I mean is that like m = 40. So the n should be in addition uptil it reached the m point which is 40.

    // Well because in the end it is just addition of numbers..
    if (n <= 0 || m <= 0) {
        return 'INVALID'
    } else {
        let sum = 0;
        for (let i = n; i < m; i++) {
            sum += i;
        }
        return sum
    }
}