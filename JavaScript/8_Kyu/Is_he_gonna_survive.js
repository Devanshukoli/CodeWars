/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry... Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)

*/

function hero(bullets, dragons) {

    // if go by the statments, so like, we need minimum 2 bullets to defeat a dragon, so, i can assume here, (dragon = 2 - bullets) this kind of general equation I arrived into. if the given numbers of bullets doesnt follow this, then he will not survive!! that's for sure.

    return bullets >= dragons * 2;
}

console.log(hero(10, 5));  // true (10 bullets is enough for 5 dragons)
console.log(hero(7, 4));   // false (7 bullets is not enough for 4 dragons)
console.log(hero(4, 2));   // true (4 bullets is exactly enough for 2 dragons)
console.log(hero(100, 40)); // true (100 bullets is more than enough for 40 dragons)
console.log(hero(1500, 751)); // false (1500 bullets is not enough for 751 dragons)