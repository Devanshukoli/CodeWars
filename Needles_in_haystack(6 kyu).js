/*
Find the needle(s) in a haystack by creating a function that returns all properties (recursively) which contains the needle (string).

Return value should be a sorted array.

Example:

var obj = {
  site: "Codewars",
  description: "Lorem ipsum dolor sit...",
  obj2: {
    str: "Yeah, Codewars!",
    num: 123,
    obj3: {
      something: "Ph'nglui mglw'nafh Codewars R'lyeh wgah'nagl fhtagn. Gotha fm'latgh h'gof'nn, geb chtenff"
    }
  }
};
var results = search(obj, "Codewars"); //results = ["obj2.obj3.something", "obj2.str", "site"]
*/

// My Try code.
function search(haystack, needle) {
  const results = [];

  // Helper function to traverse the object properties
  function traverse(obj, path = '') {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        const newPath = path ? path + '.' + key : key;

        if (typeof value === 'string' && value.includes(needle)) {
          results.push(newPath);
        }

        if (typeof value === 'object') {
          traverse(value, newPath);
        }
      }
    }
  }

  traverse(haystack);

  // Sort and return the results array
  return results.sort();
}

// Example usage:
var obj = {
  site: "Codewars",
  description: "Lorem ipsum dolor sit...",
  obj2: {
    str: "Yeah, Codewars!",
    num: 123,
    obj3: {
      something: "Ph'nglui mglw'nafh Codewars R'lyeh wgah'nagl fhtagn. Gotha fm'latgh h'gof'nn, geb chtenff"
    }
  }
};
var results = search(obj, "Codewars");
console.log(results); // Output: ["obj2.obj3.something", "obj2.str", "site"]

// Method 1 : 
function search(h, n) {
  var rs = [];
  for (var i in h) rs = typeof h[i] == "string" && h[i].indexOf(n) >= 0 ? rs.concat([i]) : typeof h[i] == "object" ? rs.concat(search(h[i], n).map(x => i + "." + x)) : rs;
  return rs.sort();
}
