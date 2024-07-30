/** 
Create a function that answers the question "Are you playing the banjo?".
If your name starts with the letter "R" or lowercase "r", you are playing the banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.
*/

// My Try code
const promp = prompt("Enter the num : ")

let areYouPlayingBanjo = (promp) => {
  if(promp.charAt(0) == 'R' || promp.charAt(0) == 'r') {
    console.log(promp + ' plays banjo')
  } else {
    console.log(promp + ' does not play banjo')
  }
}

areYouPlayingBanjo(promp)

// method 1 
function areYouPlayingBanjo(name) {
  return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

// method 2 
function areYouPlayingBanjo(name) {
  return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
}

// method 3
const areYouPlayingBanjo = n => n+(n.match(/^r/i) ? " plays banjo" : " does not play banjo");

// method 4
const areYouPlayingBanjo = name => name.startsWith('R') || name.startsWith('r') ? `${name} plays banjo` : `${name} does not play