/*
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

// method 1 
let num = Number(prompt("enter Number : "))

// condition to check 
if (num <= 0) {
    console.log("Enter positive number.")
} else {
    let sum = 0;
    // loop through the num
    for (let i = 1; i <= num; i++) {
        sum = sum + i;
    }
        console.log(sum)
    
}

// method 2
var summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }
  
  return result;
}

// method 3
const summation = n => n * (n + 1) / 2;

// method 4 
var summation = function (num) {
  return (num > 1) ? num + summation(num - 1):num;
}