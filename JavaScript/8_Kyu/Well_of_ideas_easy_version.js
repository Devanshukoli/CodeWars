/*

For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

*/

function well(x) {
    // first we find how many times the 'good' index comes in the given array
    let goodWordCount = x.filter(idea => idea === 'good').length;

    // then we simply use if-else to determine!
    if (goodWordCount === 0) {
        return 'Fail!'
    } else if (goodWordCount > 2) {
        return 'I smell a series!'
    } else {
        return 'Publish!'
    }
}


// Other methods...
function well(x) {
    switch (x.filter(i => i === 'good').length) {
        case 0:
            return 'Fail!'
        case 1:
        case 2:
            return 'Publish!'
        default:
            return 'I smell a series!'
    }
}