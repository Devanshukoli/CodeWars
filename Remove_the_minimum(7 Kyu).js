/** 
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.

Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/

// My Try code
const arr = JSON.parse(prompt('Enter array of integers : '));
/*
function removeSmallest(arr) {
  if (arr.length === 0) {
    return [];
  }

  const smallestValue = Math.min(...arr); // Find the smallest value in the array
  const smallestIndex = arr.indexOf(smallestValue); // Find the index of the smallest value

  // Create a new array that excludes the smallest value
  const result = arr.slice(0, smallestIndex).concat(arr.slice(smallestIndex + 1));

  return result;
}

console.log(removeSmallest(arr));
*/
// method 1: using spread oeprators
/*
const removeSmallest = (arr) => {
  let indexOfMin = arr.indexOf(Math.min(...arr))
  return [...arr.slice(0, indexOfMin), ...arr.slice(indexOfMin + 1)]
}

console.log(removeSmallest(arr));
*/
// method 2: One liner code

const removeSmallest = (arr) => arr.filter((n, i) => i !== arr.indexOf(Math.min(...arr)))
/* 
The removeSmallest function is defined as an arrow function that takes an array (arr) as its parameter.
The filter method is called on the arr array, which creates a new array containing only the elements that pass a given condition.
Within the filter method, a callback function is provided. This callback function is called for each element of the array.
The callback function takes two parameters: n (the current element) and i (the index of the current element).
Math.min(...arr) finds the smallest value in the array by using the spread syntax (...arr) to pass the array elements as arguments to the Math.min function.
arr.indexOf(Math.min(...arr)) returns the index of the smallest value in the array.
The callback function uses the comparison i !== arr.indexOf(Math.min(...arr)) to determine if the current index is different from the index of the smallest value. This ensures that only the elements with indexes different from the index of the smallest value are included in the filtered array.
The filter method creates a new array that contains all the elements from the original array (arr) except for the smallest value.
The resulting filtered array is implicitly returned by the arrow function.
*/
console.log(removeSmallest(arr));

// method 3 : using ForEach method
function removeSmallest(numbers) {
  var smallest;
  var newNums = [];
  numbers.forEach(function(num) {
    if (smallest > num || smallest === undefined) {
      smallest = num;
    }
  });
  var index = numbers.indexOf(smallest);
  numbers.forEach(function(n, i) {
    if (i !== index) {
      newNums.push(n);
    }
  });
  return newNums;
}

// method 4 :
function removeSmallest(numbers) {
  let min = Infinity, index
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[index = i]
  }

  return numbers.slice(0, index).concat(numbers.slice(index + 1))

// method 5
const removeSmallest = numbers =>
  numbers.filter((_, idx) => idx !== numbers.indexOf(Math.min(...numbers)));

// method 6: Using splice() 
function removeSmallest(numbers) {
  var output = [...numbers];
  output.splice(numbers.indexOf(Math.min(...numbers)), 1);
  return output;
}

// method 7: Using reduce() and ternery operations.
function removeSmallest(numbers) {
  const index = numbers.reduce((m, n, i) => n < numbers[m] ? i : m, 0)

  return numbers.filter((n, i) => i !== index)
}