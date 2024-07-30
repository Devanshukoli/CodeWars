/*
complete the function that takes two integers (a, b where b>a) and return an array of all integers between the input parameters, including them.
for example,
a = 1
b = 4
--> [1, 2, 3, 4]
*/

function between(a, b) {
    let result = [];
    for (let i = a; i <= b; i++) {
        result.push(i)
    }
    console.log(result)
}

between(1, 4)