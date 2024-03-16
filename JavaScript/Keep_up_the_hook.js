/** 
Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".
*/

// My try code.
const promp = Number(prompt("Enter hoops number : "));

// function hoopCount(promp) {
//   if (promp >= 10) {
//     return 'Great, now move on to tricks';
//   } else {
//     return 'Keep at it until you get it';
//   }
// }


// method 1: one liner code(ternary operations)
const hoopCount = (promp) => (promp < 10)? "Keep at it unitl you get it" : "Great, now move on to tricks"

console.log(hoopCount(promp));