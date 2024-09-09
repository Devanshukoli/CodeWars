/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

Some cases:
[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

*/

function multipleOfIndex(arr) {
    // first loop through array with map function.
    let looping = arr.map()

    // then use % === 0 to find out if they are divisible, then seperate the ones are that divisiable.

    // then gather them as single array, and then return it.
}

// So, we use filter() method instead of map(), because it automatically creates and return a new array with the elements that satisfy our conditions, so we don't need to manually gather them.

function multipleOfIndex(arr) {
    return arr.filter((num, index) =>
        index === 0 ? num === 0 : num % index === 0
    );
}


// Other methods...
function multipleOfIndex(arr) {
    return arr.filter((x, i) => x == 0 || x % i === 0)
}