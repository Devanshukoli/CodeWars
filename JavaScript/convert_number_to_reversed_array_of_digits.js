// Convert the number to a reversed array of digits

// Given a non-negative random number, you must return the digits of this number within an array in reverse order.

// example input : 35231 => [1,3,2,5,3]
// 0 => [0]

// try 1
/*
function digitize(n) {
  if( n > 0 || n === 0) {
    return String(n).split('').reverse().map(Number)
  } else {
    return "Number is negative bub"
  }
}

digitize(35231)
*/

// try 2
// let num = 98239;
// let digits = String(num).split('').reverse().map(Number)
// console.log(digits) // [9, 3, 2, 8, 9]

// try 3
// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }

// try 4
// function digitize(n) {
//   // return Array.from(String(n), Number).reverse();
//     // let ans = Array.from(String(n), Number).reverse();
//     // console.log(ans)
// }
// digitize(87239)

// try 5
// function digitize(n){
//   return (n + '').split('').map(Number).reverse();
// }

// try 6
// function digitize(n) {
//   //code here
//   let numArr = [];
  
//   while(n > 0){
//     numArr.push(n % 10);
//     n = Math.floor(n/10);
//   }  
//   // return numArr;
//   console.log(numArr)
// }
// digitize(92340)

// try 7 
// const digitize = (x) => {
//   x = `${x}`.split('').reverse();
//   let a = []
//   for(let i = 0; i < x.length; i++){
//     a.push(+x[i])
//   }
//   return a
//   console.log(a)
// }

// try 8 
// function digitize(n) {
//   return n.toString().split("").reverse().map(function(i){
//     return parseInt(i);
//   });
// }

// try 9
// function digitize(n) {
//   return (n+'').split('').reverse().map(n => +n);
// }

// try 10
// function digitize(n) {
//   return n === 0 ? [] : [ n % 10, ...digitize(Math.trunc(n / 10)) ]
// }





