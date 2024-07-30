/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/

function abbrevNum(name) {
    const word = name.split(' ')
    return (word[0][0] + '.' + word[1][0]).toUpperCase()
}

// Other methods...
function abbrevName(name) {

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}

const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()