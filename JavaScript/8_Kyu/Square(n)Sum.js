/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
*/

function squareSum(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        const squareNum = num[i] ** 2;
        sum += squareNum
    }
    return sum
}

console.log(squareSum([1, 2]))

// Other methods...
squareSum = (num) => {
    return num.reduce((sum, number) => sum + (num * num), 0)
}

function squareSum(numbers) {
    return numbers.reduce((sum, n) => sum + Math.pow(n, 2), 0);
}