/** 
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/
// My Try code :
const str = prompt('Enter string:')
/*
function order(str) {
  // first if we don't get string then we return empty/null
  if(str.length === 0) return ''

  // now for sorting first we split the string
  const words = str.split(' ')
  const sortedWords = []

  // now for iterating over the splited array we use loop
  for(let i = 1; i<= words.length; i++){
  // now loop through the `words`
    for(const word of words){
      // if the `word` is in the words then 
      if(word.includes(i)) {
        sortedWords.push(word)
        break;
      }
    }
  }
  // now join the sorted words that are removed from the split() function.
  return sortedWords.join(' ')
}
*/

// method 1 : using sort() function
function order(str) {
  if (str === '') return '';

  const words = str.split(' ');

  words.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/));
    const numB = parseInt(b.match(/\d+/));
    return numA - numB;
  });

  return words.join(' ');
}
console.log(order(str))

