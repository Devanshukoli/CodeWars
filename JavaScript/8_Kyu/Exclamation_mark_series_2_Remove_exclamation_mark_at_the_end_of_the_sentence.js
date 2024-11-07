/*
Description:
Remove all exclamation marks from the end of sentence.

Examples
"Hi!"     ---> "Hi"
"Hi!!!"   ---> "Hi"
"!Hi"     ---> "!Hi"
"!Hi!"    ---> "!Hi"
"Hi! Hi!" ---> "Hi! Hi"
"Hi"      ---> "Hi"
*/

function remove(str) {
    while (str.endsWith('!')) {
        str = str.slice(0, -1);
    }
    return str
}


// Other methods.
const remove = s => s.replace(/!+$/, '');