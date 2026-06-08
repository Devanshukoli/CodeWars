/*
Implement a function that computes the difference between two lists. The function should remove all occurrences of elements from the first list (a) that are present in the second list (b). The order of elements in the first list should be preserved in the result.

Examples
If a = [1, 2] and b = [1], the result should be [2].

If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].
*/

function arrayDiff(a, b) {

  if (b.length === 0) {
    return a;
  }

  let result = [];

  for (let i = 0; i < a.length; i++) {
    let found = false;
    for (let j = 0; j < b.length; j++) {
      if (a[i] === b[j]) {
        found = true
        continue;
      }
    }
    if (!found) {
      result.push(a[i])
    }
  }
  return result;
}

console.log(arrayDiff([1, 2, 3], [1, 2]))

// other methods...
function arrayDiff(a, b) {
  return a.filter(x => !b.includes(x))
}

function arrayDiff(a, b) {
  let blocked = new Set(b);

  return a.filter(x => !blocked.includes(x))
}

console.log(arrayDiff([1, 2, 3], [1, 2]))