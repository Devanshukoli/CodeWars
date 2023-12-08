/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

// My Try code.
const flower1 = Number(prompt('Enter flower1 petals : '))
const flower2 = Number(prompt('Enter flower2 petals : '))

function loveExist(flower1, flower2) {
    if ((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0)) {
        console.log('Love Exist')
    } else {
        console.log('Love Does not Exist.')
    }
}

loveExist(flower1, flower2)

// method 1 :  using just simple comparison.
function loveExist(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2
}

// method 2 : using + (like sum of both flowr petails and then with modulo with 2 should be 1)
function loveExist(flower1, flower2) {
    return (flower1 + flower2) % 2 === 1
}