/*
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).

Examples
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]

*/

function countBy(n, x) {
    // So, What i am understanding is, n is given number and 'x' is it's multiplier times, umm such as how many time the numbers of multiplication table should print or something!! ( Yeah, I know rough language.!!)

    // So, I want to return that as an array..

    // First I will use loop for generating mulitplication table answer, And then push into empty array given 'x' number of times. And explicitely return it.!
    let result = [];
    for (let i = 0; i <= n; i++) {
        result.push(x * i)
    }
    return result;
}