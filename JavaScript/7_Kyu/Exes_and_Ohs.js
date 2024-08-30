/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str) {
    // Since the edge case is given to ignore, since we are talking about string, let do something like this -> str.split(' '), so it will convert into array, then use .map() func to loop through it. Now will use filter() method to use 'x' and 'o' but wondering if I can do both....
}

function XO(str) {
    let x = str.match(/x/gi)
    let o = str.match(/o/gi)

    return (x && x.length) === (o && o.length)
}
console.log(XO("ooxx"));      // true
console.log(XO("xooxx"));     // false
console.log(XO("ooxXm"));     // true
console.log(XO("zpzpzpp"));   // true
console.log(XO("zzoo"));      // false



// Other methods.
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}