/*
I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

Example
n = 3, so I expect a 3x3 square back just like below as a string:

+++
+++
+++

*/

function generateShape(int) {
    if (int < 1 || int > 50 || !Number.isInteger(int)) {
        return "Invalid input: Integer must be between 1 and 50."
    }

    const row = "+".repeat(int);
    let square = "";
    for (let i = 0; i < int; i++) {
        square += row + "\n";
    }
    return square.trim();
}

// Other methods...
function generateShape(n) {
    return ("+".repeat(n) + "\n").repeat(n).trim()
}