/*
There was a test in your class and you passed it. Congratulations!

But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return `true` if you're better, `else` false!

*/

let points = [100, 40, 34, 57, 29, 72, 57, 99];
let myPoints = 78;

function betterThanAverage(points, myPoints) {
    let sum = 0;
    for (let i = 0; i < points.length; i++) {
        sum += points[i];
    }
    let avg = sum / points.length;
    return myPoints > avg;
}

console.log(betterThanAverage(points, myPoints)); // Output: true

// second method.
function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
}