/** 
  Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const p1 = prompt('Enter 1st person move : ')
const p2 = prompt('Enter 2nd person move : ')

// const rps = (p1, p2) => {
//   if(p1 === 'scissors' && p2 === 'paper') {
//     return 'Player 1 won!';
//   } else if(p1 === 'rock' && p2 === 'scissors') {
//     return 'Player 1 won!';
//   } else if(p1 === 'paper' && p2 === 'rock') {
//     return 'Player 1 won!';
//   } else if(p2 === 'scissors' && p1 === 'paper') {
//     return 'Player 2 won!';
//   } else if(p2 === 'rock' && p1 === 'scissors') {
//     return 'Player 2 won!';
//   } else if(p2 === 'paper' && p1 === 'rock') {
//     return 'Player 2 won!';
//   } else {
//     return 'Draw!';
//   }
// }


// method 1
// const rps = (p1, p2) => {
//   if (p1 === p2) return 'Draw!'
//   var rock, paper, scissors;
//   var rules = {rock:'paper', paper:'scissors', scissors: 'rock'}
//   if ( p2 === rules[p1]) {
//     return 'Player 2 won!'
//   } else return 'Player 1 won!'
// }

// method 2
// const rps = (p1, p2) => {
//   if(p1 === p2) {
//     return 'Draw!'
//   }; 
//   // return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
//   return  `Player ${/rockpaper|paperscissors|scissorsrock/.test(p1+p2)? 2 : 1} won!`;
// }

// method 3
const rps = ( p1, p2) => (p1 == p2) ? 'Draw!' : `Player ${/rp|ps|sr/.test(p1[0]+p2[0]) ? 2 : 1 } won!`;
console.log(rps(p1, p2))