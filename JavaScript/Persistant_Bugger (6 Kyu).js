/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

// let num = 999

// function persistence(num) {

//     // first I will seperate the digit here with method.
//     // let digit = num.toString().split('');
//     // let mapD = digit.map(Number)
//     // console.log(mapD)

//     // // Now, multiply that seperated digits.
//     // let multiplyD = mapD.reduce((acc, curr) => acc * curr, 1)
//     // console.log(multiplyD)

//     // helper function... (Made helper function that will do all the above job...)
//     function getProductofDigits(n) {
//         let digit = num.toString().split('').map(Number)
//         return digit.reduce((acc, curr) => acc * curr, 1)
//     }

//     // Now, Here I will do something that the resulted *multiplyD* answers will continue until *multiplyD* is one digit. (for example :999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
//     let product = getProductofDigits(num)
//     let count = 0;

//     while (product >= 10) {
//         product = getProductofDigits(product)
//         count++;
//     }

//     // return product;
//     console.log(product)
// }

// // Example usage
// persistence(1234);

function persistence(num) {
    let count = 0; // Counter to track the number of iterations

    function getProductOfDigits(n) {
        // Convert the number to a string, split it into an array of digits,
        // convert each digit to a number, and multiply them together
        const digits = n.toString().split('').map(Number);
        return digits.reduce((acc, curr) => acc * curr, 1);
    }

    // Keep multiplying the digits until the product becomes a single digit
    let product = num;
    while (product >= 10) {
        product = getProductOfDigits(product);
        count++;
    }

    return count;
}

persistence(232)