/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

*/

function incrementString(str) {
    // using regular expression to check the number in given string...
    const regex = /^(.*?)(\d*)$/;
    const parts = str.match(regex);
    const prefix = parts[1]
    let number = parts[2];

    // if there is no number in str.
    if (number === '') {
        return str + '1';
    }

    const numberLength = number.length;
    const incrementedNumber = (parseInt(number, 10) + 1).toString();

    const paddedNumber = incrementedNumber.padStart(numberLength, '0')

    return prefix + paddedNumber;
}

console.log(incrementString('foobar009'))
console.log(incrementString('foobar'))