/** 
  The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members in which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input : 
Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Output :
The output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

Example
input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
  
*/

// My Try code 
let promp = prompt('Enter the array data in the pair of first value is age and second is handicap : ')

let inputData = JSON.parse(promp)

const seniorOrOpen = (inputData) => {
  let result = []
  for (let i = 0; i < inputData.length; i++) {
    let age = inputData[i][0]
    let handicap = inputData[i][1]
      (age >= 55 && handicap > 7) ? result.push('Senior') : result.push('Open')
  }
  return result
}

console.log(seniorOrOpen(inputData))

// method 1:
function openOrSenior(data) {
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

// method 2:
function openOrSenior(data) {
  var result = [];
  data.forEach(function (member) {
    if (member[0] >= 55 && member[1] > 7) {
      result.push('Senior');
    } else {
      result.push('Open');
    }
  })
  return result;
}

// method 3 : 
function openOrSenior(data) {
  function determineMembership(member) {
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}

// method 4 : 
const openOrSenior = (members) => members.map(([age, handicap]) => (age >= 55) && (handicap > 7) ? 'Senior' : 'Open'


// method 5 : 
const Category = {
  Open: 'Open',
  Senior: 'Senior',
};

function openOrSenior(data) {
  return data.map(([age, handicap]) => {
    if (age >= 55 && handicap > 7) {
      return Category.Senior;
    }

    return Category.Open;
  });
}