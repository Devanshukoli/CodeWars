/*

Description:
Remove n exclamation marks in the sentence from left to right. n is positive integer.

Examples
remove("Hi!",1) === "Hi"
remove("Hi!",100) === "Hi"
remove("Hi!!!",1) === "Hi!!"
remove("Hi!!!",100) === "Hi"
remove("!Hi",1) === "Hi"
remove("!Hi!",1) === "Hi!"
remove("!Hi!",100) === "Hi"
remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

*/

function remove(s, n) {
    // so I have to remove '!' mark from the given string. from left to right.

    // in which I have remote 'n' given times.

    const parts = s.split('!');

    const exclamationsToRemove = Math.min(n, parts.length - 1);

    return parts.slice(0, exclamationsToRemove).join('') + parts.slice(exclamationsToRemove).join('!');
}

// Other methods...
function remove(s, n) {
    for (let i = 0; i < n; i++) {
        s = s.replace(/!/, '')
        if (!s.includes('!')) break;
    }

    return s;
}