/*
Clock shows `h` hours, `m` minutes and `s` seconds after midnight.

Your task is to write a function which returns the time since midnight in miliseconds.

Examples : 
h=0, m=1, s=1
result=61000
*/

// My try code.
// Assuming I have given hours and minutes and seconds...
function conversionToMiliseconds(h, m, s) {
    const miliseconds = ((h * 60 * 60) + (m * 60) + s) * 1000
    return miliseconds
}