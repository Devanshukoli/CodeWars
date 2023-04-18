/** 
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/

// My try code :
let arr = [1, 2, 3, 4, 5]

const dev = (arr) => {
  let result = 1
  for (let i = 0; i< arr.length; i++) {
    result *= parseInt(arr[i]) 
    }
  console.log(result)  
}

dev(arr)

// method 1
let arr = [1, 2, 3, 4, 5]

const dev = (arr) => {
    let result = 1
    for (let i = 0; i< arr.length; i++) {
        result *= parseInt(arr[i]) 
    }
        console.log(result)
    
}

dev(arr)

// method 1 
const grow=x=> x.reduce((a,b) => a*b);

// method 2
const grow = (nums) => nums.reduce((product, num) => product * num, 1);