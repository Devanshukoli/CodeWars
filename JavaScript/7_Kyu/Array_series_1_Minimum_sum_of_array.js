/*
Task: Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes: Array/list will contain positives only. Array/list will always have even size

Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 

*/

function minSum(arr) {
    // Step 1: Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Step 2-5: Loop through the array and calculate the product
    let sum = 0;
    for (let i = 0; i < arr.length / 2; i++) {
        sum += arr[i] * arr[arr.length - i - 1];
    }

    // Step 6: Return the sum
    return sum;
}

// Other methods..
const minSum = arr =>
    arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);
