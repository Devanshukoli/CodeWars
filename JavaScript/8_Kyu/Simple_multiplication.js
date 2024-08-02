/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

*/

function simpleMultiply(num) {
    if (num % 2 === 0) {
        return num * 8;
    } else {
        return  num * 9
    }
}




// Other methods.
const simpleMultiply = (num) => num % 2 === 0 ? num * 8 : num * 9;



const simpleMultiply = (num) => num * (num % 2 ? 9 : 8);