
/* Question ; 
Write a function to split a string and convert it into an array of words.
Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
*/

// method 1 :
/*
function stringToArray(string) {

const myArray = string.split(" ");
console.log(myArray)
}

let text = "How are you doing today?";
stringToArray()
*/

// method 2 : 
function stringToArray(string) {
  // so, i want to take an array and return a string, we can do this via split(). Also, we need some space for each string.
  return string.split(" ")
}

// method 3 : 
stringToArray = function (str) {
  return str.trim().split(" ");
};
console.log(stringToArray("I am learning JavaScript right now"));

// method 4 : One liner code
let arrayOfWords = str = str.split(' ')
