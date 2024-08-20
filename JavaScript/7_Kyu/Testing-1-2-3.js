/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

function number(arr) {

    // find out the length of the array ( what we called like value length of something in it. like how many values in that! you got my point right!!)

    // Then I think i can use to iterate over given the length of the array. You see, Since, I find it how long should I use loop for, so I directly push it in the array, so it's like result is in the array form, right?
}

function number(arr) {
    // we use map function to iterate over each element..., For each element we also get it's line.., now we do `index + 1` to start with 1 number and then copy the exact element using ``...
    return arr.map((line, index) => `${index + 1}: ${line}`);
}