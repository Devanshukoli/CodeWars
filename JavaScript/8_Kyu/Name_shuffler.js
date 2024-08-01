/*
Write a function that returns a string in which firstname is swapped with last name.

Example(Input --> Output)

"john McClane" --> "McClane john"

*/

function nameShuffler(str) {
    return str.split(' ').reverse().join(' ')
}

console.log(nameShuffler('Devanshu Koli'))


// Other methods.
function nameSuffle(str) {
    var name = str.split(' ');
    return name[1] + ' ' + name[0];
}

const nameShuffler = str =>
    str.replace(/([^\s]+) ([^\s]+)/, `$2 $1`);

function nameShuffler(str) {
    [firstName, lastName] = str.split(" ");
    return `${lastName} ${firstName}`;
}
