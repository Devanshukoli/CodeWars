/** 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

// My Try code
const promp = prompt('Enter the string:')

function vowelCount(promp){
  const count = promp.match(/[aeiou]/gi)
  return count? count.length : 0
}

console.log(vowelCount(promp))

// method 1 : using for loops
function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}

// method 2 : using replace() method
function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}