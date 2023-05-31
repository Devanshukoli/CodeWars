/** 
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// My try code
const a = String(prompt('Enter string a :'))
const b = String(prompt('Enter string b :'))

// function longest(a,b) {

//   // first combine both strings and turn them into individual character in an array
//   const combine = (a+b).split('')
//   console.log('combine:',combine)
  
//   // then comes the main part : find distinctive one from this 'combine'
//   const distinct = [... new Set(combine)]
//   console.log('distinct:', distinct)

//   // then return this 'distinct' array into concatenated string BUT Sorted as well.
//   return distinct.sort().join()
// }

// console.log(longest(a,b))

// Method 1 : One liner code + Array function
// const longest = (a,b) => [... new Set(a+b)].sort().join('')
// console.log(longest(a,b))

// Method 2: Normal way, using for loops and such
// function longest(a, b) {
//   let output = [];
//   let combine = a.concat(b);
//   let arr = combine.split('').sort();

//   for (let i = 0; i <= arr.length; i++) {
//     console.log(arr[i]);//test
//     if (!output.includes(arr[i]) ) {
//       output.push(arr[i]);
//     }
//   }
//   return output.join('');
// }
// console.log(longest(a,b)));

// Method 3: Using regex
function longest(a,b) {
  return (a+b).split('').sort().join('').replace(/(.)\1+/g, '$1');
}

console.log(longest(a,b))