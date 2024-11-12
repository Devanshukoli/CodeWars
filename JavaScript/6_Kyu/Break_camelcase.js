/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

*/

function solution(str) {
    // so i know for a fact that camelCasing start with the first letter smallcase and then next uppercase later reached.
    
    // now I want to check for only the next uppercase later, if i encounter on then, i split them.
    return str.filter(char => {
        if (char === char.toUpperCase) {
            // here, break them.
        } else {
            return
        }
    })
}

function solution(str) {
  let result = ""; // Start with an empty string

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Check if the current character is uppercase
    if (char === char.toUpperCase()) {
      result += " " + char; // Add a space before uppercase
    } else {
      result += char; // Otherwise, just add the character
    }
  }

  return result;
}

// Other methods...
function solution(str) {
  return str.replace(/([A-Z])/g, ' $1'); 
}

const solution = string => {
    return [...string].map((char) => {
        return (char === char.toUpperCase()) ? ` ${char}` : char;
    }).join('');
}