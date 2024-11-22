/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

var uniqueInOrder = function (iterable) {
    // so basically loop through this sequence, store the elements one by one and reject the occurance. one the whole sequence is done, then return them with array.
    let result = [];
    let lastElement = null;

    for (let i = 0; i < iterable.length; i++) {
        const currentElement = iterable[i];

        // If the current element is different from the last on added, add it to the result array and update lastElement;
        if (currentElement !== lastElement) {
            result.push(currentElement);
            lastElement = currentElement;
        }
    }
    return result;
}

// Other methods...
var uniqueInOrder = function (iterable) {
    return [...iterable].filter((a, i) => a !== iterable[i - 1])
}
