/*
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
Go challenge Build Tower Advanced once you have finished this :)

*/

// function buildTowers(nFloors) {
    // so, there is this pattern I notice in it's first glance... in each floor (regardless odd or even number), the stars in it are in odd format...

    // so what i'm gonna do is, make loop out of it (for loop) that will act as starting thing for looping thruogh given number (i mean floor here), and in that second loop that will print star in accordance with given floor number and print odd number of starts in each step (floor i mean)

    // there is also the case that it shaped as pyramid.

    // not to tell but what about edge cases such as 0 floor or -ve negative numbers. ( well i can do this by starting if-else or something similar!!)
    
// }

function buildTowers(nFloors) {
    const tower = [];
    for (let i = 0; i < nFloors; i++) {
        const spaces = ' '.repeat(nFloors - i - 1);
        const stars = '*'.repeat(2 * i + 1);
        tower.push(spaces + stars + spaces)
    }
    return tower
}

console.log(buildTowers(4))