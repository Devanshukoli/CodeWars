/*

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!

*/

function solve(s) {
    // Count uppercase and lowercase letters
    let uppercaseCount = 0;
    let lowercaseCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 'A' && s[i] <= 'Z') {
            uppercaseCount++;
        } else {
            lowercaseCount++;
        }
    }

    return uppercaseCount > lowercaseCount ? s.toUpperCase() : s.toLowerCase();
}

console.log(solve("coDe"))
console.log(solve("DOdE"))