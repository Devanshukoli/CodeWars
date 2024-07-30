/*
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"

*/

function peopleWithAgeDrink(age) {
    if (age < 14) {
    //    return 'drink toddy'
       console.log('drink toddy')
    } else if (age < 18) {
        // return 'drink coke'
        console.log('drink coke')
    } else if (age < 21) {
        // return 'drink beer'
        console.log('drink beer')
    } else {
        // return 'drink whisky'
        console.log('drink whisky')
    }
    
}

peopleWithAgeDrink(45)

// other methods
const peopleWithAgeDrink = (age) =>
    age < 14 ? "drink toddy" :
        age < 18 ? "drink coke" :
            age < 21 ? "drink beer" : "drink whisky"
            