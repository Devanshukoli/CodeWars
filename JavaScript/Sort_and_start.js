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


    //     I understand your confusion.The reason why '' doesn't add after the last character 'n' is because .join(' *** ') only adds the specified separator ('') between elements in the array, not after the last element.

    // In other words, it adds '***' between each pair of adjacent elements but not after the last element.That's the default behavior of the .join() method in JavaScript.

}

twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])


// Method 1 : One liner code.
let twoSort = (s) => s.sort()[0].split('').join('***')

// Method 2 : using spread oprator and one liner code combination.
let twoSort = (s) => [...s.sort()[0]].join('***')

// Method 3 : using for loop for adding '***' in the string.
function twoSort(s) {
    var last = s.sort()[0];
    var a = last[0];
    for (var i = 1; i < last.length; i++) {
        a += "***" + last[i];
    }
    return a;
}

// Method 4 : Using regex 
function twoSort(q) {
    let a = q.sort();
    a = a[0].replace(/(.)(?=.{1,}$)/g, '$1***');
    return a;
}

// Mehtod 5 : using reduce() method for sorting.
function twoSort(array) {
    return [...array.reduce((min, str) => min < str ? min : str)].join("***");
}