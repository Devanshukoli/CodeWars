/** 
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
*/

const days = parseInt(prompt('Enter days: '), 10);
// the cost of renting a car for 1 day is $40
let costPerDay = 40;
ṇ
const rentalCost = (days) => {
  totalCost = costPerDay * days
// here the order in which it applied the discount is what metters, because if take days >= 3 first then it will not appliy discount for days >= 7 faile .
  // if (days >= 3) {
  //   totalCost -= 20
  // } else if (days >= 7) {
  //   totalCost -= 50
  // }
  // return totalCost
// }

  if (days >= 7) {ṇ
    totalCost -= 50
  } else if (days >= 3) {
    totalCost -= 20
  }
  return totalCost
}

console.log('Cost:', rentalCost(days));

// method 1 : one liner code
function rentalCarCost(d) {
  return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
}