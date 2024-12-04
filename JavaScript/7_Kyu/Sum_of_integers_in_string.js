/*
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.

*/

function sumOfIntegersInString(str) {
    // so i can see here, that in the string, they have sneak a numbers or digits you can say in it.

    // now first i have to seperate the number from the string, then calculate it. simultenously as well.
    const matches = str.match(/\d+/g)
    let sum = 0;
    if (matches) {
        for (let i = 0; i < matches.length; i++) {
            sum += Number(matches[i])
        }
    }

    return sum;
}