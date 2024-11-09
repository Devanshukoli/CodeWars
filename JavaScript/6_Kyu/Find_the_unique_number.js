/*

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

*/

function findUniq(arr) {
    // so basically first, map through. and then find the odd one.

    // Now how should I found the odd one. one way is to find the matching pairs, and if the last one left out. Its our guy.

    const frequencyCounter = {};

    // count the occurance of each number
    for (const num of arr) {
        frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
    }

    // find the number with a frequncy of 1;
    for (const num in frequencyCounter) {
        if (frequencyCounter[num] === 1) {
            return parseFloat(num);
        }
    }
}

// Other methods...
function findUniq(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] == arr[1] ? arr.pop() : arr[0]
}

function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}