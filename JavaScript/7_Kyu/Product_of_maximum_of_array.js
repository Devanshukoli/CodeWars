/*
Task : Given an array/list [] of integers , Find the product of the k maximal numbers.

*/

function maxProduct(numbers, size) {
  let sortedArray = numbers.sort((a, b) => b - a);
  let sum = 1;
  for (let i = 0; i < size; i++) {
    sum *= sortedArray[i]
  }
  return sum;
}

console.log(maxProduct([4, 3, 5], 2))