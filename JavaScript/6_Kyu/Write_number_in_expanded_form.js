/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!
*/

// function expandedForm(num) {
//     // Here, given from example; I know for the fact that things are like bisecting numbers
//     // like 12 here, 10 + 2..

//     // now, if I go through them like looping.. then I have to take consider of their index position.. and if find number or digit in there then seperate them and store it...

// }

function expandedForm(num) {
    return num
    .toString()
    .split('')
    .reverse()
    .map((digit, index) => digit * Math.pow(10, index))
    .filter(value => value > 0)
    .reverse()
    .join(' + ')
}

console.log(expandedForm(70304))