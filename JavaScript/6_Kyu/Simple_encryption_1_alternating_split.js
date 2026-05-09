/*
Description:
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

*/

function encrypt(text, n) {
  // so first split the text
  // Then loop through it.
  // in loop use the indexAt(i => i % 2 === 0) to navigate the odd based index. collect them or store them. 
  // Then concat them with remaing indexes..
  if (n <= 0 || text === '') {
    return text
  }

  let result = text
  for(let i = 0; i < text.length; i++) {
    let odd = '';
    let even = '';
    for(let j = 0; j < result.length; j++) {
      if (j % 2 === 0) {
        even += result[j]
      } else {
        odd += result[j]
      }
    }
    result = odd + even;
  }
  return result
}

function decrypt(encryptedText, n) {
  // in decrypt just reverse the process.
}
