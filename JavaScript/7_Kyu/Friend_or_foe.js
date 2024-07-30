/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.

*/

function friend(frnds) {
    const result = []

    for (let i = 0; i < frnds; i++) {
        if (frnds[i].length == 4) {
            result = frnds[i]
        }
    }
    return result
}

// Other methods.
function friend(frnds) {
    return frnds.filter(n => n.length === 4)
}
