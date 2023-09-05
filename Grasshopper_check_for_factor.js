/*
This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.

About factors
Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
You can use the mod operator (%) in most languages to check for a remainder
For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.
*/

// My Try code
let base = Number(prompt('Enter base : '))
let factor = Number(prompt('Enter factor : '))

function checkForFactor(base, factor) {
  if (base > 0 && factor > 0 ) {
    // return base % factor === 0
    return !(base % factor)
  } else {
    console.log('Please Enter positive number for `base` and `factor`.')
  }
}

console.log(checkForFactor(base, factor))

// Method 1 : One liner code
// const checkForFactor = (base, factor) => !(base % factor);
