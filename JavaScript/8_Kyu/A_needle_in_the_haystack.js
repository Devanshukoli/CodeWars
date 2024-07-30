/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

*/

// My Try code.
let array = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]
function findNeedle(array) {
    // let ans = array.indexOf('needle')
    // return 'found the needle at position ' + ans
    return 'found the needle at position ' + array.indexOf('needle')
}

console.log(findNeedle(array))

// method 1 : one liner code
const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;

// method 2 : using for loop
function findNeedle(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 'needle')
            return 'found the needle at position ' + i;
    }
}