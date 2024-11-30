/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(arr) {
    let maxLength = 0;
    let maxNum = null;

    for (let i = 0; i < arr.length; i++) {
        const numLength = String(arr[i]).length
        if (numLength > maxLength) {
            maxLength = numLength;
            maxNum = arr[i];
        }
    }
    return maxNum;
}