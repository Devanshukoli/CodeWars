/*
You will be given a string featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'. The string will start with the cat, and end with the mouse.

You need to find out if the cat can catch the mouse from its current position. The cat can jump over at most three characters. So:

"C.....m" returns "Escaped!" <-- more than three characters between

"C...m" returns "Caught!" <-- as there are three characters between the two, the cat can jump.

*/

function catMouse(x) {
    // so basically I need to count the index between character 'C' and 'm'. if it's greater than 3 (the index) then return 'Escaped! otherwise 'Caught!'.

    let catIndex = x.indexOf('C')
    let mouseIndex = x.indexOf('m')
    let distance = mouseIndex - catIndex - 1;

    if (distance <= 3) {
        return 'Caught!'
    } else {
        return 'Escaped!'
    }
}

// Other methods..
function catMouse(x) {
    return x.length <= 5 ? 'Caught!' : 'Escaped!'
}