/*Take an array and remove every second element from the array. Always keep the first element and start removing the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/

// My Try

let array = ["keep", "remove", "keep", "remove"]
const removeEverythingFromArray = (arr) => {
  // store the first element 
  const result = [arr[0]]
  // now loop through the array
  for(let i = 1; i<arr.length; i++) {
    if(i % 2 === 0) {
      result.push(arr[i])
    }
  }
  return result
}

removeEverythingFromArray();

// method 1
function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}

// method 2 (What if I want to start with the index i at 0)
function removeEveryOther(arr){
  var newArr=[];
for (var i = 0; i < arr.length; i+=2){
  newArr.push(arr[i]);
  }
return newArr;
}

// method 3 
const removeEveryOther = arr => arr.filter((_, i) => !(i % 2))

// method 4
function removeEveryOther(arr){
  //your code here
  for (var i = 1; i < arr.length;i++){
      arr.splice(i,1);
  }
  return arr;
}

// method 5 : by using pop() method
function removeEveryOther(arr) {
  let result = [arr[0]];
  while (arr.length > 1) {
    arr.pop();
    result.unshift(arr.pop());
  }
  return result;
}
/*
Explanation:

We start with a result array containing the first element of the original array (arr[0]).

Then, we enter a loop that runs while the length of the original array is greater than 1.

In each iteration of the loop, we remove the last element of the original array using the pop() method.

We then remove the next element (which is the one we want to remove) and add the removed element to the beginning of the result array using the unshift() method.

After the loop has finished, we return the result array.
*/

// method 6 : by using push() method
function removeEveryOther(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

/*
Explanation:

We start with an empty result array.
  
Then, we enter a loop that runs from the first element of the original array to the last element, incrementing by 2 in each iteration (i += 2).
  
In each iteration of the loop, we add the element at the current index to the end of the result array using the push() method.
  
After the loop has finished, we return the result array.
*/

// method 7 : by using shift() method
function removeEveryOther(arr) {
  let result = [arr[0]];
  while (arr.length > 1) {
    arr.shift();
    result.push(arr.shift());
  }
  return result;
}

/*
Explanation:

We start with a result array containing the first element of the original array (arr[0]).

Then, we enter a loop that runs while the length of the original array is greater than 1.

In each iteration of the loop, we remove the first element of the original array using the shift() method.

We then remove the next element (which is the one we want to remove) and add the removed element to the end of the result array using the push() method.

After the loop has finished, we return the result array.
*/

// method 8 : by using slice() method  
function removeEveryOther(arr) {
  let result = arr.slice(0, 1); // start with the first element

  for (let i = 2; i <= arr.length; i += 2) {
    result = result.concat(arr.slice(i - 1, i)); // add every second element to the result
  }

  return result;
}

/*
In this implementation, we start with the first element of the array and then use the slice() method to add every second element to the result array. The slice() method takes two arguments: the start index and the end index (which is not included in the resulting array). So, we use i - 1 as the start index and i as the end index to select every second element. Finally, we concatenate the selected element to the result array using the concat() method.

*/

*/