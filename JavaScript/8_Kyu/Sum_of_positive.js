/*
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.

*/

function positiveSum(arr) {
    return arr.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
}

// Other methods.
function positiveSum(arr) {
    var total = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total += arr[i];
        }
    }
    return total;
}