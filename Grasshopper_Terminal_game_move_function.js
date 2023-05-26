/** 
  Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15
*/

// My Try code:
const curr = Number(prompt('Enter the current position'))
const diceNum = Number(prompt('Enter the Dice number position'))

// function move(curr, diceNum) {
//   let result = 0
//   result = curr + (diceNum * 2)
//   return result
// }
// console.log(move(curr, diceNum))

// method 1 : one liner code

const move = (curr, diceNum) => curr + diceNum * 2
console.log(move(curr, diceNum))

// methdo 2 : ?
const move=(_,$,_$)=>(_+[_$=-~[],++_$][-~[]]*$)