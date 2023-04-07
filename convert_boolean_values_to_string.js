/*
Convert boolean values to strings 'Yes' or 'No'.

  Convert boolean values to strings 'Yes' or 'No'.
*/

// my code
// const boolToWord = (bool) => {
//   if (bool === true) {
//     return "Yes"
//   } else {
//     return "No"
//   }
// }

const boolToWord = (bool) => {
  return (bool === true) ? "Yes" : "No";
}


// method 1
function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}

// method 2
let boolToWord = bool => bool ? 'Yes' : 'No';


