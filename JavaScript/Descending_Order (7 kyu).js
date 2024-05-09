/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

// My Try code.

function descendingOrder(n) {
    return Number(n.toString().split('').sort((b, a) => a - b).join(''))
    // console.log(n.toString().split('').sort((b, a) => a - b).join(''))
    const string = n.toString()
    const spliting = string.split('')
    const sorting = spliting.sort((b, a) => a - b)
    const joinning = sorting.join('')
    console.log(joinning)

}
// console.log(descendingOrder(82393409512))
descendingOrder(82393409512)
// descendingOrder(0)