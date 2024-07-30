/*
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8

*/

// My code

function tri(n) {
  // first calculat the first num of the row.
  let firstNum = n * (n-1) + 1

  // now, the sum of this start with the first number of the row.
  let sum = firstNum 

  // now loop through it for summation.
  for(let i = 1; i < n; i++) {
    firstNum += 2

    // then sum
    sum += firstNum
  }
  return sum
  
}

console.log(tri(2))

// method 1 : After analyizng the triangle for up close you noticed that it is giving me ans n = 3 then ans = 3^3 = 27
function tri(n) {
  return Math.pow(n, 3)
}
