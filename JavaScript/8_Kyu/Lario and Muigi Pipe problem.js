/*
The pipes are correct when each pipe after the first is 1 more than the previous one.

Task : Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

Example
Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
*/

function pipeFix(numbers) {
    // so by far what I am understand it from given array, I need to seperate 2 numbers ( one is max, and other is min.) i can do that by doing Math.array().value or something (dont' know coulde be wrong! maybe).
    const max = Math.max(...numbers)
    const min = Math.min(...numbers)

    // Then just use simple loop starting form that min.value to max value , simple increment function,  and then return array.
    const result = []
    for (let i = min; i <= max; i++) {
        result.push(i)
    }
    return result
}
