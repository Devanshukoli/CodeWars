/*
Given a 2D ( nested ) list ( array, vector, ... ) of size m * n, your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]
So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

Note: You will always be given a non-empty list containing positive values.

*/

function sumOfMiniums(arr) {
    // So, If i'm understanding it right then I need a loop through them each array to find minimum of it (well i can do that by Math.min..) , then I need to do that each and every array in vector. and store them in seperate array (new array)... Then what I will do is that sum of elements of that array.   
    return arr.reduce((sum, row) => sum + Math.min(...row), 0);
}

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])); // 9
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]])); // 76