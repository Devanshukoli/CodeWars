/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.

*/

function findAverage(arr) {
    return arr.length ? arr.reduce((sum, num) => sum + num, 0) / arr.length : 0;
}