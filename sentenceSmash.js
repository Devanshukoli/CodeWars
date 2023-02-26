// Sentence Smash

// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// Two ways which can solve this

// 1st one :

words = ['nature', 'fire', 23, , undefined]
function smash(words) {
  // using .join() method
  // it is the string-conversion method, which basically take all the string/object in the array and concatenate them and return new STRING.

  
  return words.length > 0 ? words.reduce((prev, el) => prev + " " + el) : "";
  // return words.join(" ")  
}

console.log(smash(words))
// 2nd way
words = ['nature', 'fire', 23, , undefined]
const smash = words => words.join('* ');
console.log(words)
