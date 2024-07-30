/** 
  Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'

*/

var owner = "devanshu"
const name = prompt("enter name : ")

function greet(name, owner) {
  if (name != owner) {
    console.log('Hello guest')
  } else {
    console.log('Hello boss')
  }
}

greet(name, owner)



// // method 1
//   const greet = (name, owner) => {
//     return (name != owner) ? 'Hello guest' : 'Hello boss'
//   }

// // method 2
// function greet (name, owner) {
//   return `Hello ${name==owner?'boss':'guest'}`
// }