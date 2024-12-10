/*
Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]

*/

function largest(n, arr) {
    
    if (n > arr.length) {
        return arr.slice();
    }

    // we sort the array in descending order. ( arr.sort((a, b) => a - b))
    arr.sort((a, b) => a - b);

    // now we just grab the elements, and how many we have n for that. hmm. but now i'm wondering doesn't i can just use slice() for it. 
    return arr.slice(-n);

}

// Other methods...
function largest(n, array) {
    return array.sort((a, b) => b - a).slice(0, n).reverse()
}