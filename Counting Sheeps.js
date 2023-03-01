/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

// a fn that counts the num of sheep
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  // console.log(arrayOfSheep)

  // traverse throuh array : for finding the sheep would liek to use for loop
  // now here i would like to initialize a var for every time i encounter a sheep
  let sheepEncounter = 0;

  for (let sheep = 0; sheep < arrayOfSheep.length; sheep++) {
    // finding a sheep - condition if(sheep) = yey OR or if not(!sheep) = get the hell out
    if (arrayOfSheep[sheep] === true) {
      // console.log("we funcking find sheepk")
      sheepEncounter++;
    }
    /*
    else {
      console.log('')
    }
    */
  }
  // now I would like to return the sheepEncounter
  return sheepEncounter
}

let arrayOfSheep = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]

// now just took a var for printing the sheep
let findSheep = countSheeps(arrayOfSheep)
console.log(findSheep)

// now here I am putting some of the best prcatices that you can do like ONE-LINE Coding.
/*
function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(item => item === true).length
}

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter(Boolean).length
}

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce((acc, cur) => acc + cur, 0)
}
one line code.
let countSheeps = x => x.filter( s => s ).length;
  */
