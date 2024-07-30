/** 
Trolls are attacking your comment section!
- A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
- Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/

// My Try Code:
// function removeVowel() {
//   const str = String(prompt('Enter the string: '));
//   const result = str.replace(/[aeiouAEIOU]+/g, '');
//   return result;
// }

// console.log(removeVowel());

// method 1: regex improvment
const removeVowel = () => {
  const str = String(prompt('Enter string:'))
  if(str.length === 0) return 0
  const result = str.replace(/[aeiou]/gi,'')
  return result
}
console.log(removeVowel());

/** 
BREAKDOWN OF REGEX 
/: The regular expression pattern is enclosed within forward slashes to delimit it.
[aeiou]: This character class matches any single character that is one of the lowercase vowels 'a', 'e', 'i', 'o', or 'u'.
g: The g flag stands for "global" and is used to perform a global search. It ensures that all occurrences of the pattern in the string are replaced, not just the first one.
i: The i flag stands for "ignore case" and is used to perform a case-insensitive search. It allows the regular expression to match both lowercase and uppercase vowels.

*/