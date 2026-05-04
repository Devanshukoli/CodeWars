/*
Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

Example:

['John', 'Smith'], 'Phoenix', 'Arizona'
This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!


*/

function sayHello(name, city, state) {
  let cName = ''
  for (let i = 0; i < name.length; i++) {
    cName += name[i] + ' '
  }

  return `${cName.slice(0, -1)}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))

// second way
function sayHello2(name, city, state) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}

console.log(sayHello2(['John', 'Smith'], 'Phoenix', 'Arizona'))