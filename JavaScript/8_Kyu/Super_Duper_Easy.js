/*
Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

*/

function multiplyAndIncrease(x) {
    if (typeof x !== 'number') {
        return 'Error'
    }

    let mulVal = x * 50;
    let result = mulVal + 6;
    return result
}

console.log(multiplyAndIncrease(5))

// Other methods.
const problem = (x) => 'string' ? 'Error' : x * 50 + 6;