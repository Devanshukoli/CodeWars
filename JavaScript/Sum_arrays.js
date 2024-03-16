/** 
  Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
What We're Testing
We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.
*/

// My Try code : 
const promp = prompt('Enter the array nums : ')

// function sumOfNums(promp) {
//   let result = 0
//   if (promp.length === 0) {
//       return 0
//   } else {
//     let nums = JSON.parse(promp)
//     for(let i = 0; i< nums.length; i++) {
//       result += nums[i]
//     }
//     return result
//   }
// }

// console.log(sumOfNums(promp))

// method 1 : using .reduce() method of array.
// const sumOfNums = (promp) => {
//   const nums = JSON.parse(promp) 
//   return nums.reduce((sum, num) => sum + num, 0)
// }

// console.log(sumOfNums(promp))

// method 2 : 
const sumOfNums = promp => {
  const nums = JSON.parse(promp);
  return Array.isArray(nums) ? nums.reduce((sum, number) => sum + number, 0) : 0;
};

console.log(sumOfNums(promp));

// The main reson is to learn array method of using .reduce().