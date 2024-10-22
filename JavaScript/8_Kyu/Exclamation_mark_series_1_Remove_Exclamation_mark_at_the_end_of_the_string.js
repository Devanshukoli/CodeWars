/*

Description:
Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi!!"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"

*/

function removeExlcamationMark(str) {
    return str.endsWith('!') ? str.slice(0, -1) : str;
}

// Other methods..
function removeExlcamationMark(str) {
    return str.replace(/!$/, '');
}  