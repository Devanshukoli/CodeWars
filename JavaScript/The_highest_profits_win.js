/** 
Story
Ben has a very simple idea to make a profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined, or similar.
*/

// My Try code
const arr = JSON.parse(prompt('Enter array nums: '))

// function minAndMax(arr) {
//   if(arr.length === 0) {
//     return [0,0]
//   }

//   smallValue = Math.min(...arr)
//   console.log('smallValue',smallValue)
  
//   maxValue = Math.max(...arr)
//   console.log('maxValue',maxValue)
//   return [smallValue, maxValue]
  
// }
// console.log(minAndMax(arr))


// method 1: one liner
const minAndMax = (arr) =>  [Math.min(...arr), Math.max(...arr)]
console.log(minAndMax(arr))