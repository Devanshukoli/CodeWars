/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

*/
// My Try code
let arr = ["Telescopes", "Glasses", "Eyes", "Monocles"]

// function sortedArray(arr) {  
//   return arr.sort((a, b) => {
//     console.log(`${a}, ${a.length} and ${b}, ${b.length}`);
//     a.length - b.length}
//    )
// }

// method 1 : one liner code
// const sortedArray = (arr) => arr.sort((a, b) => a.length -b.length)

// method 2 : using traditional approach.
// function sortedArray(arr) {
//   let sorted = []

//   for(let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       // we now compare thier length 
//       if (arr[i].length > arr[j].length) {
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//       }
//     }
//   }
//   return arr
// }

// method 3 : using some traditional way but little different way. 
  // function sortedArray(arr) {
  //     let sorted = [];   //1. A sorted array is declared to store the result  
  //     for (let i = 0; true; i++) {  //2. An outer loop runs from i = 0 to infinity 
  //       for (let j = 0; j < arr.length; j++) {  //3. An inner loop runs from j = 0 to the array length
  //         let string = arr[j];

  //         if (string.length === i) {  //4. It checks if the current string's length equals i
  //            sorted.push(string);
  //         }

  //         if (sorted.length === arr.length) {  //6. It checks if the sorted array has reached the length of the original array
  //             return sorted;
  //         }
  //       }
  //     }
  // }

// method 4 : Better approach when arr is large 
const sortedArray = arr.map((s, i) => ({str: s, len: s.length, index: i}));

sortedArray.sort((a, b) => a.len - b.len);

// return sortedArray.map(({str}) => str);
console.log( sortedArray.map(({str}) => str) )
// time complexity for this o(0long(n)) a liner complexity
// console.log('The sorted array is : ', sortedArray(arr))

