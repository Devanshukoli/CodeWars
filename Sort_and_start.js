/*

You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

The returned value must be a string, and have "***" between each of its letters.

You should not remove or add elements from/to the array.
*/

// My Try code.

function twoSort(s) {
    let sorted = s.sort()
    
    let splitedFirstElement = sorted[0].split('')
    console.log('splitedfirstElement : ', splitedFirstElement)

    // let ans = splitedFirstElement.map((x) => x.concat('***'))
    // console.log('ans : ', ans)

    let ans = splitedFirstElement.join('***')
    console.log('ans ', ans)
   
}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])


// function twoSort(s) {
//     let sorted = s.sort();
//     let firstWord = sorted[0];

//     // Split the first word into an array of characters
//     let charArray = firstWord.split('');

//     // Join the characters with '***' between them
//     let ans = charArray.join('***');

//     return ans;
// }

// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));
