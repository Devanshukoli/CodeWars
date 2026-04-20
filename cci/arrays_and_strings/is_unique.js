// implement algorithm to determine if a string has all unique characters.

// brute force , time complextiy : n2 (n square)
// function isUniqueStr(str) {
//     let splitStr = str.split('')

//     for(let i = 0; i < splitStr.length; i++) {
//         for(let j = i + 1; j < splitStr.length; j++) {
//             if (splitStr[i] === splitStr[j]) {
//                 return false
//             }
//         }
//     }
//     return true
// }


// console.log(isUniqueStr('hemant'))




// here, we bring the time complexity to O(n) only
function isUniqueStr(str) {
    let seenChars = new Set();

    for(let char of str.toLowerCase()) {
        if (seenChars.has(char)) return false

        seenChars.add(char)
    }
    return true
}

console.log(isUniqueStr('call'))