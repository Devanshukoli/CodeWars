/*
Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

*/

function include(arr, item) {
    // first we loop through array, while we at it, we also compare our item with that array elements. if we have match. then bingo!!! that item is in the list.

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true
        }
    }
    return false
}

// Other methods...
function include(arr, item) {
    return arr.includes(item);
}

function include(arr, item) {
    return arr.indexOf(item) !== -1;
}