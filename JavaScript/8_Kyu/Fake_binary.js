/** 
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/

// My Try code.
const str = prompt('Enter numbers')

// function replaceDigits(str) {
//   return str.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1');
// }

// console.log(replaceDigits(str))

// method 1 : using split(), map() functions
// const replaceDigits = (str) => str.split('').map((e) => e < 5 ? 0 : 1).join('')
// console.log(replaceDigits(str))

// method 2 : using replace() method
// const replaceDigits = (str) => str.replace(/\d/g, d => d < 5 ? 0 : 1);
// console.log(replaceDigits(str))

// method 3 : using if-else condition.
const replaceDigits = (str) => {
  var newStr = "";
  for(var i=0;i<str.length;i++){
    if(Number(str[i])>=5){
      newStr += "1"
    }
    else{
      newStr += "0";
    }
  }
  return newStr;
}
console.log(replaceDigits(str))