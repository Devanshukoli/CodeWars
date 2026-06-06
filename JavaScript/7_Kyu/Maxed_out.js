/*

For this task you will be given an array of numbers, each number in turn has to be cubed and once all numbers have been cubed all of them have to be added to get a final sum.

If the final sum is less than or equal to the maximum value allowed for an Integer return the sum otherwise return "You've pushed me to the max!".

You can assume that you will receive a valid array of numbers.
*/

function maxedOut(arr) {
  const MAX_INT = 2147483647;
  const sum = arr.reduce((acc, curr) => acc + Math.pow(curr, 3), 0)
  return (sum <= MAX_INT) ? sum : "You've pushed me to the max!";
}

console.log(maxedOut([1, 2, 3, 4, 5]))