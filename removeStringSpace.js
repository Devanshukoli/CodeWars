/* Question ; 
Simple, remove the spaces from the string, then return the resultant string.
*/


// method 1 :  via regex + replace() method 
function removeSpace(x) {
  // here, note that trim() method only trim the given string and not actually modify it. BUT replace() method actually MODIFTY the string.
  return x.repalce('/ /g', ' ')
}

// method 2 :  for loops
function removeSpace(x) {
  let newStr = ''// define first new empty string
  // for loop
  for (const char of x) {
    if (char !== ' ') newStr += char
  }
  return newStr
}

// method 3 : using replace + join
let noSpace = (x) => x.split(' ').join('')

// method 4 
function noSpace(x) {
  return x
    .split('') // first it will split the array and make it string
    .filter((el) => el.trim().length) // it will filter it
    .join(''); // now it will join the string without any space
}

// method 5 : via using match() method
function noSpace(x) {
  return x.match(/\S/g).join('');
}
