/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

*/

const countSheep = (num) => {
    let result = ''
    for (let i = 0; i < num.length; i++) {
        result = `${i} sheep...`
    }
    return result
}

console.log(countSheep(3))


// Other methods
countSheep = n => [...Array(n).keys()].map(x => `${x + 1} sheep...`).join``
